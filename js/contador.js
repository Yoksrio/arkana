/**
 * Contador de jugadores (D32): avisa a GoatCounter, sin cookies ni datos personales, de cuándo se
 * empieza y se cierra un caso. El script de GoatCounter solo se añade a la versión publicada
 * (herramientas/publicar-web.sh); en local no existe y esto no hace nada.
 */
(function (DC) {
  "use strict";

  DC.contador = {
    /**
     * Cuenta un momento de la partida, con el número del caso tal como lo ve el jugador.
     * @param {string} idExpediente
     * @param {string} momento «empieza», «resuelto» o «fallido».
     * @param {string} [modo] Dificultad de la partida.
     */
    evento(idExpediente, momento, modo) {
      const contador = window.goatcounter;
      if (!contador || typeof contador.count !== "function") return;
      const ficha = DC.ficha(idExpediente) || { numero: idExpediente };
      const ruta = ["caso", ficha.numero, momento].concat(modo ? [modo] : []).join("-");
      try {
        contador.count({ path: ruta, title: "Nº " + ficha.numero + " · " + momento, event: true });
      } catch (e) {
        // El contador nunca debe estorbar a la partida.
      }
    }
  };
})(DetectiveCodex);
