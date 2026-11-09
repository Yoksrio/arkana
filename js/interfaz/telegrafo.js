/**
 * El telégrafo (D24, D27): cada pista es un telegrama de Yoksrio; al cerrar un caso, las hermanas
 * le mandan su informe y él contesta en la misma escena. Al pedirla se ve la escena —las
 * hermanas mandan la consulta, Yoksrio contesta desde la oficina de telégrafos— y el telegrama
 * aparece tecleándose en el papel. En un expediente con `sinYoksrio` (D17) no hay respuesta: la
 * nota la escriben Gismera y Chiqui.
 */
(function (DC) {
  "use strict";

  const { el, boton } = DC.ui;
  const PASO_TECLA = 28;
  const PAUSA_ESCENA = 1400;
  const PAUSA_STOP = 520;
  const PAUSA_PUNTO = 300;

  /** Pausa tras la letra i-ésima de un texto (D27): más larga tras un STOP, algo menos tras un punto. */
  function pausaTras(texto, i) {
    const siguiente = texto.charAt(i);
    if (texto.slice(i - 4, i) === "STOP" && (siguiente === "" || siguiente === " ")) return PAUSA_STOP;
    if (/[.:;!?]/.test(texto.charAt(i - 1)) && (siguiente === "" || /\s/.test(siguiente))) return PAUSA_PUNTO;
    return PASO_TECLA;
  }

  /** Teclea un texto letra a letra en un nodo, parando en cada STOP; devuelve una promesa al terminar. */
  function teclear(nodo, texto, rapido) {
    return new Promise((resolver) => {
      if (rapido || !texto) { nodo.textContent = texto || ""; resolver(); return; }
      let i = 0;
      const paso = () => {
        nodo.textContent = texto.slice(0, ++i);
        if (i % 3 === 0) DC.sonido.reproducir("tecla");
        if (i < texto.length) setTimeout(paso, pausaTras(texto, i));
        else resolver();
      };
      paso();
    });
  }

  /** Hace aparecer los símbolos de un texto en clave uno a uno. */
  function revelar(nodoClave, rapido) {
    return new Promise((resolver) => {
      const simbolos = Array.from(nodoClave.querySelectorAll(".clave-simbolo, .clave-signo"));
      if (rapido) { simbolos.forEach((s) => s.classList.add("visible")); resolver(); return; }
      let i = 0;
      const paso = () => {
        simbolos[i].classList.add("visible");
        if (i % 3 === 0) DC.sonido.reproducir("tecla");
        if (++i < simbolos.length) setTimeout(paso, PASO_TECLA);
        else resolver();
      };
      if (simbolos.length) paso(); else resolver();
    });
  }

  function espera(ms, rapido) {
    return new Promise((resolver) => setTimeout(resolver, rapido ? 0 : ms));
  }

  DC.telegrafo = {
    /**
     * Escribe un texto en un nodo como un teletipo (D27): letra a letra, con una pausa en cada STOP
     * y en cada punto. Respeta «Reducir animaciones».
     * @param {HTMLElement} nodo
     * @param {string} texto
     * @returns {Promise<void>} Se resuelve al terminar.
     */
    teclear(nodo, texto) {
      return teclear(nodo, texto, DC.ui.reducirMovimiento());
    },

    /**
     * Escribe varios textos seguidos, cada uno en su nodo.
     * @param {{nodo: HTMLElement, texto: string}[]} lista
     * @returns {Promise<void>}
     */
    teclearSeguidos(lista) {
      return lista.reduce((cadena, x) => cadena.then(() => this.teclear(x.nodo, x.texto)), Promise.resolve());
    },

    /**
     * Papel de telegrama con cabecera; el texto va en claro (estilo telegráfico) o en la clave.
     * @param {{texto: string, cabecera: string, enClave?: boolean, firmaHermanas?: boolean}} o
     * @returns {HTMLElement}
     */
    papel(o) {
      const t = DC.textos.telegrafo;
      const cuerpo = o.enClave
        ? DC.clave.escribir(DC.clave.aTelegrama(o.texto))
        : el("p.telegrafo-texto", { text: o.firmaHermanas ? o.texto : DC.clave.aTelegrama(o.texto, true).toUpperCase() });
      return el("article.telegrafo-papel", { class: o.enClave ? "telegrafo-papel-clave" : null },
        el("p.telegrafo-cabecera", { text: o.cabecera }),
        cuerpo,
        o.firmaHermanas ? el("p.telegrafo-firma", { text: t.firmaHermanas }) : null);
    },

    /**
     * Escena completa de una pista: consulta, respuesta y telegrama tecleado.
     * @param {{texto: string, n: number, enClave: boolean, sinYoksrio: boolean, partida: object}} o
     * @returns {Promise<void>} Se resuelve cuando los jugadores guardan el telegrama.
     */
    escena(o) {
      const t = DC.textos.telegrafo;
      const rapido = DC.ui.reducirMovimiento();
      const cabecera = DC.formato.plantilla(o.sinYoksrio ? t.cabeceraHermanas : t.cabecera, { n: o.n });
      const pie = el("p.telegrafo-pie", { "aria-live": "polite" });
      const imagen = el("img.telegrafo-imagen", { src: DC.telegramaHermanas, alt: "", decoding: "async" });
      const zonaPapel = el("div.telegrafo-zona-papel");
      let ventana = null;
      const guardar = boton(t.guardar, () => ventana && ventana.cerrar(), "boton-oro telegrafo-guardar", { style: "visibility:hidden" });

      return new Promise((resolver) => {
        ventana = DC.ui.modal({
          clase: "modal-telegrafo",
          contenido: el("div.telegrafo", null, el("div.telegrafo-escena", null, imagen, pie), zonaPapel, guardar),
          alCerrar: resolver
        });

        (async () => {
          await teclear(pie, t.enviando, rapido);
          await espera(PAUSA_ESCENA, rapido);
          if (o.sinYoksrio) {
            imagen.classList.add("telegrafo-imagen-apagada");
            await teclear(pie, t.sinRespuesta, rapido);
            await espera(PAUSA_ESCENA, rapido);
            await teclear(pie, t.hermanas, rapido);
          } else {
            imagen.src = o.n % 2 ? DC.yoksrioTelegrafos : DC.yoksrioEscribe;
            await teclear(pie, t.respondiendo, rapido);
            await espera(PAUSA_ESCENA, rapido);
          }
          const papel = this.papel({ texto: o.texto, cabecera, enClave: o.enClave && !o.sinYoksrio, firmaHermanas: o.sinYoksrio });
          const cuerpo = papel.querySelector(".telegrafo-texto, .clave-texto");
          const textoFinal = cuerpo.textContent;
          if (!o.enClave || o.sinYoksrio) cuerpo.textContent = "";
          zonaPapel.appendChild(papel);
          DC.sonido.reproducir("papel");
          await espera(400, rapido);
          if (o.enClave && !o.sinYoksrio) await revelar(cuerpo, rapido);
          else await teclear(cuerpo, textoFinal, rapido);
          if (o.dialogo) zonaPapel.appendChild(o.dialogo);
          guardar.style.visibility = "";
          guardar.focus();
        })();
      });
    },

    /**
     * Escena de cierre de un caso (D27): Gismera dicta y Chiqui teclea el informe para Yoksrio;
     * él lee y contesta, y su telegrama aparece símbolo a símbolo en su clave.
     * @param {{enviado: string, texto: string, n: number, desde: string, fecha: string}} o
     *   `enviado` y `texto` en claro; `n`, `desde` y `fecha` para la cabecera de la respuesta.
     * @returns {Promise<void>} Se resuelve cuando los jugadores guardan la correspondencia.
     */
    escenaCierre(o) {
      const t = DC.textos.telegrafo;
      const tc = DC.textos.clave;
      const rapido = DC.ui.reducirMovimiento();
      const pie = el("p.telegrafo-pie", { "aria-live": "polite" });
      const imagen = el("img.telegrafo-imagen", { src: DC.telegramaHermanas, alt: "", decoding: "async" });
      const zonaPapel = el("div.telegrafo-zona-papel telegrafo-cierre");
      let ventana = null;
      const guardar = boton(t.cierreGuardar, () => ventana && ventana.cerrar(), "boton-oro telegrafo-guardar", { style: "visibility:hidden" });

      return new Promise((resolver) => {
        ventana = DC.ui.modal({
          clase: "modal-telegrafo",
          contenido: el("div.telegrafo", null, el("div.telegrafo-escena", null, imagen, pie), zonaPapel, guardar),
          alCerrar: resolver
        });

        (async () => {
          await teclear(pie, t.cierreRepasando, rapido);
          await espera(PAUSA_ESCENA, rapido);
          const enviado = el("article.telegrafo-papel", null,
            el("p.telegrafo-cabecera", { text: tc.enviadoCabecera }),
            el("p.telegrafo-texto"));
          zonaPapel.appendChild(enviado);
          DC.sonido.reproducir("papel");
          await espera(400, rapido);
          await teclear(enviado.querySelector(".telegrafo-texto"), o.enviado, rapido);
          await teclear(pie, t.cierreEnviando, rapido);
          await espera(PAUSA_ESCENA, rapido);
          imagen.src = DC.yoksrioEscribe;
          await teclear(pie, t.cierreRespondiendo, rapido);
          await espera(PAUSA_ESCENA, rapido);
          const respuesta = el("article.telegrafo-papel telegrafo-papel-clave", null,
            el("p.telegrafo-cabecera", { text: DC.formato.plantilla(tc.numero, { n: o.n, desde: o.desde, fecha: o.fecha }) }),
            DC.clave.escribir(o.texto));
          zonaPapel.appendChild(respuesta);
          DC.sonido.reproducir("papel");
          await espera(400, rapido);
          await revelar(respuesta.querySelector(".clave-texto"), rapido);
          await teclear(pie, t.cierreLeer, rapido);
          guardar.style.visibility = "";
          guardar.focus();
        })();
      });
    }
  };
})(DetectiveCodex);
