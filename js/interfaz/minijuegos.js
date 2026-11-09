/**
 * Minijuegos contrarreloj (D25): el marco común. Una prueba de tipo minijuego (`parejas`,
 * `secuencia`, `telegrama`, `cerradura`, `diferencias`) trae su configuración codificada en
 * `config` y sus segundos en `segundos`; el modo acorta el tiempo (`factorTiempo`). Cada intento
 * agotado cuenta como fallo; tras los intentos que fija el modo, las hermanas lo resuelven «a su
 * manera» y la prueba queda superada sin puntos: un minijuego nunca bloquea la historia.
 * Los tipos se registran en DC.minijuegos.tipos (minijuegos-tipos.js).
 */
(function (DC) {
  "use strict";

  const { el, boton } = DC.ui;

  function segundosDe(prueba, partida, config) {
    let base = prueba.segundos || 60;
    if (prueba.tipo === "telegrama" && config.texto) {
      base = Math.max(base, Math.ceil(DC.clave.letrasDe(DC.clave.aTelegrama(config.texto)).length * DC.reglas.SEGUNDOS_POR_SIMBOLO));
    }
    return Math.max(10, Math.round(base * (DC.reglas.modo(partida.modo).factorTiempo || 1)));
  }

  /** Cuenta atrás con barra; llama a alAgotar al llegar a cero. */
  function reloj(segundos, alAgotar) {
    const t = DC.textos.minijuegos;
    const cifra = el("span.minijuego-reloj-cifra", { text: DC.formato.tiempo(segundos * 1000).slice(3) });
    const barra = el("span.minijuego-reloj-barra", { style: "width:100%" });
    const nodo = el("div.minijuego-reloj", { role: "timer", "aria-label": t.tiempo }, cifra, el("span.minijuego-reloj-pista", null, barra));
    let restante = segundos;
    let temporizador = null;
    function pintar() {
      cifra.textContent = DC.formato.tiempo(Math.max(0, restante) * 1000).slice(3);
      barra.style.width = (100 * restante / segundos) + "%";
      nodo.classList.toggle("minijuego-reloj-apuro", restante <= 10);
    }
    function tic() {
      restante -= 1;
      pintar();
      if (restante <= 10 && restante > 0) DC.sonido.reproducir("tecla");
      if (restante <= 0) { parar(); alAgotar(); }
    }
    function parar() {
      if (temporizador) clearInterval(temporizador);
      temporizador = null;
    }
    return {
      nodo,
      /** Vuelve a poner el tiempo entero (cada intento empieza de cero). */
      reiniciar() { parar(); restante = segundos; pintar(); },
      empezar() { if (!temporizador) temporizador = setInterval(tic, 1000); },
      parar,
      restante: () => restante
    };
  }

  DC.minijuegos = {
    tipos: {},

    /** @returns {boolean} true si la prueba es un minijuego registrado. */
    es(prueba) {
      return !!(prueba && this.tipos[prueba.tipo]);
    },

    /** @returns {object} Configuración del minijuego, decodificada. */
    config(expediente, prueba) {
      return JSON.parse(DC.decodificar(expediente.id, prueba.config));
    },

    /**
     * Hoja entera del minijuego: enunciado, reloj, tablero del tipo y pistas plegadas.
     * @param {object} ctx Contexto del cuaderno (expediente, partida, refrescar).
     * @param {object} prueba
     * @param {object} registro
     * @param {{zonaPistas: Function, celebrar: Function}} util Piezas de la sala de la prueba.
     * @returns {HTMLElement}
     */
    pantalla(ctx, prueba, registro, util) {
      const t = DC.textos.minijuegos;
      const { expediente, partida } = ctx;
      const tipo = this.tipos[prueba.tipo];
      const config = this.config(expediente, prueba);
      const limite = DC.reglas.INTENTOS_MINIJUEGO;
      const intentos = registro.fallos || 0;
      const segundos = segundosDe(prueba, partida, config);
      const tablero = el("div.minijuego-tablero", { hidden: true });
      const mensaje = el("div.minijuego-mensaje", { role: "status", "aria-live": "assertive" });
      const cuenta = reloj(segundos, () => terminar(false));
      let activo = false;
      let juego = null;

      function terminar(exito) {
        if (!activo) return;
        activo = false;
        cuenta.parar();
        if (juego && juego.parar) juego.parar();
        if (exito) {
          DC.sonido.reproducir("acierto");
          const resultado = DC.partida.superarMinijuego(expediente, partida);
          util.celebrar(ctx, prueba, resultado);
          return;
        }
        DC.sonido.reproducir("error");
        const resultado = DC.partida.fallarMinijuego(expediente, partida);
        tablero.hidden = true;
        DC.ui.vaciar(mensaje);
        if (resultado.aSuManera) {
          mensaje.append(
            el("p.minijuego-aviso", { text: t.agotado }),
            el("div.hermanas", null, DC.hermanas.lineas(expediente, "prueba:" + prueba.id + ":aSuManera").map((l) => DC.hermanas.linea(partida, l.quien, l.texto))),
            el("p.ayuda", { text: t.aSuManera }),
            boton(t.seguir, () => util.celebrar(ctx, prueba, DC.partida.superarMinijuego(expediente, partida, true)), "boton-oro boton-grande"));
        } else {
          mensaje.append(
            el("p.minijuego-aviso", { text: t.agotado }),
            DC.hermanas.dialogo(expediente, partida, "prueba:" + prueba.id + ":fallo") || "",
            el("p.ayuda", { text: DC.formato.plantilla(t.intentos, { n: (registro.fallos || 0) + 1, total: limite }) }),
            boton(t.reintentar, empezar, "boton-oro"));
        }
      }

      function empezar() {
        DC.ui.vaciar(mensaje);
        DC.ui.vaciar(tablero);
        tablero.hidden = false;
        activo = true;
        cuenta.reiniciar();
        juego = tipo.montar(tablero, config, {
          expediente, partida, prueba,
          terminar,
          comprobar: (respuesta) => DC.validacion.comprobar(expediente, prueba, respuesta),
          reducirMovimiento: DC.ui.reducirMovimiento()
        });
        cuenta.empezar();
        DC.sonido.reproducir("papel");
      }

      const inicio = boton(t.empezar, (e) => { e.currentTarget.remove(); empezar(); }, "boton-oro boton-grande");

      return el("section.prueba-hoja minijuego", { class: "minijuego-" + prueba.tipo },
        el("p.prueba-fase", null, el("span", { text: prueba.fase }), prueba.obligatoria ? null : el("span.etiqueta-opcional", { text: DC.textos.prueba.opcional })),
        el("h2.prueba-titulo", { text: prueba.titulo }),
        el("p.prueba-descripcion", { text: prueba.descripcion }),
        DC.hermanas.dialogo(expediente, partida, "prueba:" + prueba.id + ":inicio"),
        el("div.prueba-instrucciones", null,
          el("h3.rotulo-pequeno", { text: DC.textos.prueba.instrucciones }),
          el("p", { text: prueba.instrucciones }),
          el("h3.rotulo-pequeno", { text: t.comoJugar }),
          el("p.minijuego-como", { text: t[prueba.tipo].como }),
          el("p.minijuego-reglas", { text: DC.formato.plantilla(t.reglas, { s: segundos, total: limite }) + (intentos ? " " + DC.formato.plantilla(t.intentos, { n: intentos + 1, total: limite }) : "") })),
        util.chipsDocumentos(ctx, prueba),
        el("div.minijuego-cabecera", null, cuenta.nodo, inicio),
        tablero,
        mensaje,
        el("details.plegable prueba-pistas-plegadas", null,
          el("summary", { text: DC.textos.prueba.pistasTitulo }), util.zonaPistas(ctx, prueba, registro)));
    }
  };
})(DetectiveCodex);
