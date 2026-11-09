/**
 * Pistas: cuántas quedan, cuánto cuestan y cuándo se ofrecen (docs/juego.md «Modo y duración»).
 */
(function (DC) {
  "use strict";

  DC.pistas = {
    /** @returns {number} Pistas que aún se pueden pedir en esta prueba. */
    restantes(partida, registro) {
      return Math.max(0, DC.reglas.pistasDisponibles(partida.modo) - (registro.pistas || 0));
    },

    /** @returns {number} Fracción de los puntos que cuesta la siguiente pista (0 si no hay). */
    costeSiguiente(partida, registro) {
      const costes = DC.reglas.modo(partida.modo).costesPistas;
      return costes[registro.pistas || 0] || 0;
    },

    /**
     * Textos de las pistas ya pedidas, decodificados.
     * @returns {string[]}
     */
    usadas(expediente, prueba, registro) {
      return (prueba.pistas || [])
        .slice(0, registro.pistas || 0)
        .map((codificada) => DC.decodificar(expediente.id, codificada));
    }
  };
})(DetectiveCodex);
