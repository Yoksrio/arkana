/**
 * Sonidos opcionales sintetizados con Web Audio, sin ficheros: papel, tecla, sello, acierto,
 * error y apertura. Se activan o desactivan en Ajustes.
 */
(function (DC) {
  "use strict";

  let contexto = null;

  function ctx() {
    if (!contexto) {
      const Contexto = window.AudioContext || window.webkitAudioContext;
      if (!Contexto) return null;
      contexto = new Contexto();
    }
    if (contexto.state === "suspended") contexto.resume();
    return contexto;
  }

  function ruido(c, duracion, frecuencia, volumen, q) {
    const muestras = Math.floor(c.sampleRate * duracion);
    const buffer = c.createBuffer(1, muestras, c.sampleRate);
    const datos = buffer.getChannelData(0);
    for (let i = 0; i < muestras; i++) datos[i] = (Math.random() * 2 - 1) * (1 - i / muestras);
    const fuente = c.createBufferSource();
    fuente.buffer = buffer;
    const filtro = c.createBiquadFilter();
    filtro.type = "bandpass";
    filtro.frequency.value = frecuencia;
    filtro.Q.value = q || 0.8;
    const ganancia = c.createGain();
    ganancia.gain.value = volumen;
    fuente.connect(filtro).connect(ganancia).connect(c.destination);
    fuente.start();
  }

  function tono(c, frecuencia, inicio, duracion, volumen, tipo) {
    const osc = c.createOscillator();
    const ganancia = c.createGain();
    osc.type = tipo || "sine";
    osc.frequency.value = frecuencia;
    const t0 = c.currentTime + inicio;
    ganancia.gain.setValueAtTime(0.0001, t0);
    ganancia.gain.exponentialRampToValueAtTime(volumen, t0 + 0.02);
    ganancia.gain.exponentialRampToValueAtTime(0.0001, t0 + duracion);
    osc.connect(ganancia).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + duracion + 0.05);
  }

  const SONIDOS = {
    papel: (c) => ruido(c, 0.22, 2400, 0.25, 0.6),
    tecla: (c) => ruido(c, 0.04, 3200, 0.3, 2),
    sello: (c) => { tono(c, 90, 0, 0.25, 0.5, "sine"); ruido(c, 0.12, 500, 0.5, 1); },
    acierto: (c) => { tono(c, 523, 0, 0.5, 0.12, "triangle"); tono(c, 784, 0.12, 0.7, 0.1, "triangle"); },
    error: (c) => { tono(c, 140, 0, 0.3, 0.12, "sawtooth"); tono(c, 110, 0.12, 0.35, 0.1, "sawtooth"); },
    apertura: (c) => { ruido(c, 0.5, 900, 0.2, 0.5); tono(c, 196, 0.1, 0.9, 0.06, "sine"); }
  };

  DC.sonido = {
    /** Reproduce un efecto si los sonidos están activados. */
    reproducir(nombre) {
      if (!DC.estado.ajustes().sonido || !SONIDOS[nombre]) return;
      try {
        const c = ctx();
        if (c) SONIDOS[nombre](c);
      } catch (error) {
        DC.estado.cambiarAjuste("sonido", false);
      }
    }
  };
})(DetectiveCodex);
