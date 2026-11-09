/**
 * Los periódicos (D28): al cerrar cada caso, la prensa del día siguiente cuenta cómo lo resolvieron
 * las hermanas, y el cliente del caso siguiente las llama por haberlo leído. Aquí solo el registro y
 * las consultas; la portada, el recorte y la Hemeroteca están en js/interfaz/prensa.js. Datos en
 * expedientes/agencia.js: { trasExpediente, periodico, fecha, edicion, imagen, titular, entradilla,
 * texto, pie, llamada? }, con los textos codificados (expediente «agencia»). Cualquier campo puede ser
 * un objeto con una variante por posición en el orden de juego (D30, DC.partida.variante).
 */
(function (DC) {
  "use strict";

  let entradas = [];

  DC.prensa = {
    /** Registra los periódicos (expedientes/agencia.js). */
    registrar(lista) {
      entradas = lista || [];
    },

    /** @returns {?object} El periódico que sale al cerrar ese expediente. */
    de(idExpediente) {
      return entradas.find((e) => e.trasExpediente === idExpediente) || null;
    },

    /** @returns {object[]} Los periódicos de los casos ya resueltos, en el orden en que salieron. */
    publicados() {
      return DC.partida.ordenCierre().map((id) => this.de(id)).filter(Boolean);
    },

    /** @returns {object[]} Todos los periódicos registrados. */
    todos() {
      return entradas;
    },

    /**
     * El periódico que llevó al cliente de un expediente hasta las hermanas (D30): de los casos que
     * exige su ficha (`requiere`), el último que se cerró. Los tres encargos libres llegan todos con
     * el periódico del primero; el sellado, con el del último de los cuatro.
     * @returns {?object}
     */
    previoA(idExpediente) {
      const ficha = DC.ficha(idExpediente);
      const requiere = (ficha && ficha.requiere) || [];
      const previo = DC.partida.ordenCierre().filter((id) => requiere.indexOf(id) !== -1).pop();
      return previo ? this.de(previo) : null;
    }
  };
})(DetectiveCodex);
