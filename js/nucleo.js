/**
 * Núcleo de Arkana: espacio de nombres global, registro de expedientes y del catálogo,
 * y un bus de eventos mínimo para que las piezas se avisen sin conocerse.
 * Es el primer script que se carga (D4).
 */
(function (global) {
  "use strict";

  const expedientes = {};
  const catalogo = [];
  const oyentes = {};

  const DetectiveCodex = {
    version: "1.0.0",

    /**
     * Registra un expediente jugable. Lo llama cada fichero de expedientes/.
     * @param {object} expediente Datos completos del caso (ver docs/juego.md).
     */
    registrarExpediente(expediente) {
      if (!expediente || !expediente.id) {
        throw new Error("registrarExpediente: falta el id del expediente");
      }
      expedientes[expediente.id] = expediente;
    },

    /**
     * Registra las fichas del archivo (expedientes/catalogo.js).
     * @param {object[]} fichas
     */
    registrarCatalogo(fichas) {
      catalogo.length = 0;
      fichas.forEach((ficha) => catalogo.push(ficha));
    },

    /** @returns {object|undefined} Expediente jugable con ese id. */
    expediente(id) {
      return expedientes[id];
    },

    /** @returns {object[]} Todos los expedientes jugables registrados. */
    expedientesRegistrados() {
      return Object.keys(expedientes).map((id) => expedientes[id]);
    },

    /** @returns {object[]} Fichas del archivo en orden. */
    fichas() {
      return catalogo.slice();
    },

    /** @returns {object|undefined} Ficha del archivo con ese id. */
    ficha(id) {
      return catalogo.find((f) => f.id === id);
    },

    /** Se suscribe a un evento del motor. */
    escuchar(evento, funcion) {
      (oyentes[evento] = oyentes[evento] || []).push(funcion);
    },

    /** Avisa a los suscritos a un evento. */
    emitir(evento, datos) {
      (oyentes[evento] || []).forEach((funcion) => funcion(datos));
    }
  };

  global.DetectiveCodex = DetectiveCodex;
})(typeof window !== "undefined" ? window : globalThis);
