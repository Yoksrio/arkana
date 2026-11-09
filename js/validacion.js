/**
 * Validación de respuestas cerradas por huella (D5). Hoy local; con el backend (D8) tendrá una
 * implementación remota con la misma firma.
 */
(function (DC) {
  "use strict";

  DC.validacion = {
    /**
     * Comprueba una respuesta contra las huellas de la prueba.
     * @param {object} expediente
     * @param {object} prueba
     * @param {string} respuesta Texto del jugador, id de opción o id de punto.
     * @returns {boolean}
     */
    comprobar(expediente, prueba, respuesta) {
      if (!DC.normalizar(respuesta)) return false;
      const huella = DC.huella(expediente.id, prueba.id, respuesta);
      return (prueba.huellasRespuesta || []).indexOf(huella) !== -1;
    }
  };
})(DetectiveCodex);
