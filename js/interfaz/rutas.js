/**
 * Rutas por hash (D7): #/inicio, #/archivo, #/expediente/001, #/sala/001, #/resolucion/001,
 * #/estadisticas, #/ajustes. Cada pantalla es una función (contenedor, parámetros) que puede
 * devolver otra función para limpiar al salir.
 */
(function (DC) {
  "use strict";

  const rutas = [];
  let limpiar = null;
  let contenedor = null;

  function resolver(hash) {
    const partes = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    for (const ruta of rutas) {
      if (ruta.partes.length !== partes.length) continue;
      const params = {};
      const coincide = ruta.partes.every((p, i) => {
        if (p.charAt(0) === ":") { params[p.slice(1)] = decodeURIComponent(partes[i]); return true; }
        return p === partes[i];
      });
      if (coincide) return { ruta, params };
    }
    return null;
  }

  function pintar() {
    const encontrada = resolver(window.location.hash) || resolver("#/inicio");
    if (limpiar) { limpiar(); limpiar = null; }
    DC.ui.vaciar(contenedor);
    const vista = DC.ui.el("div.vista", { class: "vista-" + encontrada.ruta.nombre });
    contenedor.appendChild(vista);
    document.body.dataset.pantalla = encontrada.ruta.nombre;
    window.scrollTo(0, 0);
    const resultado = encontrada.ruta.pantalla(vista, encontrada.params);
    if (typeof resultado === "function") limpiar = resultado;
    const titulo = vista.querySelector("h1");
    if (titulo) {
      titulo.setAttribute("tabindex", "-1");
      titulo.focus({ preventScroll: true });
    }
  }

  DC.rutas = {
    /**
     * Registra una pantalla.
     * @param {string} patron p. ej. "sala/:id"
     * @param {Function} pantalla (contenedor, params) => limpiar?
     */
    registrar(patron, pantalla) {
      rutas.push({ partes: patron.split("/"), nombre: patron.split("/")[0], pantalla });
    },

    /** Va a una ruta (sin la almohadilla): DC.rutas.ir("sala/001"). */
    ir(ruta) {
      const destino = "#/" + ruta;
      if (window.location.hash === destino) pintar();
      else window.location.hash = destino;
    },

    /** Vuelve a pintar la pantalla actual. */
    refrescar() {
      pintar();
    },

    /** Arranca el enrutador sobre un contenedor. */
    iniciar(nodo) {
      contenedor = nodo;
      window.addEventListener("hashchange", pintar);
      pintar();
    }
  };
})(DetectiveCodex);
