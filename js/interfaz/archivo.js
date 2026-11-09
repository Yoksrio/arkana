/**
 * Archivo de expedientes (D11, D27): cabecera de la agencia, la barra de secciones del centro de
 * operaciones (Expedientes, Correspondencia, Casos resueltos, Hemeroteca, Estadísticas) y las fichas
 * de los casos de arriba abajo, en tramos: el primero, los que se juegan en el orden que se quiera y
 * el sellado del final (D30).
 */
(function (DC) {
  "use strict";

  const { el, boton, svg, icono } = DC.ui;
  const SECCIONES = [
    ["expedientes", "archivo", "expedientes"],
    ["correspondencia", "correspondencia", "carta"],
    ["resueltos", "resueltos", "tablero"],
    ["hemeroteca", "hemeroteca", "recorte"],
    ["estadisticas", "estadisticas", "huella"]
  ];

  /**
   * Estado de una ficha: noIniciado, enCurso, resuelto, preparacion o bloqueado.
   * @returns {string}
   */
  DC.estadoFicha = function (ficha) {
    if (ficha.requiere && !ficha.requiere.every((id) => DC.partida.resuelto(id))) return "bloqueado";
    if (!DC.expediente(ficha.id)) return "preparacion";
    if (DC.partida.resuelto(ficha.id) && !(DC.partida.obtener(ficha.id) && !DC.partida.obtener(ficha.id).terminada)) return "resuelto";
    return DC.partida.obtener(ficha.id) ? "enCurso" : "noIniciado";
  };

  /**
   * Barra de secciones del archivo: vuelta al inicio y las cuatro secciones, con la activa marcada.
   * @param {string} activa "expedientes" | "correspondencia" | "resueltos" | "hemeroteca" | "estadisticas"
   * @returns {HTMLElement}
   */
  DC.barraArchivo = function (activa) {
    const t = DC.textos.archivo;
    return el("nav.archivo-barra", { "aria-label": t.secciones.titulo },
      boton([icono("volver"), el("span", { text: t.inicio })], () => DC.rutas.ir("inicio"), "archivo-volver", { title: t.volverInicio }),
      el("div.archivo-secciones", null, SECCIONES.map(([id, ruta, nombreIcono]) => boton(
        [icono(nombreIcono, nombreIcono === "huella" ? "icono-relleno" : null), el("span", { text: t.secciones[id] })],
        () => DC.rutas.ir(ruta), "archivo-seccion" + (id === activa ? " activa" : ""), { "aria-current": id === activa ? "page" : null }))));
  };

  function tarjeta(ficha, indice) {
    const t = DC.textos.archivo;
    const estado = DC.estadoFicha(ficha);
    const abrible = estado !== "preparacion" && estado !== "bloqueado";
    const expediente = DC.expediente(ficha.id);
    const portada = expediente && expediente.portada
      ? DC.imagenes.figura(expediente, expediente.portada, { clase: "ficha-portada" })
      : svg(DC.ilustraciones.portada(ficha.motivo, ficha.titulo), "ficha-portada");
    const abrir = () => { DC.sonido.reproducir("papel"); DC.rutas.ir("expediente/" + ficha.id); };

    return el("article.ficha", { class: "ficha-" + estado, style: "--orden:" + indice },
      el("div.ficha-cabeza", null,
        portada,
        el("span.ficha-numero", { text: "Nº " + ficha.numero }),
        estado !== "noIniciado" ? el("span.ficha-estado", { class: "estado-" + estado, text: t.estados[estado] }) : null),
      el("div.ficha-cuerpo", null,
        el("h2.ficha-titulo", { text: ficha.titulo }),
        el("p.ficha-genero", { text: ficha.genero }),
        el("p.ficha-sinopsis", { text: ficha.sinopsis }),
        el("div.ficha-datos", null,
          DC.detectives.dificultad(ficha.dificultad),
          el("span.ficha-dato", { title: t.duracion }, icono("reloj"), el("span", { text: ficha.duracion })),
          el("span.ficha-dato", { title: t.pruebas }, icono("pruebas"), el("span", { text: String(ficha.pruebas) }))),
        abrible
          ? boton([el("span", { text: estado === "enCurso" ? t.continuar : t.abrir }), icono("flecha")], abrir, "ficha-boton")
          : el("div.ficha-cerrada", null,
            boton(el("span", { text: t.abrir }), null, "ficha-boton", { disabled: true, "aria-describedby": "motivo-" + ficha.id }),
            el("p.ficha-motivo", { id: "motivo-" + ficha.id, text: DC.formato.plantilla(t.motivos[estado], {
              numeros: (ficha.requiere || []).filter((id) => !DC.partida.resuelto(id)).map((id) => (DC.ficha(id) || { numero: id }).numero).join(", ")
            }) }))));
  }

  /**
   * Ficha del expediente final mientras sigue cerrado (D30): sin título ni sinopsis, con un sello por
   * cada caso que hay que cerrar antes.
   */
  function fichaSellada(ficha, indice) {
    const t = DC.textos.archivo;
    const rotos = ficha.requiere.filter((id) => DC.partida.resuelto(id)).length;
    return el("article.ficha ficha-sellada", { style: "--orden:" + indice },
      el("div.ficha-cabeza", null,
        el("div.ficha-sello-portada", { "aria-hidden": "true" }, icono("tablero")),
        el("span.ficha-numero", { text: "Nº " + ficha.numero })),
      el("div.ficha-cuerpo", null,
        el("h2.ficha-titulo", { text: t.sellado.titulo }),
        el("p.ficha-sinopsis", { text: t.sellado.texto }),
        el("ol.ficha-sellos", { "aria-label": DC.formato.plantilla(t.sellado.rotos, { n: rotos, total: ficha.requiere.length }) },
          ficha.requiere.map((id) => {
            const previa = DC.ficha(id) || { numero: id };
            const roto = DC.partida.resuelto(id);
            return el("li.ficha-sello", { class: roto ? "roto" : null, title: "Nº " + previa.numero },
              el("span", { text: previa.numero }));
          })),
        el("p.ficha-motivo", { text: DC.formato.plantilla(t.sellado.rotos, { n: rotos, total: ficha.requiere.length }) })));
  }

  /**
   * Los expedientes de arriba abajo (D30), en tramos según lo que piden para abrirse: el primero
   * solo, los que se abren con él (en el orden que elijan) y el sellado, que pide todos los demás.
   * @returns {HTMLElement[]}
   */
  function tramos() {
    const t = DC.textos.archivo;
    const fichas = DC.fichas();
    const nivel = (f) => (!f.requiere || !f.requiere.length ? 0 : f.requiere.length === 1 ? 1 : 2);
    let indice = 0;
    return ["primero", "libres", "final"].map((clave, n) => {
      const grupo = fichas.filter((f) => nivel(f) === n);
      if (!grupo.length) return null;
      return el("section.archivo-tramo", { class: "archivo-tramo-" + clave },
        el("header.archivo-tramo-cabecera", null,
          el("h2.archivo-tramo-titulo", { text: t.tramos[clave].titulo }),
          el("p.archivo-tramo-texto", { text: t.tramos[clave].texto })),
        el("div.archivo-tramo-fichas", null, grupo.map((f) =>
          (n === 2 && DC.estadoFicha(f) === "bloqueado" ? fichaSellada(f, indice++) : tarjeta(f, indice++)))));
    });
  }

  DC.rutas.registrar("archivo", (vista) => {
    if (!DC.detectives.equipo()) {
      DC.rutas.ir("inicio");
      return null;
    }
    if (!DC.clave.descubierta()) {
      DC.rutas.ir("carta");
      return null;
    }
    const t = DC.textos.archivo;
    vista.appendChild(el("div.archivo", null,
      el("header.archivo-cabecera", null,
        el("div.archivo-padre", { "aria-hidden": "true" }, el("img", { src: DC.retratoYoksrio, alt: "", decoding: "async" })),
        DC.ui.marca(() => DC.rutas.ir("inicio")),
        el("p.archivo-lema", null, el("span", { text: t.lema }), DC.detectives.huella(DC.detectives.lista()[1], "archivo-lema-huella")),
        el("div.archivo-gatas", { "aria-hidden": "true" }, el("img", { src: DC.portadaAgencia, alt: "", decoding: "async" }))),
      DC.barraArchivo("expedientes"),
      el("div.archivo-zona", null, tramos())));
  });
})(DetectiveCodex);
