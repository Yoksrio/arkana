/**
 * Casos resueltos (D24): la lista de los expedientes cerrados y, para el elegido, los hilos del
 * caso: la explicación de las hermanas colgada de un hilo rojo, con la prueba y los documentos de
 * los que salió cada paso.
 */
(function (DC) {
  "use strict";

  const { el, boton, icono } = DC.ui;

  function pantalla(vista, params) {
    const t = DC.textos.resueltos;
    const fichas = DC.fichas().filter((f) => DC.partida.resuelto(f.id) && DC.expediente(f.id));
    const elegida = fichas.find((f) => f.id === params.id) || fichas[0] || null;
    const expediente = elegida && DC.expediente(elegida.id);
    const partida = elegida && DC.partida.obtener(elegida.id);

    vista.appendChild(el("div.agencia-pagina", null,
      DC.cabeceraAgencia({ titulo: t.titulo, lema: t.lema, imagen: DC.juntasHilos }),
      DC.barraArchivo("resueltos"),
      el("div.agencia-cuerpo resueltos", null,
        fichas.length
          ? el("nav.resueltos-lista", { "aria-label": t.titulo }, fichas.map((f) => boton([
            el("span.resueltos-numero", { text: "Nº " + f.numero }),
            el("span", { text: f.titulo })
          ], () => DC.rutas.ir("resueltos/" + f.id), "resueltos-caso" + (f === elegida ? " activo" : ""), { "aria-current": f === elegida ? "page" : null })))
          : el("p.agencia-vacio", { text: t.vacio }),
        expediente ? el("section.agencia-tarjeta resueltos-tablero", null,
          el("h2.agencia-rotulo", { text: DC.formato.plantilla(t.hilos, elegida) }),
          el("p.ayuda", { text: t.ayuda }),
          DC.explicacion.hilos(expediente, partida && partida.terminada ? partida : null),
          el("div.resueltos-acciones", null,
            boton([icono("flecha"), el("span", { text: t.resolucion })], () => DC.rutas.ir("resolucion/" + elegida.id), "agencia-boton"))) : null)));
  }

  DC.rutas.registrar("resueltos", pantalla);
  DC.rutas.registrar("resueltos/:id", pantalla);
})(DetectiveCodex);
