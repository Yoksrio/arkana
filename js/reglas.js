/**
 * Reglas del juego en un único sitio: modos, duraciones y rangos (docs/juego.md «Mecánicas»).
 * Los nombres visibles están en textos.js; aquí solo los números.
 */
(function (DC) {
  "use strict";

  // Dos modos (D24): «investigador» se muestra como Normal e «inspector» como Difícil.
  const MODOS = {
    investigador: {
      costesPistas: [0.1, 0.25, 0.5],
      penalizacionFallo: 0,
      descifrarTelegrama: true,
      acusaciones: 0,
      preguntas: 3,
      factorTiempo: 1
    },
    inspector: {
      costesPistas: [0.2, 0.5],
      penalizacionFallo: 0.05,
      descifrarTelegrama: false,
      acusaciones: 3,
      preguntas: 2,
      factorTiempo: 0.75
    }
  };

  /** Intentos de un minijuego contrarreloj antes de que las hermanas lo resuelvan a su manera (D25). */
  const INTENTOS_MINIJUEGO = 3;

  /** Segundos por símbolo que garantiza el minijuego «telegrama», se transcribe casilla a casilla (D26). */
  const SEGUNDOS_POR_SIMBOLO = 1.5;

  const DURACIONES = {
    corta: { soloObligatorias: true },
    completa: { soloObligatorias: false }
  };

  const RANGOS = [
    { id: "aspirante", desde: 0 },
    { id: "agente", desde: 400 },
    { id: "investigador", desde: 900 },
    { id: "inspector", desde: 2000 },
    { id: "comisario", desde: 5000 }
  ];

  DC.reglas = {
    MODOS,
    DURACIONES,
    RANGOS,
    INTENTOS_MINIJUEGO,
    SEGUNDOS_POR_SIMBOLO,

    /** @returns {object} Reglas del modo (investigador si no existe). */
    modo(id) {
      return MODOS[id] || MODOS.investigador;
    },

    /** @returns {number} Número de pistas disponibles por prueba en ese modo. */
    pistasDisponibles(idModo) {
      return this.modo(idModo).costesPistas.length;
    }
  };
})(DetectiveCodex);
