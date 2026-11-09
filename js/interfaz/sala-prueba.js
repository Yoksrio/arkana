/**
 * Sección «Investigación» del cuaderno: en la hoja izquierda el enunciado, los documentos
 * relacionados y la forma de responder; en la derecha, las pistas. La pantalla de
 * prueba superada ocupa el cuaderno entero.
 */
(function (DC) {
  "use strict";

  const { el, boton, parrafos } = DC.ui;

  let ultimoExito = null;
  let deliberacion = null;

  function chipsDocumentos(ctx, prueba) {
    const docs = (prueba.documentos || [])
      .map((id) => ctx.expediente.documentos.find((d) => d.id === id))
      .filter((d) => d && DC.partida.desbloqueado(ctx.partida, d));
    if (!docs.length) return null;
    return el("div.prueba-docs", null,
      el("h3.rotulo-pequeno", { text: DC.textos.prueba.documentos }),
      el("ul.chips", null, docs.map((d) => el("li", null,
        boton(d.titulo, () => ctx.irA("documentos", d.id), "chip" + (d.soloJugador ? " chip-privado" : ""))))));
  }

  /**
   * Campo de hora: solo admite cuatro cifras y pone los dos puntos solo (09:05). No se envía hasta
   * que la hora está completa y es válida.
   */
  function formularioHora(prueba, responder, idCampo) {
    const t = DC.textos.prueba;
    const campo = el("input.campo campo-hora", {
      id: idCampo,
      autocomplete: "off",
      spellcheck: "false",
      maxlength: "5",
      inputmode: "numeric",
      placeholder: "00:00",
      onInput: () => {
        const cifras = campo.value.replace(/\D/g, "").slice(0, 4);
        campo.value = cifras.length > 2 ? cifras.slice(0, 2) + ":" + cifras.slice(2) : cifras;
        campo.setCustomValidity("");
        DC.sonido.reproducir("tecla");
      }
    });
    const form = el("form.prueba-form", { onSubmit: (e) => {
      e.preventDefault();
      const partes = /^(\d{2}):(\d{2})$/.exec(campo.value);
      if (!partes || Number(partes[1]) > 23 || Number(partes[2]) > 59) {
        campo.setCustomValidity(t.horaIncompleta);
        campo.reportValidity();
        return;
      }
      responder(campo.value, () => { form.classList.add("temblor"); campo.select(); });
    } },
    el("label.rotulo-pequeno", { for: idCampo, text: t.respuesta }),
    el("div.prueba-linea", null, campo, el("button", { type: "submit", class: "boton boton-oro", text: t.comprobar })));
    form.addEventListener("animationend", () => form.classList.remove("temblor"));
    return form;
  }

  function formulario(ctx, prueba, responder, prefijo) {
    const t = DC.textos.prueba;
    const idCampo = (prefijo || "") + "respuesta";
    if (prueba.tipo === "hotspot") {
      const visual = DC.imagenes.visual(ctx.expediente, prueba.contenidoVisual, { interactivo: true });
      const pulsar = (punto) => {
        visual.querySelectorAll(".punto-elegido").forEach((p) => p.classList.remove("punto-elegido"));
        punto.classList.add("punto-elegido");
        responder(punto.getAttribute("data-punto"), () => {
          punto.classList.add("punto-fallido");
          setTimeout(() => punto.classList.remove("punto-fallido", "punto-elegido"), 900);
        });
      };
      visual.querySelectorAll("[data-punto]").forEach((punto) => {
        punto.addEventListener("click", () => pulsar(punto));
        punto.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pulsar(punto); }
        });
      });
      return el("div.prueba-respuesta", null, el("p.ayuda", { text: t.pulsar }), visual);
    }

    if (prueba.tipo === "eleccion") {
      const form = el("form.prueba-form", { onSubmit: (e) => {
        e.preventDefault();
        const marcada = form.querySelector("input:checked");
        if (marcada) responder(marcada.value, () => form.classList.add("temblor"));
      } },
      el("fieldset.opciones-eleccion", null,
        el("legend.rotulo-pequeno", { text: t.respuesta }),
        prueba.opciones.map((o) => el("label.opcion-eleccion", null,
          el("input", { type: "radio", name: (prefijo || "") + "eleccion", value: o.id }),
          el("span", { text: o.texto })))),
      el("button", { type: "submit", class: "boton boton-oro", text: t.comprobar }));
      form.addEventListener("animationend", () => form.classList.remove("temblor"));
      return form;
    }

    if (prueba.tipo === "hora") return formularioHora(prueba, responder, idCampo);

    const esCodigo = prueba.tipo === "codigo";
    const campo = el("input.campo", {
      id: idCampo,
      class: esCodigo ? "campo-codigo" : "campo-respuesta",
      autocomplete: "off",
      spellcheck: "false",
      maxlength: esCodigo ? String(prueba.longitud) : "120",
      inputmode: esCodigo ? "numeric" : null,
      placeholder: esCodigo ? "0".repeat(prueba.longitud) : t.escribir,
      style: esCodigo ? "--casillas:" + prueba.longitud : null,
      onInput: () => DC.sonido.reproducir("tecla")
    });
    const form = el("form.prueba-form", { onSubmit: (e) => {
      e.preventDefault();
      if (!campo.value.trim()) return;
      responder(campo.value, () => { form.classList.add("temblor"); campo.select(); });
    } },
    el("label.rotulo-pequeno", { for: idCampo, text: t.respuesta }),
    el("div.prueba-linea", null, campo, el("button", { type: "submit", class: "boton boton-oro", text: t.comprobar })));
    form.addEventListener("animationend", () => form.classList.remove("temblor"));
    return form;
  }

  /** @returns {boolean} true si la pista i-ésima (desde 0) llega en la clave de Yoksrio: la tercera. */
  function enClave(i) {
    return i === 2 && DC.clave.descubierta();
  }

  /**
   * Las pistas son telegramas de Yoksrio (D24); la tercera llega en su clave (D16) y en modo
   * Normal se puede leer en claro con un botón. En un expediente con `sinYoksrio` (D17) no
   * contesta: la nota la escriben las dos hermanas.
   */
  function tarjetaPista(ctx, texto, i) {
    const tc = DC.textos.clave;
    const sinYoksrio = !!ctx.expediente.sinYoksrio;
    const cabecera = DC.formato.plantilla(sinYoksrio ? DC.textos.telegrafo.cabeceraHermanas : DC.textos.telegrafo.cabecera, { n: i + 1 });
    const papel = DC.telegrafo.papel({ texto, cabecera, enClave: enClave(i) && !sinYoksrio, firmaHermanas: sinYoksrio });
    if (!enClave(i) || sinYoksrio) return el("li.pista", null, papel);
    const claro = el("p.telegrama-claro", { text: DC.clave.aTelegrama(texto, true).toUpperCase(), hidden: true });
    return el("li.pista pista-telegrama", null,
      papel,
      el("details.plegable telegrama-tabla", null, el("summary", { text: tc.verTabla }), DC.clave.tabla()),
      DC.reglas.modo(ctx.partida.modo).descifrarTelegrama
        ? boton(tc.descifrar, (e) => {
          claro.hidden = false;
          e.currentTarget.remove();
          DC.telegrafo.teclear(claro, DC.clave.aTelegrama(texto, true).toUpperCase());
        }, "boton-texto")
        : null,
      claro);
  }

  function zonaPistas(ctx, prueba, registro) {
    const t = DC.textos.prueba;
    const partida = ctx.partida;
    const usadas = DC.pistas.usadas(ctx.expediente, prueba, registro);
    const restantes = DC.pistas.restantes(partida, registro);
    const coste = DC.pistas.costeSiguiente(partida, registro);
    const modo = DC.reglas.modo(partida.modo);

    const pedir = () => {
      const texto = DC.partida.pedirPista(ctx.expediente, partida);
      if (texto === null) return;
      const n = registro.pistas;
      DC.telegrafo.escena({ texto, n, enClave: enClave(n - 1), sinYoksrio: !!ctx.expediente.sinYoksrio, partida,
        dialogo: n === 1 ? DC.hermanas.dialogo(ctx.expediente, partida, "prueba:" + prueba.id + ":pista", "hermanas-telegrafo") : null })
        .then(() => ctx.refrescar());
    };

    return el("aside.pistas", { "aria-label": t.pistasTitulo },
      el("h3.rotulo-pequeno", { text: t.pistasTitulo }),
      usadas.length ? el("ol.pistas-lista", null, usadas.map((p, i) => tarjetaPista(ctx, p, i))) : null,
      restantes
        ? boton([DC.formato.plantilla(t.pista, { n: registro.pistas + 1 }), " ",
          el("span.pista-coste", { text: coste ? DC.formato.plantilla(t.coste, { p: Math.round(coste * 100) }) : t.gratis })], pedir, "boton-secundario")
        : el("p.ayuda", { text: t.sinPistas }),
      modo.penalizacionFallo ? el("p.ayuda", { text: t.penalizacion }) : null,
      el("p.pistas-valor", { text: DC.formato.plantilla(t.vale, { puntos: DC.puntuacion.puntosPrueba(prueba, registro, partida.modo) }) }));
  }

  /**
   * Un paso de la escena que sigue a una prueba superada (D24): ilustración o visual, y el texto
   * como narración o como frase de una de las hermanas.
   */
  function pantallaEscena(ctx, exito) {
    const t = DC.textos.prueba;
    const { expediente, partida } = ctx;
    const pasos = exito.prueba.escena;
    const paso = pasos[exito.paso];
    const texto = DC.decodificar(expediente.id, paso.texto);
    const ultimo = exito.paso === pasos.length - 1;
    return el("section.prueba-hoja prueba-escena", null,
      el("p.escena-paso-indice", { text: DC.formato.plantilla(t.escenaPaso, { n: exito.paso + 1, total: pasos.length }) }),
      paso.visual ? DC.imagenes.visual(expediente, paso.visual) : null,
      paso.imagen ? DC.imagenes.figura(expediente, paso.imagen, { clase: "escena-paso-imagen" }) : null,
      paso.quien
        ? el("div.hermanas hermanas-escena", null, DC.hermanas.linea(partida, paso.quien, texto))
        : el("div.escena-paso-texto", null, parrafos(texto)),
      boton(ultimo ? t.escenaFin : t.escenaSeguir, () => {
        exito.paso += 1;
        DC.sonido.reproducir("papel");
        ctx.refrescar();
      }, "boton-oro boton-grande"));
  }

  /**
   * Balance de sospechosos (D26): tras la prueba que fija `balance.trasPrueba`, las hermanas
   * señalan a los dos que más les hacen dudar. Queda también en «Lo que sabemos».
   */
  function pantallaBalance(ctx, exito) {
    const t = DC.textos.hilos;
    return el("section.prueba-hoja prueba-balance", null,
      el("p.prueba-fase", null, el("span", { text: t.titulo })),
      el("h2.prueba-titulo", { text: t.balanceTitulo }),
      DC.explicacion.tarjetaBalance(ctx.expediente, ctx.partida, ctx.expediente.balance),
      boton(t.balanceSeguir, () => { ultimoExito = null; ctx.refrescar(); }, "boton-oro boton-grande"));
  }

  function pantallaExito(ctx, exito) {
    const t = DC.textos.prueba;
    const nombres = DC.textos.avisos.colecciones;
    const { expediente, partida } = ctx;
    if (exito.prueba.escena && exito.paso < exito.prueba.escena.length) return pantallaEscena(ctx, exito);
    if (exito.enBalance) return pantallaBalance(ctx, exito);
    const abreInterrogatorio = !!(expediente.interrogatorio && expediente.interrogatorio.desbloqueadoPor === exito.prueba.id);
    const traeBalance = !!(expediente.balance && expediente.balance.trasPrueba === exito.prueba.id);
    const hilos = DC.explicacion.deLaPrueba(expediente, partida, exito.prueba.id);
    hilos.forEach(() => DC.partida.marcarVisto(partida, "hilo:" + exito.prueba.id));
    if (!exito.avisado) {
      exito.avisado = true;
      exito.desbloqueos.forEach((d, i) => setTimeout(() =>
        DC.ui.aviso(d.elemento.titulo || d.elemento.nombre || d.elemento.texto, { titulo: DC.textos.avisos.descubrimiento + " · " + nombres[d.coleccion] }), 400 + i * 350));
      if (abreInterrogatorio) setTimeout(() => DC.ui.aviso(t.interrogatorioAbierto, { titulo: nombres.interrogatorio }), 400 + exito.desbloqueos.length * 350);
    }
    return el("section.prueba-hoja prueba-exito", null,
      el("p.sello-pequeno", { text: t.superada }),
      el("h2.prueba-titulo", { text: exito.prueba.titulo }),
      el("div.exito-texto", null, parrafos(DC.decodificar(expediente.id, exito.prueba.exito))),
      DC.hermanas.dialogo(expediente, partida, "prueba:" + exito.prueba.id + ":exito", "hermanas-exito"),
      hilos.length ? el("div.exito-hilos", null,
        el("h3.rotulo-pequeno", { text: t.hiloNuevo }),
        hilos.map((paso) => DC.explicacion.tarjeta(paso, partida))) : null,
      el("p.exito-puntos", { text: DC.formato.plantilla(t.ganados, { puntos: exito.puntos }) }),
      exito.desbloqueos.length || abreInterrogatorio ? el("ul.descubrimientos", null,
        exito.desbloqueos.map((d) =>
          el("li", null, el("span.lista-tipo", { text: nombres[d.coleccion] }), el("span", { text: d.elemento.titulo || d.elemento.nombre || d.elemento.texto }))),
        abreInterrogatorio ? el("li", null, el("span.lista-tipo", { text: nombres.interrogatorio }), el("span", { text: t.interrogatorioAbierto })) : null) : null,
      boton(traeBalance ? t.verBalance : t.siguiente, () => {
        if (traeBalance) { exito.enBalance = true; DC.sonido.reproducir("papel"); } else ultimoExito = null;
        ctx.refrescar();
      }, "boton-oro boton-grande"));
  }

  /** Tras acertar: sello, avisos y paso a la pantalla de éxito (o a la resolución si era la última). */
  function celebrar(ctx, prueba, resultado) {
    const { expediente } = ctx;
    DC.sonido.reproducir("acierto");
    ultimoExito = { expedienteId: expediente.id, prueba, puntos: resultado.puntos, desbloqueos: resultado.desbloqueos, paso: 0 };
    DC.ui.sello(DC.textos.prueba.superada).then(() => {
      if (resultado.terminada) {
        ultimoExito = null;
        DC.rutas.ir("resolucion/" + expediente.id);
      } else {
        ctx.refrescar();
      }
    });
  }

  /**
   * Pantalla partida (D24): la hoja izquierda es la parte del jugador A y la derecha la del B,
   * cada una con su enunciado, sus documentos y su casilla; las pistas, comunes, van plegadas al
   * pie de la izquierda.
   */
  function pantallaPartida(ctx, prueba, registro) {
    const t = DC.textos.prueba;
    const { expediente, partida } = ctx;
    const partes = registro.partes || {};

    function lado(letra) {
      const quien = DC.detectives.de(partida, letra);
      const parte = prueba.partes[quien];
      const hecha = !!partes[quien];
      const mensaje = el("p.prueba-mensaje", { role: "status", "aria-live": "assertive" });
      const reaccion = el("div.prueba-reaccion");
      const enunciado = el("div.prueba-instrucciones", null,
        el("h3.rotulo-pequeno", { text: t.instrucciones }),
        el("p", { text: parte.instrucciones }));
      const responder = (valor, alFallar) => {
        const resultado = DC.partida.responderParte(expediente, partida, quien, valor);
        if (!resultado.correcta) {
          DC.sonido.reproducir("error");
          mensaje.textContent = t.errores[registro.fallos % t.errores.length];
          mensaje.className = "prueba-mensaje error";
          DC.ui.vaciar(reaccion).appendChild(DC.hermanas.dialogo(expediente, partida, "prueba:" + prueba.id + ":fallo"));
          alFallar();
          return;
        }
        if (resultado.completa) celebrar(ctx, prueba, resultado);
        else { DC.sonido.reproducir("sello"); ctx.refrescar(); }
      };
      return el("section.prueba-hoja prueba-lado", { class: "prueba-lado-" + quien },
        letra === "A" ? el("p.prueba-fase", null, el("span", { text: prueba.fase }), prueba.obligatoria ? null : el("span.etiqueta-opcional", { text: t.opcional })) : null,
        letra === "A" ? el("h2.prueba-titulo", { text: prueba.titulo }) : el("h2.prueba-titulo prueba-titulo-eco", { text: prueba.titulo }),
        el("div.prueba-lado-cabecera", null,
          DC.detectives.insignia(partida, letra),
          el("p.prueba-lado-rotulo", { text: DC.formato.plantilla(t.tuParte, { nombre: partida.jugadores[letra] }) })),
        letra === "A" ? el("p.prueba-descripcion", { text: prueba.descripcion }) : null,
        parte.titulo ? el("h3.prueba-lado-titulo", { text: parte.titulo }) : null,
        enunciado,
        chipsDocumentos(ctx, parte),
        hecha
          ? el("div.prueba-lado-hecha", null, el("p.sello-pequeno", { text: t.parteHecha }),
            el("p.ayuda", { text: DC.formato.plantilla(t.esperad, { otro: partida.jugadores[letra === "A" ? "B" : "A"] }) }))
          : [formulario(ctx, parte, responder, quien + "-"), mensaje, reaccion],
        letra === "A" ? el("details.plegable prueba-pistas-plegadas", null,
          el("summary", { text: t.pistasTitulo }), zonaPistas(ctx, prueba, registro)) : null);
    }

    return [lado("A"), lado("B")];
  }

  /**
   * Deliberación de las hermanas (D27): en la acusación, primero elige Gismera y después Chiqui,
   * cada una sin ver lo que eligió la otra. Si coinciden, cruzan la mirada y acusan; si no, discuten
   * y vuelven a deliberar, sin que cuente como acusación. Solo se acusa con las dos de acuerdo.
   * @param {object} ctx
   * @param {object} prueba La acusación (tipo `eleccion`).
   * @param {function(string, Function): void} responder Envía la acusación conjunta.
   * @returns {HTMLElement}
   */
  function deliberar(ctx, prueba, responder) {
    const t = DC.textos.prueba.deliberacion;
    const { expediente, partida } = ctx;
    const zona = el("div.deliberacion");
    const letraDe = (quien) => (DC.detectives.de(partida, "A") === quien ? "A" : "B");
    const persona = (quien) => partida.jugadores[letraDe(quien)];
    const otra = (quien) => (quien === "gismera" ? "chiqui" : "gismera");
    const texto = (id) => (prueba.opciones.find((o) => o.id === id) || {}).texto || "";
    if (!deliberacion || deliberacion.expedienteId !== expediente.id || deliberacion.pruebaId !== prueba.id) {
      deliberacion = { expedienteId: expediente.id, pruebaId: prueba.id, gismera: null, chiqui: null, cortina: false };
    }
    const d = deliberacion;

    function reiniciar() {
      d.gismera = null;
      d.chiqui = null;
      d.cortina = false;
      pintar();
    }

    /** Turno de una hermana: su insignia, la pregunta y los sospechosos. */
    function turno(quien) {
      const form = el("form.prueba-form deliberacion-turno", { class: "deliberacion-" + quien, onSubmit: (e) => {
        e.preventDefault();
        const marcada = form.querySelector("input:checked");
        if (!marcada) return;
        d[quien] = marcada.value;
        d.cortina = quien === "gismera";
        DC.sonido.reproducir("papel");
        pintar();
      } },
      el("figure.deliberacion-retrato", null,
        el("img", { src: DC.piensa[quien], alt: "", decoding: "async" })),
      el("p.deliberacion-pregunta", { text: DC.formato.plantilla(t.pregunta, { nombre: DC.detectives.nombre(quien), persona: persona(quien) }) }),
      el("p.ayuda", { text: DC.formato.plantilla(t.nota[quien], { otro: persona(otra(quien)) }) }),
      el("fieldset.opciones-eleccion", null,
        el("legend.rotulo-pequeno", { text: DC.textos.prueba.respuesta }),
        prueba.opciones.map((o) => el("label.opcion-eleccion", null,
          el("input", { type: "radio", name: "deliberacion-" + quien, value: o.id }),
          el("span", { text: o.texto })))),
      el("button", { type: "submit", class: "boton boton-oro", text: t.decidido }));
      return form;
    }

    function pintar() {
      DC.ui.vaciar(zona);
      zona.appendChild(el("p.ayuda deliberacion-ayuda", { text: t.ayuda }));
      if (!d.gismera) {
        zona.appendChild(turno("gismera"));
      } else if (d.cortina) {
        zona.appendChild(el("div.deliberacion-cortina", null,
          el("p", { text: DC.formato.plantilla(t.cortina, { persona: persona("chiqui") }) }),
          boton(DC.formato.plantilla(t.meToca, { persona: persona("chiqui") }), () => { d.cortina = false; pintar(); }, "boton-oro")));
      } else if (!d.chiqui) {
        zona.appendChild(turno("chiqui"));
      } else if (d.gismera === d.chiqui) {
        const nombre = texto(d.gismera);
        zona.appendChild(el("div.deliberacion-acuerdo", null,
          el("img.deliberacion-escena", { src: DC.deliberan.acuerdo, alt: "", decoding: "async" }),
          el("p.deliberacion-narracion", { text: DC.formato.plantilla(t.acuerdo, { sospechoso: nombre }) }),
          el("div.hermanas", null,
            DC.hermanas.linea(partida, "chiqui", DC.formato.plantilla(t.acuerdoChiqui, { sospechoso: nombre })),
            DC.hermanas.linea(partida, "gismera", DC.formato.plantilla(t.acuerdoGismera, { sospechoso: nombre }))),
          el("div.deliberacion-acciones", null,
            boton(DC.formato.plantilla(t.acusar, { sospechoso: nombre }), () => responder(d.gismera, reiniciar), "boton-oro boton-grande"),
            boton(t.pensarlo, reiniciar, "boton-texto"))));
        DC.sonido.reproducir("sello");
      } else {
        const v = t.desacuerdo[Math.floor(Math.random() * t.desacuerdo.length)];
        const valores = { suyoGismera: texto(d.gismera), suyoChiqui: texto(d.chiqui) };
        zona.appendChild(el("div.deliberacion-desacuerdo", null,
          el("img.deliberacion-escena", { src: DC.deliberan.desacuerdo, alt: "", decoding: "async" }),
          el("div.hermanas", null, v.map((l) => DC.hermanas.linea(partida, l.quien, DC.formato.plantilla(l.texto, valores)))),
          el("p.deliberacion-narracion", { text: t.sinAcuerdo }),
          boton(t.volver, reiniciar, "boton-oro")));
      }
    }

    pintar();
    return zona;
  }

  DC.salaPaneles.prueba = function (ctx) {
    const t = DC.textos.prueba;
    const { expediente, partida } = ctx;

    if (ultimoExito && ultimoExito.expedienteId === expediente.id) return pantallaExito(ctx, ultimoExito);

    const prueba = DC.partida.pruebaActual(expediente, partida);
    if (!prueba) return el("p.vacio", { text: t.terminada });
    const registro = DC.partida.registro(partida, prueba.id);
    if (prueba.tipo === "dual") return pantallaPartida(ctx, prueba, registro);
    if (DC.minijuegos.es(prueba)) return DC.minijuegos.pantalla(ctx, prueba, registro, { zonaPistas, chipsDocumentos, celebrar });
    const mensaje = el("p.prueba-mensaje", { role: "status", "aria-live": "assertive" });
    const reaccion = el("div.prueba-reaccion");

    function responder(valor, alFallar) {
      const resultado = DC.partida.responder(expediente, partida, valor);
      if (resultado.fallida) {
        DC.sonido.reproducir("error");
        deliberacion = null;
        DC.ui.sello(t.enFalso).then(() => DC.rutas.ir("resolucion/" + expediente.id));
        return;
      }
      if (!resultado.correcta) {
        DC.sonido.reproducir("error");
        mensaje.textContent = t.errores[registro.fallos % t.errores.length] +
          (resultado.restantes ? " " + (resultado.restantes === 1 ? t.ultima : DC.formato.plantilla(t.quedan, { n: resultado.restantes })) : "");
        mensaje.className = "prueba-mensaje error";
        DC.ui.vaciar(reaccion).appendChild(DC.hermanas.dialogo(expediente, partida, "prueba:" + prueba.id + ":fallo"));
        alFallar();
        valorActual.textContent = DC.formato.plantilla(t.vale, { puntos: DC.puntuacion.puntosPrueba(prueba, registro, partida.modo) });
        if (contador) contador.textContent = textoContador();
        if (enDeliberacion) mensaje.scrollIntoView({ block: "center" });
        return;
      }
      deliberacion = null;
      celebrar(ctx, prueba, resultado);
    }

    const enunciado = el("div.prueba-instrucciones", null,
      el("h3.rotulo-pequeno", { text: t.instrucciones }),
      el("p", { text: prueba.instrucciones }));

    const pistas = zonaPistas(ctx, prueba, registro);
    const valorActual = pistas.querySelector(".pistas-valor");
    const enDeliberacion = prueba.tipo === "eleccion" && DC.partida.acusacion(expediente, partida.duracion) === prueba;
    const textoContador = () => DC.formato.plantilla(t.acusaciones, {
      n: DC.partida.acusacionesRestantes(expediente, partida), total: DC.reglas.modo(partida.modo).acusaciones });
    const contador = DC.partida.acusacionesRestantes(expediente, partida) !== null
      ? el("p.prueba-acusaciones", { text: textoContador() })
      : null;

    return [
      el("section.prueba-hoja", null,
        el("p.prueba-fase", null, el("span", { text: prueba.fase }), prueba.obligatoria ? null : el("span.etiqueta-opcional", { text: t.opcional })),
        el("h2.prueba-titulo", { text: prueba.titulo }),
        el("p.prueba-descripcion", { text: prueba.descripcion }),
        DC.hermanas.dialogo(expediente, partida, "prueba:" + prueba.id + ":inicio"),
        prueba.soloJugador ? DC.documento.cortina(enunciado, partida, prueba.soloJugador) : enunciado,
        chipsDocumentos(ctx, prueba),
        contador,
        enDeliberacion ? null : formulario(ctx, prueba, responder),
        enDeliberacion ? null : mensaje,
        enDeliberacion ? null : reaccion),
      enDeliberacion
        ? el("div.prueba-hoja-derecha", null, mensaje, reaccion, deliberar(ctx, prueba, responder))
        : pistas
    ];
  };
})(DetectiveCodex);
