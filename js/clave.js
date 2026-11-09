/**
 * La clave de Yoksrio (D16): alfabeto de rejilla con huellas. A–I son las casillas de una rejilla de
 * tres en raya; J–Q (con la Ñ), las mismas con una huella; R–U, las aberturas de un aspa; V–Y, las
 * mismas con huella; Z, un círculo con huella. Dibuja textos cifrados y la tabla, y guarda lo que
 * los jugadores han descifrado de la carta de despedida.
 */
(function (DC) {
  "use strict";

  const LETRAS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const HUELLA = '<g class="clave-huella"><ellipse cx="10" cy="12" rx="2" ry="1.6"/><circle cx="7.6" cy="9.4" r=".85"/><circle cx="10" cy="8.4" r=".85"/><circle cx="12.4" cy="9.4" r=".85"/></g>';
  const ASPAS = ["M3 3L10 11L17 3", "M17 3L9 10L17 17", "M3 17L10 9L17 17", "M3 3L11 10L3 17"];
  const HUELLA_ASPA = ["0 -6", "5 0", "0 5", "-5 0"];

  const AGENCIA = "agencia";

  let carta = null;
  let telegramas = [];

  function rejilla(casilla, conHuella) {
    const fila = Math.floor(casilla / 3);
    const columna = casilla % 3;
    const lados = [];
    if (columna < 2) lados.push("M17 3V17");
    if (columna > 0) lados.push("M3 3V17");
    if (fila < 2) lados.push("M3 17H17");
    if (fila > 0) lados.push("M3 3H17");
    return '<path d="' + lados.join(" ") + '"/>' + (conHuella ? HUELLA : "");
  }

  function aspa(abertura, conHuella) {
    const huella = conHuella ? '<g transform="translate(' + HUELLA_ASPA[abertura] + ')">' + HUELLA + "</g>" : "";
    return '<path d="' + ASPAS[abertura] + '"/>' + huella;
  }

  /** @returns {string} Marcado SVG del símbolo de una letra de LETRAS. */
  function marcado(letra) {
    const n = LETRAS.indexOf(letra);
    let dibujo;
    if (n < 9) dibujo = rejilla(n, false);
    else if (n < 18) dibujo = rejilla(n - 9, true);
    else if (n < 22) dibujo = aspa(n - 18, false);
    else if (n < 26) dibujo = aspa(n - 22, true);
    else dibujo = '<circle cx="10" cy="10" r="6.5"/>' + HUELLA;
    return '<svg viewBox="0 0 20 20" aria-hidden="true">' + dibujo + "</svg>";
  }

  /**
   * Pasa un texto a las letras de la clave: mayúsculas, sin tildes, conservando la Ñ.
   * @param {string} texto
   * @returns {string}
   */
  function aLetras(texto) {
    return String(texto || "").toUpperCase()
      .replace(/Ñ/g, "\u0000").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\u0000/g, "Ñ");
  }

  function guardado() {
    const e = DC.estado.obtener();
    if (!e.clave) e.clave = { asignaciones: {}, pistas: 0, descubierta: false };
    if (!e.clave.descifrados) e.clave.descifrados = {};
    return e.clave;
  }

  DC.clave = {
    LETRAS,

    /**
     * Símbolo de una letra.
     * @param {string} letra Una de LETRAS.
     * @param {string} [clase]
     * @returns {HTMLElement}
     */
    simbolo(letra, clase) {
      return DC.ui.svg(marcado(letra), "clave-simbolo" + (clase ? " " + clase : ""));
    },

    /**
     * Texto cifrado: palabras de símbolos, con signos y saltos de línea tal cual.
     * @param {string} texto En claro.
     * @param {function(string, string): HTMLElement} [pieza] Construye cada símbolo (letra, índice);
     *   por defecto, un símbolo sin interacción.
     * @returns {HTMLElement}
     */
    escribir(texto, pieza) {
      const crear = pieza || ((letra) => this.simbolo(letra));
      let indice = 0;
      return DC.ui.el("div.clave-texto", { role: "img", "aria-label": DC.textos.clave.cifrado },
        aLetras(texto).split("\n").map((linea) => DC.ui.el("p.clave-linea", null,
          linea.split(" ").filter(Boolean).map((palabra) => DC.ui.el("span.clave-palabra", null,
            Array.from(palabra).map((c) => (LETRAS.indexOf(c) !== -1
              ? crear(c, String(indice++))
              : DC.ui.el("span.clave-signo", { text: c }))))))));
    },

    /**
     * Tabla de la clave.
     * @param {object} [conocidas] {letra: letraEscrita}; sin ella, la tabla completa.
     * @returns {HTMLElement}
     */
    tabla(conocidas) {
      return DC.ui.el("div.clave-tabla", null, Array.from(LETRAS).map((letra) => {
        const escrita = conocidas ? conocidas[letra] || "" : letra;
        return DC.ui.el("div.clave-celda", null, this.simbolo(letra), DC.ui.el("span", { text: escrita || "·" }));
      }));
    },

    aLetras,

    /**
     * Letras de la clave que hay en un texto, en el orden en que se escriben (lo que hay que
     * transcribir casilla a casilla, D26).
     * @param {string} texto En claro.
     * @returns {string[]}
     */
    letrasDe(texto) {
      return Array.from(aLetras(texto)).filter((c) => LETRAS.indexOf(c) !== -1);
    },

    /**
     * Pasa un texto a estilo telegráfico: cada frase acaba en STOP, sin comillas ni paréntesis y
     * la firma de Yoksrio al final. En clave, además, las cifras van en letra (para que también
     * haya que descifrarlas).
     * @param {string} texto
     * @param {boolean} [enClaro] true deja las cifras como están.
     * @returns {string}
     */
    aTelegrama(texto, enClaro) {
      const t = DC.textos.clave;
      const cuerpo = String(texto || "")
        .replace(/[«»"“”()[\]]/g, "")
        .replace(/\d/g, (cifra) => (enClaro ? cifra : " " + t.cifras[cifra] + " "))
        .replace(/\s*[.!?…]+(?=\s|$)/g, " " + t.stop + " ")
        .replace(/\s+/g, " ")
        .trim();
      return (cuerpo.endsWith(t.stop) ? cuerpo : cuerpo + " " + t.stop) + " " + t.firma;
    },

    /** Registra la carta de despedida (expedientes/agencia.js). */
    registrarCarta(datos) {
      carta = datos;
    },

    /** @returns {object} Datos de la carta: pregunta, texto y pistas codificados, huellas. */
    carta() {
      return carta;
    },

    /** Registra los telegramas de Yoksrio que llegan tras cada caso (expedientes/agencia.js). */
    registrarTelegramas(lista) {
      telegramas = lista || [];
    },

    /** @returns {object[]} Todos los telegramas registrados, en orden. */
    telegramas() {
      return telegramas;
    },

    /** @returns {object[]} Los telegramas ya recibidos, en el orden en que llegaron (D30). */
    recibidos() {
      return DC.partida.ordenCierre().map((id) => this.telegramaDe(id)).filter(Boolean);
    },

    /**
     * Un campo de un telegrama en claro, con la variante que toca según el orden de juego (D30).
     * @returns {string}
     */
    campo(telegrama, nombre) {
      return DC.decodificar(AGENCIA, DC.partida.variante(telegrama[nombre], telegrama.trasExpediente));
    },

    /** @returns {number} Número del telegrama: el orden en que llega. */
    numero(telegrama) {
      return DC.partida.posicion(telegrama.trasExpediente);
    },

    /** @returns {?object} El telegrama que llega al resolver un expediente, si lo hay. */
    telegramaDe(idExpediente) {
      return telegramas.find((t) => t.trasExpediente === idExpediente) || null;
    },

    /** @returns {boolean} true si ese telegrama ya está descifrado y guardado en claro (D24). */
    estaDescifrado(telegrama) {
      return !!guardado().descifrados[telegrama.id || telegrama.trasExpediente];
    },

    /** Guarda un telegrama como descifrado: desde entonces se lee en claro en la correspondencia. */
    marcarDescifrado(telegrama) {
      guardado().descifrados[telegrama.id || telegrama.trasExpediente] = true;
      DC.estado.guardar();
    },

    /**
     * Tarjeta de un telegrama de Yoksrio: número, origen y fecha, el texto en la clave y la forma
     * de leerlo en claro: descifrado ya guardado, un botón (Aspirante) o la transcripción casilla a
     * casilla (Inspector jefe, D26), que al completarse queda guardada (D24).
     * @param {object} telegrama
     * @param {boolean} descifrable true en los modos que dejan descifrar con un botón.
     * @param {Function} [alDescifrar] Se llama cuando el telegrama queda descifrado.
     * @returns {HTMLElement}
     */
    tarjetaTelegrama(telegrama, descifrable, alDescifrar) {
      const t = DC.textos.clave;
      const d = (campo) => this.campo(telegrama, campo);
      const texto = d("texto");
      const descifrado = this.estaDescifrado(telegrama);
      const claro = DC.ui.el("p.telegrama-claro", { text: texto, hidden: !descifrado });
      const marcar = () => {
        this.marcarDescifrado(telegrama);
        claro.hidden = false;
        DC.telegrafo.teclear(claro, texto).then(() => { if (alDescifrar) alDescifrar(); });
      };
      let accion = null;
      let cuerpo = this.escribir(texto);
      if (!descifrado && descifrable) {
        accion = DC.ui.boton(t.descifrar, (e) => { marcar(); e.currentTarget.remove(); }, "boton-texto");
      } else if (!descifrado) {
        cuerpo = DC.transcripcion.crear(texto, { alAcertar: () => { DC.sonido.reproducir("sello"); marcar(); } });
      }
      return DC.ui.el("article.telegrama-carta", { class: descifrado ? "telegrama-descifrado" : null },
        DC.ui.el("p.telegrama-cabecera", { text: DC.formato.plantilla(t.numero, { n: this.numero(telegrama), desde: d("desde"), fecha: d("fecha") }) }),
        cuerpo,
        accion,
        claro);
    },

    /**
     * Tarjeta del telegrama que las hermanas mandan a Yoksrio al cerrar un caso (D24): el texto del
     * caso (`enviado`, codificado) o uno genérico con el número y el título.
     * @param {object} telegrama
     * @param {object} ficha Ficha del catálogo del caso resuelto.
     * @returns {HTMLElement}
     */
    tarjetaEnviado(telegrama, ficha) {
      return DC.ui.el("article.telegrama-carta telegrama-enviado", null,
        DC.ui.el("p.telegrama-cabecera", { text: DC.textos.clave.enviadoCabecera }),
        DC.ui.el("p.telegrama-claro", { text: this.textoEnviado(telegrama, ficha) }));
    },

    /**
     * Texto en claro del telegrama que las hermanas mandan al cerrar un caso: el del caso
     * (`enviado`, codificado) o el genérico con número y título.
     * @returns {string}
     */
    textoEnviado(telegrama, ficha) {
      return telegrama.enviado
        ? this.campo(telegrama, "enviado")
        : DC.formato.plantilla(DC.textos.clave.enviadoGenerico, { numero: ficha.numero, titulo: ficha.titulo.toUpperCase() });
    },

    /** @returns {boolean} true si ya se ha descifrado la carta de Yoksrio. */
    descubierta() {
      return !!guardado().descubierta;
    },

    /** @returns {object} Letras que los jugadores han asignado a cada símbolo de la carta. */
    asignaciones() {
      return guardado().asignaciones;
    },

    /** @returns {number} Pistas de la carta ya pedidas (0 a 3). */
    pistasUsadas() {
      return guardado().pistas || 0;
    },

    /** Pide la siguiente pista de la carta y guarda. */
    pedirPista() {
      guardado().pistas = Math.min(3, this.pistasUsadas() + 1);
      DC.estado.guardar();
    },

    /** Asigna (o quita, con letra vacía) una letra a un símbolo y guarda. */
    asignar(simbolo, letra) {
      const a = guardado().asignaciones;
      if (letra) a[simbolo] = letra;
      else delete a[simbolo];
      DC.estado.guardar();
    },

    /**
     * Comprueba la respuesta de la carta; si es correcta, la clave queda descubierta.
     * @param {string} respuesta
     * @returns {boolean}
     */
    responder(respuesta) {
      const correcta = carta.huellasRespuesta.indexOf(DC.huella(carta.id, "carta", respuesta)) !== -1;
      if (correcta) {
        guardado().descubierta = true;
        DC.estado.guardar();
      }
      return correcta;
    }
  };
})(DetectiveCodex);
