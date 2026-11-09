/**
 * Transcripción casilla a casilla de un texto en la clave de Yoksrio (D26). Cada símbolo es una
 * casilla: se pulsa, se escribe su letra (teclado o botones) y la selección salta a la siguiente
 * vacía. Al rellenar la última se comprueba sola; también hay un botón. Los símbolos mal
 * transcritos se marcan para poder repasarlos. La usan el telegrama de Yoksrio en Inspector jefe
 * y el minijuego «telegrama».
 */
(function (DC) {
  "use strict";

  DC.transcripcion = {
    /**
     * Compara lo escrito con lo esperado.
     * @param {string[]} esperadas Letras del texto, en orden.
     * @param {string[]} escritas Letras escritas por los jugadores ("" si falta).
     * @returns {{faltan: number, mal: number[]}} Casillas vacías y posiciones equivocadas.
     */
    comparar(esperadas, escritas) {
      let faltan = 0;
      const mal = [];
      esperadas.forEach((letra, i) => {
        const escrita = escritas[i] || "";
        if (!escrita) faltan += 1;
        else if (escrita !== letra) mal.push(i);
      });
      return { faltan, mal };
    },

    /**
     * El bloque de transcripción: el texto cifrado con sus casillas, el aviso, las teclas y el botón.
     * @param {string} texto Texto en claro (el que se muestra en la clave).
     * @param {{alAcertar: Function}} o
     * @returns {HTMLElement}
     */
    crear(texto, o) {
      const { el, boton, icono } = DC.ui;
      const t = DC.textos.clave;
      const esperadas = DC.clave.letrasDe(texto);
      const escritas = esperadas.map(() => "");
      const casillas = [];
      let elegida = 0;
      let acertada = false;
      const aviso = el("p.transcripcion-aviso", { role: "status", "aria-live": "polite" });

      function pieza(letra, indice) {
        const i = Number(indice);
        const nodo = el("button.clave-pieza", {
          type: "button", dataset: { indice }, "aria-label": DC.formato.plantilla(t.casilla, { n: i + 1 }),
          onClick: () => { elegida = i; DC.sonido.reproducir("tecla"); refrescar(); }
        }, DC.clave.simbolo(letra), el("span.clave-escrita"));
        casillas[i] = nodo;
        return nodo;
      }

      function refrescar() {
        casillas.forEach((c, i) => {
          c.classList.toggle("elegido", i === elegida);
          c.querySelector(".clave-escrita").textContent = escritas[i];
          if (escritas[i]) c.classList.remove("clave-pieza-mal");
        });
        const actual = casillas[elegida];
        if (actual && document.activeElement !== actual && raiz.contains(document.activeElement)) actual.focus({ preventScroll: true });
      }

      function siguienteVacia(desde) {
        for (let k = 1; k <= escritas.length; k++) {
          const i = (desde + k) % escritas.length;
          if (!escritas[i]) return i;
        }
        return Math.min(desde + 1, escritas.length - 1);
      }

      function escribir(letra) {
        if (acertada) return;
        escritas[elegida] = letra;
        DC.sonido.reproducir("tecla");
        elegida = siguienteVacia(elegida);
        refrescar();
        if (escritas.every(Boolean)) comprobar(true);
      }

      function borrar() {
        if (acertada) return;
        if (!escritas[elegida] && elegida > 0) elegida -= 1;
        escritas[elegida] = "";
        aviso.textContent = "";
        refrescar();
      }

      function comprobar(automatica) {
        const r = DC.transcripcion.comparar(esperadas, escritas);
        if (r.faltan && !automatica) { aviso.textContent = DC.formato.plantilla(t.transcripcionFaltan, { n: r.faltan }); return; }
        if (r.mal.length) {
          r.mal.forEach((i) => casillas[i].classList.add("clave-pieza-mal"));
          if (!r.faltan) { DC.sonido.reproducir("error"); aviso.textContent = DC.formato.plantilla(t.transcripcionMal, { n: r.mal.length }); }
          return;
        }
        if (r.faltan) return;
        acertada = true;
        aviso.textContent = t.transcripcionBien;
        raiz.classList.add("transcripcion-acertada");
        o.alAcertar();
      }

      function teclado(e) {
        if (e.target.closest("input, textarea")) return;
        if (e.key === "Backspace" || e.key === "Delete") { e.preventDefault(); borrar(); return; }
        if (e.key === "ArrowRight") { e.preventDefault(); elegida = Math.min(elegida + 1, escritas.length - 1); refrescar(); return; }
        if (e.key === "ArrowLeft") { e.preventDefault(); elegida = Math.max(elegida - 1, 0); refrescar(); return; }
        const letra = e.key.length === 1 ? e.key.toUpperCase() : "";
        if (DC.clave.LETRAS.indexOf(letra) !== -1) { e.preventDefault(); escribir(letra); }
      }

      const raiz = el("div.transcripcion", { onKeydown: teclado },
        DC.clave.escribir(texto, pieza),
        el("p.ayuda transcripcion-ayuda", { text: t.transcripcionAyuda }),
        el("div.transcripcion-teclas", { role: "group", "aria-label": t.letras },
          DC.clave.LETRAS.split("").map((l) => boton(l, () => escribir(l), "transcripcion-tecla", { dataset: { letra: l } })),
          boton(icono("volver"), borrar, "transcripcion-tecla transcripcion-borrar", { "aria-label": t.borrar, title: t.borrar })),
        el("div.transcripcion-pie", null,
          boton(t.comprobar, () => comprobar(false), "boton-oro transcripcion-comprobar"),
          aviso));
      refrescar();
      return raiz;
    }
  };
})(DetectiveCodex);
