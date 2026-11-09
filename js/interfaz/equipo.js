/**
 * Equipo de la agencia (D10, D13): las tarjetas de Gismera y Chiqui con el nombre de su persona,
 * editable e intercambiable. Las usan la pantalla «¿Quién es quién?» y el modal de nueva partida.
 */
(function (DC) {
  "use strict";

  const { el, boton, icono } = DC.ui;
  const ICONO_DETECTIVE = { gismera: "resumen", chiqui: "brujula" };

  /**
   * Pareja de tarjetas editable.
   * @param {string} prefijo Prefijo de los id de los campos (debe ser único en la página).
   * @returns {{nodo: HTMLElement, campos: object, leer: function(HTMLElement): ?object}}
   *   `leer(error)` devuelve {gismera, chiqui} o null tras escribir el motivo en `error`.
   */
  DC.equipoEditable = function (prefijo) {
    const t = DC.textos.equipo;
    const actual = DC.detectives.equipo() || {};
    const campos = {};

    const tarjetas = DC.detectives.lista().map((id) => {
      const nombre = DC.detectives.nombre(id);
      campos[id] = el("input.equipo-campo", {
        id: prefijo + "-" + id, maxlength: "24", autocomplete: "off", placeholder: t.ejemplo, value: actual[id] || "",
        "aria-label": DC.formato.plantilla(t.etiqueta, { nombre })
      });
      return el("div.equipo-detective", null,
        DC.detectives.retrato(id, "equipo-retrato"),
        el("div.equipo-detective-datos", null,
          el("strong.equipo-detective-nombre", { text: nombre }),
          el("span.equipo-detective-rol", null, icono(ICONO_DETECTIVE[id]), el("span", { text: DC.textos.detectives[id].rol })),
          el("label.equipo-persona", { for: prefijo + "-" + id }, icono("persona"), campos[id], icono("lapiz", "equipo-lapiz"))));
    });

    const intercambiar = boton(icono("intercambiar"), () => {
      const g = campos.gismera.value;
      campos.gismera.value = campos.chiqui.value;
      campos.chiqui.value = g;
      DC.sonido.reproducir("papel");
    }, "equipo-intercambiar", { "aria-label": t.intercambiar, title: t.intercambiar });

    function leer(error) {
      const nombres = { gismera: campos.gismera.value.trim(), chiqui: campos.chiqui.value.trim() };
      const vacio = DC.detectives.lista().find((id) => !nombres[id]);
      if (vacio) {
        error.textContent = t.faltan;
        campos[vacio].focus();
        return null;
      }
      if (nombres.gismera.toLowerCase() === nombres.chiqui.toLowerCase()) {
        error.textContent = t.iguales;
        campos.chiqui.focus();
        return null;
      }
      return nombres;
    }

    return { nodo: el("div.equipo-pareja", null, tarjetas[0], intercambiar, tarjetas[1]), campos, leer };
  };

  DC.rutas.registrar("equipo", (vista) => {
    const t = DC.textos.equipo;
    const error = el("p.formulario-error", { role: "alert" });
    const pareja = DC.equipoEditable("equipo");

    function seguir(evento) {
      evento.preventDefault();
      const nombres = pareja.leer(error);
      if (!nombres) return;
      DC.detectives.guardarEquipo(nombres);
      DC.sonido.reproducir("sello");
      DC.rutas.ir(DC.clave.descubierta() ? "archivo" : "carta");
    }

    vista.appendChild(el("div.equipo", null,
      DC.fondoAgencia(),
      el("form.equipo-contenido", { onSubmit: seguir },
        el("header.equipo-cabecera", null,
          boton("← " + DC.textos.app.volver, () => DC.rutas.ir("inicio"), "boton-texto"),
          el("h1", { text: t.titulo }),
          el("p.subtitulo", { text: t.subtitulo })),
        el("div.equipo-hoja", null,
          el("span.hoja-etiqueta", { "aria-hidden": "true" }, icono("huella", "icono-relleno")),
          pareja.nodo,
          el("p.hoja-ambiente", null, icono("pluma"), el("span", { text: DC.textos.nueva.ambiente[Math.floor(Math.random() * DC.textos.nueva.ambiente.length)] })),
          error,
          el("button.boton-lacre", { type: "submit" }, el("span", { text: t.seguir }), icono("flecha"))))));
    const vacio = DC.detectives.lista().find((id) => !pareja.campos[id].value);
    setTimeout(() => pareja.campos[vacio || "gismera"].focus(), 0);
  });
})(DetectiveCodex);
