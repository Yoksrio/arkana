/**
 * La explicación del caso (D24, D26): Gismera y Chiqui cuentan qué pasó siguiendo las pistas,
 * paso a paso. El expediente puede traerla escrita en `explicacion` ([{ quien, texto (codificado),
 * prueba?, documentos? }]); si no, se compone con los textos de éxito de las pruebas superadas,
 * alternando a las dos hermanas. Durante la partida, cada paso se revela al superar su prueba
 * («Lo que sabemos» y la pantalla de éxito); los pasos sin prueba esperan a la resolución. La
 * misma lista pinta los hilos de «Casos resueltos» y el repaso de la resolución. También pinta el
 * balance de sospechosos (`balance` del expediente, D27) que las hermanas hacen a mitad de caso.
 */
(function (DC) {
  "use strict";

  DC.explicacion = {
    /**
     * Pasos de la explicación, ya en claro.
     * @param {object} expediente
     * @param {object} [partida] Para saber qué pruebas se superaron; sin ella, todas las del recorrido completo.
     * @param {boolean} [soloConseguidos] true deja solo los pasos cuya prueba ya está superada (y los
     *   que no tienen prueba, solo si la partida ha terminado).
     * @returns {{quien: string, texto: string, prueba: object|null, documentos: object[]}[]}
     */
    pasos(expediente, partida, soloConseguidos) {
      const porId = (id) => expediente.pruebas.find((p) => p.id === id) || null;
      const doc = (id) => (expediente.documentos || []).find((d) => d.id === id);
      if (expediente.explicacion && expediente.explicacion.length) {
        const conseguido = (paso) => !soloConseguidos || !partida
          || (paso.prueba ? partida.completadas.indexOf(paso.prueba) !== -1 : !!partida.terminada);
        return expediente.explicacion.filter(conseguido).map((paso) => ({
          quien: paso.quien,
          texto: DC.decodificar(expediente.id, paso.texto),
          prueba: paso.prueba ? porId(paso.prueba) : null,
          documentos: (paso.documentos || []).map(doc).filter(Boolean)
        }));
      }
      const hechas = partida && partida.completadas && partida.completadas.length
        ? partida.completadas.map(porId).filter(Boolean)
        : DC.partida.recorrido(expediente, "completa");
      return hechas.map((prueba, i) => ({
        quien: DC.detectives.lista()[i % 2],
        texto: DC.decodificar(expediente.id, prueba.exito),
        prueba,
        documentos: (prueba.documentos || []).map(doc).filter(Boolean)
      }));
    },

    /**
     * Tarjeta de un paso: la hermana que habla, el texto y de qué prueba y documentos sale.
     * @returns {HTMLElement}
     */
    tarjeta(paso, partida) {
      const t = DC.textos.resolucion;
      const el = DC.ui.el;
      return el("article.hilo-tarjeta", { class: "hilo-" + paso.quien },
        DC.hermanas.linea(partida, paso.quien, paso.texto),
        paso.prueba || paso.documentos.length ? el("p.hilo-origen", null,
          paso.prueba ? el("span.hilo-prueba", { text: DC.formato.plantilla(t.pruebaDe, { titulo: paso.prueba.titulo }) }) : null,
          paso.documentos.map((d) => el("span.hilo-doc", { text: d.titulo }))) : null);
    },

    /**
     * Los pasos que revela una prueba concreta (el «hilo nuevo» de la pantalla de éxito).
     * @returns {object[]} Pasos en claro, normalmente uno.
     */
    deLaPrueba(expediente, partida, idPrueba) {
      return this.pasos(expediente, partida, true).filter((paso) => paso.prueba && paso.prueba.id === idPrueba);
    },

    /**
     * Balance de sospechosos (D27): a mitad de caso las hermanas clasifican a todos los
     * sospechosos. `balance` del expediente: { trasPrueba, propuestas: [{ quien, sospechoso, texto }]
     * (una por hermana: el principal que cada una propone, con su razón), sinDescartar: [{ sospechoso,
     * texto }], descartados: [{ sospechoso, texto }], cierre?: [{ quien, texto }] }. Clasifica a todos
     * los sospechosos que ya se conocen al llegar a `trasPrueba`; los que aparecen después quedan
     * fuera. El cierre solo se enseña al resolver: es cómo se ponen de acuerdo.
     * @param {boolean} [conCierre] true al resolver: añade el cierre y quita la ayuda.
     * @returns {HTMLElement}
     */
    tarjetaBalance(expediente, partida, balance, conCierre) {
      const t = DC.textos.hilos;
      const el = DC.ui.el;
      const ficha = (id) => (expediente.sospechosos || []).find((s) => s.id === id);
      const claro = (texto) => DC.decodificar(expediente.id, texto);
      const lineas = (lista) => el("div.hermanas", null, lista.map((l) => DC.hermanas.linea(partida, l.quien, claro(l.texto))));
      const grupo = (clase, titulo, lista, cuerpo) => (lista && lista.length
        ? el("section.balance-grupo", { class: clase },
          el("h4.balance-grupo-titulo", { text: titulo }),
          el("div.balance-fichas", null, lista.map((x) => {
            const s = ficha(x.sospechoso);
            return s && DC.partida.desbloqueado(partida, s) ? el("div.balance-ficha", null, DC.polaroid(expediente, s, s.profesion), cuerpo(x)) : null;
          })))
        : null);
      const cierre = conCierre && (balance.cierre || []).length ? balance.cierre : null;
      return el("article.balance", { class: conCierre ? "balance-cerrado" : null },
        el("h3.balance-titulo", { text: t.balanceTitulo }),
        grupo("balance-principales", t.principales, balance.propuestas,
          (p) => DC.hermanas.linea(partida, p.quien, claro(p.texto))),
        grupo("balance-sin-descartar", t.sinDescartar, balance.sinDescartar,
          (x) => el("p.balance-razon", { text: claro(x.texto) })),
        grupo("balance-descartados", t.descartados, balance.descartados,
          (x) => el("p.balance-razon", { text: claro(x.texto) })),
        cierre ? el("h3.balance-titulo balance-cierre", { text: t.balanceCierre }) : null,
        cierre ? lineas(cierre) : null,
        conCierre ? null : el("p.ayuda", { text: t.balanceAyuda }));
    },

    /**
     * Un paso colgado del hilo rojo, alternando lado según su posición.
     * @param {object} paso Paso en claro.
     * @param {number} i Posición en el tablero.
     * @returns {HTMLElement}
     */
    hiloPaso(paso, i, partida) {
      const el = DC.ui.el;
      return el("div.hilo-paso", { class: i % 2 ? "hilo-derecha" : "hilo-izquierda", style: "--giro:" + ((i % 3) - 1) * 0.6 + "deg" },
        el("span.hilo-chincheta", { "aria-hidden": "true" }),
        this.tarjeta(paso, partida));
    },

    /**
     * Tablero de hilos: los pasos colgados de un hilo rojo, alternando lado.
     * @param {boolean} [soloConseguidos] Durante la partida: solo lo ya descubierto.
     * @returns {HTMLElement}
     */
    hilos(expediente, partida, soloConseguidos) {
      return DC.ui.el("div.hilos", null, this.pasos(expediente, partida, soloConseguidos).map((paso, i) => this.hiloPaso(paso, i, partida)));
    }
  };
})(DetectiveCodex);
