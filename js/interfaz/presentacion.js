/**
 * Historia y personajes (D14): presentación narrativa en escenas, agrupadas en capítulos
 * (la agencia, las hermanas, nuestra historia y comenzar). Dos rutas: #/nueva es el
 * primer paso de «Nueva investigación» (sigue a «¿Quién es quién?»); #/historia la vuelve a
 * mostrar desde el menú cuando ya se ha empezado. Cada escena muestra la ilustración nítida y el
 * texto sobre una copia difuminada de la misma imagen.
 */
(function (DC) {
  "use strict";

  const { el, boton, icono } = DC.ui;
  const GENEROS = ["aventura", "crimen", "misterio", "tesoro", "enigmas"];

  function contenido(datos) {
    const t = DC.textos.presentacion;
    return el("div.escena-texto", null,
      el("p.escena-sobretitulo", { text: datos.sobretitulo }),
      el("h1.escena-titulo", { text: datos.titulo }),
      datos.lema ? el("p.escena-lema", { text: datos.lema }) : null,
      (datos.parrafos || []).map((p) => el("p.escena-parrafo", { text: p })),
      datos.generos ? el("ul.escena-generos", null, GENEROS.map((g) =>
        el("li", null, icono(g), el("span", { text: DC.textos.archivo.categorias[g] })))) : null,
      datos.rasgos ? el("dl.escena-rasgos", null, datos.rasgos.map(([k, v]) =>
        el("div", null, el("dt", { text: k }), el("dd", { text: v })))) : null,
      datos.dialogo ? el("div.escena-dialogo", null, datos.dialogo.map(([quien, frase]) =>
        el("p", { class: "dialogo-" + quien.toLowerCase() }, el("strong", { text: quien }), el("span", { text: frase })))) : null,
      datos.cita ? el("blockquote.escena-cita", null, el("p", { text: datos.cita }),
        el("footer", { text: "— " + datos.autor })) : null,
      datos.cierre ? el("p.escena-cierre", { text: datos.cierre }) : null,
      datos.final ? el("div.escena-acciones", null,
        boton([el("span", { text: estado.nueva ? t.elegir : t.irArchivo }), icono("flecha")], seguir, "boton-lacre"),
        boton(t.repetir, () => irA(0), "boton-texto")) : null);
  }

  function escena(datos, indice) {
    const src = DC.carpetaAgencia + datos.imagen;
    return el("section.escena", {
      class: "escena-" + datos.id + (indice % 2 ? " escena-invertida" : "") + (DC.ui.reducirMovimiento() ? "" : " escena-entrando"),
      "aria-labelledby": "escena-titulo"
    },
    el("img.escena-fondo", { src, alt: "", "aria-hidden": "true", decoding: "async" }),
    el("figure.escena-imagen", null,
      el("img", { src, alt: datos.titulo, decoding: "async" })),
    contenido(datos));
  }

  let estado = null;

  /** Final de la historia: en una partida nueva, a «¿Quién es quién?»; si no, al archivo. */
  function seguir() {
    DC.rutas.ir(estado.nueva ? "equipo" : "archivo");
  }

  function salir() {
    DC.rutas.ir(estado.nueva ? "equipo" : "inicio");
  }

  function pintar() {
    const t = DC.textos.presentacion;
    const escenas = t.escenas;
    const actual = escenas[estado.indice];
    DC.ui.vaciar(estado.nodoEscena).appendChild(escena(actual, estado.indice));
    const titulo = estado.nodoEscena.querySelector("h1");
    titulo.id = "escena-titulo";
    titulo.setAttribute("tabindex", "-1");

    DC.ui.vaciar(estado.nodoCapitulos);
    Object.keys(t.capitulos).forEach((cap) => {
      const primera = escenas.findIndex((e) => e.capitulo === cap);
      const activo = actual.capitulo === cap;
      estado.nodoCapitulos.appendChild(el("li", null, boton(t.capitulos[cap], () => irA(primera),
        "presentacion-capitulo" + (activo ? " activo" : ""), { "aria-current": activo ? "step" : null })));
    });

    DC.ui.vaciar(estado.nodoPuntos);
    escenas.forEach((e, i) => estado.nodoPuntos.appendChild(el("span.presentacion-punto", { class: i === estado.indice ? "activo" : "" })));
    estado.nodoPuntos.setAttribute("aria-label", (estado.indice + 1) + " / " + escenas.length);
    estado.anterior.disabled = estado.indice === 0;
    estado.siguiente.disabled = !!actual.final;
  }

  function irA(indice) {
    const total = DC.textos.presentacion.escenas.length;
    if (indice < 0 || indice >= total || indice === estado.indice) return;
    estado.indice = indice;
    DC.sonido.reproducir("papel");
    pintar();
    const titulo = estado.nodoEscena.querySelector("h1");
    if (titulo) titulo.focus({ preventScroll: true });
  }

  function teclado(e) {
    if (e.target.closest && e.target.closest("input, textarea")) return;
    if (e.key === "ArrowRight") irA(estado.indice + 1);
    else if (e.key === "ArrowLeft") irA(estado.indice - 1);
  }

  function montar(vista, nueva) {
    const t = DC.textos.presentacion;
    estado = {
      nueva,
      indice: 0,
      nodoEscena: el("div.presentacion-escena", { "aria-live": "polite" }),
      nodoCapitulos: el("ol.presentacion-capitulos"),
      nodoPuntos: el("div.presentacion-puntos", { role: "img" }),
      anterior: boton([icono("izquierda"), el("span", { text: t.anterior })], () => irA(estado.indice - 1), "presentacion-paso"),
      siguiente: boton([el("span", { text: t.siguiente }), icono("derecha")], () => irA(estado.indice + 1), "presentacion-paso presentacion-siguiente")
    };

    vista.appendChild(el("div.presentacion", null,
      el("header.presentacion-cabecera", null,
        DC.ui.marca(() => DC.rutas.ir("inicio"), "marca-compacta"),
        el("nav.presentacion-indice", { "aria-label": t.titulo }, estado.nodoCapitulos),
        boton(nueva ? t.saltar : t.salir, salir, "boton-texto presentacion-saltar")),
      estado.nodoEscena,
      el("footer.presentacion-pie", null, estado.anterior, estado.nodoPuntos, estado.siguiente)));

    pintar();
    document.addEventListener("keydown", teclado);
    return () => {
      document.removeEventListener("keydown", teclado);
      estado = null;
    };
  }

  DC.rutas.registrar("nueva", (vista) => montar(vista, true));

  DC.rutas.registrar("historia", (vista) => {
    if (!DC.detectives.equipo()) {
      DC.rutas.ir("inicio");
      return null;
    }
    return montar(vista, false);
  });
})(DetectiveCodex);
