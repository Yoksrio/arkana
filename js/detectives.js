/**
 * Las detectives de la Agencia Arkana: Gismera y Chiqui. Antes de abrir el archivo, los dos
 * jugadores dicen quién es cada una (el equipo); su retrato y su huella les acompañan en todo el
 * juego (D10).
 */
(function (DC) {
  "use strict";

  const CARPETA = "assets/img/agencia/";
  /** Carpeta de las ilustraciones de la agencia. */
  DC.carpetaAgencia = CARPETA;
  /** Ilustración de la portada de la agencia (pantalla de inicio y «¿Quién es quién?»). */
  DC.portadaAgencia = CARPETA + "portada.jpg";
  /** Yoksrio en su despacho: aparece de fondo tras la marca de la agencia. */
  DC.retratoYoksrio = CARPETA + "yoksrio.jpg";
  /** Las dos leyendo un telegrama: llegada de cada telegrama de Yoksrio (D17). */
  DC.telegramaHermanas = CARPETA + "telegrama-hermanas.jpg";
  /** Yoksrio en una oficina de telégrafos: acompaña a sus telegramas (D17). */
  DC.yoksrioTelegrafos = CARPETA + "yoksrio-telegrafos.jpg";
  /** Yoksrio escribiendo un telegrama junto al aparato: la otra escena de respuesta del telégrafo (D24). */
  DC.yoksrioEscribe = CARPETA + "yoksrio-escribe.jpg";
  /** Yoksrio leyendo el periódico: el telegrama de las estadísticas («os leo en los periódicos»). */
  DC.yoksrioPeriodico = CARPETA + "yoksrio-periodico.jpg";
  /** Yoksrio con la lupa sobre una fotografía: la clave en la Correspondencia. */
  DC.yoksrioLupa = CARPETA + "yoksrio-lupa.jpg";
  /** Yoksrio ante su tablero de hilos rojos (de reserva; hoy no se usa en ninguna pantalla). */
  DC.yoksrioTablero = CARPETA + "yoksrio-tablero.jpg";
  /** Las dos ante el tablero de hilos: «Lo que sabemos» y Casos resueltos (nombre de fichero: lo prefija cabeceraAgencia). */
  DC.juntasHilos = "juntas-hilos.jpg";
  /** Cada detective interrogando: cabecera del Interrogatorio. */
  DC.interroga = { gismera: CARPETA + "gismera-interroga.jpg", chiqui: CARPETA + "chiqui-interroga.jpg" };
  /** Cada detective pensando, con la pata en la barbilla: su turno en la deliberación de la acusación. */
  DC.piensa = { gismera: CARPETA + "gismera-piensa.jpg", chiqui: CARPETA + "chiqui-piensa.jpg" };
  /** Yoksrio escribiendo en clave la carta de despedida, con la maleta hecha: pantalla de la carta. */
  DC.yoksrioCarta = CARPETA + "yoksrio-carta.jpg";
  /** Las dos al deliberar: chocando la pata cuando coinciden y de espaldas cuando no. */
  DC.deliberan = { acuerdo: CARPETA + "juntas-acuerdo.jpg", desacuerdo: CARPETA + "juntas-desacuerdo.jpg" };
  const LISTA = ["gismera", "chiqui"];

  DC.detectives = {
    /** @returns {string[]} Ids de las detectives, en orden. */
    lista() {
      return LISTA.slice();
    },

    /**
     * Detective de un jugador. Las partidas guardadas antes de existir esta pieza no lo tienen:
     * A es Gismera y B, Chiqui.
     * @param {object} partida
     * @param {"A"|"B"} letra
     * @returns {string} Id de la detective.
     */
    de(partida, letra) {
      const reparto = (partida && partida.detectives) || {};
      return reparto[letra] || LISTA[letra === "A" ? 0 : 1];
    },

    /** @returns {{gismera: string, chiqui: string}|null} Qué persona es cada detective. */
    equipo() {
      return DC.estado.obtener().equipo;
    },

    /**
     * Guarda qué persona es cada detective.
     * @param {{gismera: string, chiqui: string}} equipo
     */
    guardarEquipo(equipo) {
      DC.estado.obtener().equipo = { gismera: equipo.gismera, chiqui: equipo.chiqui };
      DC.estado.guardar();
    },

    /**
     * Jugadores y reparto de una partida nueva a partir del equipo: A es Gismera y B, Chiqui.
     * @returns {{jugadores: {A: string, B: string}, detectives: {A: string, B: string}}|null}
     */
    paraPartida() {
      const e = this.equipo();
      if (!e) return null;
      return { jugadores: { A: e.gismera, B: e.chiqui }, detectives: { A: LISTA[0], B: LISTA[1] } };
    },

    /**
     * Huella de una detective (imagen con fondo transparente).
     * @param {string} id
     * @param {string} [clase]
     * @returns {HTMLElement}
     */
    huella(id, clase) {
      return DC.ui.el("img", {
        class: "huella" + (clase ? " " + clase : ""), src: CARPETA + "huella-" + id + ".png",
        alt: DC.formato.plantilla(DC.textos.detectivesComun.huellaDe, { nombre: this.nombre(id) }), decoding: "async"
      });
    },

    /**
     * Dificultad en huellas: llenas hasta n, el resto apagadas.
     * @param {number} n De 1 a 5.
     * @returns {HTMLElement}
     */
    dificultad(n) {
      return DC.ui.el("span.ficha-huellas", { role: "img", "aria-label": DC.textos.archivo.dificultad + " " + n + "/5" },
        [1, 2, 3, 4, 5].map((i) => this.huella(LISTA[i % 2], i <= n ? "ficha-huella" : "ficha-huella ficha-huella-apagada")));
    },

    /** @returns {string} Nombre visible de una detective. */
    nombre(id) {
      return DC.textos.detectives[id].nombre;
    },

    /**
     * Retrato de una detective; si la foto no carga, un retrato dibujado.
     * @param {string} id
     * @param {string} [clase] Clase extra para el tamaño (detective-mini, detective-medio, detective-enorme).
     * @returns {HTMLElement}
     */
    retrato(id, clase) {
      const nombre = this.nombre(id);
      const marco = DC.ui.svg(DC.ilustraciones.retrato(nombre), "detective-retrato" + (clase ? " " + clase : ""));
      marco.setAttribute("title", nombre);
      const img = new Image();
      img.alt = nombre;
      img.decoding = "async";
      img.onload = () => {
        DC.ui.vaciar(marco);
        marco.appendChild(img);
      };
      img.src = CARPETA + id + ".jpg";
      return marco;
    },

    /**
     * Firma de un jugador: retrato pequeño y nombre.
     * @param {object} partida
     * @param {"A"|"B"} letra
     * @param {string} [prefijo] Texto antes del nombre (p. ej. «— »).
     * @returns {HTMLElement}
     */
    firma(partida, letra, prefijo) {
      return DC.ui.el("span.detective-firma", null,
        this.retrato(this.de(partida, letra), "detective-mini"),
        DC.ui.el("span", { text: (prefijo || "") + partida.jugadores[letra] }));
    },

    /**
     * Insignia de un jugador (D24): retrato de su detective, su nombre y, debajo, el de la gata.
     * @param {object} partida
     * @param {"A"|"B"} letra
     * @returns {HTMLElement}
     */
    insignia(partida, letra) {
      const id = this.de(partida, letra);
      return DC.ui.el("div.jugador-insignia", { class: "jugador-" + id, title: this.nombre(id) },
        this.retrato(id, "detective-medio jugador-retrato"),
        DC.ui.el("span.jugador-nombre", { text: partida.jugadores[letra] }),
        DC.ui.el("span.jugador-gata", { text: this.nombre(id) }));
    },

    /** @returns {string} «Ana (Gismera) · Bruno (Chiqui)». */
    pareja(partida) {
      return ["A", "B"].map((l) => partida.jugadores[l] + " (" + this.nombre(this.de(partida, l)) + ")").join(" · ");
    }
  };
})(DetectiveCodex);
