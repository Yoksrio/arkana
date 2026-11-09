/**
 * Expediente 008 — La habitación 309.
 * Solo datos: lo registra el motor (docs/juego.md «Cómo se escribe un caso»).
 * Las respuestas son huellas y las pistas, notas y epílogo van codificados (D5):
 * para cambiarlos, usar herramientas/huellas.html.
 */
DetectiveCodex.registrarExpediente({
  "id": "008",
  "numero": "003",
  "titulo": "La habitación 309",
  "subtitulo": "Una puerta que no figura en ningún plano",
  "categoria": [
    "misterio"
  ],
  "dificultad": 4,
  "duracion": "60–90 min",
  "portada": "img-portada",
  "elementoConductor": {
    "tipo": "número",
    "nombre": "El 309",
    "descripcion": "El número de una habitación que el Gran Hotel Atlántida suprimió en 1925 y que, sin embargo, sigue apareciendo."
  },
  "introduccion": "San Sebastián, agosto de 1927, en plena Semana Grande. En el Gran Hotel Atlántida, cuatro huéspedes distintos han despertado al amanecer en una habitación que no era la suya, con un 309 pintado por dentro de la puerta. Ninguno recuerda cómo llegó. Un botones los acompañó amablemente a su cuarto: «Es usted sonámbulo, señor; pasa mucho con el aire del mar».\n\nEl problema es que el Atlántida no tiene habitación 309. El director, que ha leído en los periódicos lo de la piedra de Asteria, os pide discreción y respuestas antes de la gran gala del día 15.",
  "historia": "El Gran Hotel Atlántida, frente a la bahía de la Concha, es el favorito de la aristocracia que veranea en San Sebastián. La sociedad propietaria, con un banco de Bilbao detrás, lo reformó entero en 1925: baños en cada habitación, ascensor nuevo y un montacargas nuevo para el servicio.\n\nEste verano, además, actúa cada noche en el salón el Gran Morfeo, un hipnotizador italiano que hace dormir a los huéspedes sobre el escenario. En el hotel ya se murmura que los sonámbulos son cosa suya.",
  "objetivo": "Encontrar la habitación 309, averiguar qué les pasó a los huéspedes que despertaron en ella y detener a quien está detrás antes de la gala.",
  "personajes": [
    {
      "nombre": "Ramón Elósegui",
      "rol": "Director del Gran Hotel Atlántida. Os ha llamado él.",
      "imagen": "img-elosegui"
    },
    {
      "nombre": "Victoria Sagasti",
      "rol": "Viuda bilbaína. La última que despertó en la 309.",
      "imagen": "img-victoria"
    }
  ],
  "cronologia": [
    {
      "fecha": "Noche del lunes 1 de agosto de 1927",
      "texto": "Mr. Harold Pym se duerme y despierta al amanecer en la habitación 309."
    },
    {
      "fecha": "Noche del jueves 4 de agosto",
      "texto": "Mme. Colette Duval se duerme y despierta al amanecer en la 309."
    },
    {
      "fecha": "Noche del domingo 7 de agosto",
      "texto": "Don Augusto Ferrer se duerme y despierta al amanecer en la 309."
    },
    {
      "fecha": "Noche del miércoles 10 de agosto",
      "texto": "Doña Victoria Sagasti se duerme y despierta al amanecer en la 309."
    },
    {
      "fecha": "Jueves 11 de agosto",
      "texto": "El director llama a la Agencia Arkana."
    },
    {
      "fecha": "Sábado 13 de agosto",
      "texto": "Noche de guardia en la tercera planta.",
      "desbloqueadoPor": "p03"
    },
    {
      "fecha": "Lunes 15 de agosto",
      "texto": "Gran gala de la Semana Grande en el salón del hotel."
    }
  ],
  "ubicaciones": [
    {
      "id": "u-hotel",
      "nombre": "Gran Hotel Atlántida",
      "descripcion": "Cinco plantas frente a la bahía. Recepción de noche, caja de caudales y salón de espectáculos.",
      "imagen": "img-hotel"
    },
    {
      "id": "u-lenceria",
      "nombre": "La lencería de la tercera planta",
      "descripcion": "Un cuarto de sábanas y toallas al fondo del ala norte, pared con pared con el montacargas. Por dentro, la puerta tiene pintado un 309.",
      "imagen": "img-lenceria",
      "desbloqueadoPor": "p02"
    },
    {
      "id": "u-recepcion",
      "nombre": "Recepción y caja de caudales",
      "descripcion": "Mostrador de caoba, cuadro de llaves y la caja de caudales con treinta cajitas para los huéspedes.",
      "imagen": "img-recepcion",
      "desbloqueadoPor": "p04"
    },
    {
      "id": "u-salon",
      "nombre": "Salón de espectáculos",
      "descripcion": "Donde actúa cada noche el Gran Morfeo y donde se celebrará la gala del 15.",
      "imagen": "img-salon",
      "desbloqueadoPor": "p07"
    }
  ],
  "imagenes": [
    {
      "id": "img-portada",
      "archivo": "portada.jpg",
      "prompt": "Cinematic 1927 illustration of a long dim grand hotel corridor at night, a single door at the very end slightly open with the number 309 painted on it, warm light spilling out, a bellboy's silhouette, aged sepia and deep red tones, engraving style",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "309"
      }
    },
    {
      "id": "img-hotel",
      "archivo": "hotel.jpg",
      "prompt": "1927 photograph of a grand belle époque hotel facing a bay in San Sebastián, white facade with balconies, flags, promenade with lamps, sea in front, summer evening, sepia, film grain, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Gran Hotel Atlántida"
      }
    },
    {
      "id": "img-lenceria",
      "archivo": "lenceria.jpg",
      "prompt": "1927 photograph of a small hotel linen room with shelves of folded white sheets and towels, a narrow iron bed against the wall, a small washbasin with soap, a window to the sea, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Lencería"
      }
    },
    {
      "id": "img-recepcion",
      "archivo": "recepcion.jpg",
      "prompt": "1927 photograph of a grand hotel reception desk at night, mahogany counter, a wall board with room keys hanging on hooks, a heavy iron safe behind, a desk bell and a lamp, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Recepción"
      }
    },
    {
      "id": "img-salon",
      "archivo": "salon.jpg",
      "prompt": "1927 photograph of a hotel entertainment salon with a small stage, red velvet curtains, a large travelling trunk on the stage with stars painted on it, rows of chairs, chandeliers, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Salón"
      }
    },
    {
      "id": "img-elosegui",
      "archivo": "elosegui.jpg",
      "prompt": "1920s portrait photograph of a Basque grand hotel director in his fifties, impeccable morning coat, grey moustache, worried composed expression, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "R. Elósegui"
      }
    },
    {
      "id": "img-victoria",
      "archivo": "victoria.jpg",
      "prompt": "1920s portrait photograph of a wealthy Spanish widow in her sixties, black silk dress, pearl choker, silver hair, sharp unafraid eyes, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "V. Sagasti"
      }
    },
    {
      "id": "img-julio",
      "archivo": "julio.jpg",
      "prompt": "1920s portrait photograph of a hotel night receptionist in his early thirties, dark uniform with gold buttons, slicked hair, thin moustache, smooth courteous smile, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "J. Bastarrica"
      }
    },
    {
      "id": "img-paco",
      "archivo": "paco.jpg",
      "prompt": "1920s portrait photograph of a young hotel bellboy aged nineteen, pillbox hat, short jacket with brass buttons, freckles, nervous eyes, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "P. Arana"
      }
    },
    {
      "id": "img-adela",
      "archivo": "adela.jpg",
      "prompt": "1920s portrait photograph of a Spanish hotel head housekeeper in her late forties, black dress with white collar, a ring of keys at her waist, severe hairstyle, stern honest face, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "A. Urquiza"
      }
    },
    {
      "id": "img-doctor",
      "archivo": "doctor.jpg",
      "prompt": "1920s portrait photograph of an elderly Spanish hotel doctor in his late fifties, pince-nez, grey goatee, dark suit, stethoscope in his pocket, absent-minded kind look, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "E. Ibarguren"
      }
    },
    {
      "id": "img-morfeo",
      "archivo": "morfeo.jpg",
      "prompt": "1920s studio portrait photograph of an Italian stage hypnotist in his late forties, black cape and tailcoat, pointed waxed moustache, intense staring eyes, one hand raised, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "El Gran Morfeo"
      }
    },
    {
      "id": "img-madera-llaves",
      "archivo": "madera-llaves.jpg",
      "prompt": "1920s photograph of a flat panel of old varnished hotel wood, seen perfectly straight on, filling the entire frame. Dark mahogany with visible grain, worn varnish, small scratches and dents. Completely empty: no hooks, no keys, no numbers, no labels, no letters. Soft even light, low contrast. Sepia tones, film grain, slight vignette, no text, no watermark",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Cuadro de llaves"
      }
    },
    {
      "id": "img-textura-jabon",
      "archivo": "../texturas/jabon.jpg",
      "prompt": "Extreme close-up photograph of the flat top surface of an old bar of pale cream soap, seen perfectly straight from above, filling the entire frame with no edges visible. Smooth waxy texture, tiny scratches, faint cracks and a slightly worn, matte finish. No imprints, no letters, no logos, no symbols. Soft even light, low contrast. Sepia tones, film grain, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Jabón"
      }
    }
  ],
  "visuales": {
    "planta": "<svg viewBox=\"0 0 960 640\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Plano actual de la tercera planta del Gran Hotel Atlántida\"><defs><radialGradient id=\"a8-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"a8-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"a8-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><linearGradient id=\"a8-mar\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-mar-oscuro\"/><stop offset=\"1\" class=\"ilst-mar\"/></linearGradient><pattern id=\"a8-rayado\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></pattern><pattern id=\"a8-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#a8-papel)\"/><image href=\"assets/img/texturas/mapa.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#a8-papel)\" opacity=\"0.45\"/></pattern></defs><rect width=\"960\" height=\"640\" fill=\"url(#a8-foto)\"/><ellipse cx=\"787.1999999999999\" cy=\"128\" rx=\"86.39999999999999\" ry=\"44.800000000000004\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#a8-difuso)\"/><ellipse cx=\"115.19999999999999\" cy=\"544\" rx=\"67.2\" ry=\"38.4\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#a8-difuso)\"/><rect x=\"20\" y=\"20\" width=\"920\" height=\"110\" fill=\"url(#a8-mar)\" opacity=\"0.7\"/><path d=\"M40 74 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M86 88 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M132 60 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M178 74 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M224 88 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M270 60 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M316 74 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M362 88 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M408 60 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M454 74 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M500 88 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M546 60 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M592 74 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M638 88 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M684 60 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M730 74 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M776 88 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M822 60 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M868 74 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M914 88 q8 -5 16 0 t16 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><ellipse cx=\"620\" cy=\"66\" rx=\"90\" ry=\"24\" class=\"ilf-tierra ils-tinta\" stroke-width=\"1.2\"/><rect x=\"612\" y=\"34\" width=\"12\" height=\"26\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><path d=\"M609 34 L618 24 L627 34 Z\" class=\"ilf-rojo\"/><text class=\"il-texto il-texto-etiqueta\" x=\"620\" y=\"112\" text-anchor=\"middle\" font-style=\"italic\">Isla y faro</text><text class=\"il-texto il-texto-peq\" x=\"60\" y=\"112\" font-style=\"italic\">La bahía (norte)</text><rect x=\"20\" y=\"530\" width=\"920\" height=\"90\" class=\"ilf-piedra\" opacity=\"0.45\"/><rect x=\"190\" y=\"544\" width=\"40\" height=\"60\" class=\"ilf-piedra-sombra ils-tinta\" stroke-width=\"1\"/><circle cx=\"210\" cy=\"562\" r=\"11\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"250\" y=\"584\" font-style=\"italic\">Torre del reloj (sur)</text><rect x=\"80\" y=\"160\" width=\"800\" height=\"340\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"6\"/><rect x=\"80\" y=\"300\" width=\"800\" height=\"60\" class=\"ilf-papel\"/><text class=\"il-texto il-texto-peq\" x=\"480\" y=\"336\" text-anchor=\"middle\" letter-spacing=\"6\">PASILLO</text><rect x=\"80\" y=\"240\" width=\"70\" height=\"180\" fill=\"url(#a8-rayado)\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" transform=\"translate(120 330) rotate(-90)\" text-anchor=\"middle\">Escalera principal</text><rect x=\"150\" y=\"160\" width=\"135\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"190.5\" y1=\"160\" x2=\"244.5\" y2=\"160\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"190.5\" y1=\"160\" x2=\"244.5\" y2=\"160\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"168\" y1=\"300\" x2=\"200\" y2=\"300\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"285\" y=\"160\" width=\"135\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"325.5\" y1=\"160\" x2=\"379.5\" y2=\"160\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"325.5\" y1=\"160\" x2=\"379.5\" y2=\"160\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"303\" y1=\"300\" x2=\"335\" y2=\"300\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"420\" y=\"160\" width=\"135\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"460.5\" y1=\"160\" x2=\"514.5\" y2=\"160\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"460.5\" y1=\"160\" x2=\"514.5\" y2=\"160\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"438\" y1=\"300\" x2=\"470\" y2=\"300\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"555\" y=\"160\" width=\"135\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"595.5\" y1=\"160\" x2=\"649.5\" y2=\"160\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"595.5\" y1=\"160\" x2=\"649.5\" y2=\"160\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"573\" y1=\"300\" x2=\"605\" y2=\"300\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"150\" y=\"360\" width=\"135\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"190.5\" y1=\"500\" x2=\"244.5\" y2=\"500\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"190.5\" y1=\"500\" x2=\"244.5\" y2=\"500\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"168\" y1=\"360\" x2=\"200\" y2=\"360\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"285\" y=\"360\" width=\"135\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"325.5\" y1=\"500\" x2=\"379.5\" y2=\"500\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"325.5\" y1=\"500\" x2=\"379.5\" y2=\"500\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"303\" y1=\"360\" x2=\"335\" y2=\"360\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"420\" y=\"360\" width=\"135\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"460.5\" y1=\"500\" x2=\"514.5\" y2=\"500\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"460.5\" y1=\"500\" x2=\"514.5\" y2=\"500\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"438\" y1=\"360\" x2=\"470\" y2=\"360\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"555\" y=\"360\" width=\"135\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"595.5\" y1=\"500\" x2=\"649.5\" y2=\"500\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"595.5\" y1=\"500\" x2=\"649.5\" y2=\"500\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"573\" y1=\"360\" x2=\"605\" y2=\"360\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"690\" y=\"160\" width=\"110\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"720\" y1=\"160\" x2=\"770\" y2=\"160\" class=\"ils-papel-claro\" stroke-width=\"5\"/><line x1=\"720\" y1=\"160\" x2=\"770\" y2=\"160\" class=\"ils-tinta-azul\" stroke-width=\"1.2\"/><line x1=\"710\" y1=\"300\" x2=\"740\" y2=\"300\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"800\" y=\"160\" width=\"80\" height=\"140\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2.5\"/><path d=\"M810 170 L870 290 M870 170 L810 290\" class=\"ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-peq\" x=\"840\" y=\"322\" text-anchor=\"middle\">montacargas</text><rect x=\"690\" y=\"360\" width=\"110\" height=\"140\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.5\"/><line x1=\"710\" y1=\"360\" x2=\"740\" y2=\"360\" class=\"ils-papel\" stroke-width=\"6\"/><rect x=\"800\" y=\"300\" width=\"80\" height=\"200\" fill=\"url(#a8-rayado)\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" transform=\"translate(845 430) rotate(-90)\" text-anchor=\"middle\">Escalera de servicio</text><g class=\"punto\" data-punto=\"r301\" transform=\"translate(217.5 230)\" tabindex=\"0\" role=\"button\" aria-label=\"301\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">301</text></g><g class=\"punto\" data-punto=\"r303\" transform=\"translate(352.5 230)\" tabindex=\"0\" role=\"button\" aria-label=\"303\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">303</text></g><g class=\"punto\" data-punto=\"r305\" transform=\"translate(487.5 230)\" tabindex=\"0\" role=\"button\" aria-label=\"305\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">305</text></g><g class=\"punto\" data-punto=\"r307\" transform=\"translate(622.5 230)\" tabindex=\"0\" role=\"button\" aria-label=\"307\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">307</text></g><g class=\"punto\" data-punto=\"r302\" transform=\"translate(217.5 430)\" tabindex=\"0\" role=\"button\" aria-label=\"302\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">302</text></g><g class=\"punto\" data-punto=\"r304\" transform=\"translate(352.5 430)\" tabindex=\"0\" role=\"button\" aria-label=\"304\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">304</text></g><g class=\"punto\" data-punto=\"r306\" transform=\"translate(487.5 430)\" tabindex=\"0\" role=\"button\" aria-label=\"306\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">306</text></g><g class=\"punto\" data-punto=\"r308\" transform=\"translate(622.5 430)\" tabindex=\"0\" role=\"button\" aria-label=\"308\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">308</text></g><g class=\"punto\" data-punto=\"lenceria\" transform=\"translate(745 230)\" tabindex=\"0\" role=\"button\" aria-label=\"Lencería\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">Lencería</text></g><g class=\"punto\" data-punto=\"escobas\" transform=\"translate(745 430)\" tabindex=\"0\" role=\"button\" aria-label=\"Escobas\"><circle r=\"44\" class=\"punto-zona\"/><rect x=\"-44\" y=\"-16\" width=\"88\" height=\"32\" rx=\"4\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"6\" text-anchor=\"middle\">Escobas</text></g><text class=\"il-texto il-texto-peq\" x=\"80\" y=\"526\" font-style=\"italic\">Gran Hotel Atlántida · tercera planta · estado actual (reforma de 1925)</text><rect width=\"960\" height=\"640\" filter=\"url(#a8-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"944\" height=\"624\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"934\" height=\"614\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "jabon": "<svg viewBox=\"0 0 900 700\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pastilla de jabón con la huella de una llave y cinco llaves del hotel\"><defs><filter id=\"b8-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"b8-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"b8-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><linearGradient id=\"b8-jabon\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"1\" class=\"ilst-flor\"/></linearGradient><pattern id=\"b8-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#b8-jabon)\"/><image href=\"assets/img/texturas/jabon.jpg\" x=\"-0.0556\" y=\"-0.0556\" width=\"1.1111\" height=\"1.1111\" preserveAspectRatio=\"none\"/></pattern></defs><rect width=\"900\" height=\"700\" class=\"ilf-madera\"/><g transform=\"translate(450 140)\"><rect x=\"-170\" y=\"-80\" width=\"340\" height=\"160\" rx=\"40\" fill=\"url(#b8-foto)\" class=\"ils-tinta-suave\" stroke-width=\"2\"/><g transform=\"translate(110 10) scale(-1 1)\" opacity=\"0.75\"><g transform=\"translate(0 0)\"><circle cx=\"-34\" cy=\"-9\" r=\"26\" class=\"ilf-piedra-sombra ils-tinta\" stroke-width=\"1.5\"/><circle cx=\"-40\" cy=\"-9\" r=\"8\" class=\"ilf-madera\"/><path d=\"M0 0 L28.571428571428573 0 L40 25 L57.14285714285714 25 L62.85714285714287 0 L68.57142857142857 10 L85.71428571428571 10 L91.42857142857144 0 L97.14285714285714 20 L114.28571428571428 20 L120.00000000000001 0 L125.71428571428574 5 L142.8571428571429 5 L148.57142857142858 0 L154.2857142857143 15 L171.42857142857144 15 L177.14285714285717 0 L200 0 L200 -18 L0 -18 Z\" class=\"ilf-piedra-sombra ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto-foto\" x=\"40\" y=\"46\" text-anchor=\"middle\" font-size=\"13\"></text></g></g><text class=\"il-texto-foto\" y=\"108\" text-anchor=\"middle\" font-size=\"12\">Jabón hallado en el lavabo de la lencería</text></g><g class=\"punto\" data-punto=\"k1\" transform=\"translate(140 360)\" tabindex=\"0\" role=\"button\" aria-label=\"Llave: Habitación 307\"><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" rx=\"6\" class=\"ilf-madera-clara\" opacity=\"0.6\"/><g transform=\"translate(-10 0)\"><circle cx=\"-34\" cy=\"-9\" r=\"26\" class=\"ilf-bronce ils-tinta\" stroke-width=\"1.5\"/><circle cx=\"-40\" cy=\"-9\" r=\"8\" class=\"ilf-madera\"/><path d=\"M0 0 L21.428571428571427 0 L29.999999999999996 15 L42.857142857142854 15 L47.142857142857146 0 L51.42857142857142 5 L64.28571428571428 5 L68.57142857142857 0 L72.85714285714285 20 L85.71428571428571 20 L90 0 L94.28571428571429 10 L107.14285714285715 10 L111.42857142857143 0 L115.71428571428571 25 L128.57142857142856 25 L132.85714285714286 0 L150 0 L150 -18 L0 -18 Z\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto-foto\" x=\"40\" y=\"46\" text-anchor=\"middle\" font-size=\"13\">Habitación 307</text></g><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"k2\" transform=\"translate(420 360)\" tabindex=\"0\" role=\"button\" aria-label=\"Llave: Caja de caudales nº 12\"><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" rx=\"6\" class=\"ilf-madera-clara\" opacity=\"0.6\"/><g transform=\"translate(-10 0)\"><circle cx=\"-34\" cy=\"-9\" r=\"26\" class=\"ilf-bronce ils-tinta\" stroke-width=\"1.5\"/><circle cx=\"-40\" cy=\"-9\" r=\"8\" class=\"ilf-madera\"/><path d=\"M0 0 L21.428571428571427 0 L29.999999999999996 10 L42.857142857142854 10 L47.142857142857146 0 L51.42857142857142 25 L64.28571428571428 25 L68.57142857142857 0 L72.85714285714285 5 L85.71428571428571 5 L90 0 L94.28571428571429 20 L107.14285714285715 20 L111.42857142857143 0 L115.71428571428571 15 L128.57142857142856 15 L132.85714285714286 0 L150 0 L150 -18 L0 -18 Z\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto-foto\" x=\"40\" y=\"46\" text-anchor=\"middle\" font-size=\"13\">Caja de caudales nº 12</text></g><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"k3\" transform=\"translate(700 360)\" tabindex=\"0\" role=\"button\" aria-label=\"Llave: Caja de caudales nº 17\"><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" rx=\"6\" class=\"ilf-madera-clara\" opacity=\"0.6\"/><g transform=\"translate(-10 0)\"><circle cx=\"-34\" cy=\"-9\" r=\"26\" class=\"ilf-bronce ils-tinta\" stroke-width=\"1.5\"/><circle cx=\"-40\" cy=\"-9\" r=\"8\" class=\"ilf-madera\"/><path d=\"M0 0 L21.428571428571427 0 L29.999999999999996 25 L42.857142857142854 25 L47.142857142857146 0 L51.42857142857142 10 L64.28571428571428 10 L68.57142857142857 0 L72.85714285714285 20 L85.71428571428571 20 L90 0 L94.28571428571429 5 L107.14285714285715 5 L111.42857142857143 0 L115.71428571428571 15 L128.57142857142856 15 L132.85714285714286 0 L150 0 L150 -18 L0 -18 Z\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto-foto\" x=\"40\" y=\"46\" text-anchor=\"middle\" font-size=\"13\">Caja de caudales nº 17</text></g><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"k4\" transform=\"translate(280 560)\" tabindex=\"0\" role=\"button\" aria-label=\"Llave: Caja de caudales nº 21\"><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" rx=\"6\" class=\"ilf-madera-clara\" opacity=\"0.6\"/><g transform=\"translate(-10 0)\"><circle cx=\"-34\" cy=\"-9\" r=\"26\" class=\"ilf-bronce ils-tinta\" stroke-width=\"1.5\"/><circle cx=\"-40\" cy=\"-9\" r=\"8\" class=\"ilf-madera\"/><path d=\"M0 0 L21.428571428571427 0 L29.999999999999996 15 L42.857142857142854 15 L47.142857142857146 0 L51.42857142857142 20 L64.28571428571428 20 L68.57142857142857 0 L72.85714285714285 5 L85.71428571428571 5 L90 0 L94.28571428571429 25 L107.14285714285715 25 L111.42857142857143 0 L115.71428571428571 10 L128.57142857142856 10 L132.85714285714286 0 L150 0 L150 -18 L0 -18 Z\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto-foto\" x=\"40\" y=\"46\" text-anchor=\"middle\" font-size=\"13\">Caja de caudales nº 21</text></g><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"k5\" transform=\"translate(560 560)\" tabindex=\"0\" role=\"button\" aria-label=\"Llave: Montacargas\"><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" rx=\"6\" class=\"ilf-madera-clara\" opacity=\"0.6\"/><g transform=\"translate(-10 0)\"><circle cx=\"-34\" cy=\"-9\" r=\"26\" class=\"ilf-bronce ils-tinta\" stroke-width=\"1.5\"/><circle cx=\"-40\" cy=\"-9\" r=\"8\" class=\"ilf-madera\"/><path d=\"M0 0 L21.428571428571427 0 L29.999999999999996 20 L42.857142857142854 20 L47.142857142857146 0 L51.42857142857142 10 L64.28571428571428 10 L68.57142857142857 0 L72.85714285714285 25 L85.71428571428571 25 L90 0 L94.28571428571429 15 L107.14285714285715 15 L111.42857142857143 0 L115.71428571428571 5 L128.57142857142856 5 L132.85714285714286 0 L150 0 L150 -18 L0 -18 Z\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto-foto\" x=\"40\" y=\"46\" text-anchor=\"middle\" font-size=\"13\">Montacargas</text></g><rect x=\"-100\" y=\"-70\" width=\"250\" height=\"130\" class=\"punto-zona\"/></g><g pointer-events=\"none\"><rect width=\"900\" height=\"700\" class=\"ilf-manila\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\"/><rect width=\"900\" height=\"700\" filter=\"url(#b8-grano)\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"900\" height=\"700\" fill=\"url(#b8-vineta)\"/></g></svg>",
    "cuadro-llaves": "<svg viewBox=\"0 0 940 700\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cuadro de llaves de recepción la noche del 13\"><defs><filter id=\"c8-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"c8-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"c8-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><pattern id=\"c8-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" class=\"ilf-madera-clara\"/><image href=\"assets/img/008/madera-llaves.jpg\" x=\"-0.0319\" y=\"-0.0319\" width=\"1.0638\" height=\"1.0638\" preserveAspectRatio=\"none\"/></pattern></defs><rect width=\"940\" height=\"700\" class=\"ilf-madera\"/><text class=\"il-texto-foto\" x=\"40\" y=\"40\">Cuadro de llaves de recepción · noche del sábado 13 de agosto</text><rect x=\"30\" y=\"80\" width=\"880\" height=\"240\" rx=\"6\" class=\"ils-oro-oscuro\" stroke-width=\"3\" fill=\"url(#c8-foto)\"/><text class=\"il-texto-foto\" x=\"46\" y=\"102\" font-size=\"12\">PLANTA PRIMERA</text><text class=\"il-texto-foto\" x=\"70\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">101</text><circle cx=\"70\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"70\" y1=\"142\" x2=\"70\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"66\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"59\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-papel-claro\" x=\"70\" y=\"202\" text-anchor=\"middle\" font-size=\"12\">2</text><text class=\"il-texto-foto\" x=\"136\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">102</text><circle cx=\"136\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"136\" y1=\"142\" x2=\"136\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"132\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"125\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"136\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"202\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">103</text><circle cx=\"202\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"202\" y1=\"142\" x2=\"202\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"198\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"191\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"202\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"268\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">104</text><circle cx=\"268\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"268\" y1=\"142\" x2=\"268\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"264\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"257\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"268\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"334\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">105</text><circle cx=\"334\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"400\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">106</text><circle cx=\"400\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"400\" y1=\"142\" x2=\"400\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"396\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"389\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"400\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"466\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">107</text><circle cx=\"466\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"466\" y1=\"142\" x2=\"466\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"462\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"455\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-papel-claro\" x=\"466\" y=\"202\" text-anchor=\"middle\" font-size=\"12\">1</text><text class=\"il-texto-foto\" x=\"532\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">108</text><circle cx=\"532\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"532\" y1=\"142\" x2=\"532\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"528\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"521\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"532\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"598\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">109</text><circle cx=\"598\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"598\" y1=\"142\" x2=\"598\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"594\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"587\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"598\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"664\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">110</text><circle cx=\"664\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"730\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">111</text><circle cx=\"730\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"730\" y1=\"142\" x2=\"730\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"726\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"719\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"730\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"796\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">112</text><circle cx=\"796\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"796\" y1=\"142\" x2=\"796\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"792\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"785\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"796\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"862\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">113</text><circle cx=\"862\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"862\" y1=\"142\" x2=\"862\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"858\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"851\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"862\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"70\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">114</text><circle cx=\"70\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"70\" y1=\"242\" x2=\"70\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"66\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"59\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"70\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"136\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">115</text><circle cx=\"136\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"202\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">116</text><circle cx=\"202\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"202\" y1=\"242\" x2=\"202\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"198\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"191\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"202\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"268\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">117</text><circle cx=\"268\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"268\" y1=\"242\" x2=\"268\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"264\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"257\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"268\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"334\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">118</text><circle cx=\"334\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"334\" y1=\"242\" x2=\"334\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"330\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"323\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"334\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">119</text><circle cx=\"400\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"400\" y1=\"242\" x2=\"400\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"396\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"389\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"400\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"466\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">120</text><circle cx=\"466\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"532\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">121</text><circle cx=\"532\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"532\" y1=\"242\" x2=\"532\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"528\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"521\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"532\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"598\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">122</text><circle cx=\"598\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"598\" y1=\"242\" x2=\"598\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"594\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"587\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"598\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"664\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">123</text><circle cx=\"664\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"664\" y1=\"242\" x2=\"664\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"660\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"653\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"664\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"730\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">124</text><circle cx=\"730\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"730\" y1=\"242\" x2=\"730\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"726\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"719\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"730\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"796\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">125</text><circle cx=\"796\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"862\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">126</text><circle cx=\"862\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"862\" y1=\"242\" x2=\"862\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"858\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"851\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"862\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><rect x=\"30\" y=\"350\" width=\"880\" height=\"240\" rx=\"6\" class=\"ils-oro-oscuro\" stroke-width=\"3\" fill=\"url(#c8-foto)\"/><text class=\"il-texto-foto\" x=\"46\" y=\"372\" font-size=\"12\">PLANTA SEGUNDA</text><text class=\"il-texto-foto\" x=\"70\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">201</text><circle cx=\"70\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"70\" y1=\"412\" x2=\"70\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"66\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"59\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-papel-claro\" x=\"70\" y=\"472\" text-anchor=\"middle\" font-size=\"12\">4</text><text class=\"il-texto-foto\" x=\"136\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">202</text><circle cx=\"136\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"136\" y1=\"412\" x2=\"136\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"132\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"125\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"136\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"202\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">203</text><circle cx=\"202\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"202\" y1=\"412\" x2=\"202\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"198\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"191\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"202\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"268\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">204</text><circle cx=\"268\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"268\" y1=\"412\" x2=\"268\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"264\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"257\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"268\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"334\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">205</text><circle cx=\"334\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"400\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">206</text><circle cx=\"400\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"400\" y1=\"412\" x2=\"400\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"396\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"389\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"400\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"466\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">207</text><circle cx=\"466\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"466\" y1=\"412\" x2=\"466\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"462\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"455\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"466\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"532\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">208</text><circle cx=\"532\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"532\" y1=\"412\" x2=\"532\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"528\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"521\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"532\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"598\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">209</text><circle cx=\"598\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"598\" y1=\"412\" x2=\"598\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"594\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"587\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"598\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"664\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">210</text><circle cx=\"664\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"730\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">211</text><circle cx=\"730\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"730\" y1=\"412\" x2=\"730\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"726\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"719\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"730\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"796\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">212</text><circle cx=\"796\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"796\" y1=\"412\" x2=\"796\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"792\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"785\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-papel-claro\" x=\"796\" y=\"472\" text-anchor=\"middle\" font-size=\"12\">3</text><text class=\"il-texto-foto\" x=\"862\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">213</text><circle cx=\"862\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"862\" y1=\"412\" x2=\"862\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"858\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"851\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"862\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"70\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">214</text><circle cx=\"70\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"70\" y1=\"512\" x2=\"70\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"66\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"59\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"70\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"136\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">215</text><circle cx=\"136\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"202\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">216</text><circle cx=\"202\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"202\" y1=\"512\" x2=\"202\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"198\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"191\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"202\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"268\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">217</text><circle cx=\"268\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"268\" y1=\"512\" x2=\"268\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"264\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"257\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"268\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"334\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">218</text><circle cx=\"334\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"334\" y1=\"512\" x2=\"334\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"330\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"323\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"334\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"400\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">219</text><circle cx=\"400\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"400\" y1=\"512\" x2=\"400\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"396\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"389\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"400\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"466\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">220</text><circle cx=\"466\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"532\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">221</text><circle cx=\"532\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"532\" y1=\"512\" x2=\"532\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"528\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"521\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"532\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"598\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">222</text><circle cx=\"598\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"598\" y1=\"512\" x2=\"598\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"594\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"587\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"598\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"664\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">223</text><circle cx=\"664\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"664\" y1=\"512\" x2=\"664\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"660\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"653\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"664\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"730\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">224</text><circle cx=\"730\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"730\" y1=\"512\" x2=\"730\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"726\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"719\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"730\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"796\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">225</text><circle cx=\"796\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"862\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">226</text><circle cx=\"862\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"862\" y1=\"512\" x2=\"862\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"858\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"851\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"862\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"40\" y=\"684\" font-size=\"12\">Las llaves que faltan son de huéspedes en su cuarto. Abajo, la fila de servicio.</text><rect x=\"30\" y=\"596\" width=\"880\" height=\"70\" rx=\"6\" class=\"ils-oro-oscuro\" stroke-width=\"3\" fill=\"url(#c8-foto)\"/><text class=\"il-texto-foto\" x=\"46\" y=\"614\" font-size=\"12\">SERVICIO</text><text class=\"il-texto-foto\" x=\"170\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Dispensario</text><circle cx=\"170\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><line x1=\"170\" y1=\"628\" x2=\"170\" y2=\"636\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"166\" y=\"636\" width=\"8\" height=\"24\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><text class=\"il-texto-foto\" x=\"380\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Montacargas</text><circle cx=\"380\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><line x1=\"380\" y1=\"628\" x2=\"380\" y2=\"636\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"376\" y=\"636\" width=\"8\" height=\"24\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><text class=\"il-texto-foto\" x=\"590\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Lencería 3.º</text><circle cx=\"590\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"740\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Salón</text><circle cx=\"740\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><line x1=\"740\" y1=\"628\" x2=\"740\" y2=\"636\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"736\" y=\"636\" width=\"8\" height=\"24\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><text class=\"il-texto-foto\" x=\"860\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Office 3.º</text><circle cx=\"860\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><line x1=\"860\" y1=\"628\" x2=\"860\" y2=\"636\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"856\" y=\"636\" width=\"8\" height=\"24\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><g class=\"punto\" data-punto=\"h101\" transform=\"translate(70 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 101\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h102\" transform=\"translate(136 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 102\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h103\" transform=\"translate(202 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 103\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h104\" transform=\"translate(268 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 104\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h105\" transform=\"translate(334 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 105\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h106\" transform=\"translate(400 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 106\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h107\" transform=\"translate(466 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 107\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h108\" transform=\"translate(532 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 108\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h109\" transform=\"translate(598 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 109\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h110\" transform=\"translate(664 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 110\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h111\" transform=\"translate(730 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 111\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h112\" transform=\"translate(796 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 112\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h113\" transform=\"translate(862 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 113\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h114\" transform=\"translate(70 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 114\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h115\" transform=\"translate(136 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 115\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h116\" transform=\"translate(202 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 116\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h117\" transform=\"translate(268 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 117\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h118\" transform=\"translate(334 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 118\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h119\" transform=\"translate(400 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 119\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h120\" transform=\"translate(466 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 120\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h121\" transform=\"translate(532 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 121\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h122\" transform=\"translate(598 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 122\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h123\" transform=\"translate(664 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 123\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h124\" transform=\"translate(730 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 124\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h125\" transform=\"translate(796 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 125\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h126\" transform=\"translate(862 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 126\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h201\" transform=\"translate(70 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 201\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h202\" transform=\"translate(136 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 202\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h203\" transform=\"translate(202 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 203\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h204\" transform=\"translate(268 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 204\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h205\" transform=\"translate(334 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 205\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h206\" transform=\"translate(400 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 206\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h207\" transform=\"translate(466 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 207\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h208\" transform=\"translate(532 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 208\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h209\" transform=\"translate(598 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 209\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h210\" transform=\"translate(664 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 210\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h211\" transform=\"translate(730 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 211\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h212\" transform=\"translate(796 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 212\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h213\" transform=\"translate(862 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 213\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h214\" transform=\"translate(70 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 214\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h215\" transform=\"translate(136 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 215\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h216\" transform=\"translate(202 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 216\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h217\" transform=\"translate(268 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 217\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h218\" transform=\"translate(334 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 218\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h219\" transform=\"translate(400 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 219\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h220\" transform=\"translate(466 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 220\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h221\" transform=\"translate(532 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 221\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h222\" transform=\"translate(598 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 222\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h223\" transform=\"translate(664 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 223\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h224\" transform=\"translate(730 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 224\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h225\" transform=\"translate(796 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 225\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h226\" transform=\"translate(862 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 226\"><circle r=\"30\" class=\"punto-zona\"/></g><g pointer-events=\"none\"><rect width=\"940\" height=\"700\" class=\"ilf-manila\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\"/><rect width=\"940\" height=\"700\" filter=\"url(#c8-grano)\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"940\" height=\"700\" fill=\"url(#c8-vineta)\"/></g></svg>",
    "cuadro-llaves-tarde": "<svg viewBox=\"0 0 940 700\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cuadro de llaves de recepción a las 00:10 del 14\"><defs><filter id=\"c8b-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"c8b-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"c8b-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><pattern id=\"c8b-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" class=\"ilf-madera-clara\"/><image href=\"assets/img/008/madera-llaves.jpg\" x=\"-0.0319\" y=\"-0.0319\" width=\"1.0638\" height=\"1.0638\" preserveAspectRatio=\"none\"/></pattern></defs><rect width=\"940\" height=\"700\" class=\"ilf-madera\"/><text class=\"il-texto-foto\" x=\"40\" y=\"40\">Cuadro de llaves de recepción · noche del sábado 13 de agosto</text><rect x=\"30\" y=\"80\" width=\"880\" height=\"240\" rx=\"6\" class=\"ils-oro-oscuro\" stroke-width=\"3\" fill=\"url(#c8b-foto)\"/><text class=\"il-texto-foto\" x=\"46\" y=\"102\" font-size=\"12\">PLANTA PRIMERA</text><text class=\"il-texto-foto\" x=\"70\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">101</text><circle cx=\"70\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"70\" y1=\"142\" x2=\"70\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"66\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"59\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"70\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"136\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">102</text><circle cx=\"136\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"136\" y1=\"142\" x2=\"136\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"132\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"125\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"136\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"202\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">103</text><circle cx=\"202\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"202\" y1=\"142\" x2=\"202\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"198\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"191\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"202\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"268\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">104</text><circle cx=\"268\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"268\" y1=\"142\" x2=\"268\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"264\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"257\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"268\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"334\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">105</text><circle cx=\"334\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"400\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">106</text><circle cx=\"400\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"400\" y1=\"142\" x2=\"400\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"396\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"389\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"400\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"466\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">107</text><circle cx=\"466\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"466\" y1=\"142\" x2=\"466\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"462\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"455\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"466\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"532\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">108</text><circle cx=\"532\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"532\" y1=\"142\" x2=\"532\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"528\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"521\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"532\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"598\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">109</text><circle cx=\"598\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"598\" y1=\"142\" x2=\"598\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"594\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"587\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"598\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"664\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">110</text><circle cx=\"664\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"730\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">111</text><circle cx=\"730\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"730\" y1=\"142\" x2=\"730\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"726\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"719\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"730\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"796\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">112</text><circle cx=\"796\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"796\" y1=\"142\" x2=\"796\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"792\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"785\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"796\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"862\" y=\"130\" text-anchor=\"middle\" font-size=\"12\">113</text><circle cx=\"862\" cy=\"140\" r=\"3\" class=\"ilf-oro\"/><line x1=\"862\" y1=\"142\" x2=\"862\" y2=\"156\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"858\" y=\"156\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"851\" y=\"182\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"862\" y=\"202\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"70\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">114</text><circle cx=\"70\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"70\" y1=\"242\" x2=\"70\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"66\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"59\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"70\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"136\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">115</text><circle cx=\"136\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"202\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">116</text><circle cx=\"202\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"202\" y1=\"242\" x2=\"202\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"198\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"191\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"202\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"268\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">117</text><circle cx=\"268\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"268\" y1=\"242\" x2=\"268\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"264\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"257\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"268\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"334\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">118</text><circle cx=\"334\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"334\" y1=\"242\" x2=\"334\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"330\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"323\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"334\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">119</text><circle cx=\"400\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"400\" y1=\"242\" x2=\"400\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"396\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"389\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"400\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"466\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">120</text><circle cx=\"466\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"532\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">121</text><circle cx=\"532\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"532\" y1=\"242\" x2=\"532\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"528\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"521\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"532\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"598\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">122</text><circle cx=\"598\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"598\" y1=\"242\" x2=\"598\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"594\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"587\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"598\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"664\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">123</text><circle cx=\"664\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"664\" y1=\"242\" x2=\"664\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"660\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"653\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"664\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"730\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">124</text><circle cx=\"730\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"730\" y1=\"242\" x2=\"730\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"726\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"719\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"730\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"796\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">125</text><circle cx=\"796\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"862\" y=\"230\" text-anchor=\"middle\" font-size=\"12\">126</text><circle cx=\"862\" cy=\"240\" r=\"3\" class=\"ilf-oro\"/><line x1=\"862\" y1=\"242\" x2=\"862\" y2=\"256\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"858\" y=\"256\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"851\" y=\"282\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"862\" y=\"302\" text-anchor=\"middle\" font-size=\"12\"></text><rect x=\"30\" y=\"350\" width=\"880\" height=\"240\" rx=\"6\" class=\"ils-oro-oscuro\" stroke-width=\"3\" fill=\"url(#c8b-foto)\"/><text class=\"il-texto-foto\" x=\"46\" y=\"372\" font-size=\"12\">PLANTA SEGUNDA</text><text class=\"il-texto-foto\" x=\"70\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">201</text><circle cx=\"70\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"70\" y1=\"412\" x2=\"70\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"66\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"59\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"70\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"136\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">202</text><circle cx=\"136\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"136\" y1=\"412\" x2=\"136\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"132\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"125\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"136\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"202\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">203</text><circle cx=\"202\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"202\" y1=\"412\" x2=\"202\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"198\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"191\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"202\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"268\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">204</text><circle cx=\"268\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"268\" y1=\"412\" x2=\"268\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"264\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"257\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"268\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"334\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">205</text><circle cx=\"334\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"400\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">206</text><circle cx=\"400\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"400\" y1=\"412\" x2=\"400\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"396\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"389\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"400\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"466\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">207</text><circle cx=\"466\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"466\" y1=\"412\" x2=\"466\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"462\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"455\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"466\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"532\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">208</text><circle cx=\"532\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"532\" y1=\"412\" x2=\"532\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"528\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"521\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"532\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"598\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">209</text><circle cx=\"598\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"598\" y1=\"412\" x2=\"598\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"594\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"587\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"598\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"664\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">210</text><circle cx=\"664\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"730\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">211</text><circle cx=\"730\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"730\" y1=\"412\" x2=\"730\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"726\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"719\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"730\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"796\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">212</text><circle cx=\"796\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"796\" y1=\"412\" x2=\"796\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"792\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"785\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"796\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"862\" y=\"400\" text-anchor=\"middle\" font-size=\"12\">213</text><circle cx=\"862\" cy=\"410\" r=\"3\" class=\"ilf-oro\"/><line x1=\"862\" y1=\"412\" x2=\"862\" y2=\"426\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"858\" y=\"426\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"851\" y=\"452\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"862\" y=\"472\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"70\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">214</text><circle cx=\"70\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"70\" y1=\"512\" x2=\"70\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"66\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"59\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"70\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"136\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">215</text><circle cx=\"136\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"202\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">216</text><circle cx=\"202\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"202\" y1=\"512\" x2=\"202\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"198\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"191\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"202\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"268\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">217</text><circle cx=\"268\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"268\" y1=\"512\" x2=\"268\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"264\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"257\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"268\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"334\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">218</text><circle cx=\"334\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"334\" y1=\"512\" x2=\"334\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"330\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"323\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"334\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"400\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">219</text><circle cx=\"400\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"400\" y1=\"512\" x2=\"400\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"396\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"389\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"400\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"466\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">220</text><circle cx=\"466\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"532\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">221</text><circle cx=\"532\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"532\" y1=\"512\" x2=\"532\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"528\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"521\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"532\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"598\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">222</text><circle cx=\"598\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"598\" y1=\"512\" x2=\"598\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"594\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"587\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"598\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"664\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">223</text><circle cx=\"664\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"664\" y1=\"512\" x2=\"664\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"660\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"653\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"664\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"730\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">224</text><circle cx=\"730\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"730\" y1=\"512\" x2=\"730\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"726\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"719\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"730\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"796\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">225</text><circle cx=\"796\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"862\" y=\"500\" text-anchor=\"middle\" font-size=\"12\">226</text><circle cx=\"862\" cy=\"510\" r=\"3\" class=\"ilf-oro\"/><line x1=\"862\" y1=\"512\" x2=\"862\" y2=\"526\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"858\" y=\"526\" width=\"8\" height=\"26\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><rect x=\"851\" y=\"552\" width=\"22\" height=\"30\" rx=\"4\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto ilf-tinta\" x=\"862\" y=\"572\" text-anchor=\"middle\" font-size=\"12\"></text><text class=\"il-texto-foto\" x=\"40\" y=\"684\" font-size=\"12\">Las llaves que faltan son de huéspedes en su cuarto. Abajo, la fila de servicio.</text><rect x=\"30\" y=\"596\" width=\"880\" height=\"70\" rx=\"6\" class=\"ils-oro-oscuro\" stroke-width=\"3\" fill=\"url(#c8b-foto)\"/><text class=\"il-texto-foto\" x=\"46\" y=\"614\" font-size=\"12\">SERVICIO</text><text class=\"il-texto-foto\" x=\"170\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Dispensario</text><circle cx=\"170\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"380\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Montacargas</text><circle cx=\"380\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><line x1=\"380\" y1=\"628\" x2=\"380\" y2=\"636\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"376\" y=\"636\" width=\"8\" height=\"24\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><text class=\"il-texto-foto\" x=\"590\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Lencería 3.º</text><circle cx=\"590\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><text class=\"il-texto-foto\" x=\"740\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Salón</text><circle cx=\"740\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><line x1=\"740\" y1=\"628\" x2=\"740\" y2=\"636\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"736\" y=\"636\" width=\"8\" height=\"24\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><text class=\"il-texto-foto\" x=\"860\" y=\"616\" text-anchor=\"middle\" font-size=\"12\">Office 3.º</text><circle cx=\"860\" cy=\"626\" r=\"3\" class=\"ilf-oro\"/><line x1=\"860\" y1=\"628\" x2=\"860\" y2=\"636\" class=\"ils-oro-claro\" stroke-width=\"1.4\"/><rect x=\"856\" y=\"636\" width=\"8\" height=\"24\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.6\"/><g class=\"punto\" data-punto=\"h101\" transform=\"translate(70 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 101\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h102\" transform=\"translate(136 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 102\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h103\" transform=\"translate(202 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 103\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h104\" transform=\"translate(268 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 104\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h105\" transform=\"translate(334 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 105\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h106\" transform=\"translate(400 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 106\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h107\" transform=\"translate(466 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 107\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h108\" transform=\"translate(532 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 108\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h109\" transform=\"translate(598 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 109\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h110\" transform=\"translate(664 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 110\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h111\" transform=\"translate(730 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 111\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h112\" transform=\"translate(796 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 112\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h113\" transform=\"translate(862 176)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 113\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h114\" transform=\"translate(70 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 114\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h115\" transform=\"translate(136 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 115\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h116\" transform=\"translate(202 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 116\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h117\" transform=\"translate(268 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 117\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h118\" transform=\"translate(334 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 118\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h119\" transform=\"translate(400 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 119\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h120\" transform=\"translate(466 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 120\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h121\" transform=\"translate(532 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 121\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h122\" transform=\"translate(598 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 122\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h123\" transform=\"translate(664 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 123\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h124\" transform=\"translate(730 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 124\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h125\" transform=\"translate(796 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 125\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h126\" transform=\"translate(862 276)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 126\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h201\" transform=\"translate(70 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 201\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h202\" transform=\"translate(136 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 202\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h203\" transform=\"translate(202 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 203\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h204\" transform=\"translate(268 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 204\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h205\" transform=\"translate(334 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 205\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h206\" transform=\"translate(400 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 206\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h207\" transform=\"translate(466 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 207\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h208\" transform=\"translate(532 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 208\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h209\" transform=\"translate(598 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 209\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h210\" transform=\"translate(664 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 210\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h211\" transform=\"translate(730 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 211\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h212\" transform=\"translate(796 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 212\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h213\" transform=\"translate(862 446)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 213\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h214\" transform=\"translate(70 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 214\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h215\" transform=\"translate(136 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 215\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h216\" transform=\"translate(202 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 216\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h217\" transform=\"translate(268 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 217\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h218\" transform=\"translate(334 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 218\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h219\" transform=\"translate(400 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 219\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h220\" transform=\"translate(466 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 220\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h221\" transform=\"translate(532 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 221\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h222\" transform=\"translate(598 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 222\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h223\" transform=\"translate(664 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 223\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h224\" transform=\"translate(730 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 224\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h225\" transform=\"translate(796 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 225\"><circle r=\"30\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"h226\" transform=\"translate(862 546)\" tabindex=\"0\" role=\"button\" aria-label=\"Gancho 226\"><circle r=\"30\" class=\"punto-zona\"/></g><g pointer-events=\"none\"><rect width=\"940\" height=\"700\" class=\"ilf-manila\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\"/><rect width=\"940\" height=\"700\" filter=\"url(#c8b-grano)\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"940\" height=\"700\" fill=\"url(#c8b-vineta)\"/></g></svg>"
  },
  "sospechosos": [
    {
      "id": "julio",
      "nombre": "Julio Bastarrica Elorza",
      "edad": 33,
      "profesion": "Jefe de recepción de noche",
      "foto": "img-julio",
      "desbloqueadoPor": "p01",
      "biografia": "Entró en el Atlántida como botones en 1913 y ha subido hasta jefe de recepción. Conoce cada llave y cada huésped. Custodia de noche la caja de caudales.",
      "coartada": "Dice que las noches de los sonámbulos no se movió del mostrador de recepción.",
      "motivo": "Treinta pesetas de propina no dan para lo que gasta en el casino.",
      "declaraciones": [
        {
          "texto": "Sonámbulos los hay todos los veranos. Desde que actúa ese italiano, más. Yo, en recepción, solo veo pasar a los que bajan de madrugada."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d1sBA0NHTFdDVgNCW19WCgdEWFZTDAAQEFlSUxJUVUFVUl1VQlJWEgAFRQECDlISXRhUCRhcDQZDCURVXRFZUBNRAwwCFk1bBlwDQlRAUBAWEURWREUBVURbUFZATVMAUlIXVw1YE0EWRFwAFxBWTw==",
          "desbloqueadoPor": "p09"
        }
      ],
      "notaDirector": "dc1:cGcuNiJ0dXdNEiMBXVFXA0IRWFZERQJfEFdCElZdFARFUFhEDVpSXwoKUUlDEVYCB1xQFhhUAQgRAg1CSFRbQlJACwlDUlxeQ1YJAUFfR05CAVgXWwRF895aRVtfWRQCWUNWFAZTE14MFxANFqGeEhZdVQBLEBURVEYQVFbymFBdEgEHCV9NU0NXCEJZURUBAw5XF1MARVMFQ1VTXl1HTxZjVlcNFl9dEERDEAGhmgBGXF4XVVkAC0JGAV8YVFkRXl0MEgJVWEAEUxVCVBBZA0IFWENeAhBRRAUBCxIQWAAWX1JaAVNB8c4FGUlDDlISRklEDExRBgURCgURVF1UR1YSBgNDWlgSAFMMC0FRFRtCLkNbXgpFQwVVUFBTGEEPFl5YWAZTE1cNRFoEAaGED0gYcAkYUQkFXwMHVEodFWFSUQ1GD1lKEqGZAwxWX1sWEAVUVvXeRUlEWl5BElRYBEBSVVVCVxNBFkRTEAIQQw5IGGEAVkMFBlBGElBbWFRDE14DFUNVWFgKRgcRFVRAEAMKQlIXCQQQA1ddUxJcUQ0WAgIUGxZWQQALXgEGEBcNCRhDClpRAAsRAwoRXV0VU1Lx2ApDUlxeQ3UUA1sQeA0QAlNYFxUEQgUWUlNAX1UTWlYXWANFE1EWCEAEEEwXJxT7nAoYSUQHXhQQ8pFCDhFAV0IUClhdV0NBD0JZVRUHDBdT9IYECxAOQ19GXUsUBFoTW10ARFwSBwEQCQJCVAAMWREcGFwFRF8JEFAYVFsRWVcQDwRZV0gCHA==",
      "preguntas": [
        {
          "id": "j-mostrador",
          "texto": "¿Se movió del mostrador alguna de esas noches?",
          "respuesta": "dc1:ZlxCDAZQXBIHV0YMWlNdB0IKWRdEAEVdEVNHVwgYUQ0WXlhHFkRSVgwWEAAQQkQURktYEVFfSkRiD0RQW1BGXh8SBgkQFklTEF0VQl1RRhYDRFpWFwYEWgUaEUNHXRQERUf0lUJSVkYRp5EWT0JOQRBNVAlMUUpEdApEQl1DUF9cEg8DQ0BcEhNdFEJZURUBEA1FQ1YJAEIFFlJTVlkUF1NJF0UXUxNCAhdRXkMSRQQB+4sLTFUKCFRGBRH7mFkf"
        },
        {
          "id": "j-copa",
          "texto": "¿Quién sirve la última copa a los huéspedes que se retiran tarde?",
          "respuesta": "dc1:f1NCBAJES1NDVgMOFUZQERanm1VCCQoQAUURX/GVVUFVRlZaBlkTVw9EUgQRQlQIA0pDBBQQBURdB0REVlAbEWZcQgUM9YhTAB5GF1tRFRYLCFcbFwkKEBVDVBJCUVAAWB0XcRFZQBIAEVEREQ0XBBRZX0VcVUQQWAoFHRhBWkMTUQsDEUJWHEN1AwxBVRUWEAVYRkIMCVFIFlVXElRVEhZCQlFCWFwSBwVeRRcQVgMHUl5L"
        },
        {
          "id": "j-dispensario",
          "texto": "¿Guarda usted la llave del dispensario?",
          "respuesta": "dc1:dl5CAgxVTV0REgoDFVNABw4DVxdSC0VVCBZSR1NcRg4WUEJVDFJcEhABEBMCThcCCVVeRUxfAAsRAwgRVURbVVwSARMGWl5TQ0YJBloeFTsNRFhYFwIQURZSXhJcWVAAFkJCUUJYXBIQAVFFDqGaDkgYYgwYUQgDRA8BXxhdVBFQXQUDQ0VcQKCTRgZQEFGhzwUaF1QQBF4AWRFXXhhCBEVH9JkAQ19dQwFDRRYMFwwDSlIEXF9EHREIBVVRVBVcWkADSA=="
        },
        {
          "id": "j-caja",
          "texto": "¿Se abre la caja de caudales de noche?",
          "respuesta": "dc1:fUcMBQIYGWAGVQoDWFVbFg1EUlIXCQQQF1lSW1dcVQUME1tVQlVSWAJEQwBDA1UTAxhVABheEQFHA0RQGF9AVEVXTkYAWVcSBl5GCkDznBESAVIXUwAJUQpCVBJLGFIIRF5WGkJyVhINC1MNBkJODkZUUEVbRRcQXgINXhQRRERWEgwJQ1NKEg9dRg9cQ1gNQhVDUhcEB0INRF1THBhkE1NUQloWU10SAggQAQoQUgISV0NL"
        },
        {
          "id": "j-paco",
          "texto": "¿Qué opina del botones?",
          "respuesta": "dc1:cUcHCENVUVsAXUpCWFFZQhIFUVZTCkkQCVdVQFcYUQ9QVkVZAxgTfgZEVAoaQlsORklEABhAEQFVCV4RTERHX1xBQgIGFlddAFoDThVBQAdCF1MXRwQCUQoWXFdYV0ZNFkoXVQ5R8IgNREIAAANTDkgYfQoYVAFEXQkXEUteW/KSXwATD1lKEg9XRgpUEFYDoclSWBcAC1MNW1AJElZbQVNAF1cXWkNTQxdFHAJM"
        },
        {
          "id": "j-morfeo",
          "texto": "¿Cree que el hipnotizador tiene algo que ver?",
          "respuesta": "dc1:fV1CFQxPGUMWW6XLWxBFAxAFFlNSBgxCCFkfEmJdRg4WUEJVFkRcEhALXqbCD1UUCldCRV1eRBFfRgxeTFRZEUJHB0YNQ1dRAhISF0NfFQwLClFCWQpJEAFaEV9bS1kOFkVSRgNYXBISEVVFDw5SBgcYRAsYWAsJUxQBEUlEUBFXRwcUDlMZU0NeB0JSVVsWB0RGWEVFAVkKU0Nd0LiSQX5SUFUMFkZBFwFUABBCWwAVGFIQXV4QBUJIRGhXEVteE1MBExBZGVNDXAcGXFUb"
        },
        {
          "id": "j-fichas",
          "texto": "¿Qué eran las fichas rojas del cuadro de llaves?",
          "respuesta": "dc1:8Y0kDwBeWEFDQAkIVEMKQiYBFltWRQlREldfVldK98xXHxdHF0ZcXAQLCkUOA0UCB1YRCVkQFgtBB0RATVQVWVJLQhcWUxlQAlgHEBsQeQMRRFJSXQRFXAUWVl1QXUYPV11DVUJPE14CFxAUFgtDAEZdXUVaXxALXwMXHxh0WxFGXEIFFlddQAwSAgcVXFkDFAFFF1kKRUANWEVTXBhaAFJSGxQWX1ZcBgoQFwIY9NIIAxEJVxAADUOlzR8=",
          "desbloqueadoPor": "p07"
        },
        {
          "id": "j-casino",
          "texto": "¿Es cierto que juega en el casino?",
          "respuesta": "dc1:dkFCBQpTS0YMEhcXUBBQDBYWWRdSC0VVCBZSU0FRWg4aE0ZBBxZdXUMBQ0UPDRcMD0tcChYQNwtIRg5UXlQVVVYSEAMAU0lRCvHVDBVUUEIXChZQRQQLEAxZRVdeAhQJV0oXRRdTE1YGDlEXEAcXFwNKEQFXXgABEQMXRfuQFV1SEgEKClNXRgZeB0wVfFpCExFTF0cMAEIAWR0SXlcUEV9WRVANFkpdTUR+CkMGUgMJGF8EXFFEBREIBVVRVBs="
        },
        {
          "id": "j-309",
          "texto": "¿Qué sabe de la antigua 309?",
          "respuesta": "dc1:YkcHRg9XGUMWWxIDR19bQgcKFlJbRRNVDVhFW1FRWgJZE0dbEEdGV0MKX0UPAxcQE11DppVRRApQAg1UAhFd8olfBwICGhlCBkMTB/aBVE5CFFNQVgEEEAVaEV9dVkAAVVJFUwNFHRImCBAVBhBEDghZXUVOWQEOXkYIUBhCXFZGV0IKD1dUUw1WCUJUQ/bPTERvWBcAC0QW9ZgSVl0UA1lHWFoHRRNXDURVCUMMQgQQXREcGFwFRFIJCl5b8pgRUF0MRgtD+psQQgMGUEMbQjcKVxdfBAdZEFdSW/GLWkFVXFpbQlVGUw8VRQwGEBcOEkpQSw=="
        },
        {
          "id": "j-correo",
          "texto": "¿Le ha llegado algo fuera de lo normal por el correo interno?",
          "respuesta": "dc1:Y1MQEgZFGVYGXkYGXEJQARYLRBdORRRFAVxQQRJcUUFaUhdTDVRWQA0FXhECTBcvB1xQRUlFAURfCURHXV9SUBNWB0YPVxlRAkEHTBXyijINFhZGQqbMEA1UUBJTGFgNU1RWRg9TE10XFlFFAA1EAEZZEQj7nVs="
        }
      ]
    },
    {
      "id": "paco",
      "nombre": "Francisco «Paco» Arana Goñi",
      "edad": 19,
      "profesion": "Botones de noche",
      "foto": "img-paco",
      "desbloqueadoPor": "p01",
      "biografia": "Hijo de una lavandera del hotel. Botones desde los catorce. Es quien acompañó a los cuatro «sonámbulos» a su habitación.",
      "coartada": "Dice que encontró a los huéspedes paseando por el pasillo al amanecer, como dormidos.",
      "motivo": "Gana treinta pesetas al mes y su madre está enferma.",
      "declaraciones": [
        {
          "texto": "Yo los encontré, nada más. Se les ve en la cara: andan con los ojos abiertos y no ven. El señor Julio me dijo que no asustara a nadie."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d1sBA0NHTFdDXgkRFVVbAQ0KQkX01kVABUVUU1xcW1oWVlsUD1ldRgIHURcEA0RBDlFLChhGDQVbAxcRXFQVXPCTEUYGRVhBQ1wJAV1VRkw=",
          "desbloqueadoPor": "p09"
        }
      ],
      "notaDirector": "dc1:cPHRCxNaUFEGHEYxQFL2zwNEVxdbChYQDEPym0FIUQVTQBdQDUReWwcLQ0UGDBcEChhcClZEBQdQFANQSxFMEV9dEUYBV1NTAVNGA1kQVA8DClNUUhdLEC5DXVtdGFgEFkNFWw9TR1ug1xAUFgtZCANWRQRLEBQBQgMQUEsfFXRAURAPAVMZU0N4Ew5cXxUHDERcUkUMAl8KTFAeEl1YQVxGUlMNFldXQxdFRQoMUQAIW1gEFBAUBUMHREBNVBVfUlYLA0NTV0YKVwgGVBBGFxFEWFhDBBYeRHpdXUBZFARYE1RBA1hHXUMIVUUGDEQEpYlQCxhcBURfCRBQAxFWXl1UCwMQVxlGDFYJTA==",
      "preguntas": [
        {
          "id": "p-encontrar",
          "texto": "¿Dónde encontró exactamente a cada huésped?",
          "respuesta": "dc1:dlxCAw8WSVMQWwoOWhBRBw5EQlJFBgBCCxoRUVdKVwAWV1JYQlBcXAcLHEUPDURBBU1QEUpfSkRwCABQVlVaEVdXERYCVVBdTxIFDVhfFRMXDVNZFwcQQwdXEVdeGFYA9YJYGkJ6XEFDB18CoM8XBQNUEQdKUR4LER9EXVdCFVNSWKHPQ0ZWQENeB0JQQ1YDDgFEVhcVF1kKVVhCU1QYQUZSRVVCWFwSAhdFFhcDRQ0JSxEGV15EAV1GBUJbVFtCXEBM"
        },
        {
          "id": "p-equipajes",
          "texto": "¿Qué equipajes sube usted a las tres de la mañana?",
          "respuesta": "dc1:f10RRgdTGV4MQUYTQFUVDg4BUVZZRQBeRFNdEvGCWBVfXlgUFkRWXE9EVQlDBlJBK1lVF1FUSERAEwERXV9BQ1ISA0YPV0oSB10VQkwQRQsBCxgXbkUHUaeMXVdBGEUUUxNfVRsWQkcGRFIECQNFQQdUERb7gxAFXwlEQVlDVBFWXkIWEV9UVxESEhBQXhtCMQ1TWkcXABAMV0gSU1RTDhgTe1tCV0NHDRBRRQYOFxID+4AKShAuEV0PCxFdXxVUXxIODwFEVhw=",
          "desbloqueadoPor": "p07"
        },
        {
          "id": "p-montacargas",
          "texto": "¿Usa el montacargas de noche?",
          "respuesta": "dc1:Y1MQB0NaWBIRXRYDFUNAAQsFGhdCCwQQElNLHhJZFARFXBdQBxZfUxBEVAoABxlBIl1CFU3zzRcRCAsdGEBAVBNaAwUGFktHClYJQkwQWQ0RRFJSW0UEXAUWX11ATFFBRVYXRRdTWVMNShAxCgdZBEZbUAFdXgUXHUamjktQV1QMEjETBlhYEgBdCw0VRVtCAAVEVFhL"
        },
        {
          "id": "p-jerigonza",
          "texto": "¿Con quién habla usted en jerigonza?",
          "respuesta": "dc1:cF0MRg1XXVsGHEYnRhBWDREFFlNSRQlRRFNCUUddWAAaE1NRQlVGUw0AX0UGEFZBFl1AEF3z1QsKRglUGF1UEVZcEQOgh/qBQ18PQlhRURAHREZWRQRFQRFTEV5TSxQMWV1dVREWXV1DCl8WQwdZFQNWVQxdQgUKH0YlWVdDVBFfU0IDEFVLWwFdRgMVRlABBxcWR1YXBBAJ9ZweEkhVE1cTVlcNRFdTEQlVRQcHFw0HSxEGV0MFFx9GKlBcWFARXvHDFUNaWBIQUwQHGw==",
          "desbloqueadoPor": "p09"
        },
        {
          "id": "p-madre",
          "texto": "¿Cómo está su madre?",
          "respuesta": "dc1:flMORgdTVRITVwUKWh4VJw5EUlhUEQpCRH9TU0BfQRNTXRdYAxZFV0MDQgQXC0RNRklEABhVF0RTEwFfVx0VSBNeAxVDW1xWClEPDFRDFQ4DFxZHVgIKEB1ZHxJmSlEIWEdWFBJTQFcXBUNFDQ0XBQdWH0V9XEQXVKXVXkoRf0RfWw1GB19aV0NDEwcVVUYWB0RbUkRFCFVERVBeVkr3wBZGWRQHTkdAAkoQIQoNREEKVxEKUVcFSg=="
        },
        {
          "id": "p-julio",
          "texto": "¿Qué le manda hacer el señor Julio?",
          "respuesta": "dc1:f11CAgYWSlsGXxYQUAoVBxMRX0dWDwBDSBZDV1FZUA5FHxdYDlNFUxFEXARDEFgRBxQRC1cQBRdEFRBQShFUEV1TBg8GGBlrQ1EHDllRRw8HSBZGQgBFRQoWU11GV1oERRNGQQcWW1MBCFFFDQ0XDQpdVgQYUUQHXggXVEpbUB8TfwdGF0RYRgISBAtQXhtCLwFcWEVFFEUBFlReElxdE1NQQ1sQGA=="
        },
        {
          "id": "p-morfeo",
          "texto": "¿Ha visto el espectáculo del Gran Morfeo?",
          "respuesta": "dc1:d1cRAgYWVVNDQhMHR0RUTkIAWUQXCwpTDFNCHBJ8VUFbWlJQDQwTXgJEVwANFlJBFV0RAU1VFglURgBUGEdQQ1dTBkYaFvqbDxIKDUYQXQMBARZUVgsRURYYEWJXSltBWkZSUw0WX10QRFQAEBJeBBRMUEVbXwpERAgFEUhQWVxSVgNGGhZKV0NApc9QXhtCLgtFF1kQAEMQRF5BElZbQUVWF0YH9Z5TDUo="
        },
        {
          "id": "p-timbre",
          "texto": "¿Suenan timbres de noche en la tercera planta?",
          "respuesta": "dc1:dl5CCQVQUFEGEhALUFpaQhYNU1lSRRBeRFVEU1ZKW0FSVhdAC1tRQAYXEAEGQlQUB1ZVChhRBhZYpdcRXV0VWVxGBwpNFngSFVcFB0YQRgdCAVhUXgALVAEWRFxdGEcOWlwbFAdaE1YGCBADDAxTDkoYSEVWX0QMUB9EX1lVXFQdEiYJoIdYEiJWAw5UEFELAQEWRkIARVUXFl1TElBBDFNXVlBMFmpdQwpfRQYMQxMJGFAN+51EAFRGCl5bWVARQFtCFhZTXV1N",
          "desbloqueadoPor": "p07"
        },
        {
          "id": "p-sabanas",
          "texto": "¿Quién pidió sábanas limpias para la 309?",
          "respuesta": "dc1:dkENRg9ZGVMTRwgWVBBRDaHVVxd2AQBcBRgRa10YRw5aXBdHF1RcEg8LEBQWBxcMAxhVBFYeRDdYRhReVlQV85hABwUGRlpboIEIoI4cFREHFvWaVkUAXERFVPGDV0ZBfEZbXQ0WQ1MRBdLlxUJHABRZEQlZEBcNVBUQUBYRcURWQA8DQ1dR8c4SB0JDVVYHEUgWUllFCVEXFl9dUVBREhZfVkYFV0AcQypfRRAHFw0JGFUMX1EKRFAKRFVRQ1BSR10QSA==",
          "desbloqueadoPor": "p03"
        },
        {
          "id": "p-llaves",
          "texto": "¿Tiene usted llave de la lencería?",
          "respuesta": "dc1:fV1MRi9XGV4GXAUHR/OYA0IBRRdTAEVUC/WAUxJ5UARaUhdNQlJWEg0FVAwGQlqix0sfRXBRHURECAURW15FWFISBwhDU1USAEcHBkdfFQYHRERSVAAVUw31glweGEQARFIXXQxVVlwHDV8WT0JSD0ZUUEVeWQgFEQIBEVlTVFtcHEI/DBZXXUNeB0JdVRUWDQdXU1hFC0UKVVAc"
        }
      ]
    },
    {
      "id": "adela",
      "nombre": "Adela Urquiza Lasa",
      "edad": 46,
      "profesion": "Gobernanta del hotel",
      "foto": "img-adela",
      "desbloqueadoPor": "p01",
      "biografia": "Gobernanta desde 1920. Lleva las llaves de todos los oficios y el libro de la lencería, donde lo apunta todo.",
      "coartada": "Dice que las noches de los sonámbulos hizo sus rondas, como siempre.",
      "motivo": "El director quiere sustituirla por una gobernanta francesa.",
      "declaraciones": [
        {
          "texto": "La lencería es mía y la llevo como un reloj. Si alguien deshace una cama allí, lo sé al día siguiente, y lo apunto."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d1sBA0NHTFdDXglCVEBADBYFFkNYAQocREZUQF0YWhRYUFYUEkRWVRYKRKbQQkcOFBhAEPuZRAxQBKecWRFERFYSAQcOVFBTERIVoZRSVAwDFxZSWUUQXgUWWVNQUUAAVVr0hwwWQkcGRF4KQwdPCBVMVEs=",
          "desbloqueadoPor": "p03"
        }
      ],
      "notaDirector": "dc1:elwNBQZYTVdNEicSQF5BAwAFFvWcVlUJpo0RV1wYUQ0WX15WEFkTVgZEXARDDlIPBV1DppVRRBReFBVEXRFUQvCfQgoPV1RTQ1cKQkVVRxENCldbFwQLRA1RRF0SWVhBVUZWRhZZHxIaREAADRFWAwcYQBBdEC4RXQ8LEVxeR1zwnwNGAlpV8c4SCgMVQ1wHERBXF1ILRVwFRRFcXVtcBEUTW1UQUVJBTUR+CkMTQggVVxEBXVwFEFAUCFQWEXFUEwJRXFMGGVNDAlVYBgAVCgMHUxdbBEVCC1hVUxJcUUFaUhdEEF9eVxEFEBUPA1kVBxhSClYQCAURAwpXXUNYVEFTQgIGFlddAFoDTBVjUBQHFlcbFwoXVxFaXV1BWRhBXlxZURFCUhw=",
      "preguntas": [
        {
          "id": "a-309",
          "texto": "¿Por qué apunta «309» en su libro?",
          "respuesta": "dc1:Y10QFxZTGVMQ8ctCRlUVDg4FW1YXABZVRFVEU0BMW0FGUkVVQlpcQUMVRQBDB0QVpZlTBFVfF0RQFxHylRFUX0dXEUYHUxleAhIUB1NfRw8DShZuWEUAQgUWUlNfWUYERFIXUAdaE0YGFlMAEQ0XBAoYQRdRXQEWERABQ1lfWh0TVwxGBloZVgxRA0wVZVsDQghaVloERVFEWlBBEltbEldAF0QNRBNBFkReCg4ARQRKGFAQVkERAREKBUIYQVxfR1cMSA=="
        },
        {
          "id": "a-sabanas",
          "texto": "¿Quién le pidió las sábanas del 13?",
          "respuesta": "dc1:YVcBAxNVUPHQXEpCRV9HQgcIFlteBxdfRFJUEldWVwBEVFhHWBZWXkMXVabSDUVBJFlCEVlCFg1SB0oRdl4VVEASDgdDRktbDlcUAxVGUBhYRFNZFwkEQ0RYXlFaXUdBWlJFUwNFE0EWBlVFAkJTDhRVWBcYRQpEQwcQXhhQFVRAV0IFFldLRgwSH0JMXxUBAwlUXlhFCVEXFkLxk1pVD1dAF1UOFlfxzgUQFgoFQggDVkUAFhA1EVilzV8YVUBUQV8HRgf1ilwHV0YMWhBQEUIFRUJZEQoQCfWcXR4YWQhTXUNGA0UTXwZEXApDA0cUCExUCxY=",
          "desbloqueadoPor": "p03"
        },
        {
          "id": "a-fichas",
          "texto": "¿Usa la lavandería fichas rojas?",
          "respuesta": "dc1:f1NCCgJAWFwHVxShmFEVFxEFFlJDDBRFAUJQQRJcUUFCVltVQlVcQQoAURZDAVgPRl1dRVbz3glUFAsRWl5HVVJWDUhDcFBRC1MVQkdfXwMRRFJSFwgEVAFEUBJRV1pBWPCNWQdEXBITDV4RAgZYQQhXERZXXkQAVApEWVdFUF0dEjEJDRZdV0NRBxFcXlpOQhdfF0YQDFUWUxFfWxhbEV9dXvfRWAkSCwEQEwoRQw5GWV0CTV4FRFQIRFRUEVdeX0ELCg9ZGVYGEgcOUkVbA0IHXlZGEABEBRoRU14YVwRGWltYA0RfU00=",
          "desbloqueadoPor": "p07"
        },
        {
          "id": "a-ronda",
          "texto": "¿Qué hace entre las tres y las tres y media?",
          "respuesta": "dc1:f1NCFAxYXVNDVgNCWVEVEhANW1JFBEVACFdfRlMYVw5YE1tVQlNdVAYWXQARAxcFAxhfCltYAUgRAgFCXFQVVF8SEhQKW1xAQ1alz1QQUQdCEFNaRwoXUQBXHxJ0UUYMV15YR0JaUkFDAF8WTUJkCEZJRAxdQgFEQgcGVEoRRETwm0IWAkVYEgISAxFUEF0NEAUWUllFAFxEQlRAUV1GDhoTR0YHUUZcFwEQBEMTQggDVhEAS0SnxREHCF37nBkRQkcHRg1ZGUEMS0YbWh4="
        },
        {
          "id": "a-francesa",
          "texto": "¿Es verdad que el director quiere sustituirla?",
          "respuesta": "dc1:Y10QRhZYWBIOUwIHWF9cEQcIWlIXFBBVREVQUFcYUAQWQ1JGBENeVxBESUUNDRcSB1pURVxVRBfyxwZQVlBGHxN+DUYQ9ZASGl1GGxVcWkIRBVRSFxEKVAUWXVMSW1USVx0XZAdEXBIaCxALDEJTBAxXEQZNURYQXhVEQlFfFVRLWxESCkQZQgJAB0JERVBCFwoWX0KmzEMUU1USVl1HEV9WRUAHFlZcQwFcCQwRGUE/VxEJVxAFFEQIEF4YRVpVXBw="
        },
        {
          "id": "a-cuarto",
          "texto": "¿Le gusta el cuarto de la lencería?",
          "respuesta": "dc1:fV1MRiZFGVcPEguhlEMVCqHeW1JTCkVUAVoRWl1MUQ0WShdAC1NdV0MIUUUTA0UEAhhVAFQQCQtfEgVSWUNSUEAeQhcWUxlGClcLAFlRG0I7RFhYFwgAEANDQkZTGEQORBNYQBBXQBIRBUoKDQdEQRdNVEVWX0QXXghEVV0RUl5RVxAIAlhNU00SKgNGEF0DAA1CVlQMCl4BRRFGU1VWCPWaWRQWX1ZcBgoQCAYPWBMPWR1FS1Wn1V4UDUVZQhs="
        },
        {
          "id": "a-julio",
          "texto": "¿Qué opina del señor Bastarrica?",
          "respuesta": "dc1:dlwWFKCFGVYGEgQNQV9bBxFEVUJWCwFfRE9eEldKVUFVUlpVEFNBU01EYwQBBxcEFUxQFxQQFwVTA0RSWV1ZUEESG0YQV1tXQ1EJDEFRR0xCKFdEFxEXVRcWUl1BWUdBRVpFQgdYE0ICFlFFEBdVCBQYVAsYRQpEWQkQVFQfFWgTQgMUAhZWRhFTFUJWX0YDEUgWRF5FEF4LFkBHW11GBBgTeVtCQlZcBAsQCKDDREEXTVRFXFUHDUNI"
        },
        {
          "id": "a-doctor",
          "texto": "¿Y del doctor?",
          "respuesta": "dc1:ZVcLCBdfWlsNUQlCVPOEDRFEVUJFBAtUCxZDV0FZVwBFE1NRQltSQBIRVRYGERlBIl1bBBhcBURdCgVHXRFRVF8SBg8QRlxcEFMUC1oQVg0OA1dTVkUAXkREVFFXSFcI9YBZFAFZXl1DF1lFBRdSEwcYXQQYVAEIEQEFXVRYW1RBXUxGMFMZXgwSDgcVVFwBCgsWWl4JRUYBVVRBHBh6DhZeUhQKV1BXQwdRFgxM"
        },
        {
          "id": "a-llaves",
          "texto": "¿Quién tiene llave de la lencería?",
          "respuesta": "dc1:al1ORhoWVVNDUQkSXFEVBgdEX1lUAAtUDVlCElZdWEFVRlZQEFkTVgZEQgAAB0cCD/uCCxQQAQoRCgURXlhZUBNWB0YCVFhYDBxGJ0ZRFQENFF9WFwkEEAdZVldcGEQARFIXWA1FE1ECCVIMDBEXBQMYXwpbWAFEUhMFX1xeFUhcEgwJQ1NKRgxLSEJ5XxUDEhFYQ1ZFF1UHU0FRW/uHDxgTeBQGU1FXEaedBE0="
        },
        {
          "id": "a-timbres",
          "texto": "¿Funciona todavía el cuadro de timbres del office viejo?",
          "respuesta": "dc1:dl5CAgYWVVMQEg8PRVFHBxFIFkT0yF4QCFdCEkJZRgRFE1tVERZDUxAFQgoNQlYNRldXA1FTAURfEwFHVxFQXxNXDkYVU1BcF1sFC1tTWkxCPRZSW0UBVURaUBIBCA1BWFJTXQcWX11DAFUWAA1ZBAVM8tYUEBQLQxcRVBhfXF9U8dgIQ1NVVwBGFAtWWUYWA0RHQl4WChAQWVJTQBhRElMTX10OWR0SMAEQAA0BXgQIXFRFS18ICx1GBRFOVFZUQBxCLhZbXFYCVkg="
        }
      ]
    },
    {
      "id": "doctor",
      "nombre": "Ernesto Ibarguren Sasiain",
      "edad": 58,
      "profesion": "Médico del hotel",
      "foto": "img-doctor",
      "desbloqueadoPor": "p01",
      "biografia": "Médico de cabecera de la aristocracia veraneante desde hace casi veinticinco años. Tiene un pequeño dispensario junto a recepción.",
      "coartada": "Dice que las noches de guardia duerme en el dispensario y solo se levanta si le llaman.",
      "motivo": "Fue él quien dio por «aire del mar» a cuatro huéspedes que no eran sonámbulos y les recetó agua de azahar sin dar parte a nadie: o no vio lo que tenía delante o no quiso verlo. Y es el único en el hotel que sabe qué dosis duerme a un adulto.",
      "declaraciones": [
        {
          "texto": "¿Sonambulismo? Lo he visto mil veces. Agua de azahar y una ventana cerrada. No hace falta ningún hipnotizador para eso."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d1sBA0NHTFdDQRNCUVlGEgcKRVZFDAoQAUVF8ZMYRwhTXkdGBxZQVxEWUQEMQlQOCBhdCVlGAV8RAgERS0QVV0FTEQUMFl9TD0YHQljzlBFCAFMXWwpFQRFTEVNCTVoV9YAZ",
          "desbloqueadoPor": "p04"
        }
      ],
      "notaDirector": "dc1:elwNBQZYTVdDQgMQWhBRBxEHQ15TBAFfXhZVV1hZFA1XE1tYA0BWEgcBXEUHC0QRA1ZCBEpZC0RSCQhWWVVUEVZcQhQGVVxCAFul0VseFSwNREVWVQBFQRFTEV5XGFIAWkdWWkJRXEYCFx5FMAsXDQMYVAtLVafVUAhEXVlCFVJGVwwSAkUVEhBXRgNGRUYWA0RPF0UABl8KWVJXEklBBBZ5QlgLWRPwyAUQEwYBUhJGVFRFUFEHAREDCBFeUENeQfDZRgdTGVUWUxQGVEJZB0IIVxdbCQRGARg=",
      "preguntas": [
        {
          "id": "d-llave",
          "texto": "¿Quién tiene acceso a su dispensario?",
          "respuesta": "dc1:al1ORhoWVVNDXgoDQ1UVARcBWlBWRQBeRERUUVdIVwj1gFkUAUNSXAcLEBYCDlAOSBh0CRhaAQJURgBUGF9aUltXQgsGFlFTAFdGB1kQUwMUC0QXUwBFVxFXQ1ZTSlgAFlIXQgdVVkFDAV5FBg4XAgdS8tZWHEQUUBQFEUlEUBFdXUIVBhZJWwZAAgMVVVtCBwgWVEIEAUILGBF3QRhQBBZHWFADFlBdDQJZBA0YVltGVF0ATlFEBUATp5wYVVBCV1dCCAr1iF1N"
        },
        {
          "id": "d-escopolamina",
          "texto": "¿Para qué tiene escopolamina?",
          "respuesta": "dc1:flMQAwxFGVYGEgQDR1NaTkIXU/SGChdRFxZfV0BOXQ5FUkQYQldfVaDeXkUTA0UVCRhVDF7zyQdYCkoRfV8VQkYSBgkQX0oSB0cDEFhVFQNCEVgXVBcMQxBfUFxdGEcIWBNGQQcWQFdDAV4RBhBSQQJdEQtZVAVIER9EUBhdVBFeU6HXAlhYEg1dRhFQEFQBFwFEU1ZLRXILVVASQV1XABZKF1ANWlxAQwBVRQADVQQcWR1FXUMLREKlyR8YaBVdUkFCFhZGUF4CQUYBWl1aQhIIV0NYFks="
        },
        {
          "id": "d-cuentas",
          "texto": "¿Cuadra su frasco?",
          "respuesta": "dc1:YFsHCxNEXBIARwcGR1EZQhILREZCAEVcCxZQQkdWQA4WR1hQDRgTcBYBXgpPQlYRE1ZFChhcC0RAEwERTUJaHxN+DUYSQ1wSC1MEoZhRFQ4NRFdHQgsR880WVF4SXPfMVxNCWg0WStDjwhABoMtdBAtdERNdQkpEchMFVUpQGRFQRwMCEVcXEi7xxxEVXxUPBwpZRBlFKV8XFlNdRlFXAERaWEdCUlYSAgpEABBCWQ5GSFQW+5EGBVwJFx0YUlRdUEcOpcJUWF8MQUg=",
          "desbloqueadoPor": "p04"
        },
        {
          "id": "d-sonambulos",
          "texto": "¿Son sonámbulos de verdad?",
          "respuesta": "dc1:ZlxCFQxY+pMOUBMOWhBbDUIXUxdTABZADVNDRlMYVw5YE1tVQlRcUQJEQwAAAxcYRlJQFE1VBwUKRhdUGFVQQkNbBxQXVxlRDF8JQlFVFQYNFlteRUtFfAsWQEdXGFkEFlBYWhb1gBIPBRAWBqGGDhRZETZZVwUXRQ9EX1cRUEITQQ0IAltbRw9bFQ9aHBUHEURZQ0UERVMLRVAcEnZbQVpcF1ALXFYSEwtCFBYHFwQKGFUMSlUHEF4UREFRVVzygBIBBw9bWBIaEh8NFUNaG0IRWBdfCghSFlMRVlcYRABMHQ=="
        },
        {
          "id": "d-morfeo",
          "texto": "¿Puede un hipnotizador hacer eso?",
          "respuesta": "dc1:8ZMoB0IWaUcGVgNCXVFWBxBEVVZZEQRCRFcRR1wYWg5CUkVdDRgTYgYWX0UNDRcRE11VABhDEQZYFERQGF9UVVpXQhIRU0oSE1sVDUYQWwtCBVRFXhdFRQpXEUJHXUYVVx0XeAMWW1sTCl8WChEXBRNKUEVUX0QVRANEVU1DVBFfU0IQDEwXEjpdRgxaEFYQBwsWUllFAEMLGhFcWxhRDxZfWEdCUFJcFwVDCAIRFwUDVBERXUIHAUMJSg=="
        },
        {
          "id": "d-1912",
          "texto": "¿Desde cuándo es médico del hotel?",
          "respuesta": "dc1:d1cRAgYWSEcGEgcAR1n20U5EU1kXAAkQAFlSVxwYdQ9CVkQUA0JWXAennQRDAxcNBxhCAPuBCxZQRgBUGF1UEUVbDgoCFkhHBhIOA1fzmANCBUdC9MhJEAFYEVdBTFsSFl5eRw9ZQBIJBUIBCgxSEl0YXBBKWafXEQcKRV1CFVVWEhMTBhZcUQtTFANbEFkNEURVXloMAF4QWUIcEnBRQUBaREANFl1TAAFCRQYRQwRGUF4RXVxKRHQVFFRKXhVfXBIUAxFaVhIOXRQLRx4="
        },
        {
          "id": "d-309",
          "texto": "¿Recuerda la antigua 309?",
          "respuesta": "dc1:d1cPBxBfWFYMEgQLUF4bQicIFkdFDAhVFhZHV0BZWg4WXkJGC/WAEgIIXKbOQkIPRlBEppFDFAFVSkREVhFdXl5QEANDW1hLDEBGAVpeFQcORFVYRQQf89dYEVFTVkcAUlwZFCZTE14MREEQBkJDBAj7nAQWECABQgIBEV1fQV5dUQcVQ1NVEhNXFBFaXlQOQgpZF0YQAEKnm1ASV0tRQVVGVkYWWR8SGkRcBEMQUgcJSlwEGFgNHl5GBlhdXxVUXRITEwpCWEAPXUhCfVFMQgERV0VDChYQFUNUEldLFAxTWVhGQlhcEg0RXQARA0VP"
        },
        {
          "id": "d-julio",
          "texto": "¿Confía en el jefe de noche?",
          "respuesta": "dc1:cF0PCUNTVxIOW0YQUFxaCExEe1IXAhBRFlJQEl5ZFA1aUkFRThZeV0MFRgwQAxcSDxhECxhYEaeYFRRUXBFGVBNCDQgGFlRTD11GGxVdUEIGAVxWFwEKQglfQxwSbVpBXlxaVhBTE1MQp51FDQ0XEgMYVAtbRQEKRRQFHxhiXBFeV0ICClVcXENDEwcVWFRCCgFVX1hFBFwDWR0SQl1QCETwnhQTQ1YSDgEQCQxCUwQLTVQWTEIBChEFC18YVFkRVUADFQBZGVcNEgoDFV1UDA1K"
        },
        {
          "id": "d-victoria",
          "texto": "¿Conoce a la señora Sagasti?",
          "respuesta": "dc1:f1NCEApFUEYMEgIHRlRQQgcIFkFSDAtEDUXym1tLGkF7Rl1REBZXV0MMWQAREFhbRl1fEV1CFqeCRgURTV8VUEFfAwIMRBlLQ0QPDFoQVA5CJUJb9MQLRA1SUBJTGFgORRNGQQtYUFdDAPPIAhEbQQVXXAoYUwUAUEYFVldCQV4dEiYPAFMZQxZXRhRcVVsHQhRZRRcACRAFX0NXHBhtDhZQRVENFkJHBkRGDAYMUkEWV0NFV0QWBREFC0JZHRVBVkANRg1ZGUEMS0YBQEJcDRELGA=="
        },
        {
          "id": "d-dracmas",
          "texto": "¿Por qué rotula en dracmas y escrúpulos?",
          "respuesta": "dc1:Y10QFxZTGVMTQAMMUfOYQgQFRFpWBgxRRFNfEldUFA9ZRVJaFlcTS0MKRQAVBxcYRlRQFhhdBQpeFURfVxFaXUVbBgcNGBlnDVNGBkdRVg8DSBZDRQAWEAFFUkDxgkQUWlxED0JDXRIGF1MXoNhHFApXHUVOVQ0KRQNEVkpQW15AHEInQ1pWQUNYpdFDVVsHEURaWERFFVkBRFVXEl1YQUVaREAHW1ISDqeZERELVA5IGHBFVfPJRFwDREFRVEdVVhIOB0NbXF8MQA8DGRBEFwdEU0QXFQBfFhg="
        }
      ]
    },
    {
      "id": "morfeo",
      "nombre": "Fausto Lombardi, «el Gran Morfeo»",
      "edad": 48,
      "profesion": "Hipnotizador de espectáculos",
      "foto": "img-morfeo",
      "desbloqueadoPor": "p01",
      "biografia": "Napolitano, recorre los balnearios de Europa con su número de hipnosis. Actúa todas las noches del verano en el salón del Atlántida.",
      "coartada": "Dice que esas noches actuó en el salón y luego se quedó jugando a las cartas con la orquesta hasta el amanecer.",
      "motivo": "Una fama de hipnotizador que hace dormir a la gente le vendría muy bien… o muy mal.",
      "declaraciones": [
        {
          "texto": "Signori, yo hago dormir a quien quiere dormir, sobre un escenario y con luz. Lo de esos pobres no es hipnosis: es otra cosa."
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:elwNBQZYTVdNEjUXFVVGEgcHQvSWBhBcCxZFV0BVXQ9XE1YUDlcTAlJeBFBDGxcFA0tBEPuZF0RbEwFWWRFUEV9TEUYAV0tGAkFGAVpeFQ4DRFlFRhAAQxBXEVdcGFENFlFWRkJeUkEXBRAJAhEXEgNRQl8YVAsHVEYQVEtFXFZcQUxGN1NYRhFTCkJMEEMDDA1SWEQKSRAUU0NdEkxdBFhWF1YXU10SDA5fX0MMWBWlixEUTVVEEF4CC0IYXVpCE/DJFQxY+pMOUBMOWkP32UIMV1X0yAReREJeX1NcW0FaUhf32FpHWw4FEAYMElZBA1YRCVkQBgVDFAURXFQVQ1ZRBxYAX/qBDR5GEVBCQwsGBRZHWBdFehFaWF0c",
      "preguntas": [
        {
          "id": "m-copa",
          "texto": "¿Notó algo en los cuatro huéspedes?",
          "respuesta": "dc1:YkcHRg1fV1UWXAlCUEJUQg+nm1gNRQFfFxZfWxJIXRJXQVhaQltaEhAFXKbQDBlBNl1DChhcCxcRBRFQTENaHRNBCwENWUtbDVNKQkFfWAMQC1gXWwRF895aRVtfWRQCWUNWFAdYE14CRFIEERBWQQJdXUVOVRcQ8ssGRFReGRFDUxEHB1cZXgISEwxUHBUBDQoWUltFB1EWFkhTEltRE0RSU1tMFn9dQxfzzEMSWBMXTVRFWRABF1BGDF5KUBVCUl4FCUNXGVQWXwcQFUkVFAcLFkZCDKaZChZTV1BdFBBD8J4a"
        },
        {
          "id": "m-horario",
          "texto": "¿A qué hora termina de trabajar?",
          "respuesta": "dc1:chIOB0NDV1NDS0YBQFFHBwwQVxdORQZZClVeEldWFBFDXUNbThZQRwIKVApDB1tBC01fAVcQAAFCFg1USkVUEUoSAxYPV0xWBhxGJlBDRRehzUUbFwAJEAlDQhJRV1pBWlIXWxBHRlcQEFFFCwNEFQcYXQRLEBcBWBVKEXxeVlQTRgcVF19eXRASH0JAXlRCAAVEVl0ESxAxWBFaW0haDkJaTVUGWUESEhFVRQ4DUxMTX1BFVl9EAUJGEV8YWVxBXV0WDxlXXV0RHA=="
        },
        {
          "id": "m-hipnosis",
          "texto": "¿Puede hipnotizar a alguien sin que lo sepa?",
          "respuesta": "dc1:fV1MRi9XGVoKQggNRllGQgcXFkJZRQZfCkJDU0ZXDkFTXxdHF1xWRgxEQRAKB0UERlxeF1VZFkRIRh1eGF1QEVJQEAlDWlgSE0cDEEFRG0IzEV9SWUUBRQFEXFcSWRQAWlRCXQdYE1EMCkQXAkJEFEZOXglNXhAFVUYKXhhERlATXgNGFVlDHENnFQMVRVtCBBZXRFQKSw=="
        },
        {
          "id": "m-baul",
          "texto": "¿Sabía que escondieron llaves en su baúl?",
          "respuesta": "dc1:8ZMnCENbUBIBU6XYWRBRB0IBRUNFAAlcBUUQEn5XFARYUFhaFkTwm0MJXxMKBlhBA1QRCFlCEAFCRh0RW0RZQfCbQgcPFltdF10IB0YcFRMXARZbWEUIWRZXEVFdVVtBRVoXUhdTQVNDEV5FAA1REwMYVQAYQA0WUBIFHxh8XBFQVxAUAlJMQAISAxEVVFBCEAFaWF0AF19eFl9TVlFRQVpSF1UARFrx0EoQNQYQWEEDVBEBV1IIAREAC19cXhVCVhIDCgBXV0gCEhYNRxBRBwAFXFgbRRZZRENfXRJdR0FcXEFRDBZKEgUIUQYMTA==",
          "desbloqueadoPor": "p11"
        },
        {
          "id": "m-fama",
          "texto": "¿Le conviene que hablen de sonámbulos?",
          "respuesta": "dc1:fltCBQJETVcPEgILVlUVExcBFlNCABddCxZQXhJVQQ9SXBkUMV8TVw9EXRANBlhBFV0RAU1VFglURhdeVF4ZEUpdQhUMVEtdTRIoDRkQRgsFCllFXgsEHERYXhJfXRQCWV1BXQdYVhxDKVVFAA1ZFw9dXwAYQREBERMXRV1VUEITVwwFFlNXRhFXCEJUEEQXCwFYF10QAFcFFlASQV1GQU9cF0cLWBNGBgpVF0MPXkESWV0AVkQLSg=="
        },
        {
          "id": "m-director",
          "texto": "¿Qué le ha pedido el director?",
          "respuesta": "dc1:YkcHRg1ZGVYGWANCUVUVAwEQQ1ZFRRwQFUNUElxXFAlXUVtRQlVcXEMIUUUTEFIPFVkfRXRRF0RVCRcRW15GUEASDwNDVUxXEEYHDBsQcA6h10VSUBAMEBBfVFxXGFkIU1dYFAZTE14CRFcEDwMNQRBRVAtdEAkBVQ8LEXpYWVNSXUIfQ0NXEg5bCAtGREcNTERjWRcNCkQBWhFRXVYUB1ddQ1URW1JBQwpfRRAHFw0KXV8EFg=="
        },
        {
          "id": "m-julio",
          "texto": "¿Trata con el jefe de noche?",
          "respuesta": "dc1:fldCFQpET1dDVwpCVl/20wMHFlNSRQFVF0ZE8ZtLFAVTE1tVQlBGXAAN89YNQk5BC10RBk1VChBQRhVEUfKcXxNXEUYSQ1DxylxGB1sQWQNCF1dbVktFYwEWQlNQXRQVWVdYR0JaXEFDBUAADw5eBQlLEQFdECYNXQQFXhYRYF8TWg0LAURcEqCIEgtZHhUmBwlXRF4EAV9E9YtGW1QUEVdBVhQWRFZbDRBRRRMHRAQSWUJFXFVEFEMJFFhWUBs="
        },
        {
          "id": "m-camerino",
          "texto": "¿Dónde está su camerino?",
          "respuesta": "dc1:d1cWFKCXShIHVwpCRlFZodEKGhddEAtECxZQEl5ZFBFDVkVAAxZXV0MXVRcVC1QICRhAEF0QAAURBwgRSFBGWF9eDUYHU1USDl0IFlRTVBAFBUUZFykKEBRTVfGfGEQORBNSWEJFWl4GClMMDEJOQQtdEQFRVRYLX0YBXRhFR/KSXBEPF1kZVgZeRgpaRFAOQgFYQ1IXCgpEQl5WXRhRDRZAUkYUX1BbDERABBADFxEJShEIURAUEVQUEFAYUBVFXFYDFUNeVkACQUg="
        },
        {
          "id": "m-rojas",
          "texto": "¿Usa fichas rojas en su número?",
          "respuesta": "dc1:ZkENRhZYGUAGXgkIGRBADANEQFJbBEVJRFtYEkRXTk8WdV5XCldAEhELWgQQThcPD1ZWEFZRSkR0CERUVBFWUEBbDAlPFlxcQ1EHD1dZWk5CCFdEFxcKWgVFEURTVFEPFlBeWgFZE1YWFl8WTUJnEwNfRAtMVUQFERcRWF1fFV1SQUIKD1NPV0NXCEJQXBUADQhFXlsJCh4=",
          "desbloqueadoPor": "p07"
        },
        {
          "id": "m-despertar",
          "texto": "¿Cómo despierta a la gente?",
          "respuesta": "dc1:cF0MRhZYWBITUwoPVFRUQhtEQ1lWRRVRCFdTQFMWFC1ZQBdZoZtcQUMAVRYTC1ITEllfRUpZAQpVCUoRdF5GEUBHGwkQFl1XEEIDEEFRRw0MRFVYWUUQXkRY8ohfXUYOFkNeWhZXV11DAV5FDwMXERNdQxFZHkQhQglEX1cRWV4TWgMFBhZMXENaDxJbX0ELGAVSWEVfRVwLFllTUV0UAFpUQl0HWBNDFgEQFBYLUhMDGEAQXRAWAVITAUNcVFsRVl5CVVMPFw=="
        }
      ]
    },
    {
      "id": "victoria",
      "nombre": "Victoria Sagasti Ibarra",
      "edad": 52,
      "profesion": "Viuda de armador · huésped de la 122",
      "foto": "img-victoria",
      "biografia": "Viuda de un armador bilbaíno. Veranea en el Atlántida desde que abrió, siempre en la 122, y cena en su cuarto. La noche del 10 despertó en la 309. Es la que mejor recuerda lo que pasó y la que menos cuenta.",
      "coartada": "No es sospechosa: es la última huésped que despertó en la 309.",
      "motivo": "Veranea en el Atlántida desde que abrió y conoció la 309 con huéspedes. De los cuatro es la que mejor recuerda la noche y la que menos cuenta, y lo que guarda en la cajita 17 no quiere decirlo a nadie: quien esconde algo en la caja del hotel tiene razones para vigilar quién la abre.",
      "declaraciones": [
        {
          "texto": "No soy sonámbula, señoritas. Desperté con la boca seca y la cabeza como un yunque, en una cama que no era la mía, y un muchacho muy amable me dijo que era el aire del mar. El aire del mar no pinta números en las puertas."
        }
      ],
      "contradicciones": [],
      "preguntas": [
        {
          "id": "v-noche",
          "texto": "¿Qué recuerda de la noche del 10?",
          "respuesta": "dc1:cFcMpcoWXFxDXw9CVkVUEBYLGhdVBA/zzRZQEkJXRkFDXVYUFl9fU0MFEAkCQkIPBxQRFVdCFRFURgpeGFVaQ17xzwdPFkASD1NGFlpd9stCAVgXWwRFUgVEQ1MSXFENFkVSRxb1nlAWCF9LQyZSEhZN8sxLHEQKUAIFCxhEW1ATUQMLAhZcQRdAAwFdURlCEaeXVVYLBENEUkRAU0sYQVlfWEZCVxNYAgbz1g1CTkETVhEGUFkHCxELEUgYUFhQUV4HRgdfWlugmwgGWl1QQhMRUxdSFwQQF1lf8ZNVVhRaUhkULFkTXgxEQwoaTBcvE1ZSBBhcC0RZA0RCUVVaHw=="
        },
        {
          "id": "v-cajita",
          "texto": "¿Qué guarda en la cajita 17?",
          "respuesta": "dc1:Y1MSAw9TShIHV0YEVF1cDgsFFkZCAEVeCxZCXVwYUAQWQEIUC1hQRw4GVQsAC1ZBCFERAV0QCAURAgFdGFlaRVZeTEYtWRlGClcIB1sQQwMOC0QXRwQXUURDXxJeWVAT9YBZGEJFWhIGFxAJDEJGFAMYQRddVxEKRQdKEWhQR1ATX6HLQ0JQVw1XCEJQXBUTFwEWQ14AC1UKGA=="
        },
        {
          "id": "v-agosto",
          "texto": "¿Por qué el Atlántida cada agosto?",
          "respuesta": "dc1:fltCCwJEUFYMEhAHR1FbBwMGVxdWFBDzyRZVV0FcUUFHRlIUA1RBW6DXHkU6DRcSD19eRU5ZCg1UCABeGEFaQ0JHB0YQUxleDBIWEFpdUBahyRZWFwQJVxFfVFweGE1BRlxFRRdTE18GRFcQEBZWQQNUEQRRQgFKESgLEUhDUFZGXBYDQ1cZQxZbpctbHhUuAxcWQV4QAVEXFkVXXF1ZDkUTR1sBV0ASExZfCAYRVhJGSUQAGFcRBUMCBUMYSBVdUkFCARZXS1YCXwkRGw=="
        },
        {
          "id": "v-llave",
          "texto": "¿Llevaba encima la llave de su cajita?",
          "respuesta": "dc1:dlxCEw1XGVECVgMMVBwVAw5EVUJSCQlfSBZSXVwYWAAWXlJQA1pfU01EYAoRQlsARlVQpolRCgURFQFWTfKYUBNTCqXOGBl8AlYPBxVdUEIOBRZGQgwR89caEUFbGFESFl9YFBNDVhITDVULEANZT0Z5RAtJRQFEXgqnnFkRVBFZUwCl0FgVEgJaCRBUEEQXB0RaWBcBDFMBGBF+UxhZBFJSW1gDFkdTDgZZpsoMGQ=="
        },
        {
          "id": "v-doctor",
          "texto": "¿Qué le dijo el doctor?",
          "respuesta": "dc1:YkcHRgZEWBIGXkYDXEJQQgYBWhdaBBcQHRZdUxJdUABSHRd5BxZBVwABRKbQQlYGE1kRAV0QBR5QDgVDFhFsEV5XQgsKRPqBQ14HERVAQBILCFdEFwimkRcWQ1NGVxQFU18XRRdTE1oCB/PIAkJRAApMUEsYdRcBEQ4LXFpDUBFAUwADQ1v6kxASAgcVXFpCExFTF0UABlUQVx8="
        },
        {
          "id": "v-otros",
          "texto": "¿Conoce a los otros tres huéspedes?",
          "respuesta": "dc1:d1dCEApFTVNDS0YGUBBUodMLRRkXIAkQDVhWXvGRR0FYXBdcA1RfU0MHXwtDDFYFD10KRVRRRAJDBwpSXUJUHRNRDQhDQlZWDEFdQlBcFREHp4dYRUUjVRZEVEAeGFcOWBNEQUJbRlgGFh5FLQ1EQRVZXRBcUQkLQkYHXlVeFUJWEhEHD0NdUw0SCg1GEEQXB0RVWF4LBlkAU18SUVlQABZSUFsRQlwSBwFDAQZCXwAFXREITVMMCx9GKlBcUBVc8JMRSEN4WFYCEguhlEMVExcBFk5YRRNRHVcRUxJbWw9CUkUa"
        },
        {
          "id": "v-paco",
          "texto": "¿Cómo la trató el botones?",
          "respuesta": "dc1:cF0MRhZYWBIHRwoYQEJUQhAFRFYXFQRCBRZEXBJVQQJeUlRcDRZXV0MXRUUGBlYFSBh8ABhcCAFHpdcRXFRZEVFAAxwMFkASDldGElxUXKHRREZSRQGmgwoWVV1BGEIEVVZEGkL0mGIGFlSm0AwbQaSHVQAYQRGnmFmmihQRWVQTVgsMBhgZa0NcCUJGRUUNQgdZWUMAFkQFRFxXHA=="
        },
        {
          "id": "v-309",
          "texto": "¿Vio el número de la puerta?",
          "respuesta": "dc1:ZlxCVVMPGUIKXBIDUV8VEg0WFlNSCxFCCxoRUV1WFBRYUhdEC1hHRxEFEBMKB10ARklEABhRFwtcBwZQGFNUW1wSDgdDWExXFVNIQmBeFQyh3ltSRQpFXgsWQlcSSF0PQlIXRA1EE1YGCkQXDEJTBEZNXwQYQBEBQxIFEUhQR1ATQxcDQ1pWEhVXB0JQXBUKF6efREcAAR5EZVQSQlFaFVcTR1UQVxNDFgEQCQxCQQQHGFQJGEERAREDF0X7kBVUXVEHFBFXXV1N"
        },
        {
          "id": "v-miedo",
          "texto": "¿Tiene miedo?",
          "respuesta": "dc1:Z1cMAQwWWlsNURMHW0RUQhtEUlhERQTz1VlCEksYXAQWVllAB0RBUwcLEARDF1lBC1lDDFxfRB0RB0RVV0IVWVpYDRVNFnRbBlYJThVeWkxCJ0NFXgoWWQBXVR4SS/fMDBNGQQtTQV1DF1EHBhAXEBNR8sxWEAkBEQIRQ1VY9oITS0IWAkRYEhJHpcsbEGxCExFfUkUKRUERUxFfVxhYDhZXXlMDWBNHEBBVAQYRFwAITFQWGEERAREHRF1ZEUVeX1sBpc5XFw=="
        }
      ]
    }
  ],
  "documentos": [
    {
      "id": "d01",
      "tipo": "telegrama",
      "titulo": "Telegrama del Gran Hotel Atlántida",
      "fecha": "11 de agosto de 1927",
      "autor": "R. Elósegui",
      "texto": "AGENCIA ARKANA MADRID\nCUATRO HUESPEDES DESPIERTAN EN HABITACION 309 STOP\nHOTEL NO TIENE HABITACION 309 STOP\nRUEGO DISCRECION Y PRESENCIA ANTES GALA DIA 15\nELOSEGUI DIRECTOR"
    },
    {
      "id": "d02",
      "tipo": "transcripcion",
      "titulo": "Lo que recuerdan los cuatro huéspedes",
      "texto": "Mr. Harold Pym (1 de agosto): «Desperté en una cama estrecha, con sábanas almidonadas por todas partes, como en un armario. Por la ventana se veía el faro de la isla.»\n\nMme. Colette Duval (4 de agosto): «Toda la noche oí una máquina, un traqueteo de cadenas al otro lado de la pared.»\n\nDon Augusto Ferrer (7 de agosto): «La puerta tenía pintado por dentro un 309. Salí y estaba al fondo del pasillo, junto a una escalera estrecha.»\n\nDoña Victoria Sagasti (10 de agosto): «Me dolía la cabeza y tenía la boca seca, como de una medicina. Y un olor a jabón de lavandería.»"
    },
    {
      "id": "d03",
      "tipo": "informe",
      "titulo": "Registro de los cuatro huéspedes",
      "autor": "Recepción del Gran Hotel Atlántida",
      "texto": "Mr. Harold Pym · hab. 214 · viaja solo · cena en el comedor · no asiste al espectáculo · depósito en la caja de caudales: cajita nº 12.\n\nMme. Colette Duval · hab. 118 · viaja con su doncella, que duerme en el ala de servicio · cena en su habitación · asiste al espectáculo · cajita nº 25.\n\nDon Augusto Ferrer · hab. 305 · viaja con su esposa, que ocupa la 303 · cena en el comedor · asiste al espectáculo · cajita nº 21.\n\nDoña Victoria Sagasti · hab. 122 · viaja sola · cena en su habitación · no asiste al espectáculo · cajita nº 17."
    },
    {
      "id": "d04",
      "tipo": "informe",
      "titulo": "La tercera planta en 1912",
      "autor": "Archivo del hotel",
      "texto": "Plano de la inauguración, 1912. Tercera planta: habitaciones 301 a 309. La 309 era la más pequeña, al fondo del ala norte, junto al montacargas y la escalera de servicio. Office de planta al fondo del ala norte, junto a la escalera de servicio, con el cuadro de timbres de las habitaciones 301 a 309.\n\nEn la reforma de 1925 se suprimió la 309. Hoy no figura en ningún plano ni en ningún libro de reservas."
    },
    {
      "id": "d05",
      "tipo": "mapa",
      "titulo": "Plano actual de la tercera planta",
      "visual": "planta",
      "desbloqueadoPor": "p01",
      "texto": "Plano de la reforma de 1925. El director os lo entrega con cara de no entender nada."
    },
    {
      "id": "d06",
      "tipo": "informe",
      "titulo": "Libro de la lencería · agosto de 1927",
      "desbloqueadoPor": "p02",
      "autor": "A. Urquiza",
      "texto": "Cambios de ropa de cama fuera de las habitaciones de huéspedes:\n\n2-VIII · «309» · 1 juego de sábanas\n5-VIII · «309» · 1 juego de sábanas\n8-VIII · «309» · 1 juego de sábanas\n11-VIII · «309» · 1 juego de sábanas\n\nNota del 12-VIII: «Para mañana por la noche, 309: sábanas limpias y toalla. Lo ha pedido recepción.»"
    },
    {
      "id": "d07",
      "tipo": "fotografia",
      "titulo": "Jabón y llaves",
      "visual": "jabon",
      "desbloqueadoPor": "p03",
      "texto": "La pastilla de jabón del lavabo de la lencería y cinco llaves del hotel. Al apretar una llave contra el jabón, la huella queda como en un espejo."
    },
    {
      "id": "d08",
      "tipo": "informe",
      "titulo": "Dispensario del doctor Ibarguren",
      "desbloqueadoPor": "p04",
      "autor": "Dr. E. Ibarguren",
      "texto": "Solución de escopolamina al uno por mil, para dar en gotas. Frasco rotulado al modo antiguo.\n\nEl 1 de agosto: una dracma (ʒ i).\nEl 12 de agosto: un escrúpulo (℈ i).\n\nUsos anotados: 8 granos (paciente con mareo, 3-VIII).\n\nEquivalencias de botica: 1 dracma = 3 escrúpulos · 1 escrúpulo = 20 granos.\n\nDosis que el doctor anota para dormir a un adulto: 8 granos."
    },
    {
      "id": "d09",
      "tipo": "informe",
      "titulo": "Turnos de noche · 1 al 12 de agosto",
      "desbloqueadoPor": "p04",
      "texto": "Noches de servicio de cada uno:\n\nJulio Bastarrica (recepción)        1, 2, 4, 5, 7, 8, 10, 11\nPaco Arana (botones)                1, 3, 4, 6, 7, 10, 12\nAdela Urquiza (gobernanta)          1, 4, 5, 7, 9, 10\nDr. Ibarguren (médico de guardia)   2, 4, 6, 8, 10\nIgnacio Mendía (portero)            1, 3, 5, 7, 9, 11"
    },
    {
      "id": "d10",
      "tipo": "fotografia",
      "titulo": "Cuadro de llaves de recepción",
      "visual": "cuadro-llaves",
      "desbloqueadoPor": "p06",
      "texto": "La noche del 13, de guardia en el vestíbulo, os fijáis en que alguien ha colgado cuatro fichas rojas numeradas en el cuadro de llaves. A medianoche ya no están."
    },
    {
      "id": "d11",
      "tipo": "informe",
      "titulo": "Contador del montacargas",
      "desbloqueadoPor": "p07",
      "autor": "Libro del maquinista",
      "texto": "Lectura del contador de viajes al empezar y al acabar la noche (de 23:00 a 07:00):\n\nNoche del 9 ....... 41.310 → 41.312\nNoche del 10 ...... 41.322 → 41.330\nNoche del 11 ...... 41.341 → 41.343\n\nEl contador suma uno cada vez que la cabina arranca, suba o baje. Descansa siempre en el sótano, junto a la lavandería. Una noche sin huéspedes que subir o bajar hace dos viajes: sube a por la ropa sucia de las plantas y la baja a la lavandería."
    },
    {
      "id": "d12",
      "tipo": "informe",
      "titulo": "Libro de la caja de caudales",
      "desbloqueadoPor": "p07",
      "soloJugador": "A",
      "texto": "Aperturas de cajitas fuera de horario, con firma del empleado:\n\n2-VIII · 03:10 · cajita 12 · «comprobación» · J. B.\n5-VIII · 03:15 · cajita 25 · «comprobación» · J. B.\n8-VIII · 03:05 · cajita 21 · «comprobación» · J. B.\n11-VIII · 03:20 · cajita 17 · «comprobación» · J. B.\n\nLa caja de caudales solo se abre desde detrás del mostrador de recepción."
    },
    {
      "id": "d13",
      "tipo": "informe",
      "titulo": "Libro de rondas, sereno y libro de recepción",
      "desbloqueadoPor": "p07",
      "soloJugador": "B",
      "texto": "Rondas de la gobernanta: de 03:00 a 03:30, primera planta, con la enfermera de noche (firmado por las dos).\n\nSereno de la calle, las madrugadas del 2, 5, 8 y 11 de agosto, al pasar ante la puerta de cristales hacia las tres y cuarto: «En recepción, solo el jefe de noche».\n\nLibro de recepción, esas mismas madrugadas, a las 03:00: «El botones, arriba con equipajes».\n\nLibro de recepción, 1 de agosto: «La 216 y la 220, reservadas todo el mes a nombre de dos casas de Bilbao, como cada año. El señor de la 216 cena en su cuarto; el de la 220 no asiste al espectáculo»."
    },
    {
      "id": "d14",
      "tipo": "almanaque",
      "titulo": "Cartel del Gran Morfeo",
      "desbloqueadoPor": "p07",
      "texto": "EL GRAN MORFEO · EL HOMBRE QUE DUERME AL MUNDO\n\nTodas las noches en el salón del Gran Hotel Atlántida.\nPrimera función: 22:30 · Segunda función: 00:30\nDuración de cada función: una hora y cuarto.\n\n(Al dorso, a lápiz, el director de la orquesta: «Después, partida de mus con Morfeo hasta las seis, como cada noche».)"
    },
    {
      "id": "d15",
      "tipo": "carta",
      "titulo": "Nota encontrada en la chaqueta del botones",
      "desbloqueadoPor": "p09",
      "texto": "Doblada en cuatro, con letra de chico:\n\n«Enpen elpel bapaúlpul delpel mapagopo. Quepemapa espestapa nopotapa.»\n\nEn el registro de su taquilla, una libreta escolar de 1920 con juegos de palabras de cuando era niño: «La jerigonza: detrás de cada sílaba se pone una pe con la misma vocal; si la sílaba acaba en consonante, también esa consonante: sol, solpol»."
    },
    {
      "id": "d16",
      "tipo": "informe",
      "titulo": "Lo que había en el baúl del mago",
      "desbloqueadoPor": "p11",
      "autor": "Comisaría de San Sebastián",
      "texto": "En el doble fondo del baúl de estrellas del Gran Morfeo: cuatro llaves recién hechas, de latón sin pulir, que abren las cajitas 12, 17, 21 y 25 de la caja de caudales; un frasco de escopolamina con el sello del dispensario; y una lista de la gala del 15 con los nombres de los cuatro huéspedes, escrita en papel de recepción."
    },
    {
      "id": "d17",
      "tipo": "informe",
      "titulo": "Hoja de condiciones del Gran Morfeo",
      "desbloqueadoPor": "p11",
      "autor": "Camerino del salón",
      "texto": "Condiciones del Gran Morfeo para la temporada de 1927, clavadas con chinchetas en la pared del camerino:\n\n1. Camerino con llave, detrás del salón, junto a la puerta de servicio.\n\n2. El baúl de estrellas no se mueve sin el artista. Cerradura de relojero, de tres ruedas con horas. Por exigencia del seguro, la combinación queda en sobre cerrado en dirección, resumida así para caso de incendio: «Las tres horas de mi noche: cuando sube el telón, cuando vuelve a subir y cuando el mundo despierta».\n\n3. Coñac después de la última función, en la barra del vestíbulo.\n\n(Nota del portero, a lápiz: «Ronda del salón cada cuarto de hora, de la una a las seis».)"
    },
    {
      "id": "d18",
      "tipo": "informe",
      "titulo": "Nota de la gobernanta sobre el office viejo",
      "desbloqueadoPor": "p07",
      "autor": "A. Urquiza",
      "texto": "Para las detectives, que me han preguntado por el cuarto del fondo del pasillo, frente a la lencería.\n\nEra el office de la planta hasta la reforma de 1925; hoy guarda escobas y el cuadro de timbres de 1912, que nadie quitó de la pared. Los timbres de las pares se pasaron al office nuevo del ala sur; los de las impares siguen en el cuadro viejo, con hilo de vuelta a recepción, como entonces. Y el de la 309 nadie lo desconectó: ningún electricista quiso tocar ese hilo. Dicen que a veces se enciende solo. Humedad, digo yo.\n\nLas llaves de servicio (dispensario, montacargas, salón, office) cuelgan en la fila de abajo del cuadro de recepción. La de la lencería la llevo yo."
    }
  ],
  "pruebas": [
    {
      "id": "p01",
      "fase": "I · Los sonámbulos",
      "titulo": "Lo que tienen en común",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p02",
      "descripcion": "Cuatro huéspedes distintos, cuatro noches distintas. Algo los une.",
      "instrucciones": "¿Qué tienen en común los cuatro huéspedes?",
      "documentos": [
        "d03",
        "d02"
      ],
      "opciones": [
        {
          "id": "solos",
          "texto": "Viajaban solos"
        },
        {
          "id": "espectaculo",
          "texto": "Habían visto al Gran Morfeo"
        },
        {
          "id": "caja",
          "texto": "Tenían algo guardado en la caja de caudales del hotel"
        },
        {
          "id": "comedor",
          "texto": "Cenaban en el comedor"
        }
      ],
      "huellasRespuesta": [
        "f54f8e96c5c41889438248e70510129ddb684e1afd71a53f7890616287882c69"
      ],
      "pistas": [
        "dc1:cF0PFhFZW1MHEgUDUVEVDRIHX/SEC0VTC1gRXl1LFAJDUkNGDRZbR6DNQxUGBlISShhfChhDCwheRgdeVhFAX1wSDUYHWUoc",
        "dc1:d10RRgdTGVcPXgkRFV5cQhENR0JeABdRRFBEV0BXWkFXXxdREUZWURenkQYWDlhP",
        "dc1:flsQBwcWVVND8dwOQVlYA0II9ZpZAAQQAFMRUVNcVUFQWlRcAxg="
      ],
      "solucionDirector": "dc1:f10RRgBDWEYRXUYWXFVbBwxEVVZdDBFRRFNfEl5ZFAJXWVYUBlMTUQIRVAQPB0RBTgkDSRgCUUgRVFURQREEBhocQigMFk1dB10VQkNZVAgDChZEWAkKQ0gWX10STFsFWUAXQgtTQV0NRFFFLg1FBwNXERwYXgtERQkAXksRVlRdUwAHDRZcXENXCkJWX1gHBgtEGQ==",
      "exito": "dc1:f10RRgBDWEYRXUYFQFFHBgMGV1kXBAlXCxZUXBJUVUFVUl1VQlJWEgAFRQECDlISRlxUCRhYCxBUCkoRfUJaEUpTQggMFlFHBl4DQlQQRg0MBVtVQgkMQwlZHxJ3VBQFX0FSVxZZQRIMFxAADRZFBAFZEQBUEBQIUAgLEVxUFV1SEhYDEVVcQAISFg5UXkEDTA=="
    },
    {
      "id": "p02",
      "fase": "I · Los sonámbulos",
      "titulo": "La habitación que no existe",
      "tipo": "hotspot",
      "contenidoVisual": "planta",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p03",
      "descripcion": "Cada huésped recuerda un detalle distinto. El plano de 1912 dice dónde estaba la 309.",
      "instrucciones": "Pulsad en el plano actual la pieza donde despertaron.",
      "documentos": [
        "d02",
        "d04",
        "d05"
      ],
      "huellasRespuesta": [
        "b95ebe82f86bf3f6b2acc4b9fb3ff153fa42df244b7a6427486f9c1b006c0462"
      ],
      "pistas": [
        "dc1:d1cRAgYWVVNDAVZbFUNQQhQBFlJbRQNRFlkLEldLQKKXE1JaQlNfEg8FVApDBlINRlVQFxY=",
        "dc1:YFdCCaCbWBIWXAdCWPOUExcNWFYXAQAQB1dVV1xZR0FXXxdbFkRcEg8FVApDBlJBClkRFVlCAQALRgFdGFxaX0dTAQcRUVhBTQ==",
        "dc1:cl5CAAxYXV1DVgMOFUBUEQsIWlgbRQ9FCkJeElMYWAAWVkRXA1pWQAJEVRYXEFICDlnT5Z4QHURSCQoRS/KUU1JcAxVDV1VfClYJDFRUVBFCFFlFFxEKVAVFEUJTSkAERR0="
      ],
      "solucionDirector": "dc1:f1NCCgZYWlcR8csDDxBZAwYLFllYFxFVRB5XU0BXHU0WQ1ZGB1ITUQwKEBUCEFIFRlteCxhVCERcCQpFWVJUQ1RTEUpDV1USBV0IBloQUQcOREZWRAwJXAsWW0dcTFtBVxNbVUJTQFECCFUXAkJTBEZLVBdOWQcNXkYdEVRdUF9SEgYDQ0X6kwFTCANGHhUnEURaVhcEC0QNUURTEgsEWBg=",
      "exito": "dc1:f1NCCgZYWlcR8csDGxBlDRBEUlJZERdfSBZTU1hXFA1XE0ddDEJGQAJEXhAGFFZNRlRQRUhFARZFB0RSV19GVEFEA0YWWBkBUwtIQn1RTEIXClcXVAQIUURTQkZAXVcJVx8XQQwWX1MVBVIKQxsXFAhZERVZQxANXQoFEVxUFVtSUKHVDRZaXQ0SEwxUEFMNEAlXF0UEF1FKFn1TEl9bA1NBWVUMQlISDBcQFREHRBUHGEIQGFwNBkMJSg==",
      "escena": [
        {
          "texto": "dc1:dl5CFgJFUF4PXUYGUFwVAw4FFllYFxFVSBZQEl9dUAhZV/SZAxoTWhYBXABDAxcCA0pQRUEQBURcBxYfGHBZEVVdDAIMGhlYFlwSDRVRFQ4DRFNEVAQJVRZXEVdBTEYEVVtWGEJDXVNDFEUAERZWQRZRXxFZVAVEVQNEU1RQW1JcEgEJDRZMXENApdFBRVkNQgBTF1IWCFEIQlQIEnRxL3V2Zffvdx0=",
          "imagen": "img-lenceria"
        },
        {
          "texto": "dc1:dFsRSENmWEECEgoDFV1UDA1ERlhFRQRBEfWcHhJIWxMWV1JaFkRcEgcBEAkCQkcUA0pFBBYQLAVIRgVdX14VVVZQAwwMFl1XQ14HQkVZWxYXFlcZ",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:cl5CEhFXSl4WSEpCV1FfDUIAWUQXBgRABUURVlcYVg1XXVRbThZHQAYXEAYKBEUAFRhBDFZEBQBQFURQGFxUX1wIQlVPFgkeQwtIQnFVWxYQCxoXQgsEEAdXXFMSXUcVRFZUXAMWVlwXFlVFBhFDAAhMVBYYVAFEQqXFU1lfVEIfEhcIQ1pYRAJQCUJMEEAMA0RGVkQRDFwIVxFWVxheAFTwhFpCVVxcQxFeBEMEWBMLWREUTVVECl5GAUIYVVARWVMApdBYFxIvU0YFWlJQEAwFWENWSUVVChZdUxJIQQRER1YYQlhcEgcNUwBDDFYFBxYRKU1VAwsRCRcRSENQQkdTQhUWFlVbAUAJTA==",
          "visual": "planta"
        }
      ]
    },
    {
      "id": "p03",
      "fase": "II · La lencería",
      "titulo": "Sábanas para la 309",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p04",
      "descripcion": "La gobernanta lo apunta todo, incluso lo que no entiende.",
      "instrucciones": "¿Qué noche volverá a usarse la 309?",
      "documentos": [
        "d06"
      ],
      "huellasRespuesta": [
        "d647e6456a4c7e50ed08a1e4d7defdc3510f65f0cfb4a550cd9ade82284c5138",
        "d5fe61f028faf33a3c397ef778dc72704326cfba353eec471ae02b471ae31e71",
        "80a23557fb6e9873cf2976ba7a2234cf11ccc137bed6a5daaa87b1b507a59954",
        "1f8e3918a4f92a24d72cb2b8953cb2e30473dbc4c5d34ad9b2559755d6c42c47",
        "240b842dd24e7d572298047e95cbca8ec6f08f98dffd1ae17597a48da28260a1",
        "509c149be4b5f783045af9b232869b700f66d6cdd1d5978600cbc788bf8d43e3",
        "bc5d6783b9e2cf9229eb351a32ace07b3c765c4cf2c7f4c8307e3b3f8cde21c2",
        "efa364443b3ac30e5d823dbcc2db5fdffe9ee115a08b96e7e74a5c29ce2bf5db",
        "95e7292dae13ebda4294e61498fa4bcff68031f15e544d50c9b212790bf094e3",
        "0c1b4bda86a8491280deb143bf1b6986b6117a15402206f918e4bd8911139bc3",
        "273b91ea121457214beea2662a3c19df8ab4c64c1c62939d901f3eed30fb393b"
      ],
      "pistas": [
        "dc1:f1MRRhD1mFACXAcRFUNQQgEFW1VeBAsQBRZdUxJVVaKHUllVQkVaVRYNVQsXBxcFAxhSBFxRRApeBQxUFg==",
        "dc1:f1MRRg1ZWloGQUYEQFVHDQxEU1sXVEkQAVoRBh4YUQ0WBBdNQlNfElJUCkUAA1MARkxDAEsQAKecBxcf",
        "dc1:f1cHAkNaWBINXRIDFVRQDkIA9ZpWRVQCSg=="
      ],
      "solucionDirector": "dc1:cFMPBApZShIGXkZQGRAATkJcFk4XVFQKRFpQQRJWWwJeVkQUBlNfElJIEFFPQgBBHxgAVRQQBwVVB0RFSlRGEVfxzwcQGBlrQ14HQltfQQNCAFNbF1RXEBRfVVcSS/fAVFJZVREWQ1MRBRCnyA9WotdZXwQYQAsWEQoFEVZeVllW8NlcQ1NVEhDxxwBUVFpCU1cY",
      "exito": "dc1:f1NCCAxVUVdDVgMOFUP2wwAFUlgXVFYeRHlCEkNNUQVXQfSdC0UTVgZEVxACEFMIBxYRKFFVChBDBxcdGFxcQ1JWQgQKU1cSBkEDQl9RV6HRChg="
    },
    {
      "id": "p04",
      "fase": "II · La lencería",
      "titulo": "La huella en el jabón",
      "tipo": "hotspot",
      "contenidoVisual": "jabon",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p05",
      "descripcion": "Alguien apretó una llave contra el jabón para sacar un molde. Una huella es como un espejo.",
      "instrucciones": "Pulsad la llave que dejó la huella.",
      "documentos": [
        "d07"
      ],
      "huellasRespuesta": [
        "346d0104069f36f29254fd1c50808167bc77390c6ebca5f84e7a3e04828e6a4b"
      ],
      "pistas": [
        "dc1:cF0PFgJEWFZDXgdCRUJaBBcKUl5TBAEQAFMRXl1LFAJfXVRbQlJaVw0QVRZPQkIPCRhQRU1eC0o=",
        "dc1:dlxCAw8WU1MB8dUMFVxUQg4IV0FSRRZRCFMRVlNcVUFaUhdCF1NfRgJeEAkCQlQABF1LBBhBEQFVB0RQGF1UEVdXEAMAXlgcQ34DB1EQWQ0RRFJeUgsRVRcWVF9CXU4AWFdYFAhDXUYMRFFFDwMXAgdaVB9ZHEQHXgsLEV1fFV1SQUIKD1dPVxASAgcVUVcDCAsY",
        "dc1:YFtCCgIWVVegmw8RFVRQQgseR0JeABdUBRZQElZdRgRVW1YUEV9dEgcFQgkGQlsARk5EAFREBUgRCRcRS1BZVBNeA0ZQBg4IQ1cVQkBeVEIWFldaRwRL"
      ],
      "solucionDirector": "dc1:f1ehywdXGVYGQQIHFVxUQgEFVFJNBEUYAUVF8ZMYUQ8WVkREB1xcG09EXARDCkIEClRQRUxZAQpURgheSxFRWFZcFgMQFgwfUR9STwQdBlhCCFcXWwkERgEWVVcSVFVBVVJdXRZXE1yh3hBUVEIfBQn7gAQYZg0HRQkWWFkYGxF/U0JVUwEZUQxbCAFcVFBCEQtaWBcWDBAKWRFBVxhdD0BaUkYWUx0=",
      "exito": "dc1:f1NCCg9XT1dDVgNCWVEVAQMOX0NWRQvy3hYABR4YWAAWV1IUBlnwgwJEZgwAFlgTD1kfRXlcAxFYAwoRXUJB8pISAQkTX1hcB11GDlRDFQ4OBUBSREUBVURaUBJRWV4AFldSFAFXRlYCCFUWQw9eBAhMQwRLEBcRQkYARF3yhF5AEgYTBkRUVw0cRjJUQlRCBgtEWl4XCV8XFllTUV0UB1dfQ1VCV19VDEgQHEMHW0ECV1IRV0JEEFgDClQYRFsRV1sRFgZYSlMRWwlM",
      "escena": [
        {
          "texto": "dc1:cFoLFxZfGUIMXANCWVEVEgMXQl5bCQQQBldbXRJUVUFa8JZZEldBU0MdEAkCQlAIFFkRAV1DFAVSDwsfGH1UEVtHBwoPVxlXEBIKC1hAXANYRFdbUBAMVQoWUEJAXUCihRNbVUJaX1MVARAGDAwXAhNRVQRcX0hERAgFEUteWVATRAccTxZAEg9TRhFQU/bRQgBTREcQppkXGA==",
          "visual": "jabon"
        },
        {
          "texto": "dc1:ZlwDRg9aWEQGEgMMFVVGEgcOWRkXNBBZAVgRXl0YXAhMXBdAB1jwnwJEXARDDlsAEF0RAV0QEQoRDhHykUJFVFcSBgkRW1BWDBIDDBVFWwNCCVdZWEUcEBBZVV0SXVhBQlpSWRJZE1YGCBAIFgxTDkZdX0VUUUQLRRQFHw==",
          "quien": "gismera"
        }
      ]
    },
    {
      "id": "p05",
      "fase": "II · La lencería",
      "titulo": "Dracmas y escrúpulos",
      "tipo": "codigo",
      "longitud": 1,
      "obligatoria": true,
      "puntuacion": 50,
      "siguientePrueba": "p06",
      "descripcion": "El doctor rotula sus frascos como los boticarios antiguos.",
      "instrucciones": "¿A cuántas personas se puede dormir con lo que falta del frasco sin apuntar?",
      "documentos": [
        "d08"
      ],
      "huellasRespuesta": [
        "d0239ed294fd66c623001fbecd4d11dd46c11e379de596f22884ee897f628231"
      ],
      "pistas": [
        "dc1:ZlxCABFXSlEMEhUHFV1cBgdEU1kXAhdRCllCElNNWhBDVhdHBxZBXRcRXABDB1lBAkpQBlVRF0oRNgVCWVVZXhNGDQIMFlgSD1NGD1xDWANCCVNTXgEEHg==",
        "dc1:f11CFxZTGVQCXhIDFUNcDEIFRkJZEQRCRFNCEl5XFBBDVhdcA1TwnwJEVQlDBvTMBxgASRhdAQpeFURdVxFERFYSExMGUlgSBl5GBvadVEJTVhoXWgALXxcWXV0SSUEEFlZbFAZZUEYMFhAEExdZFaWLHw==",
        "dc1:Z2AnNUNzanExZzY3eX9mQjcqdxdzNyRzKXcRYWZ3ZEFgdn56NnMTdTElfiowQmIvRn1iJmplNDF9KURibH5lEXd9MCsqZBlzQ2coLRVzYCcxMHcXeCYtfw=="
      ],
      "solucionDirector": "dc1:BQJChOukGQBTEoTqpxANQl9EBQUXAhdRCllCEkFRWkFXQ0JaFldBCUMFEF1DBUUACFdCRUhfFkRBAxZCV19UHRMGQhYGREpdDVMVWBVcWhFCB0NWQxcKEAxD8ptBSFEFU0AZ",
      "exito": "dc1:cEcDEhFZAxIPXRVCVkVUFhALFl9CpsxDFFNVV0EWFCBaVEJdB1gTVw0QQgRDB1lBA1QRAVFDFAFfFQVDUV4b"
    },
    {
      "id": "p06",
      "fase": "III · La noche del 13",
      "titulo": "De servicio",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p07",
      "descripcion": "Quien prepara la 309 tiene que estar en el hotel esas noches. De Paco ya lo sabéis: él acompañó a los cuatro.",
      "instrucciones": "¿Qué pareja estuvo de servicio las cuatro noches?",
      "documentos": [
        "d09"
      ],
      "opciones": [
        {
          "id": "paco-doctor",
          "texto": "Paco y el doctor"
        },
        {
          "id": "julio-adela",
          "texto": "Julio y Adela"
        },
        {
          "id": "adela-doctor",
          "texto": "Adela y el doctor"
        },
        {
          "id": "paco-portero",
          "texto": "Paco y el portero"
        }
      ],
      "huellasRespuesta": [
        "0e3e169e8db083617cb38908ddf4ef31fa1c76be81b74398182e030d3cf85783"
      ],
      "pistas": [
        "dc1:f1MRRg1ZWloGQUYRWl4VDgNEBxsXCQQQUBoRXlMYA0FPE1tVQgcDHA==",
        "dc1:dl5CAgxVTV0REggNFVVGFhcSWRdTAEVXEVdDVltZFA9fE1JYQgcTXApEVQlDVRk=",
        "dc1:clYHC6CXShIHV0YyVFNaTkIXWVtYRQFfFxZBV0BLWw9XQBdAC1NdVw1EXAQQQlQUB0xDChY="
      ],
      "solucionDirector": "dc1:eUcODwwWEQNPElROFQQZQldIFgAbRV0cRAcBHhIJBUgWShd1BlNfU0NMAUlDVhtBUxQRUhQQXUgRV1QYFhFlUFBdQhICW1tboJsIQlBDQRcUCxZbVhZFUxFXRUBdFBQRU0FYFAxfXVUWClFFDBZFAEZIUBddWgVEVQNEXVlCFV5DUQsJDVNKEhVTCgcPEFAOQgBZVEMKFxACV11eUxhRDRYCF01CU18SVF8QAA9CRw4UTFQXVxxEAV1GUBFBEVBdEwNSSA==",
      "exito": "dc1:eUcODwwWQBIiVgMOVB4VLgNEWFhUDQAQAFNdEgMLGEFSVhdTF1dBVgoFEAANQlINRk5UFkzzyQZECgsdGF5GEVVbCKXCX0oSBlxGA1lXWkIQBURYFwALEAFaEVFHWVATWRNTUUJaX1MVAUNL"
    },
    {
      "id": "p07",
      "fase": "III · La noche del 13",
      "titulo": "Fichas rojas",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p13",
      "descripcion": "Alguien deja recados en el cuadro de llaves. Las fichas rojas están numeradas.",
      "instrucciones": "¿Qué palabra dicen las fichas rojas?",
      "documentos": [
        "d10"
      ],
      "huellasRespuesta": [
        "4a9cca653511044ed19c98b2d51c6f09e4981d8ea00426a56ee7fc33f074b566"
      ],
      "pistas": [
        "dc1:f1MRRgVfWloCQUYMWhBQERanl1kXBgpcA1dVU0EYVQ0WUk1VEAwTUQIAUUUWDFZBBU1UCV9RRABURhFfGF/2i15XEAlPFkASD14DFFReFREXREZFWBUMX0RZQ1ZXVho=",
        "dc1:cEcDEhFZGVQKUQ4DRhwVARcFQkVYRQJRClVZXUEWFC1XE0dYA1hHU0MKX0UAF1IPElkLRVtFAQpFB0RdVxFERFYSEQ8EQ1wSAhIKAxVAWQMMEFcZ",
        "dc1:fGAmIy0WfXdDficxFXZ8ISolZRdkMSpgRHJ+YRJ7fSdkcmQUJnMTcSIgcUUkI3kiLncRNmx/NERyJyBwGH9gfHZgLUY2eHgSL3cyMHQQcScuRHd7cSQndTB5"
      ],
      "solucionDirector": "dc1:dVsBDgJFGQNDU0ZWFVVbQg4LRRdQBAtTDFlCEgMIA00WAgcFThYBA1FESUVRUgZbRg8cVBUBVkkARlkRfxF0EX8SI0hDc1USBF0KElAQRgcQp5cXUxAXUQpCVBJeWRQGV19WFAZTXxJSUR4=",
      "exito": "dc1:dHMuJ00WfF5DVQkORVUVEQcW9ZYXAAkQAPWcUxIJAU0WV0JGA1hHV0MIUUUEA1sAShhSClYQCAVCRgdEWUVHXhNeDgcVU0oSAF0WC1RUVBFMRHNEVkULXwdeVBJeWRRSBgoXWg0WQFdDEUMEWUJWDQFNWABWEAsXEQ4FEU5YRkVcEgYDQ1FMUxFWDwMbEGUHEAsWX1YcRVwNVENdQRhFFFMTWVtCRVYSExFVAQYMFwAVTUIRWUJK",
      "escena": [
        {
          "texto": "dc1:fV0BDgYWXVcPEhWhlFJUBg1EBwQZRSBcREBUQUb7mQNDX1gUAxZeVwcNUUUPF01NRl1dRUpVCAtbRgBUGEFUQ1ZWTkYGWhldD10UQlQQQQMABVVYFwMX88lZHxJ1UUcMU0FWFA5TVhIGChAQDQMXAxNMUAZZEAABEQMXQVldUVBAEgMKQ1tWQRdABwZaQg5CIQxfRkIMSRAAU0VA8ZlHQVJWF0EMVxNRDAhFCA0DG0EIVxEJXVVEClACBR8=",
          "imagen": "img-recepcion"
        },
        {
          "texto": "dc1:chIOBxAWCwFZB1ZOFVNAAxYWWRdRDAZYBUURQF1SVRIWUEJRDlFSXEMAVUUAF1YVFFcRAlleBwxeFUoReRFZUEASUlZZBwkeQ1ETA1tUWkIHCBZdUgMAEABTEVxdW1wEFkVCUQ5AVhIHARCnyAZWE0ZNXwQYRhEBXRIF84MdFV9cEgETBlpeUw0SAgcVXlwMBRFYWBk=",
          "visual": "cuadro-llaves"
        },
        {
          "texto": "dc1:dHMuJ00Wd10QEg4DWxBDCxEQWRsXIgxDCVNDUxwYcRJCUhdaDVVbV0MKX0UQF1UERlZQAVFVRAURCgURCwEMHxNiBxQMFkhHClcIQllRRkIBC1pQ9NZFQwVU8p9TGEUUUxNWWAVDWlcNRFkHAkJWQQpdVBdUURdK",
          "quien": "chiqui"
        }
      ]
    },
    {
      "id": "p13",
      "fase": "III · La noche del 13",
      "titulo": "Veinte minutos",
      "tipo": "diferencias",
      "obligatoria": false,
      "puntuacion": 70,
      "segundos": 60,
      "siguientePrueba": "p08",
      "descripcion": "A las 23:50 Chiqui fotografía el cuadro de llaves con la cámara del director. A las 00:10, cuando el jefe de noche vuelve de «dar una vuelta», lo fotografía otra vez. El magnesio ha despertado a medio vestíbulo: tenéis un momento, con las dos placas aún húmedas, antes de que alguien pregunte qué hacéis.",
      "instrucciones": "Pulsad en cualquiera de las dos placas cada cosa que cambie de una a otra. Son cinco.",
      "documentos": [
        "d10",
        "d18"
      ],
      "config": "dc1:SBAUDxBDWF4iEFxAVkVUBhALG1tbBBNVFxQdEERRRxRXX3UWWBRQRwIAQgpODlsAEF1CSExRFgBUREgTSERbRVxBQFw4TRtKQQhRUhkSTEBYVQ8AG0cXEl4CAU8eQxYZFAkDAlQaEUtBXgFcVE4VE0QCBVVFHB9GSUReBgEHGRNKEFhSVQEVEBEQXFYFTRkZQBwUDQBVSRIdFAsGBA8YQ0QRDQBSSx9JQRwSX1JVB01EQRNfDgRWSBMURgsMBEhsTg==",
      "pistas": [
        "dc1:f1MRRgVfWloCQUYRWl4VDg1EUPSWBgxcShZ8W0BZUEFCUlpWC/WaXEMIUUUFC1sARlxURVlSBQ5eSkRdWRFERFYSDAcHX1wSDlsUAxs=",
        "dc1:ZlwDRg9aWEQGEgIHFUNQEBQNVV5YRRRFARZSXV5fVQNXE1YUDldAElFXClBTQk4ARlZeRVtFAQhWB0RQGF1UQhMCUlxSBhcSLlsUA1EQUQdCFUP0nkUCUQpVWV0c",
        "dc1:cGcjMjF5GXQqcS4jZhBmNi00FmJ5JEV8KHdndxJ8cUF3cXZ+LRZgZiw0ECkiQnMkRnRwNhh3KzBwNQ=="
      ],
      "solucionDirector": "dc1:cFsMBQwWWlMOUA8NRgoVDgMXFlRCBBFCCxZXW1FQVRIWQVheA0UTGgIMXxcCQlUNB1ZSBEsZRB0RCgURVF1UR1YSBgMPFl1bEEIDDEZRRwsNSBZGQgBFWAUWQlNeUVAOFldSWEJRUlwADF9FBwcXEgNKRwxbWQtKESMKEV1CWkITRAcPDUJcEg5bCBdBX0ZCEQtaWBcVBEMFRF5cEkhbExZXUkAQ9ZJBQwBVCUMPWBISSlABV0JEAV1GDlReVBVVVhIMCQBeXBIaEgMOFVJaFg0KU0QXBgpeRENfUxJaVQ9SVl1VTA==",
      "exito": "dc1:cFsMBQwWWlMOUA8NRhBQDEISU15ZEQAQCV9fR0ZXR08Wf1ZHQlBaUQsFQ0UQBxcJB1YRDFxfSERIRgdeVhFQXV9TEUYWWFgSD14HFFAQUQdCCFcXUQwJUURSVBJBXUYXX1BeW1gWX1NDAFUJQwZeEhZdXxZZQg0LH0YhQkxQFV9cUQoDQ1hWEhBHBAcVXlQGCwEWVhcJBBBXBggSSxQUAENdF1UR9Z4eQwVcAhYLUg9GUFBFSFEXBVUJREFXQxVdUkFCAQxCWEFNEjYNRxBRBxYW9ZZERQFVCBZcXUFMRgBSXEUYQlNdEgYXXxZDFFIICExURVVZChFFCRcdGEFUQlJADQhDU1USCVcABxVUUEIMC1VfUklFVQgWU11GV1oERRNUWwwWRlwCRFIEDQZSCwcYSEVWUQANVEYJ8plCGw=="
    },
    {
      "id": "p08",
      "fase": "III · La noche del 13",
      "titulo": "El montacargas",
      "tipo": "codigo",
      "longitud": 1,
      "obligatoria": true,
      "puntuacion": 50,
      "siguientePrueba": "p09",
      "descripcion": "Un huésped dormido no sube tres pisos andando. El maquinista apunta el contador cada noche; qué noche fue la de cada huésped lo dicen la cronología y sus recuerdos.",
      "instrucciones": "¿Cuántos viajes de más hizo el montacargas la noche en que doña Victoria durmió en la 309?",
      "documentos": [
        "d11",
        "d02"
      ],
      "huellasRespuesta": [
        "8a38674658886a4be5e448a67a9ef9619ed0918c48031beeb2193221ff7e33d5"
      ],
      "pistas": [
        "dc1:Y0ALCwZEVh5DQxOhnBBbDQEMUxdREAAQCFcRQUdBVVsWX1YUAURcXAwIXwKgz1ZBClcRAVFTAUoRIgFCSET2mEAeQgMPFlpdDUYHBlpCFQYHRFNEVkULXwdeVBw=",
        "dc1:dl5CBQxYTVMHXRRCVkVQDBYFFlZFFwReFUNUQR4YWg4WQ15HDUUdEjYKUUUNDVQJAxhCDFYQFwtfpcVcWkRZXkASCgcAUxlWDEFKQllfRkIGARZbVkUXXxRXEUFHW10AGA==",
        "dc1:fX0hLiYWfXcvEiIrcGoVMTYrZhdlIDZkJXIRfnNrFCV5YBd4J3VnZzElY0UwNngxRmlkLGxxIER9KTcRfH5mEXd3QioiFmt9M3NGMWBzfCM="
      ],
      "solucionDirector": "dc1:BwNMVVAGGdDroEZWBB4GUFBECxcPRRNZBVxUQQkYWA5FE1lbEFtSXgYXEBYMDBdTXBgHRVxVRAnyxxcfGHVQQldXQgMPFkrx0EYHDFoKFREXBl9FFwRFQgFVXlVXShQAFldY99NXE2QKB0QKEQtWQQcYXQQYQAgFXxIFEVpQX1AfEhETAV9LXgISB0JZURVRUl0WThcBAEYLWkdXQBhYABZQVlYLWFISAggQFqDRQwAIVwpFWVxEBVwHClRbVEcdE0EXBApEGVNDXgdCBgAMTkIGV11WFwlRRFcRQUcYRA1XXUNVQk8TRAwIRgARQlYNRkvy1kxRCgsf",
      "exito": "dc1:YFcLFUNAUFMJVxVCUVUVD6HFRRkXNQRTCxZfXRJdWgJZXUNGA1RSEgJEXAoQQkQOCPuQCFpFCAtCRhReShFQXRNCAxUKWlVdWRIKDUYQRhcAp5tWFxxFXAtFEVBTUlUDVx0="
    },
    {
      "id": "p09",
      "fase": "IV · La caja de caudales",
      "titulo": "Las tres de la madrugada",
      "tipo": "dual",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p10",
      "descripcion": "Las cajitas de los huéspedes dormidos se abrieron de madrugada. Gismera tiene el libro de la caja; Chiqui, las rondas, el sereno y el libro de recepción. Ninguna de las dos partes se resuelve con un solo libro.",
      "instrucciones": "Resolved las dos partes. Cada una necesita lo que sabe la otra.",
      "documentos": [
        "d12",
        "d13"
      ],
      "pistas": [
        "dc1:f1NCBQJcWBIQXQoNFUNQQgMGRFIXAQBDAFMRVldMRqKXQBdQB1oTXwwXRBcCBlgTSBhoRVtRAAURBQVbUUVUEUdbBwgGFl1HBvHXDRVVW0IHCBZFUgIMQxBEXhw=",
        "dc1:clYHCgIWXEEXUwQDFVNaDEIIVxdSCwNVFltUQFMYUQ8WX1YUEkRaXwYWUUUTDlYPElkKRWhRBwsdRgVDSlhXUB0SI0YPV0oSUwFcUAUQRgdCBVRFXqbWEAhXEVFTUl0VVxNTUUJaUhIQAfPUDBBWQRdNVEVbVQoFEQMKEUtEFVJGUxASDBg=",
        "dc1:YH0uKUNzdRIpdyAnFXRwQiwrdX9yRSB+RGR0cXdodyh5fRdnNnljEilEckUwNngxRnRwRQkHRCFiRihwGGJw8qJ9MCdDcnwSL3NGUwcC"
      ],
      "solucionDirector": "dc1:eUcODwwMGV4CQUYDRVVHFhcWV0QXFgpeRFNfRkBdFFEFCQcBQk8TAlBeAlVPQlQUB1ZVChhVCkRDAwdUSFJc8oBcQhUMWlYSBkESA1dRFaHLCA0XUQwXXQUWexwSehpBd1dSWAMWW1MAp50EQw5WQRRXXwFZEAcLX0YIUBhUW1dWQA8DEVcCEjNTBQ0VVUYWAwZXF1YXF1kGVwoSV1QUBVlQQ1sQFl1dQwFDEQIAVkEDVhEXXVMBFFIPp4JWHw==",
      "exito": "dc1:eUcODwwWe1MQRgcQR1lWA05ERVhbCkVVChZDV1FdRAJf8IRaThZSUBGnnQRDDlYSRltQD1FEBRcRB0RdWUIVRUFXEUYTV0tTQ0IUDVdRR0IOBUUXWwkERgFFEVFdSF0AUlJEGkJzXRIPBRAGCwNGFANMUEVcVQhEUwkQXlZURhFSQgMUBlVcEhZcB0JbX0EDQhVDUhcLBFQNUxFXXExdBFhXUho=",
      "partes": {
        "gismera": {
          "titulo": "La firma",
          "tipo": "eleccion",
          "instrucciones": "¿Quién abrió las cajitas de madrugada? El libro de la caja da las horas y una firma; quién estaba dónde a esa hora lo tiene vuestra hermana.",
          "documentos": [
            "d12",
            "d13"
          ],
          "opciones": [
            {
              "id": "julio",
              "texto": "Julio Bastarrica"
            },
            {
              "id": "adela",
              "texto": "Adela Urquiza"
            },
            {
              "id": "paco",
              "texto": "Paco Arana"
            },
            {
              "id": "doctor",
              "texto": "El doctor Ibarguren"
            }
          ],
          "huellasRespuesta": [
            "6bdff1b79ffa0ea74346bf404442035f560d964f20fa47403e17fe34a9db036c"
          ]
        },
        "chiqui": {
          "titulo": "La llave del cuadro",
          "tipo": "hotspot",
          "instrucciones": "El libro de la caja, que tiene vuestra hermana, dice qué cajita se abrió a las 03:20; el registro de huéspedes dice de quién es. Pulsad en el cuadro de llaves el gancho de la habitación de esa huésped.",
          "documentos": [
            "d13",
            "d03",
            "d10"
          ],
          "contenidoVisual": "cuadro-llaves",
          "huellasRespuesta": [
            "68f47b035822b682bfa430edb26dd4aaa9fb04158fd6ec5a3e1ccf2366aa2db4"
          ]
        }
      }
    },
    {
      "id": "p10",
      "fase": "IV · La caja de caudales",
      "titulo": "Una hora y cuarto",
      "tipo": "hora",
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p11",
      "descripcion": "Medio hotel culpa al hipnotizador. Su cartel dice cuándo acaba de trabajar.",
      "instrucciones": "¿A qué hora termina la última función del Gran Morfeo?",
      "documentos": [
        "d14"
      ],
      "huellasRespuesta": [
        "ba80c40428bed73ab5a728b5d3e3fa995ee8f9131dee9160fc6f7c3847e5973e"
      ],
      "pistas": [
        "dc1:f1NCFQZRTFwHU0YEQF5WC6HXWBdSCBVZAUxQElMYWABFEwcEWAUDHA==",
        "dc1:d0cQB0NDV1NDWgkQVBBMQgERV0VDCks=",
        "dc1:AwJYVVMWVPHCQUZTDwEATA=="
      ],
      "solucionDirector": "dc1:AwJYVVMWEhJSCFdXFQ0VUlNeAgIZRSFVF0ZE8ZtLGEFbRkQUAVldEg8FEAoRE0IEFUxQRVBRFxBQRghQSxFGVFpBWEYNWRlCFlYJQkZFVwsQRFcXWQQBWQEWUBJeWRRSBgoZ",
      "exito": "dc1:chIOB0NDV1NDS0YBQFFHBwwQVxdORQZZClVeCRJUQQRRXBsUD0NAEgALXkUPAxcOFElEAEtEBURZBxdFWRFZUEASEQMKRRcSJl5GJUdRW0IvC0RRUgpFXgsWVEFGWVYAFlZZFA5XE0YGFlMAEQMXEQpZXxFZHg=="
    },
    {
      "id": "p11",
      "fase": "IV · La caja de caudales",
      "titulo": "Jerigonza",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p15",
      "descripcion": "Paco escribe como jugaba de niño, en la escuela. La nota dice dónde están las llaves copiadas.",
      "instrucciones": "¿Dónde están escondidas las llaves?",
      "documentos": [
        "d15"
      ],
      "huellasRespuesta": [
        "28c75a8ca8fb095b9e36d672563daa948f353e39dd621e89646dcc71906c818d",
        "ab1c385e1b6f5afabd98f3b120e98bd31d4277a6023d316e06bc6b26785bd2d1",
        "bd391a990c50ee946997409e077cd802f49fe03828da41cc5923278052685359",
        "ab04762187faa5aa6bef9e88d28c3e44fc12bfd8498485361abdc5f923b0210e",
        "9ae7828567d23d8b163a42ebf7853e1ecaab15fb65f992b152f7e0cb7d133fc8",
        "4d9129326c44c4c6f8bf7847ac0b05dd64fa826a59fac4d6df91a81ae5776cbe",
        "acf9474c6b362429d49952fe15eb6ee2c179238658b74048230288db2799ef52",
        "6a2214f9717de49e8608ff966ea7528fe24cec392f88139fda742ba04f0feb4b"
      ],
      "pistas": [
        "dc1:YkcLEgJSGV4CEqTJRfKOQhMRUxdEDAJFARZQElFZUAAWQPSZDldRU0MdEAkMQkYUAxhdBBhRBwtcFgXyiVAPEV9TQhAMVVheQ0ADElBEXAYDRE8bFxYMEAhXEVpTQRhBWlIXVw1YQF0NBV4RBkJRCAhZXUs=",
        "dc1:8ZknCBNTV/DYEgMRFfKeBwymjQwXp85VCEZUXvCDGEH0mFJYoI0d",
        "dc1:f1NCEgZEWlcRU0YSVFxUABAFFlJERaebBlfyiF76j08="
      ],
      "solucionDirector": "dc1:8ZknCBNTVxIGXhYHWRBXAxIF9Y1bFRBcRFJUXkJdWEFbUkdVBVlDXU1EYRAGElIMB0hQRV1DFAFCEgVBWRFbXkNdFgcTVxfw2BKE5KcQ98knChZSW0UHUaeMXRJWXVhBW1JQW0wWYkcGCVFFBhFDAEZWXhFZHqbfESoFQhhdWVBFVxFGBkVN8cJcRgdbEFAOQgZX9I0JRVQBWhF1QFlaQXtcRVIHWR8SEwVCBEMBVhMBWUMJXRAIBUJGB0RUQVRCHQ==",
      "exito": "dc1:8ZknCENTVRIBU6XYWRBRBw5EW1ZQCksQNUNUX1MYURJCUhdaDUJSHKHfEDUCAVhBCFcRCVkQFRFUC6eCFhFwXRNQA6XZWhlWBhIDEUFCUA4OBUUXUwAJECNEUFwSdVsTUFZYFAdFR/HCRFULQxFCQQVZXABKWQoLHUYAVExD9pBAEgYDDxZKUw/x1QwZEExCAwhRQl4ACxAVQ1RA8ZVVQUdGUhQHWhNRFghABAEOUkEATVQXWRABCBEODUFWXkFYSVMGCREY",
      "escena": [
        {
          "texto": "dc1:8ZknCENTVRIBU6XYWRBRBw5EW1ZQCksQNUNUX1MYURJCUhdaDUJSHKHfEDUCAVhBCFcRCVkQFRFUC6eCAhFZUBNWDQQP9YoSBlxGAUBRQRANRE8XWwRFVxFXQ1bxixQEWBNbVUJVW1MSEVURAk4XAglVXkVfRQUWVQcKEVRQRhFQXREHEBZVXRASFxdQEFsNQhVDXlIXAF5EXlBRV0pYAEUd",
          "imagen": "img-paco"
        },
        {
          "texto": "dc1:dl5CBQJbXEAKXAlCUVVZQiUWV1kXKApCAlNeEldLQKKXE1NRFkTwkxBEVAAPQkQACvuCCxQQDhFfEgsRWRFZUBNCFwMRQlgSB1dGEVBCQwsBDVkZFy0QVQhTEVMSWkYIWl9WWhZfXVNDHRAEQwFSEwcWESBWEAEIEQUBX0xDWh0TRwxGAVf6iA8SCAdSQlpCARFUXlIXEV9EUlQSV0tAE1NfW1URFldXQwdRFxehhA9GXF4XWVQLSg==",
          "imagen": "img-salon"
        },
        {
          "texto": "dc1:Z0AHFUNETFcHUxVCVl9bQgoLRFZERQBeRFpQElFdRhNXV0JGAxgTcQsNQRAKQk4ARl1CEfuRRAlYFAVfXF4VQVxAQgIGVFhYDBw=",
          "quien": "gismera"
        }
      ]
    },
    {
      "id": "p15",
      "fase": "IV · La caja de caudales",
      "titulo": "El baúl de estrellas",
      "tipo": "cerradura",
      "obligatoria": false,
      "puntuacion": 80,
      "segundos": 60,
      "siguientePrueba": "p12",
      "descripcion": "La nota dice «en el baúl del mago». La comisaría no vendrá hasta las nueve, y si el baúl no tiene lo que decís, mañana el ridículo será vuestro. Madrugada del 14, las dos: el Gran Morfeo juega al mus en el bar con la orquesta, el camerino está a oscuras y el portero pasa por el salón cada cuarto de hora. El baúl cierra con una cerradura de relojero: tres ruedas con horas. La hoja clavada en la pared dice de qué horas se trata.",
      "instrucciones": "Girad las tres ruedas hasta las tres horas de la noche del Gran Morfeo y abrid el baúl antes de que vuelva el portero.",
      "documentos": [
        "d17",
        "d14"
      ],
      "config": "dc1:SBAQEwZSWEFBCD05FwIEWFJUFBsVV1cKVAYTHhAKBlsFAxUYQAQACFNUEklBUARbVQgTSRoAVF4BVkZsFGoXAwAIUVZBGhsCUwhWUhccF1JSXgUHFUlHAFUMAQIQFBZRBwkEBEAaEQJRXgBVQT8bOkQIAF8IAEZIE1ZVCwkEFx0RAlNcUAYbHkECV1gBBRdOQFQEDQdVRxxGBgcIAggWPGtO",
      "huellasRespuesta": [
        "b33e26eb7cc79a3c9748e7c4f199f655f45e07bd3934eb89af8b3680357757e0"
      ],
      "pistas": [
        "dc1:8ZkhEwJYXV1DQRMAUBBQDkIQU1v01gvy3wwRXlMYXA5EUhdQBxZfU0MUQgwOB0UARl5EC1tZp9dfRgFCTPKUEVZcQgMPFlpTEUYDDhsQeQNCF1NQQgsBUUReXkBTFBQVV15VXaGfXRw=",
        "dc1:f1NCEgZEWlcRU0YKWkJUQgwLFlJEEaaRRFNCUUBRQAAWVlkUDF9dVaDeXkUQC0MICQIRAEsQBxFQCABeGFBWUFFTQgoCFkpXBEcIBlQQUxcMB1/0hAtLECxXSBJDTVFBRUZaVRBaUhw=",
        "dc1:d3snPENvGX8mdi8jFWNhLTJEcnh0IEVpRHt0dnt5FDJifGcUN3hyEisrYiRDOxciM3ljMXcQKSViRjdld2EVf3wSLicwFmp3KmE="
      ],
      "solucionDirector": "dc1:Y0ALCwZEWBIFRwgBXPOGDEJWBA0EVUkQF1NWR1xcVUEGAw0HUhoTVAoKEAEGQlsARktUAk1eAAURVlQLCwEVGhMDWFdWFgQSUwNcVgAQHQ4DFxZEUgwWEAFFEVdeGFIIWBNTUQ4WXkcQSBALDEJTBEZLREVWXwcMVE9KEXteWFNaXAMFCvWKXEMAVFgGABhSUl4FBxpVVApQAx8=",
      "exito": "dc1:f1NCEgZEWlcRU0YQQFVRA0IMV1RSRQZcDVURSxJUVUFCUkdVQlVWVgZKECcCCFhBCllCRV1DEBZUCghQSxFRVBNRAxQX9YpcTxIDDhVUWgAOARZRWAsBX14WUkdTTEYOFl9bVRRTQBIHARAJAhb00ggYQgxWEBQRXQ8WHRhEWxFVQAMVAFkZQgZDEwf2gVpCAQtYF1IJRUMBWl1dElxRDRZXXkcSU11BAhZZCkMbFxQIWREJUUMQBREDChFIUEVUXxIGA0NEXFEGQgUL9oNbTEIoWRdTAA/zxV9CEkZXUA4WUFhZDRZWQRcFUgRZQkcOFBhdBBhdBaeABwpQGF1aEVJQEA8R9ZgSD1NGAVpdXBEDFvWaVkUBVQhXX0ZXGFAEFkdSRxZfVF0QShAgD0JHDhRMVBdXEBQFQgdEQlFdV1BdVg1GAloZXRdACUJZUVENQgBTF1sERUARU0NGUxY=",
      "escena": [
        {
          "texto": "dc1:f1NCEgZEWlcRU0YQQFVRA0IMV1RSRQZcDVUfEn5ZFBVXQ1YUAVNXV0MHXwtDF1lBFU1CFVFCC0RVA0RTUUJUVkFTEUYVX1xYAkFGGxVcVBFCAUVDRQAJXAVFEVZXGFcAREf0hwwWV10RBVQKQxZeBAtaXQRWEAEKEQoFEVdCVkRBWwYHBxZdVw8SBQNYVUcLDAsY",
          "imagen": "img-salon"
        },
        {
          "texto": "dc1:cVMICUNTVRIFXRQQWhBRBw5EUFhZAQocRENfUxJMVQNaUhdHF1NfRgJKECEGAFYLCQIRBk1REBZeRghdWUdQQhNWB0YPV03x0FxGEVxeFRIXCF9FG0UQXkRQQ1NBW1tBRlZGQQf1gl1DB18LQwdbQRVdXQlXEAABXUYAWEtBUF9AUxAPDBZAEhZcB0JdX18DQgBTF0cEFVUIFlVXEkpRAlNDVF2hhV0SAAteRQAXVhUUVxELV10GFlQVSg==",
          "visual": "jabon"
        },
        {
          "texto": "dc1:f11CAgZcWF8MQUYWWlRaQgELW1gXABZEBVRQEksYRRRTE1tbQldRQAJEXARDAVgMD0tQF/udBURQRghQSxFbRFZEB0pDVVZcQ0YDEUFZUg0RShZyRBEEEApZUlpXGFoAUlpSFBFTE1cNEFUXAkJTBEZJRAAYWAEJXhVEVEtFVFVcEgMXFvWUHEN8D0JQXBUSDRZCUkUKSw==",
          "quien": "gismera"
        }
      ]
    },
    {
      "id": "p12",
      "fase": "V · La acusación",
      "titulo": "Quien preparaba la 309",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 200,
      "siguientePrueba": null,
      "descripcion": "Una copa, un montacargas, un molde de jabón, cuatro llaves y un baúl ajeno. Uno lo pensó todo; otro obedeció.",
      "instrucciones": "¿Quién está detrás de la habitación 309? Si os queda alguna duda, el Interrogatorio sigue abierto.",
      "documentos": [
        "d16",
        "d12",
        "d09"
      ],
      "opciones": [
        {
          "id": "julio",
          "texto": "Julio Bastarrica, el jefe de recepción"
        },
        {
          "id": "paco",
          "texto": "Paco Arana, el botones"
        },
        {
          "id": "adela",
          "texto": "Adela Urquiza, la gobernanta"
        },
        {
          "id": "doctor",
          "texto": "Ernesto Ibarguren, el médico"
        },
        {
          "id": "morfeo",
          "texto": "El Gran Morfeo, el hipnotizador"
        }
      ],
      "huellasRespuesta": [
        "8e925e786351a6e483b33ca120e44d2d192367d3abb46f71da99ad8c4ecfc1ca"
      ],
      "pistas": [
        "dc1:Y1MBCUNFTFCgnwdCTBBXAwgFVFYXBEVcC0URWkf7nRJGVlNRERoTQgYWX0Wh3UYUD/uYCxhRBhbyywURVFAVUlJYA1k=",
        "dc1:f1MRRgJGXEAXRxQDRhBRB0IJV1NFEAJRAFcRXl5dQgBYE1tVERZaXAoHWQQPB0RBLBYRJxY=",
        "dc1:f1NCCgpFTVNDVgNCWVEVBQMIVxdSFhHzxRZUQVFKXRVXE1JaQkZSQgYIEAEGQkUEBV1BBlHz1wof"
      ],
      "solucionDirector": "dc1:eUcODwwWe1MQRgcQR1lWA0xEc1RfBAdRRFNCUV1IWw1XXl5aAxZXVw9EVAwQElIPFVlDDFcQTAdEHwURVF1UR1YSBRMCRF1TAVNPQlBeFQ4DRPWNWxEMXQUWUl1CWRQFUxNbWxEWW0egzUMVBgZSEkZbXgsYUwUOWBIFChhhVFJcEg4JEBZKRwHxywMVVVtCBwgWWlgLEVEHV0NVU0sUABZfVhRRBgoJQy5FCQoNFxIHW1AHWRABCBELC11cVBVVVhIOB0NaVVMVV0YHWxBfAwCnhVkXHEVAFllTU1BZFA1XQBdXDUZaUxBEUQcRC1IPAlcRCVlDRAdQDA1FWUIVUBNeAxVDQktXEBJOKBsQd0xLShZ+VQRFUURAUFFbWUYNV0AXUQwWX1NDA1EJAkJTBAoYAFAYSUQHUBQDUEpdUBFWXkIUDFRWEgISKw1HVlANQgFFVFgLAVkBWFVdElRVEhZfW1UUU0ASBgoQFhZCVQClgl1LGGAFB15GAUIYUvaCXkIODwBTAhIiVgMOVBwVBw5EUlhUEQpCRE8Rf11KUgRZHxddDFlQVw0QVRZN",
      "exito": "dc1:eUcODwwWe1MQRgcQR1lWA0w="
    }
  ],
  "epilogo": "dc1:eUcODwwWe1MQRgcQR1lWA0IKWRdbABNRCkLygRJUVUFAXE0aQnNAURYHWKbQQlsARlRYFkxRRAFfEgFDWRFWXl0SDgcQFlRTDV0VQlZCQBgDAFdEFxYKUhZTEVdeGFkORUdFVQZZQR5DB18IDEJECEZUVEVUVR0BQwcKEU1fVBFBVwEKAltYUQrx1QwZEExCDhFTUFhFFVkAX/KBEkhRE1taRFtCRlJAAkRTCg8FVhNGVFAWGFwIBUcDFxFcVBVdUhIMCQBeXBIGXEYRQBBGCxYNWRkXNQRTCxZIUxJQVQP1nlYUAVldVAYXUQEMQkMOAlcdRV1eEBZURgjymVZHWF5TEUpDU1cSBl5GAUBRRxYNRFJSFwkEEAhTX1FXSvfMVx09Pi5XE1UCCFFFBwdbQVcNERZdEAcBXQMGQ/uCFUJaXEIPDVVQVgZcEgdGHhUnDkRxRVYLRX0LRFdXXRhQFEReXvfRFlISDgFUDAxCRAAK+4ILGElIRFAKRFdRX1RdHxIGAwdfWvHQEgMOFV722A8BRFgXp85RRFpeQRJcURVTUENdFFNAEhIRVUUHB0QRD11DEVleRAURCgURX1RbRVbw2UhpPGlXEV1GKEBcXA1CClkXXwQH88lXEVdeXVMIUlwXVRNDVl4PBUNFABdWFRRXEQZZWg0QUBVEQVdDFVJSQRcHD19dUwccRidbEF8XDg1ZF18EB/PJVxFXXFtbD0JBVlANFlZcQxdFRQADRAgKVFQXVxAAAV1GB15KQ1BeE1sMEgZEV11DRwhCRl9XEAdEVVhZRRBeBRZdXlNOUUFXXUNdBUNSEgcBEAkCQgRRXxQRCVkQCA1CEgURXFQVXVxBQgUWV01ADBIOF/aZRhIHAFNEFxxFVAtFUltXVkAARRNHURFTR1MQSBAGDAwXFAgYXQRbQgFEVQNEXltZWhFDRwwSAkUXEi9dRhNAVRUOB0RGVlAEB1EKFlRAUxhXDkZaVkZCVUZTFxZfRQ8OVhcDSwpFVF9EAFRGFl5aUEcRQFdCCgYWVlEWQBQL9oMVA0Knn1sZb29zEVdfVl0YUQ0WV15GB1VHXRFEUQcRC/TSRlRQFhhTEQVFFAsRW1BfWEdTEUYHU1VTDUYDQlFVFREXFxZTQgCmgQtFHRJcVxQJV1H0mQMWWV0aBUNfQwdZQQVZVQQYRQoFEQ4FU/ucVBFGXEIVDFRLV0NeBwFHUVENQgdZWRcQC1FERF5BUxhQBBZcVFwNFkNHDRBRFk1Cew4VGFIQWUQWCxEFC19MUEdeXRIOCUNbUEEOXUhCY1VHAwwBV1VWC0VVChZUXhJ5QA31kllAC1JSEgcBQwEGQl8ABfucBBhRp9VeFUgRQRFQXxMDW1RWFkxcAhIIDUFRR6HPBRZTUkUpXwNEXvGDVxQNU0AXXANU8J8CREAABwtTDkoYUgpWEBEKXhVEWVdfWkNSQAsJEBZeVw1XFA1GX0ZOQhVDUhcGBFQFFlBVXUtADhZUQlUQUlJAAgoQBBIXUg1GS14HSlVEAV9GCFAYUlRbUhIGAw8WUV0XVwpCRllbQgMGRF5FCQoeRHJUXEZKW0FSVhdYDUUTURYFRBcMQl8ABPucBBhcC0RcDxdcVwsVRF1TQhICRFNXF1NGAVpeFRcMBRZRUgYNUURTQlFAUUAAFlIXRA5DXlNPRPLOUVMXBQMYUAJXQxALEQIBEQkIBAPxiUxGJloZVgpAAwFBX0dCDgUWW1IcpoNEUl5BEk5RAlNAF01CRVYSDwUQFQIR9NJGWV1FXF8HEF4URHhaUEdWRkAHCE8WSEcGEhUHFUBAEQ1EWlZERQJRAldCEksYQABbQ1hXDRZXWwkLEAsCBlZPRnlVAFRRSERAEwERUFBX8p5TQhUWVFBWDBIFDVsQWQMRRFpbVhMAQ0gWQlcSS1UPQlpQQaGFHThpIV5FBg4XDQ9aQwoYVAFEWROnmEtBUFVWQUICBhYIC1IASkJQXBWh2AhCXloKRUERUxFWR0pZCPWAF1EMFl9TQ1cAXEMEXhML+4JFW18KRFUJFxFRX1xSWlMOAxAMGXdNEjBMFXxUQgoLXFYXCQQQB1NDQFNaVUFTXxdEA0RHV0MAVUUCE0IEClRQRVZfBwxUXERUVBFFVEFBDQgCWhlWBhIBF1RCUQsDSBZbWBZFWBH1mEFCXVAERRNTUQ4WUl4CRF4KERZSQR8YRAtZEAoLRQdEVV1dFUJGUAYPEVNaRgxAXEL3m0YLDERYWEEAAVEA9Ioc",
  "puntuacionMaxima": 1300,
  "dialogos": {
    "prueba:p01:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:cEcDEhFZGVoW8c8RRVVRBxFIFlRCBBFCCxZfXVFQURIaE1RBA0JBXUMCWQYLA0RBAl0RF11TARRSD6eCVh8VfVwSExMGFk1XDVUHDBVVW0IBC1v0jQtFXgsWQldA+5VBWlwXRRdTE0ICFlUGBkw="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:al1CAgpRVhISRwNCUEMVBw5EXl5HCwpEDUxQVl1KGkF6XBdQC1VWEhcLVApDB1tBDldFAFTS5MIRBxFfSURQEUddBglDU1USC10SB1kQWw1CDFcXWwCmnQBZEVdBTFUSFlVeVwpXQBw="
      }
    ],
    "prueba:p01:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:f10RRgBDWEYRXUYWUF72zwMKFlZbAgoQA0NQQFZZUA4WVlkUDlcTUQIOUUtDJ0QVCRhfChhVF0RCCQpQVVNAXVpBDwlPFlxBQ0cIQkVcVAxM"
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZlxCFg9XVxISRwNCW1VWBxENQlYXEAtRRF5QUFtMVQJf8IRaQkdGV0MKX0UGGl4SEl0fRX1cRABYFAFSTF5HEV1dEUYXRFhXQ1cKQkVcVAwNSg=="
      }
    ],
    "prueba:p02:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:YPHDBAJYWEFDUwoPXFRaDAMAV0QbRQZRAFNfU0EYVQ0WXENGDRZfUwcLEAEGQlsARkhQF11USERUCkRXWUNaEUNdEEYPVxlEBlwSA1tRGUIXClcXUhYGUQhTQ1MSXUcVRFZUXAPUs5RDppEgEEJCD0ZZUgBKRA0OXkYAVBhdWkITQxcDQ1tcEgRHFRZUXhQ="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dkFCEw0WSV4CXAlCUVUVU1tVBBdORQpEFlkRVlcYBVgEBhkUMlldEgYIEBANDRcSCVpDABhVCEReEhZeGEgVQlxQEAdDQ1dTQ0IPB09RGw=="
      }
    ],
    "prueba:p02:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8ZMuB0NaXFwAVxShmFEUQjtEQl5SCwAQEVgRAQIBFBFfXUNVBlkTQgwWEAEGDEMTCRQRAV1SBQ5eRgBUVBFXXVJcAQlN"
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZlwDRgtXW1sXUwUL9oNbQhERRkVeCAxUBRZAR1cYRwhRRlIUFlNdWwYKVApDAVYMBxQRCVlGBQZeRh0RUlBX8oBcTEYiWl5HClcIQllRFRELA0NSFxAWUQpSXhw="
      }
    ],
    "prueba:p02:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:dl5CAAJEVhIQV0YUUBBRBxEAUxdSCUVcBVJeElZdWEFbUkUaQnNAXUMdUUUHB0QCB0pFBBhcBURcDxBQXBFRVF8SEgoCWFYc"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ahIOB0NTSlECXgMQVBBQERYWU1RfBEVeCxZUQRJUVUFGQV5aAV9DUw9KEDMCDlJNRk5QCV0cRBdYAQsRWkRGUlJcBglN"
      }
    ],
    "prueba:p03:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:f1NCAQxUXEANUwgWVBBUEhcKQlYXBgRUBRZSU19aXQ4WV1IUEfWSUAIKURZNQmIPRlRYB0pfRABURghUVlJQQ/CfA0YGRRlHDRIFA1lVWwYDFl9YG0UWWURFUFBXSxQNU1ZFWA0Y"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:cFMGB0NCS1cQEgKhmFFGTkIHWVpYRRBeRERUXl1SGkH0jG4UB0VSEg0LRARDBlINRl5YC1lcWw=="
      }
    ],
    "prueba:p03:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dl5CFaCXW1MHXUZTBh4VoMMyV1pYFkVRRFNCRlNKFABaX/SZQlNAQgYWUQsHDRY="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZVMPCRAWWBIGQRIDRxBQDEIBWhdBABZEp5tTR15XGEF1W15FF18fEgALXkUWDBcND1pDChhJRAdQFAURXFQVUFFHEBQKUlhBTRI/QlReQQcRSBZaXhcEEAZfVFwSXUcEFllWVqGFXRw="
      }
    ],
    "prueba:p04:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlwDRhNXSkYKXgoDFVRQQggFVPSEC0VTC1gRXlMYWQBEUFYUBlMTRw0FEAkPA0EESBjzxHlcAxFYAwoRW15FWFJQA0YPWlhEBkFGA0RF9s9CAFNZQxcKEQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZlwDRgtDXF4PU0YHRhBADEIBRUdSDwoeRHdfRldLFAVTE0dBDkVSQE9EQAwGDEQARlxURUlFp80RCgVVVxFQQkfxw0YPVxlRAlADGFQe"
      }
    ],
    "prueba:p04:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:f1NCAgYWVVNDUQcIXERUQgYNU1ReFgxVEFMfEn5ZFAVTE1NboYdSEjUNUxEMEF4ASBh9ABhTCxRYBxZeVhFZUBNeDgcVUxlfClcIFkdRRkIGC0Ra9MgEHg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8Y07RgD1il8MEgoDFVRAEA8NU0VYC1oQLFdIEkdWFAVfQEdRDEVSQAoLEA8WDEMORlkRF11TARRSD6eCVh8VdF5CBwUGW1ZBQ0IJEBVRXaHPSg=="
      }
    ],
    "prueba:p04:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:YFtCCgZTShIPU0YKQFVZDgNEUlIXDB9BEV9UQFZZFAAWV1JGB1VbU09ERABDEVYNAxhEC1kQCAhQEAERSURQEV1dQgMQGBl2Al4DQllRFRQXAVpDVks="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dkFCFxZTGVcPEgwDV/OGDEIQV1pVDKaZChZcVxJdWgZX8IZVEPWeU0MFEAigzxk="
      }
    ],
    "prueba:p04:pista": [
      {
        "quien": "chiqui",
        "texto": "dc1:Y/HPAgZaXBICEj8NXkNHCw1ER0JSRQtfFxZVW1VZFAL1gFpbQkVWEg8BVUUWDFZBDk1UCVRRRAFfRg5QWvKGXx0="
      },
      {
        "quien": "gismera",
        "texto": "dc1:al0JFRFfVhIHWxShmFEPQqDPVVhaCkVFClcRUVdKRgBSRkVVQlpWV0MRXgRDDlsAEF3z3hYQNAFDCURB+5xRVEBXDglN"
      }
    ],
    "prueba:p05:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:d0ADBQ5XSh5DVxUBR/OPEhcIWUQXHEVXFldfXUEWFCRaE1NbAUJcQEMWXxEWDlZBBVdcChhVCkQAXl0IAhFF8pJBAwoMFk1dB11GAxVXRwMMC0UXTkUGRQFYRVMc"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:al1CFAxCTF4CQKXPVBD3yQQWV0RUCkVBEVMRVkddRgxTE1YUDlcTVQYKRACh2RcYRl1fRUhRHko="
      }
    ],
    "prueba:p05:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:cEcDEhFZFxIpRxUWWhBWFwMQRFgXDRDzzUVBV1ZdR08="
      },
      {
        "quien": "gismera",
        "texto": "dc1:f11CFxZTGVQCXhIDFUNcDEIFRkJZEQRCREVeXBJdTABVR1ZZB1hHV0MHRQQXEFhBAldCDEseRCpQAg1UGENaU1ISBgNDQ1cSBUAHEVZfFRINFhZUVhYQUQhfVVNWFg=="
      }
    ],
    "prueba:p06:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:Z0cQCAxFFRIXRxQMWkMZQhYRRFlYFksQJ0NQRkBXFA9ZUF9RERZKEgANXgYMQlkOC1pDAEse"
      },
      {
        "quien": "gismera",
        "texto": "dc1:YkcLAw0WSUAGQgcQVBBZA0JXBg4XEQxVClMRQ0ddFARFR1ZGQlNdEgYIEA0MFlINRlRQFhhTEQVFFAsRVl5WWVZBTEY39ZhRC1MKDUYQQAwNRFcXQgsKHg=="
      }
    ],
    "prueba:p06:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:eUcODwwWQBIiVgMOVB4VLg0XFlNYFkkQCFdCElFNVRVEXBdaDVVbVxBK"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ahIyBwBZFxInXRVCUVUVDg0XFkNFABYQF1dTV1wYVQ1RXBkULRZfXRBERBcGERk="
      }
    ],
    "prueba:p07:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:cEcDEhFZGVQKUQ4DRhBHDQgFRRdSC0VFChZSR1NcRg4WV1IUDlpSRAYXHkUmEVhBCFcRAEsQAAFdRgxeTFRZHw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YF0MRgdTGVMPVRMLUF4VExcBFlNSDwQQFlNSU1ZXR0FXE1tVQkBaQRcFEAEGQkMOAldCRUEQBwtfAKecWRFQXxNDFwNDWFhWCldGEVBAVEIOAVNFWwoWHkR4XkFdTEYARRNE988Y"
      }
    ],
    "prueba:p07:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dHMuJ00WfF5DVQkORVUVBxFEU1sXFBBZClVUHhJbWw8WVlsUEVdf8dAKEAkPB1kOSA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahIDRg5TXVsCXAkBXVUVDgMXFlFeBg1RFxZZU1wYUARFUkdVEFNQWwcLHkUtDURBDllfRU5ZFxBeSkRyUFhERFocQjYGRFYSC1MfQllZVxANFxZGQgBFXgsWQlcSWUcURUdWWkw="
      }
    ],
    "prueba:p07:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:f1MRRgVfWloCQUYWXFVbBwxEWUVTAAsQFEReQltXGkF4XBdYB1dAEgYIEAYWA1MTCQIRCV1VRAhQFURXUVJdUEAc"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ZlwNSkNSVkFPEhIQUEMZQgERV0NFCksQPRZVVxJbVQVXE1BVDFVbXU9EQwoPDRcNCRhAEF0QDQlBCRZFWR8="
      }
    ],
    "prueba:p13:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:d10RRhNaWFECQUpCQ1VcDBYBFlpeCxBEC0UfEmFRFABaVFgUClcTUQIJUgwCBlhBA1YRAEtVRAdEBwBDVx0VXVwSFAMMFlhcF1cVQlFVFRMXARZEUkUWVRVDVBJXVBQMV1RZURFfXBw="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fV1CCwpEXEFDQQkOWhBZAxFEUF5UDQRDShZ8W0BZFA1ZE0ZBBxZdUwcNVUUOC0UAFPucBBY="
      }
    ],
    "prueba:p13:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:f1MRRgVfWloCQUpCRvOYTkIUU0VYRRFRCVRY8ZtWFBRYUhdYDldFV0MAVUUPAxcHD1RQRVxVRAVTBw5eFhH3kH9TQgIGWhlWCkEWB1tDVBALCxc="
      },
      {
        "quien": "gismera",
        "texto": "dc1:f1NCCAxVUVdDQQNCRkVGEgcKUlIXHEVRCFFEW1dWFBFXQFYUC1FGUw8JVQsXBxcRCUoRCVlDRANeEgVCFhF0QUZcFgdDR0xboJsIQlBDQRcUCxZTUhEX88VFEVZXVBQMWUBDRgNSXEBN"
      }
    ],
    "prueba:p13:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:YFdCCwYWUVNDUwUDV1FRDUIBWhdaBAJeAUVYXR4YRAREXBdcBxZFWxAQX0UPDRcQE10RDVlTp8lQRgJQVEVUCxNUAwoXVxlHDVNGDllRQwdCAFMXWwRFVg1aUBJWXRQAVFJdW0w="
      },
      {
        "quien": "gismera",
        "texto": "dc1:f11CAgxPGUIMQEYAQFVbDUxEelYXFRfz105YX1MYQgRMHxd3Cl9CRwpIEAgKEFZBFkpYCF1CC0RQBAVbVx8="
      }
    ],
    "prueba:p08:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:dl5CCwxYTVMAUxQFVEMVARcBWENWRRZFFxZBQF1IXQ5FE0FdA1xWQU1EfAQQQlqix0lEDFZRF0RfCURcUVRbRVZcTkYTU0tdQ1wJQlFZVgcMREdC9MxFXgtVWVcSXkEEFl9WFAZTE1ECAFFFFgxYTw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dkENRg9ZGVYKUQNCWVEVARALWFhbCgLzyVcfEnFKQRtZE1tVERZXXRBEUwoQA0RP"
      }
    ],
    "prueba:p08:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:YFcLFUNAUFMJVxVCUVUVD6HFRRdSC0VFClcRQV1UVUFYXFRcBxgTfQAMX0UGDBcVCUxQCRQQCQFfCRcRVF5GEVddEUYHUxleAhIUDUVRFREXB19WGQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YEcADxEWWBITXRRCUFxZA05ERUJVDBdcBRoRVldOWw1AVkUUDlcTUQIGWQsCWRcYRlReRVVZFwleRgVdGFBYUF1XAQMRGBliAlEJQltfFQcMB1lZQxcEUgUWQl1c+5UMVEZbWxEME14MFxAREQNZEhZXQxFZUgVK"
      }
    ],
    "prueba:p09:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:al1CEgZYXl1DVwpCWVlXEA1EUlIXCQQQB1dbUxwYYKKME0NdB1hWQUMIURZDEFgPAllCSRhVCERCAxZUVl4VSBNeA0YRU1pXE1EPoYZeG0IsDVhQQgsEEBZTQl1eTlEMWUAXWgNSUhIQDV5FDwMXDhJKUEs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:Y0cHFUNGS1cERwgWVB4VOw1EQlIXAQxXCxZAR1v7nQ8WVkRAA1RSEgengwsHBxcARlRQFhhEFgFCRh0RTPKPEV5XQgIKVVxBQ0MToZwQVgMIDUJWFxYAEAVUQ1vxixo="
      }
    ],
    "prueba:p09:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:f1NCBQpTV0YMEhAHXF5BCwanhUQbRQlRRFJUElZX99BXE2FdAUJcQAoFHkUwFxcCB1JYEVkQFwERBwZDUfKGEVISDgcQFk1ABkFGGxVGUAsMEFMZ"
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahIDRgZFWBILXRQDFUNaDg1EXlZVpshRRENfUxJIURNFXFlVQlJWRhGnkRZDBlINRlVeFkxCBQBeFEoRflhHXFISKEhDdBc="
      }
    ],
    "prueba:p10:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:flcGDwwWUV0XVwpCVkVZEgNEV1sXDQxACllFW0hZUA5EHRdtDRZHUw4GWabKDBcNCRhSEFRABRbyywULGEVcVF1XQgUCRFgc"
      },
      {
        "quien": "gismera",
        "texto": "dc1:Z1sHCAYWTFxDUQcQQVVZQgELWBdfChdRFl9eQRwYbUFDXVYUEldBRgoAUUUHBxcME0sRAV1DFBHyzxcfGHlUSxNeA0YQQ1RTTQ=="
      }
    ],
    "prueba:p10:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:f1NCEw1XGUtDURMDR1VbFgNETxdUDAtTCxgRdldLRBT1mkQYQltGQUMMURYXAxcNB0sRFl1ZF0RSCQoRXF5WVBNGBxUXX15dEBw="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:Ykehz0NGXFwCHEYnR1EVBw5EW1JdChcQB0NdQlNaWAQWV1JYQl5cRgYIHg=="
      }
    ],
    "prueba:p11:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:8ZknCBNTVxIGXhYHWRBXAxIF9Y1bFRBchraX8IkY9t5zQENbQlNAEhUFQwYMXQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dkFCDAZEUFUMXBwDGRBQDkIOQ1JQCkVUARZdUxJdRwJDVltVTBZiRwoQUUUPAxcRAxhIRVRfRBVEA0RdWRFUUlxfEgegh1geQ0Glz1lRVwNCBRZE9MgJUQZXHw=="
      }
    ],
    "prueba:p11:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8ZknCENTVRIBU6XYWRBRBw5EW1ZQCksQNUNUX1MYURJCUhdaDUJSHKHfEKfCM0IEFPucBFYQBwVDAaeQSkJQXVwSA0YuWUtUBl1H"
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahIHCkNHTFdDVxUBR1lXC6HXFltWRQtfEFcRXF0YWAAWQkJRD/WAHEMoUUUEB1kVAxhWEFlCAAURCgsRSURQEV9XQhYGRVgc"
      }
    ],
    "prueba:p11:pista": [
      {
        "quien": "gismera",
        "texto": "dc1:Y/HPAgZaXBICEj8NXkNHCw1EQ1lWRRbzyVpQUFMWFDJZX1gUF1hSHEMhXEURB0QVCRhdChhDBQdQFURF+4sb"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ZlwDRhD1lF4CUAdCUF4VAQ4FQFIXFQRCBRZVV0FbXQdEUkUUDUJBU0MHXAQVBxlBI0tFBBhWBQlYCg1Q2rGT"
      }
    ],
    "prueba:p15:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlxCBAL1g15DUQkMFVNQEBAFUkJFBEVUARZZXUBZR08W8ZZxERZfXUMJ88QQQlUOCFFFChhBEQERDgERTlhGRVwSBwhDQlZWDBIDDhVTVBENRQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:f1NCDgxcWBIHV0YOVBBFAxABUhdTDAZVREdE8ZsYXA5EUkQaQnNfEgAFQhEGDhcFD1tURVRRF0RVCRcRSENcXFZAAxVNFnVTQ0YDEFZVRwNCCFcXRBAIURcWRfGIFhQ4FlZbFBJZQUYGFl9FFRdSDRBdEQBWEAoFVQdK"
      }
    ],
    "prueba:p15:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:cEcDEhFZGV4PUxAHRhwVFwxEUEVWFgZfRE8RR1xZFA1fQENVTBZnXQcLEAANQlINRlpQpoJcRABURhFfGFlaXFFAB0YSQ1wSAhIDEVQQXQ0QBRZdQgIEUgUWUF4SVUESGA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:f11CAgZcWF8MQUYBWl1aQgcXQlZVBEsQNUNUEl5XFABUQVYUDlcTUQwJWRYCEPTMBxhSClYQEAFCEg1WV0IOEV1dEQkXRFhBQ0sHQkZRVwcPC0UXWwpFQRFTEVpTQRo="
      }
    ],
    "prueba:p15:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:e1NCEAZYUFYMEgMOFUBaEBYBRFgZRSlVRF5UElZRVwlZE0ZBBxZRRxAH88QBA1oOFRhECxhAAQpVDwFfTFQbEX5XQg4CFlhLFlYHBloQVEIAEUVUVhcJX0o="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahIDRgJUS1sREgMOFVJUodgIGBd/BBwQFUNUEkRdRkFaXBdFF1MTWgIHVUUWDBcRCUpFAEpfRBReFEREVhFFVF1WCwMNQlwc"
      }
    ],
    "prueba:p12:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:ZlwDRgBZSVNPEhMMFV1aDBYFVVZFAgRDSBZEXBJVWw1SVhdRDBZZUwGngwtPQlQUB0xDChhcCAVHAxcRQRFAXxNQA6XZWhlTCVcIDRsQYAwDRFVWVQAfUURPEUdcWRQMV11YGg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:clwWAxAWXVdDUwUXRlFHTkIWU0dWFgBdC0URXl0YRRRTE0RVAFNeXRBKECsMQkYUD11DChhBEQERFQERVl5GEVZBAQcTUxlXDxIWDUdBQKHLSg=="
      }
    ],
    "prueba:p12:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:f11CEgZY+p8CXwkRFVRQEQYBFlJbRQlZBkReElZdFA1XE1RVCFcdEjALXApDClYDpZVQRUlFAURSFAHykUNGVF9dTA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cEAHAxFaVhINXUYAVENBA1hEXlZVpshRREdEVxJIRg5UUkVYDRgTcwsLQgRPQlINRkxUCV1XFgVcB0RQGGhaWkBACwlN"
      }
    ],
    "prueba:p12:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:YVcSBxBXGUMWW6XLWxBGBxAS9ZpWRQlRRPWLXkZRWQAWUFhEAxoTQxYN88wNQkMECPucBBhcBURdCgVHXRFRVF8SBg8QRlxcEFMUC1oQTEITEV/0ngtFVg1EXFNQWRQNV0AXVRJTQUYWFlEWTQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ahITEwr1kFxDXAMBUENcFgMGVxdSCUVUDVhUQF0YUAQWRVJGBldXHEM9EBQWC/TICBheB11UAQfyywUf"
      }
    ],
    "documento:d02": [
      {
        "quien": "chiqui",
        "texto": "dc1:YPHDBAJYWEFPEgUDUVVbAxFIFkJZRQvz3ltUQF0YUQ8WX1YUEkNWQBcFHEUMDlgTRlkRD1lSp9dfSERyTVBBQ1wSFhQMTFZBQ1YDQkBeFQ8LF1tYFwYQURZCXhw="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cEcDEhFZGUYRXRwNRhBRB0IRWFYXCAxDCVcRXF1bXAQYE3RVBlcTRw0LEBMKDRcUCFkRFVlCEAEKRgpeS15BQ1JBQhIGWFxfDEFGE0BVFQgXCkJWRQkEQ0o="
      }
    ],
    "documento:d06": [
      {
        "quien": "gismera",
        "texto": "dc1:f1NCAQxUXEANUwgWVBBUEhcKQlYXDQRDEFcRXl0YRRRTE1lbQlNdRgoBXgEGTBcjA1ZVDExRF0RCAwVfGF1UQhNDFwNDV0lHDUYHDBs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8ZkuCUNeWBITVwILUV8VEAcHU0dUDKaDChjziRJqUQJTQ1RdoYVdEg0LEAEWB0UMAxhUCxhcAQpSAxbylVBGHRN1CxVN"
      }
    ],
    "documento:d10": [
      {
        "quien": "chiqui",
        "texto": "dc1:dVsBDgJFGUAMWAcRFV5ADwcWV1NWFkVVChZEXBJbQQBSQVgUBlMTXg8FRgAQTBciCVVeRVRRF0RVAwgRW1BGWF1dTA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fV1CAgpRWEFDUQcRXF5aQhYLUlZBpshRShZ1WxL6nxNZWVZHoI0TS0MAWUWhyVkUC11DBFxRF6aKSER9VxFRVF7xwxVDQFxcB0Clwxs="
      }
    ],
    "documento:d11": [
      {
        "quien": "gismera",
        "texto": "dc1:ZlxCBQxYTVMHXRRCREVQQhERW1YXBgRUBRZQQEBZWhBDVhdNQkNdU0MHUQcKDFZBF01URVxFARZcA0RUVhFQXRNBodUXV1ddTRIlDVsQUBENREVSFwYQVQpCUBJHVlVBWFxUXAcWVlwXAUIETQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:f1MRRg71mEMWWwgDRhBbDUIJX1JZEQBeSBZBV0BXFAlXShdFF1MTQQIGVRdDEkUEAU1fEVlCCAFCSA=="
      }
    ],
    "documento:d15": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlwDRg1ZTVNDVwhCQF4VCwYNWVpWRQFVRFhY8YNXR00WVlkUDlcTUQsFQRAGFlZBAl0REFYQBwxYBQsRSURQEUpTQggMFlxBQ0cIQltZ9tMNSg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahIXCAIWVVsBQAMWVBBQEQELWlZFRRRFARZfXUEYUAAWX1YUEFNUXgJKEDUCAVhBAU1QF1xRRABUCwVCUVBRUEASAQkQV0oSBlxGDlpDFQANCEVeWwkKQ0o="
      }
    ],
    "documento:d16": [
      {
        "quien": "gismera",
        "texto": "dc1:cEcDEhFZGV4PUxAHRhwVFwxEUEVWFgZfRFVeXBJdWEFFVltYDRZXVw9EVAwQElIPFVlDDFcQHURECAURVFhGRVISBwhDRlhCBl5GBlAQRwcBAUZUXqbWXko="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:Y1MSAw8WXVdDQAMBUEBWC6HXWBdSC0VVCBZTU/GCWEFSVhdBDBZbWxMKXxEKGFYFCUofRXlcAxFYAwoRTFRb8p5TQhYRX0pTQ0IJEBVRVhcRBUQXVkUKRBZZHw=="
      }
    ],
    "pregunta:julio:j-caja": [
      {
        "quien": "gismera",
        "texto": "dc1:8ZksEw1VWBIHV0YMWlNdB0ymjRd7CkVUDVVUElFXWkFTXxdGB1FfUw4BXhEMQlIPRlRQRVVRCgsf"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:Y0cHFUNTVRIRVwEOVF1QDBYLFlNSBwAQAFMRRldWURMWXENGAxZfVxcWUUlDElgTF01URV1cRAhYBBZeGFVQEV9TQgUCXFgSB1sFBxVcWkIBC1hDRQQXWQsY"
      }
    ],
    "pregunta:adela:a-fichas": [
      {
        "quien": "chiqui",
        "texto": "dc1:8ZMkDwBeWEFDVgNCVlFGCwwLFxdyC0VFClcRUVpZRRRTR1YUBlNfEgsLRAAPTA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fV1CDgIWXVsAWglCUVUVExcN9Z5ZRQBCBRZdUxJbXABHRlJAAxgTa0MKX0UQBxcNCRhBF11XEQpFAxcLGEhUEV1dEUYPWRlaAhICC1ZYWkw="
      }
    ],
    "pregunta:doctor:d-escopolamina": [
      {
        "quien": "gismera",
        "texto": "dc1:cV0BB0NFXFECHkYIVEFABwEFGhdHEBVZCFdCElFXWQ4WQ1tVFllAEhpEXgpDA1QOFFxQF0tVRABURgpQXFAbEXddodcCFm9bAEYJEFxRGUISBVpWVRcEEBRZQxJCWVgAVEFWGg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dl5CAgxVTV0REgcBVFJUQgYBFlNSFgZCDVRYQBJZFBJDE0dGDUZaU0MUUQYKB1kVAxhCDFYQAAVDFQERW0RQX0dTTA=="
      }
    ],
    "pregunta:morfeo:m-copa": [
      {
        "quien": "chiqui",
        "texto": "dc1:f1NCpdlaTVsOU0YBWkBUTkIBWBdbBEVSBURDUxJcUQ0WRVJHFvWeUBYIX0lDElYSB1xQRVRRRBFfB0oRdF5GEVBHAxIRWRc="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cF0MRgZaGVACQEYBUEJHAwYLGBd2RQBDBRZZXUBZFBJZX1gUEV9BRAZERQsCQkcEFEteC1keRCVBpd5fTFBZXh8SDAlDWlYSB1sBA0Ye"
      }
    ],
    "pregunta:victoria:v-309": [
      {
        "quien": "gismera",
        "texto": "dc1:8ZkyBxFXGUMWV0YOWhBDBwNEU1sXFBBVRFNCRvGZFARYUFJGEFdXXU2mi0UmEVZBFV3y1FdCBURHA0Rc+5BGEUJHB0YNWUpdF0AHERs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fldCAgIWXEEAUwoNU0L2zw0XGBduRQhVRFFEQUZZGg=="
      }
    ]
  },
  "explicacion": [
    {
      "quien": "gismera",
      "texto": "dc1:cEcDEhFZGVoW8c8RRVVRBxFER0JSRQtfREVUEkJZRgRVVlkUB1gTXAIAUUUQA1sXCRhUCxhFCgURBQtCWQsVXVxBQgUWV01ADBISC1BeUAxCB1ddXhEEEAFYEV5TGFcAXFIXUAcWUFMWAFEJBhEZQShXERNRUQ4FX0YQXlxeRhFAXQ4JEBZXW0NGCQZaQxUUCwFEWFlFBFxEcUNTXBh5DkRVUltMFnZBDERJBEMMWEEDSxEWV14FCVMTCFhLXFoLE1cRRhZYWBIPWxUWVB4=",
      "prueba": "p01",
      "documentos": [
        "d03",
        "d02"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:f1NCVVMPGVcbWxUWUB4VJxFEWlYXCQBeB1ND8Z9ZFAVTXxdSDVhXXUMAVQlDA1sARlZeF0xVXkRUCkRXWUNaEUNdEEYPVxlEBlwSA1tRGUIHCBZaWAsRUQdXQ1VTSxQAWhNYQBBZE14CAF9FBwcXDQcYQQRKVQBIEQoFEV1CVlBfVxAHQ1NKRhFXBQpUEExCBwgWWfTfCFUWWRFQU1JbQVJcRBQBV0NTEERUAEMSXg8STUMEFhAgAV8SFl4UEUBfUhIBBw5XGVoGUQ4DGRBADEIIV0FWBwoQHRZEXFMYRABFR15YDlcTVgZEWgQBoYQPRlteCxhFCgURAAtDVVAVQEZXQggMFlxBQ1YDQl9RV6HRChg=",
      "prueba": "p02",
      "documentos": [
        "d02",
        "d04",
        "d05"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dl5CCgpUS11DVgNCWVEVBQ0GU0VZBAtEBRZUQRJNWkFVUltRDFJSQAoLCkUQoZYDB1ZQFhhVCkRdB0TzkwIFCPGJQgMPFgseQ1cKQgAcFQcORA4XTkUAXEQHAB4SVFVBW1L0hQNYUhIQDVcQCgdZFQMYUEVbUQAFERULX/uQWFNGXg1IQ28ZRw1TRgxaRFRCBgFaFwZXXxAX9ZBQU1ZVEhZDVkYDFvGZDgXz1AIMVkEWV0NFVFFECl4FDFT6ihkRQ1cGDwdXShITXRRCR1VWBxIHX/SEC0sQIVoRQfGZVgBSXBcFURZfU0NXAFxDFEIECk5URVkQERdQFBdUFBFMEVZBFgcRU1RdEBIHDlnzmEw=",
      "prueba": "p03",
      "documentos": [
        "d06"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:dl5CDAJU+oENEgEXVEJRAwAFFltWRQ1FAVpdUxJcUUFDXVYUDlpSRAZIEAANQlISFl1bChYQKAHyywBQGFVQQldXQgoCFlpTAVccAxkQUBFCCFcXUwBFXAUWUlNYUUAAFgIADkJaUhIHARABDKGGAEZuWAZMXxYNUEhEcFRWQFhWXEIFDEZQU0NeBxEVXFkDFAFFF1MARVwFFlJTWFkUBVMTVFUXUlJeBhcQCAoHWRUUWUJFS0UXRFUTAfKJXkYRV0cHFA5TVxIGXEYOVBAGUltKFm4XFQRCBRZVXUBVXRNaXEQUCldQV0MCUQkXAxcACl9eRVXzxRcRFxFUGFRZEVJbEANDUlxeQ18HEBs=",
      "prueba": "p04",
      "documentos": [
        "d07"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:d1cORgVEWEEAXUYGUBBQEQELRlhbBAhZClcRVldUFAVZUENbEBZVUw8QUQtDFkUED1ZFBBhJRABeFURWSlBbXkASEQ8NFlhCFlwSA0cKFQEXBUJFWEUBXxdfQhJWXRQOVVtYGEJDXVNDFF8XQwpCos9LQQBcHkQgXqXVUBhnXFJHXRAPAhZdVxBCAxBB84ZCAQtYF1sERVILVVASQV1XABZKF14DR0ZXAAUcRQANWg5GXFRFTV4FRFwDAFhbWFtQHRIjRgZFVkFDURMDQUJaQgwLFltYFkVUEURcW/GLFBRYE19dElhcRgoeUQEMEA1BCldCRVxFFglYpdcRTV8VV0FTEQUMGA==",
      "prueba": "p05",
      "documentos": [
        "d08",
        "d02"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:YkcLAw0WSUAGQgcQVBBZA0JXBg4XEQxVClMRQ0ddFARFR1ZGQlNdEgYIEA0MFlINRlRQFhhTEQVFFAsRVl5WWVZBTEYvWUoSF0cUDFpDFQYHDldZFwRFRBZTQggSaFUCWR8XRRdTE/DIAV4GDAxDE6WL894YUUQIXhVEUk1QQUNcCUIsFlpQXU8SAwwVQlABBxRVXvTWCwtETxFzVl1YABoTUlpCRUZBQxZfCwcDRE9GfV1FXF8HEF4URFdZXUHygBIHCkMHGUtDVwpCAgsVBw5ERlhFEQBCCxoRV14YAEFPE1JYQgcDHA==",
      "prueba": "p06",
      "documentos": [
        "d09"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:cEcDEhFZGVQKUQ4DRhBHDQgFRRdUCglXBVJQQRJcUUFVRlZAEFkTVQIKUw0MEQ1BVwgGSRgBVFUdRlYAChFMEQECU0hDelhBQ1YJERVTXAQQBUUXRhAAEBdfVkdXVhQAFl9WFBJaUlwXBRxFFgxWQQpdRRdZEAcFVQdERFZQDxF0cy4nTRZ8XkNVCQ5FVRURBxb1lhcACRBVAx0SUVdaQVNfF0cDWvCBDURcCQYMWE9GYREEGF0BAFgHCl5bWVARX1MRRgVfWloCQUYbVBBbDUIBRUNWBwReXhZfXUEYXABYE0FdEUJcHkMdEAAQAxcPCVtZABhcBUQCVl0RVl4VQlYSFxUCGA==",
      "prueba": "p07",
      "documentos": [
        "d10"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:d10RRhNaWFECQUYBWl4VFAcNWENSRQhZCkNFXUEYUAQWV15SB0RWXAANUUtDLlYSRltEBExCC0RXDwdZWUIVQlYSCgcNFlBWDB5GGxVUUEIOBRZRXgkEEABTEUFXSkIIVVpYFARXX0YCRFwEQw5bABBdEQFdXEQAWBUUVFZCVENaXVhGD1cZXAxRDgcVQ1BCERFFR1ILAVVIFkFXQFcUAFpUQl0HWBNCAhdRRQoFQgAKVVQLTFVEFF4URF1ZQhVWXEYDFU0WaV0REgIHQUL2wxFEUlJbRQhfF0JDU1ZXRk0WVlkUB0VWEhEFRApPQkQOClcRAEtEERJYAxZeVhFQXRNYBwAGFl1XQ1wJAV1VFRtCAVoXVQoRXwpTQhJRV1pBQ11WFABXXVYGDlFL",
      "prueba": "p13",
      "documentos": [
        "d10",
        "d18"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:f1NCCAxVUVdDVgNCUV/20wNEYF5UEQpCDVcRV14YWQ5YR1ZXA0RUUxBEWAwZDRcOBVBeRU5ZBQ5UFV4RS1RcQhNfoccQFkhHBhIKDUYQUQ0RRFJSFwkEEBZZQVMSS0ECX1IZFDFDUVsRRFFFARdEAgdKXQQUEBcRUw8WXVkRVBFfU0JVUw8VEgdXEA1ZRlAQQghXF1QEB1kKVwoSSxhYDhZeXkcPWRNTD0RRCAIMUgIDSh9FaFEHCxEICxFdX1ZeXUYQBwFXGUEMXKXDWFJADg0XFkdYF0VVCBZBU0FRWA1ZCRdYDUUTRhEFXhYTDUUVB1pQSw==",
      "prueba": "p08",
      "documentos": [
        "d11",
        "d02"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:cFMGB0NbWFYRRwEDUVEVBgdERVhZpsRdBkNdXR4YVUFaUkQUFkRWQUMdEBUKAVhNRlldAk1ZAQoRBwZDUfKGEV9TQgUCXFBGAhICB1kQXRehzUVHUgFFVAtEXFtWVxSjnUNWRgMWUF0OFEIKAQNUCKWLX6eDEB1EVw8WXPuCFXsdEiBIQ3pYEgBTDAMVQ1oODURFUhcEB0IBFlVXQVxRQVJWQ0ahl0ASBwFcRQ4NRBUUWVUKSgtEJVUDCFAYVEZFUlADRgBZVxIPU0YHW1ZQEA8BRFYbRTVRB1kRU0BKXQNXHxdNQlNfEhABQgANDRcXD1cRAFYQFgFSAxRSUfKGXxNBDQoMFlheQ1gDBFAQUQdCCllUXwBLEC5DXVtdGHYARUdWRhBfUFNDFEIKAQNVAEZUUBYYXAgFRwMXEVteRVhSVgMVTQ==",
      "prueba": "p09",
      "documentos": [
        "d12",
        "d13"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:f1NCFQZRTFwHU0YEQF5WC6HXWBdTAAkQI0RQXBJ1WxNQVlgUA1VSUAJEUUUPAxcUCFkRHBhTEQVDAwpFWRFMEVBbDAUMDRlWBkEWF/aZRk5CCUNEFwYKXkRaUBJdSkUUU0BDVUJeUkEXBRAJAhEXEgNRQkkYUwsKEQILUl0RQVRARgsBDEUXEiZeRgpcQFsNFg1MVlMKFxAKWRFBR1pdooUTVhQMV1dbBkRRRQ8DFxUDSlIASlFEFF0HCkVZHw==",
      "prueba": "p10",
      "documentos": [
        "d14"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:Y1MBCUNTSlERWwQHFVVbQggBRF5QCgtKBRoRV14YXhRTVFgUBlMTQRZEWQsFA1kCD1kLRfqbIQoRAwgRWlD2i18SBgMPFlRTBF1IQmRFUA8DRFNEQwRFXgtCUPCJFhQvWRNbVUJHRlcOp4NLQy5WEkZUXQROVRdEUgkUWFlVVEITVxESoJdXEgZcRgdZEFcDod5aF1MARVUXQkNXXlRVEhZXUlhCcUFTDUR9ChEEUg5KGFQLGEMRRFIHCVRKWFteCRIDCgRDUFcNEhcXUEL2zwNER0JSRQBcRFVEXkJZVg1TE1FBB0RSEgYIEA0KElkOElFLBFxfFko=",
      "prueba": "p11",
      "documentos": [
        "d15"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:f1MRRhdEXEFDWgkQVEMVBgdEWlYXCwpTDFMRVlcYeQ5EVVJbQldRQAYKEBYWQlUApYJdXxgCVl4CVkgRCAEPAgMSG0ZTBwMGVhxGJ1sQUA5CAFlVWwBFVgtYVV0eGFcUV0dFW0JaX1MVAUNFBwcXDQdM8tZWEBcNX0YURFRYRx0TRwxGBURYQQBdRgFaXhUHDkRFUlsJChAAU10SVlFHEVNdRFUQX1wSGkRFCwJCWwgVTFBFXV5EFFAWAV0YVVARQVcBAxNVUPHQXEhCeV8VBgcOV1pYFkVTC1teEldLQABUUg0UEllBEg8FEAgCoYYACFkRCVcQBQZDA0RdWRFWXl5bEQcR9ZRTQ1EJDBVEUBEWDVFYREs=",
      "prueba": "p15",
      "documentos": [
        "d17",
        "d14"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:eUcODwwWe1MQRgcQR1lWA0IIWRdHAAtDp4URRl1cW1sWX1ZHQlFcRgIXEAEGDhcFCVtFCkocRAdEHwURVF1UR1YSBRMCRF1TAVNKQlBeFQ4DRPWNWxEMXQUWUl1CWRQFUxNbVUJUUkARBRABBg4XFwNLRaaVUhEIXl1EYVlSWh0TQxcDQ1pWQUNBEwD2nVRCBwoWUltFCF8KQlBRU0pTAEUTVhQOVxMBU10QFQwQFxQIGPPOXUgQFlCk3xFBEUBfUhIPBwdEXBIGXAAHR11UWUIBWhdaCglUARZUXBJSVQP1gFkYQlpSEgALQAwCQkcTCVpQAVkQBURdBxcRTENQQhNRDQhDRUwSBVsUD1QcFRtCAVoXVQSmiggWVVcSV0ATWRNHVRBXE1ECFlemwhBEBApXH0VhEAgFQkYHRFlFR14TUQMMCkJYQUNeBxEVVVkLBQ31hBcECVcRX1RcEllaFVNAF0UXUxPxyggeRTMHRQ5GXUIKGFUXRF4SFlAYWVxCR10QDwIY",
      "prueba": "p12",
      "documentos": [
        "d16",
        "d12",
        "d09"
      ]
    }
  ],
  "interrogatorio": {
    "desbloqueadoPor": "p04"
  },
  "balance": {
    "trasPrueba": "p05",
    "propuestas": [
      {
        "quien": "gismera",
        "sospechoso": "adela",
        "texto": "dc1:al1CCwpEWECgnwdCVBBZA0IDWVVSFwtRCkJQHBJ0VUEFAw4UB0UTQRZEXAANAVITpZVQRUEQCAURCghQTlQVXVISDgoGQFgSBl4KAxVVW0IOBRZUXgsRRRZXChJRWVkDX/CEFAFDUkYRCxATBgFSEkZUUBYYQ6fFUwcKUEsRUVQTRwxGAENYQBddRhNAVRUMDURTT14WEVVETxFeXRhVEUNdQ/fRFkBbDURAFwYFQg8SWUNFWRAKBVUPARFIXkcRQkehz08WQBINXRVCRUJQERanhRdSCUVcDVRDXRJLXQ8WQ1JHFlfwgwYFQktDJ1tBAlFDAFtECxYRFxFYXUNQEUBHERIKQkxbEV4HQkVfR0IXClcXURcEXgdTQlMeGE1BVxNCWgMWUFMQBRAUFgcXFQMYVAZQUUQKXkYXVBhdUBFURwMUB1dXEhBXBRBQRFoRTERnQl4ACxAMV1JXEk1aABZQVlkDFkBTAQEQFQIQVkEXTVimkV5ECFBGDFBbVBs="
      },
      {
        "quien": "chiqui",
        "sospechoso": "julio",
        "texto": "dc1:Y0cHFUNPVhIOWxQDR/OYA0IFWhddAANVRFJUElxXVwlTHRd4DUUTURYFRBcMQkMECPucBFYQBwVbDxBQGFRbEV9TQgUCXFgSB1dGAVRFUQMOAUUXTkUJUURVUFhTGFgAFlBCRxZZV1sCRPPMD0JTBEZWXgZQVV9EXQdEXVRQQ1QTQxcDQ1VWQgpTFA1bEFAMQgFaF10EB/PXWBFXQRhYABZXUhQXWFISAAVaDBcDG0EfGF0ESxAXp5AEBV9ZQhVVVl5CV1AW+5kPUxVCRVlRC6HXFkVSBgBAB1/ygVz6j08WdlsUBl9AQgYKQwQRC1hBA0tFppkQDhFfEgsRWRFGRBNfDRUXRFhWDEBIQmwQQRAHDVhDVkUVVRdTRVNBGFAEFkNFWxJfXVNDCl9FEwNQAAgYRAsYUwUXWAgLHw=="
      }
    ],
    "sinDescartar": [
      {
        "sospechoso": "paco",
        "texto": "dc1:dlwBCQ1CS/HQEgdCWV9GQgERV0NFCkXyz0ZQQVdZWgVZ8YwUA1oTUw4FXgAAB0VBHxhQRVRfF0RSEwVFSl4VXVZBQgIKXFYSD1NGD1xDWANCAkRWRABFVAFaEVNbSlFBUlZbFA9XQRxDI1ELAkJDEwNRXxFZEBQBQgMQUEsRTBFAR0ILAlJLV0NXFRb2kRUHDAJTRVoESxAxWBFQXUxbD1NAF1oNFlBdEw1RRQ8OVhcDSxEBXRAIBREFBVtZHRVBVkANRhBXW1dDQxML9plbQgYRU0VaAEVUp4VfVlcYTUFXE0ZBoZ8TWgwWUV5DBFYNElkRFllSARYRFxHykRFdUFBXQgIGFlddAFoDQlBeQRAHRFNbFxMAQxD1nFBHVFtBTxNbVUJCVkAAAUIEQxJbAAhMUEs="
      },
      {
        "sospechoso": "doctor",
        "texto": "dc1:f1MRRgRZTVMQEhUDWVlQEA0KFlNSRRZFRFBDU0FbW00W8J5YQlNAEhIRWQANQkQABF0RCVkQAAtCDxcRQRFRWFBXQhcWUxlWFlcUD1AQUAxCAVoXUwwWQAFYQlNAUVtBVVxZFA5XE14PBUYAQwdUCQdcUF4YVAFEVBUBEV5DVEJQXUIAAlpNUw0SBRdUREcNQgBZRF4WRUERUxFcXRhVEUNdQ/fRGBN0AghEBEMRVgMDShEWURABF0UHBlAYVVARVEcDFAdfWBIPUxVCVkVUFhALFllYBg1VFxZIEkNNXaKfXRdZoZdAEg8IVQICQlZBA0tQRVRcBRJUSA=="
      },
      {
        "sospechoso": "morfeo",
        "texto": "dc1:d10RRgdTGV4MQUYBQFFBEA1EWFgXFQxDBUReXBJLQUFFUlv30VgTS0MFEAkMERcOEkpeFhhUCxcRCAsRVF5GEVdHEAsK9YoSFlwHQkNfT05CF19ZWEUQXkRQQ1NBW1tPFmNSRg0WUlEXp4oEQwFWBQcYXwpbWAFEVAhEVFQRXV5HVw5KQ0VcEg5HAxRQEEUNEET1nltFBBALRVJHQFlHQU8TRkEHFltTAQhVC0MGUkEVV1+mmV0GEV0JFxFUVBVSXFwUDwZYXBIMEgoHFVFHEBcNWFYZRTZFRFVeU0BMVQVXHxdYA0UTUQIWRAQQQlQOCBhdBBhfFhVEAxdFWRFdUEBGA0YGWhlTDlMIB1ZVR05CCldTXgBFXAUWWVMSW1sMRkFYVgNSXBIXC1QEFaGaAEg="
      }
    ],
    "descartados": [
      {
        "sospechoso": "victoria",
        "texto": "dc1:f1NCDhZTVV4CEgIHWRBfAwCnhVkXABYQAFMRQUcYRBNZQ15VQlpfUxUBHEUPAxcFAxhdBBhTBQ5YEgURCQYZEUoSBgMQRlxAF/HVQlZfW0IOBRZVWAYEEBdTUlMSQRQNVxNUVQBTSVNDB18IDEJCD0ZBRAtJRQFeEQdEVFRdVBFfU0ICFkRUWwZACQwVSRUDQgFaW1ZFCVFEVV5CW1lGDlgdF3gNFkJHBkRTBA8OVkECXREJWRAHBVsPEFAYVEYRXEYQCUNXSkcNRglZFV5aQgcXFkZCDABeREZDV0JZRgAWX1YUUQYKHA=="
      }
    ],
    "cierre": [
      {
        "quien": "gismera",
        "texto": "dc1:al1CCwYWX0cKEgdCWVEVBQ0GU0VZBAtEBRZBXUAYWAAWX1tVFFMTS0MUXxdDB1tBClFTF1cKRBFfB0RSWVxUEVZcQhMNFlpHAkASDRVBQAdCClkXUh0MQxBTEV5TGFwAVVYXRRdfVlxDEFkADQcXDQcYXQlZRgFKESMJQV1S9pgTU0ICFlJYQENXCEJZURUMDQdeUhcBAFxEBwIIEk1aABZeQl4HRBNDFgEQBBMXWRUHGFkES0QFRF0JREBNVBVfXBIHCBdfXFwHV0YMWhBXDRAWVxdRDAZYBUURVlcYQQ8WUEJVBkRcHEM9EAkCERcTCVZVBEsQCAURFhFCUVRHXl0SA0YPV0oSF0ADERVVW0IOBRZHRQwIVRZXEUJeWVoVVx8XVw1YE14CRFULBQdFDANKUEs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YFsMRhdDGVUMUAMQW1FbFgNEWFgXDQRSFvWcU19XR0FaVvSZBlkTVxABEAkKAEUORlteCFcQEQoRBQVdXV9RUEFbDUYNXxlaAlAUoZhRWA0RRFteRQQBX0RHRFvxkVpBRlZT989XE14CFxAWoMNVAAhZQl8Y8s8WVAUBQVtY9oJd8NlIQ3JcQQBTFBZUQlkDQgUWUlsJBBACQ1QSXlcUEENWF1oNRRNeDwFGptBCVg1GVV4WTEIFAF4USg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahIWE0NcXFQGEgIHFV5aAQoBFkNSC6adBRZUXhJVWxJCQVZQDUQfEg8FEAYCCFZBBxhVCksQFAVCCRcRQRFZUBNeDgcVUxlWBl5GBlxDRQcMF1dFXgpFUURFRBJXS0QAWldWGkJ8Rl4KCxAnAhFDABRKWAZZHkQoXkYXUFtQWF5AEgcIF0RcEg9TFUJRX0ZYQh1ZF1sERUANRUVTEklBBBZbVlahm1ISEhFVRQcHRAIHSkUEShxEEPLcRF1ZEUREVhIKBwH1lFNDQxMHFUNQBRcNRBk="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:f1NCFhH1ikoKXwdCQ1VPQg8BFlJGEAxGC1VeEktXGkF6UkQUBllAEhMNQxECERcXB1TyyFleX0RCCQheGERbUBNUCxQOV1tTQ3hIQnce"
      }
    ]
  }
});
