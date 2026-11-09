/**
 * Arranque: comprueba los expedientes registrados, aplica los ajustes y abre la pantalla.
 * Es el último script del motor; los expedientes se cargan antes.
 */
(function (DC) {
  "use strict";

  function arrancar() {
    DC.expedientesRegistrados().forEach((exp) => {
      DC.comprobarExpediente(exp).forEach((error) => console.warn("[Arkana] " + error));
    });
    DC.ui.aplicarMovimiento();
    DC.rutas.iniciar(document.getElementById("app"));
    if (!DC.estado.esPersistente()) DC.ui.aviso(DC.textos.app.noPersistente, { tipo: "alerta", duracion: 9000 });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arrancar);
  else arrancar();
})(DetectiveCodex);
