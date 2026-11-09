/**
 * Los cinco minijuegos (D25). Cada uno es `montar(tablero, config, api)`: pinta en `tablero`, y
 * llama a `api.terminar(true)` al conseguirlo. El reloj y los intentos los lleva minijuegos.js.
 *   parejas:     { simbolos: ["☉", …] }            6 u 8 símbolos → 12 o 16 cartas boca abajo
 *   secuencia:   { simbolos: ["☉", …], rondas, inicial? }  memorizar y repetir, cada ronda una más
 *   telegrama:   { texto }                          transcribir un telegrama en clave, casilla a casilla, antes del corte
 *   cerradura:   { ruedas: [["I","II",…], …] }      ruedas de símbolos; la combinación va en huellasRespuesta
 *   diferencias: { visualA, visualB, puntos: [{x, y, r}] }  pulsar las diferencias entre dos visuales
 */
(function (DC) {
  "use strict";

  const { el, boton } = DC.ui;
  const tipos = DC.minijuegos.tipos;

  function barajar(lista) {
    const copia = lista.slice();
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function contador(texto) {
    return el("p.minijuego-contador", { "aria-live": "polite", text: texto });
  }

  // ---------- Encontrar parejas ----------
  tipos.parejas = {
    montar(tablero, config, api) {
      const t = DC.textos.minijuegos.parejas;
      const cartas = barajar(config.simbolos.concat(config.simbolos));
      let levantadas = [];
      let encontradas = 0;
      let bloqueado = false;
      const estado = contador(DC.formato.plantilla(t.encontradas, { n: 0, total: config.simbolos.length }));
      const rejilla = el("div.parejas", { class: "parejas-" + cartas.length, role: "group" });

      cartas.forEach((simbolo) => {
        const carta = boton([el("span.carta-dorso", { "aria-hidden": "true" }), el("span.carta-cara", { text: simbolo })], () => {
          if (bloqueado || carta.classList.contains("levantada") || carta.classList.contains("pareja")) return;
          carta.classList.add("levantada");
          DC.sonido.reproducir("papel");
          levantadas.push(carta);
          if (levantadas.length < 2) return;
          const [a, b] = levantadas;
          levantadas = [];
          if (a.dataset.simbolo === b.dataset.simbolo) {
            a.classList.add("pareja"); b.classList.add("pareja");
            encontradas += 1;
            estado.textContent = DC.formato.plantilla(t.encontradas, { n: encontradas, total: config.simbolos.length });
            if (encontradas === config.simbolos.length) setTimeout(() => api.terminar(true), 400);
          } else {
            bloqueado = true;
            setTimeout(() => { a.classList.remove("levantada"); b.classList.remove("levantada"); bloqueado = false; }, api.reducirMovimiento ? 350 : 800);
          }
        }, "carta", { "aria-label": t.carta });
        carta.dataset.simbolo = simbolo;
        rejilla.appendChild(carta);
      });
      tablero.append(estado, rejilla);
    }
  };

  // ---------- Secuencia de símbolos ----------
  tipos.secuencia = {
    montar(tablero, config, api) {
      const t = DC.textos.minijuegos.secuencia;
      const rondas = config.rondas || 5;
      const inicial = config.inicial || 3;
      const secuencia = [];
      let ronda = 0;
      let posicion = 0;
      let turno = false;
      let parado = false;
      const estado = contador("");
      const pads = config.simbolos.map((s, i) => boton(el("span", { text: s }), () => pulsar(i), "pad", { disabled: true, style: "--tono:" + i }));
      const panel = el("div.secuencia", null, pads);

      function iluminar(i, ms) {
        return new Promise((resolver) => {
          pads[i].classList.add("pad-luz");
          DC.sonido.reproducir("tecla");
          setTimeout(() => { pads[i].classList.remove("pad-luz"); setTimeout(resolver, ms / 3); }, ms);
        });
      }

      async function mostrar() {
        turno = false;
        pads.forEach((p) => { p.disabled = true; });
        estado.textContent = DC.formato.plantilla(t.mirar, { n: ronda, total: rondas });
        const ms = api.reducirMovimiento ? 250 : Math.max(280, 650 - ronda * 40);
        for (const i of secuencia) {
          if (parado) return;
          await iluminar(i, ms);
        }
        posicion = 0;
        turno = true;
        pads.forEach((p) => { p.disabled = false; });
        estado.textContent = DC.formato.plantilla(t.repetir, { n: ronda, total: rondas });
      }

      function siguienteRonda() {
        ronda += 1;
        const nuevos = ronda === 1 ? inicial : 1;
        for (let k = 0; k < nuevos; k++) secuencia.push(Math.floor(Math.random() * config.simbolos.length));
        mostrar();
      }

      function pulsar(i) {
        if (!turno) return;
        iluminar(i, 180);
        if (i !== secuencia[posicion]) {
          turno = false;
          estado.textContent = t.error;
          DC.sonido.reproducir("error");
          setTimeout(() => { secuencia.length = 0; ronda = 0; siguienteRonda(); }, 900);
          return;
        }
        posicion += 1;
        if (posicion === secuencia.length) {
          turno = false;
          if (ronda >= rondas) setTimeout(() => api.terminar(true), 300);
          else setTimeout(siguienteRonda, 700);
        }
      }

      tablero.append(estado, panel);
      setTimeout(siguienteRonda, 400);
      return { parar() { parado = true; } };
    }
  };

  // ---------- Telegrama contrarreloj ----------
  tipos.telegrama = {
    montar(tablero, config, api) {
      const t = DC.textos.minijuegos.telegrama;
      const transcripcion = DC.transcripcion.crear(DC.clave.aTelegrama(config.texto), { alAcertar: () => api.terminar(true) });
      tablero.append(
        el("article.telegrafo-papel telegrafo-papel-clave", null, el("p.telegrafo-cabecera", { text: t.cabecera }), transcripcion),
        el("details.plegable telegrama-tabla", { open: true }, el("summary", { text: DC.textos.clave.verTabla }), DC.clave.tabla()));
      const primera = transcripcion.querySelector(".clave-pieza");
      if (primera) primera.focus();
    }
  };

  // ---------- Cerradura mecánica ----------
  tipos.cerradura = {
    montar(tablero, config, api) {
      const t = DC.textos.minijuegos.cerradura;
      const posiciones = config.ruedas.map(() => 0);
      const aviso = el("p.formulario-error", { role: "alert" });
      const ruedas = config.ruedas.map((valores, i) => {
        const ventana = el("span.rueda-valor", { text: valores[0], "aria-live": "polite" });
        const girar = (paso) => {
          posiciones[i] = (posiciones[i] + paso + valores.length) % valores.length;
          ventana.textContent = valores[posiciones[i]];
          DC.sonido.reproducir("tecla");
        };
        return el("div.rueda", { role: "group", "aria-label": DC.formato.plantilla(t.rueda, { n: i + 1 }) },
          boton("▲", () => girar(-1), "rueda-boton", { "aria-label": t.subir }),
          ventana,
          boton("▼", () => girar(1), "rueda-boton", { "aria-label": t.bajar }));
      });
      const abrir = boton(t.abrir, () => {
        const combinacion = posiciones.map((p, i) => config.ruedas[i][p]).join("-");
        if (api.comprobar(combinacion)) api.terminar(true);
        else { DC.sonido.reproducir("error"); aviso.textContent = t.noAbre; tablero.classList.add("temblor"); }
      }, "boton-oro");
      tablero.addEventListener("animationend", () => tablero.classList.remove("temblor"));
      tablero.append(el("div.cerradura", null, ruedas), aviso, abrir);
    }
  };

  // ---------- Encuentra las diferencias ----------
  /** Radio mínimo, en píxeles de pantalla, con el que se acepta una pulsación cerca de una diferencia. */
  const TOLERANCIA_PX = 22;

  tipos.diferencias = {
    montar(tablero, config, api) {
      const t = DC.textos.minijuegos.diferencias;
      const total = config.puntos.length;
      const halladas = new Set();
      const estado = contador(DC.formato.plantilla(t.encontradas, { n: 0, total }));
      const visuales = [config.visualA, config.visualB].map((id) => DC.imagenes.visual(api.expediente, id));

      function circulo(svg, x, y, r, clase) {
        const nodo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        nodo.setAttribute("cx", x); nodo.setAttribute("cy", y); nodo.setAttribute("r", r);
        nodo.setAttribute("class", clase);
        svg.appendChild(nodo);
        return nodo;
      }

      function marcar(indice) {
        visuales.forEach((v) => {
          const svg = v.querySelector("svg");
          if (!svg) return;
          const p = config.puntos[indice];
          circulo(svg, p.x, p.y, p.r, "diferencia-hallada");
        });
      }

      function pulsar(evento, nodo) {
        const svg = nodo.querySelector("svg");
        if (!svg) return;
        const punto = svg.createSVGPoint();
        punto.x = evento.clientX; punto.y = evento.clientY;
        const ctm = svg.getScreenCTM();
        const local = punto.matrixTransform(ctm.inverse());
        // Tolerancia: el radio del punto y, como mínimo, el equivalente a TOLERANCIA_PX en pantalla.
        const minimo = TOLERANCIA_PX / Math.hypot(ctm.a, ctm.b);
        const indice = config.puntos.findIndex((p, i) => !halladas.has(i) && Math.hypot(local.x - p.x, local.y - p.y) <= Math.max(p.r, minimo));
        if (indice === -1) {
          DC.sonido.reproducir("error");
          nodo.classList.add("temblor");
          const fallo = circulo(svg, local.x, local.y, minimo * 0.6, "diferencia-fallida");
          setTimeout(() => fallo.remove(), 700);
          return;
        }
        halladas.add(indice);
        marcar(indice);
        DC.sonido.reproducir("sello");
        estado.textContent = DC.formato.plantilla(t.encontradas, { n: halladas.size, total });
        if (halladas.size === total) setTimeout(() => api.terminar(true), 400);
      }

      visuales.forEach((v) => {
        v.classList.add("diferencias-visual");
        v.addEventListener("click", (e) => pulsar(e, v));
        v.addEventListener("animationend", () => v.classList.remove("temblor"));
      });
      tablero.append(estado, el("div.diferencias", null, visuales));
    }
  };
})(DetectiveCodex);
