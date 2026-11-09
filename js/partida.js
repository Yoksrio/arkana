/**
 * Partida: crear, continuar y reiniciar; recorrido de pruebas según la duración; respuestas,
 * pistas, desbloqueos y reloj. Todo cambio se guarda al momento.
 */
(function (DC) {
  "use strict";

  const COLECCIONES = ["documentos", "sospechosos", "ubicaciones", "cronologia"];
  const INTERVALO_GUARDADO_RELOJ = 15000;

  let reloj = { expedienteId: null, desde: 0, temporizador: null, ultimoGuardado: 0 };

  function registroVacio() {
    return { intentos: 0, fallos: 0, pistas: 0, respuestas: [], superada: false, puntos: 0 };
  }

  function partidas() {
    return DC.estado.obtener().partidas;
  }

  function pruebaPorId(expediente, id) {
    return expediente.pruebas.find((p) => p.id === id);
  }

  DC.partida = {
    /**
     * Pruebas que se juegan con una duración, en orden, siguiendo siguientePrueba.
     * En partida corta se saltan las opcionales.
     * @returns {object[]}
     */
    recorrido(expediente, idDuracion) {
      const soloObligatorias = (DC.reglas.DURACIONES[idDuracion] || {}).soloObligatorias;
      const lista = [];
      let actual = expediente.pruebas[0];
      while (actual && lista.indexOf(actual) === -1) {
        if (!soloObligatorias || actual.obligatoria) lista.push(actual);
        actual = actual.siguientePrueba ? pruebaPorId(expediente, actual.siguientePrueba) : null;
      }
      return lista;
    },

    /** @returns {object|null} Partida guardada de un expediente. */
    obtener(idExpediente) {
      return partidas()[idExpediente] || null;
    },

    /** @returns {object|null} Partida en curso más reciente (para «Continuar»). */
    activa() {
      const id = DC.estado.obtener().activa;
      const partida = id ? this.obtener(id) : null;
      return partida && !partida.terminada && DC.expediente(id) ? partida : null;
    },

    /**
     * Crea una partida nueva (sustituye la anterior de ese expediente).
     * @param {string} idExpediente
     * @param {{jugadores: {A: string, B: string}, detectives?: {A: string, B: string}, modo: string, duracion: string}} opciones
     * @returns {object} La partida.
     */
    crear(idExpediente, opciones) {
      const expediente = DC.expediente(idExpediente);
      const primera = this.recorrido(expediente, opciones.duracion)[0];
      const ahora = new Date().toISOString();
      const partida = {
        expedienteId: idExpediente,
        jugadores: { A: opciones.jugadores.A, B: opciones.jugadores.B },
        detectives: opciones.detectives ? { A: opciones.detectives.A, B: opciones.detectives.B } : null,
        modo: opciones.modo,
        duracion: opciones.duracion,
        creada: ahora,
        actualizada: ahora,
        pruebaActual: primera.id,
        completadas: [],
        registros: {},
        interrogatorio: {},
        tiempo: 0,
        vistos: [],
        terminada: null,
        puntuacion: 0
      };
      partidas()[idExpediente] = partida;
      DC.estado.obtener().activa = idExpediente;
      DC.estado.guardar();
      return partida;
    },

    /** Borra la partida de un expediente (el historial de resultados se conserva). */
    reiniciar(idExpediente) {
      if (reloj.expedienteId === idExpediente) this.pausarReloj();
      delete partidas()[idExpediente];
      const estado = DC.estado.obtener();
      if (estado.activa === idExpediente) estado.activa = null;
      DC.estado.guardar();
    },

    /** Marca un expediente como el último abierto. */
    marcarActiva(idExpediente) {
      DC.estado.obtener().activa = idExpediente;
      DC.estado.guardar();
    },

    /** @returns {object} Registro de una prueba (lo crea si no existe). */
    registro(partida, idPrueba) {
      if (!partida.registros[idPrueba]) partida.registros[idPrueba] = registroVacio();
      return partida.registros[idPrueba];
    },

    /** @returns {object|null} Prueba en curso. */
    pruebaActual(expediente, partida) {
      return partida.terminada ? null : pruebaPorId(expediente, partida.pruebaActual);
    },

    /** @returns {boolean} true si el elemento ya está desbloqueado en la partida. */
    desbloqueado(partida, elemento) {
      return !elemento.desbloqueadoPor || partida.completadas.indexOf(elemento.desbloqueadoPor) !== -1;
    },

    /** @returns {object[]} Elementos desbloqueados de una colección del expediente. */
    visibles(expediente, partida, coleccion) {
      return (expediente[coleccion] || []).filter((e) => this.desbloqueado(partida, e));
    },

    /** @returns {boolean} true si el jugador aún no ha abierto ese elemento. */
    esNuevo(partida, id) {
      return partida.vistos.indexOf(id) === -1;
    },

    /** Marca un elemento como visto (quita el aviso de «nuevo»). */
    marcarVisto(partida, id) {
      if (partida.vistos.indexOf(id) !== -1) return;
      partida.vistos.push(id);
      DC.estado.guardar();
      DC.emitir("visto", { expedienteId: partida.expedienteId, id });
    },

    /**
     * Comprueba una respuesta cerrada y, si es correcta, avanza.
     * @returns {{correcta: boolean, puntos?: number, desbloqueos?: object[], terminada?: boolean}}
     */
    responder(expediente, partida, respuesta) {
      const prueba = this.pruebaActual(expediente, partida);
      if (!prueba || prueba.tipo === "dual") return { correcta: false };
      const registro = this.registro(partida, prueba.id);
      this.anotarIntento(registro, respuesta);
      if (!DC.validacion.comprobar(expediente, prueba, respuesta)) return this.fallar(expediente, partida, registro);
      return this.superar(expediente, partida, prueba, registro);
    },

    /**
     * Pantalla partida (D24): cada detective responde su parte; la prueba se supera cuando las dos
     * están resueltas. Los fallos de cualquiera cuentan en el registro común.
     * @param {string} lado "gismera" | "chiqui"
     * @returns {{correcta: boolean, completa?: boolean, puntos?: number, desbloqueos?: object[], terminada?: boolean}}
     */
    responderParte(expediente, partida, lado, respuesta) {
      const prueba = this.pruebaActual(expediente, partida);
      if (!prueba || prueba.tipo !== "dual" || !prueba.partes[lado]) return { correcta: false };
      const registro = this.registro(partida, prueba.id);
      if (!registro.partes) registro.partes = {};
      if (registro.partes[lado]) return { correcta: true, completa: false };
      this.anotarIntento(registro, lado + ": " + respuesta);
      const parte = Object.assign({ id: prueba.id + "/" + lado }, prueba.partes[lado]);
      if (!DC.validacion.comprobar(expediente, parte, respuesta)) return this.fallar(expediente, partida, registro);
      registro.partes[lado] = true;
      const completa = Object.keys(prueba.partes).every((l) => registro.partes[l]);
      if (!completa) {
        this.tocar(partida);
        return { correcta: true, completa: false };
      }
      return Object.assign({ completa: true }, this.superar(expediente, partida, prueba, registro));
    },

    /**
     * Un minijuego conseguido (D25): la prueba en curso queda superada. Sin puntos si las hermanas
     * tuvieron que resolverlo a su manera.
     * @returns {{correcta: boolean, puntos?: number, desbloqueos?: object[], terminada?: boolean}}
     */
    superarMinijuego(expediente, partida, sinPuntos) {
      const prueba = this.pruebaActual(expediente, partida);
      if (!prueba || !prueba.config) return { correcta: false };
      const registro = this.registro(partida, prueba.id);
      registro.intentos += 1;
      if (sinPuntos) registro.aSuManera = true;
      const resultado = this.superar(expediente, partida, prueba, registro);
      if (sinPuntos) {
        registro.puntos = 0;
        partida.puntuacion = DC.puntuacion.total(partida);
        this.tocar(partida);
        resultado.puntos = 0;
      }
      return resultado;
    },

    /**
     * Un intento de minijuego agotado: cuenta como fallo; al llegar al límite, toca resolverlo a
     * su manera.
     * @returns {{correcta: boolean, aSuManera: boolean, intentos: number}}
     */
    fallarMinijuego(expediente, partida) {
      const prueba = this.pruebaActual(expediente, partida);
      if (!prueba) return { correcta: false, aSuManera: false, intentos: 0 };
      const registro = this.registro(partida, prueba.id);
      registro.intentos += 1;
      registro.fallos += 1;
      this.tocar(partida);
      return { correcta: false, aSuManera: registro.fallos >= DC.reglas.INTENTOS_MINIJUEGO, intentos: registro.fallos };
    },

    /** Apunta un intento en el registro (se guardan los diez últimos). */
    anotarIntento(registro, respuesta) {
      registro.intentos += 1;
      registro.respuestas.push(String(respuesta).slice(0, 200));
      registro.respuestas = registro.respuestas.slice(-10);
    },

    /** Un fallo: cuenta, y en la acusación con límite (D18) puede cerrar el caso en falso. */
    fallar(expediente, partida, registro) {
      registro.fallos += 1;
      const restantes = this.acusacionesRestantes(expediente, partida);
      if (restantes === 0) {
        registro.puntos = 0;
        partida.fallida = true;
        this.terminar(expediente, partida);
        this.tocar(partida);
        return { correcta: false, terminada: true, fallida: true };
      }
      this.tocar(partida);
      return { correcta: false, restantes };
    },

    /** Da por superada la prueba en curso: puntos, desbloqueos y avance. */
    superar(expediente, partida, prueba, registro) {
      registro.superada = true;
      registro.puntos = DC.puntuacion.puntosPrueba(prueba, registro, partida.modo);
      partida.completadas.push(prueba.id);
      partida.puntuacion = DC.puntuacion.total(partida);

      const recorrido = this.recorrido(expediente, partida.duracion);
      const siguiente = recorrido[recorrido.indexOf(prueba) + 1] || null;
      let terminada = false;
      if (siguiente) {
        partida.pruebaActual = siguiente.id;
      } else {
        terminada = true;
        this.terminar(expediente, partida);
      }
      this.tocar(partida);
      return { correcta: true, puntos: registro.puntos, desbloqueos: this.desbloqueosDe(expediente, prueba.id), terminada };
    },

    /**
     * La acusación de un recorrido: la prueba marcada con `acusacion: true` o, si no hay ninguna,
     * la última (docs/juego.md).
     * @returns {object|null}
     */
    acusacion(expediente, idDuracion) {
      const recorrido = this.recorrido(expediente, idDuracion);
      return recorrido.find((p) => p.acusacion) || recorrido[recorrido.length - 1] || null;
    },

    /**
     * Acusaciones que quedan si la prueba en curso es la acusación y el modo las limita (D18).
     * @returns {?number} null si no hay límite o no es la acusación.
     */
    acusacionesRestantes(expediente, partida) {
      const limite = DC.reglas.modo(partida.modo).acusaciones;
      const prueba = this.pruebaActual(expediente, partida);
      if (!limite || !prueba) return null;
      if (this.acusacion(expediente, partida.duracion) !== prueba) return null;
      return Math.max(0, limite - this.registro(partida, prueba.id).fallos);
    },

    /**
     * Elementos que desbloquea una prueba (para los avisos de nuevo descubrimiento).
     * @returns {{coleccion: string, elemento: object}[]}
     */
    desbloqueosDe(expediente, idPrueba) {
      const lista = [];
      COLECCIONES.forEach((coleccion) => {
        (expediente[coleccion] || []).forEach((elemento) => {
          if (elemento.desbloqueadoPor === idPrueba) lista.push({ coleccion, elemento });
        });
      });
      (expediente.sospechosos || []).forEach((s) => {
        (s.contradicciones || []).forEach((c) => {
          if (c.desbloqueadoPor === idPrueba) lista.push({ coleccion: "contradicciones", elemento: s });
        });
      });
      return lista;
    },

    /**
     * Pide la siguiente pista de la prueba en curso.
     * @returns {string|null} Texto de la pista o null si no quedan.
     */
    pedirPista(expediente, partida) {
      const prueba = this.pruebaActual(expediente, partida);
      if (!prueba) return null;
      const registro = this.registro(partida, prueba.id);
      if (DC.pistas.restantes(partida, registro) === 0) return null;
      registro.pistas += 1;
      this.tocar(partida);
      return DC.decodificar(expediente.id, prueba.pistas[registro.pistas - 1]);
    },

    /**
     * Preguntas ya hechas a un personaje en el interrogatorio (D24).
     * @returns {string[]} Ids de las preguntas, en el orden en que se hicieron.
     */
    preguntasHechas(partida, idSospechoso) {
      if (!partida.interrogatorio) partida.interrogatorio = {};
      return partida.interrogatorio[idSospechoso] || [];
    },

    /** @returns {number} Preguntas que aún se le pueden hacer a ese personaje en este modo. */
    preguntasRestantes(partida, idSospechoso) {
      return Math.max(0, DC.reglas.modo(partida.modo).preguntas - this.preguntasHechas(partida, idSospechoso).length);
    },

    /**
     * Hace una pregunta a un personaje. Solo si quedan preguntas y esa no se ha hecho ya.
     * @returns {string|null} La respuesta en claro, o null si no se puede preguntar.
     */
    preguntar(expediente, partida, idSospechoso, idPregunta) {
      const s = (expediente.sospechosos || []).find((x) => x.id === idSospechoso);
      const pregunta = s && (s.preguntas || []).find((q) => q.id === idPregunta);
      if (!pregunta || !this.desbloqueado(partida, s) || !this.desbloqueado(partida, pregunta)) return null;
      const hechas = this.preguntasHechas(partida, idSospechoso);
      if (hechas.indexOf(idPregunta) !== -1) return DC.decodificar(expediente.id, pregunta.respuesta);
      if (this.preguntasRestantes(partida, idSospechoso) === 0) return null;
      partida.interrogatorio[idSospechoso] = hechas.concat([idPregunta]);
      this.tocar(partida);
      return DC.decodificar(expediente.id, pregunta.respuesta);
    },

    /**
     * El Interrogatorio se abre al superar la prueba que fija `interrogatorio.desbloqueadoPor` del
     * expediente (D26); sin ese campo, está abierto desde el principio.
     * @returns {boolean}
     */
    interrogatorioAbierto(expediente, partida) {
      const regla = expediente.interrogatorio;
      return !regla || !regla.desbloqueadoPor || partida.completadas.indexOf(regla.desbloqueadoPor) !== -1;
    },

    /**
     * Balance de sospechosos del expediente (D26) si ya se ha superado la prueba que lo trae.
     * @returns {object|null}
     */
    balance(expediente, partida) {
      const b = expediente.balance;
      return b && partida.completadas.indexOf(b.trasPrueba) !== -1 ? b : null;
    },

    /** Cierra la partida y la apunta en el historial. */
    terminar(expediente, partida) {
      this.pausarReloj();
      partida.terminada = new Date().toISOString();
      partida.pruebaActual = null;
      partida.puntuacion = DC.puntuacion.total(partida);
      DC.estado.obtener().historial.push({
        expedienteId: expediente.id,
        titulo: expediente.titulo,
        fecha: partida.terminada,
        puntuacion: partida.puntuacion,
        maxima: DC.puntuacion.maxima(expediente, partida.duracion),
        modo: partida.modo,
        duracion: partida.duracion,
        tiempo: partida.tiempo,
        jugadores: partida.jugadores,
        detectives: partida.detectives,
        fallida: !!partida.fallida
      });
    },

    /** @returns {boolean} true si el expediente se ha resuelto alguna vez. */
    resuelto(idExpediente) {
      return DC.estado.obtener().historial.some((h) => h.expedienteId === idExpediente);
    },

    /**
     * Orden en que se cerraron los casos (D30): cada expediente cuenta desde la primera vez que entró
     * en el historial.
     * @returns {string[]} Ids de expediente.
     */
    ordenCierre() {
      const orden = [];
      DC.estado.obtener().historial.forEach((h) => { if (orden.indexOf(h.expedienteId) === -1) orden.push(h.expedienteId); });
      return orden;
    },

    /**
     * Posición de un caso en la saga tal como se ha jugado: 1 el primero que se cerró. Si aún no se
     * ha cerrado, la que tendrá al cerrarlo.
     * @returns {number}
     */
    posicion(idExpediente) {
      const orden = this.ordenCierre();
      const i = orden.indexOf(idExpediente);
      return i === -1 ? orden.length + 1 : i + 1;
    },

    /**
     * Texto que depende del orden de juego (D30): un texto tal cual, o un objeto con una variante por
     * posición ({ "2": …, "3": …, "4": …, "otro": … }).
     * @param {string|object} valor
     * @param {string} idExpediente Caso al que pertenece el texto.
     * @returns {string}
     */
    variante(valor, idExpediente) {
      if (!valor || typeof valor === "string") return valor || "";
      const v = valor[String(this.posicion(idExpediente))];
      return v !== undefined ? v : (valor.otro || "");
    },

    /**
     * La marca de un expediente en una dificultad (D27): el resultado de la primera vez que se
     * cerró en ese modo. Volver a jugarlo en el mismo modo no la cambia; para otra marca hay que
     * cambiar de dificultad.
     * @returns {?object} La entrada del historial, o null si no se ha cerrado en ese modo.
     */
    marca(idExpediente, modo) {
      return DC.estado.obtener().historial.find((h) => h.expedienteId === idExpediente && h.modo === modo) || null;
    },

    /** Actualiza la marca de tiempo y guarda. */
    tocar(partida) {
      partida.actualizada = new Date().toISOString();
      DC.estado.guardar();
    },

    /** Empieza o reanuda el reloj de investigación de un expediente. */
    reanudarReloj(idExpediente) {
      const partida = this.obtener(idExpediente);
      if (!partida || partida.terminada) return;
      if (reloj.expedienteId && reloj.expedienteId !== idExpediente) this.pausarReloj();
      if (reloj.temporizador) return;
      reloj = { expedienteId: idExpediente, desde: Date.now(), temporizador: null, ultimoGuardado: Date.now() };
      reloj.temporizador = setInterval(() => {
        DC.emitir("reloj", this.tiempo(partida));
        if (Date.now() - reloj.ultimoGuardado > INTERVALO_GUARDADO_RELOJ) this.consolidarReloj();
      }, 1000);
    },

    /** Suma el tiempo corrido a la partida y guarda. */
    consolidarReloj() {
      const partida = reloj.expedienteId && this.obtener(reloj.expedienteId);
      if (!partida || !reloj.temporizador) return;
      const ahora = Date.now();
      partida.tiempo += ahora - reloj.desde;
      reloj.desde = ahora;
      reloj.ultimoGuardado = ahora;
      DC.estado.guardar();
    },

    /** Para el reloj y guarda el tiempo. */
    pausarReloj() {
      if (!reloj.temporizador) return;
      this.consolidarReloj();
      clearInterval(reloj.temporizador);
      reloj = { expedienteId: null, desde: 0, temporizador: null, ultimoGuardado: 0 };
    },

    /** @returns {number} Milisegundos de investigación, incluido el tramo en curso. */
    tiempo(partida) {
      const enCurso = reloj.temporizador && reloj.expedienteId === partida.expedienteId
        ? Date.now() - reloj.desde : 0;
      return partida.tiempo + enCurso;
    }
  };
})(DetectiveCodex);
