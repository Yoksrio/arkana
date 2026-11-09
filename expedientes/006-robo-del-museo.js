/**
 * Expediente 006 — El robo del museo.
 * Solo datos: lo registra el motor (docs/juego.md «Cómo se escribe un caso»).
 * Las respuestas son huellas y las pistas, notas y epílogo van codificados (D5):
 * para cambiarlos, usar herramientas/huellas.html.
 */
DetectiveCodex.registrarExpediente({
  "id": "006",
  "numero": "002",
  "titulo": "El robo del museo",
  "subtitulo": "Tres minutos a oscuras y ciento cuarenta y un sospechosos",
  "categoria": [
    "crimen"
  ],
  "dificultad": 4,
  "duracion": "60–90 min",
  "portada": "img-portada",
  "elementoConductor": {
    "tipo": "objeto",
    "nombre": "El Ojo del Horizonte",
    "descripcion": "Un zafiro estrella de 62 quilates engastado en una rosa de los vientos de oro de ocho puntas. Lo prestó un coleccionista que nadie conoce."
  },
  "introduccion": "Barcelona, sábado 18 de junio de 1927. El Museo Balmes inaugura su Sala Oriental con una gala para más de un centenar de invitados. La pieza estrella es el Ojo del Horizonte, un zafiro prestado por un coleccionista anónimo.\n\nA las 23:40 se va la luz. A las 23:43 vuelve, y la vitrina está vacía y cerrada con llave. La policía cierra las puertas, registra a todo el mundo y no encuentra nada. Un fotógrafo de prensa y un operador de noticiario no dejaron de trabajar en toda la noche. A la mañana siguiente, el director, que ha leído en los periódicos lo de la piedra de Asteria, llama a la Agencia Arkana.",
  "historia": "El Museo Balmes, en el Paseo de Gracia, guarda la colección de artes suntuarias de la familia del mismo nombre. Su director, Enric Balmes, consiguió el préstamo del Ojo del Horizonte gracias a una carta llegada de una notaría de Logroño: el dueño quería que la joya se expusiera en Barcelona durante el verano, sin cobrar nada y sin dar su nombre.\n\nLa vitrina tiene dos llaves: la del director y la de la conservadora de joyas, Mercè Puig. Esa noche estaban también el joyero que preparó el engaste, una coleccionista alemana que quiso comprar la joya, el electricista del museo y Max Ferrán, fotógrafo de La Vanguardia.",
  "objetivo": "Averiguar cuándo desapareció de verdad el Ojo del Horizonte, quién lo robó, quién le ayudó y dónde está la joya.",
  "personajes": [
    {
      "nombre": "Enric Balmes i Coll",
      "rol": "Director del museo. Os ha llamado él.",
      "imagen": "img-balmes"
    }
  ],
  "cronologia": [
    {
      "fecha": "Enero de 1927",
      "texto": "Llega al museo el Ojo del Horizonte, prestado a través de la notaría Varga de Logroño."
    },
    {
      "fecha": "18 de mayo de 1927",
      "texto": "Alguien recoge en la joyería Roig una segunda réplica del Ojo.",
      "desbloqueadoPor": "p07"
    },
    {
      "fecha": "18 de junio de 1927, 22:00",
      "texto": "Empieza la gala de la Sala Oriental."
    },
    {
      "fecha": "18 de junio de 1927, 22:50",
      "texto": "La conservadora abre la vitrina para enseñar la joya al gobernador civil.",
      "desbloqueadoPor": "p02"
    },
    {
      "fecha": "18 de junio de 1927, 23:40",
      "texto": "Se va la luz en las salas de la gala durante tres minutos."
    },
    {
      "fecha": "18 de junio de 1927, 23:43",
      "texto": "Vuelve la luz: la vitrina está vacía y cerrada con llave."
    },
    {
      "fecha": "18 de junio de 1927, 23:45",
      "texto": "La policía cierra las puertas y registra a los 141 presentes."
    }
  ],
  "ubicaciones": [
    {
      "id": "u-museo",
      "nombre": "Museo Balmes",
      "descripcion": "Palacete del Paseo de Gracia convertido en museo en 1911.",
      "imagen": "img-museo"
    },
    {
      "id": "u-oriental",
      "nombre": "Sala Oriental",
      "descripcion": "Sala nueva, tapizada de seda, con la vitrina del Ojo en el centro y un gran espejo frente al reloj.",
      "imagen": "img-oriental",
      "desbloqueadoPor": "p02"
    },
    {
      "id": "u-salon",
      "nombre": "Salón de baile",
      "descripcion": "Donde tocaba la orquesta y hablaba el director. Una galería lo rodea por arriba.",
      "imagen": "img-salon",
      "desbloqueadoPor": "p03"
    },
    {
      "id": "u-patio",
      "nombre": "Patio de la fuente",
      "descripcion": "Patio cubierto con una fuente de piedra y plantas de invernadero.",
      "imagen": "img-patio",
      "desbloqueadoPor": "p09"
    }
  ],
  "imagenes": [
    {
      "id": "img-portada",
      "archivo": "portada.jpg",
      "prompt": "Cinematic 1927 illustration of an elegant museum gala in Barcelona at the moment the lights go out, guests in evening dress lit only by a camera flash, an empty glass display case in the centre, art deco details, aged sepia and gold tones, engraving style, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "El Ojo del Horizonte"
      }
    },
    {
      "id": "img-museo",
      "archivo": "museo.jpg",
      "prompt": "1927 photograph of an elegant modernista palace converted into a museum on Passeig de Gràcia in Barcelona, ornate facade, stone lions at the entrance steps, evening street lamps, sepia, film grain, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Museo Balmes"
      }
    },
    {
      "id": "img-oriental",
      "archivo": "oriental.jpg",
      "prompt": "1927 photograph of a museum room decorated in oriental style, silk-covered walls, a single glass display case in the centre on a pedestal, a large gilt mirror facing a wall clock, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Sala Oriental"
      }
    },
    {
      "id": "img-salon",
      "archivo": "salon.jpg",
      "prompt": "1927 photograph of a grand ballroom during a gala, chandeliers, a small orchestra on a stage, a gallery running around the upper floor, guests in evening dress, sepia, film grain, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Salón de baile"
      }
    },
    {
      "id": "img-patio",
      "archivo": "patio.jpg",
      "prompt": "1927 photograph of a covered courtyard in a Barcelona palace, a stone fountain with a lion head spout, palms and ferns, iron and glass roof, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Patio de la fuente"
      }
    },
    {
      "id": "img-balmes",
      "archivo": "balmes.jpg",
      "prompt": "1920s portrait photograph of a Catalan museum director in his sixties, white tie and tails, silver hair, round spectacles, worried dignified expression, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "E. Balmes"
      }
    },
    {
      "id": "img-merce",
      "archivo": "merce.jpg",
      "prompt": "1920s portrait photograph of a Catalan woman museum curator in her early thirties, elegant dark evening dress, white gloves, short wavy hair, calm composed expression, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "M. Puig"
      }
    },
    {
      "id": "img-jordi",
      "archivo": "jordi.jpg",
      "prompt": "1920s portrait photograph of a young Spanish electrician in his twenties, work overalls, cap, tools in his breast pocket, nervous smile, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "J. Vall"
      }
    },
    {
      "id": "img-kessel",
      "archivo": "kessel.jpg",
      "prompt": "1920s studio portrait photograph of a German baroness in her fifties, long black evening gloves, pearls, feathered headband, cold proud expression, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "I. von Kessel"
      }
    },
    {
      "id": "img-ferran",
      "archivo": "ferran.jpg",
      "prompt": "1920s portrait photograph of a Spanish press photographer in his thirties, dinner jacket slightly crumpled, holding a flash lamp, cheeky grin, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "M. Ferrán"
      }
    },
    {
      "id": "img-roig",
      "archivo": "roig.jpg",
      "prompt": "1920s portrait photograph of an elderly Catalan jeweller in his late sixties, jeweller's loupe on a chain, waistcoat, white beard, meticulous expression, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "D. Roig"
      }
    },
    {
      "id": "img-broche-reverso",
      "archivo": "broche-reverso.jpg",
      "prompt": "1920s close-up photograph of the back of an antique oval gold brooch lying on dark velvet, seen perfectly straight from above, centered and filling most of the frame. The pin and clasp run across the top edge. The flat oval back plate is smooth, slightly worn and completely blank: no engravings, no letters, no symbols, no hallmarks. Soft even light, low contrast, no strong reflections. Sepia tones, film grain, slight vignette, no text, no watermark",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Reverso del broche"
      }
    }
  ],
  "visuales": {
    "placa-espejo": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Placa 14: la vitrina y el reloj reflejado en el espejo\"><defs><filter id=\"e6-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"e6-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"e6-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><linearGradient id=\"e6-pared\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-madera-clara\"/><stop offset=\"1\" class=\"ilst-madera\"/></linearGradient><linearGradient id=\"e6-espejo\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" class=\"ilst-cielo-foto\"/><stop offset=\"1\" class=\"ilst-piedra-sombra\"/></linearGradient></defs><rect width=\"760\" height=\"560\" fill=\"url(#e6-pared)\"/><rect x=\"410\" y=\"40\" width=\"300\" height=\"360\" rx=\"8\" class=\"ilf-oro-oscuro\"/><rect x=\"424\" y=\"54\" width=\"272\" height=\"332\" fill=\"url(#e6-espejo)\"/><g transform=\"translate(560 180) scale(-1 1)\"><circle r=\"104\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"5\"/><circle r=\"96\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><text x=\"0.0\" y=\"-75.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">XII</text><text x=\"40.0\" y=\"-64.3\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">I</text><text x=\"69.3\" y=\"-35.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">II</text><text x=\"80.0\" y=\"5.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">III</text><text x=\"69.3\" y=\"45.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">IIII</text><text x=\"40.0\" y=\"74.3\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">V</text><text x=\"0.0\" y=\"85.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">VI</text><text x=\"-40.0\" y=\"74.3\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">VII</text><text x=\"-69.3\" y=\"45.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">VIII</text><text x=\"-80.0\" y=\"5.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">IX</text><text x=\"-69.3\" y=\"-35.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">X</text><text x=\"-40.0\" y=\"-64.3\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">XI</text></g><g transform=\"translate(560 180)\"><line y2=\"-48\" transform=\"rotate(-348)\" class=\"ils-tinta\" stroke-width=\"6\" stroke-linecap=\"round\"/><line y2=\"-82\" transform=\"rotate(-216)\" class=\"ils-tinta\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle r=\"4\" class=\"ilf-tinta\"/></g><path d=\"M440 70 L500 380\" class=\"ils-papel-claro\" stroke-width=\"8\" opacity=\"0.12\"/><g transform=\"translate(70 170)\"><rect x=\"33\" y=\"209.00000000000003\" width=\"264\" height=\"171\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"26.400000000000002\" y=\"19\" width=\"277.2\" height=\"197.6\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"26.400000000000002\" y=\"19\" width=\"277.2\" height=\"197.6\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M46.2 38 L99 190\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"165\" cy=\"182.4\" rx=\"79.2\" ry=\"22.8\" class=\"ilf-rojo\"/><g transform=\"translate(165 125.4)\"><g transform=\"rotate(0)\"><path d=\"M0 -56.1 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -56.1 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -34.782000000000004 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -34.782000000000004 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -56.1 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -56.1 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -34.782000000000004 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -34.782000000000004 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -56.1 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -56.1 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -34.782000000000004 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -34.782000000000004 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -56.1 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -56.1 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -34.782000000000004 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -34.782000000000004 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><circle r=\"20.196\" class=\"ilf-oro-claro ils-oro-oscuro\" stroke-width=\"2.244\"/><circle r=\"15.708000000000002\" class=\"ilf-tinta-azul\"/><circle cx=\"-4.488\" cy=\"-5.61\" r=\"5.049\" class=\"ilf-papel-claro\" opacity=\"0.35\"/></g><rect x=\"151.8\" y=\"228\" width=\"26.400000000000002\" height=\"26.6\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><circle cx=\"250\" cy=\"290\" r=\"160\" class=\"ilf-papel-claro\" opacity=\"0.08\" filter=\"url(#e6-difuso)\"/><text class=\"il-texto-foto\" x=\"734\" y=\"540\" text-anchor=\"end\">M. Ferrán · placa 14 · Sala Oriental</text><g pointer-events=\"none\"><rect width=\"760\" height=\"560\" class=\"ilf-manila\" opacity=\"0.24\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" filter=\"url(#e6-grano)\" opacity=\"0.16\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" fill=\"url(#e6-vineta)\"/></g></svg>",
    "contactos": "<svg viewBox=\"0 0 900 640\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Hoja de contactos de Max Ferrán\"><defs><filter id=\"h6-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"h6-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"h6-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter></defs><rect width=\"900\" height=\"640\" class=\"ilf-noche\"/><text class=\"il-texto-foto\" x=\"40\" y=\"40\">M. FERRÁN · LA VANGUARDIA · GALA DEL MUSEO BALMES · 18-VI-1927 · CONTACTOS</text><g class=\"punto\" data-punto=\"c1\" transform=\"translate(170 190)\" tabindex=\"0\" role=\"button\" aria-label=\"Placa 1\"><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"ilf-papel-claro\"/><rect x=\"-120\" y=\"-110\" width=\"240\" height=\"196\" class=\"ilf-madera-clara\"/><g transform=\"translate(-95 -105)\"><rect x=\"19\" y=\"104.50000000000001\" width=\"152\" height=\"85.5\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M26.6 19 L57 95\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"95\" cy=\"91.2\" rx=\"45.6\" ry=\"11.4\" class=\"ilf-rojo\"/><g transform=\"translate(95 62.7)\"><g transform=\"rotate(0)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><circle r=\"11.628000000000002\" class=\"ilf-oro-claro ils-oro-oscuro\" stroke-width=\"1.2920000000000003\"/><circle r=\"9.044000000000002\" class=\"ilf-tinta-azul\"/><circle cx=\"-2.5840000000000005\" cy=\"-3.2300000000000004\" r=\"2.9070000000000005\" class=\"ilf-papel-claro\" opacity=\"0.35\"/><line transform=\"rotate(0)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><line transform=\"rotate(60)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><line transform=\"rotate(120)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><circle r=\"1.6150000000000002\" class=\"ilf-papel-claro\"/></g><rect x=\"87.4\" y=\"114\" width=\"15.200000000000001\" height=\"13.3\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><text class=\"il-texto il-texto-peq\" x=\"0\" y=\"106\" text-anchor=\"middle\">placa 1</text><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"c2\" transform=\"translate(450 190)\" tabindex=\"0\" role=\"button\" aria-label=\"Placa 4\"><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"ilf-papel-claro\"/><rect x=\"-120\" y=\"-110\" width=\"240\" height=\"196\" class=\"ilf-madera-clara\"/><g transform=\"translate(-95 -105)\"><rect x=\"19\" y=\"104.50000000000001\" width=\"152\" height=\"85.5\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M26.6 19 L57 95\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"95\" cy=\"91.2\" rx=\"45.6\" ry=\"11.4\" class=\"ilf-rojo\"/><g transform=\"translate(95 62.7)\"><g transform=\"rotate(0)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><circle r=\"11.628000000000002\" class=\"ilf-oro-claro ils-oro-oscuro\" stroke-width=\"1.2920000000000003\"/><circle r=\"9.044000000000002\" class=\"ilf-tinta-azul\"/><circle cx=\"-2.5840000000000005\" cy=\"-3.2300000000000004\" r=\"2.9070000000000005\" class=\"ilf-papel-claro\" opacity=\"0.35\"/><line transform=\"rotate(0)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><line transform=\"rotate(60)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><line transform=\"rotate(120)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><circle r=\"1.6150000000000002\" class=\"ilf-papel-claro\"/></g><rect x=\"87.4\" y=\"114\" width=\"15.200000000000001\" height=\"13.3\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><text class=\"il-texto il-texto-peq\" x=\"0\" y=\"106\" text-anchor=\"middle\">placa 4</text><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"c3\" transform=\"translate(730 190)\" tabindex=\"0\" role=\"button\" aria-label=\"Placa 7\"><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"ilf-papel-claro\"/><rect x=\"-120\" y=\"-110\" width=\"240\" height=\"196\" class=\"ilf-madera-clara\"/><g transform=\"translate(-95 -105)\"><rect x=\"19\" y=\"104.50000000000001\" width=\"152\" height=\"85.5\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M26.6 19 L57 95\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"95\" cy=\"91.2\" rx=\"45.6\" ry=\"11.4\" class=\"ilf-rojo\"/><g transform=\"translate(95 62.7)\"><g transform=\"rotate(0)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><circle r=\"11.628000000000002\" class=\"ilf-oro-claro ils-oro-oscuro\" stroke-width=\"1.2920000000000003\"/><circle r=\"9.044000000000002\" class=\"ilf-tinta-azul\"/><circle cx=\"-2.5840000000000005\" cy=\"-3.2300000000000004\" r=\"2.9070000000000005\" class=\"ilf-papel-claro\" opacity=\"0.35\"/><line transform=\"rotate(0)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><line transform=\"rotate(60)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><line transform=\"rotate(120)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><circle r=\"1.6150000000000002\" class=\"ilf-papel-claro\"/></g><rect x=\"87.4\" y=\"114\" width=\"15.200000000000001\" height=\"13.3\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><path d=\"M-79 -95 L79 -95 L60 -130 L-60 -130 Z\" class=\"ilf-vidrio\" opacity=\"0.4\"/><path d=\"M-79 -95 L-60 -110 L60 -110 L79 -95\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"0\" y=\"106\" text-anchor=\"middle\">placa 7</text><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"c4\" transform=\"translate(170 470)\" tabindex=\"0\" role=\"button\" aria-label=\"Placa 8\"><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"ilf-papel-claro\"/><rect x=\"-120\" y=\"-110\" width=\"240\" height=\"196\" class=\"ilf-madera-clara\"/><g transform=\"translate(-95 -105)\"><rect x=\"19\" y=\"104.50000000000001\" width=\"152\" height=\"85.5\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M26.6 19 L57 95\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"95\" cy=\"91.2\" rx=\"45.6\" ry=\"11.4\" class=\"ilf-rojo\"/><g transform=\"translate(95 62.7)\"><g transform=\"rotate(0)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><circle r=\"11.628000000000002\" class=\"ilf-oro-claro ils-oro-oscuro\" stroke-width=\"1.2920000000000003\"/><circle r=\"9.044000000000002\" class=\"ilf-tinta-azul\"/><circle cx=\"-2.5840000000000005\" cy=\"-3.2300000000000004\" r=\"2.9070000000000005\" class=\"ilf-papel-claro\" opacity=\"0.35\"/><line transform=\"rotate(0)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><line transform=\"rotate(60)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><line transform=\"rotate(120)\" x1=\"-8.721000000000002\" y1=\"0\" x2=\"8.721000000000002\" y2=\"0\" class=\"ils-papel-claro\" stroke-width=\"1.4\" opacity=\"0.95\"/><circle r=\"1.6150000000000002\" class=\"ilf-papel-claro\"/></g><rect x=\"87.4\" y=\"114\" width=\"15.200000000000001\" height=\"13.3\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><path d=\"M20 -50 q18 -8 40 -2 l8 16 q-22 6 -44 2 Z\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"1\"/><text class=\"il-texto il-texto-peq\" x=\"0\" y=\"106\" text-anchor=\"middle\">placa 8</text><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"c5\" transform=\"translate(450 470)\" tabindex=\"0\" role=\"button\" aria-label=\"Placa 9\"><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"ilf-papel-claro\"/><rect x=\"-120\" y=\"-110\" width=\"240\" height=\"196\" class=\"ilf-madera-clara\"/><g transform=\"translate(-95 -105)\"><rect x=\"19\" y=\"104.50000000000001\" width=\"152\" height=\"85.5\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M26.6 19 L57 95\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"95\" cy=\"91.2\" rx=\"45.6\" ry=\"11.4\" class=\"ilf-rojo\"/><g transform=\"translate(95 62.7)\"><g transform=\"rotate(0)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><circle r=\"11.628000000000002\" class=\"ilf-oro-claro ils-oro-oscuro\" stroke-width=\"1.2920000000000003\"/><circle r=\"9.044000000000002\" class=\"ilf-tinta-azul\"/><circle cx=\"-2.5840000000000005\" cy=\"-3.2300000000000004\" r=\"2.9070000000000005\" class=\"ilf-papel-claro\" opacity=\"0.35\"/></g><rect x=\"87.4\" y=\"114\" width=\"15.200000000000001\" height=\"13.3\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><text class=\"il-texto il-texto-peq\" x=\"0\" y=\"106\" text-anchor=\"middle\">placa 9</text><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"c6\" transform=\"translate(730 470)\" tabindex=\"0\" role=\"button\" aria-label=\"Placa 11\"><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"ilf-papel-claro\"/><rect x=\"-120\" y=\"-110\" width=\"240\" height=\"196\" class=\"ilf-madera-clara\"/><g transform=\"translate(-95 -105)\"><rect x=\"19\" y=\"104.50000000000001\" width=\"152\" height=\"85.5\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"15.200000000000001\" y=\"9.5\" width=\"159.6\" height=\"98.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M26.6 19 L57 95\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"95\" cy=\"91.2\" rx=\"45.6\" ry=\"11.4\" class=\"ilf-rojo\"/><g transform=\"translate(95 62.7)\"><g transform=\"rotate(0)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -32.300000000000004 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -32.300000000000004 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -20.026000000000003 L5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro\"/><path d=\"M0 -20.026000000000003 L-5.168000000000001 -9.690000000000001 L0 -9.690000000000001 Z\" class=\"ilf-oro-oscuro\"/></g><circle r=\"11.628000000000002\" class=\"ilf-oro-claro ils-oro-oscuro\" stroke-width=\"1.2920000000000003\"/><circle r=\"9.044000000000002\" class=\"ilf-tinta-azul\"/><circle cx=\"-2.5840000000000005\" cy=\"-3.2300000000000004\" r=\"2.9070000000000005\" class=\"ilf-papel-claro\" opacity=\"0.35\"/></g><rect x=\"87.4\" y=\"114\" width=\"15.200000000000001\" height=\"13.3\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><text class=\"il-texto il-texto-peq\" x=\"0\" y=\"106\" text-anchor=\"middle\">placa 11</text><rect x=\"-130\" y=\"-120\" width=\"260\" height=\"236\" class=\"punto-zona\"/></g><g pointer-events=\"none\"><rect width=\"900\" height=\"640\" class=\"ilf-manila\" opacity=\"0.14\" style=\"mix-blend-mode:multiply\"/><rect width=\"900\" height=\"640\" filter=\"url(#h6-grano)\" opacity=\"0.14\" style=\"mix-blend-mode:multiply\"/><rect width=\"900\" height=\"640\" fill=\"url(#h6-vineta)\"/></g></svg>",
    "fotogramas": "<svg viewBox=\"0 0 960 420\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fotogramas del noticiario al volver la luz\"><defs><filter id=\"f6-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"f6-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"f6-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter></defs><rect width=\"960\" height=\"420\" class=\"ilf-noche\"/><rect x=\"20\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"20\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"54\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"54\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"88\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"88\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"122\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"122\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"156\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"156\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"190\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"190\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"224\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"224\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"258\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"258\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"292\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"292\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"326\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"326\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"360\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"360\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"394\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"394\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"428\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"428\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"462\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"462\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"496\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"496\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"530\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"530\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"564\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"564\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"598\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"598\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"632\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"632\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"666\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"666\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"700\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"700\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"734\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"734\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"768\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"768\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"802\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"802\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"836\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"836\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"870\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"870\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"904\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"904\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"938\" y=\"22\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><rect x=\"938\" y=\"384\" width=\"18\" height=\"14\" rx=\"3\" class=\"ilf-papel-oscuro\" opacity=\"0.6\"/><g class=\"punto\" data-punto=\"g1\" transform=\"translate(96 204)\" tabindex=\"0\" role=\"button\" aria-label=\"Fotograma 1\"><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-cielo-foto\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-madera-clara\" opacity=\"0.5\"/><g transform=\"translate(-56 -70)\"><rect x=\"11.200000000000001\" y=\"77\" width=\"89.60000000000001\" height=\"63\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M15.680000000000001 14 L33.6 70\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"56\" cy=\"67.2\" rx=\"26.88\" ry=\"8.4\" class=\"ilf-rojo\"/><rect x=\"51.52\" y=\"84\" width=\"8.96\" height=\"9.8\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-noche\" opacity=\"0.95\"/><text class=\"il-texto-foto\" x=\"0\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">01840</text><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"g2\" transform=\"translate(250 204)\" tabindex=\"0\" role=\"button\" aria-label=\"Fotograma 2\"><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-cielo-foto\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-madera-clara\" opacity=\"0.5\"/><g transform=\"translate(-56 -70)\"><rect x=\"11.200000000000001\" y=\"77\" width=\"89.60000000000001\" height=\"63\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M15.680000000000001 14 L33.6 70\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"56\" cy=\"67.2\" rx=\"26.88\" ry=\"8.4\" class=\"ilf-rojo\"/><rect x=\"51.52\" y=\"84\" width=\"8.96\" height=\"9.8\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-noche\" opacity=\"0.6\"/><text class=\"il-texto-foto\" x=\"0\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">01846</text><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"g3\" transform=\"translate(404 204)\" tabindex=\"0\" role=\"button\" aria-label=\"Fotograma 3\"><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-cielo-foto\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-madera-clara\" opacity=\"0.5\"/><g transform=\"translate(-56 -70)\"><rect x=\"11.200000000000001\" y=\"77\" width=\"89.60000000000001\" height=\"63\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M15.680000000000001 14 L33.6 70\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"56\" cy=\"67.2\" rx=\"26.88\" ry=\"8.4\" class=\"ilf-rojo\"/><rect x=\"51.52\" y=\"84\" width=\"8.96\" height=\"9.8\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><g transform=\"translate(-2 -4) scale(1.4)\"><path d=\"M0 8 q4 -6 14 -6 l26 0 q8 0 8 6 q0 6 -8 6 l-26 0 q-10 0 -14 -6 Z\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M24 1 q5 7 0 14 M30 1 q5 7 0 14\" fill=\"none\" class=\"ils-oro\" stroke-width=\"2.4\"/><circle cx=\"35\" cy=\"3\" r=\"1.6\" class=\"ilf-rojo\"/></g><rect x=\"-1\" y=\"1\" width=\"10\" height=\"3\" class=\"ilf-oro\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-noche\" opacity=\"0.15\"/><text class=\"il-texto-foto\" x=\"0\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">01852</text><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"g4\" transform=\"translate(558 204)\" tabindex=\"0\" role=\"button\" aria-label=\"Fotograma 4\"><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-cielo-foto\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-madera-clara\" opacity=\"0.5\"/><g transform=\"translate(-56 -70)\"><rect x=\"11.200000000000001\" y=\"77\" width=\"89.60000000000001\" height=\"63\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M15.680000000000001 14 L33.6 70\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"56\" cy=\"67.2\" rx=\"26.88\" ry=\"8.4\" class=\"ilf-rojo\"/><rect x=\"51.52\" y=\"84\" width=\"8.96\" height=\"9.8\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-noche\" opacity=\"0.1\"/><text class=\"il-texto-foto\" x=\"0\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">01858</text><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"g5\" transform=\"translate(712 204)\" tabindex=\"0\" role=\"button\" aria-label=\"Fotograma 5\"><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-cielo-foto\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-madera-clara\" opacity=\"0.5\"/><g transform=\"translate(-56 -70)\"><rect x=\"11.200000000000001\" y=\"77\" width=\"89.60000000000001\" height=\"63\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M15.680000000000001 14 L33.6 70\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"56\" cy=\"67.2\" rx=\"26.88\" ry=\"8.4\" class=\"ilf-rojo\"/><rect x=\"51.52\" y=\"84\" width=\"8.96\" height=\"9.8\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><path d=\"M-70 120 q20 -80 40 -60 q10 -40 30 0 L0 120 Z\" class=\"ilf-tinta\" opacity=\"0.8\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-noche\" opacity=\"0.1\"/><text class=\"il-texto-foto\" x=\"0\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">01864</text><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"g6\" transform=\"translate(866 204)\" tabindex=\"0\" role=\"button\" aria-label=\"Fotograma 6\"><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-cielo-foto\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-madera-clara\" opacity=\"0.5\"/><g transform=\"translate(-56 -70)\"><rect x=\"11.200000000000001\" y=\"77\" width=\"89.60000000000001\" height=\"63\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"8.96\" y=\"7\" width=\"94.08\" height=\"72.8\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M15.680000000000001 14 L33.6 70\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"56\" cy=\"67.2\" rx=\"26.88\" ry=\"8.4\" class=\"ilf-rojo\"/><rect x=\"51.52\" y=\"84\" width=\"8.96\" height=\"9.8\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><path d=\"M10 120 q10 -90 30 -70 q14 -30 30 10 L70 120 Z\" class=\"ilf-tinta\" opacity=\"0.8\"/><path d=\"M0 120 q-10 -60 -40 -50 L-70 120 Z\" class=\"ilf-tinta\" opacity=\"0.7\"/><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"ilf-noche\" opacity=\"0.1\"/><text class=\"il-texto-foto\" x=\"0\" y=\"140\" text-anchor=\"middle\" font-size=\"12\">01870</text><rect x=\"-70\" y=\"-120\" width=\"140\" height=\"240\" class=\"punto-zona\"/></g><g pointer-events=\"none\"><rect width=\"960\" height=\"420\" class=\"ilf-manila\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"960\" height=\"420\" filter=\"url(#f6-grano)\" opacity=\"0.2\" style=\"mix-blend-mode:multiply\"/><rect width=\"960\" height=\"420\" fill=\"url(#f6-vineta)\"/></g></svg>",
    "vigenere": "<svg viewBox=\"0 0 762 812\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tabla de Vigenère\"><defs><radialGradient id=\"v6-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"v6-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"v6-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"v6-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#v6-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#v6-papel)\" opacity=\"0.4\"/></pattern></defs><rect width=\"762\" height=\"812\" fill=\"url(#v6-foto)\"/><ellipse cx=\"624.8399999999999\" cy=\"162.4\" rx=\"68.58\" ry=\"56.84\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#v6-difuso)\"/><ellipse cx=\"91.44\" cy=\"690.1999999999999\" rx=\"53.34\" ry=\"48.72\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#v6-difuso)\"/><text class=\"il-texto il-texto-titulo-peq\" x=\"381\" y=\"44\" text-anchor=\"middle\">Tabla de Vigenère</text><text class=\"il-texto il-texto-peq\" x=\"381\" y=\"68\" text-anchor=\"middle\" font-style=\"italic\">Fila: letra de la clave · Columna: letra del mensaje · Cruce: letra cifrada</text><text class=\"il-texto il-texto-etiqueta\" x=\"73\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">A</text><text class=\"il-texto il-texto-etiqueta\" x=\"99\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">B</text><text class=\"il-texto il-texto-etiqueta\" x=\"125\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">C</text><text class=\"il-texto il-texto-etiqueta\" x=\"151\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">D</text><text class=\"il-texto il-texto-etiqueta\" x=\"177\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">E</text><text class=\"il-texto il-texto-etiqueta\" x=\"203\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">F</text><text class=\"il-texto il-texto-etiqueta\" x=\"229\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">G</text><text class=\"il-texto il-texto-etiqueta\" x=\"255\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">H</text><text class=\"il-texto il-texto-etiqueta\" x=\"281\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">I</text><text class=\"il-texto il-texto-etiqueta\" x=\"307\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">J</text><text class=\"il-texto il-texto-etiqueta\" x=\"333\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">K</text><text class=\"il-texto il-texto-etiqueta\" x=\"359\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">L</text><text class=\"il-texto il-texto-etiqueta\" x=\"385\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">M</text><text class=\"il-texto il-texto-etiqueta\" x=\"411\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">N</text><text class=\"il-texto il-texto-etiqueta\" x=\"437\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">O</text><text class=\"il-texto il-texto-etiqueta\" x=\"463\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">P</text><text class=\"il-texto il-texto-etiqueta\" x=\"489\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">Q</text><text class=\"il-texto il-texto-etiqueta\" x=\"515\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">R</text><text class=\"il-texto il-texto-etiqueta\" x=\"541\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">S</text><text class=\"il-texto il-texto-etiqueta\" x=\"567\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">T</text><text class=\"il-texto il-texto-etiqueta\" x=\"593\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">U</text><text class=\"il-texto il-texto-etiqueta\" x=\"619\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">V</text><text class=\"il-texto il-texto-etiqueta\" x=\"645\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">W</text><text class=\"il-texto il-texto-etiqueta\" x=\"671\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">X</text><text class=\"il-texto il-texto-etiqueta\" x=\"697\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">Y</text><text class=\"il-texto il-texto-etiqueta\" x=\"723\" y=\"103.5\" text-anchor=\"middle\" font-size=\"14\">Z</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"129.5\" text-anchor=\"middle\" font-size=\"14\">A</text><rect x=\"60\" y=\"110\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"99\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"125\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"151\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"177\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"203\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"229\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"255\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"281\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"307\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"333\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"359\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"385\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"411\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"437\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"463\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"489\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"515\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"541\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"567\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"593\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"619\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"645\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"671\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"697\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"723\" y=\"129.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"155.5\" text-anchor=\"middle\" font-size=\"14\">B</text><text class=\"il-texto\" x=\"73\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"99\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"125\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"151\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"177\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"203\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"229\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"255\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"281\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"307\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"333\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"359\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"385\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"411\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"437\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"463\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"489\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"515\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"541\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"567\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"593\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"619\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"645\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"671\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"697\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"723\" y=\"155.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"181.5\" text-anchor=\"middle\" font-size=\"14\">C</text><rect x=\"60\" y=\"162\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"99\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"125\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"151\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"177\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"203\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"229\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"255\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"281\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"307\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"333\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"359\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"385\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"411\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"437\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"463\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"489\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"515\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"541\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"567\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"593\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"619\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"645\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"671\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"697\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"723\" y=\"181.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"207.5\" text-anchor=\"middle\" font-size=\"14\">D</text><text class=\"il-texto\" x=\"73\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"99\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"125\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"151\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"177\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"203\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"229\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"255\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"281\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"307\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"333\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"359\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"385\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"411\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"437\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"463\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"489\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"515\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"541\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"567\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"593\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"619\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"645\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"671\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"697\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"723\" y=\"207.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"233.5\" text-anchor=\"middle\" font-size=\"14\">E</text><rect x=\"60\" y=\"214\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"99\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"125\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"151\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"177\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"203\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"229\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"255\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"281\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"307\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"333\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"359\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"385\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"411\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"437\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"463\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"489\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"515\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"541\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"567\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"593\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"619\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"645\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"671\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"697\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"723\" y=\"233.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"259.5\" text-anchor=\"middle\" font-size=\"14\">F</text><text class=\"il-texto\" x=\"73\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"99\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"125\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"151\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"177\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"203\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"229\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"255\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"281\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"307\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"333\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"359\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"385\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"411\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"437\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"463\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"489\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"515\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"541\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"567\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"593\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"619\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"645\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"671\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"697\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"723\" y=\"259.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"285.5\" text-anchor=\"middle\" font-size=\"14\">G</text><rect x=\"60\" y=\"266\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"99\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"125\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"151\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"177\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"203\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"229\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"255\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"281\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"307\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"333\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"359\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"385\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"411\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"437\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"463\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"489\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"515\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"541\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"567\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"593\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"619\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"645\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"671\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"697\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"723\" y=\"285.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"311.5\" text-anchor=\"middle\" font-size=\"14\">H</text><text class=\"il-texto\" x=\"73\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"99\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"125\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"151\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"177\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"203\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"229\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"255\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"281\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"307\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"333\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"359\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"385\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"411\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"437\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"463\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"489\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"515\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"541\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"567\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"593\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"619\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"645\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"671\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"697\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"723\" y=\"311.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"337.5\" text-anchor=\"middle\" font-size=\"14\">I</text><rect x=\"60\" y=\"318\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"99\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"125\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"151\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"177\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"203\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"229\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"255\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"281\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"307\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"333\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"359\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"385\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"411\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"437\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"463\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"489\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"515\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"541\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"567\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"593\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"619\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"645\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"671\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"697\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"723\" y=\"337.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"363.5\" text-anchor=\"middle\" font-size=\"14\">J</text><text class=\"il-texto\" x=\"73\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"99\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"125\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"151\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"177\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"203\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"229\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"255\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"281\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"307\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"333\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"359\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"385\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"411\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"437\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"463\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"489\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"515\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"541\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"567\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"593\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"619\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"645\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"671\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"697\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"723\" y=\"363.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"389.5\" text-anchor=\"middle\" font-size=\"14\">K</text><rect x=\"60\" y=\"370\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"99\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"125\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"151\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"177\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"203\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"229\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"255\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"281\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"307\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"333\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"359\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"385\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"411\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"437\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"463\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"489\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"515\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"541\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"567\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"593\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"619\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"645\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"671\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"697\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"723\" y=\"389.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"415.5\" text-anchor=\"middle\" font-size=\"14\">L</text><text class=\"il-texto\" x=\"73\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"99\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"125\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"151\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"177\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"203\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"229\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"255\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"281\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"307\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"333\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"359\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"385\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"411\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"437\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"463\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"489\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"515\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"541\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"567\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"593\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"619\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"645\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"671\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"697\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"723\" y=\"415.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"441.5\" text-anchor=\"middle\" font-size=\"14\">M</text><rect x=\"60\" y=\"422\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"99\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"125\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"151\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"177\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"203\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"229\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"255\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"281\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"307\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"333\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"359\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"385\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"411\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"437\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"463\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"489\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"515\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"541\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"567\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"593\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"619\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"645\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"671\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"697\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"723\" y=\"441.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"467.5\" text-anchor=\"middle\" font-size=\"14\">N</text><text class=\"il-texto\" x=\"73\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"99\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"125\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"151\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"177\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"203\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"229\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"255\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"281\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"307\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"333\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"359\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"385\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"411\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"437\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"463\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"489\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"515\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"541\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"567\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"593\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"619\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"645\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"671\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"697\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"723\" y=\"467.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"493.5\" text-anchor=\"middle\" font-size=\"14\">O</text><rect x=\"60\" y=\"474\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"99\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"125\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"151\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"177\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"203\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"229\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"255\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"281\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"307\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"333\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"359\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"385\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"411\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"437\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"463\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"489\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"515\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"541\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"567\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"593\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"619\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"645\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"671\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"697\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"723\" y=\"493.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"519.5\" text-anchor=\"middle\" font-size=\"14\">P</text><text class=\"il-texto\" x=\"73\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"99\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"125\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"151\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"177\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"203\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"229\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"255\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"281\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"307\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"333\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"359\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"385\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"411\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"437\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"463\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"489\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"515\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"541\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"567\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"593\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"619\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"645\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"671\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"697\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"723\" y=\"519.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"545.5\" text-anchor=\"middle\" font-size=\"14\">Q</text><rect x=\"60\" y=\"526\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"99\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"125\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"151\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"177\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"203\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"229\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"255\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"281\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"307\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"333\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"359\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"385\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"411\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"437\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"463\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"489\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"515\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"541\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"567\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"593\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"619\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"645\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"671\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"697\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"723\" y=\"545.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"571.5\" text-anchor=\"middle\" font-size=\"14\">R</text><text class=\"il-texto\" x=\"73\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"99\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"125\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"151\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"177\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"203\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"229\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"255\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"281\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"307\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"333\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"359\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"385\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"411\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"437\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"463\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"489\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"515\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"541\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"567\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"593\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"619\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"645\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"671\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"697\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"723\" y=\"571.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"597.5\" text-anchor=\"middle\" font-size=\"14\">S</text><rect x=\"60\" y=\"578\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"99\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"125\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"151\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"177\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"203\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"229\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"255\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"281\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"307\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"333\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"359\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"385\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"411\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"437\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"463\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"489\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"515\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"541\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"567\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"593\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"619\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"645\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"671\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"697\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"723\" y=\"597.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"623.5\" text-anchor=\"middle\" font-size=\"14\">T</text><text class=\"il-texto\" x=\"73\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"99\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"125\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"151\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"177\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"203\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"229\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"255\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"281\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"307\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"333\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"359\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"385\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"411\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"437\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"463\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"489\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"515\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"541\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"567\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"593\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"619\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"645\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"671\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"697\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"723\" y=\"623.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"649.5\" text-anchor=\"middle\" font-size=\"14\">U</text><rect x=\"60\" y=\"630\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"99\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"125\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"151\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"177\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"203\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"229\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"255\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"281\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"307\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"333\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"359\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"385\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"411\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"437\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"463\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"489\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"515\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"541\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"567\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"593\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"619\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"645\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"671\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"697\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"723\" y=\"649.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"675.5\" text-anchor=\"middle\" font-size=\"14\">V</text><text class=\"il-texto\" x=\"73\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"99\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"125\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"151\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"177\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"203\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"229\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"255\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"281\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"307\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"333\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"359\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"385\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"411\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"437\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"463\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"489\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"515\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"541\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"567\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"593\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"619\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"645\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"671\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"697\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"723\" y=\"675.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"701.5\" text-anchor=\"middle\" font-size=\"14\">W</text><rect x=\"60\" y=\"682\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"99\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"125\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"151\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"177\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"203\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"229\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"255\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"281\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"307\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"333\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"359\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"385\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"411\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"437\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"463\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"489\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"515\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"541\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"567\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"593\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"619\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"645\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"671\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"697\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"723\" y=\"701.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"727.5\" text-anchor=\"middle\" font-size=\"14\">X</text><text class=\"il-texto\" x=\"73\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"99\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"125\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"151\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"177\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"203\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"229\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"255\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"281\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"307\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"333\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"359\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"385\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"411\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"437\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"463\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"489\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"515\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"541\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"567\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"593\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"619\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"645\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"671\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"697\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"723\" y=\"727.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"753.5\" text-anchor=\"middle\" font-size=\"14\">Y</text><rect x=\"60\" y=\"734\" width=\"676\" height=\"26\" class=\"ilf-manila\" opacity=\"0.18\"/><text class=\"il-texto\" x=\"73\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><text class=\"il-texto\" x=\"99\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"125\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"151\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"177\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"203\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"229\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"255\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"281\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"307\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"333\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"359\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"385\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"411\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"437\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"463\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"489\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"515\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"541\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"567\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"593\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"619\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"645\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"671\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"697\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"723\" y=\"753.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto il-texto-etiqueta\" x=\"47\" y=\"779.5\" text-anchor=\"middle\" font-size=\"14\">Z</text><text class=\"il-texto\" x=\"73\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">Z</text><text class=\"il-texto\" x=\"99\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">A</text><text class=\"il-texto\" x=\"125\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">B</text><text class=\"il-texto\" x=\"151\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">C</text><text class=\"il-texto\" x=\"177\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">D</text><text class=\"il-texto\" x=\"203\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">E</text><text class=\"il-texto\" x=\"229\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">F</text><text class=\"il-texto\" x=\"255\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">G</text><text class=\"il-texto\" x=\"281\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">H</text><text class=\"il-texto\" x=\"307\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">I</text><text class=\"il-texto\" x=\"333\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">J</text><text class=\"il-texto\" x=\"359\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">K</text><text class=\"il-texto\" x=\"385\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">L</text><text class=\"il-texto\" x=\"411\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">M</text><text class=\"il-texto\" x=\"437\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">N</text><text class=\"il-texto\" x=\"463\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">O</text><text class=\"il-texto\" x=\"489\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">P</text><text class=\"il-texto\" x=\"515\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">Q</text><text class=\"il-texto\" x=\"541\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">R</text><text class=\"il-texto\" x=\"567\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">S</text><text class=\"il-texto\" x=\"593\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">T</text><text class=\"il-texto\" x=\"619\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">U</text><text class=\"il-texto\" x=\"645\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">V</text><text class=\"il-texto\" x=\"671\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">W</text><text class=\"il-texto\" x=\"697\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">X</text><text class=\"il-texto\" x=\"723\" y=\"779.5\" text-anchor=\"middle\" font-size=\"13\">Y</text><line x1=\"60\" y1=\"84\" x2=\"60\" y2=\"786\" class=\"ils-tinta\" stroke-width=\"1.2\"/><line x1=\"34\" y1=\"110\" x2=\"736\" y2=\"110\" class=\"ils-tinta\" stroke-width=\"1.2\"/><rect width=\"762\" height=\"812\" filter=\"url(#v6-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"746\" height=\"796\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"736\" height=\"786\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "plano-museo": "<svg viewBox=\"0 0 900 660\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Plano de la planta baja del Museo Balmes\"><defs><radialGradient id=\"p6-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"p6-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"p6-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"p6-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#p6-papel)\"/><image href=\"assets/img/texturas/mapa.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#p6-papel)\" opacity=\"0.45\"/></pattern></defs><rect width=\"900\" height=\"660\" fill=\"url(#p6-foto)\"/><ellipse cx=\"738\" cy=\"132\" rx=\"81\" ry=\"46.2\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#p6-difuso)\"/><ellipse cx=\"108\" cy=\"561\" rx=\"63.00000000000001\" ry=\"39.6\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#p6-difuso)\"/><text class=\"il-texto il-texto-titulo-peq\" x=\"450\" y=\"44\" text-anchor=\"middle\">Museo Balmes · planta baja</text><path d=\"M110 120 L790 120 L790 600 L110 600 Z\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"6\" stroke-linejoin=\"round\"/><path d=\"M110 380 L400 380 M520 380 L790 380 M400 120 L400 300 M400 340 L400 600 M520 120 L520 380\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"6\" stroke-linejoin=\"round\"/><rect x=\"520\" y=\"380\" width=\"270\" height=\"220\" class=\"ilf-planta\" opacity=\"0.15\"/><rect x=\"400\" y=\"60\" width=\"120\" height=\"60\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><line x1=\"400\" y1=\"70\" x2=\"520\" y2=\"70\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"400\" y1=\"84\" x2=\"520\" y2=\"84\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"400\" y1=\"98\" x2=\"520\" y2=\"98\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"400\" y1=\"112\" x2=\"520\" y2=\"112\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"255\" y=\"250\" text-anchor=\"middle\">Vestíbulo</text><text class=\"il-texto il-texto-etiqueta\" x=\"655\" y=\"250\" text-anchor=\"middle\">Sala Oriental</text><text class=\"il-texto il-texto-etiqueta\" x=\"255\" y=\"490\" text-anchor=\"middle\">Escalera</text><text class=\"il-texto il-texto-etiqueta\" x=\"655\" y=\"420\" text-anchor=\"middle\">Patio</text><text class=\"il-texto il-texto-etiqueta\" x=\"460\" y=\"200\" text-anchor=\"middle\">Guardarropa</text><text class=\"il-texto il-texto-peq\" x=\"460\" y=\"56\" text-anchor=\"middle\">Paseo de Gracia</text><circle cx=\"610\" cy=\"470\" r=\"34\" fill=\"none\" class=\"ils-mar-oscuro\" stroke-width=\"3\"/><circle cx=\"610\" cy=\"470\" r=\"28\" class=\"ilf-mar\" opacity=\"0.6\"/><g class=\"punto\" data-punto=\"l1\" transform=\"translate(450 92)\" tabindex=\"0\" role=\"button\" aria-label=\"León de piedra de la escalinata\"><circle r=\"24\" class=\"punto-zona\"/><g transform=\"rotate(0)\"><path d=\"M0 -20 L11 6 L0 2 L-11 6 Z\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"9\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.2\"/><circle cy=\"-6\" r=\"2\" class=\"ilf-tinta\"/></g></g><g class=\"punto\" data-punto=\"l2\" transform=\"translate(300 330)\" tabindex=\"0\" role=\"button\" aria-label=\"León de bronce del vestíbulo\"><circle r=\"24\" class=\"punto-zona\"/><g transform=\"rotate(270)\"><path d=\"M0 -20 L11 6 L0 2 L-11 6 Z\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"9\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.2\"/><circle cy=\"-6\" r=\"2\" class=\"ilf-tinta\"/></g></g><g class=\"punto\" data-punto=\"l3\" transform=\"translate(610 470)\" tabindex=\"0\" role=\"button\" aria-label=\"León de la fuente del patio\"><circle r=\"24\" class=\"punto-zona\"/><g transform=\"rotate(135)\"><path d=\"M0 -20 L11 6 L0 2 L-11 6 Z\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"9\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.2\"/><circle cy=\"-6\" r=\"2\" class=\"ilf-tinta\"/></g></g><g class=\"punto\" data-punto=\"l4\" transform=\"translate(190 520)\" tabindex=\"0\" role=\"button\" aria-label=\"León de mármol de la escalera\"><circle r=\"24\" class=\"punto-zona\"/><g transform=\"rotate(225)\"><path d=\"M0 -20 L11 6 L0 2 L-11 6 Z\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"9\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.2\"/><circle cy=\"-6\" r=\"2\" class=\"ilf-tinta\"/></g></g><g class=\"punto\" data-punto=\"l5\" transform=\"translate(720 250)\" tabindex=\"0\" role=\"button\" aria-label=\"León de la Sala Oriental\"><circle r=\"24\" class=\"punto-zona\"/><g transform=\"rotate(90)\"><path d=\"M0 -20 L11 6 L0 2 L-11 6 Z\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"9\" class=\"ilf-oro ils-tinta\" stroke-width=\"1.2\"/><circle cy=\"-6\" r=\"2\" class=\"ilf-tinta\"/></g></g><text class=\"il-texto il-texto-peq\" x=\"110\" y=\"630\" font-style=\"italic\">Cada león está dibujado mirando hacia donde mira su cabeza (la punta).</text><g transform=\"translate(830 560)\"><circle r=\"30\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.2\"/><path d=\"M0 -36 L6 0 L0 5 L-6 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 36 L6 0 L0 -5 L-6 0 Z\" class=\"ilf-papel-oscuro ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"-42\" text-anchor=\"middle\">N</text><text class=\"il-texto il-texto-peq\" x=\"36\" y=\"5\">E</text><text class=\"il-texto il-texto-peq\" x=\"-54\" y=\"5\">O</text><text class=\"il-texto il-texto-peq\" y=\"50\" text-anchor=\"middle\">S</text></g><rect width=\"900\" height=\"660\" filter=\"url(#p6-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"884\" height=\"644\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"874\" height=\"634\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "reverso": "<svg viewBox=\"0 0 640 640\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Reverso del broche\"><defs><filter id=\"r6-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"r6-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"r6-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><radialGradient id=\"r6-oro\" cx=\"50%\" cy=\"50%\" r=\"70%\"><stop offset=\"0\" class=\"ilst-oro-claro\"/><stop offset=\"0.6\" class=\"ilst-oro\"/><stop offset=\"1\" class=\"ilst-oro-oscuro\"/></radialGradient><pattern id=\"r6-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#r6-oro)\"/><image href=\"assets/img/006/broche-reverso.jpg\" x=\"-0.4\" y=\"-0.5\" width=\"1.8\" height=\"2\" preserveAspectRatio=\"none\"/></pattern><filter id=\"r6-grabado\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feMorphology in=\"SourceAlpha\" operator=\"dilate\" radius=\"0.36\" result=\"grueso\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.879\" numOctaves=\"2\" seed=\"4\" result=\"ruido\"/><feDisplacementMap in=\"grueso\" in2=\"ruido\" scale=\"0.8\" result=\"roto\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.0628\" numOctaves=\"2\" seed=\"9\" result=\"manchas\"/><feColorMatrix in=\"manchas\" type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.6 1.12\" result=\"desgaste\"/><feComposite in=\"roto\" in2=\"desgaste\" operator=\"in\" result=\"surco\"/><feFlood class=\"ilfl-tinta\" flood-opacity=\"0.8\"/><feComposite in2=\"surco\" operator=\"in\" result=\"hueco\"/><feOffset in=\"surco\" dx=\"1.1\" dy=\"1.1\" result=\"desplazado\"/><feComposite in=\"surco\" in2=\"desplazado\" operator=\"out\" result=\"bordeSombra\"/><feFlood class=\"ilfl-noche\" flood-opacity=\"0.75\"/><feComposite in2=\"bordeSombra\" operator=\"in\" result=\"sombra\"/><feComposite in=\"desplazado\" in2=\"surco\" operator=\"out\" result=\"labio\"/><feGaussianBlur in=\"labio\" stdDeviation=\"0.4\" result=\"labioSuave\"/><feFlood class=\"ilfl-papel-claro\" flood-opacity=\"0.5\"/><feComposite in2=\"labioSuave\" operator=\"in\" result=\"luz\"/><feMerge><feMergeNode in=\"luz\"/><feMergeNode in=\"hueco\"/><feMergeNode in=\"sombra\"/></feMerge></filter></defs><rect width=\"640\" height=\"640\" class=\"ilf-noche\"/><rect x=\"40\" y=\"40\" width=\"560\" height=\"560\" class=\"ilf-madera\"/><g transform=\"translate(320 320)\"><g transform=\"rotate(0)\"><path d=\"M0 -250 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -160 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -250 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -160 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -250 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -160 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -250 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -160 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><circle r=\"92\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"3\"/><circle r=\"80\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"1\"/><g filter=\"url(#r6-grabado)\" class=\"ils-tinta\" stroke-width=\"0.5\"><text x=\"0.0\" y=\"-54.0\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOA</text><text x=\"42.4\" y=\"-36.4\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOM</text><text x=\"60.0\" y=\"6.0\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOG</text><text x=\"42.4\" y=\"48.4\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOR</text><text x=\"0.0\" y=\"66.0\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOL</text><text x=\"-42.4\" y=\"48.4\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOU</text><text x=\"-60.0\" y=\"6.0\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOI</text><text x=\"-42.4\" y=\"-36.4\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOC</text><ellipse rx=\"20\" ry=\"11\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.4\"/><circle r=\"5\" class=\"ilf-tinta\"/></g></g><text class=\"il-texto-foto\" x=\"584\" y=\"584\" text-anchor=\"end\">Fotografía del Laboratorio de la Jefatura · 21-VI-1927</text><g pointer-events=\"none\"><rect width=\"640\" height=\"640\" class=\"ilf-manila\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"640\" height=\"640\" filter=\"url(#r6-grano)\" opacity=\"0.14\" style=\"mix-blend-mode:multiply\"/><rect width=\"640\" height=\"640\" fill=\"url(#r6-vineta)\"/></g></svg>",
    "placa-once": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Placa 11: la vitrina y el reloj reflejado en el espejo\"><defs><filter id=\"e6b-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"e6b-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"e6b-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><linearGradient id=\"e6b-pared\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-madera-clara\"/><stop offset=\"1\" class=\"ilst-madera\"/></linearGradient><linearGradient id=\"e6b-espejo\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" class=\"ilst-cielo-foto\"/><stop offset=\"1\" class=\"ilst-piedra-sombra\"/></linearGradient></defs><rect width=\"760\" height=\"560\" fill=\"url(#e6b-pared)\"/><rect x=\"410\" y=\"40\" width=\"300\" height=\"360\" rx=\"8\" class=\"ilf-oro-oscuro\"/><rect x=\"424\" y=\"54\" width=\"272\" height=\"332\" fill=\"url(#e6b-espejo)\"/><g transform=\"translate(560 180) scale(-1 1)\"><circle r=\"104\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"5\"/><circle r=\"96\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><text x=\"0.0\" y=\"-75.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">XII</text><text x=\"40.0\" y=\"-64.3\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">I</text><text x=\"69.3\" y=\"-35.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">II</text><text x=\"80.0\" y=\"5.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">III</text><text x=\"69.3\" y=\"45.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">IIII</text><text x=\"40.0\" y=\"74.3\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">V</text><text x=\"0.0\" y=\"85.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">VI</text><text x=\"-40.0\" y=\"74.3\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">VII</text><text x=\"-69.3\" y=\"45.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">VIII</text><text x=\"-80.0\" y=\"5.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">IX</text><text x=\"-69.3\" y=\"-35.0\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">X</text><text x=\"-40.0\" y=\"-64.3\" text-anchor=\"middle\" class=\"il-texto-titulo-peq\" font-size=\"15\">XI</text></g><g transform=\"translate(560 180)\"><line y2=\"-48\" transform=\"rotate(-336)\" class=\"ils-tinta\" stroke-width=\"6\" stroke-linecap=\"round\"/><line y2=\"-82\" transform=\"rotate(-72)\" class=\"ils-tinta\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle r=\"4\" class=\"ilf-tinta\"/></g><path d=\"M440 70 L500 380\" class=\"ils-papel-claro\" stroke-width=\"8\" opacity=\"0.12\"/><g transform=\"translate(70 170)\"><rect x=\"33\" y=\"209.00000000000003\" width=\"264\" height=\"171\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.5\"/><rect x=\"26.400000000000002\" y=\"19\" width=\"277.2\" height=\"197.6\" class=\"ilf-vidrio\" opacity=\"0.35\"/><rect x=\"26.400000000000002\" y=\"19\" width=\"277.2\" height=\"197.6\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/><path d=\"M46.2 38 L99 190\" class=\"ils-papel-claro\" stroke-width=\"2\" opacity=\"0.35\"/><ellipse cx=\"165\" cy=\"182.4\" rx=\"79.2\" ry=\"22.8\" class=\"ilf-rojo\"/><g transform=\"translate(165 125.4)\"><g transform=\"rotate(0)\"><path d=\"M0 -56.1 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -56.1 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -34.782000000000004 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -34.782000000000004 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -56.1 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -56.1 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -34.782000000000004 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -34.782000000000004 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -56.1 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -56.1 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -34.782000000000004 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -34.782000000000004 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -56.1 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -56.1 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -34.782000000000004 L8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro\"/><path d=\"M0 -34.782000000000004 L-8.976 -16.83 L0 -16.83 Z\" class=\"ilf-oro-oscuro\"/></g><circle r=\"20.196\" class=\"ilf-oro-claro ils-oro-oscuro\" stroke-width=\"2.244\"/><circle r=\"15.708000000000002\" class=\"ilf-tinta-azul\"/><circle cx=\"-4.488\" cy=\"-5.61\" r=\"5.049\" class=\"ilf-papel-claro\" opacity=\"0.35\"/></g><rect x=\"151.8\" y=\"228\" width=\"26.400000000000002\" height=\"26.6\" class=\"ilf-oro ils-tinta\" stroke-width=\"0.8\"/></g><circle cx=\"250\" cy=\"290\" r=\"160\" class=\"ilf-papel-claro\" opacity=\"0.08\" filter=\"url(#e6b-difuso)\"/><text class=\"il-texto-foto\" x=\"734\" y=\"540\" text-anchor=\"end\">M. Ferrán · placa 11 · Sala Oriental</text><g transform=\"translate(45 440)\" class=\"ilf-oro-oscuro ils-papel-claro\" stroke-width=\"1.2\" opacity=\"0.85\"><rect x=\"-18\" y=\"-70\" width=\"36\" height=\"8\" rx=\"2\"/><rect x=\"-18\" y=\"-40\" width=\"36\" height=\"6\"/><rect x=\"-16\" y=\"-62\" width=\"4\" height=\"22\"/><rect x=\"12\" y=\"-62\" width=\"4\" height=\"22\"/><rect x=\"-16\" y=\"-34\" width=\"4\" height=\"40\"/><rect x=\"12\" y=\"-34\" width=\"4\" height=\"40\"/></g><g transform=\"translate(470 318)\" opacity=\"0.55\"><ellipse cy=\"40\" rx=\"30\" ry=\"26\" class=\"ilf-tinta\"/><circle cy=\"-6\" r=\"16\" class=\"ilf-tinta\"/><ellipse cy=\"-13\" rx=\"34\" ry=\"5\" class=\"ilf-tinta\"/><path d=\"M-26 -14 Q0 -42 26 -14 Z\" class=\"ilf-tinta\"/></g><g transform=\"translate(735 470)\"><path d=\"M-14 0 L-18 -40 Q-10 -52 -4 -44 L0 -70 L4 -44 Q10 -52 18 -40 L14 0 Z\" class=\"ilf-oro-oscuro ils-tinta\" stroke-width=\"1\"/><circle cx=\"-8\" cy=\"-78\" r=\"6\" class=\"ilf-rojo\"/><circle cx=\"6\" cy=\"-84\" r=\"6\" class=\"ilf-rojo\"/><circle cy=\"-72\" r=\"5\" class=\"ilf-papel-claro\"/></g><g pointer-events=\"none\"><rect width=\"760\" height=\"560\" class=\"ilf-manila\" opacity=\"0.24\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" filter=\"url(#e6b-grano)\" opacity=\"0.16\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" fill=\"url(#e6b-vineta)\"/></g></svg>"
  },
  "sospechosos": [
    {
      "id": "merce",
      "nombre": "Mercè Puig i Ferrer",
      "edad": 32,
      "profesion": "Conservadora de joyas del museo",
      "foto": "img-merce",
      "desbloqueadoPor": "p02",
      "biografia": "Estudió en París y entró en el museo en 1925. Es la única, además del director, que tiene llave de la vitrina. Fue ella quien preparó la exposición del Ojo.",
      "coartada": "Dice que a las 23:40 estaba en el salón de baile, escuchando el discurso del director.",
      "motivo": "Su madre está en una clínica que no puede pagar.",
      "declaraciones": [
        {
          "texto": "A las diez y cincuenta abrí la vitrina para el señor gobernador, la cerré a los dos minutos y me guardé la llave. Después no volví a tocarla. Durante el apagón estaba escuchando a don Enric."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:fF5XUxdEQlIRXBcXUlpSF1RaFFxeGERWW6CEXhlYQVUHRhIKVQgEBwMTCFdGQxJXQRELBAwQRlVQGUFYFqWOVFYXUVgXWkNFXhkXCkdRXBk=",
          "desbloqueadoPor": "p04"
        },
        {
          "texto": "dc1:fF5XUxdEQlIRVwtDRVdfQVj3hxlTGENYVAJFEFVYQU8PQUBRCFMLF11fRFZaFw9RWwQQCgxDC0xUSkZDA0ZBW1dEFFFCVFlDVEpEAV9ZXVReRxRAEk1ZVhcTQlxKXBNYRlFXGBVXQkdRVgpMUEMFV0AXocINBwlVUBc=",
          "desbloqueadoPor": "p08"
        }
      ],
      "notaDirector": "dc1:e2J4ZnZ3e3IfGScCXlpa9IIUUVUSd11YFxNYQhlVABkVUFVNCFZRF0rwzUhZCgVTEgQOQwAGFEtQSxJdA0ZCXExFXVhWFVYXXVgXQwEKCQIDGBRdV1RWWUMGF1RcVUFeCVdXSghTVFhKH0RbWg1GR1xFCBYGBAkZVVwSXAMIW0YWF3FFVFpZU1j610NfWRNdXk1VGVdWF1tWQ1VfWlhBXQNZElQD8YNZGFcBGFkCRlRHAAwXBkMCXF0ZQlAWD1sbGGdVUfSGF1YRcwsRV1ETR1BGVRlDTVIXVAxFRFhLABkKVBJUE0gQVhhfBUsVUVUIBlVCGk9DBxleSlFEEAdHGRhEVVX0hhdbUBkWoJpIX15SVRRaXVYXREJDW1xYTwQZFlRAWUZDRVIYVggYRwwEXRIVAxEGAA9cQ1gSVQcKFFRIVlP1hFsMF1BVRBVcVEVSQxRYWBJUQk0XAEVFQ/rSGQdZEksHXvOEVhMUV0dDClMSABEAAg8DS1AVElQMEkZQGFJYFkVQQUJUVQtDV10TUFRaQFwSSUJSFwBYQkv6zFhGXVNbD1MQW1kTN1lZAkZ9QAwHDRcCChURQBJVBwz3hhhUVVNFFVtWEUunykNUWlRQFFFXRkpSF1sCRBBaTARLAlRBGAJXXBdIWgVWWkMCVxIGDQ8CT0ZYU1BXQxYJFEwYRF1YF1j0jUJQBwxAGFdCQ1VaTVcYUlsXB15DWkwTSgkZElkIRlVEGFcBGEQWAxJeBEITDA8PWvKUUxEBA0ZHWUVVFltURBdBTAERR1lAF1AUWFhBGAUEDVcCHhltCFwIUBJcA0dUVksTFFdHQwNeEhYDDQIXCUtYVhJVB0ZHQBhaVVJFUBdOEUwKQ1BXXkdDVVBWQBhSWRckXl5cWxNYSBVhXRRXXlYYSkRdURYFU1YEWUMQBkZPWFxcVEIHVlRSWBRFXhVbUhFcChBW+4JWXxReTFxMVkQXD1YQSVUAWgcVCxgfElxYSxMCV0EMAUBTCAMQTQ==",
      "preguntas": [
        {
          "id": "m-vitrina",
          "texto": "¿Cuántas veces abrió la vitrina esa noche?",
          "respuesta": "dc1:bVlVFkRaW1YRTwEZHxhSF11VRxlWUVJNFxoXU1BXAkwDW0ZZShJAVkpSRF1ZQxVX8dQNEUMECVtUS1xQBglGGxh7VRZUUEVF8pBEGlwYXl5CWVUVEltYWRcOXkMZXhRYCEFXS0ZCRVJLRwtLGUMFXV8KQhAKBgtJQ1wSQBcDFEFXVFsWQltWF0FQARlSFhNzVEdETPGRRBdaBhdXTFgTXaWcElQHElxbWUUBGFANRldeRQAMDxAPVV1WElUHChRDXURAX1NaF04RVwtDRVdfQfKZFFgSS1ZUVhFbURc="
        },
        {
          "id": "m-apagon",
          "texto": "¿Dónde estaba cuando se fue la luz?",
          "respuesta": "dc1:fVkUU1sVRFZd+tcNHxhSWxFSW1dWVxsXUhBURVpRAFcCWhJZRlZfWRh2CkpcAEgSegQADwIBBxlVXF4REhT3nEtDVVtYFU4XVVxED1wYQkJUFEdQVVZeUV4AVlJYGRFYFFQSXQoSXUJLVgsWFSATU1wBDUMQBkZYQVhV8tFGQFpcWBgWVllQQlhcCkNUSlpD8ocUQBJBWBdaBhdBTFwF+s8VQ00PV0RWFBMHV1gMRl9TCwYCQwYKGUJcXEULAlsVW1hZ9Y1bGQ=="
        },
        {
          "id": "m-replica",
          "texto": "¿Conocía la réplica del catálogo?",
          "respuesta": "dc1:dFYUU1lWVkVWTKfKE0FcF1xdR1RTGFYXWwIXU1hKABk0WltfRldeF11dAUpaT0ZCUxcDQw8CFRlXVkZeBRRVU/uaVUUZFWFeVUsNDBNZSUJdGBRKW1YXUkQXRVVVVQADRlQSXAlBEEdZQAtLFRADElwKFgJNQyNKRfqTEQUTVUdcVlBXF1BZF11YRABSUlIXVVEUWl1WRFJFFVZTUPrSV0ZRV0sCVxBRXVEWXUcMShJRCgxDEBZGXEVQQ0QHElUb"
        },
        {
          "id": "m-segunda",
          "texto": "¿Sabe algo de una segunda réplica?",
          "respuesta": "dc1:+ohhWFYVRFJWTAoHUgcTcl0UWUxBXVgXRwJQ84oZFFcHGRJUBxJUUlQTB1lBoMdeXQINTUMwDxlUVRJCB6WFWkoXZlleUhdfWEMLQ1xMQVYdFEdcElRWF1INVFFLXgBLpZhTGAdeV/SCXURbWg8DUVEMDQ0KEBJYCxlaUBtGRUBRUloWRkBeUkNcRA9GW1pFEVFYGX1SWBdSDRdFV1hBWgNbUxgVW14XS1YWGEYWRlZHAKHSDE1GaUNcVfLYCEBQVltRFlYVW1YRWwURXFZWRFAa",
          "desbloqueadoPor": "p05"
        },
        {
          "id": "m-madre",
          "texto": "¿Cómo está su madre?",
          "respuesta": "dc1:dVJeWUUZF1BDWAcKUksdF3RHQPqTGFJZFxZZURlaDfrLW1tbBxJUUhhgBVZBQyFXQBMDEApPRlpeVxJTFwNaVEsXWVlZX1ZEEUBEFl1ZE0FUWkBYXFkXVltDXVFLXaKUCBsSexNXQ0NZEwhXFRITVxIGFwYQFwcCEUxcUEIIWxVKUlNXQ1BWF1JWCkNWS1wZEW1bGV9dF1ZFEVJXVVZBWglbElUPEkNCXV8AVxUaRlFdC0IPDEMXTFQZX1RCAlFf+4QUW14VR1ZVSwFN"
        },
        {
          "id": "m-pulsera",
          "texto": "¿Lleva siempre la pulsera de serpiente?",
          "respuesta": "dc1:a15RW0dHUhkRfxEGE1xWF1xdFFRTXEVSFxoXUVdNBEpGUVcYC1sQVlpGAVRUWEZXQUUODEOg3FdYWl0RBgMUQ1lbW0QXREJSEU0BDVRXE04RWlsZX10XW1ZDRkVQTQ4ZCFwSSAdAURdcXBZVXBFIEncWA0MNDAVRVBleUEIKWFBOVlZXF1dWXV4ZAQ8TX0ZWX0BRFRJdWRdbAhddTPrQXAVUElEcQ0VeXUEAWRtDKlMSBwMRDA0DSlAZXl0HEFUVTVlVFkdURVJSUAACHxhDUkNbFFRHW19YFw70kUoZAlgUVBw=",
          "desbloqueadoPor": "p07"
        },
        {
          "id": "m-jordi",
          "texto": "¿Qué trato tiene con el electricista?",
          "respuesta": "dc1:fVsUWFhHWlZdGQENR0pWF1JbWUlT+4ZSRQxEHhlzDksCXBJdFRJFWRhREV1bQwVaWwYNT0MCCl5eGVNFDQpbW1xFVVJYDhdbVBkUBlf7nhdAQVEZQF1BXkQCRVEZVQBKRlnxmQtCUUVZQERcUEMKUxI2Aw8CQylLWFxcRQMKFFlZF0dTWlRZVhFJBRBSXFIbEURbS0NNUhdUC15DSVYTSwlBV1kEU14ZGGANGEQWD1dAAAxDEAIEXEMZVlRCpZ1ZFBdERFJSQllFXApDVlYTW1AUV1ZRUVlWDUNWXFX6zBkQXERdSA=="
        },
        {
          "id": "m-llave",
          "texto": "¿Alguien más ha tenido su llave de la vitrina?",
          "respuesta": "dc1:dlZQX1IbF3tQGQgPVk5cF1JbWlRbX1gbFxoXVFwZD1YFXVcYAkdVRVVWRF1bQwNeEgYDCaDQCBlVXBJcC0ZZUEteWFpWGxdyXRkACkFdUENeRhRNW11ZUhcPVhBWTRNYSBVhUUZTXFBNWgFWFQIEQFum0UMGEAcZR1BGQwsIVRVZF1tFVEBFVkIZAhZWGFBYXxRBV1MYU1IXD1ZDGV0OSkoVSxgKUxBa+54FGFsMRkFTCQug0EMCXBFUWxEACVhGUVtYWRk="
        },
        {
          "id": "m-gobernador",
          "texto": "¿Cómo fue la visita del gobernador?",
          "respuesta": "dc1:ekVRQFIVThdBSwsXXFtcW1BGXVgcGHZVRaCaHBn6yFVGRlcYD1xTW1Fdp4sZQwJbWApCocgOB15f+p9XCwVb94MXUFlEFUFSUlwXTxNdXxdXW0D6gV9FVlEMF1RQShFYFPaBGBVHEFpZVApdRgoJEktFGwxDDwMZQVxW8s9GRUBdF1pZF1lYF1lQBwpWSlIXXF1RV0ZKVkQXAFJCS1gDWEoVQlcUElVbGEEBXlkGDF0SAAxDBg9GWkNQQUUDChoVfFhHFlpcWUJFVhdDVlYTQ15AVVUc"
        },
        {
          "id": "m-kessel",
          "texto": "¿Qué opina de la baronesa von Kessel?",
          "respuesta": "dc1:aUJRFllaF1ZSXBQXUhhGWRFaWxcSd1FFUgBe84oZFUsDRlFRA1xEVksTCVFZQxZXQQAWAhBDHxldWBJfDRJVR/uaVRZZXBdUXlcQBkBM8IQKFFBcQVxSF1INQ19XWgRKRkNbXQhXEFZUEwlNRgYJElEEBgJDEANUUFdTEQNGWVxKVkYWW1QXQVhNFgpdWRNUXllbGUNNXlJZQ1pZS1hBTAgVV0sFU0BWSlIQXRtDI0FTRQwMAAsDGV9WEkIHRlVFWUVA9YQVU1IRXAgPUhY="
        }
      ]
    },
    {
      "id": "jordi",
      "nombre": "Jordi Vall i Soler",
      "edad": 24,
      "profesion": "Electricista del museo",
      "foto": "img-jordi",
      "desbloqueadoPor": "p02",
      "biografia": "Entró en el museo en 1925. Conoce el cuadro eléctrico mejor que nadie. Sueña con abrir su propio taller.",
      "coartada": "Dice que a las 23:40 estaba en la cocina tomando un café con los camareros.",
      "motivo": "Debe dinero a un prestamista del Raval.",
      "declaraciones": [
        {
          "texto": "Se habrá fundido algo. Con tanta lámpara nueva, es un milagro que no saltara antes. Yo bajé a arreglarlo en cuanto pude."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:fF5XUxdEQlIRXBcXUlpSF1RaFFVTGFRYVApZURUZEVwUWhJUBxJTWFtaClkVFwNc8cgDQw8WHBlIGfGYDkZaWhhSR0JWV1YXUFUIoJ4CE1JCQFVbUxhTWFkHUhBKXEFbB19TGANeEF5WRwFKRxYWRl0XTA==",
          "desbloqueadoPor": "p04"
        }
      ],
      "notaDirector": "dc1:e/SHW0dZXlRUF0QhUlLwhBFRWBlbVkNSRRFCQE1WExlSFVMYClNDFwoAXgwFQxZdQEVQTVNTVhlBXEFUFgdHFUlCURZbUBdHQ1YJBkdR8IQReVFLUfufGRcnUlL6lAAZFFBRVwFXQhdUUkRSWhoHElYADkMPBqWKXxlXXUIKQVtdRBgWVEBWWVVWRAZfGF5CQlFbGVdLQ0JBClJCWBkCXBRHU1wJHBB5VxMXWVcGRkNHAEIPAkMMVkhYEkgDRlFGTFZWVxdWVlpTUAUHUhhXUkJQURleWUQXBVENBQsXQXgVQEFMB1ZfDBhQC1ZTCgNBU0UHDRAGAUxYXVMREQ8UWV0XUVhEUPSGUFdED1IYXVhFVRRaW15FVlMCGQ==",
      "preguntas": [
        {
          "id": "j-fusible",
          "texto": "¿Qué se fundió exactamente a las 23:40?",
          "respuesta": "dc1:aEJRRdW1kRdEV0QFRktaVV1RFF1XVBdUQgJTQlYZBlwIUEBZChwQeBhGClkVD6WTXxUDEQJDF0xUGVpYGAkURllbQFdFFVtWEUkFD1JWUFYfFHdWXBhDVlkXVhBbVgxbD1leWUZcRVJOUkRdW0MKUxI2Aw8CQylLWFxcRQMKGBVdWxRVQlRTRV4ZEgITUkZERVsaGX5XF1RWDlVZ+pBBQEZDXVQQW/OEGF8FGFkWHBw="
        },
        {
          "id": "j-cocina",
          "texto": "¿Quién estaba con usted en la cocina?",
          "respuesta": "dc1:dFhHFlRUWlZDXBYMQBQTU15HFFYSTEVSRE0XaRlVABkFWlFRCFdCVhQTFU1QQwtXEhUXEAxDE1cRWlNXoc8aFXZYFFtSFVFeW/rNQ1ZWE1teRxRXXVVVRVIQDBBVVhIZAlASVAcSU1hWRxZZQQJGUVMIAAoCDUZaUF1TEQUHWFQW"
        },
        {
          "id": "j-prestamista",
          "texto": "¿Debe dinero a alguien?",
          "respuesta": "dc1:fURbFltaF0RQWwFDXl1XXl4UZlhEWVsZFyBCUU1LDloPUFxMB0EQR11AAUxUEEZTEhAMQxcCChllVl9UF0oURVdFFENZVEQXWVwWEVJVWlJfQFVKEkEXQllDWlFVGQxcFRsSdQMSWFYYVwVcWkMOU0ERA0MwAggZe0xTX0xGZFBKWBRSUldSRRFdDQ1WSlwXX1sUXEEYRVhVAkUQU1YYWBUOEkEJElRSGFkLQVQQRlxdRQcNFwoDV1VWHA=="
        },
        {
          "id": "j-cuadro",
          "texto": "¿Quién más sabe manejar el cuadro?",
          "respuesta": "dc1:dlZQX1IVU1JdGQkWQF1cGRFxWBlEUVBeWwJZRFwZElgEUBJcpYFeU10TAUtBoMcJEgAOQwcKFFxSTV1DQhVVV10XRUNSFVJPWEoQBh0Yf1ZCFERYXllZVFYQF0NWV0FdE0dTS0ZLEF9ZSkRJQAZGQVMHBxFDABP6kFUSVBFGV0D7llgaF1oXU1RTBRATWRNYQldBS1NLF1tWQ1RfWlAPWEZMEkwDEldWVlIXGEANRlVADBYMTQ=="
        },
        {
          "id": "j-nota",
          "texto": "¿Qué es esta nota de su caja de herramientas?",
          "respuesta": "dc1:dlgURfScF1tUXBZDVktcGRF4UU1AWUQXRApZEEpcD00PUV3a5pQQel0TCFkVBghRXQsWEaDKRlxfGVddQgRVW1tYFFJSWRdDUFUIBkEYVlsRWEFXV0sXVlkXUkMZXQQZClQSXwdeUQwYQwFWRqDPEkMQB0MGEQcZVVwSXQ0VFFZQXldZRBVTUl0ZCgxHUVBeUEZdVh4YRkJSQ11FXF4AV0ZUElQJQRBSS0OnlVQQSBJ+BEIEFgIUXfKQEkENFBRGURdVWlBAXlJfGQgCE0hWU/KZVRc=",
          "desbloqueadoPor": "p08"
        },
        {
          "id": "j-merce",
          "texto": "¿Qué relación tiene con la señorita Puig?",
          "respuesta": "dc1:dl5aUUJbVhkRexEGXVcfF11VFFddSlpWW00XfVwZElgKQFZZShJTWEtSRElABkZdRhcNEEMNCRlZWFFUDEgUeF0XRF9TXPSEEUgRBhNVWkVQRlUZXllEF1ugll1JWBNYFRVWXUZBRRdLUghZFQ8HEkEADwINAkZJUEpTVQNKFEwYW1VFF1heRfKQSkN2SxNCX1UUSlf7hlhFAhdDXEsIWEgVfFdGXlEXVVYQWVtDA1wSABEXDE0="
        },
        {
          "id": "j-lunes",
          "texto": "¿Qué planes tenía para el lunes?",
          "respuesta": "dc1:+ohxWhdZQllUSltDfVFdUERaWxcScFZOFxJCVRlLBE8PRlNKRl5RF1FdF0xUDwdRW6bRDUMHAxldWBJBDgdaQVkXVlddVAwXUlYKQ19ZE19EWVFdU1wbF1sMRBBaWANVA0YSSxNUQlJWHUR0WkMSV1ymzwJDAhZMX01TVQ1GUFBLU1EWX1RUUhFdp85SSx0Xf1VQWBJV9JZETQ==",
          "desbloqueadoPor": "p08"
        },
        {
          "id": "j-sotano",
          "texto": "¿Bajó al sótano durante la gala?",
          "respuesta": "dc1:aFZGVxdURUVUXggCQRhfVhFVQlxA+5pWG0NUXFhLDhVGVkdZCFZfF0tWRF5ABkZeU0UOFhlNRnhfTVdCQghbGxj1i2ZWR1YXQEynyhNRUVYRVRRbU1JWRQhDdlxV+swZCFoSUAdLEFr7khcYRBYDElcJQgAWAgJLXhUSXQMVFFZZW1BTRVREF0gZFgJHWUAZ"
        },
        {
          "id": "j-taller",
          "texto": "¿Cuánto cuesta abrir un taller propio?",
          "respuesta": "dc1:fFhHFlpcWxdBXBcGR1lAGxFXW1cSTVkXWwxUUVUZBFdGckD7xlFZVhhKRFBQERRTXwwHDRcCRl1UGUFUBRNaUVkXWVdZWhkXfVZEF1ZWVFgRV1VVUU1bVlMMF1hYShVYRlBeGKWIXENRXgsYQQwUXFsJDgxNQyVWXxleXkICUVkYWkFFUloXWV4ZCA9WX1wXX10UXFwYU15SGRdR+ogOSkg="
        },
        {
          "id": "j-rapido",
          "texto": "¿Por qué volvió la luz tan rápido?",
          "respuesta": "dc1:aFhGR0JQF05eGRcMShhB9JBEXV1dFhd49M4XVVUZBksPQV0URlBRXfuaRFRUQwNBUQQOBhECRl1UGUFUEBBdVlFYFFcXWkRUREsFEB8YVllSW1pNQPueF1IPF1ZMSghbClASWUZGWVJWRwVLFRpGXl1FAQIOAQ/6mBcSZRADRxVVXlpDQ1pEGRF6EQJfSUZeVEZVGVpZVUX0zlYQTVgTXQdRXRgCW1VNFg=="
        }
      ]
    },
    {
      "id": "kessel",
      "nombre": "Isolda von Kessel",
      "edad": 54,
      "profesion": "Coleccionista de joyas",
      "foto": "img-kessel",
      "desbloqueadoPor": "p02",
      "biografia": "Baronesa alemana afincada en Sitges. En mayo ofreció 300.000 pesetas por el Ojo; la notaría de Logroño ni siquiera contestó.",
      "coartada": "Dice que a las 23:40 estaba en la Sala Oriental, delante de la vitrina.",
      "motivo": "Quería la joya y no se la vendieron.",
      "declaraciones": [
        {
          "texto": "Estaba mirando la joya cuando se apagó todo. Cuando volvió la luz, ya no estaba. Es exactamente lo que he dicho a la policía, tres veces."
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:cVlbVVJbQ1IfGSEQR1lRVhFQURlEXUVTVgcXVktcD00DFVMYClMQQVFHFlFbAkoSUwEPChECCF1eGUdfA0ZeWkFWFEdCUBdOUBkBEVIYVVZdR1UXEnRbUkECF1dMWA9NA0YSVgNVQlhLEx0YWQJGQkcJEQYRAkZdVBlBVBAWXVBWQ1EWUlsXW1AZCRbwiVZUUBRQXEBdVF9WTRdxVU0ITwcOEksDEl9RXV0AXRUQDxJeBEICABYVWF8VEkEHFFsVXUQUWlYVWlJbVhZDR11AQ1hTWwMSV070hENbURlVDVgQUBJcAxJcVhhFDUxHCghTEgAMQw8CRlZCWkdDCwJVURhOGBZUWlkXXVhED0ZCE0FeWEJQV1ZTWBtDUl5NSwRPD/aBGANcEFtZExRdWxYLUEAEQhYNQwFMUFdGVEIEWFRWVFsWXUBZQ14ZBUNfWRNUVEZGWFZNRVYZQ3RCXECiikZER11GV0JWGFIIX0AKA1wSAQcPQw4TSlRWElARA1NASlZaUlgVW1YRTw0XQVFdVhFNFFddGFtYFwBYXk360hkWWkBJE1cQWVlXDV0VEAMSXgpCExEGAUxfTfGCTA==",
      "preguntas": [
        {
          "id": "k-oferta",
          "texto": "¿Por qué quería comprar el Ojo?",
          "respuesta": "dc1:aFhGR0JQF1JCGQgCE/uJWVhXVRlCUVJNVkNTVVUZDEwIUV0YF0dVF1ZcRExQDQFdHEU2EQYQBVBUV0ZQEUZZXFQXRFNEUENWQhVEAl8YUFhfQFVdXRYXe1ZDWV9NWBP6y1QSXAMSfFhfQQv7hAxGXFtFEQoSFg9cQ1gSUAAUXfaLF1hXF1ZWRUVYSENATUNYX1NbFxJ2WBdEBhdATFwFXEZWXVUWQFFFGF8LGEQWAxJTCQUWCgYIGV9WEkAXD1FHXRdCU1lRUkUKGQgME0vwnhFQUUpWXRdfVgBSEFpMAEsDW0ZZRlPzhldASg=="
        },
        {
          "id": "k-oscuridad",
          "texto": "¿Qué oyó durante el apagón?",
          "respuesta": "dc1:aEVdW1JHWBdEV0QEQVFHWBFAW1dGVxsXUwYXUVVeFFcHFUFdpYNfRVkdRHxQEBZH8cwRT0MOE0ARWldDAQcYFU1ZFFVfVERGRFAADBNIVkZEUfeIXRhOF1oGQ/OYVQhaCRkSXAlBEEFdUAFLG0M1VxIJDUMHCgxcEVheEQEJWVxLVkZfWBVOF11WRAJDTV1D8ocUWl1VWBdGFl5VVxkASRNbRllGXlEXVFoXTFRDAlcSCQNDAAwLSUNYHA=="
        },
        {
          "id": "k-vio",
          "texto": "¿Vio a alguien junto a la vitrina al volver la luz?",
          "respuesta": "dc1:dFYUWkJPF1leGRIWVlRFUhFQURlVV1tHUkNSXhlcElgVFV77x19AVkpSFwIVExRbXwAQDEMGFRlEVxJDBxVXWlRTWxgXcFkXVEoBQ0FdQFReWFBWEk5eF0INF1dMWA9NAxVQVAdcU1gYWRFWQQxGUxIJA0MABhRLUF1HQwNKFEwYW0FTUFoXTlAZCgwdGGNSX0f3kBJJQlIXBkVRGVgNXhNcV1ZGVlVbGF4RS1AMRlNBAAUWEQIIXV4ZXlBCEF1BSl5aVxkVdVtQVwcMHxhdWBFaUV5AVw0XWwxEEFT6zFYVFUFXCBJeUl9BC0sZQxVX8dQNEQoXBxc=",
          "desbloqueadoPor": "p07"
        },
        {
          "id": "k-pulsera",
          "texto": "Háblenos de su pulsera de serpiente.",
          "respuesta": "dc1:e1ZGQl5QRRsRCF1SARQTWFtbRxlWXRdSRA5SQlhVBVhIFX5ZRl5cUk5cRF1bQwpTEggXoNIGBVgRXVdDBwVcVBhHW0RGQFIXVFdED1IYWk1AQV1cQFxWF1sPUkZWGQRVRkdXVAlYHhdwUh0YWhcUUxIWBxETCgNXRVwSVAxGdlRKVFFaWFtWF1xMBwtcGF70kEcUVF1cUkRDAgwQVVhBUQMVRFEVRl8XXV1EXUYXAxJfEBEGDE9GXF8ZR18DRllA+4ZRVVYVRkJUGQoME11AF11VFFTxlVYZ"
        },
        {
          "id": "k-replica",
          "texto": "¿Reconocería una réplica del Ojo?",
          "respuesta": "dc1:eRdBWBdYUkNDVkhDUFddF1NBUVdTGFtCTU8XQ/qUWxkDWRJOD1ZCXlcTClcVFw9XXABCBhAXFFxdVVMfQjZRR1cXUUVWFVlYUlEBQ19ZE0FYQEZQXFkXQ1IN9J1YGQRVRlhTXwhXQ15XEwBdFQYVVxIDDReg0AFLUF9dEQEHUFQYU11TTRVaXl9MEAxAGEoXXF1HGV1SWEQXGlYQV1ZBSglbElQJQRBTXRMFVkEGFRwSIBEXFhUDGVxQQFAMAlsVVFYUXFhMVhdcXAAKUhhbWENVFEASVlgXRAJVQvqUABkMQEBZFBJcWBhCEV0VFQ8c"
        },
        {
          "id": "k-sitges",
          "texto": "¿Qué hace una baronesa alemana en Sitges?",
          "respuesta": "dc1:bl5CX0UbF3pYGQkCQVFXWBFZQUtb+4QXUg0XZlxLBfrcWxJBRldcF1tfDVVUQwJXEjUQFhAKBxlcXBJcAxJVV1kXVRZa9poZEWoNF1RdQBdFXVFXVxhaVkVPF1xMQ0FARlJXVhJXEEZNVkRWWkMWQFcCFw0XAkgZZEpGVAZGR/aVF0REUlJCWUVYSENKGF5SEVNBSkZZGQ=="
        },
        {
          "id": "k-director",
          "texto": "¿Qué opina del director?",
          "respuesta": "dc1:aUJRFl9UF19YSQsXVltSU14UXFhBTFYXWwxEEFRYE1oJRhJcAxJcWEsTB01UBxRdQUUSAhECRlxCWBJCAwpVFVxSFEVSUVZEHxkxDRNQXFpTRlEZWldZRVYHWBBAGQBLFEBbVgdWXxsYQhFdFQYVEl4EQhMGDBQZUlZfUwsIVVZR9IdYGRVnUkNWRAZAWRNZXldcXBJdRENWAVYQXFdBXAoVV0sFV15WSloLGExDCl0SFgMBBkMLXFVQXREgB0ZWXVtbWFYb"
        },
        {
          "id": "k-conservadora",
          "texto": "¿Conoce a la señorita Puig?",
          "respuesta": "dc1:dFYUVVhbRFJDTwUHXEpSGRF3W1RCXUNSWRdSHBlKBEsPVB4YAlcQW1lARElABkZfWxcDDUMPBxlHUEZDCwhVFVX0lUUXREJSEVUFQ1lXSlYfFHlcEllUWFoTVvOI+tIZEkdXS0ZEVVRdQERZFRUDQF4EQhpDEA9cXElAVEIFW1sYW1tFF1JCVl9NARATSEZSQkBbShwYf1ZUBhdSUFwPA0ZMXRgSU11HV1ALGEEMBV0SCwMHAkMVUF8ZVUQDCEBQSxk="
        },
        {
          "id": "k-policia",
          "texto": "¿La registró la policía?",
          "respuesta": "dc1:bEVRRRdDUlRUSkQaE1tcWRFBWlgSS1L0hgxFURldBBkKVBJbCV9ZRFlBp5VUTUZwXQkRDE9DAUxQV0ZUEUoUV1ldW0UXUVJbEU8BEEdRV1gfFGdQEkFYF18WVVlcSwAZElBcUQJdEFJLUkRSWhoHElcLAQoOAkoZWVhQQ6HLVRVLXlBZF1lWF0FLDQ5WSlIXVFoUSlNbVkVbAhdAWEsAGRdAVxgKUxBBUVYWWVtDBFtXC1hDDQxGS15bXREOCRRETVIURkJQU1gRWgsOQ0pSRR8="
        },
        {
          "id": "k-ginebra",
          "texto": "¿Conoce coleccionistas que compren joyas sin preguntar?",
          "respuesta": "dc1:dVJQX1YVckJDVhQCHRh2WRFzXVdXWkVWFwtWSRlMDxkFVFBZCl5VRVcTFU1QQxZTVQRCBg1DAEtQV1FeEUZHQFFNW0UXTBdZXhkUClddE0dQRFFVV0sMF0QWF15WVANLAxVBXUZWWVRdEwFWFRUJSBIHAwkCQwNXEVVdQkIVVVlXWVFFF1FSF2JQEARWSx0Xf1sUXEEYVlpeBFgQVPrMVkoVQl0UXRBE+5pESUAGRldcRRIRCg4HT1RLUxESFFFSTVlA9YQVR1hDGQEPE3dZWB8UbRlcVxdaUkNbXxlJE1wBQFxMpYEQVhhep5Ub",
          "desbloqueadoPor": "p05"
        }
      ]
    },
    {
      "id": "ferran",
      "nombre": "Max Ferrán i Bosch",
      "edad": 35,
      "profesion": "Fotógrafo de La Vanguardia",
      "foto": "img-ferran",
      "desbloqueadoPor": "p02",
      "biografia": "Reportero gráfico de sucesos y de sociedad. Hizo dieciséis placas esa noche, todas con magnesio.",
      "coartada": "Dice que a las 23:40 estaba en la galería del salón, preparando una foto de conjunto.",
      "motivo": "Una exclusiva así vale un sueldo de un año.",
      "declaraciones": [
        {
          "texto": "Yo fotografío lo que pasa. Si mis placas os sirven, os las presto; si sospecháis de mí, os las cobro."
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:cVlbVVJbQ1IfGTcWQBhDW1BXVUoSS1hZFw9WEElLFFwEVBJcAxJBQl0TCFkVCQlLU0UbAkMGFFgRX1NdEQcUVFZDUUUXUVJbEVgUAlT7gFkfFHZLXVVeREMCF0kZTwBXD1FdSwkJEEVdUBFdRwcHEkMQB0MGDUZVUBlCXQMFVRUAF1hXF1ZYWUJcFhVSXFxFUBRYXBJIXlNeoIQQSEwEGQhaElwPQUBWSlIWWRUOD1dcERACEEMFXENLU1MDSA==",
      "preguntas": [
        {
          "id": "f-placa14",
          "texto": "¿Por qué no anotó la hora de la placa 14?",
          "respuesta": "dc1:aFhGR0JQF1pUGRUWVlzwnhFHXVcSVPSWRwpNEEAZElAIFUJZBVtVWVtaBRYVJhRTEgkDQwYNpZBCUF9QQhZYVFtWFFJSFVtWEU8NF0FRXVYLFFhYElBeVFJDR19LGQ5fD1ZbV0oSXlgYQwtKFQIURldLQjMGEQkZVFUSVBEWUV9XF1BTF1BEVhFKBQ9SGFZEEUFaGVFQXkFWF1gKGUoIGRdAW10UV14XVFJEUFoRBx4SCKHOEQYIVV4X"
        },
        {
          "id": "f-placa8",
          "texto": "¿Qué recuerda de la placa 8?",
          "respuesta": "dc1:fVsUUVhXUkVfWAAMQRhXUhFEUUtUUVsXTkNbURlTDkAHFVZdRlFVRVtSXhhADQcSUBAHDQJDFlVQWlMfQiJRRkhC959EFUZCWEoBQ1tZUFJDFFtNQFkXVFgNF1xYGQJWCEZXShBTVFhKUkRbUBEUU1wBDUMaQwNVXVgSXAdGRFRK9IcWW1QXWlBXC1kT+phSXRRZWFVWUkReDBdVVxkEVUZWQFEVRlFbFBMXXfbSCUASIwcREaDHV/OCHBEuBxRFVFZXVxcMF1tQGQwKUF0TTlAUV1ZcGFtWFxVeREtQD1hGVldKFFNUVhY="
        },
        {
          "id": "f-galeria",
          "texto": "¿Dónde estaba a las 23:40?",
          "respuesta": "dc1:fVkUWlYVUFZdXBagnlkfF1RaV1BfWRdTUkNbURlWE0gTUEFMBx4QVFlBA1lbBwkSRwsDQxMPB1pQGUJQEAcUWVkXUllDWhdTVBkHDF1SRllFWxRdV1QXU14QVEVLSg4XRnZHWQhWXxdLVkRZRQIB8YFFFgwHDEZJVFdB8stcFHNdRUb1llsbF1VQFxNSSlIXWFNBWF4UF1JbQ1pRXlcESg9aElAHUVUXS0ZESEcMFltTRQ4WGU1GYBFdW0ISB0b2kQ0URVZZXvSCGRENUhhDW1BXVRlcXVBFVkNUX1cZFUsDRhJbB0BRRBhSF01GFwdWUxZM"
        },
        {
          "id": "f-estrella",
          "texto": "¿Se ve la estrella del zafiro en sus placas?",
          "respuesta": "dc1:e0JVWFNaF1JCTafCHxhAUhFCUQMSS1JeRENFUUBWEhkAXFxXFR4QVFdeCxhADUZRXRUNTUMmCBldWEEREhRdWF1FVUUXUVIXXVhEDVxbW1IRWFUZRl1Z9JoCGRB1TAReCdeynkZcXxdL8M0UFQYKEl8EBQ0GEA9WEVxBEQEHREdRVFxZRFoZF39WRAZAGFJERFpAVhJV9JpYWBdJVhkTXBJHU0wJHhBZVxMQWUYMSA=="
        },
        {
          "id": "f-noticiario",
          "texto": "¿Qué pasa con el operador del noticiario?",
          "respuesta": "dc1:bVkUVV9cVFgRXQEPE3ZcQ1hXXVhAUVgXfgH0mUtQAlZGVl1WRkdeVhh3AVpHCgMSU0UPAg0KEFxdWB4RBwhXVFZDVVJYFVNSEVUFQ0VRV1YfFGdQVU1e9IRDU1FXXQ4ZEEBXVBJTQxdZEwtLVhYUU0FFEgwREhNcHRlWWAEDGBX6nFhXF0VSW/KUBxZfWRNSQhRWWEBZQ1YXGhdVVRkLXABQElYJ8IsZGGANGEcGEFdeptFDAg8BVh0ZQVQQpZUVX0VdRRdGWFVDXEQNVl9BWB8UZPqfXFZZRAZbXxc="
        },
        {
          "id": "f-exclusiva",
          "texto": "¿Cuánto vale esta exclusiva para usted?",
          "respuesta": "dc1:bVkURUJQW1NeGQAGE01dF1D3hVYeGEReFw9WEFxKAksPV10YH10eF2hWFlcVFwNcVQQMQwYNRlpEXFxFA0ZVWV9YDhZOWhdQUFcLQ1BXXRdUWBRLXVpYF0cWVVxQWgBdCRkSVgkSU1hWEwhZFQkJS1NFEAwBAgJYHxlnX0IcVVNRRVsWWVoXRFQZEgZdXFYXVFoUdVMYYVZZBEJRS10IWEg="
        },
        {
          "id": "f-merce",
          "texto": "¿Qué le pareció la conservadora esa noche?",
          "respuesta": "dc1:a1JGU1lUF1ReVAtDRlYTVFhGQVNTVlgZFy5eVVdNE1gVFV5XFRJUUlXwxUsVAQNQ8cgDDgwQShlUVV5QQgpYUE5WVlcXWVYXUkwBDUdZE1NUFEBWVlcNF1sCF1hWSwAVRllTGBBbREVRXQUUFQYKElUKAAYRDQddXkscESETVVtcWBRAWFlBXvKKRA9SGF9CSxRYWBJOXhdSDRdVVRkSWAr2gVZKElNSSlAFGFEGChJCDAMNDE9GTVBXEkGhx1hcXFYUVVhYWBdUVUQRVktHWB8="
        },
        {
          "id": "f-baronesa",
          "texto": "¿Fotografió a la baronesa?",
          "respuesta": "dc1:fFhHFkFQVFJCFUQaE11dF11VRxlWV0QXRAJbVRlUCEsHW1ZXRl5RF05aEEpcDQcSUQoPDEMWCBlWWEZeQhNaFVlUQVdFXFgZEX4RAl1MVkQRWlFeQFdEF18CRERYGQRVRlZdXAkSSRdNXQUYRgYUQlsADBcGQwNXEVVTEQ8T94RdVFUWRkBSF0dYCAYTVfCWQhRFTFcYWl4XAPSRVFgTWEgVfFdGQVUXVVwSUfbQRlZXRQMPD6DLGV9QElINCBRQVBdVRlZS9IRfFw=="
        },
        {
          "id": "f-roig",
          "texto": "¿Conoce al joyero Roig?",
          "respuesta": "dc1:bFhQWRdQWxdhWBcGXBhXUhFzRlhRUVYXWwwXU1ZXDloDGxJ0AxJYXltWRF1ZQxRXRhcDFwxDFlhDWBJCF0ZXXFZUQVNZQVJZUEsNDB8YVlkRUVgZRF1eWUMGGRBsV0FRCVhQSgMSQUJdEwVIQA0SUxINAxAXAkZcXRlTWBADFERNUhREUkZHXkNYRAZdGFZEVBRYUFBKWBdEFk5fFRkCVggVR1YHElNbWUUBGEQWAxJRFwcGQxITXBFXU1ULAxRQVkNdU1lRUhk="
        },
        {
          "id": "f-prestamo",
          "texto": "¿Nos presta todas sus placas?",
          "respuesta": "dc1:dFZHFlNcUlRYSqfKWksfF0FRRlYSXVkXXwxdURldBBkFWlxMB1FEWEsIRFRaEEZcVwIDFwoVCUoRV10REQdYUFYXUFMXWF4XXVgGDEFZR1hDXVsZXFEXR1gRF19LXQRXRlFXVEZVX1VdQQpZUQwUHBI8QhAKQxZMU1VbUgMIFFRUUFsaF1BbF0FQAUNXXRNRXkBbGVdLF1r0zlge"
        }
      ]
    },
    {
      "id": "roig",
      "nombre": "Damià Roig i Mas",
      "edad": 67,
      "profesion": "Joyero",
      "foto": "img-roig",
      "desbloqueadoPor": "p02",
      "biografia": "Joyero del Paseo de Gracia desde 1890. Hizo el engaste nuevo del Ojo y una réplica en vidrio para las fotografías del catálogo.",
      "coartada": "Dice que a las 23:40 estaba recogiendo su abrigo para marcharse.",
      "motivo": "Hizo la réplica del catálogo y sabe lo que vale el zafiro suelto en una trastienda de Ginebra.",
      "declaraciones": [
        {
          "texto": "Una réplica es un trabajo como otro cualquiera. Yo no pregunto para qué la quiere el cliente, si el cliente paga."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:cFZWWlYVU1IR+88WXVkTRfKdRFVbW1b1jE8XQFxLDhkVQBJUD1BCWBhXARhQDQVTQAINEEMXD1xfXBJVDRUa",
          "desbloqueadoPor": "p05"
        }
      ],
      "notaDirector": "dc1:cVlbVVJbQ1IfGSwKSVcTU15HFEvxkUdbXgBWQwMZDVhGUVdURlFRQ/uSCFdSDEoSQxAHQxMCAfqCGVddQgtBRl1YGBZOFUJZUBkXBlRNXVNQFEVMVxhbUhcTVlf6ikFcCBVXXgNRRF5OXET6nhYIUxIWB6DSDBRQRVgSVQcKFFhNRFFZ9Y4XThFLAQBcX1r0ghRRVRIJDxdTBhddWEAOF0Z7XRgKVxBTUVxEUVgTCUBGBAwACgJIGXBXXUUDRlhaSxdERFJWXlhCGQENE1tfVkdRGBlRV1pYFxdYVFZKQVUJRhJSCUtVRVdASg==",
      "preguntas": [
        {
          "id": "r-clave",
          "texto": "¿Qué clave usa en su libro?",
          "respuesta": "dc1:dFYUUlIVWl4RWgUQUhhXUkJQURkDAA4HG0NOEFdWQUoDFV5ZRlZZRfuaRFZcQwcSRxYWBgcGFRcRbFxQQhZVWVlVRlcbFVNeVENED1ZMQVZCGBRXW1ZQQlkCF0JcSQRND1FTAkZeX0QYWQtBUBEJQRIBB0MOBgJQUBl3QhIH94RZF0FFVlsXQl9YRBNSSlZUWFBVGUsYVFZTAhdFV1ZBVQcVQU0fUx4XdFIXGFMCBUZHFwMQQxUHVxFcXBEBClVHVwwUU1sVW15TSwtDVksTR1BGVRlf+5oZ"
        },
        {
          "id": "r-replica",
          "texto": "¿Cuántas réplicas hizo del Ojo?",
          "respuesta": "dc1:dFYUUlJZF1RQTafCX1dUWB0URFhAWRdSW0NaRUpcDhVGUFwYA1xVRVcdRG5cBxRbXUUDGRYPRl1UGXBeCgNZXFkbFFNZUlZERVxEBl0YX1ZF94dXElxYRVYHWB4ZbA8ZEkdTWgdYXxdQXApKVAcJElYAQhAGFwNaWFxcRQMVFFZRWVdDUltDVhFJARBWTFJEHw=="
        },
        {
          "id": "r-segunda",
          "texto": "Su libro tiene dos réplicas, no una.",
          "respuesta": "dc1:eV8YFltUF0RUXhENV1kdF31VFFxcW1ZFUAJFX1cZBFdGVFBKD14cF11dRF1TBgVGWxMNT0MaRlVQGUBUAQlTXPuEFFNZFVpWSFZEFl1ZE0RU94VWQFFDVhcGWRBXVgxbFFASXANeEFpNQAFXDkMSQFOmzwJDDwcZXFxWWAYHFFFdWxRURVpUX1QZHUNQV11YUveZWBJdWxdSDVBRSk0EGQdZElwDRlFbVFZKGGUGCEHxzEISFgZGXENYEkEDFFUVV0NGVxdDXkNDUAoCHRhqWBFaWxlCSlJQQg1DXxUZElBGUF4YBV5ZUlZHARhFAgFTHA==",
          "desbloqueadoPor": "p05"
        },
        {
          "id": "r-engaste",
          "texto": "¿Qué hizo exactamente en el engaste del Ojo?",
          "respuesta": "dc1:alJaWUH2nhddWBdDVFlBRVBHFEASXVsXVApSQktcTRkXQFcYA0FEVlpSChhTAhJbVQQGDBBNRnVQGUBeEQcUUV0XW0RYFVlYEVUFQ0dXQkLynQ4ZV0sXVlkXXldMWE0ZAlASTQgSRFZUXwFKFRITVxILDUMADAhWS1pdHUIfFFBUF0ZTQVBFRF4ZCA9WTlIXRFpVGUJUVlRWQ0RfVV0AXQcVQ00DEl5YGEIRUUYGRl5XEwMNFwIUFxFxU0hCEkZUWlZeWUQVRkJUGRENXBhBUkJEUU1TFg=="
        },
        {
          "id": "r-valor",
          "texto": "¿Cuánto vale el Ojo de verdad?",
          "respuesta": "dc1:fVkURUJXVkRFWEhDXl1XXl4UWVBeVPSEWUNTVRlJBEoDQVNLSBJ1WRhfBRhBEQdBRgwHDQcCRl1UGXNcAANGUEsXWxZTUBdwWFcBAUFZHxddVRRUW0xWUxcaF0NQV0FJFFBVTQhGUUQWEzdZVgICXRIBB0MQFkZcX15TQhYDGBVNWRRMVlNeRV4ZARATTV0XS1VSUEBXDRdSEFgQXEpBVQkVQ00DElRWGF4NXVEMSA=="
        },
        {
          "id": "r-abrigo",
          "texto": "¿Por qué se marchaba a las 23:40?",
          "respuesta": "dc1:aFhGR0JQF0NUVwMME0tWRFRaQFgSQRdEXgZDVRlYoogJRhJBRlNSRVcTCFkVFw9XXAEDQwJDClhCGVxEBxBRGxhyR0JWV1YXVFdEBl8YVEJQRlBYQEpYR1ZDVF9XGQ1YRlBcWwdAV1ZcUkgYRBYDEl8AQgEWEAVYU1gSVA5GVVdKXlNZGxVUQlBXAAwTS1YXUERVXvGLF1ZGFlJcVVZPGShaQRgXR1VTWV4LSxUPCUESAQ0QQwAJVxFVR0tCHxRYUUVVWFNaF1ZdGRQCQFFfW14UV1ZfVxdDWA1DX0oX"
        },
        {
          "id": "r-kessel",
          "texto": "¿La baronesa le encargó algo alguna vez?",
          "respuesta": "dc1:bVlVFltcWkdYXB4CE1xWF0JBFElHVERSRQIXVFwZElwURVtdCEZVGxhWChhYAhRIXUtCIAIRElBUSx4RABNRW1kXRF9ST1YZEXQBQ0NKVlBEWkD6gRQXU1JDR1FKVk0ZFVwSQQkSQFhcQaeVVEMOU1EAEEMWDQcZUlZCWANGUFBUF3tcWBX1nEFYFgITS0YXR11AS1tWVhdTBhdjUE0GXBX3iRZGflUXXFoOXRUSE1cSCw1DCwIBVhFaXUELB0cVXFIUXFhMVkQRWA4GXVlAF0FVRlgSSFZFQwpURVVYE1wVGxJhRlxfF1RSFxhdAgFdHA=="
        },
        {
          "id": "r-estrella",
          "texto": "¿Puede una réplica imitar la estrella?",
          "respuesta": "dc1:dl5aUUJbVhkRfAhDUktHUkNdR1RdGFJEFw9WEFVMGxkCUFxMFF0QU10TCFkVEw9XVhcDWEMGChlHUFZDCwkUUEsXQl9TR15YHxk0DEEYVkReFFhYEkr0nkcPXlNYGQRXAVTxiQcSVFIYXwFSWhBGSxILDUMHBkZaVEtRUE5GTRVIWEYWUkZYF0BMDQZdGF9WEURBSl0YUlkXBkRRGU8ITRRcXFlGQVFV+54FGEQWAxJcBAYKBkMKWBFUW0MDFPeYWRdQUxdWUkVSWEQLUktHVhFRWBlW+5pWFxBeV0xQBFcSUBw="
        },
        {
          "id": "r-pagador",
          "texto": "¿Cómo era la señorita que recogió la segunda réplica?",
          "respuesta": "dc1:fF5HVUVQQ1YfGTcMXlpBUkNbFF1XGFZbVk8XV0xYD00DRhJIE1dDQ1dARExaBwkSVwlCEQIXCRURW0dUDAcURUpYWkNZVl5WUlCn0F0WE2dQU/eKEl1ZF1UKW1xcTQRKRlFXGAVbVVkUEwpNUBUJQR5FExYGQxVcEVddRQMEVRVJQlEWQVBZ9JxYCkNXXV8XU1VaWl0YThdZDBdUXBkUV0ZWU1KlgV4ZGH0LGFkCRl9bF6HKQw6lmEICElQMRllcGFhSX1RcWBdCXEQOWkpSF1RYFFZAVxsXWQwXXFgZAlgUVBw=",
          "desbloqueadoPor": "p05"
        },
        {
          "id": "r-director",
          "texto": "¿El director le debe dinero?",
          "respuesta": "dc1:e0JVQkVaF1FQWhAWQVlAGxFAW11TSxdHVgRWVFhKTRkFWkFZRkNFUhhdCxhFFgNWXUUGBgAKFBlVXBJFDQJbRhhbW0UXWEJEVFYXTRN8XFkRcVpLW1sXUkRDW1VXTQ4ZFlBAV0ZRRVpIXwEWFTAPElcWFqDCQwdLQ0xbXwMCWxkYW1sWU1xEXlxMCAITWlpSXxo="
        }
      ]
    },
    {
      "id": "balmes",
      "nombre": "Enric Balmes i Coll",
      "edad": 63,
      "profesion": "Director del museo",
      "foto": "img-balmes",
      "desbloqueadoPor": "p02",
      "biografia": "Heredero de la colección familiar y director del museo desde su fundación. Es quien consiguió el préstamo del Ojo.",
      "coartada": "Dice que a las 23:40 estaba en el escenario del salón, dando su discurso.",
      "motivo": "El museo está endeudado y el seguro de la joya es alto.",
      "declaraciones": [
        {
          "texto": "Ese préstamo era la salvación del museo. ¿Creen que yo iba a destruirlo con mis propias manos?"
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:cVlbVVJbQ1IfGSACUVkTUl0UUFBBW0JFRAwXU0xYD10JFUFdRlRFUhhfBRhZFhwIEhENBwxDA1URSlNdodVaFVRYFEBeWhkXZVABDVYYX1YRW0BLUxhbW1YVUhBdXEFVBxVEURJAWVlZH0RIUBEJElwKQhAGQxVcQVhA8tFGUFAYUlhaVhsXeURXBwITUFIXR11HTV0YVlsXB0JV+ogOGQJQXhgpWF8NGEcLXFpDFVcSDQsZDEMWVkMZUVAQElUVW1haFltUF1leTQUR8JVSF2dVRl5TFg==",
      "preguntas": [
        {
          "id": "b-prestamo",
          "texto": "¿Cómo llegó el Ojo al museo?",
          "respuesta": "dc1:aFhGFkJbVhdSWBYXUhhXUhFYVRlcV0NWRaCaURlvAEsBVB4YAlcQe1dUFlf20gkeEgAMQwcKBVBUVFBDB0gUcFQXUENS9oZYEUkWBkBMUlVQFFhYElJYTlZDR1FLWEFcChVEXRRTXlgUExdRW0MFXVAXAxFDDQ8ZVVhAERETFFtXWlZEUhkXVF5XRBZdWRNEXlhVGVFXWVNeAF7zildbGRdAVxgVVxBSQEMRS1wGFFMSBg0NQxATGUNWQVBCAlEVV0VbGhdGXlkRWgUOUVFSRRFRWBlXVlBWRBdSEFhXFVABQF0WRnxFWVtSRFBQQw5TUAkDBwxDBVZfGfGYDkg="
        },
        {
          "id": "b-llave",
          "texto": "¿Dónde estaba su llave durante el apagón?",
          "respuesta": "dc1:fVkUU1sVVVhdSg0PX1cTXl9AUUtbV0UXUwZbEF9LAFpKFVZXCFZVF1RSRFRZBhDxm0UWDAcCRlVQGVxeAQ5RGxhnQVNTUFkXQUsBBEZWR1ZDFFUZXlkXR1gPXlP6lAADRlhXGBRXV15LRxZZRwwIElcJQhMRCgtcQ1YeERIJRhVRWUdfREFSWVJQBUNe+55WHw=="
        },
        {
          "id": "b-seguro",
          "texto": "¿Cuánto cobraría el museo del seguro?",
          "respuesta": "dc1:dFgUVFZGQ1ZfTQFDQ1lBVhFEVV5TShdbVhAXVFxMBVgVGRJLpZ8LF1RcREv2ykZLXUUbQw8MRkpQW1dfQhNHQV1TUUUZFWdSQ1ZEF1JVUV7ynVoZQfueF0YWUhBXUA9epY9cGAtHQ1JXExdXVxEDRFsTB0MCQxdMVBleVEIUW1ddWRRaWBVGQlQZCAYTSEFSQkBVVxwYeVZTClIQT1YNTwNH8ZUHElEXSEEBS0ECFFxdFkINCkMTVxFJW0IDFlVFXVtRRRk="
        },
        {
          "id": "b-merce",
          "texto": "¿Confía en la señorita Puig?",
          "respuesta": "dc1:e1hZWRdQWRdcUEQTQVdDXlAUXFBYWRkXZxFSQFhLoopGWVMYFVNcVhQTAVQVAAdG8cQODAQMShldWBJHCxVdQVkXUFNbFVBYU1wWDVJcXEUfFGdQXBhSW1sCF15WGQlYBEfxlQcSVU9IXBdRVgqlgVxLQjAKQwtcEV1bUgcIFERNUhReVhVfUlJRC0NSVFRYEVlVVV0UF1tSEBdAXF0IS6WcEkgUR1VVWUBIGExDBEdXCwMQTQ=="
        },
        {
          "id": "b-jordi",
          "texto": "¿Qué sabe del electricista?",
          "respuesta": "dc1:aUJRFlJGF0JfGQYWVlYTVFldV1YSW1hZFwdSRV1YEhVGWV0YBUdRWxhWChhQEBJXEgcDEREKCRlfVhJUEUZaWkxeV19WGxd7UBkNDUBMUltQV136gVYXWUIGQVEZXBIZFUBLWV0SVVsYUBFZUREJHhIRAw4BCqWQXxcSchcHWlFXF0JZW0Ne9IIZCAITVEZNEUdBW1v7hBdTBlsQSvrSTQdbXRgVR1RWVlcLGExDAltYCkKhyBoHGVRKRvLDpI8VW1hZWRdGXhdZTAYKVkpSF1BEVV5TXFgXQg0XWVdaBFcCXF0W"
        },
        {
          "id": "b-discurso",
          "texto": "¿Qué decía cuando se fue la luz?",
          "respuesta": "dc1:+pzWtpEVThdUShACE1JcTlAYFEhHXRdZWENSQxlXFFwVQUBZShJeWEsTDFdbEQcSX6bDEEMSE1wRSlsRDgkUU01SRlf1jhkXfFxEEkZdV/SYFFdWXBhbVhcFRVFKXEFcCBVeWUZQX1RZEx0YVEMJQVEQEAIQTUZ4XV5HWAcIFEdR9IcNF1lCUlZWRAZfGFRFWEBbAhJUQlJQDBdcVkpBTRRQQRgLW15CTFwXGFigx0ESCQMRBAwVGVVcElwLRkJcXFYa"
        },
        {
          "id": "b-kessel",
          "texto": "¿Qué relación tiene con la baronesa?",
          "respuesta": "dc1:dFYUUlIVQlkRVBEQVlcTR15WRlwSW1hZFxZZURlUBFoDW1NLRkNFUhhCEVFQEQMSUQoPExECFBlUVxJHBxwUUV0XUFlZVEUZEWoBQ1xeVllVXfeKEltCVlkHWBBVWEFXCUFTSqWfURdWXERbWg0SV0ERodBPQx8ZR1BcXkIPU0BZWxRXF1lWF1ZYCAIfGFBYXxRHTBJVUl1YERdATFUSXBRUHBguUxBHSlYDTVsXB1ZdRRYRBhBGT1RaV0JCFV0VVFYUXFhMVhdCXEQVVlZXUkP3mVgSWV9YRQIZEHxKQU0DW1NCShJeWBhWFxhZAgJAXQsDTQ=="
        },
        {
          "id": "b-caja",
          "texto": "¿Qué guarda el museo en la caja de conservación?",
          "respuesta": "dc1:fVsUU0RBQlRZXEQHVlQTeFtbGBleWRdF9MpHXFBaABkCUF4YBVNE9JlfC19aT0ZeXRZCBBYCCE1UShJVB0ZYVBhEUfWGWkVeRVhEM0ZRVBdIFFhWQRhTWFQWWlVXTQ5KRlFXVEZCQvSRQBBZWAxIEn4EQgAMDgRQX1hRWKHVWhVUVhRQXl/0hBFcCA9SGFZZEVFaXEBXDBdODBdcWBkASRNbRvvPElVZGFYIGEcGAVtBERAMQwcDGVJWXEIHFEJUW173hVkVR1hDSBEGE1kTWlgUUV1TXBdCWQwXX1VPCF0HFVpZFUZRF1RcFxhbDAtQQAARQwcGRkpEShJZCwxbRhY="
        },
        {
          "id": "b-notaria",
          "texto": "¿Ha vuelto a escribir a la notaría Varga?",
          "respuesta": "dc1:fVsUW15GWlgRXafOUhhXUl0URlZQVxkXbkNWSVxLTxklWlxMA0FEVlYTB1dbQwJdQUUOoM4NA1hCGUsRDgdXR10XUFMXWlRfXhkUFl1MUkQLFEVMVxhZWBcOUhBYSRRLAxkSSRNXEFtZEw5XTAJG8JkTDQ8VBhT6kBlTERETFEZRQ11Z9Y4ZF3JWCQwTS1oXXVsUSkdIXlJFAlkeGXEAQEZSV1YSVxBGTVZES1QBAxJWAA8CEAoHXV4VEkIHpYVaSl5AV0QZF04RQAtDQFdKF0RaFFFdVVVFUkNGRVwZElgEUBJVE0sQR1dQCxY=",
          "desbloqueadoPor": "p10"
        },
        {
          "id": "b-asteria",
          "texto": "¿Por qué nos llamó a nosotras?",
          "respuesta": "dc1:aFhGR0JQF1tU+slDVlYTUl0URFxAUfSEUwpUXxlVDhkCUBJ5FUZVRVFSSBhZAkZCWwAGEQJDBVZfGV5QQgNHQUpSWFpWFVNSEVYHC1wYQ0JfQFVKHhhOF0cGWUP6kEFIE1ASXAlBEFNdRwFbQQoQV0FFExYGQxRcQkxXXRQDWhVNWRRVVkZYF1BKp84TXV1DVFpQXED7mlZZQ0JeWBkLVh9UElsJXBBYTEEFGEcMFVMSAQdDDAAOVhFJR18WB0cbGG4URlhHRkJUGQgCE0hcW1hX95RTGFVCRABWEExXABkLVFxXRksQTlcTB0pQDEZDRwBCCwIaRkhEXBJTFxVXVEoXQVhWFVRWU1weAh0="
        }
      ]
    }
  ],
  "documentos": [
    {
      "id": "d01",
      "tipo": "telegrama",
      "titulo": "Telegrama del Museo Balmes",
      "fecha": "19 de junio de 1927",
      "autor": "E. Balmes",
      "texto": "AGENCIA ARKANA MADRID\nROBADO OJO DEL HORIZONTE DURANTE APAGON GALA STOP\nNADIE SALIO DEL EDIFICIO STOP JOYA NO APARECE\nPOLICIA DESCONCERTADA STOP RUEGO VENGAN\nBALMES"
    },
    {
      "id": "d02",
      "tipo": "recorte",
      "titulo": "«Robo a oscuras en el Paseo de Gracia»",
      "fecha": "La Vanguardia, 19 de junio de 1927",
      "texto": "BARCELONA. — Un apagón de apenas tres minutos bastó anoche para que desapareciera del Museo Balmes el célebre Ojo del Horizonte. Cuando volvió la luz, la vitrina estaba cerrada con llave y vacía. La policía registró a los 141 presentes sin resultado.\n\n«Ha sido en esos tres minutos», declaró el comisario Aleu. «Alguien con mucha sangre fría y una llave.»"
    },
    {
      "id": "d03",
      "tipo": "informe",
      "titulo": "Ficha del catálogo: el Ojo del Horizonte",
      "autor": "Museo Balmes",
      "texto": "Zafiro estrella de 62 quilates, de Ceilán, engastado en una rosa de los vientos de oro de ocho puntas (garras y cierre renovados por la joyería Roig en enero de 1927; la rosa de oro es antigua y no se ha tocado).\n\nBajo una luz directa, el zafiro muestra una estrella de seis rayos que se mueve con la luz (asterismo). Ninguna imitación de vidrio la reproduce: la réplica del catálogo es un vidrio azul liso.\n\nPréstamo de un coleccionista que desea permanecer anónimo, por mediación de la notaría Varga de Logroño."
    },
    {
      "id": "d04",
      "tipo": "almanaque",
      "titulo": "Programa de la gala",
      "texto": "22:00 · Recepción en el vestíbulo\n22:30 · Apertura de la Sala Oriental\n22:50 · Visita del señor gobernador civil a la Sala Oriental\n23:15 · Orquesta en el salón de baile\n23:30 · Palabras del director\n00:30 · Fin de la velada"
    },
    {
      "id": "d05",
      "tipo": "fotografia",
      "titulo": "Placa 14 de Max Ferrán",
      "visual": "placa-espejo",
      "texto": "La Sala Oriental poco antes del apagón. El reloj de la sala está a espaldas del fotógrafo: solo se ve en el gran espejo."
    },
    {
      "id": "d06",
      "tipo": "informe",
      "titulo": "Cuaderno de placas de Max Ferrán",
      "autor": "M. Ferrán",
      "texto": "Placa 1 ..... 22:15 · vitrina\nPlaca 4 ..... 22:31 · vitrina, apertura de la sala\nPlaca 7 ..... 22:50 · la conservadora abre la vitrina\nPlaca 8 ..... 22:51 · el gobernador ve la joya de cerca\nPlaca 9 ..... 22:54 · vitrina, ya cerrada\nPlaca 11 .... 23:12 · vitrina\nPlaca 14 .... (no anoté la hora) · vitrina\nPlaca 16 .... 23:47 · la policía en la sala"
    },
    {
      "id": "d07",
      "tipo": "fotografia",
      "titulo": "Hoja de contactos de Max Ferrán",
      "visual": "contactos",
      "desbloqueadoPor": "p01",
      "texto": "Copias por contacto de las placas de la vitrina."
    },
    {
      "id": "d08",
      "tipo": "informe",
      "titulo": "Cuadro eléctrico del museo",
      "desbloqueadoPor": "p02",
      "autor": "Instalación de 1926",
      "texto": "Interruptor 1 · vestíbulo y guardarropa\nInterruptor 2 · salón de baile y galería\nInterruptor 3 · cocina y office\nInterruptor 4 · salón de baile, galería, Sala Oriental y escalera principal\nInterruptor 5 · Sala Oriental y despacho del director\nInterruptor 6 · sótano y calderas\n\nEl cuadro está en el sótano. Solo se baja un interruptor cada vez: son de palanca."
    },
    {
      "id": "d09",
      "tipo": "informe",
      "titulo": "Parte del vigilante nocturno",
      "desbloqueadoPor": "p02",
      "autor": "Vigilante P. Martí",
      "texto": "A las 23:40 se apagaron el salón de baile, la galería, la Sala Oriental y la escalera principal. Siguieron con luz el vestíbulo, el guardarropa, la cocina, el sótano y el despacho del director, donde estaba la secretaria.\n\nA las 23:43 volvió la luz sin que nadie avisara de haber tocado nada."
    },
    {
      "id": "d10",
      "tipo": "transcripcion",
      "titulo": "Testigos de las 23:40 · primera parte",
      "desbloqueadoPor": "p03",
      "soloJugador": "A",
      "texto": "Camarero 1: «El director estaba en el escenario, con el discurso a medias.»\n\nCamarero 2: «Ni la baronesa ni el fotógrafo bajaron a la escalera ni al sótano en toda la noche.»\n\nEncargada del guardarropa: «El señor Roig estaba conmigo, recogiendo su abrigo.»"
    },
    {
      "id": "d11",
      "tipo": "transcripcion",
      "titulo": "Testigos de las 23:40 · segunda parte",
      "desbloqueadoPor": "p03",
      "soloJugador": "B",
      "texto": "Violinista de la orquesta: «El fotógrafo estaba donde se veía el escenario: en el salón o en la galería. Lo vi cargar la cámara justo antes del apagón.»\n\nCamarero 3: «La baronesa no estaba en la galería: allí arriba no subió ninguna señora en toda la noche.»\n\nCocinera: «El electricista no pisó ninguna sala con público esa noche.»\n\nPortero: «La señorita Puig ya no estaba en la Sala Oriental a las 23:38, y en el guardarropa tampoco.»\n\nSecretaria: «La señorita Puig no tiene llave del sótano y nunca baja.»\n\nLugares posibles a las 23:40: salón de baile, Sala Oriental, escalera principal, sótano, guardarropa y galería. Cada persona estaba en uno distinto."
    },
    {
      "id": "d12",
      "tipo": "informe",
      "titulo": "Libro de encargos de la joyería Roig",
      "desbloqueadoPor": "p04",
      "autor": "D. Roig",
      "texto": "Fechas y precios en la clave de la casa.\n\nMC·OM·UL · Engaste nuevo, broche del Ojo ......... MCO\nUM·OM·UL · Réplica en vidrio, para el catálogo ... LIO\nUA·OM·UL · Estuche de piel ...................... RIO\nOU·OU·UL · Limpieza y revisión .................. UEO\nMA·OI·UL · Réplica en vidrio (2.ª) .............. MUIO\n          pagada en efectivo; la recoge una señorita del museo"
    },
    {
      "id": "d13",
      "tipo": "informe",
      "titulo": "Facturas de la joyería Roig al museo",
      "desbloqueadoPor": "p04",
      "autor": "Contabilidad del Museo Balmes",
      "texto": "14 de enero de 1927 · Engaste nuevo del broche ......... 140 pts\n21 de enero de 1927 · Réplica para el catálogo .......... 750 pts\n28 de enero de 1927 · Estuche de piel ................... 350 pts\n2 de febrero de 1927 · Limpieza y revisión .............. 260 pts\n\nNo consta ninguna otra factura."
    },
    {
      "id": "d14",
      "tipo": "fotografia",
      "titulo": "Fotogramas del noticiario",
      "visual": "fotogramas",
      "desbloqueadoPor": "p05",
      "texto": "El operador del Noticiario Ibérico siguió dando a la manivela durante el apagón. Estos son los fotogramas de la Sala Oriental al volver la luz."
    },
    {
      "id": "d15",
      "tipo": "recorte",
      "titulo": "«Quién vestía qué en la gala Balmes»",
      "desbloqueadoPor": "p07",
      "fecha": "El Día Gráfico, 19 de junio de 1927",
      "texto": "La baronesa von Kessel, de terciopelo negro, con guantes largos negros y su famosa pulsera de serpiente en la muñeca derecha. La señora de Balmes, de gris perla, guantes blancos y pulsera de perlas. La conservadora, señorita Puig, de azul noche, con los guantes blancos de su oficio y una pulsera de serpiente de oro que fue de su madre. Los caballeros, de frac y guante blanco, sin más joyas que los gemelos."
    },
    {
      "id": "d16",
      "tipo": "informe",
      "titulo": "Libreta de ahorros de Mercè Puig",
      "desbloqueadoPor": "p07",
      "autor": "Caja de Pensiones",
      "texto": "Movimientos de 1927\n\nSaldo anterior ............ 581 pts\n3-I ...... Ingreso ...... 175 pts (haberes)\n1-II ..... Ingreso ...... 175 pts\n1-III .... Ingreso ...... 175 pts\n1-IV ..... Ingreso ...... 175 pts\n2-V ...... Ingreso ...... 175 pts\n17-V ..... Reintegro .... 1.250 pts\n1-VI ..... Ingreso ...... 175 pts\n\nSaldo a 18 de junio: 381 pts."
    },
    {
      "id": "d17",
      "tipo": "carta",
      "titulo": "Nota en la caja de herramientas de Jordi",
      "desbloqueadoPor": "p08",
      "texto": "Encontrada el 20 de junio, doblada dentro de una caja de fusibles.\n\n«LBCIA CPTHL ZCMNB DNITW IIZZZ TV»\n\nY a lápiz, al dorso: «Clave: el apellido de la joya. El lunes, cuando no haya nadie.»"
    },
    {
      "id": "d18",
      "tipo": "almanaque",
      "titulo": "Tabla de Vigenère",
      "visual": "vigenere",
      "desbloqueadoPor": "p08",
      "texto": "Tabla de cifrado que se usa para descifrar mensajes con una palabra clave: cada letra de la clave indica la fila."
    },
    {
      "id": "d19",
      "tipo": "mapa",
      "titulo": "Plano de la planta baja",
      "visual": "plano-museo",
      "desbloqueadoPor": "p03",
      "texto": "En el museo hay cinco leones. Barcelona mira al mar hacia el sudeste: el Paseo de Gracia baja hacia el puerto."
    },
    {
      "id": "d20",
      "tipo": "informe",
      "titulo": "Acta de la Jefatura de Policía",
      "desbloqueadoPor": "p10",
      "autor": "Comisario Aleu",
      "fecha": "21 de junio de 1927",
      "texto": "En la boca del león de la fuente del patio, tras una rejilla de bronce que se desatornilla con una moneda, aparece una bolsita de gamuza con el Ojo del Horizonte. El zafiro muestra su estrella de seis rayos: es el auténtico.\n\nEn el piano del salón de baile, entre las cuerdas graves, aparece una réplica en vidrio azul liso."
    },
    {
      "id": "d21",
      "tipo": "fotografia",
      "titulo": "Reverso del broche",
      "visual": "reverso",
      "desbloqueadoPor": "p10",
      "texto": "Al limpiar el broche, el laboratorio descubre unas letras grabadas en el reverso, de tres en tres, ocultas hasta ahora por el engaste."
    },
    {
      "id": "d22",
      "tipo": "informe",
      "titulo": "Registro de la caja de conservación",
      "desbloqueadoPor": "p05",
      "autor": "Museo Balmes · Sala de conservación",
      "texto": "Caja Fichet de tres ruedas con alarma de retardo, instalada el 10 de enero de 1927 para el préstamo del Ojo. Si la combinación no entra en un minuto, suena el timbre del vigilante.\n\nCombinación (anotada por el director a petición de la conservadora): «las tres cifras de la ficha del Ojo, en el orden en que las da el catálogo».\n\nDepósito declarado: estuche de piel (Roig, 28-I); réplica en vidrio del catálogo (Roig, 21-I), etiquetada; guantes de algodón; expediente del préstamo (notaría Varga).\n\nÚltima apertura anotada: 2 de febrero, limpieza y revisión."
    }
  ],
  "pruebas": [
    {
      "id": "p01",
      "fase": "I · Las placas",
      "titulo": "El reloj del espejo",
      "tipo": "hora",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p14",
      "descripcion": "Max Ferrán no anotó la hora de la placa 14. Pero el reloj de la sala sale en el espejo, y un espejo lo da todo al revés.",
      "instrucciones": "¿A qué hora se hizo la placa 14?",
      "documentos": [
        "d05",
        "d06"
      ],
      "huellasRespuesta": [
        "188d83fc8896cb1f8182a99cfbec13c11fdcc8ec68ea647fad5d21160722ead1"
      ],
      "pistas": [
        "dc1:fVkUQ1kVUkRBXA4MHxhfVhFdTkhHUVJFUwIXSRlVABkCUEBdBVpRF0tWRFtUDgRbUwtYQxcCC1tY+ptfQgpVRhhWU0NdVEQZ",
        "dc1:dFYUV1BAXVYRWgsRR1kTUkJA95gSTVkXRwxUXxlYQVUHFVtCF0dZUkpXBRhRBkZeUxZCBwwAAxURV10RA0ZYVBhTUURSVl9WHw==",
        "dc1:dFYUV1BAXVYRVQURVFkfF0NRUlVXUlZTVk8XQ1z60FgKVBJUCUEQBQwTCVFbFhJdQV9CBwZDEFxDXVNVQhVR9olWWFcXWVhEEQpSTRN9QBdVURRXXVtfUg1DU1VKSRT6z0YSXAMSXFZLE1YLD1NWHA=="
      ],
      "solucionDirector": "dc1:alJSWlJfWA0RVQUQE1lUQltVRxlCWUVSVAZZEFRYE1oHRxJUB0EQBgoJVgwOQwJXQQ0HAAsMRlxdGVdCEgNeWhQXWVdFVlZZEVUFEBMJAg0CAhgZV0sXU1IAXkIVGQ1YFRUAC1wBBhkYcBFZQREJEl8MDBYXDBUZUFdGVBFGUFBUF1VGVlL0hF8XRDoTXV0XXVUUSV5ZVFYXBlsQQ1gHUBRaElYJEl1CXUAQSlRDA0FGFwcPDwJI",
      "exito": "dc1:dFZHFgUGDQQHFUQARllHRV4UWVBcTUNYRENWXk1cEhkCUF4YB0JRUPuAChYVLg9AUwFCAQoGCBlUVRJLAwBdR1cXUFMXWVYXQVUFAFICE1leFFZLW1RbVhcAWF1WGQVQBVASXQoSU1ZM8MVUWgQJHBIjBxERoMdXEVZBEQYDXlQYW1UWX1pdVhFdAUNQV11DUFdAVkEYU1IXF1hUWBkNWEZbXVsOVx4=",
      "escena": [
        {
          "texto": "dc1:fVsUWlZXWEVQTQsRWlcTU1QUeVhKGHFSRRH0kVcZCUwDWVcYBxJYXkhcF01ZBQ9GXUUbQwJDElhTWFFeTEZ4VEsXUF9SVl5E8pANEBNIX1ZSVUcZVl0XW1ZDWV9aUQQZBUBXVAFTXhdcVkRNWwJGUUcAEAcCQwVWXFYSQw0WVRVMUlpSXlFWGRH7zy9SGAIDEVpbGUZRUllSQ19fS1ijgkoVVlEFVxwX+pgUXUcMRkdBEQcHBhBGQFAZXlBCFVVXXVkaFntZ9J5HXAoQVhhWREVb9oIc",
          "visual": "placa-espejo"
        },
        {
          "texto": "dc1:bVlVFl9aXVYRXQFDUFddQ1BXQFZBAhdDWAdWQxlVAEpGRV5ZBVNDF1xWRFRUQxBbRhcLDQJPRlxfGVRYDgcYFVxSWBZDVFpW8ogLQ1ddE0JfFEdcXlRYGRcgX1lITAgZClQSSAlcVRdaUg5XFQ8HEl6mww4TAhRYHw==",
          "visual": "contactos"
        },
        {
          "texto": "dc1:a1haFkNaU1ZCGQ0ERllfUkLWtJ8S+ohYFw1YDw==",
          "quien": "chiqui"
        }
      ]
    },
    {
      "id": "p14",
      "fase": "I · Las placas",
      "titulo": "Dos placas, una sala",
      "tipo": "diferencias",
      "obligatoria": false,
      "puntuacion": 60,
      "segundos": 60,
      "siguientePrueba": "p02",
      "descripcion": "Ferrán jura que entre la placa 11 y la placa 14 nadie se movió en la Sala Oriental. Chiqui pone las dos copias bajo la lámpara, una al lado de la otra. El magnesio del laboratorio solo aguanta encendido un rato.",
      "instrucciones": "Pulsad en cualquiera de las dos placas cada cosa que cambie de una a otra. Son cinco.",
      "documentos": [
        "d05",
        "d06"
      ],
      "config": "dc1:QxVCX0RAVltwG15BQ1RSVFAZW1dRXRUbFRVeQ0xYDXtEDxBIClNTVhVWF0hQCQkQHkcSFg0XCUoTA2lKQB4WDw0BBBoVTBUNAAFUTxFKEQ0EBEkVSRpPFQ1XAhwbQEMDUgUKFERAEg0MBhkUTkEeEAhRVVNPQR8bCwoBAU5ERhcCAwFLG04VTxMDU1AGFBFOEw4ACgIUFUUVWQMFRBUaGx4XCA1fBxwVQRFeDQZUShBAR1hUUx47RA==",
      "pistas": [
        "dc1:dV5GV1MVR0VYVAERXBhfWEIUVlZAXFJEDUNbURleBFcSUBJcA1hRF1tcF1lGQwNcEgkNEEMBCUtVXEEfQj8UWVcXRUNSFURSEUsBBV9dWVYRUVoZV1QXUkQTUlpWFw==",
        "dc1:fVsURFJZWF0RXBdDX1cT9ItaXVpdGEZCUkNEVV5ME1ZGXVMYBVNdVVFSAFcbQyJXQRUXoMoQRlRYS1NVQgNYFV1ERFNdWg0XX1ZEEVZeX1JbVRRVXRhaXkQOWBBcV0FVB0YSXAlBHg==",
        "dc1:e15aVVgVVFZcWw0MQAITW1AUXFZAWRsXWwwXVUpaE1ASWhJZBFNaWBQTAFdGQwVdQQQRQxIWAxlQVVVECwNaFVxSXvWEFU4XUFUDFlpdXRdAQVEZQV0XVkQMWvOKGQBVRlBBSANYXxk="
      ],
      "exito": "dc1:e15aVVgVVFZcWw0MQBhWWRFCUVBcTF5UQgJDQlYZDFAIQEZXFQgQQlZSREtcDwpTHkUXDUMJB0tD+oFfTkZBW1kXUFdaVBdSXxkBDxNdQEdUXlvbsp4XThcGWxBbSw5aDlAeGA9W855WRw1bWkMDXBIJAxBDBwlKEUleUAEHRxsYe1sWRkBSF11cRBNSS/CEEVVYGVBKWFRfBhsQVVxBSQdG8YtGU15DXUBEXFBDClNBRQ0NAAZGQBFdXVIHSBR9WU4UR0JQF1pYSwURE1RSRBFEWFhRWUQXVg1DVUtQDksDRhw="
    },
    {
      "id": "p02",
      "fase": "I · Las placas",
      "titulo": "La estrella que se apaga",
      "tipo": "hotspot",
      "contenidoVisual": "contactos",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p03",
      "descripcion": "El zafiro auténtico muestra una estrella de seis rayos bajo el magnesio. El vidrio, no.",
      "instrucciones": "Pulsad la primera placa en que el broche de la vitrina ya no es el auténtico.",
      "documentos": [
        "d07",
        "d03",
        "d06"
      ],
      "huellasRespuesta": [
        "424203f6e0eb7fe2cee21652a1db2b88e6f21a74df04fe0301193ff0dddefeb0"
      ],
      "pistas": [
        "dc1:ekJHVVZRF1tQGQEQR0pWW11VFF1XGERSXhAXQlhADkpGUFwYA14QVF1dEEpaQwJXEgYDBwJDBEteWlpUTA==",
        "dc1:cFZHQlYVW1YRSQgCUFkTDxFYVRlXS0NFUg9bURlcEk2llBwYpI1hQvuaREhUEKWBEgAMFxEGRlVQGQoRG0ZYVBgOCw==",
        "dc1:aFtVVVYVDxsRC1ZZBgkJF11VFE9bTEVeWQIXUVtQBEsSVBJIB0BRF11fRF9aAQNAXAQGDBFNRmldWFFQQl8YFQoFDgMDDxdOUBkHBkFKUlNQGg=="
      ],
      "solucionDirector": "dc1:dFYUU0RBRVJdVQVDV11AVkFVRlxRXRdSWUNbURlJDVgFVBIBRhoCBQIGUBEbQypTEg8NGgJDFVwRWlNcAA/3hhhHW0QXQFlWEUunykNUWlRQFFFXRkpSF1sCRBALC1sMVxVLGApTQxcKAV4NAU9GUUcEDAcMQwpYEVpdXxEDRkNZU1tEVhVUUkNLp9ATVFIXR11AS1tWVhdTBkRATPrISkZRVxgDXENS+4IFSlkCRlNeRQUMAQYUV1BdXUNMRnFZGFZEV1D2hFkRXxEGE01dVhFEVVdGWVtbVlkXXFgZC1YfVBJBBxJeWBhWF0xUAQcc",
      "exito": "dc1:aFtVVVYVDhsRWEQPUksTBQMOAQ0IGEReWUNSQ01LBFUKVBwYI14QeFJcREtQQwVTXwcLoNBDFlZDGUdfA0ZG9pFHWF9UVBdWXRkHBkFKUkURWFUZRFFDRV4NVhBNSwBKRllTGBBbQ15MUkRcUA9GVV0HBxENAgJWQxUSUgMVXRVNWVUWX1pFVhFYChdWSxNTVFgUWEJZUPSEDRkQfFcVVghWV0tKEvKISFIWWRUSE/GbRQMTAgQHSxFVUxEOE04KGGdGX1pQRVgdGabcUPuAWl4UR1wSWUdWUKCEDw=="
    },
    {
      "id": "p03",
      "fase": "II · El apagón",
      "titulo": "La palanca",
      "tipo": "codigo",
      "longitud": 1,
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p04",
      "descripcion": "No se fundió nada: alguien bajó una palanca del cuadro.",
      "instrucciones": "¿Qué interruptor se bajó a las 23:40?",
      "documentos": [
        "d08",
        "d09"
      ],
      "huellasRespuesta": [
        "acaa01d4b4c2befa4d8a96967e67eeeaf7b986f84696f7521d1d29d63ceaa042"
      ],
      "pistas": [
        "dc1:e1hZRlZHVlMRVQtDQk1WF0JRFEhHXVP0hENWEFZKAkwUVEEYBV1eF1RcRElABkZTXgwPBg0XBxlSWFZQQg9aQV1FRkNHQVhFHw==",
        "dc1:a1hYWRdGUhdTWA4CE01dWBFXVV1TGEFSTU0XdVUZBVwVRVNbDl0QU11fRFxcEQNRRgoQQxAKAUxY+oERAQlaFVRCTgwXUERYEV0BEFBZQUNQFEFXXRY=",
        "dc1:a1hYWRdAWRdYVxAGQUpGR0VbRhlTSFZQVkNbURlcEloHWVdKBxJARVFdB1FFAgoc"
      ],
      "solucionDirector": "dc1:cVlAU0VHQkdFVhZDBwITRFBY94pcFBdQVg9SQvqUABVGZlNUBxJ/RVFWCkxUD0ZLEgARAAIPA0tQFRJUGgdXQVlaUVhDUBdbXhkVFlYYQFIRVURYVfuEGRcmWxALGQ9WRlRCWQFTEFtZEzdZWQJGfUAMBw0XAgoZX1ASXQNGUUZbVlhTRVQMF1RVRFYTWUNWVlVG+p9ZF1JbQ1NVSkkAWg5aHhgXR1UXS1oDTVyg1RJRCgxDDxYcFw==",
      "exito": "dc1:fVsUX1lBUkVDTBQXXEoTAx8UcVUSW0JWUxFYEFxKFfrHFVdWRldcF0vw10xUDQkcEikNEEMAB1RQS1dDDRUUTBhSWBZHUEVEXlcFDxNLUlVUWhRd8YtZU1JDUkNNWANYRlZTXAcSRVlXEwUYWQIVEgBWWFdTT0ZJVEtdEQEHUFQYQlpZF1FSF0dWFwxHSlxEEUdbVV0YQ15SDVIQVVhBVA9BU1xGVlUXVFwXGEEGFUZbCA0NCgwVFw=="
    },
    {
      "id": "p04",
      "fase": "II · El apagón",
      "titulo": "Seis personas, seis sitios",
      "tipo": "dual",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p05",
      "descripcion": "A las 23:40, seis sospechosos estaban en seis sitios distintos. Cada una tiene la mitad de los testimonios: Gismera pone orden en los nombres y Chiqui recorre el plano. Sin juntar lo que sabe cada una, no se sale de aquí.",
      "instrucciones": "Resolved las dos partes. Cada parte necesita los testimonios de las dos.",
      "documentos": [
        "d10",
        "d11"
      ],
      "pistas": [
        "dc1:fVpEU01UUxdBVhZDX1dAF0BBURlXS0P0lg0XVlBTDkpcFVdURlZZRV1QEFdHQx8SVwlCCQwaA0teFw==",
        "dc1:fVsUUFhB9IRWSwUFXBhAWF1bFEldXPSaVkNSQ01YExkDWxJUBxJXVlRWFvuYAkgSfgRCAQIRCVdUSlMdQgNaQVdZV1NEGRdSXxkIAhNrUltQFHtLW11ZQ1YPGQ==",
        "dc1:eRd5U0VW9J8RSgsPXBhfUhFFQVxWWRdCWUNEWU1QDhVGTBJWCRJVRBhWCBhGoNVGUwsNWUMBE0pSWFYRERMUWV30h1gXUFkXVFVEE19ZXVgf"
      ],
      "solucionDirector": "dc1:elZYW1JGDRdCWAiggFYdF2NbXV4IGFBCVhFTUUtLDkkHGxJ+A0BC9JldXhhSAgpXQKbPAk1DLVxCSlddWEZnVFRWFHlFXFJZRVgITRN1VkVS95wDEl1EVFYPUkJYGRFLD1tRURZTXBcQUkRcWhBGQlMWDRBDBwMZXVgSYgMKVRV3RV1TWUFWWxgXRClcSldeCxRH+oFMVllYTxdaTFcVVkZUXhgFR1FTSlxK",
      "exito": "dc1:clhGUl4VYVZdVUhDVlQTUl1RV01AUVReRBdWHBlcDxkDWRJLpYFEVlZcSBhfFghGXUUDD0MAE1hVS10fQj8UeF1FV/WfFWdCWF5EDVwYVkRFVVZYEl1ZF1IPF0NYVaKKCBkSWwlfXxdcWg5XGUMVW1wKQgYNQwpYEVxBUgMKUUdZGxRXF1FYRBFJBRBcSxNTVBRYWBJrVltWQ3hCUFwPTQdZHBgqUxBF+5oUVFwABxJBBA4KoNBGXVQZU10FpY5bGERdQl5aDRdUVUQJXEFWRV4UZlZbXxdYRENSXkpcoogHFUFNRl5ZVUpcSg==",
      "partes": {
        "gismera": {
          "titulo": "Junto al cuadro",
          "tipo": "eleccion",
          "instrucciones": "¿Quién estaba en el sótano, junto al cuadro eléctrico, a las 23:40?",
          "documentos": [
            "d10",
            "d11",
            "d08"
          ],
          "opciones": [
            {
              "id": "balmes",
              "texto": "Enric Balmes"
            },
            {
              "id": "merce",
              "texto": "Mercè Puig"
            },
            {
              "id": "jordi",
              "texto": "Jordi Vall"
            },
            {
              "id": "kessel",
              "texto": "Isolda von Kessel"
            },
            {
              "id": "ferran",
              "texto": "Max Ferrán"
            },
            {
              "id": "roig",
              "texto": "Damià Roig"
            }
          ],
          "huellasRespuesta": [
            "16031df25842269152a796a3086431c0fbd2ee076f45262e9e5f1ebb677546f8"
          ]
        },
        "chiqui": {
          "titulo": "A dos pasos",
          "tipo": "hotspot",
          "instrucciones": "Mercè Puig dice que estaba en el salón. Pulsad en el plano el león más cercano al sitio donde estaba de verdad a las 23:40.",
          "documentos": [
            "d10",
            "d11",
            "d19"
          ],
          "contenidoVisual": "plano-museo",
          "huellasRespuesta": [
            "0ae098edf5a5fb426ed3c30916aba54a033de823b313fd0b2462cf19b9832f1d"
          ]
        }
      },
      "escena": [
        {
          "texto": "dc1:fVsUQF5SXltQVxAGE3VSRUX3mRleWUQXWw9SRlgZEVYUFV5ZRldDVFlfAUpUQwJXEhYHERUKBVBeFxJ0DkZH9otDVVhYFV9CVFUBQ1IYUFZDVveKXBhOF1ZDVlNcUBVcRlFXGAvxkUZNWgpZG0MjXhIGFwIHEQkZVVwSAFtUAhVXVEFGVhVaUlVQBUNDWUFSVQ4USldRRBdHAltRV1oASkZRVxgWXUJUXV8FVlRDCFdVFwNPQw8HGVJMU0MWBxRWV1kUQ1lUF1pQSwcCE1xWF1VRUFZBGEVSVApSXk1cEhkDWxJdChJAWFRFCxY=",
          "imagen": "img-museo"
        },
        {
          "texto": "dc1:fFJHUlIVVkZE+slDXVcTRFQUW0BXGFJbFxBWXPqKDxdGZEdRA1wQVVlZp4sVBhVTEhUDDwINBVgRSlNToctVFVRWFF5YR1YXVEEFAEdZHxdeFFVVVU1eUllDRFUZVQAZAlxYV0g=",
          "quien": "gismera"
        },
        {
          "texto": "dc1:eUVGX1VUGxdUV0QPUhhWRFJVWFxAWRdHRQpZU1BJAFVKFVdURl5V9ItdRFxQQwvxkxcPDA9DFVBWTFcRDw9GVFZTWxZWWRdEREsLBkBMVhkRcFFKVl0XREJDR1VYVwAZFVASTgMSXFYYQxFdRxcHElYAQg8CQzVYXVgSfhAPUVtMVlgMF1FYVFQZFAJAV0AZ",
          "visual": "plano-museo"
        },
        {
          "texto": "dc1:fFhXUxdFVkReSkQCE1dAVERGVUoeGFRYWUNCXlgZDVUHQ1cYA1wQW1kTCVlbDEgSawpCDwwQRl1QS/GcA0ZRWxhEUV9EGw==",
          "quien": "chiqui"
        }
      ]
    },
    {
      "id": "p05",
      "fase": "III · La réplica",
      "titulo": "La clave del joyero",
      "tipo": "codigo",
      "longitud": 4,
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p06",
      "descripcion": "Los joyeros anotan los precios con una palabra de diez letras distintas, una por cifra. Las facturas del museo dan los precios en claro.",
      "instrucciones": "¿Cuántas pesetas costó la segunda réplica?",
      "documentos": [
        "d12",
        "d13"
      ],
      "huellasRespuesta": [
        "9fecbeb2822278586695096e9ac932061206c362cb211fa9805a5e67dc283777"
      ],
      "pistas": [
        "dc1:e1hZRlZHVlMRWgUHUhhDRVRXXVYSW15RRQJTXxlaDldGRkcYAFNTQ01BBQIVUlICEgARQy4gKRc=",
        "dc1:e1ZQVxdZUkNDWEQGQBhAXlRZREtXGFtWFw5eQ1RYQVoPU0BZXBJ9F11ARAkZQyUSVxZCV09DKRlUShIBTA==",
        "dc1:dFYUYxdMF1tQGS1DQFlfUl8UUFwSCgEHFxoXVFwZVgxWGw=="
      ],
      "solucionDirector": "dc1:e1tVQFIVU1IRVQVDUFlAVgsUeWxge35yeyJwfxkRUAtVAQcOUQoJBxEdRHRUQxVXVRAMBwJDFPqYSV5YAQcYFXVifXkNFQYZAwxUQ0NdQFJFVUcVEkhWUFYHVkMZXA8ZA1NXWxJbRlgUExdRW0MAU1ERFxECQwdVEVRHQgcJGg==",
      "exito": "dc1:dV5YFlNaRFRYXAoXUksTVFhaV0xXVkNWFxNSQ1xNAEpKFVdWRldWUltHDU5aT0ZBWwtCBQIAEkxDWBwRLgcUR11UW1Fe9oQX85IRDVIYQFLyhVtLW0xWF1MGWxBUTBJcCfeJFkZ/WVJWRxZZRk9GV15FDRMGEQddXksSVQcKFFtXQ11VXlRFXl4ZFgZFXV9WEUdBGUJdW/SaAEJcWBc="
    },
    {
      "id": "p06",
      "fase": "III · La réplica",
      "titulo": "El día de la recogida",
      "tipo": "texto",
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p16",
      "descripcion": "En el libro, las fechas también van en clave: día, mes y año.",
      "instrucciones": "¿Qué día se recogió la segunda réplica?",
      "documentos": [
        "d12",
        "d13"
      ],
      "huellasRespuesta": [
        "85ecf7f28446e36a612bdafeaaa116d5a77eca374d3865ae9c16682a8a17aef7",
        "c85d288b182813b706e738c81f1fe970804aa45bb2aa6625bb631a9f9ae05087",
        "85e60de0ea147ca20102c28874dfd18e5ce54cd7413b54582aa403d1cf483621",
        "3f768277f47c9839600a59fdc86923a577d4fe714c4e93c03852e23eab347315",
        "7026f3e9565c80fcefefb86f2a0afd667bfdb95bbb574b9532e46da951adae4c",
        "211ba55777913fb29cc969eb9371fdda21e09fc0cfebc800de2b704ae0ecb2f7",
        "560e1a3faa3fc97b74c604c40a905cebd7416cf5b04145e2b63e62b04589e4cd",
        "1e38c92f8e29839df1201ed4d78b0414a72ea90ff215d438baf948196ee4481e",
        "3b5570403d31e8634e6658e0e8c19cf1301475eed059285433205f45544efd58",
        "9569d3a7b0f6ff3ec58f639eae37d24ee466a66710baec224f9eeed04435c668",
        "7e0af42c5d225bab6c84d273acbf6ea145936e999ae595942eb0aed751a1185e",
        "b93cccece5d9a7e271139265b4d50634c72d9a15d520bbe4d56687d611433961",
        "e3679476ccaa60d1fbc84c61732ddf2f507a454b1f352a080934e04236a04066",
        "85edea3dd3ba24a13694e8e7ed1352beb8575505d4a381d6e0fcc42a2fb53589"
      ],
      "pistas": [
        "dc1:dFZHFlFQVF9QSkQVUlYTU/KZVfuFVVJE9dRW84hWTRkFWlwYClNDF1VaF1VUEEZeVxEQAhBDF0xUGV5eEUZER11UXVlEGw==",
        "dc1:dFZHFlFUVENESwUQE1xWF1RaUUtdGFhEFwdWXhlVABkrGRJUBxJzGxhfBRhgQx8SXgRCIllDVw0RXEERLyUUTBgFDBZSRhdicBc=",
        "dc1:fVsUV/SEWBdUSkQ2fxYTcl0UWVxBGFlYFwZEEFxXBEsJGxJ0A1dUF11fRFz2zgcSUQoMQw8CRngdGUNEB0ZCVFRSFFlUXVgZ"
      ],
      "solucionDirector": "dc1:dXb2gXh89YBkdUReEwkL9YYEAfuFCgANFwZbEAgBQV0DFV9ZH10QU10TVQEHVEg=",
      "exito": "dc1:fVsUBw8VU1IRVAUaXBhXUhEFDQsFFBdCWUNaVUoZC0wVQV0YB1xEUksTAF0VDwcSVQQOAk1DN0xYXFwRDgcUUFZUVURQ9oQXRUwSDBNNXRdcUUcZQllFVhcGWUNYQABLSA=="
    },
    {
      "id": "p16",
      "fase": "III · La réplica",
      "titulo": "La caja de conservación",
      "tipo": "cerradura",
      "obligatoria": false,
      "puntuacion": 80,
      "segundos": 60,
      "siguientePrueba": "p07",
      "descripcion": "El registro dice que la réplica del catálogo duerme en la caja de conservación desde febrero. Si sigue ahí, la que ocupó la vitrina fue la segunda, la pagada en efectivo. La caja tiene alarma de retardo: si la combinación tarda, suena el timbre del vigilante.",
      "instrucciones": "Girad las tres ruedas hasta la combinación de la caja y abridla. El registro dice de dónde salen las cifras.",
      "documentos": [
        "d22",
        "d03"
      ],
      "config": "dc1:QxVGQ1JRVkQTAz84EQoFFR0WAAEQFBUBBUEbEg4IQxVEDQcaShAJBxpuSGMXV0QeEFBAT0FVRBUTARAdQFcEFxQVBQQVaBtsEwpGTxEMERsTARYVEA4VGxVUFRwbAUNkO0g=",
      "huellasRespuesta": [
        "819f18e1bd89ea884a4a6c3e895c8b7ce066181308ce50613f8323500765a862"
      ],
      "pistas": [
        "dc1:bEVRRRdHQlJVWBdPE0xBUkIUV1BUSlZEFwdSEFVYQV8PVlpZRlZVWxhQBUz2wgpdVQpMQy0MRlVQShJVB0ZYVEsXUldUQUJFUEpK",
        "dc1:aUJdWlZBUkQdGRQWXUxSRB0URlhLV0QZFyZZEFxKBBkJR1ZdCB4QRk1WRF1GQwNeEgEHQw8CRl9YWlpQTA==",
        "dc1:a1JHU1lBVhdIGQAMQBhCQlhYVU1XSxkXYg1WEEtWElhGUVcYCVFYWBhDEVZBAhUcEikNQxcGFFpUS10RDgkUUVkXWFcXUERDQ1wID1IW"
      ],
      "exito": "dc1:dFYURkJQRUNQGQcGV10dF3VRWk1AVxsXUg0XQ0wZCUwDVl0YAlcQQ11BB1FaEwNeXUlCDwJDFPqYSV5YAQcUUV1bFFVWQfSWXVYDDBNbXFkRR0EZV0xeRkIGQ1EZXQQZClQSWwdBURdqXA1fD0MIU1YMB0MPAkZRUBlGXgEHUFoYU1FFU1AXUVRbFgZBVx0XfVUUSEddF1JEF1ZSWBkEV0ZZUxgQW0RFUV0FGFQPRkRdCRQGEUMKWBFVR0tCA0ZUGFtVFlhBRVYdGQgCE1xWF11VRxlfUVsXUwxEU1BcD00HRhJbD1xTQl1dEFkVEwNBVxEDEE0=",
      "escena": [
        {
          "texto": "dc1:dFYURVZZVhdVXEQAXFZAUkNCVVpb+4RZFwZEEExXQVoTVEBMCRJVRExBAVtdDEZRXQtCFg0CRlRUSlMRBgMUWPuWRltYWRsXRFcFQ1/7klpBVUZYElxSF1URVkpWGRgZE1tTGAVTWlYYdQ1bXQYSEkQAEAcGQwNUQVZGQwMCVRVdWRRaVhVHVkNcAE0TfV8XQ1FTUEFMRVgXAEJVVV4AGQJQEk0IElNbWUULFBUCBFtXFxYMQxMJSxFVUxESpZVSUVlVFlNQF1JfXBYMHQ==",
          "imagen": "img-oriental"
        },
        {
          "texto": "dc1:a1JHU1lBVhdIGQAMQBQTWFJcWxUSS1JeRE0XdVcZBFVGWkBcA1wQU10TCFkVBQ9RWgRMQzpDFVBfGUJDCxVVGRhGQVMXWVYXUFUFEV5ZE1REUVpNUxheUEICWx4=",
          "quien": "gismera"
        },
        {
          "texto": "dc1:dFYURkJQRUNQGQcGV10TVF5aFExcGFRfVhBGRVBdDhkBR1NOAxwQc11dEEpaWUZXXkUHEBcWBVFUGVZUQhZdUFQbFENZWkQXVkwFDUddQBdVURRYXl9YU/TQWRwZVQAZBVRASANGURdcVggYRRGlm0ERAw4MQx8VEVxcERETFF1NUldZF1FSF0VcFgBaV0NSXVsYGUdWVhdFoJ5AVVACWEZRVxgQW1RFUVxEWU8WChJRCgxDFg0HGVRNW0AXA0BUGFNRFltUF1RQSgVDYVdaUAsU9pJg+55HWwpUURn71hkFVEb7x15fUFcTpo8VVFMCEhUWEKHYSBl/WFZYB0ZYVBhfVRZDWlRWVVZEB1ZLV1IRUlFbQF1FWBk="
        }
      ]
    },
    {
      "id": "p07",
      "fase": "IV · Los fotogramas",
      "titulo": "Al volver la luz",
      "tipo": "hotspot",
      "contenidoVisual": "fotogramas",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p08",
      "descripcion": "El operador siguió dando a la manivela a oscuras. Si la vitrina estaba cerrada al volver la luz, alguien tuvo que cerrarla.",
      "instrucciones": "Pulsad el fotograma en que alguien cierra la vitrina.",
      "documentos": [
        "d14",
        "d02"
      ],
      "huellasRespuesta": [
        "63ca9f4f173bfa58a6b6654b52ef7372b839bb06ec05ec9279f1edaa899be073"
      ],
      "pistas": [
        "dc1:dFhHFkdHXlpUSwsQE15cQ15TRlhfWUQXUhBD85hXQVoHRlsYBxJfRFtGFllGWUZeU0UOFhlDEExUVURUQhZbVlcXVRZHWlRYHw==",
        "dc1:fl5eV1hGF1JfGQgCE1tWRUNVUExAWRdTUkNbURlPCE0UXFxZShJRVVlZCxQVBggSVwlCAAYNEkteFw==",
        "dc1:cFZNFkJbVhdcWAoME1JGWUVbFFgSVFYXVAZFQlhdFEsHGw=="
      ],
      "solucionDirector": "dc1:flhAWVBHVlpQGVdDGwgCDwQGHQMSTVlWFw5WXlYZBFcBQFNWElNUVhhXARhXDwdcUQpOQwAMCBlEV1MREhNYRl1FVRZTUBdEVEsUClZWR1IRUFEZXUpYGxcEXkJYGQ1YRlleWRBXEFNdEwhZFRUPRkAMDAJDFQda8pRTH0InFFpLVEFEVkYXVl1eEQpWVhNEUFf3ihJUVhdFoJ5AVVACWEZMElsDQEL0ixMHV1tDCl5TEwdDEwIUWBFIR1RCFlVHXVRdU0VUF0ZEXEQPUhhZWEhVFEpXGEVYVaCEEF1ME1gIQVcYA14QVkhSA/uGDUg=",
      "exito": "dc1:flhAWVBHVlpQGVdZE01dVhFZVVddGFRYWUNQRVhXFVxGV15ZCFFfF0ETEVZUQxZHXhYHEQJDAlwRVkBeQgNaFV5YRltWFVNSEUoBEUNRVllFURReW0pWF1sCF1xVWBdcSBVhVwpdEFNXQERIUBEVXVwEEUMXCgNXVFcSXQ4HQlAWF3hXF1ZF9IJXDQBSGFdSEUdbWltdU1ZTQ1NVSloTUARQEllGUVFTWRMNVkMKElNWBEw="
    },
    {
      "id": "p08",
      "fase": "IV · Los fotogramas",
      "titulo": "La pulsera de serpiente",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p09",
      "descripcion": "La mano del fotograma lleva guante blanco y una pulsera de serpiente.",
      "instrucciones": "¿De quién es la mano que cierra la vitrina?",
      "documentos": [
        "d14",
        "d15"
      ],
      "opciones": [
        {
          "id": "kessel",
          "texto": "Isolda von Kessel"
        },
        {
          "id": "senora",
          "texto": "La señora de Balmes"
        },
        {
          "id": "merce",
          "texto": "Mercè Puig"
        },
        {
          "id": "balmes",
          "texto": "Enric Balmes"
        }
      ],
      "huellasRespuesta": [
        "3444a45a6caba1b8192dbeff956f0a3f85a63d8808e7e9fbd7bfc67c3d6f5d7d"
      ],
      "pistas": [
        "dc1:cFZNFlNaRBdBTAgQVkpSRBFQURlBXUVHXgZZRFwZBFdGWVMYAVNcVhY=",
        "dc1:e1hZRlZHVlMRXAhDUFdfWEMUUFwSVFhEFwRCUVdNBEpGUVdURlRfQ1dUFllYAkZRXQtCBg9DF0xUGVZQQgpVFVtF94VZXFRWEVhEAFJcUhdYWkJQRllTVhk=",
        "dc1:bVlVFkRQRUdYXAoXVhhFVhFQURlcXVBFWENOEFZNE1hGUVcYBF5RWVtcShh5DBUSVRADDRcGFRlfVhJcCwNaQV1ZGg=="
      ],
      "solucionDirector": "dc1:f0JVWENQF1VdWAoAXBhKF0FBWEpXSlYXUwYXQ1xLEVADW0ZdRlZVF1dBCwIVLgNAUabKQzMWD14fGX5QQgRVR1dZUUVWFVtbVE8FQ0BdQUdYUVpNVxQXR1IRWBBaVg8ZAUBTVhJXQxdWVgNKWhBdEl4EQhAGoNdWQ1gSVQdGdlRUWlFFGxVHUkNVBRAIGF9YQhRXWFBZW1tSEVhDFRkSVgpaEl8DX1VbV0BK",
      "exito": "dc1:dVJGVfSdF2dEUANPE1RSF1JbWkpXSkFWUwxFUQMZBkwHW0ZdFRJSW1ldB1dGQwJXEhYXQwwFD1pYVhJIQgpVFUhCWEVSR1YXVVxEEEYYXlZVRlEXEmtWVPTQF1xYGRP6z0VeUQVTEFYYXBdbQBEHQRIVAxECQxdMVBlcUAYPURVLQkRfUkdWF0BMAUNWVBNUUFlWUF0YRFIXC15KVhkAGQpUQRhUAAoCCh1EfVtDClMSBgMJAkMCXBFRV0MQB1lcXVlAV0QVU1IRcwsRV1ETVkFVRlxRXRdCWQIXXlZNABkFXFRKB1ZRGQ==",
      "escena": [
        {
          "texto": "dc1:fVsUQlZZW1JDGQAGE3JcRVVdFG9TVFsXUhAXRVcZAkwHR0ZXRkFZWRhFAVZBAghTEg8XDRcMRlgRVVNCQgVVWVxSRldEDxdCXxkGAl1bXBsRQVoZVFRST1hPF1NYUwBKRlFXGABHQ15aXwFLFQIWW14EBgIQTUZzXktWWEIIWxVdRED1lg4X9ZpRBUNaXFwXUBREVkAYQ1ZVAlRf+4JNGQJcUV1GXlEXW1wHUVsGFFMeRRtDDQxGT0RcXkcHSA==",
          "imagen": "img-jordi"
        },
        {
          "texto": "dc1:f15HW1JHVhkRfApDX1kTVFBeVRlWXRdRQhBeUlVcEhkCUBJZBFNaWBhbBUEVFggSQgQSBg9DAlZTVVNVDUZFQF0XWlkXUEQXRFdEBUZLWlVdURo=",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:dFJARFZGF0RYV0QQVlZHXlVbFFxcGFReWQBYEF5LFEkJRhJBShJRWxhXC0pGDEoSU0UOoMITD0MLGfCaIQpVQ10NFFNbFVZHVFUICldXE1NUFFhYElJYTlZNF3VVGQ1MCFBBFEZRRVZWVwsYWwxGWlMcA0MNAgJQVPuJH0IhXUZVUkZXF1lWF1JWFApSGFZZEVhVGV5RVUVSF1YQWFcVXBUVVl1GQ0VSGF0FXFwGRl5TRRYMEhYDGUgZQVABBxRZWRdAV1VZVhk=",
          "visual": "vigenere"
        }
      ]
    },
    {
      "id": "p09",
      "fase": "V · El escondite",
      "titulo": "El apellido de la joya",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p10",
      "descripcion": "La nota es para Jordi: le dice dónde recoger la joya cuando el museo esté cerrado. La clave es «el apellido de la joya».",
      "instrucciones": "¿Dónde está escondido el Ojo?",
      "documentos": [
        "d17",
        "d18",
        "d03"
      ],
      "huellasRespuesta": [
        "408a8e4660abc7ad9c3d9482fed581a385953b3ed81f3730e210a09f4f90bfae",
        "3170646ef2210b54674c61e4ce2e71c73b18dc8f9d52b9a431297efc4df232a5",
        "4ccdfa8f71e912aecc35b71a9d13fbfd0911e53292e8436d1a3c76f806ce89ba",
        "c6750822c634c3b076cc1f1aec5daeda9a1a5b00c61de6cd0c6b36f5dc3563c8",
        "dd6884a3f660f939e26204ac61593c7fd5215e8c6b59c547ab3650ddc6146164",
        "f596a41b9a193d48ac40d6ba4c00cd6574d46a8a2f4f5ca10f7c45aab7bb7eaf",
        "e744d5545936e8d6603c47f4fe1ce6515a8769f89de24250532e50dfa303e7e0"
      ],
      "pistas": [
        "dc1:dFYUXFhMVhdCXEQPX1leVhFRWBl9UlgXUwZbEHFWE1AcWlxMAwgQW1kTB1RUFQMSVxZCKywxL2N+d2Z0TkZGUEhSQF9TVBdVUFMLQ1ZUE1pUWkdYWF0Z",
        "dc1:aFZGVxdRUkRSUAIRUkoJF1RaFFVTGFFeWwIXVFwZDVhGWVdMFFMQU10TCFkVAApTRABOQwEWFVpQXRJdA0ZYUExFVRZUXFFFUF0FQ0oYXl5DVVAZV1YXRkKgnhBaVg1MC1tTGANBRPSZHQ==",
        "dc1:fVpEX1JPVhd0d0QvchhxeHJ11rmU"
      ],
      "solucionDirector": "dc1:bl5TU1n2n0VUGQcMXRhQW1BCURl6d2V+bSx5ZHwDQfvNcHwYKnMQdXdwJRhxJioSfiCh8C1DN2x0GX94MCcUdHQXeXdl94wZ",
      "exito": "dc1:+pxxWBdZVhdTVgcCE1xWWxFYUfqBVhdGQgYXXVBLABkHWRJVB0Ae9YMTIVQVDhNBVwpCFwoGCFwRWltfAQkUWV1YWlNEGw=="
    },
    {
      "id": "p10",
      "fase": "V · El escondite",
      "titulo": "El león que mira al mar",
      "tipo": "hotspot",
      "contenidoVisual": "plano-museo",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p11",
      "descripcion": "Cada león del museo mira hacia un lado. En Barcelona, el mar queda al sudeste.",
      "instrucciones": "Pulsad el león donde está escondido el Ojo.",
      "documentos": [
        "d19",
        "d17"
      ],
      "huellasRespuesta": [
        "8f88fcbfa5064b92c9fc93d74e73d36d345a52d16bce292ab6f15a9e5845316b"
      ],
      "pistas": [
        "dc1:bURVUhdZVhdTS6fZWU1fVhFQUVUSSFtWWQwNEFdWE00DFVNKFFtSVhY=",
        "dc1:a0JQU0RBUhdUSkQGXRhXXlBTW1dTVBsXXwJUWVgZAFsHX10YHxJRF1RSRFxQEQNRWgRM",
        "dc1:a1hYWRdAWVgRVA0RUhhWWRFRR1gSXF5WUAxZUVUDQVwKFUNNAxJVREzwxRhfFghGXUUDD0MCAUxQFw=="
      ],
      "solucionDirector": "dc1:fVsUWlL2hFkRXQFDX1kTUURRWk1XGFNSW0NHUU1QDhkLXEBZRlNcF0tGAF1GFwMeEg0DAAoCRlxdGV9QEEgUeVdEFFJSWPSWQhkJCkFZXRdQWBRXXUpDUhtDVlwZVgRKElAeGAdeEFJLRwEYTEMHXhIWFxEMBhVNVBc=",
      "exito": "dc1:fVsUWlL2hFkRXQFDX1kTUURRWk1XGFNSW0NHUU1QDhdGYUBZFRJcVhhBAVJcDwpTEgEHQwERCVdSXBJVB0ZHQBhVW1VWGRdCX1hEAVxUQF5FVRRdVxhQVloWTVEDGQRVRnpYV0ZWVVsYewtKXBkJXEYATkMADAgZQkwSVBESRlBUW1UWU1AXRFRQF0NBWUpYQho=",
      "escena": [
        {
          "texto": "dc1:e15aVVgVW1JeVwEQE0ETQl9bFEpdVFgXWgpFURlYDRkVQFZdFUZVDRhWCBhRBkZeU0UEFgYNElwRXVddQhZVQVFYGhZ0XV5GRFBEGlIYUFhDRlEZQldFF1IPF0BYSghVCloSWQhGVUQYVwEYRBYDEnUMEQ4GEQcZRVxAXAsIURVUVhRQRVREUh8=",
          "visual": "plano-museo"
        },
        {
          "texto": "dc1:fVsURlZBXlgRWhEBWl1BQ14UUUpG+5YXUg0XQFxXFFQER1MDRl5RF15GAVZBBkZVXREHAk1DI1cRVVMRAAlXVBhTUVoXWVL0gldEB1YYQ15UUEZYElBWThcWWVEZSwRTD1leWUZWVRdaQQtWVgZGUV0LQgcMEEZNXktcWA4KW0YYU1EWVFRVUktYRAJdW1tWHRRQXBJUWEQXEkJVGUoEGQFcQFkIElNYVhMRVlRDC11cAAYCTQ==",
          "imagen": "img-patio"
        },
        {
          "texto": "dc1:bVlVFlpaWVJVWEpDdFFAGxFQVVRXGEJZVkNaX1dcBVhIFfCZNPGRR1FXCxk=",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:fFJaQkVaGxdEVwVDUVdfRFhAVRlWXRdQVg5CSlgXQWBGUVdWEkBfF1xWRFRUQwRdXhYLFwJPRltQU10RDgcUWfuWWUZWR1YXVVxEIFtRQkJYGBRMXFkXUkQXRVVVVQAZAlASSwNbQxdKUh1XRkMXR1dFEQZDDhNcR1wSUg0IFFlZF1hDTRsXcl0ZKwlcGFdSXRR8VkBRTVhZF1Ie",
          "imagen": "img-portada"
        }
      ]
    },
    {
      "id": "p11",
      "fase": "VI · El reverso",
      "titulo": "Nueve números",
      "tipo": "codigo",
      "longitud": 3,
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p12",
      "descripcion": "Al limpiar el broche aparecen letras grabadas en el reverso, de tres en tres. Parece una numeración.",
      "instrucciones": "¿Qué número falta en el reverso del broche?",
      "documentos": [
        "d21"
      ],
      "huellasRespuesta": [
        "8e117971bedb47f4a86f2916c56194b152f6db0d7a0a1c811828c2defca50c1b"
      ],
      "pistas": [
        "dc1:fURVRRdZUkNDWBdDSlkTW1BHFFFTWvSeXhAXRlBKFVZcFVdLRl5RF05aAVJUQwVeUxMHQwcGRlVeShJbDR9RR1dEGBZbVBdTVFVED1paQVgRUFEZV1ZUVkUEWEMZXQQZNFpbX0g=",
        "dc1:bEVVUkJWXlMRVQUQE0lGUhFXW1ddW/SeXhANEFVYQXZGUEEYVh4QW1kTKRhQEEYDHkUOAkM2RlxCGQDT4sAUZllbUVgXW/SNXFwWDEAYV1IRQEZcQRhUXlERVkMX",
        "dc1:bVlVFltQQ0VQFUQPUhh0GxFaWxlBWVtSFwZZEFxVQVUPV0BXRlZVF2pcDV8ZQxZXQApCDQxDFkxUXVcREQNGFVRWFHMZFfWIYEynyhNbWlFDVRRXXRhWR1YRUlNcBg=="
      ],
      "solucionDirector": "dc1:f0VVVFZRWEQRXApDX1kTVF1VQlwSXFIXWwxEEFNWGFwUWkEURn9lZXt6p7F5IiF9Ek0vUkM2VBljChJyVkZ9ABhyAhZ7Ahd2CRkjWhN3Ax4LFHt2cxQXeHguGxB2diYVRnp9akoSf3h0H0R3ejZKEn0qK0MaQyl2chcSYg0IFFFdWxQGBwQXVl0ZVFMKGEBWXUJbGX13cg0XBVZcTVhBXAoVAghQHBB7WRMjGFsMRkFTCQdDBg1GXF0ZXlgAFFsVXFIUZFhcUBsRSQERXBhdWBFcVVpXGFFWWxdWEEpYA1wUWVMCRl5RF30TAUsVBgoSBEUbQw0MRlhBWEBUAQMa",
      "exito": "dc1:flZYQlYVUlsRCVRVHRh8VFlbFFfxglpSRQxEEF5LAFsHUV1LRldeF1RSRFtZAhBXEgEHQw8MFRlbVktUEAlHGRhbVRZGQFIXREoFDRNUXEQRQFVVXl1FUkRDU1UZTQ5dBxV3SxZT84ZZH0RBFRYIEloQBwAMQxdMVBlTXQUTXVBWF1BTXfaEF1AZFBFcSPCEQl1AVhwYdllYF1ZUVVZP"
    },
    {
      "id": "p12",
      "fase": "VI · El reverso",
      "titulo": "Entre la placa y el apagón",
      "tipo": "codigo",
      "longitud": 2,
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p13",
      "descripcion": "La vitrina se abrió para el gobernador con el Ojo dentro y se cerró con la réplica. El apagón llegó mucho después. ¿Cuánto tiempo llevaba la joya fuera de la vitrina sin que nadie lo supiera?",
      "instrucciones": "¿Cuántos minutos pasaron entre la última placa en que el Ojo es el auténtico y el apagón?",
      "documentos": [
        "d06",
        "d07",
        "d09"
      ],
      "huellasRespuesta": [
        "5814ce077b41a7356bfe21d44c89a9082048a4bb40c3b577520ee680ef27e511"
      ],
      "pistas": [
        "dc1:dFYU9Y1ZQ15cWEQTX1lQVhFXW1cSXURDRQZbXFgZD1ZGUEEYClMQDhYTKVFHAgISXgRCCwwJBxlVXBJSDQhAVFtDW0UZ",
        "dc1:dFYUXlhHVhdVXEQGQFkTR11VV1gSXURD9MIXVVcZBFVGVkdZAldCWVcTAF0VJQNAQKbDDVhDClgRXVddQgdEVF/0h1gbFVJZEVwIQ0NZQUNUFFBcXhhBXlAKW1FXTQQX",
        "dc1:fFIUWlYVR1tQWgVDV11fF1ZbVlxAVlZTWBEXURlVABkJRlFNFFtUVlwdRHVQDQlBEgEHQxYNBxlZVkBQTEZ59plEFFJSFUNFVEpEAEZZQUNeRxo="
      ],
      "solucionDirector": "dc1:+61YQl5YVhdBVQUAUhhQWF8UUUpGSlJbWwINEFVYQQFKFVMYClNDFwoBXg0EQ05XXkUFDAEGFFdQXV1DQhBRFVRWFFxYTFYXVVxEAFZKUFYYGhR4QllQ9IQNF1EZVQBKRgcBAlICHhcMCkRVXA0TRl0WWEMGD0ZNWFxfQQ1GRUBdF0BDQVoXelRLB6CbGENWQ1UUXEFbWFlTBkUQVVhBUwlMUxgDXBBSVBMUWUEKCRJLRRQMDxUDSx8=",
      "exito": "dc1:e0JVRFJbQ1YRQEQNRl1FUhFZXVdHTFhEDUNTVUpdBBkXQFcYA14QUFdRAUpbAgJdQEUUCgxDClgRU11IA0ZQUBhUUURUVBdfUEoQAhNJRlIRR1EZVE1SF1sCF1xMQ08ZMlxXVRZdEFNdExdXVxEHEkIEEAJDAQdTUEsSUA5GRFRMXlsaF1BEVF5XAAZBGEZZUBReVktZF04XFVhcT1wTGQcVQU0EW0IXS1wKSlwGCFZdSw=="
    },
    {
      "id": "p13",
      "fase": "VII · La acusación",
      "titulo": "Quien cambió el Ojo",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 200,
      "siguientePrueba": null,
      "descripcion": "Hubo un cambio a las 22:52, un apagón a las 23:40 y una vitrina cerrada a oscuras. Una persona lo planeó todo; otra la ayudó.",
      "instrucciones": "¿Quién robó el Ojo del Horizonte? Si os queda alguna duda, el Interrogatorio sigue abierto.",
      "documentos": [
        "d16",
        "d20",
        "d15",
        "d12"
      ],
      "opciones": [
        {
          "id": "merce",
          "texto": "Mercè Puig, la conservadora"
        },
        {
          "id": "jordi",
          "texto": "Jordi Vall, el electricista"
        },
        {
          "id": "kessel",
          "texto": "Isolda von Kessel, la coleccionista"
        },
        {
          "id": "ferran",
          "texto": "Max Ferrán, el fotógrafo"
        },
        {
          "id": "roig",
          "texto": "Damià Roig, el joyero"
        },
        {
          "id": "balmes",
          "texto": "Enric Balmes, el director"
        }
      ],
      "huellasRespuesta": [
        "57a76597f79290705deac2d650a1cf695a65fd950bd2c65933c5c61c16d25bc9"
      ],
      "pistas": [
        "dc1:fVsURFhXWBdfVkQFRl0TU0RGVVdGXRdSW0NWQFheoooIDxJeE1cQVE1SClxaQxVXEgYHERGg1RldWBJHCxJGXFZWFFcXWVZEEQtWWQYKHQ==",
        "dc1:+ohlQ172nlkRWgERQfuAF11VFE9bTEVeWQIXQFhLABkDWRJfCVBVRVZSAFdHT0ZLEhQXCqDKCBldWBJHDQpCXPuEFFcXVlJFQ1gWQ1IYXERSQUZYQQc=",
        "dc1:dV5GV1MVW1YRVQ0BQV1HVgsUBRcADQcXRwZEVU1YEhVGQFwYAvGdVhhSCkxQEEZWV0UQBgAMAVxDGV5QQhT3nEhbXVVWGw=="
      ],
      "solucionDirector": "dc1:dVJGVfSdF2dEUANNE31dVFBGU/qBGE4XRwJQ84oZDVhGRldfE1xUVhhBp5FFDw9RU0VKUk1RUwkRSUZCTkZHVFtWUFdEFVNSEUoRQ19RUUVUQFUZV1QXBgBDU1UZVABACRwJGAVTXVVR8NcYWQJGWF0cA0MCD0ZaVEtAUBBGWFQYQV1CRVxZVhFJBRFSGFZbEVNbW1dKWVZTDEUQEUkNWAVUQRheEkkXARpfGFAQBV1cAQug0EMDVRF2WF5CA1oVXVsUWlL2hFkRXQEPE0hSQ1hbDxlCWVD0hENWEHNWE10PFUJZFFMQVVlZBUoVBgoSWwsWBhERE0lFVkARVkZVFVRWRxYFBg0DAQJEAhNXQFRERlVKEktWVPTQF1xYGRP6z0VeUQVTEFRXXURLQEMKXlMTB0MaQwVcQ0vxgkJOUlpMWFNEVlhWFwIVRARGWV1DVBRWVVNWVFgXGhdATFUSXBRUElwDEkNSSkMNXVsXAxseRRtPQwYITUNcElQORkZQTkJRWlgZF1tQGQAGWfuAF1JVUUsSXVkXUg8XQFBYD1ZGVFBRA0BEWBhXAVQVEAde8dYMQwINElxCGVZUQhdBUBhUUURFVEVWXxkIAkAYQ0JURkBYQRYXfVgRU1kZXxRcRkZHGAXxg1pIXw1bUFhGXl0WQgcGDqWYQhlBXgxGXVtXVFFYQ1BEGQ==",
      "exito": "dc1:dVJGVfSdF2dEUANN"
    }
  ],
  "epilogo": "dc1:dVJGVfSdF2dEUANDVktQQlJc94oSXVkXRApbVVdaCFZGWVMYCltDQ1kJRFRUQxZeUwYDQ1pPRlxdGVtfFgNGR01HQFlFFQMbEVwIQ19RUUVeFFBcXhhdWE4GRV8VGRJMRllbWhRXRFYUEwhZFQ4HXF1FBgYPQwBWRVZVQwMLVRsYe0FTUFoXRFQZFRZaTPCEEVhVGUJNW0RSEVYQXVxBShMVX1kCQFUXQRMIWRUHA1jx1kIQDAEUXBFVUxEPA0dUFhdhWBdWWFpBSwUHXEoTU1QUc1BcXVVFVkNbVRlRAFulmFMYCVRCUltaAFcVDwkSUAQRFwINElwRSVNDA0ZEVF9WRhZSWRdEUFcFF1xKWlgRUFEZQU0XWlYHRVUZXRRLB1tGXUZWWVJCEwX7hAwVHBIgDkMAAgtbWFYSXQ1GUVtLVk31hBVUXlRXRBVWW1ZEEVdbVxJUVhdFoJ5AVVACWEZRV1RGUVFD+5IIV1IMSBJ4ChAHCkMwWF1VEkINClsVTFJa9ZpUF0ZEXEQBUlJSRRFBWlgSSFZbVg1UURcza3wKFX1SCRJUUlQTLFdHChxdXBEHQxUMCk9Y+oERA0ZHQBhBXUJFXFlWEVwIQwEME1NUFF5MXFFYGxcAWF4ZXQ5KRlJHWRRWWVZLEw5NRwICXUFFA0MAAgJYEVVTVQ1IFHBUF1BfRVBUQ15LRAZAW0FeU133ihJZF1tWQ1lfTVgT+stUEm4HQFdWGFcBGHkMAUBdptMMQxMHS1AZUV4MElVHGFtbFlhWQkVDUAAME0ETWFdGUVpXSkRSFwIXVFxPDlUQUEAYClMQXVdKBRY/aSpTEhcHEBMWA0pFWBJdDgNT9osXQVhWFURSXFgKAhNcVkRBQfeQQRQXRF4NF1ZQSwxYShVRVwgSRVkYXwVbRwZGVldFDQALDEZJRFdGUBFcFPeTel0WVFleUl9NAUNSX0FWVVFXXBJLQhdTCltZXlwPWg9UHBgjXhB4UlxEXFABAxJDEAcHAhEVXBFcXBEgB0ZWXVtbWFYPF05QGQwCE0tWRUddUFYSSFZFVkNbXxlIFFxGQVdWpZ9RF0lGARhGBhREWxeg2E1pbHxfGVddQhRRQ11FR1kXUVJbEVsWDFBQVhdXVVhNU1pWF1IPFwAJD08=",
  "puntuacionMaxima": 1390,
  "dialogos": {
    "prueba:p01:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:flJGRPSUWRdfVkQCXVdH9IIUWFgSUFhFVk8XQFxLDhkDWRJKA15fXRhWF0z2wkZTWqbPT0MGCBlUVRJUERZRX1cZFHdbFUVSR/rNEB8YQ1JDWxRcQUz0lhk="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:+oh1WhdHUkHykBdcE2hGUkIUU1BAWVpYRENZX0pWFUsHRhJUBxJTVlpWHlkVGkZLU0s="
      }
    ],
    "prueba:p01:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:+pZ4V0QVWFlSXEQaE0xBUlhaQFgSQRdEUgpEERl6FFgSR10YC1teQkxcFxhUDRJXQUUGBg9DB0lQXvGCDEg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YRdRWhdPVlFYSwtDV10TUkJAVRlCVFZUVkNZXxlbE1AKWVMYBV1dWBhXDVtQQwpTEgMLAAsCSBlwSfGLDBJVWVcZ"
      }
    ],
    "prueba:p01:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:bVkUU0RFUl1eGQcCXlpaVhFYVRlbQkZCXgZFVFgZEVYUFV5ZRlZVRV1QDFkZQwhdEgQQEQoBBxlBVkARAwRVX1cZ"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YVgUU0QVRkJUGQcMXRhfWEIUWvqIVVJFWBAXQlZUAFcJRhJVAxJAXl1BAFcb"
      }
    ],
    "prueba:p01:pista": [
      {
        "quien": "chiqui",
        "texto": "dc1:aPSZUlJZUhdQGT0MWEtBXl4UQVcSSlJbWAkXQUxcQVcJFV9RA1xEVhY="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dFhHFkVQW1hbXBdDXVcTWlhRWk1XVgwXWwxEEFxKEVwMWkEYElNdR1dQCxYVLgNcRgwPDBBDCFZCVkZDAxUUVFQXWFNSR1tYQhkABkNKWkRQGg=="
      }
    ],
    "prueba:p14:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:flJGRPSUWRdVUAcGE0lGUhFRWk1AXRdbVkNHXFhaABlXBBJBRl5RFwkHRFZaQxVXEggNFQqg1RlfUBJEDAcUWFdEV1cZFXlYEVQBQ19XE1RDUVsX"
      },
      {
        "quien": "gismera",
        "texto": "dc1:aEJRRRdWWFpB+sURUlRSRB8UYFBXVlJEFwZbEE1QBFQWWhJJE1cQQ1lBAFkVBgoSXwQFDQYQD1YRXFwRBwhSR1FWRkVSGw=="
      }
    ],
    "prueba:p14:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:a1IUW1hDXvSCGQkGV1FSF0JVWFgIGEJZVkNEWVVVABVGQFwYDFNCRfuAChQVCwdBRgRCFg0CRkpU+oNeEAcUUFYXUVoXUERHVFMLTQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YRdRWhdXRVhSUQFPE1FX9JhaQFBRVxdSWUNbUUoZBVYVGxJ0CRJBQl0TCF0VEwdB8dZCAg9DBEteWlpUTkZEVEv0hxZWW0NSQhkABhNUUkQRW1paVxhOF1MMVFUX"
      }
    ],
    "prueba:p14:pista": [
      {
        "quien": "gismera",
        "texto": "dc1:dV5GVxdZWEQRWwsRV11ADRFYVRlVXVlDUkNEWVxUEUsDFVZdDFMQVFdABUsVBggSXgoRQwEMFF1UShw="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YRdRWhdHUlteU0pDdksTW14U94NcUVRYFxJCVRlKBF4TR10YDlMQVFleBlFUBwkc"
      }
    ],
    "prueba:p14:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:dVIUUlYVXlBEWAhNE2FSF0L3nRleVxdGQgYXQUxcE/rLVBJLB1BVRQITAVQVARRdUQ0HQwYQRlxdGV9YEQtbFV1ZFFpWRhdTXkpK"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fURbFllaF1JCGQmgmkxcU14YFHpaUUZCXk0XYFxLDhkDRhJOA0BUVlwd"
      }
    ],
    "prueba:p02:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:dFYUUF5WX1YRXQ0AVhhCQlQUUVUSQlZRXhFYEFhMFfrPW0ZRBV0QWk1WF0xHAkZHXARCBhAXFFxdVVMRBgMURl1eRxZFVE5YQhdEJl8YRV5VRl1WHhhZWBk="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fVlAWVlWUkQRWxEQUFleWEIUWFgSSEVeWgZFURlJDVgFVBJdCBJBQl0TCFkVBhVGQAAODwJDFVwRWEJQBQcaFW1ZVRZHWkUXRFcFTQ=="
      }
    ],
    "prueba:p02:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:+pZ4VxdFW1ZSWERaEhhyF11VRxldVlRSFw5SXlZKQUoDXEEWRvCPbhhWCkxaDQVXQUUSAhECRkhE+psRAxZVUllFW1gXWVYXXUweXA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVlARFIVW1YRAUQaE1RSFwgUWFgSTl5DRQpZURlcEk0HV1MYB1BZUkpHBRhFAhRTEgAOQwQMBFxDV1NVDRQaFXFZQFNFUERWX00BQ15XXlJfQFsZQllFVhcTUkJdXBMZE1tTGANBREVdXwhZGw=="
      }
    ],
    "prueba:p03:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:clhGUl4VU15SXEQSRl0TRFQUUkxcXF70hENWXF5WTxk2UEBXRldcF0vw10xUDQkSQQwFFgqg1RlSVlwRDhNOGRhOFFNbFVNSQkkFAFtXE0NQWVZQ8ZFZGQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:e1hZRlZHVhddVkQSRl0TRFQUVUlTX/SEFwBYXhlVDhkXQFcYB15ZWl1dEFkVAAdWU0USAg8CCFpQFxJiDQpbFU1ZVRZSW1RWW1hK"
      }
    ],
    "prueba:p03:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:dFYUVUJUQ0VeF0QwUlTwhF8YFF5TVFJF9M5WHBlqAFUHFX1KD1deQ1lfREEVBhVRUwkHEQJZRlxJWFFFAwtRW0xSFFpYFUZCVBkXBhNZQ1ZW94cX"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YRdRWhdWQlZVSwtDVktH9JAUUVcSXVsXRKCERFhXDhdGdF5fE1tVWRhRBVL20Eg="
      }
    ],
    "prueba:p04:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:a1JdRRdFUkVCVgoCQBQTRFRdRxlBUUNeWBAbEEAZAlgCVBJNCFMQU10TCldGDBJAUxZCFwoGCFwRVVMRDw9AVFwXUFMXWVhEEU0BEEdRVFhCGg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aEJRRRdWQvSYVxACXl0TW15HFE1HQVhEFxoXSVYZFVxGVkddCEZfF1RcFxhYoMtdQUtCN6DZRlVeShJfDQtWR11EGBZOWhdSXRkUD1JWXBk="
      }
    ],
    "prueba:p04:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:fVsUU1tQVENDUAcKQExSF1RaFFxeGET0hBdWXlYVQVMTW0ZXRlNcF1tGBVxHDEgSa0UOAkMACVdCXEBHAwJbR1kXUVgXWVYXVEoHAl9dQVYdFFpWEl1ZF1IPF0NYVaKKCBs="
      },
      {
        "quien": "gismera",
        "texto": "dc1:eRdQWUQVR1ZCVhdDV10TW1AUZ1heWRd4RQpSXk1YDRdGcV1LRl9VWUxaFllGQxZXQxAHoNICFRlATFcRERNZVFYXQVhWFVBFUFcABh0="
      }
    ],
    "prueba:p04:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:fVpEX1JPVhdBVhZDX1dAF0BBURlcVxdEUkNHRVxdBFdGWF1OA0AKF11fRFxcEQNRRgoQQwYNRlxdGVdCAQNaVEpeWxoXUFsXW1YdBkFXE1JfFFFVEl9CVkUHVkJLVhFYSA=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YRdAV1RdVhkReEQO8JUTQ1BXXFhAGFpSFxFSXFhTABc="
      }
    ],
    "prueba:p05:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:fF5RTBdZUkNDWBdPE1xaUksUV1BUSlZEG0NUUV1YQVUDQUBZRkFZUlVDFl0VDwcSXwwRDgJNRnVQShJXAwVAQEpWRxZZWkQXVVgKQ1BNUkNDWxRJQF1UXlgQF1VXGQJVB0ddFg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YVgURfScF0JfWEQTUlRSVUNVFF1XGFNeUhkXXFxNE1gVFUFRCBJCUkhWEFFHgeaUEhUHEQxDCFYRVVMRBg9TWhhfVUVDVBdUXlQUEVxaUkVdVRo="
      }
    ],
    "prueba:p05:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dV5YFlNaRFRYXAoXUksTVFhaV0xXVkNWFxNSQ1xNAEpKFVdWRldWUltHDU5aT0ZBWwtCBQIAEkxDWBJQDkZZQEtSWxg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YRdYVxdHUlReXg2ggBjxnERaVRlBXfSGWBFeRFgZBVwKFV9NFVdf9YMdRGlAoM8SQgoBDEMPA0oRXkdCFgcUVBhbW0UXX1hOVEsLEBNVWkVQRhRYElRWF1QCRVEX"
      }
    ],
    "prueba:p05:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:bVlVFltQQ0VQFUQWXVkTVFhSRlgcGGReFxZZURlNBBkVVF5dRlZfRBhFAVtQEEoSWgQRQw8GpZRVVhJcAwoUQFZWFFBWVkNCQ1hK"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dxdcUxdGQlpQXQtNE2FcF19bFEpHVVgXVQpSXhlaDldGXVNVBEBVGQ=="
      }
    ],
    "prueba:p06:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:dFZHFlFQVF9QSkQXUlVRXvKdWhlEWVkXUg0XU1VYF1xIFXb7y1McF1VWFxQVAqWDXUs="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YVYUQl5QWVJCGQcCQFETQ15QVUoSVFZEFw9SREtYEhdGeVNLRkNFUhhVBVRBAggSQQQOBg1DAlwRVVNCQgBVVkxCRldEFVNSEVwKBkFXHQ=="
      }
    ],
    "prueba:p06:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:fVsUUl5QVF5eWgwME1xWF1xVTVYcGGJZFw5SQxlYD00DRhJcAxJcVhhUBVRUTQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:eVtTQ15QWRdFTBIME01dF1xRRxlCWUVWFwZZQ1hAAEtI"
      }
    ],
    "prueba:p16:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:a14UWlYVRfSYSQgKUFkTU1RYFFpTTPSWWwxQXxlKCF4TUBJdCBJcVhhQBVJUT0ZeU0UTFgZDA1dFS/GCQgNaFVRWFEBeQUVeX1hEBUZdE1tQFEdcVU1ZU1ZNF3xYSkFNFFBBGAVbVkVZQERUVBBGRlsADAZDDwcZV1BRWQNGUFBUF3tcWBkXUl8ZFxYTV0FTVFoa"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:bVlVFnFcVF9UTUQAXFYTVl1VRlRTGFNSFxFSRFhLBVZIFX9dRldeVFldEFkb"
      }
    ],
    "prueba:p16:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:eVVdU0VBVhkRfBcXRltbUh0UU0xTVkNSRE8XQFhJBFUDRtC4wBJJF1RSREr2yhZeWwYDQwcGChlSWEbywwpbUlcXV1lZFURCEVwQCkJNVkNQFFBcEktSQ1IAXlVXTQBKRlZbVgVHVVlMUko="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVlAWVlWUkQRVQVDQk1WF1RHQFhQWRdSWUNbURlPCE0UXFxZRlNcF05cCE5QEUZeU0UOFhlDA0tQGV5QQglAR1kZFHpWFVNSEVUFEBNVWlsRUFtKUVFSWUMCRBBaUA9aE1BcTAcc"
      }
    ],
    "prueba:p16:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:cFYURVhbVlNeGQEPE0xaWlNGURlLGF9WFxVSXlBdDhkDWRJOD1VZW1ldEF0bQypXEg0HQwcKBVFeGUNEB0ZRR1kXQVgXUFlEUEALTQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YRdYVxddVhdQWw0GQUxcF/KdWBUSW1hZFw9WEFpWDFsPW1NbD/GDWRhSFE1bFwdWU0UHDUMGChlDXFVYERJGWhYXfFdOFUZCVBkSBkEW"
      }
    ],
    "prueba:p07:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:fVsUWUdQRVZVVhZDQFFUQlj3hxlWWVlTWENWEFVYQVQHW1tOA15RF1kTC0tWFhRTQUtCJhAXpZgRTV1VDUZaUF9FWxg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dlgUQlhRWBkRdQVDX01JF0dBUVVEXRdHWABYEFgZEVYFWgkYAPGdXVlHARhQDUZeU0UBBhERB11ES1MRBgMUWVkXQl9DR15ZUBVEBVxMXFBDVVlYElkXUVgXWFdLWAxYSA=="
      }
    ],
    "prueba:p07:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:bVlVFlpUWVgRWgsNE19GVl9AURlQVFZZVAwXSRlMD1hGRUdUFVdCVhhXARhaEQkSVQwQAkMPBxldVVNHB0gUbBhbVRZBXENFWFcFQ0pZE1JCQPeYEk5WVPTOVh4="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:eRdbRVRARVZCFUQAXFYTW11VQlwSQRdEXg0XQUxcQVcHUVtdRkRZUkpSRFZUBwccEi0DGkMSE1wRTVdfBxQURllZU0RSFVFF8pQFTQ=="
      }
    ],
    "prueba:p08:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:f0JVWENQF1VdWAoAXBhKF0FBWEpXSlYXUwYXQ1xLEVADW0ZdSBJ8VhhQFvuGDQ9RU0UGBkMQCVpYXFZQBkZQUEtURl9VUBdWEVoFB1IYWllHXUBYVlkZ"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YRdVFltaRBdSWAYCX1RWRV5HGhljTVIXVkNbX0oZAlgEVF5UA0BfRBhdBVxcBkZeXRZCDgoRBxlfTFxSA0g="
      }
    ],
    "prueba:p08:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:f0JVWENQRBdTVQUNUFdAF1VRFEpHGFhRXgBeXxlAQVUHFUJNCkFVRVkTAF0VEBMSXwQGEQZN"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dFYUR0JQF1NYUwtDQk1WF19bFE9dVEFe9NAXURlNDloHRxJUBxJGXkxBDVZUTUZrEgSh2Q1DCFYRSlNTBwtbRhhT94VZUVIXVEoQoJIYX1YRXltAUxY="
      }
    ],
    "prueba:p09:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:+pZhWFYVWVhFWEQAWl5BVlVVFFxcGEJZVkNUUVNYQV0DFVRNFVtSW11ARRhwEBJdEhwDQwYQRkxfGVFQEQkUUV0XQlNFUVZTHw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:bl5TU1n2n0VUF0QvUhhQW1BCURlXSxf1nAZbEFhJBFUKXFZXRlZVF1RSRFJaGgfwiUtCJQoPBxlBVkARBA9YVBQXR19ZFURWXU0FEUBdE1lYWlNMXFkZ"
      }
    ],
    "prueba:p09:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:+pxxWBdZVhdTVgcCE1xWWxFYUfqBVhdGQgYXXVBLABkHWRJVB0Ae9YM="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:+ohlQ/ScF1tU+tcNDBh2REVRFFRHS1JYFwZERPqYQVUKUFxXRlZVF1RWC1ZQEEgScQwMAAxPRkleSxJdDUZZUFZYRxg="
      }
    ],
    "prueba:p09:fallo": [
      {
        "quien": "chiqui",
        "texto": "dc1:+ohtFkRcF1tQGQcPUk5WF1RHFPuZd11Y9dgI"
      },
      {
        "quien": "gismera",
        "texto": "dc1:d11bFlJGF1JdGQoMXlpBUh8UcVUSWUdSWw9eVFYZBEpGWV0YCUZCWBYTPRhGBkZAVxULFwZDAlxTWFheQgJRFVtWUFcXWVJDQ1hK"
      }
    ],
    "prueba:p09:pista": [
      {
        "quien": "gismera",
        "texto": "dc1:aPSZUlJZUhdUVUQXVlRWUENVWVgcGGdSRQwXXlYZFVxGWV0YAldDVFFVFlcPQw5dS0UWBkMXCVpQGVMRFg8UWVkXQFdVWVYZ"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aUL3nxdSUllUSwsQUhY="
      }
    ],
    "prueba:p10:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:e15aVVgVW1JeVwEQE0ETVFBQVRlHVlgXWgpFURlYQUwIFUFREltfGRh2CBhYAhQSQxAHBwJDB1URSkdVBxVAUBY="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dlhGQlIVVkVDUAYCHRhgQlVRR01XGFJEFwJVUVNWQUBGVBJUBxJUUkpWB1BUTUZzXBEHEEMHAxlBTF5CAxQYFVVeRlcXWVYXU0un2VlNX1Yf"
      }
    ],
    "prueba:p10:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:+pZ4VxdTQlJfTQFCE3RSF0NRXlBeVFYXUwYXXFgZA1YFVBJLAxJdQl1FARhWDAgSRwsDQw4MCFxVWBw="
      },
      {
        "quien": "gismera",
        "texto": "dc1:bVlVFlVaW0RYTQVDV10TUFBZQUNTFhduFwdSXk1LDhVGRldRFRJCVkFcFxhRBkZeRx9MQyYPRl1UGURUEAJVURY="
      }
    ],
    "prueba:p11:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:dFJARFZGF1BDWAYCV1lAF1RaFFxeGEVSQQZFQ1YVQV0DFUZKA0EQUlYTEEpQEEoSXQYXDxcCFRlTWFheQgNYFV1ZU1dEQVIZEWkFEVZbVhdEWlUZXE1aUkUCVFn6ig8X"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:f15HGhdQRFZCGQgGR0pSRBFNVRleWUQXXwZaX0oZF1AVQV0YA1wQVlRUp4JbQxVbRgwNTUM6Rl9QVUZQQhNaFV9FQUZYGxdkWFwJE0FdE1FQWEBYEk1ZWBk="
      }
    ],
    "prueba:p11:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:fVsUBgcDGxdUV0QPUhhQW1BCURlWXRdbWBAXWlZABEsJRhwYI14QWlFACVcVDaWIXwAQDEMSE1wRV0dUERJGWhhSTEZSUV5SX00BTQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dFZHFlRUREJQVQ0HUlxWRBFaWxlXQF5EQwZZHhl4D/rVQVNUCRJVWRhfBRj22QpGWwgDQxOgx15YV1MRBgMUWVkXWF9VR1JDUBVEB1xWV1IRWlsZQV0XR14GRVRYFw=="
      }
    ],
    "prueba:p12:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:+oh3Q/SUWVNeGQEQR01FWBFEW0sS+41bQwpaURlPBENGUF4YKVhfF1lGEPucDRJbUQpCBg1DClgRT1tFEA9aVBQXTRZUQPSWX00LQ1VZX0NQVlUZQllFVhcGWxBYSQBepYZcBw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:e0JVUlJHWVgRXQFDQ1RSVFBHGBlaV11WFwdSEFpWD00HVkZXFRJJF0hSFkxQQwJXXkUUCgQKClhfTVcfQjJGUEsXRFdHUFtSQhkUAkFZE0JfVRRLV0tDVhk="
      }
    ],
    "prueba:p12:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:e1ZHXxdWXllSTAENR1kTWlhaQU1dSxdUWA0XRVdYQUulnEJUD1FRF11dRFRUQxBbRhcLDQJDHxlfWFZYB0ZHUBhTXVkXVkJSX00FTQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:bF5RW0daF1NUGRcMUUpSF0FVRlgSWlZdVhEXUVUZEVgSXF0YHxJGWFRFAUoVEAlcQAwHDQcMSA=="
      }
    ],
    "prueba:p13:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:bVkUVVZYVV5eGQVDX1lAF1VdUUMSQRdUXg1URVxXFVhGTBJcCUEcF01dRFlFAgHxgQtCAkMPB0oRVlxSB0ZNFVtCVURSW0NWEUBEFl1ZE0FYQEZQXFkXVFIRRVFdWEFYRlpBWxNAUUQWEzFWVEMFU1AAGAJDGkZMX1gSXAMIWxs="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:eVlAU0QVU1IRWAcWQFlBGxFGUUlTS1YXUg8XRFhbDVwUWhJbCVxdXl9cShh7DEZDRwwHEQxDF0xUGUFUQghbRhhSR1VWRVIXVFVEE1xKQkLynRo="
      }
    ],
    "prueba:p13:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dFgUQlJb9JpQVAsQE1xWRFVRFFVTGEdbVgBWEAAXQWoJWV0YDlNS9JVSRElABkZRQAChyhEQA1VeFw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:e0VRU0VZWBdfVkQBUktHVh8UfFhQ+5pWFxJCVRlJE1YEVEBUCRwQdlBcFlkZQwNeEhEHDwYEFFhcWBJQQj9bXktFXVkZ"
      }
    ],
    "prueba:p13:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:alJEV0RUF0ZEUKfKXRhHUl/3mVgSVFtWQQYbEEhMCPrPWxJIB1XzhBhfBRhHoM9CXgwBAkMaRl1UGUNEC6WdWxhSRxZbVBdaUFcLTQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YRdFQ172nlkRVwEAVktaQ1BWVRlXVBdTXg1SQlYZBVxGQ1dKAlNUGQ=="
      }
    ],
    "documento:d05": [
      {
        "quien": "chiqui",
        "texto": "dc1:fVsURFJZWF0RSgUPVhhWWRFRWBlXS0dSXQwZEPuYMEylnBJLE1dCQ10S"
      },
      {
        "quien": "gismera",
        "texto": "dc1:a0JRRENQF1leA0QlVkpB9JBaFElHS1gXUg8XVUpJBFMJFVMYFkBfR/uAF1FBDEgSdxZCDqDCFRldUEFFDUZQUBhbWxZGQFIXQVgWBlBdHQ=="
      }
    ],
    "documento:d09": [
      {
        "quien": "gismera",
        "texto": "dc1:a1IUV0dUUFZDVgpDUE1SQ0NbFENdVlZEFxoXVVUZE1wVQV0YFVtXQlHw1xhWDAgSXhAYTUMmChlHUFVYDgdaQV0XUUUXQFkXU0wBDRNMVkRFXVNWCBhZWBcKWURcSxFLA0FTFEZTQEJWRwUW"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YRdaV1NcUhdQTw0Q8IsTU1QUXFhQXUUXQwxUUV1WQVcHUVMWRnNcUE1aAVYVFwlR8dZCGkMAB1Vd+oEf"
      }
    ],
    "documento:d12": [
      {
        "quien": "chiqui",
        "texto": "dc1:+oh5dfWCeHrzjjEvDBh2REVbFFxBGEdSWBEXQUxcQVUHFVFUB0RVF1xWRGFaCBVAWwpM"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fUQUW1JfWEULGQEQE01dVhFEVVVTWkVWGUNuEFVYEhkAVFFME0BRRBhHARhRAggSVwlCBwoABVBeV1NDCwka"
      }
    ],
    "documento:d14": [
      {
        "quien": "gismera",
        "texto": "dc1:f0VdRRdGWFVDXEQNVl9BWB0URFxAVxdSRENHVVX6zFoTWVMWRn5RF0hWCPuYABNeU0UMDEMTB0tBWFZUA0g="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dV5GVxdZVhdSXBYRUlxGRVAaFHddGFpSFxNFVV5MD00DRhJICUAQRk3wzQMVDqWfQAQOAk0="
      }
    ],
    "documento:d17": [
      {
        "quien": "chiqui",
        "texto": "dc1:bVlVFllaQ1YRXApDRlZSF1JVXlgSXFIXURZEWVtVBEpIFWsYpJlVWxhfEVZQEEoSURADDQcMRldeGVpQGwcUW1lTXVP1jhk="
      },
      {
        "quien": "gismera",
        "texto": "dc1:eVtTQ15QWRdFXAqgnlkTRkRRFEtXW1hQUhEXUVVeDhdGZUBRC1dCWBhAAUhUDglBEgGh0A0HAxc="
      }
    ],
    "documento:d21": [
      {
        "quien": "gismera",
        "texto": "dc1:d1RcWRdb9I1cXBYMQBhKF0RaFFFHXVRYGUNyQ01WQVcJFV5XRlVCVlrw1xhADUZYXRwHEQxDAlwRe1NDAQNYWlZWGg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dFgUUUVUVfSCGQUPVE1aUl8URUxXGEZCUhH0nVgZEEwDFV5XRldeVFddEEr2whRTXwoRTQ=="
      }
    ],
    "documento:d22": [
      {
        "quien": "gismera",
        "texto": "dc1:bVlVFlRUXVYRWgsNE1lfVkNZVRlWXRdFUhdWQl1WTRkPW0FMB15RU1kTAVYVBghXQApCEwIRBxlUVRJBEKWdRkxWWVkZFW4XXVhEAFxVUV5fVVdQ8YtZGxcCR0VXTQBdBxVCVxQSVVsYVw1KUAASXUBL"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:bVkUUl5HUlRFVhZDQk1WF1BEQVdGWRdbVkNUX1RbCFcHVlv71VwQUlYTEVYVEQNVWxYWEQxNRmhE+psRAQlaU1FWUFkZ"
      }
    ],
    "pregunta:merce:m-vitrina": [
      {
        "quien": "gismera",
        "texto": "dc1:+px3WVkVWl5CGQMWUlZHUkIURExXS0NYRE8XU1ZUDhkVXFdVFkBVGfqIRHRaQwJbUQBCAAwNRlREWlpQQghVQU1FVVpeUVZTHw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fFJZV0RcVlNQF0Q6XBhQQlBaUFYSXF5QWENbURlPBEsCVFYYElNCQ1leEVxQDEg="
      }
    ],
    "pregunta:jordi:j-fusible": [
      {
        "quien": "chiqui",
        "texto": "dc1:bVkUUEJGXlVdXEQSRl0TRFQUUkxcXFIXTkNCXlgZEVgKVFxbBxJBQl0TF1lZFwccEiENEEMCEFxD+p9QEUZRWxhDRlNEFVpeX0wQDEAW"
      },
      {
        "quien": "gismera",
        "texto": "dc1:YRdRWhdG9IRFWAoME1tcWRFYQUMcGHZH9NlZRFhVDhkHWRJUB1ZfF1xWCBhFAhRGV0UGBg9DEFBWUF5QDBJRGw=="
      }
    ],
    "pregunta:kessel:k-oscuridad": [
      {
        "quien": "gismera",
        "texto": "dc1:bVkUVV9UREZEUAAME1VWQ/KVWFBRVxsXUwxEEE9cAlwVGxJtCFMQW1RSEl0VEhNXEgILEQJDHxlHTFddFAMa"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YRdRWhdWWFpYSgURWlcTW14UVUlHVkP0hENUX1RWQVUHFV5RFUZRF1xWRFRUQwVdXxUQAk1DKFZCVkZDAxUUW1cZ"
      }
    ],
    "pregunta:ferran:f-placa8": [
      {
        "quien": "gismera",
        "texto": "dc1:dFIURl5RXvSCGRUWVhhdWBFQXUpCWUVWRQIXXVBcD00UVEEYBVdCRVlRBRYVKRNBRgpCDgoGCE1DWEERAQNGR1lVVRg="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fVsUW1ZSWVJCUAtDVlYTUl0UV0tbS0NWW4G3lhlWQVwKFV9ZAVxVRFFcRF1bQwpTQUUPAg0MFRc="
      }
    ],
    "pregunta:roig:r-engaste": [
      {
        "quien": "chiqui",
        "texto": "dc1:bVlVFkdZVlRQGRcMX1xSU1AUUVcSXVsXRQZBVUtKDhkXQFcYCF0QRk1aF1cVDwNEUwsWAhFN"
      },
      {
        "quien": "gismera",
        "texto": "dc1:YVYUWlYVW1JHWAoXUkpWWl5HFFddS1hDRQJEHhl6FFgIUV0YEldeUFleC0sVBgoSUBcNAAsGSA=="
      }
    ]
  },
  "explicacion": [
    {
      "quien": "chiqui",
      "texto": "dc1:flJGRPSUWRdfVkQCXVdH9IIUWFgSUFhFVkNTVRlVABkWWVNbBxIBAxQTFF1HDEZXXkUQBg8MDBlVXF4RBxVEUFJYFEX0mA0XXVgXQ1xWUFIRTRRNQF1eWUMCF0kZSgRQFRkSWxNTREVXEwlRWxYSXUFFAw0XBhUZVVxeEQMWVVL7hFoYF2wXUl0ZHgJVUUFYEVBRGVdLVhdHD1ZTWBkPVkZXQFEKXlEXW1wJVxUHD1FXRQcPQwAHTfKYXl4FCRo=",
      "prueba": "p01",
      "documentos": [
        "d05",
        "d06"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:fVlARFIVW1YRSQgCUFkTBgAUTRleWRcGA0NEVRlUDk8P9oEYC1dUXlkTF1lZAlwSRwsDQxAKClVQFRJEDEZeVEpF94VZGRdCX1hEB1JVUhdUWhRcXhhSREcGXV8XGSRVRldAVwVaVRsYVgoYVgILUFsKTkMGEEZQVfqbXxYPV1oYUloWW1REF1VWF00TdFwXQEFRGV5dF0dWEPSDGVgNGQRHXVsOVxBHWUCnixUCCEZXFkIHBkMKWEIZXV8BAxRMGFNbVVIb",
      "prueba": "p14",
      "documentos": [
        "d05",
        "d06"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dFYUXlhfVhdVXEQAXFZHVlJAW0oSVFgXUwpUVQMZCVgVQVMYClMQR1RSB1kVW0ZXXkUYAgUKFFYRTVtUDAMURk0XUUVDR1JbXVhfQ1ZWE1tQFA0VElkXW1YQF1RQXBsZHxVRUQhRRVJWRwUYTEMFR1MREAxPQx9YEVddH0IjWkFKUhRDWVQXThFWEBFSGF9WEUJdTUBRWVYXBkRETE8OGQdXW10URlEXSFIWWRUGChJVCgAGEQ0HXV5LEkhCClUVW1JGRPSGF1tQGQcMXUtWRUdVUFZAWRkXcg8XQlZbDhkIWhJeE1cQUlYTAVQVAhZTVabRDVlDAExUGVFQEQ8UQFZWFF5YR1YXUFcQBkAW",
      "prueba": "p02",
      "documentos": [
        "d07",
        "d06",
        "d03"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:dlgURVIVUUJfXQ2ggBhdVlVVGhlzVFBCXgZZEFtYC/rVFVMYC1NeWBhfBRhFAgpTXAYDQwAWB01DVh4RDgcU9oJZXVVWFUZCVBkFE1JfUhdUWBRKU1T0hFlPF1xYGQZYClBA+8tTHBdUUkRrVA8HEn0XCwYNFwdVEUASXQNGUUZbVlhTRVQXThFdAQlSGFZbEUZRSkZXF1RYDRdcTENPGSNZElsTU1RFVxMBS0GgxxJXC0IGD0MV+oJNU18NXBRUVFBBX1JbF1VQU6fQE1kTW1BHFFZcW1IXTkNURVhLBFcSVBJLB1BZUlZXCxhWFqWTXkUHEQJN",
      "prueba": "p03",
      "documentos": [
        "d08",
        "d09"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:a1JdRRdFUkVCVgoCQBQTRFRdRxlBUUNeWBAZEHpYBVhGQFxZRkZVWfueBVVaEEZeU0UPChcCAhlVXBJdDRUUQV1EQF9QWkQbEUBEAl8YWUJfQFVLXldEDRcpWEJdUEFvB1leGANcEFJUExf7hhcHXF1JQgkWDRJWEVheEQETVVFKWA8WelBFVPKRRDNGUVQXVFoUVVMYUkRUAltVS1hNGQcVVlcVEkBWS1wXGFEGRl5TRTECDwJGdkNQV18WB1gZGE4UWFgVUlkRXAhDQFlf9IJaGBlRV1pYFwdeWlYX",
      "prueba": "p04",
      "documentos": [
        "d10",
        "d11"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:dFYURPScR1tYWgVDXVcTRFBYXfqBGFNSFw9WEFdYBVhIFXdURl5ZVUpcRFxQQzRdWwJOQwAMCBlCTBJSDgdCUBhTURZTXFJNEVUBF0FZQBsRQF1cXF0XU1gQDRBVWEFdA1kSWwdG85ZUXANXGUMXR1dFEgIEoNUZVFUSXBcVUVoUF00WWEFFVhFdAUNeUV8XVVtHWltdWUNWEBdTUFcCTANbRllGQlVEXUcFSxUGCBJXAwcAFwoQVh0ZQFQBCVNcXFYUU1kVWlZIVkQTXEoT9ZpBWlgSS1L0hgxFWU1YQV0DWRJVE0FVWPqISg==",
      "prueba": "p05",
      "documentos": [
        "d12",
        "d13"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dFYURVJSQllVWEQR8JFDW1hXVRlBXRdFUgBYV1D60hkDWRIJXhJUUhheBUFaT0ZHXEUPBhBDDExCTV0RAwhAUEsXUFMXWVYXVlgIAh0YYkJYUVoZXlkXUlkAVkJe+tIZEkBEV0ZHXhdVVhcYRQIUUxIADBACGgdLEVxeEQEHWVdRWBRVWFsXUl1VBUNWVhNbUBRZWFxXGQ==",
      "prueba": "p06",
      "documentos": [
        "d12",
        "d13"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:dFYUVVZfVhdVXEQAXFZAUkNCVVpb+4RZFwRCUUtdABkSWlZZEPGdVhhfBRhHoM9CXgwBAkMHA1URWlNFocdYWl9YGBZUWlkXQkxEBkdRQkJUQFUZVl0XRFIXUlNQXA9NB0YSWw9cU0JdXRBZG0MqUxIUFwZDDAVMQfqBEQ4HFENRQ0ZfWVQXUkNYRA9SGFxDQ1UOGV5ZF1NSQ1tRShkMUAoVVlcVUVlSVkcFSxUAD1xREAcNFwJGSVBeU1UDFRRQVhdRUFJWQ15HVko=",
      "prueba": "p16",
      "documentos": [
        "d22",
        "d03"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:fVsUWFhBXlRYWBYKXBhdWBFEVUvxixdWFwxEU0xLAEpIFXRXEl1XRVleBRgGWUZHXARCDgINCRlSVlwRBRNVW0xSFFRbVFlUXhkdQ0ZWUhdBQVhKV0pWF1MGF0NcSxFQA1tGXUZVWUVZEwhZFQ8KU0QAQgcGQwpYEU9bRRAPWlQYTlUWQVRU9JxYSkN/WRNBWEBGUFxZF0NeBllVGV0OSkZZXlkQV0MbGEpEVFRDBUDx1gwKAAJGXVQZQV4BD1FRWVMUVUJQWUNQGRUWWvuaWRFYWFxEWVVWFxJC85AX",
      "prueba": "p07",
      "documentos": [
        "d14",
        "d02"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:fFhHFkRQRUdYXAoXVksTUl8UWFgSX1ZbVlkXXFgZBVxGWVMYBFNCWFZWF1kZQwVdXEUFFgINElxCGVxUBRRbRhQXTRZbVBdTVBkIAhNbXFlCUUZPU1xYRVZPF1NWV0FVCUYSXxNTXkNdQERaWQIIUV0WQgcGQxVMEVZUWAEPWxsYe1UWWlRZWBFcF0NXXRN6VEZX+poYZ0JeBBsQSEwEGQxAQPvVEl5YGEULVEMGFBJTRRYMAAIUGV1YEkcLEkZcVlYaFm4VREIRVQ0BQV1HVgsUWVBeGFNYRABeVVdNAEpGVltWBUdVWUxSREhQEANGUxZCEAIAB11QShJUDkYFAhhTURZaVE5YHRkIAhNO8JpCRFFLUxhTUhcRUlNWXgRLRllTGBTxmUdUWgdZGw==",
      "prueba": "p08",
      "documentos": [
        "d14",
        "d15",
        "d16"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dFYUWFhBVhdVXEQPUhhQVltVFF1XGFFCRApVXFxKTRkDWxJuD1VVWfubFl0VAAlcEgkDQwAPB09UGXp+MC9uenZjcRoXUV5UVANEoZh9XRddVRRbXVtWF1MGWxBVXKKKCBVDTQMSXV5KUkRZWUMLU0Cn2U1DJhRYEUlTQwNGflpKU10MF1BbF11MCgZAFBNEWFoUV1NcXlIXBlkQXFVBVBNGV1dKEkRSVvDJWRUSE1cSFwcADAQDSxFYXlYNSBRsGFJYFlpARFJeGRAKVlZWF1JdWlpdGFtSWA1SQxc=",
      "prueba": "p09",
      "documentos": [
        "d17",
        "d18",
        "d03"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:e15aVVgVW1JeVwEQE0ETQl9bFEpdVFgXWgpFURlYDRkVQFZdFUZVDRhWCBhRBkZeU0UEFgYNElwRXVddQhZVQVFYGhZjR1ZEEVUFQ0FdWV5dWFUVEk1ZVhcBWFxKUBVYRlFXGAFTXUJCUkRBFRADW0FFEAIaDBUZVVwSXRccDhVdWxR5XVoXVkRNp8pdTFpUXhoUdVMYRfSeE1tZWlhBWBZUQF0FW/OEGFYKTEcGRl5TFkIAFgYUXVBKElUHChRFUVZaWRdRUlsRSgUP8ItdGxFQW1dWXRdWWwRCWVxXQVUHFUFXCkbzhBhSCBhDDApEVxdCDwJDCkxLFw==",
      "prueba": "p10",
      "documentos": [
        "d19",
        "d20"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:fVkUU1sVRVJHXBYQXBhXUl0UVktdW19SG0NVUVNWQVwKFVdWAVNDQ10TFU1QQzRdWwJCDQxDF0xYSl0RDgNCVFZDVUQbFVhUWVZEDfCCXlJDW0cZVUpWVVYHWEMZXA8ZClQSTg9XWlYYUAhZQwZGVldFDgwQQwxWSFxAXhFKFFFdWxQGBwQXVl0ZVFMKFBNOEUFaGVpNUlRYWRdVVRlRCVAbEn0VUxBUVFISXRUPBxJHFgNDABYHVUBMW1QQRkBUVFtRRBdRUhd0ShQC8IlSDBFRWBlVSlZVVgdYEFdWQVUJFVpRHF0QQlYTDldMBhRdEgEHQyECFFpUVV1fA0oUTBhZWxZSRhdTVBkBEEddE1RQR1sXEmxYU1YV9J1YFw==",
      "prueba": "p11",
      "documentos": [
        "d21"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:e0JVRFJbQ1YRQEQNRl1FUhFZXVdHTFhEFwZZREtcQVUHFfGCCkZZWlkTFFRUAAcSUQoMQwYPRnZbVhJQFxL3nFZDXVVYFU4XVFVEAkNZVPSCWhoZZlFSWkcMF1RcGRJWBEdTGBZTQlYYUQVSVBFGU15FEgIXCgkVEVxBUg0IUFBKF0FYVhVdWEhYRBoTTlxbR1FGGVMYW1YXBV5VSk0AGRVaXEoPV15TVx0=",
      "prueba": "p12",
      "documentos": [
        "d06",
        "d07",
        "d09"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dVJGVfSdF2dEUANDX1cTR11VWlzxiw0XVAJaUlD60hkDWRJ3DF0QR1dBRFRUQxTxmxUOCgACRlhdGVFUEBRVRxhbVRZBXENFWFcFQ1JWR1IRUVgZVVdVUkUNVlRWS00ZCloSXRVRX1lcWqeLFQYIElcJQg8GoNVXEUASRBGlhxVdWxRXR1RQ9IJXRBNSSlIXQlVXWEAYW1YXEfSZSVUIWgcVUVcIEkNCGF8IWUMGRksSFBcGQwYKGUNWUF5CFlVHXVRdU0VUF1ReSgVDV10TQ0NRRxlfUVlCQwxEHhlzDksCXBJuB15cF1pSDvuGQwpTEhUDDwINBVgRSV1DQgJbRhhaXVoXRVJEVE0FEBNIQVhcUUBQVllEGRcmWRB+UA9cBEdTGANBQFJKUgZZFRYIElEKDxMRAgJWQxc=",
      "prueba": "p13",
      "documentos": [
        "d16",
        "d20",
        "d12"
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
        "texto": "dc1:YVgUW15HVkXylAVDUlQTUl1RV01AUVReRBdWHhl1ABkWVF5ZCFFRF1tGBUxHDEZBV0UAAgmg1RlQGV9QDAkYFV1bFFVCVFNFXhkBEEf7khdUWhRcXhhE9IQXVl5WGRgZBxVeWRUSX1lbVkRBFQATU0AADBcCQyxWQ11bEQcVQFRaVhRXW1n0mh0ZCgwTXV0XXVUUWl1bXllWQ1RfVFZBXQ9fXRZGdlVVXRMAUVsGFF0SAAxDBg9Ga1BPU11ORk0VVlZQX1IVVkdQXgVDX1kTW0ROFF1XGEJZVkNQUVVYQUoPWxJLB1BVRRhDBUpUQxdH8cxM",
        "sospechoso": "jordi"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aEJRRRdMWBdcUBYCQfueVhFVWBlYV05SRQwZEH1WEhkU9ptICltTVksTAVYVEBMSXgwAEQxDHxlCVl5eQg5VV1RWFFJSFUJZUAJED1IYQFJWQVpdUxQXUllDUlZcWhVQEFoSQUZBWVkYVQVbQRYUUxxFIQwNDAVcEVxeEQAUW1ZQUhRXWxVTUkVYCA9WFBNEUFZRGV5XF0ZCBhdGWFUEGRNbEkIHVFlFVxMBVhUkD1xXBxACgePAGUgZUxEOB0cVV1lXUxdMF1REWBYGXUxSF0hVFFxBTFZVVkNFVVpWBlADW1ZXRldcF1lRFlFSDEoSUwsWBhBDAlxdGVZYEQVBR0tYGg==",
        "sospechoso": "roig"
      }
    ],
    "sinDescartar": [
      {
        "sospechoso": "merce",
        "texto": "dc1:eVVGX/SGF04RWgERQfuAF11VFE9bTEVeWQIXVVcZDVYVFVZXFRJdXlZGEFdGQwNcEhQXBkMQAxlQSVNWodUUWVkXUUVDR1JbXVhIQ0oYUhddVUcZXVZUUhcaF1NMWBNcCEFTGAhdEFJLRwVaVEMDXBIADkMQAgr6glceEREPWloYUloWW1QXUkJaBQ9WSlIZEXJVVUZZF0RWAVJCGUgUUKWcXBgDQRD1k18FGEYGpYNdFwsXAkMCXF0ZX0QRA1v3gxdNFkZAXvSYV0QVXFRFXvKHFFgSW1JFRQJFEFVYQU8PQUBRCFMQVhhcF1tAEQdBHA=="
      },
      {
        "sospechoso": "kessel",
        "texto": "dc1:d1FGU1Rc9IQRTRYGQFtaUl9AVUoSVV5bFxNSQ1xNAEpKFVxXRkFVF1RSFxhUAANCRgQQDA1DHxlfVhJCB0ZVRVlFQPWEFVNSEVUFQ0VRR0VYWlUDEl1EQ1YBVhBdXA1YCEFXGAVHUVlcXERLUEMHUEAModBDEwdLUBlXXUIBW1ddRVpXU1pFF0gZBxZSVldYEUdRGVRNUhdbAhdcTENPGShaEkwPV15SGF8IWUMGRksSEAwCQwEHS15XV0IDRlpaGEdVRVYVR1hDGabIQF3whl5GXU1TGFNSW0NaRUpcDvvdGRJIA0BfF0tSBkr2zgcSU0UTFgqgz1cRT1dfBgNGFV1bFHldWhkXd1gIF1IYQFZTUUYZQ030nhcVXl8VGQ4ZF0DxkUZaWU1XH0RZFQwVUUcXAxBN"
      }
    ],
    "descartados": [
      {
        "sospechoso": "ferran",
        "texto": "dc1:fVsUVUJUU1JDVwtDV10TR11VV1hBGFtYFxNYXlwZBVwSR/GZFRJUUhhfBRhWoMdfUxcDQwYNEktUGV5QQhZYVFtWFA4XTBdbUBldTxNBE1teRxRNV0tDXlAMRBwZWEFVB0YSVwhRVRdBEwdNVBEDXEYEQgYNQwpYEV5TXQcU95hZF1dXRVJWWVVWRBZdWRNHXVVXWB4YRF5ZQ19RW1wTGQRUWFkCXRBWGF8FGFAQBVNeABACQw0PGVBVEkKh1UBUVlgaFm4VRFhfGRcWQBhDW1BXVUoSVFZEFxJCVRldBFUHQVNWRl5RF1BcFlkVBwNeEgYDDgEKCQMRV1NVCwMUUFZDRlNQVBdbUBkUEUZdUVYRUFEZQU0XR0UMR1lWGRNWBFoc"
      },
      {
        "sospechoso": "balmes",
        "texto": "dc1:dFhHFkNQRENYXgsQE1RcF0VdUVdXVhdSWUNSXBlcEloDW1NKD10QVhhfBUsVDAhRV0UbQwAWB0tUV0ZQTkZXWlYXUVoXUV5EUkwWEFwYUhdcUVBQU0sXThcAXlVXGQhXEFxGWQJdQxdcVghZWxcDHhIICwYNFxRYQhlTXQUTXVBWF1ZXXVRVVhFVBUNDWV9WX1dVGVdWF1JbQ0Tzik0AVwkbEmFGQ0VeXV1ESUAKA0BXRQEMAREHSxFMXBERA1NASlgUWFgVUllSWBYEUhhGWVAURvqbSFteVAIXVVcZBF8DVkZREF0QWVETCVlbBwcSU0WgyBYNBxlCXPGADRRdQVkXUFNbFVpCQlwLoYgYUhdDUVdWVV1FW1ZN"
      }
    ],
    "cierre": [
      {
        "quien": "gismera",
        "texto": "dc1:YVgUW1IVUUJYGQUPE11fUlJARlBRUURDVk8XSRlXDhkPV1MYAldcF0xcAFcVBwNBUQQPCg0CAlgLGXheEAJdFVpWXvWEFVtWEUkFD1JWUFYfFGRcQFcXW1ZDWV9NWEFdAxVBTUZRUV1ZEwBdFQUTQVsHDgYQQwpYEVxBUhAPVlz7hBRZQ0dWF0FcFhBcVlIXQVVGWBJcUlReEVtVGV2iighRVxgUV1NYX1YWGFkCRlhdHANPQxpGVVAZX1AMCRRETVIUVVJHRfSCGQgCE05aQ0NdWlgSWRdYRABCQlhKQVUKUERZBFMQUE1SCkxQQwReUwsBDEMaRkxfWBJCBxREXF1ZQFMXWF5SX00WAkAY8J5dFFFKRllVVhcGWRBcVUFKpYZGWQhdHg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YRdNWRdUWxdbVh0GQVcfF0FbRhlBTUQXUwxEEEv6yEkKXFFZFRJJF0hcFhhcERVXEhEHDhMRB1deFxJhBxRbFWpYXVEXVEdCX00FQ1tZQENQFFFVElleRVJDRkVcGRNcFUVbSgcIEEZNWgFWFRMHVfHWQgYNQwNfVFpGWBQJFFNNUhT0nFlWF0Jcp9JcSlpDUBRQXF4YWkJEBljyghVBQEZZUxgKW1JFXUcFGFEGRn9XFwGgy0MSUFRXVxEHFVVGGFpdWhdRWERSUAENR1lAF1JdWlpHXVlDVkNHVUpcFVgVFUFZBVNUVksTCFkVFaWfQRUHEQJN"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dFYUQlJb9JpQVAsQE0taWRFQUUpRWUVDVhEXVFxKBVxGWVMYFl5RVFkTXRhMQwpTQUUGDBBDC1BDWF9eEUZcVFteVRZYQUVYEVUFB1wYQ1hDRUFcEkhWRVIA9J1YGQVcC1RBUQdWXxde8MVbXA9IEn4KEUMEFgdXRVxBEQAKVVtbWEcWU1AXW1AZBxHwi11eUlUUV11LF1NSFVhcT1AESwlbEllGV1xbWR0="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dFgURVZWVlpeSkQGXUxBUhFYVUoSXFhEDUNDRRlcDVwFQUBRBVtDQ1kTCldGQwJbXUUOAkMNCU1QFRJcC0ZeWkFSRlkXW1hEEV0NDBNdXxdBRlFaW1cbF05DW19KGQVWFRVRWQtbXlhLEwhUUBUHUFMLQgJDDwcZXFBBXANGUUZbVlhTRVQZ"
      }
    ]
  }
});
