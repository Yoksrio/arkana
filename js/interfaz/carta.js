/**
 * La carta de Yoksrio (D16): primer enigma de la agencia, entre «¿Quién es quién?» y el archivo.
 * Los jugadores pulsan un símbolo y le asignan una letra (en toda la carta a la vez); la tabla se
 * va rellenando. Al responder bien, la clave queda descubierta y la carta se lee en claro.
 */
(function (DC) {
  "use strict";

  const { el, boton, icono } = DC.ui;
  const AUTORES = ["gismera", "chiqui", "yoksrio"];

  let estado = null;

  function textoCarta() {
    const c = DC.clave.carta();
    return DC.decodificar(c.id, c.carta);
  }

  function pieza(letra) {
    return el("button.clave-pieza", {
      type: "button", dataset: { simbolo: letra }, "aria-label": DC.textos.carta.simbolo,
      onClick: () => elegir(letra)
    }, DC.clave.simbolo(letra), el("span.clave-escrita"));
  }

  function elegir(letra) {
    estado.elegido = estado.elegido === letra ? null : letra;
    DC.sonido.reproducir("tecla");
    refrescar();
  }

  function asignar(letra) {
    if (!estado.elegido) return;
    DC.clave.asignar(estado.elegido, letra);
    refrescar();
  }

  function refrescar() {
    const a = DC.clave.asignaciones();
    estado.papel.querySelectorAll(".clave-pieza").forEach((p) => {
      const s = p.dataset.simbolo;
      p.classList.toggle("elegido", s === estado.elegido);
      p.querySelector(".clave-escrita").textContent = a[s] || "";
    });
    const usadas = Object.keys(a).map((k) => a[k]);
    estado.teclas.querySelectorAll("[data-letra]").forEach((b) => {
      b.disabled = !estado.elegido;
      b.classList.toggle("usada", usadas.indexOf(b.dataset.letra) !== -1);
    });
    DC.ui.vaciar(estado.tabla).appendChild(DC.clave.tabla(a));
  }

  function teclado(e) {
    if (!estado || !estado.elegido || (e.target.closest && e.target.closest("input, textarea"))) return;
    if (e.key === "Escape") { estado.elegido = null; refrescar(); return; }
    if (e.key === "Backspace" || e.key === "Delete") { e.preventDefault(); asignar(""); return; }
    const letra = e.key.length === 1 ? e.key.toUpperCase() : "";
    if (DC.clave.LETRAS.indexOf(letra) !== -1) { e.preventDefault(); asignar(letra); }
  }

  function retratoAutor(autor) {
    return autor === "yoksrio"
      ? el("img.carta-pista-foto", { src: DC.retratoYoksrio, alt: "", decoding: "async" })
      : DC.detectives.retrato(autor, "detective-mini");
  }

  function pintarPistas() {
    const t = DC.textos.carta;
    const c = DC.clave.carta();
    const usadas = DC.clave.pistasUsadas();
    DC.ui.vaciar(estado.pistas).append(
      el("h2.agencia-rotulo", { text: t.pistas }),
      el("ol.carta-pistas-lista", null, AUTORES.slice(0, usadas).map((autor, i) => el("li.carta-pista", null,
        retratoAutor(autor),
        el("p", { text: i < c.pistas.length ? DC.decodificar(c.id, c.pistas[i]) : t.yoksrio })))),
      usadas < AUTORES.length
        ? boton(DC.formato.plantilla(t.pedir, { nombre: t.nombres[usadas] }), () => {
          DC.clave.pedirPista();
          DC.sonido.reproducir("papel");
          pintarPistas();
          refrescar();
        }, "agencia-boton")
        : "");
  }

  /**
   * La carta en claro con la tabla de la clave, en estilo telegráfico: cada punto final es un STOP
   * (D27). Recién descifrada (`animar`), se escribe línea a línea como un teletipo, parando en
   * cada STOP; al volver a leerla, aparece entera.
   */
  function pintarResuelta(vista, animar) {
    const t = DC.textos.carta;
    const firma = DC.textos.clave.firma;
    const lineas = textoCarta().split("\n").filter((l) => l.trim())
      .map((l) => (l.trim() === firma ? l : l.replace(/\.(?=\s|$)/g, " " + DC.textos.clave.stop)));
    const nodos = lineas.map((l) => el("p.carta-claro", { text: animar ? "" : l }));
    // Recién descifrada, la pantalla cambia sin cambiar de ruta: volver arriba para ver la carta llegar.
    window.scrollTo(0, 0);
    if (animar) DC.telegrafo.teclearSeguidos(lineas.map((texto, i) => ({ nodo: nodos[i], texto })));
    DC.ui.vaciar(vista).appendChild(mesa(
      cabecera(),
      el("div.carta-cuerpo", null,
        el("article.carta-papel carta-en-claro", null,
          el("p.carta-sello", { text: t.resuelta }),
          nodos),
        el("aside.carta-panel", null,
          el("img.carta-yoksrio", { src: DC.yoksrioCarta, alt: "", decoding: "async" }),
          el("section.agencia-tarjeta", null,
            el("h2.agencia-rotulo", { text: DC.textos.clave.tabla }),
            el("p.ajuste-ayuda", { text: t.resueltaTexto }),
            DC.clave.tabla()),
          boton([el("span", { text: t.seguir }), icono("flecha")], () => DC.rutas.ir("archivo"), "boton-lacre")))));
  }

  function mesa(...hijos) {
    const fondo = new URL(DC.fondoMesa, document.baseURI).href;
    return el("div.carta", { style: "--fondo-mesa:url(\"" + fondo + "\")" }, hijos);
  }

  function cabecera() {
    const t = DC.textos.carta;
    return el("header.carta-cabecera", null,
      DC.ui.marca(() => DC.rutas.ir("inicio"), "marca-compacta"),
      el("div.carta-titulos", null,
        el("h1.carta-titulo", { text: t.titulo }),
        el("p.carta-subtitulo", { text: t.subtitulo })));
  }

  DC.rutas.registrar("carta", (vista) => {
    if (!DC.detectives.equipo()) {
      DC.rutas.ir("inicio");
      return null;
    }
    if (DC.clave.descubierta()) {
      pintarResuelta(vista);
      return null;
    }
    const t = DC.textos.carta;
    const mensaje = el("p.carta-mensaje", { role: "status", "aria-live": "assertive" });
    const campo = el("input.campo carta-campo", { id: "carta-respuesta", autocomplete: "off", spellcheck: "false", placeholder: t.escribir });
    estado = {
      elegido: null,
      papel: el("article.carta-papel", null, DC.clave.escribir(textoCarta(), pieza)),
      teclas: el("div.carta-teclas", { role: "group", "aria-label": t.letras },
        DC.clave.LETRAS.split("").map((l) => boton(l, () => asignar(l), "carta-tecla", { dataset: { letra: l }, disabled: true })),
        boton(icono("volver"), () => asignar(""), "carta-tecla carta-tecla-borrar", { "aria-label": t.borrar, title: t.borrar })),
      tabla: el("div.carta-tabla"),
      pistas: el("section.agencia-tarjeta carta-pistas")
    };

    const form = el("form.carta-respuesta", { onSubmit: (e) => {
      e.preventDefault();
      if (!campo.value.trim()) return;
      if (DC.clave.responder(campo.value)) {
        DC.sonido.reproducir("acierto");
        DC.ui.sello(t.resuelta).then(() => pintarResuelta(vista, true));
        return;
      }
      DC.sonido.reproducir("error");
      mensaje.textContent = t.error;
      form.classList.add("temblor");
    } },
    el("label.agencia-rotulo", { for: "carta-respuesta", text: t.pregunta }),
    el("div.prueba-linea", null, campo, el("button", { type: "submit", class: "boton boton-oro", text: t.comprobar })),
    mensaje);
    form.addEventListener("animationend", () => form.classList.remove("temblor"));

    vista.appendChild(mesa(
      cabecera(),
      el("div.carta-cuerpo", null,
        estado.papel,
        el("aside.carta-panel", null,
          el("img.carta-yoksrio", { src: DC.yoksrioCarta, alt: "", decoding: "async" }),
          el("section.agencia-tarjeta", null,
            el("h2.agencia-rotulo", { text: t.comoTitulo }),
            el("p.ajuste-ayuda", { text: t.instrucciones }),
            estado.teclas),
          el("section.agencia-tarjeta", null, el("h2.agencia-rotulo", { text: t.tabla }), estado.tabla),
          el("section.agencia-tarjeta", null, form),
          estado.pistas))));

    pintarPistas();
    refrescar();
    document.addEventListener("keydown", teclado);
    return () => {
      document.removeEventListener("keydown", teclado);
      estado = null;
    };
  });
})(DetectiveCodex);
