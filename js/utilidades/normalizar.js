/**
 * Normalización de respuestas y cálculo de huellas (D5, docs/juego.md «Validación flexible»).
 * La usan el juego y las herramientas: si cambia, cambian todas las huellas.
 */
(function (DC) {
  "use strict";

  const ARTICULOS_INICIALES = /^(el|la|los|las|un|una|unos|unas) /;
  const PREFIJO_HUELLA = "dc1";

  /**
   * Normaliza una respuesta: minúsculas, sin diacríticos (ñ → n), signos como espacios,
   * espacios colapsados y sin artículo inicial.
   * @param {string} texto
   * @returns {string}
   */
  function normalizar(texto) {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .replace(ARTICULOS_INICIALES, "");
  }

  /**
   * Huella de una respuesta para una prueba concreta.
   * @param {string} idExpediente
   * @param {string} idPrueba
   * @param {string} respuesta Texto tal cual lo escribe el jugador (se normaliza aquí).
   * @returns {string} SHA-256 en hexadecimal.
   */
  function huella(idExpediente, idPrueba, respuesta) {
    return DC.sha256([PREFIJO_HUELLA, idExpediente, idPrueba, normalizar(respuesta)].join("|"));
  }

  DC.normalizar = normalizar;
  DC.huella = huella;
})(DetectiveCodex);
