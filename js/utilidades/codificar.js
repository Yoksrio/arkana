/**
 * Codificación de textos protegidos: pistas, epílogo, diálogos y respuestas del interrogatorio (D5).
 * XOR con una clave derivada del expediente y Base64, con prefijo "dc1:".
 * Es protección de experiencia, no cifrado.
 */
(function (DC) {
  "use strict";

  const PREFIJO = "dc1:";

  function clave(idExpediente) {
    return new TextEncoder().encode(DC.sha256("dc1-clave|" + idExpediente));
  }

  function bytesABase64(bytes) {
    let binario = "";
    bytes.forEach((b) => { binario += String.fromCharCode(b); });
    return btoa(binario);
  }

  function base64ABytes(base64) {
    const binario = atob(base64);
    const bytes = new Uint8Array(binario.length);
    for (let i = 0; i < binario.length; i++) bytes[i] = binario.charCodeAt(i);
    return bytes;
  }

  function xor(bytes, k) {
    return bytes.map((b, i) => b ^ k[i % k.length]);
  }

  /**
   * Codifica un texto para guardarlo en los datos de un expediente.
   * @param {string} idExpediente
   * @param {string} texto
   * @returns {string} "dc1:<base64>"
   */
  function codificar(idExpediente, texto) {
    const bytes = new TextEncoder().encode(String(texto));
    return PREFIJO + bytesABase64(xor(bytes, clave(idExpediente)));
  }

  /**
   * Recupera un texto codificado. Si no lleva prefijo, lo devuelve tal cual.
   * @param {string} idExpediente
   * @param {string} codificado
   * @returns {string}
   */
  function decodificar(idExpediente, codificado) {
    if (typeof codificado !== "string" || codificado.indexOf(PREFIJO) !== 0) return codificado || "";
    const bytes = xor(base64ABytes(codificado.slice(PREFIJO.length)), clave(idExpediente));
    return new TextDecoder().decode(bytes);
  }

  DC.codificar = codificar;
  DC.decodificar = decodificar;
})(DetectiveCodex);
