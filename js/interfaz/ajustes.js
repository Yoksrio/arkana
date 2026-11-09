/**
 * Ajustes (D15): sonido y movimiento, quién es quién, la clave de Yoksrio (D16)
 * y progreso guardado, en tarjetas bajo la cabecera de la agencia.
 */
(function (DC) {
  "use strict";

  const { el, boton, icono } = DC.ui;

  function interruptor(id, etiqueta, ayuda, valor, alCambiar) {
    return el("div.ajuste", null,
      el("label.interruptor", { for: id },
        el("input", { type: "checkbox", id, role: "switch", checked: valor, onChange: (e) => alCambiar(e.target.checked) }),
        el("span.interruptor-pista", { "aria-hidden": "true" }),
        el("span.ajuste-nombre", { text: etiqueta })),
      el("p.ajuste-ayuda", { text: ayuda }));
  }

  function tarjeta(titulo, ...contenido) {
    return el("section.agencia-tarjeta", null, el("h2.agencia-rotulo", { text: titulo }), contenido);
  }

  DC.rutas.registrar("ajustes", (vista) => {
    const t = DC.textos.ajustes;
    const ajustes = DC.estado.ajustes();
    const partidas = DC.estado.obtener().partidas;
    const ids = Object.keys(partidas);
    const equipo = DC.detectives.equipo();

    vista.appendChild(el("div.agencia-pagina", null,
      DC.cabeceraAgencia({ titulo: t.titulo, lema: t.lema, imagen: "chiqui-pasadizo.jpg" }),
      el("div.agencia-cuerpo ajustes-rejilla", null,
        tarjeta(t.experiencia,
          interruptor("aj-sonido", t.sonido, t.sonidoAyuda, ajustes.sonido, (v) => {
            DC.estado.cambiarAjuste("sonido", v);
            DC.sonido.reproducir("tecla");
          }),
          interruptor("aj-movimiento", t.movimiento, t.movimientoAyuda, ajustes.reducirMovimiento, (v) => {
            DC.estado.cambiarAjuste("reducirMovimiento", v);
            DC.ui.aplicarMovimiento();
          })),
        tarjeta(DC.textos.equipo.titulo,
          equipo
            ? el("div.agencia-equipo", null, DC.detectives.lista().map((id) => el("div.agencia-miembro", null,
              DC.detectives.retrato(id, "agencia-retrato"),
              el("strong", { text: DC.detectives.nombre(id) }),
              el("span", { text: equipo[id] }))))
            : el("p.agencia-vacio", { text: t.sinEquipo }),
          equipo ? boton([icono("intercambiar"), el("span", { text: DC.textos.equipo.cambiar })], () => DC.rutas.ir("equipo"), "agencia-boton") : null),
        DC.clave.descubierta() ? tarjeta(DC.textos.clave.tabla,
          DC.clave.tabla(),
          boton([icono("carta"), el("span", { text: DC.textos.clave.leer })], () => DC.rutas.ir("carta"), "agencia-boton")) : null,
        tarjeta(t.progreso,
          ids.length
            ? el("ul.lista-partidas", null, ids.map((id) => {
              const ficha = DC.ficha(id) || { numero: id, titulo: "" };
              return el("li", null,
                el("span", { text: "Nº " + ficha.numero + " · " + ficha.titulo }),
                boton(t.borrarCaso, () => {
                  DC.ui.confirmar(DC.textos.expediente.confirmarReinicio, t.borrarCaso).then((si) => {
                    if (!si) return;
                    DC.partida.reiniciar(id);
                    DC.rutas.refrescar();
                  });
                }, "boton-texto"));
            }))
            : el("p.agencia-vacio", { text: t.sinPartidas }),
          el("p.ajuste-ayuda", { text: t.borrarAyuda }),
          boton(t.borrarTodo, () => {
            DC.ui.confirmar(t.confirmarTodo, t.borrarTodo).then((si) => {
              if (!si) return;
              DC.partida.pausarReloj();
              DC.estado.borrarTodo();
              DC.ui.aplicarMovimiento();
              DC.ui.aviso(t.borrado);
              DC.rutas.refrescar();
            });
          }, "boton-alerta")))));
  });
})(DetectiveCodex);
