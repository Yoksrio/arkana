/**
 * Documentos: cómo se pinta cada tipo (carta, telegrama, diario…), la cortina de información
 * repartida y el visor ampliable con zoom.
 */
(function (DC) {
  "use strict";

  const { el, boton, parrafos } = DC.ui;
  const ZOOM_MIN = 0.6;
  const ZOOM_MAX = 3;
  const ZOOM_PASO = 0.25;

  /**
   * Texto de un documento escrito en la clave de Yoksrio (D16): los símbolos, la tabla plegable
   * y, en los modos que lo permiten, el botón para leerlo en claro.
   * @param {string} texto En claro.
   * @param {object} [partida]
   * @returns {HTMLElement}
   */
  function textoEnClave(texto, partida) {
    const t = DC.textos.clave;
    const claro = el("div.telegrama-claro", null, parrafos(texto));
    if (!DC.clave.descubierta()) return el("div.doc-clave", null, claro);
    claro.hidden = true;
    return el("div.doc-clave telegrama-pista", null,
      DC.clave.escribir(texto),
      el("details.plegable telegrama-tabla", null, el("summary", { text: t.verTabla }), DC.clave.tabla()),
      partida && DC.reglas.modo(partida.modo).descifrarTelegrama
        ? boton(t.descifrar, (e) => { claro.hidden = false; e.currentTarget.remove(); }, "boton-texto")
        : null,
      claro);
  }

  /**
   * Pinta un documento.
   * @param {object} expediente
   * @param {object} doc
   * @param {object} [partida] Para los documentos en clave (`clave: true`): decide si se puede descifrar con un botón.
   * @returns {HTMLElement}
   */
  function pintar(expediente, doc, partida) {
    const t = DC.textos.documentos;
    return el("article.doc", { class: "doc-" + doc.tipo },
      el("header.doc-cabecera", null,
        el("span.doc-tipo", { text: t.tipos[doc.tipo] || doc.tipo }),
        el("h3.doc-titulo", { text: doc.titulo }),
        doc.fecha || doc.autor ? el("p.doc-meta", { text: [doc.autor, doc.fecha].filter(Boolean).join(" · ") }) : null),
      doc.visual ? DC.imagenes.visual(expediente, doc.visual) : null,
      doc.imagen ? DC.imagenes.figura(expediente, doc.imagen, { clase: "doc-imagen" }) : null,
      doc.texto ? el("div.doc-texto", null, doc.clave ? textoEnClave(doc.texto, partida) : parrafos(doc.texto)) : null);
  }

  /**
   * Envuelve contenido «solo para un jugador» con una cortina que hay que levantar.
   * @param {Node} contenido
   * @param {object} partida
   * @param {"A"|"B"} letra
   * @returns {HTMLElement}
   */
  function cortina(contenido, partida, letra) {
    const t = DC.textos.documentos;
    const nombre = partida.jugadores[letra];
    const otro = partida.jugadores[letra === "A" ? "B" : "A"];
    const caja = el("div.cortina", { class: "cortina-cerrada" });
    const tapa = el("div.cortina-tapa", null,
      DC.detectives.retrato(DC.detectives.de(partida, letra), "detective-medio cortina-detective"),
      el("p.cortina-sello", { text: DC.formato.plantilla(t.soloPara, { nombre }) }),
      el("p.cortina-texto", { text: DC.formato.plantilla(t.cortina, { nombre, otro }) }),
      boton(DC.formato.plantilla(t.mostrar, { nombre }), () => {
        caja.classList.remove("cortina-cerrada");
        DC.sonido.reproducir("papel");
      }, "boton-oro"));
    const ocultar = boton(t.ocultar, () => caja.classList.add("cortina-cerrada"), "boton-texto cortina-ocultar");
    caja.append(tapa, el("div.cortina-contenido", null, ocultar, contenido));
    return caja;
  }

  /** Documento con su cortina si es solo para un jugador. */
  function pintarParaPartida(expediente, partida, doc) {
    const nodo = pintar(expediente, doc, partida);
    return doc.soloJugador && partida ? cortina(nodo, partida, doc.soloJugador) : nodo;
  }

  /**
   * Abre el visor ampliado con zoom y arrastre.
   * @param {Node} contenido Lo que se amplía.
   * @param {string} titulo
   */
  function visor(contenido, titulo) {
    const t = DC.textos.visor;
    let zoom = 1;
    const lienzo = el("div.visor-lienzo", null, contenido);
    const marco = el("div.visor-marco", null, lienzo);

    function aplicar() {
      lienzo.style.transform = "scale(" + zoom + ")";
    }

    function cambiar(delta) {
      zoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, zoom + delta));
      aplicar();
    }

    marco.addEventListener("wheel", (e) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      cambiar(e.deltaY < 0 ? ZOOM_PASO : -ZOOM_PASO);
    }, { passive: false });

    DC.ui.modal({
      titulo,
      clase: "modal-visor",
      contenido: [
        el("div.visor-controles", null,
          boton("−", () => cambiar(-ZOOM_PASO), "boton-icono", { "aria-label": t.alejar }),
          boton("1:1", () => { zoom = 1; aplicar(); }, "boton-icono", { "aria-label": t.restablecer }),
          boton("+", () => cambiar(ZOOM_PASO), "boton-icono", { "aria-label": t.acercar })),
        marco
      ]
    });
  }

  DC.documento = { pintar, pintarParaPartida, cortina, visor };
})(DetectiveCodex);
