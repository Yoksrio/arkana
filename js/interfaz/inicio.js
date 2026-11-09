/**
 * Pantalla de inicio: la portada de la agencia a pantalla completa, el título y el menú.
 */
(function (DC) {
  "use strict";

  const { el, boton, svg } = DC.ui;

  /** Datos del resumen (también los usa Estadísticas). */
  DC.resumen = function () {
    const estado = DC.estado.obtener();
    const fichas = DC.fichas();
    const resueltos = fichas.filter((f) => DC.partida.resuelto(f.id)).length;
    const tiempoHistorial = estado.historial.reduce((a, h) => a + (h.tiempo || 0), 0);
    const tiempoEnCurso = Object.keys(estado.partidas)
      .map((id) => estado.partidas[id])
      .filter((p) => !p.terminada)
      .reduce((a, p) => a + DC.partida.tiempo(p), 0);
    const puntos = DC.puntuacion.acumulada();
    return {
      resueltos,
      pendientes: fichas.length - resueltos,
      tiempo: tiempoHistorial + tiempoEnCurso,
      puntos,
      rango: DC.puntuacion.rango(puntos)
    };
  };

  /** Fondo de la agencia: la portada con sus veladuras. Lo usan inicio y «¿Quién es quién?». */
  DC.fondoAgencia = function () {
    return el("div.fondo-agencia", { "aria-hidden": "true" },
      el("img.fondo-agencia-imagen", { src: DC.portadaAgencia, alt: "", decoding: "async" }),
      el("div.fondo-agencia-velo"));
  };

  /**
   * Cabecera de las páginas de la agencia (estadísticas, ajustes): vuelta al inicio, título, lema e
   * ilustración a la derecha fundida con el fondo (D15).
   * @param {{titulo: string, lema: string, imagen: string}} o imagen: archivo de assets/img/agencia/.
   * @returns {HTMLElement}
   */
  /**
   * Cabecera de las páginas de la agencia: imagen a la derecha con el texto encima.
   * @param {{titulo: string, lema: string, imagen: string, foco?: string}} o `foco`: object-position de la imagen, para que no se corte la cara.
   */
  DC.cabeceraAgencia = function (o) {
    return el("header.agencia-cabecera", null,
      el("div.agencia-cabecera-imagen", { "aria-hidden": "true" },
        el("img", { src: DC.carpetaAgencia + o.imagen, alt: "", decoding: "async", style: o.foco ? "object-position:" + o.foco : null })),
      el("div.agencia-cabecera-texto", null,
        boton([DC.ui.icono("volver"), el("span", { text: DC.textos.archivo.inicio })], () => DC.rutas.ir("inicio"), "archivo-volver"),
        el("h1.agencia-titulo", { text: o.titulo }),
        el("p.agencia-lema", { text: o.lema })));
  };

  /** Equipo de la agencia: «Ana es Gismera · Bruno es Chiqui», con sus huellas. */
  function equipo() {
    const e = DC.detectives.equipo();
    if (!e) return null;
    return el("button.inicio-equipo", { type: "button", title: DC.textos.equipo.cambiar, onClick: () => DC.rutas.ir("equipo") },
      DC.detectives.lista().map((id) => el("span.inicio-equipo-miembro", null,
        DC.detectives.huella(id, "huella-mini"),
        el("span", { text: e[id] + " · " + DC.detectives.nombre(id) }))));
  }

  DC.rutas.registrar("inicio", (vista) => {
    const t = DC.textos.inicio;
    const activa = DC.partida.activa();
    const ficha = activa ? DC.ficha(activa.expedienteId) : null;
    const r = DC.resumen();
    const empezado = !!DC.detectives.equipo();
    const opcion = (texto, accion, detalle, desactivada) => boton(
      [el("span.menu-texto", { text: texto }), detalle ? el("span.menu-detalle", { text: detalle }) : null],
      accion, "menu-opcion", desactivada ? { disabled: true } : null);

    vista.appendChild(el("div.inicio",
      null,
      DC.fondoAgencia(),
      el("div.inicio-contenido", null,
        el("header.inicio-cabecera", null,
          svg(DC.ilustraciones.emblema(), "inicio-emblema"),
          el("h1.inicio-titulo", { text: DC.textos.app.nombre }),
          el("p.inicio-sobretitulo", null,
            el("span.inicio-adorno", { "aria-hidden": "true" }),
            el("span", { text: t.lemaPortada }),
            el("span.inicio-adorno", { "aria-hidden": "true" })),
          el("p.inicio-lema", { text: DC.textos.app.lema })),
        el("nav.menu", { "aria-label": DC.textos.app.nombre },
          boton(el("span.menu-texto", { text: t.nueva }), () => DC.rutas.ir("nueva"), "menu-principal"),
          activa
            ? opcion(t.continuar, () => DC.rutas.ir("sala/" + activa.expedienteId), DC.formato.plantilla(t.continuarCaso, ficha))
            : opcion(t.continuar, null, t.sinPartida, true),
          opcion(t.archivo, () => DC.rutas.ir("archivo"), empezado ? null : t.bloqueado, !empezado),
          opcion(t.historia, () => DC.rutas.ir("historia"), empezado ? t.historiaDetalle : t.bloqueado, !empezado),
          opcion(t.resueltos, () => DC.rutas.ir("resueltos"), r.resueltos ? null : t.sinResueltos, !r.resueltos),
          opcion(t.hemeroteca, () => DC.rutas.ir("hemeroteca"), r.resueltos ? null : t.sinPrensa, !r.resueltos),
          opcion(t.estadisticas, () => DC.rutas.ir("estadisticas")),
          opcion(t.ajustes, () => DC.rutas.ir("ajustes")),
          DC.ui.botonPantallaCompleta("menu-opcion menu-pantalla"))),
      el("footer.inicio-pie", null,
        equipo(),
        el("dl.inicio-resumen", null,
          [
            [t.resumen.resueltos, r.resueltos + " / " + (r.resueltos + r.pendientes)],
            [t.resumen.tiempo, DC.formato.tiempo(r.tiempo)],
            [t.resumen.puntos, DC.formato.numero(r.puntos)],
            [t.resumen.rango, DC.textos.rangos[r.rango.id]]
          ].map(([etiqueta, valor]) => el("div.resumen-dato", null, el("dt", { text: etiqueta }), el("dd", { text: String(valor) })))))));
  });
})(DetectiveCodex);
