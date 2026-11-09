/**
 * La prensa en pantalla (D28): al cerrar cada caso, el periódico de la mañana siguiente cuenta cómo lo
 * resolvieron Gismera y Chiqui, con su foto. Es lo que hace famosas a las hermanas y la excusa por
 * la que el cliente del caso siguiente las llama a ellas: la ficha de ese caso empieza con el
 * recorte. Todos los periódicos quedan en la Hemeroteca. Los datos y su registro están en
 * js/prensa.js.
 */
(function (DC) {
  "use strict";

  const AGENCIA = "agencia";

  function el(...args) {
    return DC.ui.el(...args);
  }

  /** Campo en claro (periódico, fecha, edición) con la variante que toca según el orden de juego (D30). */
  function plano(entrada, campo) {
    return DC.partida.variante(entrada[campo], entrada.trasExpediente);
  }

  /** Campo codificado, descifrado, con la variante que toca según el orden de juego (D30). */
  function texto(entrada, campo) {
    const valor = plano(entrada, campo);
    return valor ? DC.decodificar(AGENCIA, valor) : "";
  }

  /** Foto de prensa; si el fichero aún no existe, un hueco con el aviso de foto pendiente. */
  function foto(entrada) {
    const hueco = el("div.periodico-hueco", { hidden: true }, el("span", { text: DC.textos.prensa.fotoPendiente }));
    const img = el("img", { src: DC.carpetaAgencia + entrada.imagen, alt: "", decoding: "async" });
    img.addEventListener("error", () => { img.hidden = true; hueco.hidden = false; });
    return [img, hueco];
  }

  Object.assign(DC.prensa, {
    /**
     * Portada del periódico: cabecera, titular, entradilla, foto de las hermanas y la nota en columnas.
     * @param {object} entrada
     * @returns {HTMLElement}
     */
    pagina(entrada) {
      const d = (campo) => texto(entrada, campo);
      return el("article.periodico", null,
        el("header.periodico-cabecera", null,
          el("p.periodico-edicion", null, el("span", { text: plano(entrada, "edicion") }), el("span", { text: plano(entrada, "fecha") })),
          el("h2.periodico-nombre", { text: plano(entrada, "periodico") }),
          el("p.periodico-precio", { text: DC.textos.prensa.precio })),
        el("h3.periodico-titular", { text: d("titular") }),
        el("p.periodico-entradilla", { text: d("entradilla") }),
        el("figure.periodico-foto", null, foto(entrada), el("figcaption", { text: d("pie") })),
        el("div.periodico-columnas", null, DC.ui.parrafos(d("texto"))));
    },

    /**
     * Recorte con el que empieza un caso: cabecera y titular del periódico anterior y cómo llegó el
     * encargo a las hermanas.
     * @param {object} entrada Periódico anterior.
     * @returns {HTMLElement}
     */
    recorte(entrada) {
      const llamada = plano(entrada, "llamada");
      const t = DC.textos.prensa;
      return el("section.dossier-seccion prensa-recorte", null,
        el("h2.dossier-rotulo", { text: t.comoLlego }),
        el("div.recorte-papel", null,
          el("figure.recorte-foto", null, foto(entrada)),
          el("div", null,
            el("p.recorte-periodico", { text: plano(entrada, "periodico") + " · " + plano(entrada, "fecha") }),
            el("p.recorte-titular", { text: texto(entrada, "titular") }))),
        llamada ? DC.ui.parrafos(DC.decodificar(AGENCIA, llamada), "prensa-llamada") : null);
    }
  });

  /** Recorte pequeño de un periódico ya publicado: cabecera, fecha, foto y titular. */
  function fichaRecorte(entrada, indice, abrir) {
    const ficha = DC.ficha(entrada.trasExpediente) || { numero: entrada.trasExpediente, titulo: "" };
    return DC.ui.boton(el("div.mini-periodico", null,
      el("p.mini-cabecera", { text: plano(entrada, "periodico") }),
      el("p.mini-fecha", { text: plano(entrada, "fecha") }),
      el("figure.mini-foto", null, foto(entrada)),
      el("p.mini-titular", { text: texto(entrada, "titular") }),
      el("p.mini-caso", { text: DC.formato.plantilla(DC.textos.prensa.trasCaso, ficha) })),
    () => abrir(entrada), "hemeroteca-ficha", { style: "--giro:" + ((indice % 3) - 1) * 1.2 + "deg", "aria-label": plano(entrada, "periodico"),
      dataset: { caso: entrada.trasExpediente } });
  }

  /** Hueco de un periódico que aún no ha salido. */
  function fichaPendiente(entrada) {
    const ficha = DC.ficha(entrada.trasExpediente) || { numero: entrada.trasExpediente };
    return el("div.hemeroteca-ficha hemeroteca-pendiente", null,
      el("p.mini-caso", { text: "Nº " + ficha.numero }),
      el("p.mini-pendiente", { text: DC.textos.prensa.sinSalir }));
  }

  /**
   * Hemeroteca: los recortes en pequeño sobre la mesa (los que aún no han salido, como hueco); al
   * pinchar uno, el periódico entero aparece debajo y la página baja hasta él. Mientras se lee, un
   * botón flotante devuelve a los recortes para elegir otro. `hemeroteca/<id>` lo abre directamente.
   * @returns {Function} Limpia el aviso de desplazamiento al salir.
   */
  function hemeroteca(vista, params) {
    const t = DC.textos.prensa;
    const publicados = DC.prensa.publicados();
    const lectura = el("div.hemeroteca-lectura", { hidden: true });
    const mesa = el("div.hemeroteca-mesa", null, DC.prensa.todos().map((e, i) =>
      (publicados.indexOf(e) !== -1 ? fichaRecorte(e, i, abrir) : fichaPendiente(e))));
    const subir = DC.ui.boton([DC.ui.icono("volver"), el("span", { text: t.otroPeriodico })], () => {
      mesa.scrollIntoView({ behavior: DC.ui.reducirMovimiento() ? "auto" : "smooth", block: "start" });
    }, "hemeroteca-subir", { hidden: true });

    /** Pone el periódico elegido debajo de los recortes y baja hasta él. */
    function abrir(entrada, sinDesplazar) {
      DC.sonido.reproducir("papel");
      mesa.querySelectorAll(".hemeroteca-ficha").forEach((f) => f.classList.toggle("activa", f.dataset.caso === entrada.trasExpediente));
      DC.ui.vaciar(lectura).appendChild(DC.prensa.pagina(entrada));
      lectura.hidden = false;
      if (!sinDesplazar) lectura.scrollIntoView({ behavior: DC.ui.reducirMovimiento() ? "auto" : "smooth", block: "start" });
    }

    /** El botón de volver sale cuando los recortes ya no se ven. */
    function vigilar() {
      subir.hidden = lectura.hidden || mesa.getBoundingClientRect().bottom > 0;
    }

    vista.appendChild(el("div.agencia-pagina", null,
      DC.cabeceraAgencia({ titulo: t.titulo, lema: t.lema, imagen: "yoksrio-periodico.jpg" }),
      DC.barraArchivo("hemeroteca"),
      el("div.agencia-cuerpo hemeroteca", null,
        publicados.length ? null : el("p.agencia-vacio", { text: t.vacio }),
        el("p.ayuda hemeroteca-ayuda", { text: t.ayuda }),
        mesa,
        lectura)));
    // Cuelga del cuerpo: dentro de la vista, la animación de entrada impide que quede fijo en pantalla.
    document.body.appendChild(subir);
    const directo = publicados.find((e) => e.trasExpediente === params.id);
    if (directo) abrir(directo);
    window.addEventListener("scroll", vigilar, { passive: true });
    return () => {
      window.removeEventListener("scroll", vigilar);
      subir.remove();
    };
  }

  DC.rutas.registrar("hemeroteca", hemeroteca);
  DC.rutas.registrar("hemeroteca/:id", hemeroteca);
})(DetectiveCodex);
