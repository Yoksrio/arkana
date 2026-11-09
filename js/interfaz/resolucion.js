/**
 * Pantalla de resolución (D24, D27): sello de caso resuelto y el cierre como una secuencia: las
 * hermanas repasan el caso colgando cada hilo del tablero, hacen balance de las sospechas,
 * redactan el telegrama a Yoksrio y, en la escena del telégrafo, reciben su respuesta; después, el
 * epílogo y los resultados. Al volver a entrar, todo está ya a la vista.
 */
(function (DC) {
  "use strict";

  const { el, boton, parrafos } = DC.ui;

  DC.rutas.registrar("resolucion/:id", (vista, params) => {
    const t = DC.textos.resolucion;
    const expediente = DC.expediente(params.id);
    const partida = expediente && DC.partida.obtener(params.id);
    if (!partida || !partida.terminada) {
      vista.appendChild(el("div.pagina", null, el("p.vacio", { text: t.noTerminado }),
        boton(t.archivo, () => DC.rutas.ir("archivo"), "boton-secundario")));
      return;
    }
    const ficha = DC.ficha(expediente.id) || expediente;
    const telegrama = DC.clave.telegramaDe(expediente.id);
    const descifrable = DC.reglas.modo(partida.modo).descifrarTelegrama;
    const yaVista = !!partida.resolucionVista;

    const datos = [
      [DC.textos.progreso.investigadores, DC.detectives.pareja(partida)],
      [DC.textos.progreso.modo, DC.textos.modos[partida.modo].nombre],
      [DC.textos.progreso.duracion, DC.textos.duraciones[partida.duracion].nombre],
      [DC.textos.progreso.tiempo, DC.formato.tiempo(partida.tiempo)],
      [DC.textos.progreso.pistas, String(Object.keys(partida.registros).reduce((a, id) => a + partida.registros[id].pistas, 0))],
      [DC.textos.progreso.puntos, DC.formato.numero(partida.puntuacion) + " " +
        DC.formato.plantilla(DC.textos.progreso.maxima, { maxima: DC.puntuacion.maxima(expediente, partida.duracion) })]
    ];

    const pasos = DC.explicacion.pasos(expediente, partida);
    const tablero = el("div.hilos resolucion-hilos");
    const balance = expediente.balance
      ? el("div.explicacion-balance", { hidden: true }, DC.explicacion.tarjetaBalance(expediente, partida, expediente.balance, true))
      : null;

    // El telegrama a Yoksrio: redactarlo abre la escena del telégrafo; después queda a la vista con su respuesta.
    const correspondencia = telegrama ? el("section.resolucion-hoja resolucion-telegrama", { hidden: true },
      el("h2.dossier-rotulo", { text: t.telegrama }),
      el("img.telegramas-ilustracion", { src: DC.telegramaHermanas, alt: "", decoding: "async" }),
      DC.clave.tarjetaEnviado(telegrama, ficha),
      DC.clave.tarjetaTelegrama(telegrama, descifrable),
      el("p.ayuda", { text: t.telegramaAyuda })) : null;

    const entradaPrensa = DC.prensa.de(expediente.id);
    const prensa = entradaPrensa ? el("section.resolucion-hoja resolucion-prensa", { hidden: true },
      el("h2.dossier-rotulo", { text: DC.textos.prensa.alDiaSiguiente }),
      DC.prensa.pagina(entradaPrensa)) : null;

    const epilogo = el("section.resolucion-hoja resolucion-epilogo", { hidden: true },
      el("h2.dossier-rotulo", { text: t.epilogo }),
      partida.fallida ? el("div.resolucion-falso", null,
        el("strong", { text: t.falsoTitulo }), el("p", { text: t.falsoTexto })) : null,
      el("div.epilogo", null, parrafos(DC.decodificar(expediente.id, expediente.epilogo))),
      el("p.elemento-conductor", { text: DC.formato.plantilla(t.elemento, expediente.elementoConductor) }),
      boton(t.verHilos, () => DC.rutas.ir("resueltos/" + expediente.id), "boton-secundario"));

    const acciones = el("div.explicacion-acciones");
    const salida = el("div.resolucion-salida", { hidden: true },
      boton(t.salir, () => DC.rutas.ir("archivo"), "boton-oro boton-grande"));
    const seguir = boton(t.seguir, () => avanzar(1), "boton-oro");
    const saltar = boton(t.leerTodo, () => avanzar(pasos.length), "boton-texto");
    const redactar = boton(t.redactar, () => enviar(), "boton-oro boton-grande");
    let mostrados = 0;

    /** Cuelga n pasos más del tablero; con el último, el balance y la acción siguiente. */
    function avanzar(n, silencio) {
      for (let i = 0; i < n && mostrados < pasos.length; i++) {
        tablero.appendChild(DC.explicacion.hiloPaso(pasos[mostrados], mostrados, partida));
        mostrados += 1;
      }
      if (!silencio) DC.sonido.reproducir("papel");
      if (mostrados < pasos.length) return;
      seguir.remove();
      saltar.remove();
      if (balance) balance.hidden = false;
      if (!partida.resolucionVista) {
        partida.resolucionVista = true;
        DC.estado.guardar();
      }
      if (telegrama && !partida.telegramaEnviado) acciones.appendChild(redactar);
      else terminar();
    }

    /** Escena del telégrafo: las hermanas mandan el informe y Yoksrio contesta. */
    function enviar() {
      redactar.remove();
      DC.telegrafo.escenaCierre({
        enviado: DC.clave.textoEnviado(telegrama, ficha),
        texto: DC.clave.campo(telegrama, "texto"),
        n: DC.clave.numero(telegrama),
        desde: DC.clave.campo(telegrama, "desde"),
        fecha: DC.clave.campo(telegrama, "fecha")
      }).then(() => {
        partida.telegramaEnviado = true;
        DC.estado.guardar();
        terminar();
      });
    }

    /** Muestra la correspondencia (si la hay), el periódico del día siguiente, el epílogo y la salida. */
    function terminar() {
      if (correspondencia && partida.telegramaEnviado) correspondencia.hidden = false;
      if (prensa) prensa.hidden = false;
      epilogo.hidden = false;
      salida.hidden = false;
    }

    vista.appendChild(el("div.pagina pagina-resolucion", null,
      el("header.cabecera-pagina", null,
        boton("← " + t.archivo, () => DC.rutas.ir("archivo"), "boton-texto"),
        el("div.resolucion-firma", null,
          DC.detectives.huella(DC.detectives.lista()[0], "resolucion-huella"),
          el("p.sello-pequeno sello-resuelto", { class: partida.fallida ? "sello-falso" : null, text: partida.fallida ? t.selloFalso : t.sello }),
          DC.detectives.huella(DC.detectives.lista()[1], "resolucion-huella")),
        el("h1", { text: expediente.titulo }),
        el("p.subtitulo", { text: t.titulo })),
      el("div.resolucion", null,
        el("div.resolucion-principal", null,
          el("section.resolucion-hoja resolucion-explicacion", null,
            el("h2.dossier-rotulo", { text: t.explicacion }),
            el("p.ayuda", { text: t.explicacionAyuda }),
            tablero,
            balance,
            acciones),
          prensa,
          epilogo),
        el("aside.resolucion-lateral", null,
          el("section.resolucion-hoja", null,
            el("h2.dossier-rotulo", { text: t.resultados }),
            el("dl.datos-progreso", null, datos.map(([k, v]) => el("div", null, el("dt", { text: k }), el("dd", { text: v }))))),
          correspondencia),
        salida)));

    if (yaVista) avanzar(pasos.length, true);
    else {
      acciones.appendChild(seguir);
      acciones.appendChild(saltar);
      avanzar(1, true);
    }
  });
})(DetectiveCodex);
