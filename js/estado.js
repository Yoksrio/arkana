/**
 * Estado persistente en localStorage: ajustes, partidas por expediente e historial.
 * Si el navegador no deja guardar (modo privado estricto), funciona en memoria y lo indica.
 */
(function (DC) {
  "use strict";

  const CLAVE = "detectiveCodex.v1";
  const VERSION = 1;

  let datos = null;
  let persistente = true;

  function inicial() {
    return {
      version: VERSION,
      ajustes: { sonido: true, reducirMovimiento: false },
      partidas: {},
      activa: null,
      historial: [],
      equipo: null,
      clave: { asignaciones: {}, pistas: 0, descubierta: false }
    };
  }

  /** Adapta datos guardados con un esquema anterior. Hoy solo existe la versión 1. */
  function migrar(guardado) {
    const base = inicial();
    if (!guardado || typeof guardado !== "object") return base;
    return {
      version: VERSION,
      ajustes: Object.assign(base.ajustes, guardado.ajustes),
      partidas: guardado.partidas || {},
      activa: guardado.activa || null,
      historial: Array.isArray(guardado.historial) ? guardado.historial : [],
      equipo: guardado.equipo && guardado.equipo.gismera && guardado.equipo.chiqui ? guardado.equipo : null,
      clave: Object.assign(base.clave, guardado.clave)
    };
  }

  function cargar() {
    try {
      const texto = window.localStorage.getItem(CLAVE);
      datos = migrar(texto ? JSON.parse(texto) : null);
    } catch (error) {
      persistente = false;
      datos = inicial();
    }
  }

  DC.estado = {
    /** @returns {object} El estado completo (se modifica y luego se llama a guardar()). */
    obtener() {
      if (!datos) cargar();
      return datos;
    },

    /** Guarda el estado en localStorage. */
    guardar() {
      if (!datos) return;
      try {
        window.localStorage.setItem(CLAVE, JSON.stringify(datos));
        persistente = true;
      } catch (error) {
        persistente = false;
      }
      DC.emitir("estadoGuardado", { persistente });
    },

    /** @returns {boolean} false si el progreso no se puede guardar en este navegador. */
    esPersistente() {
      this.obtener();
      return persistente;
    },

    /** @returns {object} Ajustes del jugador. */
    ajustes() {
      return this.obtener().ajustes;
    },

    /** Cambia un ajuste y guarda. */
    cambiarAjuste(nombre, valor) {
      this.obtener().ajustes[nombre] = valor;
      this.guardar();
      DC.emitir("ajustesCambiados", this.obtener().ajustes);
    },

    /** Borra todo: partidas, historial y ajustes. */
    borrarTodo() {
      datos = inicial();
      this.guardar();
    }
  };
})(DetectiveCodex);
