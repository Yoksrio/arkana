/**
 * Expediente 005 — La ciudad perdida.
 * Solo datos: lo registra el motor (docs/juego.md «Cómo se escribe un caso»).
 * Las respuestas son huellas y las pistas, notas y epílogo van codificados (D5):
 * para cambiarlos, usar herramientas/huellas.html.
 */
DetectiveCodex.registrarExpediente({
  "id": "005",
  "numero": "001",
  "titulo": "La ciudad perdida",
  "subtitulo": "Una piedra que llegó a Madrid cambiada",
  "categoria": [
    "aventura",
    "tesoro"
  ],
  "dificultad": 3,
  "duracion": "60–90 min",
  "portada": "img-portada",
  "elementoConductor": {
    "tipo": "objeto",
    "nombre": "La estrella de ocho puntas en piedra",
    "descripcion": "Un fragmento de mapa tallado en arenisca, con una estrella de ocho puntas que señala un lugar de la ciudad."
  },
  "introduccion": "Mayo de 1927, Madrid. La arqueóloga Clara Montalbán volvió en abril del desierto de Libia con la noticia de su vida: una ciudad de tiempos de Trajano enterrada bajo la arena, que ningún mapa recoge. La prueba era una piedra tallada con un plano y una estrella de ocho puntas.\n\nLa caja llegó al Museo Arqueológico con los lacres intactos. La piedra que había dentro, no. Y en Londres, un explorador rival acaba de anunciar que en otoño irá a buscar la misma ciudad.",
  "historia": "Clara Montalbán, conservadora del Museo Arqueológico Nacional, siguió durante años la pista de un itinerario antiguo hasta un oasis del desierto occidental de Egipto. En marzo de 1927, tras once jornadas de camello desde Dajla, encontró las ruinas: murallas, calles, un templo y, en él, un fragmento de arenisca con un plano grabado.\n\nLa expedición la financió el banquero Leopoldo Garmendia. La caravana la guiaba Yusuf al-Dajli, y el fotógrafo Rodrigo Valcárcel lo retrató todo. La piedra viajó en la caja número 4, pesada, sellada y vigilada. Al abrirla en Madrid, el laboratorio del Museo dio la alarma.",
  "objetivo": "Demostrar que la piedra es una copia, averiguar cuándo y quién la cambió, recuperar la auténtica y descubrir qué señala su estrella antes que el rival de Londres.",
  "personajes": [
    {
      "nombre": "Clara Montalbán Ferrer",
      "rol": "Arqueóloga del Museo Arqueológico Nacional. Descubrió la ciudad. Os ha llamado ella.",
      "imagen": "img-clara"
    }
  ],
  "cronologia": [
    {
      "fecha": "9 de marzo de 1927",
      "texto": "La expedición llega a las ruinas tras once jornadas desde el oasis de Dajla."
    },
    {
      "fecha": "21 de marzo de 1927",
      "texto": "Clara encuentra en el templo la piedra con la estrella de ocho puntas."
    },
    {
      "fecha": "28 de marzo de 1927",
      "texto": "La caravana levanta el campamento y emprende la vuelta."
    },
    {
      "fecha": "8 de abril de 1927",
      "texto": "Llegada a Dajla. Las cajas siguen viaje a El Cairo y a Madrid."
    },
    {
      "fecha": "2 de mayo de 1927",
      "texto": "La caja número 4 se abre en el Museo Arqueológico de Madrid."
    },
    {
      "fecha": "14 de mayo de 1927",
      "texto": "Clara Montalbán telegrafía a la Agencia Arkana."
    },
    {
      "fecha": "10 de mayo de 1927",
      "texto": "Arthur Pemberton anuncia en Londres su expedición a la ciudad.",
      "desbloqueadoPor": "p03"
    },
    {
      "fecha": "27 de marzo de 1927, 21:00",
      "texto": "Se pesan las cajas en el campamento.",
      "desbloqueadoPor": "p05"
    },
    {
      "fecha": "28 de marzo de 1927, 02:00",
      "texto": "Los guardias ven una luz en el campamento.",
      "desbloqueadoPor": "p06"
    },
    {
      "fecha": "30 de abril de 1927",
      "texto": "Pemberton envía a Madrid una sopa de letras.",
      "desbloqueadoPor": "p10"
    },
    {
      "fecha": "27 de marzo de 1927, 18:00",
      "texto": "Rodrigo fotografía el almacén para el inventario.",
      "desbloqueadoPor": "p05"
    },
    {
      "fecha": "17 de mayo de 1927",
      "texto": "Se abre en el Museo la caja de placas cerrada con candado.",
      "desbloqueadoPor": "p11b"
    }
  ],
  "ubicaciones": [
    {
      "id": "u-museo",
      "nombre": "Museo Arqueológico Nacional",
      "descripcion": "En el palacio de Biblioteca y Museos de Madrid. El laboratorio está en el sótano.",
      "imagen": "img-museo"
    },
    {
      "id": "u-asteria",
      "nombre": "Las ruinas",
      "descripcion": "Murallas y calles bajo la arena, a once jornadas al oeste de Dajla.",
      "imagen": "img-asteria",
      "desbloqueadoPor": "p02"
    },
    {
      "id": "u-campamento",
      "nombre": "El campamento",
      "descripcion": "Ocho tiendas junto a un pozo, al pie de las ruinas.",
      "imagen": "img-campamento",
      "desbloqueadoPor": "p05"
    },
    {
      "id": "u-dajla",
      "nombre": "Oasis de Dajla",
      "descripcion": "Último oasis antes del desierto. Tiene báscula, aduana y una oficina de telégrafos.",
      "imagen": "img-dajla",
      "desbloqueadoPor": "p08"
    },
    {
      "id": "u-estudio",
      "nombre": "Estudio fotográfico Valcárcel",
      "descripcion": "Calle del Prado, Madrid. Galería acristalada y cuarto oscuro.",
      "imagen": "img-estudio",
      "desbloqueadoPor": "p10"
    }
  ],
  "imagenes": [
    {
      "id": "img-portada",
      "archivo": "portada.jpg",
      "prompt": "Cinematic 1927 illustration of a female archaeologist in a pith helmet uncovering ancient Roman-era ruins half buried in desert sand dunes at sunset, columns and a city wall emerging, camels in the distance, aged sepia and ochre tones, engraving style, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "La ciudad perdida"
      }
    },
    {
      "id": "img-museo",
      "archivo": "museo.jpg",
      "prompt": "1927 photograph of the interior of a Madrid archaeological museum laboratory, wooden crates with straw, a stone fragment on a scale, glass cabinets, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Museo Arqueológico"
      }
    },
    {
      "id": "img-asteria",
      "archivo": "asteria.jpg",
      "prompt": "1927 expedition photograph of ancient city ruins emerging from desert sand, broken columns, a straight stone street, a circular plaza, dunes behind, harsh sunlight, sepia, film grain, no people, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Las ruinas"
      }
    },
    {
      "id": "img-campamento",
      "archivo": "campamento.jpg",
      "prompt": "1927 photograph of an archaeological expedition camp in the Libyan desert, canvas tents, wooden crates, camels resting, a well, evening light, sepia, film grain, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "El campamento"
      }
    },
    {
      "id": "img-dajla",
      "archivo": "dajla.jpg",
      "prompt": "1927 photograph of an Egyptian desert oasis village with mud brick houses and palm trees, a small telegraph office with wires, camels, sepia, film grain, no text",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Dajla"
      }
    },
    {
      "id": "img-estudio",
      "archivo": "estudio.jpg",
      "prompt": "1927 photographer's studio in Madrid, large wooden plate camera on a tripod, glass roof, painted backdrop, stacks of wooden boxes for glass plates, a darkroom door with a red lamp, sepia photograph, no people, no text",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Estudio Valcárcel"
      }
    },
    {
      "id": "img-clara",
      "archivo": "clara.jpg",
      "prompt": "1920s portrait photograph of a Spanish woman archaeologist in her late thirties, short bobbed hair, linen field jacket, determined intelligent eyes, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "C. Montalbán"
      }
    },
    {
      "id": "img-rodrigo",
      "archivo": "rodrigo.jpg",
      "prompt": "1920s portrait photograph of a Spanish expedition photographer in his late thirties, slicked hair, rolled shirt sleeves, a camera strap over the shoulder, charming confident smile, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "R. Valcárcel"
      }
    },
    {
      "id": "img-pemberton",
      "archivo": "pemberton.jpg",
      "prompt": "1920s studio portrait photograph of an English explorer in his fifties, tweed suit, clipped grey moustache, monocle, haughty expression, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "A. Pemberton"
      }
    },
    {
      "id": "img-garmendia",
      "archivo": "garmendia.jpg",
      "prompt": "1920s portrait photograph of a portly Spanish banker in his sixties, white linen suit and panama hat, round face, gold watch chain, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "L. Garmendia"
      }
    },
    {
      "id": "img-yusuf",
      "archivo": "yusuf.jpg",
      "prompt": "1920s portrait photograph of an Egyptian caravan leader in his forties, white turban and dark robe, trimmed beard, calm dignified expression, sepia, oval vignette, no text",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "Y. al-Dajli"
      }
    },
    {
      "id": "img-estela",
      "archivo": "estela.jpg",
      "tamano": "1024x1536",
      "prompt": "1927 expedition photograph of a single ancient Roman-era sandstone stele standing upright in desert sand, seen perfectly straight from the front, centered, filling most of the frame. Gently arched top, flat rectangular body, a thin carved border running around the front face. The front face is smooth, weathered and completely blank: no inscriptions, no letters, no symbols, no hieroglyphs, no carvings inside the border. A few small chips and pits near the edges, fine cracks, sand at the base. Soft even daylight from the upper left, low contrast, no strong shadows across the face. Sepia and ochre tones, film grain, slight vignette, no people, no text, no watermark",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Estela del templo"
      }
    },
    {
      "id": "img-piedra-yacimiento",
      "archivo": "piedra-yacimiento.jpg",
      "prompt": "1927 expedition photograph of a fragment of ancient Roman-era sandstone lying flat on the desert sand at an excavation site, seen from directly above, centered and filling most of the frame. Roughly rectangular with broken irregular edges. The top surface is smooth, weathered and completely blank: no inscriptions, no letters, no symbols, no carvings. A trowel and a brush lying at the edge of the frame, sand and small stones around. Soft even daylight, low contrast, no strong shadows across the surface. Sepia and ochre tones, film grain, slight vignette, no people, no text, no watermark",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Piedra en el yacimiento"
      }
    },
    {
      "id": "img-piedra-dorso",
      "archivo": "piedra-dorso.jpg",
      "prompt": "1927 museum photograph of the back of an ancient sandstone fragment lying on a dark cloth on a laboratory table, seen from directly above, centered and filling most of the frame. Irregular broken edges, rough weathered surface that is completely blank: no inscriptions, no letters, no symbols, no carvings. Soft even light from the upper left, low contrast. Sepia tones, film grain, slight vignette, no people, no text, no watermark",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Dorso de la piedra"
      }
    }
  ],
  "visuales": {
    "foto-original": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fotografía de la piedra en el yacimiento\"><defs><filter id=\"o5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"o5-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"o5-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><linearGradient id=\"o5-arena\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-tierra\"/><stop offset=\"1\" class=\"ilst-manila-oscuro\"/></linearGradient><linearGradient id=\"o5-arenisca\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" class=\"ilst-papel-oscuro\"/><stop offset=\"0.5\" class=\"ilst-piedra\"/><stop offset=\"1\" class=\"ilst-tierra\"/></linearGradient><pattern id=\"o5-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><image href=\"assets/img/005/piedra-yacimiento.jpg\" x=\"-0.35\" y=\"-0.3\" width=\"1.7\" height=\"1.6\" preserveAspectRatio=\"none\"/></pattern><filter id=\"o5-grabado\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feMorphology in=\"SourceAlpha\" operator=\"dilate\" radius=\"0.43\" result=\"grueso\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.741\" numOctaves=\"2\" seed=\"4\" result=\"ruido\"/><feDisplacementMap in=\"grueso\" in2=\"ruido\" scale=\"0.9\" result=\"roto\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.0529\" numOctaves=\"2\" seed=\"9\" result=\"manchas\"/><feColorMatrix in=\"manchas\" type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.6 1.12\" result=\"desgaste\"/><feComposite in=\"roto\" in2=\"desgaste\" operator=\"in\" result=\"surco\"/><feFlood class=\"ilfl-tinta\" flood-opacity=\"0.78\"/><feComposite in2=\"surco\" operator=\"in\" result=\"hueco\"/><feOffset in=\"surco\" dx=\"1.3\" dy=\"1.3\" result=\"desplazado\"/><feComposite in=\"surco\" in2=\"desplazado\" operator=\"out\" result=\"bordeSombra\"/><feFlood class=\"ilfl-noche\" flood-opacity=\"0.75\"/><feComposite in2=\"bordeSombra\" operator=\"in\" result=\"sombra\"/><feComposite in=\"desplazado\" in2=\"surco\" operator=\"out\" result=\"labio\"/><feGaussianBlur in=\"labio\" stdDeviation=\"0.5\" result=\"labioSuave\"/><feFlood class=\"ilfl-papel-claro\" flood-opacity=\"0.5\"/><feComposite in2=\"labioSuave\" operator=\"in\" result=\"luz\"/><feMerge><feMergeNode in=\"luz\"/><feMergeNode in=\"hueco\"/><feMergeNode in=\"sombra\"/></feMerge></filter></defs><rect width=\"760\" height=\"560\" fill=\"url(#o5-arena)\"/><circle cx=\"0\" cy=\"0\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"137\" cy=\"89\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"274\" cy=\"178\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"411\" cy=\"267\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"548\" cy=\"356\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"685\" cy=\"445\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"62\" cy=\"534\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"199\" cy=\"63\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"336\" cy=\"152\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"473\" cy=\"241\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"610\" cy=\"330\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"747\" cy=\"419\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"124\" cy=\"508\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"261\" cy=\"37\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"398\" cy=\"126\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"535\" cy=\"215\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"672\" cy=\"304\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"49\" cy=\"393\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"186\" cy=\"482\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"323\" cy=\"11\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"460\" cy=\"100\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"597\" cy=\"189\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"734\" cy=\"278\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"111\" cy=\"367\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"248\" cy=\"456\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"385\" cy=\"545\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"522\" cy=\"74\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"659\" cy=\"163\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"36\" cy=\"252\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"173\" cy=\"341\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"310\" cy=\"430\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"447\" cy=\"519\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"584\" cy=\"48\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"721\" cy=\"137\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"98\" cy=\"226\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"235\" cy=\"315\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"372\" cy=\"404\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"509\" cy=\"493\" r=\"2\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"646\" cy=\"22\" r=\"3\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><circle cx=\"23\" cy=\"111\" r=\"1\" class=\"ilf-manila-oscuro\" opacity=\"0.5\"/><ellipse cx=\"400\" cy=\"420\" rx=\"220\" ry=\"40\" class=\"ilf-tinta\" opacity=\"0.25\" filter=\"url(#o5-difuso)\"/><g transform=\"translate(180 100)\"><clipPath id=\"o5-recorte\"><path d=\"M38 40 L120 18 L210 30 L300 12 L372 52 L388 140 L362 214 L380 262 L300 290 L190 278 L96 292 L30 248 L48 170 L22 102 Z\"/></clipPath><path d=\"M38 40 L120 18 L210 30 L300 12 L372 52 L388 140 L362 214 L380 262 L300 290 L190 278 L96 292 L30 248 L48 170 L22 102 Z\" fill=\"url(#o5-arenisca)\" class=\"ils-piedra-sombra\" stroke-width=\"3\"/><path d=\"M38 40 L120 18 L210 30 L300 12 L372 52 L388 140 L362 214 L380 262 L300 290 L190 278 L96 292 L30 248 L48 170 L22 102 Z\" fill=\"url(#o5-foto)\" class=\"ils-piedra-sombra\" stroke-width=\"3\"/><g clip-path=\"url(#o5-recorte)\"><path d=\"M0 30 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 62 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 94 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 126 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 158 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 190 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 222 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 254 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 286 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M361.0 -137.5 L361.0 713.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M361.0 -137.5 L361.0 713.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M625.5 288.0 L27.5 288.0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M625.5 288.0 L27.5 288.0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M251.8 115.5 L361.0 115.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M251.8 115.5 L361.0 115.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M188.5 178.8 L188.5 288.0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M188.5 178.8 L188.5 288.0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M143.7 160.3 L39.0 265.0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M143.7 160.3 L39.0 265.0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M188.5 52.3 L188.5 -91.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M188.5 52.3 L188.5 -91.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M188.5 288.0 L188.5 644.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M188.5 288.0 L188.5 644.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M361.0 460.5 L545.0 460.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M361.0 460.5 L545.0 460.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M361.0 0.5 L533.5 0.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M361.0 0.5 L533.5 0.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M251.75 115.5 A63.24999999999999 63.24999999999999 0 1 0 125.25 115.5 A63.24999999999999 63.24999999999999 0 1 0 251.75 115.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M251.75 115.5 A63.24999999999999 63.24999999999999 0 1 0 125.25 115.5 A63.24999999999999 63.24999999999999 0 1 0 251.75 115.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M132.5 210.0 L136.0 223.5 L144.2 220.3 L141.0 228.5 L154.5 232.0 L141.0 235.5 L144.2 243.7 L136.0 240.5 L132.5 254.0 L129.0 240.5 L120.8 243.7 L124.0 235.5 L110.5 232.0 L124.0 228.5 L120.8 220.3 L129.0 223.5 Z\" class=\"ilf-piedra-sombra\"/><path d=\"M131.0 208.5 L134.5 222.0 L142.7 218.8 L139.5 227.0 L153.0 230.5 L139.5 234.0 L142.7 242.2 L134.5 239.0 L131.0 252.5 L127.5 239.0 L119.3 242.2 L122.5 234.0 L109.0 230.5 L122.5 227.0 L119.3 218.8 L127.5 222.0 Z\" class=\"ilf-tinta-suave ils-tinta\"/></g><g filter=\"url(#o5-grabado)\"><g transform=\"translate(226 30) scale(0.6)\"><rect x=\"0\" y=\"0\" width=\"262\" height=\"52\" rx=\"24\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\"/><line x1=\"-8\" y1=\"6\" x2=\"-8\" y2=\"46\" class=\"ils-tinta\" stroke-width=\"3\"/><g transform=\"translate(219 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3 L26 18 L14 33 L2 18 Z\"/></g><g transform=\"translate(185 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 4 A14 14 0 1 0 20 32 A10 10 0 1 1 20 4 Z\"/></g><g transform=\"translate(151 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2 L14 34 M14 10 L5 4 M14 10 L23 4 M14 19 L5 13 M14 19 L23 13 M14 28 L5 22 M14 28 L23 22\"/></g><g transform=\"translate(117 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12 q6 -8 12 0 t12 0 M2 24 q6 -8 12 0 t12 0\"/></g><g transform=\"translate(83 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"14\" cy=\"18\" r=\"11\"/><circle cx=\"14\" cy=\"18\" r=\"2.2\" class=\"ilf-tinta\"/></g><g transform=\"translate(49 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3 L8 33 M20 3 L20 33\"/></g><g transform=\"translate(15 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3 L26 18 L14 33 L2 18 Z\"/></g></g></g><path d=\"M120 18 L128 46 L116 80\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\" opacity=\"0.6\"/></g><g transform=\"translate(60 470)\"><rect width=\"100\" height=\"10\" class=\"ilf-papel-claro ils-tinta\"/><rect width=\"50\" height=\"10\" class=\"ilf-tinta\"/><text class=\"il-texto-foto\" y=\"30\">10 cm</text></g><text class=\"il-texto-foto\" x=\"730\" y=\"534\" text-anchor=\"end\">Templo · 21-III-1927 · placa 31 · R. V.</text><g pointer-events=\"none\"><rect width=\"760\" height=\"560\" class=\"ilf-manila\" opacity=\"0.22\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" filter=\"url(#o5-grano)\" opacity=\"0.16\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" fill=\"url(#o5-vineta)\"/></g></svg>",
    "copia": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"La piedra llegada a Madrid, dibujada en el Museo\"><defs><radialGradient id=\"y5-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"y5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"y5-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><linearGradient id=\"y5-arenisca\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></linearGradient><pattern id=\"y5-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#y5-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#y5-papel)\" opacity=\"0.4\"/></pattern></defs><rect width=\"760\" height=\"560\" fill=\"url(#y5-foto)\"/><ellipse cx=\"623.1999999999999\" cy=\"112\" rx=\"68.39999999999999\" ry=\"39.2\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#y5-difuso)\"/><ellipse cx=\"91.2\" cy=\"476\" rx=\"53.2\" ry=\"33.6\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#y5-difuso)\"/><text class=\"il-texto il-texto-titulo-peq\" x=\"380\" y=\"54\" text-anchor=\"middle\">Pieza 1927/114 · cara labrada</text><g transform=\"translate(580 110) scale(-1 1)\"><clipPath id=\"y5-recorte\"><path d=\"M38 40 L120 18 L210 30 L300 12 L372 52 L388 140 L362 214 L380 262 L300 290 L190 278 L96 292 L30 248 L48 170 L22 102 Z\"/></clipPath><path d=\"M38 40 L120 18 L210 30 L300 12 L372 52 L388 140 L362 214 L380 262 L300 290 L190 278 L96 292 L30 248 L48 170 L22 102 Z\" fill=\"url(#y5-arenisca)\" class=\"ils-piedra-sombra\" stroke-width=\"3\"/><g clip-path=\"url(#y5-recorte)\"><path d=\"M0 30 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 62 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 94 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 126 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 158 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 190 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 222 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 254 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 286 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M361.0 -137.5 L361.0 713.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M361.0 -137.5 L361.0 713.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M625.5 288.0 L27.5 288.0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M625.5 288.0 L27.5 288.0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M251.8 115.5 L361.0 115.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M251.8 115.5 L361.0 115.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M188.5 178.8 L188.5 288.0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M188.5 178.8 L188.5 288.0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M143.7 160.3 L39.0 265.0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M143.7 160.3 L39.0 265.0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M188.5 52.3 L188.5 -91.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M188.5 52.3 L188.5 -91.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M188.5 288.0 L188.5 644.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M188.5 288.0 L188.5 644.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M361.0 460.5 L545.0 460.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M361.0 460.5 L545.0 460.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M361.0 0.5 L533.5 0.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M361.0 0.5 L533.5 0.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M251.75 115.5 A63.24999999999999 63.24999999999999 0 1 0 125.25 115.5 A63.24999999999999 63.24999999999999 0 1 0 251.75 115.5\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M251.75 115.5 A63.24999999999999 63.24999999999999 0 1 0 125.25 115.5 A63.24999999999999 63.24999999999999 0 1 0 251.75 115.5\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"translate(1.5 1.5)\"/><path d=\"M132.5 210.0 L136.0 223.5 L144.2 220.3 L141.0 228.5 L154.5 232.0 L141.0 235.5 L144.2 243.7 L136.0 240.5 L132.5 254.0 L129.0 240.5 L120.8 243.7 L124.0 235.5 L110.5 232.0 L124.0 228.5 L120.8 220.3 L129.0 223.5 Z\" class=\"ilf-piedra-sombra\"/><path d=\"M131.0 208.5 L134.5 222.0 L142.7 218.8 L139.5 227.0 L153.0 230.5 L139.5 234.0 L142.7 242.2 L134.5 239.0 L131.0 252.5 L127.5 239.0 L119.3 242.2 L122.5 234.0 L109.0 230.5 L122.5 227.0 L119.3 218.8 L127.5 222.0 Z\" class=\"ilf-tinta-suave ils-tinta\"/></g><g transform=\"translate(226 30) scale(0.6)\"><rect x=\"0\" y=\"0\" width=\"262\" height=\"52\" rx=\"24\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\"/><line x1=\"-8\" y1=\"6\" x2=\"-8\" y2=\"46\" class=\"ils-tinta\" stroke-width=\"3\"/><g transform=\"translate(219 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3 L26 18 L14 33 L2 18 Z\"/></g><g transform=\"translate(185 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 4 A14 14 0 1 0 20 32 A10 10 0 1 1 20 4 Z\"/></g><g transform=\"translate(151 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2 L14 34 M14 10 L5 4 M14 10 L23 4 M14 19 L5 13 M14 19 L23 13 M14 28 L5 22 M14 28 L23 22\"/></g><g transform=\"translate(117 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12 q6 -8 12 0 t12 0 M2 24 q6 -8 12 0 t12 0\"/></g><g transform=\"translate(83 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"14\" cy=\"18\" r=\"11\"/><circle cx=\"14\" cy=\"18\" r=\"2.2\" class=\"ilf-tinta\"/></g><g transform=\"translate(49 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3 L8 33 M20 3 L20 33\"/></g><g transform=\"translate(15 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3 L26 18 L14 33 L2 18 Z\"/></g></g></g><text class=\"il-texto il-texto-peq\" x=\"60\" y=\"510\">Dibujo a escala 1:2 · Laboratorio del Museo Arqueológico Nacional · 3 de mayo de 1927</text><rect width=\"760\" height=\"560\" filter=\"url(#y5-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"744\" height=\"544\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"734\" height=\"534\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "estela": "<svg viewBox=\"110 0 804 1536\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Estela bilingüe del templo\"><defs><linearGradient id=\"e5-piedra\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" class=\"ilst-piedra\"/><stop offset=\"0.6\" class=\"ilst-tierra\"/><stop offset=\"1\" class=\"ilst-piedra-sombra\"/></linearGradient><filter id=\"e5-grabado\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feMorphology in=\"SourceAlpha\" operator=\"dilate\" radius=\"0.45\" result=\"grueso\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.700\" numOctaves=\"2\" seed=\"4\" result=\"ruido\"/><feDisplacementMap in=\"grueso\" in2=\"ruido\" scale=\"1.0\" result=\"roto\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.0500\" numOctaves=\"2\" seed=\"9\" result=\"manchas\"/><feColorMatrix in=\"manchas\" type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.6 1.12\" result=\"desgaste\"/><feComposite in=\"roto\" in2=\"desgaste\" operator=\"in\" result=\"surco\"/><feFlood class=\"ilfl-tinta\" flood-opacity=\"0.78\"/><feComposite in2=\"surco\" operator=\"in\" result=\"hueco\"/><feOffset in=\"surco\" dx=\"1.4\" dy=\"1.4\" result=\"desplazado\"/><feComposite in=\"surco\" in2=\"desplazado\" operator=\"out\" result=\"bordeSombra\"/><feFlood class=\"ilfl-noche\" flood-opacity=\"0.75\"/><feComposite in2=\"bordeSombra\" operator=\"in\" result=\"sombra\"/><feComposite in=\"desplazado\" in2=\"surco\" operator=\"out\" result=\"labio\"/><feGaussianBlur in=\"labio\" stdDeviation=\"0.5\" result=\"labioSuave\"/><feFlood class=\"ilfl-papel-claro\" flood-opacity=\"0.5\"/><feComposite in2=\"labioSuave\" operator=\"in\" result=\"luz\"/><feMerge><feMergeNode in=\"luz\"/><feMergeNode in=\"hueco\"/><feMergeNode in=\"sombra\"/></feMerge></filter></defs><rect x=\"110\" width=\"804\" height=\"1536\" class=\"ilf-manila-oscuro\"/><path d=\"M150 1430 L150 280 Q150 30 505 30 Q860 30 860 280 L860 1430 Z\" fill=\"url(#e5-piedra)\" class=\"ils-piedra-sombra\" stroke-width=\"4\"/><image href=\"assets/img/005/estela.jpg\" width=\"1024\" height=\"1536\"/><g filter=\"url(#e5-grabado)\"><g transform=\"translate(114.4 174) scale(1.02)\"><text class=\"il-texto-titulo-peq\" x=\"380\" y=\"200\" text-anchor=\"middle\" letter-spacing=\"3\" fill-opacity=\"0.85\">ANNO · XI · IMP · CAES · TRAIANI</text><text class=\"il-texto-titulo-peq\" x=\"380\" y=\"242\" text-anchor=\"middle\" letter-spacing=\"3\" fill-opacity=\"0.85\">LVCIVS · PRAEFECTVS</text><text class=\"il-texto-titulo-peq\" x=\"380\" y=\"284\" text-anchor=\"middle\" letter-spacing=\"3\" fill-opacity=\"0.85\">TEMPLVM · XXIV · COLVMNARVM</text><text class=\"il-texto-titulo-peq\" x=\"380\" y=\"326\" text-anchor=\"middle\" letter-spacing=\"3\" fill-opacity=\"0.85\">SELENAE · DEDICAVIT</text><text class=\"il-texto-titulo-peq\" x=\"380\" y=\"368\" text-anchor=\"middle\" letter-spacing=\"3\" fill-opacity=\"0.85\">A · PVTEO · PASSVS · ▒▒▒</text></g><g transform=\"translate(65 157) scale(1.15)\"><line x1=\"140\" y1=\"420\" x2=\"620\" y2=\"420\" class=\"ils-piedra-sombra\" stroke-width=\"2\"/><g transform=\"translate(520 452)\" class=\"ils-tinta\" stroke-width=\"2.4\" fill=\"none\"><line x1=\"3\" y1=\"4\" x2=\"3\" y2=\"32\"/><line x1=\"15\" y1=\"4\" x2=\"15\" y2=\"32\"/><circle cx=\"28\" cy=\"18\" r=\"3\" class=\"ilf-tinta\"/></g><g transform=\"translate(196 444)\"><rect x=\"0\" y=\"0\" width=\"262\" height=\"52\" rx=\"24\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\"/><line x1=\"-8\" y1=\"6\" x2=\"-8\" y2=\"46\" class=\"ils-tinta\" stroke-width=\"3\"/><g transform=\"translate(219 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2 L14 34 M14 10 L5 4 M14 10 L23 4 M14 19 L5 13 M14 19 L23 13 M14 28 L5 22 M14 28 L23 22\"/></g><g transform=\"translate(185 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"14\" cy=\"18\" r=\"11\"/><circle cx=\"14\" cy=\"18\" r=\"2.2\" class=\"ilf-tinta\"/></g><g transform=\"translate(151 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3 L26 18 L14 33 L2 18 Z\"/></g><g transform=\"translate(117 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 3 L20 25 Q20 34 10 32 M14 3 L26 3\"/></g><g transform=\"translate(83 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3 L26 18 L14 33 L2 18 Z\"/></g><g transform=\"translate(49 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 32 L8 4 L14 32 L20 4 L26 32\"/></g><g transform=\"translate(15 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"14\" cy=\"7\" r=\"2.6\" class=\"ilf-tinta\"/><circle cx=\"6\" cy=\"28\" r=\"2.6\" class=\"ilf-tinta\"/><circle cx=\"22\" cy=\"28\" r=\"2.6\" class=\"ilf-tinta\"/></g></g><g transform=\"translate(330 524)\"><rect x=\"0\" y=\"0\" width=\"194\" height=\"52\" rx=\"24\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\"/><line x1=\"-8\" y1=\"6\" x2=\"-8\" y2=\"46\" class=\"ils-tinta\" stroke-width=\"3\"/><g transform=\"translate(151 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 33 L3 23 L13 23 L13 13 L23 13 L23 3\"/></g><g transform=\"translate(117 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"14\" cy=\"18\" r=\"7\"/><path d=\"M14 2 L14 34 M0 18 L28 18\"/></g><g transform=\"translate(83 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 6 L26 6 L14 30 Z M8 34 L20 34\"/></g><g transform=\"translate(49 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3 L8 33 M20 3 L20 33\"/></g><g transform=\"translate(15 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"14\" cy=\"7\" r=\"2.6\" class=\"ilf-tinta\"/><circle cx=\"6\" cy=\"28\" r=\"2.6\" class=\"ilf-tinta\"/><circle cx=\"22\" cy=\"28\" r=\"2.6\" class=\"ilf-tinta\"/></g></g><g transform=\"translate(210 604)\" class=\"ils-tinta\" stroke-width=\"2.4\" fill=\"none\"><circle cx=\"10\" cy=\"18\" r=\"9\"/><circle cx=\"30\" cy=\"18\" r=\"3\" class=\"ilf-tinta\"/><circle cx=\"42\" cy=\"18\" r=\"3\" class=\"ilf-tinta\"/><circle cx=\"54\" cy=\"18\" r=\"3\" class=\"ilf-tinta\"/><circle cx=\"66\" cy=\"18\" r=\"3\" class=\"ilf-tinta\"/></g><g transform=\"translate(300 596)\"><rect x=\"0\" y=\"0\" width=\"228\" height=\"52\" rx=\"24\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\"/><line x1=\"-8\" y1=\"6\" x2=\"-8\" y2=\"46\" class=\"ils-tinta\" stroke-width=\"3\"/><g transform=\"translate(185 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 4 A14 14 0 1 0 20 32 A10 10 0 1 1 20 4 Z\"/></g><g transform=\"translate(151 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12 q6 -8 12 0 t12 0 M2 24 q6 -8 12 0 t12 0\"/></g><g transform=\"translate(117 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 33 L3 23 L13 23 L13 13 L23 13 L23 3\"/></g><g transform=\"translate(83 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12 q6 -8 12 0 t12 0 M2 24 q6 -8 12 0 t12 0\"/></g><g transform=\"translate(49 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 32 L8 4 L14 32 L20 4 L26 32\"/></g><g transform=\"translate(15 8)\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12 q6 -8 12 0 t12 0 M2 24 q6 -8 12 0 t12 0\"/></g></g><g transform=\"translate(400 680)\" class=\"ils-tinta\" stroke-width=\"2.4\" fill=\"none\"><circle cx=\"10\" cy=\"18\" r=\"9\"/><circle cx=\"36\" cy=\"18\" r=\"9\"/><line x1=\"55\" y1=\"4\" x2=\"55\" y2=\"32\"/><circle cx=\"68\" cy=\"18\" r=\"3\" class=\"ilf-tinta\"/><circle cx=\"80\" cy=\"18\" r=\"3\" class=\"ilf-tinta\"/></g><path d=\"M330 700 L380 700 M330 690 L330 710\" class=\"ils-tinta\" stroke-width=\"2.4\"/></g></g></svg>",
    "campamento": "<svg viewBox=\"0 0 880 680\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Plano del campamento de la expedición\"><defs><radialGradient id=\"c5-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"c5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"c5-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"c5-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#c5-papel)\"/><image href=\"assets/img/texturas/mapa.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#c5-papel)\" opacity=\"0.45\"/></pattern></defs><rect width=\"880\" height=\"680\" fill=\"url(#c5-foto)\"/><ellipse cx=\"721.5999999999999\" cy=\"136\" rx=\"79.2\" ry=\"47.6\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#c5-difuso)\"/><ellipse cx=\"105.6\" cy=\"578\" rx=\"61.60000000000001\" ry=\"40.8\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#c5-difuso)\"/><line x1=\"60\" y1=\"60\" x2=\"60\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"100\" y1=\"60\" x2=\"100\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"140\" y1=\"60\" x2=\"140\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"180\" y1=\"60\" x2=\"180\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"220\" y1=\"60\" x2=\"220\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"260\" y1=\"60\" x2=\"260\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"300\" y1=\"60\" x2=\"300\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"340\" y1=\"60\" x2=\"340\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"380\" y1=\"60\" x2=\"380\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"420\" y1=\"60\" x2=\"420\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"460\" y1=\"60\" x2=\"460\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"500\" y1=\"60\" x2=\"500\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"540\" y1=\"60\" x2=\"540\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"580\" y1=\"60\" x2=\"580\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"620\" y1=\"60\" x2=\"620\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"660\" y1=\"60\" x2=\"660\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"700\" y1=\"60\" x2=\"700\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"740\" y1=\"60\" x2=\"740\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"780\" y1=\"60\" x2=\"780\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"820\" y1=\"60\" x2=\"820\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"60\" x2=\"820\" y2=\"60\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"100\" x2=\"820\" y2=\"100\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"140\" x2=\"820\" y2=\"140\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"180\" x2=\"820\" y2=\"180\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"220\" x2=\"820\" y2=\"220\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"260\" x2=\"820\" y2=\"260\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"300\" x2=\"820\" y2=\"300\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"340\" x2=\"820\" y2=\"340\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"380\" x2=\"820\" y2=\"380\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"420\" x2=\"820\" y2=\"420\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"460\" x2=\"820\" y2=\"460\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"500\" x2=\"820\" y2=\"500\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"540\" x2=\"820\" y2=\"540\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"580\" x2=\"820\" y2=\"580\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><line x1=\"60\" y1=\"620\" x2=\"820\" y2=\"620\" class=\"ils-tinta-azul\" stroke-width=\"0.5\" opacity=\"0.3\"/><text class=\"il-texto il-texto-titulo-peq\" x=\"440\" y=\"44\" text-anchor=\"middle\">Campamento de Asteria · noche del 27 de marzo</text><path d=\"M40 640 q80 -40 160 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1.2\"/><path d=\"M440 650 q80 -40 160 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1.2\"/><path d=\"M720 130 q80 -40 160 0\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1.2\"/><g class=\"punto\" data-punto=\"t1\" transform=\"translate(180 220)\" tabindex=\"0\" role=\"button\" aria-label=\"Tienda 1\"><circle r=\"30\" class=\"punto-zona\"/><path d=\"M-26 16 L0 -20 L26 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.6\"/><path d=\"M0 -20 L0 16 M-8 16 L0 2 L8 16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"180\" y=\"258\" text-anchor=\"middle\" pointer-events=\"none\">1</text><g class=\"punto\" data-punto=\"t2\" transform=\"translate(420 260)\" tabindex=\"0\" role=\"button\" aria-label=\"Tienda 2\"><circle r=\"30\" class=\"punto-zona\"/><path d=\"M-26 16 L0 -20 L26 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.6\"/><path d=\"M0 -20 L0 16 M-8 16 L0 2 L8 16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"420\" y=\"298\" text-anchor=\"middle\" pointer-events=\"none\">2</text><g class=\"punto\" data-punto=\"t3\" transform=\"translate(300 380)\" tabindex=\"0\" role=\"button\" aria-label=\"Tienda 3\"><circle r=\"30\" class=\"punto-zona\"/><path d=\"M-26 16 L0 -20 L26 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.6\"/><path d=\"M0 -20 L0 16 M-8 16 L0 2 L8 16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"300\" y=\"418\" text-anchor=\"middle\" pointer-events=\"none\">3</text><g class=\"punto\" data-punto=\"t4\" transform=\"translate(520 380)\" tabindex=\"0\" role=\"button\" aria-label=\"Tienda 4\"><circle r=\"30\" class=\"punto-zona\"/><path d=\"M-26 16 L0 -20 L26 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.6\"/><path d=\"M0 -20 L0 16 M-8 16 L0 2 L8 16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"520\" y=\"418\" text-anchor=\"middle\" pointer-events=\"none\">4</text><g class=\"punto\" data-punto=\"t5\" transform=\"translate(180 520)\" tabindex=\"0\" role=\"button\" aria-label=\"Tienda 5\"><circle r=\"30\" class=\"punto-zona\"/><path d=\"M-26 16 L0 -20 L26 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.6\"/><path d=\"M0 -20 L0 16 M-8 16 L0 2 L8 16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"180\" y=\"558\" text-anchor=\"middle\" pointer-events=\"none\">5</text><g class=\"punto\" data-punto=\"t6\" transform=\"translate(600 560)\" tabindex=\"0\" role=\"button\" aria-label=\"Tienda 6\"><circle r=\"30\" class=\"punto-zona\"/><path d=\"M-26 16 L0 -20 L26 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.6\"/><path d=\"M0 -20 L0 16 M-8 16 L0 2 L8 16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"600\" y=\"598\" text-anchor=\"middle\" pointer-events=\"none\">6</text><g class=\"punto\" data-punto=\"t7\" transform=\"translate(420 520)\" tabindex=\"0\" role=\"button\" aria-label=\"Tienda 7\"><circle r=\"30\" class=\"punto-zona\"/><path d=\"M-26 16 L0 -20 L26 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.6\"/><path d=\"M0 -20 L0 16 M-8 16 L0 2 L8 16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"420\" y=\"558\" text-anchor=\"middle\" pointer-events=\"none\">7</text><g class=\"punto\" data-punto=\"t8\" transform=\"translate(700 250)\" tabindex=\"0\" role=\"button\" aria-label=\"Tienda 8\"><circle r=\"30\" class=\"punto-zona\"/><path d=\"M-26 16 L0 -20 L26 16 Z\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.6\"/><path d=\"M0 -20 L0 16 M-8 16 L0 2 L8 16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1\"/></g><text class=\"il-texto il-texto-etiqueta\" x=\"700\" y=\"288\" text-anchor=\"middle\" pointer-events=\"none\">8</text><circle cx=\"660\" cy=\"470\" r=\"12\" class=\"ilf-mar-oscuro ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto il-texto-peq\" x=\"660\" y=\"498\" text-anchor=\"middle\">pozo</text><text class=\"il-texto il-texto-peq\" x=\"250\" y=\"620\" font-style=\"italic\">camellos trabados</text><g transform=\"translate(520 160)\"><circle r=\"9\" class=\"ilf-rojo ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto il-texto-etiqueta\" x=\"14\" y=\"5\"></text></g><text class=\"il-texto il-texto-peq\" x=\"536\" y=\"150\">guardia norte (Yusuf)</text><g transform=\"translate(780 380)\"><circle r=\"9\" class=\"ilf-rojo ils-tinta\" stroke-width=\"1.5\"/><text class=\"il-texto il-texto-etiqueta\" x=\"14\" y=\"5\"></text></g><text class=\"il-texto il-texto-peq\" x=\"790\" y=\"356\" text-anchor=\"end\">guardia este (Karim)</text><g transform=\"translate(100 110)\"><circle r=\"30\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.2\"/><path d=\"M0 -36 L6 0 L0 5 L-6 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 36 L6 0 L0 -5 L-6 0 Z\" class=\"ilf-papel-oscuro ils-tinta\" stroke-width=\"0.8\"/><path d=\"M-36 0 L0 -5 L36 0 L0 5 Z\" class=\"ilf-tinta-suave\" opacity=\"0.5\"/><text class=\"il-texto il-texto-etiqueta\" y=\"-42\" text-anchor=\"middle\">N</text><text class=\"il-texto il-texto-peq\" x=\"40\" y=\"5\">E</text><text class=\"il-texto il-texto-peq\" x=\"-52\" y=\"5\">O</text><text class=\"il-texto il-texto-peq\" y=\"52\" text-anchor=\"middle\">S</text></g><text class=\"il-texto il-texto-peq\" x=\"60\" y=\"658\" font-style=\"italic\">Cada cuadro, diez pasos. Dibujado por Clara Montalbán el 26 de marzo.</text><rect width=\"880\" height=\"680\" filter=\"url(#c5-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"864\" height=\"664\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"854\" height=\"654\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "trazas": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fotografía nocturna con las estrellas en arco\"><defs><filter id=\"s5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"s5-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"s5-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><filter id=\"s5-brillo\"><feGaussianBlur stdDeviation=\"0.6\"/></filter></defs><rect width=\"760\" height=\"560\" class=\"ilf-noche\"/><line x1=\"380\" y1=\"170\" x2=\"380.0\" y2=\"-350.0\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"3 7\" opacity=\"0.28\"/><line x1=\"380\" y1=\"170\" x2=\"747.7\" y2=\"-197.7\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"3 7\" opacity=\"0.28\"/><line x1=\"380\" y1=\"170\" x2=\"900.0\" y2=\"170.0\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"3 7\" opacity=\"0.28\"/><line x1=\"380\" y1=\"170\" x2=\"747.7\" y2=\"537.7\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"3 7\" opacity=\"0.28\"/><line x1=\"380\" y1=\"170\" x2=\"380.0\" y2=\"690.0\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"3 7\" opacity=\"0.28\"/><line x1=\"380\" y1=\"170\" x2=\"12.3\" y2=\"537.7\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"3 7\" opacity=\"0.28\"/><line x1=\"380\" y1=\"170\" x2=\"-140.0\" y2=\"170.0\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"3 7\" opacity=\"0.28\"/><line x1=\"380\" y1=\"170\" x2=\"12.3\" y2=\"-197.7\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"3 7\" opacity=\"0.28\"/><path d=\"M486.1 63.9 A150 150 0 0 1 530.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"0.7\" stroke-dasharray=\"2 4\" opacity=\"0.5\"/><text class=\"il-texto-foto\" x=\"533.4\" y=\"106.5\" font-size=\"13\" opacity=\"0.7\">45°</text><path d=\"M363.0 153.0 A24 24 0 0 1 380.0 146.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 212.0 A42 42 0 0 1 350.3 199.7\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.55\" filter=\"url(#s5-brillo)\"/><path d=\"M428.0 170.0 A48 48 0 0 1 413.9 203.9\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.65\" filter=\"url(#s5-brillo)\"/><path d=\"M341.8 208.2 A54 54 0 0 1 326.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M430.9 220.9 A72 72 0 0 1 380.0 242.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.85\" filter=\"url(#s5-brillo)\"/><path d=\"M458.0 170.0 A78 78 0 0 1 435.2 225.2\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M460.6 89.4 A114 114 0 0 1 494.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.55\" filter=\"url(#s5-brillo)\"/><path d=\"M224.0 170.0 A156 156 0 0 1 269.7 59.7\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.65\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 332.0 A162 162 0 0 1 265.4 284.6\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 -4.0 A174 174 0 0 1 503.0 47.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.85\" filter=\"url(#s5-brillo)\"/><path d=\"M507.3 42.7 A180 180 0 0 1 560.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M566.0 170.0 A186 186 0 0 1 511.5 301.5\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.55\" filter=\"url(#s5-brillo)\"/><path d=\"M244.2 34.2 A192 192 0 0 1 380.0 -22.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.65\" filter=\"url(#s5-brillo)\"/><path d=\"M590.0 170.0 A210 210 0 0 1 528.5 318.5\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 386.0 A216 216 0 0 1 227.3 322.7\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.85\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 -64.0 A234 234 0 0 1 545.5 4.5\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M620.0 170.0 A240 240 0 0 1 549.7 339.7\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.55\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 -88.0 A258 258 0 0 1 562.4 -12.4\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.65\" filter=\"url(#s5-brillo)\"/><path d=\"M193.3 -16.7 A264 264 0 0 1 380.0 -94.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M650.0 170.0 A270 270 0 0 1 570.9 360.9\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.85\" filter=\"url(#s5-brillo)\"/><path d=\"M184.8 365.2 A276 276 0 0 1 104.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M80.0 170.0 A300 300 0 0 1 167.9 -42.1\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.55\" filter=\"url(#s5-brillo)\"/><path d=\"M596.4 -46.4 A306 306 0 0 1 686.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.65\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 488.0 A318 318 0 0 1 155.1 394.9\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M146.7 -63.3 A330 330 0 0 1 380.0 -160.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.85\" filter=\"url(#s5-brillo)\"/><path d=\"M142.4 -67.6 A336 336 0 0 1 380.0 -166.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M138.2 411.8 A342 342 0 0 1 38.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.55\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 -202.0 A372 372 0 0 1 643.0 -93.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.65\" filter=\"url(#s5-brillo)\"/><path d=\"M104.2 445.8 A390 390 0 0 1 -10.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M776.0 170.0 A396 396 0 0 1 660.0 450.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.85\" filter=\"url(#s5-brillo)\"/><path d=\"M380.0 584.0 A414 414 0 0 1 87.3 462.7\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M806.0 170.0 A426 426 0 0 1 681.2 471.2\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.55\" filter=\"url(#s5-brillo)\"/><path d=\"M74.5 -135.5 A432 432 0 0 1 380.0 -262.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.65\" filter=\"url(#s5-brillo)\"/><path d=\"M57.6 492.4 A456 456 0 0 1 -76.0 170.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M438.9 -22.7 A201.5 201.5 0 0 1 557.9 75.4\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.8500000000000001\" filter=\"url(#s5-brillo)\"/><path d=\"M272.0 -61.6 A255.5 255.5 0 0 1 467.4 -70.1\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M505.3 -65.7 A267 267 0 0 1 635.3 91.9\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.55\" filter=\"url(#s5-brillo)\"/><path d=\"M301.1 -146.3 A326 326 0 0 1 547.9 -109.4\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.65\" filter=\"url(#s5-brillo)\"/><path d=\"M589.2 -88.4 A332.5 332.5 0 0 1 710.7 135.2\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M65.0 -42.5 A380 380 0 0 1 307.5 -203.0\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.75\" filter=\"url(#s5-brillo)\"/><path d=\"M359.5 -221.0 A391.5 391.5 0 0 1 642.0 -120.9\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.8500000000000001\" filter=\"url(#s5-brillo)\"/><path d=\"M684.9 -85.8 A398 398 0 0 1 776.5 204.7\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><path d=\"M-54.7 231.1 A439 439 0 0 1 29.4 -94.2\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.8\" opacity=\"0.8500000000000001\" filter=\"url(#s5-brillo)\"/><path d=\"M65.0 -145.0 A445.5 445.5 0 0 1 380.0 -275.5\" fill=\"none\" class=\"ils-papel-claro\" stroke-width=\"1.1\" opacity=\"0.45\" filter=\"url(#s5-brillo)\"/><circle cx=\"380\" cy=\"170\" r=\"2.5\" class=\"ilf-papel-claro\"/><path d=\"M0 470 L60 470 L60 380 L80 380 L80 470 L160 470 L160 350 L182 350 L182 470 L300 470 L330 440 L420 440 L440 470 L560 470 L560 360 L584 360 L584 470 L640 470 L640 400 L662 400 L662 470 L760 470 L760 560 L0 560 Z\" class=\"ilf-escritorio\"/><text class=\"il-texto-foto\" x=\"730\" y=\"534\" text-anchor=\"end\">«Asteria bajo las estrellas» · noche del 27 al 28 de marzo · R. V.</text><g pointer-events=\"none\"><rect width=\"760\" height=\"560\" class=\"ilf-manila\" opacity=\"0.08\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" filter=\"url(#s5-grano)\" opacity=\"0.2\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" fill=\"url(#s5-vineta)\"/></g></svg>",
    "morse": "<svg viewBox=\"0 0 960 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cinta del telégrafo de Dajla\"><defs><radialGradient id=\"m5-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"m5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"m5-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"m5-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#m5-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#m5-papel)\" opacity=\"0.4\"/></pattern></defs><rect width=\"960\" height=\"340\" fill=\"url(#m5-foto)\"/><ellipse cx=\"787.1999999999999\" cy=\"68\" rx=\"86.39999999999999\" ry=\"23.8\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#m5-difuso)\"/><ellipse cx=\"115.19999999999999\" cy=\"289\" rx=\"67.2\" ry=\"20.4\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#m5-difuso)\"/><text class=\"il-texto il-texto-titulo-peq\" x=\"40\" y=\"54\">Egyptian State Telegraphs · Dakhla</text><text class=\"il-texto il-texto-peq\" x=\"40\" y=\"80\">8 de abril de 1927 · 16:40 · Para: PEMBERTON, 14 CURZON STREET, LONDON · Remite: R. V.</text><rect x=\"30\" y=\"120\" width=\"900\" height=\"44\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><rect x=\"52\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"88\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"124\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"190\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"202\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"242\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><circle cx=\"284\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><circle cx=\"300\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"338\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"374\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"414\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><circle cx=\"456\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><circle cx=\"472\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"510\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"550\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><circle cx=\"592\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"604\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"670\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"682\" y=\"138\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"722\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><circle cx=\"738\" cy=\"142\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"30\" y=\"190\" width=\"900\" height=\"44\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"0.8\"/><rect x=\"52\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"92\" cy=\"212\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"104\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"144\" cy=\"212\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"182\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"218\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"254\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"316\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"356\" cy=\"212\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"394\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"430\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"496\" cy=\"212\" r=\"4.2\" class=\"ilf-tinta-azul\"/><circle cx=\"512\" cy=\"212\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"550\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"586\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><circle cx=\"626\" cy=\"212\" r=\"4.2\" class=\"ilf-tinta-azul\"/><rect x=\"664\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"700\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><rect x=\"736\" y=\"208\" width=\"26\" height=\"8\" rx=\"3\" class=\"ilf-tinta-azul\"/><text class=\"il-texto il-texto-peq\" x=\"40\" y=\"306\" font-style=\"italic\">Copia de la cinta del receptor, guardada en el archivo de la oficina. Un trozo de cinta por palabra.</text><rect width=\"960\" height=\"340\" filter=\"url(#m5-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/></svg>",
    "sopa": "<svg viewBox=\"0 0 620 700\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sopa de letras enviada desde Londres\"><defs><radialGradient id=\"q5-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"q5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"q5-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"q5-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#q5-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#q5-papel)\" opacity=\"0.4\"/></pattern></defs><rect width=\"620\" height=\"700\" fill=\"url(#q5-foto)\"/><ellipse cx=\"508.4\" cy=\"140\" rx=\"55.8\" ry=\"49.00000000000001\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#q5-difuso)\"/><ellipse cx=\"74.39999999999999\" cy=\"595\" rx=\"43.400000000000006\" ry=\"42\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#q5-difuso)\"/><text class=\"il-texto il-texto-titulo-peq\" x=\"310\" y=\"54\" text-anchor=\"middle\">«Para las noches del desierto»</text><text class=\"il-texto il-texto-peq\" x=\"310\" y=\"80\" text-anchor=\"middle\" font-style=\"italic\">Con los saludos de un viejo colega. — A. P.</text><rect x=\"70\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">E</text><rect x=\"118\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">I</text><rect x=\"166\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">F</text><rect x=\"214\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">H</text><rect x=\"262\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">B</text><rect x=\"310\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">F</text><rect x=\"358\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">B</text><rect x=\"406\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">N</text><rect x=\"454\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">U</text><rect x=\"502\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"141\" text-anchor=\"middle\" font-size=\"22\">T</text><rect x=\"70\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"118\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">C</text><rect x=\"166\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">I</text><rect x=\"214\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">L</text><rect x=\"262\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">N</text><rect x=\"310\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">Z</text><rect x=\"358\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"406\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">C</text><rect x=\"454\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">V</text><rect x=\"502\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"189\" text-anchor=\"middle\" font-size=\"22\">B</text><rect x=\"70\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"118\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">G</text><rect x=\"166\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">A</text><rect x=\"214\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">B</text><rect x=\"262\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">B</text><rect x=\"310\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"358\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"406\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">E</text><rect x=\"454\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">L</text><rect x=\"502\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"237\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"70\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"118\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">H</text><rect x=\"166\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">F</text><rect x=\"214\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">A</text><rect x=\"262\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">B</text><rect x=\"310\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">R</text><rect x=\"358\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">E</text><rect x=\"406\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"454\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">C</text><rect x=\"502\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"285\" text-anchor=\"middle\" font-size=\"22\">T</text><rect x=\"70\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">V</text><rect x=\"118\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">L</text><rect x=\"166\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">S</text><rect x=\"214\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">A</text><rect x=\"262\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">N</text><rect x=\"310\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"358\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">O</text><rect x=\"406\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">A</text><rect x=\"454\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"502\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"333\" text-anchor=\"middle\" font-size=\"22\">M</text><rect x=\"70\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">S</text><rect x=\"118\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">C</text><rect x=\"166\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">A</text><rect x=\"214\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"262\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">O</text><rect x=\"310\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">Z</text><rect x=\"358\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"406\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"454\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">T</text><rect x=\"502\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"381\" text-anchor=\"middle\" font-size=\"22\">T</text><rect x=\"70\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">H</text><rect x=\"118\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">E</text><rect x=\"166\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">P</text><rect x=\"214\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"262\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">G</text><rect x=\"310\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">I</text><rect x=\"358\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">I</text><rect x=\"406\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">R</text><rect x=\"454\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">L</text><rect x=\"502\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"429\" text-anchor=\"middle\" font-size=\"22\">R</text><rect x=\"70\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">P</text><rect x=\"118\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"166\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">C</text><rect x=\"214\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">A</text><rect x=\"262\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">E</text><rect x=\"310\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">N</text><rect x=\"358\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">R</text><rect x=\"406\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"454\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">H</text><rect x=\"502\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"477\" text-anchor=\"middle\" font-size=\"22\">J</text><rect x=\"70\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">A</text><rect x=\"118\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">D</text><rect x=\"166\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">E</text><rect x=\"214\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">I</text><rect x=\"262\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">C</text><rect x=\"310\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">V</text><rect x=\"358\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">I</text><rect x=\"406\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">L</text><rect x=\"454\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">P</text><rect x=\"502\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"525\" text-anchor=\"middle\" font-size=\"22\">P</text><rect x=\"70\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"94\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">R</text><rect x=\"118\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"142\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">A</text><rect x=\"166\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"190\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">S</text><rect x=\"214\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"238\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">N</text><rect x=\"262\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"286\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">C</text><rect x=\"310\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"334\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">I</text><rect x=\"358\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"382\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">B</text><rect x=\"406\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"430\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">H</text><rect x=\"454\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"478\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">P</text><rect x=\"502\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"526\" y=\"573\" text-anchor=\"middle\" font-size=\"22\">C</text><text class=\"il-texto il-texto-peq\" x=\"70\" y=\"630\" font-style=\"italic\">Curzon Street, 30 de abril de 1927</text><rect width=\"620\" height=\"700\" filter=\"url(#q5-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"604\" height=\"684\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"594\" height=\"674\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "rejilla": "<svg viewBox=\"0 0 620 700\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cartulina perforada hallada en la cámara de Rodrigo\"><defs><filter id=\"g5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"g5-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"g5-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter></defs><rect width=\"620\" height=\"700\" class=\"ilf-madera\"/><rect x=\"50\" y=\"70\" width=\"520\" height=\"550\" class=\"ilf-manila ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"70\" y=\"96\">▲ arriba</text><rect x=\"78\" y=\"118\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"118\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"166\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"214\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"262\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"310\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"454\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"502\" y=\"110\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"118\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"166\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"214\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"270\" y=\"166\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"310\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"454\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"502\" y=\"158\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"118\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"166\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"214\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"262\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"310\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"462\" y=\"214\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"502\" y=\"206\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"118\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"166\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"222\" y=\"262\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"262\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"310\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"462\" y=\"262\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"502\" y=\"254\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"118\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"166\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"222\" y=\"310\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"262\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"318\" y=\"310\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"358\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"454\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"502\" y=\"302\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"118\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"174\" y=\"358\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"214\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"262\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"310\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"414\" y=\"358\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"454\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"502\" y=\"350\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"126\" y=\"406\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"174\" y=\"406\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"214\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"262\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"310\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"462\" y=\"406\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"502\" y=\"398\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"118\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"166\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"222\" y=\"454\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"262\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"310\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"454\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"502\" y=\"446\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"118\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"166\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"214\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"270\" y=\"502\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"310\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"454\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"502\" y=\"494\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"70\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"126\" y=\"550\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"174\" y=\"550\" width=\"32\" height=\"32\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><rect x=\"214\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"262\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"310\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"358\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"406\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"454\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><rect x=\"502\" y=\"542\" width=\"48\" height=\"48\" fill=\"none\" class=\"ils-manila-oscuro\" stroke-width=\"0.6\" stroke-dasharray=\"2 3\"/><g pointer-events=\"none\"><rect width=\"620\" height=\"700\" class=\"ilf-manila\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"620\" height=\"700\" filter=\"url(#g5-grano)\" opacity=\"0.14\" style=\"mix-blend-mode:multiply\"/><rect width=\"620\" height=\"700\" fill=\"url(#g5-vineta)\"/></g></svg>",
    "dorso": "<svg viewBox=\"0 0 760 480\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Dorso de la piedra auténtica\"><defs><filter id=\"b5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"b5-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"b5-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><linearGradient id=\"b5-arenisca\" x1=\"1\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-papel-oscuro\"/><stop offset=\"0.5\" class=\"ilst-piedra\"/><stop offset=\"1\" class=\"ilst-tierra\"/></linearGradient><clipPath id=\"b5-recorte\"><path d=\"M38 40 L120 18 L210 30 L300 12 L372 52 L388 140 L362 214 L380 262 L300 290 L190 278 L96 292 L30 248 L48 170 L22 102 Z\"/></clipPath><pattern id=\"b5-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><image href=\"assets/img/005/piedra-dorso.jpg\" x=\"-0.35\" y=\"-0.3\" width=\"1.7\" height=\"1.6\" preserveAspectRatio=\"none\"/></pattern><filter id=\"b5-grabado\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feMorphology in=\"SourceAlpha\" operator=\"dilate\" radius=\"0.43\" result=\"grueso\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.741\" numOctaves=\"2\" seed=\"4\" result=\"ruido\"/><feDisplacementMap in=\"grueso\" in2=\"ruido\" scale=\"0.9\" result=\"roto\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.0529\" numOctaves=\"2\" seed=\"9\" result=\"manchas\"/><feColorMatrix in=\"manchas\" type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.6 1.12\" result=\"desgaste\"/><feComposite in=\"roto\" in2=\"desgaste\" operator=\"in\" result=\"surco\"/><feFlood class=\"ilfl-tinta\" flood-opacity=\"0.78\"/><feComposite in2=\"surco\" operator=\"in\" result=\"hueco\"/><feOffset in=\"surco\" dx=\"1.3\" dy=\"1.3\" result=\"desplazado\"/><feComposite in=\"surco\" in2=\"desplazado\" operator=\"out\" result=\"bordeSombra\"/><feFlood class=\"ilfl-noche\" flood-opacity=\"0.75\"/><feComposite in2=\"bordeSombra\" operator=\"in\" result=\"sombra\"/><feComposite in=\"desplazado\" in2=\"surco\" operator=\"out\" result=\"labio\"/><feGaussianBlur in=\"labio\" stdDeviation=\"0.5\" result=\"labioSuave\"/><feFlood class=\"ilfl-papel-claro\" flood-opacity=\"0.5\"/><feComposite in2=\"labioSuave\" operator=\"in\" result=\"luz\"/><feMerge><feMergeNode in=\"luz\"/><feMergeNode in=\"hueco\"/><feMergeNode in=\"sombra\"/></feMerge></filter></defs><rect width=\"760\" height=\"480\" class=\"ilf-madera\"/><rect x=\"40\" y=\"30\" width=\"680\" height=\"420\" class=\"ilf-papel-oscuro\" opacity=\"0.4\"/><g transform=\"translate(580 90) scale(-1 1)\"><path d=\"M38 40 L120 18 L210 30 L300 12 L372 52 L388 140 L362 214 L380 262 L300 290 L190 278 L96 292 L30 248 L48 170 L22 102 Z\" fill=\"url(#b5-arenisca)\" class=\"ils-piedra-sombra\" stroke-width=\"3\"/><path d=\"M38 40 L120 18 L210 30 L300 12 L372 52 L388 140 L362 214 L380 262 L300 290 L190 278 L96 292 L30 248 L48 170 L22 102 Z\" fill=\"url(#b5-foto)\" class=\"ils-piedra-sombra\" stroke-width=\"3\"/><g clip-path=\"url(#b5-recorte)\"><path d=\"M0 30 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 62 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 94 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 126 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 158 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 190 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 222 q100 -6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 254 q100 0 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/><path d=\"M0 286 q100 6 200 0 t200 0\" fill=\"none\" class=\"ils-piedra-sombra\" stroke-width=\"0.8\" opacity=\"0.5\"/></g></g><g filter=\"url(#b5-grabado)\"><g transform=\"translate(222 206) scale(1)\"><rect x=\"0\" y=\"0\" width=\"296\" height=\"52\" rx=\"24\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\"/><line x1=\"-8\" y1=\"6\" x2=\"-8\" y2=\"46\" class=\"ils-tinta-suave\" stroke-width=\"3\"/><g transform=\"translate(253 8)\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 6 L26 6 L14 30 Z M8 34 L20 34\"/></g><g transform=\"translate(219 8)\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 3 L8 33 M20 3 L20 33\"/></g><g transform=\"translate(185 8)\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 4 A14 14 0 1 0 20 32 A10 10 0 1 1 20 4 Z\"/></g><g transform=\"translate(151 8)\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2 L14 34 M14 10 L5 4 M14 10 L23 4 M14 19 L5 13 M14 19 L23 13 M14 28 L5 22 M14 28 L23 22\"/></g><g transform=\"translate(117 8)\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12 q6 -8 12 0 t12 0 M2 24 q6 -8 12 0 t12 0\"/></g><g transform=\"translate(83 8)\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"14\" cy=\"18\" r=\"11\"/><circle cx=\"14\" cy=\"18\" r=\"2.2\" class=\"ilf-tinta\"/></g><g transform=\"translate(49 8)\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 32 L8 4 L14 32 L20 4 L26 32\"/></g><g transform=\"translate(15 8)\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3 L26 18 L14 33 L2 18 Z\"/></g></g></g><text class=\"il-texto-foto\" x=\"710\" y=\"436\" text-anchor=\"end\">Dorso · nunca fotografiado en el yacimiento</text><g pointer-events=\"none\"><rect width=\"760\" height=\"480\" class=\"ilf-manila\" opacity=\"0.18\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"480\" filter=\"url(#b5-grano)\" opacity=\"0.14\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"480\" fill=\"url(#b5-vineta)\"/></g></svg>",
    "plano-asteria": "<svg viewBox=\"0 0 900 660\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Plano de las ruinas de Asteria\"><defs><radialGradient id=\"p5-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"p5-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><filter id=\"p5-difuso\"><feGaussianBlur stdDeviation=\"14\"/></filter><pattern id=\"p5-ruina\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></pattern><pattern id=\"p5-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#p5-papel)\"/><image href=\"assets/img/texturas/mapa.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#p5-papel)\" opacity=\"0.45\"/></pattern></defs><rect width=\"900\" height=\"660\" fill=\"url(#p5-foto)\"/><ellipse cx=\"738\" cy=\"132\" rx=\"81\" ry=\"46.2\" class=\"ilf-papel-oscuro\" opacity=\"0.35\" filter=\"url(#p5-difuso)\"/><ellipse cx=\"108\" cy=\"561\" rx=\"63.00000000000001\" ry=\"39.6\" class=\"ilf-manila-oscuro\" opacity=\"0.25\" filter=\"url(#p5-difuso)\"/><circle cx=\"0\" cy=\"0\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"131\" cy=\"97\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"262\" cy=\"194\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"393\" cy=\"291\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"524\" cy=\"388\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"655\" cy=\"485\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"786\" cy=\"582\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"17\" cy=\"19\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"148\" cy=\"116\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"279\" cy=\"213\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"410\" cy=\"310\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"541\" cy=\"407\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"672\" cy=\"504\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"803\" cy=\"601\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"34\" cy=\"38\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"165\" cy=\"135\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"296\" cy=\"232\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"427\" cy=\"329\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"558\" cy=\"426\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"689\" cy=\"523\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"820\" cy=\"620\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"51\" cy=\"57\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"182\" cy=\"154\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"313\" cy=\"251\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"444\" cy=\"348\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"575\" cy=\"445\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"706\" cy=\"542\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"837\" cy=\"639\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"68\" cy=\"76\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"199\" cy=\"173\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"330\" cy=\"270\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"461\" cy=\"367\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"592\" cy=\"464\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"723\" cy=\"561\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"854\" cy=\"658\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"85\" cy=\"95\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"216\" cy=\"192\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"347\" cy=\"289\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"478\" cy=\"386\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"609\" cy=\"483\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"740\" cy=\"580\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"871\" cy=\"17\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"102\" cy=\"114\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"233\" cy=\"211\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"364\" cy=\"308\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"495\" cy=\"405\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"626\" cy=\"502\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"757\" cy=\"599\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"888\" cy=\"36\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"119\" cy=\"133\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"250\" cy=\"230\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"381\" cy=\"327\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"512\" cy=\"424\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"643\" cy=\"521\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"774\" cy=\"618\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"5\" cy=\"55\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"136\" cy=\"152\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"267\" cy=\"249\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"398\" cy=\"346\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"529\" cy=\"443\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"660\" cy=\"540\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"791\" cy=\"637\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"22\" cy=\"74\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"153\" cy=\"171\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"284\" cy=\"268\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"415\" cy=\"365\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"546\" cy=\"462\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"677\" cy=\"559\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"808\" cy=\"656\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><circle cx=\"39\" cy=\"93\" r=\"1\" class=\"ilf-tinta-suave\" opacity=\"0.4\"/><ellipse cx=\"450\" cy=\"330\" rx=\"390\" ry=\"280\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"7\" stroke-dasharray=\"26 6\"/><rect x=\"90\" y=\"160\" width=\"90\" height=\"120\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"220\" y=\"160\" width=\"210\" height=\"120\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"470\" y=\"160\" width=\"110\" height=\"120\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"620\" y=\"160\" width=\"160\" height=\"120\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"120\" y=\"320\" width=\"160\" height=\"110\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"470\" y=\"320\" width=\"120\" height=\"110\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"620\" y=\"320\" width=\"150\" height=\"110\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"470\" y=\"470\" width=\"140\" height=\"90\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"230\" y=\"520\" width=\"80\" height=\"60\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"360\" y=\"470\" width=\"70\" height=\"50\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><rect x=\"640\" y=\"470\" width=\"110\" height=\"80\" fill=\"url(#p5-ruina)\" class=\"ils-tinta-suave\" stroke-width=\"1\" opacity=\"0.75\"/><line x1=\"80\" y1=\"300\" x2=\"820\" y2=\"300\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"70\" x2=\"450\" y2=\"590\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"395\" x2=\"300\" y2=\"300\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><line x1=\"355\" y1=\"450\" x2=\"450\" y2=\"450\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><line x1=\"339\" y1=\"489\" x2=\"430\" y2=\"580\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><line x1=\"245\" y1=\"450\" x2=\"120\" y2=\"450\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"450\" x2=\"760\" y2=\"450\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><line x1=\"600\" y1=\"300\" x2=\"600\" y2=\"140\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"300\" x2=\"200\" y2=\"150\" class=\"ils-tinta\" stroke-width=\"22\" stroke-linecap=\"round\"/><circle cx=\"300\" cy=\"450\" r=\"66\" class=\"ilf-tinta\"/><line x1=\"80\" y1=\"300\" x2=\"820\" y2=\"300\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"70\" x2=\"450\" y2=\"590\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"395\" x2=\"300\" y2=\"300\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><line x1=\"355\" y1=\"450\" x2=\"450\" y2=\"450\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><line x1=\"339\" y1=\"489\" x2=\"430\" y2=\"580\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><line x1=\"245\" y1=\"450\" x2=\"120\" y2=\"450\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"450\" x2=\"760\" y2=\"450\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><line x1=\"600\" y1=\"300\" x2=\"600\" y2=\"140\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"300\" x2=\"200\" y2=\"150\" class=\"ils-papel-claro\" stroke-width=\"16\" stroke-linecap=\"round\"/><circle cx=\"300\" cy=\"450\" r=\"60\" class=\"ilf-papel-claro\"/><circle cx=\"300\" cy=\"450\" r=\"33\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\" stroke-dasharray=\"3 3\"/><g class=\"punto\" data-punto=\"h1\" transform=\"translate(525 200)\" tabindex=\"0\" role=\"button\" aria-label=\"Templo de Selene\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"525\" y=\"226\" text-anchor=\"middle\" pointer-events=\"none\">Templo de Selene</text><g class=\"punto\" data-punto=\"h2\" transform=\"translate(450 52)\" tabindex=\"0\" role=\"button\" aria-label=\"Puerta norte\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"450\" y=\"36\" text-anchor=\"middle\" pointer-events=\"none\">Puerta norte</text><g class=\"punto\" data-punto=\"h3\" transform=\"translate(700 210)\" tabindex=\"0\" role=\"button\" aria-label=\"Termas\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"700\" y=\"236\" text-anchor=\"middle\" pointer-events=\"none\">Termas</text><g class=\"punto\" data-punto=\"h4\" transform=\"translate(400 500)\" tabindex=\"0\" role=\"button\" aria-label=\"Patio porticado\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"400\" y=\"526\" text-anchor=\"middle\" pointer-events=\"none\">Patio porticado</text><g class=\"punto\" data-punto=\"h5\" transform=\"translate(640 390)\" tabindex=\"0\" role=\"button\" aria-label=\"Mercado\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"640\" y=\"416\" text-anchor=\"middle\" pointer-events=\"none\">Mercado</text><g class=\"punto\" data-punto=\"h6\" transform=\"translate(190 375)\" tabindex=\"0\" role=\"button\" aria-label=\"Casa del prefecto\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"190\" y=\"401\" text-anchor=\"middle\" pointer-events=\"none\">Casa del prefecto</text><g class=\"punto\" data-punto=\"h7\" transform=\"translate(700 520)\" tabindex=\"0\" role=\"button\" aria-label=\"Torre\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"700\" y=\"546\" text-anchor=\"middle\" pointer-events=\"none\">Torre</text><g class=\"punto\" data-punto=\"h8\" transform=\"translate(270 560)\" tabindex=\"0\" role=\"button\" aria-label=\"Lavadero\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"270\" y=\"586\" text-anchor=\"middle\" pointer-events=\"none\">Lavadero</text><g class=\"punto\" data-punto=\"h9\" transform=\"translate(130 210)\" tabindex=\"0\" role=\"button\" aria-label=\"Almacenes\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"130\" y=\"236\" text-anchor=\"middle\" pointer-events=\"none\">Almacenes</text><g class=\"punto\" data-punto=\"h10\" transform=\"translate(300 450)\" tabindex=\"0\" role=\"button\" aria-label=\"Plaza redonda\"><circle r=\"22\" class=\"punto-zona\"/><rect x=\"-9\" y=\"-9\" width=\"18\" height=\"18\" class=\"ilf-papel-claro ils-rojo\" stroke-width=\"2\" transform=\"rotate(45)\"/><circle r=\"3\" class=\"ilf-rojo\"/></g><text class=\"il-texto il-texto-peq\" x=\"300\" y=\"484\" text-anchor=\"middle\" pointer-events=\"none\">Plaza redonda</text><g transform=\"translate(830 590)\"><path d=\"M0 -34 L7 0 L0 6 L-7 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 34 L7 0 L0 -6 L-7 0 Z\" class=\"ilf-papel-oscuro ils-tinta\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-etiqueta\" y=\"-40\" text-anchor=\"middle\">N</text></g><text class=\"il-texto il-texto-peq\" x=\"40\" y=\"636\" font-style=\"italic\">Asteria · planta levantada por C. Montalbán, marzo de 1927 · las calles, en blanco</text><rect width=\"900\" height=\"660\" filter=\"url(#p5-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"884\" height=\"644\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"874\" height=\"634\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "almacen-tarde": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"El almacén la tarde del 27 de marzo\"><defs><filter id=\"al5a-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"al5a-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"al5a-difuso\"><feGaussianBlur stdDeviation=\"8\"/></filter><linearGradient id=\"al5a-lona\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></linearGradient><linearGradient id=\"al5a-arena\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-tierra\"/><stop offset=\"1\" class=\"ilst-manila-oscuro\"/></linearGradient></defs><rect width=\"760\" height=\"560\" fill=\"url(#al5a-arena)\"/><path d=\"M0 340 L0 96 L380 34 L760 96 L760 340 Z\" fill=\"url(#al5a-lona)\" class=\"ils-tinta\" stroke-width=\"1.5\"/><path d=\"M0 96 L380 34 L760 96\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1.2\"/><path d=\"M190 65 L190 340 M570 65 L570 340\" class=\"ils-tinta-suave\" stroke-width=\"0.8\" opacity=\"0.6\"/><path d=\"M0 96 L74 128 L74 340 L0 340 Z\" fill=\"url(#al5a-lona)\" class=\"ils-tinta\" stroke-width=\"1.5\"/><path d=\"M74 180 q-10 6 -4 14 q8 4 10 -6 M74 250 q-10 6 -4 14 q8 4 10 -6\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.4\"/><line x1=\"0\" y1=\"340\" x2=\"760\" y2=\"340\" class=\"ils-tinta\" stroke-width=\"1.5\"/><g transform=\"translate(120 128)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"46\" class=\"ils-hierro\" stroke-width=\"2\"/><line x1=\"-44\" y1=\"46\" x2=\"44\" y2=\"46\" class=\"ils-hierro\" stroke-width=\"3\"/><path d=\"M-44 46 v10 q0 8 8 8\" fill=\"none\" class=\"ils-hierro\" stroke-width=\"2\"/><circle cx=\"30\" cy=\"62\" r=\"7\" class=\"ilf-hierro\"/><line x1=\"30\" y1=\"46\" x2=\"30\" y2=\"55\" class=\"ils-hierro\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"52\" y=\"50\">romana</text></g><rect x=\"394\" y=\"34\" width=\"12\" height=\"306\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><path d=\"M400 160 q-10 0 -10 10\" fill=\"none\" class=\"ils-hierro\" stroke-width=\"2.4\"/><g transform=\"translate(390 178)\"><circle r=\"34\" class=\"ilf-oro\" opacity=\"0.22\" filter=\"url(#al5a-difuso)\"/><path d=\"M-8 -6 q8 -16 16 0\" fill=\"none\" class=\"ils-hierro\" stroke-width=\"2\"/><rect x=\"-13\" y=\"-7\" width=\"26\" height=\"6\" rx=\"1\" class=\"ilf-hierro\"/><rect x=\"-10\" y=\"-1\" width=\"20\" height=\"28\" rx=\"2\" class=\"ilf-oro-claro ils-hierro\" stroke-width=\"2\"/><line x1=\"0\" y1=\"-1\" x2=\"0\" y2=\"27\" class=\"ils-hierro\" stroke-width=\"1\"/><rect x=\"-12\" y=\"27\" width=\"24\" height=\"5\" rx=\"1\" class=\"ilf-hierro\"/></g><g><rect x=\"40\" y=\"230\" width=\"130\" height=\"110\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"40\" y1=\"266.6666666666667\" x2=\"170\" y2=\"266.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"40\" y1=\"303.3333333333333\" x2=\"170\" y2=\"303.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"36\" y=\"221\" width=\"138\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"89\" y=\"271\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"105\" y=\"292\" text-anchor=\"middle\">1</text></g><g><rect x=\"190\" y=\"240\" width=\"120\" height=\"100\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"190\" y1=\"273.3333333333333\" x2=\"310\" y2=\"273.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"190\" y1=\"306.6666666666667\" x2=\"310\" y2=\"306.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"186\" y=\"231\" width=\"128\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"234\" y=\"276\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"250\" y=\"297\" text-anchor=\"middle\">2</text></g><g><rect x=\"450\" y=\"236\" width=\"130\" height=\"104\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"450\" y1=\"270.6666666666667\" x2=\"580\" y2=\"270.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"450\" y1=\"305.3333333333333\" x2=\"580\" y2=\"305.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"446\" y=\"227\" width=\"138\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"499\" y=\"274\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"515\" y=\"295\" text-anchor=\"middle\">3</text></g><g><rect x=\"600\" y=\"246\" width=\"120\" height=\"94\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"600\" y1=\"277.3333333333333\" x2=\"720\" y2=\"277.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"600\" y1=\"308.6666666666667\" x2=\"720\" y2=\"308.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"596\" y=\"237\" width=\"128\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"644\" y=\"279\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"660\" y=\"300\" text-anchor=\"middle\">5</text></g><g transform=\"translate(150 436)\"><ellipse rx=\"30\" ry=\"9\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><path d=\"M-24 6 L-30 52 M24 6 L30 52 M0 9 L0 56\" class=\"ils-tinta\" stroke-width=\"2.4\"/></g><g><rect x=\"290\" y=\"352\" width=\"190\" height=\"128\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"290\" y1=\"394.6666666666667\" x2=\"480\" y2=\"394.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"290\" y1=\"437.3333333333333\" x2=\"480\" y2=\"437.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"286\" y=\"343\" width=\"198\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"369\" y=\"402\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"385\" y=\"423\" text-anchor=\"middle\">4</text></g><rect x=\"608\" y=\"402\" width=\"92\" height=\"72\" rx=\"16\" class=\"ilf-manila ils-tinta\" stroke-width=\"1.5\"/><path d=\"M616 420 h76 M616 438 h76 M616 456 h76\" class=\"ils-oro-oscuro\" stroke-width=\"1\" opacity=\"0.7\"/><line x1=\"655\" y1=\"402\" x2=\"655\" y2=\"474\" class=\"ils-tinta\" stroke-width=\"2\"/><line x1=\"608\" y1=\"438\" x2=\"700\" y2=\"438\" class=\"ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto-foto\" x=\"730\" y=\"536\" text-anchor=\"end\">Almacén · tienda 2 · 27-III-1927, 18:00 · inventario · placa 44 · R. V.</text><g pointer-events=\"none\"><rect width=\"760\" height=\"560\" class=\"ilf-manila\" opacity=\"0.22\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" filter=\"url(#al5a-grano)\" opacity=\"0.16\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" fill=\"url(#al5a-vineta)\"/></g></svg>",
    "almacen-manana": "<svg viewBox=\"0 0 760 560\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"El almacén al amanecer del 28 de marzo\"><defs><filter id=\"al5b-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"al5b-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"al5b-difuso\"><feGaussianBlur stdDeviation=\"8\"/></filter><linearGradient id=\"al5b-lona\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></linearGradient><linearGradient id=\"al5b-arena\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" class=\"ilst-tierra\"/><stop offset=\"1\" class=\"ilst-manila-oscuro\"/></linearGradient></defs><rect width=\"760\" height=\"560\" fill=\"url(#al5b-arena)\"/><path d=\"M0 340 L0 96 L380 34 L760 96 L760 340 Z\" fill=\"url(#al5b-lona)\" class=\"ils-tinta\" stroke-width=\"1.5\"/><path d=\"M0 96 L380 34 L760 96\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1.2\"/><path d=\"M190 65 L190 340 M570 65 L570 340\" class=\"ils-tinta-suave\" stroke-width=\"0.8\" opacity=\"0.6\"/><path d=\"M0 96 L74 128 L74 340 L0 340 Z\" fill=\"url(#al5b-lona)\" class=\"ils-tinta\" stroke-width=\"1.5\"/><path d=\"M74 180 q-10 6 -4 14 q8 4 10 -6 M74 250 q-10 6 -4 14 q8 4 10 -6\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.4\"/><line x1=\"0\" y1=\"340\" x2=\"760\" y2=\"340\" class=\"ils-tinta\" stroke-width=\"1.5\"/><g transform=\"translate(120 128)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"46\" class=\"ils-hierro\" stroke-width=\"2\"/><line x1=\"-44\" y1=\"46\" x2=\"44\" y2=\"46\" class=\"ils-hierro\" stroke-width=\"3\"/><path d=\"M-44 46 v10 q0 8 8 8\" fill=\"none\" class=\"ils-hierro\" stroke-width=\"2\"/><circle cx=\"30\" cy=\"62\" r=\"7\" class=\"ilf-hierro\"/><line x1=\"30\" y1=\"46\" x2=\"30\" y2=\"55\" class=\"ils-hierro\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"52\" y=\"50\">romana</text></g><rect x=\"394\" y=\"34\" width=\"12\" height=\"306\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.2\"/><path d=\"M400 160 q-10 0 -10 10\" fill=\"none\" class=\"ils-hierro\" stroke-width=\"2.4\"/><g><rect x=\"40\" y=\"230\" width=\"130\" height=\"110\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"40\" y1=\"266.6666666666667\" x2=\"170\" y2=\"266.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"40\" y1=\"303.3333333333333\" x2=\"170\" y2=\"303.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"36\" y=\"221\" width=\"138\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"89\" y=\"271\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"105\" y=\"292\" text-anchor=\"middle\">1</text></g><g><rect x=\"190\" y=\"240\" width=\"120\" height=\"100\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"190\" y1=\"273.3333333333333\" x2=\"310\" y2=\"273.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"190\" y1=\"306.6666666666667\" x2=\"310\" y2=\"306.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"186\" y=\"231\" width=\"128\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"234\" y=\"276\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"250\" y=\"297\" text-anchor=\"middle\">2</text></g><g><rect x=\"450\" y=\"236\" width=\"130\" height=\"104\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"450\" y1=\"270.6666666666667\" x2=\"580\" y2=\"270.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"450\" y1=\"305.3333333333333\" x2=\"580\" y2=\"305.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"446\" y=\"227\" width=\"138\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"499\" y=\"274\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"515\" y=\"295\" text-anchor=\"middle\">3</text></g><g><rect x=\"600\" y=\"246\" width=\"120\" height=\"94\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"600\" y1=\"277.3333333333333\" x2=\"720\" y2=\"277.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"600\" y1=\"308.6666666666667\" x2=\"720\" y2=\"308.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"596\" y=\"237\" width=\"128\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><rect x=\"644\" y=\"279\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"660\" y=\"300\" text-anchor=\"middle\">5</text></g><g transform=\"translate(150 436)\"><ellipse rx=\"30\" ry=\"9\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\"/><path d=\"M-24 6 L-30 52 M24 6 L30 52 M0 9 L0 56\" class=\"ils-tinta\" stroke-width=\"2.4\"/></g><g><rect x=\"290\" y=\"352\" width=\"190\" height=\"128\" class=\"ilf-madera ils-tinta\" stroke-width=\"1.6\"/><line x1=\"290\" y1=\"394.6666666666667\" x2=\"480\" y2=\"394.6666666666667\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"290\" y1=\"437.3333333333333\" x2=\"480\" y2=\"437.3333333333333\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><rect x=\"286\" y=\"343\" width=\"198\" height=\"10\" class=\"ilf-madera-clara ils-tinta\" stroke-width=\"1.4\" transform=\"rotate(-6 385 347)\"/><rect x=\"369\" y=\"402\" width=\"32\" height=\"28\" rx=\"3\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1\"/><text class=\"il-texto il-texto-etiqueta\" x=\"385\" y=\"423\" text-anchor=\"middle\">4</text></g><g transform=\"translate(530 428)\"><circle r=\"34\" class=\"ilf-oro\" opacity=\"0.22\" filter=\"url(#al5b-difuso)\"/><path d=\"M-8 -6 q8 -16 16 0\" fill=\"none\" class=\"ils-hierro\" stroke-width=\"2\"/><rect x=\"-13\" y=\"-7\" width=\"26\" height=\"6\" rx=\"1\" class=\"ilf-hierro\"/><rect x=\"-10\" y=\"-1\" width=\"20\" height=\"28\" rx=\"2\" class=\"ilf-oro-claro ils-hierro\" stroke-width=\"2\"/><line x1=\"0\" y1=\"-1\" x2=\"0\" y2=\"27\" class=\"ils-hierro\" stroke-width=\"1\"/><rect x=\"-12\" y=\"27\" width=\"24\" height=\"5\" rx=\"1\" class=\"ilf-hierro\"/></g><rect x=\"612\" y=\"428\" width=\"86\" height=\"44\" rx=\"14\" class=\"ilf-manila ils-tinta\" stroke-width=\"1.5\"/><path d=\"M620 440 h70 M620 456 h70\" class=\"ils-oro-oscuro\" stroke-width=\"1\" opacity=\"0.7\"/><path d=\"M608 470 l-14 10 M606 462 l-16 2 M690 474 l16 8 M700 466 l14 -4 M650 472 l-4 16 M664 472 l6 14\" class=\"ils-oro-oscuro\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\"/><line x1=\"655\" y1=\"428\" x2=\"655\" y2=\"472\" class=\"ils-tinta\" stroke-width=\"2\" stroke-dasharray=\"4 6\"/><g transform=\"translate(115 505) rotate(-18)\" class=\"ilf-piedra-sombra\" opacity=\"0.9\"><ellipse rx=\"13\" ry=\"19\" cy=\"-10\"/><ellipse rx=\"10\" ry=\"9\" cy=\"20\"/></g><text class=\"il-texto-foto\" x=\"730\" y=\"536\" text-anchor=\"end\">Almacén · tienda 2 · 28-III-1927, 06:10 · antes de cargar · C. M. con la cámara de R. V.</text><g pointer-events=\"none\"><rect width=\"760\" height=\"560\" class=\"ilf-manila\" opacity=\"0.22\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" filter=\"url(#al5b-grano)\" opacity=\"0.16\" style=\"mix-blend-mode:multiply\"/><rect width=\"760\" height=\"560\" fill=\"url(#al5b-vineta)\"/></g></svg>"
  },
  "sospechosos": [
    {
      "id": "clara",
      "nombre": "Clara Montalbán Ferrer",
      "edad": 36,
      "profesion": "Arqueóloga; conservadora del Museo Arqueológico Nacional",
      "foto": "img-clara",
      "biografia": "Siguió durante años un itinerario antiguo hasta encontrar Asteria. Dirigió la expedición, encontró la piedra y selló las cajas con su anillo. Os ha llamado ella.",
      "coartada": "La noche del 27 de marzo durmió en la tienda 1 desde las diez; a las seis selló las cinco cajas.",
      "motivo": "Es la clienta, pero esa noche dejó las cajas sin sellar y entraba en el almacén sin que nadie preguntara. Si quisiera que nadie llegara a la ciudad antes que ella, esconder la piedra buena y dejar una copia sería una manera.",
      "declaraciones": [
        {
          "texto": "La piedra existe. La he tenido en las manos. Encuéntrenla antes de que Pemberton convierta mi ciudad en la suya."
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:cw1bUFpNV09CXF9FFVgXSQdTXlwXWEgXMkcDUw9FBx1CAhNYFVgJXlEGU0oYF1dEVBAJQVQWQVZHEVoMFFkAVVUTEkZRVVoCBl0QCQdERFoDWldARFUHFwxaBVgDFgJUDkNRDkgRNlVeEfHVGBVHARcJBBFZQ0sZUENVQ2ZeBUVZBl0VRlxABg5TXgEJGUR6DV5ZUAEZClgRFQjz3FsDQw0QQ10DEQpREAdKFl0AWwdeptZfFVtUU1pDFBJBVEFwURNfUFpdXwJM",
      "preguntas": [
        {
          "id": "c1",
          "texto": "¿Quién vio el negativo de la placa 31?",
          "respuesta": "dc1:Yg5WR11eWUMbEkkKShcBSgMQW1oXVAcXDFoFWAMaRlQMQxBMRkUPVV4GU0gYIFcXRxCmmEYWVkxUQ1CghxENVhARXlRXWBYGDBJDEEZUBVMDEFFBBVcCUkwVN0UDFh9eQhAGSQcdRl5RBlsDGAnxxURLRWhaFl9WFUJbGhRVBBdVD0FQ94hXEUJeURZGVAtKA0MWUgpNA0RCUQMQFkMEXQsAAksKUBUcEBsSpZEIEhdWBwARWVkRSEBUFBVVXQQXRQ9TFURVVwADHA=="
        },
        {
          "id": "c2",
          "texto": "¿Por qué no selló las cajas la noche del 27?",
          "respuesta": "dc1:YA5AREFcFgYOElwEBUUBGRFVFlIDSw9SFlRGUwlYRlQOQwVLpZwJEFQHEgpZRFwLVA0AEUwWQVZHEVgCFFwA9IEAXFQUV1lDEVtCEwMXAFxCXldXBRdGew0VDlkFU0ZQQg8CSkZCA1lDThIFVwoSAVtFFUNcW1RLFUJbDxgRAlheQV9cFFhYCg5eX0tGewsZClFE8MlYRl4FQAdcRlkSQwNDFVwcHUZJEA9XRkgBQQUXDAJEVFof"
        },
        {
          "id": "c3",
          "texto": "¿Qué le contó Yusuf a la mañana siguiente?",
          "respuesta": "dc1:YRRXFVxYVKDPUxATD0QQVkJFWFJEVRNNQlRGXAdFRlUNEE0ZNlQIQ/PLEhdNARIBRQRFY1pSQ1BSXhQRUUcEW1EPVloYGVUMD10QEQdZEFgREFhcB1EDRE4VHxAKU0ZVCwkGGRdEAxBeDRIVXURCFlIKBkRFV0NYGxF4DBRQEUJeFfGcFFxYQwdeEAEPVhZQDRBPEwpWRkENWRDzyxYHERIGDUoHQwpfEApTFUwFEglWHAof"
        },
        {
          "id": "c4",
          "texto": "¿Qué significa el nombre de la ciudad?",
          "respuesta": "dc1:dQ8SUkZQUwQNHhCnzVsFGQZVFl8FSkZSEUEUVQpaB0Kg2E0ZKF5GXF9CWgMYFEcGWwwGUFFZEUlaQ0UWUREPWBAQR1BG+psCQkNFAEZbCxkOVU9WFlhGQgwVFlUUXwlVCxAXWEZQCERVERIXTQESEVlFA1hZ9YJVWlZbTRRgFFIQDV0VUFBRAkJiVQgEUhZNDV4WVgoZKlgMURRVFRYLVEISFlASUEZVXEJBE12ngwsXCKaQRhZATFARWAIUQQhSVBNTGw==",
          "desbloqueadoPor": "p03"
        },
        {
          "id": "c5",
          "texto": "¿Cuánta escayola llevó la expedición?",
          "respuesta": "dc1:ZBNXRhRKVwANQRABAxcSXAteQloHUAhUDRUNWQpZFR1CEwJLBxELX1wGVxUWRGEFRhCmmBVSXkoPEVgCFFQSQ1UNUxVNGVMPQkddBxRWCBdCfFkTBVcJQ6GcRkQJUgkdQggKVQkRBxBbC14JFERCC0UUEFQVWlAZUEJXAk1eDVYQBEEVV1hEAkJLECIHRQlcDFRfUkRLA0ELRgcQDlcVRQNDD1gVERBVXANBSA=="
        },
        {
          "id": "c6",
          "texto": "¿Qué sabe del cliente de Pemberton?",
          "respuesta": "dc1:fgBWVBgZT0MHQV9FC1JEUAxBQ1oBTQcXD/bHQ0ZHE1RCMwZUBFQURF8MHEb77V5EVRAWUlQWVlVaQ10CDxEQQlkEXBVEWFECQlMQERRWEvrLQxZXARkTWQMVCF8SVxTyzwJDWxNCBVEQDUYUWURRC0QESxF5VxFLWkJVQ1BUQVhTCV0VRExYFwNBEAEDFwFKBxBaUgdLAxcOVEZYAxYQWBEXDBkHXxJVQ04SA1ZEUwhQEAtQFUZQS0FUGENNEQ9YEBNXVkFcRAcNElSm1VkAXEw=",
          "desbloqueadoPor": "p12"
        },
        {
          "id": "c7",
          "texto": "¿Confía en Rodrigo Valcárcel?",
          "respuesta": "dc1:ZBNXRhRaVw4SU/PUB0REUxdeQlwXF0ZyERUQUQhfAl4RDE8ZAlQEVRAGWwhdFl1EVkUIVFFfUBlWUFgPUREFUlxBYkdVXVlDGxJYBAVSRFUDQxZeAVMJRQdGRkAKVwVQEUMHXEZ0FUBRoYMHFkTw23QKC1dcV0MGFXJbDVLyzFgQBFwVR0xFQwRdRAoBRQVfoZ1XQEo="
        },
        {
          "id": "c8",
          "texto": "¿Qué cree que señala la estrella?",
          "respuesta": "dc1:ZQ8SWUFeVxFCVlVFClZEWgtFUlIAAkZbAxUWWQNSFFBCBhAZE19GREINSAkYAFdERwkEX1oYEWpcXxQPVREAQkSim1tAUFUCQlxfRRZCAV0NEFlBDVwIQwNHClFcFgpQQgAMSQ9QRlVDFvHHGAVeREUAE/KcRRFAFVxRQ1FfBlbz0FNH95RXTUJiXxdGUhdWQlxXEwpcBVIRXBJfRlcIRQcQQ10DEQlTRBdQFF1K"
        },
        {
          "id": "c9",
          "texto": "¿Qué hizo usted esa noche?",
          "respuesta": "dc1:dA5AWF1LGkMGVxABD1IeGQMQRVYNSkoXB1tGXAcWElgHDQdYRkQIXxxCUQlWRFcIFwEMUEdfXhlXUF4MFF0AF1ENX1pcWFICTBJgFwNQp4MMRFNdCFxGVkJsE0MTUFwRDwZDTw9eRlFAA1UHSkRXCBcGBF9RX10XFWJdQ01eQV9FA1tQRlgWAANfUgwHUwsZDlEWQw1cAkUDGUZeCRYKVBFDC1gEQ6WdUUJeClkJUwBYSw=="
        }
      ]
    },
    {
      "id": "rodrigo",
      "nombre": "Rodrigo Valcárcel Ibarra",
      "edad": 38,
      "profesion": "Fotógrafo de la expedición",
      "foto": "img-rodrigo",
      "desbloqueadoPor": "p02",
      "biografia": "Tiene estudio en la calle del Prado y fama de retratar a media aristocracia madrileña. Ha acompañado a Clara en tres campañas.",
      "coartada": "Dice que la noche del 27 de marzo dejó la cámara abierta para fotografiar las estrellas y se acostó hasta el amanecer.",
      "motivo": "Si la piedra se perdiera, sus placas serían la única imagen de Asteria; ya ha pedido precio a dos revistas.",
      "declaraciones": [
        {
          "texto": "Yo hago fotografías, no milagros. Si alguien ha cambiado la piedra, buscad a quien sepa de piedras."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:dAhRUBRIQwZCXF9FFVJEVQdGV10Q+tUXB1tGRAlSBxEOAkNXCVIOVRxCQgNKCxIXQkUVQ1pGWFgVV1sXW1YTVlain1QUXVNDDlNDRQNEEEsHXFpSFxkCXgFQRlMT9cdfBgxDWgNDFPODQl4HGAfxxVoEF1Ab",
          "desbloqueadoPor": "p06"
        },
        {
          "texto": "dc1:dAhRUBRIQwZCXF9FDlZEXBFTRFoQVkZWQmUDXQRTFEUNDUNdA0ICVRAKUwVdRFOnhgoWChVTXRlBVFgGU0MAWlFBVlAUfVcJDlMQCQpSElhCQ0NARFAIXgFcB1wDRUg=",
          "desbloqueadoPor": "p10"
        }
      ],
      "notaDirector": "dc1:czR+ZXV7eiZMEmQEClunikJFWFJEWglHC1RGVQgWA0IBAhpWClBGURASUxRMDUBEUwBFRFtXEVpaQV0CFFcOQ18GQPaVX18AAxJUAEZEERkSXFdQBRlVBk4VFl8VXxJYFAIHWEZBCUIQB15GXAtAF1hFTUFaRBFcRl4UEFVdCPSDQVdbFFxFEwdYX0xIFyhYQl5ZUAxcRlMHWUYCURYCVEIOAkscXkoQVQxGFF1EXgUXEAtQFU8RVVRCFAdbQk0XUwBfV136hUMOUxAVD1IASwMQU11EShMXFlwDXgJXS10DAQxLB0UJQlkNHEZuDVMO9NZFUlpYEVVUEVUWQPLIWUQIUVQUXFhDEUcQBgddBRkGVRZDCFgFVhEVHxAKV0ZUEQAMVwJYpYMQB1xGSxESAUQREFVcWR8ZZVRZAVFDFVheQV5QFElXBANQUUVTB1QZDllUQQVKSBcnWwVRCEIHVQ0RQ0BGUxNCXKGBCANEQQEXAQBDR0NcW1QRRwoUXQQXVQ9BUPeIVw1CWEULElYXGQ5RFlYXWgdODVkHEBdDAxEEAg9NBxEfEFwDEhRdDlsIWwRL",
      "preguntas": [
        {
          "id": "r1",
          "texto": "¿Qué hizo la noche del 27 de marzo?",
          "respuesta": "dc1:cQNA9pkZUw9CXVIRE0UFXQ1CFlJEVQdEQloIUwMaRkEDEQIZClAVEFURRhRdCF4FRElFSBVbVBlUUlsQQPLIGRApU0ZAWBYPA0EQFgNeFxkMXxZFC1UQ9M8VBxASWQVQEEMPWEZSpZFdA0AHFkR3ChcACRFRU0JQUENADBRCBBdUFFdHWVwWAA1fX0UTWURbB15SWhBWShcRUKWBCUQPRQMQWRkIXkZYURsSEkoFXBL0yARCGw=="
        },
        {
          "id": "r2",
          "texto": "¿Quién tuvo en las manos la placa 31?",
          "respuesta": "dc1:aQ4eFVdVVxENHhAcRlsFGRFV9YILSw9DAxUrXwhCB10AoMJXShEXRVVCXgcYElsLFwAWUBVbWEpYUBQNW1IJUhAEXBVZUBYXC1deAQcbRFQNWldXBRkSWAZUEPPLV0gRJgYQSRPyz0MQDlNGXxFTFlOmzBFQWBFUXBFXAl5QQVBCAFxRURUWAQNYX0UDW0RaA0REVkoZKFYGXAMQC/XHQkIPAhkOUEZEXwFTAldKEipWAQxUFVvymEYRRwJWQ6KaUUFRWlNcRA8DEkMMCBcAXAhRRBMRV0ZTB1EJHg=="
        },
        {
          "id": "r3",
          "texto": "¿Usó escayola durante la expedición?",
          "respuesta": "dc1:egBf9pVKGEMnXhAcA0QLGQdDFkMLVRBYThUfEANaRkENDxVWRlQVEFUOEgNWAV8NUApFVVAWRFdUEUQPVVIAGRAiR1RaXVlDDlMQFgP01VYQWUJSRHQJWRZUClKllwgREQIAWARQRkNFERILVwhWAURFHF4VW1QZXFNVQ1VdQVhEE10VUUFCEQdfX0UCUggZAVFbQwVUA1kWWkZRRlAJRQ0EEVgAWAdCEAFTC10IXgtESw=="
        },
        {
          "id": "r4",
          "texto": "¿Cómo sale una fotografía al revés?",
          "respuesta": "dc1:YA5cXFFXUgxCV1xFCFIDWBZZQFxEXQNbQkcDRqWfFRERDAFLAxEDXBASUxZdCB5EVAoIXhVDXxlUQUYGWlUITRAEXhVES18OB0AQAaWaBRdCcRZep5RGWQ0VC1VGRgdCA0MHXBVVAxBcDUFGXA1XB14WDFRBUxFY9oBbEBoRMl4QAF5SQVBTDUJRXxUP9NcZD1kWQwhYBVZOFQpfRl4PSw1DAFYIERZCWRFTFRgdEgUXChZSQERQShs="
        },
        {
          "id": "r5",
          "texto": "¿Conoce a Arthur Pemberton?",
          "respuesta": "dc1:cw5bW1dQUgoPXUNFA1lEfA4QdVINSwkXB1tGVQoWEFQLDRdQBVgIU19OEgNWRFcIFwcEQxVSVFUVYlwGRFkEVkIFFUYaGWMNQkFVptdYFhkTRVMTB1YKUgFWD18IV0ZXDRcMXhRQAPOdA0FGXAESFkIMC1BGFkBMUBFaDBRZABdVD1FaWk1EAgZdHkUoWERVBxBeVkRcFVQQXBJfRlIDQgYGQ1wIRQleUwdBShgKW0T0zAkRVBZc+pgf"
        },
        {
          "id": "r6",
          "texto": "Los guardias vieron una luz en su tienda a las dos. ¿Qué era?",
          "respuesta": "dc1:fQgSU1VLWQ9CQF8PCRcAXA4QWlIGVhRWFloUWQkaRlBCDgZdD1BGXVUBWgcUREIFRQRFQEBTEVdaEUcGFFwEF1UPVEddWEQCQldcRRRSElwOUVJcFhdGew0VAlUMWUZQEaDOGRJeAlFDQl4HS0RcC1QNAEIPFmhMRkRSQ1heQV9RQURcR01ZQwFbVQtGQQFaB0MYEzFXBxcOQBwQA1gFVAwHCl0HEQhfEAdBRk0KEgxYCAdDUBZVXEZBXQZGRQ4Z",
          "desbloqueadoPor": "p06"
        },
        {
          "id": "r7",
          "texto": "¿Qué habría ganado usted con cambiar la piedra?",
          "respuesta": "dc1:fgBWVBgZT0MSV0IBA0VEVBdTXlxKGTVeDBUKUUZGD1QGEQIVRnAVRFUQWwcYAUFEQgtFUkBTX01aEVAGFF0AF0ME8YRbS18XAxJ9CghDBVUA85ddSBkfFw9cFRAAWRJeBRECX6WcB0McQlsKTRdGFlYGDF5bU0IZUVQUFloRAkJVD0ZaGhlvDEJcVQYDRA1NDRBHRgEZA0QDFRZZA1IUUEIGG1AVRQceEDsSF00BEhdSRRNUVBg="
        },
        {
          "id": "r8",
          "texto": "¿Cuánto pesaba la piedra?",
          "respuesta": "dc1:eAhRXFFLWQ1CVFEJElZEXQ1DFlsLVARFB0ZGVAMWN0QEF0NJB0MHEFwHRAdWEFMWWwRJEUwWRFdaEVAGFFQNW18SEl9BS/XQQldeRaWWFlgAVRgTMEsDXgxBBxAfFhJQDBcMSkgRP18QElcVV0RCCFYGBEIZFl9WFUFdBlBDAEQe"
        },
        {
          "id": "r9",
          "texto": "¿Quién telegrafió a Londres desde Dajla?",
          "respuesta": "dc1:8t52UEddU0MmU1oJBwhEeA5c9Z5ETQNbB1IUUQBfpYJCDgZdD15GU1EPQgdVAVwQWF9FVFkWU1hbQEEGRl5BVhASRxVWWFgADR4QCQcXF1yhgVlBDU0HFwMVFUVGWxNCBwxPGR9eRlEQD1tGXRdGEVMMChFFV0NYFUBBBhRHBFlECF5URlhYQwdeEAYTVhZNDRBZQAdMFFhMFTZCA1ETXxYGDRkDX0ZcUUJdAFEHWwpWRRREXPWYVxVXXRFZ8tIXQRTxnBo=",
          "desbloqueadoPor": "p08"
        },
        {
          "id": "r10",
          "texto": "¿Qué hay en la caja grande de placas de su estudio?",
          "respuesta": "dc1:YA1TVlVKGEMuU0NFAlJEeBFEU0ENWEZOQkAIUUZSCVIHDQIZAlRGQlUWQAdMC0FEUwBFQlD1gFZHUEdDRUQEF14OEkRBXEQRoZNeRRBSFkoHEFNdREwIFxBQAVkVQhReQhMMVQ9SD1FcTBI1UUReBRcEB0NQWB0ZRERRQ0dUABdTDlwVU0xXDRZXQ0tGbkRIF1UWXQsZClZCVARCB1hI",
          "desbloqueadoPor": "p10"
        }
      ]
    },
    {
      "id": "pemberton",
      "nombre": "Arthur Pemberton",
      "edad": 52,
      "profesion": "Explorador; miembro de la Royal Geographical Society",
      "foto": "img-pemberton",
      "desbloqueadoPor": "p02",
      "biografia": "Lleva diez años buscando ciudades perdidas en el desierto de Libia sin encontrar ninguna. Coincidió con Clara en El Cairo en 1925 y no se despidieron como amigos.",
      "coartada": "No ha salido de Londres desde enero. Lo confirman la Royal Geographical Society y su club.",
      "motivo": "Quiere ser el primero en presentar la ciudad al mundo.",
      "declaraciones": [
        {
          "texto": "(Por carta.) La señorita Montalbán tiene una imaginación admirable. Yo tengo documentos. Nos veremos en el desierto en octubre."
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:cQ9HW1dQV0MHXhALCVoGSwcQUlZEVQcXAVwTVAdSShETFgYZFV4KXxADQgdKAVEBFwALEVBaEVpUQ0AWV1kOF1QEEllVGUYKB1ZCBEZORHoOUURSRFiljQwVCF9GXgcREhYBVQ9SB1RfTA==",
          "desbloqueadoPor": "p03"
        }
      ],
      "notaDirector": "dc1:dQ8SUFpcRAxCU0AEClYGS6GDFlALV0ZlDVEUWQFZRgRSU0NVD1MUUUNCQglKRF4LFwgAW1pEEUhAVBQGWlIOWUQTU0dVGVoCQldIFQNTDVoL84VdXxkHRKGYRlMJWxZDodBDVQcRFllVBkAHGAVHEPTMC0VcVVAZTBFYAkcRB1hEDlVHVV/1zgNBHEUWUhZWQl5ZEwhYRlQDWARZpYVcEQcQF1gEUEZVXkJ+CVYAQAFES0V0W0BY+oYRWAIUQg5HUUFWUBRVUxcQU0NFBVgKGQ5RFkEBUw9bDlRGUQVZFFUDBwIXRnAKRFkUXV0YF1tEWwBFVFtFVPqEUFpDUV1BQ1UNV1JGWFsCQlZVRSJWDlUDHBZXDVoDDUL3zWkJFgVeDxMRVkZQCERZBfHaXQBTAFIWSRFbWRFJR1RTFlpFDhdADkAVR0wWFQtTWgCkjEoZI1NXUaeKRlQNWBZCB1gCXkIXAlQEWKWZXkJCB0oFEhFZRQZdXFNfTVARVQ8UQBRSEA9HW1dYFgsDEkYMFUMLFUJUU0AAXEZRC1sHXANFRlUHQwJbFFgKCxADXBJdFxIHWAgVQ1RUUBlFUEYCFEKimh5BflAUSVcEAxJAChQXCVwGWVkTAFxGQgxURl4JQgdDoc4CGQJURnxfBUAJ+9VdSg==",
      "preguntas": [
        {
          "id": "pe1",
          "texto": "¿Dónde estaba la noche del 27 de marzo?",
          "respuesta": "dc1:GDFdRxRNUw8HVUIEC1ZKEEJ1eBMpcEZ0LmAkECJzRmEjLy8ZK3AqfBAxZiloRHEheSRFdXAWfXgVYnsgfXQldnRBYWF7aRYgN3NiIChjJRk2dWVnLX4pZEJ2KX5Geyl/LSA2dSkRNWR/Mg=="
        },
        {
          "id": "pe2",
          "texto": "¿Cómo sabe que la ciudad se llama Asteria?",
          "respuesta": "dc1:GDFdRxRaVxEWUx5MRmMBVwVfFlcLWhNaB1sSXxUaRkIHoNJWFFgSUUNMEjNWRFccRwkKQ1RSXksVX1tDRlQXUlwAEkZBShYFF1deEQNESBkbEFtWClYVFwMVF0UPUwgRFhECWwdbBxBAA0AHGAhTRFQKCEFQQlRXVlhVTRR1CFBRDF1GFEhDBkJXXEUIWAlbEFUWXwhcAfTRFQcQC18VEQ8CDVYVEQdeRAdBRkkRV0RWRQleRhZBXEdY99BQWAJYQ00STBRJWRFCR15FBVYJUAxfFl6nmBUXAVoURAkY"
        },
        {
          "id": "pe3",
          "texto": "¿Ha comprado algo relacionado con la expedición Montalbán?",
          "respuesta": "dc1:GDFdRxRaVxEWUx5MRnQLVBJCWRMCVhJYBUcHVqWbB0JCBwYZFEQPXlEREgJdF1YBFw0EUlAWR1xcX0AGFFCihl8SCRVRShYWDFMQBABeB1Chg1gTB1gUVkJMRkADRABUARcCVANfElUQDlcBWQgcRHsKRUBAUxFPUF9TAhRBBFBRBV0VVRlDDQMSVgoSWANLA1b1ngUZCFhCUBUQB0UTXxYMQ1SlnAkQWANBEllEQxFSRQleFUJUV1JeFAZaEQ1WEAxTW1sXFjpCRl8BB0GnlAMQWFxEVQkXFlAIVwkY"
        },
        {
          "id": "pe4",
          "texto": "¿Quién le vendió las fotografías?",
          "respuesta": "dc1:GDFdRxRaVxEWUx5MRmIKGQFRVFIIVQNFDRUXRQMWFkMHBQpcFFRGVVxCUwhXClsJVhEKHRVPEUBaEUQRUVcIUkIOElhdShYFDUZfAhRWAvrPUUUdRHUDFwZcFPPPFhNfA0MAVhVQShBADUBGWwtAEFIWppxUDBFXWhFREVURAEVBFFf2h1VZBA0c"
        },
        {
          "id": "pe5",
          "texto": "¿Por qué anunció su expedición ahora?",
          "respuesta": "dc1:GDFdRxRaVxEWUx5MRmcLSxNFUxMBV0ZYAUETUhRTRlQOQwdcFVgDQkQNEhVdREIRUgEAEVZERENUQxhDTRERWEIQR1AUVVdDEVfz1AlFDU0DEHtcCk0HWwD2x15GXwRQQgJDWAhECFNZA0BGVAUSF0IcBB8Vc18ZWVAUMVtIAFsQJldaU0tXEwpbUwQKFzdWAVlTRx0VRlIOFRdFAxYOUAAPAhkWQw9dVRBdRl0XEgFbRRREUBZVXEZSQQFGVE8="
        },
        {
          "id": "pe6",
          "texto": "¿Qué le dijeron desde Dajla el 8 de abril?",
          "respuesta": "dc1:GDFdRxRNUw8HVUIEC1ZKEEJ+eRM2fCV+IHpGZCN6I3YwIi54NREidRAtczVxNxI3Yyo1EWdzcnB3fhQ3cX0kcGIgf3RnGXImQn95RSV7MXtCaRZ3IRkrfkJmJ2MyZCMRMTcsaUZiLxBxLnUzcSF8RHogRXRmdWNwd3h7Q3B0MnN1QXZ0fnV3QzF3ECkpFzVsJ3R5EyF1RmctZjIQKXAgeCEmQ2oyfjY=",
          "desbloqueadoPor": "p10"
        },
        {
          "id": "pe7",
          "texto": "¿Para quién compra?",
          "respuesta": "dc1:GDFdRxRaVxEWUx5MRmcFSwMQW/DJFUZEC1ALQBRTSBEjFg1IE1RGVFURVgMYCFNERxcMXFRAVEtUEVwCTREQQlkEXBVZXBYTA1VRRRZYFhkOXxZCEVxGTg0VDlEERKWcA0MAVgtBFFFUDRIPXxFTCBlFMF8VXl5UV0NRQ0dUD0RRFV0VWlYWEQdRWAQcVkRdC15TQQsZFlgQFQ5RBVMUEQ4MQ0gTVEZJUUJaB1unnwUZ"
        },
        {
          "id": "pe8",
          "texto": "¿Conoce a Rodrigo Valcárcel?",
          "respuesta": "dc1:GDFdRxRaVxEWUx5MRnQLVw1KVVxEWEZUC1AIEABZEvLRBBFYAF4VEElCQANbEVcWUwpFUBVCQ1xGHxQmWhEkWxAiU1xGVhpDB1wQAAoXElwLXkJaB1AIVA0ZRlgHVKWcA0MWVwkRA0NAA/HXVwgSFUIARVlUVfKUVBFGBvecExdRQV5URxlFBqGDXxcHRERdB1wWYAxcFl8HVBRUQUVIESwMQ0sDUhNVQgZdRksREgpYCAdDUBoRQBVfW0NCXhgXUUFAUFdWRAcDQFwKRkcLS0JFRUcBXQNETA=="
        },
        {
          "id": "pe9",
          "texto": "¿Qué sabe del sello con una rosa de ocho puntas?",
          "respuesta": "dc1:GDFdRxRaVxEWUx5MRmYRXEJTX1YWSwcXAVQURAdFRlINDUNdD18DQl9CVgNWEEALFxxFQEBTEVdaEUcGFEEARVUCVxVVGVgKDFXz3wgXAUoBRVJcREgTUkJMCRAFWQheGAACF0Z8DxBTDlsDVhBXREcEAlAVVFhcWxFNQ0RDBFBFD0ZUFElZAA0cEDwJFwxYBV8WXwsZC14RWAkeRnoDQkICAFYIQgNaX0JDE11EWgVQBAsRWVkRVFxCWQwa",
          "desbloqueadoPor": "p12"
        },
        {
          "id": "pe10",
          "texto": "¿Qué hará si encontramos la piedra?",
          "respuesta": "dc1:GDFdRxRaVxEWUx5MRnEBVQtTX0cFSwpWERUWXxQWA0IBEQpNCR1GU18MEgtRRF8BXQoXEUVXQVxZHxQ6FEIAW1kTEl1VWl8CQnNDEQNFDVhCWVFGBVULUgxBAwpGQwhQQhMKXAJDBxBeDRIDS0RHClZFBlhAUlBdGxFtDBRTFERTDhJZVRlVChdWUQFI"
        }
      ]
    },
    {
      "id": "garmendia",
      "nombre": "Leopoldo Garmendia Urquijo",
      "edad": 61,
      "profesion": "Banquero; mecenas de la expedición",
      "foto": "img-garmendia",
      "desbloqueadoPor": "p02",
      "biografia": "Socio del Banco del Norte. Financia excavaciones desde que su mujer murió, para que su nombre quede en algún museo.",
      "coartada": "Dice que la noche del 27 de marzo durmió en su tienda, la 5, con un somnífero.",
      "motivo": "Aseguró la piedra en 40.000 pesetas al llegar a Dajla y tiene el banco en apuros.",
      "declaraciones": [
        {
          "texto": "Yo he pagado cada camello de esa expedición. ¿Para qué iba a robar lo que es casi mío?"
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:eQ9dVlFXQgZCVlUJRlQFVABZWRMAXEZbAxUWWQNSFFBMQyJKA1YTQvPREgpZREINUgEXUBVXXRlZXVEEVUNBVhAlU19YWBpDEl1CRQteAV0NEFcTFFwUUwdHClFGUwgRBw9DTw9QDFUcQkIDSgsSAVtFFlRSQ0NWFUJbD1sREVZXABJGXRlaAkJRUQ8HFxdcQkBfVhZdAxtCWwkQFV9GXQ4GBFhGUgleEA1GFFlEQg1SARdQDxZSVlsRWAIUUg5HWQASW1sZUQIMUxALB1MFF0J0WUEJ+stWQlEDEBBTFFUDB00ZMlQLVRATRwMYAV5EUhYG8pRYVVhZXhQLQV8FVhASRxVWWFgADRJJRRdCDVwQVRZHBUkHRQ5aXRAWRANCCwwNWEZQRnNcA0AHGBRTFlZFFERQFlJYWV1RTQ==",
      "preguntas": [
        {
          "id": "g1",
          "texto": "¿Qué hizo la noche del 27 de marzo?",
          "respuesta": "dc1:dA5AWF1LGEM2XV0KRkEBSw1eV19EXQNEBlBGQRNTRlwXEQr61RELWRAPRwxdFh5ETkUAXxVTXRlRVEcKUUMVWBAJU1ZRGVACDkZRRQNbRF0NUlpWShkrUkJUBV8VQqWYQgJDVQdCRl5FB0QDGB0SCVIBDFAVTxFgQEJBBRRFFEFfQUNAURlMAhBTXgEDVhZUBxBXEwhYFRcRUA9DRkYHQwNDAFgUVgdCHg=="
        },
        {
          "id": "g2",
          "texto": "¿Por qué aseguró la piedra?",
          "respuesta": "dc1:YA5AREFcFgYRUxAGB10FGQtSVxMFGQVFF08HQkZDCBEGBhBQA0MSXxAbEhNWRF8FRUlFSBVGXktERFFDXFRBR1EGU1FbGVUCBlMQBgdaAVUOXxgTKFhGVhFQAUUU9c8RBw1DfQdbClEcQlcIGAdHBVkRChFdQ1NWFUVRD/eYBkVRB10bFGpfQxFXEA0TVQ1cEFEWQwFLAl4GWkoQB1pGXAcNDEpGVAoQUgNcBVdEXAsXDQRTR/WcWBVBURFQWAVYHg=="
        },
        {
          "id": "g3",
          "texto": "¿Qué gana usted si la piedra es una copia?",
          "respuesta": "dc1:8t51VFpYRFxCZ15FA0QH+sNeUlIIVkZUDVtGXQ8WCF4PARFcRlQIEEAQWwtdFlNER6bEVlxYUBcVfVECWhENVhAR8YZYUEwCWBJeCkZUEVsQVRZVBVUVXgRcBVEFXwlfBxBNGT9eRldRDF1GSw0SCFZFFVhQUkNYFVBEAkZUAlIcQUsVU1hYDEJf88QVFxdQQl5XVw1cRkQHFQNeElMUUEIHBhkXRAMQVgNeEvvXHERnChcRUEVeGVlUFBNRVaKaEAASdlhYRAJCQ0UARlIXSQdCV0ABFw=="
        },
        {
          "id": "g4",
          "texto": "¿Qué sabe de las cuentas de la expedición?",
          "respuesta": "dc1:ZA5WWhgZXgIRRlFFClYXGRRVWlIXF0Z0C1AIRAkWAl4BBkNUD11GQFURVxJZFxxEcglFQlD1gFZHEWICWFKilkICV1kUWlkBEPGDRRVCREkDQkJWRFwIFydZRnMHXxReTkMGV0ZdD1JCA0FKGB0SAVlFAF9QRF4ZWFQUE11VCPSDQUdbFFhSBg5TXhEJFxVMBxBYXERVAxcGXEgQKlkVEQQMF/rVVhRRVg1BRksNVwlHFwARUEVF+pRfFBBdX0FCXkFAUFVVFhpCQVkAC0cWXEJEX1YKXAgXF1tGQApXCB8="
        },
        {
          "id": "g5",
          "texto": "¿Ha hablado con la señorita Montalbán desde que se abrió la caja?",
          "respuesta": "dc1:fAQSRVFd9c5CQ0UARlIXSQdCV0ABGQdZFlAVEAJTRlUDEUNVBxEQX0pMEjNWRFAFWQYKEUNfR1wVVVFDWFBBVF8PVFxVV0wCThJJRQpWRFoNXlBaBVccVkJbCRAVWQRDBxUKTwMRBxBFDBISURBHCFYXSxF7WRFUUBFcCk5eQVRREl0ZFEAWAhNH88hGUhdNoZFYExFKElIGUBUeRmcTWBigwhkSVAhXUUJAB0KngQoXAAldVBg="
        },
        {
          "id": "g6",
          "texto": "¿Notó algo raro la mañana del 28?",
          "respuesta": "dc1:cw5cFUJcRAwMU1xFCFhESgcQWUoBGQheQlkHEBJECVwSBhdYRlUDXBAoRw9bDV1IFxUAQ1oWQVZHEVgCFFwA9IEAXFQUSvXOQkRZRQdbA1ZYEFNfREoD9NNaFBAwVwpSocIRWgNdRkRVDPHLWURCC1sTChFXWlBXVl4UBloRDVhDQUJA94hZEEJWVUUKVkRaA11fQAUVRlQNWAkQAlNGWQMRClcHH0ZyQg1fA/vXEgdYC0VAQFMRUVRT985VEQRERABWWhRYWwIRU14BCRcUWAweFnYKGQNbQlEDQw9TFEUNQw1YAlgDEFEPUxVZREIFWUs=",
          "desbloqueadoPor": "p08"
        },
        {
          "id": "g7",
          "texto": "¿Conoce a Arthur Pemberton?",
          "respuesta": "dc1:dAQSW1tUVBEHEklFAlJESRBVWEAFF0ZiDBUPXgFapZgRQxJMAxEKXFUUU0ZcDVceFwSmgFpFEUlHXlkGQFgEWVQOEkBaWBYAC0dUBAIZRGoLEFRGF1oHFwRcCFEIVQ9QAQqgiggdRkFFBxIIV0ReCFYIABFUFlxQFUFBBkZFAA0QGFMVQFxYBA0SUgQVQwVXFlUWVwFKD1IQQQke"
        },
        {
          "id": "g8",
          "texto": "¿Confía en Yusuf al-Dajli?",
          "respuesta": "dc1:faKTRhRIQwZCV15FC15EWg1eRVYOVkZTBxUHVAtfCFgRFxFYBVilg15MEjZdF/HXFwkEQhVVUFNUQhQHUV0AWUQEElFRGVugzx4QAQlERE8HU1NASBkfFwFAB14CWUZoFxAWX0ZVD1NVQlEPVgdHAVkRBBFMFlVWRhFfClheEhdDDlwVV1BYABdXXhEHFx0ZBl9FHUR1CRcTQAMQH1lGXw1DEPrPEQNDEBNHpZFEWgVVpshQFVJUV0FDW00="
        },
        {
          "id": "g9",
          "texto": "¿Es verdad que el banco está en apuros?",
          "respuesta": "dc1:fA5BFURcRAqhgVQMBVgXGQdIV1QBSwdZThUfEANFElRCDgZKRl8JHhA3XAcYFFsBUxcEEVFTEU1HVF0NQFBBXFkNXUYUV1lDEVNcEwcXEVdCUlddB1ZKFxFQpYEJRA9FAxBPGRZUFF8QF1wHGAJdEFgCF1BT9ZxYFVRaQ1FdQXpFEldaFFpZDUJfWUUIWAlbEFUWVwFbB10NFQdJE1IHEQNDEkwDEQpREAVXCEwBEgpYRRZQRENUGUZEFAddXwRFX08SZVtLFgYRXRAUE14BSw0QR0YBGQdHA0cDSgVXSA=="
        }
      ]
    },
    {
      "id": "yusuf",
      "nombre": "Yusuf al-Dajli",
      "edad": 45,
      "profesion": "Jefe de la caravana",
      "foto": "img-yusuf",
      "desbloqueadoPor": "p02",
      "biografia": "Nacido en el oasis de Dajla. Ha guiado caravanas por el desierto occidental durante veinte años. Fue él quien pesó y vigiló las cajas.",
      "coartada": "La noche del 27 de marzo hizo la guardia norte del campamento, de diez a cuatro.",
      "motivo": "Pemberton necesitará en otoño un guía que conozca el camino, y en Dajla todos saben que los ingleses pagan en libras. Yusuf es el único jefe de caravana que ha hecho la ruta.",
      "declaraciones": [
        {
          "texto": "Pesé las cajas yo mismo, y no se movieron de la tienda del almacén. Esa noche vi algo, y se lo dije a la señora."
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:eQ9dVlFXQgZCSxARA0QQUAVfFlAIWBBSTBU2VRX11REOAkNaB1sHEARCU0ZUBUFEWRAAR1AWGQwHHQRDX1ZIGRAgEllVShYHDUEQEw9YREwMURZfEUNGU6GcBFkKFgddQhAWSwlUFURVQlYDGBdHREcQAEJBWRFAFV1bQ1deD0Pz0hJUFHpaAhBTEAQKFwD6z1EWQA1eE14HWxJVShYWVBAMQ1wKXQcQQAdcFfvXEhVCAEVUR1cRa1pVRgpTXkFFVRdXWVVXUgxMEmMAFF4LGRsQRkEBWg9EDQ5GQwMWCVcHDQdcRkIPEFwHEgdbEUEFWUlFQVBEXhlHVEcTW18FUhACXVsUWlcPD1Me",
      "preguntas": [
        {
          "id": "y1",
          "texto": "¿Qué vio la noche del 27?",
          "respuesta": "dc1:cUFeVEcZUgwRHhAQCFZEVRdKFkMBSBNSoYQHEAJTCEUQDENdAxETXlFCRg9dClYFG0UASVRVRVhYVFoXUREAWxASR0dbXEUXBxJUAEZaDRkSRVNAEFZIFyZAFPPVFgpeQhIWXEZECBBCB0gJGAddFkMKSxF5WRFeQFBGB/eYQVJeQV5UFFpXAQdIUUUfFxdcQlxZEwBQDFJCVEZcBxYVVKHSDEsHERZfQkJeBxgJU6eGBAtQGw=="
        },
        {
          "id": "y2",
          "texto": "¿Cómo pesó las cajas?",
          "respuesta": "dc1:cw5cFVhYFhENX1ELBxcAXA4QV18JWAX0y1tKEAJZFREUBgBcFREFUVQDEhNWBR5EUwAJUFtCVBlRVFhDR1Sihl8TEnJVS1sGDFZZBEgXJ1AMU0NWCk0HFxsVAl8VFg1YDgwQGQpQRlNFA0ASWUoSIVlFIVBfWlAZWVAUE1FCAEVfDxJWW1cWDwMSVABGWwUZA1RDUgpYShcTQAMQA0VGXAcJDEtGQBNVEA5TRlWnnwUbRRwRWVcRWkBQRhdVERFSQ6KBFVlcWAwRHBApB0RESw1dV10FSkZZDRUVVUZTF0QLFQxaB19GVFVCVg9dHhIPXgkKQhs="
        },
        {
          "id": "y3",
          "texto": "¿Quién podía entrar en el almacén?",
          "respuesta": "dc1:fAASQV1cWAcDElQKFRcKVkJEU12nlAcXAVAUQgdSE0MDWUNcCBEDXBAGVxVRAUAQWEULXhVFVBlWWFERRlBBWVEFUxkUSVkRE0dVRQhYRFEDSRZSAPrVWQZQRlwKUxDywxEQXApeSBB1DEYUWQZTRFsERUJQ9YBWR1AYQ1FfFUVRA1MVTVYWAA1cEAkHRERaA1pXQERARlIMQRRRBFdGQBcKBldGQBNZQwtXFFlEURFWCwFeFVhQXVxUFA5dQwBVUU8SeF1LVxFCV0IERloNGRZCV1EFUwkbQkUDQgkWAlQRBwYZA11GXl8QRgMW",
          "desbloqueadoPor": "p05"
        },
        {
          "id": "y4",
          "texto": "¿Sospecha de alguien?",
          "respuesta": "dc1:Yw5BRVFaXgIQElUWRlQLSgMQRUYdWEgXO1pGVA9RCREODENIE1RGRllYEgpZRF4RTUlFSBVGXksVXVVDWVCihlEPUxVcTFMPDlNDRQJSRFsNRFcTAUwUWBJQBxADWBJDB0MPWEZFD1VeBlNGXAtBRE5FCVAVQkNcRh0UEkFUQVJcQURcUVdCDEJQXxcU9NcZA15CVhcZAlIOFQJVFVcfRAwMTRkjX0ZVXEJRB1UUUwlSCxFeFV5QW/acVUNAQwREEBFTR1FKFgcHElIKElYXGQdFRFwUXAdETA==",
          "desbloqueadoPor": "p06"
        },
        {
          "id": "y5",
          "texto": "¿Qué pasó en Dajla el 8 de abril?",
          "respuesta": "dc1:YARBVFlWRU9CQlECB1oLSkJcVxMFXRNWDFRGSUZVB1UDQxZXCREFX0IQW6WLRFNEWwRFXlNfUlBbUBQHUREVUlyim1JGWFAMERwQIAoXF1yhgVlBRH4HRQ9QCFQPV0ZUERcWTwkRC1VUC1NGUAtABRcBDFJBV19dWh8UJlgRB1hEooFSRlhQDE4SXQAIWBcZBlUWUA1XBVhCWA9eE0IJQk5DGhkVUApZ89ESFVEIUAVZAQofFXpQGUZU99JbQwAXXQBcUfeKFhYMEkAEFEMBGQNcFn4RSgNYTA==",
          "desbloqueadoPor": "p08"
        },
        {
          "id": "y6",
          "texto": "¿Qué piensa de la señorita Montalbán?",
          "respuesta": "dc1:YRRXFVFKVRYBWlFLRn8FWgcQQFYNVxJSQlSlgQlFRkAXBkNeE/LLXxAHRxRXFFcLREUVXkcWVFUVVVEQXVQTQ19BSxVRVVoCQldDRQpWREkQWVtWFlhGRhdQRl0DFhZDBwQWVxLy1RBADUBGSRHxzRcJCkIVRl5DWkIUBkdFopZeQVZaWl1TQwdBRKbHWUoZMl9EEwFKCRcHWwVfCEIU8tFDD1hGUg9FVANWShgdEhRYF0VURlkRVVQRUQ1XXg9DQgBA9pUZUgwREkYABVIXFw=="
        },
        {
          "id": "y7",
          "texto": "¿Hubo algo raro en el campamento los últimos días?",
          "respuesta": "dc1:dQ0SU1tN9dAFQFEDCRcQSwNSV1kFWwcXBlBGXglVDlRCDqCYFREXRVVCVgMYAPHJVl5FVVBV8pRUEUUWUREERVFBQlpGGVMPQlFRCQlFShk7EFpcFxkVVgFaFRACU0ZIBxAMGQJURlxRQkED+9VdFlZFFVRGV1NYWxFZBlpeEhdTAFZUFE9TGUJDRQBGWwtKQlNXQQNYBFZCQAgQBVcLVA4PDBdGYQNCX0JeCUtEQQVUChYRRl9UVEVDUUNEVBJWXkFfUFpWRUMDXhADD1kFVUJUU19ETw9WCFBI",
          "desbloqueadoPor": "p06"
        },
        {
          "id": "y8",
          "texto": "¿Por qué no fue a mirar la luz?",
          "respuesta": "dc1:YA5AREFcFg4LEkAQA0QQVkJVRFJEXAoXDFoURAMWHxEPCkNWFFUDXhAHQAcYCl1EUwAPUEdaXhcVZFoCFFIARVEXU1tVGUUGQkJZABRTARkSX0QTEVdGUBdUFFQPV0ZAFwZDTwcRBxBdC0AHSkRHClZFCURPGBFyVENdDhRFAFpADlFaFEpTQw9dRgylhEoZJ0NZExBYC1UL9s9eRloJEQMNDE2lmEg="
        },
        {
          "id": "y9",
          "texto": "¿Cuánta gente sabía leer la piedra?",
          "respuesta": "dc1:fghcUkFXV01CfFlFClZESgfzh1wWWEoXE0ADEApXRlwLEQJbBxECVRAMXQVQARIHWAgKEUZTEVRcQ1VDUV1BUUUEVVoaGWYGEF0QAAoXAlYW84VUFlgAWEJZAxAOXxxeQhcRXBURFlxRAVMVGAFcRFsQAlBHFlVcFURaAhRIQURVQVVAVUtSoNESVAoVGUR9C1pZExVMAxcXWwcQFloHUgNDEFADXBZCVUJBB1QBEglWCUs="
        }
      ]
    }
  ],
  "documentos": [
    {
      "id": "d01",
      "tipo": "telegrama",
      "titulo": "Telegrama de Clara Montalbán",
      "fecha": "14 de mayo de 1927",
      "autor": "C. Montalbán",
      "texto": "AGENCIA ARKANA MADRID\nPIEDRA DE MI EXPEDICION LLEGADA FALSA STOP\nRIVAL INGLES ANUNCIA MI CIUDAD STOP\nNECESITO SABER QUIEN Y DONDE ESTA LA BUENA\nMONTALBAN MUSEO ARQUEOLOGICO"
    },
    {
      "id": "d02",
      "tipo": "informe",
      "titulo": "Informe del laboratorio del Museo",
      "fecha": "3 de mayo de 1927",
      "autor": "Laboratorio del Museo Arqueológico Nacional",
      "texto": "Caja nº 4 de la expedición Montalbán. Lacres intactos al abrirla.\n\nPieza 1927/114, fragmento labrado.\nPeso: 23,0 kg.\nSumergida en la cuba de agua, desaloja 14,4 litros.\n\nObservación: la superficie es más blanda de lo esperado; se raya con la uña."
    },
    {
      "id": "d03",
      "tipo": "almanaque",
      "titulo": "Tabla de densidades",
      "fecha": "Manual de Mineralogía, 1921",
      "texto": "Kilos por cada litro de material\n\nEscayola fraguada ........ 1,6\nArenisca ................. 2,3\nCaliza ................... 2,6\nMármol ................... 2,7\nGranito .................. 2,7\nBasalto .................. 2,9"
    },
    {
      "id": "d04",
      "tipo": "diario",
      "titulo": "Diario de excavación de Clara · 21 de marzo",
      "autor": "Clara Montalbán",
      "texto": "21 de marzo. Templo. Bajo el umbral de la cella, un fragmento de arenisca rosada, de la misma cantera que los sillares. Lleva grabado un plano y una estrella de ocho puntas, y un cartucho en la escritura de la estela. Hacen falta dos hombres para levantarla.\n\nRodrigo la fotografía en el sitio antes de moverla: placa 31. Por la noche, en su tienda, me enseña el negativo. Es lo más bonito que he visto en mi vida."
    },
    {
      "id": "d05",
      "tipo": "fotografia",
      "titulo": "La piedra en el yacimiento",
      "visual": "foto-original",
      "texto": "Fotografía de Rodrigo Valcárcel (placa 31), publicada en el avance de Clara en la revista del Museo, mayo de 1927."
    },
    {
      "id": "d06",
      "tipo": "fotografia",
      "titulo": "La pieza llegada a Madrid",
      "visual": "copia",
      "texto": "Dibujo del laboratorio del Museo, hecho al abrir la caja nº 4."
    },
    {
      "id": "d07",
      "tipo": "informe",
      "titulo": "Miembros de la expedición",
      "desbloqueadoPor": "p01",
      "texto": "Directora: Clara Montalbán Ferrer, conservadora del Museo Arqueológico Nacional.\nFinanciador: Leopoldo Garmendia Urquijo, Banco del Norte.\nFotografía: Rodrigo Valcárcel Ibarra.\nCaravana: Yusuf al-Dajli, con su sobrino Karim y seis camelleros.\nExcavación: doce obreros de Quft."
    },
    {
      "id": "d08",
      "tipo": "fotografia",
      "titulo": "La estela bilingüe del templo",
      "visual": "estela",
      "desbloqueadoPor": "p02",
      "texto": "Calco fotográfico de la estela hallada a la entrada del templo."
    },
    {
      "id": "d09",
      "tipo": "diario",
      "titulo": "Notas de Clara sobre la estela",
      "desbloqueadoPor": "p02",
      "autor": "Clara Montalbán",
      "texto": "Arriba, en latín: «En el año XI del emperador César Trajano, Lucio, prefecto, dedicó a Selene este templo de XXIV columnas.»\n\nAbajo, en la escritura de la ciudad. Lo que he averiguado hasta ahora:\n\n— Se lee de derecha a izquierda. La barra que cierra cada cartucho marca el final.\n— Los nombres propios van dentro de cartuchos, letra a letra, tal como sonarían en castellano.\n\nSi consigo leer los tres nombres, podré leer el cartucho de la piedra."
    },
    {
      "id": "d10",
      "tipo": "recorte",
      "titulo": "«Mr. Pemberton prepara su expedición»",
      "desbloqueadoPor": "p03",
      "fecha": "The Times, 10 de mayo de 1927 (traducción)",
      "texto": "LONDRES. — El explorador Arthur Pemberton presentó ayer en la Royal Geographical Society su expedición de otoño al desierto de Libia. Según afirmó, posee «pruebas documentales» de una ciudad romana perdida a la que llama Asteria, y asegura que la hallará antes de Navidad. Añadió que contratará en el oasis de Dajla a un guía que conozca el camino. Preguntado por el anuncio de una arqueóloga española, respondió: «Las damas españolas encuentran muchas cosas en los periódicos»."
    },
    {
      "id": "d11",
      "tipo": "informe",
      "titulo": "Registro de pesos de las cajas",
      "soloJugador": "A",
      "desbloqueadoPor": "p03",
      "autor": "Y. al-Dajli · Aduana de Dajla · Museo",
      "texto": "Caja   Campamento      Dajla          Madrid\n       27-III, 21:00   8-IV           2-VI\n\n1 ..... 30,2 kg ....... 30,2 kg ...... 30,2 kg\n2 ..... 44,7 kg ....... 44,7 kg ...... 44,6 kg\n3 ..... 27,5 kg ....... 27,5 kg ...... 27,5 kg\n4 ..... 52,0 kg ....... 41,9 kg ...... 41,9 kg\n5 ..... 38,9 kg ....... 38,9 kg ...... 38,9 kg\n\nLa caja 4 lleva la piedra, paja y tres cerámicas."
    },
    {
      "id": "d12",
      "tipo": "diario",
      "titulo": "Diario de Clara · 27 de marzo a 8 de abril",
      "soloJugador": "B",
      "desbloqueadoPor": "p03",
      "autor": "Clara Montalbán",
      "texto": "27 de marzo. Última noche en la ciudad. Yusuf pesa las cajas a las nueve y las deja en el almacén. No las sello todavía: con el frío de la noche el lacre se agrieta. Me acuesto a las diez, rendida.\n\n28 de marzo. A las seis, antes de cargar, sello las cinco cajas con mi anillo. Desde ese momento nadie las abre: duermen a mi lado cada noche del viaje.\n\n8 de abril. Dajla. Los cinco lacres, intactos. Gracias a Dios."
    },
    {
      "id": "d13",
      "tipo": "informe",
      "titulo": "Póliza de seguro de la piedra",
      "desbloqueadoPor": "p03",
      "fecha": "El Cairo, 8 de abril de 1927 (contratada por telegrama desde Dajla)",
      "autor": "La Unión y el Fénix Español",
      "texto": "Asegurado: Leopoldo Garmendia Urquijo.\nObjeto: fragmento de piedra labrada, caja nº 4.\nRiesgo cubierto: pérdida total de la caja durante el transporte de Dajla a Madrid.\nSuma asegurada: 40.000 pesetas.\n\nNo cubre deterioros, sustituciones ni falsificaciones."
    },
    {
      "id": "d14",
      "tipo": "mapa",
      "titulo": "Plano del campamento",
      "visual": "campamento",
      "desbloqueadoPor": "p05",
      "texto": "Dibujado por Clara el 26 de marzo para repartir las tiendas."
    },
    {
      "id": "d15",
      "tipo": "informe",
      "titulo": "Reparto de tiendas",
      "desbloqueadoPor": "p05",
      "texto": "1 · Clara Montalbán\n2 · Almacén (cajas de la expedición)\n3 · Rodrigo Valcárcel, con su laboratorio fotográfico\n4 · Cocina\n5 · Leopoldo Garmendia\n6 · Yusuf, Karim y los camelleros\n7 · Herramientas\n8 · Obreros de Quft"
    },
    {
      "id": "d16",
      "tipo": "transcripcion",
      "titulo": "Lo que vieron los guardias",
      "desbloqueadoPor": "p05",
      "texto": "Yusuf (guardia norte): «A las dos de la madrugada vi una luz débil dentro de una tienda. Estaba exactamente al suroeste de mi puesto. Duró poco.»\n\nKarim (guardia este): «Yo la vi a la misma hora, justo al oeste de donde estaba. No me moví: tenía orden de no dejar el pozo.»"
    },
    {
      "id": "d17",
      "tipo": "informe",
      "titulo": "Inventario de escayola",
      "desbloqueadoPor": "p06",
      "autor": "Expedición Montalbán",
      "texto": "Para sacar moldes de inscripciones.\n\nSalida de El Cairo (15 de febrero): 3 sacos de 25 kg.\nInventario a la vuelta (Madrid, 2 de mayo): 27 kg en el último saco."
    },
    {
      "id": "d18",
      "tipo": "diario",
      "titulo": "Cuaderno de moldes",
      "desbloqueadoPor": "p06",
      "autor": "Clara Montalbán",
      "texto": "12 de marzo · molde de la estela bilingüe · 18 kg de escayola\n20 de marzo · molde del umbral del templo · 7 kg de escayola\n\nNo se sacó ningún molde más."
    },
    {
      "id": "d19",
      "tipo": "fotografia",
      "titulo": "«Asteria bajo las estrellas»",
      "visual": "trazas",
      "desbloqueadoPor": "p06",
      "texto": "Fotografía de Rodrigo Valcárcel. Cámara fija, apuntando a la Polar, el punto quieto del centro. Mientras el obturador está abierto, cada estrella deja un arco: en 24 horas dan la vuelta completa (360 grados), es decir, giran 15 grados cada hora. La placa lleva impresa la retícula del laboratorio, que divide el cielo en ocho sectores iguales de 45 grados: comparad el largo de los arcos con un sector."
    },
    {
      "id": "d20",
      "tipo": "transcripcion",
      "titulo": "Conversación con Rodrigo Valcárcel",
      "desbloqueadoPor": "p06",
      "texto": "— ¿Qué hizo la noche del 27 de marzo?\n— Abrí el obturador a las once, para las estrellas, y me acosté. No lo cerré hasta las seis, al levantarnos.\n— ¿No encendió ninguna luz?\n— ¿Para qué? Dormía.\n— ¿Usó escayola en la expedición?\n— Eso es cosa de la señorita Montalbán. Yo no toco el yeso: mancha las placas.\n— ¿Conoce al señor Pemberton?\n— Coincidimos en El Cairo hace años. No le he escrito desde entonces."
    },
    {
      "id": "d21",
      "tipo": "telegrama",
      "titulo": "Telegrama enviado desde Dajla",
      "visual": "morse",
      "desbloqueadoPor": "p08",
      "texto": "Copia de la cinta del telégrafo, facilitada por la oficina de Dajla a petición de la Agencia."
    },
    {
      "id": "d22",
      "tipo": "almanaque",
      "titulo": "Alfabeto Morse",
      "desbloqueadoPor": "p08",
      "texto": "A .-      B -...    C -.-.    D -..     E .\nF ..-.    G --.     H ....    I ..      J .---\nK -.-     L .-..    M --      N -.      O ---\nP .--.    Q --.-    R .-.     S ...     T -\nU ..-     V ...-    W .--     X -..-    Y -.--\nZ --.."
    },
    {
      "id": "d23",
      "tipo": "carta",
      "titulo": "Sopa de letras llegada de Londres",
      "visual": "sopa",
      "soloJugador": "A",
      "desbloqueadoPor": "p10",
      "texto": "Encontrada en el escritorio del estudio de Rodrigo, en un sobre con matasellos de Londres."
    },
    {
      "id": "d24",
      "tipo": "fotografia",
      "titulo": "Cartulina perforada",
      "visual": "rejilla",
      "soloJugador": "B",
      "desbloqueadoPor": "p10",
      "texto": "Encontrada en la funda de la cámara de Rodrigo. Tiene el mismo tamaño que la cuadrícula de la sopa de letras."
    },
    {
      "id": "d25",
      "tipo": "informe",
      "titulo": "Acta del registro del estudio Valcárcel",
      "desbloqueadoPor": "p11",
      "autor": "Inspector de la Brigada de Investigación Criminal",
      "texto": "En el cuarto oscuro, bajo el banco de revelado, una caja grande de placas de cristal cerrada con un candado de tres ruedas numeradas. El señor Valcárcel declara que cambió la combinación al volver de Egipto y que no la recuerda; pide que no se fuerce, por las placas.\n\nSe precinta sin abrirla y se traslada al laboratorio del Museo Arqueológico.\n\nEn el escritorio, un sobre con matasellos de Londres (una sopa de letras). En la funda de la cámara, una cartulina perforada."
    },
    {
      "id": "d26",
      "tipo": "fotografia",
      "titulo": "Dorso de la piedra auténtica",
      "visual": "dorso",
      "desbloqueadoPor": "p11b",
      "texto": "Fotografiado en el Museo el día de la recuperación."
    },
    {
      "id": "d27",
      "tipo": "mapa",
      "titulo": "Planta de las ruinas",
      "visual": "plano-asteria",
      "desbloqueadoPor": "p11b",
      "texto": "Levantada por Clara en marzo. Clara cree que la piedra es un trozo de un plano de la ciudad."
    },
    {
      "id": "d28",
      "tipo": "carta",
      "titulo": "Respuesta de Arthur Pemberton",
      "desbloqueadoPor": "p12",
      "fecha": "Londres, 22 de mayo de 1927",
      "autor": "A. Pemberton",
      "texto": "(Traducción)\n\nNo he pisado Egipto desde 1925, como puede confirmarles cualquiera en Londres. Compré fotografías, sí, y lo que vino con ellas, a un caballero con el que me entendí en enero: quinientas libras por lo mejor que encontrara su expedición. Lo que ese caballero hiciera en el desierto es asunto suyo.\n\nNo diré para quién compro. Sí les diré que mi cliente paga siempre a través de una notaría de Logroño y sella sus cartas con una rosa de ocho puntas."
    },
    {
      "id": "d29",
      "tipo": "fotografia",
      "titulo": "El almacén, la tarde del 27",
      "visual": "almacen-tarde",
      "desbloqueadoPor": "p05",
      "texto": "Placa 44, de Rodrigo Valcárcel, para el inventario: 27 de marzo, seis de la tarde, antes del pesaje. Clara hizo otra al amanecer, antes de cargar, con la misma cámara."
    },
    {
      "id": "d30",
      "tipo": "carta",
      "titulo": "Nota del ayudante del estudio",
      "fecha": "Madrid, 16 de mayo de 1927",
      "autor": "T. Arrieta, ayudante del estudio Valcárcel",
      "desbloqueadoPor": "p11",
      "texto": "Señoritas:\n\nEl inspector me pregunta por el candado de la caja grande y yo no sé la combinación, se lo juro. Don Rodrigo la cambió al volver de Egipto. Se rio y me dijo que eran tres números que no podría olvidar: el día en que encontraron la piedra, la placa que la retrató y la hora a la que apagó el farol la última noche de campamento.\n\nYo le dije que la hora no era un número de fiar. Él dijo que esa sí.\n\nT. Arrieta"
    },
    {
      "id": "d31",
      "tipo": "informe",
      "titulo": "Acta de apertura de la caja de placas",
      "fecha": "Madrid, 17 de mayo de 1927",
      "autor": "Laboratorio del Museo Arqueológico Nacional",
      "desbloqueadoPor": "p11b",
      "texto": "Abierto el candado (21-31-2) ante el inspector y doña Clara Montalbán.\n\nBajo tres capas de placas de cristal envueltas en papel negro, un fragmento de arenisca rosada de 33 kg con un plano grabado y una estrella de ocho puntas. Doña Clara lo reconoce como la pieza hallada en el templo el 21 de marzo.\n\nEn el dorso, un cartucho que nadie había fotografiado."
    }
  ],
  "pruebas": [
    {
      "id": "p01",
      "fase": "I · La piedra de Madrid",
      "titulo": "Lo que pesa una piedra",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p02",
      "descripcion": "El laboratorio pesó la pieza y la sumergió en agua. El agua que desaloja es su volumen.",
      "instrucciones": "¿De qué material es la pieza que llegó a Madrid?",
      "documentos": [
        "d02",
        "d03",
        "d04"
      ],
      "opciones": [
        {
          "id": "arenisca",
          "texto": "Arenisca"
        },
        {
          "id": "caliza",
          "texto": "Caliza"
        },
        {
          "id": "granito",
          "texto": "Granito"
        },
        {
          "id": "escayola",
          "texto": "Escayola"
        }
      ],
      "huellasRespuesta": [
        "44a80d62739a8e66f769a5c86c0f2362b13e0184c3e213a0a252b26d1dd39fec"
      ],
      "pistas": [
        "dc1:dAhEXFBQUkMHXhAVA0QLGQdeQkEBGQpYERUKWRJECUJCEhZcRlUDQ1EOXQxZXhIXVgkAXxVaXkoVWl0PW0JBR18TElldTUQMTA==",
        "dc1:AlISUFpNRAZCAwRJUhcAWEJRWlQLGQtSDFoVEAJTRgBOVU0=",
        "dc1:chRBVlVdFgYMElwERkMFWw5RFlYIGQtWFlAUWQdaRkAXBkNJA0IHEAFOBEZTDV4LREUVXkcWXVBBQ1tN"
      ],
      "solucionDirector": "dc1:AlIeBRRSUUNNEgFRSgNEVUINFgJID0ZcBRoKCkZTFVIDGgxVBxEAQlEFRwdcBRxEewRFUEdTX1BGUlVDRFQSVkKin1QUCxpQQllXSgoZ",
      "exito": "dc1:dRJRVE1WWgJMEnEJAUINXAwQXloeVkZCDFRGUwlGD1BCGkNVBxELVUQL8dUYAVxEWwRFUlRcUBcVYVERWxENVhACXUVdWBYXC1deAEZCChkGVVBWB00JFxNAAxACXwVUQgCgigteRkNVQloPQgsc"
    },
    {
      "id": "p02",
      "fase": "I · La piedra de Madrid",
      "titulo": "La copia",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p03",
      "descripcion": "Quien hizo la copia tenía delante una imagen de la piedra, no la piedra. Comparad la fotografía del yacimiento con el dibujo de la pieza llegada.",
      "instrucciones": "¿Qué delata la copia?",
      "documentos": [
        "d05",
        "d06"
      ],
      "opciones": [
        {
          "id": "estrella",
          "texto": "La estrella tiene una punta de menos"
        },
        {
          "id": "espejo",
          "texto": "Está toda al revés, como en un espejo"
        },
        {
          "id": "cartucho",
          "texto": "El cartucho tiene un signo añadido"
        },
        {
          "id": "surcos",
          "texto": "Le falta una de las calles grabadas"
        }
      ],
      "huellasRespuesta": [
        "46b755578c9a11398218c7c0c752053d8fbefdd200c844362f05fc09d35ab37a"
      ],
      "pistas": [
        "dc1:cw5cQVVdFg8DQRAVE1kQWBEcFl8LSkZEC1IIXxUWHxEOAhAZBVAKXFURCEZdF0anlgtFRVpSXkob",
        "dc1:fQhAVFAZXgIBW1FFF0KnkEJcV1cLGQVWBxUKUUZTFUUQBg9VBxEUVUMSVwVMCxIFFwkEEUVaUENUEUYGUF4PU1FP",
        "dc1:fA4SREFcFgYRRlEHBxcFGQ5RFloeSBNeB0cCUUZTFUWhwkNYRl0HEFQHQANbDFNK"
      ],
      "solucionDirector": "dc1:fAASVltJXwJCV0NFClZEUA9RUVYKGQNEElAFRQpXFBEGBkNVBxEJQlkFWwhZCAhERABFRVRaXfqGEVVDRFATQ1kTElFRGUMNAxJTChZeBRkEX0JcA0ullgRcBVFGRglCCxcKTwdVBxBADUBGXQgSAFgXFl4VUlRVFV9RBFVFCEFfTxJmUfqHAg5TEARGVgheF1lTXURaCVlCVAVTA0UJEQNDD1hGQQpRUwMSVQlK",
      "exito": "dc1:cQ0SR1FP9coRHhAGCVoLGQdeFkYKGQNEElAMX1wWFVRCAAxJD/LVEFQHEhNWBRIHWBUMUBVQXk1aVkaglVcIVFFBQlpHUEIKFFNUBEZHC0tCVVoTAFYURA0VAlUKFghUBQIXUBBeSBBxCl0UWUgSAVtFBlBHQkRaXV4UB1ERDVYQEVtQUEtXTUJxXAQUVkRWERBTXRdcpYYDFQpRRlMVRQcPAhkEWApZXgXx2l1EVgFbRRFUWEZdVhs=",
      "escena": [
        {
          "texto": "dc1:cw1TR1UZWRBCV0MGE1QMWEJDX11EUAhDB0cURQtGD0NMQyBMB18CXxAlWxVVAUAFFwEMUlAW85JQQkQGXl6jjBxBUVxRS0QCQl5fFkZYDlYREENdREoDUBdbAl9IFiJUERMW+s9CRlNfBVdGVAVBRFsJBEdQRRFdUF0UAlhcAFTzyFwVUFxaQy9HQwAJFx0ZAFFcUkRdA1sDWxJVRlIDERQMEFYSQwdDHg==",
          "imagen": "img-museo"
        },
        {
          "texto": "dc1:dQ8SUFgZRaDRRlELCRtEXAxERFZEWgddA0ZGUQRfA0MWAhAVRlkHSRAXXEZbBV4HWEUBVBVb8phGEVAGFFUORBAMV0FGVkVZQl5RRQNEEFwOURZXAVVGQwdYFlwJGEZwEBEKWwcdRlxRFvHLVkoSJVUED14ZFkRXVBFREFdDCENFE1MVRUxTQwxTVAwDFwxYQlxT8MldCRcWWgJREPXLUEw=",
          "imagen": "img-estela"
        },
        {
          "texto": "dc1:ZBNXRhRaVxEWR1MNCUREWBNF9Z5EQEZCDFpGVQgWClBCEwpcAkMHHhAxW0ZUAVcJWBZFVEZCXkoZEVgGUVwORBAAQ0BRVRg=",
          "quien": "chiqui",
          "visual": "estela"
        }
      ]
    },
    {
      "id": "p03",
      "fase": "II · El cartucho",
      "titulo": "Tres nombres",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p05",
      "descripcion": "La estela dice lo mismo en latín y en la escritura de la ciudad. Sus tres cartuchos son tres nombres que ya conocéis.",
      "instrucciones": "¿Qué nombre dice el cartucho de la piedra?",
      "documentos": [
        "d08",
        "d09",
        "d05"
      ],
      "huellasRespuesta": [
        "ad7151c1fb53ce6501ec50ae1db99fad866d87cf7e38fccc806ab7a9b8bfec0e",
        "e54ed382fe933e504bb1bda0221760bd6b7450d1e01853e5615dd6e2d7cf76ec"
      ],
      "pistas": [
        "dc1:fA5BFVpWWwEQV0NFAlJEVQMQU0AQXApWQkYJXkZiFFAIAg1WShEqRVMLXUZBRGEBWwALVBsWclZbRVUHFF0ORBASW1JaVkVDBlcQBgdTBRkBUURHEVoOWEw=",
        "dc1:YwQSWVFcFgcHElQAFFIHUQMQVxMNQxdCC1AUVAcMRlQOQxNLD1wDQhARWwFWCxIAUkUxY3R8cHd6EVEQFFQNF1QEElj3mEVDAxJcBEZTAUsHU15SShkqVkJ0RkMDFhRUEgoXXEg=",
        "dc1:cw5cFVhYRUMOV0QXB0REXQcQWlwXGRJFB0ZGXglbBEMHEENKAxEKVVVCRglcCxIBW0UGUEdCRFpdXhQHURENVhARW1BQS1dNQnddFQ9SHlhCQFlBRHhI"
      ],
      "solucionDirector": "dc1:cwBAQUFaXgwRCBAxNHYueCx/FhtTGRVeBVsJQ08aRn03ICp2RhlTGRxCYSN0IXwhF01TGBkWXVz2nFAMRxEFUhAFV0dRWl4CQlMQDBxGEVAHQlJSShkjW0JRAxAKV0ZBCwYHSwcRAllTBxInazB3Nn4kSxF2WlBLVBFaDBRdDhdYAFD2mVgWExdQXAwFVgBWWBBmVglbA0UWWggQCllGQgMBBhkWXhRBRQcSDllERA1EEQoRWVcRSVxUUBFVEQ4XXAASRVhYVQJCAQFL",
      "exito": "dc1:cTJmcGZwd01CcVwEFFZEVw0QXlJESRNVDlwFUQJZRl8XDQBYRlQVVRAMXQtaFldKFzxFVEZCUBlYUPfSVV8AF1UNEmFdVFMQQlZZBgMXFUwHEGZWCVsDRRZaCBAQV0ZQQgEWSgVQFBDyyXMVTAFADVan3h8Vd1VcWPKVEBgRIltRE1MVW0oWFxBTVUUDW0RLB1dfQBBLCRcGUEZAA0UJQkIaQ0oTEQJZURBbCRY="
    },
    {
      "id": "p05",
      "fase": "III · El campamento",
      "titulo": "Diez kilos",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p05b",
      "descripcion": "Un investigador tiene los pesos de las cajas; el otro, el diario de Clara. Ninguno de los dos papeles dice nada por sí solo: juntadlos.",
      "instrucciones": "¿Qué noche se cambió la piedra?",
      "documentos": [
        "d11",
        "d12"
      ],
      "huellasRespuesta": [
        "a6d233421cce9791e5c709be6a0974e60414d74965f91f5beddb08ec35e9c26b",
        "2cca531e1b4d97607369f05d3437588f77c6a72a6b109dd3b3bb477892f6ac11",
        "3398375a044135793171cb98b3c4dba1914cec5da3ed44e092021f783a19e034",
        "4feff0cf1f376d284c3b39cb42266431400bda8eef0507bee799811a43ca5ec5",
        "4846760784bba63f9e73820ad3da890a55f9f05f257d2b66df8ddd8d612ca8f2",
        "e2f8f1d4a501ee47f9e43443dcee079d7d98f1a8a1530c25e14b14b0ea4a55f1",
        "7e4de111f627afc3d084bcefc571d7900e8a4fd5e86322b08c864ec71b20879b",
        "88ccb39d5d45166e9ee14612325ba941ed46370031bbcb9a6d920506d2aa1bb1",
        "2d808b134d63f59a30f3314bdba5842781e64673c9a3e30d0200c361a764be3d",
        "c4fa7db6a67997daefe48f36c9bff91d645e74d79f487adcf75d7773c4fd6e10",
        "12c7779c53837a33df05bde3de7dbbd3986a2acd23baefb0490049f3f49a593b",
        "1734d5ca189670439de8c9dcf8ab0f8b88151b1793011ff24fdce5c1040082d8",
        "08b24c6f8030b0ca14f2e1e71993733c8b567c924d2ca73fab1dce11b28cd59f",
        "1d7ae7b14f84048c63b37de236bfcea520f1533cd4f920236841f10c3298ad61",
        "4c230645152d40006b4c416f8dc98c6359a440f20572bd3085e9e3565ed1d139",
        "531262dd66299a913f2dc13d470d2a83f6827029ac6d49e57816098568bc913e",
        "ff999070f5e3fbd4c831d4877a1c498b65fcbaa99141a166c87d69a8b8b8b26f",
        "3ae48f0c5461553462c2ae9de6bd75be43cb4f613a2a5238b48906d8bcca61ae",
        "48eead02d0a127aa7f6bea7cc3ab40ed894c69d0e5dc4de407e6515a7bdd9bc7",
        "a0d3e2b7ed65bf501c8d6c9771f148f9744db0bd982f1d1d3ecff1b521902054",
        "92b9a55dfe624d7d7fe60c4c97b42fc46edb0d9e2af252e15adb13f53489ea3f",
        "8563b224ef7445b02529a6dcf5bf98c037bcd43be1acb03e096d62a801e5f81e",
        "933293d28e3dd8fc1eb635e83857e0ec6d18a5fa6596ce05b80ea2ae23d64e28",
        "2f9922b06eeb5b19523da1e209e34edf4c53253151df5a1bba9179f71c934fdb",
        "e8049eef1e5b8479cd30da6fe9f0ee47492a30f0555e08e0c964514bc8c3c8d2",
        "789277d56efc5eaa316bd79ca12e44358ca9fec50e439c9e7d93fe9f664b4bea",
        "ad00ed8955c3e258c9964ebc009e83ad7eb0d4fadaa321e9088f7449253d13fd"
      ],
      "pistas": [
        "dc1:8t53WxRIQ6DLEkQXB1oLGQFRW1EN+tUXBlBGQANFCREOAkNaB1sHEARd",
        "dc1:dQ9GR1EZUw9CUVEIFlYJXAxEWRMdGSJWCFkHHkZmA0MNQw9YFREFUVoDQUZLARIXUgkJUEdZXxlUX0AGRxEFUhASU1ldSxYaQl5fFkZbBVoQVUUTCFUDUANHCV5GXwhFAwAXVhUf",
        "dc1:YwQSRVFK9dBCUxAJB0REVxdVQFZEXQMXDlRGXglVDlRCGkNKAxEVVVwO8dUYBRIIVhZFQlBfQhlRVBQPVREMVvPQU1tVFw=="
      ],
      "solucionDirector": "dc1:fAASVlVTV0NWEkAMA0UAXEIBBh9VGQ1QQlAIRBRTRlQOQxNcFV5GVFUOEgVZCUIFWgALRVoWGQsCHH0qfR1BBQFbAgUdGU9DJlNaCQcZRGoHEEVWCFWlhEJQChBUDkZQQg8CSkYHXAAAQktGVAtBRFsEBkNQRRFVWVRTAkZeDxdZD0ZUV01ZEFgSVQlGVAVUAFlZExdcRl8LTwkQCldGXw0AC1xGVQNcEFAFRlkIElYPRQFUFVtQS09eGENRX0FSXEFRVFlJVw4HXEQKSA==",
      "exito": "dc1:fAASW1taXgZCVlUJRgVTGQNcFgFcGQJSQlgHQhxZShEHDUNcChEFUV0SUwtdCkYLG0UAX0FEVBlQXRQTUUIOF0lBV1kUVVcAEFceRSpYFxkFRVdBAFAHREJDD1UUWQgRAw8EVkZUFVEQDF0FUAEc"
    },
    {
      "id": "p05b",
      "fase": "III · El campamento",
      "titulo": "El almacén, dos veces",
      "tipo": "diferencias",
      "obligatoria": false,
      "puntuacion": 70,
      "siguientePrueba": "p06",
      "descripcion": "Rodrigo fotografió el almacén la tarde del 27 para el inventario. Clara hizo otra placa al amanecer, antes de cargar. Son casi iguales.",
      "instrucciones": "Pulsad, en cualquiera de las dos fotografías, las cinco cosas que cambiaron durante la noche.",
      "documentos": [
        "d29"
      ],
      "segundos": 60,
      "config": "dc1:S0NEXEdMVw8jEApHB1sJWAFVWB4QWBRTBxdKEhBfFUQDDyEbXBMHXF0DUQNWSV8FWQQLUBcaE0lAX0AMRxNbbEtDShcOCg5WThBJR1wEUAFOEkQRXghWBx8ZHRIeFFwCW1NPGx8TXAEJUh5ESkYIUAIYSUoXThMDAAIETxZIQw0EVQIZFksUWVYHTUkdFRwbWAYDB0gbHxVYAVICShQUE1hVVkRKSkRIElgDVw1IEB0VX1ABDRoTSxcLAFZJbBw=",
      "pistas": [
        "dc1:fQhAVFAZRhELX1UXCRcIWEJTV1kFGQVCA0EUX1wWA0JCDwIZF0QDEEAHQAJRp4FERwAWXhsWdVxGQUGgnUJNF1UNEkVVVVlDAVdeERRWCBkbEFNfREoTUg5aSA==",
        "dc1:cQ1VQF1cWEMMV1MAFV4Q+tEQWkYeGR8XDlRGVANcpYJCBwxXAlRGXFVCVxVMC0AGVgcEEVhTX1ZGHxQmWBEHVkIFXRVQXFpDEFteBqWEChkMXxZWF02llkJWCV0JFgNCFgIBWEgRPxBYA0tGTQpTREcMFlBRVxFcWxFYAhRQE1JeABw=",
        "dc1:ZABCVBoZcAIQXVxFAEIBSwMQUlYIGQFWDFYOX0gWIFAQDA8ZA19GVVxCQRNdCF1KFyMEQ1FZEVhXWFERQF5PF2UPUxVWVkICTBJzDAhUCxc="
      ],
      "solucionDirector": "dc1:cwhcVlsZVQIPUFkKFRcBVxZCUxMIWEZDA0cCVUZPRlQOQwJUB18DU1UQCEZUBRIQVhUEEVFTEVVUEVcCXlBBAxANU1FRWFICThJVCUZRBUsNXBZVEVwUVkJRA1xGUQdfAQsMGQJUChBAA14JFERXCBcDBENaWhFcWxFRDxRCFFJcDhJUFFVXQwZXQgAFXwUZBlUWXwUZBVYIVEoQA1pGVwMRB1ZGVQMQQANYBxgFUA1SFxFeFU8RTFtQFAtBVA1bUUFWUBRbWRcDElUQFFgUXAMQU11EVQcXA0cDXgcYRnAOBBZQA19GQlUHXxZZFUcBQ6bWEVlXEVpUW1VDABEAF1wAEllBQxYHBxJFC0ZRBUsNXBg=",
      "exito": "dc1:dQ9GR1EZWgJCRlEXAlJEQEJVWhMFVAdZB1YDQkZXClYXCgZXRlAEQlmhgUZUBRIHVg8EEQEWUBlZUBQPQUtBU1VBR1sUX1cRDV4cRQpWRE8NXEBap4pGVkJZClUIVxQRBgZDSQdbBxBJQlYDUqeBREILBBFdQ1RVWVAUB1ERA1hEABJQWhlaAkJTQgAIVkoZLlFFEwJWElgFRwdWpZsHQkIHCloDX0ZBRaGbRkgFQaeES0V/WhZVUFZUWkNFRAj0mQ8c"
    },
    {
      "id": "p06",
      "fase": "III · El campamento",
      "titulo": "Una luz a las dos",
      "tipo": "hotspot",
      "contenidoVisual": "campamento",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p07",
      "descripcion": "Dos guardias vieron la misma luz desde dos puestos distintos. Cada uno sabe hacia dónde miraba.",
      "instrucciones": "Pulsad la tienda donde se encendió la luz.",
      "documentos": [
        "d14",
        "d16",
        "d15"
      ],
      "huellasRespuesta": [
        "a98b34dd6045f916d0099efff7eab46b2b72ae4c727f5bac665ab171fc75088d"
      ],
      "pistas": [
        "dc1:ZBNTT1VdFgcHQVQARlQFXQMQRkYBShJYQkAIUUZapZwMBgIZA19GXFFCVg9KAVEHXqbWXxVHRFwVVV0AURECVlQAElJBWEQHC1Me",
        "dc1:YxRAWlFKQgZCV0NFA1lEXQtRUVwKWAobQl0HUw9XRlAAAglWRkhGURAOU0ZRHkMRXgAXVVQYEXZQQkAGGBEEWRAJXUddQ1kNFlNcRQ5WB1ADEFpSRFAcRhdcA0ICV0g=",
        "dc1:YwRVQF1dFg8DQRABCUREVaGdWFYFSkZfA0YSUUZHE1RCEAYZBUMTU1UMCEZLC14LFxALUBVCWFxbVVVDUUIV9JFBUxVYWBYVB0gQAAgXCFhCVFMTPUwVQgQVHxADWEZdA0MHXEZ6B0JZDxw="
      ],
      "solucionDirector": "dc1:dARBUVEZWgJCVUUEFFMNWEJeWUEQXEoXDlRGVA9XAV4MAg8ZFUQUX1URRgMYFFMXVkUVXkcWXVhGEUAKUV8FVkNBABVNGQVDSksQFwlNBRkOURYGTQJGUwdGAlVGWgcRBRYCSwJYBxBVEUYDFEReBRcJppxbU1AZWlRHF1EREVZDABJFW0sWDwNBEBEPUgpdA0MWB0RARgRMFTVVRlUURBgCDRkDX0ZcUUIBXBgIUwZYFwRFWkRYVhVXWxdbVhP0kQdbVlsZUgZCYF8BFF4DVkw=",
      "exito": "dc1:fAASQV1cWAcDEgNfRlIIGQ5RVFwWWBJYEFwJEABZEl4FEaCYAFgFXxAGV0ZqC1YWXgIKEWNXXVr2kEYAUV1PF2EUVxVBV1dDFltVCwJWRE0HXlFSRFUTTUJbCRACXwVUQhIW+s8RFVUQClMF+8lTRFMAC0VHWR8ZZVRGDBRUDxdVDRJcWk9TDRZTQgwJFwBcQlxXEwFBFlIGXAVZpYUIEQoCGhkHXQFfEBNHAxgKXURUEARVR1cf",
      "escena": [
        {
          "texto": "dc1:Yw5QR1EZUw9CQlwECFhIGQZfRRMWXAVDA0ZGQwMWBUMXGQJXRlQIEFwDEhJRAVwAVkVWHxV1XVhHUBQPVREMXkIAEkwUXV8ABxJBEAMXBVUO85sTEFwI9M9URmIJUhRYBQxDShMRClFSDUAHTAtADVhfRVJAVFRNVEIYQ0FfQVFRE11ZFEtZCQ0SSUUTWQUZAVFcUkReFFYMUQMQAlNGQQ4CAFgVEQRRWg0SA1REUQVDFwAf",
          "visual": "campamento"
        },
        {
          "texto": "dc1:ZQ8SU1VLWQ9CQF8PCRcFGQ9VUloFGQtSAV0HHEZSA18WEQwZAlRGRV4DEhJRAVwAVklFUBVaUEoVVVsQFFUEF1wAElhV+ocCDFMeRSJSF10HEFBGAUsHFxFQRkYDFhNfA0MPTBwRAvOZAFsKFkRxC1oKRV1UFkBMUBFCClFDDlke",
          "quien": "gismera",
          "imagen": "img-campamento"
        },
        {
          "texto": "dc1:aUFXWxRcRQJCRlkACFMFGQFRVPDJWEZCDFRGQA9TAkMDQwdcRkUUVVkMRgcYD1sIWBZLEWwWXk1HUBQHUREXUlkPRlxAS/XKERwQNBNeAUsNEEVSBlwUFwZQRlSlhQhVB0MQWApYpYMQDlNGSwFVEVkBBB8=",
          "quien": "chiqui",
          "imagen": "img-campamento"
        }
      ]
    },
    {
      "id": "p07",
      "fase": "III · El campamento",
      "titulo": "Lo que pesaba la buena",
      "tipo": "codigo",
      "longitud": 2,
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p08",
      "descripcion": "La copia tiene la misma forma y el mismo tamaño que la original. Solo cambia el material.",
      "instrucciones": "¿Cuántos kilos pesaba la piedra auténtica, redondeando?",
      "documentos": [
        "d02",
        "d03",
        "d11"
      ],
      "huellasRespuesta": [
        "e77709ebf8673fa08d2feadca275285fa14a13e026fac97f4375c35c74d43cdc"
      ],
      "pistas": [
        "dc1:fAASVEFN9coMRlkGBxcLWhdAVxMIVhUXD1wVXQlFRgBWT1cZClgSQl8RHA==",
        "dc1:fAASVEZcWAoRUVFFFlIXWEICGgBEUg9bDUZGQAlERl0LFxFWSA==",
        "dc1:f0FQXFFXDEMOUxAGB10FGRJVRFcN+tUXUwVKAUZdD10NEENYChEFUV0AWwdKREcKVkUVWFBSQ1gVQVsRFF4VRVFBVlAUCwVN"
      ],
      "solucionDirector": "dc1:AVUeARRVFqD1EgJJVRcPXk1cFg5EClUbUxUNV0gWJUQDBxFYRlIJXhAOU0ZbBVgFDUVQAxkGEdu9oxRQBx1QFxtBAAYYCRZeQgYBSV8XD15M",
      "exito": "dc1:ZBNXXFpNV0MbEkQXA0REUgtcWUBeGaScClQFVQgWAFAOFwIZAl4VEFgNXwRKAUFERwQXUBVaVE9UX0ACRl0A9YtPEnlVGVUMEltRRRZSF1hCVF9WHhkLUgxaFR4="
    },
    {
      "id": "p08",
      "fase": "IV · El molde",
      "titulo": "La escayola que falta",
      "tipo": "codigo",
      "longitud": 2,
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p09",
      "descripcion": "La expedición llevó escayola para sacar moldes. Clara anotó cada molde.",
      "instrucciones": "¿Cuántos kilos de escayola se gastaron sin anotarlo?",
      "documentos": [
        "d17",
        "d18",
        "d02"
      ],
      "huellasRespuesta": [
        "5d6c86d2dae6c6881617f39599f29d260f81293207650d4b04978cbb3c572266"
      ],
      "pistas": [
        "dc1:8t5xQPeYWBcDElUWBVYdVg5RFkAFVQ/00RUCVUZzChEhAgpLCQ4=",
        "dc1:YwBeXFFLWQ1CBQVFDV4IVhELFl8LSkZaDVkCVRUWB18NFwJdCUJGV1ERRgdKC1xEBVBL",
        "dc1:YgRBQVVdFhcDX1IMpZ4KGQ5fFkIRXEZBDVkQWaWFRlQMQwZVRvLcXEQLXwkYF1MHWEs="
      ],
      "solucionDirector": "dc1:B1QS17yrFlJaEtLt9BdTGYC4pBNWDkYKQgdVEA1RRkILDUNTE0ISWVYLUQdKXhIBTwQGRVRbVFdBVBQPWxEQQlVBQlBHWBYPAxJTChZeBRc=",
      "exito": "dc1:ZgRbW0BQQhGhm0NFDV4IVhEKFl8LGRdCBxUWVRVXRl0DQwBWFlgHHhA7EjRXAEANUApFW0BEUBlERFFDUEQTWlmigRVQXBYMDFFVRQcXF1wLQxgTN0xGRxBaFlkHFgBeFgwESwdXpZ1RQlYDGAhTFxcAFkVHU11VVEIUB11DopYQElsVUUoWFQdAVAQCGQ=="
    },
    {
      "id": "p09",
      "fase": "IV · El molde",
      "titulo": "Las estrellas no mienten",
      "tipo": "codigo",
      "longitud": 1,
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p10",
      "descripcion": "Rodrigo dice que dejó la cámara abierta de once a seis. Las estrellas giran 15 grados cada hora y dejan su arco mientras el obturador está abierto: medid cuántos grados recorre cada arco en la fotografía.",
      "instrucciones": "¿Cuántas horas estuvo abierta la cámara?",
      "documentos": [
        "d19",
        "d20"
      ],
      "huellasRespuesta": [
        "2f3a73bd43a12d8cc90eff9058ce8d9c240e4ed6f59290883c17f1726ee4a6d2"
      ],
      "pistas": [
        "dc1:ZQ9TFUJMUw8WUxAACEMBSwMQVxMIWEZnDVkHQkZFCV9CUFUJRlYUUVQNQUZdChJWA0UNXkdXQhc=",
        "dc1:cwBWVBRRWREDHhAJB0REXBFERFYIVQdEQlIPQgdYRgBXQwRLB1UJQx4=",
        "dc1:fA5BFVVLVQwREkMKCBcRVwMQWVAQWBBWQkUHQhJTRlUHQw9YRlIPQlMXXABdFlcKVAwECxUCBBlSQ1UHW0JP"
      ],
      "solucionDirector": "dc1:cRNRWkcZUgZCBgWn1hdMCE0IFlcBGRBCB1kSUU8YRnBCUlb71hEWX0JCWglKBQhEBEUNXkdXQhcVYl1DWFBBVlITW/aHGVdDDlNDRQlZB1xOEFpSRFoDRRD21RAHFgpQEUMHVhULRlxRQloJSgUSAFJFCVAVWkRDGw==",
      "exito": "dc1:ZBNXRhRRWREDQQpFAlJEVgxTUxMFGQJYERtGcUZaB0JCBwxKShE0X1QQWwFXRFcXQwQHUBVSVEpFWFERQF5BThACV0dGWFgHDRJDEEZUp5gPUURSSBkIWEJRE0ILXwNfBgxD+81SCV1fQkcIGAZXClMMEV73jR8ZcVRHB1ERJVZaDVMVR1haCqGBEBAIFxBcDlVRQQVUBxcTQAMQCldGXgQKAFAIUEZR89hcRl8RUxZTBEs="
    },
    {
      "id": "p10",
      "fase": "V · Londres",
      "titulo": "Desde Dajla",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p11",
      "descripcion": "El 8 de abril, al llegar a Dajla, alguien de la expedición telegrafió a Londres. La oficina guarda la cinta.",
      "instrucciones": "¿Qué decía el telegrama?",
      "documentos": [
        "d21",
        "d22"
      ],
      "huellasRespuesta": [
        "b005305854decfb3ba6c9649afd3ee6d9df3e3d17286e47f0435bd506e992fb5",
        "31f54420a5129efa9f6ccb23952137fefa2e549b90a6f017988338a7437398d4",
        "ec5ae0423be42dc763e9aa2df64ee4e7c3d6c6a9a15b47f6648737966cf1cf31"
      ],
      "pistas": [
        "dc1:cwBWVBRNRAwYXRABAxcHUAxEVxMBSkZCDFRGQAdaB1MQAk0ZKl4VEFcQRxZXFxIXUhUEQ1RSXkoVQlsNFF0EQ0IAQRs=",
        "dc1:fAASRUZQWwYQUxAJA0MWWEJDWV1ETRRSERUUUR9XFQtCLE0=",
        "dc1:f00SZxgZf09CddLlwA=="
      ],
      "solucionDirector": "dc1:fQ5ARlEDFiwwe3csKHYoGSF/eH4tfikZQmcDXQ9CAxEwTUNvSBEHEGAHXwRdFkYLWUs=",
      "exito": "dc1:8sp9Z31+fy0jfhAmKXkpcCV/GPHfGTRSD1wSVVwWNB9CNU0ZI19GVVxCVxVMEVYNWEUBVBVkXl1HWFMMGBEEWRAsU1FGUFJPQl5RRRZYCFAB85tSRFwIVBdQCEQUV0ZEDAJDWgdDElEQBldGdAtcAEUAFhFYQ0gZR1BGAhRITRdVDxJZVRlQFgxWUUUCUkRKFxBV8MVUB0UDGUZFCFdGUgMRF0wKWAhREAFdCBgFVRFdABdeRhg=",
      "escena": [
        {
          "texto": "dc1:fAASWlJQVQoMUxABAxcgWAhcVxMDTAdFBlRGXAdFRlILDRdYFRESQlUREgtdF1cXGUUpUBVSVBlZUBQGTEEEU1kCW/aHVxYuDVxEBApVp5gMEFlQEUkHFxdbRlMHXKWCDFlDTAhQRkDz0V4PQgUSCFYXAlAZFkRXFUFVEUBUQVZcQX9AR1xZQxsSVAoVFxRYDlFUQQVKRkcDRwcQKlkIVRAGEBkAWBRdUQZTFRg2HERhSw==",
          "imagen": "img-dajla"
        },
        {
          "texto": "dc1:cw5cFVFKQgxOElUJRl4KShJVVUcLS0ZTBxUKUUZ0FFgFAgdYRkUPVV4HEgRZF0YFWREAEUVXQ1gVVFoXRlATF1UPEkBaGVMQFkdUDAkXAFxCXFcTB1gKWwcVAlUKFjZDAwcMFw==",
          "quien": "gismera",
          "imagen": "img-dajla"
        },
        {
          "texto": "dc1:dQ0SR1FeXxAWQF9FAkIWWEJEWVcFGQpWQkEHQgJTSBEnDUNcChEDQ1MQWxJXFlsLG0UQXxVFXltHVBQHUREtWF4FQFBHGVUMDBJFCwcXF1YSURZXARkKUhZHB0NIFiNfQg8CGQBECFRRQlYDGAhTRFSmxFxURFAVFURaAhRSAEVEFF5cWlgWAA1cEAQBQg5cEF9FHURgRlIMFQNcRlUTUBAXDBkJQgVFQg0eRk0KU0RUBA9QFVFDWFtVUUNFRAQXXg4SRlEZVwEQVx4=",
          "imagen": "img-estudio"
        },
        {
          "texto": "dc1:ZQ9TFUdWRgJCVlVFClIQSwNDFkpETAhWQlYHQhJDClgMAkNYAUQMVUIHUwJZShIhRBEKEVBFEUxbEV4WUVYOGxAmW0YaGW9DAxJcChUXDkwHV1lARFMTUANYCUNGWAlCDRcRWBUf",
          "quien": "chiqui",
          "imagen": "img-estudio"
        }
      ]
    },
    {
      "id": "p11",
      "fase": "V · Londres",
      "titulo": "La sopa de letras",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p11b",
      "descripcion": "Pemberton mandó un pasatiempo. Uno de vosotros lo tiene; el otro, la cartulina perforada. Poned una encima de la otra.",
      "instrucciones": "¿Dónde había que esconder la piedra auténtica?",
      "documentos": [
        "d23",
        "d24"
      ],
      "huellasRespuesta": [
        "821f353f284ec5a2bddfca2fc3ae92370c96b9ba82553dbf3cc30dd1ecf42198",
        "75980606258aacedfcbb7dad1dcaa1566bd112b7e60684f02a526f80c7f9523b",
        "8b3a75a27a8b88acc8076a3c88b45e23af3ab5dc7fff54619238a3dc02251baa",
        "abbcd255e9d29be68b4de63b64802cadd06e0cc97d08deccfe3f7f31b828e29a",
        "059a93c87b9d91b3e49d087491a0c56f08e4419fc4e3594d08c7cbc240258d46",
        "55d20e710432f290e13376d9bdc4297a3fbadbe7a46fc3e809b5a280d5d9f766",
        "db75377b629db29ba31edd19c01ff2648f96aa48dc5c84b26e8f54e29ed99272"
      ],
      "pistas": [
        "dc1:cwBWVBRRQwYBXRABAxcIWEJTV0EQTApeDFRGVANcBxEUBhEZE18HEFMDQQ9UCFNEUwBFXVQWQlZFUBpDd14PQ1EFElNdVVdDGxJTCgpCCVcDHg==",
        "dc1:fARXURRVWRBCWkUABVgXGQZVFloeSBNeB0cCUUZXRlUHEQZaDlBGSRAGV0ZZFkANVQRFUFdXW1YZEVcMWV5BQl5BXlxWS1lN",
        "dc1:dQxCXFFDV0MSXUJFI3lEdSMQdXIueIS3xA=="
      ],
      "solucionDirector": "dc1:YgRYXFhVV0MGVxAmB0UAWAxfFkALWxRSQlkHEBVZFlBCBwYZClQSQlERCEZ9Kn4ldCQvcHFzYXV0cnUwFAxB9ZskXBVYWBYAA1hRRQJSREkOUVVSF/vdGQ==",
      "exito": "dc1:8sp3WxRVV0MBU1oERlMBGRJcV1AFSkj12RUjXkZTChEBFgJLEl5GX0MBRxRXRFYBW0UAQkFDVVBaEVAGFF0AF1MAXllRGVIGDhJgFwdTCxkKUU8TEVcHFwFUDFFGURRQDAcGGQJURkBcA1EHS0RWARcGF1hGQlBVGRFXBkZDAFNRQVFaWhlDDUJRUQsCVgBWQlRTExBLA0RCRxNVAlcVH0IxDF0UWAFfEAZbBV1EQxFSRQteFURUWkBURgdVEQ1WEAJdWFZQWAIBW/PWCBlEfA4QX10XSQNUFloUEApXRlwDDQdYRlAKEFwDUAlKBUYLRQwKEVFTXRl4REcGWx1BThAEXhVVQEMHA1xEAEZTAVVCVUVHEV0PWEJaFRADRQVDCwEGGRNfBxBeDUYHFg=="
    },
    {
      "id": "p11b",
      "fase": "V · Londres",
      "titulo": "El candado de tres ruedas",
      "tipo": "cerradura",
      "obligatoria": true,
      "puntuacion": 80,
      "siguientePrueba": "p12",
      "descripcion": "La caja grande de placas está en el laboratorio del Museo, con un candado de tres ruedas numeradas. Rodrigo dice no recordar la combinación; su ayudante recuerda cómo la eligió.",
      "instrucciones": "Poned las tres ruedas en su número y abrid el candado antes de que el inspector pida una palanca.",
      "documentos": [
        "d30",
        "d04",
        "d05",
        "d16",
        "d19"
      ],
      "segundos": 60,
      "config": "dc1:S0NAQFFdVxBACGs+RA9GFUAJFB9GCFQVThdXBUQaRANSQU8bVABEHBJQBEQURgBTFUlHAw0UHRsGARY+GGpDAxJNEAQAGxpBUAESSUQFUBtOEgQKRhVEBFIXShJVB0QdQFBQG0oTUgcSThBTCkZvSGxHVBMZFAMbGRMHQRgTVRUcQwcXGBsAQU4QCUdKFVUJQBwUAlUbShVTB0RtO0s=",
      "huellasRespuesta": [
        "dee8d88c205fce23cab4f41c44faeef7cd5d24f66a31a03bf0b9ba69a23cffa3"
      ],
      "pistas": [
        "dc1:ZBNXRhRX9dkPV0IKFRcVTAcQQ11EXwlDoYYBQgdQCREMDENWCkcPVFEQ8ctZShInVgEEEUBYXhlQQkCglREEWRAUXBVQVlUWD1deEQkXAFARRF9dEFZcFwdZRlQPVxRYDU9DVQcRAF9EDVUUWQLxyVZFHBFZVxFXWlJcBhRVBFsQAlNYRFhbBgxGX0s=",
        "dc1:dQ0SUfeUV0MHQRAAChcAXA4QXlIIVQdNBVpGVQgWA11CBwpYFFgJEFQHEiVUBUAFGUUpUBVGXVhWUBhDWFBBRkUEEkdRTUQCFvGDRQpWREkLVVJBBRdGewMVDl8UV0oRDgJDXQNdRlZREF0KAkReBRcIDEJYVxFYFV1VQ0VEBBdcDkEVU0xXEQZbURZGQQ1cEF9YEwhYRlsXT0g=",
        "dc1:ZgRbW0BQQw0NHBAxFFINVxZRFkpETAhYTBUiXxUY"
      ],
      "solucionDirector": "dc1:AlASHQYIFgcHEl0EFE0LFUJUBgdNFUYEUxVOQApXBVBCUFIVRlVWBB8GAlMRSBJWF00JUBVaREMVUBQPVUJBU18SHhVQCABYQl5RRQX0xVQDQlcTB1wURQNRBxAHFgpQEUMHVhUdRlQBWxtIGDBABVoVBAsVWlRcRxH2yFhQQV9fE1MVUFxaQwRTQgoK9d8ZAV9bXERVBxcKWhRRRlIDEQMBEVAUEQNcEA1QEk0WUwBYF0UZBAcYFw==",
      "exito": "dc1:ZgRbW0BQQw0NHhARFFINVxZRFkpETAhYThUCXxUYRnMDCQwZEkMDQxABUxZZFxIAUkUVXVRVUEoVVFoVQVQNQ1ESElBaGUYCEldcRQhSA0sNChZHFlwPWRZURklGQhRUEUMIUApeFRBUBxIHSgFcDUQGBBFHWUJYUVAaQ3hQQUdZBFZHVRlXFhbxmQsSXgdYTBBvEwFXRlIOFQJfFEUJHUIWDRkFUBRERQFaCRgVRwEXCwRVXFMRUVRT985VEQdYRA5VR1VfXwIGXR4=",
      "escena": [
        {
          "texto": "dc1:dQ0SVlVXUgIGXRAGA1MBGQdeFl8FGRJSEFYDQgcWFEQHBwIXRnUDXkQQXUoYFF4FVAQWEVFTEVpHWEcXVV1BUl4XR1BYTVcQQldeRRZWFFwOEFhWA0sJG0JFCUJGVQdBAxBPGQVeC18QF1xGUAtYBVsBF1QbFnJVVENVQ1hQEhdGABJGVVpXDQZdEAYJWUReF1FYRwFKShcXWwcQBxYTXwNPQ0oPX0ZCVRFCD0oFQEo=",
          "imagen": "img-museo"
        },
        {
          "texto": "dc1:eABLFVVVUQxCVlUHB10LF0JgU0AFF0b1w3IPQ0oWFlQRAkNUE1IO850RWwtXRQ==",
          "quien": "chiqui",
          "imagen": "img-museo"
        },
        {
          "texto": "dc1:ZBNXXFpNV0MbEkQXA0REUgtcWUBEXQMXA0cDXg9FBVBCEQxKB1UHHhAhXgdKBRIIVkUXVFZZX1ZWVBQCWkUERBAFVxVCXEQPAxJVCxJSFlhYEEZcFhkDW0JWCVwJREoREgwRGQNdRlNRDEYJGBZdEFhJRUFaRBFVVBFREEBDBFtcABwVelYWBwtRVUUIVgBYTBBlVkRKD1IMQQce",
          "visual": "foto-original"
        },
        {
          "texto": "dc1:dABWWVEZWgJCREUACkMFF0J4V0pETAgXAVQURBNVDl5CBg0ZA11GVF8QQQkYFUcBFwsEVVxTEV9aRVsERlAHXvPSHBVtGVoMQkJfAQNaC0pCXFNWFhc=",
          "quien": "gismera",
          "visual": "dorso"
        }
      ]
    },
    {
      "id": "p12",
      "fase": "VI · Asteria",
      "titulo": "La estrella y el dorso",
      "tipo": "dual",
      "obligatoria": true,
      "puntuacion": 150,
      "siguientePrueba": "p14",
      "descripcion": "La piedra auténtica es un trozo del plano de la ciudad, y en su dorso hay una palabra. Chiqui tiene la planta; Gismera, el dorso. Ojo: la copia está al revés; usad la buena.",
      "instrucciones": "Cada una resuelve su parte. Cuando las dos estén, sabréis qué hay bajo la estrella.",
      "partes": {
        "chiqui": {
          "titulo": "La estrella",
          "tipo": "hotspot",
          "contenidoVisual": "plano-asteria",
          "instrucciones": "Pulsad en la planta el lugar que señala la estrella de la piedra auténtica.",
          "documentos": [
            "d05",
            "d27"
          ],
          "huellasRespuesta": [
            "096873837a653c2c1ed9be1ba9d91efc3fb2904fa4a7d944b892a6b3004fddec"
          ]
        },
        "gismera": {
          "titulo": "El dorso",
          "tipo": "texto",
          "instrucciones": "¿Qué dice el cartucho del dorso?",
          "documentos": [
            "d26",
            "d08",
            "d09"
          ],
          "huellasRespuesta": [
            "6f7b4221af43d94c8225f8402285a6c0abce578d807729ab75bd1aba5444a2e1",
            "6f7b4221af43d94c8225f8402285a6c0abce578d807729ab75bd1aba5444a2e1"
          ]
        }
      },
      "pistas": [
        "dc1:cwlbREFQDEMAR0MGB1NEVQMQRl8FQwcXEFACXwhSBxEHDUNVBxEWWVUGQAcYHRIDXhcEVRVaUBlFWFEHRlBBQl5BUUBVS0IMQlZVRRBCAVUWURgTI1AVWgdHBwpGUgMRBgYRXAVZBxBRQlscSRFbAUUBBB0VVV5UWhFHClFcEUVVTw==",
        "dc1:fAASVlVVWgZCVlkEAVgKWA4QUlZEVQcXElwDVBRXRlMDCQIZDlAFWVFCXgcYAFcWUgYNUBVTXxlZUBQTWFAPQ1FPEnBYGUYRC19VF0ZEDV4MXxZXAVVGUw1HFV9GUxURBw9DTQNDBVVCDRICXUR+MXQsKh8=",
        "dc1:dQ0SRVVNXwxCQl8XEl4HWAZfGBMnUBVDB0cIUUg="
      ],
      "solucionDirector": "dc1:cwlbREFQDEMOUxAVD1IASwMQU0BEVQcXGFoIUUZSAxEOAkNJClAcURAQVwJXClYFFwIMQ1RSUBkMAfbTDxENVhAEQUFGXFoPAxJTBAMXAVdCVVoTFFgSXg0VFl8UQg9SAwcMGU5ZUhkeQnUPSwlXFlZfRVRZFlVWR0JbQ1BYAlIQIntmYHxkLSMcECcHXQsZB1wWQwVND1hCRQlCEl8FUAYMQ1EHSEZFXgMSBVEXRgFFCwQf",
      "exito": "dc1:dQ0SRVVNXwxCQl8XEl4HWAZfGhMOTAhDDRUHEApXRkEOAhlYRkMDVF8MVgcDREtEUgtFVFkWVVZHQltPFHIoZGQkYHt1FxYmDBJFCwcXB1AXVFdXRF0DW0JRA0MPUxRFDU9DXAoRB1dFAxIDSgUSAVtFEVRGWUNWGRFNQ1heQUZFBBJGURlRFgNAVARGUwtXBlUWWxFbCRcDUhNRRlgJEREGQ1UJEQpcVRRTRl0IEhJeAAtFWhgRaVBcVgZGRQ5ZEAJdW0BcRRcDEkAKFBcCUAwQVxMSTANEFkcHEAVXFEUDTQ==",
      "escena": [
        {
          "texto": "dc1:dQ8SWVUZRg8DXEQERlMBGSFcV0EFFUZbAxUDQxJEA10OAkNaB1RGQ18AQAMYAV5ERwQRWFoWQVZHRV0AVVUOGxALR1tAVhYCQl5RRRZbBUMDEERWAFYIUwMbRnUIFgNdQgcMSxVeShBFDFNGSAVeBVUXBAsVVVhKQVRGDVUfQXRcAEBUFFVXQwNCRQsSVkRaDV4WXwUZC1YMWkZEA1sEXQMNB1ZI",
          "visual": "plano-asteria"
        },
        {
          "texto": "dc1:dARQVF5WFgcHXhAVB0MNVkJYQ1ELGQdQF1RIED8WCl5CEhZcRkQIURABWxNcBVZEUBAEQ1FXEV1aX1AGFFkUVV9BU1JBWBYNDRJDAEZbCxkOXFNFBRkDW0JDD1UIQgkfQiAPWBRQRkZRQlNGTAFcAUVFFERQFkdWWUdRERo=",
          "quien": "chiqui",
          "imagen": "img-asteria"
        },
        {
          "texto": "dc1:dRJTFUBYRAcHElwJA1AFGRJfRBMCUAgXDlRGQgNFFkQHEBdYRlUDEHwNXAJKAUFKFzUAXFdTQ01aXxQNWxEPXlUGUxVcWFQGEBJTCgtHFlgGXxgTKlADUAMVDlEEUxQRBxAXWAJeSBBpQlwJVQZABRtFFlhbFkBMUENRERgRABdRDVVAXVxYQwZXEBQTXgFXQl5ZExdYBPTPVA9DRlgHVQNZQ0oTEQVcWQdcEl1K",
          "imagen": "img-pemberton"
        }
      ]
    },
    {
      "id": "p14",
      "fase": "VII · La acusación",
      "titulo": "Quien cambió la piedra",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 200,
      "siguientePrueba": null,
      "descripcion": "Hay quien pagó, quien aseguró, quien vigiló y quien fotografió. Solo uno cambió la piedra.",
      "instrucciones": "¿Quién cambió la piedra? Antes, si queréis, preguntad a los personajes en el Interrogatorio: cada respuesta cuenta.",
      "documentos": [
        "d25",
        "d31",
        "d28",
        "d20",
        "d13"
      ],
      "opciones": [
        {
          "id": "rodrigo",
          "texto": "Rodrigo Valcárcel, el fotógrafo"
        },
        {
          "id": "pemberton",
          "texto": "Arthur Pemberton, el explorador"
        },
        {
          "id": "garmendia",
          "texto": "Leopoldo Garmendia, el banquero"
        },
        {
          "id": "yusuf",
          "texto": "Yusuf al-Dajli, el jefe de la caravana"
        }
      ],
      "huellasRespuesta": [
        "45b8a0fce2cb4c90ca2790ad4d238f02c04cff300b65b9ca0cafa62a3b06b3c0"
      ],
      "pistas": [
        "dc1:YgRCVEdYUkMTR1mmz1lEXBFEV1EFGQNZQlAKEAVXC0EDDgZXEl5GVUMDEghXB1oBFxxFQEBf8pBbEVoMGBEYF0EUW/adVxYXB1zzyAcXAVdCXFdARFQHWQ1GRkUIV0ZYDwIEXAgRAlUQDlNGSA1XAEUESw==",
        "dc1:YARfV1FLQgwMEl4KRkQFVQvzhRMAXEZ7DVsCQgNFSBEnD0NKA1YTQl9CVgMYI1MWWgALVVxXEVdaEUQCU1BBR18TEkBaWBYADUJZBEg=",
        "dc1:fBRIFVFXFg8DEkQMA1kAWEIDGhMH+sdaA0cHEAVTFEMDBwIZBxEKUUNCVglLSBIQUgkAVkdXXFgVVVFD9pozGRA3HPePGU9DEltVARRWRFwMEEVGRFoHXQMVAlVGRgpQAQIQFw=="
      ],
      "solucionDirector": "dc1:Yg5WR11eWUM0U1wGpZYWWgdcGBMnVhZeAxUDXkZTFUEHCQwZDlQFWFFCVgNLAFdERBBFQUdZQVBUEUQPVVIAFwNQHhVXVlhDUAEQDgEXAFxCVUVQBUAJWwMVAlVGWgcRBxsTXAJYBVnz0VxdGAdTCVUMChFZVxFXWlJcBhRVBFsQUwUVUVcWEBcSRAwDWQBYQhhaUkQKTxtCUQleAlNGXQ0QQ14TUBRUWQNBRk4NVxZYC0VdQEwRWBVdVRAUVQ5EHEFaWkZYFgJCXlFFF0IBGQFVREGnikZbAxUF88dbB0MDWENNA10DV0IDXwcYppkrZSwieHt3fRl2fnoufXYu9YtBVFxGVFcHDRJiS0ZhSgJCQF9WAEsHFwdbRkMTFgVQCAJDXQMRFlxRAVMVGBdXA/TfCxFZVxFLUFtdD1hQQVNVQWJQWVtTERZdXktGZwFUAFVERwtXRlQNWBZCpYVKERIGEVZGVBVEUQBTRl0KEihYCwFDUEUKGXJQRg5RXwVeUUFcWhReVw0DUFFFCFYAWEJTWV1ETAhWQlYJQA9XXRE7FhBMABEWVUOhgUZBREQNUAwJ8oYY",
      "exito": "dc1:Yg5WR11eWUM0U1wGpZYWWgdcGA=="
    }
  ],
  "epilogo": "dc1:Yg5WR11eWUM0U1wGpZYWWgdcFlIDTAdZFvbVEA5XFUUDQxJMAxEWRUMLQRJdDUFERAoHQ1AWXVgVXFEQVRENVhAEQVZVQFkPAxJBEAMXAlgORFdRBRkfFw5URlMHRBJEDgoNWEZBA0JWDUAHXAUcRHsQAFZaFlRXVlRaB13y0hdFDxJWXV5XERBbXAkJFx0ZDl8WUAtXEvTRFQVfC1lGQBcKBldGUhNVXhZTRk0KU0RVEABfVBZXVkFeUxFVV6KaUU8SZVFUVAYQRl8LRlsBGQpRVPDJWEZYBEcDUw9SCREHDUNcCFQUXxxCUwhMAUFEXgsGXUBFXhlRVBQQVV0IRRAFVxVxVRYgA1tCCkoXFUwLXl9WCk0HREJZD1IUVxUREgwRGQpeRl1VCF0UGBVHARcAC1JaWEVLVENVQ1hQQVJIEVdRXVpfoNFcHkUyVghVoYMWXwUZBVgSXAcQA1hGQhdDF1ADXwJRHEJcCVsMV0RDFwRCFVheWl1UGENVERFWQhVbRxRdU0MXXFFFBVgUUAMQUlZEVQcXElkHUwcWVQBCEhZcRkEJQ1kWWxD71xIUWBdFVFkWVVZHQltDR1gPF1QAQEZRGVUWB1xEBEgXKFhCXllQDFxGUwdZRgJRFgJUQg4CSxxeRlNRD1AP+9cSCFYWRUFcU1VLVEIUAhRdABdcFEgVUFwWEBcSVgQUWAgZBlUWXwVbCUUDQQlCD1lKERtDD1hGUBNE88tcElEHU0RBDARb9oURWBV8VQdGWAUXVQ9GR1EZRRYREkAJB1QFSkJUUxMHSw9EFlQKHmw8JV0DEQIZK14IRFEOUKWZChIURQAWVFtC8ooVXVVDRFgEU0IAElBaGVMPQn9FFgNYRFwOEAcTAFxGXRdbD19KFgVeDEMPWEZUFURVDlNGQUReBRcVCVBbQlAZUVQUD1URAl5FBVNRGhlmBg9QVRcSWAoZEUVFQwFXAl6hhkZDExYDSRIGB1AFWKWDXkwSJVQFQAUXHEVoQEVEXxVBRgZEUBNWXkFLVBRVV0MUR1UJElZEWEJxRUcBSw9WQkUHQgcWA11CDBdWpYAJChATRw9dFlcKFwQHQ1xEEVxZEUcWUV0OF1QEXhVEWEIKDRJAChRDDVoDVFkfRFsHXQ0VA1xGRxNUTkMQUEZdBxBVEUYDVAUSClhFCFhQWEVcGRFRDxRFBFpADV0VU0xXEQZTUgRGRBEZA0JVWw1PCRcHW0ZFCFdGUgsQF1wUXwceECdeRlYLXwZFAEVVUBZdWBVSXRZQUAUbEBBHUBRcWEMFQFkAAVhESBdZU0EBGQJSAVwUEKSdClBCBwYZClAVEFURRhRdCF4FRKfeHRVFUFVc8odDUUIAF0MEX1RaWBYGDBJECgJYFxkOX0UTFFwUXqGGAlkFWRUdQgIPGQpQAl8QBlcKGBJHAUQRF14bPDtpUFxWBkZFDlkQD0dbV1gWBwtYX0UWVhZYQkFDWqeQCBcBWgtAFFcEUExDM1wUXkZDRRESBVkWRgVERQFUFUZQXlodFBJBVEFSXRFXT1VLWQ1CUxAJClIDWBBcUxMBV0ZWAEcPXEoWA19CABZYCEUJEFwNQUZIAUAN9NYBWFZZQhlRVBQmWBEiVlkTXRVcWFQPA0BfC0ZTARkOURZDDVwCRQMVAlVGWgcRBxAXSwNdClEcQkQDVqefBVlFAVQVQ19YFV9bF1VDoppRQVZQFHVZBBBd89QJG0RAQnNaUhZYRkUHVgleCVUP8tFDBlVGXQdTQgcSB1REQhZeCABDFUBYSkFQTgwa",
  "puntuacionMaxima": 1450,
  "dialogos": {
    "prueba:p01:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sB8QFFKQhENEkAXD1oBS0JdQ0ABVkcXOxUIXxUWCl0DDgJXRlBGXl8RXRJKBUFKFzwKWkZEWFYVQlFDQlBBVhAEXEFRS1cRQkJfF0ZbC0pCQFNBDfrVUwtWCUNI"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fg5BFVhVVw4DXBAVCUUVTAcQQ10FGRZeB1EUUUZGA0IDQw5cCF4VEFQHEgpXREMRUkUBVFdTQ/qYUBpDcVwRUlMEX1pHGUYMEBJRDaWaSBkMXxZDC0tGWw1GRkADRA/y0QcKWglCSA=="
      }
    ],
    "prueba:p01:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:fg4cFXFVFgIFR1FFCFhEVAtVWEcBA0ZbAxUWWQNMBxEGBhBYCl4MURAOXUZJEVdEWAYQQVQYEX1cR10HUR1BWV9BU1FdT18NB0Ee"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aQ4SXVVb9c4DElQMBV8LGQVCV10NTQkXEloUQRNTRkIXBg1YRlBGQFkHVhRZREEBRQwEHw=="
      }
    ],
    "prueba:p01:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:dRJRVE1WWgJMEnEJAUINXAwQXloeVkZCDFRGUwlGD1BCGkNVBxELVUQL8dUYAVxEWwRFUlRcUBc="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8t5rFVhYFgEXV14EWRcxVwMQRloBXRRWQlEDEBJEA1gMFwIZDVgKX0NCXAkYF1dERwwAQ1FTEUlaQxQGWBECVl0IXFoYGXEKERw="
      }
    ],
    "prueba:p02:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:Yw5cFV1eQwIOV0NLRmMBGQ5fFlcNXgkXG1pKEBdDAxEPBkNRAxEWUUMDVgkYCVcAXgRFWFtQUFdWWFVDWVgTVl4FXRVQVkVDAV1DBBUXDV4XUVpWFxc="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fgBWVBRcRUMLVUUEChcXUEJcWRMJUBRWERUDXEZCD1QPEwwZFUQAWVMLVwhMARxEcabIW1RCVBlQXxQH94IPU1VBUVRRGVoCQldDERRSCFUDEERWF0kDVBZaRlFGWgcREg8CQwcRFFVUDVwCWUo="
      }
    ],
    "prueba:p02:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:cQ0SR1FP9coRHhAGCVoLGQdeFkYKGQNEElAMX0gWN0QLBg0ZClBGU18SW6WLREYBWabIUBVDX1gVWFkCU1QPF1QEEllVGUYKB1ZCBEoXClZCXFcTFFADUxBUSA=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ZQ9TFVJWQgwFQFEDpZoFF0J/FkABWEoXA1kBRQ9TCBETFgYZElQI850DEgpZRFQLQwoCQ1RQ8pRUHxQiRPLbWUQAXloYGUcWBxJVFhJYRFcNQxZFBRkHFwpUBVUUFgBQDhcCFw=="
      }
    ],
    "prueba:p03:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:ZBNXRhRaVxEWR1MNCURIGRZCU0BEVwlaAEcDQ0oWHxEODBAZEkMDQxAHQRL7xVxEUgtFVFkWXVhB8pkNFFUEF1ETQFxWWBhDJ0EQEAhWRFUOUUBWRFoJWUJZB0NGWgNFEAIQGQcRClEQFFsVTAUc"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:YwQSWVFcFgcHElQAFFIHUQMQVxMNQxdCC1AUVAcYRnINDgwZBUQHXlQNEhL73hIIUgAWEVBaEUlQQ12gh1UIVF9BV1hEXEwCDFZfRRZYFhkHXBZVDVcHW0w="
      }
    ],
    "prueba:p03:pista": [
      {
        "quien": "chiqui",
        "texto": "dc1:8t5mVFoZRhENXEQKRlsBGRJCU1QRVxJWD1oVD0ZgBxEDQxNcCEIHQhATRwMYCl1ERAQHVFhZQhlZVFERGg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZgASVBRJUw0RU0JFF0IBGRFRVFYJVhUXEkcDVxNYElAQTUP6711GXVkRXwkYCl0XFwkKEVBYQlz2gPfQGg=="
      }
    ],
    "prueba:p03:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sBzRkBcRAoDExA2E1IKWEJRFlYXTRRSDlkHHkZlE1QMAkNYRkIPRFkNEgdUREMRUkUNUEwWQExQEV0RGg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:aUFxWVVLV0MMXRAJCRcMWEJAQ1EIUAVWBlpGXhNYBVBMQzBQRlAKV0ULVwgYAVxEewoLVUdTQhlZXhQQVVMEGxANXRVcWBYPB/GdAQkXAVdCXFcTFFADUxBUSBApFgNfQhAWGQBeEl9XEFMA+8lTSg=="
      }
    ],
    "prueba:p05:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:ZKKIFUBQUw0HQRAAChcAUANCX1xfGR9YThUKXxUWFlQRDBAXRn8JEF0HEgpXRF4BVhZFRVpSXgMVVV0OURESWFwOElZB+pcNBl0QFQdEp4pCU1dXBRkFWBFUSA=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aUFG9o4ZWAxCX1VFAl4DWBEQWlwXGQJSAVwLUQpTFR9CJwpUAxEDXhATR6WRREYWVggKEVRSVFVSUE6ghxENVhACU19VFw=="
      }
    ],
    "prueba:p05:fallo": [
      {
        "quien": "chiqui",
        "texto": "dc1:fg4SUEZYFgYRXR5FpIghShZRW1wXGRVSBUAUURUWAlRCEhZcRl0JQxAOUwVKAUFEWQpFQlAWUFtHVFpDV14PF1UNElZVVVkRXQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cw1TR1UZWgwREkAQFVhEWEJcV0BESgNeERUCVUZaBxEPAqCIB18HEElCXgpdA1MWWAtFWFtCUFpBXkdNFH0OF0EUVxVEWEWg0R4QFQdEp4pCUVhHAUpI"
      }
    ],
    "prueba:p05:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:fAASW1taXgZCVlUJRgVTGQNcFgFcF0ZyDEEUVUZaBxEQDA5YCFBGVFVCaxNLEVRETkUAXRVXX1BZXVtDUFRBdFwAQFQOGVgWB0RVRQ5YFlgRHg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fhRXQ1EZXgwQU0NFA1lETAwQVVIJSQdaB1sSX0ZVCV9CBwxKRlYTUUIGWwdLRFYBRBUMVEdCXkobEXUPU0QIUl5BRFxbGVcPBV0e"
      }
    ],
    "prueba:p05b:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:dA5BFVJWQgwRElQAChcJUBFdWRMFVQtWAfbPXkoWE18DQxNWFBEKURAWUxRcARIdFwoRQ1QWUFUVUFkCWlQCUkJPEmxVGUWgyxJTptVaCxkUURZWF00JDUL32UET9c8REQZDUQcRC19GC1YJBw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fQhAVBRdUxASU1MMCRlEfAwQQ11EWApaA1almQgWCFAGCgYZCUMCVV4DEgJdRFwLVA0AEUZfXxlYXkAKQl5P"
      }
    ],
    "prueba:p05b:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:fAASQVVJV0MGVxAJBxcHTANERFxIGQNbQlMHQglaRlQMQwZVRkITVVwNHkZdCBICVhcBXhVXU1BQQ0AM1rHHF3EQR/aZGV4WAF0QAw9SF00DHg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZBNTV1VTWU9CXF9FAF4BShZRGBMlVQFCC1AIEAdUFFih0ENVBxEFUVoDEgVNBUYWWEUGXlsWRFcVV1URW11BThACXVsUSUQKEVMeRShYFxkEUVpHBRkVVgBQFBAXQw/yyw1DSglCElVeoZ8HGAFeRFEEF15ZGA=="
      }
    ],
    "prueba:p05b:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZgBeUBgZRQZCU1MEBPTXGQdcFkcNXAtHDRtGaQkWAlgFDENIE1RGVVxCVAdKC15EWQpFVEZCUFtUEVENFFQNF1cAXFZcVhYaQkJFCxJYSg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fA4SVFpWQgxCUV8LRkIKGQteQlYWSwlQA1sSVUgWKl4RQwpXElQUQl8FUwhMAUFEQwQIU1z1mFcVQlsNFEEIREQAQRs="
      }
    ],
    "prueba:p06:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:dA5BFVNMVxEGW1EWShcAVhEQUloWXAVUC1oIVRUYRmUQAhlYRl0HQxAGXRUYFlcHQwQWEUZZU0tQEVEPFEENVl4OEkwUT1MRoZNDRQL011cGVRZAARkFRRdPB15I"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8t5xWloZRAYFXlFaRm4LGQ5fFkUBVkZWQloMX4S2wBEgFgZXCR1GVFEPV0ZUBRIWUgIJUBs="
      }
    ],
    "prueba:p06:fallo": [
      {
        "quien": "chiqui",
        "texto": "dc1:dRJTFVpWGEMxR0IKA0QQXEJVRRMFWwddDRUHEApXRlgYEhZQA0MCURxC8NlWCw1E9doqEVBEUBlUXRQRUUeinkNe"
      },
      {
        "quien": "gismera",
        "texto": "dc1:cQNTX1sZV0MOUxAMHEYRUAdCUlJKGSpWQkcJQwcWAlRCDwxKRkcPVV4WXRUYAUEQ9MRFVFsWXVgVVEcSQVgPVhAFV1kUSVoCDF0cRSVfDUgXWRg="
      }
    ],
    "prueba:p06:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sB+VBRNRAYRExAgChcIWABfRFIQVhReDRUCVQoWAF4WoNBeFFAAXx5CawcYCF1EQwALVFhZQhc="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZARcUFlWRUMXXFFFCkIeGQdeFkYKWEZDC1AIVAcWBxEOAhAZAl4VEFQHEgpZRF8F9NQEX1QYEWxbUBQPQUtBWV9BV0YUTFgCQkJCEANVBRdCY19UBVQJREw="
      }
    ],
    "prueba:p07:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:fQhBWFUZUAwQX1FJRloNSg9fFkcFVAf001pKEAlCFF5CDgJNA0MPUVxMEjVRREEFVQAWEVlZQhlZWEARW0JBThANUxVAWFQPAx4QFgdVAUpCXFlARFIPWw1GSA=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:f0FAUEdNVxBCXl9FF0IBGRJVRFcN+tUXDlRGUwdcBx9CIkNPA1IDQxAHXkZbBV8NWQpFUlpERVYVRVUOVliinl5BXllRXldN"
      }
    ],
    "prueba:p07:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZBNXXFpNV0MbEkQXA0REUgtcWUBKGaScKlQFVQgWAFAOFwIZAl4VEFgNXwRKAUFERwQXUBVaVE9UX0ACRl0AGfLaEnZYWEQCQlxfRQNPBV4HQldRBRc="
      },
      {
        "quien": "gismera",
        "texto": "dc1:aUFeVBRaWRMLUxxFEFINVxZZQkGnkBUZQnEPVRwWDVgODBAZC1QIX0NYEgpXFxIJXhYIXkYWQExQEUQGRlUI9INBXlQUWlcJAxw="
      }
    ],
    "prueba:p08:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:fAASUEdaVxoNXlFFA0REWgNCVxMdGSVbA0cHEApXRlASFg1NpYJGW1kOXUZZRFkNWwpLEXlZEUhAVBQNWxEERESikxVVSUMNFlNUCkZSFxkOXxZCEVxGWQ1GRlkIQgNDBxACFw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ZBNXRhRKVwANQRxFAlgXGQ9fWlcBSkZOQlkJEBdDAxERDAFLpYJIEHURRgkYAUFEQgsEEUdTQk1UEVcMWhEARVUPUxVQXFgXEF0e"
      }
    ],
    "prueba:p08:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sBkUF1XQgoWQPPMFRcPUA5fRRJEcxNEFlpGXAkWF0QHQxNcFVBGXFFCUQlIDVNKFyIMQlhTQ1gZEVEQQF5BTlFBXFoUXEVDAVNDEAdbDV0DVBg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fABBFVdYRRYDXlkBB1MBSkJeWRMBQQ9EFlAIHkZ3ClYXCgZXRlYHQ0ShgUZOAVsKQwwRQ/afQhleWFgMRxEFUhAEQVZVQFkPAxJDDAgXEVdCXVlfAFxGRhdQRlwJFgxEERcKXw9AE1Ue"
      }
    ],
    "prueba:p09:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:YRTxnBRbWQ0LRlFLRnsFSkJVRUcWXApbA0ZGVAdYAl5CFRZcCkUHQx5CcQdLDRIAVkUVVFtXEUxGUEYPVRECWF4VQFQUWFoEF1tVC0g="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cwBWVBRYRAANElUWRkMNXA9AWR1EdA9TBxUFRaWXCEUNQwRQFFAUX15CS0ZLBVAW9MQWEVZD8phbRVtDUUIVQkYOElRWUFMRFlMQCQcXB/rDXVdBBRc="
      }
    ],
    "prueba:p09:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:ZBNXRhRRWREDQR5FIlJEVgxTUxMFGQJYERtGcUZaB0JCBwxKRlAKV0ULVwgYB1cWRabWEVBFUBlW8pUOVUMAGQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aUFTFVhYRUMGXUNFDlYG+s9RFkYKWEZbF09GVQgWClBCFwpcCFUHEEQQVxUWRGMR9MxFX1pVWVwVXPfCRxEOVEURU1FVFRYTA0BRRQdbA0wLVVgTFUwDFwZaFF2lmwcf"
      }
    ],
    "prueba:p10:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sB/WkZKU0JCYkULElhIGRBRT1JKGSNEFlpGXAkWDlABoM5YRkgJEFMNXEZUBRIIXgsRVEdYUBlRVEcHURENVhAXV1tAWFgCTA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cwBWVBRNRAwYXRABAxcHUAxEVxMBSkZCDFRGQAdaB1MQAk0ZMFRGXFUWQAcYBRIIUhEXUBVPEVdaEUAGFFAFUlwAXEFRShg="
      }
    ],
    "prueba:p10:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:8sp9R11eXw0DXhAGCVkJUAVfGPHfGSJYERUWUQpXBEMDEENARkQIEEIHXw9MAVwQUkUGXlsWWFdcUl0CWFQSGQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:cQ1VQF1cWEMOVxABD10LGQMQelwKXRRSERUXRQMWClBCEwpcAkMHEFIXVwhZRFsGVkUGXlsW8pBZHxQyQVgERV9BRFBGGVMQBxJVFhJCAFANEEZcFhkCUgxBFF9I"
      }
    ],
    "prueba:p11:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:ZQ8SRVVKVxcLV10VCRcAXEJ8WV0ASwNEQkxGRQhXRlIDERdMClgIURABXQgYBVURXQAXXkYWQExQEVcCR0QAW10EXEFRGUIKB1xVRQNbRFQLQ1tcRE0HWgP2119I"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aQ4SRVtXUQxCXlFFBVYWTRdcX10FGQNZAVwLUUgWMvLYQw9cAxEKXxATRwMYBUELWgBLEXZZXFYVRFoCFEcEWUQAXFQUWlkNQl9FBg5WFxkUVVhHBVcPQwNGSA=="
      }
    ],
    "prueba:p11:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sp3WxRVV0MBU1oERlMBGRJcV1AFSkj12RWkkSNFEvLDQwZXRnwHVEILVkcYppMhRBGmkBVTXxlZUBQAVV0NUhAFV1kUaUQCBl0R"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dRJG9pUZUw1CR14ERlQFUwMQVVwKGQVWDFEHVAkaRkIHBKCDCBEDXBALXBVIAVEQWBdLEWwWVFUVVUEG94AOF1gAElpYT18HA1ZfRQpWRFoNXVRaClgFXqGGCB5GZxPyy0MMSQlDEkVeDRw="
      }
    ],
    "prueba:p11b:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZBNXRhRLQwYGU0NLRmcLXRDzm1JESRRYAFQUXAdFRkUNBwJKhLHAEPLdcRP7xVwQVhZFUlpbU1BbUFcKW18ERBASXVsYGVsKDg0="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fQheGxR8WkMDS0UBB1kQXEJUX1ABGRdCBxUVXwgWEkMHEENXpYsLVUINQUZJEVdE9MwJEVtZEVZZR10HVUOimlFPEmVdXFgQAxJTCgtYRPrLXBoTClZGVA1YCRATWEZdAwcR+tVfSA=="
      }
    ],
    "prueba:p11b:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:fg4SVFZLU01CYFUVB0QFGQdcFkcBSwVSEFpcEKSJBxETFqCQRlkJQlFCQQMYBUIFUKbWEVBFVBlTUEYMWA4="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aQ4SXVVb9c4DEkAQA0QQVkJcVxMMVhRWQlAIEBdDAxEDARFQpYJGXFFCUaWZCVMWVktFYVBEXhlQXRQFVUMOWxAEQRVbTUQCQlFfFgcbRPvdRlNBAFgCCA=="
      }
    ],
    "prueba:p11b:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sBxWVVaF0MqUxAWCVkFXQ0QVxMSUAVDDUcPUUg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:eAASRltXVwcNElFFBVYKXQNUWR1EdQcXFFwFRAlED1BOQwBMB18CXxAUVwdVC0FEWwpFQEBTEVFUSBQHUVMAXV9BVlAUVVcQQkJcBAVWFxc="
      }
    ],
    "prueba:p11b:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:dKKbX1VUU0MDEl2myxlEbAwQVV8NSUoXBloVEAVaD0ERgeOf"
      },
      {
        "quien": "gismera",
        "texto": "dc1:cwlbREFQGkMHQRAQCBcHWAxUV1cLGQJSgLXAED9XSBEnEBf6xxEHUlkHQBJXShIqWEUTXkwWUBlFQ1EEQV8VVkJP"
      }
    ],
    "prueba:p12:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:ZKKIFUBQUw0HQRAJBxcUVQNeQlJEQEZODRUSVQhRCREHD0NdCUMVXx5Cdg9VARIVQqbMEUNTQhlMEUAGFFUIUF9BQ0D3kBYHC1FVSw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:chRBVlUZWgJCQlwEHFZESwdUWV0AWEZSDBUKUUZGD1QGEQIXRmhGV/PPQAdUBR5ERhAAEVlXEVpaQV0CFFQSQ1EDUxVVVRYRB0TzzBUXHRkOURZREVwIVkJbCR4="
      }
    ],
    "prueba:p12:fallo": [
      {
        "quien": "chiqui",
        "texto": "dc1:dRJTFVpWFgYRHBCn2WQBXhdCWRMVTAMXDlRGQA9TAkMDQwZKEvLHEFcLQAdcBRIMVgYMUBVSXldRVBQX94tBU1kCV0YL"
      },
      {
        "quien": "gismera",
        "texto": "dc1:YwRVQEZWGEMmV1oERlMBGQVZRFIWGQpWQlYHUgNMBxEbQwRQFFBGXFFCQg9dAEAFDUUJUBVVUFVZVBQHXVAGWF4AXhVWWFwCQlpRBg9WRFUDEFJWFlwFXwMb"
      }
    ],
    "prueba:p12:pista": [
      {
        "quien": "chiqui",
        "texto": "dc1:8t5+UBRJRAYFR14RB1oLSl0Qc0AQVkZSERUFXxVXRlUHQw9YFRECX0NM"
      },
      {
        "quien": "gismera",
        "texto": "dc1:YBNXUkFXQgIQEkQEC1UN+steFlYXGQVYEVRGVAMWClARQwdWFR9GfVEMVgcW"
      }
    ],
    "prueba:p12:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:cwhBQVFLWAJMEnULRkIKWEJTX0YAWAIXBlAKEAJTFVgHERdWShEDXBADVRNZRFcWVkUAXRVCVEpaQ1tN"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aUFeVBRcRRcQV1wJBxcIWEJDU/DVWApWQlcHWgkWA11CEwJND15IEHMOUxRZREQFFwRFRVBYVEsVQEEGFEcOW0YEQBsUd1kQDUZCBBUbRF0HEFtcCVwIQw0ZRkQDWANcDRBDSBNURlFTF0EHSkRTRFYJAkRcU18X"
      }
    ],
    "prueba:p14:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:YgRCVEdcWwwRCBAUE16nkAwQRlID+tUbQkQTWaWfCBEDEAZeE0OlgxxCQxNRp5sKFxMMVlxa8ooVSBQSQViinl5BVFpAVlERA1RZptUZRGoNXFkTEVcJFwFUC1IP9dURDgJDSQ9UAkJRTA=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aQ4STFUZWgxCRlULAVhKGTJVRFxEXQ9bDRUS89wWFkMLDgZLCR1GQUUHEhVRRF8BFwAURFxAXlpaEVgWUVYOF14OElhRGVIGCFNDRQNZREkDShg="
      }
    ],
    "prueba:p14:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:fA4SRlVb9c4DHBApCRcXWADzm1IJVhUZQnkJEBVDFlgPDBAZClAVEFQNQUZZRF4FFxMASxs="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YBNbWFFLFgADQV9FBVIWSwNUWRMXUAgXoZwKHkZ7pZAMBwJVAxEDXBAWVwpdA0AFWgRJEXZeWEhAWBpDbREHXkIMUxVXVlsMQlxfFkZTDVMNHg=="
      }
    ],
    "documento:d02": [
      {
        "quien": "gismera",
        "texto": "dc1:ZgRbW0BQQhGhm0NFDV4IVhEQTxMHWBJYEFYDEApfEkMNEENARkEPU19MEjNWRFsKUQoXXFAWX1YVRV0GWlRBWEAIXFz3ilhYQkJfF0ZSF1ZCXVMTAvrLWEw="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8sphUBRLVxoDElMKCBcIWEJF9YIFF6SMQnAVX0ZFpZxCBhAZE18HEF8SWwhRp4EKG0UcEVBFEV1QEVUPU0QIUl5BQ0BRGVoMQlpRRRZFC1sDVFkd"
      }
    ],
    "documento:d08": [
      {
        "quien": "chiqui",
        "texto": "dc1:dRISRUZcVQoNQVFLRnMLSkJZUloLVAdEQkxGXg9YAUQMDENcFREDXBAP8ctXSg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZQ9dFUf6m1lCV1xFClYQ+s9eFlcBGQdFEFwEUUZSD1IHQw9WRlwPQ10NEhdNARIIWEUBVBVXU1hfXhpDcUJBQl5BVlxXWl8MDFNCDAkXAFxCQF9WAEsHGQ=="
      }
    ],
    "documento:d12": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sp2QFFLWwYMElFFC15EVQNUWRMHWAJWQlsJUw5TRlUHD0NPD1AMVR6giUZ7CFMWVkUBXkdb8pRUEVcMWhECXl4CXRVXWFwCERwQPAkXAEwHQltcRFoJWUJACBAFWQzyzw1N"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dqKfX1VNU0MHXBAJBxcMVhBRFlcBVUZbA1YUVUoWCF5CBg0ZA11GU18I8ctWSg=="
      }
    ],
    "documento:d19": [
      {
        "quien": "chiqui",
        "texto": "dc1:YABAUFdcFhYMEkIAC1gIUAxfFlcBGQNEFkcDXApXFR8="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dRISQFoZRAYOXVpLRnQFXQMQU0AQSwNbDlRGXQdEBVBCDwJKRlkJQlEREgVXChIXQkUEQ1ZZHw=="
      }
    ],
    "documento:d25": [
      {
        "quien": "gismera",
        "texto": "dc1:8sp8WhRVV0MQV1MQA0UAWEzyjRMxV0ZRDUGlgwFEB1cNQxJMAxEUVVMXVxRcBRIBW0UL8o9bVEtaEVAGFFIAU1FBQllVWldN"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ZBNXRhRLQwYGU0NLRmQNGQxfFl8FGQdVEFBG889aShEOAkNYBEMJEEkNHA=="
      }
    ],
    "documento:d30": [
      {
        "quien": "chiqui",
        "texto": "dc1:8spmR1FKFg2hiF0AFFgXGRNFUxMKVkZHDVEU88tXRl4OFQpdB0NI8otCfwMYB1MBFwcMVFsWVFUVUE0WUFAPQ1VP"
      },
      {
        "quien": "gismera",
        "texto": "dc1:cUFf9pkZWwZCUVEARlUNXAwQR0YBGQpYQlAVUxRfBFgHEQIXRnAOX0IDCEZJEfHNFwGmnFQaEUhA8p1DRF0AVFFBSxVFTPXKQlpfFwcZ"
      }
    ],
    "pregunta:rodrigo:r1": [
      {
        "quien": "gismera",
        "texto": "dc1:dAQSWlpaU0MDEkMAD0RKGS5RRRMBShJFB1kKURUWAlRCEBYZFkMJQFkDEgBXEF0DRQQD8phXEV1cQ/fCWhESXhAEQRVCXEQHA1Ye"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fQQSXVUZRQwMQFWmy1MLGQ9ZU10QSwdEQlkJEAJTBfLPAk0ZI0IJEF4NEhVdREIRUgEAEVRYXk1UQxhD9o4XUkIFU1EL"
      }
    ],
    "pregunta:rodrigo:r5": [
      {
        "quien": "chiqui",
        "texto": "dc1:8sp8XBT6nw9CUxAIpZpK+9kQelxEUQcXBlwFWAkWC0QbQxH6x0EPVF9M"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dxRTR1BYFgYRUxADFFYXXEwQdUYFVwJYQkEDXgFXC14RQxNYFlQKEFQHEipXClYWUhZJEVlXEU9aXUIGRlQMWENBUxVYXFMRTA=="
      }
    ],
    "pregunta:yusuf:y5": [
      {
        "quien": "gismera",
        "texto": "dc1:cwhcVlsZWwoMR0QKFRcBV0JEU1+nkAFFA1MJQ0ZFCV9CBwxKRkEHXFEAQAdLShIpUgEMUBVeXktUHRQWWlBBR/PSXlxOWBg="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aUFBVFhQ9dBCQVkJBFYKXQ0eFn8FGQFSDEEDEAhZRkILDwFYRlUDQ0AX8c9LRFYBFxUEVlREEUxbEUcGU0QTWB4="
      }
    ],
    "pregunta:garmendia:g6": [
      {
        "quien": "chiqui",
        "texto": "dc1:8t56VEZQWAJCV15FA1tEXQdDX1YWTQkIQnsPEBZXCBEMCkNRB0MPXlFM"
      },
      {
        "quien": "gismera",
        "texto": "dc1:cg1TW1dWFhpCV15FFlgITw0cFl8FGQtWoYQHXgcWAlQRExb6z0JIEGAHXBVdCV0XFxQQ8pwWXk1HUBQAW0IAF1USEldYWFgAAxJJRQNZREkNXEBcSg=="
      }
    ],
    "pregunta:pemberton:pe3": [
      {
        "quien": "gismera",
        "texto": "dc1:8spmWlBYQKDPUxALCRcIVkJEU10DVkj12RUqX0ZHE1RCAAxUFkOlgxAMXUZQBRIIWwACUFFZEVgVfVsNUEMERB4="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dQ9GWlpaUxBCQVkCE1JEWBNF9Z5KGSNZQlQKV6WMCBERChdQCRECVRAvUwJKDVZEXwQcEUBYUBlFWFEHRlBBU1VBRkdRUFgXAxJbDApYFxkHQ0ZWFlgIUw0VE15GVAdDAQxN"
      }
    ]
  },
  "explicacion": [
    {
      "quien": "gismera",
      "texto": "dc1:fAASRV1cTAJCQ0UARlsIXAXzhRMFVUZ6F0YDX0ZGA0IDAQIZVAJGW1kOXRUYHRIAUhYEXVpcUFtUEQVXGAVBW1kVQFpHAxZSTgQQDg9bC0pCQFlBRFUPQxBaSBAjRQVQGwwPWEgRJ1xXF1sDVkRRBVoHDPKGFl1YFUFdBlBDABdADkAVQVdXQwFdQAwHGQ==",
      "prueba": "p01",
      "documentos": [
        "d02",
        "d03"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:aUFeVBRaWRMLUxAAFUMFWwMQV19ESwNBoZwVHEZVCVwNQwZXRkQIEFURQgNSCxxEZhAMVFsWXVgVRVUPWPLSF14OEkFRV/XOAxJcBEZHDVwGQlcTAFwKVgxBAwpGQgNfoc4CGRNfBxBTDUIPWURWARcJBBFFWlBaVBEHUhRBDkRZFVtDVV1XQxJdQkUDW0RdDUJFXEo=",
      "prueba": "p02",
      "documentos": [
        "d05",
        "d06"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dQ0SVlVLQhYBWl9FAlJEVQMQRloBXRRWQlEPUwMWJ0IWBhFQBxEfEHMOUxRZRFwRWQYEEVlZEUlAU1gKV/LSGRAyWxVkXFsBB0BECggXCFZCUVhGCloPVkJQCBAqWQhVEAYQFUZdCRBYAxIKXaefAFhFAF8VWlAZRVhRB0ZQQVgQBFwVR0wWBQ1GXwIUVgL6z1EY",
      "prueba": "p03",
      "documentos": [
        "d08",
        "d09",
        "d10"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:fAASVlVTV0NWEkAAFfTXGVcCFlgNVQlEQlAIEANaRlIDDhNYC1QIRF9CS0YMVR5dFwALEXFXW1VUHxQwURESUlwN8YYUWBYPA0EQFgNeFxkGVRZfBRkLVqGEB14HFgJUDkNRAUZIRlxfERIKWQdAAURFCV1QUVBLWl8UClpFAFREDkEPFFxaQwFTXQcPWERKBxBeWh5WRlsDFQhfBV4DEQYGDxlUBkoQUQxGA0tEVgFbRQlQVkRUFw==",
      "prueba": "p05",
      "documentos": [
        "d11",
        "d12"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:dA5BFVJWQgwFQFEDpZoFSkJUU19EWApaA1almQgMRlQMFxFcRl0HEEQDQAJdREtEUglFUFhXX1xWVEZDVV0GQlkEXBVVW0QKoYEQCQcXB1gIURYHRFhGWwMVCkUcFgJUQhYNGQBQFF9cQktGXAFYp4RFEF9UFllMUF1YAhRVBBdSDkZUFFxDEQ1CVQRGUgoZDlEWUhZcCFZMFSJZBVMIERMWoJBGQQdD89EeRlYLEhVCDKaYWxg=",
      "prueba": "p05b",
      "documentos": [
        "d29"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:cUFeVEcZUgwRHhABCUREXhdRRFcNWBUXFFwDQglYRkQMAkNVE0tIEGMXQAldF0YBFwEAQlFTEVxZEUQWUUIVWBAFVxVtTEUWBB4QCgNEEFxCVFNAAFxGUg4VAlVGfQdDCw5ZGQpQFRBCB1ESWRcSF1JFBkNATFBXFVRaQ1hQQUNZBFxRVRkFT0JXXEUKVgZWEFFCXBZQCRcGUEZiCVIUWAUMTRkzXwcQXBdIRlYLEgFERRBfVBZBS0BUVgIa",
      "prueba": "p06",
      "documentos": [
        "d14",
        "d15",
        "d16"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:fAASVEFN9coMRlkGBxcLWhdAV1EFGQpYERULWRVbCUJCUlcVUhEKWUQQXRUYAVxEVhcAX1xFUlgPEQdQFFoIW18SHBV4WBYADUJZBEoXVgpMEHpcFxkCXgdPRkETU0ZBBxEHUKWCRlxRQlEHUgUc",
      "prueba": "p07",
      "documentos": [
        "d02",
        "d03",
        "d11"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:YwBeXFFLWQ1CBQVFDV4IVhEQUlZEXBVUA0wJXAcNRl0NEENUCV0CVUNCVQdLEFMWWAtFAwAWSBlDXlgVXVQTWF5BAAIaGXACDkZRC0YFVxkJWVpcFxkXQgcVCFkIUaWLDEMOVgpVAxBaF0ESUQJbB1ZfRVRNV1JNVFxRDUBUQVtfQUNAURlGBhFTEAkHFwdWEllXHQ==",
      "prueba": "p08",
      "documentos": [
        "d17",
        "d18",
        "d02"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:fA5BFVVLVQwRElQARlsFSkJVRUcWXApbA0ZGQwlYRkQMQwxaElAQXxAGV0ZOEVcIQwRfEUFEVEoVWVsRVUJPF2MIElRWS1+g0RJcBEZUp5gPUURSRFhGWwNGRl8IVQMdQg8CGQVUFELz0RIHGAhTFxcBCkIZFl1YFVlbEVURBVIQDVMVWExMTUJgXwEUXgNWQl5ZEwBWFFqhmAccRkYJQ0IOFloOXkZBRQcSCldEWBFFAEs=",
      "prueba": "p09",
      "documentos": [
        "d19",
        "d20"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dQ0SDRRdU0MDUEIMChtEXAwQclIOVQcbQlQKVxNfA19CFwZVA1YUUVYL8dUYBRIoWAsBQ1BFEfuefkYKU1gPVlxBUVpaVF8EDfCLRR8XAlAQXfWARGtIFzQbRnwHFhZYBwcRWEZTE1VeAxIQUQVYBVUERVJaWBFIQFhRDRRdDhddAFxR94oY",
      "prueba": "p10",
      "documentos": [
        "d21",
        "d22"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:fAASVlVLQhYOW14ERkcBSwRfRFIAWEZEDVcUVUZaBxERDBNYRlUDEFwHRhRZFxIAUkU1VFhUVEtBXlpDUFQC9J0AElH3ilgHBwgQp81SChkOURZQBVMHFwZQRkAKVwVQEaHYF0ZoRlVeQlcKGAFBEEIBDF4VUlQZZ15QEV1WDhdYAEsVQVdXQwFTWgRGUwEZElxXUAVKRlQNW0ZFCBYFUAwHAl0JEQVFSQMSBVcJUA1ZBAZY9oVfGfaYWENcUEFYXBdbUVVdWU0=",
      "prueba": "p11",
      "documentos": [
        "d23",
        "d24",
        "d25"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:dQ0SVlVXUgIGXRAWAxcFWxDzm1JEWglZQkEUVRUWCPLYDgZLCUJGQUUHEqWRCBIKWEUVXlH1nFgVXlgVXVUARQpBV1kUCwdDBlcQCAdFHlZOEFpSREkKVgFURgNXFh8RDgIQGQJeFRBUBxIKWURfBfTUBF9UGBF9UFNVCVsRBVIQDVNGFElaAgFTQ0lGBFcZCVlaXBcZAlJCVBRVCF8VUgNDAFYIERNeEAFTFEwRUQxYRQBfFVNdGVFeRhBbHw==",
      "prueba": "p11b",
      "documentos": [
        "d30",
        "d31"
      ]
    },
    {
      "quien": "chiqui",
      "texto": "dc1:fAASUEdNRAYOXlFFAlJEVQMQRloBXRRWQlQTRKWfCEULAAIZFVSlgVEOU0ZdCBIUVhEMXhVGXktBWFcCUF5BThAEXhVQVkQQDRJUDAVSRFoLQ0JWFlcHDUJUDvPLFgFEAxEHWARQRlVcQkYDVRReCxcWEBFURFJRXEdbTRRoQWdVDFBQRk1ZDUJRXwsSUhdNAwoWUAtUFkWhhkZUA0UCVEIvDFcCQwNDHEJBD1ZEQg1EBBcRUFoRXVBCXQZGRQ4bEAAS959MWEMBU1IEClsBSw3yjRMUVhQXE0APXg9TCEUDEENVD1MUUUNM",
      "prueba": "p12",
      "documentos": [
        "d26",
        "d27",
        "d28"
      ]
    },
    {
      "quien": "gismera",
      "texto": "dc1:YARfV1FLQgwMEkAEAfTXGRJVRFxEVwkXB0YSUQRXXRElAhFUA18CWVFCXAkYA1MKVgcEEVtXVVgVUlsNFEQPVhACXUVdWA1DO0dDEAAXFFwR84UTHRkQXgVcCvPVGEZiDQ8MGRNfCRBEB1yllQUSCFZFFV1UVVAVFV1VQ0BYBFlUAB4VWFgWBhFRURwJWwUVQlVaEwJYFFgOFR8QCldGUgMJAgNGYwlUQgtVCRgyUwhUpsRDVlNdFxVoFAdRRRP0kRISUVEZZgYPUFUXElgKFUJFWBMHVQ9SDEEDEAVZCBEXDQIZFF4VURAGV0ZXB1oLFxUQX0FXQhlERFFDQF4FVkain1QUV1lDAV1eCgVSCVYRHg==",
      "prueba": "p14",
      "documentos": [
        "d25",
        "d28",
        "d13"
      ]
    }
  ],
  "interrogatorio": {
    "desbloqueadoPor": "p05"
  },
  "balance": {
    "trasPrueba": "p06",
    "propuestas": [
      {
        "quien": "chiqui",
        "sospechoso": "pemberton",
        "texto": "dc1:aQ4SWF1LVxGhn1FFBxcoVgxURFYXF0ZnB1gEVRRCCV9CAg1MCFIPURAXXAcYB1sRUwQBEURDVBlbXhQLVRERXkMAVloUWlkNQkdeRQhYCVsQVRZCEVxGWQNRD1VGXgcREhYBVQ9SB1RfThIfGAFBRFIJRfKPWFhaWhFVDxRAFFIQFFxUFElfBgZAUUUAVghKAxBTXUR0B1MQXAIQClNGRwsGDVxGUw9VXlgSFVEKEghWRQdEUFhQFRVwRxdRQwhWEARBFUFXFgAXV14RCRcAXEJzWlIWWEZOQlkHEAVfE1UDB08ZFUQfUR5CcwpfEVsBWUUBVBVaUBlQSUQGUFgCXvPSXBVYXBYVB1xUAEoXHRkHXBZCEVxGVA1YFkIHFgtQDAcCFw=="
      },
      {
        "quien": "gismera",
        "sospechoso": "garmendia",
        "texto": "dc1:aQ4SWF1LVxGhn1FFB1tEWwNeR0YBSwkZQnQVVQFDFPLRQw9YRlIHWlFCBkZdChIHQgQXVFtCUBlYWFhDRFQSUkQAQRVRVRZbQlZVRQdVFlAOHBZWChkiVghZBxxGXBNCFgxDXAoRAvOdAxIDVkRDEVJFAFxFU0v6hhFVQ0RUElZCQVZcUUMWCAteXxZGWgFXDUMaEx0ZFVgOWkZTCVgSQwNDE/rPQwJZVAMSElcQUwgNRQQRQFhQGVZQXgIUUg5ZEBRcVBRaWRMLUxABA1kQSw0QWlZEWglZFFwDXgMWFlQQBwZLFVRGQF8QEgNURFEFWgwLXhsWdUxHXF2ghxECWF5BR1sUSlkODPGdAwNFCxVCQ19dRE0DRBZcAV8VGkZIQhAWGQRQCFNfQlMIXAUSAVlFBEFARF5KGw=="
      }
    ],
    "sinDescartar": [
      {
        "sospechoso": "rodrigo",
        "texto": "dc1:fAASVltJXwJCQVVFElYIVaGDFlcBSgJSQkYTEBZaB1IDQ1AIRkhGXFFCXhNCRFYBFwkEQhVSXkoVQlUP95wAF1QEEkZBGUIKB1xUBFwXCFZCRF9WClxGQw1RCRADWEZSDQ0XSwcRHxBEDVYJGAUSCFZFE1hGQlAXFWJBQ1deAEVEAFZUFFxFQxFXXgYPWwhYQkkWXQVdD1JCWQcQDldGVQcQDlwIRQ9UX0JTpYIKCERUpsRcVERQGVRTXQZGRQAXUUFeVEcZUxAWQFUJClYXGRsQUlwWVA9FQl0HQxJXRlQOQwJUB18DU1UQHEZ+BV4QVkUGXlhGQ1ZXUEZDRUQEF0MEUxVCXEQHA1Ye"
      },
      {
        "sospechoso": "yusuf",
        "texto": "dc1:YARB9ocZWgIRElMEDFYXGRFZWBMVTAMXDFQCWQMWC/LDEENVA0gDQlFCXgcYFl0JVgsEHRVTX01HUFYCFFQPF1UNElRYVFcAoZteRQVCBVcGXxZCEVwU9M9URklGRRMRBRYCSwJYBxBDDV4JGAhTRFQKC1dcRFxYFXpVEV1cTRdBFFcVUUoWEBcSQwoERQ1XDR4WYwFUBFIQQQleRlgDUgcQCk0HQ6WREBdcRl8R8clWRQBfFVlFVvaAW0NNERFWVwASUFoZWgoAQFEWSBciWA5EVxMXWARSEBUXRQ/1z19CDqCYFREHXlQXRAkYFF0WFwAJEVZXXElUXFENQF5BUkMAEltbWl4GTA=="
      }
    ],
    "descartados": [
      {
        "sospechoso": "clara",
        "texto": "dc1:fAASVltJXwJCQVVFElYIVaGDFlIIGRRSFPbPQ0ZSA0IGBkNMCFBGVl8WXQFKBVSnmgRfEXZaUEtUEUAWQl5BW1FBQlxRXUQCQlZVCQdZEFxCRVhSREoDWgNbBxAfFgheQgsCWxTyy1EQDFcFXRdbEFYBChFZVxFJWVBXAhRfCBdDBBJdVVtEoM9TEAAXQg1PDVNXVwsZAlJCWQdUCRhGaEIGDxkIXgtSQgcSAl1EcxdDABdYVBoRSEBUFA9YVBdWEADxhFtKFgADXlwECFMLFUJeWRMXXEZbDRUOUQREpZwDQxFcAVAKUVQNEgcYNFcJVQAXRVpYHw=="
      }
    ],
    "cierre": [
      {
        "quien": "gismera",
        "texto": "dc1:fQgSV1VXRxYHQF9FFVJEVAcQVVId+tUXEVoKX1wWF0QLBg0ZB0IDV0UQU0ZNClNEVAQPUBVGUEtUEUQGRlUERVwAEltbGVoCQlZVDwcXCFUHV1dBRFhGegNRFFkCGkZIQhAWGRby1VxZGFNGVgsSFFYCBFNUFkRXVBFXDERYABkQLV0VRUxTQw9XEAEDQQtVFFn1gERYChcEWhLz1VEUUAQMQ18TVEZDRUJCFFcUWwUXFQlQVlcRXVARWAJHEQRERBNXWVhYRVlCXlFFBfTFVANCVxMXXEZUB0cU89UWBxEOAhAZAl4VHBAOU0ZQC0AFFwEAEVlXEVVASxo="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:aQ4SWFEZUBYLElFFKlgKXRBVRR9EQEZ7DVsCQgNFRlINDhNLpYJKEEAHQAkYB10JRxemghVSVEpRVBQWWhECW0UDElFRGWYCDl4QKAdbCBdCcRZep5RGWgcVEkIHXAkRBgZDTxNUCkRRQlMKGAdTCUcECFRbQl4ZUF0UF1FdBFBCAF9UFF1TQyZTWgkHDUT7yX9EWgNQCFYOFQVfCFsPVg2h2BVGVw9CXQNWCRg2HERhS0V0WRZATFARRAJTUEFZX0FRVFlbXwJCQlkAAkUFSkw="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fA4SQVFX9c4DX18WRkQNV0JUU0AHWBRDA0dGQAlEF0QHQxdWAl5GXF9CQRNBCxIQUgumnFQWVEFFXV0AVVII9IMPCBVRVRYFA0BfCUoXCFhCQFpSB1hKFwdZRkkDRQkRExYGGQheRkRfAVMEWUoSLFYWEVAVR0RcFV1VQ0deEVYQBVcVWFxCEQNBEAEPXQsZBvOFXQBcRk5CUAoQBVcIVQMHDBkVVEZRUhBbpYtEUQtZRRZERhZFS1BCFA33iwxSQg5BGw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:Yg5WR11eWUM0U1wGpZYWWgdcFlAFVAReoYZGXAcWFlgHBxFYRkhGYFUPUANKEF0KFwkEEUVXVvqGHxQtXV8GQl4AElFRGVoCERJUChUXCFZCRFNdp5QHFwZQClEIQgMKQg8MGRVQBVFdDUFGXQpGFlJFCVBGFlVWRh0UEkFYFVZeBV0VUFwWBgwSXQACXgsZAxBaXBcZAlIP9sdDSA=="
      }
    ]
  }
});
