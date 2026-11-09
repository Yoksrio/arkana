/**
 * Secciones del cuaderno: Documentación, Personajes, Interrogatorio, Lugares, Lo que sabemos,
 * Correspondencia y Progreso. Cada una devuelve sus dos hojas [izquierda, derecha] (o una sola) y
 * solo muestra lo desbloqueado.
 */
(function (DC) {
  "use strict";

  const { el, boton } = DC.ui;

  DC.salaPaneles.documentos = function (ctx) {
    const t = DC.textos.documentos;
    const { expediente, partida } = ctx;
    const docs = DC.partida.visibles(expediente, partida, "documentos");
    let seleccion = (ctx.extra && docs.find((d) => d.id === ctx.extra)) || docs[0];
    const lector = el("div.lector");
    const lista = el("ul.docs-lista");

    function abrir(doc) {
      seleccion = doc;
      DC.partida.marcarVisto(partida, doc.id);
      DC.ui.vaciar(lector).appendChild(el("div.lector-hoja", null,
        boton(t.ampliar, () => DC.documento.visor(DC.documento.pintarParaPartida(expediente, partida, doc), doc.titulo), "boton-texto lector-ampliar"),
        DC.documento.pintarParaPartida(expediente, partida, doc),
        DC.hermanas.dialogo(expediente, partida, "documento:" + doc.id)));
      pintarLista();
    }

    function pintarLista() {
      DC.ui.vaciar(lista);
      docs.forEach((doc) => {
        const nuevo = DC.partida.esNuevo(partida, doc.id);
        lista.appendChild(el("li", null, boton([
          el("span.lista-tipo", { text: t.tipos[doc.tipo] || doc.tipo }),
          el("span.lista-titulo", { text: doc.titulo }),
          nuevo ? el("span.etiqueta-nuevo", { text: DC.textos.app.nuevo }) : null,
          doc.soloJugador ? el("span.etiqueta-privado", { text: DC.formato.plantilla(t.soloPara, { nombre: partida.jugadores[doc.soloJugador] }) }) : null
        ], () => { DC.sonido.reproducir("papel"); abrir(doc); }, "lista-doc" +
          (seleccion === doc ? " seleccionado" : ""),
        { "aria-current": seleccion === doc ? "true" : null })));
      });
    }

    if (seleccion) abrir(seleccion);
    else {
      pintarLista();
      lector.appendChild(el("p.vacio", { text: t.vacio }));
    }

    return [
      el("div.panel-documentos", null, el("h2.titulo-panel", { text: DC.textos.sala.secciones.documentos }), lista),
      lector
    ];
  };

  DC.salaPaneles.lugares = function (ctx) {
    const t = DC.textos.documentos;
    const { expediente, partida } = ctx;
    const lugares = DC.partida.visibles(expediente, partida, "ubicaciones");
    const cronologia = DC.partida.visibles(expediente, partida, "cronologia");
    return [
      el("div.panel-lugares", null,
        el("h2.titulo-panel", { text: t.ubicaciones }),
        lugares.length
          ? el("ul.lugares", null, lugares.map((u) => el("li.lugar", null,
            u.imagen ? DC.imagenes.figura(expediente, u.imagen, { clase: "lugar-foto" }) : null,
            el("div", null, el("strong", { text: u.nombre }), el("p", { text: u.descripcion })))))
          : el("p.vacio", { text: t.sinLugares })),
      el("div.panel-cronologia", null,
        el("h2.titulo-panel", { text: t.cronologia }),
        cronologia.length
          ? el("ol.cronologia", null, cronologia.map((c) =>
            el("li", null, el("span.cronologia-fecha", { text: c.fecha }), el("span", { text: c.texto }))))
          : el("p.vacio", { text: t.sinCronologia }))
    ];
  };

  /** Ficha completa de un sospechoso: datos, declaraciones y contradicciones desbloqueadas. */
  function fichaSospechoso(expediente, partida, s) {
    const t = DC.textos.sospechosos;
    const declaraciones = (s.declaraciones || []).filter((d) => DC.partida.desbloqueado(partida, d));
    const contradicciones = (s.contradicciones || []).filter((c) => DC.partida.desbloqueado(partida, c));
    return el("article.sospechoso", null,
      el("div.sospechoso-foto", null, DC.polaroid(expediente, s)),
      el("div.sospechoso-datos", null,
        el("h2.sospechoso-nombre", { text: s.nombre }),
        el("p.sospechoso-sub", { text: DC.formato.plantilla(t.edad, s) + " · " + s.profesion }),
        el("dl.sospechoso-lista", null,
          el("dt", { text: t.biografia }), el("dd", { text: s.biografia }),
          el("dt", { text: t.coartada }), el("dd", { text: s.coartada }),
          el("dt", { text: t.motivo }), el("dd", { text: s.motivo })),
        declaraciones.length ? el("div.sospechoso-bloque", null,
          el("h3.rotulo-pequeno", { text: t.declaraciones }),
          declaraciones.map((d) => el("blockquote.declaracion", { text: "«" + d.texto + "»" }))) : null,
        el("div.sospechoso-bloque", null,
          el("h3.rotulo-pequeno", { text: t.contradicciones }),
          contradicciones.length
            ? el("ul.contradicciones", null, contradicciones.map((c) => el("li", { text: DC.decodificar(expediente.id, c.texto) })))
            : el("p.ayuda", { text: t.sinContradicciones }))));
  }

  /** Ficha breve de un personaje del caso que no es sospechoso. */
  function fichaPersonaje(expediente, p) {
    return el("article.sospechoso", null,
      el("div.sospechoso-foto", null, DC.polaroid(expediente, p)),
      el("div.sospechoso-datos", null, el("h2.sospechoso-nombre", { text: p.nombre }), el("p.sospechoso-rol", { text: p.rol })));
  }

  DC.salaPaneles.personajes = function (ctx) {
    const t = DC.textos.sospechosos;
    const { expediente, partida } = ctx;
    const delCaso = (expediente.personajes || []).map((p) => ({ dato: p, ficha: () => fichaPersonaje(expediente, p) }));
    const sospechosos = DC.partida.visibles(expediente, partida, "sospechosos")
      .map((s) => ({ dato: s, ficha: () => fichaSospechoso(expediente, partida, s) }));
    const nuevos = sospechosos.filter((s) => DC.partida.esNuevo(partida, s.dato.id)).map((s) => s.dato.id);
    sospechosos.forEach((s) => DC.partida.marcarVisto(partida, s.dato.id));
    let elegido = sospechosos[0] || delCaso[0];
    const listas = el("div.personajes-listas");
    const detalle = el("div.personaje-detalle");

    function tarjeta(p) {
      const activo = p === elegido;
      return boton([
        DC.polaroid(expediente, p.dato),
        nuevos.indexOf(p.dato.id) !== -1 ? el("span.etiqueta-nuevo", { text: DC.textos.app.nuevo }) : null
      ], () => { elegido = p; DC.sonido.reproducir("papel"); pintar(); },
      "personaje-boton" + (activo ? " seleccionado" : ""), { "aria-pressed": activo ? "true" : "false" });
    }

    function pintar() {
      DC.ui.vaciar(listas);
      if (delCaso.length) listas.append(el("h3.dossier-rotulo", { text: t.delCaso }), el("div.polaroids", null, delCaso.map(tarjeta)));
      listas.append(el("h3.dossier-rotulo", { text: t.titulo }),
        sospechosos.length ? el("div.polaroids", null, sospechosos.map(tarjeta)) : el("p.vacio", { text: t.vacio }));
      DC.ui.vaciar(detalle).appendChild(elegido ? elegido.ficha() : el("p.vacio", { text: t.elegir }));
    }
    pintar();

    return [el("div.panel-personajes", null, el("h2.titulo-panel", { text: DC.textos.sala.secciones.personajes }), listas), detalle];
  };

  /**
   * Interrogatorio (D24): los personajes del caso con retrato; al elegir uno, sus preguntas
   * posibles. Solo se le pueden hacer unas pocas (reglas del modo); las respuestas quedan.
   */
  DC.salaPaneles.interrogatorio = function (ctx) {
    const t = DC.textos.interrogatorio;
    const { expediente, partida } = ctx;
    const personas = DC.partida.visibles(expediente, partida, "sospechosos").filter((s) => (s.preguntas || []).length);
    DC.partida.marcarVisto(partida, "interrogatorio");
    let elegido = (ctx.extra && personas.find((s) => s.id === ctx.extra)) || personas[0] || null;
    const galeria = el("div.polaroids");
    const detalle = el("div.panel-interrogado");

    function pintarGaleria() {
      DC.ui.vaciar(galeria);
      personas.forEach((s) => galeria.appendChild(boton(DC.polaroid(expediente, s), () => {
        elegido = s;
        DC.sonido.reproducir("papel");
        pintarGaleria();
        pintarDetalle();
      }, "personaje-boton" + (s === elegido ? " seleccionado" : ""), { "aria-pressed": s === elegido ? "true" : "false" })));
    }

    function pintarDetalle() {
      DC.ui.vaciar(detalle);
      if (!elegido) {
        detalle.appendChild(el("p.vacio", { text: personas.length ? t.elegir : t.vacio }));
        return;
      }
      const hechas = DC.partida.preguntasHechas(partida, elegido.id);
      const restantes = DC.partida.preguntasRestantes(partida, elegido.id);
      const posibles = (elegido.preguntas || []).filter((q) => DC.partida.desbloqueado(partida, q) && hechas.indexOf(q.id) === -1);
      const estado = restantes === 0 ? t.agotadas : restantes === 1 ? t.ultima : t.quedan;
      detalle.appendChild(el("div", null,
        el("div.interrogatorio-ficha", null,
          DC.imagenes.figura(expediente, elegido.foto || elegido.imagen, { clase: "interrogatorio-retrato" }),
          el("div", null,
            el("h2.interrogatorio-nombre", { text: elegido.nombre }),
            el("p.interrogatorio-sub", { text: elegido.profesion }),
            el("p.interrogatorio-quedan", { text: DC.formato.plantilla(estado, { n: restantes, nombre: elegido.nombre }) }))),
        hechas.length ? el("h3.rotulo-pequeno", { text: t.hechas }) : null,
        hechas.length ? el("ul.interrogatorio-lista", null, hechas.map((idPregunta) => {
          const q = elegido.preguntas.find((x) => x.id === idPregunta);
          return el("li.interrogatorio-hecha", null,
            el("p.interrogatorio-pregunta", { text: q.texto }),
            el("p.interrogatorio-respuesta", { text: "«" + DC.decodificar(expediente.id, q.respuesta) + "»" }),
            DC.hermanas.dialogo(expediente, partida, "pregunta:" + elegido.id + ":" + q.id));
        })) : null,
        posibles.length ? el("h3.rotulo-pequeno", { text: t.posibles }) : null,
        posibles.length ? el("ul.interrogatorio-lista", null, posibles.map((q) => el("li", null,
          boton(q.texto, () => {
            if (DC.partida.preguntar(expediente, partida, elegido.id, q.id) === null) return;
            DC.sonido.reproducir("tecla");
            pintarDetalle();
          }, "boton-secundario interrogatorio-posible", { disabled: restantes === 0 })))) : null,
        !posibles.length && !hechas.length ? el("p.ayuda", { text: t.sinPreguntas }) : null));
    }

    pintarGaleria();
    pintarDetalle();
    return [
      el("div.panel-interrogatorio", null,
        el("div.interrogatorio-retratos", { "aria-hidden": "true" },
          DC.detectives.lista().map((id) => el("img", { src: DC.interroga[id], alt: "", decoding: "async" }))),
        el("h2.titulo-panel", { text: t.titulo }),
        el("p.ayuda interrogatorio-ayuda", { text: DC.formato.plantilla(t.ayuda, { n: DC.reglas.modo(partida.modo).preguntas }) }),
        personas.length ? galeria : el("p.vacio", { text: t.vacio })),
      detalle
    ];
  };

  /**
   * «Lo que sabemos» (D26): los hilos del caso que ya se han revelado, en el orden de la
   * explicación, con la prueba y los documentos de los que salieron; y, cuando llega, el balance
   * de sospechosos de las hermanas. Sustituye al tablero de notas: esto se juega con papel y lápiz.
   */
  DC.salaPaneles.hilos = function (ctx) {
    const t = DC.textos.hilos;
    const { expediente, partida } = ctx;
    const pasos = DC.explicacion.pasos(expediente, partida, true);
    pasos.forEach((paso) => { if (paso.prueba) DC.partida.marcarVisto(partida, "hilo:" + paso.prueba.id); });
    const balance = DC.partida.balance(expediente, partida);
    return el("div.panel-hilos", null,
      el("div.hilos-cabecera", null,
        el("img.telegramas-ilustracion hilos-ilustracion", { src: DC.carpetaAgencia + DC.juntasHilos, alt: "", decoding: "async" }),
        el("div", null, el("h2.titulo-panel", { text: t.titulo }), el("p.ayuda", { text: t.ayuda }))),
      balance ? DC.explicacion.tarjetaBalance(expediente, partida, balance, !!partida.terminada) : null,
      pasos.length ? DC.explicacion.hilos(expediente, partida, true) : el("p.vacio", { text: t.vacio }));
  };

  /**
   * Correspondencia con Yoksrio (D17, D24): por cada caso cerrado, el telegrama que las hermanas le
   * mandaron y el que él contestó; lo descifrado queda guardado. Con la tabla de su clave al lado.
   */
  DC.salaPaneles.telegramas = function (ctx) {
    const t = DC.textos.clave;
    const recibidos = DC.clave.recibidos();
    const descifrable = !!(ctx.partida && DC.reglas.modo(ctx.partida.modo).descifrarTelegrama);
    return [
      el("div.panel-telegramas", null,
        el("img.telegramas-ilustracion", { src: DC.telegramaHermanas, alt: "", decoding: "async" }),
        el("h2.titulo-panel", { text: t.telegramas }),
        el("p.ayuda", { text: t.telegramasAyuda }),
        DC.correspondencia.lista({ descifrable, refrescar: ctx.refrescar })),
      el("div.panel-clave", null,
        el("img.telegramas-ilustracion", { src: DC.yoksrioLupa, alt: "", decoding: "async" }),
        el("h2.titulo-panel", { text: t.tabla }),
        el("p.ayuda", { text: DC.formato.plantilla(t.recibidos, { n: recibidos.length, total: DC.clave.telegramas().length }) }),
        DC.clave.tabla())
    ];
  };

  DC.salaPaneles.progreso = function (ctx) {
    const t = DC.textos.progreso;
    const { expediente, partida } = ctx;
    const recorrido = DC.partida.recorrido(expediente, partida.duracion);
    const registros = Object.keys(partida.registros).map((id) => partida.registros[id]);
    const suma = (campo) => registros.reduce((a, r) => a + (r[campo] || 0), 0);
    const hechas = recorrido.filter((p) => partida.completadas.indexOf(p.id) !== -1);

    const datos = [
      [t.investigadores, DC.detectives.pareja(partida)],
      [t.modo, DC.textos.modos[partida.modo].nombre],
      [t.duracion, DC.textos.duraciones[partida.duracion].nombre],
      [t.superadas, hechas.length + " / " + recorrido.length],
      [t.pendientes, String(recorrido.length - hechas.length)],
      [t.pistas, String(suma("pistas"))],
      [t.fallos, String(suma("fallos"))],
      [t.puntos, DC.formato.numero(partida.puntuacion) + " " + DC.formato.plantilla(t.maxima, { maxima: DC.puntuacion.maxima(expediente, partida.duracion) })],
      [t.tiempo, DC.formato.tiempo(DC.partida.tiempo(partida))]
    ];

    return [
      el("div.panel-progreso", null,
        el("h2.titulo-panel", { text: t.titulo }),
        el("div.barra-progreso", { role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(recorrido.length), "aria-valuenow": String(hechas.length) },
          el("span", { style: "width:" + Math.round(100 * hechas.length / recorrido.length) + "%" })),
        el("dl.datos-progreso", null, datos.map(([k, v]) => el("div", null, el("dt", { text: k }), el("dd", { text: v })))),
        boton(t.reiniciar, () => {
          DC.ui.confirmar(DC.textos.expediente.confirmarReinicio, t.reiniciar).then((si) => {
            if (!si) return;
            DC.partida.reiniciar(expediente.id);
            DC.rutas.ir("expediente/" + expediente.id);
          });
        }, "boton-texto")),
      el("div.panel-superadas", null,
        el("h2.titulo-panel", { text: t.lista }),
        hechas.length
          ? el("ol.lista-superadas", null, hechas.map((p) => {
            const r = partida.registros[p.id];
            return el("li", null, el("span.lista-tipo", { text: p.fase }), el("span", { text: p.titulo }),
              el("span.lista-puntos", { text: "+" + r.puntos }));
          }))
          : el("p.ayuda", { text: t.ninguna }))
    ];
  };
})(DetectiveCodex);
