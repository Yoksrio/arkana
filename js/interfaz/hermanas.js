/**
 * Las hermanas intervienen (D24): Gismera y Chiqui comentan, discrepan y reaccionan durante la
 * partida. Cada expediente puede traer sus propios diálogos en `dialogos`, por momento:
 *   "prueba:<id>:inicio" | "prueba:<id>:exito" | "prueba:<id>:fallo" | "prueba:<id>:pista" |
 *   "documento:<id>" | "escena:<id>:<n>"
 * con una lista de { quien: "gismera"|"chiqui", texto (codificado) }. Si el caso no trae uno para
 * un fallo, un éxito o una pista, se usa uno genérico de textos.js, siempre el mismo para el mismo
 * momento (así no cambia al refrescar la hoja).
 */
(function (DC) {
  "use strict";

  const { el } = DC.ui;
  const GENERICOS = { fallo: true, exito: true, pista: true, aSuManera: true };

  function hash(texto) {
    let h = 0;
    for (let i = 0; i < texto.length; i++) h = (h * 31 + texto.charCodeAt(i)) >>> 0;
    return h;
  }

  /** @returns {{quien: string, texto: string}[]|null} Las líneas del momento, ya en claro. */
  function lineas(expediente, momento) {
    const propias = (expediente.dialogos || {})[momento];
    if (propias && propias.length) {
      return propias.map((l) => ({ quien: l.quien, texto: DC.decodificar(expediente.id, l.texto) }));
    }
    const tipo = momento.split(":").pop();
    if (!GENERICOS[tipo]) return null;
    const variantes = DC.textos.hermanas.genericos[tipo];
    return variantes[hash(expediente.id + momento) % variantes.length];
  }

  DC.hermanas = {
    lineas,

    /**
     * Diálogo de las hermanas para un momento de la partida.
     * @param {object} expediente
     * @param {object} partida Para poner el nombre de la persona que es cada una.
     * @param {string} momento
     * @param {string} [clase]
     * @returns {HTMLElement|null} null si no hay nada que decir en ese momento.
     */
    dialogo(expediente, partida, momento, clase) {
      const lista = lineas(expediente, momento);
      if (!lista) return null;
      return el("div.hermanas", { class: clase, role: "group", "aria-label": DC.textos.hermanas.titulo },
        lista.map((l) => this.linea(partida, l.quien, l.texto)));
    },

    /**
     * Una intervención: retrato, nombre de la detective (y de su persona) y la frase.
     * @param {object} partida
     * @param {string} quien "gismera" | "chiqui"
     * @param {string} texto
     * @returns {HTMLElement}
     */
    linea(partida, quien, texto) {
      const letra = DC.detectives.de(partida, "A") === quien ? "A" : "B";
      const persona = partida && partida.jugadores ? partida.jugadores[letra] : null;
      return el("p.hermanas-linea", { class: "hermanas-" + quien },
        DC.detectives.retrato(quien, "detective-mini hermanas-retrato"),
        el("span.hermanas-quien", null,
          el("strong", { text: DC.detectives.nombre(quien) }),
          persona ? el("small", { text: persona }) : null),
        el("span.hermanas-texto", { text: texto }));
    }
  };
})(DetectiveCodex);
