/**
 * Resumen del expediente, primera sección del cuaderno (D12): introducción, antecedentes y objetivo
 * en la hoja izquierda; en la derecha, los botones de la partida con sus cifras (D26), personajes,
 * documentos iniciales, fotografías y cronología. Desde aquí empieza (o continúa) la partida.
 */
(function (DC) {
  "use strict";

  const { el, boton, parrafos, icono } = DC.ui;
  const FOTOS_VISIBLES = 3;
  const ICONO_DOC = { carta: "carta", telegrama: "carta", recorte: "recorte", mapa: "lugares", fotografia: "resumen" };

  DC.salaPaneles = DC.salaPaneles || {};

  function seccion(titulo, ...contenido) {
    return el("section.dossier-seccion", null, el("h2.dossier-rotulo", { text: titulo }), contenido);
  }

  /**
   * Foto de un personaje con su nombre en una tira de papel, como una polaroid pegada.
   * @param {object} expediente
   * @param {{nombre: string, imagen?: string, foto?: string}} p Personaje o sospechoso.
   * @param {string} [pie] Texto bajo la foto.
   * @returns {HTMLElement}
   */
  DC.polaroid = function (expediente, p, pie) {
    const id = p.imagen || p.foto;
    return el("figure.polaroid", null,
      id ? DC.imagenes.figura(expediente, id, { clase: "polaroid-foto" }) : DC.ui.svg(DC.ilustraciones.retrato("?"), "polaroid-foto imagen"),
      el("figcaption.polaroid-nombre", { text: p.nombre }),
      pie ? el("p.polaroid-pie", { text: pie }) : null);
  };

  const MODOS = [["investigador", 3], ["inspector", 5]];

  function huellas(n) {
    return el("span.nueva-huellas", { "aria-hidden": "true" },
      [1, 2, 3, 4, 5].map((i) => icono("huella", "icono-relleno nueva-huella" + (i <= n ? "" : " nueva-huella-apagada"))));
  }

  /** Tarjeta de radio con marca de elegida en la esquina; cerrada si ya no se puede elegir. */
  function tarjetaOpcion(nombre, valor, marcada, clase, cerrada, ...contenido) {
    return el("label.nueva-opcion", { class: clase + (cerrada ? " nueva-opcion-cerrada" : "") },
      el("input", { type: "radio", name: nombre, value: valor, checked: marcada, disabled: cerrada }),
      el("span.nueva-opcion-cuerpo", null, contenido));
  }

  /** @returns {string[]} Modos en que aún no se ha cerrado el expediente (D27: cada dificultad, una vez). */
  function modosLibres(expediente) {
    return MODOS.map(([m]) => m).filter((m) => !DC.partida.marca(expediente.id, m));
  }

  function rotulo(nombreIcono, texto) {
    return el("legend.nueva-rotulo", null, icono(nombreIcono, nombreIcono === "huella" ? "icono-relleno" : null), el("span", { text: texto }));
  }

  /**
   * Modal «Nueva investigación»: quién es quién (editable e intercambiable) y dificultad. Una
   * dificultad ya cerrada en este caso no se puede repetir (D27); la partida es siempre completa.
   * Al empezar guarda el equipo de la agencia y crea la partida.
   * @param {object} expediente
   */
  function nuevaPartida(expediente) {
    const t = DC.textos.nueva;
    const error = el("p.formulario-error", { role: "alert" });
    const pareja = DC.equipoEditable("nueva");
    const libres = modosLibres(expediente);

    const modos = MODOS.map(([m, n]) => {
      const marca = DC.partida.marca(expediente.id, m);
      return tarjetaOpcion("modo", m, m === libres[0], "nueva-modo", !!marca,
        huellas(n),
        el("strong.nueva-opcion-nombre", { text: DC.textos.modos[m].nombre }),
        el("span.nueva-opcion-texto", { text: marca
          ? DC.formato.plantilla(t.modoCerrado, { tiempo: DC.formato.tiempo(marca.tiempo), puntos: DC.formato.numero(marca.puntuacion) })
          : DC.textos.modos[m].descripcion }));
    });

    const formulario = el("form.nueva", { onSubmit: (e) => { e.preventDefault(); empezar(); } },
      el("span.hoja-etiqueta", { "aria-hidden": "true" }, icono("huella", "icono-relleno")),
      el("p.nueva-subtitulo", { text: t.subtitulo }),
      pareja.nodo,
      el("fieldset.nueva-grupo", null, rotulo("huella", t.modo), el("div.nueva-modos", null, modos)),
      el("p.hoja-ambiente", null, icono("pluma"), el("span", { text: t.ambiente[Math.floor(Math.random() * t.ambiente.length)] })),
      el("p.nueva-material", null, icono("lapiz"), el("span", { text: t.material })),
      error,
      el("button.boton-lacre", { type: "submit" }, el("span", { text: t.empezar }), icono("flecha")),
      el("p.nueva-aviso", { text: t.aviso }));

    let ventana = null;

    function empezar() {
      const nombres = pareja.leer(error);
      if (!nombres) return;
      DC.detectives.guardarEquipo(nombres);
      const datosEquipo = DC.detectives.paraPartida();
      const datos = new FormData(formulario);
      DC.partida.crear(expediente.id, {
        jugadores: datosEquipo.jugadores, detectives: datosEquipo.detectives, modo: datos.get("modo"), duracion: "completa"
      });
      DC.sonido.reproducir("apertura");
      ventana.cerrar();
      DC.rutas.ir("sala/" + expediente.id);
    }

    ventana = DC.ui.modal({ titulo: t.titulo, contenido: formulario, clase: "modal-nueva" });
  }

  /**
   * Botones de la partida (D27): con el caso resuelto manda «Ver resolución»; volver a jugar y
   * reiniciar quedan en pequeño.
   */
  function acciones(expediente, ctx) {
    const t = DC.textos.expediente;
    const partida = DC.partida.obtener(expediente.id);
    const lista = [];
    const reiniciar = () => boton(t.reiniciar, () => {
      DC.ui.confirmar(t.confirmarReinicio, t.reiniciar).then((si) => {
        if (!si) return;
        DC.partida.reiniciar(expediente.id);
        DC.rutas.refrescar();
      });
    }, "boton-texto");
    if (partida && !partida.terminada) {
      lista.push(el("p.dossier-estado", { text: DC.formato.plantilla(t.enCurso, {
        modo: DC.textos.modos[partida.modo].nombre, duracion: DC.textos.duraciones[partida.duracion].nombre }) }));
      lista.push(boton(t.continuar, () => ctx.irA("prueba"), "boton-oro boton-grande"));
      lista.push(reiniciar());
    } else if (partida) {
      lista.push(el("p.dossier-estado", { text: DC.formato.plantilla(t.resuelto, { puntos: partida.puntuacion }) }));
      lista.push(boton(t.resolucion, () => DC.rutas.ir("resolucion/" + expediente.id), "boton-oro boton-grande"));
      if (modosLibres(expediente).length) lista.push(boton(t.otraVez, () => nuevaPartida(expediente), "boton-texto"));
    } else if (modosLibres(expediente).length) {
      lista.push(boton(t.comenzar, () => nuevaPartida(expediente), "boton-oro boton-grande"));
    } else {
      lista.push(el("p.dossier-estado", { text: t.todoJugado }));
    }
    return lista;
  }

  /** Marcas del expediente por dificultad (D27): la primera vez que se cerró en cada modo. */
  function marcas(expediente) {
    const t = DC.textos.expediente;
    const filas = MODOS.map(([m]) => {
      const marca = DC.partida.marca(expediente.id, m);
      return el("div", null,
        el("dt", { text: DC.textos.modos[m].nombre }),
        el("dd", { text: marca
          ? DC.formato.tiempo(marca.tiempo) + " · " + DC.formato.plantilla(t.marcaPuntos, { puntos: DC.formato.numero(marca.puntuacion) }) + (marca.fallida ? " · " + DC.textos.resolucion.enFalso : "")
          : t.sinMarca }));
    });
    return el("div.dossier-marcas", null,
      el("h3.rotulo-pequeno", { text: t.marcas }),
      el("dl.datos-progreso dossier-cifras", null, filas),
      el("p.ayuda", { text: t.marcasAyuda }));
  }

  /** Cifras de la investigación en curso o terminada: pruebas, documentos leídos, hilos, preguntas, pistas y tiempo. */
  function cifras(expediente, partida) {
    const t = DC.textos.expediente;
    const tp = DC.textos.progreso;
    const recorrido = DC.partida.recorrido(expediente, partida.duracion);
    const hechas = recorrido.filter((p) => partida.completadas.indexOf(p.id) !== -1).length;
    const pistas = Object.keys(partida.registros).reduce((a, id) => a + (partida.registros[id].pistas || 0), 0);
    const documentos = DC.partida.visibles(expediente, partida, "documentos");
    const leidos = documentos.filter((d) => partida.vistos.indexOf(d.id) !== -1).length;
    const preguntas = (expediente.sospechosos || []).reduce((a, s) => a + DC.partida.preguntasHechas(partida, s.id).length, 0);
    const hilos = DC.explicacion.pasos(expediente, partida, true).length;
    const datos = [
      [tp.superadas, hechas + " / " + recorrido.length],
      [t.documentosLeidos, leidos + " / " + documentos.length],
      [t.hilos, String(hilos)],
      [t.preguntas, String(preguntas)],
      [tp.pistas, String(pistas)],
      [tp.tiempo, DC.formato.tiempo(DC.partida.tiempo(partida))]
    ];
    return el("dl.datos-progreso dossier-cifras", null, datos.map(([k, v]) => el("div", null, el("dt", { text: k }), el("dd", { text: v }))));
  }

  /** Fila de un documento inicial: icono, título, tipo y flecha. */
  function filaDocumento(ctx, doc) {
    const { expediente } = ctx;
    const abrirDoc = ctx.enJuego
      ? () => ctx.irA("documentos", doc.id)
      : () => DC.documento.visor(DC.documento.pintar(expediente, doc), doc.titulo);
    return el("li", null, boton([
      icono(ICONO_DOC[doc.tipo] || "documentos", "resumen-doc-icono"),
      el("span.resumen-doc-texto", null,
        el("span.resumen-doc-titulo", { text: doc.titulo }),
        el("span.resumen-doc-tipo", { text: DC.textos.documentos.tipos[doc.tipo] || doc.tipo })),
      icono("derecha", "resumen-doc-flecha")
    ], () => { DC.sonido.reproducir("papel"); abrirDoc(); }, "resumen-doc"));
  }

  /** Tira de fotografías: las primeras y, sobre la última, cuántas quedan. */
  function tiraFotos(ctx, lugares) {
    const t = DC.textos.expediente;
    const resto = lugares.length - FOTOS_VISIBLES;
    const fotos = lugares.slice(0, FOTOS_VISIBLES).map((u, i) => {
      const figura = DC.imagenes.figura(ctx.expediente, u.imagen, { clase: "resumen-foto" });
      figura.setAttribute("title", u.nombre);
      if (resto > 0 && i === FOTOS_VISIBLES - 1) {
        figura.appendChild(el("span.resumen-foto-mas", { text: "+" + resto, "aria-label": DC.formato.plantilla(t.masFotos, { n: resto }) }));
      }
      return figura;
    });
    return ctx.enJuego
      ? boton(fotos, () => ctx.irA("lugares"), "resumen-fotos resumen-fotos-boton", { "aria-label": DC.textos.sala.secciones.lugares })
      : el("div.resumen-fotos", null, fotos);
  }

  DC.salaPaneles.resumen = function (ctx) {
    const { expediente } = ctx;
    const t = DC.textos.expediente;
    const partida = DC.partida.obtener(expediente.id);
    const vacia = { completadas: [] };
    const iniciales = (coleccion) => DC.partida.visibles(expediente, vacia, coleccion);
    const lugares = iniciales("ubicaciones").filter((u) => u.imagen);
    const cronologia = iniciales("cronologia");

    const izquierda = el("article.resumen", null,
      el("div.dossier-huellas", { "aria-hidden": "true" }, DC.detectives.lista().map((id) => DC.detectives.huella(id, "dossier-huella"))),
      el("p.resumen-sello", { text: DC.formato.plantilla(DC.textos.archivo.numero, expediente) }),
      el("h2.dossier-titulo", { text: expediente.titulo }),
      el("p.dossier-subtitulo", { text: expediente.subtitulo }),
      DC.prensa.previoA(expediente.id) ? DC.prensa.recorte(DC.prensa.previoA(expediente.id)) : null,
      seccion(t.introduccion, parrafos(expediente.introduccion)),
      seccion(t.historia, parrafos(expediente.historia)),
      seccion(t.objetivo, el("p.dossier-objetivo", { text: expediente.objetivo })),
      expediente.aviso ? el("p.dossier-aviso", null, icono("carta"), el("span", { text: expediente.aviso })) : null);

    const derecha = el("div.resumen-anexos", null,
      el("section.dossier-seccion dossier-partida", null,
        el("div.dossier-acciones", null, acciones(expediente, ctx)),
        partida ? cifras(expediente, partida) : null,
        DC.partida.resuelto(expediente.id) ? marcas(expediente) : null),
      seccion(t.personajes, el("div.polaroids", null, (expediente.personajes || []).map((p) => DC.polaroid(expediente, p, p.rol)))),
      seccion(t.documentos, el("ul.resumen-docs", null, iniciales("documentos").map((doc) => filaDocumento(ctx, doc)))),
      lugares.length ? seccion(t.fotografias, tiraFotos(ctx, lugares)) : null,
      cronologia.length ? seccion(t.cronologia, el("ol.cronologia", null, cronologia.map((c) =>
        el("li", null, el("span.cronologia-fecha", { text: c.fecha }), el("span", { text: c.texto }))))) : null);

    return [izquierda, derecha];
  };
})(DetectiveCodex);
