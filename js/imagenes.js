/**
 * Imágenes de los expedientes (D3): si existe assets/img/<caso>/<archivo>, se usa; si no, la
 * ilustración SVG de respaldo. También pinta los visuales SVG propios de cada caso.
 */
(function (DC) {
  "use strict";

  const CARPETA = "assets/img/";

  function respaldo(expediente, imagen) {
    const r = (imagen && imagen.respaldo) || {};
    if (r.visual && expediente.visuales && expediente.visuales[r.visual]) return expediente.visuales[r.visual];
    const generador = DC.ilustraciones[r.generica] || DC.ilustraciones.paisaje;
    return generador(r.rotulo || "");
  }

  DC.imagenes = {
    /**
     * Figura con la imagen de un expediente.
     * @param {object} expediente
     * @param {string} idImagen
     * @param {{clase?: string, pie?: string}} [opciones]
     * @returns {HTMLElement}
     */
    figura(expediente, idImagen, opciones) {
      const o = opciones || {};
      const imagen = (expediente.imagenes || []).find((i) => i.id === idImagen);
      const marco = DC.ui.svg(respaldo(expediente, imagen), "imagen-marco");
      const figura = DC.ui.el("figure.imagen", { class: o.clase }, marco, o.pie ? DC.ui.el("figcaption", { text: o.pie }) : null);
      if (imagen && imagen.archivo) {
        const img = new Image();
        img.alt = o.pie || imagen.id;
        img.decoding = "async";
        img.onload = () => {
          DC.ui.vaciar(marco);
          marco.appendChild(img);
          figura.classList.add("imagen-real");
        };
        img.src = CARPETA + expediente.id + "/" + imagen.archivo;
      }
      return figura;
    },

    /**
     * Visual SVG propio del expediente. Si lleva una fotografía de fondo (<image>) y falta el
     * fichero, se quita y queda el dibujo de respaldo que tenga debajo.
     * @param {object} expediente
     * @param {string} id
     * @param {{interactivo?: boolean}} [opciones] Si no es interactivo, los puntos no responden.
     * @returns {HTMLElement}
     */
    visual(expediente, id, opciones) {
      const marcado = (expediente.visuales || {})[id] || "";
      const nodo = DC.ui.svg(marcado, "ilustracion" + ((opciones || {}).interactivo ? " ilustracion-interactiva" : " ilustracion-inerte"));
      nodo.querySelectorAll("image").forEach((foto) => foto.addEventListener("error", () => foto.remove()));
      if (!(opciones || {}).interactivo) {
        nodo.querySelectorAll("[data-punto]").forEach((p) => {
          p.removeAttribute("tabindex");
          p.removeAttribute("role");
        });
      }
      return nodo;
    }
  };
})(DetectiveCodex);
