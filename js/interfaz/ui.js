/**
 * Utilidades de interfaz: construcción segura del DOM, modales, confirmaciones, avisos, sellos y
 * preferencia de movimiento reducido.
 */
(function (DC) {
  "use strict";

  /**
   * Crea un elemento. Los hijos de texto se insertan como texto (nunca como HTML).
   * @param {string} etiqueta  p. ej. "button" o "div.clase.otra"
   * @param {object} [atributos] class, text, on<Evento>, dataset, y cualquier atributo HTML.
   * @param {...(Node|string|null|Array)} hijos
   * @returns {HTMLElement}
   */
  function el(etiqueta, atributos, ...hijos) {
    const [nombre, ...clases] = etiqueta.split(".");
    const nodo = document.createElement(nombre);
    if (clases.length) nodo.className = clases.join(" ");
    Object.entries(atributos || {}).forEach(([clave, valor]) => {
      if (valor === null || valor === undefined || valor === false) return;
      if (clave === "class") nodo.className = (nodo.className + " " + valor).trim();
      else if (clave === "text") nodo.textContent = valor;
      else if (clave === "dataset") Object.assign(nodo.dataset, valor);
      else if (clave.indexOf("on") === 0 && typeof valor === "function") nodo.addEventListener(clave.slice(2).toLowerCase(), valor);
      else nodo.setAttribute(clave, valor === true ? "" : valor);
    });
    anadir(nodo, hijos);
    return nodo;
  }

  function anadir(nodo, hijos) {
    hijos.forEach((hijo) => {
      if (hijo === null || hijo === undefined || hijo === false) return;
      if (Array.isArray(hijo)) anadir(nodo, hijo);
      else nodo.appendChild(typeof hijo === "string" || typeof hijo === "number" ? document.createTextNode(String(hijo)) : hijo);
    });
  }

  /** Crea un contenedor con marcado SVG propio (ilustraciones del motor o de un expediente). */
  function svg(marcado, clase) {
    const nodo = el("div", { class: clase || "ilustracion" });
    nodo.innerHTML = marcado;
    return nodo;
  }

  /** Párrafos a partir de un texto con líneas en blanco; los saltos simples se respetan. */
  function parrafos(texto, clase) {
    return String(texto || "").split(/\n{2,}/).map((bloque) => {
      const p = el("p", { class: clase });
      bloque.split("\n").forEach((linea, i) => {
        if (i) p.appendChild(document.createElement("br"));
        p.appendChild(document.createTextNode(linea));
      });
      return p;
    });
  }

  function vaciar(nodo) {
    while (nodo.firstChild) nodo.removeChild(nodo.firstChild);
    return nodo;
  }

  function reducirMovimiento() {
    return DC.estado.ajustes().reducirMovimiento ||
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  let modalAbierto = null;

  /**
   * Abre un modal.
   * @param {{titulo?: string, contenido: Node|Node[], acciones?: object[], clase?: string, alCerrar?: Function}} opciones
   *   acciones: [{ texto, clase, accion(cerrar) }]
   * @returns {{cerrar: Function, nodo: HTMLElement}}
   */
  function modal(opciones) {
    if (modalAbierto) modalAbierto.cerrar();
    const anterior = document.activeElement;
    const titulo = opciones.titulo ? el("h2.modal-titulo", { id: "modal-titulo", text: opciones.titulo }) : null;
    const acciones = (opciones.acciones || []).map((a) =>
      el("button", { type: "button", class: "boton " + (a.clase || ""), text: a.texto, onClick: () => a.accion(cerrar) }));
    const caja = el("div.modal-caja", { class: opciones.clase, role: "dialog", "aria-modal": "true", "aria-labelledby": titulo ? "modal-titulo" : null, tabindex: "-1" },
      el("button.modal-cerrar", { type: "button", "aria-label": DC.textos.app.cerrar, text: "×", onClick: () => cerrar() }),
      titulo,
      el("div.modal-contenido", null, opciones.contenido),
      acciones.length ? el("div.modal-acciones", null, acciones) : null);
    const fondo = el("div.modal-fondo", { onClick: (e) => { if (e.target === fondo) cerrar(); } }, caja);

    function teclado(e) {
      if (e.key === "Escape") cerrar();
    }

    function cerrar() {
      document.removeEventListener("keydown", teclado);
      fondo.classList.add("saliendo");
      setTimeout(() => fondo.remove(), reducirMovimiento() ? 0 : 200);
      modalAbierto = null;
      if (anterior && anterior.focus) anterior.focus();
      if (opciones.alCerrar) opciones.alCerrar();
    }

    document.addEventListener("keydown", teclado);
    document.body.appendChild(fondo);
    const primero = caja.querySelector("input, textarea, select") || caja;
    primero.focus();
    modalAbierto = { cerrar, nodo: caja };
    return modalAbierto;
  }

  /** @returns {Promise<boolean>} Confirmación con modal propio. */
  function confirmar(texto, textoAceptar) {
    return new Promise((resolver) => {
      let respuesta = false;
      modal({
        titulo: null,
        contenido: parrafos(texto, "modal-texto"),
        acciones: [
          { texto: DC.textos.app.cancelar, clase: "boton-secundario", accion: (cerrar) => cerrar() },
          { texto: textoAceptar || DC.textos.app.aceptar, clase: "boton-alerta", accion: (cerrar) => { respuesta = true; cerrar(); } }
        ],
        alCerrar: () => resolver(respuesta)
      });
    });
  }

  /**
   * Aviso flotante que desaparece solo.
   * @param {string} texto
   * @param {{tipo?: string, titulo?: string, duracion?: number}} [opciones]
   */
  function aviso(texto, opciones) {
    const o = opciones || {};
    let zona = document.getElementById("avisos");
    if (!zona) {
      zona = el("div", { id: "avisos", class: "avisos", role: "status", "aria-live": "polite" });
      document.body.appendChild(zona);
    }
    const nodo = el("div.aviso", { class: "aviso-" + (o.tipo || "info") },
      o.titulo ? el("strong.aviso-titulo", { text: o.titulo }) : null,
      el("span", { text: texto }));
    zona.appendChild(nodo);
    setTimeout(() => {
      nodo.classList.add("saliendo");
      setTimeout(() => nodo.remove(), 400);
    }, o.duracion || 4200);
  }

  /**
   * Sello grande animado (PRUEBA SUPERADA, CASO RESUELTO).
   * @returns {Promise<void>} Se resuelve cuando termina.
   */
  function sello(texto) {
    return new Promise((resolver) => {
      const nodo = el("div.sello-capa", { "aria-hidden": "true" }, el("div.sello-grande", { text: texto }));
      document.body.appendChild(nodo);
      DC.sonido.reproducir("sello");
      const duracion = reducirMovimiento() ? 700 : 1500;
      setTimeout(() => {
        nodo.classList.add("saliendo");
        setTimeout(() => { nodo.remove(); resolver(); }, 300);
      }, duracion);
    });
  }

  /** Botón con estilo del juego. */
  function boton(texto, accion, clase, atributos) {
    return el("button", Object.assign({ type: "button", class: "boton " + (clase || ""), onClick: accion }, atributos), texto);
  }

  /** Aplica en <html> la clase de movimiento reducido según los ajustes. */
  function aplicarMovimiento() {
    document.documentElement.classList.toggle("sin-movimiento", !!DC.estado.ajustes().reducirMovimiento);
  }

  // Iconos de trazo (24 × 24). Son dibujo propio de la interfaz, no datos.
  const TRAZOS = {
    expedientes: "M3 7l9-4 9 4-9 4z M3 12l9 4 9-4 M3 17l9 4 9-4",
    todos: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M15.5 8.5l-2 5-5 2 2-5z",
    aventura: "M2 20l7-12 4 6 3-4 6 10z M9 8l2 3",
    crimen: "M12 3c-4 0-7 3-7 8 0 3 1 6 3 9 M12 6c-2.5 0-4 2-4 5 0 3 1 5 2 7 M12 9c-1 0-1.5 1-1.5 2.5 0 2.5 1 5 2.5 7 M12 3c4 0 7 3 7 8 0 2-.4 4-1 5.5 M12 6c2.5 0 4 2 4 5 0 2-.4 4-1.2 5.5 M12 9c1 0 1.5 1 1.5 2.5",
    misterio: "M3 9c3-2 6-2 9 0 3-2 6-2 9 0-1 5-3 7-6 7-2 0-2.5-2-3-3-.5 1-1 3-3 3-3 0-5-2-6-7z M7 11h2 M15 11h2",
    tesoro: "M3 9h18v10H3z M3 9l2-4h14l2 4 M10 13h4v3h-4z",
    enigmas: "M9 3h6v3a2 2 0 1 0 3 0V6h3v6h-3a2 2 0 1 0 0 3h3v6h-6v-3a2 2 0 1 0-3 0v3H6v-6h3a2 2 0 1 0 0-3H6V6h3z",
    buscar: "M10.5 3a7.5 7.5 0 1 0 0 15a7.5 7.5 0 1 0 0-15z M16 16l5 5",
    reloj: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M12 7v5l3 2",
    pruebas: "M6 3h9l4 4v14H6z M15 3v4h4 M9 12h7 M9 16h7",
    izquierda: "M15 5l-7 7 7 7",
    derecha: "M9 5l7 7-7 7",
    flecha: "M4 12h15 M13 6l6 6-6 6",
    huella: "M5 10a1.8 2.3 0 1 0 3.6 0a1.8 2.3 0 1 0-3.6 0z M8.2 6.3a1.8 2.3 0 1 0 3.6 0a1.8 2.3 0 1 0-3.6 0z M12.2 6.3a1.8 2.3 0 1 0 3.6 0a1.8 2.3 0 1 0-3.6 0z M15.4 10a1.8 2.3 0 1 0 3.6 0a1.8 2.3 0 1 0-3.6 0z M12 12.5c-3 0-5.5 3-5.5 5s2 2.5 5.5 2.5 5.5-.5 5.5-2.5-2.5-5-5.5-5z",
    arena: "M6 3h12 M6 21h12 M7 3c0 5 5 6 5 9s-5 4-5 9 M17 3c0 5-5 6-5 9s5 4 5 9 M9.5 18.5h5",
    intercambiar: "M4 9h15 M15 5l4 4-4 4 M20 15H5 M9 11l-4 4 4 4",
    persona: "M12 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7z M5 20c0-3.5 3-6 7-6s7 2.5 7 6",
    lapiz: "M4 20l1-4L16 5l3 3L8 19z M14 7l3 3",
    pluma: "M20 4c-7 1-12 6-14 14 M20 4c0 6-4 11-10 12 M6 18l-2 3",
    brujula: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M15.5 8.5l-2 5-5 2 2-5z",
    volver: "M20 12H5 M11 6l-6 6 6 6",
    reiniciar: "M4 12a8 8 0 1 0 2.3-5.7 M4 3v5h5",
    resumen: "M3 5c3-1 6-1 9 1v14c-3-2-6-2-9-1z M21 5c-3-1-6-1-9 1v14c3-2 6-2 9-1z",
    personajes: "M12 4a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M4 21c0-4 4-7 8-7s8 3 8 7",
    documentos: "M6 3h9l4 4v14H6z M15 3v4h4 M9 11h7 M9 14h7 M9 17h5",
    lugares: "M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z M12 6.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5z",
    tablero: "M4 6h16v13H4z M9 6V4h6v2 M8 11l3 3 5-5",
    investigacion: "M10.5 3a7.5 7.5 0 1 0 0 15a7.5 7.5 0 1 0 0-15z M16 16l5 5 M10.5 7v4l2.5 1.5",
    progreso: "M4 20V10 M10 20V4 M16 20v-7 M3 20h18",
    pantalla: "M4 9V4h5 M15 4h5v5 M20 15v5h-5 M9 20H4v-5",
    pantallaSalir: "M9 4v5H4 M15 4v5h5 M20 15h-5v5 M4 15h5v5",
    interrogatorio: "M4 5h16v11h-8l-4 4v-4H4z M9.8 9.3c0-1.2 1-2 2.2-2s2.2.8 2.2 1.9c0 1.4-2.2 1.5-2.2 3 M12 14.6v.2",
    carta: "M3 6h18v12H3z M3 6l9 7 9-7",
    recorte: "M3 5h15v14H5a2 2 0 0 1-2-2z M18 9h3v8a2 2 0 0 1-2 2 M6 8h9 M6 12h4 M12 12h3 M6 15h4 M12 15h3"
  };

  /**
   * Icono de trazo de la interfaz.
   * @param {string} nombre Clave de TRAZOS; si no existe, el de documento.
   * @param {string} [clase]
   * @returns {HTMLElement}
   */
  function icono(nombre, clase) {
    return svg(`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${TRAZOS[nombre] || TRAZOS.documentos}"/></svg>`, "icono" + (clase ? " " + clase : ""));
  }

  /**
   * Marca de la agencia (orejas, «Agencia» y el nombre del juego) como botón.
   * @param {Function} alPulsar
   * @param {string} [clase] Variante de tamaño, p. ej. "marca-compacta".
   * @returns {HTMLElement}
   */
  function marca(alPulsar, clase) {
    return el("button.marca", { type: "button", class: clase, title: DC.textos.app.volver, onClick: alPulsar },
      svg(`<svg viewBox="0 0 120 30" aria-hidden="true"><path d="M2 22H40 M80 22h38 M44 24V8l8 7h16l8-7v16"/></svg>`, "marca-orejas"),
      el("span.marca-agencia", { text: DC.textos.archivo.agencia }),
      el("span.marca-nombre", { text: DC.textos.app.nombre }));
  }

  /** @returns {boolean} true si la página ocupa toda la pantalla. */
  function enPantallaCompleta() {
    return !!document.fullscreenElement;
  }

  /** Entra en pantalla completa o sale de ella (si el navegador lo permite). */
  function alternarPantallaCompleta() {
    const peticion = enPantallaCompleta() ? document.exitFullscreen()
      : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : null;
    if (peticion && peticion.catch) peticion.catch(() => {});
  }

  /**
   * Botón de pantalla completa: icono y texto cambian al entrar y salir.
   * @param {string} [clase]
   * @param {boolean} [soloIcono] Sin texto visible (el texto queda como título y aria-label).
   * @returns {HTMLElement}
   */
  function botonPantallaCompleta(clase, soloIcono) {
    const t = DC.textos.app;
    const nodo = el("button", { type: "button", class: "boton " + (clase || ""), onClick: alternarPantallaCompleta });
    function pintar() {
      const dentro = enPantallaCompleta();
      const texto = dentro ? t.salirPantallaCompleta : t.pantallaCompleta;
      vaciar(nodo).append(icono(dentro ? "pantallaSalir" : "pantalla"), soloIcono ? "" : el("span.menu-texto", { text: texto }));
      nodo.setAttribute("aria-label", texto);
      nodo.title = texto;
      nodo.setAttribute("aria-pressed", dentro ? "true" : "false");
    }
    document.addEventListener("fullscreenchange", pintar);
    pintar();
    return nodo;
  }

  DC.ui = { el, svg, parrafos, vaciar, modal, confirmar, aviso, sello, boton, reducirMovimiento, aplicarMovimiento, icono, marca, botonPantallaCompleta };
})(DetectiveCodex);
