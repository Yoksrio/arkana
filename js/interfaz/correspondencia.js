/**
 * Correspondencia con Yoksrio (D17, D24, D27): por cada caso cerrado, el telegrama que las hermanas
 * le mandaron y el que él contestó, en orden cronológico; lo descifrado queda guardado. La misma
 * lista la usa la pestaña Correspondencia del cuaderno y la página del archivo, que además anuncia
 * los telegramas que aún no han llegado.
 */
(function (DC) {
  "use strict";

  const { el } = DC.ui;

  DC.correspondencia = {
    /**
     * Lista de la correspondencia.
     * @param {{descifrable?: boolean, refrescar?: Function, conPendientes?: boolean}} o `descifrable`
     *   fuerza el botón de descifrar; sin él, depende del modo con que se cerró cada caso.
     *   `conPendientes` añade una tarjeta por cada telegrama que todavía no ha llegado.
     * @returns {HTMLElement}
     */
    lista(o) {
      const t = DC.textos.clave;
      const todos = DC.clave.telegramas();
      const recibidos = DC.clave.recibidos();
      if (!recibidos.length && !o.conPendientes) return el("p.vacio", { text: t.sinTelegramas });
      const orden = recibidos.concat(todos.filter((tg) => recibidos.indexOf(tg) === -1));
      return el("div.telegramas-lista", null, orden.map((tg) => {
        const ficha = DC.ficha(tg.trasExpediente) || { numero: tg.trasExpediente, titulo: "" };
        if (recibidos.indexOf(tg) === -1) {
          return o.conPendientes ? el("section.correspondencia-caso correspondencia-pendiente", null,
            el("h3.dossier-rotulo", { text: DC.formato.plantilla(t.trasCaso, ficha) }),
            el("p.telegrama-pendiente", { text: t.pendiente })) : null;
        }
        const partida = DC.partida.obtener(tg.trasExpediente);
        const descifrable = o.descifrable !== undefined ? o.descifrable
          : !partida || DC.reglas.modo(partida.modo).descifrarTelegrama;
        return el("section.correspondencia-caso", null,
          el("h3.dossier-rotulo", { text: DC.formato.plantilla(t.trasCaso, ficha) }),
          DC.clave.tarjetaEnviado(tg, ficha),
          DC.clave.tarjetaTelegrama(tg, descifrable, o.refrescar));
      }));
    }
  };

  DC.rutas.registrar("correspondencia", (vista) => {
    const t = DC.textos.clave;
    const recibidos = DC.clave.recibidos();
    vista.appendChild(el("div.agencia-pagina", null,
      DC.cabeceraAgencia({ titulo: t.telegramas, lema: t.telegramasAyuda, imagen: "telegrama-hermanas.jpg" }),
      DC.barraArchivo("correspondencia"),
      el("div.agencia-cuerpo correspondencia", null,
        el("section.agencia-tarjeta correspondencia-hoja", null,
          DC.correspondencia.lista({ conPendientes: true, refrescar: () => DC.rutas.refrescar() })),
        el("section.agencia-tarjeta", null,
          el("h2.agencia-rotulo", { text: t.tabla }),
          el("p.ayuda", { text: DC.formato.plantilla(t.recibidos, { n: recibidos.length, total: DC.clave.telegramas().length }) }),
          DC.clave.tabla()))));
  });
})(DetectiveCodex);
