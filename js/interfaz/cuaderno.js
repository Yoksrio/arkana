/**
 * Cuaderno del caso (D12): el marco de todo el expediente. Barra con la marca, el caso y sus datos;
 * índice lateral (Resumen, Personajes, Interrogatorio, Documentación, Lugares, Lo que sabemos,
 * Correspondencia, Investigación, Progreso) y
 * el cuaderno de cuero abierto. Cada sección la pinta un panel de DC.salaPaneles, que devuelve dos
 * hojas [izquierda, derecha] o una sola hoja a lo ancho. Antes de empezar solo se abren el Resumen y
 * los Telegramas.
 */
(function (DC) {
  "use strict";

  const { el, boton, icono } = DC.ui;
  const SECCIONES = ["resumen", "personajes", "interrogatorio", "documentos", "lugares", "hilos", "telegramas", "prueba", "progreso"];
  const ICONOS = { prueba: "investigacion", telegramas: "carta", hilos: "tablero" };
  const SIEMPRE_ABIERTAS = ["resumen", "telegramas"];

  DC.salaPaneles = DC.salaPaneles || {};
  DC.fondoMesa = "assets/img/agencia/mesa.jpg";

  let sala = null;

  DC.escuchar("reloj", (ms) => {
    if (sala && sala.nodoReloj) sala.nodoReloj.textContent = DC.formato.tiempo(ms);
  });

  // Al leer un documento o ver algo nuevo, el índice descuenta el aviso al momento.
  DC.escuchar("visto", (datos) => {
    if (sala && sala.nodoIndice && sala.partida && sala.partida.expedienteId === datos.expedienteId) pintarIndice();
  });

  document.addEventListener("visibilitychange", () => {
    if (!sala || !enJuego()) return;
    if (document.hidden) DC.partida.pausarReloj();
    else DC.partida.reanudarReloj(sala.expediente.id);
  });

  window.addEventListener("pagehide", () => DC.partida.pausarReloj());

  function enJuego() {
    return !!(sala.partida && !sala.partida.terminada);
  }

  /** @returns {boolean} true si la sección aún no se puede abrir (antes de empezar, o el Interrogatorio hasta su momento). */
  function cerrada(id) {
    if (SIEMPRE_ABIERTAS.indexOf(id) === -1 && !enJuego()) return true;
    return id === "interrogatorio" && !DC.partida.interrogatorioAbierto(sala.expediente, sala.partida);
  }

  function contarNuevos() {
    if (!enJuego()) return {};
    const { expediente, partida } = sala;
    const nuevos = (coleccion) => DC.partida.visibles(expediente, partida, coleccion)
      .filter((e) => DC.partida.esNuevo(partida, e.id)).length;
    const hilos = new Set(DC.explicacion.pasos(expediente, partida, true)
      .filter((paso) => paso.prueba && DC.partida.esNuevo(partida, "hilo:" + paso.prueba.id)).map((paso) => paso.prueba.id)).size;
    const interrogatorio = expediente.interrogatorio && !cerrada("interrogatorio") && DC.partida.esNuevo(partida, "interrogatorio") ? 1 : 0;
    return { documentos: nuevos("documentos"), personajes: nuevos("sospechosos"), hilos, interrogatorio };
  }

  function pintarIndice() {
    const t = DC.textos.sala;
    const nuevos = contarNuevos();
    DC.ui.vaciar(sala.nodoIndice);
    SECCIONES.forEach((id) => {
      const activa = sala.seccion === id;
      const bloqueada = cerrada(id);
      const motivo = id === "interrogatorio" && enJuego() ? t.interrogatorioCerrado : t.bloqueada;
      sala.nodoIndice.appendChild(el("li", null, boton([
        icono(ICONOS[id] || id, "cuaderno-indice-icono"),
        el("span", { text: t.secciones[id] }),
        nuevos[id] ? el("span.insignia", { text: String(nuevos[id]), "aria-label": DC.textos.app.nuevo }) : null
      ], () => irA(id), "cuaderno-indice-boton" + (activa ? " activa" : ""), {
        "aria-current": activa ? "page" : null, disabled: bloqueada, title: bloqueada ? motivo : null
      })));
    });
  }

  function pintarDatos() {
    const t = DC.textos.sala;
    const { expediente, partida, ficha } = sala;
    DC.ui.vaciar(sala.nodoDatos);
    if (ficha) sala.nodoDatos.appendChild(el("span.cuaderno-dato", null, DC.detectives.dificultad(ficha.dificultad)));
    if (enJuego()) {
      const recorrido = DC.partida.recorrido(expediente, partida.duracion);
      const hechas = recorrido.filter((p) => partida.completadas.indexOf(p.id) !== -1).length;
      sala.nodoDatos.appendChild(el("span.cuaderno-dato", { title: t.tiempo }, icono("reloj"), sala.nodoReloj));
      sala.nodoDatos.appendChild(el("span.cuaderno-dato", null, icono("pruebas"),
        el("span", { text: DC.formato.plantilla(t.superadas, { hechas, total: recorrido.length }) })));
      sala.nodoDatos.appendChild(el("span.cuaderno-dato cuaderno-puntos", null,
        el("span.cuaderno-puntos-valor", { text: DC.formato.numero(partida.puntuacion) }), el("span", { text: t.puntos })));
    } else if (ficha) {
      sala.nodoDatos.appendChild(el("span.cuaderno-dato", null, icono("reloj"), el("span", { text: ficha.duracion })));
      sala.nodoDatos.appendChild(el("span.cuaderno-dato", null, icono("pruebas"),
        el("span", { text: DC.formato.plantilla(t.pruebas, { n: ficha.pruebas }) })));
    }
  }

  function pintarPanel() {
    const contenido = DC.salaPaneles[sala.seccion]({
      expediente: sala.expediente,
      partida: sala.partida,
      ficha: sala.ficha,
      extra: sala.extra,
      enJuego: enJuego(),
      refrescar,
      irA
    });
    const hojas = Array.isArray(contenido) ? contenido : [contenido];
    DC.ui.vaciar(sala.nodoHojas);
    sala.nodoLibro.classList.toggle("cuaderno-plano", hojas.length === 1);
    hojas.forEach((hoja, i) => sala.nodoHojas.appendChild(vigilarDesborde(el("div.cuaderno-hoja panel-entrada", {
      class: hojas.length === 1 ? "cuaderno-hoja-entera" : (i ? "cuaderno-hoja-derecha" : "cuaderno-hoja-izquierda")
    }, hoja, el("div.hoja-sigue", { "aria-hidden": "true" }, icono("flecha"))))));
    pintarIndice();
    pintarDatos();
  }

  /**
   * Marca la hoja con «hoja-con-mas» mientras quede texto por debajo, para que se vea que sigue.
   * @param {HTMLElement} hoja
   * @returns {HTMLElement} La misma hoja.
   */
  function vigilarDesborde(hoja) {
    const comprobar = () => hoja.classList.toggle("hoja-con-mas", hoja.scrollHeight - hoja.scrollTop - hoja.clientHeight > 4);
    hoja.addEventListener("scroll", comprobar, { passive: true });
    const observador = new ResizeObserver(comprobar);
    observador.observe(hoja);
    Array.from(hoja.children).forEach((hijo) => observador.observe(hijo));
    return hoja;
  }

  function irA(seccion, extra) {
    if (cerrada(seccion)) return;
    sala.seccion = seccion;
    sala.extra = extra || null;
    pintarPanel();
  }

  function refrescar() {
    pintarPanel();
  }

  /** Borra la partida en curso, tras confirmarlo, y vuelve al dossier para empezar de nuevo. */
  function reiniciar(expediente) {
    DC.ui.confirmar(DC.textos.expediente.confirmarReinicio, DC.textos.sala.reiniciar).then((si) => {
      if (!si) return;
      DC.partida.reiniciar(expediente.id);
      DC.rutas.ir("expediente/" + expediente.id);
    });
  }

  function abrir(vista, expediente, partida, seccion) {
    const t = DC.textos.sala;
    sala = {
      expediente,
      partida,
      ficha: DC.ficha(expediente.id),
      seccion,
      extra: null,
      nodoReloj: el("span.cuaderno-reloj", { text: DC.formato.tiempo(partida ? DC.partida.tiempo(partida) : 0) }),
      nodoDatos: el("div.cuaderno-datos"),
      nodoIndice: el("ul.cuaderno-indice-lista"),
      nodoHojas: el("div.cuaderno-hojas"),
      nodoLibro: el("main.cuaderno", { id: "cuaderno", "aria-label": expediente.titulo })
    };
    sala.nodoLibro.appendChild(sala.nodoHojas);

    // Ruta absoluta: dentro de una variable CSS, url() se resolvería desde la hoja de estilos.
    const fondo = new URL(DC.fondoMesa, document.baseURI).href;
    vista.appendChild(el("div.mesa", { style: "--fondo-mesa:url(\"" + fondo + "\")" },
      el("header.cuaderno-barra", null,
        DC.ui.marca(() => DC.rutas.ir("archivo"), "marca-compacta"),
        el("div.cuaderno-caso", null,
          el("p.cuaderno-numero", { text: DC.formato.plantilla(t.numero, expediente) }),
          el("h1.cuaderno-titulo", { text: expediente.titulo })),
        sala.nodoDatos,
        DC.ui.botonPantallaCompleta("boton-icono cuaderno-pantalla", true)),
      el("nav.cuaderno-indice", { "aria-label": t.indice },
        boton([icono("volver"), el("span", { text: t.archivo })], () => DC.rutas.ir("archivo"), "cuaderno-volver"),
        enJuego() ? boton([icono("reiniciar"), el("span", { text: t.reiniciar })], () => reiniciar(expediente), "cuaderno-reiniciar", { title: t.reiniciar }) : null,
        partida ? el("div.cuaderno-jugadores", null, DC.detectives.insignia(partida, "A"), DC.detectives.insignia(partida, "B")) : null,
        sala.nodoIndice),
      sala.nodoLibro));

    pintarPanel();
    if (enJuego()) {
      DC.partida.marcarActiva(expediente.id);
      DC.partida.reanudarReloj(expediente.id);
    }

    return () => {
      DC.partida.pausarReloj();
      sala = null;
    };
  }

  DC.rutas.registrar("expediente/:id", (vista, params) => {
    const expediente = DC.expediente(params.id);
    const ficha = DC.ficha(params.id);
    if (!expediente || (ficha && DC.estadoFicha(ficha) === "bloqueado")) {
      vista.appendChild(el("div.pagina", null, el("p.vacio", { text: DC.textos.app.noEncontrado }),
        boton(DC.textos.expediente.volver, () => DC.rutas.ir("archivo"), "boton-secundario")));
      return null;
    }
    return abrir(vista, expediente, DC.partida.obtener(params.id), "resumen");
  });

  DC.rutas.registrar("sala/:id", (vista, params) => {
    const expediente = DC.expediente(params.id);
    const partida = expediente && DC.partida.obtener(params.id);
    if (!partida) {
      DC.rutas.ir(expediente ? "expediente/" + params.id : "archivo");
      return null;
    }
    if (partida.terminada) {
      DC.rutas.ir("resolucion/" + params.id);
      return null;
    }
    return abrir(vista, expediente, partida, "prueba");
  });
})(DetectiveCodex);
