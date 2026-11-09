/**
 * Expediente 009 — El mapa de los siete sellos.
 * Solo datos: lo registra el motor (docs/juego.md «Cómo se escribe un caso»).
 * Las respuestas son huellas y las pistas, notas y epílogo van codificados (D5):
 * para cambiarlos, usar herramientas/huellas.html.
 */
DetectiveCodex.registrarExpediente({
  "id": "009",
  "numero": "004",
  "titulo": "El mapa de los siete sellos",
  "subtitulo": "Siete fragmentos, siete lugares y uno que sobra",
  "categoria": [
    "tesoro",
    "enigmas"
  ],
  "dificultad": 3,
  "duracion": "60–90 min",
  "portada": "img-portada",
  "elementoConductor": {
    "tipo": "objeto",
    "nombre": "El séptimo sello",
    "descripcion": "El lacre del último fragmento del mapa: no es el de Sarmiento, sino una rosa de ocho puntas con un ojo en el centro."
  },
  "introduccion": "Toledo, septiembre de 1927. Don Aurelio Sarmiento, el librero anticuario más viejo de la ciudad, ha muerto a los ochenta y dos años. A su nieta Lucía le deja la librería y un sobre lacrado con un trozo de mapa y una nota: «Son siete. Cada uno te lleva al siguiente. Al final está lo que más quise».\n\nLucía no sabe por dónde empezar, y no es la única que busca: alguien entró en la librería la noche del entierro. Ha leído en los periódicos lo de la piedra de Asteria y os pide que la acompañéis por Toledo.",
  "historia": "Aurelio Sarmiento compró durante sesenta años libros que nadie quería: códices, incunables, cartas de navegación. Decía que su verdadera biblioteca no estaba en la tienda, y nadie le creía.\n\nCuando enfermó, troceó un mapa en siete fragmentos, los selló con su lacre —un libro abierto— y los escondió por la ciudad. Su sobrino Rafael, el librero Dimas Olalla y el canónigo archivero de la catedral sabían que existía «el mapa de los siete sellos». Ninguno decía saber dónde estaban los fragmentos.",
  "objetivo": "Reunir los siete fragmentos, encontrar lo que escondió Aurelio Sarmiento y descubrir quién intenta llegar antes que vosotros.",
  "personajes": [
    {
      "nombre": "Aurelio Sarmiento Ugarte",
      "rol": "Librero anticuario. Murió el 2 de septiembre de 1927.",
      "imagen": "img-aurelio"
    },
    {
      "nombre": "Lucía Sarmiento Paz",
      "rol": "Su nieta y heredera. Os ha llamado ella.",
      "imagen": "img-lucia"
    }
  ],
  "cronologia": [
    {
      "fecha": "2 de septiembre de 1927",
      "texto": "Muere Aurelio Sarmiento en su casa, encima de la librería."
    },
    {
      "fecha": "4 de septiembre de 1927",
      "texto": "Entierro. Esa noche alguien fuerza la puerta de la librería y revuelve el despacho."
    },
    {
      "fecha": "5 de septiembre de 1927",
      "texto": "Lucía Sarmiento abre el sobre del testamento y llama a la Agencia Arkana."
    },
    {
      "fecha": "Jueves 8 de septiembre, 19:10",
      "texto": "Alguien se lleva el quinto fragmento de los soportales de Zocodover.",
      "desbloqueadoPor": "p06"
    },
    {
      "fecha": "Viernes 9 de septiembre",
      "texto": "Llega por correo, sin remite, el séptimo fragmento.",
      "desbloqueadoPor": "p09"
    }
  ],
  "ubicaciones": [
    {
      "id": "u-libreria",
      "nombre": "Librería Sarmiento",
      "descripcion": "Una tienda estrecha y honda en la calle de la Plata, con estanterías ordenadas por años.",
      "imagen": "img-libreria"
    },
    {
      "id": "u-escudos",
      "nombre": "Calle de los escudos",
      "descripcion": "Una calle de casas nobles con escudos de piedra sobre las portadas.",
      "imagen": "img-escudos",
      "desbloqueadoPor": "p01"
    },
    {
      "id": "u-puente",
      "nombre": "Puente de Alcántara",
      "descripcion": "El puente romano sobre el Tajo, con una torre en cada extremo.",
      "imagen": "img-puente",
      "desbloqueadoPor": "p05"
    },
    {
      "id": "u-cueva",
      "nombre": "Cueva de Hércules",
      "descripcion": "Bóvedas romanas bajo una casa de la calle de San Ginés. Dice la leyenda que allí se guardaba un tesoro que nadie debía abrir.",
      "imagen": "img-cueva",
      "desbloqueadoPor": "p12"
    }
  ],
  "imagenes": [
    {
      "id": "img-portada",
      "archivo": "portada.jpg",
      "prompt": "Cinematic 1927 illustration of an old hand-drawn map of Toledo torn into seven pieces laid on a dark wooden table, each piece sealed with red wax, a candle and a magnifying glass, the silhouette of the city of Toledo in the background, aged sepia and red tones, engraving style, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Siete sellos"
      }
    },
    {
      "id": "img-libreria",
      "archivo": "libreria.jpg",
      "prompt": "1927 photograph of a narrow deep antiquarian bookshop in Toledo, floor to ceiling wooden shelves of old leather books, a rolling ladder, a desk with a lamp, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Librería Sarmiento"
      }
    },
    {
      "id": "img-escudos",
      "archivo": "escudos.jpg",
      "prompt": "1927 photograph of a narrow street in old Toledo lined with noble stone houses with carved coats of arms above wooden doors, iron balconies, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Calle de los escudos"
      }
    },
    {
      "id": "img-puente",
      "archivo": "puente.jpg",
      "prompt": "1927 photograph of the Roman Alcántara bridge in Toledo over the Tagus river, with its fortified gate tower, rocky river bank with stones and olive trees, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Puente de Alcántara"
      }
    },
    {
      "id": "img-cueva",
      "archivo": "cueva.jpg",
      "prompt": "1927 photograph of an underground Roman vaulted cellar in Toledo, stone arches, an old iron grille, dust and lantern light, wooden crates of old books, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Cueva de Hércules"
      }
    },
    {
      "id": "img-aurelio",
      "archivo": "aurelio.jpg",
      "prompt": "1920s portrait photograph of an elderly Spanish antiquarian bookseller in his eighties, white beard, velvet skullcap, magnifying glass on a ribbon, wise mischievous eyes, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "A. Sarmiento"
      }
    },
    {
      "id": "img-lucia",
      "archivo": "lucia.jpg",
      "prompt": "1920s portrait photograph of a young Spanish woman in her mid twenties, short wavy hair, simple dark dress with a white collar, determined bright eyes, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "L. Sarmiento"
      }
    },
    {
      "id": "img-rafael",
      "archivo": "rafael.jpg",
      "prompt": "1920s portrait photograph of a Spanish man in his forties, pinstripe suit, slicked hair, thin moustache, charming but shifty smile, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "R. Sarmiento"
      }
    },
    {
      "id": "img-dimas",
      "archivo": "dimas.jpg",
      "prompt": "1920s portrait photograph of a Spanish antiquarian book dealer in his sixties, bald, round spectacles, bow tie, sly calculating expression, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "D. Olalla"
      }
    },
    {
      "id": "img-fulgencio",
      "archivo": "fulgencio.jpg",
      "prompt": "1920s portrait photograph of a Spanish cathedral canon and archivist in his seventies, black cassock, biretta, thick glasses, gentle scholarly face, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "F. Marañón"
      }
    },
    {
      "id": "img-tapa-cuadrado",
      "archivo": "tapa-cuadrado.jpg",
      "prompt": "Old photograph of the lid of an antique Spanish wooden box seen perfectly straight from above, centered and filling the frame. Dark walnut with fine grain, worn iron corner fittings, small nail heads along the edges. The flat central panel is smooth and completely blank: no carvings, no numbers, no letters, no symbols, no inlays. Soft even light from the upper left, low contrast, no strong shadows. Warm sepia tones, film grain, slight vignette, no text, no watermark",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Tapa de la caja"
      }
    },
    {
      "id": "img-lacre",
      "archivo": "lacre.jpg",
      "prompt": "Extreme close-up photograph of a smooth surface of old dark red sealing wax, seen perfectly straight from above, filling the entire frame. Glossy in places, fine cracks, small bubbles and uneven thickness, a few dull patches. No seal impression, no letters, no symbols, no edges visible. Soft even light, low contrast. Warm sepia-tinted tones, film grain, no text, no watermark",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Lacre"
      }
    }
  ],
  "visuales": {
    "escudos": "<svg viewBox=\"0 0 960 520\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Seis portadas de la calle con sus escudos\"><defs><filter id=\"a9-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"a9-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"a9-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><linearGradient id=\"a9-muro\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-piedra\"/><stop offset=\"1\" class=\"ilst-piedra-sombra\"/></linearGradient></defs><rect width=\"960\" height=\"520\" fill=\"url(#a9-muro)\"/><line x1=\"0\" y1=\"0\" x2=\"960\" y2=\"0\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"34\" x2=\"960\" y2=\"34\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"68\" x2=\"960\" y2=\"68\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"102\" x2=\"960\" y2=\"102\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"136\" x2=\"960\" y2=\"136\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"170\" x2=\"960\" y2=\"170\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"204\" x2=\"960\" y2=\"204\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"238\" x2=\"960\" y2=\"238\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"272\" x2=\"960\" y2=\"272\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"306\" x2=\"960\" y2=\"306\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"340\" x2=\"960\" y2=\"340\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"374\" x2=\"960\" y2=\"374\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"408\" x2=\"960\" y2=\"408\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"442\" x2=\"960\" y2=\"442\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"476\" x2=\"960\" y2=\"476\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><line x1=\"0\" y1=\"510\" x2=\"960\" y2=\"510\" class=\"ils-piedra-sombra\" stroke-width=\"1\" opacity=\"0.6\"/><g class=\"punto\" data-punto=\"e1\" transform=\"translate(90 230)\" tabindex=\"0\" role=\"button\" aria-label=\"Portada del número 3\"><rect x=\"-62\" y=\"-30\" width=\"124\" height=\"290\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><path d=\"M-62 -30 Q0 -80 62 -30\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><g transform=\"translate(0 -110) scale(0.95)\"><clipPath id=\"ec-tinta-azul-3-null\"><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\"/></clipPath><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"2.5\"/><g transform=\"translate(-20 -22) scale(1.25)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(20 -22) scale(1.25)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(0 22) scale(1.25)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g></g><circle cx=\"40\" cy=\"130\" r=\"5\" class=\"ilf-hierro\"/><text class=\"il-texto-foto\" x=\"0\" y=\"282\" text-anchor=\"middle\" font-size=\"13\">nº 3</text><rect x=\"-70\" y=\"-190\" width=\"140\" height=\"460\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"e2\" transform=\"translate(246 230)\" tabindex=\"0\" role=\"button\" aria-label=\"Portada del número 5\"><rect x=\"-62\" y=\"-30\" width=\"124\" height=\"290\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><path d=\"M-62 -30 Q0 -80 62 -30\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><g transform=\"translate(0 -110) scale(0.95)\"><clipPath id=\"ec-rojo-3-tinta-azul\"><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\"/></clipPath><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"2.5\"/><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" transform=\"scale(0.8) translate(0 -3)\" class=\"ilf-rojo ils-tinta\" stroke-width=\"1\"/><g transform=\"translate(-20 -22) scale(1.05)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(20 -22) scale(1.05)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(0 22) scale(1.05)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g></g><circle cx=\"40\" cy=\"130\" r=\"5\" class=\"ilf-hierro\"/><text class=\"il-texto-foto\" x=\"0\" y=\"282\" text-anchor=\"middle\" font-size=\"13\">nº 5</text><rect x=\"-70\" y=\"-190\" width=\"140\" height=\"460\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"e3\" transform=\"translate(402 230)\" tabindex=\"0\" role=\"button\" aria-label=\"Portada del número 7\"><rect x=\"-62\" y=\"-30\" width=\"124\" height=\"290\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><path d=\"M-62 -30 Q0 -80 62 -30\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><g transform=\"translate(0 -110) scale(0.95)\"><clipPath id=\"ec-tinta-azul-3-rojo\"><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\"/></clipPath><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" class=\"ilf-rojo ils-tinta\" stroke-width=\"2.5\"/><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" transform=\"scale(0.8) translate(0 -3)\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"1\"/><g transform=\"translate(-20 -22) scale(1.05)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(20 -22) scale(1.05)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(0 22) scale(1.05)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g></g><circle cx=\"40\" cy=\"130\" r=\"5\" class=\"ilf-hierro\"/><text class=\"il-texto-foto\" x=\"0\" y=\"282\" text-anchor=\"middle\" font-size=\"13\">nº 7</text><rect x=\"-70\" y=\"-190\" width=\"140\" height=\"460\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"e4\" transform=\"translate(558 230)\" tabindex=\"0\" role=\"button\" aria-label=\"Portada del número 9\"><rect x=\"-62\" y=\"-30\" width=\"124\" height=\"290\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><path d=\"M-62 -30 Q0 -80 62 -30\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><g transform=\"translate(0 -110) scale(0.95)\"><clipPath id=\"ec-tinta-azul-3-rojo\"><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\"/></clipPath><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" class=\"ilf-rojo ils-tinta\" stroke-width=\"2.5\"/><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" transform=\"scale(0.8) translate(0 -3)\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"1\"/><g transform=\"translate(-20 -22) scale(1.05)\" class=\"ilf-papel-claro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(20 -22) scale(1.05)\" class=\"ilf-papel-claro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(0 22) scale(1.05)\" class=\"ilf-papel-claro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g></g><circle cx=\"40\" cy=\"130\" r=\"5\" class=\"ilf-hierro\"/><text class=\"il-texto-foto\" x=\"0\" y=\"282\" text-anchor=\"middle\" font-size=\"13\">nº 9</text><rect x=\"-70\" y=\"-190\" width=\"140\" height=\"460\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"e5\" transform=\"translate(714 230)\" tabindex=\"0\" role=\"button\" aria-label=\"Portada del número 11\"><rect x=\"-62\" y=\"-30\" width=\"124\" height=\"290\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><path d=\"M-62 -30 Q0 -80 62 -30\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><g transform=\"translate(0 -110) scale(0.95)\"><clipPath id=\"ec-oro-1-null\"><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\"/></clipPath><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" class=\"ilf-oro ils-tinta\" stroke-width=\"2.5\"/><g class=\"ilf-rojo ils-tinta\" stroke-width=\"1\"><path d=\"M-18 30 L-14 4 C-22 -2 -24 -18 -12 -26 C-6 -34 6 -32 10 -24 L22 -30 L16 -18 C22 -10 20 4 12 8 L16 30 L8 30 L6 14 L-4 14 L-6 30 Z\"/><path d=\"M-14 4 C-30 0 -32 18 -24 24\" fill=\"none\" stroke-width=\"3\"/></g></g><circle cx=\"40\" cy=\"130\" r=\"5\" class=\"ilf-hierro\"/><text class=\"il-texto-foto\" x=\"0\" y=\"282\" text-anchor=\"middle\" font-size=\"13\">nº 11</text><rect x=\"-70\" y=\"-190\" width=\"140\" height=\"460\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"e6\" transform=\"translate(870 230)\" tabindex=\"0\" role=\"button\" aria-label=\"Portada del número 13\"><rect x=\"-62\" y=\"-30\" width=\"124\" height=\"290\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><path d=\"M-62 -30 Q0 -80 62 -30\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><g transform=\"translate(0 -110) scale(0.95)\"><clipPath id=\"ec-tinta-azul-2-rojo\"><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\"/></clipPath><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" class=\"ilf-rojo ils-tinta\" stroke-width=\"2.5\"/><path d=\"M-50 -60 L50 -60 L50 10 C50 45 25 62 0 72 C-25 62 -50 45 -50 10 Z\" transform=\"scale(0.8) translate(0 -3)\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"1\"/><g transform=\"translate(-20 -8) scale(1.05)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g><g transform=\"translate(20 -8) scale(1.05)\" class=\"ilf-oro ils-tinta\"><path d=\"M0 -14 C5 -8 5 -2 0 2 C-5 -2 -5 -8 0 -14 Z\"/><path d=\"M-1 0 C-8 -6 -14 -2 -12 4 C-10 8 -5 6 -3 3 Z\"/><path d=\"M1 0 C8 -6 14 -2 12 4 C10 8 5 6 3 3 Z\"/><rect x=\"-7\" y=\"3\" width=\"14\" height=\"3\"/><path d=\"M-2 6 L2 6 L1 12 L-1 12 Z\"/></g></g><circle cx=\"40\" cy=\"130\" r=\"5\" class=\"ilf-hierro\"/><text class=\"il-texto-foto\" x=\"0\" y=\"282\" text-anchor=\"middle\" font-size=\"13\">nº 13</text><rect x=\"-70\" y=\"-190\" width=\"140\" height=\"460\" class=\"punto-zona\"/></g><g pointer-events=\"none\"><rect width=\"960\" height=\"520\" class=\"ilf-manila\" opacity=\"0.2\" style=\"mix-blend-mode:multiply\"/><rect width=\"960\" height=\"520\" filter=\"url(#a9-grano)\" opacity=\"0.15\" style=\"mix-blend-mode:multiply\"/><rect width=\"960\" height=\"520\" fill=\"url(#a9-vineta)\"/></g></svg>",
    "cuadrado": "<svg viewBox=\"0 0 1536 1024\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cuadrado de números grabado en la tapa de la caja\"><defs><filter id=\"b9-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"b9-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"b9-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><linearGradient id=\"b9-bronce\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" class=\"ilst-oro-claro\"/><stop offset=\"0.5\" class=\"ilst-bronce\"/><stop offset=\"1\" class=\"ilst-oro-oscuro\"/></linearGradient><filter id=\"b9-grabado\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feMorphology in=\"SourceAlpha\" operator=\"dilate\" radius=\"0.19\" result=\"grueso\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.366\" numOctaves=\"2\" seed=\"4\" result=\"ruido\"/><feDisplacementMap in=\"grueso\" in2=\"ruido\" scale=\"0.8\" result=\"roto\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.0262\" numOctaves=\"2\" seed=\"9\" result=\"manchas\"/><feColorMatrix in=\"manchas\" type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.6 1.27\" result=\"desgaste\"/><feComposite in=\"roto\" in2=\"desgaste\" operator=\"in\" result=\"surco\"/><feFlood class=\"ilfl-tinta\" flood-opacity=\"0.92\"/><feComposite in2=\"surco\" operator=\"in\" result=\"hueco\"/><feOffset in=\"surco\" dx=\"2.7\" dy=\"2.7\" result=\"desplazado\"/><feComposite in=\"surco\" in2=\"desplazado\" operator=\"out\" result=\"bordeSombra\"/><feFlood class=\"ilfl-noche\" flood-opacity=\"0.75\"/><feComposite in2=\"bordeSombra\" operator=\"in\" result=\"sombra\"/><feComposite in=\"desplazado\" in2=\"surco\" operator=\"out\" result=\"labio\"/><feGaussianBlur in=\"labio\" stdDeviation=\"1.0\" result=\"labioSuave\"/><feFlood class=\"ilfl-papel-claro\" flood-opacity=\"0.5\"/><feComposite in2=\"labioSuave\" operator=\"in\" result=\"luz\"/><feMerge><feMergeNode in=\"luz\"/><feMergeNode in=\"hueco\"/><feMergeNode in=\"sombra\"/></feMerge></filter><radialGradient id=\"b9-cartela\" r=\"0.62\"><stop offset=\"0\" class=\"ilst-papel-claro\" stop-opacity=\"0.82\"/><stop offset=\"0.7\" class=\"ilst-papel-claro\" stop-opacity=\"0.7\"/><stop offset=\"1\" class=\"ilst-papel-claro\" stop-opacity=\"0\"/></radialGradient></defs><rect width=\"1536\" height=\"1024\" class=\"ilf-madera\"/><g transform=\"translate(335 30) scale(1.35)\"><rect x=\"60\" y=\"60\" width=\"520\" height=\"520\" rx=\"12\" fill=\"url(#b9-bronce)\" class=\"ils-tinta\" stroke-width=\"3\"/></g><image href=\"assets/img/009/tapa-cuadrado.jpg\" width=\"1536\" height=\"1024\"/><g filter=\"url(#b9-grabado)\"><g transform=\"translate(335 30) scale(1.35)\" class=\"ils-tinta\" stroke-width=\"0.5\"><rect x=\"100\" y=\"120\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"155\" y=\"187\" text-anchor=\"middle\" font-size=\"40\">16</text><rect x=\"210\" y=\"120\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"265\" y=\"187\" text-anchor=\"middle\" font-size=\"40\">3</text><rect x=\"320\" y=\"120\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"375\" y=\"187\" text-anchor=\"middle\" font-size=\"40\">2</text><rect x=\"430\" y=\"120\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"485\" y=\"187\" text-anchor=\"middle\" font-size=\"40\">13</text><rect x=\"100\" y=\"230\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"155\" y=\"297\" text-anchor=\"middle\" font-size=\"40\">5</text><rect x=\"210\" y=\"230\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"265\" y=\"297\" text-anchor=\"middle\" font-size=\"40\">10</text><rect x=\"320\" y=\"230\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"375\" y=\"297\" text-anchor=\"middle\" font-size=\"40\"></text><rect x=\"430\" y=\"230\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"485\" y=\"297\" text-anchor=\"middle\" font-size=\"40\">8</text><rect x=\"100\" y=\"340\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"155\" y=\"407\" text-anchor=\"middle\" font-size=\"40\">9</text><rect x=\"210\" y=\"340\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"265\" y=\"407\" text-anchor=\"middle\" font-size=\"40\">☆</text><rect x=\"320\" y=\"340\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"375\" y=\"407\" text-anchor=\"middle\" font-size=\"40\">★</text><rect x=\"430\" y=\"340\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"485\" y=\"407\" text-anchor=\"middle\" font-size=\"40\">12</text><rect x=\"100\" y=\"450\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"155\" y=\"517\" text-anchor=\"middle\" font-size=\"40\">4</text><rect x=\"210\" y=\"450\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"265\" y=\"517\" text-anchor=\"middle\" font-size=\"40\">15</text><rect x=\"320\" y=\"450\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"375\" y=\"517\" text-anchor=\"middle\" font-size=\"40\">14</text><rect x=\"430\" y=\"450\" width=\"110\" height=\"110\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-titulo\" x=\"485\" y=\"517\" text-anchor=\"middle\" font-size=\"40\">1</text></g></g><g><rect x=\"145\" y=\"363\" width=\"310\" height=\"214\" rx=\"36\" fill=\"url(#b9-cartela)\"/><text class=\"il-texto il-texto-etiqueta\" text-anchor=\"middle\" style=\"font-size:28px\" letter-spacing=\"1\"><tspan x=\"300\" y=\"424\">TODAS LAS</tspan><tspan x=\"300\" y=\"460\">FILAS, COLUMNAS</tspan><tspan x=\"300\" y=\"497\">Y DIAGONALES</tspan><tspan x=\"300\" y=\"533\">DICEN LO MISMO</tspan></text><rect x=\"1075\" y=\"332\" width=\"340\" height=\"276\" rx=\"36\" fill=\"url(#b9-cartela)\"/><text class=\"il-texto il-texto-etiqueta\" text-anchor=\"middle\" style=\"font-size:40px\"><tspan x=\"1245\" y=\"404\">El candado tiene</tspan><tspan x=\"1245\" y=\"456\">dos ruedas:</tspan><tspan x=\"1245\" y=\"508\">primero ☆,</tspan><tspan x=\"1245\" y=\"560\">luego ★.</tspan></text></g></svg>",
    "tablero": "<svg viewBox=\"0 0 640 660\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tablero de letras del tercer fragmento\"><defs><radialGradient id=\"c9-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"c9-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"c9-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"c9-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#c9-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#c9-papel)\" opacity=\"0.4\"/></pattern></defs><rect width=\"640\" height=\"660\" fill=\"url(#c9-foto)\"/><ellipse cx=\"524.8\" cy=\"132\" rx=\"57.599999999999994\" ry=\"46.2\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#c9-difuso)\"/><ellipse cx=\"76.8\" cy=\"561\" rx=\"44.800000000000004\" ry=\"39.6\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#c9-difuso)\"/><rect x=\"90\" y=\"470\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"130\" y=\"519\" text-anchor=\"middle\" font-size=\"28\">A</text><rect x=\"170\" y=\"470\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"210\" y=\"519\" text-anchor=\"middle\" font-size=\"28\">T</text><rect x=\"250\" y=\"470\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"290\" y=\"519\" text-anchor=\"middle\" font-size=\"28\">I</text><rect x=\"330\" y=\"470\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"370\" y=\"519\" text-anchor=\"middle\" font-size=\"28\">V</text><rect x=\"410\" y=\"470\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"450\" y=\"519\" text-anchor=\"middle\" font-size=\"28\">D</text><rect x=\"490\" y=\"470\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"530\" y=\"519\" text-anchor=\"middle\" font-size=\"28\">D</text><rect x=\"90\" y=\"390\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"130\" y=\"439\" text-anchor=\"middle\" font-size=\"28\">T</text><rect x=\"170\" y=\"390\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"210\" y=\"439\" text-anchor=\"middle\" font-size=\"28\">F</text><rect x=\"250\" y=\"390\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"290\" y=\"439\" text-anchor=\"middle\" font-size=\"28\">I</text><rect x=\"330\" y=\"390\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"370\" y=\"439\" text-anchor=\"middle\" font-size=\"28\">M</text><rect x=\"410\" y=\"390\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"450\" y=\"439\" text-anchor=\"middle\" font-size=\"28\">F</text><rect x=\"490\" y=\"390\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"530\" y=\"439\" text-anchor=\"middle\" font-size=\"28\">G</text><rect x=\"90\" y=\"310\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"130\" y=\"359\" text-anchor=\"middle\" font-size=\"28\">N</text><rect x=\"170\" y=\"310\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"210\" y=\"359\" text-anchor=\"middle\" font-size=\"28\">L</text><rect x=\"250\" y=\"310\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"290\" y=\"359\" text-anchor=\"middle\" font-size=\"28\">S</text><rect x=\"330\" y=\"310\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"370\" y=\"359\" text-anchor=\"middle\" font-size=\"28\">A</text><rect x=\"410\" y=\"310\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"450\" y=\"359\" text-anchor=\"middle\" font-size=\"28\">H</text><rect x=\"490\" y=\"310\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"530\" y=\"359\" text-anchor=\"middle\" font-size=\"28\">C</text><rect x=\"90\" y=\"230\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"130\" y=\"279\" text-anchor=\"middle\" font-size=\"28\">O</text><rect x=\"170\" y=\"230\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"210\" y=\"279\" text-anchor=\"middle\" font-size=\"28\">H</text><rect x=\"250\" y=\"230\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"290\" y=\"279\" text-anchor=\"middle\" font-size=\"28\">E</text><rect x=\"330\" y=\"230\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"370\" y=\"279\" text-anchor=\"middle\" font-size=\"28\">C</text><rect x=\"410\" y=\"230\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"450\" y=\"279\" text-anchor=\"middle\" font-size=\"28\">R</text><rect x=\"490\" y=\"230\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"530\" y=\"279\" text-anchor=\"middle\" font-size=\"28\">N</text><rect x=\"90\" y=\"150\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"130\" y=\"199\" text-anchor=\"middle\" font-size=\"28\">E</text><rect x=\"170\" y=\"150\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"210\" y=\"199\" text-anchor=\"middle\" font-size=\"28\">A</text><rect x=\"250\" y=\"150\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"290\" y=\"199\" text-anchor=\"middle\" font-size=\"28\">C</text><rect x=\"330\" y=\"150\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"370\" y=\"199\" text-anchor=\"middle\" font-size=\"28\">T</text><rect x=\"410\" y=\"150\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"450\" y=\"199\" text-anchor=\"middle\" font-size=\"28\">P</text><rect x=\"490\" y=\"150\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"530\" y=\"199\" text-anchor=\"middle\" font-size=\"28\">C</text><rect x=\"90\" y=\"70\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"130\" y=\"119\" text-anchor=\"middle\" font-size=\"28\">H</text><rect x=\"170\" y=\"70\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"210\" y=\"119\" text-anchor=\"middle\" font-size=\"28\">U</text><rect x=\"250\" y=\"70\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"290\" y=\"119\" text-anchor=\"middle\" font-size=\"28\">V</text><rect x=\"330\" y=\"70\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"370\" y=\"119\" text-anchor=\"middle\" font-size=\"28\">A</text><rect x=\"410\" y=\"70\" width=\"80\" height=\"80\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"450\" y=\"119\" text-anchor=\"middle\" font-size=\"28\">A</text><rect x=\"490\" y=\"70\" width=\"80\" height=\"80\" class=\"ilf-manila ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto-titulo-peq\" x=\"530\" y=\"119\" text-anchor=\"middle\" font-size=\"28\">A</text><text class=\"il-texto il-texto-etiqueta\" x=\"130\" y=\"576\" text-anchor=\"middle\">a</text><text class=\"il-texto il-texto-etiqueta\" x=\"210\" y=\"576\" text-anchor=\"middle\">b</text><text class=\"il-texto il-texto-etiqueta\" x=\"290\" y=\"576\" text-anchor=\"middle\">c</text><text class=\"il-texto il-texto-etiqueta\" x=\"370\" y=\"576\" text-anchor=\"middle\">d</text><text class=\"il-texto il-texto-etiqueta\" x=\"450\" y=\"576\" text-anchor=\"middle\">e</text><text class=\"il-texto il-texto-etiqueta\" x=\"530\" y=\"576\" text-anchor=\"middle\">f</text><text class=\"il-texto il-texto-etiqueta\" x=\"68\" y=\"516\" text-anchor=\"middle\">1</text><text class=\"il-texto il-texto-etiqueta\" x=\"68\" y=\"436\" text-anchor=\"middle\">2</text><text class=\"il-texto il-texto-etiqueta\" x=\"68\" y=\"356\" text-anchor=\"middle\">3</text><text class=\"il-texto il-texto-etiqueta\" x=\"68\" y=\"276\" text-anchor=\"middle\">4</text><text class=\"il-texto il-texto-etiqueta\" x=\"68\" y=\"196\" text-anchor=\"middle\">5</text><text class=\"il-texto il-texto-etiqueta\" x=\"68\" y=\"116\" text-anchor=\"middle\">6</text><rect x=\"90\" y=\"70\" width=\"480\" height=\"480\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"3\"/><rect width=\"640\" height=\"660\" filter=\"url(#c9-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"624\" height=\"644\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"614\" height=\"634\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "pasos": "<svg viewBox=\"0 0 900 680\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cuadrícula de la ribera junto al puente de Alcántara\"><defs><radialGradient id=\"d9-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"d9-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"d9-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"d9-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#d9-papel)\"/><image href=\"assets/img/texturas/mapa.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#d9-papel)\" opacity=\"0.45\"/></pattern></defs><rect width=\"900\" height=\"680\" fill=\"url(#d9-foto)\"/><ellipse cx=\"738\" cy=\"136\" rx=\"81\" ry=\"47.6\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#d9-difuso)\"/><ellipse cx=\"108\" cy=\"578\" rx=\"63.00000000000001\" ry=\"40.8\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#d9-difuso)\"/><text class=\"il-texto il-texto-titulo-peq\" x=\"450\" y=\"50\" text-anchor=\"middle\">Ribera del Tajo bajo el puente · un cuadro, diez pasos</text><path d=\"M706 70 C680.4 250 731.6 450 706 640 L880 640 L880 70 Z\" class=\"ilf-mar ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"642\" y=\"104\" width=\"147.2\" height=\"40\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><rect x=\"650\" y=\"70\" width=\"48\" height=\"74\" class=\"ilf-piedra-sombra ils-tinta\" stroke-width=\"2\"/><path d=\"M650 70 l6 -10 l6 10 l6 -10 l6 10 l6 -10 l6 10 l6 -10 l6 10\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto il-texto-etiqueta\" x=\"674\" y=\"220\" text-anchor=\"middle\">Torre</text><line x1=\"130\" y1=\"110\" x2=\"130\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"194\" y1=\"110\" x2=\"194\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"258\" y1=\"110\" x2=\"258\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"322\" y1=\"110\" x2=\"322\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"386\" y1=\"110\" x2=\"386\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"450\" y1=\"110\" x2=\"450\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"514\" y1=\"110\" x2=\"514\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"578\" y1=\"110\" x2=\"578\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"642\" y1=\"110\" x2=\"642\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"110\" x2=\"642\" y2=\"110\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"174\" x2=\"642\" y2=\"174\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"238\" x2=\"642\" y2=\"238\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"302\" x2=\"642\" y2=\"302\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"366\" x2=\"642\" y2=\"366\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"430\" x2=\"642\" y2=\"430\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"494\" x2=\"642\" y2=\"494\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"558\" x2=\"642\" y2=\"558\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><line x1=\"130\" y1=\"622\" x2=\"642\" y2=\"622\" class=\"ils-tinta-azul\" stroke-width=\"0.7\" opacity=\"0.4\"/><circle cx=\"162\" cy=\"590\" r=\"18\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"354\" cy=\"142\" r=\"18\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"546\" cy=\"206\" r=\"18\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"162\" cy=\"270\" r=\"18\" class=\"ilf-planta\" opacity=\"0.55\"/><g class=\"punto\" data-punto=\"s1\" transform=\"translate(290 206)\" tabindex=\"0\" role=\"button\" aria-label=\"Piedra en la columna 3, fila 2\"><circle r=\"26\" class=\"punto-zona\"/><path d=\"M-16 8 Q-18 -10 -2 -12 Q16 -12 16 4 Q14 14 0 14 Q-12 14 -16 8 Z\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/></g><g class=\"punto\" data-punto=\"s2\" transform=\"translate(482 270)\" tabindex=\"0\" role=\"button\" aria-label=\"Piedra en la columna 6, fila 3\"><circle r=\"26\" class=\"punto-zona\"/><path d=\"M-16 8 Q-18 -10 -2 -12 Q16 -12 16 4 Q14 14 0 14 Q-12 14 -16 8 Z\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/></g><g class=\"punto\" data-punto=\"s3\" transform=\"translate(226 398)\" tabindex=\"0\" role=\"button\" aria-label=\"Piedra en la columna 2, fila 5\"><circle r=\"26\" class=\"punto-zona\"/><path d=\"M-16 8 Q-18 -10 -2 -12 Q16 -12 16 4 Q14 14 0 14 Q-12 14 -16 8 Z\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/></g><g class=\"punto\" data-punto=\"s4\" transform=\"translate(354 462)\" tabindex=\"0\" role=\"button\" aria-label=\"Piedra en la columna 4, fila 6\"><circle r=\"26\" class=\"punto-zona\"/><path d=\"M-16 8 Q-18 -10 -2 -12 Q16 -12 16 4 Q14 14 0 14 Q-12 14 -16 8 Z\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/></g><g class=\"punto\" data-punto=\"s5\" transform=\"translate(546 526)\" tabindex=\"0\" role=\"button\" aria-label=\"Piedra en la columna 7, fila 7\"><circle r=\"26\" class=\"punto-zona\"/><path d=\"M-16 8 Q-18 -10 -2 -12 Q16 -12 16 4 Q14 14 0 14 Q-12 14 -16 8 Z\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/></g><g class=\"punto\" data-punto=\"s6\" transform=\"translate(418 334)\" tabindex=\"0\" role=\"button\" aria-label=\"Piedra en la columna 5, fila 4\"><circle r=\"26\" class=\"punto-zona\"/><path d=\"M-16 8 Q-18 -10 -2 -12 Q16 -12 16 4 Q14 14 0 14 Q-12 14 -16 8 Z\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/></g><g class=\"punto\" data-punto=\"s7\" transform=\"translate(610 398)\" tabindex=\"0\" role=\"button\" aria-label=\"Piedra en la columna 8, fila 5\"><circle r=\"26\" class=\"punto-zona\"/><path d=\"M-16 8 Q-18 -10 -2 -12 Q16 -12 16 4 Q14 14 0 14 Q-12 14 -16 8 Z\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/></g><g class=\"punto\" data-punto=\"s8\" transform=\"translate(290 526)\" tabindex=\"0\" role=\"button\" aria-label=\"Piedra en la columna 3, fila 7\"><circle r=\"26\" class=\"punto-zona\"/><path d=\"M-16 8 Q-18 -10 -2 -12 Q16 -12 16 4 Q14 14 0 14 Q-12 14 -16 8 Z\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/></g><g transform=\"translate(70 600)\"><circle r=\"26\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.2\"/><path d=\"M0 -32 L6 0 L0 5 L-6 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 32 L6 0 L0 -5 L-6 0 Z\" class=\"ilf-papel-oscuro ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"-38\" text-anchor=\"middle\">N</text></g><rect width=\"900\" height=\"680\" filter=\"url(#d9-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"884\" height=\"664\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"874\" height=\"654\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "piezas": "<svg viewBox=\"0 0 940 640\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"El mapa con el hueco del quinto fragmento y tres piezas encontradas\"><defs><radialGradient id=\"e9-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"e9-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"e9-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"e9-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#e9-papel)\"/><image href=\"assets/img/texturas/mapa.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#e9-papel)\" opacity=\"0.45\"/></pattern></defs><rect width=\"940\" height=\"640\" class=\"ilf-madera\"/><g transform=\"translate(250 40)\"><rect width=\"440\" height=\"300\" fill=\"url(#e9-foto)\" class=\"ils-tinta\" stroke-width=\"2\"/><path d=\"M74 0 L84 300\" class=\"ils-tinta-suave\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><path d=\"M148 0 L138 300\" class=\"ils-tinta-suave\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><path d=\"M222 0 L232 300\" class=\"ils-tinta-suave\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><path d=\"M296 0 L286 300\" class=\"ils-tinta-suave\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><path d=\"M370 0 L380 300\" class=\"ils-tinta-suave\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><path d=\"M20 240 C120 180 200 260 300 160 S420 80 430 40\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><g transform=\"translate(150 90)\"><path d=\"M0 0 L22 0 L32 -16 L46 0 L140 0 L140 22 L124 34 L140 46 L140 120 L106 120 L96 134 L84 120 L0 120 L0 92 L16 80 L0 68 Z\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/></g><text class=\"il-texto il-texto-peq\" x=\"12\" y=\"290\">fragmentos I a VI · falta el V</text></g><g class=\"punto\" data-punto=\"p1\" transform=\"translate(160 470)\" tabindex=\"0\" role=\"button\" aria-label=\"Pieza hallada en la librería de Dimas Olalla\"><rect x=\"-120\" y=\"-100\" width=\"240\" height=\"250\" rx=\"6\" class=\"ilf-madera-clara\" opacity=\"0.6\"/><g transform=\"translate(-70 -70)\"><path d=\"M0 0 L22 0 L32 -16 L46 0 L140 0 L140 22 L124 34 L140 46 L140 120 L106 120 L96 134 L84 120 L0 120 L0 92 L16 80 L0 68 Z\" transform=\"scale(-1 1) translate(-140 0)\" fill=\"url(#e9-foto)\" class=\"ils-tinta\" stroke-width=\"2\"/></g><text class=\"il-texto-foto\" y=\"128\" text-anchor=\"middle\" font-size=\"12\">En la librería de Dimas Olalla</text><rect x=\"-120\" y=\"-100\" width=\"240\" height=\"250\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"p2\" transform=\"translate(460 470)\" tabindex=\"0\" role=\"button\" aria-label=\"Pieza hallada en el coche de Rafael Sarmiento\"><rect x=\"-120\" y=\"-100\" width=\"240\" height=\"250\" rx=\"6\" class=\"ilf-madera-clara\" opacity=\"0.6\"/><g transform=\"translate(-70 -70)\"><path d=\"M0 0 L22 0 L32 -16 L46 0 L140 0 L140 22 L124 34 L140 46 L140 120 L106 120 L96 134 L84 120 L0 120 L0 92 L16 80 L0 68 Z\"  fill=\"url(#e9-foto)\" class=\"ils-tinta\" stroke-width=\"2\"/></g><text class=\"il-texto-foto\" y=\"128\" text-anchor=\"middle\" font-size=\"12\">En el coche de Rafael Sarmiento</text><rect x=\"-120\" y=\"-100\" width=\"240\" height=\"250\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"p3\" transform=\"translate(760 470)\" tabindex=\"0\" role=\"button\" aria-label=\"Pieza hallada en el archivo de la catedral\"><rect x=\"-120\" y=\"-100\" width=\"240\" height=\"250\" rx=\"6\" class=\"ilf-madera-clara\" opacity=\"0.6\"/><g transform=\"translate(-70 -70)\"><path d=\"M0 0 L22 0 L32 -16 L46 0 L140 0 L140 22 L124 34 L140 46 L140 120 L106 120 L96 134 L84 120 L0 120 L0 92 L16 80 L0 68 Z\" transform=\"scale(1 -1) translate(0 -120)\" fill=\"url(#e9-foto)\" class=\"ils-tinta\" stroke-width=\"2\"/></g><text class=\"il-texto-foto\" y=\"128\" text-anchor=\"middle\" font-size=\"12\">En el archivo de la catedral</text><rect x=\"-120\" y=\"-100\" width=\"240\" height=\"250\" class=\"punto-zona\"/></g><rect width=\"940\" height=\"640\" filter=\"url(#e9-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/></svg>",
    "sellos": "<svg viewBox=\"0 0 940 520\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Los siete sellos de lacre de los fragmentos\"><defs><filter id=\"f9-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"f9-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"f9-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><radialGradient id=\"f9-lacre\" cx=\"40%\" cy=\"35%\" r=\"70%\"><stop offset=\"0\" class=\"ilst-rojo-claro\"/><stop offset=\"1\" class=\"ilst-rojo\"/></radialGradient><pattern id=\"f9-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#f9-lacre)\"/><image href=\"assets/img/009/lacre.jpg\" x=\"-0.0556\" y=\"-0.0556\" width=\"1.1111\" height=\"1.1111\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#f9-lacre)\" opacity=\"0.5\"/></pattern></defs><rect width=\"940\" height=\"520\" class=\"ilf-papel-oscuro\"/><g transform=\"translate(110 140)\"><path d=\"M-62 4 C-66 -40 -36 -66 0 -64 C40 -66 66 -36 62 4 C64 44 34 66 -2 64 C-40 66 -64 40 -62 4 Z\" fill=\"url(#f9-foto)\" class=\"ils-rojo\" stroke-width=\"2\"/><circle r=\"44\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\" opacity=\"0.5\"/><path d=\"M-26 -16 L0 -22 L26 -16 L26 18 L0 12 L-26 18 Z M0 -22 L0 12\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\" opacity=\"0.65\"/><text class=\"il-texto-titulo\" y=\"-28\" text-anchor=\"middle\" font-size=\"18\" fill-opacity=\"0.75\">IV</text><text class=\"il-texto-titulo\" y=\"44\" text-anchor=\"middle\" font-size=\"26\" fill-opacity=\"0.8\">R</text></g><g transform=\"translate(350 140)\"><path d=\"M-62 4 C-66 -40 -36 -66 0 -64 C40 -66 66 -36 62 4 C64 44 34 66 -2 64 C-40 66 -64 40 -62 4 Z\" fill=\"url(#f9-foto)\" class=\"ils-rojo\" stroke-width=\"2\"/><circle r=\"44\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\" opacity=\"0.5\"/><path d=\"M-26 -16 L0 -22 L26 -16 L26 18 L0 12 L-26 18 Z M0 -22 L0 12\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\" opacity=\"0.65\"/><text class=\"il-texto-titulo\" y=\"-28\" text-anchor=\"middle\" font-size=\"18\" fill-opacity=\"0.75\">I</text><text class=\"il-texto-titulo\" y=\"44\" text-anchor=\"middle\" font-size=\"26\" fill-opacity=\"0.8\">L</text></g><g transform=\"translate(590 140)\"><path d=\"M-62 4 C-66 -40 -36 -66 0 -64 C40 -66 66 -36 62 4 C64 44 34 66 -2 64 C-40 66 -64 40 -62 4 Z\" fill=\"url(#f9-foto)\" class=\"ils-rojo\" stroke-width=\"2\"/><circle r=\"44\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\" opacity=\"0.5\"/><path transform=\"rotate(0)\" d=\"M0 -38 L5 -8 L0 0 L-5 -8 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><path transform=\"rotate(45)\" d=\"M0 -22 L5 -8 L0 0 L-5 -8 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><path transform=\"rotate(90)\" d=\"M0 -38 L5 -8 L0 0 L-5 -8 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><path transform=\"rotate(135)\" d=\"M0 -22 L5 -8 L0 0 L-5 -8 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><path transform=\"rotate(180)\" d=\"M0 -38 L5 -8 L0 0 L-5 -8 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><path transform=\"rotate(225)\" d=\"M0 -22 L5 -8 L0 0 L-5 -8 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><path transform=\"rotate(270)\" d=\"M0 -38 L5 -8 L0 0 L-5 -8 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><path transform=\"rotate(315)\" d=\"M0 -22 L5 -8 L0 0 L-5 -8 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><ellipse rx=\"11\" ry=\"6\" class=\"ilf-rojo-claro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"3\" class=\"ilf-tinta\"/><text class=\"il-texto-titulo\" y=\"-46\" text-anchor=\"middle\" font-size=\"18\" fill-opacity=\"0.75\">VII</text></g><g transform=\"translate(830 140)\"><path d=\"M-62 4 C-66 -40 -36 -66 0 -64 C40 -66 66 -36 62 4 C64 44 34 66 -2 64 C-40 66 -64 40 -62 4 Z\" fill=\"url(#f9-foto)\" class=\"ils-rojo\" stroke-width=\"2\"/><circle r=\"44\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\" opacity=\"0.5\"/><path d=\"M-26 -16 L0 -22 L26 -16 L26 18 L0 12 L-26 18 Z M0 -22 L0 12\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\" opacity=\"0.65\"/><text class=\"il-texto-titulo\" y=\"-28\" text-anchor=\"middle\" font-size=\"18\" fill-opacity=\"0.75\">VI</text><text class=\"il-texto-titulo\" y=\"44\" text-anchor=\"middle\" font-size=\"26\" fill-opacity=\"0.8\">S</text></g><g transform=\"translate(110 370)\"><path d=\"M-62 4 C-66 -40 -36 -66 0 -64 C40 -66 66 -36 62 4 C64 44 34 66 -2 64 C-40 66 -64 40 -62 4 Z\" fill=\"url(#f9-foto)\" class=\"ils-rojo\" stroke-width=\"2\"/><circle r=\"44\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\" opacity=\"0.5\"/><path d=\"M-26 -16 L0 -22 L26 -16 L26 18 L0 12 L-26 18 Z M0 -22 L0 12\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\" opacity=\"0.65\"/><text class=\"il-texto-titulo\" y=\"-28\" text-anchor=\"middle\" font-size=\"18\" fill-opacity=\"0.75\">II</text><text class=\"il-texto-titulo\" y=\"44\" text-anchor=\"middle\" font-size=\"26\" fill-opacity=\"0.8\">I</text></g><g transform=\"translate(350 370)\"><path d=\"M-62 4 C-66 -40 -36 -66 0 -64 C40 -66 66 -36 62 4 C64 44 34 66 -2 64 C-40 66 -64 40 -62 4 Z\" fill=\"url(#f9-foto)\" class=\"ils-rojo\" stroke-width=\"2\"/><circle r=\"44\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\" opacity=\"0.5\"/><path d=\"M-26 -16 L0 -22 L26 -16 L26 18 L0 12 L-26 18 Z M0 -22 L0 12\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\" opacity=\"0.65\"/><text class=\"il-texto-titulo\" y=\"-28\" text-anchor=\"middle\" font-size=\"18\" fill-opacity=\"0.75\">V</text><text class=\"il-texto-titulo\" y=\"44\" text-anchor=\"middle\" font-size=\"26\" fill-opacity=\"0.8\">O</text></g><g transform=\"translate(590 370)\"><path d=\"M-62 4 C-66 -40 -36 -66 0 -64 C40 -66 66 -36 62 4 C64 44 34 66 -2 64 C-40 66 -64 40 -62 4 Z\" fill=\"url(#f9-foto)\" class=\"ils-rojo\" stroke-width=\"2\"/><circle r=\"44\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\" opacity=\"0.5\"/><path d=\"M-26 -16 L0 -22 L26 -16 L26 18 L0 12 L-26 18 Z M0 -22 L0 12\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\" opacity=\"0.65\"/><text class=\"il-texto-titulo\" y=\"-28\" text-anchor=\"middle\" font-size=\"18\" fill-opacity=\"0.75\">III</text><text class=\"il-texto-titulo\" y=\"44\" text-anchor=\"middle\" font-size=\"26\" fill-opacity=\"0.8\">B</text></g><g pointer-events=\"none\"><rect width=\"940\" height=\"520\" class=\"ilf-manila\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\"/><rect width=\"940\" height=\"520\" filter=\"url(#f9-grano)\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"940\" height=\"520\" fill=\"url(#f9-vineta)\"/></g></svg>",
    "toledo": "<svg viewBox=\"0 0 900 640\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Plano de Toledo\"><defs><radialGradient id=\"g9-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"g9-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"g9-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"g9-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#g9-papel)\"/><image href=\"assets/img/texturas/mapa.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#g9-papel)\" opacity=\"0.45\"/></pattern></defs><rect width=\"900\" height=\"640\" fill=\"url(#g9-foto)\"/><ellipse cx=\"738\" cy=\"128\" rx=\"81\" ry=\"44.800000000000004\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#g9-difuso)\"/><ellipse cx=\"108\" cy=\"544\" rx=\"63.00000000000001\" ry=\"38.4\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#g9-difuso)\"/><path d=\"M880 230 C820 380 780 470 640 560 C500 640 300 620 160 570 C90 540 50 470 30 400\" fill=\"none\" class=\"ils-mar-oscuro\" stroke-width=\"34\" stroke-linecap=\"round\" opacity=\"0.7\"/><text class=\"il-texto il-texto-etiqueta\" x=\"420\" y=\"625\" font-style=\"italic\">Río Tajo</text><path d=\"M90 380 C100 200 300 110 520 100 C700 95 830 190 820 300 C800 420 700 520 520 540 C330 560 110 520 90 380 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"3\" opacity=\"0.85\"/><rect x=\"120\" y=\"140\" width=\"30\" height=\"22\" rx=\"3\" transform=\"rotate(-8 120 140)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"195\" y=\"153\" width=\"41\" height=\"25\" rx=\"3\" transform=\"rotate(-4 195 153)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"251\" y=\"151\" width=\"34\" height=\"28\" rx=\"3\" transform=\"rotate(0 251 151)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"307\" y=\"149\" width=\"45\" height=\"31\" rx=\"3\" transform=\"rotate(4 307 149)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"363\" y=\"147\" width=\"38\" height=\"34\" rx=\"3\" transform=\"rotate(8 363 147)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"419\" y=\"145\" width=\"31\" height=\"23\" rx=\"3\" transform=\"rotate(-8 419 145)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"475\" y=\"143\" width=\"42\" height=\"26\" rx=\"3\" transform=\"rotate(-4 475 143)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"531\" y=\"141\" width=\"35\" height=\"29\" rx=\"3\" transform=\"rotate(0 531 141)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"587\" y=\"154\" width=\"46\" height=\"32\" rx=\"3\" transform=\"rotate(4 587 154)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"643\" y=\"152\" width=\"39\" height=\"35\" rx=\"3\" transform=\"rotate(8 643 152)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"718\" y=\"150\" width=\"32\" height=\"24\" rx=\"3\" transform=\"rotate(-8 718 150)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"774\" y=\"148\" width=\"43\" height=\"27\" rx=\"3\" transform=\"rotate(-4 774 148)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"124\" y=\"195\" width=\"37\" height=\"27\" rx=\"3\" transform=\"rotate(-4 124 195)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"180\" y=\"208\" width=\"30\" height=\"30\" rx=\"3\" transform=\"rotate(0 180 208)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"236\" y=\"206\" width=\"41\" height=\"33\" rx=\"3\" transform=\"rotate(4 236 206)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"311\" y=\"204\" width=\"34\" height=\"22\" rx=\"3\" transform=\"rotate(8 311 204)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"367\" y=\"202\" width=\"45\" height=\"25\" rx=\"3\" transform=\"rotate(-8 367 202)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"423\" y=\"200\" width=\"38\" height=\"28\" rx=\"3\" transform=\"rotate(-4 423 200)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"479\" y=\"198\" width=\"31\" height=\"31\" rx=\"3\" transform=\"rotate(0 479 198)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"535\" y=\"196\" width=\"42\" height=\"34\" rx=\"3\" transform=\"rotate(4 535 196)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"591\" y=\"194\" width=\"35\" height=\"23\" rx=\"3\" transform=\"rotate(8 591 194)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"647\" y=\"207\" width=\"46\" height=\"26\" rx=\"3\" transform=\"rotate(-8 647 207)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"703\" y=\"205\" width=\"39\" height=\"29\" rx=\"3\" transform=\"rotate(-4 703 205)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"759\" y=\"203\" width=\"32\" height=\"32\" rx=\"3\" transform=\"rotate(0 759 203)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"128\" y=\"250\" width=\"44\" height=\"32\" rx=\"3\" transform=\"rotate(0 128 250)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"184\" y=\"248\" width=\"37\" height=\"35\" rx=\"3\" transform=\"rotate(4 184 248)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"240\" y=\"261\" width=\"30\" height=\"24\" rx=\"3\" transform=\"rotate(8 240 261)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"296\" y=\"259\" width=\"41\" height=\"27\" rx=\"3\" transform=\"rotate(-8 296 259)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"352\" y=\"257\" width=\"34\" height=\"30\" rx=\"3\" transform=\"rotate(-4 352 257)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"427\" y=\"255\" width=\"45\" height=\"33\" rx=\"3\" transform=\"rotate(0 427 255)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"483\" y=\"253\" width=\"38\" height=\"22\" rx=\"3\" transform=\"rotate(4 483 253)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"539\" y=\"251\" width=\"31\" height=\"25\" rx=\"3\" transform=\"rotate(8 539 251)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"595\" y=\"249\" width=\"42\" height=\"28\" rx=\"3\" transform=\"rotate(-8 595 249)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"651\" y=\"262\" width=\"35\" height=\"31\" rx=\"3\" transform=\"rotate(-4 651 262)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"707\" y=\"260\" width=\"46\" height=\"34\" rx=\"3\" transform=\"rotate(0 707 260)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"763\" y=\"258\" width=\"39\" height=\"23\" rx=\"3\" transform=\"rotate(4 763 258)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"132\" y=\"305\" width=\"33\" height=\"23\" rx=\"3\" transform=\"rotate(4 132 305)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"188\" y=\"303\" width=\"44\" height=\"26\" rx=\"3\" transform=\"rotate(8 188 303)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"244\" y=\"316\" width=\"37\" height=\"29\" rx=\"3\" transform=\"rotate(-8 244 316)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"300\" y=\"314\" width=\"30\" height=\"32\" rx=\"3\" transform=\"rotate(-4 300 314)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"356\" y=\"312\" width=\"41\" height=\"35\" rx=\"3\" transform=\"rotate(0 356 312)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"412\" y=\"310\" width=\"34\" height=\"24\" rx=\"3\" transform=\"rotate(4 412 310)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"468\" y=\"308\" width=\"45\" height=\"27\" rx=\"3\" transform=\"rotate(8 468 308)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"543\" y=\"306\" width=\"38\" height=\"30\" rx=\"3\" transform=\"rotate(-8 543 306)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"599\" y=\"304\" width=\"31\" height=\"33\" rx=\"3\" transform=\"rotate(-4 599 304)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"655\" y=\"302\" width=\"42\" height=\"22\" rx=\"3\" transform=\"rotate(0 655 302)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"711\" y=\"315\" width=\"35\" height=\"25\" rx=\"3\" transform=\"rotate(4 711 315)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"767\" y=\"313\" width=\"46\" height=\"28\" rx=\"3\" transform=\"rotate(8 767 313)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"136\" y=\"360\" width=\"40\" height=\"28\" rx=\"3\" transform=\"rotate(8 136 360)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"192\" y=\"358\" width=\"33\" height=\"31\" rx=\"3\" transform=\"rotate(-8 192 358)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"248\" y=\"356\" width=\"44\" height=\"34\" rx=\"3\" transform=\"rotate(-4 248 356)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"304\" y=\"369\" width=\"37\" height=\"23\" rx=\"3\" transform=\"rotate(0 304 369)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"360\" y=\"367\" width=\"30\" height=\"26\" rx=\"3\" transform=\"rotate(4 360 367)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"416\" y=\"365\" width=\"41\" height=\"29\" rx=\"3\" transform=\"rotate(8 416 365)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"472\" y=\"363\" width=\"34\" height=\"32\" rx=\"3\" transform=\"rotate(-8 472 363)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"528\" y=\"361\" width=\"45\" height=\"35\" rx=\"3\" transform=\"rotate(-4 528 361)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"584\" y=\"359\" width=\"38\" height=\"24\" rx=\"3\" transform=\"rotate(0 584 359)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"659\" y=\"357\" width=\"31\" height=\"27\" rx=\"3\" transform=\"rotate(4 659 357)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"715\" y=\"370\" width=\"42\" height=\"30\" rx=\"3\" transform=\"rotate(8 715 370)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"771\" y=\"368\" width=\"35\" height=\"33\" rx=\"3\" transform=\"rotate(-8 771 368)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"121\" y=\"415\" width=\"47\" height=\"33\" rx=\"3\" transform=\"rotate(-8 121 415)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"196\" y=\"413\" width=\"40\" height=\"22\" rx=\"3\" transform=\"rotate(-4 196 413)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"252\" y=\"411\" width=\"33\" height=\"25\" rx=\"3\" transform=\"rotate(0 252 411)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"308\" y=\"424\" width=\"44\" height=\"28\" rx=\"3\" transform=\"rotate(4 308 424)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"364\" y=\"422\" width=\"37\" height=\"31\" rx=\"3\" transform=\"rotate(8 364 422)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"420\" y=\"420\" width=\"30\" height=\"34\" rx=\"3\" transform=\"rotate(-8 420 420)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"476\" y=\"418\" width=\"41\" height=\"23\" rx=\"3\" transform=\"rotate(-4 476 418)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"532\" y=\"416\" width=\"34\" height=\"26\" rx=\"3\" transform=\"rotate(0 532 416)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"588\" y=\"414\" width=\"45\" height=\"29\" rx=\"3\" transform=\"rotate(4 588 414)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"644\" y=\"412\" width=\"38\" height=\"32\" rx=\"3\" transform=\"rotate(8 644 412)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"700\" y=\"410\" width=\"31\" height=\"35\" rx=\"3\" transform=\"rotate(-8 700 410)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"775\" y=\"423\" width=\"42\" height=\"24\" rx=\"3\" transform=\"rotate(-4 775 423)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"125\" y=\"470\" width=\"36\" height=\"24\" rx=\"3\" transform=\"rotate(-4 125 470)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"181\" y=\"468\" width=\"47\" height=\"27\" rx=\"3\" transform=\"rotate(0 181 468)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"237\" y=\"466\" width=\"40\" height=\"30\" rx=\"3\" transform=\"rotate(4 237 466)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"312\" y=\"464\" width=\"33\" height=\"33\" rx=\"3\" transform=\"rotate(8 312 464)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"368\" y=\"477\" width=\"44\" height=\"22\" rx=\"3\" transform=\"rotate(-8 368 477)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"424\" y=\"475\" width=\"37\" height=\"25\" rx=\"3\" transform=\"rotate(-4 424 475)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"480\" y=\"473\" width=\"30\" height=\"28\" rx=\"3\" transform=\"rotate(0 480 473)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"536\" y=\"471\" width=\"41\" height=\"31\" rx=\"3\" transform=\"rotate(4 536 471)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"592\" y=\"469\" width=\"34\" height=\"34\" rx=\"3\" transform=\"rotate(8 592 469)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"648\" y=\"467\" width=\"45\" height=\"23\" rx=\"3\" transform=\"rotate(-8 648 467)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"704\" y=\"465\" width=\"38\" height=\"26\" rx=\"3\" transform=\"rotate(-4 704 465)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><rect x=\"760\" y=\"478\" width=\"31\" height=\"29\" rx=\"3\" transform=\"rotate(0 760 478)\" class=\"ilf-papel-oscuro\" opacity=\"0.35\"/><g class=\"punto\" data-punto=\"t1\" transform=\"translate(180 250)\" tabindex=\"0\" role=\"button\" aria-label=\"Librería Sarmiento\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"180\" y=\"234\" text-anchor=\"middle\" pointer-events=\"none\">Librería Sarmiento</text><g class=\"punto\" data-punto=\"t2\" transform=\"translate(640 160)\" tabindex=\"0\" role=\"button\" aria-label=\"Casa de los escudos\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"640\" y=\"144\" text-anchor=\"middle\" pointer-events=\"none\">Casa de los escudos</text><g class=\"punto\" data-punto=\"t3\" transform=\"translate(520 200)\" tabindex=\"0\" role=\"button\" aria-label=\"Zocodover\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"520\" y=\"184\" text-anchor=\"middle\" pointer-events=\"none\">Zocodover</text><g class=\"punto\" data-punto=\"t4\" transform=\"translate(780 420)\" tabindex=\"0\" role=\"button\" aria-label=\"Puente de Alcántara\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"780\" y=\"404\" text-anchor=\"middle\" pointer-events=\"none\">Puente de Alcántara</text><g class=\"punto\" data-punto=\"t5\" transform=\"translate(560 400)\" tabindex=\"0\" role=\"button\" aria-label=\"Catedral\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"560\" y=\"384\" text-anchor=\"middle\" pointer-events=\"none\">Catedral</text><g class=\"punto\" data-punto=\"t6\" transform=\"translate(240 470)\" tabindex=\"0\" role=\"button\" aria-label=\"Sinagoga del Tránsito\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"240\" y=\"454\" text-anchor=\"middle\" pointer-events=\"none\">Sinagoga del Tránsito</text><g class=\"punto\" data-punto=\"t7\" transform=\"translate(432 321)\" tabindex=\"0\" role=\"button\" aria-label=\"Cueva de Hércules\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"432\" y=\"305\" text-anchor=\"middle\" pointer-events=\"none\">Cueva de Hércules</text><g class=\"punto\" data-punto=\"t8\" transform=\"translate(150 380)\" tabindex=\"0\" role=\"button\" aria-label=\"San Juan de los Reyes\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"150\" y=\"364\" text-anchor=\"middle\" pointer-events=\"none\">San Juan de los Reyes</text><g class=\"punto\" data-punto=\"t9\" transform=\"translate(690 290)\" tabindex=\"0\" role=\"button\" aria-label=\"Alcázar\"><circle r=\"22\" class=\"punto-zona\"/><circle r=\"9\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2.5\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"690\" y=\"274\" text-anchor=\"middle\" pointer-events=\"none\">Alcázar</text><g transform=\"translate(90 90)\"><circle r=\"26\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.2\"/><path d=\"M0 -32 L6 0 L0 5 L-6 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 32 L6 0 L0 -5 L-6 0 Z\" class=\"ilf-papel-oscuro ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"-38\" text-anchor=\"middle\">N</text></g><rect width=\"900\" height=\"640\" filter=\"url(#g9-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"884\" height=\"624\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"874\" height=\"614\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "despacho": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"El despacho de Aurelio Sarmiento la mañana del entierro\"><defs><filter id=\"h9-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"h9-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.6\"/></radialGradient><linearGradient id=\"h9-pared\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></linearGradient></defs><rect width=\"760\" height=\"420\" fill=\"url(#h9-pared)\"/><rect y=\"420\" width=\"760\" height=\"140\" class=\"ilf-madera\"/><path d=\"M0 455 H760 M0 490 H760 M0 525 H760\" class=\"ils-tinta\" stroke-width=\"0.8\" opacity=\"0.35\"/><rect x=\"180\" y=\"436\" width=\"400\" height=\"104\" rx=\"4\" class=\"ilf-rojo\" opacity=\"0.3\"/><rect x=\"188\" y=\"444\" width=\"384\" height=\"88\" fill=\"none\" class=\"ils-oro\" stroke-width=\"1\" opacity=\"0.5\"/><text class=\"il-texto-titulo\" x=\"230\" y=\"36\" text-anchor=\"middle\" font-size=\"19\" fill-opacity=\"0.7\" letter-spacing=\"2\">HIC LIBRI DORMIVNT</text><rect x=\"40\" y=\"50\" width=\"380\" height=\"252\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><rect x=\"48\" y=\"58\" width=\"364\" height=\"236\" class=\"ilf-noche\" opacity=\"0.35\"/><rect x=\"52\" y=\"77\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"65\" y=\"88\" width=\"10\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"76\" y=\"77\" width=\"17\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"94\" y=\"88\" width=\"15\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"110\" y=\"77\" width=\"13\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"124\" y=\"88\" width=\"11\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"136\" y=\"77\" width=\"9\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"146\" y=\"88\" width=\"16\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"163\" y=\"77\" width=\"14\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"178\" y=\"88\" width=\"12\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"191\" y=\"77\" width=\"10\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"202\" y=\"88\" width=\"17\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"220\" y=\"77\" width=\"15\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"236\" y=\"88\" width=\"13\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"250\" y=\"77\" width=\"11\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"262\" y=\"88\" width=\"9\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"272\" y=\"77\" width=\"16\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"289\" y=\"88\" width=\"14\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"304\" y=\"77\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"317\" y=\"88\" width=\"10\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"328\" y=\"77\" width=\"17\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"346\" y=\"88\" width=\"15\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"362\" y=\"77\" width=\"13\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"52\" y=\"159\" width=\"11\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"64\" y=\"170\" width=\"9\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"74\" y=\"159\" width=\"16\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"91\" y=\"170\" width=\"14\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"106\" y=\"159\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"119\" y=\"170\" width=\"10\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"130\" y=\"159\" width=\"17\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"148\" y=\"170\" width=\"15\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"164\" y=\"159\" width=\"13\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"178\" y=\"170\" width=\"11\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"190\" y=\"159\" width=\"9\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"200\" y=\"170\" width=\"16\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"217\" y=\"159\" width=\"14\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"232\" y=\"170\" width=\"12\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"245\" y=\"159\" width=\"10\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"256\" y=\"170\" width=\"17\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"274\" y=\"159\" width=\"15\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"290\" y=\"170\" width=\"13\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"304\" y=\"159\" width=\"11\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"316\" y=\"170\" width=\"9\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"326\" y=\"159\" width=\"16\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"343\" y=\"170\" width=\"14\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"358\" y=\"159\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"52\" y=\"241\" width=\"14\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"67\" y=\"252\" width=\"12\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"80\" y=\"241\" width=\"10\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"91\" y=\"252\" width=\"17\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"109\" y=\"241\" width=\"15\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"125\" y=\"252\" width=\"13\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"139\" y=\"241\" width=\"11\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"151\" y=\"252\" width=\"9\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"161\" y=\"241\" width=\"16\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"178\" y=\"252\" width=\"14\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"193\" y=\"241\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"206\" y=\"252\" width=\"10\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"217\" y=\"241\" width=\"17\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"235\" y=\"252\" width=\"15\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"251\" y=\"241\" width=\"13\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"265\" y=\"252\" width=\"11\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"277\" y=\"241\" width=\"9\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"287\" y=\"252\" width=\"16\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"304\" y=\"241\" width=\"14\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"319\" y=\"252\" width=\"12\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"332\" y=\"241\" width=\"10\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"343\" y=\"252\" width=\"17\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"361\" y=\"241\" width=\"15\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"44\" y=\"130\" width=\"372\" height=\"6\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"44\" y=\"212\" width=\"372\" height=\"6\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"44\" y=\"294\" width=\"372\" height=\"6\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto-foto\" x=\"60\" y=\"145\" font-size=\"11\" fill-opacity=\"0.85\">1480 – 1600</text><text class=\"il-texto-foto\" x=\"60\" y=\"227\" font-size=\"11\" fill-opacity=\"0.85\">1601 – 1700</text><text class=\"il-texto-foto\" x=\"60\" y=\"309\" font-size=\"11\" fill-opacity=\"0.85\">1701 – 1927</text><g class=\"ils-tinta\" stroke-width=\"1.2\"><rect x=\"372\" y=\"56\" width=\"6\" height=\"246\" class=\"ilf-madera-clara\"/><rect x=\"398\" y=\"56\" width=\"6\" height=\"246\" class=\"ilf-madera-clara\"/><path d=\"M378 80 H398 M378 110 H398 M378 140 H398 M378 170 H398 M378 200 H398 M378 230 H398 M378 260 H398 M378 290 H398\" class=\"ils-madera-clara\" stroke-width=\"3\"/></g><circle cx=\"640\" cy=\"98\" r=\"3\" class=\"ilf-hierro\"/><g transform=\"translate(640 150)\"><rect x=\"-52\" y=\"-44\" width=\"104\" height=\"88\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"2\"/><rect x=\"-42\" y=\"-34\" width=\"84\" height=\"68\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><path d=\"M-30 20 C-10 -10 10 30 30 -14\" fill=\"none\" class=\"ils-tinta-azul\" stroke-width=\"1.5\"/><path d=\"M-36 -20 L-10 -24 L4 -8 L26 -18 L36 2\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><circle cx=\"18\" cy=\"16\" r=\"5\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"1.2\"/></g><rect x=\"60\" y=\"300\" width=\"100\" height=\"120\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><g transform=\"translate(110 365)\"><rect x=\"-42\" y=\"-12\" width=\"84\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><g transform=\"translate(110 400)\"><rect x=\"-42\" y=\"-12\" width=\"84\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><g transform=\"translate(110 330)\"><rect x=\"-42\" y=\"-12\" width=\"84\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><rect x=\"215\" y=\"372\" width=\"310\" height=\"48\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"200\" y=\"356\" width=\"340\" height=\"16\" rx=\"2\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.5\"/><rect x=\"222\" y=\"420\" width=\"12\" height=\"12\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><rect x=\"506\" y=\"420\" width=\"12\" height=\"12\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><g transform=\"translate(300 392)\"><rect x=\"-40\" y=\"-12\" width=\"80\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><g transform=\"translate(440 392)\"><rect x=\"-40\" y=\"-12\" width=\"80\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><g transform=\"translate(470 356)\"><ellipse rx=\"18\" ry=\"5\" class=\"ilf-bronce ils-tinta\" stroke-width=\"1\"/><rect x=\"-3\" y=\"-40\" width=\"6\" height=\"36\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.8\"/><path d=\"M-34 -30 L34 -30 L26 -50 L-26 -50 Z\" class=\"ilf-verde ils-tinta\" stroke-width=\"1.2\"/><path d=\"M-30 -30 L30 -30 L22 -22 L-22 -22 Z\" class=\"ilf-oro-claro\" opacity=\"0.6\"/></g><rect x=\"330\" y=\"344\" width=\"60\" height=\"12\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"0.8\" transform=\"rotate(-4 360 350)\"/><rect x=\"340\" y=\"340\" width=\"56\" height=\"12\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\" transform=\"rotate(3 368 346)\"/><g transform=\"translate(240 352)\"><ellipse rx=\"16\" ry=\"6\" class=\"ilf-vidrio ils-tinta\" stroke-width=\"1\"/></g><g transform=\"translate(660 400)\"><rect x=\"-24\" y=\"-72\" width=\"48\" height=\"12\" rx=\"2\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"-22\" y=\"-60\" width=\"5\" height=\"30\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><rect x=\"17\" y=\"-60\" width=\"5\" height=\"30\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><rect x=\"-28\" y=\"-30\" width=\"56\" height=\"9\" rx=\"2\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.2\"/><rect x=\"-24\" y=\"-21\" width=\"5\" height=\"41\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><rect x=\"19\" y=\"-21\" width=\"5\" height=\"41\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/></g><g transform=\"translate(520 470)\"></g><text class=\"il-texto-foto\" x=\"748\" y=\"548\" text-anchor=\"end\" font-size=\"12\" fill-opacity=\"0.85\">Despacho de A. Sarmiento · calle de la Plata</text><g pointer-events=\"none\"><rect width=\"760\" height=\"560\" class=\"ilf-manila\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" filter=\"url(#h9-grano)\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" fill=\"url(#h9-vineta)\"/></g></svg>",
    "despacho-registro": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"El despacho de Aurelio Sarmiento tras la entrada\"><defs><filter id=\"h9b-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"h9b-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.6\"/></radialGradient><linearGradient id=\"h9b-pared\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></linearGradient></defs><rect width=\"760\" height=\"420\" fill=\"url(#h9b-pared)\"/><rect y=\"420\" width=\"760\" height=\"140\" class=\"ilf-madera\"/><path d=\"M0 455 H760 M0 490 H760 M0 525 H760\" class=\"ils-tinta\" stroke-width=\"0.8\" opacity=\"0.35\"/><rect x=\"180\" y=\"436\" width=\"400\" height=\"104\" rx=\"4\" class=\"ilf-rojo\" opacity=\"0.3\"/><rect x=\"188\" y=\"444\" width=\"384\" height=\"88\" fill=\"none\" class=\"ils-oro\" stroke-width=\"1\" opacity=\"0.5\"/><text class=\"il-texto-titulo\" x=\"230\" y=\"36\" text-anchor=\"middle\" font-size=\"19\" fill-opacity=\"0.7\" letter-spacing=\"2\">HIC LIBRI DORMIVNT</text><rect x=\"40\" y=\"50\" width=\"380\" height=\"252\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><rect x=\"48\" y=\"58\" width=\"364\" height=\"236\" class=\"ilf-noche\" opacity=\"0.35\"/><rect x=\"52\" y=\"77\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"65\" y=\"88\" width=\"10\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"76\" y=\"77\" width=\"17\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"94\" y=\"88\" width=\"15\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"110\" y=\"77\" width=\"13\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"124\" y=\"88\" width=\"11\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"136\" y=\"77\" width=\"9\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"146\" y=\"88\" width=\"16\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"163\" y=\"77\" width=\"14\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"178\" y=\"88\" width=\"12\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"191\" y=\"77\" width=\"10\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"202\" y=\"88\" width=\"17\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"220\" y=\"77\" width=\"15\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"236\" y=\"88\" width=\"13\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"250\" y=\"77\" width=\"11\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"262\" y=\"88\" width=\"9\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"272\" y=\"77\" width=\"16\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"289\" y=\"88\" width=\"14\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"304\" y=\"77\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"317\" y=\"88\" width=\"10\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"328\" y=\"77\" width=\"17\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"346\" y=\"88\" width=\"15\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"362\" y=\"77\" width=\"13\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"52\" y=\"159\" width=\"11\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"64\" y=\"170\" width=\"9\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"74\" y=\"159\" width=\"16\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"91\" y=\"170\" width=\"14\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"106\" y=\"159\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"119\" y=\"170\" width=\"10\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"130\" y=\"159\" width=\"17\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"148\" y=\"170\" width=\"15\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"164\" y=\"159\" width=\"13\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"178\" y=\"170\" width=\"11\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"190\" y=\"159\" width=\"9\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"200\" y=\"170\" width=\"16\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"217\" y=\"159\" width=\"14\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"232\" y=\"170\" width=\"12\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"245\" y=\"159\" width=\"10\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"256\" y=\"170\" width=\"17\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"274\" y=\"159\" width=\"15\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"290\" y=\"170\" width=\"13\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"304\" y=\"159\" width=\"11\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"316\" y=\"170\" width=\"9\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"326\" y=\"159\" width=\"16\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"343\" y=\"170\" width=\"14\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"358\" y=\"159\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"52\" y=\"241\" width=\"14\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"67\" y=\"252\" width=\"12\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"80\" y=\"241\" width=\"10\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"91\" y=\"252\" width=\"17\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"109\" y=\"241\" width=\"15\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"125\" y=\"252\" width=\"13\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"139\" y=\"241\" width=\"11\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"151\" y=\"252\" width=\"9\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"161\" y=\"241\" width=\"16\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"178\" y=\"252\" width=\"14\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"193\" y=\"241\" width=\"12\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"206\" y=\"252\" width=\"10\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"217\" y=\"241\" width=\"17\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"235\" y=\"252\" width=\"15\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"251\" y=\"241\" width=\"13\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"265\" y=\"252\" width=\"11\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"277\" y=\"241\" width=\"9\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"287\" y=\"252\" width=\"16\" height=\"42\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"304\" y=\"241\" width=\"14\" height=\"53\" class=\"ilf-manila-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"319\" y=\"252\" width=\"12\" height=\"42\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"0.8\"/><rect x=\"332\" y=\"241\" width=\"10\" height=\"53\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"343\" y=\"252\" width=\"17\" height=\"42\" class=\"ilf-verde ils-tinta\" stroke-width=\"0.8\"/><rect x=\"361\" y=\"241\" width=\"15\" height=\"53\" class=\"ilf-tinta-azul ils-tinta\" stroke-width=\"0.8\"/><rect x=\"44\" y=\"130\" width=\"372\" height=\"6\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"44\" y=\"212\" width=\"372\" height=\"6\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"44\" y=\"294\" width=\"372\" height=\"6\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto-foto\" x=\"60\" y=\"145\" font-size=\"11\" fill-opacity=\"0.85\">1480 – 1600</text><text class=\"il-texto-foto\" x=\"60\" y=\"227\" font-size=\"11\" fill-opacity=\"0.85\">1601 – 1700</text><text class=\"il-texto-foto\" x=\"60\" y=\"309\" font-size=\"11\" fill-opacity=\"0.85\">1701 – 1927</text><g class=\"ils-tinta\" stroke-width=\"1.2\"><rect x=\"372\" y=\"56\" width=\"6\" height=\"246\" class=\"ilf-madera-clara\"/><rect x=\"398\" y=\"56\" width=\"6\" height=\"246\" class=\"ilf-madera-clara\"/><path d=\"M378 80 H398 M378 110 H398 M378 140 H398 M378 170 H398 M378 200 H398 M378 230 H398 M378 260 H398 M378 290 H398\" class=\"ils-madera-clara\" stroke-width=\"3\"/></g><circle cx=\"640\" cy=\"98\" r=\"3\" class=\"ilf-hierro\"/><g transform=\"translate(640 150)\"><g transform=\"translate(6 12) rotate(-14)\"><rect x=\"-52\" y=\"-44\" width=\"104\" height=\"88\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"2\"/><rect x=\"-42\" y=\"-34\" width=\"84\" height=\"68\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><path d=\"M-30 20 C-10 -10 10 30 30 -14\" fill=\"none\" class=\"ils-tinta-azul\" stroke-width=\"1.5\"/><path d=\"M-36 -20 L-10 -24 L4 -8 L26 -18 L36 2\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><circle cx=\"18\" cy=\"16\" r=\"5\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"1.2\"/></g></g><rect x=\"60\" y=\"300\" width=\"100\" height=\"120\" class=\"ilf-madera ils-tinta\" stroke-width=\"2\"/><g transform=\"translate(110 365)\"><rect x=\"-42\" y=\"-12\" width=\"84\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><g transform=\"translate(110 400)\"><rect x=\"-42\" y=\"-12\" width=\"84\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><g transform=\"translate(110 330)\"><rect x=\"-42\" y=\"-12\" width=\"84\" height=\"24\" class=\"ilf-noche\" opacity=\"0.8\"/><rect x=\"-38\" y=\"4\" width=\"76\" height=\"8\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"-42\" y=\"8\" width=\"84\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle cy=\"20\" r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/><g transform=\"translate(22 -2) rotate(-90)\"><rect x=\"-4\" y=\"-20\" width=\"8\" height=\"14\" rx=\"2\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"0.8\"/><rect x=\"-9\" y=\"-6\" width=\"18\" height=\"6\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.8\"/></g><rect x=\"-36\" y=\"-8\" width=\"22\" height=\"4\" rx=\"1\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.6\" transform=\"rotate(-6 -25 -6)\"/></g><rect x=\"215\" y=\"372\" width=\"310\" height=\"48\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"200\" y=\"356\" width=\"340\" height=\"16\" rx=\"2\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.5\"/><rect x=\"222\" y=\"420\" width=\"12\" height=\"12\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><rect x=\"506\" y=\"420\" width=\"12\" height=\"12\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><g transform=\"translate(300 392)\"><rect x=\"-40\" y=\"-12\" width=\"80\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><g transform=\"translate(440 392)\"><rect x=\"-40\" y=\"-12\" width=\"80\" height=\"24\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1\"/><circle r=\"3\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.6\"/></g><g transform=\"translate(470 356)\"><ellipse rx=\"18\" ry=\"5\" class=\"ilf-bronce ils-tinta\" stroke-width=\"1\"/><rect x=\"-3\" y=\"-40\" width=\"6\" height=\"36\" class=\"ilf-bronce ils-tinta\" stroke-width=\"0.8\"/><path d=\"M-34 -30 L34 -30 L26 -50 L-26 -50 Z\" class=\"ilf-verde ils-tinta\" stroke-width=\"1.2\"/><path d=\"M-30 -30 L30 -30 L22 -22 L-22 -22 Z\" class=\"ilf-oro-claro\" opacity=\"0.6\"/></g><rect x=\"330\" y=\"344\" width=\"60\" height=\"12\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"0.8\" transform=\"rotate(-4 360 350)\"/><rect x=\"340\" y=\"340\" width=\"56\" height=\"12\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\" transform=\"rotate(3 368 346)\"/><g transform=\"translate(240 352)\"><ellipse rx=\"16\" ry=\"6\" class=\"ilf-vidrio ils-tinta\" stroke-width=\"1\"/><g transform=\"rotate(-22)\"><rect x=\"-13\" y=\"-3\" width=\"26\" height=\"5\" rx=\"1\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"0.7\"/><rect x=\"5\" y=\"-3\" width=\"8\" height=\"5\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.5\"/></g></g><g transform=\"translate(660 400)\"><g transform=\"translate(-6 18) rotate(-80)\"><rect x=\"-24\" y=\"-72\" width=\"48\" height=\"12\" rx=\"2\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"-22\" y=\"-60\" width=\"5\" height=\"30\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><rect x=\"17\" y=\"-60\" width=\"5\" height=\"30\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><rect x=\"-28\" y=\"-30\" width=\"56\" height=\"9\" rx=\"2\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.2\"/><rect x=\"-24\" y=\"-21\" width=\"5\" height=\"41\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/><rect x=\"19\" y=\"-21\" width=\"5\" height=\"41\" class=\"ilf-madera ils-tinta\" stroke-width=\"1\"/></g></g><g transform=\"translate(520 470)\"><g transform=\"rotate(12)\"><path d=\"M-46 -14 L0 -7 L46 -14 L46 16 L0 23 L-46 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.5\"/><line y1=\"-7\" y2=\"23\" class=\"ils-tinta\" stroke-width=\"1\"/><path d=\"M-38 -4 L-8 0 M-38 4 L-8 8 M8 0 L38 -4 M8 8 L38 4\" class=\"ils-tinta-suave\" stroke-width=\"1\"/></g><rect x=\"-74\" y=\"-2\" width=\"30\" height=\"20\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\" transform=\"rotate(-18 -59 8)\"/><rect x=\"40\" y=\"4\" width=\"26\" height=\"18\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\" transform=\"rotate(25 53 13)\"/></g><text class=\"il-texto-foto\" x=\"748\" y=\"548\" text-anchor=\"end\" font-size=\"12\" fill-opacity=\"0.85\">Despacho de A. Sarmiento · calle de la Plata</text><g pointer-events=\"none\"><rect width=\"760\" height=\"560\" class=\"ilf-manila\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" filter=\"url(#h9b-grano)\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" fill=\"url(#h9b-vineta)\"/></g></svg>"
  },
  "sospechosos": [
    {
      "id": "rafael",
      "nombre": "Rafael Sarmiento Cuesta",
      "edad": 44,
      "profesion": "Sobrino de Aurelio; representante de comercio",
      "foto": "img-rafael",
      "desbloqueadoPor": "p01",
      "biografia": "Hijo del hermano pequeño de Aurelio. Vive en Madrid y vende máquinas de coser por media España. Tiene coche propio y deudas en dos casinos.",
      "coartada": "Dice que el jueves 8 por la tarde estuvo en Madrid, en una reunión de la casa Singer, y que volvió a Toledo a cenar.",
      "motivo": "Esperaba heredar la librería, y su tío se la dejó entera a Lucía.",
      "declaraciones": [
        {
          "texto": "Mi tío era un sentimental. Lo del mapa es un juego para niños. Si hay algo de valor, la familia tiene derecho a saberlo, no solo mi sobrina."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:dlkHVhVDR1QTRFVKpdUXD1ZBFgQUUAcQBQZfFQgVUVpEe1RVR10AChkHWhdRRlMXAVBBXQNUQUBZE1VRX0EUT1tfREBAElFeUFxRGQMIFzlYAg0BCUIHQkECE1lRRhRHDVNBVBs=",
          "desbloqueadoPor": "p07"
        },
        {
          "texto": "dc1:dlkHVhVDR1QTUVgZCwdHAhcEEUUTWkJaFAZUWhBRURQKX/aAWkdIEUkHRFgWVl5FFEQIVxJXQVZKAFNYVV1AVhJVF0dUUFMRVloUShNGVAxUCQdL",
          "desbloqueadoPor": "p10"
        }
      ],
      "notaDirector": "dc1:cWUoY3RwfnQdFHJWFBz00BcNA0UKXQBCBBHwmFEVWFVEWFpSXVFEVVwOFlJYR1sAF0MOGQRNElNZD1BaEF9bShJWFlJSX1dfR1tHGR9GWQwXDQ0WRlEMUw4NR0fzhhoUIFNGVVAUAV9NDVhUU0ASFgBWFPrLWUFRGC1BVvOeVRcSdQgTX0dXR1ZHFAFGCURDQQgFDApVAFFBB1ZGVFAUWAUWQV5HRgERXQdaF0ZGVwsRVFsZCUGigxgAFHlFUPeUUxAIVlBAElRdFEJWHEZWD0MAQgAKFARCAAReUF5BWxQtYBVIGRQJWFwMQkVXQBITCkIOTRRZEhBXEhRQXkdGXEZVCvCYU1tCE1dbV0YKVhAXDQcRFFUREBIKXRVDUFpADVJaEVFRCBFdDUREWR8SBwRboopGXQ8QWw5XXVUTVRloXwdcUV1EVEEYFFgWB0UA9NJCBEZYA0NBUgsPBQUUTURFUBFZWAFH+tEWUloTQxAMXxVWSBgxVVYSVVdRE0JcXFQBQRVeUxFRXVZVDwlDBlQAQgRGcAtdABATelxUWFgFFlBfFVcRUFcWWRdaUhIAC1IOVxJKAEJZTxRwXlBVV0ZRAFxHEksRXVFGTw8JRAwMQQEKCFILVRICE0ZZFVhRRFNbQlD31VBXQlxCWEdTFkVdABkWUQRKWUFQUBBAQRlRXwdbUBJLEVZYFEkHFEMGFwUHCUZTF1ETB1Ib",
      "preguntas": [
        {
          "id": "r-madrid",
          "texto": "¿Dónde estuvo el jueves 8 por la tarde?",
          "respuesta": "dc1:d15EflRWQFhXGBRcCEZbAhcCAxYHFDFZDwRWRxBRURQIVxV2R1UKEW+hm1YaE1EKCxEEVUZSBFZdQVBQEEVRV0ZRFxNdU0FFUhRYWBVGRAZeEkxFKkEHVw5DUFpX9pkUAVoVUlpXDFQZGxZaUxNEDAtUQVhGWwReWRMUVBBnW1VXVAsdFWFXRVZaQFhGDV4P9NIPABJGDUNBDVwVQ1paFApXUVAVVxFQVwZZF0NdXUURWARXAxgRQlESVRVAXEYZRFUWE1QSXlATUlVUDwpeAhk="
        },
        {
          "id": "r-coche",
          "texto": "¿Qué coche tiene?",
          "respuesta": "dc1:Z15EcFxGQF7wn1oZJFcDTxcXBxcCUUJSDhdWWVxUGBQJV0FD9pkHRFUDFlNTE38EAUMIXUgYLFUYDVsVU1xZSUDzzRNFU0BQE1hVGRQTQwINQRcLRkYHQBMGQFBeQVVaEFMVQlxaRFJWAV5SFlZBRRBfQU8DVgVVXA5GFVRWFElHVRZHVBJXXxNEQVwUElZNF6PdNQlGQkEUoJoKEPeLeAFFFVZARxBQBg=="
        },
        {
          "id": "r-entierro",
          "texto": "¿Dónde pasó la noche del entierro?",
          "respuesta": "dc1:d15EX1QSVF5dUFUZAgMXD1ZBEgkHTgMcQQBcWxBAWhQSX1teFVABEVShl0QYE38MRUIOWxRRD1EYD1sVQUZdSl0QBVFHW0BcVhRYWEYFVhBWTUIcRlgDEBcGQVFRURRRFxZERFAUCl4ZEVMXWlwSFwBBE1YFUA4KGARHQVFRVRleXAFdVBJWVBNEVUsPA1kXUhJCAQMUL1EFEVpREERBUURYXBFWWwpeWqGbVhgTfwBFUAJWFUyimRgRRlpeR1sX"
        },
        {
          "id": "r-herencia",
          "texto": "¿Qué esperaba heredar?",
          "respuesta": "dc1:flFER1xXXFVSGBRIEwMXE1YTA0UDRw0QEgxKFVVZFPfeWFxSWhQ3UEsPX1JYR11FE1AT+tVWQUFNBBRERVZQWBwQPRNZXUERX11WSwkVG0NECEIAFRQTRQRDW1RJFVhdBkRaQhsUKVgZFvWaWRNWAAbyzFhGSRRVGBJBFVJaVlVbXxBWVlMSX1wUUUoSB1UCFwQMRQpVQkQIBl1RURVNFBBZUV5GFApeSkJEUvWeUwgKQk8ZJ1AOQllBWlRUWlEZQVVEQfafVx8="
        },
        {
          "id": "r-olalla",
          "texto": "¿Conoce a Dimas Olalla?",
          "respuesta": "dc1:dlVERVxBRlAdFHFXRitWB0UIBkUSWwZfEkNfWkMVRUEBFkNUW1ABXFYRFlZaVF1FC14SGQVXD19bBFlaQxNQXBJGDUBBUxwRfUFaWgdGXwYXFRAEElUGX0EAXFsQ9p1YXxZYWBVAp5xWQlhYFl5XRQleQVEHWhPzlQAURVVBUFZcUQBcGw==",
          "desbloqueadoPor": "p10"
        },
        {
          "id": "r-mapa",
          "texto": "¿Sabía del mapa antes de morir su tío?",
          "respuesta": "dc1:fl9EV1BeElxSRFUZCgkXAFgPFgQEVUJRQQBGVFxEQV0BRFQRUVEXQUyhn0QWV1cJRUIEXhNWBV8YAFr2nUAOGUFZAUdQEkZDXE5bSkpGQg0XFQcWCUYNHEEWXVQQW11REFcVXVxHEFAXQmNZFlBHAAtFDhkWWRNRGBBBUBBWWFVTEBdWFVdcRUFRQEwQD1IRVk9CPAkUDEUPAFIVXFAUXA1VUBFWVRdeFw=="
        },
        {
          "id": "r-casinos",
          "texto": "¿Es verdad que debe dinero?",
          "respuesta": "dc1:8I8lE0RHW/KaWhRXCUZbBhcFBwcDWkJfQQdWV1UVVVgDWQoRcVsXEVQHRVZFE1YARVMAWgdKopEYBFoVRV0UVFNcRFpbRFtUQVpbF0YjRAwXEgdFB0YQVQYPUhVTWloUEVgVU0BRChFYoYdYFldXRQjywEgTUQ9RS0FQUBBQW0pXQkoTehJRXl0UQVcHRl8GRQQMBg9VQloUEEdUHBVEURZZFVRGW0RIWEJaWBZXVwYMVQj61RgMWRgV95hfHQ=="
        },
        {
          "id": "r-lucia",
          "texto": "¿Qué piensa de su sobrina?",
          "respuesta": "dc1:Y0UBE1BBEl1aR0BYRh8XEkIEQgAVQKGRQRBcWVEbFGEKFlhQRVVEVFdCRV5TR1dFFVQFWBxXEhBWDhRQQxNeTFdXCxNFU0BQE0FaWEYLQgBfAAENBxpCYwhDVltTQFFaEERUEVRYA14VQlpWFlVTCAxdCFhGVAAQWRhBUVFB95gSUURFUFxWVEFYWxkED1INGUEyBBRVQlUSDBNQQ0FVWQtFGw=="
        },
        {
          "id": "r-zocodover",
          "texto": "¿Estuvo en Zocodover el jueves?",
          "respuesta": "dc1:Zl8IVlFdElRdQFFLCUZHAkQAQhUJRkJqDgBcUV9DUUZIFkZU9oULQ1AWV0QYE2sKRV0NXAFNopkYABRWVV1VSxJRRF9UEmRUXUBVGQIDFyJeEwcWRkQDQwAHUkYQWVVHRFhAVENRSBFJEFNQQ11GAAsRAFVGXBRV+9BbGxBgXRlTXANGXFdcEUVdWxkTCBcAWAIKAEZCB0IFBh8VVVsUeQVSR1hRFAxQQEJbXloTUQoGWQRKRk4EQlwERxs=",
          "desbloqueadoPor": "p07"
        },
        {
          "id": "r-lema",
          "texto": "¿Conoce el lema de la casa?",
          "respuesta": "dc1:8JssWlYSXlhRRl0ZAglFDl4UDBGkj04QBA0TUFwVUF0KQlBdFVABXRkGU0RGUlENCh9BfQMYD1n70FsVU0FR+p9RREJAVxJVVlf3lAdG9chWEBemyxQGRQQRXlBeFVhbFxZZWFdGAUL72RZOFl5XRRVQE1wF+8xRGBRaVBBHXVxcVAUTUVcSQVpGVU0HFRlDeghCEaWZDRAMBhNQSEVYXQf1hhFZW0RVXEJaVkUTXgARQwBKRkkUVRgSW1sQXfeDX1UWXEYSR19SFHpYEA9TAlNPQisJFA9VQQJQQFVHUFtEUlARWVVEUkwHWENXHQ=="
        }
      ]
    },
    {
      "id": "dimas",
      "nombre": "Dimas Olalla Prieto",
      "edad": 63,
      "profesion": "Librero anticuario en Madrid",
      "foto": "img-dimas",
      "desbloqueadoPor": "p01",
      "biografia": "Competidor y viejo enemigo de Aurelio. Lleva treinta años intentando comprarle «la otra biblioteca».",
      "coartada": "Dice que el jueves 8 llegó a Toledo en el autobús de la tarde y fue directo a la pensión.",
      "motivo": "Daría cualquier cosa por esa biblioteca.",
      "declaraciones": [
        {
          "texto": "Aurelio y yo nos odiábamos con mucho cariño. Si su biblioteca existe, la compraré a quien la tenga. Robar, no: robar es de aficionados."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:ZlUK8JhTElRdFEdMRhJeBlkFA0UTWgMQEQpWT1EVUFEIFlhQRVWGsZ9CR0JTE1wKRVQTWEZcBFwYDFVFUR0=",
          "desbloqueadoPor": "p10"
        }
      ],
      "notaDirector": "dc1:e14LUFBcRlQTUFFVRhRYAVhNQhUDRg0QDwwTWVlYRF0LDBVjVFIFVFVCWlIWW1MHppwAGQleE1VbCFBaEF9VGVBZBl9cXUZUUFUUQEalng8XAAEAFkChg0EQWlsQRUZRA0NbRVRGShF1AxZZWVBaAEVVBFVGAE0QagBSVFVfFE9dXBJa9oESUBN5VV0UD1NDTkEGAAz30RAEDRNZURVYXQZEUEP2mQURXQcWeFpSXgkEERRXRlsAXFsOFFFVXxRfQFEDXlBcRl4TYhRcCEZHAkcEDkUCUUJDBAdSGRBWW1kLFkVDQFEGUBkGUxdHRldFCV5BTQNWop1ZWhRQXBNQXEJVCldcV1xFVhRYVkYWVhD00kIERlgLXREKXBVdXEZVClJaEVBYRFJYDlVYFkNdF0VUDRkUXRfzkRIYFUkTRFZAEAFAWhJeUBNXW0kPBxcQVg0LptUUB15BBkBFVV9bGkR5WVBZWAURVQMWUENSQAGmgkFJCUpBQ1FBZlRWUlFVElkKR1BcRlBRVRRPAwhTBkUNB0UHWAVfQQVSWUNaGhQoWlBW9odEUBkOV0QWAgVfUQFBQEZdEkRZA1UVVV0UVVMQFFZbQVvygFoUWEYKVhAXEgsAElFCGA0ME1ZfW1JdFltUEVlVREFYFkRYWFIbS0V4E/rVVghTV00UVkVfQFYeEApcFV9bVF1AURkVDxcPUkESFwNTF14VAl0VVFxGUQdCVFxQWhBUFw==",
      "preguntas": [
        {
          "id": "d-llegada",
          "texto": "¿A qué hora llegó a Toledo?",
          "respuesta": "dc1:d15EVlkSU0RHW1b63BUXB1JBDgQVFBZCBBATTBBYUVANVxkRREEBEVUOU1BXE1NFCVASGRVdCEMYDFFbX0AUT1dZCkdQEkFYE1FYGQUO9NBRBBBFCFtCQAARUhVRFVlRFlNbVVRGShF4QlpWRRNBAAxCQVQDVg5DGAJBVEJHWxlXQxBSV1MSVF0UWFhGFlINRAih1ggUBlVBD1IVU1RYWAEWdF9WXAUdGQFZWRZGXEUGUBVYFEoOEFwEFENVXUBYXFkIX1QeEkgTUFEZBwpboJpBDApGWQcQDAxF9p0b"
        },
        {
          "id": "d-rafael",
          "texto": "¿Ha tratado con Rafael Sarmiento?",
          "respuesta": "dc1:ZFkKXBVTEkdWRllcRgcXD1ZBFgwDWgZRQQZdFVFSW0cQWRkRVlsKEVwOFkP1nl1FEV4FWBD7zFEYF11DXx0UdFcQC1VHV1FY8IcUTAgHFwFeAw4MCUAHUwBDQkBVFVpbREJQX/aZBR0ZAxZCWBNCFwBSCFZGSRRVGA9bFVVBVRlBRR1cGxJ+VBNQXVMDRkYWUkEBEAdaBl9BD1IVREBCXQFEVB0VXAVTVQNE9JtSXwoWH0FsCBgNWVoTUUdfE1pWEkAWVlJHXEVSFFBcRgL00FkFB0UVVQ5VD0NfWkMVWF0GRFpCDhQBQlZCWlgWV1cPChERWBRZQUVLFVFRVUAa"
        },
        {
          "id": "d-pieza",
          "texto": "¿De dónde salió la pieza de su tienda?",
          "respuesta": "dc1:flFEQ1RBU0NcWhRbBwxYQ1sAQhUTURBEAENXUBBZVRQQX1BfUVVEXVhCWFhVW1dFAVQNGQxNBEZdEhgVVV0USVNAAV8VVlcRQFFQWEpGVAxZQRcLBxQWURMJVkFRFUddChZTWEdZBQsZoJ1nREZXBwQRBVxGWhRVVgAUU1XxjxcSfQ0TUVdCVF1QXVwIElJDWwBCFQdHoYNBAhNZWVhEXQsWWFhHVQpVVkJTWxZQUwkGXkFJCUpBVVRBRlBG8J1KHhABXxVfR0gTVkFLFAkbQ05BEgoUFAdDDkNAVFxc94dEV1kRR1ES8pARGBdvXBIJBBEGTAdKBfORQURaQhNHUBJRCFRAW1dfE11aTQMIQwJVAEITA1oGVRMOVhVYQFlbSg==",
          "desbloqueadoPor": "p10"
        },
        {
          "id": "d-aurelio",
          "texto": "¿Qué había entre usted y Aurelio?",
          "respuesta": "dc1:ZkIBWltGUxFS94VWFUZTBhcRFw8HRkJVDUNGW18VV1sKQkdQFVEIEVYWRFgWVlxFEV4FWBUYDVFLQVVZXVxaXFZRFxNRVxJyUkdAUAoKVk0XousJRlMDXgABUhVcVEcUFUNQEUNVCPKUA1gXWlISFQBfABkfGBhfGA1VRhBCQVwSVAVRVFwSVVYUV1YLA0VNFy8NFkZbBlmiwlFUXVpHFAdZWxFYQQdZVkJVVkRa8dQKCkFcCBgSRRgEWkFZVkZLXRABQEFHRFQTVVgZAAlZB1hNQgYJWkJVDUNAWl1XRlEWWRVBQFEXRVZM"
        },
        {
          "id": "d-biblioteca",
          "texto": "¿Qué sabe de «la otra biblioteca»?",
          "respuesta": "dc1:Y0UBE1BKW0JHURgZFglFEkIEQiQTRgdcCAwTVl9YREanhRVSWkcFQhkTQ1IWXUcLBlBBTwlUF1n70hRUEEVRV1ZVFh8VSxJEXRRYUAQUUhFYQRMQAxQMX0EVVltUUBgUA0NUQ1FVShF8DEJFUxNXCQlQEhVGTBNVS0FX9oNXXVpXQ0RCQFcSVF8UV1gIpYQNXgYNRQxBEFFBEkZQEEZbWkRSUBFZVURSWBZTU0RSXkUBVBJdAxhQCA9SGhVpXBRXXRAORkddEl9SUFUCRh9YQ1QODxUUW0w="
        },
        {
          "id": "d-entierro",
          "texto": "¿Dónde pasó la noche del entierro?",
          "respuesta": "dc1:d15EVlkSU0RHW1b63BUXB1JBDgQVFBFZBBdWFVRQFEIRU1lFVBQFEXQDUkVfVx5FHBEEV0ZVCBBbAFlUEFIUVVNDRFdcV0gfE3JbSxwHRUNCDwNFFkEHQhUCE1QQWF0UAVJUVRVHAUP6z1cXRFpWpshSFFUJFkFgWRNVFVVAWxlaUR0TUldcRVYUWfrHFRcJWBcHC0ZNQlMODRNY85RHFBREXEJUGg=="
        },
        {
          "id": "d-robar",
          "texto": "¿Robaría usted el mapa?",
          "respuesta": "dc1:YF8GUkcSV0ITUFEZBwBeAF4ODAQCWxEeQS9cFUFAURQSV1lUFVgFEUkHWFYWQFdFBl4MSRRZQVJZE1VBXxNVGUNFDVZbElxeE0dVWwNGWwwXEBcARkALVQ8GHRVpFVUUFUNcVFsUCF4ZEFlVVx8SCKaQEhkEWRNRTA4UQV9XVU/xnQUd"
        },
        {
          "id": "d-lucia",
          "texto": "¿Le ha hecho una oferta a Lucía?",
          "respuesta": "dc1:Zl8AUkPxn1ATWlsXRihYQ0QEQgkDFApRAgYTQF5UFFsCU0dFVBQFEUgXX1JYE1wKRUIAWwMYEEX7yBRDVV1QXAkQF1YVV0FBVkZVGQdGRhZSQQ4KRkcHQABDShVVRkD3zRZWUFtHBVVYTBZiRUdXAQBCQVwVTKKRVkFVVlVfUUtTXgBcFVdBVBNZW1QDCEMMG0EbRRVRQlwOQ1JSQlRQUR5VWh8="
        },
        {
          "id": "d-logrono",
          "texto": "¿Conoce a alguien en Logroño?",
          "respuesta": "dc1:cxAKUlFbVxFQW1oZBQdFAhlBKgQfFBdeQQBcWEBHVVALRBVAQFFEVEoBRF5UVhIVCkNBVwlMAEL7zFUVSRNEWFVRRFZbElVYQVtHFUYWQg1DFAMJRlcNXQ5DRlsQR1FYC1wOEVZbCUFLAxZeWFBHCwRTDVwVGBgQVQBEVEMTQlBXWgtAFUsSX0ZaV1hGFFIEVhUHBEgUIxAgFkFQXFxbFBBXWFNc981fGQ5TF1NAURcMUwj61RRBWFkCURVR8IVWQR5EckBAV11aWxRXCUZUDFkVBxYS99EcQRJGUBBMWxQXU0VQGw==",
          "desbloqueadoPor": "p09"
        },
        {
          "id": "d-tos",
          "texto": "¿Estuvo enfermo el jueves?",
          "respuesta": "dc1:Z15EUFRGU0NBWxRdA0ZBBlkVAwsPWA5RQQJRXFVHQFVKFmFeRvfJEV0HRVNTE14EFhESXA9LQVhZEkBUEF9VGVFVClIOEl5QE1dGUAcCVkNTBEIJBxQSVQ8QWvaDWxRADVNbVBVRCBFaF1dFQlwSBAkRDVgCV0FUXUFYVBBQW1pbXgUTTBJXXRNb95QCCRcFXg8NS0ZkEFUGoIlbRFBaWAEaFUJcFApeGQ9TF1VBVwALHw=="
        }
      ]
    },
    {
      "id": "fulgencio",
      "nombre": "Fulgencio Marañón Gil",
      "edad": 74,
      "profesion": "Canónigo archivero de la catedral",
      "foto": "img-fulgencio",
      "desbloqueadoPor": "p01",
      "biografia": "Amigo de Aurelio desde hace cincuenta años, desde que entró de seminarista a ordenar el archivo. Guarda el archivo de la catedral y la memoria de todos los libros raros de Toledo.",
      "coartada": "Dice que el jueves 8 presidió las vísperas en la catedral.",
      "motivo": "Cree que tres códices de Aurelio salieron del archivo de la catedral en 1873 y quiere que vuelvan; la biblioteca escondida es la única manera de recuperarlos.",
      "declaraciones": [
        {
          "texto": "Aurelio me hizo prometer que no os ayudaría. Así que solo os diré esto: él siempre empezaba por los libros."
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:e14LUFBcRlQdFGRLAxVeB16i0UUQ989DEQZBVEMVUFFEBw0LBgREUBlTDw0CBhIEC0UEGQVNAEJdD0BUEFVdXF5VFx0VYVNT8JlVGQIDW0NaABIERkQNQhAWVhVxQEZRCF9aEVlRREFQBl/0hRNDEAARBkwHSgVRSgAUUFwTR1xKRAsTU0BTVl5RWk0JRlINFwQORTJGoZEPEFpBXxsUYA1TW1QVUQoRShcWVkRQWgwTXkFMCBgRVUoGVVhZXVsZRFkBWVoSQFRQW0ZNBwJYQ0YUB0UVUUJTDg1VQF5RURQHWVsRQFpEV0sDUVpTXUYKSxElTApbBBwYEltWUUFG+oFeSBNdU1BdUhRRV0YKVhf0zAxFBUEDXgUME0ZVFURbClMVX1BGElhWEVkZ",
      "preguntas": [
        {
          "id": "f-promesa",
          "texto": "¿Qué le prometió a Aurelio?",
          "respuesta": "dc1:dl8XE1ZdQVBAGhR3CUZWGkIFAxcJR04QGENUQFFHUFUWFkBfFUQFQEwHQlIWVlxFEF9BSg9MCF8YB0b2nVwUUVNDEFIVQ0dUE1VYXhMPUg0XEhcVD1EQUUETVlFZR1hbShZ5XhVHAVZMDFJYFkpTRQBCFfrHGAJFVRFYXFRcDxleX0RDR1tfVEFbFFUJRlIQQw4bRQ9aAUUME19cVVtQW0RXXV5HVURcUBFbWBgTdgAKEQZLB0wIUUtP",
          "desbloqueadoPor": "p09"
        },
        {
          "id": "f-visperas",
          "texto": "¿Cuánto duran las vísperas?",
          "respuesta": "dc1:dlVEQFBbQRFKFFlcAg9WQ1ZBDQYOW0JdBA1cRhBWQVUWQlodFVcLXxkHWhd7UlULDFcIWgdMQUkYDVVGEFFRV1ZZB1paXFdCHRRxVUYFWBFYQRYMA1oHEBQNUhVDWlhVREZAVEdABRFAQlNbFkBTBhdYEk2lmQ8QVAAUVllWRktTEBRcRxJURFZGVRkWB0UCFxAXAEZYDUNBAFJb84ZaXQNZRhFbW0RCXEJTRFVSQgALEQAZBV0PUUpPFHlfE1BQVV9EUFpcElJcWltaDwteBlkVDUs="
        },
        {
          "id": "f-archivo",
          "texto": "¿Qué es la pieza que había en su archivo?",
          "respuesta": "dc1:Z15EQVBRXUNHURRdA0ZCDRcRDRcSQQ5RDwwTUVVZFEcNUVleFWwyeBkTQ1IWckcXAF0IVkZVBBBKBFNUXPCHGVpRB1YVRkBUWlpAWEYH9NJYEkKnzUQDQgBDQkBVFUdBFF9QQ1QUFUT6yxZRWUFfBEVFCFwIXQ8QVABHFVNcR1hBEBVGUBJXQlBbWl0JpIxNFzEHFwFVD1kPDB8VXloURAVGUF0bFChQGSVDVkRXWwRFcghPD1RBXldBUFxDR11XVUUBE0BcEkFWRlNYCw9ZDBcFB0UTWkJAABNWWRBRURRVDwcGGRQdEXgXRFJaWl1FCV5BSgdaop1ZTw==",
          "desbloqueadoPor": "p10"
        },
        {
          "id": "f-codices",
          "texto": "¿Salieron los códices de Aurelio de la catedral?",
          "respuesta": "dc1:ZkIBQBkSV18TBQwOVUoXAEIADAEJFBtfQQZBVBBGUVkNWFRDXEcQUBkbFlJaE1MXBlkITwkYFF4YBVFGRvCVVxwQJUZHV15YXBRHXEYKWBAXAg0IFkahg0ECE0RFXFFaRFhaEVFRBvKUAxZBU11WABddDkpKGBgQVA5HFVdGVUtW89cTWFdYXkEURUwDRlkMRA4WFwlHTBAyChNUQFRGUQdTWx0VWQERXhdFQ1dB8cgEERdcFFQOQxgAWkFVQBRdVxAJXEdbQFxWGhR9AxVHFvTIEUlGRRdVQQtSUlEVeEEH9ZhQFVgLEUgXUxdHRlsAF1BP"
        },
        {
          "id": "f-rafael",
          "texto": "¿Qué opina de Rafael Sarmiento?",
          "respuesta": "dc1:ZFUK8JhTEkFcRhR3BxBeB1YFQhxGRA1CQTBWWFFbVRQ3V1tFVBQdEUoHFl5UUhIGCl9BTAgYDVlaE1sVUlJeVhJVCBNXQFNLXBRFTANGRBYXFaHICRQMX0EGUF1RV1UUAFMVXFBaC0IXQnBCW1ISEAteEhkFUQZRShNdWVxcRxlXVw1DVltdQhNXW1dGBFgSQggOCQcUBl8TAldUHBVXWwlZFURbFANQVaGXWRZXV0UGWA9cXRgEXhgNVRVTUkBcVkIFXxVcXR0TRUFcRhVSQ1sOQhEDWgVfQQdaVlhaGg=="
        },
        {
          "id": "f-olalla",
          "texto": "¿Y de Dimas Olalla?",
          "respuesta": "dc1:Z15EVltXX1hUWxRRCQhFAlMOTEUnQRBVDQpcFVRQV/fJVxVAQFFEdVAPV0QWQV0HBEOilAcYFF5ZQVZcUl9dVkZVB1IVV1xFVkZVFUYWUhFYQQwQCFcDEBQNE1lZV0ZbXhZZVBVQBUP6z1cXQFZAAqaNBFccWU8QawQUUENQRlBQ88lSWxJbX0BBWE0JFRcGWUEOBBL3z15BE1xHEHtVQg1SVFUbFCheSkJRQldBVgpL"
        },
        {
          "id": "f-ajedrez",
          "texto": "¿Jugaban al ajedrez?",
          "respuesta": "dc1:fl8XE19HV0dWRxgZAwgXD1ZBEQQFRgtDFaCeVBwVV1sKFkBfFUAFU1UHRFgWV1dFFlQISkZIDkIYElFcQxNFTFcQp5pZEl9YQFlbGQ4PTQwXo8kVB0YDEAAAUldRRxRVCkJQQvePShFqC1NaRkFXRQRTE/rLWUFTVw8UUFwTV1hQUQhfWhwSdVZX95QHRkYWUkEHFkZYAxCi2V1cU1QURA1TT1AVRRFUGQxZF0BSEgALEQ36y1YEURgTUVZEUhgZUV8JXBVeU0ITVkFcCAdEQ0cIEREHR0w="
        },
        {
          "id": "f-forastero",
          "texto": "¿Le habló Aurelio de algún encargo extraño?",
          "respuesta": "dc1:Z14FE0NXSB0TXFVaA0ZaFlQJDRZGVaGBDhAfFUVbFFILRFRCQVEWXhkBWVkWUlEAC0UOGRZXE0RNBkH2mUAUVVcQAFZf8YERUlhTVkYDWUNTBBKm1UcLRA5DShVcUBREBVH2ghVXC18ZF1gXX11REAtQA1UDFkFxTRNRWVlcFFdHXgdSFUJAVFRBWk0HBFZDVkETEA9RDBARAlRUUlQUVwtYFVhbVxFfWABaUkUdEisKEQxcRlwIWldBRUDzmhRcQFFEXVwSVvKAWlBcRgpYQ0cUEQpIFC5fQRJGUBBG951IFlleFVANW1xCU1kWX1MRppwPAkZUDhBcBFn2kUAYGV5fREBUUEDyml1HGRAJRAxDEwMWSA==",
          "desbloqueadoPor": "p12"
        },
        {
          "id": "f-lema",
          "texto": "¿Qué significa el lema de la librería?",
          "respuesta": "dc1:8JslQkDxnxFXQVFLCwNZQ1sOEUUKXQBCDhAd94sVeFtERkBCWhQBXxkHWhdSWlwRAF1BXAgYUAgBURoVaVwUVVcQAFpfVxJARlEUXAhGWwJEQQ6mx0QLVAAQE1lRFWEUF1MVVEZXFlhbBxZhGhNLRaaYDRkVVw9CUaKHFVNcWVYSQRFaUFwSSFIUQFADCFJDQg8DRQ9QB1FPQ2dHVVxaQAUWTBFGXQFFXEJX9IdcQUUBVBJJE/vIQxRBWFQQWlBcUxABQVQSQlBBVRR1EwX0zlZP"
        },
        {
          "id": "f-noche",
          "texto": "¿Dónde estaba la noche del entierro?",
          "respuesta": "dc1:d15EUFRBUx0TV1tXRgNbQ1YMA0lGRgdKAA1XWhBFW0ZEd0BDUFgNXhVCR0JTE1QECUUAGQpdQVhZAlEbEHdRSlZVRF5cEkRUXUBVVwdGRAYXFwdFA1hCVggNUlkQUVEUCFcVUlRYCFQZBlMXWlISNQlQFVhcGAAQVAAUQF5SFFFTUqeeVBJeREkUUVdGClZDQxMDFhJdB14FAh0VYFBaR6efFUBAUURUSwMWe0NQ8cgEHUFIE11BXldBRFpU8JlYElQLQVhbQB8TdVxWFAcXE14EDBYJFA1EEwITVl9GVRo="
        }
      ]
    }
  ],
  "documentos": [
    {
      "id": "d01",
      "tipo": "telegrama",
      "titulo": "Telegrama de Lucía Sarmiento",
      "fecha": "5 de septiembre de 1927",
      "autor": "L. Sarmiento",
      "texto": "AGENCIA ARKANA MADRID\nABUELO DEJA MAPA EN SIETE PEDAZOS STOP\nALGUIEN ENTRO EN LIBRERIA NOCHE DEL ENTIERRO STOP\nRUEGO VENGAN TOLEDO\nLUCIA SARMIENTO"
    },
    {
      "id": "d02",
      "tipo": "carta",
      "titulo": "Nota de Aurelio en el sobre",
      "autor": "Aurelio Sarmiento",
      "texto": "Lucía:\n\nSon siete. Cada uno te lleva al siguiente. Al final está lo que más quise.\n\nEl primero lo tienes en la mano. Dale la vuelta: el lema de la casa te dirá en qué año dormir. En mi tienda, ya sabes, cada libro duerme en el estante de su año.\n\nTu abuelo."
    },
    {
      "id": "d03",
      "tipo": "fotografia",
      "titulo": "Fragmento I",
      "texto": "Un trozo de mapa dibujado a plumilla, con el lacre de Sarmiento: un libro abierto con el número I.\n\nEn el dorso, a tinta, en mayúsculas:\n\nHIC LIBRI DORMIVNT\n\nY debajo, a lápiz: «Como en las lápidas de las iglesias: las letras también son números. I = 1 · V = 5 · X = 10 · L = 50 · C = 100 · D = 500 · M = 1000»."
    },
    {
      "id": "d04",
      "tipo": "carta",
      "titulo": "Fragmento II",
      "desbloqueadoPor": "p01",
      "texto": "Hallado dentro de un libro de 1659, en su estante.\n\nAl dorso:\n\n«En la calle de los escudos, llama a la puerta del que lleva en campo de azur tres flores de lis de oro, con bordura de gules.»"
    },
    {
      "id": "d05",
      "tipo": "almanaque",
      "titulo": "Vocabulario de heráldica",
      "desbloqueadoPor": "p01",
      "autor": "Librería Sarmiento",
      "texto": "Campo: el fondo del escudo.\nBordura: franja que rodea el escudo por dentro del borde.\n\nColores (esmaltes):\nAzur ......... azul\nGules ........ rojo\nSinople ...... verde\nSable ........ negro\n\nMetales:\nOro .......... amarillo\nPlata ........ blanco"
    },
    {
      "id": "d06",
      "tipo": "fotografia",
      "titulo": "Las portadas de la calle",
      "visual": "escudos",
      "desbloqueadoPor": "p01",
      "texto": "Seis casas nobles, seis escudos de piedra pintados."
    },
    {
      "id": "d07",
      "tipo": "fotografia",
      "titulo": "La caja del llamador",
      "visual": "cuadrado",
      "desbloqueadoPor": "p02",
      "texto": "Tras el llamador de bronce hay una cajita con un candado de dos ruedas. En la tapa, un cuadrado de números con tres casillas borradas y, grabado en el borde: «Filas, columnas y diagonales dicen lo mismo»."
    },
    {
      "id": "d08",
      "tipo": "carta",
      "titulo": "Fragmento III",
      "desbloqueadoPor": "p03",
      "texto": "Al dorso, un tablero de letras y una lista de casillas, como las jugadas de una partida:\n\n«a1 · b3 · c5 · e6 · f4 · d5 · f6 · e4 · d6»\n\n«Así salta el caballo. Donde caiga, busca el puente.»"
    },
    {
      "id": "d09",
      "tipo": "fotografia",
      "titulo": "Tablero del fragmento III",
      "visual": "tablero",
      "desbloqueadoPor": "p03",
      "texto": "Las columnas se nombran con letras (a–f) y las filas con números (1–6), como en el ajedrez."
    },
    {
      "id": "d11",
      "tipo": "mapa",
      "titulo": "La ribera bajo el puente",
      "visual": "pasos",
      "desbloqueadoPor": "p05",
      "texto": "Plano de Aurelio, encontrado en el sobre del fragmento III, por la otra cara."
    },
    {
      "id": "d12",
      "tipo": "carta",
      "titulo": "Instrucciones de Aurelio para el puente",
      "desbloqueadoPor": "p05",
      "texto": "«Desde el pie de la torre, que cuenta como un cuadro más a la derecha de la primera fila: cuatro cuadros al sur, cinco al oeste, uno al norte y uno al este. Levanta la piedra.»"
    },
    {
      "id": "d13",
      "tipo": "carta",
      "titulo": "Fragmento IV",
      "desbloqueadoPor": "p06",
      "texto": "Bajo la piedra, envuelto en hule.\n\nPor una cara: «El quinto, en los soportales de Zocodover, tras la tercera columna.»\n\nPor la otra, en letras sin sentido:\n\n«VO HVCGL VM VO GIZMHRGL YZQL OZ GVIXVIZ OZKRWZ»\n\nY a lápiz: «En el abecedario, sin la eñe, la primera letra vale por la última; la segunda, por la penúltima»."
    },
    {
      "id": "d14",
      "tipo": "informe",
      "titulo": "Lo que pasó en Zocodover",
      "desbloqueadoPor": "p06",
      "texto": "Jueves 8 de septiembre, 19:25: tras la tercera columna de los soportales, un hueco en la piedra, vacío, con restos de lacre fresco.\n\nEl limpiabotas de la esquina: «A las siete y diez un señor metió la mano ahí y se fue a paso ligero. Llevaba sombrero y no le vi la cara»."
    },
    {
      "id": "d15",
      "tipo": "informe",
      "titulo": "Dónde estaba cada uno a las 19:10",
      "desbloqueadoPor": "p06",
      "soloJugador": "A",
      "texto": "Rafael Sarmiento: dice que en Madrid hasta las seis y que llegó a Toledo a cenar.\n\nDimas Olalla: dice que llegó en el autobús de la tarde y se fue a la pensión.\n\nFulgencio Marañón: dice que presidió las vísperas en la catedral."
    },
    {
      "id": "d16",
      "tipo": "transcripcion",
      "titulo": "Testigos del jueves 8",
      "desbloqueadoPor": "p06",
      "soloJugador": "B",
      "texto": "Sacristán de la catedral: «Las vísperas fueron de seis y media a ocho menos cuarto. Don Fulgencio las presidió de principio a fin; no se puede salir del coro».\n\nGuarda del parador: «A las siete menos diez aparcó en Zocodover un Citroën verde con matrícula de Madrid. A las siete y cuarto ya no estaba».\n\nPatrona de la pensión de la calle Ancha: «El señor Olalla llegó a las seis menos cuarto y subió a su cuarto. Luego yo me fui a misa y no sé más»."
    },
    {
      "id": "d17",
      "tipo": "almanaque",
      "titulo": "Autobuses Madrid–Toledo y la pensión",
      "desbloqueadoPor": "p07",
      "texto": "Salidas de Madrid (Estación del Mediodía): 8:00 · 11:30 · 15:30 · 19:00\nDuración del viaje: 2 horas y 10 minutos.\n\nBillete encontrado en el abrigo de Dimas Olalla: «Jueves 8 · salida 15:30».\n\nLa patrona, preguntada otra vez al volver de misa: «Al subirle la cena, la criada me dijo que el señor no había salido en toda la tarde: tiene el cuarto junto a la cocina y le oyó toser sin parar»."
    },
    {
      "id": "d18",
      "tipo": "carta",
      "titulo": "Fragmento VI",
      "desbloqueadoPor": "p09",
      "texto": "Bajo la tercera lápida del Tránsito, con el lacre de Sarmiento y el número VI.\n\nAl dorso: «Une la librería con el puente, y la casa de los escudos con este lugar. Donde se crucen las dos líneas, está lo que más quise. Entra con la palabra de los sellos»."
    },
    {
      "id": "d19",
      "tipo": "carta",
      "titulo": "Un sobre sin remite",
      "desbloqueadoPor": "p09",
      "texto": "Llega a la librería el viernes 9, matasellado en Logroño. Dentro, un fragmento de mapa del mismo papel que los demás, con un lacre distinto y el número VII. Ninguna nota."
    },
    {
      "id": "d20",
      "tipo": "fotografia",
      "titulo": "El mapa con el hueco del V y tres piezas",
      "visual": "piezas",
      "desbloqueadoPor": "p09",
      "texto": "La Guardia Civil ha registrado la tienda de Olalla, el coche de Rafael Sarmiento y el archivo del canónigo. En cada sitio había un trozo de mapa."
    },
    {
      "id": "d21",
      "tipo": "fotografia",
      "titulo": "Los siete sellos",
      "visual": "sellos",
      "desbloqueadoPor": "p10",
      "texto": "Los lacres de los siete fragmentos, fotografiados juntos. Seis llevan el libro abierto de Sarmiento, un número y una letra."
    },
    {
      "id": "d22",
      "tipo": "mapa",
      "titulo": "Plano de Toledo",
      "visual": "toledo",
      "desbloqueadoPor": "p06",
      "texto": "Plano de la ciudad sobre el que Lucía ha marcado los lugares por los que habéis pasado."
    },
    {
      "id": "d23",
      "tipo": "informe",
      "titulo": "Lo que había en la cueva",
      "desbloqueadoPor": "p13",
      "texto": "Tras la reja, en las bóvedas romanas: cuarenta y dos cajas de madera con códices, incunables y cartas de navegación, envueltos en papel de seda. Un inventario de puño y letra de Aurelio: «Mi biblioteca, para Lucía, y para Toledo cuando ella quiera»."
    },
    {
      "id": "d24",
      "tipo": "fotografia",
      "titulo": "El despacho, la mañana del entierro",
      "visual": "despacho",
      "desbloqueadoPor": "p01",
      "autor": "L. Sarmiento",
      "texto": "Fotografía de Lucía del 4 de septiembre, antes del entierro, para el inventario del notario: el despacho de Aurelio, encima de la tienda, tal como él lo dejó."
    },
    {
      "id": "d25",
      "tipo": "fotografia",
      "titulo": "El despacho, tras la entrada",
      "visual": "despacho-registro",
      "desbloqueadoPor": "p01",
      "autor": "Guardia Civil · puesto de Toledo",
      "texto": "Fotografía del 5 de septiembre por la mañana, al denunciar Lucía la entrada. Según el parte, «no se aprecia que falte nada de valor»."
    },
    {
      "id": "d26",
      "tipo": "carta",
      "titulo": "La nota de la tapa del arca",
      "desbloqueadoPor": "p13",
      "autor": "Aurelio Sarmiento",
      "texto": "Tres ruedas, Lucía, y ninguna cifra que no sepas ya:\n\nla primera, el año en que duermen los libros;\nla segunda, cuántos son los sellos;\nla tercera, lo que dicen todas las filas del cuadrado.\n\nNo fuerces la tapa: el nogal es viejo y yo también."
    },
    {
      "id": "d27",
      "tipo": "carta",
      "titulo": "Lo que había en el arca",
      "desbloqueadoPor": "p17",
      "texto": "Una carta y un libro.\n\n«Lucía: lo que más quise no está en estas cajas. Me lo dejaste tú cada tarde, al subir a leerme cuando yo ya no veía. Los libros son para Toledo cuando tú quieras; la tienda, tuya; el tiempo que me diste, mío.\n\nEl libro no lo compré: me lo dio hace años un forastero, en pago por guardar algo que no era mío. Si alguien viene a reclamarlo, sabrá firmar con una rosa. Hasta entonces, guárdalo tú.»\n\nEl libro: un incunable veneciano de 1471; en la guarda, un ex libris a tinta: una rosa de ocho puntas con un ojo en el centro."
    }
  ],
  "pruebas": [
    {
      "id": "p01",
      "fase": "I · El primer sello",
      "titulo": "Las letras que son números",
      "tipo": "codigo",
      "longitud": 4,
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p15",
      "descripcion": "El lema de la casa Sarmiento, en el dorso del primer fragmento, esconde un año.",
      "instrucciones": "¿En qué estante de la librería está el siguiente fragmento?",
      "documentos": [
        "d02",
        "d03"
      ],
      "huellasRespuesta": [
        "d61f26e3743b1c9bb168aa991bf3ab70de019f9aa0ecc3a94ebcb538c3306274"
      ],
      "pistas": [
        "dc1:fF9ER1pWU0ITWFVKRgpSF0UAEUUFQQdeFQJdDxBGW1gLFllQRhQAVBkOVxdaWkERBBEFXEZ5FEJdDV1aHhNtGV5RFxNHV0JUR11QWBVGVBZSDxYECBQBUQUCE0NVTxo=",
        "dc1:YUUJUlESV10TQlVVCRQXB1JBFgoCVREQDQJAFVxQQEYFRRVAQFFEQlYMFln1iV8AF14SGRRXDFFWDkcPEH4YGXYcRHAZEn4dE2wYGTBKFyoZ",
        "dc1:d15E8Z52fWN+fWJ3MqSMQ18AG0UTWgMQJU8TQF5UFHlIFkBfVBQyEUBCQ1lXE3tfRQRRCUYTQQEIUQQVGxMBGRkQVR0VdFNdR1VaGQoHRENTBEIJB0dCXxURUkYQUVtHREZUXVRWFlBKTA=="
      ],
      "solucionDirector": "dc1:cUILXVpVQFBeVQ4ZLi90Q3soIDcvFCZ/My56Y35hFNbipBV4FR9EchlJFnsWGBIsRRpBcEYTQXQYShR4EBgUcBIbRGUVDxIAEx8UCFZWF0gXVFJFTRRTEEpDAhUbFQEEVBYeEQQEVAEZSRYGFhgSUEUMQQhQDVge",
      "exito": "dc1:AwZRChsSd18TUVgZAxVDAlkVB0UCUUJVEgYTVPOEWxhEUlBfQUYLEV0HFkJYE14MB0MOGQJdQUNdE1laXlZHFRJVCBNGV1VEXVBbGQAUVgRaBAwRCRpCaUEWXRVGWldVBkNZUEddCxFdBxZfU0HxxAlVCFoHGBBFXUF1QEJWWFBdEABWX/GBEVJYFFUHAlhPFwwXHEZVQlwAQ0VcQ0FVGg==",
      "escena": [
        {
          "texto": "dc1:flFEf1xQQFRB95lYRjVWEVoIBwsSW0JYFAZfUBBUFEQLWkNeFU1EUBkBWVtXE1YARVQPWhNZBVVKD1VHHhN4VkEQAUBBU1xFVkcUVwlGWw9SFwMLRlgHRBMCQBVeXBRZBUJQQ1xVFwsZDlpSQFJcRQTy0FYVFEFUXQ0UBAQLBBlTXERVWlxWXhNVWBlXXwVUFwsXCxJbQlFBD1IVQEBRRhBXGxF5QQfylAMWUlhQWwALVQQZCllBXPvAWUVRQVUZVlUIE1hdQUVBVVBWFEZOQ1gSQgEDXgMQDQITUENWVVgBRFQf",
          "imagen": "img-libreria"
        },
        {
          "texto": "dc1:8I8pWlkSQVRaR1dQAwhDDERBAQwIVxdVDxdSFUkVWkEBQFAOFWABQ1oHRFYWUVMJAVBNGQdUQVZXD1BaHBNQXEZCp5JGElZUE1hVGQMVVAJbBBAESBSgkSkCShVGUF1aEFMVXVxWFl5KQxb1iX9dFkVQA0sJGBVfXA5HCg==",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:Z14LE0ZdUENWR1VVA0ZCDRcFBwEJDkJFD0NHWl1aFFABFkZUR1kLX1wRFlRZXRIACRECWAhMDhBcDlZZUVdbFxJ0AV1BQF0dE1FaTRQDFwdYEkINCV4DQ0ETVlJRUVVHSBZQXRVSFlBeD1NZQlwSLCwRAlYIGBJFGA1VVkJWGhlrEAFdFVdeEV5dR1QJRlIQQwAMEQMYQl0UGhNUEFlVFBJfRkVUGEREV0JAWFVSUBAJUBNQCRgFVRgJUUfzklhdW1MFE0RHVxFdVVBQA0ZUDFoREAQU989RTw=="
        }
      ]
    },
    {
      "id": "p15",
      "fase": "I · El primer sello",
      "titulo": "El despacho, dos veces",
      "tipo": "diferencias",
      "obligatoria": false,
      "puntuacion": 60,
      "segundos": 60,
      "siguientePrueba": "p02",
      "descripcion": "Lucía fotografió el despacho de su abuelo la mañana del entierro, para el inventario del notario. Al día siguiente la Guardia Civil fotografió lo que dejó quien entró de noche. Chiqui pone las dos copias bajo la lámpara del mostrador; Lucía no puede tener la tienda cerrada mucho rato.",
      "instrucciones": "Pulsad, en cualquiera de las dos fotografías, cada cosa que cambie de una a otra. Son cinco.",
      "documentos": [
        "d24",
        "d25"
      ],
      "config": "dc1:SRISWkZHU11yFg4bAgNEE1YCCgpEGEBGCBBGVFx3Fg5GUlBCRVUHWVZPRFJRWkERF15DFURIFF5MDkcXCmhPG0oSXgUBAh4TShYOCFNWG0FFQ1hSVklOS0MbEQ8BBAQYRk8XCwYHVB0bEBQNAANPSR4TGRtcClUAFENNFwoAAQseEhYRDwYHTB9PFkFEXAFVB01AHEQOVgBRTxFHEg8DBBkaThNNFl4EC1IaFU8RCFFSAU0bFBpbBwgcaUg=",
      "pistas": [
        "dc1:Y0UNVlsSV19HRlUZB0ZVFkQCAxdGVQBCBENfWhBEQVFERVARVFYWVANCW15EUlZFAF1BVBNdA1xdQVBQEF9bShJcBVBHV0EfE20UVQlGRhZSQQEQA1gFUUEHVhVcVBREBURQVRs=",
        "dc1:elEdE1ZdQVBAFFFXRgNbQ0QUBwkJFBNFBENSW0RQRxQBRUFQV1UKEVwMFkRDE0EMEVgOFUZBQUVWQVlUQlBbGUNFARNMUxJfXBRXTAMKUAIXBQcXA1cKX08=",
        "dc1:d1xEUFRY8YJdFFBcRgpYEBcNAwYUUREcQQZfFVFBWFUXGhVdVBQXWFUOVxsWVl5FCFATWgkWQWkYBFoVVV8UWldeDVBQQF0dE1VYXglGRwZGFAem11tCQRQGE1tfFVFHRFVQX1xOBR8="
      ],
      "exito": "dc1:cVkKUFoSUVBeVl1WFVwXBltBAQQM99FeQQdWFVxaRxQIV1ZDUEdEUFsLU0VCXBIGCl9BXAoYAkX70FsVVkZRS1McRFZZElNFX1VHGRYJRUNSDUIWE1EOX01DX1QQRl1YCFcVR1pYB1BdAxoXU18SCARBABkCXUFcWUFEVEJWUBlWVRdQWl5VUFdb1rnARk5PFwQMRQNYQlMEDVpWVUdbGERDW1AVVwtdUA5aVhZQXQtFXQAZBFcQRVENWFQQV1tLU1QFHRVjR1hWWhRcCBJFoIRBDApGRwcQDQ9WQ/OGFFoFUlQfFXYRQloDVFYWUF0WBEJBSgNUDVFcAEcbEGoUX0ddBRNWU0BeHQ==",
      "solucionDirector": "dc1:cVkKUFoSUVBeVl1WFUZSDUMTB0UKVUJdAKCCVF5UFFABWhVUW0ANVEsQWRdPE14ERVUEVUZcop1ZQUdcV0ZdXFxEAQkVV14RXlVGWglGUwZbQQ8EFlVCVAQQUFpcUlVQCxoVVFkUB1BToYVZFldXRQleEhkKWQJCXRIUVFJaUUtGX0RQWlwSVF8UV0yl11hDURQHFwcYQkUPAhNWX1ldWAhXFVJaWkRTVhNDXlpfU0UBXhNYAllBVVZBUVkQUFFXW1MBQVoeEl1SFEdQCgpWQ0EODgYHUAMQGENWWRBUQFgFRRVSWlpEWVYIV0QWQ10XRVQNGRVNBFxXTxRkRVpRVxJVCkdH8YERUUFHWgcEVkNUDhEEFRQRVQ0PUlFRRhRNRFhaEUZRRF1VB0D0hRNcBAFQTw=="
    },
    {
      "id": "p02",
      "fase": "I · El primer sello",
      "titulo": "Azur, oro y gules",
      "tipo": "hotspot",
      "contenidoVisual": "escudos",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p03",
      "descripcion": "Los escudos se describen con palabras antiguas: colores, metales, figuras y bordura.",
      "instrucciones": "Pulsad la portada a la que hay que llamar.",
      "documentos": [
        "d04",
        "d05",
        "d06"
      ],
      "huellasRespuesta": [
        "e5917db202509350c502942e41093e788f7976b44a04410fe9c135ad0380195c"
      ],
      "pistas": [
        "dc1:c0oRQRVXQRFSTkFVXUZQFlsEEUlGRg1aDk0TcFwVV1UJRloRUEdEVFVCUFhYV11eRV0AGQRXE1RNE1UZEF9VGVRCBV1fUxJVVlgUWwkUUwYZ",
        "dc1:dF8KV1oSU0tGWBgZBAlFB1JBEAoMW0wQMBZWUVFbFEQLVVpCGw==",
        "dc1:cV8KR1RWEl1SRxRfCglFBkRBBgBGWAtDQRoTWFlHVVBERVwRRlsKEV0HFlhEXBJNBFwASw9UDVFLSBRaEFdRGUJcBUdUEhpTX1VaWgcVHk0="
      ],
      "solucionDirector": "dc1:cVEJQ1oSU0tGWBgZEhRSEBcNCxYDR0JUBENcR18ZFFYLRFFER1VEQ1YIVw0WX1NFFV4TTQdcABBcBFgVXvCOVFdCCxMCHBJ9UkcUXQML9MJEQQQEClgDXkEGXRVVWRRXC1paQxVQAV0ZAVdaRlweRQBdQVQDTABcGAVRFVxSRxleWRdWRh4SVF8UWvrcC1IRWEENRQpVQlIOEVdAQlQa",
      "exito": "dc1:flFEQ1pARlBXVRRdAwoXDfTbDwAUW0IHT0N3UERH95UXFlFUWRQIXVgPV1NZQRIBABEDSwlWAlUYCVVMEEZaWBJTBVlcRlMRUFtaGRMIFwBWDwYEAltCVARDV1pDFUZBAVJUQhs="
    },
    {
      "id": "p03",
      "fase": "II · La calle de los escudos",
      "titulo": "El cuadrado",
      "tipo": "codigo",
      "longitud": 2,
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p05",
      "descripcion": "En la tapa de la cajita, un cuadrado de números con tres casillas borradas.",
      "instrucciones": "¿Qué número abre el candado?",
      "documentos": [
        "d07"
      ],
      "huellasRespuesta": [
        "2506e7a3e3950fb946bc3e654163898a6f2d66c4e480df6af9939e69302e340b"
      ],
      "pistas": [
        "dc1:YUUJUlESR19SFFJQCgcXAFgMEgkDQAMKQRdcUVFGFFgFRRVXXFgFQhkRQ1pXXRIJChEMUBVVDh4=",
        "dc1:YUUJUlsSAQUdFHhYRgJeAlAODAQKFBNFBENRVFpUFFABFlxLREENVEsGVxdXE1YAF1QCUQcYFVldD1EV0quxGUsQEEFQQRJf8I5ZXBQJRENUDgwKBV0GXxJN",
        "dc1:AwZEGBUDAhEYFNah40YcQwZBX0VVAEwQOENfQFVSWxQIVxVFUEYHVEsDFlFfX1NL"
      ],
      "solucionDirector": "dc1:cUUFV0dTVl4TWfeYAQ9UDBcFB0UVQQ9RQVAHFRhQWBQAUxV1QEYBQ1ZLGBdyWlMCCl8AVVwYUAYYShQEABMfGdCo4RMeEgMRDhQHDUaEsfEXg/rgRglCB09DZ1BCVlFGBRZTWFlVXhEAQh0X1Ku0RU4RVhlNGFACGFwUBgQT1r+gEIarsxIPEQUaFHql1VMKUA5YRYSs5NL55hMIEAMDGg==",
      "exito": "dc1:BAdKE3FXXEVBWxRdA0ZbAhcCAw8PQAMcQQZfFURQRlcBRBVXR1UDXFwMQlgME0cLRUUAWwpdE18YBVEVXFZAS1NDREoVR1xQE1hdShIHFwdSQQEEFV0OXAAQHxVTWllbRFpUQhVeEVZYBldEFldXRRBfABkWWRNEUQVVGw==",
      "escena": [
        {
          "texto": "dc1:YVUNQBkSQVhWQFEXRipWEBcFDRZGRhdVBQJAFVRQWBQHV1tVVFALEV4LRFZYE1EKCxEUV0ZbCVFLEEFcVFwUQBJcBRNWU1hYR1UUXQMKFw9bAA8EAlsQEBIGE1RSR1EaRHJQX0FGCx0ZBllVWlJWCkVUDxkFTQBESg4YFVVfFF9AUQNeUFxGXhN9fXBI",
          "visual": "cuadrado"
        },
        {
          "texto": "dc1:c1xEV1pAQV4fFEFXRhJWAVsEEApGUAcQEgZaRhBFW0ZERVBYRhQIXVwMWRdSVhIJAEUTWBUYGBBND1UVXFpHTVMQAFYVUVNCWlhYWBVKFwBYDA1FClUREAUGE0BeVBREBURBWFFVREFWEBZUWUFAABZBDlcCXQ9TUQAa",
          "visual": "tablero"
        },
        {
          "texto": "dc1:8JslQPafEkJSWEBYRgNbQ1QAAAQKWA0eQSdcW1RQFFcFX1JQGRQGREoBVxdTXxIVEFQPTQMWo4sYIEFHVV9dVhJaEVRUUFMRUlgUWAwDUxFSG0IJCUdCWhQGRVBDGxRxF0JaEVBHRERXAxZHV0FGDAFQTRkfGA1RGARZRVVJ94oS881fGw==",
          "quien": "gismera"
        }
      ]
    },
    {
      "id": "p05",
      "fase": "II · La calle de los escudos",
      "titulo": "El salto del caballo",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p06",
      "descripcion": "Aurelio jugaba al ajedrez con el canónigo todos los jueves. El fragmento lista una serie de casillas.",
      "instrucciones": "¿Qué palabra forma el salto del caballo?",
      "documentos": [
        "d08",
        "d09"
      ],
      "huellasRespuesta": [
        "b269476fe43f219074972f8fc100d046c879a9506e8821de4a44c8505a88f080",
        "22b6cae717fe542c52849bd507154924b58092eb3ffac86ca186d9707c3d3a65"
      ],
      "pistas": [
        "dc1:flFEX1BGQFATUUcZCgcXAFgNFwgIVUIYAAFSX18cDxQBWhVf9o4JVEsNGhdaUhIDDF0AGU5ZQVxZQV1PQUZdXEBUBRob",
        "dc1:UwFEVkYSXlATV1VKDwpbAhcFB0UHVgNaDkNSFVxUFF0eR0BYUEYAUBc=",
        "dc1:cxxEfxkScdOzkg=="
      ],
      "solucionDirector": "dc1:UwFEchXwhRFRBxR1RqSAQ1RUQiZG9tUQBFUTdBD3gxQCAhV/FfbTEV1XFmMW8YVFAwdBeEb61hBdVRRnEPGDGVYGRHIVDxJwf3f3uCgydjF2TUIAChQSRQQNR1Ae",
      "exito": "dc1:c3wn8LR8ZnBhdQ4ZAwoXE0IEDBEDFBBfDAJdWhBGW1YWUxVUWRQwUFMNGBdzXRIACRESVgRKBBBcBFgVVkFVXl9VCkdaHhJBXEYUVQdGWBdFAEIGB0YDHEEiRkdVWV1bRFJcU0Bep4IZDlcXRFpQABdQTw=="
    },
    {
      "id": "p06",
      "fase": "III · El puente",
      "titulo": "Desde la torre",
      "tipo": "hotspot",
      "contenidoVisual": "pasos",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p07",
      "descripcion": "Aurelio dejó las instrucciones en pasos. El plano tiene el norte arriba.",
      "instrucciones": "Pulsad la piedra que esconde el cuarto fragmento.",
      "documentos": [
        "d11",
        "d12"
      ],
      "huellasRespuesta": [
        "506c685369a5b1367f600d46e970893b1e336d716caf76d65beef1cb9a6b90b8"
      ],
      "pistas": [
        "dc1:d10UVk9TVhFSWBRJDwMXB1JBDgRGQA1CEwYfFVNaWVtERVwRU0EBQ1hCQ1lXE1wKE1QPWEZbDlxNDFpUEFIUVVMQAFZHV1FZUhRQXEYKVkNHEwsIA0YDEAcKX1QeFWdBFhZQQhVcBVJQAxZWVFJYCl4RDlwVTAQcGAlVVllSFFVTEA1JREdbVEFQVRc=",
        "dc1:dlUXQ0Dxm0ITUFEZBRNWF0UOQgQKFBFFE0NKFVNcWlcLFlRdFVsBQk0HGhdTQEamxFgSGQNWQVxZQUVAWV1AWBJWDV9UHA==",
        "dc1:YUUGWlESR19cFE0ZCwlBBlgSQhAIW0JRQQ9SFVRQRlEHXlQf"
      ],
      "solucionDirector": "dc1:Zl8WQVASV18TWFUZBQlbFloPA0VfGEJWCA9SFQEbFHcRV0FDWhQFXRkRQ0UW0bT3RVcIVQcYVAsYAl1bU1wUWF4QC1ZGRlcR0bKmGQUJWxZaDwNFUg9CRQ8ME1RcFVpbFkJQEdey9hFfC1pWFgcJRRBfDhkHVEFVSxVRFdK1phlRXwhGWFxTEQYOFFUHRkcKUgUQBEZQBxANAhNWX1lBWQpXFQQZFAJYVQMWAxg=",
      "exito": "dc1:cFEOXBVeUxFDXVFdFAcbQ1IPFBADWBZfQQZdFVhAWFFIFlBdFVcRUEsWWRdQQVMCCFQPTQkWQXRRAlEVVPCHV1ZVRFZGRvGQE1FYGRcTXg1DDkxFJVsQQqLKWkYQVBRuC1VaVVpCAUPb4pAXTxNeCQBWopgPS0FEWRNQUB4=",
      "escena": [
        {
          "texto": "dc1:flFEQVxQV0NSGBRYRgpWEBcSCwASUUJdBA1cRhBWQVUWQlofFXEIEW0DXFgWUVMPBBEDWAxXTRBBQVBQQ1dRGVdcRENcVxJVVhRYWEYSWBFFBEIJBxQBRQAHQfadVkFYBRZRVFkUFF1YDFkXU0ASEAsREVwCSgRXWQ0UVl9dFFpHURBBWhJaWFRBUUsHFRcaFxQMBEZHDVwAQ0NcVVFGVURHQFQVRxFUVwMWVhZbRwAGXk8=",
          "imagen": "img-puente"
        },
        {
          "texto": "dc1:cUUFR0ddElBfFEdMFEoXAF4PAQpGVQ4QDgZAQVUZFEEKWRVQWRQKXksWUxsWRlwKRVANGQNLFVUWQXddWUJBUBJcAUVUXEZQE1hVGRYPUgdFAFhFAlEAUQsMHxVFWxREBUdAVEFRRFRXFENSWkddRQBfQVETVAQcGBJRVl8d",
          "visual": "pasos"
        },
        {
          "texto": "dc1:fkUH8JhTEl1cFFVbFAMXGhcNBwBGUQwQFwxJFVFZQFVIFlZeWxQIUBkUWU0WQkcARV0EGRJRBF1aDVUPEPGffF4QFUZcXEZeHxRRV0YKWBAXEg0VCUYWUQ0GQBVUUBRuC1VaVVpCAUMVQkJFV0ASCQQRFVwUWwRCWUFXWlxGWVdT8t8dFWJdQxNYVRkJEkUCFwIDFwcYQlwEF0FUQxVHXQoWRlRbQA1VVkwWZEMTRAofERNcBFcVURgEWhVcUhRNXUIWVhs="
        },
        {
          "texto": "dc1:YUUG8JhBElATbltaCQJYFVITQgRGRAtVTUNQWl4VeEEH9ZhQGRQUXktCWlYWUEcAFkUAF0Z5QVxZEhRGWVZAXBJJREVQW1xFWlddVwUJFw9bBAWmx10REABDX1pDFUdbFFlHRVRYAUIXQmJFV0ASCQQRFVwUWwRCWUFXWlxGWVdTEAxSTBJHXxNcQVwFCRcGWUEOBEZEC1UFEVIPEENVV6ebWh0VVwtfGQdaF1pSURcAERVWAlkX85UAFFdcUlpdXR4=",
          "visual": "toledo"
        }
      ]
    },
    {
      "id": "p07",
      "fase": "III · El puente",
      "titulo": "Las siete y diez",
      "tipo": "dual",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p08",
      "descripcion": "Alguien se llevó el quinto fragmento a las 19:10. Uno de vosotros tiene lo que dicen los sospechosos; el otro, lo que dicen los testigos. Gismera pone en fila las coartadas; Chiqui vuelve sobre vuestros pasos para saber desde dónde os seguían.",
      "instrucciones": "Resolved las dos partes. La de Gismera necesita los dos testimonios; la de Chiqui, memoria de la tarde.",
      "documentos": [
        "d14",
        "d15",
        "d16",
        "d13"
      ],
      "pistas": [
        "dc1:cEUXUFRWEkBGXfeQCEZDClIPB0UTWkJEBBBHXFdaFEURUxVdWhQXWE2hjFIWVlxFCkUTVkZLCERRDhRUEF9VShIBXQkEAhwRahRGXAUJRQdWBUIBpYcMVARDX1BJ9ocUKENW8phVRFRXQkBYTBNTCRFQQVwKGAdCWQZZUF5HWxl7Zko=",
        "dc1:Z14LE1FXElRfWFtKRghYQ0cOBqbLVUJDAA9aRxBRURQAWVtVUBQBQk0DVFYYE2tFCV5BXQNUQUFNCFpBXxNHVl5fRF9aEkFQUfeZWA8VFxVYEg0RFFUR0uHFE0wQREFdAVgVVEZAEUdQB0RWFl9dRQdQEk0HVhVVGAJRR1NSFElTQgUTWvGfQ19bFFgKRkcKUkEGAEZYAxAVDEFHVRs=",
        "dc1:flEXE0Pxn0JDUUZYFUZTFkUAEAoIFApREhdSFVxURxQLVV1eFVkBX1YRFlRDUkARCh9BYEZUABBMDkZHVRNQXF4QFEZQXEZUE0BdXAgDFxZZQRIXA0ALXEEHVkZUUBRRCBZERFAUF1QZDU9SFl9TRRdYA1wUWUFVVhVRR1Ed"
      ],
      "solucionDirector": "dc1:dVkXXlBAUwsTUVgZBQdZoIQPCwIJFBJCBBBaUVn2hxQS9ZhCRVEWUEpCUlIWAgpfVgFBWEYJWAoMVBRGWV0USV1UAUEVQVNdWkYUXQMKFwBYEw1eRlVCfw0CX1lRFVhVREZURUdbClAZEVlbWRNeCkVHCFZGVA1VXwBGDhBWWBlRXwdbUBJEVEFQURkCAxcuVgUQDAIUA0AUDUdUEFQUZgVQVFRZGkRyUQtHQl8JEgAJEQdLB18MVVYVWxV5ZRRKVxAIVkzxgRFWWhRPCRwXAlsVA0UHWEJACAYTUVUVWFVEQlpDR1FEVVwOFkdDVlwRABEFXEZ5DVP7wFpBUUFVGVMQCFJGEgMJCQABAkYDW0NGFAsLEltCVAQQUkVRR1FXDfWGEVQUCFBKQgcODAICSUVQD00DS0FUXUFFQFUTWFVXVwVBVFtBCxNFQVADCBcPWEEBCgFdoYNBDEAVX0z3h0RSUEJRUURdWEJCWERBV0VNRVUQSA==",
      "exito": "dc1:d1xEUFRc8YJdXVNWRghYQ0cUBgpcFAdDFQJRVBBQWhQBWhVSWkYLHxk7FkZDWlcLRUIEGQpUBEb70hRQXBNFTFteEFwVXUERXE33ikYKUgZFQQcJRlIQUQYOVltEWhR9MhZRVEZQARFVAxZDWUFAAEVVBFVGSBRVVhVRDxBWR01TUgUTVF5e8p4UVUsUD1UCG0EEEAtVDFQOTxNYWVBaQBZXRhF5QQfylAMWW1PwnwRFUANYDFdPEGkUUVFRXRRdXUNIE0wSR19cFFBcRgNbD1gSQgEPVwcQEBZWFVVGQFUGVxVUWxQpUF0QX1MY",
      "partes": {
        "gismera": {
          "titulo": "Quien no pudo",
          "tipo": "eleccion",
          "instrucciones": "¿Quién NO pudo llevarse el quinto fragmento a las 19:10?",
          "documentos": [
            "d14",
            "d15",
            "d16"
          ],
          "opciones": [
            {
              "id": "rafael",
              "texto": "Rafael Sarmiento"
            },
            {
              "id": "dimas",
              "texto": "Dimas Olalla"
            },
            {
              "id": "fulgencio",
              "texto": "Fulgencio Marañón"
            },
            {
              "id": "ninguno",
              "texto": "Ninguno: los tres pudieron"
            }
          ],
          "huellasRespuesta": [
            "214ab494931215a9355f8c78b6573780252c8ae3aa087ef545ad890790604e20"
          ]
        },
        "chiqui": {
          "titulo": "Desde dónde",
          "tipo": "hotspot",
          "instrucciones": "El ladrón sabía dónde estaba el quinto antes de que llegarais a Zocodover. ¿Desde dónde os oyó leer el fragmento IV? Pulsad el lugar en el plano.",
          "documentos": [
            "d13",
            "d14",
            "d22"
          ],
          "contenidoVisual": "toledo",
          "huellasRespuesta": [
            "339ea6e3fdc73fa434ce1b695308c366c4d473eb33322ae278bf954f2f17928e"
          ]
        }
      },
      "escena": [
        {
          "texto": "dc1:cVgNQkBbEkdGUVhPA0ZWDxcRFwAIQAcQDApWW0RHVUdEcVxCWFEWUBkNRFNTXVNFCVASGQVXAEJMAFBUQx0UdVMQEFxHQFcRR11RVwNGQg1WQQcWBVUOVRMCE1FVFVdVFldWXlkUHR0ZA0RFX1FTSUVEDxkWSgREUQ0UUVVAUFwSVQgTREdXEUBRFFYfAxcPVkEQDARREFFBBl1BVUdVDkRTWRFUUxFQFUJaVkUTWgwCRARLB0tNEE0PVRVGXE4ZQ0UBE1lXVx8=",
          "imagen": "img-puente"
        },
        {
          "texto": "dc1:d15EVlkSQl5fQlsZAgNbQ0cTBxEPWE4QDQITWFFHV1VEUlARUVsXEVoNUlhFHRIgCxEEVUZLFFVUDhgVRV1VGVFfCFpZXlMRUFtaGQoHFwFYEBcMClgDEAUMQVRUVBgUAFMVXVRHRFJYEFdEGBNzCQJECFwIGARDTBRCWhBSRUzxnURGWxJQRFZaFEsHElhPFwcXCAdaBl9BGhNQQ1ZBVwxXW1VaGg==",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:c1IFWVoeElRdFFhYRgVCBkQVA0UXQQcQEhZRUBBUFFgFFlZYQFAFVRVCUlhFE0AKAVQTWBUYBVUYFFoVU1xXUVcQFUZQElNDQVVaWqXVFwdSERAMFVVOEAIMXRVcVBRTFldDUBVAC1VYFPWaVxNAABNEBFUSWU8QeUFRRlETXFZAUUgTUFwSXVIURlAEA0UCG0EMCkZcA1KizlIVXlRQXQEWWPKUR0o=",
          "visual": "toledo"
        }
      ]
    },
    {
      "id": "p08",
      "fase": "III · El puente",
      "titulo": "El autobús de la tarde",
      "tipo": "hora",
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p09",
      "descripcion": "Olalla dice que llegó en el autobús de la tarde. Llevaba el billete en el abrigo.",
      "instrucciones": "¿A qué hora llegó Olalla a Toledo?",
      "documentos": [
        "d17",
        "d16"
      ],
      "huellasRespuesta": [
        "f8f50ec28fcc2ac1586b1de9e4e9c5aeaeee4c85da9fde01a9afebf29279e6c6"
      ],
      "pistas": [
        "dc1:elEdE1ZHU0VBWxRKBwpeB1YSQgEDFC9RBRFaUR4VcVhEVFxdWVEQVBkGUxd5X1MJCVBBXQ9bBBBbFPeUXBNXVlVZp4Ab",
        "dc1:YUUJUlESXlATUEFLBwVeoIQPQgEDWEJGCAJZUBBUFFgFFl1eR1VEVVxCRVZaWlYESxE4GQVXDEBZE1VREFBbVxJcCxNER1cRV11XXEYKVkNHABYXCVoDHg==",
        "dc1:ZkIBQBVLElxWUF1YRgJSQ1sAQhEHRgZVQQ7wlEMVUFsXFl1eR1UXEUBCUl5TSRw="
      ],
      "solucionDirector": "dc1:AwVeAAUSGREBDgUJRlsXUgBbVlVIFCFFAAdBVBBWW1pEWlQRRVUQQ1YMVxce8ZkJBEJBSgNREhBVBFpaQxNXTFNCEFz3iRsLE1UUVQcVF1IOW1NVRlERRAABUhVVWxRYBRZFVFtHDfKKDBg=",
      "exito": "dc1:cxAIUkYSAwYJAAQVRh8XAhcNAxZGRwdZEkNeUF5aRxQHQ1RDQVtEVFdCWlYWQ1cLFliiiggUQVRdQVBaXldRGVxfREBUXlvygBoUdgoHWw9WQQwKRlERRAABUhVVWxRuC1VaVVpCAUMX"
    },
    {
      "id": "p09",
      "fase": "IV · El quinto sello",
      "titulo": "Lo primero, lo último",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p10",
      "descripcion": "La otra cara del cuarto fragmento está escrita en letras sin sentido. Aurelio dejó la regla a lápiz.",
      "instrucciones": "¿Dónde está el sexto fragmento?",
      "documentos": [
        "d13"
      ],
      "huellasRespuesta": [
        "91da05ae0cdc1930a28f45df5ec59a0571e344ef7e6f01702d8bae04650a0482",
        "78f6e6b9b24ff865c6d832a5db57ac0976df3c37b799cdceed6ec57b33c98c09",
        "8826002a662969912e0a3600ae2c536cc453a015814a2c716d4554c73ef62700",
        "348dd482089433597506398e741c1dfd89b6a2e23b54838ccba5849e3293113b",
        "1ac12abdf3aca6e5eb69a1534a391f13297d48cb83f551bd56723b88593a4135",
        "cddb0cb4a000424197bf101a3826fd0388afc027fc5ebb9b9c44b69cf69cf1b4",
        "e13b71e92116a112ce0d0c63e1b2253f68df5b0ff00bc8ae4b5024b75ccadff4",
        "b5cb9594f4992341a043041b1b8a71a0b985008588bbd4072753ddc9c606eebd",
        "a887ae3497b9901f3885b65c088a2a495b4cd9caaf96880e1a2ba35bdc25fad7",
        "f817213df1ef7d2fb2b6b9a1214945acb4adb615ae3442b467e0d0b0e0d87dd6",
        "0e48f847796342cfa438a0811d18334a19c26c8ef764617a210afe9dd17079b8",
        "8576c7a4842cfa48ba61dc2713fb67e3010e9601d24f023909972b511f9ae6ba",
        "c0543032dc797b77403a1cdd9b74d3645eaf81ddbc84c63d7b06f52db54f3f57",
        "bf61c2fb5d89adfdfa4533b20c3dcffdec3c206d9b2ac75d0ca87bb155150fe1"
      ],
      "pistas": [
        "dc1:flFEchVBVxFQVVlbDwcXE1gTQgkHFDgcQQ9SFXIVRFsWFllQFW1IEVUDFnQWQ10XRV0AGT7a4ZY=",
        "dc1:flFEQ0dbX1RBVRRJBwpWAUUATkWknzR/o9gfFVVGFPbPc3nzjho=",
        "dc1:8JshfxVhd2lnexR8KEZyL9XhxKfd"
      ],
      "solucionDirector": "dc1:c0QGUkZaEhly1rKtPEoXIdXn9jyEtMQZW0PxnnV5FGchbmF+FXEqEXwuFmNkcnw2LGUuGSR5K38YLXUVZHZmendiJRN5c2J4d3X2gkhGewIXEgsLB1MNVwBDV1BcFWBGp5dbQlxACx8=",
      "exito": "dc1:d15EVlkSZkPwlVpKDxJYTxcDAw8JFA5RQRdWR1NQRlVEWvaQRV0AUANCU1sWQFcdEV5BXxRZBl1dD0BaHBNXVlwQCFJGEvGLX0BdVAcVFwpZEhYXE1cBWQ4NVkYeFXVYRFL2nFQUF1heF19SWEdXRQldBF4HGBFfSkFXWkJBUVYeEBdaWxJAVF5dQFxKRkINFxKhzBZAC10OTRNsEFlVFCNDVENRXQURegtAXloTXRZFRRNYAxgVQl0SFEFCXE5WQRAAVhVfU0FSGg==",
      "escena": [
        {
          "texto": "dc1:flFEQFxcU1ZcU1UZAgNbQ2MTocQIRwtEDk8TVBBFRl0JU0dQFVwLQ1hMFnJaE1UQBEMFWEZZA0JdQVhUEEFRU1MQHRNGV/GAUlhVGQMKFxBCBA4KXBQO88ATWlFRRhRQARZZXkYUFURcQlBCU0FdC0VUD00DShNRXA5HFVFCQfqfEAdGVFxWXhNRRlhGD1APUhILBEoUFkIEEBNQXhVSXQhXFVtAWhBeGQNaF1tGQApL",
          "visual": "toledo"
        },
        {
          "texto": "dc1:flFER1BAUVRBVRRKA0ZaFlIXB0tGcwtDTUPxlENQFFkRU0NUFBQsUEBCQ1kWW0cABl5BXQNaAFpXTRRMEEZaGUJRFUZQRlcRUFtaGQMKFw9eAxAKRlUAWQQRR1oQUFoUAVoVXVRXFlQDQlNbFmV7Sw==",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:c1xEV/afUxFAXVNMDwNZF1JNQhMPURBeBBAfFVVZFFcFREFUR1tEVVwIVxdTXRIJBBENUARKBEL7zFUVRV0USl1SFlYVQVtfE0ZRVA8SUk8XDAMRB0cHXA0CV1oQUFoUKFlSQ1r31V4XQnJSWEdACkkRFFdGXhNRXwxRW0RcFF1XXEReXEFfXhNEVUkDChcSQgRCCQlHQlQEDvCUQxkUVwtYFURbFAhQWhBTF0dGV0ULXkFcFRgFVRgyVUddWlFXRl9KE3QSX1RXXVUZCwf00lYPA0lGWAMQJhZSR1RcVRQnX0NYWRQQQ1gHFkNEVkFFEUMOQwlLQVRdQVlUQFIUVPGRFx0=",
          "visual": "piezas"
        }
      ]
    },
    {
      "id": "p10",
      "fase": "IV · El quinto sello",
      "titulo": "La pieza que encaja",
      "tipo": "hotspot",
      "contenidoVisual": "piezas",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p11",
      "descripcion": "Con los demás fragmentos de Toledo en su sitio, el hueco del quinto tiene una forma exacta. Solo una de las tres piezas la tiene.",
      "instrucciones": "Pulsad la pieza que encaja en el hueco.",
      "documentos": [
        "d20"
      ],
      "huellasRespuesta": [
        "770a11f37f6f179e58ecde1a6f7e76055c26c4d483cd5c2173d12ebad597f23e"
      ],
      "pistas": [
        "dc1:dFkOUlpBElRdFFhWFUZEAlsIBwsSUREQGENWW0RHVVoQU0YRUVFEUlgGVxdUXEABAB8=",
        "dc1:d1xEQFReW1RdQFEZAgMXAkUTCwcHFAdDFaCSFV32lUdEVVBDVlVEVVxCWlYWWkgUEFgESwJZQUFNBBRRVRNYWBJUAUFQUVpQHQ==",
        "dc1:dl8XE0VbV0tSRxRKCQgXD1ZBABADWgMQBQJXVBBZVRQSQ1BdQVVeEUwMVxdSVhIMH0AUUANKBVEYABRRVUFRWlpRREoVXUZDUhRQXEYHRRFeAwNFB1YDWg5N"
      ],
      "solucionDirector": "dc1:YV8IXBVeUxFDXVFDB0ZTBltBAQoFXAcQBQYTZ1FTVVEIFkFYUFoBEVUDFlFZQV8ERVQZWAVMABBcBFgVWEZRWl0eRH9UElZUE3tYWAoKVkNSEkIQCFVCUw4TWlQQUFoUAUVFVF9bXxFVAxZTU18SBBdSCVAQV00QVAAUWFlAWVgSVgtBWFMSR1xYQFwHAlZDUwRCBBRGC1IAQ1JXUV9bDkRYWhFQWgdQUwNYGQ==",
      "exito": "dc1:flFEQ1xXSFATUFFVRgVYAF8EQgEDFDBRBwJWWRBmVUYJX1BfQVtEVFcBV11XE1MJRVwIVaWVDFVME1sbEGpVGVdDEPCUXBJdXEcUSg8DQwYZQS8MFFUGEAMKVlsQRkFHREVQXVlbFx8="
    },
    {
      "id": "p11",
      "fase": "V · Los siete",
      "titulo": "El sello que sobra",
      "tipo": "eleccion",
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p12",
      "descripcion": "Seis sellos llevan el lacre de Sarmiento: un libro abierto, un número y una letra. El séptimo llegó de Logroño con otro dibujo. Mirarlo de cerca es lo único que se puede hacer con él.",
      "instrucciones": "¿Qué lleva grabado el séptimo sello?",
      "documentos": [
        "d21",
        "d19"
      ],
      "opciones": [
        {
          "id": "rosa",
          "texto": "Una rosa de ocho puntas con un ojo en el centro"
        },
        {
          "id": "estrella",
          "texto": "Una rosa de seis puntas con una estrella en el centro"
        },
        {
          "id": "libro",
          "texto": "Un libro cerrado con un ojo en la tapa"
        },
        {
          "id": "sinojo",
          "texto": "Una rosa de ocho puntas sin nada en el centro"
        }
      ],
      "huellasRespuesta": [
        "115b2c2dea5f266c59a5e7c74e12b27a554d21df1f27715eff066b0e52e589dd"
      ],
      "pistas": [
        "dc1:cV8KR1RWEl1SRxRJEwhDAkRPQikHR0JcABFUVEMVTRQIV0YRVlsWRVgRFlRDVlwRBF9BUAFNAFwW",
        "dc1:f1kWUlESV10TV1FXEhRYQ1QODEUKQRJRW0NdWhBQRxQRWFQRUEcQQ1wOWlYWXVtFAEIV+scYF1FboplaHg==",
        "dc1:fVMMXBVCR19HVUcVRgVCAkMTDUUKVRBXABATTBBWQVUQRFoRVlsWRVgRGBdvE1cLRVQNGQVdD0RKDhgVRV0UVlhfREJAVxJcWkZVFw=="
      ],
      "solucionDirector": "dc1:d1xEZXx7El9cFFhVAxBWQ1INQgkPVhBfQQdWFWNURlkNU1tFWhQKWBkOU0NEUghFCV0ETwcYFF5ZQUZaQ1IUXVcQC1BdXRJBRlpAWBVGHwBCABYXCRQOURMEUkYcFVdBBUJHXhVXC0NNA0UeFlBdC0VEDxkJUg4QXQ8UUFwTV1xcRBZcGRJXXRNHUVUKCRcHUkEOBEZaDUQAEfCYURVQUUR6WlZHW6eAVkw=",
      "exito": "dc1:Z14FE0ddQVATUFEZCQVfDBcRFwsSVREQAgxdFUVbFFsOWRsRe1tEVEpCUlIWYFMXCFgEVxJXTxB5DVNAWVZaGV/zxUAVQVNT8JlVGQIDFwZEFQdFC1USUU8="
    },
    {
      "id": "p12",
      "fase": "V · Los siete",
      "titulo": "Donde se cruzan",
      "tipo": "hotspot",
      "contenidoVisual": "toledo",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p13",
      "descripcion": "El sexto fragmento dice cómo encontrar el final: dos líneas sobre el plano de la ciudad.",
      "instrucciones": "Pulsad el lugar donde Aurelio escondió lo que más quiso.",
      "documentos": [
        "d18",
        "d22"
      ],
      "huellasRespuesta": [
        "bbc06ba88494df4f65b2cea0a15962a895e73403d6e599a1787c7a1be67d5166"
      ],
      "pistas": [
        "dc1:Z14FE1nxn19WVRRPB0ZTBhcNA0UKXQBCBBHwmFEVVVhERkBUW0ABEV0HFnZaUPHEC0UASwcW",
        "dc1:flFEXEFAUx0TUFEZCgcXAFYSA0UCUUJcDhATUENWQVALRRVQFVgFEUoLWFZRXFUERVUEVUZsE/OZD0dcRFwa",
        "dc1:Z14FE1FXEl1SRxRVpctZBlYSQhUHRwMQEQxBFVVbV10JVxVVUBQIUBkBV0NTV0AECRESUAgYFV9bAEZZUR0UfF4QB0FAUVcRUFVRGQcKFw1YEw0AFUAHEAUGE1BcWVUYRFhaEVBaRFRVQkT0m1wc"
      ],
      "solucionDirector": "dc1:flEXE0dXUUVSRxRVDwRFBkWizwSEtPFAFAZdQVUVTRQHV0ZQFVABEVUNRRdTQFEQAV4S2+arNUL7wFpGWUdbGUFVRFBHR0hQXRRRV0YKVkNUAA4JAxQGVUEwUlsQcl1ap59GCxVYBRF6F1NBVxNWAEV5opAUWxRcXRIa",
      "exito": "dc1:flFEcEBXRFATUFEZLqWeEVQUDgAVGEJSAAlcFVxUFFcFWllUFVABEWoDWBdxWlymzEJPGSdUQVZXD1BaEFdRGV5RFxNX8YFHVlBVSkYUWA5WDwMWShQXXgBDQVBaVBRXC1gVRFsUB1BXBldTWRNWAEVdBE0UWRIe",
      "escena": [
        {
          "texto": "dc1:cVEIX1ASVlQTZ1VXRiFeDfTIEUtGeAMQAgJAVBBQRxQAUxVEW1VER1AXUlYWQkcARVANSBNRDVEYDVUVUlxQXFVRRFIVR1wRR1taXAoDRQwMQQcJRkANXgQPVkdfFVtHRFJQW1QUBlBTA0QXVVxcRRBfQVoHVgVZVE8Ud1FZWxlXXERAQFdeXh8UVvrVEFIHVhJCFwlZA14AEBNRVRVYVQBEXF1ZW0RATAcWRFMTQgwAQwVcCBgEXhgNVRVfQFdMQFkAUlEc",
          "imagen": "img-cueva"
        },
        {
          "texto": "dc1:Y0WnmhVBW0VaWxoZKgcXD1IYBwsCVUJUCABWFUFAURQFR0DymBQDRFgQUlZUUlxFEF9BTQNLDkJXQUVAVRNaWFZZARNRV1DynlUUWAQUXhEZQTIQA0dCUQ0ERlxVWxRYCxZDUBVVRFBbEF9FGA==",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:c1xEVVpcVl4TUFEZCgcXF1ITAQAUVUJSotBFUFRUGBQRWFQRR1EOUBkGUxdeWlcXF15BVxNdF1EUQVdaXhNBVxJTBV1RU1ZeE1BRGRUDXhAXExcAAlUREAUGE1lVQUZVFxZMHRVVEFBdDRZUWV0SBxdQDFgITAQcGBRaFUBSRFxeCkTxnn5TEUNVWFgEFFZDUwRCCQlHQkMED19aQ/ePGg=="
        }
      ]
    },
    {
      "id": "p13",
      "fase": "V · Los siete",
      "titulo": "La palabra de los sellos",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p17",
      "descripcion": "«Entra con la palabra de los sellos.»",
      "instrucciones": "¿Qué palabra abre la reja?",
      "documentos": [
        "d21",
        "d18"
      ],
      "huellasRespuesta": [
        "d1ae12a19b81e263a67054e4a2a4849dc59910cec11d0b15a0d71007d0a57482"
      ],
      "pistas": [
        "dc1:YVUNQBVBV11fW0cZEg9SDVIPQhAIVUJcBBdBVBBMFEEKFlvyj1kBQ1ZCRFhbUlwKSw==",
        "dc1:fUIAVltTVl1cRxRdAwoXKhcADkUwfUw=",
        "dc1:d1xEQPabQkVaWVsZCAkXF14EDABGWAdEEwIJFV5aFFcRU1tFVBo="
      ],
      "solucionDirector": "dc1:exAoE/eFEnh6FH0ZpNEXKn4oQidG9tUQKDUTZxD3gxQyFnoR94NEZ3BCZRcLE34sJ2Muakg=",
      "exito": "dc1:fnkmYXphHBF/VRRLAwxWQ1QEBgBIFCZVFRHwlEMZFFcRV0dUW0AFEUBCUlhFE1EED1ASA0ZUABBOBEZRUVdRS1MQBlpXXlteR1FXWEYCUkN2FBAACl0NEDICQVhZUFpACxg=",
      "escena": [
        {
          "texto": "dc1:fh0tHncfYBx8GWcXRipWQ0UECARGVwdUBENQWl4VQVpER0BUX10AXhdCclJCQfHEFh1BWhNZE1VWFVUVSRNQVkEQB1JfU0ERV1EUVAcCUhFWQQwQC1EQUQUCQBkQUFpCEVNZRVRHRFRXQkZWRlZeRQFUQUoDXAAKGAL3hlRaV1xBHERaW1FHX1JWWFwVShcAVhMWBBUUBlVBDVJDVVJVVw31hl8bFCFdGQtYQVNdRgQXWA4ZBU0EXF8AFFFVE0FXElMIUkNdHA==",
          "imagen": "img-cueva"
        },
        {
          "texto": "dc1:8JspWhVQW1NfXVtNAwVWTxcRAxcHFC5FAqCeVBwVTRQUV0dQFWALXVwGWRdVRlMLAV5BXApUABBJFF1QQlIa+4kQJ0ZUQFdfR1UUQEYCWBAXAgMPB0dMEDhDRltRFUVBARZbXhVRF0X6wxZSWBNeBEVdCEoSWU8=",
          "quien": "gismera"
        },
        {
          "texto": "dc1:YV8GQVASXlATV1VTB0YDURtBFwtGVRBTAENDUEFAUffVVxVVUBQKXl4DWhdVXFxFEUMESkZKFFVcAEcVVFYUW0BfClBQEldfE1FYGQAUUg1DBEIcRkEMUUENXEFRFURRA1dRUBVRChFVAxZDV0NTRQZeDxkDVEFcWQJGUBBXURlhURZeXFdcRVwa",
          "visual": "sellos"
        }
      ]
    },
    {
      "id": "p17",
      "fase": "V · Los siete",
      "titulo": "El arca de nogal",
      "tipo": "cerradura",
      "obligatoria": true,
      "puntuacion": 80,
      "segundos": 60,
      "siguientePrueba": "p14",
      "descripcion": "Sobre la última caja de la cueva hay un arca pequeña de nogal que no figura en el inventario, con tres ruedas de bronce y una nota de Aurelio pegada en la tapa. Las ruedas giran duras y el candil se está acabando.",
      "instrucciones": "Girad las tres ruedas hasta la combinación del arca y abridla. La nota dice de dónde sale cada cifra.",
      "documentos": [
        "d26",
        "d02",
        "d03",
        "d07"
      ],
      "config": "dc1:SRIWRlBWU0IRDm9iRFcDWgVDTkdXAlIFQ08RBAYADRZIFAQJAgdGHRtTDwYEER5HVAhTDkRlTWsaUhYZEgYWFRAGRh8XBRAdEQwWFURfFT4bOkBUUxZOElJTERkSBgAWSBQBBBcYRgcMQBoVAAQQODhM",
      "huellasRespuesta": [
        "cfd5471018e923df5b0de954a0db07b4e0e43941eebb72999897f7a37e375d7c"
      ],
      "pistas": [
        "dc1:ZkIBQBVAR1RXVUcVRhJFBkRBAQoVVREQEBZWFUlUFFwFVPaYXEdEUlYMQlZSXBIACxEEShJdQVNZElsPEEZaGVPz1VwZEkdfE1r3gwsDRQwXBQdFFVEOXA4QE0wQQFpVREVAXFQa",
        "dc1:d1xEUvaDXRFWRxRcCkZTBltBBxYSVQxEBENXWl5RURQAWUdc9pkFEVwOFlFEUlUIAF8VVkZxKB4YLVtGEEBRVV5fFx8VXl1CE0VBXEYCXgBSQQ4ERloNRABDV1BcFUdbBkRQHw==",
        "dc1:flFER1BAUVRBVRRXCUZSEBcEDkUF99FUCARcFVRQWBQHV1tVVFALEV0HFltXE1EED1gVWFwYBEMYDVsVQUZRGUFFCVJbEkFEQBRSUAoHRENUDg8VClEWURJN"
      ],
      "solucionDirector": "dc1:AwZRChUaUUNcWlteFAdaAhcFBwlGWAddAE8TRQAEHRSmgRUGFRwIXkpCRV5TR1dFA0MAXgtdD0RXEhgVVAMGEBLy0xMGBhIZQEFZWEYCUkNUFAMJF0ELVRNDVVxcVBRXC1tFXVBABRFdB1oXVUZTARdQBVZGVaKRXwhXWhwTUAkFGUoTeVMSQ0ZRUFhGElIRVAQQBEZdDFMNFkpQEAMDGERTWRFW99dVUAVZF1JWXkUGUA9dB1wOHBgRVUdRE0VMW1UKE1tdEl1WVRRVB0ZZDEMATA==",
      "exito": "dc1:flFER1RCUxFAURRVAxBWDUMAQgYJWkJFD0NAQENFXUYLFlFUFVkFVVwQVxdAWlcPBB9BfQNWFUJXTRRAXlIUWlNCEFIVUV1fE1hVGQoDQxFWQQYARnUXQgQPWloQTBRBChZZWFdGCxFJB0dCU/CDCkVVBBlXDFYBGAJbWxBGWhlXSERfXFBAWEAUUVdGClZDUBQDFwJVWBAUDVIVQlpHVURSUBFaVwxeGRJDWUJSQUUGXg8ZE1ZBX1IOFFBeE1FVElMBXUFAXR8TeEFapctWQ1sEB0UKVUJTABFHVBBQWhQXX1lUW1cNXhVCWlYWV10HCVBBQEZcCFNdWxT3m3ZHTV0QAUAVX/GcXPaPFw==",
      "escena": [
        {
          "texto": "dc1:d1xEUkdRUxFWRxRdAwoXF1YMA6bXW0JUBENGW1EVV1UOVxVVUBQUREsNRRsWQ1cWBFUAFUZbDl4YAlVbRFxaXEBRFxNRVxJZWlFGSwlIFy9WEkIRFFEREBMWVlFRRhRQARZXQ1paB1QZBV9FV10SARBDAEpdGCJYURBBXBBfVUoSXRFWQ1cSRF1VFFhGE1kCFwwLAAhAEFESQ3RcQ1hRRgUWWVRQFAhQGQxZQ1cTU0UJUEFVE0JBVF0NFFZRXVBQXh4=",
          "imagen": "img-cueva"
        },
        {
          "texto": "dc1:f1kIE0ZXW0JQXVFXEglEQ1QIDAYTUQxEAENKFV5AUUIBGBViXFEQVBdCYkVTWlwRBBEYGQVNAERKDhoVdV0UXEFVRFxHVldfHxRNGRUPWUNRDhAfB0ZOEBAWVhVcWhRQDVVQEfadCB8=",
          "quien": "gismera"
        },
        {
          "texto": "dc1:flFER1RCUxFAURRVAxBWDUMATEUiUQxEEwwfFUVbVRQHV0dFVBQHXldCWlYWX1cRF1BBXQMYIEVKBFhcXxNNGUdeRF9cUEBeE0RRSBMD9NJYTUIBAxRTBFZSHxVTWloUEVgVVE0UCFhbEF9EFlISEQxfFVhGXQ8QVAAUUkVSRl1TCkRGW1MSQ1xHVRkCAxcMVAkNRRZBDEQAEBNWX1sUQQoWWltaFAFfGQdaF1VWXBEXXk8ZKk0C85UAFFlVVhRVUxAHUkdGUxFWWhRKDwpSDVQIDUUfFA5RQQdcV1xUGhSmnXBCQVtEVEpCW/SbXPDeSREFUAVdTxBhQUdaXkH3lFcQFFxHEkJDWllRSwdGQQZNQQcLRkEMUUEQVlhRW1Ua",
          "imagen": "img-lucia"
        }
      ]
    },
    {
      "id": "p14",
      "fase": "VI · La acusación",
      "titulo": "Quien se llevó el quinto",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 200,
      "siguientePrueba": null,
      "descripcion": "Alguien forzó la librería, os siguió por Toledo y se llevó el quinto fragmento.",
      "instrucciones": "¿Quién fue? Si os queda alguna duda, el Interrogatorio sigue abierto.",
      "documentos": [
        "d16",
        "d20",
        "d17",
        "d15",
        "d25"
      ],
      "opciones": [
        {
          "id": "rafael",
          "texto": "Rafael Sarmiento, el sobrino"
        },
        {
          "id": "dimas",
          "texto": "Dimas Olalla, el librero"
        },
        {
          "id": "fulgencio",
          "texto": "Fulgencio Marañón, el canónigo"
        }
      ],
      "huellasRespuesta": [
        "1859ad2957dc7d34bece4e91956bc587f72cedbf82c0ac159cf7cd8f15e4f0da"
      ],
      "pistas": [
        "dc1:d1xEUFRc8YJdXVNWRgNEF1YDA0UDWkJVDUNQWkJaFE1EeVlQWVgFEVwMFltXE0IAC0II+tVWTw==",
        "dc1:8I8gVhVDR1jwnVoZAxUXBltBAQoFXAcQFwZBUVUVUFFEe1RVR10ADg==",
        "dc1:8I8g8IZcVlQTVURYFANUCvTSQgkHFBJZBBlSFUFAURQBWFZQX1Vb"
      ],
      "solucionDirector": "dc1:YFECUlBeEmJSRllQAwhDDBlBJgwMW0JVEhdSRxBQWhQpV1FDXFBIEUkHRFgWQEdFJlgVSwn7yl4YF1FHVFYUXEFEBVFUEldfE25bWgkCWBVSE0IBAxRTCFtWAxVRFQUNXgcAEUwUCFAZEl9STFISFBBUQVwIWwBaWUFVRVFBUVpb89cTUFwSQkYUV1YFDlJNFy4OBApYAxAND1ZS84YUVURaVEIVBVMLDVIWThZdXUUWUA1QpYtBVF1BWFQQQ1FXQVmngFsSGl1WFERQAg/00BcNA0UEXQBcCAxHUFNUFFVEZFRXVFEIHRkSU0VZE1wKRUMOW6WLSAsYBFgVU1Ja+oFeDVRaEkJDVkddXaXLVkNBos8WFlEQURJN",
      "exito": "dc1:YFECUlBeEmJSRllQAwhDDBk="
    }
  ],
  "epilogo": "dc1:YFECUlBeEmJSRllQAwhDDBcRAwKlh0JcAENQUEJHVVARRFQRREEBEVEDVPSbUhIDCkMbWAJXQVxZQVpaU1tRGVZVCBNQXEZYVkZGVkYfFxNeBQum1RQSVRMH8IZeFVUUF0MVQlpWFlhXAxZTUxNHCwQRDFgIXRNRGBBBUBBdVV1bVURQR1dL8oAUUFwKRkMMUw5MRSpYB0YAAVIVXVBHURcWQ1RbUA1UVwZZGxZWXEUVQw5UA0sAQxRBQVtRE1ZQUFwNXEFXUVATRUFcRghYQ18AAKbLVUJGCBBHWhBbQVoHVxsRcV0JUEpCeVtXX14ESREAVUZdD0RdE1VHQ1YYGV5VRFZbRFvygBRVGSoTVKCaAEIQCFVCUwARR1QQUVEUFPWcQlRZARFNA0RT9Z5TRRwRFFcHGA5WXRNAVBBXURlRXwlDR1MSXEZNFF4DCFIRWBIDS0Z4F1OizlIVXFQUUQpbVENW99cRQEJYWBZfU0UGXg9NA0sV84tPPj98UhRbW1IIWlpGV1JSFFBcRidCEVINCwpGZwNCDApWW0RaFEQFRfaCFVEIEVYWWfSHXBIACxENWEZbFFVOABgVXVpRV0ZCBUAVV14RUFVa+tUIXgRYQS8EFFWhgaLQXRVcVBRdCkBQX0FVFlhYAFcXVVxcRRBfABkKTRFRGBgUQF4TRFjxgRFWWV0SQVJGVRkDChcTWA0UCkgUJ14VEVYVXFpHFAf1hlVcVwFCGQpXVfWeU0URQwRKRkkUVRgJVVfznlVXEkMFX1xWXRFXUVgZBxRUC14XDUUCUUJcAENQVERQUEYFWhVUWxRVCQ5RDRd6RlGmyFBBVQlLQVRdF1tZRlr3ihJVCBNR8Z9QE1BRGTUHWUN+DQYAAFsMQw5NOT9hQFFQBVRUEVBYREL6y0ZDX15dRQNDAF4LXQ9EV08Ue18TUVdRUQ5SV1MSVF0UUVVGC1YTVkEGAEZgDVwEB1wPEEZBR0RUWkNRURcRVw0WVFdAUwcEX0FaCVZBXlEPU/aKXRRWRkILHRVzXhFDW1pcFApYQ1UACApGWAMQDaCSWEBURlVIFnlEVvfJUBkUX1gWQkcARVQTWEZNDxBME1tPXxNQXBJFChNYU0JQE1lBWg4JFw5WGA0XShQBXw9DRltRFUZbF1cVVVAUCF5KQkBeU11GChYRBVxGVwJYV0FEQF5HVUoSVAETWVMSQEZRFEoJClhDRARCEwP3z1FBFl1UEEVBWhBXGxF/QQpFVkJXF1NfXgRJEQJWCBgNVUwTVRVAVkVMV/PVUg8S8Jp6bBRdA0Z+O/XaTEUnWEJACAYTUVUVWFVERkBfQVVIEUwMFllZXlAXAAtBbQlUBFRXTz4/dV0UXF4QAFxHQV0dE0FaWEYCXhFSAgEMpYcMEAUGE3hRUUZdABZMHRVRChFPB0wXUlYSEAtQQV8DWwlRFEFAR1VAFElTXAVRR1NBCxP2n1UHRkcR9NIaDAtVQlwUDVIVXkBRQgX0jh8VbURVXABXXVkfEhALEQ9WC1oTVRgQQVAQSlUZUV8KXFbxn1BaRxRdA0Z7DFATDabXW1gQJA/wmFFGFGIFRFJQGw==",
  "puntuacionMaxima": 1440,
  "dialogos": {
    "prueba:p01:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:8JssWlYSXlhRRl0ZAglFDl4UDBFI9tkQOENSFVz2lUQNTA8RWVUXEVUHQkVXQBIRBFwDUKWRDxBLDloVXvCOVFdCC0AbEnFeXlsUXAhGWwJEQQ6mx0QLVAAQHQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8I89E0RH8ZgTWPeYFg9TAhcVCwAIUUJFD0NS9oFaFFEXVVpfUV0AXgY="
      },
      {
        "quien": "gismera",
        "texto": "dc1:Zl8AUkYeEkJaFEdYBANEQ1sEBxcKVREeQTBGWFEZFHcMX0REXBpEYlYOWRdaUkFFFEQEGRVXDxBWoo5YVUFbShJCC15UXF1CHQ=="
      }
    ],
    "prueba:p01:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8JEpWlkSQVRaR1dQAwhDDERBAQwIVxdVDxdSFUkVWkEBQFAQFXVEXVhCU0RVUl4AF1BP"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dlUXQ1RRW14dFGFXRgNEF1YPFgBGUQxEBBFcFVRQFAVSAwwfFXURQ1wOX1gWXV1FCV5BSQlWBUL7zFUVVvCVWltcSBNFV0BeE0BVVBYJVAwXCA8VCUcLUg0GHQ=="
      }
    ],
    "prueba:p01:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:fF9ER1pWU0ITWFVKRgpSF0UAEUUFQQdeFQJdGxB5VRQsGhVdVBQmHRkOVxdkHxIJBBEvFUZUABBsg7STEF1bGURRCFZbElxQV1Ua"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YkUBQBVTElzwmRRVB0ZhQ1oEQgYTUQxEAENQXF5WWxQSU1ZURhpEdEpCVEVZXlNL"
      }
    ],
    "prueba:p01:pista": [
      {
        "quien": "chiqui",
        "texto": "dc1:YvPJV1BeVxFSFG1WDRVFClhBExADFAxfEkNAQF1QFFEXQloR9p0IHxkuUxdRRkERBF9BVQlLQV7721lQQlxHFw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:flVEVEBBRlATWfeYFUZBBkUPDRZGRxddABEdFWBcUFFIFkVUR1tEUkwHWENXE18MAF8VSwdLTw=="
      }
    ],
    "prueba:p15:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:dl8XE1NdRl5AFFBcCkZTBkQRAwYOW0wQNA1SFVFbQFEXFkwRWkAWUBkGU0RGRvHMFhEFXEZJFFUYAFhSRVpRVxJVCkdHU0BQHRRwWAsDFw9WQQ6mx1kSURMCHQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dPPJWVRGVxFWWhRVCUZGFlJBDApGRwcQFwYTVBBFRl0JU0dQFUINQk0DDBdaXBIVAEAUXKWJDhBBQVhaEEJBXBJJBRNbXRJUQED3mEYCUhFSAgoKSA=="
      }
    ],
    "prueba:p15:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:d1xEUFRY8YJdFFBcRgpYEBcNAwYUUREcQQZfFVFBWFUXGhVdVBQXWFUOVxsWVl5FCFATWgna4ZYYGBRAXlIUWl1cDV9ZUxJSXFoUVQdGVQxGFAsJClVCVA4RUlFRFVFaRENbEVZRClhaB0RYFkJHAEVUEk0HWgAQVAhZRVlcGg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:c1IWWvaBElRfFFdYDKWEDRcFB0UKWxEQDQJQR1VGFE1ERVRS9odEVFVCVUL1gl1LRXMUSgVZA1EYAFhSXxNXVlwQF1ZZXl0fE3VYXhMPUg0XEgMHpZkDEA0ME1FVWRRZBUZUEVRaEFRKQlJSFkJHAEV9FFqllQAQWQNGXFVBVRlXXERAWlBAVB0="
      }
    ],
    "prueba:p15:pista": [
      {
        "quien": "gismera",
        "texto": "dc1:f1kWUhVXXhFeQVFbCgMXB1JBDgoVFA5RAhFWRh4VZUENU1sRV0EXUlhOFlZUQVdL"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:axABXxVBR1RfWxoZKgcXBFIPFgBGRRdVQQZdQUJUFFABFlteVlwBEVcNFkVTUF0CAB8="
      }
    ],
    "prueba:p15:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZFEIVhkSQVQTWltKRg5WQ14FDUUDWEJECAZeRV8bFGQBRFoRWVVEUlYOX1taUhIJBBEJXEZOCENMDhRMXx8USEdVRFBaXEFFVho="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cV8KQEFXHBFqFFFVRgVWCfTSDEUCUUJcDhATWVFWRlEXGhVQV10BQ00NGBd1XFxFAEIOGQtdQVJZEkBUHg=="
      }
    ],
    "prueba:p02:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:cVEJQ1oSVlQTVU5MFEoXF0UEEUUKXRFVEkNXUBBaRltIFldeR1ARQ1hCUlIWVEcJAEJPGSNUQUZXAlVXRV9VS1tfRF9aEkZDUlBBWgNGQwxTDkw="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:c0oRXxkSU1xSRl1VCgkbQ0UOCApIFDFVCBATRV9HQFUAV0YfFXEXRVZCWlgWW1MCChESUAgYF19bAFZAXFJGUF0e"
      },
      {
        "quien": "gismera",
        "texto": "dc1:cUUBXUFTEl1SRxRVDxVSEBcADBEDR0JUBENfWVFYVUZKFn1QTBQBQloXUlhFE1EEFlhBUAFNAFxdEho="
      }
    ],
    "prueba:p02:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8JEhXxVBW1RHURUZIgNDEfTAEUUCUQ4QDQ9SWFFRW0ZEXlRIFUEKUBkBV11fR1NFBl4PGQVZD1RZBVsb"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dl8XE0dHV1VSRxoZP0ZCDRcCFwQCRgNUDkNXUBBb944JU0deRhQHXldCQkVTQBINEFQCVhUWQXFNE1FZWVwUXEBRRFdQEl5eQBRFTANGXRZSBgMLRlEMEBIGQVxfGw=="
      }
    ],
    "prueba:p03:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:Z15EUEBTVkNSUFsZAgMXDfTbDwAUWxEQAgxdFURHUUdEVVRCXFgIUEpCVFhEQVMBBEJPGT9XQUBZElsb"
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZvPeE1tdEkFSR1VKSEb1yGMOBgQVFA5REkNVXFxURxhEVVpdQFkKUEpCTxdSWlMCCl8AVQNLQVRRAlFbEF9bGV9ZF15a8IkLE0dBVAdGQg1WQQQMClVCUw4OQ1lVQVUUHRZZXhVADVRXB0UZ"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8I89E1lHV1ZcCw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fkUBVFoeEkRdVRRdDwdQDFkADks="
      }
    ],
    "prueba:p03:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:YVUNQBVLEkJaUUBcSEb1wmQEQgQERgcR"
      },
      {
        "quien": "gismera",
        "texto": "dc1:d1xER1BAUVRBFFJLBwFaBlkVDUUfFBdeQRdSV1xQRltEUlARWVEQQ1gRGBdzQEYKRUcAGQcYElVKQVhUQlRbFxJhEfCcElBYVloa"
      }
    ],
    "prueba:p05:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:fEUBRVASUVBAXVhVBxUbQ1IPQgoUUAdeTUNKFVVZFEAFVFlUR1tKEfvJd0T1nhIWBF0VWEZdDRBbAFZUXF9bF/CL"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:flFEX1BGQFATUUcZCgcXAFgNFwgIVUJJQQZfFV72jlkBRFoRWVVEV1AOVxsWUF0IChEEV0ZdDRBZC1FRQlZOFxJRVRNUUFNbXBRVGQoHFwpNEBcMA0YGUU8="
      },
      {
        "quien": "gismera",
        "texto": "dc1:Z14FE1lXRkNSFERWFEZUAkQIDgkHGkJpQQ1cFVxQVUdEWlQRRVUIUFsQVxdeUkERBBEVXAhdExBUAEcVXkZRT1ce"
      }
    ],
    "prueba:p05:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8JElX1bxk19HVUZYR0ZyDxcRFwAIQAcQEwxeVF5aGhQyV1heRho="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZFEJXEYeEkFWRlsZBQlZQ1INQhYJVhBVW0NDWkIVWFVEWUFDVBQHUEsDFl9XShIQCxERVQdWDhBcBBRZURNGUFBVFlIb"
      }
    ],
    "prueba:p05:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:YVlER1ASQVBfURRMCAcXE1YNAwcUVUJBFAYTW18VUUdEQ1sRRl0QWFZCUlIWZ10JAFUOFUZQAEMYDVH2nVdbGVRZCFJGEkJeQRRXVgoTWg1WEkw="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fRABXxVRU1NSWFhWRg5WQ0QADhEHUA0QDAJfGxBlVUcFGA=="
      }
    ],
    "prueba:p06:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:cUUFR0ddElBfFEdMFEoXAF4PAQpGVQ4QDgZAQVUZFEEKWRVQWRQKXksWUxsWRlwKRVANGQNLFVUWQXBQQ1dRGV5RREdaQEBUHxRFTANGVBZSDxYERlcNXQ5DRlsQVkFVAERaEVj3xUIX"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fF8WR1ASU0NBXVZYSEZkFkVBBxZGXANTCAITVFJUXltKFnteFVcLQ0sDRQ0WUFMBBBERWBVXQVVLQUFbEFBBWFZCCx8VXF0RRlpVGRYPUgdFAEw="
      }
    ],
    "prueba:p06:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8JExXRVCU0BGUUBcRgNZQ18UDgBHFCdcQQBGVEJBWxpEbxVVXFcBEV2hhVlSVhIAFkWimEZdDRBJFF1bRFwa"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fkUH8JhTEl1cFFxYRgpSoJoFDUUDWkJGDhkTVFxBVRpEe0BIFVUIRVZMFm5XE1wKRVkAQEZWAFRZQUVAVRNcWFFVFgkVUxJrXFdbXQkQUhEZ"
      }
    ],
    "prueba:p07:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:ZkIBQBVRXVBBQFVdBxUbQ0MTBxZGQAdDFQpUWkMVTRQRWFQRXVsWUANCWlZFE0EMAEUEGR8YBVldGxoVc1JQWBJFClIVRldfVllbSkYKVkNaCBYEAhQGVUEPXEYQRVVEAVpQQhs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YkUBQBVG8YsTWVEZCgNSEBcNDRZGQBdJDhATTBBMWxQUX1BfRltEVFdCWUNEUhIGCkIAA0ZZDVdNCFFbEF9YXFXz1xNUXEZUQBRFTANGWQxEDhYXB0dMEKPccPaDWFsUF1dX8phVRFX60VhTUxNbF1o="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cEUBXVQSQkNWU0FXEgcZQ2EUBwkQUUJRDUNDQFVbQFFEW1xUW0AWUEpCT1gWXEABAF8OGQhXDFJKBEcb"
      }
    ],
    "prueba:p07:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dlUXV1ASXlATQFtLFAMXEFJBDRwDFBZfBQwdFXVGQEESWRVQXffJEVgQRF5UUh5FA0QMWAhcDhwYDF1QXkdGWEEQKEZW8Z9QE1hR+ssHGQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:axABXxVRU1/wh1pQAQkXDVhBEhACW0JdDhVWR0NQFFABWhVSWkYLHxkzQ1JSUlxFAV4SF0ZtD18YBV1WVRNFTFcQAUBBU1BQE1FaGSsHUxFeBUw="
      }
    ],
    "prueba:p07:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:d10UWlBIUxFDW0YZFxNeBllBFgwDWgcQFA0TQVVGQF0DWRVAQFFEX1ZCRVIWQ0cAAVRBXBdNCEZXAlVHChNXTFNCAV1BUxJXWlFYXBVGRAxZQQ8QBVwNQ08="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:axAUWlBcQVATUPeKCAJSQ1ISFqbHVgNdDhATW19GW0AWV0YRVkEFX10NFntDUPHIBBENXB/70hBdDRRFUUNRVRwQJVv2nxJUQEBVWwdGQwJaAwumz1pCXxURXBs="
      }
    ],
    "prueba:p08:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:fVwFX1lTElVaV1EZpM1SDxcAFxEJVqGKEkNXUBBZVRQQV0dVUPbfHxkqV04WUEcEEUMOGQdNFV9aFEdQQx0UfF4QBlpZXldFVhRQUAUDFwBCosMJSA=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:axAIUhVCU0VBW1pYRgJeAFJBFwsHFApfEwIdFWNcFFcRV1FDVBhEflUDWltXE0EARUAUXAJZQVVWQVhUEENRV0FZp4BbCRJCWhRaVkpGWgpSDxYASA=="
      }
    ],
    "prueba:p08:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:flEXE0ZXW0ITWVFXCRUXFVIIDBEDGkJpQQ9SFUBUQEYLWFQRWVtER1ANFlYWXlcLCkJBWhNZE0RXTxR2RVJQS1Me"
      },
      {
        "quien": "gismera",
        "texto": "dc1:axAIUhVRQFhSUFUZCgkXDE6i0UUSWxFVE0NbVENBVRQIVxVSUFoFHxktWlZaX1NFC15BXBVMAFJZQVFbEGlbWl1UC0VQQBwRYkH3kEYWUg1WW0IIAxQBUaLOUhVdVFga"
      }
    ],
    "prueba:p09:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:flUQQVRBEkJaWhRKAwhDClMOTEWkny5RQRNBXF1QRlVEQFRdUBQUXktCWlYW8IgJEVgMWF0YDVEYElFSRV1QWB4QFFxHEl5QE0RRV6XcWxdeDANLpI8="
      },
      {
        "quien": "gismera",
        "texto": "dc1:d1xEUldXUVRXVUZQCUZWDxcTBxOlnREKQSITRV9HFG5IFncRRVsWEWBMFmRfXRIJBBEE+tddTxB0BEBHURNVGV5VEEFUHhJyW11FTA9KFxBeD0IEAl0UWQ8CQRs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:a19EUlFbRFhdWxRUAwxYERcQFwBGQKGKQQdWWVVBRlEFRRs="
      }
    ],
    "prueba:p09:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:8JshXxVBV0lHWxgZAwgXBltBNhellQxDCBdcGRBXVV4LFllQFUABQ1oHRFYWX/HEFVgFWEj62hB0ABRGWV1VXl1XBR0="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8I8gVldTWF4TUFEZEwhWQ1uiwxUPUAMPQS5WFVVbV1UKQlQRUEcQVBkBV0RZHQ=="
      }
    ],
    "prueba:p09:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:YVlER1ASQVBfURRMCAcXE1YNAwcUVUJDCA0TQ19WVVgBRRkRQVFEWVgRFkRXX0YEAV5BTAhZQVxdFUZUHhNiTFdcElYVUxJdUhRiA0YDRENyTw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ZH9EVkYSd30dFHhWRgJSDvTAEUUDR0JAAABaUF5WXVVIFlFYVlFEXVhCRlZVWlcLEVRP"
      }
    ],
    "prueba:p09:pista": [
      {
        "quien": "chiqui",
        "texto": "dc1:Y0UBE1tdQRFfWxRdAxVUClETB0U/WwlDEwpcGRBEQVFERlRDVBQBQlZCQl5TXVdFCVBBTQdaDVEW"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fF8XE1FTQPKSFFhYRhZFCloEEARGRANcAAFBVBBMFEEKVxVSUF4FEVUHQFZYR1MBBB9BdQkYAl9WDk5WXx0="
      }
    ],
    "prueba:p10:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZkIBQBVCW1RJVUcVRhNZQ18UBwYJGkJlDwITUEMVWFVEVEBUW1VK"
      },
      {
        "quien": "gismera",
        "texto": "dc1:flEXE1pGQFBAFFBWFUZEDFlBDgRGVhdVDwITVFwVRlES9ZxCDxQRX1hCUlIWWkgUEFgESwJZQVEYBVFHVVBcWB4QC0dHUxJVVhRVSxQPVQIXAAAEDFtMECwKQVQQWVtHREVUXVxRCkVcERoXWFwSAAkRBVAETQtfFg=="
      }
    ],
    "prueba:p10:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:d14HUl9TElBfFFlQCqWaDlIVEApIFDtRQQZAQfOUWhQIWUYRRl0BRVxM"
      },
      {
        "quien": "gismera",
        "texto": "dc1:YVkBR1ASVENSU1lcCBJYEBcYQhYPURZVQRBWWVxaRxpEd1tFUEdEVVxCWlJTQRIACREMWBZZTRBVCEZUEF9bShJcBVBHV0ELE0FaVkYIWENSEkIBAxQxURMOWlBeQVsa"
      }
    ],
    "prueba:p11:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:YVUNQBVeW1NBW0cZBwReBkUVDRZGVw1eQQ9WQUJUFE1EWPaLWFEWXhdCbxdDXRIWppgRTQ9VDhBbDloVX0dGVhJUDVFAWF0fE3BRSgUU9M5VBA8ACltM"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:d0NERltTEldfW0YXRikXFlkAQgAVQBBVDQ9SGxB6FEEKVxVDQFEAUBc="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cUUBXUFTEl1SRxRJEwhDAkRBG0ULXRBRQQZfFVNQWkAWWRsReVUXEV0HRVREWkIGDF4PXBUYABBXC1sVXlwUSltCElZbElZUE1pVXQdI"
      }
    ],
    "prueba:p11:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:fVMMXBVCR19HVUcZH0ZCDRcOCApGUQwQBA8TVlVbQEYLGBV1VBQRXxkSWVRZE1YARVwIXAJXTw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fF9EVkYSVlQTZ1VLCw9SDUMOTEUnWAVFCAZdFV32lUdERVRT9pkFEV0HFlJFR1dFCFARWEoYGBBJFFFH855VGUNFARNZXRJCRkRd+s8UVg5YEkw="
      }
    ],
    "prueba:p12:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:dl8XE1nxn19WVUcDRgpWQ1sIABcDRqGdAENQWl4VUVhERkBUW0ABHRkOVxdVUkEERVUEGQpXEhBdEldAVFxHGVFfChNQXhJlQfeVVxUPQwwZQSYKCFAHEBIGE1ZCQFdRChg="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dlEJVhVHXFATRlFeCgcZQ3hBFwtGXAtcDk0TYF4VXF0IWRVHVFgBHw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fF8WR1ASU0NBXVZYRh8XBltBEhAKRw0QBwpBWFUbFG1EWFoRRUEIQlwRFl9XQEYERUAUXEZUAEMYBVtGEF/3lFxVBUAVV0FF8J1aGRIUVhlWBQMWSA=="
      }
    ],
    "prueba:p12:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8JEoUhVxR1RFVRRdA0Z/oJ4TARAKURERQSHwhkZQUFUXFkdeWFUKUEpOFkJYE0YAFl4TVkZJFFUYD1VRWVYUXVdSp55UElNTQV1G2+bAFyZEFQ1FA0dCRQ9DQEBV9oVbSg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:Z15EX1xQQFRBWxRYCBJeAEIAEAwJFAdDAgxdUVlQWlALFkZEFVYNU1ULWUNTUFNFAF9BVQcYAkVdF1UVVFYUVVMQCFZMV1xVUhoUbQMI9M5WQREACEALVA5DV1BcFVxBCVlHHw=="
      }
    ],
    "prueba:p13:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:Z15EUFRcVlBXWxRdA0ZEBl4SQhcTUQZREkNQWl4VWFEQRFRCGxSmmnUDFkdXX1MHF1BBXQMYDV9LQUdQXF9bShzy3w=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YVUNQBVBV11fW0cZBQlZQ1sEFhcHFBsQD6CJWFVHWxQWWVhQW1tKEXYQUvSfXVMJCkJBXQNUQXkYAFgVZnoUQBJcAVYb"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8I89E1BeEkLwnURNDwtYXA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:d1xEQPabQkVaWVsZCAkXF14EDABGWAdEEwIdFX5aFFcRU1tFVBpEZVYGV0H1nlNL"
      }
    ],
    "prueba:p13:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8JEoWldAXUISFHdVBxRYQ0YUB0UKXQBCDhAdFXNAVUYBWEFQFU1EVVYRFlRXWVMWSw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:axAFX1JdEkBGURRXCUZSEEOiw0UDWkJVDUNaW0ZQWkAFRFxeGxQlREsHWl5ZE1wKRVkAW6WVABBMBEZYWV1VXV0QAFYVWlNTX1VGFw=="
      }
    ],
    "prueba:p13:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:YVUNQBVeV0VBVUcVRhNZAhcRDRdGRwdcDQwdFXVZFFsWUlBfFVgLEV0DWBdaXEFFC/LbVANKDkMUQVpaEFZYGUFZEFpaElZeXVBRGQoJRENSDwEKCEAQUQwMQBs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:a1FEX1oSQfKaGhR8FUZGFlJBExADRqGdAENDR19XVUZE9J5lcGcrY3agjRk="
      }
    ],
    "prueba:p17:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:8JsqWltVR19SFFdQABRWQ0YUB0UIW0JDBBNSRhBMVRqmjRVkWxQF8ogNGhdVRvHEC0UOSkZLDl4YDVtGEEBRVV5fFx8VXl0RQkFRGQIPVAZZQQ4EFRQEWQ0CQBVUUFgUB0NUVUdVAF4X"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:d1xEUvaDXRFfWxRNAwhQDBlBLgoVFBFVDQ9cRhBZW0dEQlBfUltKEfvdc1sWUEcEAUMAXQkHQWBdD0dUUlIUSEdVRFZGXRJIUhRYVkYOVgH0zAMICUdCUQMKVkdEWho="
      },
      {
        "quien": "gismera",
        "texto": "dc1:c1IWWlhdQRFWWBRaBwhTAlMOTEUjRxZfQQZAFV9BRlVEVVpCVA5EXVZCR0JTE0EQCFAPGRVNEhBeCFhUQx0Ua1dABUBUEl5QE1JbTQlGUwYXDQNFElUSUU8="
      }
    ],
    "prueba:p17:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:Z14FE1ZTQEVSFE0ZEwgXD14DEApGVw1eQRZdVBBHW0cFGBV9VBQJWEoPVxdEXEEERUAUXEZdDRBLBFhZXxNFTFcQF1xXQFMf"
      },
      {
        "quien": "gismera",
        "texto": "dc1:8JsoXBVDR1QTWfeYFUZGFl4SB0UIW0JVEhfwlBBQWhQBRUFQRhQHUFMDRRn0iBIpEFKilAcYGFEYCVUVVFZeWFZfRFdQEl5UVkYaGSKlng5YEg4ARkEMEAwKXUBEWho="
      }
    ],
    "prueba:p17:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:d1xEUFRcVlhfFEdcRg5WQ1YRAwIHUA0QGENbUBBSXUYFUloRWVUXEUsXU1NXQBIERUUIXAhMAEMYCVVGRFIUVvGdFhNQXhJSX11XFw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cVgNQkBb0LGVFHBYRg9QFlYNTEUjRxbzwENSV1lQRkAFGBVoFVgFEVoDRENXE1cWRUEASwcYLUVboplUHBNaVhJABUFUElxeQFtASwcVGQ=="
      }
    ],
    "prueba:p14:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:Z14FE1BcRkNSUFUZAwgXD1ZBDgwERgdCos5SGRBAWlVEQlpDR1FIEUwMFlRZUFoASREUVwcYEVldG1UVQUZRGVdeB1JfUxwRYVFEWBUHFwBYDw8MAVtCUQ8XVkYQUVEUAFNWWEcUEV8ZDFlaVEFXSw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fl9ER1BcVV4TV1hYFAkXB1ISBgBGUQ4QERZWW0RQGhQ0U0deFUYBQVgRWRsWQ10XFEQEGRX7yBBJFFEVRFYUXkdDEFIb"
      }
    ],
    "prueba:p14:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:fl9EQFRQ8ZxSWVtKRgJSEFMEQgkHFBZfExFWGxBlUUYLFl1QVvfJUBkEV1tCUhIJBBERUANCAB4="
      },
      {
        "quien": "gismera",
        "texto": "dc1:elEH8JhTEldSWEBYRhJYB1hPQiQOWxBRQQZfFURQWFEDRFRcVBQFEWANXUREWl1LRWhBXAoYEvOREUBcXVwYGVVFBUFRU1ZeE1VEWBQSUkNTBA5FC1USUVtDXVoQUEcUAFMVUERBp5wX"
      }
    ],
    "prueba:p14:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:YFUUUkZTEkBGXfeQCEZDClIPB0UFWwFYBE8TREVc950KFlteFUQLVfrPVxdbXEQAF0IEGR8YBfOLD1BQEFJEWEBVB1r2gRJdUhREUAMcVkNGFAdFA1oBUQsCHQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:axAVRlzxm18TUkFUB0ZUAkUOQhEDWgtVDwdcFVRQQVAFRRs="
      }
    ],
    "documento:d02": [
      {
        "quien": "chiqui",
        "texto": "dc1:8JshXxVCQFheUUZWRgpYQ0MIBwsDR0JVD0NfVBBYVVoLGBV1VFgBEVUDFkFDVl4RBB+jgkZ1BBBfFEdBURNRSkZVRFJXR1ddXBo="
      },
      {
        "quien": "gismera",
        "texto": "dc1:8JshXRVDR/KaFFX61wkXB1gTDwwUGqCLQS9cRhBZXVYWWUYRUUEBQ1QHWBdTXRIACREEShJZD0RdQVBQEEBBGVPz1VwbEn5QQBRdVxUSRRZUAgsKCFEREAQQR/aRWxRXC1tFXVBABUICQkVYWlwSDQRIQUgTXUFcXQRGWVFAFF1dQ0RFUFFXQh0="
      }
    ],
    "documento:d03": [
      {
        "quien": "gismera",
        "texto": "dc1:flUQQVRBElxSTfeDFQVCD1YSQhxGQQxRQQ1cQVEVVRQI9ZRBXE5KEXoXV1lSXBIECVYUUANWQURdQVBcU1YUWvGDCVwVXldUQRgUUQccWwYXAgMWCRo="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:elkHE1lbUENaFFBWFAteFVkVTEUlWwwQFBVWGxBkQffNFkdQR1tK"
      }
    ],
    "documento:d13": [
      {
        "quien": "chiqui",
        "texto": "dc1:8JEhXxVDR1hdQFsZAxVDoJZBBwtGbg1TDgdcQ1VHFRQnWUdDUBo="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cVgNQkBbHhFRVV5YRgpWQ0EOGEtGZA1CQQ9SFV9BRlVEVVRDVBQMUEBCWlJCQVMWRUIIV0ZLBF5MCFBaEEoUeEdCAV9cXRJfXEcUXQMM9NAXDQNFFFEFXABNE3BDWhRABVtXWPadChFaF1NZQlIc"
      }
    ],
    "documento:d14": [
      {
        "quien": "gismera",
        "texto": "dc1:flEHQVASVENWR1dWSEZ/AlQEQggDWg1DQQdWFV1QUF0FFl1eR1VEQEwHFlZaVEcMAF9BVANMCPOLQVhUEF5VV10QBVv2nxw="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:cxAIUkYSQVhWQFEZH0ZTClIbTEU/FAxfEgxHR1FGFFgBT1BfUVtEU1gIWRdTXxIVEFQPTQMWQfKHMEFc85paGV/zxUAVXF1CE1tN+tVZ"
      }
    ],
    "documento:d19": [
      {
        "quien": "chiqui",
        "texto": "dc1:Z15EQFpQQFQTR11XRhRSDl4VB0lGUAcQLQxUR1/2hVtKFmwRUFhEQvrLRkNfXl1LRfPeaBNRoplWQVlUXldVGUdeREdHXUheE1BRGQsHRwIXEQ0XRlcNQhMGXAo="
      },
      {
        "quien": "gismera",
        "texto": "dc1:c1wDRlxXXBFCQVEZFQdVoJoAQhQTUUJcDhATWkRHW0dERVBYRhQNU1gMFlYWUkIEF1QCXBQYBENMABRGVV5VV1MeRHJF8YhfR1VYVkYDWUNbAEKm3FgWWQwCE0XzlFNdClcb"
      }
    ],
    "documento:d21": [
      {
        "quien": "gismera",
        "texto": "dc1:YVkBR1ASXlBQRlFKSEZkBl4SQgYJWkJFD0NfXFJHWxQFVFxUR0ALHRkXWFYWX1cRF1BBQEZNDxBWoo5YVUFbFw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:axARXVoSQ0RWFFlQFAcZQ3sIFgAUVQ5dBA1HUB4="
      }
    ],
    "documento:d26": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZkIBQBVAR1RXVUcZH0ZZClkGFwsHFAFZBxFSFUFAURQKWRVCUEQFXFYRGBdyWlEARfLIVUg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fl9EV1xRVxFWWhRKAxReDBlBIxAUUQ5ZDkNdQF5WVRQUU1HymFVEX1gGVxdHRldFC15BURNaCFVKABRQXkBR+oNRAFwVU1xFVkca"
      }
    ],
    "pregunta:rafael:r-madrid": [
      {
        "quien": "gismera",
        "texto": "dc1:YVUQVltGUxFYXVj61QtSF0UOEUWknwdeQRZdFUJUQFumjRsRdlsKEUwMFlRZUFoARVUEGVcBUwcYGBRZURNXTFdDEFIVVlcRZ1tYXAIJGQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:cxAJ8JgSX1QTRFVLAwVSQ0YUB0UDRwcQEgbwhF9HFFcLREdUFVkRUlENGBdzXRIRClUOFw=="
      }
    ],
    "pregunta:rafael:r-zocodover": [
      {
        "quien": "chiqui",
        "texto": "dc1:8I81Rlzxm18TWFEZDgcXC1YDDgQCW0JUBENGWxBWW1cMUxVHUEYAVAY="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fFEAWlAcEnRAWxRcFUZbDBcIDBEDRgdDAA1HUB4="
      }
    ],
    "pregunta:dimas:d-rafael": [
      {
        "quien": "gismera",
        "texto": "dc1:8JsxXVQSUFhRWF1WEgNUAhcQFwBGWg0QFQZd9p1UGBQFFkBfFUQWVFoLWRdHRldFC15BXBRZQUNNGFsb8ogUdl5RCF9UElxeE1ldXAgSUkNUFAMLAltCQwRDX1AQRUZRA0NbRVQUAFQZBERSWEdXSw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:elEdE1BcV1xaU1tKRgtCGhei2BEPWAdDTw=="
      }
    ],
    "pregunta:fulgencio:f-lema": [
      {
        "quien": "chiqui",
        "texto": "dc1:flFEZhVBVxFWR1dLDwRSQ2FPQiAVW0JcDkNAVFL2mVVET1of"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dlUXV1ASV0JHVRRUB6WGAlkATEU2URBfQSVGWVdQWlcNWRVCUBQIXhkGX11ZE1oEBlRBTRRdCF5MABRMEEBdXEZVRFL2g11CHRR1TBQDWwpYQQ4JA0IDUgBDQ1lRW1FVClJaEVBHEF4ZFllTVxNeBEVHCF0HFg=="
      }
    ],
    "pregunta:fulgencio:f-forastero": [
      {
        "quien": "gismera",
        "texto": "dc1:Z15EVVpAU0JHUUZWRgVYDRcAAQAIQA0QEQxBQUVSQffNRRkRQFpEVVwS9YRFWkYKSREUV0ZRD1NND1VXXFYaGWsQCFwVVldc8JVHGaTNWwwXEgMHFPfLWRJDRVpDWkBGBUX3ihs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fVQNXBVRR1BdUFsZCglEQ1oAGwoUUREQBQpQUF4VUUcLGBV9WhQLVVANFkdZQUMQABENTANfDhBZAl1QQkdVVxw="
      }
    ]
  },
  "explicacion": [
    {
      "quien": "gismera",
      "texto": "dc1:8JssWlYSXlhRRl0ZAglFDl4XDBGkj04QAgxdFVxUFGFEU0ZSR10QUBkBWVpZE2RJRVIOVAkYBF4YDVVGEF/3mEJZAFJGHBJ9UkcUVQMSRQJEQRMQAxQRXw9DXfaKWFFGC0UVQ1pZBV9WERZEQ15TC0UAVwxfFEFJGARaFVVfFFxBRAVdQVcSVVYUUUoDRlaghg5CAQlGD/PMAhNQXBVSRgVRWFRbQAsRcCsaF1VcXEUQX0FPCVsAUk0NVUdZXBRdVxAMVkfxk11XXVdYRgdbQ1sABgpI",
      "prueba": "p01",
      "documentos": [
        "d02",
        "d03"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:dl8XE1NdRl5AFFBcCkZTBkQRAwYOW04QAA1HUEMVTRQAU0ZBQPfNQhkGUxdaUhILClIJXEZcBFwYBFpBWVZGS10KRFZZElFQWfeHV0YCUkNbDhFFClUBQgQQE1RSXFFGEFkVUlpaRFRVQlVC9YJdRQNEBEsHFEFVVEFVQVxSRxlCXxYTUF4SQkZRWFZGHxcWWQBCBglYC1wNAhNWX1sUVgtHQFhZWAURXQ1EVlJSEgALERRXRlsEXlECUUdfE1hQX0ANXBsSY0RaUVoZAwhDEfTSQgsJFBFVQQ9fUEb2hxQKV1FQDxQGREoBV1VXE1EKFlASGRVdDVxZBVVGHg==",
      "prueba": "p15",
      "documentos": [
        "d24",
        "d25"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:cVEJQ1oSU0tGWBgZEhRSEBcNCxYDR0JUBENcR18ZFFYLRFFER1VEQ1YIVw0WX1NFFV4TTQdcABBcBFgVQ1pRTVcQAV0VXlMRUFVYVQNGUwYXDQ0WRlERUxQHXEYeFXBREET2kEYUAFRVQlpbV15TAQpDTRkTVgAQWwBeXERSFFpdXkRGWxJRUF1QVV0JRlMGFwUNFkZGF1UFAkAVSRVBWkRVQFBRRgVVVkJSUhZd8d8IVBNWFRgCX1ZBQEdVQBRRR1UHXEYc",
      "prueba": "p02",
      "documentos": [
        "d04",
        "d05",
        "d06"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dFkIUkYeElJcWEFUCAdEQ05BBgwHUw1eAA9WRhBRUVhEVUBQUUYFVVZCUl5VVlxFCV5BVA9LDF8CQUBHVVpaTVMQHRNWR1NFQVsaGSUJWUNSEg1JRlgDQ0EAUkZZWVhVFxZXXkdGBVVYERZSRFJcRRBfQUoDURIQQUFBWxBAXVxGVUgTTBJXXRNXVVcCB1MMFxIHRQdWEFmi0B0VdFBaQBZZGRFQWERXSwNRWlNdRgpFeChwXBgUXhgVVVdcVkZWElQBE1lXRkNSRxRARghCBkEEQgYHRwtcDQJAGRD3n1UX9ZgRRlUIRVhCU1sWUFMHBF0NVqSDTw==",
      "prueba": "p03",
      "documentos": [
        "d07",
        "d08"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:flEXE1tHV0dWFFdYFQ9bD1YSTkUKUaGdBQJAFVVbFFEIFkFQV1gBQ1ZOFlNTX1cRF1QAV0Z5LXP74HphcWF1AxJVCBNFR1dfR1EUSwkLVg1YT0I8RkQNQkEPUhVfQUZVRFVUQ1QUAFRVQkVYVEFXSUVwFEsDVAhfGAlVV/OeVRlWWQZGX1NWXhNYVRkUD1UGRQBCAAgUAUUAB0FaQxs=",
      "prueba": "p05",
      "documentos": [
        "d08",
        "d09",
        "d11"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:cUUFR0ddElBfFEdMFEoXAF4PAQpGVQ4QDgZAQVUZFEEKWRVQWRQKXksWUxsWRlwKRVANGQNLFVUYBVFGVFYUVVMQEFxHQFcLE1hVGRYPUgdFAEIBAxQOUUEAXFlFWFpVRFVcX1ZbSBFfC1pWFlBHBBFDDhVGWw5eGARYFVZBVV5fVQpHWhJ7ZxNRWhkOE1sGGUEuEAX3z1FBD1wVXFBN99cWUF8VQgtLGQNaQ1cfEhxFUEFVB0tBQ1EEQFAQShRPV1kKR1xRW19QWxRcCkZfFlICDUUCUUJqDgBcUV9DUUZEU0ZFVFYFEU8DVfSbXBIGCl9BXAoYDVFbE1EVUl9VV1ZfShN0XlVEWlFaGQ4HVaCaAEIIA0ALVA5DX1QQWFVaCxZUEVlVFxFKC1NDUxNLRQFYBENI",
      "prueba": "p06",
      "documentos": [
        "d11",
        "d12",
        "d13",
        "d14"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:d1xEUFRc8YJdXVNWRghYQ0cUBgpcFBJCBBBaUVn2hxQS9ZhCRVEWUEpCUlIWQFcMFhEYGQtdBVlZQVUVX1BcVhJdAV1aQRJSRlVGTQlGRApZQRIKAlEQEBICX1xCFVBRCBZWXkdbShFgQlcXWFxBChFDAEpGVg5DGA5NUEJcWhlWVRdXUBJeUBNAW0sUAxcHUg1CFRNRDEQEWRNQXhVRWERGR1RBXQgdGRdYVhZQXQkMXQ1YRlsOXhgDW0RFWlhVUxAAXEdTVlATTRRUBxRUAkRBBgBGVw1UDhAIFVVbFFgFFlZEUEcQUBVCRFhSVkAEFhEFXEZNDxBbDlddVRNXVlwQFEFcQVMfE2FaGSUPQxFYoskLRkIHQgUGE1FVFXlVAERcVRVVFFBLAfWEFlZcRT9eAlYCVxdVSkFVFVxSRxlBWQFHUBJfVF1bRxkCD1IZGQ==",
      "prueba": "p07",
      "documentos": [
        "d13",
        "d15",
        "d16"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:fVwFX1lTElJcU1361UZSDxcAFxEJVqGKEkNXUBBZVUdEQkdURhQdEVQHUl5XCRIBCkJBUQlKAEMYGBRRWVZOFRJcCFZSU1ZQE1UUVQcVF1IAW1ZVShQbEABDXlBeWkcUB0NUQ0FbRFRXQlpWFkNXCxZYoooIFEFUVw9QUBBfVRlRQg1SUVMSXVwUW0Cl1RcXWBIHF0ZcA0MVAhNZURVXUQpXGxFmXURFTBRZF1dfVQpFQBRcRk4EQhgCW1sQVlgZQ0UNXUFdHhFdWxRfEwMXAFgPQhYTR0JdAA1cRh4=",
      "prueba": "p08",
      "documentos": [
        "d17",
        "d16"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:d1xEQVBE8ZhAFFBcCkZREVYGDwAIQA0QKDUfFVxQ95kAWRVSWlpEVFVCV1VTUFcBBEMIVkZZDRBKBEL2mUAYGVZVB/CYUwgR8Z9xVUYVUhtDDk5FA1pCVQ1DZ0fzlFpHDUJaHRVWBVtWQlpWFkdXFwZUE1hGVKKRSAhQVPKIGhlzXAjwmBJXQkdVVlhGA1tDYShMRSdYQlSizlIVQ1xTQQ1TW0VQFAhdXAX1hBZXV0UpXgZLCfvQXxgUWhVD8J1JRlkJXBVDR1QTWlVdDwMXC1YDocgHFBJVBQpXWhwVTRQIVxV2QFUWVVADFnRfRVsJRUUTWAxXQURKBEcVREFbQ11DRFdQEl9QQ1UOGQIDFw9WQRYMA1oGUUEHVhV/WVVYCFcZEVFRCBFaDVVfUxNWAAkRElYESgheV0FNFVRWWBlTQgdbXERdEVdRWBkFB1mghA8LAgka",
      "prueba": "p09",
      "documentos": [
        "d13",
        "d18",
        "d19",
        "d20"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dlVEX1RBEkVBUUcZFg9SGVYSTkUVWw5fQRZdVBBBUVqnm1QRWVVEV1YQW1YWVkoEBkUAGQJdDRBQFFFWXx0UdVNDRFxBQFNCE1BbSkYDRQJZQQ4ERlYXVQ8CE1RcFUZREvWcQg8UEV9YQlNZFlZBFQBbDhVGWw5AUQBQVBBDW0sSVQgTR1dE8ppHFF0DRlYPUA5ZRQlAEFFBAFJXVU9VFAVUVFtaGkR9WEJHQlMTVwsGUAtYBFlBUUgARlBTWveKElUKE1BeElJcV1xcRgJSQ2UABAQDWEJjABFeXFVbQFtK",
      "prueba": "p10",
      "documentos": [
        "d20"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:d1xEQPabQkVaWVsZFQNbD1hBDApGWA5VFwITUFwVWF0GRFoRUVFEYlgQW15TXUYKXxEUVwcYE19LABRRVRNbWlpfRENAXEZQQBRXVghGQg0XDggKRlEMEAQPE1ZVW0BGCxoVSBVaDV9eF1hWFl9XERdQTxknVAZFUQRaFV3wlUoSQwVR9p9TEVdRFFwVElJDWgASBEoUGxAQFlZH85hVFBVDUBFZW0RCTBJf9J9BUwgKQk8=",
      "prueba": "p11",
      "documentos": [
        "d21",
        "d19"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:flkGQVBA8ZxSFFdWCEZHFlIPFgBKFAFREgITUVUVWFsXFlBCVkEAXkpCVVhYE2YXppAPSg9MDgoYDVVGEFdbShJCAVBBU0ERQFEUWhQTTQJZQQcLRlgDEAICX1lVFVBRRGVUXxVzDV/6y0UbFkBdBxdUQVUHGCJFXRdVFVRWFHHxmRZQQF5XQh0UdVVGAFgNUw5CAQMUDlESQ1H2g0NRUAVFGRFAWgURSwdcVhZQXQtFRA8ZBVkPVFkFWxVUVhRKV1kXE1lXRkNSRxo=",
      "prueba": "p12",
      "documentos": [
        "d18",
        "d22"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:flEXE1lXRkNSRxRdA0ZbDERBEQAPR0JDBA9fWkMVUFFEZVRDWF0BX00NGhdSVl5FLBEAVUZuKBwYBVFZVUdGXFNeRH98cGB+YBoUfQMSRaCWEkIBAxQOUUERVl9RGRRXEVdHVFtABRFAQlJYRRNRBA9QEhkFVw8QVAAUQ1VBUFhWVRZSFVBbU19dW00DBVZPFxQMRQ9aFFUPF1JHWVoURAVEVBF5QQfylAMWThZDUxcEETVWCl0FX9rhkhVJE0FXElEWUFQSVlQTWlteBwoXEkIEQgsJFAdDFaCSFVVbFFgFFllYRkAFHw==",
      "prueba": "p13",
      "documentos": [
        "d21",
        "d18",
        "d23"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:f1kIE0ZXW0JQXVFXEglEQ1QIDAYTUQxEAENKFV5AUUIBGhVCXFEQVBVCQkVTWlwRBBEYGQVNAERKDg4VREFRShJTDVVHU0ERQkFRGR8HFxBWA6HIB1kNQ09DdlsQUFgUBURWUBkUCFAZAVdFQlISAQARIEwUXQ1ZV0HWtaRfWxlDRQETWPGTQhNFQVAVCRcNWEEHFhL3wxAEDRNZUUYUVwVcVELXtPARQEJDWRZaXAYQXwBbCl1BQU0EFFlVE0RYVfPXE0BcEldcRlVKEgNFDBcRDRdGUxdREwdSRxBUWFMLGhVSWlpERFcDFkVZQFNFAVRBVgVQDhBIFFpBUUAUQBJFChNaWF0RVloUVQdGUBZWEwYESBQuUUEOWkZdVBRGC0VUEVFRCBFKoZ9HQlpfCkVCBFUKV08=",
      "prueba": "p17",
      "documentos": [
        "d26",
        "d27",
        "d21"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:YFECUlBeEmJSRllQAwhDDBcHDRcc99EQDQITWVlXRlEW9ZhQFVgFEVcNVV9TE1YACREEVxJRBEJKDhgVQ1pTTFvz1xNUEkFEE0dbWxQPWQIbQQwKFRQNSaLQE1FVRlBRRFpUEUFbFkNcQk8XRVYSCQlUF/rVGARcGBBBXF5HWxlCURZSFURXX1f3nUsVA1sMFxUNAQkUAxAuD1JZXFQYFBVDUBFMVURdXEJeVlTwnwRFVQhaDldBQU0EFEbznhoZd1xEUFRc8YJdXVNWRgNEF1YDA0UDWkJVDUNQWkJaDxQrWlRdWVVIEVwMFltXE0IAC0II+tVWTxBpFFFRURNRVRJDp5pFRltcXBRHXAoKWE8XEBcARloNEAQQE1FVFVFHEFMVXFREBR8ZNllTV0XxyAQf",
      "prueba": "p14",
      "documentos": [
        "d16",
        "d20",
        "d25",
        "d19"
      ]
    }
  ],
  "interrogatorio": {
    "desbloqueadoPor": "p06"
  },
  "balance": {
    "trasPrueba": "p06",
    "propuestas": [
      {
        "quien": "chiqui",
        "sospechoso": "rafael",
        "texto": "dc1:a19EXlxAU0PwmVUZBwoXEFgDEAwIW0wQIENfVEMVR10BQlARWFEKXkpCUl5TSRIEFVATWqWLQVVWQW5aU1xQVkRVFhNAXBJSXFdcXEYFWA0XDAMRFPfPUxQPUhVUUBR5BVJHWFEUHRFYQlpWRRNBDABFBBkfGAJFWRNAWhBKVRlcX0RWRkZTU1IPFPrPChcJQhMDRRdBBxAEEEdARloUUQoWeFBRRg1VGQpXREJSEgkEQkFKA1ESEEFBRUBVE0JQXF9E8Z5TElJWWlVLpN0ZQ3MEQgkJR0JEEwZAFVVGFFEIFvaLW10HXhkTQ1IWR1sAC1RBWglbCVUYGBRDWUVRGVNcCPCYHBJoE1UUSBMPUg0XDQdFF0ELRAANE0BeVBRcAURQX1ZdBRFVBxZSWEdABAsREUsPSwBDAkFQUFJWFF1bXgFBWhJXXxNQW0pGBVYQXg8NFkZNQlwAQ0dcVVtQVURHQFQVVxZU+s9XF0VGSwRFVBIZAl1BfE0C95hRHQ=="
      },
      {
        "quien": "gismera",
        "sospechoso": "dimas",
        "texto": "dc1:a19EXlxAU0PwmVUZB0Z4D1YNDgRIFC5cBBVSFURHUV0KQlQRVPfVXkpCUlJCQfHEFhEFXEb6ylxZQVtBQlIUW1tSCFpaRldSUvaPGR9GVhNWEwcGAxQHXkE3XFlVUVsUDkNGRVoUAV0ZCENSQFZBRQBfQUgTXUFVVEFZVEBSFFxfQA1WT1MSUBNZW08DFEQGGUEuBEZEA0QTDF1UEFlbFBJfWhFGQQZYS0JXF0VGEgYQUBNNCRgAEFQARxVDVl1KEl0BXVpBElJGVUZNCUZOQ0QEQgMTUUJRQQ5aRlEPFFABRVFUFVEKRVYMVVJFE1wKRV0OGQ5ZQUZREkBaEF1VXVtVShNsEvGYXxRZUBULWENbDkIBD14NCkERXFdRRxRRFxZRVBVVAlhaC1lZV1ddFksRJFVGSRRVGAJbWEBBVRlcX0RdUFFXQlpAVRkVB1sKRUEGAEZYAxARBl1GWfaHWl8WWVQVVgVCTQMWVFldEhUEVgBLRllBQU0IUVsQQFVVVVFK"
      }
    ],
    "sinDescartar": [
      {
        "sospechoso": "fulgencio",
        "texto": "dc1:cVkKUEBXXEVSFFX61wlEQ1MEQgQLXQVfQQdWFXFARlEIX1oLFUcFU/rPVxdSVl5FCFARWEoYElFaBBRW84BZVhJVF1BaXFbynlUUVQcVFwBYEgMWRk1CUxMGVhVBQFEUEERQQhVQARFcEVlEFlDx1gFYAlwVGBJfVkFQUBBfVRlRURBWUUBTXQgUREsJC1IXXqLRRQhbQlEYFldUQltbR0RPFVBAWkRQSqGbF1hcQUUBWAtWRkgOQhgF94ZeV1EZV10UVk9TQB8TcF1aA0ZGFlJBEhcDRwtUCKCAFVxURxQS9ZhCRVEWUEpYFlFXX0YERUEOVwNKQVEYDVtGEEdRSkZZA1xGEldfE1JdVQdGVg1DBBFFAlFCVAARX1oQRVtGRFJQQlZVFkVYBlkZ"
      }
    ],
    "descartados": [],
    "cierre": [
      {
        "quien": "gismera",
        "texto": "dc1:f1VEVUBbElATe1hYCgpWQ0cOEBQTUUJVEwITUFwV944KX1ZeFUURVBkFV1lXUVNFBl4PGQpZQVJRA1hcX0dRWlMcREoVXF0RWlZVGQIDW0NDDgYKRlAHQwICXlxeVFBVXhZdUFf3yVAZA1VSRkdTAQoRAlYLSBPzmRNHUFxSFFgSQRFaUFwSX1wUWFhGElIN9MwDS0ZkB0IOQ1ZZEFRBQAtU9otGFABUGQ5XRBZHQAAWERgZC10FWVlBTRVFXVUZUUINUlFTElJcWhRbEwNZQ1iizwEJFA5fQQdWX1FHW1pEU1sRWVVEQVwMRV71gFxFEV4FWEZUABBMAEZRVR0="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YVkKE0FHEn5fVVhVB0ZZDBcJAwcU989RDAxAFV1cRlUAWRVCQBQUWFwYVxdVXFxFCUQRWEoYGBBdE1UVVUBVGVFfFFpUEldfE1FHSQMMWENbAEIUE1FCVAQA8JhRFUVBARZUXVJBDVRXQkJSWPCfBEVUDRkJSghXUQ9VWRBDVUtTEAdcRVtTQ19bGhk/RlYPFwIDC6WHDFkGDBNZXxVQUQ5XWF5GFBdYV0JSUkVQUxcRUBMZDlkSRFlBRUBVE0RMQVkJXEYSUxFfW0cZEgNEF14GDRZGUQwQBwpfVAoVUFEIFlZeR1tEX1ZCRVIWQFMJAB8="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZkVEUFpRWlQTUFEZKwdTEV4FQhYJWA0QBBFSFUVbFFcLVV1UFVwFQk0DFkZDVhIJBBERUANCABBJFFEVVV1XWFhRBlIVU0JQQVFXUKXVFwdSDxYXCRpCZQ9DX1RUR/eHChZWXlsUFENQEVcXTxNHC0VSDlQWSgBUVxMUVl9dFElTUw1WW1FbUAkUXFgFpZoCWUEEBApAAxANAkAVVFpHFBRXR1AVQgFDVQ0Y"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YFECUlBeEmJSRllQAwhDDBcHDRcc99EQDQITWVlXRlEW9ZhQGRQKXkpCWU71gBIBAEIFXEZUABBMDkZHVRNNGUFVRF9ZV0TygBRRVUYXQgpZFQ1FFlUQUUEVVltUUEZYARZUEXpYBV1VAxZCWFISBwxTDVAJTARTWUFFQFUTWlYSVRZSFUFHSFIaFHYKB1sPVkEHFhZREFEDAhNWX1sUWAUWVlBHQAFDWEJXVV9WQBEECkFcChgCUVaih1tZVFsVElUKE1BeElJcRlsVRhRSGVYPBgpGRA1CQRBGFVFYXVMLGA=="
      }
    ]
  }
});
