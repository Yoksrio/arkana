/**
 * Comprobación de la estructura de un expediente (docs/juego.md «Cómo se escribe un caso»).
 * La usan el arranque (avisa en la consola) y herramientas/pruebas.html.
 */
(function (DC) {
  "use strict";

  const TIPOS = ["texto", "codigo", "hora", "eleccion", "hotspot"];
  const MINIJUEGOS = ["parejas", "secuencia", "telegrama", "cerradura", "diferencias"];
  const TIPOS_PRUEBA = TIPOS.concat(["dual"]).concat(MINIJUEGOS);

  /** Errores de la configuración de un minijuego (D25); vacío si está bien. */
  function comprobarMinijuego(exp, p) {
    const errores = [];
    if (!p.segundos || p.segundos < 20) errores.push("necesita segundos (20 o más)");
    if (!p.config || String(p.config).indexOf("dc1:") !== 0) { errores.push("la config debe ir codificada"); return errores; }
    let c;
    try { c = JSON.parse(DC.decodificar(exp.id, p.config)); } catch (e) { return ["la config no es JSON válido"]; }
    const lista = (campo, min) => Array.isArray(c[campo]) && c[campo].length >= min;
    if (p.tipo === "parejas" && !(lista("simbolos", 6) && (c.simbolos.length === 6 || c.simbolos.length === 8))) errores.push("parejas necesita 6 u 8 símbolos");
    if (p.tipo === "secuencia" && !(lista("simbolos", 3) && c.rondas >= 3)) errores.push("secuencia necesita 3 símbolos o más y rondas (3 o más)");
    if (p.tipo === "telegrama" && !(c.texto && c.texto.length >= 10)) errores.push("telegrama necesita texto");
    if (p.tipo === "cerradura") {
      if (!(lista("ruedas", 2) && c.ruedas.every((r) => Array.isArray(r) && r.length >= 3))) errores.push("cerradura necesita 2 ruedas o más, de 3 valores o más");
      if (!p.huellasRespuesta || !p.huellasRespuesta.length) errores.push("cerradura necesita las huellas de la combinación");
    }
    if (p.tipo === "diferencias") {
      if (!(c.visualA && c.visualB && (exp.visuales || {})[c.visualA] && (exp.visuales || {})[c.visualB])) errores.push("diferencias necesita visualA y visualB existentes");
      if (!(lista("puntos", 5) && c.puntos.length <= 7 && c.puntos.every((q) => q.r > 0))) errores.push("diferencias necesita entre 5 y 7 puntos con radio");
    }
    return errores;
  }
  const HERMANAS = ["gismera", "chiqui"];
  const COLECCIONES = ["documentos", "sospechosos", "ubicaciones", "cronologia"];

  /**
   * @param {object} exp Expediente registrado.
   * @returns {string[]} Lista de errores (vacía si está bien).
   */
  DC.comprobarExpediente = function (exp) {
    const errores = [];
    const fallo = (texto) => errores.push(exp.id + ": " + texto);
    const pruebas = exp.pruebas || [];
    const ids = pruebas.map((p) => p.id);
    const porId = {};
    pruebas.forEach((p) => { porId[p.id] = p; });

    if (!DC.ficha(exp.id)) fallo("no tiene ficha en catalogo.js");
    if (!pruebas.length) fallo("no tiene pruebas");
    if (new Set(ids).size !== ids.length) fallo("hay ids de prueba repetidos");

    function comprobarRespuesta(p, etiqueta) {
      if (!p.huellasRespuesta || !p.huellasRespuesta.length) fallo(etiqueta + " no tiene huellas de respuesta");
      if (p.tipo === "hotspot" && !(exp.visuales || {})[p.contenidoVisual]) fallo(etiqueta + " necesita un contenidoVisual existente");
      if (p.tipo === "eleccion" && !(p.opciones || []).length) fallo(etiqueta + " necesita opciones");
      if (p.tipo === "codigo" && !p.longitud) fallo(etiqueta + " necesita longitud");
      (p.documentos || []).forEach((id) => {
        if (!(exp.documentos || []).some((d) => d.id === id)) fallo(etiqueta + " usa un documento que no existe: " + id);
      });
    }

    pruebas.forEach((p) => {
      if (TIPOS_PRUEBA.indexOf(p.tipo) === -1) fallo(p.id + " tiene un tipo desconocido: " + p.tipo);
      if (!p.pistas || p.pistas.length !== 3) fallo(p.id + " debe tener tres pistas");
      if (p.siguientePrueba && !porId[p.siguientePrueba]) fallo(p.id + " apunta a una prueba que no existe");
      if (MINIJUEGOS.indexOf(p.tipo) !== -1) {
        if (p.acusacion) fallo(p.id + ": un minijuego no puede ser la acusación");
        comprobarMinijuego(exp, p).forEach((e) => fallo(p.id + ": " + e));
      } else if (p.tipo === "dual") {
        if (p.acusacion) fallo(p.id + ": una prueba a dos no puede ser la acusación");
        HERMANAS.forEach((lado) => {
          const parte = (p.partes || {})[lado];
          if (!parte) { fallo(p.id + " no tiene la parte de " + lado); return; }
          if (TIPOS.indexOf(parte.tipo) === -1) fallo(p.id + "/" + lado + " tiene un tipo desconocido: " + parte.tipo);
          comprobarRespuesta(parte, p.id + "/" + lado);
        });
      } else {
        comprobarRespuesta(p, p.id);
      }
      (p.escena || []).forEach((paso, i) => {
        if (!paso.texto || paso.texto.indexOf("dc1:") !== 0) fallo(p.id + " escena " + (i + 1) + ": el texto debe ir codificado");
        if (paso.quien && HERMANAS.indexOf(paso.quien) === -1) fallo(p.id + " escena " + (i + 1) + ": quien desconocida: " + paso.quien);
        if (paso.visual && !(exp.visuales || {})[paso.visual]) fallo(p.id + " escena " + (i + 1) + ": visual inexistente: " + paso.visual);
        if (paso.imagen && !(exp.imagenes || []).some((im) => im.id === paso.imagen)) fallo(p.id + " escena " + (i + 1) + ": imagen inexistente: " + paso.imagen);
      });
    });

    (exp.sospechosos || []).forEach((s) => {
      const idsPreguntas = (s.preguntas || []).map((q) => q.id);
      if (new Set(idsPreguntas).size !== idsPreguntas.length) fallo(s.id + " tiene ids de pregunta repetidos");
      (s.preguntas || []).forEach((q) => {
        if (!q.texto) fallo(s.id + " pregunta " + q.id + " sin texto");
        if (!q.respuesta || q.respuesta.indexOf("dc1:") !== 0) fallo(s.id + " pregunta " + q.id + ": la respuesta debe ir codificada");
        if (q.desbloqueadoPor && !porId[q.desbloqueadoPor]) fallo(s.id + " pregunta " + q.id + " se desbloquea con una prueba que no existe");
      });
    });

    if (exp.interrogatorio && exp.interrogatorio.desbloqueadoPor && !porId[exp.interrogatorio.desbloqueadoPor]) {
      fallo("interrogatorio.desbloqueadoPor apunta a una prueba que no existe");
    }
    if (exp.balance) {
      const b = exp.balance;
      if (!porId[b.trasPrueba]) fallo("balance.trasPrueba apunta a una prueba que no existe");
      else if (!porId[b.trasPrueba].siguientePrueba) fallo("balance.trasPrueba no puede ser la última prueba");
      const propuestas = b.propuestas || [];
      if (propuestas.length !== 2 || propuestas[0].quien === propuestas[1].quien) fallo("balance.propuestas debe tener una por hermana");
      propuestas.forEach((p, i) => {
        if (HERMANAS.indexOf(p.quien) === -1) fallo("balance propuesta " + (i + 1) + ": quien desconocida: " + p.quien);
      });
      const grupos = [["propuestas", propuestas], ["sinDescartar", b.sinDescartar || []], ["descartados", b.descartados || []]];
      const clasificados = [];
      // Pruebas superadas al llegar al balance: la cadena desde la primera hasta trasPrueba.
      const hechas = [];
      for (let p = exp.pruebas[0]; p && hechas.indexOf(p.id) === -1; p = porId[p.siguientePrueba]) {
        hechas.push(p.id);
        if (p.id === b.trasPrueba) break;
      }
      const conocido = (s) => !s.desbloqueadoPor || hechas.indexOf(s.desbloqueadoPor) !== -1;
      grupos.forEach(([nombre, lista]) => lista.forEach((x, i) => {
        const s = (exp.sospechosos || []).find((y) => y.id === x.sospechoso);
        if (!s) fallo("balance." + nombre + " " + (i + 1) + ": sospechoso inexistente: " + x.sospechoso);
        else if (!conocido(s)) fallo("balance: " + x.sospechoso + " aún no se conoce al llegar al balance");
        if (clasificados.indexOf(x.sospechoso) !== -1) fallo("balance: " + x.sospechoso + " aparece en dos grupos");
        clasificados.push(x.sospechoso);
        if (!x.texto || x.texto.indexOf("dc1:") !== 0) fallo("balance." + nombre + " " + (i + 1) + ": el texto debe ir codificado");
      }));
      (exp.sospechosos || []).filter(conocido).forEach((s) => {
        if (clasificados.indexOf(s.id) === -1) fallo("balance: el sospechoso " + s.id + " no está en ningún grupo");
      });
      (b.cierre || []).forEach((l, i) => {
        if (HERMANAS.indexOf(l.quien) === -1) fallo("balance cierre " + (i + 1) + ": quien desconocida: " + l.quien);
        if (!l.texto || l.texto.indexOf("dc1:") !== 0) fallo("balance cierre " + (i + 1) + ": el texto debe ir codificado");
      });
    }

    (exp.explicacion || []).forEach((paso, i) => {
      if (HERMANAS.indexOf(paso.quien) === -1) fallo("explicacion " + (i + 1) + ": quien desconocida: " + paso.quien);
      if (!paso.texto || paso.texto.indexOf("dc1:") !== 0) fallo("explicacion " + (i + 1) + ": el texto debe ir codificado");
      if (paso.prueba && !porId[paso.prueba]) fallo("explicacion " + (i + 1) + ": prueba inexistente: " + paso.prueba);
      (paso.documentos || []).forEach((id) => {
        if (!(exp.documentos || []).some((d) => d.id === id)) fallo("explicacion " + (i + 1) + ": documento inexistente: " + id);
      });
    });

    Object.keys(exp.dialogos || {}).forEach((momento) => {
      const [tipo, id, sub] = momento.split(":");
      const sospechoso = (exp.sospechosos || []).find((s) => s.id === id);
      const existe = tipo === "prueba" ? !!porId[id]
        : tipo === "documento" ? (exp.documentos || []).some((d) => d.id === id)
          : tipo === "pregunta" ? !!(sospechoso && (sospechoso.preguntas || []).some((q) => q.id === sub)) : false;
      if (!existe) fallo("dialogo en un momento que no existe: " + momento);
      (exp.dialogos[momento] || []).forEach((l) => {
        if (HERMANAS.indexOf(l.quien) === -1) fallo("dialogo " + momento + ": quien desconocida: " + l.quien);
        if (!l.texto || l.texto.indexOf("dc1:") !== 0) fallo("dialogo " + momento + ": el texto debe ir codificado");
      });
    });

    const ultimas = pruebas.filter((p) => !p.siguientePrueba);
    if (ultimas.length !== 1) fallo("debe haber exactamente una prueba final (siguientePrueba: null)");
    else if (!ultimas[0].obligatoria) fallo("la prueba final debe ser obligatoria");
    const acusaciones = pruebas.filter((p) => p.acusacion);
    if (acusaciones.length > 1) fallo("solo puede haber una prueba marcada como acusación");
    else if (acusaciones.length === 1 && !acusaciones[0].obligatoria) fallo("la acusación debe ser obligatoria");
    if (pruebas[0] && !pruebas[0].obligatoria) fallo("la primera prueba debe ser obligatoria");

    const recorrido = DC.partida.recorrido(exp, "completa");
    if (recorrido.length !== pruebas.length) fallo("hay pruebas que no se alcanzan siguiendo siguientePrueba");

    // Lo que necesita una obligatoria no puede depender de una opcional.
    const posicion = {};
    recorrido.forEach((p, i) => { posicion[p.id] = i; });
    COLECCIONES.forEach((col) => (exp[col] || []).forEach((e) => {
      const origen = e.desbloqueadoPor;
      if (!origen) return;
      if (!porId[origen]) fallo((e.id || e.fecha) + " se desbloquea con una prueba que no existe: " + origen);
      else if (!porId[origen].obligatoria) fallo((e.id || e.fecha) + " solo se desbloquea con una prueba opcional");
    }));
    pruebas.forEach((p) => (p.documentos || []).forEach((id) => {
      const doc = (exp.documentos || []).find((d) => d.id === id);
      if (doc && doc.desbloqueadoPor && posicion[doc.desbloqueadoPor] >= posicion[p.id]) {
        fallo(p.id + " usa " + id + ", que aún no está desbloqueado en ese momento");
      }
    }));

    const suma = pruebas.reduce((a, p) => a + p.puntuacion, 0);
    if (exp.puntuacionMaxima !== suma) fallo("puntuacionMaxima (" + exp.puntuacionMaxima + ") no coincide con la suma (" + suma + ")");
    if (!exp.epilogo) fallo("falta el epílogo");
    return errores;
  };
})(DetectiveCodex);
