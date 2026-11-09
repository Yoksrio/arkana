/**
 * Estadísticas (D15): rango con su barra hasta el siguiente, cifras de la agencia, las
 * investigadoras, un telegrama de Yoksrio según el rango y el historial de casos resueltos.
 */
(function (DC) {
  "use strict";

  const { el, icono } = DC.ui;

  function cifra(nombreIcono, valor, etiqueta) {
    return el("div.agencia-cifra", null,
      icono(nombreIcono, nombreIcono === "huella" ? "icono-relleno" : null),
      el("strong", { text: String(valor) }),
      el("span", { text: etiqueta }));
  }

  function placaRango(r) {
    const t = DC.textos.estadisticas;
    const sig = r.rango.siguiente;
    const avance = sig ? Math.min(1, (r.puntos - r.rango.desde) / (sig.desde - r.rango.desde)) : 1;
    return el("section.agencia-tarjeta placa-rango", null,
      DC.ui.svg(DC.ilustraciones.emblema(), "placa-emblema"),
      el("p.agencia-rotulo", { text: t.rango }),
      el("p.placa-rango-nombre", { text: DC.textos.rangos[r.rango.id] }),
      el("div.barra-progreso placa-barra", {
        role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(Math.round(avance * 100))
      }, el("span", { style: "width:" + Math.round(avance * 100) + "%" })),
      el("p.placa-siguiente", {
        text: sig ? DC.formato.plantilla(t.siguiente, { rango: DC.textos.rangos[sig.id], puntos: DC.formato.numero(sig.desde) }) : t.maximo
      }));
  }

  function investigadoras() {
    const t = DC.textos.estadisticas;
    const equipo = DC.detectives.equipo() || {};
    return el("section.agencia-tarjeta", null,
      el("h2.agencia-rotulo", { text: t.investigadoras }),
      el("div.agencia-equipo", null, DC.detectives.lista().map((id) => el("div.agencia-miembro", null,
        DC.detectives.retrato(id, "agencia-retrato"),
        el("strong", { text: DC.detectives.nombre(id) }),
        el("span", { text: equipo[id] || "—" })))));
  }

  function telegrama(r) {
    const t = DC.textos.estadisticas;
    return el("section.agencia-tarjeta telegrama", null,
      el("img.telegrama-foto", { src: DC.yoksrioPeriodico, alt: "", decoding: "async" }),
      el("div.telegrama-papel", null,
        el("p.telegrama-cabecera", { text: t.telegrama }),
        el("p.telegrama-texto", { text: t.telegramas[r.rango.id] })));
  }

  /** Marcas por expediente y dificultad (D27): la primera vez que se cerró cada caso en cada modo. */
  function marcas() {
    const t = DC.textos.estadisticas;
    const modos = Object.keys(DC.textos.modos);
    const celda = (marca) => el("td", { text: marca
      ? DC.formato.tiempo(marca.tiempo) + " · " + marca.puntuacion + " / " + marca.maxima + (marca.fallida ? " · " + DC.textos.resolucion.enFalso : "")
      : "—" });
    return el("section.agencia-tarjeta", null,
      el("h2.agencia-rotulo", { text: t.marcas }),
      el("p.ayuda", { text: t.marcasAyuda }),
      el("div.tabla-envoltura", null, el("table.tabla", null,
        el("thead", null, el("tr", null,
          el("th", { scope: "col", text: t.columnas[1] }),
          modos.map((m) => el("th", { scope: "col", text: DC.textos.modos[m].nombre })))),
        el("tbody", null, DC.fichas().map((f) => el("tr", null,
          el("td", { text: f.numero + " · " + f.titulo }),
          modos.map((m) => celda(DC.partida.marca(f.id, m)))))))));
  }

  DC.rutas.registrar("estadisticas", (vista) => {
    const t = DC.textos.estadisticas;
    const r = DC.resumen();
    const historial = DC.estado.obtener().historial.slice().reverse();

    vista.appendChild(el("div.agencia-pagina", null,
      DC.cabeceraAgencia({ titulo: t.titulo, lema: t.lema, imagen: "gismera-lupa.jpg", foco: "50% 62%" }),
      DC.barraArchivo("estadisticas"),
      el("div.agencia-cuerpo", null,
        el("div.estadisticas-rejilla", null,
          placaRango(r),
          el("div.agencia-cifras", null,
            cifra("expedientes", r.resueltos, t.resueltos),
            cifra("pruebas", r.pendientes, t.pendientes),
            cifra("reloj", DC.formato.tiempo(r.tiempo), t.tiempo),
            cifra("huella", DC.formato.numero(r.puntos), t.puntos)),
          investigadoras(),
          telegrama(r)),
        marcas(),
        el("section.agencia-tarjeta", null,
          el("h2.agencia-rotulo", { text: t.historial }),
          historial.length
            ? el("div.tabla-envoltura", null, el("table.tabla", null,
              el("thead", null, el("tr", null, t.columnas.map((c) => el("th", { scope: "col", text: c })))),
              el("tbody", null, historial.map((h) => el("tr", null,
                el("td", { text: DC.formato.fecha(h.fecha) }),
                el("td", { text: ((DC.ficha(h.expedienteId) || {}).numero || h.expedienteId) + " · " + h.titulo }),
                el("td", { text: h.jugadores.A + " · " + h.jugadores.B }),
                el("td", { text: DC.textos.modos[h.modo].nombre }),
                el("td", { text: DC.textos.duraciones[h.duracion].nombre }),
                el("td", { text: DC.formato.tiempo(h.tiempo) }),
                el("td", { text: h.puntuacion + " / " + h.maxima + (h.fallida ? " · " + DC.textos.resolucion.enFalso : "") }))))))
            : el("p.agencia-vacio", { text: t.sinHistorial })))));
  });
})(DetectiveCodex);
