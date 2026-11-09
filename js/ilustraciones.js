/**
 * Ilustraciones de respaldo en SVG, con estilo de grabado antiguo. Se usan cuando falta la imagen
 * generada de un expediente (D3) y para las portadas del archivo. Colores por clase (il-*), que
 * define pantallas.css a partir de los tokens.
 */
(function (DC) {
  "use strict";

  function escapar(texto) {
    return String(texto || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[c]);
  }

  function lienzo(ancho, alto, etiqueta, contenido) {
    return '<svg viewBox="0 0 ' + ancho + " " + alto + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' +
      escapar(etiqueta) + '" preserveAspectRatio="xMidYMid slice">' + contenido + "</svg>";
  }

  function rotulo(texto, x, y) {
    return texto ? '<text class="il-texto il-texto-med" x="' + x + '" y="' + y + '" text-anchor="middle" letter-spacing="2">' + escapar(texto) + "</text>" : "";
  }

  /** Rosa de los vientos de ocho puntas con un ojo: el emblema de la agencia. */
  function emblema() {
    let puntas = "";
    for (let k = 0; k < 8; k++) {
      const largo = k % 2 ? 26 : 46;
      puntas += '<path transform="rotate(' + k * 45 + ')" d="M0 -' + largo + ' L6 0 L0 0 L-6 0 Z" class="' + (k % 2 ? "il-oro-oscuro" : "il-oro") + '"/>';
    }
    return '<svg viewBox="-60 -60 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<circle r="54" class="il-aro-oro"/><circle r="40" class="il-aro-oro-fino"/>' + puntas +
      '<path d="M-16 0 Q0 -12 16 0 Q0 12 -16 0 Z" class="il-ojo"/><circle r="5" class="il-pupila"/></svg>';
  }

  function retrato(texto) {
    return lienzo(300, 380, texto,
      '<rect width="300" height="380" class="il-papel-foto"/>' +
      '<ellipse cx="150" cy="180" rx="118" ry="150" class="il-ovalo"/>' +
      '<path d="M150 90 C192 90 205 125 203 158 C201 196 182 222 150 222 C118 222 99 196 97 158 C95 125 108 90 150 90 Z" class="il-silueta"/>' +
      '<path d="M55 330 C62 270 100 245 150 245 C200 245 238 270 245 330 Z" class="il-silueta"/>' +
      rotulo(texto, 150, 362));
  }

  function paisaje(texto) {
    return lienzo(600, 360, texto,
      '<rect width="600" height="360" class="il-cielo-foto"/>' +
      '<circle cx="470" cy="80" r="26" class="il-luna"/>' +
      '<path d="M0 230 L600 220 L600 360 L0 360 Z" class="il-mar-foto"/>' +
      '<path d="M120 232 C150 170 210 140 260 150 C300 120 360 140 390 180 C420 190 450 215 470 228 Z" class="il-roca-foto"/>' +
      '<path d="M0 150 C120 140 240 175 360 160 C460 150 540 170 600 160 L600 200 C480 210 380 190 260 205 C150 215 60 195 0 200 Z" class="il-bruma"/>' +
      rotulo(texto, 300, 340));
  }

  function objeto(texto) {
    return lienzo(500, 360, texto,
      '<rect width="500" height="360" class="il-papel-foto"/>' +
      '<path d="M120 80 L370 70 L390 290 L140 300 Z" class="il-cuero"/>' +
      '<path d="M370 70 L385 78 L405 296 L390 290 Z" class="il-cuero-canto"/>' +
      '<g transform="translate(255 185) scale(0.9)" class="il-dorado-grabado">' +
      '<circle r="52"/><path d="M0 -60 L8 0 L0 60 L-8 0 Z M-60 0 L0 -8 L60 0 L0 8 Z"/><path d="M-18 0 Q0 -12 18 0 Q0 12 -18 0 Z"/></g>' +
      rotulo(texto, 250, 340));
  }

  /** Sobre lacrado sin remite: para personajes sin rostro conocido. */
  function sobre(texto) {
    return lienzo(300, 400, texto,
      '<rect width="300" height="400" class="il-fondo-oscuro"/>' +
      '<g transform="rotate(-6 150 200)">' +
      '<rect x="40" y="120" width="220" height="150" class="il-papel-foto"/>' +
      '<path d="M40 120 L150 205 L260 120" class="il-tinta-trazo"/>' +
      '<path d="M40 270 L125 190 M260 270 L175 190" class="il-tinta-trazo"/>' +
      '<circle cx="150" cy="205" r="20" class="il-maceta"/></g>' +
      rotulo(texto, 150, 360));
  }

  const MOTIVOS = {
    isla: '<path d="M0 230 L400 225 L400 300 L0 300 Z" class="il-mar-foto"/><path d="M90 232 C120 160 190 130 240 150 C280 140 310 190 330 228 Z" class="il-roca-foto"/><rect x="205" y="118" width="22" height="30" class="il-tinta"/><path d="M200 120 L216 100 L232 120 Z" class="il-tinta"/><path d="M0 170 C100 160 200 190 300 175 C350 170 380 178 400 175 L400 205 C300 215 200 195 100 210 C50 214 20 208 0 210 Z" class="il-bruma"/>',
    tren: '<rect x="0" y="230" width="400" height="8" class="il-tinta"/><path d="M60 230 L60 150 L250 150 L250 230 Z M250 230 L250 170 L320 170 L340 230 Z" class="il-tinta"/><rect x="80" y="165" width="34" height="28" class="il-papel-foto"/><rect x="130" y="165" width="34" height="28" class="il-papel-foto"/><rect x="180" y="165" width="34" height="28" class="il-papel-foto"/><circle cx="100" cy="240" r="16" class="il-tinta"/><circle cx="210" cy="240" r="16" class="il-tinta"/><circle cx="300" cy="240" r="16" class="il-tinta"/><path d="M270 150 L270 120 L290 120 L290 170" class="il-tinta"/>',
    faro: '<path d="M0 250 L400 245 L400 300 L0 300 Z" class="il-mar-foto"/><path d="M175 250 L185 110 L215 110 L225 250 Z" class="il-tinta"/><rect x="180" y="88" width="40" height="22" class="il-luz"/><path d="M200 99 L400 40 L400 150 Z" class="il-haz"/><path d="M176 86 L200 66 L224 86 Z" class="il-tinta"/>',
    bodega: '<g class="il-tinta"><ellipse cx="120" cy="200" rx="60" ry="60"/><ellipse cx="280" cy="200" rx="60" ry="60"/></g><g class="il-papel-foto"><ellipse cx="120" cy="200" rx="40" ry="40"/><ellipse cx="280" cy="200" rx="40" ry="40"/></g><rect x="0" y="260" width="400" height="40" class="il-tinta"/><path d="M200 60 L190 120 L210 120 Z" class="il-tinta"/>',
    desierto: '<path d="M0 220 C80 190 160 200 240 215 C300 200 360 205 400 215 L400 300 L0 300 Z" class="il-roca-foto"/><path d="M150 215 L200 120 L250 215 Z" class="il-tinta"/><circle cx="320" cy="80" r="28" class="il-luz"/>',
    museo: '<path d="M60 120 L200 60 L340 120 Z" class="il-tinta"/><g class="il-tinta"><rect x="80" y="130" width="20" height="110"/><rect x="140" y="130" width="20" height="110"/><rect x="240" y="130" width="20" height="110"/><rect x="300" y="130" width="20" height="110"/></g><rect x="60" y="240" width="280" height="16" class="il-tinta"/><path d="M200 160 L218 182 L200 210 L182 182 Z" class="il-luz"/>',
    estrellas: '<g class="il-tinta"><circle cx="80" cy="80" r="4"/><circle cx="140" cy="120" r="3"/><circle cx="210" cy="90" r="5"/><circle cx="270" cy="150" r="3"/><circle cx="330" cy="100" r="4"/><circle cx="180" cy="200" r="3"/><circle cx="120" cy="240" r="4"/></g><polyline points="80,80 140,120 210,90 270,150 330,100" class="il-constelacion"/><circle cx="200" cy="300" r="90" class="il-cupula"/>',
    hotel: '<rect x="110" y="60" width="180" height="200" class="il-tinta"/><g class="il-papel-foto"><rect x="135" y="85" width="30" height="30"/><rect x="185" y="85" width="30" height="30"/><rect x="235" y="85" width="30" height="30"/><rect x="135" y="140" width="30" height="30"/><rect x="235" y="140" width="30" height="30"/><rect x="135" y="195" width="30" height="30"/><rect x="185" y="195" width="30" height="30"/><rect x="235" y="195" width="30" height="30"/></g><rect x="185" y="140" width="30" height="30" class="il-luz"/>',
    mapa: '<path d="M60 70 L160 50 L240 75 L340 55 L340 245 L240 265 L160 240 L60 260 Z" class="il-papel-foto"/><path d="M160 50 L160 240 M240 75 L240 265" class="il-constelacion"/><path d="M90 200 C130 150 180 190 220 130 C250 100 290 120 310 90" class="il-ruta"/><path d="M302 82 L318 98 M318 82 L302 98" class="il-ruta"/>',
    expediente: '<rect x="90" y="70" width="220" height="170" class="il-tinta"/><rect x="100" y="80" width="200" height="150" class="il-papel-foto"/><text x="200" y="168" text-anchor="middle" class="il-texto il-texto-cero">0</text>'
  };

  /** Portada de respaldo de una ficha del archivo según su motivo. */
  function portada(motivo, texto) {
    return lienzo(400, 300, texto, '<rect width="400" height="300" class="il-cielo-foto"/>' + (MOTIVOS[motivo] || MOTIVOS.expediente));
  }

  DC.ilustraciones = { emblema, retrato, paisaje, objeto, sobre, portada, escapar };
})(DetectiveCodex);
