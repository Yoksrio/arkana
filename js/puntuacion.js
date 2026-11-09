/**
 * Puntuación por prueba, por partida y acumulada; rango de investigador.
 */
(function (DC) {
  "use strict";

  function sumar(lista) {
    return lista.reduce((a, b) => a + b, 0);
  }

  DC.puntuacion = {
    /**
     * Fracción de la puntuación que se pierde con las pistas y fallos de un registro.
     * @param {object} registro Registro de la prueba en la partida.
     * @param {string} idModo
     * @returns {number} Entre 0 y 1.
     */
    descuento(registro, idModo) {
      const modo = DC.reglas.modo(idModo);
      const pistas = sumar(modo.costesPistas.slice(0, registro.pistas || 0));
      const fallos = (registro.fallos || 0) * modo.penalizacionFallo;
      return Math.min(1, pistas + fallos);
    },

    /** @returns {number} Puntos que daría ahora la prueba si se acierta. */
    puntosPrueba(prueba, registro, idModo) {
      return Math.max(0, Math.round(prueba.puntuacion * (1 - this.descuento(registro, idModo))));
    },

    /** @returns {number} Puntos ganados en la partida. */
    total(partida) {
      return sumar(Object.keys(partida.registros).map((id) => partida.registros[id].puntos || 0));
    },

    /** @returns {number} Máximo posible para un expediente y una duración. */
    maxima(expediente, idDuracion) {
      return sumar(DC.partida.recorrido(expediente, idDuracion).map((p) => p.puntuacion));
    },

    /** @returns {number} Suma de la mejor puntuación de cada expediente resuelto. */
    acumulada() {
      const mejores = {};
      DC.estado.obtener().historial.forEach((h) => {
        mejores[h.expedienteId] = Math.max(mejores[h.expedienteId] || 0, h.puntuacion);
      });
      return sumar(Object.keys(mejores).map((id) => mejores[id]));
    },

    /** @returns {{id: string, desde: number, siguiente: object|null}} Rango para unos puntos. */
    rango(puntos) {
      const rangos = DC.reglas.RANGOS;
      let indice = 0;
      rangos.forEach((r, i) => { if (puntos >= r.desde) indice = i; });
      return Object.assign({ siguiente: rangos[indice + 1] || null }, rangos[indice]);
    }
  };
})(DetectiveCodex);
