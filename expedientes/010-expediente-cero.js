/**
 * Expediente 010 — El expediente cero.
 * Solo datos: lo registra el motor (docs/juego.md «Cómo se escribe un caso»).
 * Las respuestas son huellas y las pistas, notas y epílogo van codificados (D5):
 * para cambiarlos, usar herramientas/huellas.html. En este caso Yoksrio no contesta:
 * la tercera pista la dan las dos hermanas (sinYoksrio, D17). Dos documentos van
 * escritos en la clave de Yoksrio (clave: true) y la acusación no es la última prueba
 * (acusacion: true): después de acusar queda el desenlace.
 */
DetectiveCodex.registrarExpediente({
  "sinYoksrio": true,
  "id": "010",
  "numero": "005",
  "titulo": "El expediente cero",
  "subtitulo": "Nadie acude a la cita",
  "categoria": [
    "crimen",
    "misterio"
  ],
  "dificultad": 5,
  "duracion": "75–100 min",
  "portada": "img-portada",
  "elementoConductor": {
    "tipo": "colección",
    "nombre": "Las cuatro piezas",
    "descripcion": "La estrella de piedra, el Ojo del Horizonte, el 309 y el séptimo sello; y en los cuatro casos, el ojo en la rosa y el notario Varga."
  },
  "introduccion": "Madrid, domingo 25 de septiembre de 1927, noche de luna nueva. Al dorso del séptimo sello había una dirección de Madrid, un nombre y, en vez de una fecha, tres palabras: «la próxima luna nueva».\n\nFuisteis a esa dirección el día 10, la mañana siguiente de volver de Toledo: un segundo piso de la calle de la Luna. Nadie abrió, y dejasteis una nota bajo la puerta firmada como él os pidió. Desde entonces habéis telegrafiado a las cuatro oficinas desde las que os escribió, habéis vuelto a Toledo, habéis ido a Logroño y habéis pasado dos veces más por esa puerta. Nada.\n\nHoy, a la hora de la cita, la cerradura está forzada y la puerta, entornada. Dentro no hay nadie: una mesa con el té frío, un perchero, un tablero de corcho del que alguien ha arrancado todos los hilos rojos y un silencio que ya conocéis de otros casos: el de un sitio del que se han llevado a alguien.\n\nY desde el 14 de septiembre, Yoksrio no contesta a vuestros telegramas.",
  "historia": "En el año que ha pasado desde que Yoksrio se marchó, la Agencia Arkana ha salido en todos los periódicos. El primer invierno fue de casos pequeños que no llegaron al archivo; en primavera llegó Asteria, y con ella los periódicos. Y cada uno de los expedientes ha dejado algo que no encajaba: una rosa de ocho puntas con un ojo, un notario al que nadie ha visto, una estrella de ocho puntas tallada en piedra, una joya prestada sin nombre, una habitación borrada de los planos y un séptimo sello que no era del mapa. Al dorso de ese séptimo sello, una dirección de Madrid, la próxima luna nueva y un nombre que ya conocíais de Logroño: Elías Varga.\n\nEn ese tiempo os han llegado cuatro telegramas de Yoksrio, desde medio país, que no parecían tener nada que ver con vuestros casos. Guardadlos a mano. El expediente cero es el primero de todos: el que explica los otros cuatro.",
  "objetivo": "Averiguar quién os ha citado y por qué no ha venido, quién ha firmado como Elías Varga desde 1925 y qué era ARKANA antes de ser el nombre de vuestra agencia. Y, sobre todo, encontrar a Yoksrio y traerlo a casa.\n\nLos telegramas de Yoksrio están en la sección «Telegramas» del cuaderno: en este caso son pruebas. Y su clave sirve para algo más que para leerlos.",
  "aviso": "Para este expediente os hará falta lo que os contaron los telegramas de Yoksrio: están en la sección Telegramas del cuaderno y se descifran con su tabla. Es el más largo de los cinco: incluso en partida corta, contad con hora y media.",
  "personajes": [
    {
      "nombre": "Yoksrio",
      "rol": "Vuestro padre. Desde el 14 de septiembre no contesta a los telegramas.",
      "imagen": "img-yoksrio"
    },
    {
      "nombre": "Elías Varga",
      "rol": "Firma el séptimo sello. Os ha citado en Madrid la noche de la luna nueva.",
      "imagen": "img-varga"
    }
  ],
  "cronologia": [
    {
      "fecha": "Octubre de 1926",
      "texto": "Una noche de lluvia llega un telegrama para Yoksrio. Lo lee dos veces, sale corriendo y no vuelve: solo deja una carta cifrada."
    },
    {
      "fecha": "1926–1927",
      "texto": "La Agencia resuelve los expedientes 001 a 004. Tras cada uno llega un telegrama de Yoksrio."
    },
    {
      "fecha": "2 de septiembre de 1927",
      "texto": "Muere en Toledo el librero Aurelio Sarmiento (expediente 004)."
    },
    {
      "fecha": "9 de septiembre de 1927",
      "texto": "Llega por correo, desde Logroño, el séptimo sello: una dirección de Madrid y «la próxima luna nueva»."
    },
    {
      "fecha": "10 de septiembre de 1927",
      "texto": "Llamáis a la puerta de la calle de la Luna. Nadie abre. Dejáis una nota bajo la puerta."
    },
    {
      "fecha": "14 de septiembre de 1927",
      "texto": "Último telegrama de Yoksrio, desde Toledo."
    },
    {
      "fecha": "Domingo 25 de septiembre de 1927",
      "texto": "Noche de luna nueva. Cita en la calle de la Luna. Nadie acude; la cerradura está forzada."
    },
    {
      "fecha": "21 de agosto de 1912",
      "texto": "Muere el cartógrafo Elías Varga en la habitación 309 del Gran Hotel Atlántida, en su primer verano.",
      "desbloqueadoPor": "p02"
    },
    {
      "fecha": "1909",
      "texto": "Nueve amigos de oficios distintos firman por correo el acta de ARKANA.",
      "desbloqueadoPor": "p10"
    },
    {
      "fecha": "Desde la noche del 23 de septiembre de 1927",
      "texto": "Cada noche, a las 03:17, una luz parpadea en el valle del Lozoya. Montero la ve al volver, la noche del 27, y telegrafía el 28 por la mañana.",
      "desbloqueadoPor": "p10"
    },
    {
      "fecha": "1911",
      "texto": "Abre el Sanatorio de Valhondo, en el valle del Lozoya, con un legado y una hipoteca.",
      "desbloqueadoPor": "p13"
    },
    {
      "fecha": "14 de septiembre de 1910",
      "texto": "Doña Catalina Ugalde Iriarte, armadora, viuda, «muere» en su villa de San Sebastián a las 23:10, según el certificado. A las 22:40 había salido el tren de la noche a Logroño.",
      "desbloqueadoPor": "p16"
    }
  ],
  "ubicaciones": [
    {
      "id": "u-piso",
      "nombre": "Piso de la calle de la Luna",
      "descripcion": "Un segundo piso de Madrid casi vacío: una mesa, dos sillas, un perchero, un armario y un tablero de corcho. La casa no tiene portería.",
      "imagen": "img-piso"
    },
    {
      "id": "u-hotel",
      "nombre": "Gran Hotel Atlántida, 1912",
      "descripcion": "El hotel de la bahía de la Concha en su primer verano, el de su inauguración en 1912, cuando la habitación 309 todavía figuraba en los planos. Se levantó donde antes estaban la villa y los jardines de una viuda rica de la ciudad, y buena parte del servicio de la villa pasó al hotel. La reforma de 1925 borró la 309.",
      "imagen": "img-hotel",
      "desbloqueadoPor": "p02"
    },
    {
      "id": "u-notaria",
      "nombre": "Notaría Varga, Logroño",
      "descripcion": "Una habitación alquilada en el primer piso de una casa de la calle Portales, con una mesa y un sello de lacre. Ningún notario ha pasado nunca consulta en ella. Abajo vive la casera, de luto.",
      "imagen": "img-notaria",
      "desbloqueadoPor": "p09"
    },
    {
      "id": "u-observatorio",
      "nombre": "Observatorio de Peñalara",
      "descripcion": "La cúpula de don Ezequiel Montero, el astrónomo al que en 1925 un amigo de Yoksrio pidió que vigilara el valle, a 1.800 metros. Desde ella se ve el valle del Lozoya entero.",
      "imagen": "img-observatorio",
      "desbloqueadoPor": "p10"
    },
    {
      "id": "u-sanatorio",
      "nombre": "Sanatorio de Valhondo",
      "descripcion": "Un sanatorio de montaña entre pinos, al pie de Peñalara, en la vertiente del Lozoya. Siete edificios de piedra, un arroyo y una acequia vieja que ya no lleva agua.",
      "imagen": "img-sanatorio",
      "desbloqueadoPor": "p13"
    }
  ],
  "imagenes": [
    {
      "id": "img-portada",
      "archivo": "portada.jpg",
      "prompt": "Imagen ya creada para el expediente 010.",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Expediente cero"
      }
    },
    {
      "id": "img-piso",
      "archivo": "piso.jpg",
      "prompt": "Imagen ya creada para el expediente 010.",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Calle de la Luna"
      }
    },
    {
      "id": "img-notaria",
      "archivo": "notaria.jpg",
      "prompt": "Imagen ya creada para el expediente 010.",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "Notaría Varga"
      }
    },
    {
      "id": "img-varga",
      "archivo": "carpeta.jpg",
      "prompt": "Imagen ya creada para el expediente 010.",
      "respaldo": {
        "generica": "objeto",
        "rotulo": "E. V."
      }
    },
    {
      "id": "img-yoksrio",
      "archivo": "../agencia/yoksrio.jpg",
      "prompt": "Imagen ya creada para la agencia.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "Yoksrio"
      }
    },
    {
      "id": "img-hotel",
      "archivo": "../008/hotel.jpg",
      "prompt": "Imagen ya creada para el expediente 008.",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Gran Hotel Atlántida"
      }
    },
    {
      "id": "img-observatorio",
      "archivo": "observatorio.jpg",
      "prompt": "Imagen ya creada para el expediente 010 (procede del antiguo 007).",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Peñalara"
      }
    },
    {
      "id": "img-sanatorio",
      "archivo": "sanatorio.jpg",
      "prompt": "1927 photograph of a mountain sanatorium among pine trees at the foot of Peñalara, Sierra de Guadarrama, Spain: long granite pavilions with wooden verandas, a small chapel, a stream and a dirt road, early morning mist, sepia, film grain, cinematic, no people, no text.",
      "respaldo": {
        "generica": "paisaje",
        "rotulo": "Valhondo"
      }
    },
    {
      "id": "img-doctor",
      "archivo": "../008/doctor.jpg",
      "prompt": "Imagen ya creada para el expediente 008.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "E. Ibarguren"
      }
    },
    {
      "id": "img-adela",
      "archivo": "../008/adela.jpg",
      "prompt": "Imagen ya creada para el expediente 008.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "A. Urquiza"
      }
    },
    {
      "id": "img-elosegui",
      "archivo": "../008/elosegui.jpg",
      "prompt": "Imagen ya creada para el expediente 008.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "R. Elósegui"
      }
    },
    {
      "id": "img-garmendia",
      "archivo": "../005/garmendia.jpg",
      "prompt": "Imagen ya creada para el expediente 005.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "L. Garmendia"
      }
    },
    {
      "id": "img-echaide",
      "archivo": "echaide.jpg",
      "prompt": "1927 sepia studio portrait photograph of a Spanish bank administrator in his mid-forties, thin, clean-shaven, round steel spectacles, dark three-piece suit, watch chain, cautious lowered gaze, neutral backdrop, film grain, cinematic, no text.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "S. Echaide"
      }
    },
    {
      "id": "img-rosa",
      "archivo": "rosa.jpg",
      "prompt": "1927 sepia portrait photograph of a Spanish head nurse in her late forties, starched white cap and apron over a dark dress, firm tired face, standing in a stone sanatorium corridor with tall windows, film grain, cinematic, no text.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "R. Urquiza"
      }
    },
    {
      "id": "img-larrauri",
      "archivo": "larrauri.jpg",
      "prompt": "1927 sepia studio portrait photograph of a Basque shipowner in his mid-sixties, heavy build, white beard trimmed short, frock coat, gold tie pin, confident direct gaze, neutral backdrop, film grain, cinematic, no text.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "C. Larrauri"
      }
    },
    {
      "id": "img-lizaso",
      "archivo": "lizaso.jpg",
      "prompt": "1927 sepia portrait photograph of a retired Spanish hotel night porter in his sixties, white moustache, dark Sunday jacket, seated by a window in San Sebastián with a ledger on his knees, film grain, cinematic, no text.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "J. Lizaso"
      }
    },
    {
      "id": "img-catalina",
      "archivo": "catalina.jpg",
      "prompt": "1910 sepia studio portrait photograph of a Spanish widow in her late fifties, elegant dark silk dress with high lace collar, a brooch at the throat: a star sapphire set in an eight-pointed gold compass rose, calm proud face, neutral backdrop, film grain, cinematic, no text.",
      "respaldo": {
        "generica": "retrato",
        "rotulo": "C. Ugalde, 1910"
      }
    }
  ],
  "visuales": {
    "tablero": "<svg viewBox=\"0 0 900 620\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tablero de corcho con cinco tarjetas clavadas y los hilos rojos arrancados\"><defs><radialGradient id=\"z0-fondo\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-madera-clara\"/><stop offset=\"0.6\" class=\"ilst-manila-oscuro\"/><stop offset=\"1\" class=\"ilst-madera\"/></radialGradient><filter id=\"z0-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter></defs><rect width=\"900\" height=\"620\" fill=\"url(#z0-fondo)\"/><path d=\"M195 88 Q245.5 156 260 200\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"1.6\" opacity=\"0.8\"/><path d=\"M485 158 Q530.5 221 540 260\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"1.6\" opacity=\"0.8\"/><path d=\"M735 78 Q735.5 146 700 190\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"1.6\" opacity=\"0.8\"/><path d=\"M225 338 Q280.5 406 300 450\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"1.6\" opacity=\"0.8\"/><path d=\"M685 368 Q670.5 436 620 480\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"1.6\" opacity=\"0.8\"/><path d=\"M420 300 Q463 372 470 420\" fill=\"none\" class=\"ils-rojo\" stroke-width=\"1.6\" opacity=\"0.8\"/><g class=\"punto\" data-punto=\"k1\" tabindex=\"0\" role=\"button\" aria-label=\"Tarjeta: Londres, 28 de mayo de 1927\" transform=\"rotate(-3 195 126)\"><rect x=\"114\" y=\"85\" width=\"170\" height=\"92\" class=\"ilf-tinta\" opacity=\"0.18\"/><rect x=\"110\" y=\"80\" width=\"170\" height=\"92\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"122\" y1=\"110\" x2=\"268\" y2=\"110\" class=\"ils-rojo\" stroke-width=\"0.8\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"195\" y=\"136\" text-anchor=\"middle\">Londres</text><text class=\"il-texto il-texto-peq\" x=\"195\" y=\"158\" text-anchor=\"middle\">28 de mayo de 1927</text><circle cx=\"195\" cy=\"94\" r=\"6\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"106\" y=\"76\" width=\"178\" height=\"100\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"k2\" tabindex=\"0\" role=\"button\" aria-label=\"Tarjeta: San Sebastián, 21 de agosto de 1927\" transform=\"rotate(2 485 196)\"><rect x=\"404\" y=\"155\" width=\"170\" height=\"92\" class=\"ilf-tinta\" opacity=\"0.18\"/><rect x=\"400\" y=\"150\" width=\"170\" height=\"92\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"412\" y1=\"180\" x2=\"558\" y2=\"180\" class=\"ils-rojo\" stroke-width=\"0.8\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"485\" y=\"206\" text-anchor=\"middle\">San Sebastián</text><text class=\"il-texto il-texto-peq\" x=\"485\" y=\"228\" text-anchor=\"middle\">21 de agosto de 1927</text><circle cx=\"485\" cy=\"164\" r=\"6\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"396\" y=\"146\" width=\"178\" height=\"100\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"k3\" tabindex=\"0\" role=\"button\" aria-label=\"Tarjeta: Barcelona, 1 de julio de 1927\" transform=\"rotate(3 735 116)\"><rect x=\"654\" y=\"75\" width=\"170\" height=\"92\" class=\"ilf-tinta\" opacity=\"0.18\"/><rect x=\"650\" y=\"70\" width=\"170\" height=\"92\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"662\" y1=\"100\" x2=\"808\" y2=\"100\" class=\"ils-rojo\" stroke-width=\"0.8\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"735\" y=\"126\" text-anchor=\"middle\">Barcelona</text><text class=\"il-texto il-texto-peq\" x=\"735\" y=\"148\" text-anchor=\"middle\">10 de septiembre de 1927</text><circle cx=\"735\" cy=\"84\" r=\"6\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"646\" y=\"66\" width=\"178\" height=\"100\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"k4\" tabindex=\"0\" role=\"button\" aria-label=\"Tarjeta: San Sebastián, 20 de agosto de 1927\" transform=\"rotate(2 225 376)\"><rect x=\"144\" y=\"335\" width=\"170\" height=\"92\" class=\"ilf-tinta\" opacity=\"0.18\"/><rect x=\"140\" y=\"330\" width=\"170\" height=\"92\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"152\" y1=\"360\" x2=\"298\" y2=\"360\" class=\"ils-rojo\" stroke-width=\"0.8\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"225\" y=\"386\" text-anchor=\"middle\">San Sebastián</text><text class=\"il-texto il-texto-peq\" x=\"225\" y=\"408\" text-anchor=\"middle\">12 de septiembre de 1927</text><circle cx=\"225\" cy=\"344\" r=\"6\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"136\" y=\"326\" width=\"178\" height=\"100\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"k5\" tabindex=\"0\" role=\"button\" aria-label=\"Tarjeta: Toledo, 9 de septiembre de 1927\" transform=\"rotate(-2 685 406)\"><rect x=\"604\" y=\"365\" width=\"170\" height=\"92\" class=\"ilf-tinta\" opacity=\"0.18\"/><rect x=\"600\" y=\"360\" width=\"170\" height=\"92\" class=\"ilf-papel-claro ils-tinta-suave\" stroke-width=\"1\"/><line x1=\"612\" y1=\"390\" x2=\"758\" y2=\"390\" class=\"ils-rojo\" stroke-width=\"0.8\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"685\" y=\"416\" text-anchor=\"middle\">Toledo</text><text class=\"il-texto il-texto-peq\" x=\"685\" y=\"438\" text-anchor=\"middle\">14 de septiembre de 1927</text><circle cx=\"685\" cy=\"374\" r=\"6\" class=\"ilf-rojo ils-tinta\" stroke-width=\"0.8\"/><rect x=\"596\" y=\"356\" width=\"178\" height=\"100\" class=\"punto-zona\"/></g><text class=\"il-texto il-texto-peq\" x=\"450\" y=\"586\" text-anchor=\"middle\" font-style=\"italic\">Tablero del piso de la calle de la Luna · los hilos están arrancados; las tarjetas, no</text><rect width=\"900\" height=\"620\" filter=\"url(#z0-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"884\" height=\"604\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"874\" height=\"594\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "sanatorio": "<svg viewBox=\"0 0 900 620\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Plano del Sanatorio de Valhondo con sus siete edificios, el arroyo, la acequia vieja y dos compuertas sin rótulo\"><defs><radialGradient id=\"z1-fondo\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"z1-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"z1-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><pattern id=\"z1-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#z1-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#z1-papel)\" opacity=\"0.42\"/></pattern></defs><rect width=\"900\" height=\"620\" fill=\"url(#z1-foto)\"/><path d=\"M30 540 C200 510 260 550 420 520 C560 495 700 545 870 515\" fill=\"none\" class=\"ils-mar\" stroke-width=\"6\" opacity=\"0.6\"/><text class=\"il-texto il-texto-etiqueta\" x=\"450\" y=\"500\" text-anchor=\"middle\" font-style=\"italic\">Arroyo de Valhondo</text><path d=\"M640 610 L640 575 C640 560 620 550 600 550 L560 550 L560 470\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><text class=\"il-texto il-texto-peq\" x=\"500\" y=\"604\" text-anchor=\"start\">Camino de Rascafría</text><path d=\"M88 500 C60 450 44 380 44 300 C44 220 70 170 110 130\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"2\" stroke-dasharray=\"3 4\" opacity=\"0.9\"/><text class=\"il-texto il-texto-etiqueta\" x=\"32\" y=\"330\" text-anchor=\"middle\" font-style=\"italic\" transform=\"rotate(-86 32 330)\">acequia vieja</text><path d=\"M520 300 C640 330 760 420 818 512\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1.4\" stroke-dasharray=\"2 5\" opacity=\"0.7\"/><text class=\"il-texto il-texto-etiqueta\" x=\"700\" y=\"400\" text-anchor=\"middle\" font-style=\"italic\" transform=\"rotate(42 700 400)\">desagüe</text><circle cx=\"40\" cy=\"40\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"101\" cy=\"54\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"162\" cy=\"68\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"223\" cy=\"82\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"284\" cy=\"40\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"345\" cy=\"54\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"406\" cy=\"68\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"467\" cy=\"82\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"528\" cy=\"40\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"589\" cy=\"54\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"650\" cy=\"68\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"711\" cy=\"82\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"772\" cy=\"40\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><circle cx=\"833\" cy=\"54\" r=\"9\" class=\"ilf-planta\" opacity=\"0.55\"/><text class=\"il-texto il-texto-etiqueta\" x=\"450\" y=\"34\" text-anchor=\"middle\" font-style=\"italic\">Pinar · ladera de Peñalara</text><g class=\"punto\" data-punto=\"s1\" tabindex=\"0\" role=\"button\" aria-label=\"Pabellón Norte\"><rect x=\"300\" y=\"110\" width=\"300\" height=\"90\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"450\" y=\"160\" text-anchor=\"middle\" pointer-events=\"none\">Pabellón Norte</text><rect x=\"294\" y=\"104\" width=\"312\" height=\"102\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"s2\" tabindex=\"0\" role=\"button\" aria-label=\"Pabellón Sur\"><rect x=\"300\" y=\"380\" width=\"300\" height=\"90\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"450\" y=\"430\" text-anchor=\"middle\" pointer-events=\"none\">Pabellón Sur</text><rect x=\"294\" y=\"374\" width=\"312\" height=\"102\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"s3\" tabindex=\"0\" role=\"button\" aria-label=\"Capilla\"><rect x=\"640\" y=\"240\" width=\"120\" height=\"100\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"700\" y=\"295\" text-anchor=\"middle\" pointer-events=\"none\">Capilla</text><rect x=\"634\" y=\"234\" width=\"132\" height=\"112\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"s4\" tabindex=\"0\" role=\"button\" aria-label=\"Casa de la dirección\"><rect x=\"80\" y=\"230\" width=\"200\" height=\"110\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"180\" y=\"290\" text-anchor=\"middle\" pointer-events=\"none\">Casa de la dirección</text><rect x=\"74\" y=\"224\" width=\"212\" height=\"122\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"s5\" tabindex=\"0\" role=\"button\" aria-label=\"Depósito de agua\"><circle cx=\"150\" cy=\"110\" r=\"40\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"110\" r=\"28\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"1\"/><text class=\"il-texto il-texto-peq\" x=\"150\" y=\"172\" text-anchor=\"middle\" pointer-events=\"none\">Depósito de agua</text><rect x=\"104\" y=\"64\" width=\"92\" height=\"114\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"s6\" tabindex=\"0\" role=\"button\" aria-label=\"Lavadero\"><rect x=\"380\" y=\"250\" width=\"140\" height=\"70\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"450\" y=\"290\" text-anchor=\"middle\" pointer-events=\"none\">Lavadero</text><rect x=\"374\" y=\"244\" width=\"152\" height=\"82\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"s7\" tabindex=\"0\" role=\"button\" aria-label=\"Portería\"><rect x=\"690\" y=\"470\" width=\"120\" height=\"70\" class=\"ilf-piedra ils-tinta\" stroke-width=\"2\"/><text class=\"il-texto il-texto-peq\" x=\"750\" y=\"510\" text-anchor=\"middle\" pointer-events=\"none\">Portería</text><rect x=\"684\" y=\"464\" width=\"132\" height=\"82\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"s8\" tabindex=\"0\" role=\"button\" aria-label=\"Compuerta sin rótulo\"><rect x=\"60\" y=\"500\" width=\"56\" height=\"36\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/><line x1=\"72\" y1=\"508\" x2=\"104\" y2=\"528\" class=\"ils-tinta\" stroke-width=\"1.2\"/><line x1=\"104\" y1=\"508\" x2=\"72\" y2=\"528\" class=\"ils-tinta\" stroke-width=\"1.2\"/><rect x=\"54\" y=\"494\" width=\"68\" height=\"48\" class=\"punto-zona\"/></g><g class=\"punto\" data-punto=\"s9\" tabindex=\"0\" role=\"button\" aria-label=\"Compuerta sin rótulo\"><rect x=\"790\" y=\"512\" width=\"56\" height=\"36\" class=\"ilf-piedra ils-tinta\" stroke-width=\"1.5\"/><line x1=\"802\" y1=\"520\" x2=\"834\" y2=\"540\" class=\"ils-tinta\" stroke-width=\"1.2\"/><line x1=\"834\" y1=\"520\" x2=\"802\" y2=\"540\" class=\"ils-tinta\" stroke-width=\"1.2\"/><rect x=\"784\" y=\"506\" width=\"68\" height=\"48\" class=\"punto-zona\"/></g><g transform=\"translate(820 110)\"><circle r=\"26\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.2\"/><circle r=\"4\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M0 32 L6 0 L0 -5 L-6 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -24 L3 0 L-3 0 Z\" class=\"ilf-tinta-suave\"/><path d=\"M24 0 L0 3 L0 -3 Z\" class=\"ilf-tinta-suave\"/><path d=\"M-24 0 L0 3 L0 -3 Z\" class=\"ilf-tinta-suave\"/><text class=\"il-texto il-texto-etiqueta\" x=\"0\" y=\"50\" text-anchor=\"middle\">N</text></g><text class=\"il-texto il-texto-peq\" x=\"880\" y=\"586\" text-anchor=\"end\" font-style=\"italic\">Sanatorio de Valhondo · plano de 1924</text><rect width=\"900\" height=\"620\" filter=\"url(#z1-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"884\" height=\"604\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"874\" height=\"594\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "acta": "<svg viewBox=\"0 0 900 720\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"El acta de ARKANA de 1909: nueve firmas numeradas, seis cruces, una firma rota por el borde y, al dorso, una cláusula tachada\"><defs><radialGradient id=\"z2-fondo\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-madera-clara\"/><stop offset=\"0.6\" class=\"ilst-madera\"/><stop offset=\"1\" class=\"ilst-madera\"/></radialGradient><filter id=\"z2-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"z2-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><pattern id=\"z2-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#z2-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#z2-papel)\" opacity=\"0.42\"/></pattern></defs><clipPath id=\"z2-pliego\"><path d=\"M60 40 L690 40 L690 300 L676 318 L688 340 L672 366 L690 392 L680 420 L690 470 L690 640 L60 640 Z\"/></clipPath><rect width=\"900\" height=\"720\" fill=\"url(#z2-fondo)\"/><path d=\"M66 48 L696 48 L696 648 L66 648 Z\" class=\"ilf-noche\" opacity=\"0.3\"/><g clip-path=\"url(#z2-pliego)\"><rect x=\"60\" y=\"40\" width=\"640\" height=\"600\" fill=\"url(#z2-foto)\"/></g><path d=\"M60 40 L690 40 L690 300 L676 318 L688 340 L672 366 L690 392 L680 420 L690 470 L690 640 L60 640 Z\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><path d=\"M60 600 L60 640 L110 640 Z\" class=\"ilf-madera\"/><text class=\"il-texto il-texto-titulo-peq\" x=\"375\" y=\"92\" text-anchor=\"middle\">ARKANA · Anno Domini MCMIX</text><text class=\"il-texto il-texto-peq\" x=\"375\" y=\"118\" text-anchor=\"middle\" font-style=\"italic\" opacity=\"0.8\">Nueve amigos de oficios distintos · nueve números · nueve prendas</text><line x1=\"90\" y1=\"134\" x2=\"660\" y2=\"134\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"176\" text-anchor=\"start\" letter-spacing=\"2\">001</text><text class=\"il-texto il-texto-med\" x=\"160\" y=\"176\" text-anchor=\"start\" font-style=\"italic\">E. V.</text><text class=\"il-texto il-texto-med\" x=\"260\" y=\"176\" text-anchor=\"start\">cartógrafo</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"176\" text-anchor=\"start\">Oporto</text><text class=\"il-texto il-texto-peq\" x=\"620\" y=\"176\" text-anchor=\"start\" opacity=\"0.85\">† 1912</text><line x1=\"150\" y1=\"184\" x2=\"440\" y2=\"184\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"226\" text-anchor=\"start\" letter-spacing=\"2\">002</text><text class=\"il-texto il-texto-med\" x=\"160\" y=\"226\" text-anchor=\"start\" font-style=\"italic\">B. L.</text><text class=\"il-texto il-texto-med\" x=\"260\" y=\"226\" text-anchor=\"start\">ferroviario</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"226\" text-anchor=\"start\">Medina del Campo</text><text class=\"il-texto il-texto-peq\" x=\"620\" y=\"226\" text-anchor=\"start\" opacity=\"0.85\">† 1919</text><line x1=\"150\" y1=\"234\" x2=\"440\" y2=\"234\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"276\" text-anchor=\"start\" letter-spacing=\"2\">003</text><text class=\"il-texto il-texto-med\" x=\"160\" y=\"276\" text-anchor=\"start\" font-style=\"italic\">M. R.</text><text class=\"il-texto il-texto-med\" x=\"260\" y=\"276\" text-anchor=\"start\">maestro de obras</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"276\" text-anchor=\"start\">Gijón</text><text class=\"il-texto il-texto-peq\" x=\"620\" y=\"276\" text-anchor=\"start\" opacity=\"0.85\">† 1916</text><line x1=\"150\" y1=\"284\" x2=\"440\" y2=\"284\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"326\" text-anchor=\"start\" letter-spacing=\"2\">004</text><text class=\"il-texto il-texto-med\" x=\"160\" y=\"326\" text-anchor=\"start\" font-style=\"italic\">P. S.</text><text class=\"il-texto il-texto-med\" x=\"260\" y=\"326\" text-anchor=\"start\">boticario</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"326\" text-anchor=\"start\">Haro</text><text class=\"il-texto il-texto-peq\" x=\"620\" y=\"326\" text-anchor=\"start\" opacity=\"0.85\">† 1921</text><line x1=\"150\" y1=\"334\" x2=\"440\" y2=\"334\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><ellipse cx=\"300\" cy=\"322\" rx=\"46\" ry=\"14\" class=\"ilf-tinta\" opacity=\"0.28\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"376\" text-anchor=\"start\" letter-spacing=\"2\">005</text><text class=\"il-texto il-texto-med\" x=\"160\" y=\"376\" text-anchor=\"start\" font-style=\"italic\">J. C.</text><text class=\"il-texto il-texto-med\" x=\"260\" y=\"376\" text-anchor=\"start\">anticuario</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"376\" text-anchor=\"start\">Madrid</text><text class=\"il-texto il-texto-peq\" x=\"620\" y=\"376\" text-anchor=\"start\" opacity=\"0.85\">† 1923</text><line x1=\"150\" y1=\"384\" x2=\"440\" y2=\"384\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"426\" text-anchor=\"start\" letter-spacing=\"2\">006</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"426\" text-anchor=\"start\" opacity=\"0.9\">…dora</text><path d=\"M150 408 L420 408 L420 436 L150 436 Z\" fill=\"none\"/><g transform=\"translate(560 420)\" opacity=\"0.55\"><circle r=\"13\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\"/><circle r=\"8.969999999999999\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.6\"/><g transform=\"rotate(0)\"><path d=\"M0 -14.04 L1.82 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -14.04 L-1.82 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -8.06 L1.82 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -8.06 L-1.82 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -14.04 L1.82 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -14.04 L-1.82 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -8.06 L1.82 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -8.06 L-1.82 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -14.04 L1.82 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -14.04 L-1.82 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -8.06 L1.82 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -8.06 L-1.82 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -14.04 L1.82 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -14.04 L-1.82 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -8.06 L1.82 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -8.06 L-1.82 0 L0 0 Z\" class=\"ilf-oro\"/></g><ellipse rx=\"3.12\" ry=\"1.69\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"0.9100000000000001\" class=\"ilf-tinta\"/></g><text class=\"il-texto il-texto-peq\" x=\"600\" y=\"426\" text-anchor=\"start\" font-style=\"italic\" opacity=\"0.6\">(a lápiz)</text><line x1=\"150\" y1=\"434\" x2=\"440\" y2=\"434\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"476\" text-anchor=\"start\" letter-spacing=\"2\">007</text><text class=\"il-texto il-texto-med\" x=\"160\" y=\"476\" text-anchor=\"start\" font-style=\"italic\">L. B.</text><text class=\"il-texto il-texto-med\" x=\"260\" y=\"476\" text-anchor=\"start\">relojero</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"476\" text-anchor=\"start\">Segovia</text><text class=\"il-texto il-texto-peq\" x=\"620\" y=\"476\" text-anchor=\"start\" opacity=\"0.85\">† 1924</text><line x1=\"150\" y1=\"484\" x2=\"440\" y2=\"484\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><ellipse cx=\"520\" cy=\"472\" rx=\"60\" ry=\"14\" class=\"ilf-tinta\" opacity=\"0.28\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"526\" text-anchor=\"start\" letter-spacing=\"2\">008</text><text class=\"il-texto il-texto-med\" x=\"160\" y=\"526\" text-anchor=\"start\" font-style=\"italic\">E. I.</text><text class=\"il-texto il-texto-med\" x=\"260\" y=\"526\" text-anchor=\"start\">médico</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"526\" text-anchor=\"start\">San Sebastián</text><line x1=\"150\" y1=\"534\" x2=\"440\" y2=\"534\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><text class=\"il-texto il-texto-med\" x=\"96\" y=\"576\" text-anchor=\"start\" letter-spacing=\"2\">009</text><text class=\"il-texto il-texto-med\" x=\"160\" y=\"576\" text-anchor=\"start\" font-style=\"italic\">A. S.</text><text class=\"il-texto il-texto-med\" x=\"260\" y=\"576\" text-anchor=\"start\">librero</text><text class=\"il-texto il-texto-med\" x=\"445\" y=\"576\" text-anchor=\"start\">Toledo</text><line x1=\"150\" y1=\"584\" x2=\"440\" y2=\"584\" class=\"ils-tinta-suave\" stroke-width=\"0.5\" opacity=\"0.6\"/><text class=\"il-texto il-texto-peq\" x=\"96\" y=\"624\" text-anchor=\"start\" font-style=\"italic\" opacity=\"0.7\">(las cruces y los años, con otra tinta y otra letra, muy temblona)</text><g transform=\"rotate(4 790 520)\"><rect x=\"716\" y=\"380\" width=\"164\" height=\"300\" class=\"ilf-noche\" opacity=\"0.25\"/><rect x=\"710\" y=\"372\" width=\"164\" height=\"300\" fill=\"url(#z2-foto)\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-peq\" x=\"792\" y=\"400\" text-anchor=\"middle\" letter-spacing=\"3\" opacity=\"0.7\">DORSO</text><text class=\"il-texto il-texto-peq\" x=\"792\" y=\"440\" text-anchor=\"middle\" opacity=\"0.45\">— — — — — —</text><line x1=\"724\" y1=\"436\" x2=\"860\" y2=\"434\" class=\"ils-tinta\" stroke-width=\"2.2\" opacity=\"0.85\"/><text class=\"il-texto il-texto-peq\" x=\"792\" y=\"474\" text-anchor=\"middle\" opacity=\"0.45\">— — — — —</text><line x1=\"724\" y1=\"470\" x2=\"860\" y2=\"472\" class=\"ils-tinta\" stroke-width=\"2.2\" opacity=\"0.85\"/><text class=\"il-texto il-texto-peq\" x=\"792\" y=\"508\" text-anchor=\"middle\">…le guardarán…</text><line x1=\"724\" y1=\"504\" x2=\"860\" y2=\"502\" class=\"ils-tinta\" stroke-width=\"1.2\" opacity=\"0.5\"/><text class=\"il-texto il-texto-peq\" x=\"792\" y=\"542\" text-anchor=\"middle\" opacity=\"0.45\">— — — — — —</text><line x1=\"724\" y1=\"538\" x2=\"860\" y2=\"540\" class=\"ils-tinta\" stroke-width=\"2.2\" opacity=\"0.85\"/><text class=\"il-texto il-texto-peq\" x=\"792\" y=\"576\" text-anchor=\"middle\" opacity=\"0.45\">— — — —</text><line x1=\"724\" y1=\"572\" x2=\"860\" y2=\"570\" class=\"ils-tinta\" stroke-width=\"2.2\" opacity=\"0.85\"/><text class=\"il-texto il-texto-peq\" x=\"792\" y=\"610\" text-anchor=\"middle\" opacity=\"0.45\">— — — — — —</text><line x1=\"724\" y1=\"606\" x2=\"860\" y2=\"608\" class=\"ils-tinta\" stroke-width=\"2.2\" opacity=\"0.85\"/><text class=\"il-texto il-texto-peq\" x=\"792\" y=\"656\" text-anchor=\"middle\" font-style=\"italic\" opacity=\"0.65\">(tachado, misma tinta)</text></g><text class=\"il-texto il-texto-peq\" x=\"450\" y=\"692\" text-anchor=\"middle\" font-style=\"italic\">El acta auténtica, dentro del cuaderno de hule · la sexta firma está rota por el borde del pliego</text><rect width=\"900\" height=\"720\" filter=\"url(#z2-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"884\" height=\"704\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"874\" height=\"694\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "billete": "<svg viewBox=\"0 0 620 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Billete de primera clase de 1910 para el coche 0, asiento 0, de San Sebastián a Logroño\"><defs><radialGradient id=\"z3-fondo\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><filter id=\"z3-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"z3-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><pattern id=\"z3-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#z3-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#z3-papel)\" opacity=\"0.42\"/></pattern></defs><rect width=\"620\" height=\"320\" class=\"ilf-madera\"/><rect x=\"54\" y=\"52\" width=\"540\" height=\"226\" class=\"ilf-noche\" opacity=\"0.35\"/><g transform=\"rotate(-2 310 160)\"><rect x=\"40\" y=\"40\" width=\"540\" height=\"226\" rx=\"6\" fill=\"url(#z3-foto)\"/><g fill=\"none\" class=\"ils-tinta-azul\" stroke-width=\"0.6\" opacity=\"0.55\"><ellipse cx=\"60\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"60\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"70\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"70\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"80\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"80\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"90\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"90\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"100\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"100\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"110\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"110\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"120\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"120\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"130\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"130\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"140\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"140\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"150\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"150\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"160\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"160\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"170\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"170\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"180\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"180\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"190\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"190\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"200\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"200\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"210\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"210\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"220\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"220\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"230\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"230\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"240\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"240\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"250\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"250\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"260\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"260\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"270\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"270\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"280\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"280\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"290\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"290\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"300\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"300\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"310\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"310\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"320\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"320\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"330\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"330\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"340\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"340\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"350\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"350\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"360\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"360\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"370\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"370\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"380\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"380\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"390\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"390\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"400\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"400\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"410\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"410\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"420\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"420\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"430\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"430\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"440\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"440\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"450\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"450\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"460\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"460\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"470\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"470\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"480\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"480\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"490\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"490\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"500\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"500\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"510\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"510\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"520\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"520\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"530\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"530\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"540\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"540\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"550\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"550\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"560\" cy=\"58\" rx=\"9\" ry=\"5\"/><ellipse cx=\"560\" cy=\"248\" rx=\"9\" ry=\"5\"/><ellipse cx=\"58\" cy=\"70\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"70\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"80\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"80\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"90\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"90\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"100\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"100\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"110\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"110\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"120\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"120\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"130\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"130\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"140\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"140\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"150\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"150\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"160\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"160\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"170\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"170\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"180\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"180\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"190\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"190\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"200\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"200\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"210\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"210\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"220\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"220\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"230\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"230\" rx=\"5\" ry=\"9\"/><ellipse cx=\"58\" cy=\"240\" rx=\"5\" ry=\"9\"/><ellipse cx=\"562\" cy=\"240\" rx=\"5\" ry=\"9\"/></g><rect x=\"72\" y=\"72\" width=\"476\" height=\"162\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\"/><circle cx=\"500\" cy=\"96\" r=\"7\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"48\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"57\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"66\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"75\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"84\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"93\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"102\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"111\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"120\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"129\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"138\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"147\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"156\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"165\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"174\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"183\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"192\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"201\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"210\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"219\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"228\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"237\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"246\" r=\"2\" class=\"ilf-madera\"/><circle cx=\"44\" cy=\"255\" r=\"2\" class=\"ilf-madera\"/><text class=\"il-texto il-texto-peq\" x=\"310\" y=\"94\" text-anchor=\"middle\" letter-spacing=\"2\">COMPAÑÍA DE LOS CAMINOS DE HIERRO DEL NORTE</text><text class=\"il-texto il-texto-etiqueta\" x=\"310\" y=\"118\" text-anchor=\"middle\">PRIMERA CLASE</text><text class=\"il-texto il-texto-numeros\" x=\"310\" y=\"160\" text-anchor=\"middle\">Coche 0 · Asiento 0</text><text class=\"il-texto il-texto-peq\" x=\"310\" y=\"190\" text-anchor=\"middle\">San Sebastián – Logroño · tren de la noche · salida 22:40</text><text class=\"il-texto il-texto-peq\" x=\"310\" y=\"214\" text-anchor=\"middle\" font-style=\"italic\">14 de septiembre de 1910</text><g transform=\"translate(510 200)\"><circle r=\"16\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\"/><circle r=\"11.04\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.6\"/><g transform=\"rotate(0)\"><path d=\"M0 -17.28 L2.24 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -17.28 L-2.24 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -9.92 L2.24 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -9.92 L-2.24 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -17.28 L2.24 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -17.28 L-2.24 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -9.92 L2.24 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -9.92 L-2.24 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -17.28 L2.24 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -17.28 L-2.24 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -9.92 L2.24 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -9.92 L-2.24 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -17.28 L2.24 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -17.28 L-2.24 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -9.92 L2.24 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -9.92 L-2.24 0 L0 0 Z\" class=\"ilf-oro\"/></g><ellipse rx=\"3.84\" ry=\"2.08\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"1.12\" class=\"ilf-tinta\"/></g><text class=\"il-texto il-texto-peq\" x=\"96\" y=\"226\" text-anchor=\"start\" font-style=\"italic\" opacity=\"0.6\">Consérvese hasta el final del trayecto</text></g><rect width=\"620\" height=\"320\" filter=\"url(#z3-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/></svg>",
    "fragmento": "<svg viewBox=\"0 0 900 460\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"El fragmento IX de IX: un trozo de mapa con una punta de la rosa y la palabra Toledo, y su dorso\"><defs><radialGradient id=\"z4-fondo\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-madera-clara\"/><stop offset=\"0.6\" class=\"ilst-madera\"/><stop offset=\"1\" class=\"ilst-madera\"/></radialGradient><filter id=\"z4-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"z4-papel\" cx=\"40%\" cy=\"35%\" r=\"85%\"><stop offset=\"0\" class=\"ilst-papel-claro\"/><stop offset=\"0.6\" class=\"ilst-papel\"/><stop offset=\"1\" class=\"ilst-papel-oscuro\"/></radialGradient><pattern id=\"z4-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#z4-papel)\"/><image href=\"assets/img/texturas/papel.jpg\" x=\"-0.0208\" y=\"-0.0208\" width=\"1.0417\" height=\"1.0417\" preserveAspectRatio=\"none\"/><rect width=\"1\" height=\"1\" fill=\"url(#z4-papel)\" opacity=\"0.42\"/></pattern></defs><rect width=\"900\" height=\"460\" fill=\"url(#z4-fondo)\"/><g transform=\"rotate(-3 250 230)\"><rect x=\"66\" y=\"76\" width=\"360\" height=\"300\" class=\"ilf-noche\" opacity=\"0.3\"/><rect x=\"60\" y=\"70\" width=\"360\" height=\"300\" fill=\"url(#z4-foto)\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><polygon points=\"420,370 150,226 420,290\" class=\"ilf-tinta-suave ils-tinta\" stroke-width=\"0.8\" opacity=\"0.75\"/><polygon points=\"420,370 150,226 290,370\" class=\"ilf-papel ils-tinta\" stroke-width=\"0.8\" opacity=\"0.85\"/><text class=\"il-texto il-texto-med\" x=\"176\" y=\"200\" text-anchor=\"start\">Toledo</text><text class=\"il-texto il-texto-etiqueta\" x=\"80\" y=\"96\" text-anchor=\"start\" font-style=\"italic\">IX de IX</text><text class=\"il-texto il-texto-peq\" x=\"250\" y=\"350\" text-anchor=\"middle\" font-style=\"italic\" opacity=\"0.6\">(papel de dibujo, tinta un poco distinta en el nombre)</text></g><g transform=\"rotate(2 660 230)\"><rect x=\"486\" y=\"76\" width=\"360\" height=\"300\" class=\"ilf-noche\" opacity=\"0.3\"/><rect x=\"480\" y=\"70\" width=\"360\" height=\"300\" fill=\"url(#z4-foto)\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/><text class=\"il-texto il-texto-peq\" x=\"660\" y=\"104\" text-anchor=\"middle\" letter-spacing=\"3\" opacity=\"0.7\">DORSO</text><text class=\"il-texto il-texto-med\" x=\"660\" y=\"170\" text-anchor=\"middle\">Calle de la Luna, 14, 2.º · Madrid</text><text class=\"il-texto il-texto-med\" x=\"660\" y=\"206\" text-anchor=\"middle\" font-style=\"italic\">«la próxima luna nueva»</text><text class=\"il-texto il-texto-med\" x=\"660\" y=\"262\" text-anchor=\"middle\">Elías Varga</text><g transform=\"translate(800 330)\"><circle r=\"18\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.5\"/><circle r=\"12.419999999999998\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.6\"/><g transform=\"rotate(0)\"><path d=\"M0 -19.44 L2.52 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -19.44 L-2.52 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -11.16 L2.52 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -11.16 L-2.52 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -19.44 L2.52 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -19.44 L-2.52 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -11.16 L2.52 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -11.16 L-2.52 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -19.44 L2.52 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -19.44 L-2.52 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -11.16 L2.52 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -11.16 L-2.52 0 L0 0 Z\" class=\"ilf-oro\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -19.44 L2.52 0 L0 0 Z\" class=\"ilf-tinta\"/><path d=\"M0 -19.44 L-2.52 0 L0 0 Z\" class=\"ilf-tinta-suave\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -11.16 L2.52 0 L0 0 Z\" class=\"ilf-oro-oscuro\"/><path d=\"M0 -11.16 L-2.52 0 L0 0 Z\" class=\"ilf-oro\"/></g><ellipse rx=\"4.32\" ry=\"2.34\" class=\"ilf-papel-claro ils-tinta\" stroke-width=\"1.2\"/><circle r=\"1.2600000000000002\" class=\"ilf-tinta\"/></g><text class=\"il-texto il-texto-peq\" x=\"500\" y=\"350\" text-anchor=\"start\" font-style=\"italic\" opacity=\"0.6\">(lacre de la rosa, de sello de mesa)</text></g><text class=\"il-texto il-texto-peq\" x=\"450\" y=\"434\" text-anchor=\"middle\" font-style=\"italic\">El séptimo sello del expediente 004, llegado por correo desde Logroño el 9 de septiembre</text><rect width=\"900\" height=\"460\" filter=\"url(#z4-grano)\" opacity=\"0.1\" style=\"mix-blend-mode:multiply\" pointer-events=\"none\"/><g pointer-events=\"none\"><rect x=\"8\" y=\"8\" width=\"884\" height=\"444\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"874\" height=\"434\" fill=\"none\" class=\"ils-tinta-suave\" stroke-width=\"0.8\"/></g></svg>",
    "reverso": "<svg viewBox=\"0 0 640 640\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Reverso del broche\"><defs><filter id=\"r6-grano\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><radialGradient id=\"r6-vineta\" cx=\"50%\" cy=\"50%\" r=\"75%\"><stop offset=\"0\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"0.65\" class=\"ilst-noche\" stop-opacity=\"0\"/><stop offset=\"1\" class=\"ilst-noche\" stop-opacity=\"0.55\"/></radialGradient><filter id=\"r6-difuso\"><feGaussianBlur stdDeviation=\"6\"/></filter><radialGradient id=\"r6-oro\" cx=\"50%\" cy=\"50%\" r=\"70%\"><stop offset=\"0\" class=\"ilst-oro-claro\"/><stop offset=\"0.6\" class=\"ilst-oro\"/><stop offset=\"1\" class=\"ilst-oro-oscuro\"/></radialGradient><pattern id=\"r6-foto\" patternUnits=\"objectBoundingBox\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><rect width=\"1\" height=\"1\" fill=\"url(#r6-oro)\"/><image href=\"assets/img/006/broche-reverso.jpg\" x=\"-0.4\" y=\"-0.5\" width=\"1.8\" height=\"2\" preserveAspectRatio=\"none\"/></pattern><filter id=\"r6-grabado\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feMorphology in=\"SourceAlpha\" operator=\"dilate\" radius=\"0.36\" result=\"grueso\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.879\" numOctaves=\"2\" seed=\"4\" result=\"ruido\"/><feDisplacementMap in=\"grueso\" in2=\"ruido\" scale=\"0.8\" result=\"roto\"/><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.0628\" numOctaves=\"2\" seed=\"9\" result=\"manchas\"/><feColorMatrix in=\"manchas\" type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.6 1.12\" result=\"desgaste\"/><feComposite in=\"roto\" in2=\"desgaste\" operator=\"in\" result=\"surco\"/><feFlood class=\"ilfl-tinta\" flood-opacity=\"0.8\"/><feComposite in2=\"surco\" operator=\"in\" result=\"hueco\"/><feOffset in=\"surco\" dx=\"1.1\" dy=\"1.1\" result=\"desplazado\"/><feComposite in=\"surco\" in2=\"desplazado\" operator=\"out\" result=\"bordeSombra\"/><feFlood class=\"ilfl-noche\" flood-opacity=\"0.75\"/><feComposite in2=\"bordeSombra\" operator=\"in\" result=\"sombra\"/><feComposite in=\"desplazado\" in2=\"surco\" operator=\"out\" result=\"labio\"/><feGaussianBlur in=\"labio\" stdDeviation=\"0.4\" result=\"labioSuave\"/><feFlood class=\"ilfl-papel-claro\" flood-opacity=\"0.5\"/><feComposite in2=\"labioSuave\" operator=\"in\" result=\"luz\"/><feMerge><feMergeNode in=\"luz\"/><feMergeNode in=\"hueco\"/><feMergeNode in=\"sombra\"/></feMerge></filter></defs><rect width=\"640\" height=\"640\" class=\"ilf-noche\"/><rect x=\"40\" y=\"40\" width=\"560\" height=\"560\" class=\"ilf-madera\"/><g transform=\"translate(320 320)\"><g transform=\"rotate(0)\"><path d=\"M0 -250 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(45)\"><path d=\"M0 -160 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(90)\"><path d=\"M0 -250 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(135)\"><path d=\"M0 -160 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(180)\"><path d=\"M0 -250 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(225)\"><path d=\"M0 -160 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(270)\"><path d=\"M0 -250 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><g transform=\"rotate(315)\"><path d=\"M0 -160 L38 -80 L0 -60 L-38 -80 Z\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"2\"/></g><circle r=\"92\" fill=\"url(#r6-foto)\" class=\"ils-oro-oscuro\" stroke-width=\"3\"/><circle r=\"80\" fill=\"none\" class=\"ils-oro-oscuro\" stroke-width=\"1\"/><g filter=\"url(#r6-grabado)\" class=\"ils-tinta\" stroke-width=\"0.5\"><text x=\"0.0\" y=\"-54.0\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOA</text><text x=\"42.4\" y=\"-36.4\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOM</text><text x=\"60.0\" y=\"6.0\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOG</text><text x=\"42.4\" y=\"48.4\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOR</text><text x=\"0.0\" y=\"66.0\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOL</text><text x=\"-42.4\" y=\"48.4\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOU</text><text x=\"-60.0\" y=\"6.0\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOI</text><text x=\"-42.4\" y=\"-36.4\" text-anchor=\"middle\" class=\"il-texto ilf-tinta\" font-size=\"14\">OOC</text><ellipse rx=\"20\" ry=\"11\" fill=\"none\" class=\"ils-tinta\" stroke-width=\"1.4\"/><circle r=\"5\" class=\"ilf-tinta\"/></g></g><text class=\"il-texto-foto\" x=\"584\" y=\"584\" text-anchor=\"end\">Fotografía del Laboratorio de la Jefatura · 21-VI-1927</text><g pointer-events=\"none\"><rect width=\"640\" height=\"640\" class=\"ilf-manila\" opacity=\"0.12\" style=\"mix-blend-mode:multiply\"/><rect width=\"640\" height=\"640\" filter=\"url(#r6-grano)\" opacity=\"0.14\" style=\"mix-blend-mode:multiply\"/><rect width=\"640\" height=\"640\" fill=\"url(#r6-vineta)\"/></g></svg>"
  },
  "sospechosos": [
    {
      "id": "ibarguren",
      "nombre": "Ernesto Ibarguren Sasiain",
      "edad": 58,
      "profesion": "Médico (expediente 003)",
      "foto": "img-doctor",
      "desbloqueadoPor": "p02",
      "biografia": "Médico de cabecera de la aristocracia que veranea en San Sebastián desde 1903; lo fue de la viuda de la villa que había donde hoy está el Atlántida. Médico de temporada del Gran Hotel desde que se inauguró, en 1912. Fuera de temporada, nadie en el hotel sabe muy bien dónde pasa consulta.",
      "coartada": "Dice que desde que acabó la temporada, a primeros de septiembre, no ha salido de la sierra, «lejos de los enfermos ricos», y que no ha pisado Madrid en todo el mes.",
      "motivo": "Recetó las gotas a la viuda en 1910 y a Varga en 1912, y firmó los dos certificados. Heredó de la viuda lo bastante para fundar un sanatorio.",
      "declaraciones": [
        {
          "texto": "¿El portugués de la 309? Lo recuerdo: un hombre mayor con el corazón cansado. Le receté digital, como a medio hotel. Murió de lo que tenía, señoritas. Y no, no lo conocía de antes."
        },
        {
          "texto": "Sí, Valhondo es mío, si a tener la firma en la escritura se le llama tener. Los libros los lleva la administración; yo llevo a los enfermos. De lo que se pague o se cobre allí, pregunten en el despacho de al lado del dispensario.",
          "desbloqueadoPor": "p13"
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d19UBkRIFlwTUQgUQltCREMERqfKERhVQENc9NUTXAQWXF8UF0ADRkxTD/XJBwMZAwxCUFVFAhFURVUKEkhHUxP1ng9EVApKXltEWFcUQlVVBken0EJJTVBVVFUHXRgFWUMQUwlBBxUYUgQWBw9WWhMHDEFYSUQaFVBfF1/6gRZWWhcAAUsXUFVdB1VWWxBDXw0TCQoQWUpZXhs=",
          "desbloqueadoPor": "p04"
        },
        {
          "texto": "dc1:d19UBkRIFlwTWgsUUVteX1WgngVDAxhuVENSVkZXXUFXXkRRFRUCAxgHWAdWXRhKE0IEXEsIBU8V9J1VAgES9IQWck1EcE0Z8YNEWfGdVFlVDBOm1EJrWVsRZlIEUksVX/ORWqSOSkZdRRX1xUZdV0YHDhVYBhACFVJTRQMAAg8TXEINEFZDWBNYBRRWURBmVxFUBU0=",
          "desbloqueadoPor": "p15"
        },
        {
          "texto": "dc1:dV9FDqeKQ1xdFFUNAwQQVVpDUAERFlFeXFJUUwkTXAQWVFVSE1sFD/uFDxYAAxhMCANCRlym1QxHVxYUR1wSU0BXFw4NSg5YE1oLV1pREFNZBFqn0EJNVhVFR1IIE1sOWBBFWkZXDwpUUxVTRBdNXEYMDRVcHQ0QQVMY",
          "desbloqueadoPor": "p16"
        }
      ],
      "notaDirector": "dc1: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",
      "preguntas": [
        {
          "id": "i-varga",
          "texto": "¿Conocía a Elías Varga antes de 1912?",
          "respuesta": "dc1:fVkZQzFXQ0lcRhBBVUHzmUVDXgUaDUoYVl5bFwNfGAJZQlFOpYYIRltXD0UFAlcCRg4NFU8MRAdaRRYTV1pXRR8WVg9ESwZaVkAFRl5REEkWAl9EAAdKTFxXXFQHQVQOGBBjXUZAFRJdUgRFRApdGRAHDBVWERYCFVVXF1MZU1oTV0QWCk0MFRNRCkfxnfOBUw1eAQ8DFBhERFAXH1wYDVcQXV0U9s9GSFkCWUo="
        },
        {
          "id": "i-frasco",
          "texto": "¿Miró el frasco cuando firmó el certificado?",
          "respuesta": "dc1:chZbAhcZF0tWR0RQVxRcURYOUqfSA1ZZGRFWWAgTTQ8WWF9ZBEcDRl1YQVMIRktMAw4NFUBFAQ8VRUMHVlBAU1BCWBFESQpdWvfNWlZbXVUWB1oXABBdW1zyhllKE00PWRBdXRRURgNUFhFDCBVXFUYMDRVVChdDU0RXFlFWQRgTcl4EDU0CVRNQARRRXV5TQwZdEAJCX1dBUEYbRkBdCEUQUVhGUaXLWQxBWgtGSUwDQg5QGQ0FAUf1mwQSXVNSXBZUFgVVEkxaURYUX/eZVF8AXEQHBxh9QENaRwcdGDJfEFZVCkEHBFlYQVELEllKSkIDQ1wXDQRAV0QJXRlXRFIWVhARVxdWE1mnmV0aEHxZQ1YWAk4YQRVfWhcKXBgJX1NVGg=="
        },
        {
          "id": "i-viuda",
          "texto": "¿De qué murió la viuda de la villa?",
          "respuesta": "dc1:d1NbQwdWEVhJ99daHhRTX1sMExQMDF0YUF8VUgoTSABGVVwUF0ADRl5fE1unzxYZMhAHRhkWAQ5UWFcWEl1XFlJeWAQLSkNAE0EKVRJaX1NeBhMVFgcYVloRRVYV8ItPFnxRFAdYCRRMVwtXCQlLGQoDQlBXAwERWFNEBBJAEk9cGhcAC1QMGVZYCFUSXFFS9c5SRAcLS0hAVEZDCR0YL1kQQ/fPFRcT+59BUxcWXUsHDEJa+sgWTQ=="
        },
        {
          "id": "i-legado",
          "texto": "¿Cómo pudo fundar un sanatorio con un legado?",
          "respuesta": "dc1:fVkXExFdBhcTcQgUXlFXUVIMEwAKDRhIVENUFwpcS0FCVUJGA1sJFRhPQVoFRkhLDw8HR1hFFApQUkQECRlXWhNEUhAQVkNVXBQUQUFbEEVYAhMMChJXTFBSVBcXRl1BW1UQWwBHAwVRUxNZCkZZVxIHERVdAEQSQFMWCVMZQl9XX1IRBRVDXF8UCV1BWV8QWwZARAcHVBhBVEZDB15dD0JfHBQFWghGVFkSFhQHSFwKBxEVQAREEVBSVwZGWFZZQBgXLwUZBVBBWaedHBRlXllDVQ0RD1kYWERWXwdAGAJZQ1FHRlAKRln10FlEF01cRgoHR1wBBU0="
        },
        {
          "id": "i-218",
          "texto": "¿Dónde estaba a las 02:45, cuando el detective bajó a la 218?",
          "respuesta": "dc1:ZlgXDqeQB1BQW0RQVxRYX0IGX0QNDRhdRkX2lkZAUQRbQEJRRlAIRktDQVURB0pNCU5CRlym1QxHX0IEQQMSU0BC9MJEXQxXV1FEWF0UXFxXDlIKTUJ5SUBUWVsHE1YOVVhVFAtQRgpUVwxXFglWF0YuDlBeEKfKFVcWCVMZAQYKFlZDCFgQGUdGAUcSTRBTXw1QC0MbGEFUEVtYRltZA/WdURQIVAIHGEcUU0QOWVoDEEwVfBYLQ1BFFhFdXV0WX1kXEhFcQ1xfFAxbRlFcEFgGUAEQC0xZFUJUVQNBFEFPEFxbRkQTAxhYBFUBFVFNBwxCQEoRAQdQRRg="
        },
        {
          "id": "i-gotas",
          "texto": "Treinta y seis gotas de más no son un descuido.",
          "respuesta": "dc1:fVkZQzdWDRlGWkRCU0dfEFIGEwUEF1kWFX4VQghSGAtXQkJVSBU2A0pZQVgLRlRYFUISQEoARBpaGhYcElhDQ1ZaWwJEVwxaW1FEWl0UVUNCAlEFQwdWGFlQFVQHQFlBRlFCVUZFCQhdRA1XF10YXBUNQllWRQAKR/WbBBJcXhZfX1URCxkHXF8UFFtAQFVCWU8TFwpCTFdRUEP0y1IYBE5ZQ0ADFR9GS19BVwgBTVADDEJZVkUIBlAWVQpcGVFDWlJWBwsX",
          "desbloqueadoPor": "p04"
        },
        {
          "id": "i-adela",
          "texto": "¿Qué sabe de la gobernanta?",
          "respuesta": "dc1:YkNSQwhVBk9SFBVBW1pTVRYC8NUMERhIXFVc9M9dXA5bVRBEA0cCpYtYQUYLFBhXCUIKVFsAFg5QFloJU1RTUlwWVhIRXA9VUhQKW1FcVRwWGhMVFgcYUFxLWhcEWl0PDBBJW0ZbCUZdRRVXBgcWGTcXBxVJBBcCFUVTFUZQV1tRRFJDB1YNGUBBRFxXRl1RWAIfRAYMGFVcEVZWFVIYBVMQXFVGRg8DSkQAGkQfGEgTB0JQVUUACkdTVRFdSxJYXBZbDERKAltWGkRnVxRcXxYAUggPDRhIWkNEQgMTXQ1aURBZAxUFB1RaABYLEkpYFUIBWkoEF00=",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "i-despacho",
          "texto": "¿Quién manda en los libros de Valhondo?",
          "respuesta": "dc1:dloXAgBUCldaRxBGU1BfQhpDUAsNQkhXUVRHFwJWGA1ZQxBVBUcDA1xZE1MXSBhgCUIEXEsIp8oVQ1gEElFbRlxCUgAFGRoZV1EXUFcUVV5CDF0HBhEYXlxDWFhGX1dBR0VVFAtQRhZXWARYRAJdVQcMFlAZEAoCFUBTHxJYXhZS9YYMShkwTBNQAUdCVVNYWUNWFxehmRhfRFtDCRNZQVtZEFAPRhYDVkUARA0JAhkJCwVaGRYRQ1j1lxRHUFxXE1JSQwFKAEtaVg1GElUQREQCRafKERhcUBFZVkZDWRNTVBwUHxWlz1QWDF8XRkxWFQcRGw==",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "i-farol",
          "texto": "¿Ha visto algo raro en el depósito este mes?",
          "respuesta": "dc1:dloXBwFJoIpAXRBbElFDRPXCEwENQlxdRkRGWEZXXRJSVRBFE1BGClRTBvXXRlRYRgENW10QBwBc9YULCRleWRNSXgkBGRoZX1tERldEWURZTRM9DEJVXRVQVkIDQEwOFlEQWAdGRgJRUxsWHUZWVkYPC0dWRRQMRxZaBBJPV1hHV1kCShkrWEoUB1tBVUMQRxZWRBYMGFX2mFFeBVwYAEZCVVoCUEYHGFgOFgkPSlgUTkJMGQkBQ1ZDUxZGWFwWVloXEBFcoIhcFA1TR1VcHg==",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "i-arkana",
          "texto": "Su firma está en un acta de 1909, junto a la de Varga.",
          "respuesta": "dc1:dlhDDApaBkoTTQUUXlsQQ1cBVgpNQn5RR1z2nkZQVw8WX1NcCRUHC1FRDkVEE1ZYRhIQWlQAFwIVR0MAElpAU/CbFxIRXENXRloHVRJZVRBVDEAQAhD7lVQRW1YCUhZBe1UQVwlGEqWLFhRYRAVdSxILBFxaBAAMGRZDCxJKU1hSQlgRDVZDQBNFEV1cV1UQV6CCCxBCS1FbEVFYFF5RExgQfltGWANGSEQEUREITFwIQhJaS0UIDEYWUgBf+pNFCRZWQxFXDBlfW0RRXEBVQkSgmkQaDRQYTBFUFwlHSgDUsJYUBxUJEkpXQVgLSA==",
          "desbloqueadoPor": "p15"
        }
      ]
    },
    {
      "id": "adela",
      "nombre": "Adela Urquiza Lasa",
      "edad": 46,
      "profesion": "Gobernanta del Gran Hotel Atlántida (expediente 003)",
      "foto": "img-adela",
      "desbloqueadoPor": "p02",
      "biografia": "Gobernanta desde 1920. En 1912 era la camarera del tercer piso: fue ella quien oyó al señor de la 309 y dio la voz. Antes de que abriera el hotel, de 1908 a 1910, sirvió de doncella en la villa de la viuda, la que estaba donde hoy está el Atlántida. La despidieron por carta, firmada «p. p.», por unas joyas que faltaban.",
      "coartada": "Dice que no ha salido de San Sebastián desde que entró en el hotel, en 1912, ni en invierno.",
      "motivo": "Tenía la llave maestra del tercer piso en 1912. En la villa, era ella quien le subía las gotas a la señora cada noche, y la echaron acusada de un robo.",
      "declaraciones": [
        {
          "texto": "Aquella noche llamé al joven detective de la casa, no al médico. No me pregunten por qué: el señor de la 309 me pidió a través de la puerta que no llamara al médico y que no abriera yo sola, que bajara a por el detective. Le hice caso. Bajé en el montacargas, que está pared con pared con la 309, y subí en él a por la maestra. Llevo quince años pensando que debí abrir primero."
        },
        {
          "texto": "De la villa me despidieron en 1910, por unas joyas que faltaban. Yo no las cogí. La carta la firmaba «p. p.», no sé quién. Al señor de los papeles no le vi nunca la cara: las gotas las recogía yo de la bandeja del despacho, ya preparadas, y las subía. Cuando el señor de la 309 preguntó por la señora, pensé que venía por aquello.",
          "desbloqueadoPor": "p09"
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d19UBkRIFlwTWgsUWlUQQ1cPWgAMQlxdFWJUWUZgXQNXQ0RdpZQIRlxTElIBRgkAV1BZFVwJRA72n1IMUVYSTxNaVkMMVglYE1ABFF5VEFNXEFJEBwtbXVsRREIDE0gARVEQVwdRB0ZLUxFCDQNVWxQHQlBXRTICWV5ZC1ZWHhZXWVkHARkQTBNcAUZfVV5RFgZARAYMXl1HXFBFBxNSBFBVHBQfFQMVTFNBV6fXVxkCBw4VCFVEAlkWBFEc",
          "desbloqueadoPor": "p13"
        }
      ],
      "notaDirector": "dc1:elhYAAFXF1wdFCFHRlVSURYGXUQGDhhMUENWUhQTSAhFXxwUElAIpZVXQVoFRlRVBxQHFVQEARBBRFdJEkpXREX1mgJEXA0ZX1VEQltYXFEWGhMAAgBZGFlQRhcBXEwARRBRFApURhBRQwVXXkZdVUYIF1BeCkQPVBZCF1NNUxZQWVoMREoMSkNRB1xdR1EQUgYTEgYQXFlRHxV7BxNOBERUUVBcFQMIGFoAFhIPVFUHQhBQWgoDoJhXFgZTXVMWXVlUCwEZD1hAFANbRlVDEFIGEwgCQlpZW1VQXQcTXARaEFRRFUUHBVBZTRYdBxhJFAcSVEsEAAJGFkYKQBlXWhNXRwwAXBFYV1tIFEsUXFFFQ0ARAaGVWQ4RW0IIUFlBWlUQQg9aRgpZFgJXFgcYERAHDPaUBEQPWkUWD0dcRFNAFlINRFoMWltRRFdXRkJRUgwTDAIRTFkVXVQXFkZdE0JREFADWUYCXUURVwcOVxBGG0J7dkU3IndzFjZnGXx5fnRlJl4ZEFATWAEUQkZVV0MNRwUNThj6nlRZFxVW+9BZQhBQAxUKCUsWEVcUA1RcFaDZGxkpBRAVXFkcU0oSR0ZTF6HPXwJVR1UGVVz2ixBFBhMCFgdKV1sRVlgIE1QAFkNV99daFAcYUw8WAQoYTRQHDA8ZBEQGWVpXRV5YElJWRUcKAFCgihP2z1FeFFJRWABcpthCSFdHEVZWFEdZQfSbQBpGRUikgxYRWRYXTVxGIzB+eCslQ1tZFhVdXfGbUhZTBgJcDV1WRghVEkdZXhYHVhcAF1pKXENGUl0TXRIWXFEUAlATAlkWEEMBRl1VRgQLW1gJRBNUUVdFGktXVVpUXhGnmENMXVVEV1NGRFEWB1ZELw1fSlryhFhPHRgtVxBeWwVdA0ZcUw0WVVIYXQNCEVBJEQ0GWFREABJdVxYCDwZTRFUKW0FVBlUIFENFFgtWFg4DVlkVY1pEBxNUBBZUWVtGUw8DS0IAGEQjVhlXW1MHGQcFCfaFFhwSSkdUWvWEQwFXQ1xfFAlbXEBRU1cRVAUQQhBIWkMVUhVcGARaEFpbEFAIRlxTFVMHElFPA0IMWhkWAUNWREMf8YoSVVxYFwYIVQIZVlpEWFMUVUNVAl8BEQMRFBVVXFhGX1lBQF9KFB8VBwRKX6KFRAVXV0YOAxVUBAEQQURXSxJqRxZbU0UOBVcCGWFbF1USUUMQUw1VAREPXUpUEV9SAFYYBVMQZlUKXQkIXFlBUgEVXFxGU1sECEUdQ1tZFglTGVZTWfWEQxJQEFBHVRZYUxRdWVMNRxYCERj6nl1UFxVW+9BZQlEUAlAKRmhXA1MICvuKCEIxQEun30NDX0Cmn1gSV19a9M5EEVIAAgWGtKEFCQIGSghEBwdLXFARBA5UAhggUlVcVUZFBxVZFhJTFBJRXAsAEFAZAApDY1daDV1XVlkTHlIQEFxDWPCFCxgSUFVcFlIDRAIOGAoBGBVORl9XQVlTRVgSVEYWV0QQQwFGXVVGCg1BXAlEDVoWWgASXVMWRVdUAgdQDFdWR0RNElFcEFIKQQEAFldKFV1UFwVBXQQWVV4UClRGBVlFABhEKFcZFQ0RRVwGDAIVUlNFXFhWX1YWUg1ETwxDE1UIQFMaEH9EBEYIDw1LWRkRWVIHXxRBVV9eFApURhBXTEFCAQtaVQkMAxVaEAUNUVkWDVNbXlcTUlJDBUgWXF9YBRRcW1NYU1gTFwZCV15QX1FSRkBRQVpREFUFQBUHVhYYFgEITFYIAQdGGQYFD1lXGA==",
      "preguntas": [
        {
          "id": "a-noche",
          "texto": "¿Por qué no abrió usted sola la 309?",
          "respuesta": "dc1:Y1lFEhFcQ/qaWERZVxRcXxYTWgAKoYsYVBFBRQdF+8hFEFRRRlkHRkhDBEQQBxQZBQ0MFUwLBUNDWUxFQ0xXFl1ZFwYWWENdVhQGW0BGUVNeDBMKCkJcXRVdWlQJCRijnX5fFApZBwtdFgBaRAv7kAILAVoXRSoMFVdUF1MZQVlfVxlDJlgJXBNVRERdRhBVWkNeEQAKWVtdXveMSBN0BBZYWVcDFQUHS1lPFigKXU8JQhNAUAsHBhVX9dRdShJGVlhEAgpdDBlCQQEUX1EQVUcWWhIME037nBFMFwlHSg5FEEFBD1sFAxhGBFgXB1ZdCUITQFxFCgwb"
        },
        {
          "id": "a-montacargas",
          "texto": "¿Por qué bajó en el montacargas y no por la escalera?",
          "respuesta": "dc1:Y1lFEhFcQ1xfFAlbXEBRU1cRVAUQQl1LQfKUFxZWXwBSXxBVRlkHRgsGWBYdRlRYRgcRVlgJARFUFlcJEl9dWFdZFwcBVUNJUkcNWF5bCxBGDEEVFgcYW1pfFVsHE1UAU0NERgcVAwgYWgAWCQdWVkYMDRVKAEQBVFxXRVMZXUVQQ0UCFwJDQBNEC0ZDQVUQWgJARAADXF1bUEYXDlJbBFgQRVpGRxMPXFlBRxEDGF0DERJcXBcQAhVXFghXXVtZE15YFwFVTxlKFAVFR1FcXFdDXQsACl0YWFQVUwdRWUFfV0VVChtGNVEWAFoDE1FcCEIPUBkKHaCGGhYIV1NdRB0="
        },
        {
          "id": "a-villa",
          "texto": "¿Cómo era el servicio de la villa?",
          "respuesta": "dc1:dloXAgBUCldaRxBGU1BfQhYPXwEVA1pZFV1UFwVSSwANEFVYRkUJFExTE1lIRlRYRhQHR1MEX0NZVxYAXF9XRF5TRQJIGQIZX1VER1f3gV9EAh9EDw1LGPaLWUMPXlcSFl1VRwNGXUZBWU0WCAcYSQoDDEFYRQAGFVdEF1tbUxgTbxcPC0pDU0ZRElFBFEZVWKCeBUMHVBhGVPaGCUEYBVMQXFsVFRYHSFMNUxdKGFwIQgFaWg0BQ1ZTRBdTXV0WW1dEFwUZD1gTRBFRQEBREFIGX0QHB0tIVFJdWEoTQUFYXxBYCRUQA/ubAFsLFRYZIgcIVFsERA9URRYCXU1TRRNGRQYUWBFYV1UXFFdaEEVYAhMGAgxcXV9QFU5GSldBWlFDFBVABKWVV08="
        },
        {
          "id": "a-varga",
          "texto": "¿Qué le preguntó Varga a usted?",
          "respuesta": "dc1:dloXExZQDlxBFAD3n1UcEEUKEx0MQlBZV/KYVkZAXRNAWVRbRlAIRlRXQUANClRYSEIuUBkBDQlQFkcQVxlB9Z4YFy4BGRNLVlMRWkb3gxBGDEFEDwMYS1DyhFgUUgJBRVkQRxNTFKWVV00WFw8YXBUWA1dYRRcMWVcaRUNMW/WaWBcPARkHWFFVRFhTRxBXWRdSF01CdF0VVVxdAxNJFFMQSVtKFR9GS1NBWwFGSUwDBqGGGQgNEVRYUgoSXVcWRlhWQwlYDVxBVURFR1EQXllDWwFDDVROXFVUUwkdGDFTXkP3zxUXE10WF1MKpZVYRhINRxkJBRAVXFkcU0ocFnJeWBEFGQ1WE0ennRJEX0IWEkanykJOXVvymFZI"
        },
        {
          "id": "a-septiembre",
          "texto": "¿Dónde ha estado este mes?",
          "respuesta": "dc1:dlgXBggZC1ZHUQgYEldfXVlDQA0GD0hKUB8VewcTTARbQF9GB1EHRllVAFQFRkEZCgNCVlgWBUNbWQxFWlhLFkJDUkMHVg1NUkZEWFMUQl9GAhMGDwNWW1QdFVQDQUoARBBVWEZUCgcYWA5EEAMUGQILEVZMEQ0RFVVZCxJVUxZfV0ECCl0GS/CZBRoSZEJVURZdEAYMGFlZEVFeFFZbFVlCHBQVXEYIVxYMU0QFSlwDDEw="
        },
        {
          "id": "a-carta",
          "texto": "¿Conserva la carta de despido de 1910?",
          "respuesta": "dc1:f1cXEhFcDvqaFAFYElDznVdDQhEGQl1WQUP2nkZWVkFTXBBcCUEDChYWLFNEB1tMAxAGWhkBAQ8VRlcVV1UIFl5TWgEWXBdcE1ABFEdaURBTDUcNBwNcGFFUFXUPX1oAWRwQUAlGRgr7mw9TBRUUGaTJEhsZFUqhjhZPRUdXUxZB9Y0BFlAAWB0UN10SRUVZUxFWCkMRWVpQQxVGE1r7yFgQXVFGUAUO+4VbFgoJGF8TB0JZWEUXBvaHWRdTFRJHRlMXGgUZDVYTRAtQ8ZlREFMAWwURQlkYW1BRXgMfGA9fEFVYRlQCC1FYCEUQFFldCRBOFUgQAUNYUxYJXlZA9YAWUg1EVQIZRVEWXlMa"
        },
        {
          "id": "a-timbre",
          "texto": "¿Dónde sonaba el timbre de la 309?",
          "respuesta": "dc1:dlgXBggZDF9VXQdRElBVXBYXVhYAB0pXGRFQWUZeUUFVRVFQFFpKRltZDFlEElddCRFCWVYWRAdQWhYRV0tRU0FZGUMoVkNW8JlEVRJYUUMWB1wXQxsYVVBVXFZcE14UUxBcW0ZFFA9VUxNZSEZZVxIHERVdAEQPVBZACkgXEnNfFkcRDVQGS1wUEF1XWlUQRRYTBxYDXEpaEUwXA18YElNXRVoCWkYDVBYSQx0JFhkjDEJQShEBQ11ZQgBeGVFXV1cXEwhYDU1SFAhYXUZREEUMXwVN",
          "desbloqueadoPor": "p09"
        },
        {
          "id": "a-lenceria",
          "texto": "¿Registró Bastarrica la lencería del tercero?",
          "respuesta": "dc1:YVNQChdNEVhBGERaXRoQZUUCQQgCThhL9pwZFx8TQQAWQFFTpYZGFldEQVMIClcXRi4DFVUACgBQRPXIUxlXRRNaVkMFVxdQVEEFFAEECRwWEFan0g1KUUFQRg1GUE0AWFRfFBdADxJZRA5YRANUGQih2FhcFwtDRVNSpp8ZV1oTVUICFk0MGUNVFlUSWFEQRAxDBUMAVFlbUlQXHxNVBBZcXxQCXAMUV1hNFhQJSkgTB0JbWAENBhVHQwBA+p9XE1JYEQlQERlWWkT3m1geEH4CSkQWDFkYQVBXWwcTXARaEFFGC1QUD1cWEEMBRktMAwwDFVhFDBZQVVlLEndHWFBXFw8FGQtcE1gBQlNaRFFSDB1EKwNBGFZeRlYVE0kUUxBFWgcVARNZRAVXRBVRV0YRA1dcF0QPWhZHEFcZVUNSRFMCSg==",
          "desbloqueadoPor": "p09"
        },
        {
          "id": "a-rosa",
          "texto": "¿Qué hace su hermana en Valhondo?",
          "respuesta": "dc1:fldZBwVLTRl2R0RRXFJVQlsGQQVDCF1eUBFRUhVXXUFHRVUUB1cUD/uFQU9EClkZpdgMXFoERBNQREUKXFgSVxNaVkMVTAYZVlhEUF1XRF9EQ1wGBgZdW1AfFXMTQVkPQlUQVaWECRUYWA4WCQMYXQMIoYYZDBZDVBZAAEBVUwwTUlIAp5QCGUJBARReVRBTVxBSRA0NGF1HUBVED0dRDhZAUUYHFRAPS18VVxdIGH0DEQZQGQAIQ0NTXwtGUEdYXBZBDB0ZAFhXVURHV0REWVMOURYGTBh2WhFFRQNUTQ9CXxBFE/bPRlBXA/XJBxhYCBYHRhkUEQYVT1lFXFYSRkZSXgYWWENPVkZK",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "a-joyas",
          "texto": "¿Qué joyas faltaban en 1910?",
          "respuesta": "dc1:ZlgXARZWAFFWFAdbXBRFXldDQw0GBkpZFVBPQgoTSRRTEFxVRkYDpYlZE1dEClRcEAMAVBkECENWQ1MJXlYSXlJFQwJEXA0ZX1VEV1NZURwWGhMRDQ1LGEVUW1MPVlYVU0MeFCBUChJZRA5YRApZGQgNAV1cRRUWUBZTCV5YEltGRF6g1wJDWBNYBRRBUV1RWAITCQZCXF1GQVxTD1ZKDlgQQFsUFQUHSkIAGEQ/VxkIDUJZWBZEAFpR9cgcGWsWQF8XEhFQBktWWkRZWxRfQF8NWqfQDBQYUVRGRxPwkRIWVFUUAlwDBVFFCFMQAxhYpdMNRgNFCgJRX1NFXlhBFlBZUAqnik0=",
          "desbloqueadoPor": "p15"
        }
      ]
    },
    {
      "id": "elosegui",
      "nombre": "Ramón Elósegui",
      "edad": 49,
      "profesion": "Director del Gran Hotel Atlántida (expediente 003)",
      "foto": "img-elosegui",
      "desbloqueadoPor": "p02",
      "biografia": "Administrador de la villa de la viuda de 1905 a 1910; vino al hotel con la venta de la villa, como subdirector de noche, el año de la inauguración. Director desde 1920; en 1925 dirigió la reforma que borró la 309. Fue él quien os llamó en agosto.",
      "coartada": "Dice que desde que acabó la temporada no ha salido de San Sebastián, salvo dos viajes a Madrid: está cerrando las cuentas del verano con los auditores.",
      "motivo": "Custodiaba el llavero de reserva en 1912. Lleva años nervioso con las cuentas, y la 309 la borró él.",
      "declaraciones": [
        {
          "texto": "En 1912 hice lo que me mandaron: que no hubiera escándalo en plena Semana Grande. Me despertó el timbre, bajé a ver si había vuelto el doctor y subí. La 309 se quitó en 1925 porque era la más húmeda del hotel. No hay más misterio."
        },
        {
          "texto": "¿El sobre de Bastarrica? El correo interno lo reparte el conserje y los casilleros están en el pasillo de servicio, al alcance de toda la casa y de medio hotel. Yo administraba la villa, señoritas: la casa, el jardín, la servidumbre. De los papeles de la señora no sé nada.",
          "desbloqueadoPor": "p09"
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d19UBkRIFlwTVRVBV1hcURYNXAcLBxhUUBFRUhVDXRNC84MUA1lGElFbA0QBRlxcRg4DFQpVXU0Vc1hFAwADBBNTRAZETQpUUUYBFEFbXlFUAhMBDUJdVBVeU1EPUF1BUlVcFBJQFAVdREFGDRVXGR9CB1sZCw0NUvWMCxJWRkRcFkQKEFAMAhP3zVgSUF9CW6CeBUMHVhhQXRVHFFpVBERfHBQfFQdGVFcSFlRUAg1eQhtUGQAXF1RUV0VXVxJaUhZHDwVXF1gTVgVeUxRAQlMERgoXA1ZcWhFFWBQTTQ8WXfOdAlwFCRhXDRYVE10ZCAMGXFxFDAJX9ZsEElVeV15XUwxK",
          "desbloqueadoPor": "p17"
        }
      ],
      "notaDirector": "dc1:elhYAAFXF1wTUAFYEldCWVsGXV5DB0sYWVAVRw9ATAAWVlFYFVRGJBQWDVdEF01cRgcOFVMQAwJRWURFRkxfVFIWUg1ESVIOHRQ2W1BVUlEWB1ZEDwMYW1RbVBcCVhgCV0VUVQpQFUYQWgAWBwdSWEYWC1BXAEQAWlhCBFZWQBZKFkUGA1UCVFZaEFsJFFZZRA5SBgJC+pNWXlhHFFxaAFVZ84cI991GW1kMWUQOWUulzwMVewQXF1RERAxRWBJHRl9ZAAEZAvqCWxcUVlFDQEOgmhdKQkEYWVAVWQlQUAQWVFVYRgdWRllaQQRVRlxcRgMFWkoRC0NRUxZUCwgAFlZFQxYSVkNcXRQIVRJXUVpXQ1cBQ1IKAgYEFVZGAwpbAgcLFBVUCg/7hUFGCxQYXApCFFBKEafOV0NaChJYElpSRRdTVgNXARNEFlFVQV5EVw1XC0MSV0oVVFkXAlxbFVlCEE1GRhMEUfXSFhQJShkKA0JFSwwKAFxGVwkSXVtVWlNZBwsZEkxWFAhRElxRUvXOUkQHB0tIUENBVgJcGARaEERdC1cUAwIWDFMKElFLB0ISVEsERA1aFlIAUVBAFlf1hA0AXENcQEAFVlMUGFVaQ0cNDgBKXRVVUBcKUhhSBgkQRwlbBwRZFgRYRANUGQkEBFxaAEQHUFoWEVdLUVNBWQxDp5APGVdbFlnxmVEQUw0TAQ9CSEpcXFBFCRoWQXJVEARXD1dWGFdBRgUVWV0HQg5UGRAKAhVPFghXXVtXE1NEFxFPDBlQWwoUV1gQQFkRRwERDRhdWxFZVkZDTQRERFEUA0YWA0pXD1ILRllVRgYNVk0KFk0VZUNFUUxeRlIWRQYFVVkZVkcFFFxbU1hTQ18BQwZRUloRVFtGW02in0NAUQIVAgMYWgAWVlcOGRcXBxVcCUQHWlVCCkAZWldR9ZoCREoCVVpQCxRLFFxVFgdWDqDRGFkVXFRZCRNUABZcXFUQUEYCXRYNV0RVCABGBgdZGQkIAkNTRAoSXVcWQVNEBhZPAhnxnxRVQFUQQUMGEwEPQktd9oBaRUZQVw9FVVpRFFpGDllUDVcWBxhaCQxCUFVFFAxHQkMCR/qbRRNXFxALVQJK8Y9fFEBRVFFVF/DXQwdUGEVQR0MDE0kUUxBWQQMVB0Z3Rg5EEAkDGR9CB0ZNAEQCUllFEV0VElVcWBcPBRkFXFBcBRRWURBcVxATBwIIUUxUQhVTA19ZD0JVHBQKUEYCUVwOFgVGXUoDQg9cSggLQ11D9cxBSVdSE0dCCqeQDRlWRgUUV1gQQ1OgggsRQklNUBFDUgjwlQAWU1FQBxVUVxhSBBYFAVdKEg1CTBkDDRFYV1QEEvuZcB0Wek2mgk0ZYHUmcRJFRVn1yl1EBhBZGFBdFVYWXFwERFFUW0ZRA0ZUV0FFAaWJVhQDQh1YAQkKW19FEUD6gRZfVxcVDVUPWBNXDVpRWxBR9dJcF0MGXRhfRFBBA0ARQU8QU1UKWQdGSFkTRxEDGF0DAQtHGQAIQ1tZWwdAXBJTQBZTBgdQERlfW0RQVxRcURYPXwUVBxhBFV1aFwJWGA1XEFNVDFRdRktfQVoLRllJFAsHQVgLXkP3nVoKQRlCV0NTWwYXGQdcE1gFFEFR84FZEVJEDw1LGFldUEEHUVlBU1wQVgdbBQkDFhhZRApUXBADAFQZCQVDVldFBPCCHBZ9Q1kABRkHWBNRCBRcW11SRAYdRCANSkz2mEYbRkBdE0BZU10HWUpGV1AEWAAPXFZdQhFQGQEBEUdDWwdTGUFfE1pSQxRWDVxdFA5BXEBfQxYGX0QPC1pKWhFRUkZfWUFVUVpVShUDChhaCFQWCRhdA0ISWksRARH2m1dFSxlXWhNGWwIKVkNdVhQIW0EURFlbAUEBEE4YQRVUW0MJXVsERRBTQQNbEgcYWg4WAAMYVQdCDllYEwFN",
      "preguntas": [
        {
          "id": "e-timbre",
          "texto": "¿Qué le despertó aquella noche?",
          "respuesta": "dc1:dloXFw1UAUtWFABRElhREAVTCkhDE01dFUJaWQdRWUFVX11bRkAIBxhVAFsUB1ZYRgYHFVgNCwRUUllJEkASWkZTUAxEVQJKE1cFRkBRQlFFQ1YKQw5ZGFBCVlYKVkoAFlRVFBVQFBBRVQhZSkZ1XEYSF0ZcRQgCFVRXEVMZSxZRV12gzRkCGVFBF1dTRhBRWkNXCwAWV0oOEVtYRlZLFVdSUQ9GRhME+5tPFiEVTPrHQgdbGQAIQ0VXRBFXGUNDVhZaAgpdoJATVUR7QltCRFlDSkQNDRhOWkgVVkZQWQxUWVFGRkAIBxhVDlsFRklMDwwBUBkEp9JaRRYBV0pCQ/CfRE0="
        },
        {
          "id": "e-llavero",
          "texto": "¿Quién tenía las llaves de las habitaciones?",
          "respuesta": "dc1:cFdTAkRRFvqaRxRRVhRcURYQRh0CThhUVBFWVgtSSgREURBHExULB11FFUQFRkEZHw1CUFVFCA9UQFMXXRlWUxNEUhABSxVYHxQBWhJZWRBVFlIWFw0YXFBdFUcUWlUERF8cFANbRhNWFgBECQdKUAlCAVpXRQgPVEBTSxJ4ElpSFloCp4gCV1IUF11VQVlVWBdWRA0NGF5UXUFWBFIYD19eV0EIVEYCXVpBWggHTlwUDUwVdQREB1AWWgQSCgIPE1JSEAVJAktWVw33gRRUVRYPUkQOB0tRWV1UFwJWVEFbRVVGElpKRlZZQVIBRlVQRgMQWFgXDQwb"
        },
        {
          "id": "e-caja",
          "texto": "¿Quién abría la caja de caudales de noche?",
          "respuesta": "dc1:fVdTCgEXQ3VSFAdVWFUQQ1NDUgYRBxhdWxFdWBRSSghZEFRRRlYHDFkaQVULCBhcCkIBVFMAFgwVUlNFVvqfVwgWUwZEVwxaW1FER11YXxBFChMRDUJQTfaYRkcDVxgNWRBAXQJQSkZBFhJTRAdWVhIDTBV8C0QCUllFEV0ZVlNfFlMMB1xDV1wUFlFRQVVCUgwTCgoMX01bUBsXNVoYBFoQXF0ERwlGXF8CU0QJTEsHQgFaSgRIQ1BaFglbW0BZE1pYQwdMAl1BVQZVElFcEFUCWQERDRY="
        },
        {
          "id": "e-309",
          "texto": "¿Por qué borró la 309?",
          "respuesta": "dc1:Y1lFEhFcQ1xBVURYUxRd85cQEwyg2FVdUVAZFxZcShBDVRBQB1cHRllaQV4RA1tWRgYHWRkICw1BV1UEQF5TRRNPFxMLSxJMVhQKXVxTRV5XQ0ABoNNXSlQRREIDQfvMVxBUWxRYDxQYUw8WEQgYWhMDEEFWRQAGWRZHEFcZV1oTRVIRElAAUFwUDFVQWFFSV0NWCkMUV0IVU1RdBx0YJFgQAQ1UAEYOUVUEFgsESlgVQhsVWBUWDENTVQ3xkBwWYFMXDwsZB1BZUURVXhRRQkcWWhAGAUxXFVJaWUZWSwBFEEBVClQEFFlFTw=="
        },
        {
          "id": "e-madrid",
          "texto": "¿Qué hacía en Madrid este mes?",
          "respuesta": "dc1:cFNFEQVLQ1VSR0RXR1FeRFcQEwAGDhhOUENUWQkTWw5YEFxbFRUHE1xfFVkWA0sZAgdCWVhFFwxWX1MBU10eFl9ZREMA+s5YQBRVBhJNEAEPTxMBDUJNVhVVUEQWUlsJWRBUUUZZB0ZbVw1aAUZcXEYjDlZYCafCGxZiAFxeXRZfWURDBlAPVVZAAUccFGkQVw9eCxEB+5EVQlpbCR8YEl8QVUcJFQMVGFoOFhUTXRkXFwtQSwAKQ0ZXVABAFw=="
        },
        {
          "id": "e-escandalo",
          "texto": "¿Quién decidió que no hubiera escándalo en 1912?",
          "respuesta": "dc1:f1cXEAtaClxXVQAUQkZfQF8GRwURC1kUFUFaRUZHXQ1TV0JVC1RKRlkWDVcXRlZMAxQHFV0ARA9UFlsE8YhTWFIYFzpEWA1NVkdERUdREFxXQ0ALAAtdXFRVGRcDXxgSU15EXQJaRgVXW6KMClwYTAhCD0BcFxAMFVJTCRJaXURSTPTQChkGVxNnAVlTWlEQcRFSCgcHGFZaEVBERl1XFV9TWVVdFRMIGFsUUxYSVxkCB0JaTRcFQ1ZZRQQSWltTQURWQxFXQ1FcQAFYHBRpXxYXVgqgz1kYQUNQXghHWUFPEFNBB0EUCRhXoocLFRhARgcQVBkWEQFRX0QAUU1dRBNSUkMKVgBRVho="
        },
        {
          "id": "e-villa",
          "texto": "¿Qué hacía usted en la villa?",
          "respuesta": "dc1:clJaCgpQEE1BVRYUXlUQU1cQUl5DDlkYUVRGRwNdSwAaEFxbFRUMCUpYAFoBFRQZCgNCWVgTBQ1RU0QEHhlXWhNcVhEAUA1cQVtIFF5VQxBVFlYKFwNLGFFUWRcC8JUAGBB0UUZZCRUYRgBGAQpdSkYFEFRXAQEQFVJTRV5YEkVW9YYMFlhPGV9bFxRWURBcV0NdBRULXUpUEUwXClxLQVJVEFgHFQ4DSlMPVQ0HFBkVB0JaWhAUAldXFgpGS10aE0dCBkRPBlfwmQUUXltDEFwWVhIGERhBFV9aFwtWGAVXUlEUCloVRlpDBFgLFRhdpc8DRhdFPQwVV1QX8ZRTFl9XFxMRXBFNUhQAUV4UVFVFE1IHCw0YQRVcUBcPUVlP",
          "desbloqueadoPor": "p09"
        },
        {
          "id": "e-sobre",
          "texto": "¿Quién pudo dejar el sobre en el casillero de Bastarrica?",
          "respuesta": "dc1:cENWDxVMClxBVURXXVoQVFkQExQKB0pWVEIbFyNfGBFXQ1lYClpGAl0WElMWEFFaDw1CW1ZFEApQWFNFQkxXREdXDEMIVhAZQ0YLQldRVF9EBkBEBgxMSlRfFUcJQRiin1wQTUZZCRUYXhT1zRVIXAIHERVKAEQTXFNEAVdXEkZcRBegzVVNGWBdREVHXVVCUw0TEQ0DGFRcQkFWShNdEkLzkRQDW0YLURYPWRAHAhkKA0JSXAsQBhVSUwkSXV1VVhZGFgEZBkpHVQZVElFeEFoCEwcCEVkYUF0VA0ZXXUFcRVxdCRtGK10WEUMXAxhcCkISR1AIARFaFkYEQFgSR0ZTFw0LGQdQVFUKGg==",
          "desbloqueadoPor": "p09"
        },
        {
          "id": "e-huesped",
          "texto": "¿Qué sabe de los huéspedes de la 216 y la 220?",
          "respuesta": "dc1:d1lEQwdYEFhAFABREnZZXFQCXEhDDldLFVxcRAtcS0FVRVFGEloVRltXBVdEB19WFRYNFV0AFwdQFkcQVxlTVEFfWgwXGRoZRloFFFRVU0RDEVJEEhddGEZUFUcHVFlBRVleFAtcFAdKGEFjCgkYXBVCAVpXFgEJUERZRVZcElpSFkQMB1AGXVJQRE0SWVUQWgwTFgYBTV1HVVQMRlZUQVlEQltGWwlGUFcDWgVGW1YIQgxUXQwBQ0wWVQBcWBJTXRZEFkRaFlhBQAsaEnFDRFNDUgMMEUxXGRFWWAgTVA4WVFUUClQVRltXC18QB0sVRhcMWhkBAUNQWloKQRlfUxNGRQYDTA1N8IdERF1GEFVaQ0ABoNNXShVAQFJGRV0P9Z1RFAVUAgcYBFAWHUZeUBQPA1dYRabIcxgWKBz7iRgTelJDAFAJXBNYCxRDQVUQRQJRp84DAhhERFAXA0FZQVNcEFADQQMFTF8XU0QCXRkKA0JWWBYFQ1FTFlQLCAAYE3hYQxf6yhlDVRZVEkVF859DQhEGEPuVVBFGVgRWSg1ZHg==",
          "desbloqueadoPor": "p15"
        },
        {
          "id": "e-jueves",
          "texto": "¿Quién venía los jueves a la villa?",
          "respuesta": "dc1:ZlgXEAH60lZBFAdbXBRAX1IGQQEQQkEYVl5bFxZBURJXHBBRCBUTCBhVDlUMAxhaAxAQVF0KSkNsWRYJVxlTVEH1mgJEQENUVhQNVlMPEPOfDxMXBkJJTVBVVFUHE00PVxBYWxRURgVXWEFaBUZLXKXTDUdYRR1DWVlFRUJYQlNfU0RPREBDWBNYBRRBUfOBWRFSRA8HGFxUU1QXCkZdBlkQQFsUFQIJSlsIREpGa0xGDA1YWxcBQ1lZFhZTW0D1khZSD0RLBl5aRxBGXRgQQUMGExQCEFkYUEJaFwNATKKXHhBtCRUICRhaDhYUFFdXEwwBXFZfRA5QFlUKXlZR9YAWUg1EXBBNVhQMW0ZRXBBPQ14BQxJNXVFUFUYTWkwARB4=",
          "desbloqueadoPor": "p16"
        }
      ]
    },
    {
      "id": "echaide",
      "nombre": "Saturnino Echaide Mendía",
      "edad": 45,
      "profesion": "Administrador del Sanatorio de Valhondo",
      "foto": "img-echaide",
      "desbloqueadoPor": "p09",
      "biografia": "Cajero de un banco de Bilbao en su sucursal de San Sebastián de 1904 a 1912, un muchacho que no levantaba la vista de los libros. En 1912, cajero de día del Gran Hotel Atlántida, puesto por el banco. Desde 1920, administrador de Valhondo con poder del banco acreedor; audita además las cuentas del hotel cada julio. Su despacho está junto al dispensario del sanatorio.",
      "coartada": "Dice que en septiembre no ha salido de Valhondo más que a Rascafría, a por el correo, y que el coche del sanatorio baja a Madrid dos veces al mes a por medicinas, con el chófer.",
      "motivo": "Un hombre del banco en todos los sitios donde pasan cosas: la villa, el hotel, el sanatorio. Conoce las gotas y maneja la cuenta de dirección.",
      "declaraciones": [
        {
          "texto": "Audito las cuentas del hotel cada julio por encargo de los acreedores de la sociedad. El 4 de julio estaba en la casa, sí; también el conserje, la gobernanta, el médico, el director y cuarenta huéspedes. En 1912 yo era cajero de día y dormía en la ciudad: de aquella noche no sé nada."
        },
        {
          "texto": "En Valhondo mando en los libros, no en los enfermos. Los traspasos de la cuenta de dirección los firmo yo porque alguien tiene que firmarlos. ¿Un farol en el depósito? El depósito está en desuso desde que llegó la conducción.",
          "desbloqueadoPor": "p13"
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d19UBkRIFlwTUQgUUVtTWFNDVwEPQktZW1BBWBRaV0FFX1xbRlcHDFkWABYpB1xLDwZCVBkVCxEVW1MBW1pbWFJFG0MAXENd8JkFFEsUU19YQ1YIQwFQ+4ZXUEVdE10NFlRfVxJaFEZUWUFADQkYTwkOFFBLRRcKWxZQBEBWQRZfVxcOBV0RTFRVAFUSUFVcFlIERAcHGEtQQUFeA15aE1McEE1GVBcTXVoNV0QVXVQHDAMVVwQAClAWUwsSb1NaW1lZBwsZC1hR98lVEkRVVF8HXEQOB1xRVlhbVhUd",
          "desbloqueadoPor": "p20"
        }
      ],
      "notaDirector": "dc1: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",
      "preguntas": [
        {
          "id": "x-julio",
          "texto": "¿Qué hizo en el hotel del 1 al 6 de julio?",
          "respuesta": "dc1:ckNTChBYEQMTWA1WQFtDEFIGEwcCCFkUFVJAUghHWRIWVFUUDkClz0tGBFIBFRQZFhANQ1wAAAxHU0VLEmpbU0dTFwenlAJKE1UIFFP3gV8WB1YXBwcYCQwDBRtGQ1cTFlVeVwdHAQkYUgQWCAlLGQcBEFBcAQsRUEUWAVcZXlcTRVgADVwHWFcaRHddWfOdFgZdRAYOGFtaXFBTCUEYBVMQQ1EUQw8FUVlBT0QCV0sLoc8VXAtED1QWB1QGFRJHRlMXBhcZD1gTRRFREllVEFICXUpDJ1QYARFQRBJGTgQWVV4UClRGBVlFABpEFfuUXUIOWhkNAUNRX1UNXRlLFl9ZFwUNSw5WHQ=="
        },
        {
          "id": "x-1912",
          "texto": "¿Qué recuerda de la noche del 20 al 21 de agosto de 1912?",
          "respuesta": "dc1:fVdTAkoZJktSFAdVWFFCXxYHVkQHoZVZFUgVUwlBVaKbURBRCBUTCFkWEVMKFVH61QxCUVxFCAIVVVcJXlwSUlYWZAIKGS5YQVcNVV4aEH1TQ1YKFwdK+5wRUFlGVlRBUlVDVR9ACAkUFgJZCQkYTQkGDRVcCUQOQFhSCh4ZVlMTR0IGREwNGUNbFkBHU0XznxATDAIA+5VUEVhCA0FMDhZUVVhGVgkUWUyihQpIGHoTAwZH+sxED1QWVQRYWBJXE1pWEERXFlxFUURNElxRUvXOUkQWDFkYVEFQRRJGSgAWVFUUC1QCFE1RAFIFRktQCEIEXEsIBVgVWllFU0lHWEf1nkMdGQ1YV10BFF9REFxZQ1IDEQNcXVZY9oRI"
        },
        {
          "id": "x-correo",
          "texto": "¿Quién lleva el correo a Rascafría?",
          "respuesta": "dc1:alkbQwhWEBleVRZAV0cQSRYPXBdDFFFdR19QREoTXQ8WVVwUBVoFDl0aQVULCBhcCkIBXfrWAgZHGBYgQRlHWBNGVhABVkNdVhQSUVtaRFUWDloKFhZXSxVIFVIKE/vbWFlTW0ZHBxJXFgVTCEZc+ssDQlBXRRUWUBZYBFZQVxZHWUQGShkmVRNXC0ZAUV8QUgYTCAJCW1lGUBVBBxNdDxZFXlVGRgcFWRYCUxYUWV0HWUJZVkUVFlAWWwBGWBJVUlJWQwdMAlUTUQoUXlUQQ1cAUkQGERhbWkJUFxVGQQAY"
        },
        {
          "id": "x-coche",
          "texto": "¿Cuándo bajó el coche a Madrid por última vez?",
          "respuesta": "dc1:dloXUlEZGhlWWEQGCxRUVRYAUgACQlVdRh0VVkZDVxMWXVVQD1YPCFlFTRYAAxhdpc8DFUBFBwxbFlMJElpa9YBQUhFfGQZKR/fFFFdaEFVaQ18NARBXGFFUFUQHX1EFV0McFBdAA0ZUWgRAC0ZBVkhCMVwZAAhDVllVDVcZQVdfX/TQRFYXS1IUCltRXFUcFg1cRAUXXRhWXlsXC1oYB19CXVVI"
        },
        {
          "id": "x-1904",
          "texto": "¿Cómo era el trabajo en la sucursal de San Sebastián?",
          "respuesta": "dc1:f19VEQtKTxlfXQZGXUcQSRYWXUQJB15dFUBAUkZfVARRUVJVRlRGCllFQVINA0IXRjsNFU0ACqCYVxYTV1BcQlpCRaDNSkNY8IULRxJNEF5ZQ18BFQNWTFRTVBcKUhgXX0NEVUgVJwVXWxFXp9dZWwdCAxVVChdDRlP11F1LV0UTVxcPBUpDX1pGCVVBFFNfWENfBUMBWUpBVEdWRlddQVpfQxQCWgUTVVMPQgsVGEBGBxFFXBcFAVQWUwsSXF4WQ1dECghVDBcTdRRGV1pU85tDUkQGEUhdR1BHGUZ2S0FaXxBFE1BGC11cDkREDlleCUw="
        },
        {
          "id": "x-yoksrio",
          "texto": "¿Conoce a nuestro padre?",
          "respuesta": "dc1:d1MXDQtUAUtWGEREXUYQXFkQExQGEFH7hlVcVAlAFEFVX11bRkEJAlcWBFpEC01XAg1CUEoRAUNU9YcKHBlrFldTFxUNShdYHxQVQVtO85EMQ0YKQxFd+4ReRxcFXFZBRV9dVhRQFAkYRxRTRBZZSqXRQkVWF0QGWRZeCkZcXhZWWhdRVRkHXBNVA1tBQF8QRhFWAxYMTFlbVVoXFlxKQVVfQ1UVFRAPXVwARUpGa1BGBxBUGabNDxkWWAoSUVNUX1daDBcX"
        },
        {
          "id": "x-cuenta",
          "texto": "¿Por qué pagó Valhondo la estancia de la madre de Mercè Puig?",
          "respuesta": "dc1:alkXBQ1LDlYTQBZVQURRQ1kQCEQNDRhIR1RSQghHV0FXEEFBD/bPCBhUBFgBAFFaDwMMGxkgCENURV8AXE1dFgIHBUMSXA36nlVEW0BQVV5XB1xEEw1KGFBCVkUPR1dBUlVDUAMVBxRKXwNXSEZbVgsNQlpNFwsQFVtDBlpWQQwTWlZDB1gQWBNADVFcURBFWAITCwEQWRhGXlZeB18YBV9DU0YDQQdIGHcTRA0EWRVGBwwVXBYQAhVVVxZTFRJTQBZSD0RYAEtWUQBbQBoQfFdDXBYHB1YYUEJB9McTXQ8WRV4UB0cFDlFAAFILFBhARgwNFVUERBBUVVlFQVBcFkBDFxMBSw5QQFtK",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "x-maquina",
          "texto": "¿Hay máquina de escribir en Valhondo?",
          "respuesta": "dc1:d1lEWURVAhle98lVEk0QXFdDVwFDDlkYUVhHUgVQUaKFXhBZpZwCD1tXTRYVE10ZCA1CQEoERA1UUl8AEkldREJDUkMBVUNdXFcQW0AUVUNVEVoGBkJZGEVdQFoHHRgtVxBd98tURgNLFhRYBUZtVwIHEEJWCgBDUVNaRVZQV1VaWEIGElxDWlxaRFhTFFUQVw9UC0MBWfuYVVQMRl5dQVpREFkHWwIHSlkPFgADGFUHQhFAWhAWEFRaFgZHWFxSXBZaBkRdBkpHXQpVQFteEFcSRqfOTA==",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "x-deposito",
          "texto": "¿Quién tiene la llave del depósito?",
          "respuesta": "dc1:dkVDoMUZAFZfUwVQUxRVXhYOWkQHB0tIVFJdWEZXXRJSVRBFE1BGFV0WAlMWFPuKRg4DFVgGARJAX1dJElpdWBNaVhBEXQYZX1sXFFNYXVFVBl0BEEwYdlRVXFJGX1lBRllUUUgVIwoYUgRGp9VLUBINQlBKEafCFUBXBvGUXRZKFlsCRFwQWlJYAUZTFFRVFgdWChcQVxQVQVpTFFpcAAwQQEYJXQ8E+5tBUwoSSlgUTEJmUEUMAkwWWhBIGVNe8JsXBwFXF0tcGERHV0bzkRYPUkQPF1ZZFVRbFwNfGBdTXkRVCEAFCRY=",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "x-portales",
          "texto": "¿Ha estado alguna vez en Logroño?",
          "respuesta": "dc1:dlgXAgZLClUfFABbQRRU85sCQEhDEldKFURbVkZbXRNTXlNdBxUXE10WBFpEBFlXBQ1CVF0IDQ1cRUIXU1tTDBNDWQJEWgJKUhQAURJYURBVAl8IBkJoV0dFVFsDQBgCWV4QQQhURghXQgBEp8tZGQMMQlBVRRQRXFtTF10XEmZBU1AWCk2gkBNEC0YSUVwQWAxHBRELVxhUEUBZBxNIDkREVUYHFQIDGFoUQgtGQRkLB0JRUA8LQ0RDU0VXSkZXUVcXBwEZFVBSXgEaEnlVEEAMXxKgzxhLXF8VQQNBVA4YEGVaRkMPB1JTQV8KpYJNDw5OFV0ARA9aRRYUR1wSQ11ZFw0LGQJJRloQVRw=",
          "desbloqueadoPor": "p16"
        }
      ]
    },
    {
      "id": "rosa",
      "nombre": "Rosa Urquiza Lasa",
      "edad": 48,
      "profesion": "Enfermera jefe del Sanatorio de Valhondo",
      "foto": "img-rosa",
      "desbloqueadoPor": "p09",
      "biografia": "Hermana mayor de Adela. Enfermera de la viuda de la villa en 1910, en sus últimas semanas. En Valhondo desde que abrió, en 1911; enfermera jefe. En agosto de 1912 pasó una semana en el Atlántida «visitando a su hermana».",
      "coartada": "Dice que en septiembre no ha salido de Valhondo: tiene el Pabellón Sur lleno y a su hermana de visita del 10 al 24.",
      "motivo": "Estuvo en los dos sitios en las dos épocas: junto a la viuda en 1910 y en el hotel la semana de 1912. Y miente sobre el Pabellón Sur.",
      "declaraciones": [
        {
          "texto": "Atendí a la señora en el pabellón alto de la villa las tres semanas que duró aquello, con el doctor. Abajo, en las firmas y los papeles, no bajaba nunca. Murió del corazón la noche del 14 de septiembre, y la amortajamos el doctor y yo, como ella había dispuesto."
        },
        {
          "texto": "¿Una «señora del Pabellón Sur»? En Valhondo nunca ha habido ninguna señora en el Pabellón Sur que no fuera una enferma del pecho como las demás. Quien les haya dicho otra cosa no conoce la casa.",
          "desbloqueadoPor": "p13"
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d19UBkRIFlwTWhFaUVUQWEMBXEQWDFkY95pGUqWCVxNXEFRRChU2B1pTDVqn1VYZNRcQ94JeRA9URRYV8ZhVX11XREMAXBBJVlMFUFNHEFRTDxMHFgNcXUdfWhcCVhggQ0JVWA9aRgpZFhJfEKWCWAhCA1lVpslDUVMWVAsIAxZSFgZaVglPGVBbChRgW0NRFgdWRAYMXl1HXFBFBx0=",
          "desbloqueadoPor": "p16"
        }
      ],
      "notaDirector": "dc1:elhYAAFXF1wfFB0UXlUQ84wPRw0OAxhIUENGWAhSGAVTXBBZE1sCCRhHFFNEF01cFBChmFhFCRZQREIKElgSYFJEUAJeGQVMVhQBWBJXX0JEBlxEBgxMSlARWVZGQF2ih19CVUZMRiNU9cxXF0ZdV0ZTWwQJRUwNWhZTFhJdVxZyZHwiKnhKFRNQDVsSUllVRRdSRAJCS00VWVBFC1JWABZcURQIWgUOXRYFUwhGCQ1GBgcVSgAUF1xTWwdAXB4WUlVYDhRYoIjwh0RVElhREEUG8NUMEFkYUF8VUgoTTBNTXhBQAxUKBxhYDlUMAxhYRi4NUksKp9JaFk9FRFZeQFr1hEMBV0NcXxQURltZVUIWF0EBDUJIWUdQFVYLXEoVV1pRRkZACAcYVQBcBUZOWAWhz1QZBgsNFVNaRVZWUUJcRBlDIVdDb1JYDFtcUF8QVRZaAKDRGFxQEfecClIYElPzgVsUVEYCXVpBZgUEXVUKodFbGTYREfeNFgFXGQMPAgcXAkQIWgsDFB0UXFsQVFMJ8NdDE01dFUJAFw5WSgxXXlEUClRGEFFFCEIFFFkZCwsHW00XBRAVU0URR09dFlJaW6DJAkNYE1cFWVBdXxBaBhMHDAxLUVJEXPTVE1QAFkBcVRxURgJdWkFeCxJdVUYHDBUIXFVRFUZZFxJUV1JaWRcHAVVDXVxXEFtAGhB1WENSAwwRTFcVVVAXVwoJUxZWRVFGVApGUFkVUwhGWRkKDgdDWBcIBhVXFiBe+p9XQBZCDQUZDVZHVURQVxRcURYQVqfSDUpZFRn3nApSS0FVUUJAB0ZGA0tCopcKRl1XRgcOFUkEBgZZWvXWXBUSQlZEVAYWWENNUlYIVfCPGR4WLloBDRZdGEZeV0UDE10NFmBRVgNZCqWLWEFlERQYSQcQAxVJFwsXUFFTFxJYElpSFkQGp4gMS1IPREQDAhBGQwZfEgZCS00VXFBZElpKABZUVVhGRwMQ+58SGEQodxk1IyBwGQAIQ1tZWwdAXBJSVloXAhRWB1xBVQBbCBRRRFMNV6fOAxhZR0NcVQcTQUFYXxBWB18HBFkWABYIB0sZAAsQWFgWX0NGXxYJVxlCRFZRQg0QWA0VE/bPUV4UVFUWD1wXQxJZSFBdUERKE10NFkFFUUZDAwj7mwAWCAlLGQwXB0NcFqbYGxZlAFFYHhZVX0UOAQJDSlYUBVZeVV5UV0NACw8NGEtcEVlSRltZA1pRXhQCUEYKWRYSU6fXV0sHQgFaVApEB1AWVwlVTFtTXRZBChJWTQ==",
      "preguntas": [
        {
          "id": "r-senora",
          "texto": "¿Cómo murió la señora?",
          "respuesta": "dc1:d1NbQwdWEVhJ99daHhRREFoCQEQMDFtdFUgVUw9WQkFSVRBYBxUICVteBBpEBVdXRgcOFV0KBxdaRBYcElpdWF5fUAxKGTBcE1gLFFZdWlUWAl9ECRddQhVUWxdXCglRFkkQRwMVCgkYUghRC0ZZGRMRFlBdABdNFWVfRUNMW1NBU1lDFUwGGV9bRFBbU1EQWRdBBUMUXUIVUlpZRlxME1dDEEQHWQcESlcSGkQIVxkKAxEVTQAKBFoY"
        },
        {
          "id": "r-adela",
          "texto": "¿Por qué no dejó a su hermana visitarla en Valhondo?",
          "respuesta": "dc1:Y1lFEhFcQ0xdFBdVXFVEX0QKXEQHBxhM9pxGXgVcS0FYXxBRFRUVD0xfDhYUB0pYRhcMVBkIEQlQRBYWU1dTFlBZWUMIVhAZQ0EIWV1aVUMWB1ZEDgsYUFBDWFYIUhRBTxBAWxREEwMYQw9XRANWXwMQD1BLBEQJUFBTRVxWEkZGU1MGRE0GV1ZGRFUSWFEQUAJeDQ8LWRhFXkcXClxLQUZRQ10KWQkVFhYlUxcCXRkDDkJDXAwKF1xDWAoST1tTXVMXBgoZEFxDQA1RX1ZCVRpDUBECDFxXFV1UFwVSSwAWVUNApZRGC11SCFlEEFlapc8DGxkkChdQRRpFXFYc"
        },
        {
          "id": "r-1912",
          "texto": "¿Qué hacía en el Atlántida en agosto de 1912?",
          "respuesta": "dc1:ZV9EChBYERlSFAldElxVQlsCXQVPQklNUBFUVAdRWQNXEFRRRlAIEkpXExYAAxhaBw8DR1wXBUNMFlgKEkpTVPCbVkMKUENdXFYIVUAURV5XQ0CnwgBZVlQRUVJGW1cVU1weFCJaFAv7m0FVDQhbVkYMDVZRABdDUFgWAF4ZU1pSFlMGREoGS0VdB11dGhBpFhDwyU9CTlEVUFkXFlxKFUNXRffPRlxGTVhBXgsLWksDQg9UQAoWQ0RDU0VCS1dRRlhDAgZYQ0lcRkRBXFUQXUMGQRACTBhwVFNZ9M8TWw5YEPOdChUTCFkWF1MeShhcCEIHWRkPBRFR9ZsLEk9bU1lZG0MdGQ9cE1ANXlcUXF8WEkYBQwpZWvacVBcXRl1BUlVTXRRZA0g="
        },
        {
          "id": "r-gotas",
          "texto": "¿Quién preparaba las gotas de la señora en la villa?",
          "respuesta": "dc1:alkbQwhYEBnwjghAW1lRQxYXQQEQQktdWFBbVhUfGAJDUV5QCRUDChhSDlUQCUoZCwdCRUwWC0NUFkUQElVTUlwYFyIKTQZKE1gFRxJQVVpXAVIKQxJKXUVQR1YCUktBV1JRXgkZRgNWFgRaRAJdShYDAV1WSUQaFVtfRVpcQFtSWFZDCFgQGUBBBvefVR4QcgZAAAZCSU1QEVlWFRNIE1NAUUalnEYfVxpBWgVGS1yl0w1HWEUAFkdbX6aBGV9TWVlFTURqAkhGUQoUXlUQU0MGXRACQklNUBFEQg9WSgBYHg=="
        },
        {
          "id": "r-elias",
          "texto": "¿Conoció a Elías Varga antes de 1912?",
          "respuesta": "dc1:cFlZDAf6zhlSFBFaEldRQkKggAMRA15XFUFaRRJGXxT1mUMUF0ADRl1FAkQNBPuUB0IDFVUERBBQ9YcKQFgSVVJEQwIXGQBWXRQRWhJYUVNEBhMGDAxRTFodFU5GVlQNVxBcVRUVCgP7mwAWAAlLGRAHAVBKS0Q6WhZaCVdPU1RSFlsCFxkRXEBEEVFBQFFDFgJfRAANSkpQXhVHCUFJFFMQVVpGUApGXFMSRgUFUFZGBgcVWAcFCVoWRQASVVf1nldZQwhWEBlAWwZGV0ceEGUKEwEQDRhdRhFWWAhcWwREXF8YRlkJRltZD1kHpZUX"
        },
        {
          "id": "r-pabellon",
          "texto": "¿Quién fue la señora del Pabellón Sur?",
          "respuesta": "dc1:fVdTCgEXQ3xdUgFGX1VDEFIGX0QTB1tQWh0VQQNaVhVTEFFYRlSl11caQVULCBhXCQ8AR1xFHUNURlMJXlBWWUAWUg1EXA8ZX10GRl0UVFUWCl0DEQdLV0YfFWQPE00PVxBUUUZQCgpZRUFaARUYSQcQB1ZcRabIWVcWFlf6g1lBV/XYSBkTS1ZTp45cQFVeWgYTBQ9CVFFXQ1oZ",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "r-deposito",
          "texto": "¿Ha visto la luz del depósito?",
          "respuesta": "dc1:ZVNYQwhMGRlWWkRZR1dYX0VDQA0XC1dLFVAVWwdAGBVEVUMUAlBGClkWDFen11lXB1hCUFdFAQ8VZlcHV1Ve9YBYFzARS08ZV1sKUFcUXF9FQ16nzg1LGFteFVMTVkoMU14cFB8VAwgYWgAWBwdLWEYGBxVVBEQHXERTBlFQ8YVdGhcHC1cHXBNRCBRTUF1ZWApAEBEDXFdHEUFWC0NXAlkeEHEKFQIDSPXSRQ0SVxkXFwdRWEUABkFE9cRBGVZTE1pYEERJCldcR18UVlFDVFNDXg1DFF1WQVBbVkZdV0FFVRBCAxtGNVEWAFoDE1FcCEIOWhkNBUNDX0URXRlXRRNTW0MAVgBNXEZIFENBVRBbCkEFQwNUGEVYW1YUE1wERVRVFBVARgVNVxNCC0ZBGQoXB1JWRQAKVlMWFEdcElhcFloKFlhN",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "r-1920",
          "texto": "¿Qué pasó en Valhondo en 1920?",
          "respuesta": "dc1:YkNSQwhWEBlSVxZRV1BfQlMQExQWEVFdR15bFwcTSxQWWF9ZBEcDRl1YQVoFRltYFQNOFVoKCkNAWBYBV0pCV1BeWEMFVUNVUlALFFZRXBBSCkAUBgxLWUdYWhcfE1QARRBcWAdDAxUYUgQWEAlcVkhCJ1kZAQsAQVlERVZcWPWAFlMGRF0MS15dFhoSbV8QVQJeBgqhkRhUEUBZBxNIAFVZVVoSUEYCXRYSXxAPVxVGAQ1YVkUXBhVeVwZXGVFDUlhTDERcDU1BVURBXFUQU1kRQQ0GDExdFVVQFwdaSgQY",
          "desbloqueadoPor": "p13"
        },
        {
          "id": "r-tren",
          "texto": "El tren de la noche salió a las 22:40.",
          "respuesta": "dc1:YPWaTURxAlrwmQUUVEbznVlDQwURAxhLUEFBXgNeWhNTEEkUClRGFV310FkWBxhXCUITQFAWC0NYV1gRUxcSeFwWWgZESRFcVEEKQFdaEF31wkBeQxJKV1hUQfTLE1sAWlxRRkZdBxVMV0FHEQMYXAoOAxVUAEQHXFxTF1MZXlkTVVgNEEsCS1pbSBRLFFVeFgdaAQALS1FQRVAXB/CJDkUQXltGWANGUFdBUg0FUFZGDANRWEtEM0dTUaaIV0ZTXUVSDwsZAhlWWAhVHhRDWRYQUgYGDBhc9oJbUwMd",
          "desbloqueadoPor": "p16"
        },
        {
          "id": "r-sobre",
          "texto": "¿Qué sabe de las joyas que faltaban?",
          "respuesta": "dc1:YkNSQwpWQ19SWBBVUFVeHhYyRgFDC1pZWxFRWAhXXUFfUlEUFUBGAk1ToocFShhcCEIXW1hFBgxZRVdFVlwSQlZEVAoLSQZVXBhETRJFRVUWAhMJCkJQXUdcVFkHE1QAFlVTXAdHCQgYRg5ERANUVQcRQkwZHAtDW1kWFUddVxZXU1QKFhkWV1IUFFVeVVJCV00TIRBCVFkV8o9ZD1BZQVVfQ1VGUQNGWUcUUwgKWRkIDQFdXEUABhVaV0VDTFcWXlMXAhZLBklaUQpAXRo=",
          "desbloqueadoPor": "p16"
        }
      ]
    },
    {
      "id": "garmendia",
      "nombre": "Leopoldo Garmendia Urquijo",
      "edad": 61,
      "profesion": "Banquero de Bilbao (expediente 001)",
      "foto": "img-garmendia",
      "desbloqueadoPor": "p13",
      "biografia": "Banquero. Financia excavaciones desde que su mujer murió, para que su nombre quede en algún museo: fue mecenas de la expedición de Clara Montalbán a Asteria y aseguró la piedra. Veranea en el Gran Hotel Atlántida desde que abrió, siempre en la 216; este agosto, todo el mes, cenando en su cuarto. El 17 de septiembre presidió una junta en Bilbao.",
      "coartada": "Dice que en septiembre no se ha movido de Bilbao: la junta del 17 está en actas, con su firma y la de ocho consejeros.",
      "motivo": "Dinero y manía de estrellas: financió Asteria, aseguró la piedra y su casa está en apuros desde el invierno.",
      "declaraciones": [
        {
          "texto": "Yo pagaba camellos, no ladrones. Volví del desierto por El Cairo en cuanto las cajas salieron de Dajla, y el 19 de abril ya firmaba en Bilbao; si alguien pagó a Pemberton por detrás de mí, que me enseñen de dónde salía el dinero. ¿El Atlántida? Veraneo allí desde que abrió, como medio Bilbao. Este agosto estuve el mes entero en la 216, cenando en mi cuarto, mientras ustedes andaban por los pasillos con lo de las cajitas; nadie me preguntó nada, y yo no soy de los que se asoman."
        },
        {
          "texto": "¿La viuda de la villa? Una señora respetable que murió de su corazón, que en paz descanse. En San Sebastián la conocía todo el mundo de vista. Yo entonces tenía cuarenta y cuatro años y otras cosas en que pensar. ¿Y en 1912? Dormí como un tronco y no me enteré de ningún portugués hasta el desayuno.",
          "desbloqueadoPor": "p16"
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d19UBkRIFlwTUQoUAw0BAhYNXEQQBxhdW0VQRaWAGAVTEF5VAlRGDllFFVdEA1QZAgcRVEAQCgwOFkYEVfqBFl9XF1FVD0NYE1gFRxJHVVlFQ1cBQw5ZGFhQ9oYHXVlBUlVcFFQERh8YQg5bp9UYXApCEkdQCAERFUJEAFwVElddQlIQRF0GGUJBARRXWBBYWRdWCEMRXRhRVEZHA0FMAERRHg==",
          "desbloqueadoPor": "p18"
        }
      ],
      "notaDirector": "dc1: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",
      "preguntas": [
        {
          "id": "g-1912",
          "texto": "¿Qué recuerda de la noche del 20 al 21 de agosto de 1912?",
          "respuesta": "dc1:YkNSQwBWEVTwmUoUZltd859DRgoCQltXRVAVUggTVQgWU0VVFEEJShhaBPXJRl1VRjYLWFwWRAJBRFcWU11dFkoWWgZEWABWQECnnRJVEFxXEBMLDQFdFhViWk5GW1cMVEJVFAJQRhVNU6KHC0ZIXBUDBloDRRENFV5ZEVdVElJWFkEGFlgNVhNRFxRHWlEQVQJZBUMGXRhHRFxTCUAYGBZeXxQLUEYXTV8VVwpGTVcHQgpaSwRKQ3FTWkVCVkBCRlFCoM1KQ1RWFAFaRlFC859DVgpDB1QYUVRGVh9GVg4aEFNbCBUKCUsWBVMJpZlKSA=="
        },
        {
          "id": "g-viuda",
          "texto": "¿Conoció a la viuda de la villa?",
          "respuesta": "dc1:d1MXFQ1KF1gfFAdbX1sQRFkHUkQPAxhbXERRVgIJGBRYURBHA/bXCUpXQVcIElkZFxcHFVAHBUNUFlsMQVgSUlYWUwwHXENYXxQmQVdaEGBXEEcLEUJbV1sRQFlGRV0NWRBYVRVBB0ZZRxT1yUgYdA9CAVRKBEQXUFj1yFMZRkRSQlgQRFoMVxNYBRRcVUZZUxFSRAcHGEtAEVhWFFpcDhoQU1sLWkYFV1hBQgsCWUpGDgNGGQsFFVxTRARBGVZTE1pWQwdWEE1SD0RNXRRVXkIMXQcGERhdR1AVQggTSwRRRV5QpYYIRklDBBYCD0pUBwADFVUKRBJAUxYJVxlCWV31mgIKGQdcX1UKQFca"
        },
        {
          "id": "g-pemberton",
          "texto": "¿Pagó usted a Pemberton?",
          "respuesta": "dc1:Y1dQFqeQQ0xdVURRSkRVVF8AWqfQDBhdW0VQRQcfGBJT84FbFFwSB0saQVULCBhLAwELV1YWXkNWV1sAXlVdRR8WWAEWXBFWQBhEQVxVEFNZDUABERRZXFpDVBcfE0sUFlZfQKWGARRZUA4YRDVRGQcGB1j6xBdDXUNUDFdLUxZDV1ACAFZDWBNBChRbWldc9cpARBMDSlkVQ1pVB0FVBBZREFmlmEYLUUUMWUhGS1wUoc9UGQAIQ1xSXwpGWBJb8JdEQwdYEVYTUAEUcF1cUlcMHUQhF0tJQFRbFwcTSRRfVV4UFlQBBxhVDlhEBVlLEgMRDxkcC0NFV1EKElpdWBNVXwYVTAZKE01EUFdeXxBEAkAQEQ0W"
        },
        {
          "id": "g-asteria",
          "texto": "¿Por qué le interesan las estrellas de ocho puntas?",
          "respuesta": "dc1:Y1lFEhFcQ1RaFAlBWFFCEFQMQQACAFkYQF9UFwNdGBVZVF8UClpGF01TQUILBVlbB0IbFUkKFhJAUxpFVlxBUlYWRhYBGQ5MQV2nhx4UU0VXD0IRCgdKGFZeRlZGUFcPFl9TXAkVFhNWQgBFRAtdGRYDEFBaAEQWW1cWBlNLRlcTRUIaBRdDbF0UBlVcRUVVRAwTEAIPWlH2mFsXElpdD1MQVFEUUAUOVxYAFhEIWRkLAwz2lARKQ3lXFgFXGXNFR1NFCgUZBktSFABREkRZVVIRUl9DD10YRVBHUgVa+9IWRV5VRkYDpYlXDRhEKlcZAxADDxkBAUNEQ1NFW1tTFlIWRwYWXQZLE1ANWldGXx4="
        },
        {
          "id": "g-larrauri",
          "texto": "¿Qué le une a don Cosme Larrauri?",
          "respuesta": "dc1:cENWEQFXF1gTVaeFXUcQVFNDRQERA1ZXRhFMFxNdWUFGUUJAD1EHRlxTQVsRFRhIEwdCW1ZFBQBUVFcIXUoSWEZYVAJKGaCwXxQKVURdVUJZTxMdDEJcXRVf9o0LVkoORQoQWglGRhZKUxJCBQtXSkYGC1tcFwtDTBZYCkEZXlkTUlIVC1UVXF5bFxoSZ1kQ9cpfRA8HSxhdUBVTD1BQDhZRXFMJFQIDGFuim0hGS1wUocMVTwAWB1RSFhwSSldE8JcXAkRUBl1aVRcYEldfXVlDRwsHDRhUWhFEQgMTXAhVVRB3CUYLAxY="
        },
        {
          "id": "g-septiembre",
          "texto": "¿Dónde estaba el 17 de septiembre?",
          "respuesta": "dc1:dlgXIQ1VAVhcGEREQFFDWVIKVgoHDRhNW1AVXRNdTAAWVFUUCVYOCRhVDlgXA1JcFA0RFUgQAUNTX0QIU0tdWBNTW0MFWhdYHxQAURJbXlNTQ1JEBw1LFBVIFVYKXlcTTFFeUAkVBQlWFgJDBRJKVkYGBxVcCQgMRhZeBEFNUxZfV0RDB1ANWlwaRGdbFEFFXwZBAQ1OGFRQQhVaB11cDhZVXBQHVhIHGFUERBAPXlAFAwZUF0UqDBVeU0VCUEFXV1kXLgVdEVBXFABRQVBVEFsCSgtN"
        },
        {
          "id": "g-notaria",
          "texto": "¿Le suena una notaría Varga, de Logroño?",
          "respuesta": "dc1:flMXEBFcDVgTQQoUU1pFXlUKXEQGDBhdWRFFUhRa+9JSWVNbRlEDRnpfDVQFCRQZpMkDRkwLEAxGFlcLRlBVQ1xF9dhIGQdcE1gLRxJFRVUWD1YBDUJUWUYRQ14TV1kSGBB9XUZGAwVKUxVXFg9XGRQHAVpLEQVDWVlFRVNXR1hQX1gQRF0GGV1bEFVA951RRUNDCxFCS1EVWVRORltdE1NeU10HRkYXTVNBUA0IWVcFCwNHAkUBEBVFQ0VGS1NUUlxYTUR3DBlbUURER1FDRFlDRgpDElFdFVRbFypcXxNZ84FbRlAIRlVfQUANAlkX",
          "desbloqueadoPor": "p10"
        },
        {
          "id": "g-primer-tren",
          "texto": "El portero anotó que pagó a las seis y diez y tomó el primer tren.",
          "respuesta": "dc1:dloXExZQDlxBFBBGV1oQURYhWggBA1cYRlBZUkZSGA1XQxBHD1ASAxhbBFgLFRhaEwMQQVZFHUNAWBYHU1dDQ1ZEWEMJWAdLRlMFDhL2j1VFQ0YKQwFKUVhUWwhGZ10P9Z1RFAxACBJZFgAWCAdLGQkMAVAXRTQCUkP1zB4ZX1MTUEIKREBDVFYUAVpGUULzn0NXAQ9CSFdHRUBQE/CREhZVXhQDWUYWXUQI9dcCUVoJQgZQGQkFQ0FXRAFXFRJYXBZSDURcDxlXURdVS0FeXxpDQA1DE01RUENQWUZCTQQWXF8UAlwBBxhVDlhEA0BYBRYLQUwBSg==",
          "desbloqueadoPor": "p15"
        },
        {
          "id": "g-216",
          "texto": "¿Por qué siempre la 216?",
          "respuesta": "dc1:Y1lFEhFcQ11SFAVYElpfQkIGEx1DDFcYUF9BRQcTXQ0WQ19YRlEDRlRXQVsFpYlYCANOFUkKFhJAUxYAQU3xlxNaUgkLSkNdVhQIVRJRQ1NXD1YWAkJISlxfVl4WUlRBTxBUUUZGExUYVA5EFgdbUQkRThVARRQMR0dDABJMXBZbWVoBFlxDXVYUB1tBQEVdVBFWF0MSUVxQEVBbRl5REltfEFcTVBQSVxhB9NsuWUBGAw5SVkUJAllZFgBcGV5XEwQGVVsZM0tWUxFaRlFeEFcPEwwMFl1UDxFZVkZDWQZZEFRRFVEDRklDBBYFBEpQpdFM",
          "desbloqueadoPor": "p15"
        },
        {
          "id": "g-bar",
          "texto": "El portero dice que su amigo preguntó en el bar por el portugués.",
          "respuesta": "dc1:cFlEDgEZE0tWUxFaRlUQQFkRExAMBlcYUF0VWhNdXA4WVV4UEloCCUsWDVkXRlpYFAcRGxk2DUNYUxYJXRlRWV1C9NBEWENVUhQJVfGFUV5XQ0ANBBdRXVtFUBtGXVdBWl8QRgNWEwNKUg4NRB8YSg9CDloZFwEAQFNEAV0VEkVWRPTOBRkTWEFVRFBXV1lCWwYTFRYHGE1bEUVYFEdNBkPzmUdGRRQDX0MPQgUEWRkWDRAVTAsFQ1hDUxdGWB4WUFlEAkRIFlwTVURZ8ZkQXl9DXgFDC1pZFV9cFwtWGBdTXvOZBxs=",
          "desbloqueadoPor": "p16"
        }
      ]
    },
    {
      "id": "larrauri",
      "nombre": "Cosme Larrauri Aguirrezabal",
      "edad": 64,
      "profesion": "Naviero de Bilbao",
      "foto": "img-larrauri",
      "desbloqueadoPor": "p13",
      "biografia": "Naviero; antiguo socio del marido de la viuda de la villa. En 1911 se quedó con la parte de ella en la naviera. Consejero de la sociedad propietaria del Gran Hotel Atlántida y vocal, por ella, en la junta del Sanatorio de Valhondo. Veranea en el Atlántida desde que abrió, siempre en la 220, y cada 21 de agosto toma el tren de Hendaya de las 06:40.",
      "coartada": "Dice que en septiembre ha estado entre Bilbao y Hendaya, como siempre, y que de Madrid solo conoce la estación.",
      "motivo": "El que más ganó con la muerte de la viuda: su parte de la naviera, a buen precio. Y vocal del sanatorio donde está Yoksrio.",
      "declaraciones": [
        {
          "texto": "¿Un portugués en el Atlántida en 1912? Nunca oí hablar de ningún portugués, señoritas. Yo cada 21 de agosto tomo el tren de Hendaya de las seis y cuarenta; lo sabe todo el hotel, y lo sabía en 1912."
        },
        {
          "texto": "Lo de la naviera fue un negocio limpio: la señora había muerto, la parte se vendía y yo era el socio. ¿Quién la vendió? Quien tuviera poderes para venderla; yo firmé y pagué.",
          "desbloqueadoPor": "p16"
        }
      ],
      "contradicciones": [
        {
          "texto": "dc1:d19UBkRIFlwTWhFaUVUQX0+ggEQLA1pUVEMVUwMTVghYV/OOCBUWCUpCFFERpZFKXUIHWRkVCxFBU0QKEl1XFl1ZVAsBGQdcEwVdBQAUQlVVFlYWBwMYSUBUFVsHE1YOVVhVFAJQCkYJAUFSAUZZXgkRFloVRQENFVNaRVBYQBoTU1tDF1ygiFxGRFBXFFxRFlEBVEMOXRhFQ1BQE11MooUQQFsUFQMKGEYORBATX0ylyxEVSBABQ1dDRQZTW1MWUhZbAkRPCkxXVUo=",
          "desbloqueadoPor": "p16"
        }
      ],
      "notaDirector": "dc1:elhYAAFXF1wTUAFYEldCWVsGXV5DB0sYWVAVRw9ATAAWVlFYFVRGJRQWEVcWBxhcCkIIQF4EAAxHFlcRV1dGWR8WTkMFXhZYXUAFFFpVQ0RXQ18FQwNbTUZQVl6lgFZPFnRfR0ZWEwpIVxIWFgNZVQMRQkRMAEQNWhZFClwZV1oTVUUKCVwNAxNHEURdFFRVRQdWRFJbCAEVQEBSRlZUQVdAX1ADRwcCVxYFUxcHVl4UAwBUGQRED1QWRQDxiF1EUhZOQwdYD1Xwh0REU0ZREFUMXhQRA0oYV1BHVhJSGBJDEEBVFEEDRlxTQVoFRlZYEAsHR1hFAQ0VBw9UAwISTxNaVkMKVgBRVhQAUV4UAQcWB1ZEAgVXS0FeFVMDEwlYBwIcFANbRgNUFgNXFkoYVh+h0RVYCUQTWkRCAEBWEkRWRlIXDUtDSEZRRFFeFEBfRBdGAxahkUsVQUdSAUZWFVdSURQWWhRGVFdBQA0TXFhGG0JGXEUIDBVVWQtG+oEWUhZEFkRYDlBUW0RzU0ZdVVgHWgVDSgoJAxgVVkZfWUFbUfOFB1sHRktfBkMNA1ZNA0xCe1ZFFBFQUUMLRvqBFl71lhBeGQ1WE0URUUD3nVEWEFIGBhAWGHhYUFkSVhhJ9JteQQhWB0ZX9cwWDAdaVQcQQlFcRQoKW1H131wZQllBQkIEEfrKSvGPTRRCVUJRFhNBCxcHX11HQlAXHxNIE1lEVVMDR0YHGEUUFgULUV4JTEJmeCchQ0RDX6abVxJTQVcXBggZAklcUAFGU1BfCxYQWkQPDRhZRUNcUhJSVlsW8ptRFVpGFkpTBvXeCExcFQcOWhkECEN3V1gGXRlWU18WeQwWTQb7iBpEekdaU1EWB1JEBg4YVlpcV0UDHRgtWRBBQQMVCgkYRQRGBRRZGQIHDhVaEAgTVFRaAAgZXlcTQF4WAFhDTVZZp5lTFFEQ9MheDUMDSFdRVEdWAlz62g0QVVhGVBYJXFMTVwAJGFwUA0L3kgAIQ1FTWkVQWFxVXPSMWER1AktBVRFGWxRVQxYNUhIKB0pXFUgVWQdXWUFFRUlbRkUHFfuFQUYLFBhcCkIgVFcGC0NRU1pFfFZAQlYYFyAFVBNcUFwFWl0YEENTBEYWDEJcXRVC9ppdE0sEFllCRg9BB0ZLX0FaAUZQWAQOA1sZAQEPFVRXFxw=",
      "preguntas": [
        {
          "id": "l-portugues",
          "texto": "¿Oyó hablar en 1912 de un portugués que preguntaba por la viuda?",
          "respuesta": "dc1:fVkZQyFXQ1hUWxdAXRRUVVpDVwsABxhBWhFBUgjwlQAWRV5VRl0TA1RRABYBCBhVCRFCWEwACA9QRRYcElVTFlBXVQYeWENcXRQmXV5WUV8NQ1YIQwpXTFBdFVIUUhgRV0JRFAJaFAtRRE8WMQgYSQkQFkBeEKfKRhoWAVtaVxgTc1lDAVVDeEdYp5VcQFlUV0NbBRpCSFdHRUBQE1ZLBEUQRFsCWhVGVFkSFhIDSlgIDREb"
        },
        {
          "id": "l-naviera",
          "texto": "¿A quién le compró la parte de la viuda?",
          "respuesta": "dc1:chZGFg1cDRlHUQr3n1UQQFkHVhYGERhIVENUFxBWVgVTQlxVShUFCVYWFFhECFdNBxALWhkBAQ9UWEIAEkASQ10WVAsBSBZcE1cLWlRbQl1XB1xKQyRNXRVUWxdXCglQGhBRFARAAwgYRhNTBw9XFUYMDRVVCkQNXFNRCggZXlcTRVKg1VYRWBNcBVbxmVEQWxZWFhcNFBhZUBVZB0VRBERREF0EVEYLWVpBRQ0IGEoTQg9USwwADBVPFgtTXVtTE1v0whcZEkxWRqeZUxRSUUQAXBdDFFFdX15GGUZgUUFTQ18UA0ZGE1YWAkQNC11XSkIOVBkIDRdUUhYBVxlwX19UVgxEXBBN8JVEREBRQ1EY"
        },
        {
          "id": "l-junta",
          "texto": "¿Qué hace un naviero en la junta de un sanatorio?",
          "respuesta": "dc1:YVNHEQFKBldHVRYUUxRcURYQXAcKB1xZURFRUgoTUA5CVVwYRkQTAxhGFEULRlRWFUIWUEsXAQ1aRRhFZFZLFldZREMSXABcQBQFWBJV84FZTxMCChBVVxVdVBcLVlUORFlRFB8VBwpVQwREHgkYWgkMQlBVRQAMVkJZFx4ZQ0NWFlIQREwNGVtbCVZAURBERApAEAZMGH1ZEVRTC1pWCEVEQlUCWhRGVVNBWwUIXFhGDg1GGQun2VhTRApBGUsWSlkXDwtKQ1hDRhFRUFsQQ18NEwgGB0pUWkIZFwVcVQ4WRF9QCUZGCldFQUALBVlVAxFCUVxFEAxRV0VFXlhBFllDWRcFSkNdVhQhR0JV84FXTQ=="
        },
        {
          "id": "l-hendaya",
          "texto": "¿Por qué el tren de las 06:40 cada 21 de agosto?",
          "respuesta": "dc1:Y1lFEhFcQ1xfFFYGElFDEFMPEwcWD0hUUFD2hglAGAVTEF1dRlgTDF1ETRYVE10ZAxFCUVxFLAZbUlccUxUSTxNDWUMJWBFQV1tERUdREFZXD0cFQwMYXUZeFVkJE04UU1xGUUZURgJXRAxfFkZMSwcME0BQCQtNFWJEAFtXRlcTV/TSC0pDSlZTEV1WW0McFhBWp9INSlFBUEYbRlBXDxZYX0ADWUYfGEUIWEQOV00DDkwVaRcBBEBYQgBcGVMWXl8XDhFTBksfFBVBVxRcVUVDVgoQB/uJVEP2lkZfVxIWQlVTB1kJFRY="
        },
        {
          "id": "l-garmendia",
          "texto": "¿Cómo es su amigo Garmendia?",
          "respuesta": "dc1:ZlgXCwtUAUtWFBVBVxReXxYXWhYCQk1WFUFURwNfAkFRRVFGAlRGDllFFVdECldKRgALWVUAEAZGFlIAXhlGRFJYQaDJWE0Zd10XV0BRRF8aQ14FBxBNX1RVWkVKE1sOWBBFWgcVCwdW9cxXRAJdGQMRFkdcCQgCRhZSAEFdVxZCQ1JDAVcVUEZQp4cSRUVVFg9WRAsDGFtaQkFWAlwYBV9eVUYJG0Y1URYDQxcFWVdGA0JUVQIRClBYFhRHXBJeUlRbBkRdBhle98VHHhReXxYGQESgy1QWFWJcFwRGSwJXXhBVRlQKAU1fBFhEF01cRgcRVkwGDAYZFkIEX0ldVVwY"
        },
        {
          "id": "l-madrid",
          "texto": "¿Conoce Madrid?",
          "respuesta": "dc1:f1cXBhdNAlpa99daElBVXBYtXBYXBxQYWVAVUwNfGCxTVFlbAvbLBxhPQUMKRlBWEgcOFVwLEBFQFloEQRlWWUAWUwwKXQYZQFFEV11ZVRBbAl9KQzdWGFtQQ14DQVdBWF8QQA9QCAMYWABSBUZJTANCClRaABZDUFgWEFxYElVaQ1MCABkQUF0UCVVAGhB1WENAARMWUV1YU0dSShN6CFpSUVtGTEYuXVgFVx0HAxkLC0JWUabXBVBEFgleXERXE1NbQwdMAl1WRgpbHA=="
        },
        {
          "id": "l-consejo",
          "texto": "¿Quién decidió que no hubiera escándalo en 1912?",
          "respuesta": "dc1:f1cXEAtaClxXVQAYElFDEFIGUA0RThhWWkJaQxRcS00WVUMUAlAFD0oaQVMIRktcCBYLUVZFBwxY9YwLHBlnWBNbQgYWTQwZV1EIFFFbQlFMoIAKQwxXGFBCFVkJR1ECX1EeFD9aRh9ZFghUBUZdV0YHDhVNFwENFVVDBFxdXRZfWRcHAVoKXVpRFltcDxBdU0NfC0MBV1ZBUEdYCBNdDxZDVUQSXAMLWkQEFh1GVVxGEgNHXAYNoIYWVAxXVxw="
        },
        {
          "id": "l-valhondo",
          "texto": "¿Ha estado en Valhondo este mes?",
          "respuesta": "dc1:fVkZQyhYQ1NGWhBVElFDEFMNEwoMFFFdWFNHUkZKGARYEF1VH1pIRnRZQUcRAxhJBxEDFVwLRAZGUxYTU1VeUxNbUkMIVQZeUhQBWhJBXhBFDFEWBkJbV1sRWVZGVVETW1EQUANZRgdcWwhYDRVMSwcGDUcVRR1D9oxaEVtUU1tWWEMGRFUMShNHC1ZAUUMQQApWCgYMGF9aQ1FYFR0="
        },
        {
          "id": "l-1910",
          "texto": "¿Sabía que a la señora le iban mal las gotas?",
          "respuesta": "dc1:YFdVoMlYQ0hGUURdUFUQXVcPEwEPDlkUFUBAUkZWS0FSWUNAD1sSCRYWLVlEAl1apc8DFU0KAAwVU1pFQ0xXFl9XFxUB+s5YE1EKFF9dQ1EYQ2oLQwdKWRVCWlQPXBgFUxBDQUZYBxRRUg4aRAhXGRUXQlj6zAAKVlkWC1sZQUMTVVgNAlwQVkEaRGdbFFFcURZaAQ1CXF0VQkAXBVJLABZYUVelmAdGWVoGWUQXTVxGDA0VXQAGoJhXGkVDTFcWX1kXBw1eAhlCQQ1RXBRVQ0ICUQVDB1YYRkQVVAdAWU8=",
          "desbloqueadoPor": "p16"
        },
        {
          "id": "l-bar",
          "texto": "El portero recuerda que usted le preguntó por el portugués en el bar.",
          "respuesta": "dc1:dloXEwtLF1xBW0RGV1dFVUQHUkQPDRhJQFQVWwMTWw5YRllRCFBGFF1VDkQAB0oZFxcLW1oARAL2h1kWEl1XRUND9MoXFUNAE1cLWhJRXBBaClEWDEJcXVlQW0MDE0sEFlxVFApZAwhZFg1XRAtdVAkQC1QXRTQWUFJTRUNMVxZDRFIEEVcXWEFVXhRXWhBFWENRBRFCTVZaEUVFA1RND0JREEQJR0YKVxYQQwFGV0ADTEJ5VkUVFlAWWAoSUVtVVhZRFgEZEExRXRYUU1gQRFMRUAERQkhRRl4ZFx8TXRJZEFxbRkYHBF0WFVkACRhcCkIPQFcBC00=",
          "desbloqueadoPor": "p16"
        }
      ]
    },
    {
      "id": "lizaso",
      "nombre": "José Lizaso Irigoyen",
      "edad": 66,
      "profesion": "Portero de noche del Atlántida de 1912 a 1925, jubilado",
      "foto": "img-lizaso",
      "desbloqueadoPor": "p15",
      "biografia": "Portero de la villa de la viuda hasta 1910 (abría la verja a los coches) y portero de noche del Gran Hotel Atlántida desde que abrió hasta la reforma de 1925, en que lo jubilaron. Su puesto era la garita de la puerta, no el mostrador: el libro de huéspedes lo lleva recepción; él apuntaba horas y números de habitación en su libro de portería, que se llevó a casa porque nadie lo quería. Vive en el barrio de Gros.",
      "coartada": "Dice que aquella noche no se movió de la garita de la puerta: lo apuntó todo en su libro, de su mano, y lo vieron allí el subdirector y el doctor. Llovió desde las doce.",
      "motivo": "Su libro es la fuente de todo lo que sabéis de aquella noche, escrito de su mano y guardado en su casa desde que la reforma lo jubiló: si alguien pudo arreglar las horas, fue él. Y fue él quien repitió en el bar la pregunta del portugués.",
      "declaraciones": [
        {
          "texto": "Yo apuntaba todo, señoritas. Por eso me jubilaron."
        },
        {
          "texto": "Los dos señores de Bilbao veraneaban juntos, en la 216 y la 220, y madrugaban los dos el 21. Al del banco lo conocía de la villa, del coche cerrado de los jueves, pero de lejos; de cerca no sabría decirle cuál de los dos era. El de la 220 me preguntó la noche del 17, en el bar, por el portugués que buscaba a la viuda. Lo había dicho yo, para mi vergüenza.",
          "desbloqueadoPor": "p16"
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:elhYAAFXF1wfFB0UV1gQRFMQRw0EDRhJQFQVUwNQUQVTHhBnExUKD1pEDhYBFRhcHgMBQVZfRAZZFlIKUU1dRBNFVg8N+tAZUhQIVUEUAAAMUQNEAkJNVhVQQ14VXBhJQ14QWg/21wkYVQ5YRAVKTBZCB1sZCQVDQ19aCVMZf19BV1oCFgJDXF8UAF1AUVNEWRETCAZCSFFRWPaERkJNBBZeXxQKWkYHSEMPQgUUWRkfQgxaGQkLQ1RGQwtG+oEaE0ZSEQsZD1YTRgFXR1FCVFdDQA1DDl0YRUNQUBNdTABYGRBNRlAIEkr10hYAAxhVB0IBVFUJAUNUFloEQRkCBQkGBUMHUQxLQVEFWlZbCxBYAlcNBkJV+5RCFVQURkKihRBDQUZFEwNKQgAWAQhMSwNCDlQZEAoCFU8WCFddW1cTTxcPBUpDTUFRFw8SUVwQRRZRAAoQXVtBXkcXA0BMFEBfEFcJW0alkVpBUwpGVFhGEhdQSxEFQ1FTFlUDAwMGE1cXEwVKAl1SFAhVEkFeURYaEwkGBlFZFVRGRwNBWQ9SXxBVChUCCVtCDkRIRkhYFaHRFUkKFkNQWhYTV0pG9Z5UQg8LGQIZX1UXFAIGCgQOQ1YKQwBZTFQRRUUDVE0PQlFeUAkVFglKFgRaRAJXWhINEBVARRcWV1/11hJJXUQTWlZDFEsKV1BdFFVeDxBVWkNAAaDTV0oVVVAXClIYUwcGEFYHX6XVGFUOWEQDSUwPEgNfXEUFQ1lXRUUCDwgHAxZOQxBWDvqAFAFYEkRCWVsGQUQXEF1WDhFQW0ZXXUFaURAGVAVKRl1aQVIBRnBcCAYDTFhFAAYVWlcWEgkEDAcGGUMoVkNPWlEWW1wUVV4WD1JEBANKUUFQFVIKE0sUVFRZRgNWEglKFkkGVlwMAU9CGxVcCUQHWlVCCkAZGgYADAdRTQNDV1wUF1ESWV9GX6CASkMuWRhWUF9WRlddQVVRRVAHWQMVFBYFUxAU+5gVQgZQVUUJDEZCRARWVkAWV1MXEQFaBklQXaeHXBgQQUMGVwVDBE1dR1AVUwMTSxQWRllHElRGAl1FBVNEClkZAQMQXE0ESkNxUxYJUxlEX19aVllEWAFL8JkFFF5VEEZTEVkFQwNUGFZeVl8DE1sEREJRUAkVAgNUFgNXCgVXGQoNERVTEAEVUEUWHBJXXRZFX1hDBVVDXVZYRFZTWlNfFg7wxRBCSU1QEVFSRl9dC1lDCxQoekY1eXQkFjczGHcpLyBnfEUdQ1tZFhZTW0D1nlcXBwFaCksTVxH3k1gQVFNDXwsQQlxXRhFGUqWCVxNTQxBQAxUkD1RUAFlEA0pYXUIOVBkLCwBdUxYBV1USBwcWUwZESgZJR10BWVBGVRBSBhNVWlMIGENYWhcVUlQIRBBVWEZWCQVQU0FSAQoYXQkBFlpLRQVDWVdFRVZQV0wTTxcVC1UVXEEUBRReVUMQWQ1QAU9CQRhZRFBQCRNUBBZUWV4DRwkIGEcUU0QKWRkVB6GEVhcFQ11XVKafWBJbRlNFFwsXQ3FSVghVVltCHBYMQQMWDlRXRl4VUwMTSxQWXFlWFFpdRktTQVcSA0pepd4HW0MERAdQFl4EUFxAFkFTRwYQUAdWE1EKFFdYEFJXERMIAkJISlBWQFkSUhgFU1wQRAlHEhNfQ6KfF0g=",
      "preguntas": [
        {
          "id": "z-doctor",
          "texto": "¿Salió el doctor aquella noche?",
          "respuesta": "dc1:Y1dEAgBYEBlfVRcUVltTVRpDUAsNQl1UFVxUWwNH+8xYHBBVRkAIRllACEULRlxcRgQXUEsESkNwWhYWV/qDWUEWRBYGXQpLVlcQW0AUXVUWB1oODEJJTVARW1hGX1dBV0BFWhJUFAcUFhBDAUZNV0YPoZxdDAcMFVJTRVpWRlNfFlkMREkWXFdRRFVcUFFCFgJHAQ0GUV1bVVoXBxNUABZTWUECVAJKGE9BWAtGVFZGAxJAVxGnyhsWYApeT1v1gBZWQwhYEBlHRgFHEk0QVFkQEwcLDUpKUFBbUwkdGCRFXxBHpZhGClcWAEYRCEz6z05CRVYXFRZQFlMLRkvxhR0="
        },
        {
          "id": "z-caja",
          "texto": "¿Veía usted la caja de caudales desde la garita?",
          "respuesta": "dc1:fVkbQxdcoIhcRg1AUxoQfFdDUAUJAxhdRkX2lkZXXRVE85FHRlEDChhbDkUQFFldCRBOFVwLRBZbFlcXX1hAX1waFxpEVQIZVFUWXUZVEF1fEVJEAkJUWRVBQFIUR1lBTxBRFApURgVZWg1TSkZ3+ssDQlBVRQcLVEVHEFtdXRZQQ1YNAFZDVVIUBVZA951RWE8TARANGEv2nBkXB19fFFhRQxQLVAIUTVEAUgUVFhkoDUJQSwREAkZDWBFdGV/1nlkZ"
        },
        {
          "id": "z-bata",
          "texto": "¿Vio bajar a alguien en bata por la escalera de servicio?",
          "respuesta": "dc1:f1cXBwEZEFxBQg1XW1sQQ1cPVkQCDhhIVEJcWwpcGAVTEFRREkelx0sWBVNEFF1aAxIBXPrWCk8VWFlFU1USQFZFQ6DJWxZVXA5EUFdHVFUWD1JEBANKUUFQFVkJE0sEFkZVGkZjD0ZZWkFFAaWJVhRCEUBbAQ0RUFVCCkAZV1gTVFYXBRkCGV9VFxRWW0MQT0NQEQIQXVZBUBVORlxbCVkcEEQJR0YDVBYXUxcS+5QEFw5aFUUVFlAWQABc+p9XE1JSQwBcF0vwlRcUVlFcEFsMQBARA1xXRx8VeQdXUQQWXfOVFRUDCBhUAEIFShhIEwdCTFZFEgpQRFdL"
        },
        {
          "id": "z-villa",
          "texto": "¿Cómo era el coche de los jueves?",
          "respuesta": "dc1:cFNFEQVdDBUTWgFTQFscEFUMXUQWDBhbXfKGUQNBGAVTEEVaD1MJFFVTQVEWD0sZH0IGWkpFFwb2h1kXV0oSUlZYQxELA0NMXVtEWVNNX0IaQ0IRBkJdVkFDVFUHE1kNFlRVRxZUBQ5XGkFPRBNWVkYIDUNcC0hDVllYRUdXUxZQV0UXAUsCFRNFEVESUUNAUxFSBgJCXVYVVFkXFlJLCFpcXxpGbAlGWVQT9ckHGFUHQhRQSw8FQ0wWRQReTFZXUVcXAggZAFHwhwJRQBoQcVpDXgUaDUoYW14VWwMTTggWXFEUBVQUBxhbopcXRklMA0IGUBkJAQlaRQ1FU1USXFxAUg1IGRdYXkQLV10OEF1fEVIGAkJZVBVCQFIKXBY="
        },
        {
          "id": "z-bilbao",
          "texto": "¿Cuál de los dos señores de Bilbao era el del coche de los jueves?",
          "respuesta": "dc1:fVkXEAVbEfqeVURQV1dZQloGHUQnBxhUUFtaREZKGAJZXhBHCVgEFF1EDhpECldKRhEH9ogKFgZGFlIAEntbWlFXWEMXXENJUkYBV1daEERZB1wXTUJr+5wRREIDE00PWRBUUUZZCRUYUg5FRApXGQMQAxVJChYSQFMWAF4ZUV7whVEGFhkOXBNYCxRWXVpfFgLw1QwRGFxQQkVCpZpLTRZVXhQDWUYEWURNFh1GSFYUExdQGQkLEBVSWRYSSlcWXlMXExFKClxBWwoUQVFCWVkQEwEPQlz7mFAVRhNWGA1TQxBXCVsSpZEWEEMBRkFWRgoDV/rIBUNGX1IKElxeFldTFw8FGRVcQV4FGg=="
        },
        {
          "id": "z-portugues",
          "texto": "¿Qué dijo exactamente el portugués en recepción?",
          "respuesta": "dc1:8Z11FhdaDBlSFAhVEkdV84cMQQVDBl0YWVAVQQ9fVAAWQUVRRl0HBPubABYFF036y0xCeFxFDAJbFlIMUVFdFkJDUkMJTBFQ8IdKFGNBWVVEDBMXAgBdShVAQF6lmlZBWlEQVRVcFRJR9dL030gYfAhCFFpDRQUPQVcaRVFWXBZSVVINEFZPGUoUAVgSRlVTUxNQDQwMUUtBUBVbAxNcCFxfEEUTUEYDVBYJWRADVBkIDUJGWAenzlQWWARWWBJSVhZbAkRPClVfVUoUa1sQXFlDQQETB0z7mBFQWUZWVEFUUUIUA0YHRlZZAl4BRkhWFBMXUBkIAUNFV0QAUVDxhRNEVhELFUNAE1kBFFNGQlVGClYKFw0W"
        },
        {
          "id": "z-timbre",
          "texto": "¿Oyó el timbre de la 309?",
          "respuesta": "dc1:d1NEBwEZD1gTUwVGW0BREFgMExcGQldBUBFbXghU+9tYEERdC1cUAxhSBBYUCllXEgNZFVoEAAIVRloEXE1TFkdfUg0BGRBME1cRVVZGXxBTDRMXFkJXXlNYVlJIE3QOFkFFUUZapcsYUBRTFglWGQoDERVaBAAGW1dFRVZcXhZeWVkXBVoCS1RVFxRTFFxRRUNXCxBCQRhYVFFeBx8YEENVEEcTUAgHVhYEWEQSV10JQgdZGQ0RBlZZGkVLGV5DVlFYQxRYEFZAFAVGQF1SURg="
        },
        {
          "id": "z-1910",
          "texto": "¿Qué pasó la noche en que murió la señora?",
          "respuesta": "dc1:dloXAAtaC1wTUAFYElBfU0IMQUQQA1RR9oIVVkZfWRIWVFlRHBUfRk5ZDUANpYsZB0IOVEpFCw1WUw1FV1cSU18WVhANXA1NXBQAURJVREL1wkBEDgcYSFRDUFQP8ItBQFVCFBNbRgRNWhVZRAcYVQdCC1FYRR1DW1dSBBJYElpSFkEWAVUXWB0UJRReVUMQUgxQAUMAWVL2ghVbBxNdD1BVQlkDRwdGWRYFUwcPSlcJEUJETABED1QWRQDxiF1EUhZfAgb6zlgTWRFRQEBfEE9DQhEGQlZXFUJAVQ9WSgAWXlFQD1BIRmhZExYIBxhUB6HTVFcERA9UFlUEWFgSU0BCVgEFGQBcQUYFUFMaEHVYF1wKAAdLGFteFUcDXUuinxBeVQJUSEZ5Xg5EBUZIUAMMEVoZCQtDRENTRUdKRlNXU0RN"
        },
        {
          "id": "z-echaide",
          "texto": "¿Conocía al cajero de día?",
          "respuesta": "dc1:cloXEAH60lZBFCFXWlVZVFNPExegzwIYQF8VWhNQUABVWF8UFVAUD1cWEEMBRl1XEhADV1hFBUNZV0VFXExXQFYWTkMXWA/6nlVEVRJYUUMWEFoBFwcYQRVcUBcWVlyim1EQUQoVCg9aRA4WAAMYSQkQFlBLpskCFVVXAVMZX1fwh1YNBRkTWEFVRFdHVVRCVxETCAIRGF1bRUdWAlJLQVJVEFkHURQTX1cFV0pGfVdGBw4VXQoHBhVYWUVeVhJAWhZZFgpaAhlXUURaXVdYVRYGXUQPAxhbVEJUGUZyVEFSVVwUBFQIBVcaQVIBRlRYRhQLWVUESENZWRYNU1vxm1IWQQoXTQwZVkcUUUBVQhBTDRMBD0JIWUZYWVsJE1sOWBBFWgcVBQdKQgREBUoYSQMQDRVXCkQJQERXF/GUUxZCQ1JDAkwGS1IUp51eGg=="
        }
      ]
    },
    {
      "id": "catalina",
      "nombre": "Catalina Ugalde Iriarte",
      "edad": 75,
      "profesion": "Armadora, viuda, de San Sebastián · «la casera de la calle Portales» desde 1925",
      "foto": "img-catalina",
      "desbloqueadoPor": "p16",
      "biografia": "La sexta de los nueve. Murió oficialmente en su villa de San Sebastián el 14 de septiembre de 1910, a las 23:10. Esa noche salió por el jardín al coche de su médico y tomó en la estación del Norte el tren de las 22:40 a Logroño, con un billete para un asiento que no existe y con su enfermera. De 1911 a 1920 fue «la señora del Pabellón Sur» de Valhondo; desde 1920 vive en Logroño, en una casa de la calle Portales comprada a su nombre nuevo, y desde 1925 es la casera de un notario al que nadie ha visto. El Ojo del Horizonte era suyo. En abril de 1927 un hombre con prisa le preguntó en su portería por don Elías y no la reconoció.",
      "coartada": "En agosto de 1912 estaba en Valhondo, en el Pabellón Sur, y en septiembre de 1927 no se ha movido de su portería de Logroño.",
      "motivo": "Lleva diecisiete años muerta en los papeles, y fue ella quien echó al correo el sobre que os citó en Madrid: a nadie le importa tanto como a ella quién llega a la calle Portales.",
      "declaraciones": [
        {
          "texto": "(No se la interroga. ARKANA no pregunta a quien guarda, y vosotras tampoco: cuando llegue el momento, ella contestará.)"
        }
      ],
      "contradicciones": [],
      "notaDirector": "dc1:fVkXBhcZEFZARAFXWltDURYNWkQKDExdR0NaUAdRVAQMEFxVRlMPBVBXQVMcD0tNA0ISVEsERBJAUxYJU0oSXEZRVgcLSwJKE0ABWlVVXhBSBl8FDRZdGFQRREIPVlZBXlFeFANbBQlWQhNXAAkWGTULQlBVRQAKR1NVEV1LElpSFl4NEFwRSUFREFUSRF9CFgZBFgwQFBhWXltDA0BMABZTX1pGWAMCUVcSFhIDSl0HBgdGGRxEDVoWVwZHSlMWUhZZAgBQBgMTWhFaUVUQVUUAQQ0BC/uLFVRZFwhcVQNEVRBQA1lGB0hZBVMWB1xWRgcMFVUKRBJAUxYJXlxV9YAWVkMrSQxLR1tfFF5VEFNXEUcFQwFXVhVUWRcIXFUDRFUQTUZZBxUYVRRTChJZSkYOAxVcFgcMW1JfpoEZV1gTU1tDFFgBXF9Yp4dcFFRVWkNZBREG+5VbEUwXA0BMopcQUlUMWkYKWRYVVwYKWRkCBw4VWBcJAkdfWUVWXBJaUhZbBgpaBkvwmQUUVlFcEF4MRwEPQhBdRfKYWwlUV0gYEHNbCEEDFUxXE/XFRllVRhYHWVwCFgJYVxYBVxleVxNGVg8FWxFYHxQBWhJXXFFEDB9EBQtKVVRfUVhG8ZMid2RxeC97J6SDGA=="
    }
  ],
  "documentos": [
    {
      "id": "d01",
      "tipo": "informe",
      "titulo": "Lo que hay en el piso",
      "autor": "Vuestras notas",
      "texto": "Segundo piso, calle de la Luna. Cerradura forzada desde fuera, hace días: el polvo del rellano ya ha vuelto a posarse. La casa no tiene portería.\n\nEn la mesa: una tetera fría y una sola taza, blanca, con una huella de gato pintada a mano. Al lado, un cenicero limpio, un bloc de impresos de telégrafos sin estrenar y vuestra nota del día 10, abierta: alguien la recogió de debajo de la puerta y la leyó. Las dos veces que volvisteis, el 12 y el 15, nadie abrió.\n\nEn la silla: un periódico de Madrid del viernes 16 de septiembre, doblado por la página de sucesos.\n\nEn el perchero: unos guantes de cuero oscuro y una cadena de reloj sin reloj. Falta el abrigo.\n\nEn la pared: un tablero de corcho. Alguien ha arrancado todos los hilos rojos que unían las tarjetas, pero ha dejado las tarjetas. La chincheta de la tarjeta de Toledo del 14 de septiembre es la única que no está oxidada.\n\nEn el armario: dos camisas, un traje de tweed y una caja de sombrero vacía, de un sombrero fedora marrón."
    },
    {
      "id": "d02",
      "tipo": "fotografia",
      "titulo": "El tablero de corcho",
      "visual": "tablero",
      "texto": "Cinco tarjetas clavadas con chincheta, cada una con una ciudad y una fecha. Los hilos rojos que las unían están arrancados."
    },
    {
      "id": "d03",
      "tipo": "diario",
      "titulo": "Cuaderno de 1912",
      "autor": "F. M.",
      "desbloqueadoPor": "p02",
      "texto": "(Un cuaderno fino de tapas negras, sujeto con la chincheta detrás de la tarjeta del 21 de agosto. Letra de Yoksrio, más joven.)\n\nGran Hotel Atlántida. Soy el detective de la casa este verano. Duermo en un cuarto del sótano, al pie de la escalera de servicio.\n\n17 de agosto. Llega a la 309 (tercer piso, ala norte, la más pequeña) el señor Elías Varga, cartógrafo, de Oporto. Pregunta en recepción, en voz alta, por una viuda que vivía aquí y murió en septiembre de 1910. Nadie le contesta; el portero lo repite luego en el bar.\n\n19 de agosto. El médico del hotel le receta gotas para el corazón. Frasco nuevo.\n\n20 de agosto. Varga pasa la tarde en el jardín viejo, junto al pabellón que derriban en otoño, y vuelve con un paquete de hule bajo el brazo.\n\n21 de agosto. A las 02:37 me despierta la camarera del tercero, A. U.: el señor de la 309 se ahoga y le ha dicho, a través de la puerta, que no llame al médico, que no abra ella sola y que me llame a mí. Ella ha bajado en el montacargas, que da pared con pared con la 309, y vuelve a subir en él a por la llave maestra del office del tercero; yo subo por la escalera de servicio. Entre el segundo y el tercero, a las 02:41, se cruza conmigo, bajando deprisa, alguien en bata y zapatillas de fieltro de las de la casa, con la cinta verde, no con zapatos de calle. No le veo la cara. No me cruzo con nadie más.\n\nLa puerta de la 309 está cerrada con llave por fuera. A. U. llega con la maestra y abre. Varga, en el suelo, repite lo que le dijo a ella: «me ha despertado la sed y he bebido». El vaso de la toma está en la mesilla, seco: A. U. dice que lo dejó preparado a las diez y que él lo tomó entonces, como cada noche. La jarra, a la mitad. Bajo corriendo a la 218, el cuarto de guardia del médico, junto a esa misma escalera: no hay nadie. Vuelvo a subir. A las 02:50 sube por la escalera principal el subdirector de noche, R. E., en bata: dice que le ha despertado el timbre. Varga me agarra la manga y dice una palabra: «Arkana». Luego, mirándome a mí, dice otras dos, en una lengua que no conozco. Las apunto como suenan en la última hoja. Muere a las 02:58.\n\nEl médico llega a las 03:05, con el maletín y el abrigo húmedo. Certifica «fallo del corazón» sin mirar el frasco. El subdirector le dice que en Semana Grande no hay escándalos.\n\nEn la habitación faltan dos cosas: la llave de la 309 y el anillo de sello de Varga, una rosa de ocho puntas con un ojo; A. U. los vio en la mesilla a las diez. En la habitación entramos esa noche el médico, A. U., R. E. y yo. Y antes que nosotros, quien cerró la puerta por fuera.\n\nEntre los papeles de Varga, antes de que recojan sus cosas, encuentro un pliego en blanco con un membrete: la misma rosa y «ARKANA · MCMIX». Me lo guardo.\n\n30 de agosto. La dirección da el asunto por cerrado. Me despiden.\n\n(Al final, con tinta más nueva:) Vuelvo cada 21 de agosto."
    },
    {
      "id": "d04",
      "tipo": "informe",
      "titulo": "Copia del libro del dispensario",
      "autor": "Copiado a mano por F. M., 21 de agosto de 1912",
      "desbloqueadoPor": "p02",
      "texto": "Dispensario del Gran Hotel Atlántida · agosto de 1912\n\n19 · Hab. 309 · Sr. Varga · tintura de digital (dedalera) · frasco nuevo de 50 gotas · 6 gotas al día, en una toma, por la noche, en el vaso de agua de la mesilla que deja preparado el servicio de planta a las diez · Dr. E. I.\n19 · Hab. 309 · primera toma, por la noche, dada.\n20 · Hab. 309 · toma de la noche dada.\n\n(Nota de F. M.:) El frasco de la mesilla, a las 03:10 del 21: quedan 2 gotas. Nadie lo ha apuntado. Nadie lo ha mirado."
    },
    {
      "id": "d19",
      "tipo": "carta",
      "titulo": "Nota detrás de la tarjeta",
      "autor": "Y.",
      "clave": true,
      "desbloqueadoPor": "p02",
      "texto": "NO OS FIÉIS DE NADIE DE AQUELLA CASA. STOP. LA SEXTA SIGUE COMO ELÍAS LA DEJÓ. STOP. MIENTRAS NADIE SEPA QUÉ ES, ESTÁ A SALVO. STOP. Y."
    },
    {
      "id": "d05",
      "tipo": "carta",
      "titulo": "Carta de Arthur Pemberton",
      "autor": "A. Pemberton, Londres (por el correo aéreo de París)",
      "fecha": "26 de septiembre de 1927",
      "desbloqueadoPor": "p04",
      "texto": "Señoritas:\n\nContesto a su telegrama el mismo día, y por el correo aéreo, porque me lo piden con educación y porque ya nada me obliga a callar.\n\nLa piedra la quería para mí desde enero, no lo niego, y se lo dije a cualquier periodista de El Cairo que quisiera oírlo. Pero a finales de abril, unas semanas después de que los periódicos de allí hablaran de la estrella de ocho puntas y de mi interés por ella, recibí la primera carta de un cliente que la quería aún más. Quería la piedra y, más aún, lo que la piedra señala: me pagaba la expedición de otoño para excavar allí antes que la señorita Montalbán. Me escribió dos veces, a finales de abril y en mayo de 1927. A máquina, con membrete de una «Notaría Varga, Logroño». Pero los sellos de correos no eran de Logroño: los dos llevaban el matasellos de Rascafría (Madrid), que no sé dónde está. En mayo no se lo dije a ustedes: no me había fijado, y no me pagaban por fijarme.\n\nEl lacre era una rosa de ocho puntas con un ojo. Me llamó la atención que en uno de los bordes tuviera una rayita curva, fina, como la que deja el aro de un anillo cuando se aprieta demasiado.\n\nNo sé nada más. No me pagaban por preguntar.\n\nA. P."
    },
    {
      "id": "d06",
      "tipo": "carta",
      "titulo": "Carta de Mercè Puig",
      "autor": "M. Puig, prisión de mujeres de Barcelona",
      "fecha": "27 de septiembre de 1927",
      "desbloqueadoPor": "p06",
      "texto": "Señoritas:\n\nSí: el «comprador de Ginebra» cumplió antes de que yo hiciera nada. Mi madre llevaba dos años en una clínica de Sant Gervasi, y yo le debía a la clínica más de lo que gano en un año. Él lo sabía antes de escribirme. En mayo la hizo trasladar a un sanatorio de la sierra de Madrid, el de Valhondo, «donde estaría mejor atendida». El 17 de mayo, la víspera de que yo recogiera la segunda réplica, me llegó el recibo: la deuda de la clínica saldada y la estancia en Valhondo pagada diez años por adelantado. Me compró por adelantado, y después, con el Ojo otra vez en su vitrina y yo detenida, nadie ha pedido una peseta. Creo que me pagaba por callar, y he callado hasta hoy.\n\nNunca vi a ese hombre. Me escribía a máquina, en francés, y sellaba con una rosa que siempre tenía una rayita curva en el borde, como si apretara demasiado. Las cartas decían venir de Ginebra, pero el papel olía a éter, como los pasillos de un sanatorio.\n\nSi esto sirve para que alguien no tenga que hacer lo que hice yo, úsenlo.\n\nMercè"
    },
    {
      "id": "d07",
      "tipo": "informe",
      "titulo": "Estado de cuenta de una paciente",
      "autor": "Administración del Sanatorio de Valhondo · Rascafría (Madrid)",
      "desbloqueadoPor": "p06",
      "texto": "Paciente: doña Remei Ferrer, viuda de Puig. Pabellón Sur, cama 14.\nIngreso: 28 de mayo de 1927, trasladada desde una clínica de Sant Gervasi (Barcelona).\nTarifa: 1.500 pesetas por trimestre.\n\nMovimientos de mayo de 1927 en la cuenta de la paciente:\n17-V · Deuda con la clínica de Sant Gervasi, asumida por la casa y saldada: 4.200 · contrapartida: libro de dirección, asiento 112.\n17-V · Estancia pagada por adelantado, 40 trimestres (julio de 1927 – julio de 1937): 60.000 · contrapartida: libro de dirección, asiento 112.\n\nIngresos recibidos del exterior por la administración en mayo de 1927: 3-V, giro postal de Madrid, 1.500 (familia Soler, Pabellón Norte); 12-V, giro de Segovia, 750 (familia Ruiz); 24-V, cheque de Barcelona, 1.500 (familia Vidal). Ninguno más.\n\nCorrespondencia: estafeta de Rascafría.\n\n(Sigue una segunda hoja, con la firma.)"
    },
    {
      "id": "d08",
      "tipo": "transcripcion",
      "titulo": "Julio Bastarrica, en la cárcel de Ondarreta",
      "desbloqueadoPor": "p07",
      "texto": "— ¿Cómo le llegó el sobre?\n— El lunes 4 de julio, un mes antes de lo de la 309, en mi casillero del correo interno. Es el de los empleados: no pasa por correos. Lo dejó alguien que estaba dentro del hotel.\n— ¿Qué había dentro?\n— La lista de los cuatro huéspedes, doscientas pesetas y una llave vieja. De bronce, con una chapa de latón y un número que no es de ninguna habitación de ahora. De las de antes de la reforma; ahora las llaves son de hierro y llevan el número grabado. Nunca había visto una: cuando yo entré ya no quedaba ninguna en la casa. Y una nota a máquina: que antes del 1 de agosto copiara las cuatro llaves y que registrara la lencería del tercero «tabla por tabla». Las llaves las copié. La lencería la usé para lo mío, porque tenía su llave; registrar, no registré nada.\n— ¿Y el lacre?\n— Una rosa con un ojo. Con una rayita curva en el borde, como de anillo.\n— ¿Desde cuándo está usted en el hotel?\n— Desde 1913, de botones. Lo de la 309 de 1912 lo sé de oídas: cuando yo entré, el cuarto ya tenía fama."
    },
    {
      "id": "d09",
      "tipo": "informe",
      "titulo": "Nota de la dirección del Gran Hotel Atlántida",
      "autor": "R. Elósegui, director",
      "fecha": "27 de septiembre de 1927",
      "desbloqueadoPor": "p07",
      "texto": "1. En la reforma de 1925 se cambiaron todas las cerraduras del hotel y los timbres de todas las habitaciones se llevaron al cuadro de recepción. Las llaves viejas, de bronce con chapa de latón, se fundieron todas salvo una, que no se pudo entregar a la fundición porque faltaba de la casa desde agosto de 1912.\n\n2. De quienes estaban en el hotel en agosto de 1912, el lunes 4 de julio de 1927 estábamos en la casa:\n— Adela Urquiza, gobernanta (en 1912, camarera del tercer piso). Vive en el hotel desde que abrió.\n— Don Ernesto Ibarguren, médico de temporada (lo era ya en 1912). Llega cada 1 de julio y se marcha en cuanto acaba agosto.\n— Yo mismo, que en 1912 era el subdirector de noche.\n— Don Saturnino Echaide, que en 1912 fue cajero de día de la casa y hoy audita nuestras cuentas cada julio por encargo de los acreedores de la sociedad; estuvo en el hotel del 1 al 6 de julio.\n— Los huéspedes de julio, varios de los cuales veranean aquí desde el primer año; de ellos no llevo lista en esta nota.\nEl portero de noche de entonces, José Lizaso, se jubiló con la reforma. Los demás empleados de 1912 ya no trabajan en el hotel.\n\n3. El correo interno lo reparte el conserje. Los casilleros de los empleados están en el pasillo de servicio, sin llave, al paso de cualquiera.\n\n4. Si desean algo del archivo del hotel, la Comisaría tiene mi permiso para copiarlo."
    },
    {
      "id": "d10",
      "tipo": "transcripcion",
      "titulo": "La casera de la calle Portales",
      "autor": "Logroño",
      "desbloqueadoPor": "p09",
      "texto": "— ¿Cómo era don Elías Varga?\n— Muy anciano, encorvado, con lentes. Las manos siempre manchadas de cola, como los encuadernadores, y una tos que daba pena. Venía en el tren de Madrid la primera semana de mayo, desde 1925, una semana cada año. Siempre traía un libro viejo para leer en el viaje. A nadie recibía: contestaba por carta. Lo que llegaba en mano cuando él no estaba lo guardaba yo en el cajón, como él me tenía dicho.\n— ¿Y el alquiler?\n— El primer año me lo pagó en mano. En mayo de 1926 me lo pagó de una vez hasta 1940, «por si un año no puedo venir».\n— ¿Y quién contestaba las cartas de la notaría?\n— Yo. Las que llegaban se las mandaba a una librería de Toledo; él me devolvía por correo lo que había que poner, o por telegrama si urgía, yo lo pasaba a máquina, lo sellaba con el sello de la mesa y firmaba con un garabato, como él me enseñó. Que no se supiera que era la casera. Si alguien venía preguntando, no decía nada: me lo tenía prohibido. La última la pasé a máquina a primeros de julio, para un museo de Barcelona.\n— ¿Vino alguien más a preguntar por él?\n— A finales de abril, un señor con sombrero y mucha prisa, de los que miran el reloj mientras hablan. Preguntó por don Elías. Le dije lo de siempre, que estaba de viaje, y se fue sin subir.\n— ¿Y este año?\n— Este año no vino. El 30 de abril llegó por correo una nota con un sobre cerrado dentro, ya con las señas: «No podré ir. Guárdele el cuarto a quien venga detrás. Si alguien le telegrafía la palabra, eche al correo este sobre. E. V.» Lo guardé en el cajón. El 7 de septiembre llegó el telegrama, desde Toledo, y lo eché ese mismo día."
    },
    {
      "id": "d11",
      "tipo": "carta",
      "titulo": "Carta del canónigo Marañón",
      "autor": "Fulgencio Marañón Gil, Toledo",
      "fecha": "26 de septiembre de 1927",
      "desbloqueadoPor": "p09",
      "texto": "Queridas señoritas:\n\nYo no he salido de Toledo desde 1904; no me pidan que les cuente nada de Logroño. De Aurelio, en cambio, sé mucho. Cada mayo se iba una semana «a ver a un amigo que ya no existe», y volvía cansado y contento. Este año no pudo: tosía desde el invierno y no salía de casa, aunque escribía cartas hasta el final. Murió el 2 de septiembre.\n\nAntes de morir me dio un sobre lacrado con una rosa y me dijo: «Si viene alguien a preguntar por mí y dice una palabra, dáselo». El 7 de septiembre vino un caballero de sombrero calado, que no se lo quitó ni en la sacristía. Le pregunté su nombre y me dijo, en cambio, una palabra. Era la buena. Le di el sobre. Me pidió que no les dijera a ustedes que había estado: «si saben que estoy aquí, lo sabrá quien me sigue». El jueves 8, mientras ustedes estaban conmigo en la sacristía, me pareció verlo otra vez, en el claustro; cuando salieron ustedes ya no estaba. He faltado a mi palabra con él para cumplir la que le di a Aurelio.\n\nEn el verano les dije que Aurelio me hizo prometer que no les ayudaría; aquello era por el mapa. Para esto me dejó dicho lo contrario: «si alguien telegrafía la palabra a Logroño, dáselo todo».\n\nEn su cuarto, encima de la librería, he encontrado un cuaderno de tapas de hule. Hay hojas pegadas: les copio aparte lo que se lee bien, y las pegadas se las he despegado al vapor y van sueltas dentro, con lo demás que lleva el cuaderno. Se lo mando hoy, certificado, a su agencia de Madrid. Creo que es suyo más que de nadie.\n\nF. M. G."
    },
    {
      "id": "d20",
      "tipo": "informe",
      "titulo": "Hoja del libro de la casa · agosto de 1912",
      "autor": "Copia que el director adjunta a su nota",
      "desbloqueadoPor": "p09",
      "texto": "LIBRO DE LA CASA · AGOSTO DE 1912 · PERSONAL DE NOCHE Y TERCERA PLANTA (copia literal)\n\n— Subdirector de noche: D. Ramón Elósegui. Duerme en el primer piso, junto al office de esa planta. Custodia el llavero de reserva de todas las habitaciones y tiene la combinación de la caja de caudales.\n— Cajero de día: D. Saturnino Echaide. Tiene la combinación de la caja de caudales. No duerme en el hotel: en la ciudad.\n— Médico de temporada: Dr. D. Ernesto Ibarguren. Cuarto de guardia 218, segundo piso, ala norte, junto a la escalera de servicio. Atiende también fuera del hotel si lo llaman.\n— Camarera del tercero: Adela Urquiza. Antes de la apertura, doncella en la villa de la señora viuda que había en el solar (1908–1910). Tiene la llave maestra de su planta. Una pariente suya duerme en el ala de servicio del 18 al 22, de visita.\n— Portero de noche: José Lizaso. Garita de la puerta. Lleva el libro de portería.\n— Detective de la casa: F. M. Cuarto del sótano, al pie de la escalera de servicio.\n\nRopa de casa de los huéspedes (batas y zapatillas de fieltro): para que la lavandería no las mezcle, cada planta lleva su cinta: azul el primero, verde el segundo, roja el tercero. El personal no la usa.\n\nTercera planta: habitaciones 301 a 309. Office de planta al fondo del ala norte, junto a la escalera de servicio y al montacargas.\n309 · Sr. E. V. (Oporto) · desde el 17 de agosto."
    },
    {
      "id": "d21",
      "tipo": "carta",
      "titulo": "Nota en el forro de la caja del sombrero",
      "autor": "Y.",
      "clave": true,
      "desbloqueadoPor": "p09",
      "texto": "ME SIGUE UN HOMBRE SIN NOMBRE DESDE SAN SEBASTIÁN. STOP. NO OS LO LLEVO A CASA HASTA SABER QUIÉN LE PAGA. STOP. SI ME COGEN QUERRÁN SABER QUÉ ES LA SEXTA Y DÓNDE ESTÁ. NO LO SABRÁN POR MÍ. STOP. VOSOTRAS TAMPOCO. AVERIGUADLO, QUE ES VUESTRO OFICIO. STOP. Y."
    },
    {
      "id": "d12",
      "tipo": "informe",
      "titulo": "El cuaderno de tapas de hule: el acta",
      "autor": "Copia del canónigo Marañón",
      "desbloqueadoPor": "p10",
      "texto": "En la primera hoja, a pluma. (Nota del canónigo: «Copio lo que se lee; el papel está roto por una esquina y por un borde. Las firmas no se las copio: van en el cuaderno, que les mando certificado con lo que lleva dentro».)\n\n«ARKANA. Anno Domini MCMIX.\n\nNosotros, nueve amigos de oficios distintos, guardaremos lo que otros quieran hacer desaparecer —cartas, testamentos, pruebas, llaves— hasta que alguien honrado pueda devolverlo. Nada se guardará entero en un solo sitio: lo que se reparte en nueve [roto].\n\nCada uno llevará encima, en lo que quiera —un anillo, un broche, una leva, un billete—, los números de los otros ocho, y nunca el suyo: así, quien tenga en la mano la prenda sabrá qué número falta en ella y a quién pertenece.\n\nElías ha dibujado la rosa sobre el mapa de nuestras ciudades y la ha cortado en nueve: cada uno guarda su trozo, y el trozo es su credencial ante los demás.\n\nTomamos por señal la rosa que ya estaba en el Atlas en 1611. No somos los primeros nueve.\n\nE. V., cartógrafo, Oporto. A. S., librero, Toledo. Y siete firmas más, cada una con su número de tres cifras.»\n\n(Nota del canónigo: «Al dorso hay algo escrito muy apretado y tachado; no lo copio porque no lo entiendo. Va en el cuaderno».)\n\nAl pie del acta, con la letra de Elías:\n\n«Si un día faltamos, el encargo pasará a quien oiga la palabra. Le daremos el nombre que los griegos daban al señor de la casa, el que responde de ella y de cuanto guarda: O KYRIOS. Con k, como ARKANA, para que las dos palabras se miren. Y escrito en desorden, porque lo que se guarda bien se escribe desordenado.»"
    },
    {
      "id": "d24",
      "tipo": "diario",
      "titulo": "El cuaderno de tapas de hule: lo que se lee",
      "autor": "Copia del canónigo Marañón",
      "desbloqueadoPor": "p10",
      "texto": "Más adelante, con la letra temblona de Aurelio. (Nota del canónigo: «Entre 1910 y 1925 hay páginas pegadas; las he despegado al vapor y van sueltas en el cuaderno. Aquí, lo que se leía sin tocarlas».)\n\n«Este cuaderno lo escribo para quien lo encuentre sin deber: aquí va la mitad que puede leer cualquiera. La otra mitad la pego.\n\n1923. Un librero de Lisboa compra en la almoneda de la testamentaría de Elías el lote de sus papeles. 1925. Al abrir un legajo cerrado a mi nombre, me lo manda. Dentro, las cartas que le confió una señora de San Sebastián en el verano de 1910: tenía miedo de quien le ponía las gotas por la noche; no dice quién. Murió en septiembre, dice el papel. Su médico heredó lo bastante para levantar un sanatorio al pie de Peñalara. Su administrador, el que llevaba la casa, se fue con la venta al hotel; su apoderado, el que llevaba sus cuentas, vendió la villa y los jardines a los del hotel. A su doncella la despidieron. Elías murió dos años después que ella, en San Sebastián, el día que fue a preguntar. Con el legajo venía el parte que el hotel mandó a Oporto: «fallo del corazón; el detective de la casa, F. M., asistió al finado».\n\nLe pido a un astrónomo de Peñalara que vigile ese valle.\n\nDesde 1925 firmo como Elías. Que el que se llevó su anillo crea que Elías ha vuelto, y que asome la mano. Pongo anuncios en los periódicos de Madrid y Bilbao: “E. Varga, notario, Logroño, asuntos antiguos”. Quien recuerde ese nombre del registro de un hotel vendrá a buscarlo.\n\n1925. Una conservadora de Madrid me compra el itinerario antiguo con la ciudad de la estrella. Si la encuentra, saldrá en los periódicos, y quien lleva quince años mirando rosas de ocho puntas querrá pagar la pala.\n\nSeptiembre de 1926. Los periódicos de Madrid cuentan que una agencia de detectives ha encontrado unos objetos desaparecidos. Es la primera vez que ese nombre sale en un periódico: Arkana. Desde que leí aquel parte buscaba a quien oyó la palabra, y estaba en la guía de Madrid. Solo pudo ponerle ese nombre quien oyó a Elías la última noche. Le pongo un telegrama: “LA PALABRA QUE OYÓ EN LA 309 TIENE DUEÑO. TENGO LO QUE ELÍAS GUARDABA. TOLEDO. NO TARDE.”\n\nOctubre. Ha venido. Le he dicho que el nombre en su puerta es un faro para quien leyó esa palabra en otros sobres hace años, y que no vuelva a casa hasta que ese hombre mire a otra parte. Le doy lo que Elías guardaba de los muertos: el billete en blanco del ferroviario, con la rosa, para que deje señal por donde pase y el del anillo mire al que viaja y no a la puerta. Ha tomado un piso en Madrid, en la calle de la Luna, a diez minutos de sus hijas y lejos de su puerta; me deja las señas para lo que haga falta. Lo mando a Oporto, a buscar lo que quede de Elías: el Atlas de los Dos Horizontes, el de la rosa de 1611 en la tapa.\n\n[páginas pegadas]\n\nMayo de 1927. F. M. escribe desde Londres: alguien paga a un inglés con cartas de “mi” notaría, selladas con un anillo. Ha asomado la mano.»"
    },
    {
      "id": "d13",
      "tipo": "telegrama",
      "titulo": "Telegrama del Observatorio de Peñalara",
      "autor": "E. Montero",
      "fecha": "28 de septiembre de 1927",
      "desbloqueadoPor": "p10",
      "texto": "AGENCIA ARKANA MADRID\nNO ME CONOCEN STOP EZEQUIEL MONTERO ASTRONOMO OBSERVATORIO DE PEÑALARA STOP\nEN 1925 UN LIBRERO DE TOLEDO ME PIDIO QUE VIGILARA EL VALLE STOP EN AGOSTO ME ESCRIBIO QUE SI VEIA ALGO LO TELEGRAFIARA A USTEDES STOP\nVUELTO AYER DE MADRID TRAS DIEZ DIAS EN LA ACADEMIA STOP\nMI AYUDANTE ANOTA DESDE NOCHE 23 SEPTIEMBRE UNA LUZ AL PIE DE LA CUMBRE ENTRE LOS PINOS STOP\nYO LA VI ANOCHE STOP\nNO HAY OTRA CASA EN ESA LADERA STOP\nEMPIEZA SIEMPRE 03 17 STOP\nDESTELLOS POR PAREJAS DE GRUPOS STOP\nANOTO\n1 4 / 1 5 / 3 5 / 3 4 / 4 3 / 2 4 / 4 4 / 3 4\nPAUSA LARGA Y VUELVE A EMPEZAR STOP\nMI AYUDANTE DICE QUE PARECE COSA DE FAROS STOP\nMONTERO"
    },
    {
      "id": "d14",
      "tipo": "recorte",
      "titulo": "Guía de sanatorios de la sierra · 1927",
      "autor": "Revista «La Medicina Ibera» (de la biblioteca del observatorio)",
      "desbloqueadoPor": "p10",
      "texto": "SANATORIO DE VALHONDO (valle del Lozoya, a los pies de Peñalara). Enfermos del pecho y de los nervios. Siete edificios: dos pabellones, capilla, lavadero, portería, casa de la dirección y un depósito de agua de piedra, apartado entre los pinos, de dos alturas, con puerta de hierro y un ventanuco alto en la cara que mira a la cumbre. Lo llenaba una acequia vieja que sale del arroyo por una toma con compuerta, en el extremo de levante de la finca; el lavadero desagua al arroyo por otra compuerta, en el de poniente. Desde que llegó la conducción, la acequia está cerrada y el depósito, en desuso.\n\nLo fundó en 1911 el que había sido médico de cabecera de una viuda rica de San Sebastián, con el legado que ella le dejó «en agradecimiento». Los terrenos los aportó la sociedad del Gran Hotel Atlántida, que tiene un vocal en la junta del sanatorio: D. Cosme Larrauri, naviero. Un banco de Bilbao es acreedor hipotecario de la casa desde su fundación; su administrador, con poder del banco, lleva la cuenta de dirección. El médico sigue pasando los veranos en el Atlántida. Correo: estafeta de Rascafría."
    },
    {
      "id": "d17",
      "tipo": "mapa",
      "titulo": "El séptimo sello: «IX de IX»",
      "visual": "fragmento",
      "desbloqueadoPor": "p10",
      "texto": "El fragmento que os llegó por correo desde Logroño el 9 de septiembre, con el lacre de la rosa. No encajaba en el mapa de los siete sellos: es un trozo de papel de dibujo con la punta de una rosa y una palabra, «Toledo», y en la esquina, «IX de IX». Al dorso, la dirección de la calle de la Luna, «la próxima luna nueva» y la firma de Elías Varga."
    },
    {
      "id": "d16",
      "tipo": "informe",
      "titulo": "Manual de señales del Cuerpo de Torreros",
      "autor": "Manual del Cuerpo de Torreros que Yoksrio guardaba en el archivo de la agencia",
      "desbloqueadoPor": "p13",
      "texto": "Señales nocturnas por destellos entre torreros\n\nCada letra se transmite con dos series de destellos: la primera indica la fila y la segunda la columna del cuadro.\n\n       1   2   3   4   5\n   1   A   B   C   D   E\n   2   F   G   H   I   J\n   3   L   M   N   O   P\n   4   Q   R   S   T   U\n   5   V   W   X   Y   Z\n\n(La K se sustituye por la C.)"
    },
    {
      "id": "d15",
      "tipo": "informe",
      "titulo": "Estado de cuenta: segunda hoja",
      "autor": "Administración del Sanatorio de Valhondo",
      "desbloqueadoPor": "p13",
      "texto": "(Segunda hoja del estado de cuenta de doña Remei Ferrer.)\n\nLos traspasos desde la «cuenta de dirección» los autoriza y firma el administrador de la casa, con poder del banco acreedor hipotecario del sanatorio. El director médico no interviene en la cuenta de dirección.\n\nFirmado: S. Echaide, administrador."
    },
    {
      "id": "d25",
      "tipo": "informe",
      "titulo": "El acta auténtica",
      "autor": "Dentro del cuaderno de hule del canónigo",
      "visual": "acta",
      "desbloqueadoPor": "p14",
      "texto": "Suelta dentro del cuaderno de hule, la primera hoja original: el acta de 1909 con sus nueve firmas, cada una con un número de tres cifras, unas iniciales, un oficio y una ciudad. Junto a seis, con la letra temblona de Aurelio, una cruz y un año. Dos firmas tienen una gota de tinta encima, de la pluma de quien puso las cruces. La sexta está rota por el borde del pliego: quedan el número, el final de una palabra —«…dora»— y una rosa dibujada a lápiz. Sin cruz, tres: la 006, la 008 y la 009.\n\nAl dorso, una cláusula tachada con la misma tinta del acta, de la que solo se lee «…le guardarán…»."
    },
    {
      "id": "d33",
      "tipo": "fotografia",
      "titulo": "Recuerdo del expediente 002: el reverso del broche",
      "autor": "Vuestro archivo",
      "visual": "reverso",
      "desbloqueadoPor": "p14",
      "texto": "La fotografía que hicisteis en Barcelona del reverso del Ojo del Horizonte, cuando el joyero levantó el engaste: la rosa de oro antigua y, grabadas en ella, unas letras de tres en tres. Una numeración en la vieja clave de los joyeros, la del libro de encargos de Roig. Todos los números menos uno."
    },
    {
      "id": "d26",
      "tipo": "fotografia",
      "titulo": "El billete de 1910",
      "autor": "Del expediente cero, dentro del cuaderno de hule",
      "visual": "billete",
      "desbloqueadoPor": "p15",
      "texto": "Dentro del cuaderno de hule, en un sobre aparte rotulado «Expediente cero · 006», hay cuatro papeles. El primero: un billete de primera clase de la Compañía del Norte, picado por el revisor. «Coche 0 · Asiento 0 · San Sebastián – Logroño · tren de la noche · 14 de septiembre de 1910». En el reverso, un sello diminuto: la rosa de ocho puntas con el ojo. Un coche y un asiento que no existen en ningún tren de la Compañía."
    },
    {
      "id": "d27",
      "tipo": "informe",
      "titulo": "Copia del certificado de defunción",
      "autor": "Del expediente cero",
      "desbloqueadoPor": "p15",
      "texto": "El segundo papel del sobre.\n\nCERTIFICO que doña Catalina Ugalde Iriarte, armadora, viuda, de cincuenta y ocho años, natural y vecina de San Sebastián, ha fallecido en su domicilio, villa Ugalde, el día 14 de septiembre de 1910, a las veintitrés horas y diez minutos, a consecuencia de fallo del corazón, habiéndola asistido en su última enfermedad.\n\nSan Sebastián, 14 de septiembre de 1910. Dr. E. Ibarguren.\n\n(Al margen, con la letra de Elías: «Copia. La caja se cerró por disposición de la difunta».)"
    },
    {
      "id": "d28",
      "tipo": "almanaque",
      "titulo": "Horario de la Compañía del Norte, 1910",
      "autor": "Del expediente cero",
      "desbloqueadoPor": "p15",
      "texto": "El tercer papel del sobre: una hoja de horario, doblada en cuatro.\n\nCOMPAÑÍA DE LOS CAMINOS DE HIERRO DEL NORTE · Servicio de verano de 1910\nTren de la noche · San Sebastián – Logroño\nSan Sebastián (Norte) ...... salida 22:40\nAlsasua ................... 00:35\nLogroño ................... llegada 04:05\n\n(Subrayada a lápiz, la salida de San Sebastián.)"
    },
    {
      "id": "d29",
      "tipo": "carta",
      "titulo": "Carta de una señora a Elías Varga",
      "autor": "San Sebastián, agosto de 1910",
      "desbloqueadoPor": "p15",
      "texto": "El cuarto papel del sobre: una carta de dos párrafos, en papel fino, con un lacre roto.\n\n«Elías:\n\nMi apoderado viene los jueves con papeles que firmar y se queda a “ayudarme” con el frasco. Desde que viene, las gotas me sientan peor. No escribo su nombre: si esta carta se pierde, prefiero que no lo lleve. Tú sabes quién es.\n\nSi vuestros amigos pueden hacer lo que me dijiste, que sea pronto. Rosa te llevará lo que haga falta. Las cartas tuyas las guardo donde ya sabes, con la otra, la que no me atrevo a mandar.\n\nC.»"
    },
    {
      "id": "d22",
      "tipo": "carta",
      "titulo": "Carta de José Lizaso, portero de noche en 1912",
      "autor": "J. Lizaso, San Sebastián",
      "fecha": "27 de septiembre de 1927",
      "desbloqueadoPor": "p15",
      "texto": "Señoritas:\n\nMe escriben ustedes por la noche del 20 al 21 de agosto de 1912. Fui portero de noche del Atlántida de 1912 a 1925 y me llevé mi libro a casa; lo tengo delante. Mi puesto era la garita de la puerta, no el mostrador: yo apuntaba horas y números de cuarto. Copio lo que apunté aquella noche.\n\n(Llovió desde las doce.)\n01:10 · Baja el señor subdirector y se queda conmigo en la puerta hasta pasada la una y media, mirando hacia la calle y el reloj. No me dice a quién espera. Vuelve a entrar.\n02:48 · Pasa por el vestíbulo el señor subdirector, en bata, y me pregunta si ha vuelto el doctor. Sube por la escalera principal.\n03:02 · Entra el doctor por la puerta de la calle, con el maletín y el abrigo chorreando. Le digo que lo buscan en la 309 y sube. Entre la una y media y las tres no ha entrado ni salido nadie más por mi puerta.\n03:40 · Baja el señor subdirector. Me dice que el señor de la 309 ha muerto del corazón y que no se hable de ello.\n06:10 · Baja el señor de la 216 con equipaje y paga en recepción. Primer tren.\n06:40 · El de la 220, al de Hendaya, como cada 21 de agosto.\n\nDe los dos señores de Bilbao, la 216 y la 220, le diré que veraneaban juntos desde el primer año, en el ala norte del segundo, junto a la escalera de servicio. El de la 220 me preguntó la noche del 17, en el bar, por el portugués que buscaba a la viuda; lo había dicho yo, porque el portugués lo preguntó en voz alta en recepción.\n\nDe la villa, ya que me lo preguntan: yo fui su portero hasta 1910. Los jueves abría la verja al coche cerrado del banco, que entraba hasta la puerta del despacho; al del banco no le vi la cara más que de lejos, y no sabría decirle cuál de los dos señores de Bilbao era, si es que era uno de ellos. La noche que murió la señora, el coche del doctor salió a las diez y volvió a las once; luego nos dijeron que había muerto. El señor subdirector había sido el administrador de la villa, el de la casa, y vino al hotel con la venta. Al doctor también lo conocíamos: era el médico de la señora. Y la Adela servía en la villa. Media casa venía de allí.\n\nJosé Lizaso"
    },
    {
      "id": "d31",
      "tipo": "informe",
      "titulo": "Libro de la caja de caudales · agosto de 1912",
      "autor": "Copia de la Comisaría de San Sebastián, del archivo del Gran Hotel Atlántida",
      "desbloqueadoPor": "p15",
      "texto": "LIBRO DE LA CAJA DE CAUDALES · AGOSTO DE 1912 (copia literal de las aperturas fuera de horario)\n\nReglamento al pie de la primera hoja: «La caja lleva contador. Toda apertura fuera del horario de caja se anota con su hora y se firma por quien la hace. La combinación la tienen el subdirector de noche y el cajero de día. La caja solo se abre desde detrás del mostrador de recepción».\n\n3 de agosto · 02:10 apertura · 02:19 cierre · comprobación · (firma: un garabato)\n7 de agosto · 01:55 apertura · 02:08 cierre · comprobación · (sin firma)\n10 de agosto · 02:30 apertura · 02:41 cierre · comprobación · (garabato)\n14 de agosto · 02:05 apertura · 02:16 cierre · comprobación · (garabato)\n17 de agosto · 02:20 apertura · 02:34 cierre · comprobación · (sin firma)\n21 de agosto · 02:35 apertura · 02:47 cierre · comprobación · (garabato) · al margen: «cadenas del montacargas a deshora»\n28 de agosto · 02:15 apertura · 02:27 cierre · comprobación · (garabato)\n\n(Nota de la Comisaría: «El reglamento exige firma; en estas siete falta o es ilegible. El contador cuadra con las siete»)."
    },
    {
      "id": "d30",
      "tipo": "diario",
      "titulo": "Las páginas despegadas del cuaderno de Aurelio, y una nota de Elías",
      "autor": "Dentro del cuaderno de hule",
      "desbloqueadoPor": "p16",
      "texto": "Las hojas que el canónigo despegó al vapor, sueltas. Letra de Aurelio. (Nota del canónigo: «No estaban pegadas por la humedad: estaban pegadas con cola, a propósito».)\n\n«1910. La salida de la señora en el tren de la noche, con el billete del ferroviario. El doctor firmó lo que había que firmar; Rosa fue con ella. La caja, cerrada por disposición de la difunta.\n\n1911–1920. Valhondo: “la señora del Pabellón Sur”. Rosa, de enfermera. El doctor, dueño de un sanatorio hipotecado que no pidió.\n\n1920. El banco pone a su hombre en el sanatorio. Ibarguren se asusta. La llevamos a Logroño, a una casa de la calle Portales comprada a su nombre nuevo.\n\n1925. Abro la notaría en su primer piso: un nombre de muerto en una casa de muerta. Si el del anillo busca a ARKANA, encontrará un notario al que nadie ha visto y no a una viuda a la que nadie reconoce. Al astrónomo le pido que vigile el valle no por ella, que ya no está allí, sino por el hombre que el banco puso en la casa del doctor.\n\nEl apoderado era el del banco. Con unas cartas viejas no se acusa a nadie, y ella no quería acusar: acusar era volver a morirse.\n\nEl itinerario de la ciudad de la estrella venía con los papeles de Elías: la ciudad era de los nueve de antes, los del Atlas. Lo vendí para que la estrella saliera en los periódicos y el del anillo creyera que allí estaba lo que buscaba. Picó: pagó la expedición, y luego a un inglés para cavar debajo. ARKANA nunca guardó nada en piedra: guarda en nueve.\n\nEnero de 1927. Ella no quería prestar la joya. Le dije que una joya sin dueño no tiene cara, y que un museo es el mejor escondite para lo que todos han visto. Me equivoqué: alguien la había visto antes, en 1910, y la reconoció en el catálogo.»\n\nY la cláusula del dorso del acta, copiada en limpio por Aurelio: «Si uno de nosotros tiene que desaparecer, los otros ocho le guardarán la vida, repartida en ocho».\n\nUna cuartilla aparte, con la letra de Elías, fechada el 15 de septiembre de 1910: «R. U. calla por el doctor y por su señora; no es de los nueve; ha sido nuestro correo. A su hermana A. la despide el banco por unas joyas que no faltan: deuda nuestra. R. no quiere a A. cerca de la señora: lo entiendo».\n\n(Entre las hojas, una tarjeta con la letra de Yoksrio: «Las dos tardes que llamasteis a mi puerta yo iba detrás de él. Y.»)"
    },
    {
      "id": "d23",
      "tipo": "mapa",
      "titulo": "La tercera planta en 1912 (expediente 003)",
      "autor": "Archivo del hotel · copia de vuestro archivo",
      "desbloqueadoPor": "p16",
      "texto": "Plano de la inauguración, 1912. Tercera planta: habitaciones 301 a 309. La 309 era la más pequeña, al fondo del ala norte, junto al montacargas y la escalera de servicio. Office de planta al fondo del ala norte, junto a la escalera de servicio, con el cuadro de timbres de las habitaciones 301 a 309.\n\nEn la reforma de 1925 se suprimió la 309. Hoy no figura en ningún plano ni en ningún libro de reservas.\n\n(Nota de Gismera, al margen: «En la copia del archivo del hotel que nos mandó la Comisaría viene también el plano de la primera planta: el cuadro del office del primero lleva solo las habitaciones 101 a 112. Cada planta tenía el suyo. Y la escalera de servicio baja del tercero a la planta baja sin pasar por el vestíbulo: sale al pasillo de servicio, detrás de recepción».)"
    },
    {
      "id": "d32",
      "tipo": "informe",
      "titulo": "Libro de huéspedes de 1912 · segundo piso, ala norte",
      "autor": "Copia de la Comisaría de San Sebastián, del archivo del Gran Hotel Atlántida",
      "desbloqueadoPor": "p17",
      "texto": "LIBRO DE HUÉSPEDES · AGOSTO DE 1912 · SEGUNDO PISO, ALA NORTE\n\n216 · D. L. G. U., Bilbao · desde el 1 · hasta el 21 · (anotado: «primer tren; cuenta pagada a las 06:10»)\n218 · guardia (médico de temporada)\n220 · D. C. L. A., Bilbao · desde el 1 · hasta el 21 · (anotado: «tren de Hendaya»)\n222 · matrimonio de Pamplona · llegan el 21\n\n(Nota de la Comisaría: «La 216 y la 220 figuran a nombre de dos casas de Bilbao todos los veranos desde 1912. En el plano de 1912, el ala norte del segundo es, desde el fondo: el hueco del montacargas y la escalera de servicio; la 216, pared con pared con el hueco; la 218; la 220; y la 222, ya junto a la escalera principal»)."
    },
    {
      "id": "d34",
      "tipo": "mapa",
      "titulo": "Plano del Sanatorio de Valhondo",
      "autor": "De la biblioteca del observatorio, 1924",
      "visual": "sanatorio",
      "desbloqueadoPor": "p18",
      "texto": "El plano de la finca que Montero guarda en la cúpula: los siete edificios, el arroyo, la acequia vieja de puntos y dos compuertas en el arroyo sin rotular. La rosa del plano no tiene el norte arriba."
    }
  ],
  "pruebas": [
    {
      "id": "p02",
      "fase": "I · La calle de la Luna",
      "titulo": "La tarjeta que sobra",
      "tipo": "hotspot",
      "contenidoVisual": "tablero",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p03",
      "descripcion": "Un piso casi vacío y una cita a la que no ha venido nadie. Pero la taza con la huella de gato, los guantes de cuero y la caja de un fedora marrón no dejan dudas: el piso es de Yoksrio. Estuvo aquí: leyó vuestra nota del día 10 y dejó un periódico del 16, y alguien forzó la puerta antes de la cita. En el tablero, cinco tarjetas, cada una con una ciudad y una fecha. Vosotras habéis recibido cuatro telegramas.",
      "instrucciones": "Comparad las tarjetas con vuestros telegramas (sección «Telegramas» del cuaderno). Pulsad la tarjeta que no corresponde a ninguno.",
      "documentos": [
        "d01",
        "d02"
      ],
      "huellasRespuesta": [
        "50c05d875aba6c682dee3a73706aeed2c08ef13b26e9947c8ebdbd5ee0b3a107"
      ],
      "pistas": [
        "dc1:cFdTAkRNBlVWUxZVX1UQXFoGRQVDA0pKXFNUFwJWSwVTEFT31VsCAxhPQVURpZlXAg1CRlxFCQJbUvXWHBl7UhNCVgAMWA1dXBQQVUBeVURXEBMRDQMYWRVEW1ZI",
        "dc1:e1dOQwBWEBlHVRZeV0BRQxYHVkQPAxhVXEJYVkZQURRSUVQaRmYJClcWFFgFRltWDwwBXF0ARABaWBYQXBlGU19TUBEFVAIX",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQGDhhMUF1QUBRSVQAWVFUUNVQIRmtTA1cXElH6xwxCUEpFAAZZFgdXEl1XFkBTRxcNXA5bQVFEUFcUAQkEVB1ELwMYV0FDVBcSUkoLU0RRFAJQRjVZWEFlAQRZShILoZRXRQEQFVpXRUNMVxZAWVURBRc="
      ],
      "solucionDirector": "dc1:cENWFxZWQ01SRg5RRlVDEFUMWgoAC1xdWxFQTwdQTABbVV5AAxUFCVYWDVkXRltMBxYQWhkRAQ9QUUQEX1hBFhtVXhYAWAcZShQCUVFcURkYQ2ALARBZGFlQFVMDE/rKZVFeFDVQBAdLQgj1xQgY+9FCUAQZAQFDVFFZFkZWElJWFgZaVg6hggkUAVgSQFVcUwRBBQ4DGFxQEWZWCBNrBFRRQ0AP9scIGFMSFgADVBlXUEJRXEUXBkVCXwBfW0BTHRZyD0QLUhlXUURVVVtDRFlDVhdDB1QYVF9cQQNBSwBEWV8UAlBGClkWDEMBFExcRgYHFW8EFgRUDRYBV01A9ZJFFwcBGQ9YE0AFRlhRRFEWBkAQoMNWGFBdFVQTUlwERF5fFAJQRlcBB1MWHUZNVwdCDFpNBEQGWxZaBBJaXldFUxcHARk6VlhHFl1dGg==",
      "exito": "dc1:YFdZQzdcAVhAQA33k1ocEARSEwAGQllfWkJBWFwTVg4WWFFNRkEDCl1RE1cJBxhdA0IHRlxFAKCYVxhFdlxGRPCXREMAXENVUhQQVUBeVURXTxMXFghdTFpCFVQJXRgNVxBTXA9bBQ5dQgAaRA5ZQEYXDBVaEAUHUERYChJfW1hcFlMGRE0CSVJHRFpXU0JRRUNQCw1CVFkVXVBDFFIYBVMQaVsNRhQPVxYFU0QMV08DDEJMGRAKAhVYWRFTGVZZUVpWBwUVQ1xAVxZdRlUQVVhDQBFDAVRZQ1QbFyNfGAJDUVRRFFsJRl1FQVIBRgkAV1BOFUBFAAZbQkQKElxBQvCXFwcLWw9YV1tEUV4UQFxfBlQLQwFXVhVdVBcUXEsAFkkQ9s10NC15eCAWptEYdCUvK2373kpDdF5ZF1MZQVdR9Z4KFxkHXBNQp4dcUFUQRQJfp84DVhhUQEBSCl9ZEhZCVVIDRwMIW18ARUQQUVwMAxEVWEUlMX53eCQSSEdTE1NZAAtXF0tSRxBRW0cQVVhDVghDA0pbXVhDWEZXXUFaURBVAVAIBVFXQVMIRldNCaHTWhkVBRBUUllfElxAV10WRBYXGQBWQ10FRxJQVRBXEkYBDw5ZGFteVl8DHQ==",
      "escena": [
        {
          "texto": "dc1:f1cXFwVLCVxHVURQVxRjUVhDYAEBA0tMXPKUWUZXXQ0WAgEUAlBGB19ZEkILRl1KEqHDFVoJBRVUUldFUVZcFkZYVkMHUQpXUFwBQFMUXkVTFVJIQxFRVhXyhk8PV1dPFnNYXRdAD0ZUV0FaARBZVxIDQkVWF0QPVBZTFkNMW1hSDBcHAU0R+pJHRFxTTRBFWENQEQIGXUpbXhVRD11XQVJVEEAHRQcVGFgEURYHSxVGERdfXBELQ1ZZWBFAWBJTXxZUDBZaC1YfFB0UR1pREF4MWQVDBldaWVBRVkZWVkFVRVFAFFpI",
          "visual": "tablero"
        },
        {
          "texto": "dc1:dkUXEBEZD1xHRgUaEnnzkUVDWQsVB1YUFVz2lhUTXAREVVNcBxtGpJNxE1cKRnBWEgcOFXgRCKCUWEIMVlgcFmBZTkMBVUNdVkABV0ZdRlUWB1ZEDwMYW1RCVBcDQEwEFkZVRgdbCaSDGEFiAQj7lAdCFFBQCxAKQUT1zEEZU/WCWURN",
          "quien": "gismera"
        },
        {
          "texto": "dc1:f1cXCwtTAhlXWwZYU1BREFMQR6fCQl1LVkNcQwcTXQ8WXFEUBVkHEF0WBVNEClkZFAcIXFUJBU8VWldFQ0xXFkBZWwxEVQZcXRQQRldHEEBTEUALDQNLGFBfFVIKE1UUWFRfGkZkEw9dWEFFAUZUVkYODlBPptdDWVcWAVdT8YUJFlkMREoWSVwUCFFXRlxRGENgCwEQXRhZUBVaA0BZTRZVXBQS9s9GS18GQwFGXkulzw0b",
          "imagen": "img-piso"
        }
      ]
    },
    {
      "id": "p03",
      "fase": "I · La calle de la Luna",
      "titulo": "La nota en clave",
      "tipo": "eleccion",
      "obligatoria": false,
      "puntuacion": 60,
      "siguientePrueba": "p04",
      "descripcion": "Con el cuaderno de 1912 había una nota doblada, escrita en la clave de Yoksrio, la de la rejilla con huellas. Quien se lo llevó la dejó: no supo leerla.",
      "instrucciones": "Descifrad la nota con la tabla de la clave. ¿Qué os dice?",
      "documentos": [
        "d19"
      ],
      "opciones": [
        {
          "id": "a",
          "texto": "Que el médico del hotel es quien cerró la puerta de la 309"
        },
        {
          "id": "b",
          "texto": "Que las cartas de la viuda están escondidas en este piso"
        },
        {
          "id": "c",
          "texto": "Que no os fiéis de nadie de aquella casa, y que «la sexta» sigue como Elías la dejó: mientras nadie sepa qué es, está a salvo"
        },
        {
          "id": "d",
          "texto": "Que volverá al hotel cada 21 de agosto hasta encontrar a quien cerró la puerta"
        }
      ],
      "huellasRespuesta": [
        "048f8d1b4fd509bda8fb1357ce72ed57c22dde0b3d234c5b30510d39760da713"
      ],
      "pistas": [
        "dc1:f1cXFwVbD1gTUAEUXlUQU1oCRQFDB0tM9pAVUggTVAAWQ1VXBVyl1VYWNVMIA19LBw8DRhkcRAZbFncPR0pGU0AYFyYJSQZDUlBERF1GEFxXEBMUAg5ZWkdQRhcFXEoVV0MKFDVhKTYYRQQWFgNIUBIHQkFLABdDQ1NVAEEX",
        "dc1:f1cXDQtNAhlHXQFaVxREQlMQEwIRA0tdRh8VewcTSBNfXVVGBxUOB1paABYAAxhMCANCVlgWBVgVWldFQVxVQ11SVk9EXQYZUlgDQVtRXhBZQ1IIBA0YWRVAQF4DXRgNWlFdVUb3zQpZFhJTHBJZ+91M",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUShyVZXFV5GFwBa+8hfQxBQAxUIB1xfBBYAAxhYFxcHWVUERABURVdLEnVTFkBTTxcFGRBQVEEBFFFbXV8WJl+nzgNLGFlQFVMDWfvSGBB9XQNbEhRZRUFYBQJRXEYRB0VYRRUW9p8WAEEVElNAQvTCRFhDSlJYElvwjx4="
      ],
      "solucionDirector": "dc1:f1cXDQtNAhlXXQdRCBTym3gsEyswQn5x9rh8ZEZ3fUF4cXR9IxUiIxh3MGMhKnR4RiEjZnhLRC90FmUgam1zFmB/cDYhGSB2fntEcX73vXFlQ38lQyZ9cvaiGxcren0vYmJxZ0Z7JyJxc0FlITZ5GTc3obwZIDdPFXNlMfG4EncTZXYvMnZNGWoapo8S9ptxRxZWCA8DGFtUQlT13RNdEhZVXBQhRwcIGH4OQgEKGHgSDqGUVxENB1QWUgASCAsHARgXoc91AhlAURxAU/aLEFMQEwgCQkhKUFZAWRJSGAVTXBBXB0YJXBhYDhYAA1tQFEITQPrMRAZGFh4AQRleWRNHQgZEVQJKE0QWQVdWUUMWUgZEGkIJDhVZVFQDXRgFU1RFVw9HT0gYZQgWFBRdXhMMFlRXRQUPFVJfF1daRllBGhcGCBkHUEFRB0BdRhBDWQ9cRBADWl0VXVoXF0ZdQVpREFoJQQdGXF8CU0o=",
      "exito": "dc1:8Z15DERWEBlVXaedW0cQVFNDXQUHC10YUVQVVhdGXQ1aURBXB0YHSBh6ABYXA0BNB0IRXF4QAUNWWVsKEnxe9Z5XREMIWENdVl6nhxwUfVlTDUcWAhEYVlRVXFJGQF0RVxBBQaWcRgNLGkFTFxL7mEYDQkZYCRIMG/SNRWtWWUVBX1hDClZDV1xZBkZTFFEQWAJXDQZMGGEVWVRVClIYBVMQ8p8KVEYVXU4VV6bdGFoJDw0VXQBEAllRWUVDTFcWdlr0zgVKQ29SRgNVElBVWvXQEx1DE01dFVlUTkZCTQQWXVFaElAIA0oWBFhEFV1aFAcWWhdFJQ1aQlcBXlYSU10WUg9ETQJbX1EWWwgUVUMWD1JEExBdX0BfQVZGV11BU0NEUUZQHhZdUghTChJdFw=="
    },
    {
      "id": "p04",
      "fase": "II · La habitación 309",
      "titulo": "Lo que cura y lo que para",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p05",
      "descripcion": "El certificado dice «fallo del corazón». Uno de los telegramas de Yoksrio no está de acuerdo, y os pide que contéis algo.",
      "instrucciones": "Contad las gotas y leed bien lo que Varga dijo al despertarse. ¿Dónde estaba el veneno que bebió?",
      "documentos": [
        "d03",
        "d04"
      ],
      "huellasRespuesta": [
        "4f158fb7dfcdce83b28af3bab2a06ee80b0fc82e068442464014b58c212f3c8b",
        "f4f0f32252a62284f92aa086cd1b812eb48539f1b4054cd7bf2db8f1d95630e3",
        "5f362ee27745a9a4ab1d468f7adf4579bcecdd3a4fe5c943c4b889a20be819a6",
        "7402828d2c945b2690be50b85ef65e57be3e2319a0afc190276471bf9d780d32",
        "3c1bfb6ed01bb71a083259520ba291f87747d402348a21881a5458e2c9240c43",
        "3c1bfb6ed01bb71a083259520ba291f87747d402348a21881a5458e2c9240c43",
        "106e2b141a0a593c3c46599b45ebfb96e38370986bdd87b617dd26f6dc9a4ef5",
        "2db2046fec4d9a0593430e7ef9fb6271938f9bcd110910dec72f0e1d5210c0ba",
        "0e7dbed4f11b18892dfb8ee94b94a4b19dcc94e3452058d77a4360981b13a658",
        "9954d0c4079a1f572f2f279db117f8d32f8975d76e2da548bae96079a5f9e8d5",
        "4f158fb7dfcdce83b28af3bab2a06ee80b0fc82e068442464014b58c212f3c8b"
      ],
      "pistas": [
        "dc1:cUNEAAVdQ1xfFBBRXlFXQlcOUkQSF10YXVBXWwcTXAQWRV4UDloLBEpTQUcRAxj7zQwNFVQQFgr2hRYBV1USVVxEVhmnig37iBpE9o1lRfOfQ1wXQxJRXFARREIDE1sOWETznQ9GWUZtWEFQFgdLWglCDEBcEwtDUVMWBltXUUNWWEMCRF4MTVJHSBRBUVlDFgJfRAehlVkZEUwXAlxLQVNeEFEKFQAJVlIOFgVGVFgVQhZHXBZEB1AWWgQSVFNSQUNQAgBYTQ==",
        "dc1:Z0RSCgpNAhlKFBdRW0cQV1kXUhdDBl0YWPKUREZdV0FVUVJRCBUDCBhDD1dEEldUB0IGUBkWAQpGGBYzU0tVVxNCWA6nikNKRhQSVUFbEFEWD1IXQwZRXU8dFVQJXldBVVFUVUZbCQVQU00WHUZdVUYUA0ZWRQEQQVdUBBJKV1VcFlQWBVcHVhNYCxRXWlNfWBdBBRENVhYVcBVbB0AYBVlDEE1GWAMCUVdBUg0MVxkXFwcVUQQGoJhXFgdXW1tSXBgXodt9BhlX99daVlEP",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQHBxhUVBFfVhRBWUFSVRBYBxULA0tfDVoFShhIEwdCUEoRBQFUFldFXlgSW1pCVgdKGTJMWlEKFFFVQlf10BMBD0JOXVtUW1hGXVdBWl8QRBNGCUZdWEFTCEZOWBUNQlFcRQgCFUJZCFMDElpcFlIADPrQGVZaEFFAWxBVWENfBUMIWUpHUBkXA10YAFpX844IFQsJVVMPQgtGXVcSEAcVVQQXQ1FfUx8SQBJaUkUXBwtKQ0ATWQFQW1Ue"
      ],
      "solucionDirector": "dc1:dlgXDwUZCVhBRgUUVlEQUVEWUkQHBxhUVBFYUhVaVA1XHhBxChUSA1RTBkQFC1kZFxcHFVYWRA9ZU1GmgRlGRFJFFw8FGQtYUV0QVVFd84NYQwBUWkJcUVZUFUYTVhijnVFBQQNZRg5XWwNEAaSDGQgNQlhMFw2ghhZSAF4ZUVlBV02g11dDQBNFEVESWlFUXwYTBwwMTPuGEVlWFRNfDkJRQxQCUApGXkQARQcJFhkjDkJRUBYUBltFVxdbVhJEVlVSF6eKQw8TUwtAU0cQUVpDV6fOAxhcUBFAWUZVSgBFU18UCEADEFcWBVNEUwgVRgcMFVwJRBVURVlFVlwSWlIWQwwJWENYE1gFRxJQWVVMWBMFQw5ZSxUBBg1XAxgFU1wQBlcVFxNdUgBUBQgYC1xCBFRVEQUNFQUARVVWRldAFlMGRF4MVUNRShR3WBBGVxBcRAcHGFRUEUFYC1IYBEVEUVYHFRUDW1lBUgEVXFxGDgNGGQENBk8WHjNTS1VXE1pYQxBWDvqAFAFaRlteU1MQH0QADVVXFVJUUwcTVg5VWFUdXRUwB0pRABYAA0tJAxAW9opFBwxbFkUAVhlaV1BfVkMIWBAZV1sXFEsUXVVSClJEGkL6k1dUV16lgPraDRBcVUZfBxRKV0FTFxJZWwdCAxVVBEQOXEJXARwZd1oTQFINAVcMGVZHEFVQVRBVWENfBUMIWUpHUBkXA1BQAFJfEFEIQRQDGFoARUQCUVwcQhsVVQQXQ1FZRUVLGV9TV19WQxRWERlSWANBW1FeEEcWVkQGDExK9oIVVAldGA1aUUZRRlgPA1ZCE1cXRm5YFAUDFV0KFg72m1dLEm9TWlZYFwkFSxFYHxQOVUBGURBSBhMFBBdZFBVbVEUUUhgFUxBcVUZYAxVRWg1XSkZrUEYBDVtNABcXVFgWp5ldW1FaQlYPpoJPGUNRAF1WWFVDFhJGAUMGUV9UXxVTpYBWBVMQVUcSVAQHAhYNV0QWSlwBFwxBWEUBEBVTWkVAXFFfQ19SDRBcTQ==",
      "exito": "dc1:dlgXDwUZCVhBRgUaEnhfEFsKQAkMQklNUBFZUkZbWQP1nVFaRkcDBV1CAFILRkhYFANCUFVFBwxHV0ymgVceFkdEUgoKTQIZShQXUVtHEFdZF1IXQwZdGFjylERKE10CXlFUVRUVAwgYWgAWDgdKSwdCBlAZCQVDWFNFDF5VUxZeX1INEEsCShNQC0Zf951RGkNWChcQXRhZUEYXAlpdGxZJEFgHRkYCV0VBT0QLXV0PA04VSQoWQ1RaURBbXFwWQkNSQwFXF0vwh0RXXVoQXFoCRQFDGxhbUENH9NUTSA5EEFZBA0cHSBhyBBYoCVZdFAcRFVEERA9ZU1EEVlYeFkNZRUMBVUNaXEYWUV0UUfOfEVYLT0JUWRVDUEQWRl0SQlEQUAMVJxRMXhRERDZdVAQHEEFWC0o="
    },
    {
      "id": "p05",
      "fase": "II · La habitación 309",
      "titulo": "La 218",
      "tipo": "eleccion",
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p06",
      "descripcion": "Entre las 02:37 y las 02:50 de aquella noche, el joven detective subió, bajó y volvió a subir. En el camino buscó a alguien y no lo encontró.",
      "instrucciones": "Según el cuaderno, ¿quién no estaba donde debía cuando fueron a buscarlo?",
      "documentos": [
        "d03"
      ],
      "opciones": [
        {
          "id": "a",
          "texto": "El médico, en su cuarto de guardia"
        },
        {
          "id": "b",
          "texto": "La camarera, en el office del tercero"
        },
        {
          "id": "c",
          "texto": "El subdirector, en su habitación"
        },
        {
          "id": "d",
          "texto": "El portero, en la garita de la puerta"
        }
      ],
      "huellasRespuesta": [
        "2cde43ff596e4fc4291f0d25c01ab816ca3acbfdf5e9de3015c380d48280e856"
      ],
      "pistas": [
        "dc1:d1NEExH6ykoTUAEUQ0FVEFoCEwcCD1lKUENUFwdRSghTQlEUClRGVQgPTRYBChhdAxYHVk0MEgYVVFcP8YoSVVxERQoBVwdWE1VEQVwUU0VXEUcLQwZdVBVCUFATXVwOFkBZRwkb",
        "dc1:f1cXUVUBQ1xBVURRXhRTRVcRRwtDBl0YUkRURQJaWUFSVVwUC/bPAlFVDhpEDE1XEg1CVBkJBUNQRVUEXlxAVxNSUkMXXBFPWlcNWxwUdUNCAlEFQxRZW/acWhk=",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQGDhhV9phRXgVcFkF4XxBRFUEHBFkWBFhEFU0ZBRcDR00KRAIVWlcWEgkADAcDFxpEVQ9cVPfXFFMUXFEWUANdQxRdUVtFUBcLWlYUQl9DFAJQFRZN9chFSEZbVghCB1kZCAUPUEL1yFwZSxZWWhcCBksKXlwUDPeIWVVUWU0="
      ],
      "solucionDirector": "dc1:dloXDqeQB1BQW14UXlUQAgdbH0QQFxhbQFBHQwkTXAQWV0VVFFEPBxhcFFgQCRhYRg4DFVwWBwJZU0QEEl1XFkBTRRUNWgpWHxQBR0ZVUlEWFVIHoM9ZGFZEVFkCXBgEWhBUURJQBRJRQAQWBgdS+tVCAxVbEBcAVERaCh4ZSxZfWlIEp4pDWBNYBRQBBAkQV0NfBRBCCAsPAQAXBVxWQVNcEFkHWQMS+5sPFh1GXVVGAwBHUAILQ131jAhXXV0YE3NbQwdMAl1WRgpbElpfEFIKUAFDBvuLW1VQFwNATABUURAcFVBGAl1SFFUNFPuYRg8XVlEKRA72l0VFU11XWlJYQwZEWgxXE1EIFF5dUkJZQ1cBQxJXSkFUR/TLUgJBV1xXQQ9QCEZUWUFTFxZdSwcAAxVcC0QPVBZGEFdLRlcTUlIQAFxDVVIUEVpTFEkQUgpWHkMbGF1bRUf01RNcBBZcURQFVAoKXRYAFggHSxlWUVgFC0UHC1pERABTV1ZZCBZWB6eKDV1WFAJBVxRDX1oMEwgMQlxRR/KUF6WaVEgYEHEUClRGBVlbAEQBFFkZH0IDWRkWEQFRX0QAUU1dRBNYVgcNXENfRlFEVRJWRUNVAkEIDBEDGFBdFUcJQUwERF8QWgkVBxZZRARVAUZdV0YHDhVaEAUHUERYChwZd0VHVxcTFkwGW1IUBVhbWVVeQgITCAJCSFFGRVQXAFJUElcQU1sIFRMIGF4EVQwJGFoPBxBBVks=",
      "exito": "dc1:f1cXUVUBQ1xAQAVWUxRGUVWgngVNQn1UFVz2ngJaWw4WXl8UA0YSB1pXQVMKRktMRgEXVEsRC0NRUxYCR1hAUlpXFwJEVQJKEwRWDgYBEEkWD18BBKGLGFQRWVZGAAhYFkZVXQhBA0ZVXw9DEAlLGQIHEUVMps0QGRZVClwZV1oTW1YPAU2glF0UHRRXWBBRVBFaAwxCUPuPXFBTCR0YMVlCEFUOWhQHGEUOWgtGS1gEoctcSkUAoIZYUgASV10WVkVDAgZYTQ=="
    },
    {
      "id": "p06",
      "fase": "III · Las rosas que pagan",
      "titulo": "El canto del aro",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p07",
      "descripcion": "En 1927 alguien pagaba a Pemberton por carta, firmando como la notaría Varga. Pemberton os ha contestado desde Londres.",
      "instrucciones": "¿Qué une a quien pagaba a Pemberton con la noche de 1912? Combinad la carta de Pemberton con el telegrama de Londres y el cuaderno de 1912.",
      "documentos": [
        "d05",
        "d03"
      ],
      "opciones": [
        {
          "id": "a",
          "texto": "Escribía las cartas desde la notaría de Logroño, igual que Varga"
        },
        {
          "id": "b",
          "texto": "Sellaba con el anillo que desapareció de la 309"
        },
        {
          "id": "c",
          "texto": "Las echaba al correo en el propio hotel: el matasellos era de San Sebastián"
        },
        {
          "id": "d",
          "texto": "Firmaba con el garabato de la notaría y pagaba en libras, como el cliente de enero"
        }
      ],
      "huellasRespuesta": [
        "4934b2c86acbb639de87abf115ed9e66fdc7f93c9d8e66cf0136f3f15452ee9e"
      ],
      "pistas": [
        "dc1:Y1NaAQFLF1ZdFABRQVdCWVQGExENAxhKVEhcQwcTWxRERlEUA1tGA1QWA1kWAl0ZAgcOFVUEBxFQGBYwXFYSUlYWWwwXGRdcX1EDRlNZUUMWB1ZEOg1TS0dYWhcOUloNVxBUUUZQFQcYWwhFCQcYVAcQAVQX",
        "dc1:dloXFwFVBl5BVQlVElBVEHoMXQARB0sYUVhWUkZCTQQWVUNbFRUKB1tEBEVEFV0ZDgsBXFwXCw0VVVkLEkxcFlJYXg8IVk0ZahQAXVFREERXDlENoMtWGERE9p5GUlYIWlxfFABUChJZVAAWAQgYXApCAUBYFxAMFVJTCRJRXVtRRFJDFUwGGWpbD0dAXV8QQApcRA4NSlFHEV1WBVYYEENZXlcDFQeliVkSGA==",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQPA0sYVlBHQwdAGA9ZEEZRCPbLB1YWBVNEKldeFA2hhFZFTAZZFlsERlhBU19aWBBEXBAZV1FEZlNHU1FQEfDJAksWGHleFUYTVhgNV0MQQQhQRgcYB1gHVkZdSkYHDhVKAAgPWhg="
      ],
      "solucionDirector": "dc1:Z1NbBgNLAlRSFABREnhfXlIRVhdDSgoAGGcYBl8BD0gMEFVYRlkHBUpTQVIBRlRYFUIBVEsRBRAVVxY1V1RQU0FCWA1ESgYZW10eWxJXX14WFl1EAgxRVFleDhcVVhgPWURRFANZRgVZWBVZRAJdVUYDEFoXRT1DUFoWCFtKX1kTQlIPAV4RWF5VXhRWUVwQVRZSFhcNGFxQXRVfCV5aE1MQQUEDFT8JU0UTXwtGTlAJQg9aSwwWQ11XVQASSEdfXVVSQwX60lZAFAJVXkBRUlcNEwgCQlRUVEdQFx8TXQ0WUV5dClkJRlxTQUUBClRWSkIbFUgQDQZbFloKQRlGU11RVkMBShdMRVtEVV5Y850NQ1YIQwFNWVFUR1kJE1wEFgEJBVQVAg9bU0FHEQMYXBUHQlZMBBYXWhZTFhJVUxYABg5NRGkGVFFRFkBdWhBTWQ1VDREPWRhZUBVaB0FbABZTRUYQVEhGdFcSFgcHSk0HEUJbVkUXAln1mwRcGVZTE3pYBBZWoIhcGERHW1pfEFIGEzYCEVtZU0P2mgcdGDBDWVVaRkUHAVlUABYFRmhcCwAHR00KCkNBX1MLVxlXWhNXWQoIVQwZQVsGVVZbEFEWNVIWBAMYXVsRBA5XAQJBU0NEQRBaRgNWFg1XRFUIAEYDE0BcCQgCFVhZBlpcHBZ9WRcXDVwNXBNEC0YSRUXzn0NAARFCWVRSRFxSCBNcBFoQQ1EUQw8FUVlBUgFGVFhGAQNGWEs=",
      "exito": "dc1:YkNeBgoZE1hUVQZVElUQYFMOUQERFldWFUJQWwpSWgAWU19aRlAKRllYCFoICRhdA0I0VEsCBVkVU1pFQ0xXFldTRAIUWBFcUF2nhxJQVRBaAhNXU1sWGHBCQUIQXBgAWlzzmUZUFxNdWg1XRAhXWg4HTBVgRRUWUET1yFMZU1pUWRcOp5gQGUJBARRHWlEQRgpWABEDAhhFUFJWBFIYEVlCEFEeVgcQWURBWgtGSUwDQg5UGQAXF0dTWglTGUFT8IdWDwUXQ31WFCZVQFdVXFkNUkhDBl1LUVQVWwcTSBNfQ1n31VtGAl0WDEMOA0pcFU5CXVhFBwxbQlMWRlhWWRN7UhEH+ssZY0ENUx4USRBTDxM3AgxZTFpDXFhGV11BYFFcXAlbAgkYXgAWCQdWXQcGDRVVBEQAQFNYEVMZVlMTRUJDCVgHS1Ya"
    },
    {
      "id": "p07",
      "fase": "III · Las rosas que pagan",
      "titulo": "El comprador de Ginebra",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p08",
      "descripcion": "Esta primavera alguien prometió a Mercè Puig pagar el sanatorio de su madre durante diez años si robaba el Ojo del Horizonte. Pagó antes de que ella hiciera nada.",
      "instrucciones": "¿De dónde salió el dinero del comprador de Ginebra? Combinad la carta de Mercè y la cuenta del sanatorio con vuestros telegramas.",
      "documentos": [
        "d06",
        "d07"
      ],
      "opciones": [
        {
          "id": "a",
          "texto": "De una cuenta de Ginebra, como decían las cartas"
        },
        {
          "id": "b",
          "texto": "De un ingreso en metálico que un desconocido hizo en la administración del sanatorio"
        },
        {
          "id": "c",
          "texto": "De la notaría Varga de Logroño, que pagaba la estancia como pagaba a Pemberton"
        },
        {
          "id": "d",
          "texto": "De la cuenta de dirección del propio sanatorio"
        }
      ],
      "huellasRespuesta": [
        "1d01c0371ef93e3e39821a6b8d415ca9cf004fa14e5b205f481d26d6d7c2f0d1"
      ],
      "pistas": [
        "dc1:YENaAgAZD1YTRRFREldfQ0KggEQADVVIR1BHFwcTdQREU/OcRkxGBE1FAlcARl1XRg4DFVoQAQ1BVxYBVxlWWfCHVkM2XA5cWhQRWhJdXldEBkALQwZdGFNEUEUHE0kUUxBcW0ZWEwRKV08WKQ9KWAJCBlBKFRGgnEUWFEf6mxZQWVkXFlgTWEFADVBTFFxcUxVSCkMOV0sVVVpERlJIFFhEVUdGUQMKGAdWFgADGFQHGw0b",
        "dc1:YFNEBgpNAhlKFAdBU0BCXxYOWghDBldLVlhQWRJSS0FGVUNRElQVShhPQVMKRlVYHw1CW1ZFAQ1BRPXWEl1XFlVDUhEFGQ1QE1gFFERdV/OfEFoJAkJIWUdFUBlGf1cSFlRfR0ZUFhNWQgRFRBVdGQUDEFJYC0QCFUNYRVNKW1NdQlhDAFwPGV9dBkZdFFRVFgdaFgYBW1H2glsZRnZUQUJVXFEBRwcLWRYQQwFGV0pGDg5QXqbXQ0FEVxYSXF4WQVlVDERdBlUTWRFHV1sQX0VDQw0HBxhJQFQVRxRWXxRYRPOdD0ZGF01fop8KRkhYAQNCUEoERABURVdL",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQNA1xRUBFBRQdZV0FTQ1UUAlwIA0pZTxYhChhKBwwDQVYXDQwVRVNFXlYSRlJR9NBEWENK8JlEWVtHXV8WAFwKQxdWGFRBQFkSVhgEWBBDQUZZDwRKWUFSAUZcUBQHAVZQptcNDxZFAEFcXEJSFk5DB0wCTUFbRFlbWBBAUxBWEAIRGElAVBVZCRNLBBZdX0IPUBQJVhYFU0QVUU0PDUw="
      ],
      "solucionDirector": "dc1:d1MXDwUZAExWWhBVElBVEFIKQQEAAVH7hl8VUwNfGBJXXlFACUcPCRgeBR9KRnRYRgEXUFcRBUNRUxYBXfqDVxNkUg4BUFkZV1sXFFNERV5CBkBEBwdUGAQGFVMDE1UAT18QHFIbVFYIFgVTRAJdTAIDQkwZU1RNBQYGRVZcEgIDFkMRDVQGSkdGAUcIFAYEGFEDVEMHVhhBXkFWChoYAlleEFcJWxIUWUYARBAPXFhGoMlZUAcWDBVSU0VWUEBTUFVeoNdXTxlSRw1RXEBfEAdSAabYWRhUWkIVXghUSgRFX0MUAlBGAE1TE1dEAl0ZAxEHFVQAF0NGQ1sEXBkBGAQDB0MdGRVQVloBWhJQVRBCEVYXQwRZVVxdXFYVCRgPX15XQQhaRgJdFjJDDRxZFUYMC1teEAoMFVNYRV9cRvWSWl4ACxVDV1paA0FcWxBUU0N/CwQQV/uEXhsXI18YFVNcVVMUVAsHGEcUU0QJSxkKDgdS+tZEF0dXRUVXVRJEXFRYQwBcDxleQRdRXQ4QVVpDUAsOEkpZUV5HFwhGVgJXEEBdFfbVRn9fD1MGFFkVRhtCXVgcRBJAUxYVQFxVQ11CVhFEXaCKXVABFFdHRPOXQ1IMDBBZGFlQFVoHV0oEFhhVWkZjBwpQWQ9SC0ZcXBUGBxVUBB0MHBZPRUNMW/WaWBcTBV4CGVZHBRRRVUNRGEN2CEMQV1paEVFSChN3C1kQQ1FGRQcB+4VBVQsIGEwIQgNFTAsQBhVfWBFXS1xZE1JSD0RqAldSQAtGW1sQVFNDZQUPCldWUV4ZFwVGQQAWVUNAB1MDElkWBEVENFlKBQMER/rIBVkVWldFX1BBW1IWUwZEVQJKE1cFRkZVQxBXQ2MBDgBdSkFeWxlGYk0I9ZleFABcFAtZFg1XRAVNXAgWAxVdAEQHXERTBlFQ8YVdFkQGREoCW0H3xRRRW14QWgITFwYFTVZRUBVfCVlZTRZd85UVFQcCXVoAWBADFg==",
      "exito": "dc1:d1MXDwUZAExWWhBVElBVEFIKQQEAAVH7hl8VUwNfGDJXXlFACUcPCRhSBBYyB1RRCQwGWgNFAQ8VUl8LV0tdFl1ZFxAFVQr6gBQAURJYURBVAkAFTUJ5GFFe9oYHE2oEW1VZFApURgpUUxdXFglWGQcODvaURQENFVtXHF0VElddQlIQRF0GVRNGC1ZdGBBJFgZfRAANVUhHUFFYFBNcBBZ3WVoDVxQHGEYAUafVGFoJDEJAV0UFE0BYQgASXFwWX1lEQwhQAUtcR0RQVxRVQ1NDQAUNA0xXR1haGUZ3XRJSVRBYBxUFpZlEAlMIRlxcRi0MUVgXFgZBVxYcEl1XRVdTFw8FGQdQQVEHV1v3g14WB1YIQyNMVPaQW0MPV1lBXlFeFApZAwFZUg4WAAlLGRQHEUVMABcXVEUWCPGYQRg="
    },
    {
      "id": "p08",
      "fase": "III · Las rosas que pagan",
      "titulo": "Dos sobres, una estafeta",
      "tipo": "texto",
      "obligatoria": false,
      "puntuacion": 50,
      "siguientePrueba": "p09",
      "descripcion": "Las cartas a Pemberton decían venir de Logroño; las de Mercè, de Ginebra. Ninguna venía de donde decía.",
      "instrucciones": "¿Desde qué estafeta de correos salían, en realidad, las unas y las otras?",
      "documentos": [
        "d05",
        "d06",
        "d07"
      ],
      "huellasRespuesta": [
        "a868dcda52105bbe3a07098d435fce785a4c505f0742c23dab4e54f8dafed1ea",
        "2f6aea7decc7c7d05ef0c1a6ae21567919364fb46fa8e8afa9a4f4646c187e7a",
        "700de7b3736331855c77b9a7a780b9406466aec34394496fd1d040ef3c8f2b18",
        "240316a35ead629e01222fdf8325dd501ee1978b7f7dd403916ab65df49cdeb6",
        "cc946516f0ecf3f4ccb86c7b11dcc9522589568b66cd70c0204a633e86402b0d",
        "240316a35ead629e01222fdf8325dd501ee1978b7f7dd403916ab65df49cdeb6"
      ],
      "pistas": [
        "dc1:Y1NaAQFLF1ZdFAldQPeDEFoMQEQOA0xZRlRZWwlAFkF7VUJXpZ1GCVRfooVEA1QZFgMSUFVL",
        "dc1:dloXEwVJBlUTUAEUf1FCU/XLEwsPoZVZFVAV9M9HXRMaEFNbC1pGE1YWElcKB0xWFAsNGxkpBUNWQ1MLRlgSUlYWUwyniAIZYVEJUVsUVFlVBhMUDBAYSUDynBcDQEwAUFVEVUZGBwpdFgRaRAVXSxQHDRVdAEQGRlMWFlNXU0JcRF4MSg==",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQPA0sYUV5GFxVWSghTQxBQAxUFB0pCAEVEFVlVpc8DWxkBAUNZVxYAQU1TUFZCVkMAXENrUkcHVVRG851XTxMIAkJcXVkRZlYIUkwORFlfFAJQRjBZWglZCgJXFw=="
      ],
      "solucionDirector": "dc1:YVdEAAVfEfqeVUoUYlFdUlMRRwsNWBhVVEVURANfVA5FEFRRRmcHFVtXB0Sny1kZTi8DUUsMAEobFnsAQFrxngkWUg9ESQJJVlhEW173nVEWAhOnyhZdShkRVlgLXBgUWBBDVQhUEglKXw4NRApZGQUXB1tNBEQHUBZgBF5RXVhXWRcHDVoGGfGfJ1tARlVDRgxdAAYMW1FUCxVSFUdZB1NEURQCUEY0WUUCVwIU+5QHoNkbGSkFEBVVVxdGWEEWV1NbQwVXClVfW0RHU1jznVcNEwAGQlRZFVRGQwdVXRVXEFRRChUVB1ZXFVkWD1cZFxcHFUkEA6CGFlMJEktdVFwY",
      "exito": "dc1:YVdEAAVfEfqeVV4UXlUQVUUXUgIGFlkYUVRZFzVSVgBCX0JdCRUCAxhgAFoMCVZdCUxCeVgWRABUREIEQRlWU18WVg0NVQ9WHxQAXVhRQlFYQ18LQxNNXRVVXF0DQVkPFlxfR0ZYAwtaRARCARUUGRUHQlBaDQUBVFgWBF4ZUVlBRFIMRFwNGVZYRERHUVJcWUNXAQ9CS1lbUEFYFFpXQUdFVRQWVAGlixYEWkQUV1sJTA=="
    },
    {
      "id": "p09",
      "fase": "III · Las rosas que pagan",
      "titulo": "La llave de bronce",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p10",
      "descripcion": "En julio de 1927 Julio Bastarrica recibió un sobre con un lacre de rosa, doscientas pesetas, una llave vieja y una nota.",
      "instrucciones": "¿Qué puerta abría la llave del sobre?",
      "documentos": [
        "d08",
        "d09",
        "d03"
      ],
      "opciones": [
        {
          "id": "a",
          "texto": "El office del tercero, donde se guardaba la llave maestra de la planta"
        },
        {
          "id": "b",
          "texto": "La cajita 17 de la caja de caudales: la copia que Bastarrica no llegó a hacer"
        },
        {
          "id": "c",
          "texto": "La puerta de la 309, la de antes de la reforma de 1925"
        },
        {
          "id": "d",
          "texto": "El dispensario del médico, de donde salían las gotas"
        }
      ],
      "huellasRespuesta": [
        "ac0ddeb3f44a060fcf8d6aeb7be84114e924a377be1d8847bfc78cb6f3acb31b"
      ],
      "pistas": [
        "dc1:cURYDQdcQ0ATVwxVQlUQVFNDXwUXoYtWDxFURKWeGAREUV4UClQVRlRaAEABFRhdA0IDW00AF0NRUxZUCwsHGBN0VhAQWBFLWlcFFFxbEFxXQ1ALDQ1b+5hQDxcFRlkPUl8Q989ZRgNWQhP110ZBWEYMDRVIEAEHVFRXRVxQXFFGWFZDAVdDVVIUB1VBVR4QegITCgwWWRhRVFkXAlpKBFVEX0ZGUQ8FXRYQQ6fPGEkHEaGGGQYLDRVTWglTSh4WShZUFqeYDxldW0RER1BfEFAWXQAKEEtdGw==",
        "dc1:dlgXDwUZEVxVWxZZUxRDVRYFRgoHC11KWl8VQwlXWRIWXFFHRlkKB05TEhYSD11TBxFCWFwLCxAVQ1gEHhlDQ1YWUQIITQJbUhQAURJYURBVAkAFQwZdS1FUFVYBXEsVWRBUUUYEX1cKGEFzCEZbTAcGB0dXCkQHUBYHXAMLEk8TU1tDEFwPXFRGBVlTFFRVFi9cCgcQXUsVVVxUA10YBVMQQUGlnEYFTVcTQgtGXlgKFgNXWEURDVQWWglTT1cWV1NEBwEZBkpSFAJRUVxRHg==",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQPAxhcUBFZVkYACFgYEHxVRvbcCFFVABYICllPA0IGUBkHFgxbVVNFQ0xXFl1ZFxABGQVMXVAN94EUVUMWD1JEEhddGFFURlYWUkoEVVnzh0ZRAwoYVRRXFhJXGQIHQmNYFwMCFVpXRVxWUV5WFlINREgWXBNZEUZb94Me"
      ],
      "solucionDirector": "dc1:f1pWFQEZB1wTVhZbXFdVEFUMXUQACllIVBFRUkZfWRX1g14YRlEDRllYFVMXRlxcRg4DFUsAAgxHW1dFGntTRUdXRRENWgIZXVtEUFtXVRBTDxMKoNhVXUdeDxcIXBgCWV5fV6WYB0ZdRQBFRApUWBAHERwXRSgCFVhZEVMZVlNfFlMKFlwATVxGXhRXWhABD1EGRBAHGF5AX1FeA0FXDxZEX1AHRkYKWUVBWggHTlwVQhRcXA8FEBVFVwlEVhJDXVcbQwhYQ11WFAhVEgcACRpDQhEGQl5ZWUVUVQcTXARFVFUUB1IJFUxZQVIBRgkAV1BZFVwJRBdQWlMCQFhfVxNSUkMoVg1dQVEXFEsUVVwWAEYFBwdKVloRUVJGAgFQBBBUXQVQCEZJQwQWAANUGQUXA0dNCkQHUBZgBEBeUxZVV1sXBVsCGV9VRFheVUZVGEN/EQYFVxhZUBVTA18YEllSQlFGUBVGVFdBUgFGVFhGUVIMGQEBQ1RYQgBBGVZTE1pWQxZcBVZBWQUaEnFcEEUMURYGQktdFVVQXaWAGARYEFVYRlYJFEpTDhYNCExcFAwNFVwJRFcVUlNFWExeX1wWUwZECFoLBA5EWF0UVFVcoIBEAg5fTVxUWxcXRl1BU0NEVQRURgJdWBVEC0ZcXApCClpNAAhDUEVTRVb6n1cTTxcSEVxDVVIUEEFEWxBUUxBXAUNTAQkHHRVSFRNcBFVZQhhGRBMPXVhBVQEUSvrVQg5UGVZUWhVGWRcSX0dTQVcZQyhYQ1dcQAUUVlFcEFIKQQEAFldKFVVUFwVaVgJZEFNVCFEPAllCDkVeRlRYRgUNV1wXCgJbQldJElxeFl71ngcNWgwVE1EIFFZdQlVVF1wWT0JdVBVQQFMPR1cTFkFFUUZTEwMYVQBcARRXGQMMQgQAVFZDTBZaCkEZWkPwn0QTAV0GShNQARRYQVxZWU0TKAJCVldBUBVSCBNbDVdGVRQCUAWllVdB9M8HSUwDDg5UGQYFEFT0jUkSV10W8Z1bAkRaAkpS9t8OEkVFWVMNEwgCQkxNQ14VRxNXV0FYXxBHA0dGAl1aQUUBFE5QBQsNGxk8RBJAU0Smn1gSR0ZTFxEBXgpKR0YFRlNaEFxXQ1IKFwtfTVQRBgdfE0wAVFxRFBZaFEZMVwNaBVwYWxMRAVQZBAgEWhZHEFcZUURWUxcGF1oMV1ddAFsSVVxc9c4TAAYRXF0VAAwGVB0YNVlUUUKlmAdGVllBRQFGSEwDBgcVXQAHClFfREs=",
      "exito": "dc1:f1cXExFcEU1SFABRElhREAVTCkhDDlkYRERQFwJWSwBGUUJRBVyl1RhaABYKCVtRA0IHWxkUEQYVW0MXW/qBFmVXRQQFF0NoRl0BWhJZUV5SoIBEBg4YS1pTR1JGVksVV1JRFAJQCBJKWUFSAQoYUQkWB1kZAAhDARZSABJTR1paWRcHARlSAAEDSBReVRBEQxVcRAYMGFRUEVhWCFwYBFgQUVMJRhIJGFIEFlVfCQtGG0JWSwABQ0RDU0VXVxJaUhZWDRBQBExSFFcECxRDWVEWVkQGEVtXW1VcUwkTWQ1RXxBFE1BGF01fBEQBRl1XBQ0MQUsEFk0VdV8LUVYSRlxFXgENVQpdUlABRx4UXl8WF0EBEEwYeVkRQ1gKRV0TFlFcFBZcFQkYVQ5YRApZGTYNDlxapskCFUZXF1MZQkRWVV4NEFgRVVwYRHdaXUFFX0NfARUDVkxUEVBbRlVXE0RfEFADFQoHGFUAXAVGXFwKQhFaVAcWBkdZDEVdTUBXE1hYFwUZBlcTRxEUUVhRRlNNEz1DBl0YeV5SRQnwiQ4WSRBQAxUyCVRTBVlEDllXRg4OUF4EAAwVUlkWElpTREdXREMXVgFLVhQVQVtRXhBDEFIGAkJdVBVCUFsKXBgFUxBGURRRBwIW",
      "escena": [
        {
          "texto": "dc1:ZVlbFaeQCkoTVQgUQl1DXxYAXApDF1YYXF9GRwNQTA5EEEkUAloVRllRBFgQA0sZFgMQVBkVFgZWX1gRU0teWR0WegoBVxdLUkdEUV5YX0MWDloABgwYVFQRVlIUQVkFQ0JRFABaFBxZUgAaRCVQUBcXCxVKAEQSQFNSBBJUW0RSWFMMRFUCGVBVDlUSUFVcFhBcCQEQXUpaEUNWBfCVABZUVVhGVBQLWUQIWUo=",
          "imagen": "img-piso"
        },
        {
          "texto": "dc1:ZlhWQwdYCVgTUAEUQVtdUkQGQQtDEVFWFUJaWgRBXRNZEF5bRlAVEvuXQUAFBfuUB1hCQVAACgYVQ1hFVFZARFwYFzpEXA8ZVVsWRl0UVFUWBkAQAkJdS0HylBcCVksRU1dRUAkVFglKFhRYBUZdShcXC1tYSw==",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:d1NVAg5WQ11WWERSXUZCXxpDVwsBDllcVBFdVhVHWUFVUVJRFBUDCBhaABYUB1RUB0IGUBkJBUNYV1gKHhldQkFXFw0LTQIZVlpER0cUU1xXFVZKQzNNUVBfFUUDVFESQkLzh0ZQCkZIXxJZRBZZSqXRQlFWFkQVUFVTFhJJXUQTUlIPBVcXXBNQAVgSVUJdVxFaC01Cf1FGXFBFBxNUABZXRVUUUQdGWVgVUxdGXFxGExdQGQAIQ1xYRRVXWkZZQRZHEQFeFldHUUo=",
          "imagen": "img-varga"
        }
      ]
    },
    {
      "id": "p10",
      "fase": "IV · Elías Varga",
      "titulo": "Quien firma como Varga",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p11",
      "descripcion": "La casera de Logroño describe a don Elías. Un canónigo de Toledo os escribe. Y dos telegramas de Yoksrio hablan de la misma persona sin nombrarla.",
      "instrucciones": "¿Quién ha firmado como Elías Varga desde 1925?",
      "documentos": [
        "d10",
        "d11"
      ],
      "opciones": [
        {
          "id": "gaspar",
          "texto": "Gaspar Ulloa"
        },
        {
          "id": "yoksrio",
          "texto": "Yoksrio"
        },
        {
          "id": "aurelio",
          "texto": "Aurelio Sarmiento"
        },
        {
          "id": "fulgencio",
          "texto": "Fulgencio Marañón"
        },
        {
          "id": "lucia",
          "texto": "Lucía Sarmiento"
        },
        {
          "id": "montero",
          "texto": "Ezequiel Montero"
        },
        {
          "id": "ibarguren",
          "texto": "Ernesto Ibarguren"
        },
        {
          "id": "clara",
          "texto": "Clara Montalbán"
        }
      ],
      "huellasRespuesta": [
        "f96aff4271581446860166b638c8cedb957c28a15aa61e43f943b80b88c6c930"
      ],
      "pistas": [
        "dc1:YVNbBgFdQ1VcR0RAV1hVV0QCXgUQQklNUBFaREZfVARRUUJbCBUSFFlFQVMIRkpWBA1CUVwJRA5ARVMKEkASQkFXREMBVUNUUkQFFFZREFxZEBMXCgdMXRVCUFsKXEtbFkVeFAdYDwFXFgxDHUZOUAMIDRVIEAFDQ1NYAVcZXl9RRFgQSBkaGVJYA0FbUV4QRxZWRBUDGFkVXVQXCFxMAETznVVGVgcCWRYRRA0LWU8DEAMVQEUIAhVeV0VCWFVXV1kXCwVKF1gTBV0AAhgQU1kNEwmgw0sYVPKEWBUTSRRTEGlbDUYUD1cWGBYJA1ZWFUIWXFwIFAwb",
        "dc1:fldZDBcZB1wTUQpXR1VUVUQNUgAMEBQYQF8VWw9RSg4WRllRDFpGA1YWBFpEEkpcCE5CQFcERBdaRRYUR1wSWFwWRAZEWhZLUlYFGBJXUUJCAkBEEhddGFxTVFlGShgXU17zmQdbRgJdFhRYBUZUUAQQB0f6yAVDUVMWMV1VV1JcGhcaRFwQTVYUBfeDWxBeWUNDEQcNGFFHHxVyChNbAFjzg1oPUglGVllBRQUKXRkCB0JhVgkBB1oWUgBBXVcWAg8HV0o=",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQCDl9NXFRbFxdGXUFFVRBdBFRGBVlSABYJB0FWRqDJVBkTAREVVxYQXBlTW1pRWEMVTAYZSlVEWl0UVUhfEEcBodkYQRVAQFJGXk0TX/ODFANZRlQYUgQWFwNITQ8HD1dLAEpDeVkWBl1XXVVaW1gQRFwNGVZYRFFKRFVUXwZdEAZCCAgBHRVHA0FXQU9REFoJFQMVTFcDV0o="
      ],
      "solucionDirector": "dc1:ckNFBghQDBlgVRZZW1FeRFlPEwEPQlRRV0NQRQkTXAQWZF9YA1EJRhBTGUYBAlFcCBYHFQlVUEobFmIAXlxVRFJbVkMVTAYZX1gBU/GHEEREAkBEBg4YSlpTWhcCVlRBW0VDUQkPRgNUFgBbDQFXGRcXBxVaCgoXUEVCpoEZU1oTWFgOBksGGVdRRFhTFFFXUw1QDQJCXUsVXEBORkVRBFxfEE1GQwMIXFNBWg0ESlYVTEJhXAkBBEdXWwQSSEdTE1pbBgP60BlHRgVHElFcEFsCQwVDBl0YWV5GFxVaXRVTEENRClkJFQIWEEMNA1YZEANCVBkJBUNbWUIEQPqfVxNVVgcFGRNLWlkFQldGURBPQ18FQwpZGEVQUlYCXBgJV0NEVUYEX1IIFhVfAQhdGQuhw0YZBKfSWkUWFEdcEm9cXUQRDVZDQBNZAVpdRxBEXwZeFAxMGHRUEVZWFVZKAAwQUVoFXAcIVxpBWwUIV0pGBgcVWgoIAhVSU0VXV1FDUlJSEQpYERUTQAtHHhRTUVICExQRC1VdR1AVRANeWQ9XEFRRRlgHH1caQVoFFRhaBxAWVEpFDQFUWBYEEkxcVxNaXgEWXBH6nlVEUFcUZF9aBlcLWEJdS0FUFValgldBWF8QQg9bCUoYT0FTCEZMXAoHBUdYCAVDVllYRV5YEkZSWlYBFlhDVV9RA/eBFFRVFjdcCAYGVxYVdFkXBVJWooVeWVMJD0YnTUQEWg0JGEoDQgtXWEUHAlFXFghTQF0W8Z1WQxJcERlSFBFaElVdWVEMExUWBxhBVBFbWEZWQAhFRFX23RlGEldFopsFRlxcFQYHFVwJRApbQF8AQFddFkoWWhYWUKCKE1EIFAAUVFUWEFYUFwtdVVdDUBlGdksEFl1ZRwtaRhJdWgRRFgdVWFxCO1pSFhYKWhZeDEhWEkdGUxcOBVcHWEFVChRWUUNUU0N/CwQQV/uEXhVbCRNJFFMQ8p+lnAqkgxYFUw6lixkWEAdFWBcFB1oYFiNHVVVTXVVeDERXDBlAVQhRElBVEGIMXwEHDQMYclBGRwdBGBgWXF9HRlEDC/uXEhYKCRhcCAEDX1gLSg==",
      "exito": "dc1:ckNFBghQDBlgVRZZW1FeRFlNE6bINFlKUlD3jEZdV0FAWV5bRlRGClkWAl8QBxhJCRATQFxFCA9QQFcHUxlf9ZJFFwcBGRdLVkdER1dZUV5XEBMJFgdKTFofFXIIR0oEFkNFR0ZZDwRKWRIaRANUGQUDDPaKCw0EWhZeBBJcXFVcWEMRBV0MGUZaRFdHVVRVRA1cRAcHGExUQVRERlddQV5FXFFGTEYJSxYCWRQPWRkKDUJETABEEFAWWgBXAxJDXRZWABBYQ11WFFUNAg0QSRYPUhdDDFdMVEIVUwMTTQ8WRllRDFpIRmEWAFpEBU1YAgcQW1ZFAAYVBw9UABleUxNQVg8QWAFYE1cLWUJV84H1zlJeQwdUGEbynEcSWlUOFkNVWApaSkZbWQ8WFxMY+80rOhVdAEQqbfSNSRJPUxZSWhcXBVsPXEFbShRnWhBEUw9WAxEDVVkVREdQA11MBBZUVRQCWghGfUwERxEPXVVGLw1bTQAWDBkWUgBBXVcWY1P00gVVAktSGERYXlFXURYGX0QOC/uRR1JaWwNAGFMOEEBbFBUKBxhbAPXVB1ZYSA=="
    },
    {
      "id": "p11",
      "fase": "IV · Elías Varga",
      "titulo": "Escrito en desorden",
      "tipo": "texto",
      "obligatoria": false,
      "puntuacion": 60,
      "siguientePrueba": "p12",
      "descripcion": "Al pie del acta de ARKANA, Elías Varga dejó un nombre para quien heredara el encargo. Escrito, dice, en desorden.",
      "instrucciones": "Ordenad de otra manera las letras del nombre que da el acta. ¿Qué nombre que conocéis muy bien aparece?",
      "documentos": [
        "d12",
        "d03"
      ],
      "huellasRespuesta": [
        "93a488691df718f82f316833c9283d9a0498ee900c664b6d49a85dcca7e49da7"
      ],
      "pistas": [
        "dc1:fBZ8OjZwLGoJFBddV0BVEFoGRxYCERYYYF9aFwJWGA1ZQxBAA1kDAUpXDFcXRlxcBaHPVBkUEQYVWllFQ0xXFkBTFwQRWBFdUhQGXVdaEENTQ1YXABBRWlARUVIVXEoFU15RUAkb",
        "dc1:dltHCgFDAhlDWxYUXlUQXFMXQQVDAVdWFUBAUkZVURNbURBACVEJFRhFFEVEEl1VAwUQVFQEF00=",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQ6Thh3GRF+G0ZgFEFkHBB9ShUpSBhzDRYKCVVbFAdCUVxFChZQRUIXXRlCV1dEUk0="
      ],
      "solucionDirector": "dc1:fBZ8OjZwLGoTHKafV1gQQ1OgggsRQlxdFV1UFwVSSwD0ixwUA1lGF01TQUQBFUhWCAYHFV0ARA9aFkcQVxlVQ1JEUwJIGQZXE1MWXVdTXxkWB1YXDBBcXVtQUVhGVktBb397ZzR8KUgYZQ5YRApZSkYGDUYZFQUPVFREBEEZQ0NWFmECFl4CFRNZC0ZbVkVeUgwfRA8HGFxcW1oXB18YC1lGVVpGUQMSXVUVXxIDGFQPEKGUVwELD1AWV0XxkF4WG1VCAgBcEVdcFABREgUJAQRZE6bIDUxKVEIVUwlAFEFTXhBBCFRGCl1YBkMFRklMA0IMWhkGCw1aTFUK8IIbDBNaUkMUWBBYUVVEUV4UVV5VAkEDDEwYYVpaRkUPXBgPWRBcVRUVAwhMUw9SDaWLFUYSB0dWRRcGFUdDAFb6gRZQWVlDAVUPWEAYRFBXR19CUgZdBQcDSxQVUlpaCRNZDV9RQxhGTEYFV1hB9M8nSlIHDAP3gkUUAkdXFglTGVNRVlhUCgUXQ3VcFBdRX1ZCUVQCEwEPQkxdWVRSRQdeWUFSVRB2B0cFA1RZD1dETgkJSys6GAhcVlQcGhYGXVcSRUZFFwcLSkNfQVUXUUEOEPKdD1xEEhddGEZUFVATUkoFVxBSXQNbRhVdFgRFBxRRWwNCBlBKChYHUFhXAV37iRZKFvXIDFAAXBNWDVFcFFVeFgZfAQQLShhQXRVZCV5aE1MQVFFGWQdGWVEEWAcPWRVGG0JQVUUJoJhZ9N4c",
      "exito": "dc1:anl8MDZwLBcTcQoUXlUQ84wPRw0OAxhQWltUFwJWVEFVRVFQA0cICRhSBBZVXwkLSkIBWldFCAZBRFdFVlwSW0ZVXwIHUQwVE1EXQPGVXhBXE0YKFwNcWUYRVlgLXBgSWV5RVgdbRgpZRUFZEBRZSkYGDUYZFQUPVFREBEEZVlMTYFYRA1hZGfGfCxRDQVlCXwxApthMGHZaEVBFBxNNDxZeX1kERwNcGFMTV0QTVhkSoc9BTAkLTxX0nQBeGUFT8IdYEURdBhlfVURXU0dR8o1PEwEPQklNUBFHUhVDVw9SVRBQAxUKCRhHFFNEAU1YFAYDGxkzBRFSVxYWVxleWRNSXgxIGQ5QQffFWlZbXFUaQ1JEFgwYXFBFUFQSWk4EFlRVFA5aEgNUFgBaRBdNXEYMDRVaCgoMVvWbBBwZfENWRUMRCxkTWFdGARRcWxBcWUNWChcHVlxc8oYXDlJLFVcQVVhGVKXXVxYRVxcHXFZKQhJQSwpED1oWURBTS1b1gBZUDAlWQ1VcFANBU0ZUURYXXAAMWBhcUEJaRQJWVgBSXxwUHxUFCVYWDVdELRhdAw5CWFwIBhFQQlNFQ0xXFkBTFwQRWBFd8IdEVUNBVVxaAhMKDAFQXRsRbBcVVhgNWRBAQRVaSA=="
    },
    {
      "id": "p12",
      "fase": "IV · Elías Varga",
      "titulo": "IX de IX",
      "tipo": "eleccion",
      "obligatoria": false,
      "puntuacion": 60,
      "siguientePrueba": "p13",
      "descripcion": "El séptimo sello del expediente 004 nunca encajó en aquel mapa: un trozo de papel con la punta de una rosa, la palabra «Toledo» y «IX de IX» en la esquina. El acta copiada habla de un mapa cortado en nueve.",
      "instrucciones": "¿Qué es, en realidad, el fragmento «IX de IX»?",
      "documentos": [
        "d17",
        "d12"
      ],
      "opciones": [
        {
          "id": "a",
          "texto": "Un fragmento más del mapa del tesoro de Toledo, que Aurelio escondió para el final"
        },
        {
          "id": "b",
          "texto": "El trozo de Elías Varga, el primero de los nueve: la punta de Oporto, que Aurelio heredó con sus papeles y firmó con su nombre"
        },
        {
          "id": "c",
          "texto": "El trozo de Toledo del mapa de los nueve de ARKANA: la credencial de Aurelio, el noveno"
        },
        {
          "id": "d",
          "texto": "La parte del mapa que señala dónde guarda ARKANA a la sexta: el noveno escondite de los nueve"
        }
      ],
      "huellasRespuesta": [
        "96437be83de5c36794cd173433bae7f977f4fc536a624b31a82d1899aa68bb0b"
      ],
      "pistas": [
        "dc1:dloXAgdNAhlXXQdREkVFVRYmX6fOA0sYUVhXQgzwi0FaURBGCUYHRktZA0QBRl1VRg8DRVhFAAYVRUMWElpbQ1dXUwYXGRoZX1VEV11GRPOFQ1YKQwxNXUNUFUMUXEIORRwQTUZFBxRZFhBDp88YSg8QFFAZBgUHVBZCF11DXQwTWFhDFFgRWBNHAfeDVVxRRENdBQcDFBhGWFtYRkNZE1cQQEYDRgMITFcTRQFI",
        "dc1:8Z1+O0RdBhl6bKaPCBRVXBYNXBIGDFcYUVQVWRNWTgQaEF5bRlAKRkhECFsBFFcXRqDdZEymzUNTX0QIUxlWU18WVgAQWENaXEQNVVZVEFxaBkUFQzZXVFBVWhcHXxgNV1RfGEZMRhdN9cgWCqWCVAMQDRVVAEQXWlVXRVdXElNfFlgRAFwNGVdRRFhTRxBWXxFeBRBd",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUShyXkWFWIbG0ZfUQNEVUJbShUyCVRTBVmm3RhcFUIOVBkLCxVQWFdFVFBAW1IYFyYIGQ1WRVEKWxJAQl9MDBMABg4YVVRBVBcCVhggZHtxeicVAxUYUw0WAAMYeBMQB1lQCkhDTBZTCRJYUUJSFlMKB1xDSEZRRFFeFERCWRlcRAYRGFRUEVZFA1ddD1VZUVhGUQNGW1cFV0QTVlZGAwxBXEUIDEYWUgBf+pNFHRZ4EERUAldX99cUQUEQU0QGVwENAVFZWR0VUQ9BVQBYVF8UBVoIRl1aQVgLC1pLA0IGUFVFFBFcW1MXXRc="
      ],
      "solucionDirector": "dc1:dkUXBggZF0tcTgsUVlEQZFkPVgAMQlxdWRFYVhZSGAVTEFxbFRUIE11ABBYAAxh4NCkje3hfRA9UFlUXV11XWFBfVg9EXQYZckEWUV5dXxBlAkEJCgdWTFodFVIKE1YOQFVeW0YdpM15GEFlSkoYVQ8AEFBLCkhDYVlaAFZW8I0JFlsCRFcMT1ZaBRRLFPOKWhdaCQJCXlFHXFQXAlYYDVcQU1sWXAdGXFMNFgUFTFhdQg5UGRUWClhTRAQSXEEW8Z1yTURvTRUTVwVGRveDV0QCVQtPQndIWkNBWKSIEU8WdVwUB1YSBxhVDkYNB1xYXEInWfrIBRAVUl8HR1PxhRNaVkMWVhBYE0cLVkBREFVaQ14FEwMYXFARRkIVE1sIQ1RRUANGRh8YWgAWBwlKTaXRQlBXRQoWUEBTXhJaU1JSFkINCxkETFJGAFUSR0UQQhFcHgxCQRhQXRVDFFxCDhZVQxQVQEYFSlMFUwoFUVgKQgNbTQBED1pFFgFXVPGXQBoXDQsZFldSFBdR8YVRXBYHVkQGEVtXW1VcQwMdGCRaEFZGB1ILA1ZCDhYICl1PB0IXW1hFFBZbQldFVlwSWlIWRQwXWE8Z8Z8wW15RVF/02BMdQ6CTcW0RUVJGemCjjQoQUQoVCAlOUw9ZSEZUTAMFDRVXCkQGRhZTCRJdVxZ2WvTOBUpDEXoYRHtCW0JEWUoTBRYMSU1QEUNSCFRZQVBZQlkHUQlG+p0kWqfLWUpGNANHXgSm2A4WT0VcVhJFVvWGAghYQ1gTWAUUQVFIRFdPExQMEElNUBFQW0ZSWxVXEF5bRlEPBV0WEEMBRlRWFUIWR1YfCxAVRVOmg1heU10WWQIAWE0ZckEWUV5dXxwWAl9EAAtMWUcRVBcKUktBXlVCWQdbBxUYUw8WCglVWxQHQlFcRSEP9ptXFhJvU0RUVxtDCFwQGV5VClDxhxBDQ0NQFgYGXVZWWFRbRlddQXdie3UodFxGS1NBRhYDS1wIFgNXWEUFDUFTFgBeVVNFE1VYDgsZFldcFABRElhfQxYNRgEVBxYYe14VQw9WVgQWXlFQBxUXE10WF1MWRltWCEIHWRkRARBaRFlFVlxeFlZORwYAUAZXR1FEBAIAEBhTEFZEDgNIWRVFUFmlnllBRVlVQAMVFQNUWg5FRB8YXBUWA1dYRQcMWEZaAEZWGxg=",
      "exito": "dc1:f1cXABZcB1xdVw1VXhRUVRYiRhYGDlFXGxFwW0ZA+8hGRFlZCRUVA1RaDhYKCRhcFANCUVwJRA5URldFVlwSYlxaUgcLA0NcQVVEUV4UXl9ABl0LQxZKV09eFVMDXxgMV0BRFAJQRidqfSB4JUoYXApCBlAZp88iGxZlSx4ZXl9RRFIRCxVDbVxYAVBd9oscFhoTAQ9CWVtBUBVTD1BdQUZRQlVGRBOlkRYSXxYQXQNGEgNHWEUUEVBFUwtGWEBFVhZWDRBcQ1VcR0RQV1nzkUVNEyUWEF1UXF4VWQkTVxIWXVFaAvbVRk1YABYUD0tNB1hCWkpFCQJbUvXWEkpHRRNVRQYAXA1aWlUIUUEYEFNZDlxEFgxXGFFUFVsJQBgPQ1VGUUoVH0ZbWQ8WAQpUWBVCDlQZBg0XVBgWI1NVRlddFlgADFZDTUFbHltBGBBJFhZdC0MGXRhQXVlYFRNdEhZVXBQCUEYKWRYSUxwSWRc="
    },
    {
      "id": "p13",
      "fase": "V · La luz de las 03:17",
      "titulo": "El único tejado",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p14",
      "descripcion": "Desde el 23 de septiembre, cada noche a las 03:17, una luz parpadea en el valle que se ve desde la cúpula de don Ezequiel Montero, el astrónomo de Peñalara al que Aurelio pidió en 1925 que vigilara ese valle. Él la vio anoche y ha telegrafiado esta mañana.",
      "instrucciones": "¿Dónde está Yoksrio? Combinad el telegrama de Montero con lo que ya sabéis de Rascafría, con la guía de sanatorios y con vuestros telegramas.",
      "documentos": [
        "d13",
        "d07",
        "d14"
      ],
      "opciones": [
        {
          "id": "a",
          "texto": "En el Observatorio de Peñalara, retenido por quien conoce la cúpula"
        },
        {
          "id": "b",
          "texto": "En el Sanatorio de Valhondo"
        },
        {
          "id": "c",
          "texto": "En el refugio de la Sociedad de Alpinismo, al pie de la cumbre, cerrado fuera de temporada"
        },
        {
          "id": "d",
          "texto": "En Rascafría, en la casa del estafetero, de donde salían las cartas"
        }
      ],
      "huellasRespuesta": [
        "46e40c5d7fca523c56ecc49b5072e067ff5e6ad5f5e0498f2ef68c63622ccbcf"
      ],
      "pistas": [
        "dc1:allcEBZQDBlcR0RQW15fEFMNExcGEkxRUFxXRQMfGAVTQ1RRRmYHCBhlBFQFFUxQpcMMGRkUEQYVVUQAS1xAV1pFFwIIGQtWXlYWURJQVRBmBvDVAg5ZSlQRRl5GRV2im1EQVQpSCUZZVABcC0ZBGRcXBxVUDBYCRlNfFhJYVvWAWFMGRFUPXFRVREdHFFNfRBFWC01CdVdbRVBFCRNOBBZcURQKQBxGWVpBRg0DGF0DQg5UGQYRDldEU0kSXFxCQVMXDwtKQ0laWgtHHhRVXhYWXQVDDllcUENUFwJcVgVTEFRdBVBGF01TQVgLRlBYH0INQUsERABURVdL",
        "dc1:f1cXBBH6zlgTUAEUQVVeUUIMQQ0MERhcXFJQFxdG+8gWU1FHBxUOB0EWAFpEFlFcRgYHFWkAp9JUWlcXUxUSU10WWwJETwZLR10BWkZREFRTDxMoDBhXQVQdFVIIR0oEFkBZWglGSkZBFhFZFkZJTKXLQlBKEQUFUEJXRUFYXlMTRUJDB1YRS1ZbShR3RxBcV0NeDRAPWRhQQkFWAFZMABZUVRQKVBVGW1cTQgUVGF0DDkJUVwwID1oWT0VeWBJSVhZbAkRaFlxdQAUUQ0FVEEYCVKfQQl1UFUNaVQkTXARaEH9eCRs=",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQGDhhLVF9UQwlBUQ4WVFUUClRGC1lSE1NEAl0ZKwcQVvrNSENQWhYBVxleVxNVQgYKTQIZV1FEUFtGVVNVCvDXDUwYdFQRWUIcE0sAWlUQUAMVMAdUXg5YAAkW"
      ],
      "solucionDirector": "dc1:dloXMAVXAk1cRg1bElBVEGACXwwMDFxXFRlXHkgTdQ5YRFVGCRVOVAAbKG5NXBhMCANCWUwfRAJZFkYMVxlWUxNaVkMHTA5bQVFIFFdaREJTQ18LEEJIUVteRhtGVlZBQ15RFApUAgNKV0FFDQgYVhIQAxVaBBcCGRZVBFZYElhcVV8GRFhDVVJHRAQBDgEHFktfBUMKV0pUEURCAxNZD0NeU12lhkY/V10SRA0JAhmkyQMVVQREDlxFWwQSUV1EUhZUAgBYQ1dcVwxR8I8ZHhYvUkQEF/uVVAsVYQdfUA5YVF8UA0YSpZkWAFpEFlFcRgYHFWkAp9JUWlcXUxUSU10WWwJETwZLR10BWkZREFRTDxMoDBhXQVQdFVIIR0oEFkBZWglGSkZBFhJDRAVXSxQHDRVKBAgGFUZZFxJVUxZWRUMCAlwXWBNQARRgVUNTVwVBp84DAhhZUBVaD0BVABZUVRQKVBVGW1cTQgUVGFhGMgdYWwAWF1pYFhwSVVMWV1MXDwUZAExWWhBVElBVEFIKQQEAAVH7hl8VRhNWGBFXV/OHRlRGK11EAvXMSBh8CkIWUFUAAxFUW1dFVlwSZVJYFzABWwJKR12nlVwUGAEETno8TlMBCgIYFUcDV/vMVxBTRgNQFEZZWkFeCwtaSwNCBlAZNQGghFdaBEBYEkVaFkEGp5QCGVJYA1sSVVJRXAwTHUMPUUpUQxVWAvCLD1JVEFgKUAEHGEUUFgcJSksDDUwVfAlEDFdFUxdEWEZZQV9YQwFKQ11WRwBRElBfXlIGExcGQk5dGRFbWEZXVw9SVRBRFUGlxwMWBFpEFF1fEwULWhkLC0NQRUKmkxlXWBNYXg0D+tlXE1ALV0dZVV5CDBMdQy9XVkFUR1hGV1ECUxBBQQMVAwgYUxJXRApZXQMQAxVXCkQLVE8WCkZLUxZQV0QCXxkxWEBXBVJA951RFgZARA8DGF1GRVRRA0dZTRZeXxQDWUYVUUIIWUpGdFhGBRf2lAREB1xVU0VTXVdb8JdEQxVMCvqaWkRZU1pUURYGXUQGEVkYVlBGVlwTTQ8WXfOdAlwFCRhSFFOn11cVRhcMFVgBCQpbX0URQFhWWUEWVAwKGRNWV1EWFFZRXBBXAEEBBgZXShVIFUIIE04OVVFcFAhUEA9dRA4WAAMYVQdCEVpaDAEHVFIWAVdVEl5cQlIPSg==",
      "exito": "dc1:dloXMAVXAk1cRg1bElBVEGACXwwMDFxXDxFQW0ZHXQtXVF8UA1sSFF0WDVkXRkhQCA0RGRkACENRUxYJUxlRQ1ZYQwJEXQYZV10WUVFXWfOFDRMdQwdUGFFUWRcFXEoTU18QUAMVNAdLVQBQFqWVWEhCO1pSFhYKWhZTFkb6kxZSXvTOSBkaGVxHRFFBQPORFgtSBg8DVlxaEVZYCBNND1cQXEEcG0YjVBYCUxYSUV8PAQNRVkUABlkWVQRc+oFYWlFYQwxYQ1VfUQNVVlsQVUUXUkQOA/uJVF9UFwcTVAAWUVdRCFYPBwMWBFpEA1ZPpc8NFV0ARA9UFnUKX1BBV0H1mgJEXQYZYFUKFGFRUlFFF1qnwgwYTlxUW1JGVlZBU1wQUR5FFANLWUFSAUZUWEYMDVZRAEhDTBZaChJLV1VcUfTKDUpDXF0UCFUSUUNEVwBap9AMGFxQXRV5CUFMBBZRXBQHWAcIXVUEREQCXVVGCBdQTwAXQwcPGkVRWF9fXVkXBwEZMVhAVwVSQPedURpDQA0NQkxRUFxFWEZXXUFXUkJdFBUID1ZRFFgLRlxcRg4NRhkBCxAbFncJElhcWVBeUgABS0NKRlanmUEUU19YQ18LEEJcV0YRRVYXRl0VU0MQVUZZB0Zb9dtGEQpZGQIHQnhWCxAGR1kYRWNMV1JSFkQCBlwRGVdRF1BXFEFF9coTAQcLXlFWWFoXDlJaDVcQXFVGWRMcFg==",
      "escena": [
        {
          "texto": "dc1:eUNSFQFKQwsKGERRQUBRU1+ggApDBl1UFX9aRRJWFEFXXBBVC1QIA1tTExhEI1QZFgMTQFwRAUNWU0QRW19bVVJSWEMAXA8ZUFUK94FaWVdZQ1sFQw5UXVJQUVhGUhgNVxBRUwNbBQ9ZDUFTCEZdVxChz1oZAQFDWVcWJl1UW0VSRPTOBRkHXBNnBVoSZ1VSVxBHDaDDVhhDWFBZAxNdDxZVXBQDTRYUXUUOGEQqV0pGEAdWVgKnylxFFhZbVxJXUUReEQhWEBlKFBdVXvedQxYTUhYCQmpZRlJUURTwlQAWU19aRlkJFRhSDkVEBFlTCUIHWRkHFgJPWRg=",
          "imagen": "img-portada"
        },
        {
          "texto": "dc1:YVdEAAVfEfqeVURVXhRdVVIKXACgz1kCFV1UFwNATABQVURVShUDChhVFFcWEl1VDw4OWhVFEQ0VVVcHXRlDQ1YWUhAHTABRUhQXXVwUWV5CBkEWFg9IUUcRTBcCWlsEFkFFUUZRA0ZWWQJeAUZWVkYRF1dcRQoCUV9TRUJWQBZWWhcTDVcCSx0UJVgSVV5fVQtWBwYQFBhAXxVUB0FKDhZfQxQCUAwHGFcNFhQPXRkCBw4VWgQJCltZFgFXGV5XE1X02RRMD1gd",
          "imagen": "img-sanatorio"
        },
        {
          "texto": "dc1:d1lZQyFDBkhGXQFYEnlfXkIGQQtDA1pKUBFZVkZDTQRERFEUAlBGDlFTE0QLRlxcRg4DFVqm3hNAWldFUVZcFkZYVkMI+sJUQ1UWVRJRXhBaAhMJAgxXGEwRUV4FVgJB9JtjWwgVExVMUwVTF0ZUWBVCBlAZJBYIVFhXSxJ4R0RWWl4MRFQGGVddDlsSRUVVFhVWCgcQ+5VUXxVUCV0YEURZQ1WkjkhGfFMSUgFGWUsUCwBUFUUBDxVAVwleXBJTXUJSEQsZBkoTQQoUQltKXxYNVgMRDRYYZl5bFwpSS0FZXlNRSA==",
          "imagen": "img-observatorio"
        }
      ]
    },
    {
      "id": "p14",
      "fase": "V · La luz de las 03:17",
      "titulo": "De dos en dos",
      "tipo": "dual",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p22",
      "descripcion": "A las 03:17, abajo, la luz empieza. Montero ha anotado los destellos por parejas de grupos. Desde San Sebastián, en septiembre, Yoksrio os avisó de cómo os hablaría si no podía escribir, con qué clave y por qué con esa y no con otra; el manual que nombra estaba en su archivo. En la cúpula no hay sitio para dos delante del ocular: una lee, la otra busca en el plano de la finca.",
      "instrucciones": "Resolved las dos partes. La de Gismera necesita el telegrama de Montero y el manual; la de Chiqui, el plano y la palabra de su hermana.",
      "documentos": [
        "d13",
        "d16",
        "d14"
      ],
      "pistas": [
        "dc1:Y1dFBg5YEBlXUURTQEFAX0VZEwoMQl1LFXxaRRVWFEFHRVUUFVBGAlFVBBYHCVYZFhcMQVYWRBoVRFccU0oSTxNaWEMIXAYZUEEFWENBWVVEQ0cBDwdfSlRXXEQSUhZBc1wQQANZAwFKVwxXRAJdGTUDDBVqAAYCRkJfppNXCBbxnVsCRPrZV1pXBRRRWFFGU0NCEQZCS10VVVxUAxNbDlgQRVoHFQoTQhYYFhUTXRkIDUJZXABEFlsWQgBeXFVEUlBeEBBYoYId",
        "dc1:ZkVWB0RcDxleVQpBU1gQVFNDQAGg01lUUEIVUwMTVA5FEERbFEcDFFdFQUcRAxhRBwChmFhFAQ0VU1pFU0tRXlpAWEMAXENVUhQFU1daU1lXWRMHFgNcSlRVWhcCVhhUFvOnFFMVTgBRWgAWVUZ5eyUmJxkZAw0PVBYERXR+en95GhcFDVUCGQAUKHl8e2AcFgVaCAJCDBhkY2ZjMx8YB19cURRTFTAxYG87DUQKWRktQhFQGQAXAEdfVAASWl1YE3UeTUR6Al1SFBRVQFFaURYGQEQFC1RZFUgVVAlfTQxYUR4=",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCURSTwwYUEIVc0oTCUwDEFVHRnBKRgsbVBYBFRhphOLEFVUERBNUWlcHQFgSU0AWUg9EVwxUUUYBFFZREEVYDBMABkJUV0YRUFMPVVECX19DFAJQCkZIWgBYC0g="
      ],
      "solucionDirector": "dc1:cENWBxZYB1YTUAEUYltcWVQKXEhDB1QYUVQVWwlAGBVZQkJRFFoVRhBvDl0XFFFWRg4NFVwJDQRc9YVJEl1bVVYWUg9ETQZVVlMWVV9VEFRTQ2AFDUJrXVdQRkMP8JkPGhBAWxREEwMYUw0WKQlKSgNCDloZCQEGFVVDBF5IR19WRBcXAVUGXkFVAl1BQFEZDEMCUEMmFBgEBBVyShMLVBZgHBRVAUYpFBZVBUQ1FBlUVkJ8FUVQVxViGkUBDRJ5EwsXJyFpoKpgfTB7HBR1XBYHVhSg0UtRQV4VUwMTWQZDURBQAxUWD11SE1dIRllJBxAWVF0KRBoVU1hFVlxBQ0BZDUMBV0NcXxQUWFNaXxwWBl9EAKGVSlZEWVhGV10NFlVIQBRQCwkYRRRGARRRVhRCC09IEA0GR1JZSw==",
      "exito": "dc1:d3NnoPdqKm18DkRRXhRUVUaggBcKFlcYUVQVVgFGWUFSVRBED1ACFFkaQVcUB0pNBwYNFVwLEBFQFloKQRlCX11ZRE1EdQIZX0EeFEBRQFlCBhMIAkJIWVlQV0UHE0wTU0MQQgNWAxUYT0FXRApZSkZSUQ8NVEQQUBZXFVNeUxoTVVgOCxkAWFdVRFpdV1hVGEN3AUMMV1tdVBVZCRNLBBZARVECUEYVTVQIREQVUVdGExdQGQoXQ0NTVwsSXVdFV1MXDwUZAFhAVURQVxRcURYHWhYGAVtR9oJbDUZfWUFxRVFGAlwHRntfF18IRlxcRjADRloEAhH2m1dFW0vxlxNVWA1ETwxKXEAWVUEUUVwWAl4FDQdbXUcfFWYTVlwAWBBERgNGRg5XRABFRB8YXQkRQkVYFBEGQVNFRUFWUERWFlsCRFQGSlIUAFESWFEQVaCJFBYOWRYVfVoXFkFRDFNCXxhGUApGW1MTQg0AUVoHBg0VXQAIQ1ZXWKaBV1tRXAwXBggZAExSUAFGXFsQVFNDWxEPBxQYTBFRUghHSg4aEENBA1kSBxQWDVdEFkpQCwcQVBkNCwlUFlkXW15bWFJaGUMjUBBUVkYFFEJbXlUWAl9EDwNcVxVdWhcXRl1BQkJRXg9GEgNRRUFSAUZOTAMRFkdWRQURVl5fE10DElpSRRcFC00MXkFVAvefVUMQUgYTCAwRGFtAUEFFCRNbAEVfQxo=",
      "partes": {
        "gismera": {
          "titulo": "Lo que dice la luz",
          "tipo": "texto",
          "instrucciones": "Cada pareja de grupos es una letra del cuadrado de los torreros: fila y columna. ¿Qué palabra repite la luz?",
          "documentos": [
            "d13",
            "d16"
          ],
          "huellasRespuesta": [
            "dbbf9a53ae34895c9970d645638e8d7a1e44f338f32fb951d6b0f3d016ceb57f",
            "dbbf9a53ae34895c9970d645638e8d7a1e44f338f32fb951d6b0f3d016ceb57f",
            "3f135a8d55fb53f2d868147905e671f2f5ec2f16745c81d2dcaf97e35ff5c8ee",
            "3f135a8d55fb53f2d868147905e671f2f5ec2f16745c81d2dcaf97e35ff5c8ee",
            "fbb482fda9c84452a86cf6ed10c947f975d77c79b11578eabd0e4674d23735bf",
            "b24daa78e0b44e5cf66ef7fd40d4f884bd845e4d24643d015a4b90572e5e7737"
          ]
        },
        "chiqui": {
          "titulo": "Desde qué edificio",
          "tipo": "hotspot",
          "instrucciones": "Cuando Gismera tenga la palabra, buscad en el plano de 1924 el edificio que la lleva y pulsadlo. La guía de sanatorios dice cómo es.",
          "documentos": [
            "d14"
          ],
          "contenidoVisual": "sanatorio",
          "huellasRespuesta": [
            "d620968435a81b6ed6ff87625d9600b14ed474c55f3ba4957e5b50dd6eca1f10"
          ]
        }
      },
      "escena": [
        {
          "texto": "dc1:chZbAhcZUwoJBVMUV1oQQEMNRwtPQllaVFtaG0ZWVhVEVRBYCUZGFlFYDkVIRk1XB0IOQENFAQ5FX1MfUxlTFkNXRRMFXQZYQRpEeV1aRFVEDBMACgFMWRVdVERGQ1kTU1pRR0ZRA0ZfRBRGCxUDGSELEVhcFwVDWVdFRVFWXEBaU0UXARkGVxNYAUBAVUMQVQxdRAYOGFVUX0BWChNZA19VQkAJFRUJWkQEFggHSxkUDQZcVQkFEA4WdQ1bSEdfE0VeBBFcQ1xfFBRYU1pfEFUMXUQGDhhcUFVaGQ==",
          "imagen": "img-observatorio"
        },
        {
          "texto": "dc1:dxoXJkgZMxUTe4a0lBRpURYQ8M1DDlcYRERQFwJaWwQYEH5bRlkJRlxfBllEDllKEgNCREwARAJWV1QAHBlhXxNbUkMBSBZQRVsHWxJRXhBDDVJEDwdMSlQdFUQTUVEMWUMQVUZACEZLXxVfC0ZOWAWhz1oX",
          "quien": "gismera"
        },
        {
          "texto": "dc1:dloXBwFJoIpAXRBbElBVEFcERgVZQl1UFVL2mhRQTQ1ZEFRRChUDHkxEBFsLRlxcCkISWVgLC08VV0YEQE1TUlwWUg0QSwYZX1sXFEJdXl9FTxMHDAwYTVsRQ1IIR1kPQ1NfFAdZEgkYXgBVDQcYVQdCAUBUBxYGGxZ6BBJVR0wTRFITDU0GGV9VRERTWFFSRAITEBEHSxhDVFZSFRNBQUVVEFUWVAEHFhYyWQpGVFgVQlIGA1FVTRV7WQtGXEBZHxZECgoZEkxWFApVVl1VEEUGEwgMQkhRUVAZFwdQXRNVURBYBxUKpZlbEVcWBxhdA0IRUPrUBQ9QRRg=",
          "visual": "sanatorio"
        }
      ]
    },
    {
      "id": "p22",
      "fase": "V · La luz de las 03:17",
      "titulo": "La lámpara de la cúpula",
      "tipo": "secuencia",
      "obligatoria": false,
      "puntuacion": 70,
      "segundos": 60,
      "siguientePrueba": "p15",
      "descripcion": "Montero tiene en la cúpula una lámpara de señales con obturador de palanca, de las que usan los torreros. Y los torreros, antes de dar por leída una señal, la devuelven igual: así el de enfrente sabe que lo han entendido. Abajo, la luz ha dejado la palabra y ahora manda grupos sueltos, cada vez uno más, y espera. A las 03:41 se apaga cada noche; quedan unos minutos.",
      "instrucciones": "Mirad cada grupo de destellos y devolvedlo en el mismo orden con la palanca, hasta que la luz de abajo se dé por contestada.",
      "documentos": [
        "d13",
        "d16"
      ],
      "config": "dc1:SBRECglbDFVcR0YOaRYBEhpBAUZPQAsaGRMBFUoRDUNrHBJGCVsCB0sUWwJIRFFXDwELVFVHXlFI",
      "pistas": [
        "dc1:fl9FAgAZBldHURZVElhREEUGQQ0GQllWQVRGFwJWGBVZU1FGRlkHRkhXDVcKBVkXRiEDUVhFAxFARllFV0oSQ10WWaDeVAZLXBQAUV4URV5ZQ1IIQwFRVlZeGRcFXFUOFlxRR0ZTDwpZRUFSAQoYWhMDBkdYAQtN",
        "dc1:ZlhWQwdYDU1SFAhbQRRe84wOVhYMERhBFV1UFwlHSgAWXUVREFBGClkWEVcIB1ZaB0xCZlBFCxAVU0cQW09dVfCXXhBIGQ9YE1gRThJQVRBXAVIODEJOTVBdQ1JGUhgEW0BVTgdHXEZWWUFTF0ZNV0YBA0ZNDAMMGRZTFhJVUxZBU1APBRkHXBNYC0cSQF9CRAZBCxBM",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQgClFJQFgVVkZfWUFGUVxVCFYHShhxCEUJA0pYRgENW00ECgdaFlMLEk9dTBNXWxcFF0N1UhQXUUBdVRBVEVYHBkJcXRVEW1hGVlZBQ15fD0ZZCUZJQwQWHQcYXBUWoZQZBw0GWxZYChJaU1tRX1ZN"
      ],
      "solucionDirector": "dc1:fl9ZCg5MBl5cFABREkdVU0MGXQcKAwIYWVAVWxNJGAVTXBBQA0Wl1UtfFVlEC1lXAgNCUksQFAxGFlIAEl1XRUdTWw8LSkMRAhQFFAcdEEkWC1IdQxNNXRVDUEcDR1ETWl9DFAVaCEZUV0Fap8dVSQcQAxVdAEQuWlhCAEBWCRZQV1MCREsMV1dVRFXxhVFUU0NGCgxMGHZaEVFWRlpWB1lCXVUFXKXVVhYFUwhGW1gVDVgVXBZED1QWVQpcX1tEXldUCqeKDRlXUURYV1dERUQCEwENFkpdFUVaRRRWSg5FHhBnDxUVAxhXBlkQBxhNFAcRFU8ABwZGGhYJU0oSXlZEWgIKWBAZXlUKUFNaEEREBkBEDwNKX1pCFfXNUhgSQxBdVQhQFAf6jUFPRApZGRYQF1BbBEQSQFNSBBJKR0ZWRFYHBRkQUF0UFEFcQF9DGA==",
      "exito": "dc1:f1cXDxFDQ11WFAVWU15fEEQGQw0XBxhdWRH2jQpHUQxZEFdGE0UJRl1YFVMWCRhARhEHFVgVBQRUGBY2XVcSWlJFF1NXA1cIHRQrRxJcURBaBvDJBw0CGEZQV1JGQk0EFlVDQKWUDxUYUw8WCAcYWqXYEkBVBEQaFUdDABJYXlFGX1INRFECGVZaEFFcUFlUWUNAEUMSWVRUU0dWSBN1DlhEVUYJFQIDUldBWgVGVPrHDxJUSwREGhVSXwZXFRJFWlgXEhFcQ09WWgNVElUQU0MGXRAMThhJQFQVdhNBXQ1fXxBYAxUWB19XA1dEClkZEAsFXFUECgBcVxYBV1USQFJaWwZEWgxXE1gNVkBbQx4WMkYBBwNWGEFDUERGW1cTV0MQTUZRCRUYRgBHEQNMXBVCEVpbFwFDWVcWCFdKUxg="
    },
    {
      "id": "p15",
      "fase": "VI · La prenda de la sexta",
      "titulo": "La prenda de la sexta",
      "tipo": "codigo",
      "longitud": 3,
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p16",
      "descripcion": "El acta auténtica, con sus nueve firmas, seis cruces y una firma rota por el borde. El acta copiada dice que cada uno de los nueve llevaba encima, en una prenda, los números de los otros ocho, y nunca el suyo. Una de esas prendas pasó por vuestras manos este año.",
      "instrucciones": "¿De qué número del acta era prenda el Ojo del Horizonte? Escribid las tres cifras.",
      "documentos": [
        "d25",
        "d12",
        "d33"
      ],
      "huellasRespuesta": [
        "74525a226a6f8ff2dcac2ccf764cd632832b65cbecb8e5a29904a73072890038",
        "91a0cdf4ce68cb16d1d34ffd51d0859079b6ffe40704d042e6353655ae9db452",
        "56fb11dec19fea64d838be1bcb6217e15af4ed41ae6b8956731c47530541c67b",
        "74525a226a6f8ff2dcac2ccf764cd632832b65cbecb8e5a29904a73072890038",
        "d986d0ac48868f35bbdf5ebdc8a1d31ac1bbd41adc57213df76b2331a78e5a9c",
        "d986d0ac48868f35bbdf5ebdc8a1d31ac1bbd41adc57213df76b2331a78e5a9c",
        "74525a226a6f8ff2dcac2ccf764cd632832b65cbecb8e5a29904a73072890038",
        "287112782fd4ade2c5c30b98404a53c738cebb6cd29eea15183037b1642c9142"
      ],
      "pistas": [
        "dc1:dloXEQFPBktAW0RQV1gQUkQMUAwGQlRUUEdUFwFBWQNXVF9HRloFDlcWD/XeC11LCRFCUFdFCAIVQF8AWFgSVV9XQQZEXQYZX1sXFFhbSVVEDEBIQxdWWRVdUEMUUhgRWUIQVw9TFAcCFg1XRAJdVUYOC1dLCkQHUBZTC1FYQFFcRRcHARkxVlpTSBRXWhBVWkNWHBMHXFFQX0FSRgMIUxgQfV0UVAJGW0OilwhGXlgKFgMPGQAIQ1RVQgQSXVtVVhZGFgEZAFhXVURBXFsQXFoGRQVDDldLFVVQFwpcS0FZREJbFRUJBVBZQU9ECE1XBQNCUFVFFxZMWRg=",
        "dc1:f1cXAAhYFVwTUAEUXltDEFwMSgERDUsYUEIVejNheyj1uXx1IXpcRnUHQWNWRmoKRiFWFXBQRCYDFnpSEngKFnQPFyxUF0NpUkcFUBJVEFNfBUEFEEJUVxVWR1YEUlwOFlVeFANZRhRdQAREFwkYXQMOQldLCgcLUBoWCFtLU1ITR0KgzRkN+olZAUZdFFZRWhdSRBpCWk1GUlRTRlZLABZWWUYLVEYDVhYEWkQHW00HQgNATabNDUFfVQQIGfCJR19SDQEZAEtGTls=",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQPAxgIBQcbFz8TVAAWAAACRlsJRkxfBFgBRltLExhOFVoKCQwVWldFAgkKFkoWWwJECVMAHRQhWBJ7Wl8WBkEFQw5ZGEVDUFkCUhgFUxBRWAFADwNWFhBDAUoYSgMFoY9XRQEPFVdVEVMVEkVaUUIGRE8KT1wa"
      ],
      "solucionDirector": "dc1:AwYBTUR8DxlBURJRQEdfEFIGX0QBEFdbXVQVUwNfGC5cXxAcAFoSCV9EAFCny1kZAgcOFVwdFAZRX1MLRlwSBgMEG0MBVUNdVlhEWUdHVV8fQ18IBhRZGFJDVFUHV1cSGhBVWkZZB0ZbWgBAAUZcXEYODUYZDwsaUERZFhJ0Z2Rwf/TqKHgkdhMcKQUSYQIQZFATJ1dCcQ0VdAMXKgQYIA4Qdw1GelZPFBYNWRdGVvrcDwdHVhZEUwUHFgQSCQIPE1tSDQtKQ1xfFFQEBBQYf3kiH0QsLXUUFX56cEoTdy5kHBB7KXlKRnd5NBpEKXdwRhtCenYmX0NTV1oRUxl9eXYfDEMIWENaX/fFQUFBXFEWB1ZEDwNLGEVDUFkCUktBUlVcFAdWEgcYVQ5GDQdcWEYGC1ZcRRUWUBZVBFZYEkNdWRcPCFwVWBNYC0cSUFUQWgxARAwWSldGEVpUDlwYGBZeRVoFVEYDVBYSQx0JAhkDDkJ6UwpEBkdXFglTGUJEVlhTAkRdBlUTBFQCHBR1XhYGX0QCAUxZFVBAQ6WaVhVfU1EUClRGAFFEDFdEVggPRgcRQfrERBFaQldFQlZAFlZaFwELSwdcExwVQVdQURD0yNHkxQZXSlTzjhcfE00PVxBCWxVURgcYWqKXFA9CEEYbQnt2RRAKUFhTRVFLR0wfFlQMCVZDVVIUVAQKFBh1GEN6Sk9CVfucVVxUCR8YMldeEGcDVwcVTF+ilwpcGFwKQg/2kAENAFoWUgBeGVpZR1NbQwFKQ11WFCVmeXV+cR9DSkQPAxgIBQgVHydGSgRaWV8YRkQTAxhbFEQNpYsZAw5CBxkBAUNGU0YRW1xfVEFTFxANV0NXUlANURJFRVUWD1ZEExdLUVBDVBcKUhgCREVKHUgVKgdLFgJEEQVdSkYOA0YZFREQWhZ3EEBcXl9cDBcGCBlTCQUUAUdGVVJRFhVaEgxCW01UX1FYRnJNE1NcWVtGUQMM+4VBUgFGXUoFEAtXUBdKQ3lZFhRHXBJFVhZTBgBMAFwTVRVB8ZkKEFoCExcGGkxZFVRGFxNdWUFmdWJnKXsnShhSFFOn11kZAgdCWVhFDgxMVxpFRFBEVx8WTkMXTENWVV0HXV0UUVNXAVJEBgwY+p7TtZECXEoA9IseFCh6RgJdVQhERBdNUKXLDBVcFkQNXBZSABJd8YVdUlJZRFwQGV9VRERAQVVSV0NADQQXUV1bRVAZRmVZDVNeEARWA0pGDhpBRQEPSxc=",
      "exito": "dc1:AwYBTUR8Dxl8XgsUVlFcEH4MQQ0ZDVZMUBFQRQcTVAAWQEJRCFEHRlxTQVoFRktcHhYDFV8MFg5UFlIAXhlTVUdXDUMIWENIRlFEUUFA85EWEVwQAkJIV0cRUFtGUVcTUlUcFAJQRgpZFhBDAUZLVgoNQkRMAAACFVNaRVRQXFdfFlMGREwNGVxSDVdbWxwQ9MjR5MUGV0pU844bRkoYFFhREEYJRgdGWRYN9cUWUUNIQjFcV0UHEUBMGEV+WBJFVk5DAkRXDBlWR0RBXBRDVVoPXEQNCxhNW1AVVAdBTAAMEFVHRkAIBxhGBEQXCVZYSkIbFUoAA6CPWBYJU0oSVUFDVAYXGQdcE3URRldYWV8WEFoDFgcYTlxHVBlGf1lBXF9JVUZEEwMYdxREAQpRVkYSEFBKEafQFVdaRV9MQVNcFlMGF10GGV9VRFpdQFFC9c5SRAcHGHRaVkdYpYJXQVNCURQVQB8HFhY4FggHGF8PEA9UGVVUWxkWVQpcGVFERkwXFwVUE1ZQW0gUV0cQ8p0mHUQqTBQYWPKcUw9QV6ONChBRChULpZFSCFULRlxcCkIKWk0ACENTX0QI8YoSU18WVgAQWENdVhQlZnl1fnEWBl1EUlsIARsRe1YCUhgCQ1FURgcVBQlVWUFVFgP7lAcLERsZIApDUFoWBkdYVlNBWFhDAFxDUUZYARRaVUkQQw0TFwwASl0VUEVWFEddQURfREEKVAIJGPTKcxwWXV0PBwxBXEUHBkdZFqeFGQIGBfSMT0RAQ1xdFAFYElFeRvXOXEQHBxhUVBF2WAtaSwBE851VShUKBxhVAEQQBxhdAw5CRVYXEAZHWRYBVxkDDwIEGQ=="
    },
    {
      "id": "p16",
      "fase": "VI · La prenda de la sexta",
      "titulo": "El asiento cero",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 150,
      "siguientePrueba": "p17",
      "descripcion": "Cuatro papeles en un sobre: un billete de 1910 para un asiento que no existe, un certificado de defunción de esa misma noche, un horario y la carta de una señora asustada que no nombra a nadie. Y dos testigos que hablan de aquella noche sin saber lo que dicen: el portero de la villa y la casera de la calle Portales.",
      "instrucciones": "La sexta sigue viva, como Elías la dejó. ¿Quién es hoy? El certificado da un nombre de 1910: decid quién es ahora esa persona.",
      "documentos": [
        "d26",
        "d27",
        "d28",
        "d29",
        "d10",
        "d22"
      ],
      "huellasRespuesta": [
        "7ebbd83c6485424f955f1e54c6db5ed11eda9b27f9dffdea576b8a50e5f80c3e",
        "7ebbd83c6485424f955f1e54c6db5ed11eda9b27f9dffdea576b8a50e5f80c3e",
        "1f9e776b246d89cb218be90e9b27bc0f8b08150b12489546fb9e7f0e286e78f3",
        "1f9e776b246d89cb218be90e9b27bc0f8b08150b12489546fb9e7f0e286e78f3",
        "e5d43104acbb377bed3adcaa69dfb415b3db93075649fb50ea3b308c74304fb6",
        "e5d43104acbb377bed3adcaa69dfb415b3db93075649fb50ea3b308c74304fb6",
        "faead49422746ed0835f832825cf7d5dd9a67034b19fe557320906642ad4b9f5",
        "faead49422746ed0835f832825cf7d5dd9a67034b19fe557320906642ad4b9f5",
        "9f1cb1b8ac0aae8fce9fd05387c853fd625bee46922d93f3065436bfb3e6f451",
        "9f1cb1b8ac0aae8fce9fd05387c853fd625bee46922d93f3065436bfb3e6f451",
        "b643a1926ba4b2a97e5813418f6070737140fb6b704d183df056081644408989",
        "6a0f05a7a7a85c14f60f8979af1cd328b9c6f8c9aee1ca406a3d0e54c81655b1",
        "6a0f05a7a7a85c14f60f8979af1cd328b9c6f8c9aee1ca406a3d0e54c81655b1",
        "f354985f5b2619abeaf9b111b86e795f2180ba672819b4cee038f2886b84c89a",
        "e5d43104acbb377bed3adcaa69dfb415b3db93075649fb50ea3b308c74304fb6",
        "e5d43104acbb377bed3adcaa69dfb415b3db93075649fb50ea3b308c74304fb6",
        "4f898cfb2273789239a4da97985bc91a12d5bf20c12d6f39188827ba7fa3c55a",
        "d2b66003d8873b2867e1def44848d72216ba0062f82d3981994f1c8622b1fcb2",
        "be4ad32e673f00d91cb9ad3b55671d8e1ffee0ca30d0801bbe7ac9b95fde46db",
        "40e93f2d0d0208d112b746205d282e30773e2299ed8d55524c71ddf12a49f8a5",
        "5508631df8c2e522dc415d0fb19f4dc3b1dc6b7a2f983ac0e07b89871293c589",
        "3f86c4c6fb3fd02406b3455b1559e770fa4684899cf5367031a5509626a96b6f",
        "4d92904cad13db6508743d53ebb83d9ef90a35244c325e53e1a3985020104beb",
        "bb1ed540305ba0cf8423b0dff8c3305aa04418c1cf47a6b135cbf2513703f44f"
      ],
      "pistas": [
        "dc1:ZlhWQwlMBktHVURVElhRQxZRAF5SUhhWWhFWWAFWGBRYEERGA1tGF01TQUUFCl0ZB0IOVEpFVlEPAgZLEmpTWkVZFxIRXENXXBQBR0b3mRBbFlYWFwMWGHhYR1YCE0kU9ZkQWglWDgMYUxIWCAcYXQMOQldQCQgGQVMaRV5YElJWWhcAAUsXUFVdB1VWWxBJFg9SRAcHVBhWXlZfAxNcBFoQVFsFQQkUGEcUU0QDVBkWDRBBXBcLQ0NfWUVBWF5fQRZWQwhYEBlXXQFOEk0QRlkPRQERQlkYWVBGFwldWwQY",
        "dc1:8Z12EQlYB1ZBVaaPElVTUVQCEwENQvqT17GTUwlBWaONHhB4BxUVA/uHDkQFRlxcCkIBUEsRDQVcVVcBXRlXRRNaVkMXXBtNUhhETRJRXBBUCl8IBhZdGFFUFUIIE1kSX1VeQAkVFxNdFg9ZRANAUBUWBxVKAEQPWhZfCEJLW1ta9YRDAVVDX1ZGFltEXVFCXwwTAAZCeWp+cHt2SBP63ndU84cIUQNGUVQAFgEKGE0UBwwKGafbOhVHQwzxkFwWRV9BBkRRDEATUQoUV0dREFUKRgACBhQYUF8VQghSGAJXQ1EUFlQBB1xXQV4FFUxYRlNbAQlJRABaWEIAQU1TWFdZFw8FSkNaUkYQVUEUVFUWFl1EDQ1MWUdYWhcXRl1BWFFUXQMVDgcYQAhFEAkUGQIHQlFWCwAGFUVXCVv6gRZWWhcsDlZDUVJXDVUSdlFCVQZfCw0DBw==",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQPAxhbVEJQRQcTXAQWXFEUBVQKCl0WMVkWEllVAxFOFVwLRC9aUUQK8YhdGBNyWKDVWEN6UkAFWFtaURBjBFIIBwcYVloRWEIUWvvSFlVeFFcMV1YCFiBkLyd2eEYOAxVRDB4MFVJTFlNJU0RWVVIRRFwNGUZaREBAUV4cFhoTCA8HTlkVVVxSBVpLCFNEVRQH9tcJSxYXXxIHGFwIQhdbGRYNF1xZFhRHXBJYXBZSGw1KF1wdFDdBElVAX1IGQQUHDRhUUBFFWAjwlQAWXFFHRlIJEllFTw=="
      ],
      "solucionDirector": "dc1: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",
      "exito": "dc1:f1cXAAVKBktSFABRElhREFUCXwgGQmhXR0VUWwNAFkFyX/OFBxUlB0xXDV8KBxhsAQMOUVxFLRFcV0QRVxUSV0FbVgcLSwIVE0INQVZVHBBbFlYWFwMYWRVdVERGAQtbBwAQUANZRlcMFgVTRBVdSRILB1hbFwFDUVMWVAsIAhoTRVYPDfrQGVdRRGdTWhBjUwFSFxcL+5lbEVQXClJLQQQCCgBWFQIDGFMSV0QIV1oOB0JQV0UBDxVCRABcGVZTE3pYBBZWoIhcGERRXBRVXBYAXAcLBxhcUF0VUwlQTA5EEFhVFUEHRlRXQVMXEllaD6HRWxkcRABaWBYQXBlQX19aUhcBGRNYQVVEQVwUUUNfBl0QDEJJTVARW1hGVkAIRURVGEZcCxZKUxJZRBZXS0YXDFoZAQFDWVlFRVxMV0BWGBciNnIid3IUClsSU0VRRAdSBgJCSFlFVFlSFRNWCBZEVUcJRwkVFhYpVwellVhGBgdGWBUFEVBVUxcSSVdEQFlZAhcZE1hBVURHU1hGUUQPUhdPQlz7lF9RWApWS0FDXhBHD0EPCRhHFFNECFcZAxoLRk0ASkNgWBYEQVBXWEdZFwABSwwXE2EKVRJcUVJfF1IHCqGLVhVTWkUUUlwAGBBlWkZbCRJZRAhZRAdUGRcXBxVXBAAKUBZAABwZcUNSQkUMRFoCSlxHREVHURBVRAJdRBYMWRhGXllWRkf7yFVeWVcHG0Y/GFoAFhcDQE0HTkJZWEWn2VlCXwhTGUNDVhZ2MS94LXgTXA1OXRRUVUUCQwURB1tdRx0VWwpWTgAWVFVHAlBGA1QWBE4UA1xQAwwWUBkBAUN0RUIAQFBTFlJaFwwQSwwZX1UAWxJQVRBDDRMIAgFKXRVIFVMDQFwEFlVcFAJQCkZVQxJTC0ZZVUYNFkdWRQgCUVkWAVcZR1hSFlQCFk0CFRNRChRHWlEQRgxBEAYQ+5VUEVFSRn9XBkRf84UJGUYVUVhBRxEDGFcHBgtQGQkFQ0dTVQpcVkhVUgwXDQ0ZBlUTXAtZUEZVEFUMXUQTEFFLVBFRUkZSWhNfXB4UKlQVRkj1wFENCFlKRgYHRkkAAwJRV0VFVlwSd0ZEUg8NVkNVXBQHQVdaRFFYQ1cBEBJN+5xCFVMDE0kUUxBcW0ZdBx/7lwhFRAJdXRMBC1FWS0QyQFNSBBJMXFcTXlgRBRkTWEFVRFFeFFFdVw1WBwYQFBhMEUZYBEFdQVpREFkDRgdKGFoAFgoJW1EDQgZQGVRdUgcY"
    },
    {
      "id": "p17",
      "fase": "VII · La noche del 20 al 21",
      "titulo": "Dónde estaba el que mintió",
      "tipo": "eleccion",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p18",
      "descripcion": "Queda una hora para el amanecer. Sobre la mesa de la cúpula ponéis la noche de 1912 entera: el cuaderno de Yoksrio, la hoja de la casa, la carta del portero, el plano del tercero y el libro de la caja de caudales. Alguien dijo esa noche algo que no pudo ser verdad.",
      "instrucciones": "El subdirector dijo que le había despertado el timbre. ¿Dónde estaba en realidad a las 02:41, cuando alguien en bata bajaba por la escalera de servicio? Cruzad los cinco documentos.",
      "documentos": [
        "d03",
        "d20",
        "d22",
        "d23",
        "d31"
      ],
      "opciones": [
        {
          "id": "a",
          "texto": "En su cuarto del primer piso, dormido, como dijo"
        },
        {
          "id": "b",
          "texto": "En la escalera de servicio, bajando en bata desde el tercero"
        },
        {
          "id": "c",
          "texto": "En la caja de caudales, detrás del mostrador de recepción"
        },
        {
          "id": "d",
          "texto": "En el vestíbulo, con el portero, esperando al doctor"
        }
      ],
      "huellasRespuesta": [
        "d2bc715d812e23d62845c973b7bce6ae71553742a8dec0646ff0e197461146d2"
      ],
      "pistas": [
        "dc1:Y0ReDgFLDBlDRgtWU1AQXFdDXgENFlFKVAsVQggTTAhbUkJRRkYTA1ZXQVILCFxcRgcRQfrERBBAFlUQU11AWR0Wcg9ESQ9YXVtEUFcUAQkHURMACgFdGFHyhlkCVhgSWV5RVgcVAwoYUgQWCAcYClZbQkwZCQVDXVlcBBJdVxZfVxcABUoCGVddB1ESUV4QRxbwzUMSVFlbRVQXAlxKDPWdURSlnApIGHoUUwMJGFQPEANRGQGn0FtSU0VTSVNEVlVeoNcZGhlSFBVB8Z0QWFkRUkhDEV1f9otbFwNfGBFZQkRRFFpI",
        "dc1:dkVWQwlYB0tGUwVQUxRcURYAUg4CQlxdFVJUQgJSVARFEENRRlQEFFH10hYFRlRYFUJSBwNWUUNMFkUAElpXREH1hEMFGQ9YQBRUBggABxwWAFwKQxdWGFJQR1YEUkwOFkBfRkZTDxRVV08WIQoYSwMFDlRUAAoXWhZSDFFcEkdGX/TKClwQGUdRCvefVV4QWgITBwwPWlFbUFZepYBWTRZJEFgHFQ4JUldBUgFGVFhGAQNGWEUAClZTFgZH+pNaE1JSQwhWEBlXWxcUVltCXfXOUkQGDBhUVBFWXhNXWQUYEHEUClQVRggEWwJcRl1VRhEXV10MFgZWQlkXEkpTWvCbVkMFVUNPVkcQ959WRVxZQ1cBEAZdGFFUQUWlkktBUlVcFAtaFRJKVwVZFkg=",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQGDBhUVBFWVgxSFkFnRVlRCBUHBEpfooVEClkZBQMIVBkERA9URRZVAAMBAxNXWQwQ+tAZX1UXFFFVVFVYAkBEBwdUGFheW0MHUFkTUVFDGEZEEwMYUxIWCAkYSBMHQl1QHwtDdFJTCVMZUxZWRVZDDFYRWB8UHRRBVVxZ9dATBQ9CTl1GRfaaBEZUDhZREFgHRkZWCgxVDkpGdlZGEhdRVkUBEEFXREVTGV5XE0BSGURbAlNSWgBbEkRfQhYPUkQGEVtZWVRHVkZXXUFFVUJCD1YPCRhXQVoFFRgJVFhWBBdFKQpbQl+mgRlCV0FXFw0LGQdcUF0WFENBVRBEDFEFAQMW"
      ],
      "solucionDirector": "dc1:dlgXDwUZAFhZVURQVxRTUUMHUggGERgQVhgbFzJBXRIWQFFAB0ZcRhAHSBYoBxhUAwwWXEsEXkNQWhYRW1RQRFYWUwZEVQIZAARdFEFbXlFUAhMBDUJdVBVeU1EPUF1BUlVcFBJQFAVdRA4WHUZbWAIDQkVVBAoXVBZCAFz6n1cTU1tDF0waVhMcFFhTWl8QUgYTVVpTChhMEVtYElIYBVMQd10VWAMUWR9aFqfPVBkCDRBY+sgFQ1BYFgBeGUJEWltSEQsZS1FcXgUUVlEQXFdDUAUQAxECFVRZFxJaVQNEVRBaCRUWE1xZQVIBFUhcFBYDR1UASENURfXIEkhHUxNYWEMBShdYUVVEUVwUQ0UWAEYFERZXGB1QHBlGGwpIFnxRFAVUDAcCFgRaRApRWxQNQlFcRQgCFVVXD1MZQFNUX0QXFlhDTF1VRFVCUUJEQxFSRAcHGAgHCwYCRlIYUQQKBANG980FV1sRRAsEWVoPodFb+95EAFpYFgNbS19XE19bBgNQAVVWFB0UXlUQXlkXUkShyVtZUVRbVhUTXARaEF1bCEEHBVlEBlcXRlkZAgcRXVYXBaGOFh4kVlxeVxNUVgmnikNAE0cRVlv3gxBTDRMBD0JVV1tFVFQHQV8ARRBRFANGBxUYXg5EBRURAkYHDhVLAAMPVFtTC0ZWElJaVVJDFUwGGV9VRFddWVJZWAJQDaDRVhhZUBVDA137zFdeEFEKFRUTWlIIRAEFTFYUQgZQGQsLAF1TFhwSXF4WUFddBhZWQ11WFAD3n1UcEE9DXwVDCldSVBFRUkZfWUFVUUNVRlEPBV0WEEMBRl1VRgEDX1wXC0NRWUQI8ZRTFlZYFw8FGQBQRlAFUAgUQ19aDBMUFgZXGFRTR14UX1lBU1wQRxNXAg9KUwJCCxQWGU5RSxV8CUQVUEVCpp9bR1pcDBcCRFUCShMEVg4GDBBVWkNDCxEWXUpaEVlYRkVdQUVRXF0UFQcKGEAERRCllVsTDg0ZGQAKQ1dXQgQeGVZTQFJSQwBcF0vwlRcUVlFcEFsMQBARA1xXRx0VUwldXAQWVUNApZRGClkWAlcOBxQZFhAHUkwLEAJbUllFQlZAFlZaFwcLWhdWQQ9EV11aEFVaQ0MLERZdSloRUEQSRk4OFlRVFFYEXFcIFgAWCAcYTAgDQkwZCAEHXFcaRVxWElcTWlYQRAlRAwcFRBxWHR4QZxZaAQ1CXUtBUFdWRlZWQVpREFcHXwdGXFNBBlZcCwxGA0IFC19QVBVYWUVCVlb1nlcXBhdNAksTVgVeU1pUXxYTXBZDDlkYUEJWVgpWSgAWVFUUFVAUEFFVCFlEBxhVBxFCBQtfUFIVHlRMHBl/X11CXqDXGRNYQVVEWl0UVFVVCkFEEhddGEdeV1YEUhgFUxBcVUZWBwxZFklFDQNMXEYDElBLERERVEUWAVcZX1dXREIEBV0CGVZaRFVVW0NEWUodRCANVltZREZepYBWQUdFVRQCUAQDGFIEVQ0US1xcQgdZGQ0LDldEU0VXVxJUUkJWQx0ZGVhDVRBdXlhRQxYHVkQPA0sYBQMPA1cTVg4WVUJVRlAKRktDA1INFF1aEg0QDhkRBQ5FWVUKElxeFlBXXQYWVkNdVhQA959VEBhSDEEJoM9ZGFBfFVsHE1sIQ1RRUE8ORgJXRAz1yQcYXAhCB1kZDQsXUFoWHBJXXRZWRFZDAFwPGUBRFkJbV1lfFktfBRBCQllFUEFeCl9ZEhZUVRQAXAMKTEQOFgcJVhkFCwxBWEUXDFsWUgASUUf1mkVHBgADQ1VSFAxbWFUQVFNDXwVDAVlLVBFRXgVWGBBDVRBRChUWA0pFDlgFChhXCUIOVEpFERBUHxg=",
      "exito": "dc1:dlgXDwUZAFhZVURQVxRTUUMHUggGERYYeFhbQw/wi0FGUUJVRlsJRlxTAl8WRklMA0IQWlsEBgIPFkUMV01XFl5XUxERXgJdUkdEUFcUUVdZEEcLQwFXVhVEWxcBUkoAVFFEW0ZFCRQYUAhECQcWGT9CAxVVBBdDBQQMUQMVEltaU1kXFlgQGfCdCBRRW15EVwFSRAELVFRQRVBERlddFUTzkUdGUQMKGFsORRAUWV0JEE4VWAkDFlxTWEVXVxJUUkJWQx0ZGVhDVRBdXlhRQxYBUg4CAFkYRV5HFwpSGARFU1FYA0cHRlxTQUUBFE5QBQsNFV0AFwdQFlMJEklbRVwWUwwKXQYZRlpEXF1ZUkJTQ0ABQwNQV1JQV1ZIE30SUxBRWAFADwNWFg9ZRANKWEYGBxVVBEQAVEVXXxJdXURe9ZoCRFwNGVZYRFxdQFVcGEN2CEMHVk72nFoXAlYYDVcQc1sLXBUHSvXMV0QSSlgDQhdbWEUMDF9XFgjxmEEME1NbQwhQAUtcFABRElxF858QQwEHB0sYUVRZFxVWXxRYVF8UFlwVCRQWAFoFRlZWFBYHGw=="
    },
    {
      "id": "p18",
      "fase": "VII · La noche del 20 al 21",
      "titulo": "Quien cerró la puerta por fuera",
      "tipo": "eleccion",
      "obligatoria": true,
      "acusacion": true,
      "puntuacion": 200,
      "siguientePrueba": "p19",
      "descripcion": "Amanece sobre Peñalara. Dos guardias civiles esperan abajo con los caballos. A la mano de 1927, la que forzó el piso y encerró a Yoksrio, le toca después. La pregunta de esta noche es una sola: ¿quién entró en la 309 con la llave de reserva, vació el frasco en la jarra, se llevó el anillo y la llave, y cerró la puerta por fuera?",
      "instrucciones": "¿Quién cerró la puerta de la 309 por fuera la noche del 20 al 21 de agosto de 1912? Si os queda alguna duda, el Interrogatorio sigue abierto.",
      "documentos": [
        "d03",
        "d20",
        "d22",
        "d23",
        "d31",
        "d32",
        "d29",
        "d30",
        "d24",
        "d14",
        "d15",
        "d08"
      ],
      "opciones": [
        {
          "id": "ibarguren",
          "texto": "Ernesto Ibarguren, el médico"
        },
        {
          "id": "adela",
          "texto": "Adela Urquiza, la camarera del tercero"
        },
        {
          "id": "elosegui",
          "texto": "Ramón Elósegui, el subdirector de noche"
        },
        {
          "id": "echaide",
          "texto": "Saturnino Echaide, el cajero de día"
        },
        {
          "id": "rosa",
          "texto": "Rosa Urquiza, la enfermera"
        },
        {
          "id": "garmendia",
          "texto": "Leopoldo Garmendia, el huésped de la 216"
        },
        {
          "id": "larrauri",
          "texto": "Cosme Larrauri, el huésped de la 220"
        },
        {
          "id": "lizaso",
          "texto": "José Lizaso, el portero de noche"
        }
      ],
      "huellasRespuesta": [
        "192051ef6f1539b88d127955b8ca17866dd926a682e2dd358273191a89768865"
      ],
      "pistas": [
        "dc1:f1cXBghQDlBdVQdd8YdeEFUMQRYMAFdKVB0VWQkTXARVWVRRSBUjChhbop8AD1tWRgcMQUum10NRUxYJUxlRV19aUkMFGQ9YQBRUBwgEAhBVC1wWEQdZVlFeGRcfE1kNUUVZUQgVCgkYUxJGARRZWwdCB1sZCQVDRUNTF0ZYElJWRVMGRFUCGUZaBRRLFFRZUxkJRA0NGF1HUBVSChNcBBZcURQEVBIHFhYkWkQVTVsCCxBQWhELERVTRRFTW1MWVlgXDwUZAFhZVV8UXlUQU1cOUhYGEFkUFVRbFwNfGAxZXkRVBVQUAVlFWhYBChhJCRAWUEsKSENQWBYJUxlVV0FfQwJfGQZVE1cFXldGXxBSDEEJoM9ZGFBfFVsHE1sIQ1RRUF0VCgcYUw9QARRVXBQDQlNMAEQGWRZVCkBLV1kTUlJDCFhDSlb31VtAVRBVWEMCXVJSFhh5UEYXHFJIAEJZXFgHRkYCXRYNV0QFUVcSA0JDXBcABhVSXwZXVxJSVhZGFqeQQ0lfVQpAUxRVQldDVghDBl0YWVBGF1YBAlUHHhBxCBUDFVkWEVoFCExYSkIDWVhFCgxHQlNJEkhHU1dXWUMAVhAZW0GnnUFEVVRTEBMVFgcYVVRVR0IBUkoOWBBcWxUVAglLGA==",
        "dc1:chZbAhcZUwsJB1EUQVteUUQMXUQPA0sYVlBRUghSS0FSVVwUC1oIEllVAEQDB0sCRgNCWVgWRFMHDAJUElheUUZfUg1EWwJTUlYFFFZRQEJfEFJEBwdLXFARUFtGR10TVVVCW0gVLgda9cxXRBVNWw8GDRVYRQkKR1dEXxJVU0UTVVYHAVcCShNYCxRWUUNAUxFHBRENVhYV84pzA0BcBBZBRffPFQUTWUQVWUQCXVVGEQdSTAsADBVFU0VdQFdYE0NZAhcZAFhXUQpVQRRREFMQUkQLDUpZGRFWWAgTVAAWQEVRFEEHRltTE0QFAlkGRi4DFVcKEAIVUlNFXlgSdVxbXhAFS6CUUhQBWhJRXBBaClEWDEJcXRVZQPTPQEgEUlVDFAJcBQMYVQ5YRBdN+s9CAUBYFxAMFVpfCFtNUxZWWhcLEVwAVh0=",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQGDhhcUBFZVkYBCVcaEEBVFFACRltZDxYUB0pcAkIBWldFAQ8VW1kLRlhRV0FRVhBeGS8XE3NKFGcaHBBHFlZEEwNf+4YRVBcKUktBRVVZR0ZRA0ZUV0FbBaWJWAgDQkwZEQsO9oUWAF4ZQkRaW1IRRE0RXF0aRG0SQF9UWUNfC0MGXVX2kEYXClwYAlleVl0UWAdcGFMNFgUWV10DEANRVkUABhVaV0VBXPGHXERWQwFLAhlWWERQV1gQUlcNUAtPQkEYUVQVWwlAGAVZQxBQAxUkD1RUAFlEA1QZBAMMREwAFgwVU0VF8ZBeFhtFQkMCUABRUhQAUV4UVUhGBlcNBgxMXRUBBQZGV10C9Z1RFAJQRhdN9cgWBgdWWglLTBV8CUQCW19aCV0ZQ0NWFkQGRFUPXEX31xRWURBcV0NeARALVFRUEUdSB0NZE1NTVRQDW0ZXAQRWFhcDVFUHDAZaGQYFEUFXRUVDTFcWQ1dQAkRKFhlbWwlWQFEQVFNDZQUPCldWUV4b"
      ],
      "solucionDirector": "dc1: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",
      "exito": "dc1:f1NYEwtVB1YTcwVGX1FeVF8CEzERE01RX14bFyNfGAlD85lHFlACRlxTQVoFRgoIUE5CUFVFBxZUREIKEklXUVJSWEMFVUNRRlEHWxJQVVwWDlwKFwNbWUdWVERdE10NFlRVFApaFUZIVxFTCANLGQIHQllWFkQJQFNAAEECElNfFlUCCkgWXEFbREVHURBYXxNcEAYB+4sVRFsXFVJWAEJfQl0JGUYAUVgAWAcP+4pGFwwVUQoQBlkWT0VTSldRRkT00ERMDVgTRA1RVkZRHhYgVhYRoYsYWVAVRxNWShVXEEBbFBUAE11EABpEFV0ZARcDR12m10NQWhYEXFBeWlwWTkMIWENVX1USURJQVRBaAhMJBhFRVFlQGRcJSvvSFlxRR0ZWBwJdWABFSEZLTAQLoYYZBEQOXERXFx4ZUFdZ9YRDAFwTS1pHBRgSTRBRFg9SF0MRXVFGEVFSRl9ZQVtR84UHWwdGSFcG9ddGS0xGARdQVxEFQ0wWQgpf+oEWVloXExZQDlxBFBBGV1oeEHgWXQcCQktNRV4VWwkTSRRTEFhVBPbLBxhTDxYIBxgKVltOFVcMRA9aFkcQVxlXRFIWdjEveC14HxQKXRJFRVUWD1JEEAf7iVpDVBcHE1QAFkFFUUZHCQRZVAAWFw9fTANCFFxPBEpDdBZaBEEZUV9dVVhDHRkOXFddBRRQVVrzlwpARAJCallGUlRRFPCVAAwQRVpGQQMKXVETVwkHGFhGIAtZWwQLTRV6WRYSXkdXQVJeAhcZGlgTQA1RXFFeEFoMQEQAA1pZWV1aREgTeQNXWl8YRlAIRm5XDV4LCFxWSkIDWV4QDQZbFkAMXRlTWFxVXwZETA1YE1gRThJFRVUWAFwKFwdLTFRTVBcCVksFUxBgUaWEBwpZRAAMRAcYVQdCD1RXCkQHUBYHXAAOElpWFkMMB1hDWFtbFlUc"
    },
    {
      "id": "p19",
      "fase": "VIII · El depósito",
      "titulo": "La mano de 1927",
      "tipo": "eleccion",
      "obligatoria": false,
      "puntuacion": 80,
      "siguientePrueba": "p20",
      "descripcion": "Quien encerró a Yoksrio no durmió en el Atlántida en 1912: la mano de 1927 es otra. Pasó a máquina las cartas del anillo y las echó al correo, pagó el robo del Ojo con un apunte, dejó el sobre en el casillero de Bastarrica el 4 de julio y forzó el piso de la calle de la Luna la madrugada del 17 de septiembre con un coche. Los guardias necesitan un nombre antes de subir: a quien no sea, no lo podrán retener.",
      "instrucciones": "¿Quién es la mano de 1927? Cruzad las cartas de Pemberton y de Mercè, la cuenta del sanatorio, la nota del director del hotel y lo que cada uno dice de este mes.",
      "documentos": [
        "d05",
        "d06",
        "d07",
        "d15",
        "d09",
        "d14"
      ],
      "opciones": [
        {
          "id": "ibarguren",
          "texto": "Ernesto Ibarguren, el médico, dueño de Valhondo y del depósito"
        },
        {
          "id": "adela",
          "texto": "Adela Urquiza, la gobernanta, que estuvo en Valhondo del 10 al 24 y lo ocultó"
        },
        {
          "id": "rosa",
          "texto": "Rosa Urquiza, la enfermera jefe, que maneja el dispensario"
        },
        {
          "id": "echaide",
          "texto": "Saturnino Echaide, el administrador"
        },
        {
          "id": "larrauri",
          "texto": "Cosme Larrauri, el vocal de la junta del sanatorio"
        },
        {
          "id": "chofer",
          "texto": "El chófer del sanatorio, que baja a Madrid con el coche"
        }
      ],
      "huellasRespuesta": [
        "37d3e2922724eaabbb31686d69a3b72c618b1859d43d1d8f72965f7a2438f1c0"
      ],
      "pistas": [
        "dc1:f1cXDgVXDBlXUUQFCwYHEEIWRQtDE01dFVRGQwdBGARYEERGA0ZGFVFCCFkXXBhcCEI0VFUNCw1RWRYAXBlTVEFfW0MdGQ5YSltIFFFbXhBDDVJEDqGZSUBYW1ZGV11BU0NTRg9XDxQUFqKfEANKGQMMQlBVRQUKR1MWHBJcXhZQWUURAVZDXVYUNlVBV1FWRKCeBUMDGFVUX1oMRlddD0JCXxQCUApGUFkVUwhGXVVGVkJRXEUOFllfWV4SQBJTXRZ6AgBLCl0TWAUUXFtTWFNDVwEPQgkPFVVQFxVWSBVfVV1WFFBGBVdYQUMKRltWBQoHGxksAENBV1UNU1dWWRNVWA1EVQJKE1cLVUBAUVRXEBMdQw5ZGFteQVZGV10NFlRZRgNWEglKGA==",
        "dc1:d1lEQwBcQ1VcR0RHV11DEFMQRxEVC11KWl8VUggTXQ0WWF9AA1lGA1QWVRYAAxhTEw4LWhkcRAtUWBYVU0pTUlwWRwwWGTVYX1wLWlZbEFVFF1ZEDgdLFhViWlsJE00PWRBUUUZQCgpXRUFQDRRVWEYODUYZERYCRkZXFl1KElJWFlsCRFoWXF1ABRRWURBUXxFWBwAL+4tbHRVDD1ZWBBZVXBQCXBUWXVgSVxYPVxkHDkJZWAELQ1FTWkVWXEFGUlVfDERAQ09SFAUUYFVDU1cFQafOAxhZFUFaRUZWVEFVX0JGA1pI",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQGDhhZUVxcWQ9ATBNXVF9GSBUqB0sWAlcWEllKRg0O9pQECkNUFkUQEl1bRUNTWRAFSwpWHxQXVV73nVFYQ1cBQxFNGFBCQVYAVkwAGhBcVRUVFgdfVwNXRBVNGQALEFhYSUQaFVNaRVFWUV5WFlMGCBkQWF1VEFtAXV8QUxATAQ9CS01MXhsXI18YAl7zg1IDR0YFV1gFQwellVhdQqGcVUUJAltSVwdTFw=="
      ],
      "solucionDirector": "dc1:YFdDFhZXCldcFCFXWlVZVFNPEwEPQllcWFhbXhVHSgBSX0IUAlBGMFlaCVkKAlcXRi4DRhkGBRFBV0VFUxliU15UUhEQVg0ZG1INWlNYVUMWB1ZEAgBKUVkRTBcLUkEOHxBJFAcVKwNKVaKeRE5ISw8PA0NcFwVKFUVTRVdKUURaVF4GFlYNGVIUCfeTRUVZWAITAQ1CTVYVQlxDD1wYEENVEFsK9ssHGFdB9c0SXUtGG0JGWAkNBkdZWEVCVkAWX1cXBhdNAl9WQAUUVlEQYlcQUAUFEPuVVAsVYQdfUA5YVF8PRlAIRllUE18IRkEZCwMbWhVFAAYVWlkWEkpXX0AaFwYKGTVYX1wLWlZbEFVFF1IGAgwYXVkRWPTPV1ECWRAYXAdGEgcYUw0WVUZcXEYIF1lQCk1PFWRZFlMVEnNQXlYKAFxDQBNRCBRRXPODUAZBX0MjXF1ZUBVSFUdZA1cQVVpGUApGUFkVUwhGEEoJDg0VSQQXAhVXWgnxlBJFVkZDCgFUAUtWHURNEnhRQkQCRhYKQl1WFXNcWwRSV08WdVwUFlQBCRhXQXsBFFv6zkIGUFVFVVQVUlNFX1hLWRNFVg8N+tAZV1FEWFMUU0VTDUcFQwZdGFFYR1IFUFGihV4cFBdAA0ZeXxNbBUZLVgoNQlBVRQUHWF9YDEFNQFdXWUVDB1YNGUNbAFFAFFRVWkNRBQ0BVxgdQlBQE11cABZYX14HHFxGVllBUwhGVfrPBgtWVklEDVoWZApBWB4WXVkXBggZAFHwhwJRQBoQdVpDQAsBEF0YUVQVdQdATABEQllXBxUVAxhSBFyn1RhdAwwWR1ZFAAZZFl4KRlxeFlZaF1dEXQYZWUEIXV0OEFxXQ10LFwMYXFBdFVMPQV0CQl9CFBZaCAMYVw1ap8sYWEYjBlBVBEhDVFoWCPGQVl9QWRtDBVVDXVpGAVdGW0IQT0NSRCYBUFlcVVAXTlddDRYBEFUKFVBPAxYPWUQHGGsJEQMZGQsLQ1QWegRAS1NDQV8bQwpWQ1hfFAdc8YdWVURNEyEPQgkPFVVQFxVWSBVfVV1WFFBKRl1YQXsFAkpQAk5CVlYLRBZbFlUKUVFXDBNzVAsFUAdcE1ANR0JbXlUWB1YIQwFXW11UFVMDXxgSV15RQAlHDwkYHqOdBgdSWEYDQnhYARYKURZSCkEZRFNQU0RDBVVDVFZHpo8eFFRZVQYTp8oOEQMVVFkXC/CRBV9TXxSknggJGF4AFhQPS1gCDUJ4WAEWClH0jV4SdVNEQVdCEQ0ZoZJAWwhbEldfXlkAVkQPAxhdRkVUVA/wiw/0ix4UI0ZGA1QWoowKD1tWRhMXUBkGEQ5FWlNFXlhBFkdEUhBeGSZaW1UNUFcaEHFSBl8FQwdLGFlQFUcPQEwAFlZRWBVURgJdFgRFEAcYSRQXB1dYRUwGRkJDE10ZV1gTYFYPDFYNXVwUAFFeFAEAFgJfRFFWGEEVXVoXCVBNDULzgx1KFRYDSllBUwpGWVsUCw4VQEUJAkxZFgBBTVNUUhZSDURqAlcTZwFWU0dEWfXCXUQaQlZXFVdcRQtSGA9fXldBCFRGBU1TD0IFSBh8CkIBXfrWAgZHFlUKXF1HVfCbVkMBVUNaXFcMUQgUU/OFDkMICgFdFBVfWhcLUlYOGBBxWEZGExZdRABECAcUGQoNERVeEAURUV9XFhJVXlNFV1lDF0xDV1xZBkZXGg==",
      "exito": "dc1:YFdDFhZXCldcFCFXWlVZVFNNEyEPQllcWFhbXhVHSgBSX0IUF0ADRl5fE1sFRlRYRgEXUFcRBUNRUxYBW0tXVVBf9NAKFUNIRlFERFNHURBXQ16nwhNNUVtQFV0TXUwOFlFcFAJcFRZdWBJXFg9XFUYTF1AZEwVDVBZkBEFaU1BB9ZoCRFhDSVxGRFFeFFNfRBFWC0MbGElAVBVRE1YYAldaVUYJFQMIGFMNFgwJTFwKQgdbGVRdUgcMFglTGV9XXVkXEhFcQ1xAVxZdUF3zgxYTXBZDB1QYVF9cWwpcFEFSVVr31RUKBxhaDVcSAxhcCEIXWxkGBRBcWloAQFYSTxNQWBEe+tAZRloFFEJBVUJCAhMBDUJUWRVSVFsKVhgFUxBcVUZ5EwhZGEFzCEZbWAQNQlFcRQgCFXFDBEBdW1cTdV4VDVVDWENBCkBTFFVcFg1cCQEQXRhQXxVEExNUCFRCVUAHD0akk1cNFgUCVVAICxFBSwQADEcaFgBcGVFDUlhDDERVDBlFUQVZXUfyixhDfwsQQltZV1BZWwlAGBhXEFVHEvbHCBhTDxYBChhaBw8LW1ZFAAYVWlkWEklbWFxFGQ==",
      "escena": [
        {
          "texto": "dc1:ZV9SEQpcEBkABEgUQkZZXVMRUkQPF0IWFXVaREZUTQBEVFlVFRUFD05fDVMXRltWCEIOWkpFBwJXV1oJXUoSUlZaFwARWBFNVlgNWF5bEEkWFl1EDQ1VWkdUFVYWRlYVV1RfFANbRhNWV0FaDQRKXBIDTBV8CUQAVFtfC10ZUFdZVxcTC0tDXF8UFF1cVUIQXgJAEAJCVFkVR1BFDFIYBVMQZlUKXQkIXFlaFgoHXFADQgpUWwkFTQ==",
          "imagen": "img-sanatorio"
        },
        {
          "texto": "dc1:cloXEw1cQ11WFAhVElFDU1cPWgoCFlkUFVRZFwJcWxVZQhB9BFQUAU1EBFhIRltWCEIHWRkEBhFcUVlFQVZQRFYWUg9ESQpTUlkFGBJHVfOHAl8FQwdUGFZQWF4IXBgFUxBcWxUVFg9WWRIWFw9WGQoHFFRXEQURFVpXRURQQUJSDBehz3wPGVBbB1xXFFhRFgFSDgIGVxhGWFsXAFJKDkUQWFUFUEYQXV8PQgFGVVAIFxZaSktENVRPVwvwghwWdkUXDwsZE0taWQFGXRRBRVNDXg0RAxhdWxFBRQNQXUFS851VFRs=",
          "quien": "chiqui"
        }
      ]
    },
    {
      "id": "p20",
      "fase": "VIII · El depósito",
      "titulo": "El agua",
      "tipo": "hotspot",
      "contenidoVisual": "sanatorio",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": "p23",
      "descripcion": "Al pie de la escalinata de Valhondo, el doctor Ibarguren, con el abrigo sobre el pijama, señala el camino de los pinos sin levantar la vista: «El coche ha bajado sin faros hace veinte minutos. Vayan». A mitad del camino os cruzáis con Saturnino Echaide, el administrador, que vuelve andando hacia la casa de la dirección con las manos quietas, como quien atiende una reclamación. Es el único que firma la cuenta de dirección y el único con el coche a mano: el cabo lo detiene allí mismo. Cuando llegáis al depósito, la puerta de hierro está cerrada por fuera, sin llave, y por la boca de piedra entra el agua del arroyo: alguien ha abierto la compuerta de la acequia vieja. Dentro, Yoksrio está en el piso de arriba, y el agua sube por la escalera de caracol.",
      "instrucciones": "Hay que cortar el agua antes de echar la puerta abajo. La compuerta de aquí, junto al depósito, no cierra: la rueda se ha roto. Orientad el plano con su rosa y pulsad dónde hay que cerrar.",
      "documentos": [
        "d14",
        "d34"
      ],
      "huellasRespuesta": [
        "e5bc710eb2079a74e6110831a9e00668ab2a327ba5118cfb875c20744c3d2606"
      ],
      "pistas": [
        "dc1:f1cXERFcB1gTUAEUU0VF85tDVhcXoZkYR15BVlwTXQ0WUVdBBxUOB0EWEEMBRkhYFAMQWVhFAAxbUlNFV1dGRFIWUg1EVQIZUlcBRUddURwWDVxEBw1WXFARRlYKVhZBelEQUxP2ywcYUgQWFwdWWBINEFxWFkQHXFVTRVZcElLwhVkHARkQWF9RRFhTFFFTUxJGDQJCQRhQXxVGE/CRQVNIREYDWAlGXFNBWgVGXlAIAQMVXBYQoJQWRRASTV1bUhg=",
        "dc1:8Z1yDURcDxlWTBBGV1lfEFIGEwgGFFlWQVT3jEgTdQhEUVQUClRGFFdFABYAA1QZFg4DW1ZfRAZZFlgKQE1XFl1ZFwYXTaCYE1UWRltWUR4WK1IdQwZXSxVSWloWRl0TQlFDFANbRgNUFgBEFglBVkpCF1tYRQENFVVXAVMZV05HRFIOCxVDQBNYBRRWURBAWQ1aAQ0WXRhQQhVbBxNcBFoQVFEVVAGlhFNBUgEKGFUHFANRXBcLTQ==",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQADVYYUF0VWQlBTAQWWFFXD1RGB1pXC1lIRl1VRg4HQ1gLEAYVR0MAVlgSVxNaVkMNQxJMWlEWUFMaEHxXQ0cLDgMYXFARWVZGUlsER0VZVUZQFUZUV0FVCwtITAMQFlQZAQFDWVcWDEhIR19WRFMCRF0GVRNECFVcWxwQUgxdAAZCXVVFWFBNBxNUABZc85kIUAdGXFNBRhEITFYVQhNAXEUXFldTFg1TSkZXE1NbQwBcE/qARw1AXRoQZVhDVBECEFxRVBFMFyFaSwxTQlEUBVoUFF1YQV4FBVFYRgMOWfrISkN2Xl8UR1AST1IWUhAQ+sIZVlpEWFMUWFlTB0EFTQ=="
      ],
      "solucionDirector": "dc1:f1cXFwtUAhlXUURYUxRRU1MSRg0CThhdWxFQW0ZSShNZSV8YRlAIRl1aQVMcEkpcCw1CUVxFCAZDV1gRVxlWUxNaVkMCUA1aUg5EUVwUVVwWE18FDQ0UGFlQFVQJXkgUU0JEVUZRA0ZUV0FfHhdNUAMQBlQVRRQMR0dDABJVUxZBWUQCRF0GVRNECFVcWxBEXwZdAUMHVBhbXkdDAxNQAFVZURQHVwcMVxYYFgEKGFUDFANbTQBEEkBTUgQSWBJaUhZeGRVMClxBUAUPElBVEFMPXwVDEVlUUBFZVkZf+8xYVVEUAlBGFk1YFVkXRlxcRg4DFVgGARJAX1dFWlhBQlIWUg9EXQZJ8IcXXUZbHhB6AhMDFqGVWQ8R95wKXBgNWlVeVQRURhNWV0FXBwNJTA8DQkNQAA4CFUdDABJKU1pWFlMGCBkCS0FbHVsSRF9CFhZdBUMWV1VUEVZYCBNbDltARVEUQQdKGFMPFgEKGFweFhBQVApEB1AWWgBEWFxCVhZTBkRVAhlVXQpXUw8QVVpDXwUVA1xdR14VUwNAWQZDURBVChUHFEpZGFlEFldLRg0WR1hFBwxYRkMAQE1TGhNTWUMBVUNdVhQUW1xdVV5CBvHfTUJ0WRVSWloWRl0TQlEQUAMVCgcYUgREAQVQWEYHERVVBEQHUFoWAVdKU1HwilJDAFwPGV9VElVWUUJfFhoTCgxCW1dHRVQXCFJcAA0QXFVGVgkLSEMERBAHGF0DDkJRXBWn0EZfQgoSXEFC8JcXEQtNAhc=",
      "exito": "dc1:dF9EDgFLAhlKFBFaElNFUUQHWgVDAVFdR0NUWUZfWUFVX11EE1AUElkWBVNEClkZEg0PVBVFHUNQWhYGWlZARFwWUwZEVQIZUVsHVRJQVRBGClYAEQMYS1ARREIDV1lBU14QQQgVDg9UWU8WNAdKWEYHDEFWCwcGRhZ1DVtIR18TT1ZDDFhDTUFRFFVWWxBAWRETCAJCUFFQVUdWRltZEkJREFEKFRADVkIAWBEFVxkCB0JZWEUHAkdXFhRHXBJbWkRWQwUZD1gTVxFZUEZVHBYGX0QHBxhUVBFZQhwTXAQWU1FQBxUICVteBBpEHxhKE0IUWkNFFwJZUxYVXUsSV0FEXgEFA0P7mPbFc1tHERD0wnYXF6GZGFRAQPTLEhijl2kQQA9QCAMYVABEBgcZ+91MQnlWFkQEQFdEAVtYQRZWVV8CChkPWBNEEVFAQFEQVwFSDgxCWRhSXllHA0AYBVMQQF0FWkYFV1hBUwhGWV4TA0JUGQkFQ1RaQhBAWBJSVloXFwFLAFxBFBRRXlBR84cMHUQvDRhJQFQVRwdAWUFSVV5AFFpGCFcWAlcGAxhcCEIXWxkAHBNQUl8AXE1XGBNzRAJEVwxaW1FIFFdaEH1XB0ENB04YSUBUUVZGRlYAFlNfRwcVFglKFglXBwNKFw==",
      "escena": [
        {
          "texto": "dc1:dF9EDgFLAhlKFBFaElNFUUQHWgVDAVdKR1RbFxZcSkFaURBbFFwKClkWBVMIRllLFA0bWhkNBRBBVxYJUxlRWV5GQgYWTQIZV1EIFFdMREJTDlxEBwcYVFBHVFkSVhZBelEQRhNQAgcYUxJCp8cYXRMQAxkZChwKUVdSBBJdVxZS9YYMFwJDXF8UA0FTRlRZV0NfBUMETV1HS1QXBVxWQVpREFcTWQcSWRYYFiMPS1QDEAMVVQREBFxEV0VRVlwWX1dEQwBWEBleVQpbQRo=",
          "visual": "sanatorio"
        },
        {
          "texto": "dc1:dlgXBggZB1xD99dHW0BfHBYGX0QACldKR14VUwMTVAAWUl9XBxUCAxhGCFMAFFkZFQdCREwAAAIVU1hFR1cSXlpaWEMdGQ9MVlMLFFdaEFdZF1IXTUJ9VBVQUkIHHxgFU15ERgkZRhVdFhFXFgcYXAhCB1kZEQERVlNERUJcXlJS9YYMRF0GGV9VRFFBV1FcUxFSRAcHGFtUQ1RUCV8W",
          "imagen": "img-sanatorio"
        },
        {
          "texto": "dc1:f1cXCw1cB0tSFAVTR1VeRFdNEyEPQk5dW0VUWRNQV0FTQ0T3xxULpZlFQVcIElcZAgdCWVZFFRZQFkYEQFxR9Z5XFwcBSgdcE1gFFFH3ikBDD1JEGkJMUVBfUBcTXRgDV0JCWxJQRgtdWA5FRAJdGQoNERVIEAFDUVNUAED6n1cdFmcMFhkCUfCZRFdTVlUQQw1SRAsHSlVUX1QXFlZJFFPzgVVI",
          "quien": "chiqui"
        },
        {
          "texto": "dc1:f1lEQwNMAktXXQVHElFTWFcNEwUBA1JXFV1UFxZGXRNCURBQAxUOD11EE1lEBxheCQ4SUEpFAAYVRl8GXRcSclZYQxELGQtMVlgBFFMUUVdDAhMSCgdSWRVIFVZGUlsEX0RVFAJQRgBZRA5aSkZ5SxQLAFQVRQENFVNaRVFYRkRWFl0WCk0MGVJYREJXWkRRWBZQC09CWVRSRFxSCBNcCFVVEEEIVEYWWVoAVBYHGEgTB0JbVkUBEBVDWAQSSVNaUlRFAkRdBhlfVURXXlVGVRg=",
          "imagen": "img-yoksrio"
        }
      ]
    },
    {
      "id": "p23",
      "fase": "VIII · El depósito",
      "titulo": "El telegrama interceptado",
      "tipo": "telegrama",
      "obligatoria": false,
      "puntuacion": 60,
      "segundos": 60,
      "siguientePrueba": "p21",
      "descripcion": "En la casa de la dirección, mientras los guardias bajan a Yoksrio al coche envuelto en una manta, el cabo vacía sobre la mesa los bolsillos del detenido: un reloj, una llave pequeña y un impreso de telégrafos doblado en ocho, escrito con vuestros símbolos. Yoksrio lo escribió anoche en el depósito, cuando le pidieron por última vez dónde está la sexta; quien se lo llevó no supo leerlo y ha cruzado con él la acequia abierta. El papel está empapado: de la primera línea ya no queda nada, y la tinta violeta de la segunda se está corriendo.",
      "instrucciones": "Transcribid la línea que queda antes de que el agua se lleve los símbolos.",
      "documentos": [],
      "config": "dc1:SBRDBhxNDBsJFihVEkdVSEICEwEQFvuZFVVaWQJWGBJfVV1EFFBKRl1YQVgNCF9MCANCRVgXEAYbFEs=",
      "pistas": [
        "dc1:dltHCgFDAhlDWxYUfnUQY3M7ZyVNQnRZRhFFVgpSWhNXQxBXCUcSB0sWElNEFF1JDxYHWwNFIS0ZFnokHA==",
        "dc1:d19UBkRdoIpdUAEUV0dE85dDXwVDEV1AQVAPFwJcVgVTEENdA1gWFF0YQW9EAldXAgdCRlAACRNHUxYAQRlHWBNFXhcNVkNIRlFEWl0UVUhfEEcBTQ==",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQPAxhLUElBVkZWSxX1kRBQCVsCAxhFCFMJFkpcSkIHWxkLDQ1SQ1gEEklTREdTGQ=="
      ],
      "solucionDirector": "dc1:Z1NbBgNLAlRSFABREm1fW0URWgtDB1YYRkQVVApSTgQaEFVHBUcPElcWDVdECFdaDgdCUVwJRFEMFlMLElxeFldTR6DXSgpNXBQHW1wUVVwWE1IUBg4YSUBUFVsDE1wIU0JfWkb3zRZZRAAWARVbSw8AC0cZAafQW1JTRVdKRvWSFlsCREoGQUdVpo8cFHxfFhJGAUMTTV1RUBVbA1RRA1pVChSknionGGUkbjAnGHw1NqG0GSErLXFzFjZ7fH9mYXMbQyF3Q3d6eiNhfHUQYHcxZyGh2RYYeVAVRxRaVQREURBYpZgIA1kWSfTPFVEZCgehnFAWRAZGQllFV0oSR0ZTFwsFW6CQWkdEWF5RV1FSDPHfSkJBGFlQFVEPQVUAFkNVFA5UCEZaWRNEBQJXGQUNDBVcCUQCUkNXSxJ8UV5SX1MGREoGGV9bRFNHVUJU9dATFwoMGEhaVVBFRl9dBERcXxpGewlGXFdBUgUSV0pGBgdZGQYFEFoMFgBBGVdaE/WNDQ1aDBleUQpHU15VEFIGEz0MCUtKXF4VUggTTBNTU1UUAvbLB0sY",
      "exito": "dc1:cFlHCgVdDBlSWhBRQRRUVRYSRgFDEV0YV15HRQMJGKOdfFEUFVAeElkWBEUQpZkZAg0MUVxFFwpQW0YXVxUSU10WWQoKXhZXUhQUVUBAVfKNTRMgBg4YSlBCQVhGV10NFlldRBRQFQkYUw0WBQFNWEYRDVlWRQwCFVJTD1NdXRZWWhcFDVcCVR8UFUFXFF5fFgtSBwZCXllZRVQXEkFZD0VTQl0EXBRcGPTKew0VGF4JEAZcSqffTRV6WUVXSlFEWlReoNcZEFhRXQFaVlsQQUMGExUWC11WFUJQFwpcGBBDWURVFFRGCFcWEVkAFPuUB0IOUFwXCAwVTxYUR1wSR0ZfUg1ESRZdWlEWVRJYVVVED1xEGgMYVFoRXVYEQfvMVxBVWgVaCBJKVwVZSkZ8XBUGBxVVBEQOVFhCBB4ZV1gTU1tDB1YAUVYYRERAUVdFWBdSRBALGFRaEV1WBPCRCEUQXFGlmAIJFhajnTQTXUpGGwMVSgQGoJxfRUVf+pNFE0dCBkT6ylXxj0o="
    },
    {
      "id": "p21",
      "fase": "VIII · El depósito",
      "titulo": "La palabra",
      "tipo": "texto",
      "obligatoria": true,
      "puntuacion": 100,
      "siguientePrueba": null,
      "descripcion": "Esa noche, en la agencia, con Yoksrio en su butaca, queda un telegrama por poner: a la calle Portales, a quien lleva diecisiete años esperando que alguien honrado pueda devolverle algo. La casera dijo lo que hay que hacer. El canónigo dijo que había una palabra buena. El acta dice cuál es, y por qué no es la que está escrita en la puerta de vuestra casa.",
      "instrucciones": "¿Qué palabra hay que telegrafiar a la calle Portales?",
      "documentos": [
        "d12",
        "d11",
        "d10"
      ],
      "huellasRespuesta": [
        "ab7cd234f62e867111161816b654cfe85c2713949f4b8c9b48f0400c30e9e887",
        "84f0b6eee6cd754f9ee7b42e410f174393993236f95667d80efe02487cdac890",
        "7585bc63067c3f0b139cd6f3070b990408358028b328ee8e93980055271185bb",
        "b574aa79d0d0f9e2a939d5c05b9f1be0e3df3facf2e0361b464682f9aa450ed6",
        "14736c7d245ff4869a2206fb42517b2ed4821dd46dcfef7a196b1fc8a87c6be0",
        "e9c3a38fa50c771272961d742f7a8c9a75ba721d6dddb7f2d23912974564cfa3",
        "d1dafe32989af541e5d5308b06706a2b8531c316a1bc6e0e02013d58d79054b2",
        "bddca511964eacf761ed6901c619d795feca750467549cfbbf284cdd0b13cbb9",
        "9f51f3c9bd574e38dc67c06e48292049465ef3a0c0743dbc70ba84bac18d41bd",
        "9982f53343a9c689235847c30cd1bad2003ca912aa3d3e8da9d3b3c591d958c8"
      ],
      "pistas": [
        "dc1:f1cXAAVKBktSDkT2mUdZEFcPVBEKB1YYWVQVQwNfXQZEUVb3y1RGClkWEVcIB1pLB05CUFoNAUNUWhYGXUtAU1wWUhAQXENKXFYWUfCPHhBzDxMHAgz7i1tYUlhcE10NFlNRVgdZCgNKWUFSAQoYSgkPAEdcFwtDW1kWAVtTXRZAQxcNC1QBS1YYRFBbXl8QQw1SRBMDVFlXQ1QbRvGTGBZVQlVGWQdGWkMEWAWkgxdGNANHXgREB1xcWUVGS1dFE0ZWDwVbEVhAFAVYEllfQl8RCUQWDFkYWVAVRAdRXUFVRVFYF0APA0pXQUcRAxhJBxEHFUkKFkNRU1oEXE1XFldTFxURXBBNQVVEVVVRXlNfAh0=",
        "dc1:8Z12EQ9YDVjxj0RRQUDzkRYGQAcRC0xXFVRbFwpSGBFDVUJABxUCAxhaABYFAV1XBQsDFUBFCAwVWlMAXBleWUAWRwYWUKCKV10HW0EOEF5ZQ0ANERRdGFFUFVQJXUwTV0NV99dUSEZ0VxIWCxJKWBVCBlpKRRQCWVdUF1NKElJWFmECFl4CGUBbCFsSWFFDFgxKp9BCTVYVVVBDA1BMCEBVEFADFQ4JTFMNGkQfGFwKQgNWTQREB1xVU0VDTFcWVloXBgpaAktUW0REU0dREFdDQhEKB1YYWlhSVkZfWUFGUVxVBEcHSA==",
        "dc1:f1kXEwFXEFheWxcUWEFeRFcQCUQsQnNhZ3h6ZEoTXQ0WQ1X311oURlxTQVoFRltYFQNOFVwJRBJAUxYXV0pCWV1SUkMAXENaRlUKQF0UV0VXEVcFTUJ9VhVVUEQJQVwEWBwQbQleFRRRWU8WKAdLGQINERVPBAgGWwwWFl1XElpSFloKF1QCFw=="
      ],
      "solucionDirector": "dc1:eG9lKitqQxFFVQhREvabXxYIShYKDUv6jh0V9c1KVwpFQllbpI5GHxhaAEVEAUpYAKHPVEpFBwxYWRYWR1xcV10MF6HPSBZQQV0LR/CPGR4WJl9EAgFMWQ8R95wDXxgEWFNRRgFaRhZZRQBEp8cYWEYTF1xcC0QMXFFXRV5YEkZSWlYBFliBuZUUKxR5bWJ5eTDx301CdFkVUlREA0FZQVNTWPfVFQMKGEUOVBYDGFoTAwxRVkUIBhVCUwlXXkBXVV9WEQtXQ1VSFBRVXlVSQldDVwEQBl0YYV5ZUgJcGARaEAcUAlBGFV1GFV8BC1pLA1lCUFVFBwJb9YULW15dFldfWEMBVUNKXFYWURJVEEFDClYKQwZRUloRWVZGQ1kNV1JCVUZXEwNWV08Wps15Sw0DDFT73kQNWhZFDEBPVwwTU0QXp5hDXF0UCFUSREVVRBdSRAcHGFRUEVRQA11bCFcQSRQDW0YKV0VBRgEUUfrVBgtWVhZIQ0wWRgpAGVdFXBZRFgEZFlcTUgVGXRRAUUQCExUWC11WFV1UFw5SWqKbURBYA/bLAlcWBFhECldKRhENV0sAF0NRUxYJUxlBU/CHWBEFGQZXEwVdBQIaEHFaQ0cBDwdfSlRXXFYUE3M4ZHl/Z0ZURgpZFgJXCApdGTYNEEFYCQEQGRZaBBJKV05HVxcAC1cXXEBABQ4SUUMQWgITFBELVV1HUBVBA0kYEENVEFgHRkYOXUQMVwoHSxkOAwFQV0UBDxVZUAxRUF0WV1MXIjZyIndyFAVYElBVQlMAWwtPQlxdQ15ZQQNBGAAWUVxTE1wDCBY=",
      "exito": "dc1:eG9lKitqTRl2WERAV1hVV0QCXgVDEVlUUBFRUkZfWUFZVllXD1sHRlxTQVoFRltYCg4HFV0ARCJZVVcJ8ZgSVxNaVhBEVxZcRVFEUFcUXFEWDVwHCwcCGEBfVBcWUlQAVEJRFB8VCgcYUAhECQcYXQNCDlQZBAMGW1VfBBwZflcTRFIQFEwGSkdVRFBXFHxfURFcp9INGFRZVFJWRlJWFVNDEFADFQsDXF8AWAsFUFxKQhsVXBZED1QWRhdbVFdEUhZGFgEZDVYTXAVXVxRWUVoXUkQHB0tbXFdHVhQTWw5YEF5dCFITCFkWFVcGClkX"
    }
  ],
  "epilogo": "dc1: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",
  "dialogos": {
    "prueba:p02:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlhWQxBYGVgTVwtaElpFVUUXQQVDCk1dWV1UG0ZATRIWV0VVCEEDFRQWDVdEBVlTB0IGUFVFFwxYVEQAQFYcFnZFFxARGRNQQFtIFHVdQx4WOhMIBhv7ixVfQFIVR0oAFl5fQAcVH0ZWWUFUBQz7ikYDQkNcFwoMRhg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVkXAQVToIoTRAtGQ0FVEFgMExUWC0tXFUVHVgNBVg5FEFEUF0APA1YWDVlEFV1eE6HPVBdFJwpbVVlFRlhAXFZCVhBIGQBMUkAWWxJAVVxTBEEFDgNLAhVSWloWUkoAFlxRR0ZWBwRdVQREBRUYTAgDQlQZEAoCGw=="
      }
    ],
    "prueba:p02:fallo": [
      {
        "quien": "chiqui",
        "texto": "dc1:dkVWQxf6zhlHXQFaVxREVVoGVBYCD1kWFX1aFxJWVgZZEFFFE/bLShhVDlhEEk0ZCgcWR1hFAQ1WX1sEHA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dVNUCwUZGhlQXRFQU1AeEHoCQEQHDUsYVl5GVhUfGA9ZEEVaBxs="
      }
    ],
    "prueba:p02:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlgXABFYB1xBWgsUVlEQAQ9SAUQADVYYRkQVWwNHSgAWVFUUDFoQA1YYQWIBCPuUB4Dikxmn2xVQX1gRW01A9ZpFFwKniAxKDA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZVNeDRBQF0vwnRcaEm0QSVdDVBECEFxZV1AVWwdAGAJZQ1FHRlEDEkr1wEVEAl0ZCRYQVEpFBwxGV0VLEnXxn1ZaWEMAXBBJUlcNWxwUdUMWD1JEExBRVVBDVBcQVkJBR0VVFAhaFUZbQwRYEAcYWAoFDRVdAEQCW0JTFhJdVxZdWUQMEEsCSh0="
      }
    ],
    "prueba:p03:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:cFpWFQEZB1wTRgFeW1hcURhDfwVDFllaWVAVWwcTTARYV18UAlBGC11bDkQNBwMZAgMPUBkJBUNbWUIEHA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:d1NEEwVaClYdFDdgfWQQQ1NDQQETC0xdDxFQWhZaXRtXEEBbFBUHDvubQU9EClcZAgcP9pgWRBBUWlNFQVZeWR0="
      }
    ],
    "prueba:p03:pista": [
      {
        "quien": "gismera",
        "texto": "dc1:f1dEQxRYD1hRRgVHEldfQkICQEQTEFFVUENaGUZ/WRIWXFFGAVQVRktTQVcAD05QCAMMFUkKFkNZWRYUR1wSUFJaQwJK"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:alkXGgUZF1xdUwsU8J9+cXIqdqbYTBh2WhFYUkZUTRJCURBXpYYLCRhFFFMKBxY="
      }
    ],
    "prueba:p03:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:8Z17AkRKBkFHVURHW1NFVRYAXAkMQn1U9pxUREZfWUFSVVr31ffdSBh4DhYAD1tcRgahhlcBAU0VeFlFVlBRUxNHQqDNFw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:d19UBkT7yFdcFAtHElJZ858KQEQHBxhWVFVcUkZXXUFXQUVRClkHRltXElem3RYZIxENFVwWRBZbFl4KRlxeFlZYQwYWVk0ZY1EWUldXRF8Y"
      }
    ],
    "prueba:p04:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:cF9ZABFcDU1SFANbRlVDHBYQVg0QQllUFVX2mgcfGAVZQxBaCVYOA0sYQX4FHBhVB0IBQFwLEAIVV1gRV0oSUlYWWwYBS0NVXBQVQVcUVFlcDBMBD0JVTVBDQVhI"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dFlDAhcZE1hBVURRXhRTX0QCSafQDBhJQFQVRwdBWQ8WVVwUBVoUB0L10lhKRmlMpctCWl8MBwpaGA=="
      }
    ],
    "prueba:p04:fallo": [
      {
        "quien": "chiqui",
        "texto": "dc1:dloXFQVKDBlWRxBVUFUQQ1MAXEQHB0tcUBFZVhUTXAhTSh4UNVxGCFcWB0MBRl1VRhQDRlaH5MU="
      },
      {
        "quien": "gismera",
        "texto": "dc1:f1NSQwhWQ0hGUURQW15fEFcPEwAGEUhdR0VURRVWFkF6XxBGA0UPElH10hYACUsZEAcBUEpL"
      }
    ],
    "prueba:p04:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dlgXDwUZCVhBRgUaEnFeRESggEQADVYYWV1UQQMTVQhTXkRGB0ZGAldEDPXJBxhARg4NFVwGDKCGFlMLRlxAWR0WbkMBVUNU8J0AXVFbEFZfEV6n0EJLUVsRWF4UUkpP"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dloXDqeQB1BQW0RSW0Zd84VDQA0NQlVRR1BHGUZ9V0FTQxBYCRULD0tbDhYVE10ZAwEKVEsJC00Vd0amiFdGV19ZG0MUXBFWE1UUQVxAURBaAkBEBw1LGFZeRlYVHQ=="
      }
    ],
    "prueba:p05:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:Y1dHoMUZAVhZ99cUUVtCQl8GXQAMQlkYV0RGVAdBGAAWUVxTE1wDCBhPQVgLRlRWRgcMVlYLEBH2hRhF8IZzFkJDXqDNV0NKVhQGQUFXURBXQ18FEEJMSlBCFVMDE1QAFl1R99dUCAcYUw8WEQgYUQkWB1kG"
      },
      {
        "quien": "gismera",
        "texto": "dc1:cloXEhFcQ11WVgFG8ZlREFMQRwURQl1WFUJAFwVGWRNCXx4UK1wUBxhTDxYHE/uYCkIHW00Xp9Ab"
      }
    ],
    "prueba:p05:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:f1cXUVUBQ09SV6eZUxoQdVpDXqfKBlFbWhFbWEZWSxVXUlEUAloIAl0WBVMGpZVYSA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YFdVBglWEBlX99daVlEQXllDVhcXA1pZGxFwREZeTRgWQF9XCRUfRkhXE1MHAxhUEwEKWhdFJxZcUlcBXRlRWV0WUhALFw=="
      }
    ],
    "prueba:p06:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:Y1NaAQFLF1ZdFABRQVdCWVQGEwEPQlRZVkNQFwVcVkFDXlEUFkcDBVFFCPXXCBhIEwdCW1ZFEBZDWRYAXBlfV0pZGUM2WBpQR1VEV0dGRlEWBl1EBg4YWlpDUVJI"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dloXFwFVBl5BVQlVElBVEHoMXQARB0sWFWFUR6WSGBhXEFxbRl0HBPubABYSD0tNCUxCZVgVp8IVRV8AX0lAUxNaWEMMWENPWkcQWxJVXkRTEB0="
      }
    ],
    "prueba:p06:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dloXAgpQD1VcFABREmJRQlECHUQyF1FdWxFFVgFSGAAWYFVZBFAUEldYQVMXEk1PCUIHWxkJBUMGBg9FU0hHU19aVkMKVgBRVho="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dkVDFhJWQ1xdFAhVEgcACRYMEwgMQkxRUF9QFwJWGBBDWVVaRlAVEk1ADhhEPxhXCUIWXFwLAUNFWURFQ0zxnxNFUhFEWA9eRl0BWhJQVRBaAhMHAhFZAhVdVBcIXEwAFlRVV6WYB0b6nQBHEQNUVQdCAVRKBKbYGRZYChL7mVpSFlQCF1ihgh0="
      }
    ],
    "prueba:p07:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:YFNEBgpNAhlKFAdBU0BCXxYOWghDEl1LUEVUREZDVxMWRV5VRlgHAkpTQVMKAF1LCwNMFWAKRBNaRBYJUxlf9Z5XFwsFWxH6nlVERl1WUVRZQ1cLEEJVTUZUWkRI"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fl9FAkRdBhlX99daVlEQQ1cPVgpNQn1UFVVcWQNBV0FFWVVZFkcDRktXDVNEAl0ZBw4F9oMLRBBcQl8KHhlTQ11HQgZEVwwZQFFEWUdRRlEY"
      }
    ],
    "prueba:p07:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:fVkXEAEZDlZFXaeHHBR1XBYQUgoCFldKXF4VRAMTSABR84MUBxUVpZUWDF8XC1cZBQ0MFUwLRAJFQ1gRVxcSd19RQgoBV0NdVhQIVRJXUUNXQ1UNEQ9ZGFBCWhk="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ZVdbCwtXB1YdFDZVQVdRVkSgngVNQmEYQF8VWqWaXAhVXxBFE1BGAE1YBfXXRk1XRhEDW1gRCxFcWRYGXVcSWlwWRhYBGQ9cE1ABXvGHEEVYAhMSChdcWRsReFJGVE0SQlEQVwdRB0ZOUxsWCQNWVhVCB1kZCKfKUV9VChw="
      }
    ],
    "prueba:p08:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:d1lEQxdcEVBWR0RQVxRTUUQXUhdPQlxXRhFYUgtRSgRCVUMUAFQKFVdFTxYsE11VA0IDFUoECgJBWUQMXRUSUlpVUkMpXBFa8JxKFH9RQlP1yxMQCgdWXRVfVEUPSRY="
      },
      {
        "quien": "gismera",
        "texto": "dc1:Y1NaAQFLF1ZdFBBdV1pVEFkJXBdZQlVRR/KGFwpcS0FbUURVFVAKCldFTxYuE1ZNB0IOVEpFAAxGFlUKQVhBGA=="
      }
    ],
    "prueba:p08:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:f1cXDg1KDlgTURdAU1JVRFdDQwURAxhdWRFcWQFf+8hFEEkUFlQUBxhaABYIB1xLCQwDGxkgCENRU1pFU1dbWl9ZFwYXWhFQUVFEUFdHVFUWBl9EFQNUVFARUVIKE3QOTF9JVUoVAg9fV0FaC0ZJTANCBlxeBEQGWRZbAF9bQFNHUxk="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fBZWDwNMClxdFAFHUUZZUlNDQwsRQvuRWR8="
      }
    ],
    "prueba:p09:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:cURYDQdcQ1pcWkRXWlVAURYHVkQPA0z7hl8bFyRSSxVXQkJdBVRGCE1YAldEEFFWRhcMVBkMAxZUWhhFa1YSQlJbRwwHVk8ZQ1EWWxJNXxBYDBMMBkJZWlxUR0MJE1sAXFlEVRUVBwxdWABFSg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dloXBw1LBlpHWxYUVl1TVRYSRqfKQkhZRvKGFwVcVkFaUUMUEFwDDFlFTxY9Rl1VRgEXVF0AFg1aFlIAEggLBwEWUwoHXENaRvfFWBJSUVxCAlEFTUJ7SkBLVBcKUktBUl9DGg=="
      }
    ],
    "prueba:p09:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:YkNeDQdcQ1jwhQtHEldfXhYPUkQPDllOUBFQWUZWVEFUX1xHD1kKCRhPQVoFRlVYCAYDFVhFEQ0VWlcBQPqBWBNGVhEFGRJMVhQWUVVdQ0REBhMIAkJUXVtSUEWlnllPFnJFRwVURgdUUQ4WFRNdGQUQB1AZFBEGFUVfAkdcEldfWvTOSg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:cF9ZAAsZAFhdUA1QU0BfQxpDVw0ABxhdWRFRXhRWWxVZQh4UJVwIBVcaQVgLRkxLAxFMFXQARBJAU1IKElpdWBNTW0MJ+spdWlcLFEsUU19YQ/HPDw1LGF1E9p4VQ10FU0MQUAMVDBNUXw7030oYSBMHQkZWC0QOQFVeCkEZSxZdWRcXDVwNXF0UB1VAVR4="
      }
    ],
    "prueba:p10:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlgXAgpaClhdW0RXXVoQXVcNXBdDBl0YVl5ZVkZXXUFTXlNBB1EDFFZXExYVE10ZEAsHW1xFBwJRVxYIU0BdGBNxXhBIGQZKXBQBRxJBXhBaClEWBhBXFg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dkVYQwFKQ1hfUxFdV1oQQUMGExARA1pZX1AVVAldGAJZXFEaRnkDAxhXDRYHB1b61QwLUlZFBQ1BU0VFVlwSUlZVXhFEVwxUUUYBRxw="
      }
    ],
    "prueba:p10:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:ckNFBghQDBcTegtHEldZRPXQEwkWB0pMWh8VchUTVA4WXfOVFRUCAxh3FEQBClFWRhMXUBkNBUNdU1UNXRlcQ11VVk0="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dV9FDgVbAhlQWwlbEkFeEFsWVhYXDRhIVENUFxdGXUFTXBBQA1lGB1ZfDVoLRlpMFQEDR1hFBUNAWBYIR1xAQlwYFzpEVwxKE1kFWlb3gxBXQ10LEA1MSlRCFVIKE1YOW1JCUUZRAwoYWxRTFhJXGRYDEFQZFBEGFVpZRVBMQVXwl0UCCVYQGUdVCVZb95leGEN9C0MR+5EVQlwXAlJKDVMQXFUVFQEUWVUIVxdI"
      }
    ],
    "prueba:p11:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:fBZ8OjZwLGodFDddV0BVEFoGRxYCERYYYF9aFwJWGA1ZQxBAA1kDAUpXDFcXRlxcBaHPVBkGp9BYWRYWVxlVQ1JEUwIKGQ9YQBQHW0FVQxBHFlZECg9IV0dFVFlI"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:d1NEDBZdBldSUAVHHBRzX1sMEwEPQltZX/KGWUZXXUFGUUD3xxs="
      }
    ],
    "prueba:p11:fallo": [
      {
        "quien": "chiqui",
        "texto": "dc1:dltHCgFDAhlDWxYUXlUQXFMXQQVDAVdWFV1UFxdGXUFQWUJZBxtGNVFTDEYWAxhfDxAPVBkMAxZUWhg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahoXLIa5xRlgXQNBVxRE84xNEyEQQktNFV9aWgRBXVoWVUMUA1lGCE1TEkIWCRY="
      }
    ],
    "prueba:p11:pista": [
      {
        "quien": "chiqui",
        "texto": "dc1:alcXDwsZFVxcFB0UXFsQQUMKVhYMQlxdVlhHWwkTSBNfXVVGCRs="
      },
      {
        "quien": "gismera",
        "texto": "dc1:d19bDEoZK1hQUURFR11eU1NDUqfSDUsYRERQFwpcGA1aVUZVRkUTA0tCDhg="
      }
    ],
    "prueba:p11:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:YFMXExFKDBlWWERaXVlSQlNDQhEGQlRdFVVcWEZGVkFbX0JdBEAIAlcWAFpEF01cRgwNFVoKCgxW9ZsEHBlrFl1DWQAFGQ1WQBQIWxJXX15CoIBK"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVlEQwhWQ1pcWhD3gRRTUVICExIGGBhJQFQVUQ9BVaKFHhB6CRUVB1r1zFcJCUsZCgcHR1UKSg=="
      }
    ],
    "prueba:p12:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:8Z1+O0RdBhl6bKaPHBRjWVMOQxYGQlVdFUFURQNQUaKFEEFBAxUHChhbAEYFRlxcRjYNWVwBC0NZUxYWXVtAV1FXFxYKGRdLXE4LGg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVkXDwEZEFZRRgVWUw4QVUQCEwAGQldMR14VWgdDWU8WfVlGBxUXE/ufQVINBV0ZAw5CVFoRBUNRUxYVU0tTFkJD9MpESgpLRVEKFF5bQxBCEVweDBEW"
      }
    ],
    "prueba:p12:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:ZlhWQwdLBl1WWgddU1geEHcWQQEPC1cYRlQVRxRWSwRYRPOHRlQIEl0WD1kXCUxLBxFCVlYIC0NAWFlFVlwSWlxFFw0RXBVcHRQnW1wUVVwWDVwJARBdGFFUWRcWQVEMU0JfGg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dVdbFwVXQ1ZQXAsURkZfSlkQHUQ2DFcYUEIVUwMTVAAWQ1VMElRIRmEWGFlEFVFeCUIRXFdFFwJXU0RFQ0zxnxNTREMIWENKVkwQVRw="
      }
    ],
    "prueba:p13:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlgXAhdNEfqAWgtZXRRBRVNDXwgGFFkYUV5GFwfwiQ5FEF1dFFQIAlcWFFhEEFlVCgdCRVYXRAZbVVcXVVYSUlYWdhYWXA9QXBpEdUdGVVxfDBMUBgb7lVQRU1YQXEoERRBCVRRaFUg="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fl9FAkRdoIpdUAEUUVVVEFoCEwgWGBQYRET2nkZQWRJXEFhVHxUDCBhTEldEClldAxADFUBFFAxHFlKmgVdWUxNFVg8BGRBME1cLRkBRXx4WL1xEBwdV+5RCFU4HE1QOFkNRVgNYCRUW"
      }
    ],
    "prueba:p13:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZVdbCwtXB1YdFCFHRveREFcL8MlNQn1LQfKUFxBaTg4WSRBaCUZGA0tCopdEDllbCgMMUVZL"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dkVDoMUZC1hRWAVaVlseEHACXxACQktZV1RHFwJWSwVTEEFBpZxGA1xfB18HD1cZH0ITQPrMRAdcVVNLEmASWFwWRAZEShZbVhQAURJaX1NeBhMFQxdWGEZYQV4JE1wOWFRVFAdZARNRUw8WEAMYXBUSB0dYSw=="
      }
    ],
    "prueba:p14:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:Y1dFBg5YEBlXUURTQEFAX0VNEyoMQl1LFXxaRRVWAkFTXBB5CUcVAxhaDhYIA10ZBRcDWUgQDQZHFkIAXlxVRFJQXhAQWE8ZShQUVUL3kRBaDBMACghXGFFURlMDE2sAWBBjUQRUFRJR9cBYSkZ9VUYBF1RdFwUHWhZSABJVXUUTQlgRFlwRVkAa"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:Z/WNQwhcBkofFB1bElZFQ1UMEwENQl1UFUFZVghcFkFvEF5bRlgDRltXD0IBFRhVBxFCWVwRFgJGFlIAEl1dRRNTWUMAVhAVE0URURJZVRBGClYWBw0W"
      }
    ],
    "prueba:p14:pista": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlhYTgdMAk1BW0oUdF1cURYWXQtPQltXWURYWQcTWxRXREJbSBUiSA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YF9QFgEXQ3pSUAUUQlVCVVwCH0QWDFkYWVRBRQcdGDhZEFFEE1sSCRY="
      }
    ],
    "prueba:p14:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dloXBwFJoIpAXRBbElBVEFcERgVNQn1WQUNQFwpcS0FGWV5bFRlGCl1cDkVEAl0ZEg0GWhVFBwxbFkMLEk9XWEdXWRYHVkNYX0ALGhJ4XxBCClYKBgwYXVsRQFlGQ1cbWRwQcw9GCwNKV08="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dlgXFgoZB1xD99dHW0BfEFMNEwAGEU1LWhFWWAgTSBRTQkRVRlEDRlBfBEQWCRYZP0IOWhkRDQZbU1hFRFBEWR8WVAwKGRZXUhQIQUgaEGD1zlcBDwcYWRV8WlkSVkoOFlxRFAr2xwtIVxNXSg=="
      }
    ],
    "prueba:p22:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:fllZFwFLDBlXXQdREkVFVRYPUkQPoZlVRVBHVkZHUQRYVRBBCFRGFllaAFgHBxYZPw1CRlYcRAdQFkYEXlhcVVJFGQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fl9FAkRJEVBeURZbHBR8X0VDRwsREF1KWkIVUwNFTQRaRlVaRlkHRktToocFChhQARcDWRkVBRFUFkcQVxlXWhNZQxELGRBcQ1VERUdREFxZQ1sFDUJUXfacUVhIE2sIFkRVFANEEw9OWQJXF0oY+s8OQltWRRcCV1MWFlsZV0VHV1oMFxc="
      }
    ],
    "prueba:p22:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:Z0RSEERVAktUWxcaEmVFVRYGXRAKB1ZcVBFZWEZCTQQWQUVdA0cHXBhaDhYNC0hWFBYDW00ARAZGFkcQVxlBU0NXFxIRXENRUk1EVV5TRVlTDRMFERBRWlQf"
      },
      {
        "quien": "gismera",
        "texto": "dc1:f1kXEAVbEfqSGkRkU0TzkRYGXRAKB1ZcUBFZWBUTTBNTQxBYB0cBCUsWDFMOCUoZFxcHFVcEAApQGA=="
      }
    ],
    "prueba:p22:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:e1cXEQFJBk1aUAsUV1gQ84wPRw0ODRhfR0RFWEZKGBJTEFhVRlQWB19XBVlKRmtWCEIOVEpFEBFQRRYcElpHV0FTWRcFGRoZRloLGg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVlEQwxYQ1VW98lQXRoQcV4MQQVDEVlaUBFEQgMTXRJCUV1bFRUHF031zBYdRklMA0IEVFURBQ0VQkQAQRlaWUFXRE1EYENXXEcLQEBVQxBCBl0BDg1LGFFeRhcWUkkUU0RVR0ZGDwgYVwNEDRQW"
      }
    ],
    "prueba:p15:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:fUNSFQEZBVBBWQVHEldfXhYN8N4OB0pXGRFGUg9AGAJERVNRFRUfRk1YABYWCUxYRhINRxkACENXWUQBVxcSZlxYFwIIGQ9YV1tEUV4UQlVABkEXDEJcXVkRV0UJUFAEGA=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fFVfDERXoINeURZbQRRXQlcBUgAMERhdWxFZVkZQVABAVRBQAxUKCUsWC1kdA0pWFU5CclAWSkNzV1oRUxlHWFwYFzANXA5JQVFEUlNYRFEWFl0LTQ=="
      }
    ],
    "prueba:p15:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:f1cXEAFBF1gTWgsUV0cQRVgCEwcCEExZGxFwREZGVgAWQFVGFVoIBxYWOBYBFUz6x0IUXE8ESENGU1GmiFcSWlJFFwAWTABcQBo="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YFNQoN5XQ1VSR0RXQEFTVUVDVwFDI01KUF1cWEoTSRRTEFRRDPbVRlxTQUYLCF1LCgMRFVwJRFEVUlNFQVxCQlpTWgEWXE0ZahQBWBJZ85lSClALQwRRSljyhhcDXxgAVURRGkZ7BwJZFgRFRApXGRcXBxVcFwVDXVdVABJMXFcTXlgRBRc="
      }
    ],
    "prueba:p16:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlgXAQ1VD1xHUUREU0ZREEMNEwUQC11WQV4VRhNWGA9ZEFVMD0YSAxQWFFhEBV1LEgsEXFoEAAwVTxYQXBlaWUFXRQoLF0N18J0BWVcUXFEWC1wWAkJcXVkRQUUDXRgYFlxRFA5aFAcYUgQWCAcYVBMHEEFcSw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ZVNeDRBQB/qAR0RXR1VCVVgXUkpDNF1RW0VcQxTwkRIWVFlRHBtGM1ZXQVsRA0pNB0IMWhkGCwRQFkMLEk1AU10WRhYBGRBYX1FEVVxAVUMWB1ZEEhddGEZUFVoTVkoAGA=="
      }
    ],
    "prueba:p16:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:dloXAAFLF1BVXQdVVlsQVFdDRgpDDFdVV0NQFwJWGFAPAQAaRnkHRkhEBFERCExYRgcRFUgQDaCcWBYAQRlaWUoWUhAFGRNcQUcLWlMa"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:e1lOTUR9ClxQXRddV0BVEFegggsQQlxdRkFA9M9AFkH0j3T31VsCAxhACEABRllVARcLUFdFFRZQFlgKElxKX0BCUlw="
      }
    ],
    "prueba:p16:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:f1cXAAVKBktSGkR4VxRUWVwKXgsQQklNUBFbWEZAXUFbX1xRFUEHFFkYQXENFVVcFANOFVUARAdcXF8IXUoSVxNaVkMXXBtNUhQVQVcUXl8WEFZEDg1UXUZFVEUHHQ=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVlEQwhWQ11aXgsU8Z1cHhahmCENQl1LVBFWVhVSGA9ZEFhVHxUIB1xXQUcRAxhbExEBVEun300Vc0QEEk9XRFdXU1lEVwwZW1UG959VEF5XB1JKQypZWvacVBcHX18UX1VeGg=="
      }
    ],
    "prueba:p17:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:clpQFg1cDRlXXQ5bElFDURYNXAcLBxhZWVZaFxdGXUFYXxBEE1EJRktTExYSA0pdBwZMFWkXEQZXVxYVQFBfU0FZFw8FGQ5cXUANRlMPEFxDBlQLQwBNS1ZQFVOlgFYFUxBVRxJUBAcYUgQWEgNKXQcGTA=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dloXFw1UAUtWFABRElhREAVTCkQQDVZZV1AVUggTXQ0WX1ZSD1YDRlxTDRYQA0paAxANGxmm7Q8VUlkXX/qfVxNTWUMBVUNJQV0JUUBbHhBnFvDNQwBRXVsRUUIDQVUEFlxRFAFQCBJdFgRYRANLXEYKDUFcCUo="
      }
    ],
    "prueba:p17:fallo": [
      {
        "quien": "chiqui",
        "texto": "dc1:YF8XBhdNAltSFAFaElhREFMQUAUPB0pZGRH3iBdGUaKfXhBVBEcPpYsWDVdEBVlTB0IDFVUEF0NRWUVFSxlGRFZfWRcFGRoZUF0KV10L"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fl9FAkRVAkoTXAtGU0cQVFMPEwgKAEpXFVVQFwpSGAJXWlEUHxUKB0sWBVMIRkhWFBYHR1ZLRC9URRYNXUtTRRNYWEMJUAZXR1EKDxJYURBRBl0QBkJL+5gf"
      }
    ],
    "prueba:p17:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:YVlVAgZYTRl+XQpAW/eDEEYCQQVDDFcYUVRWXhQTSRRTEEJbBFQEBxYWJEVEE1ZYRgEXWUkESENMFlgKElxBFl9XFxIRXENbRkcHVV9bQx4="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dlhDDApaBkoTUQgUVlEQXFdDUQUXAxhWWhFQRQcT+8haHhB6DxUCA1QWElMWEFFaDw1MFXgJAxZcU1hFQ0xXFldZRQ6nlAIZVlpEUV4UWF9CBl9EAQNS+4YRVlgUQVEEWFRfFAJQFQJdFgRaRBZRSglCBlpXAQFDRlMWCF1L8ZtSFkINRFEMVFFGARgSVRBcVxATAAwRGEEVUkBWFFZWFVcQSRQTWwlIGGMPFgwT+5AVEgdRFw=="
      }
    ],
    "prueba:p18:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:d1lEQxdcoIhcRgFHElBVEHQKXwYCDRQYWV5GFwJcS0FbUVRGE1IHFFdYTRYICUsZAg0RFVQMAQ1BU1hFV1cSV19RWE1EbA1WE0ANUVxREFxXQ1sNEw1MXVZQFVMDXxgSV15RQAlHDwkYT0FTCEZXTRQNQlBKEafCFVNYRUFMElxGWEMCSg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:f1cXBghQDlBdVQdd8YdeEFgMEwAGAVFcUB8VcwNQUQVTEEFBD/bPCBhGFFILRlf6yxBCWVZFFRZQFlIAQUlXREf1hEMFVUNdVhQIVRJWUURXTxMdQwZdS1FUFVOlgFYFUx4QbUZRAxVIQ6KfF0oYXApCA0VWAQERVFJZRVZcElpSFkQGp4gMS1IaRGBdUF8QQgpWCgZCSU1QEUZSpYJZDVdCEFUKFQsPS1sOGA=="
      }
    ],
    "prueba:p18:pista": [
      {
        "quien": "gismera",
        "texto": "dc1:f1NSQwhYQ1dcQAUUVlEQXFdDcAsOC0tZR/KYVkZWVkFTXBBYD1cUCRhSBBYME/uQFRIHUVwWSkNxX1UAElpdWBNHQqDNGQBMUkYQWxJYWV1fF1JEBg4YUEBUVlhI"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ahZbBgEZBlUTVg1YXlFEVRYaEwgCQltNUF9BVkgTbQ8WWEX3z0YWA1wWD1lEFlleB0IDFVUEF0NGU18WEl1XFl9XFw4F+tJYXVVER1sUWFEWB1wWDgtcVxVTXFIIHQ=="
      }
    ],
    "prueba:p18:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:fVkZQzJMBlVFUURVElhfQxYHXAcWD11WQV5GDUbxhxBDWfOdCBUDFUxDF1lEA1YZCgNCUEoGBQ9QRFdJEkhHX/CfWUMQTBVWE1gFFF5YUUZTTxMVFgv7kVsRQVIL8JUAFlxRFBVQpddXRAAJ"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:d1NEEwVaClYdFDRVQveREEIKVgoGQkxKUEIVXwlBWRIYEH5bFVoSFFlFQUIBCF1UCRFCQVYBCxAVWlkWEklTRlZaUhBK"
      }
    ],
    "prueba:p18:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dloXBwEZD1gTBlUCHBR1XBYSRgFDEllfVFNUFwVSVQRaXF9HSBUjFUxXA1dEA1YZCBcHRk0XC0NFRF8IV0sSVVJFWEMdGQ9WE1ANWV1HEEBZERMICg9IUVof"
      },
      {
        "quien": "gismera",
        "texto": "dc1:dkVDAgZYQ1VaWRRdXRRUVRYCQhEGDlRXGxFxUkZWSxVZHBBaCRtGN01fD1UBRln61w0RFVoKCkNQWhYEXFBeWlwWUwZETA0ZXkEBRkZbEFVYQ1YIQwBXVEZYWVsJE1sTU0lVWgJaRhdNU0F3Ni15dydCB0dYRRENVBZVBFhYElBGU0UXARdDbVZYAVNAVV1RFgITJgoOWllaHxVuRlJQDkRRHBQKVEYLWVgOGA=="
      }
    ],
    "prueba:p19:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:YkNeBgoZBVZBTqeHElFcEEYKQAtDDFcYUURHWg/wi0FTXhBRChUnElT1wFgQD1xYRgcMFQhcVVEbFnMWElZGRFwYFzcWXBAZQF0QXV1HChBgAl8MDAxcVxVUWxcWQVEMV0ZVRgcZRgNUFglZEANUGQMOQgEZAQFDX0NaDF0VEntSUkUKABkGVRMFUxo="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:f1lEQwNMAktXXQVHEkVFWVMRVgpDF1YYW15YVRRWGABYRFVHRlEDRktDA18WSBhgCUITQFAAFgwVRUMHW0sST1IY"
      }
    ],
    "prueba:p19:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:dloXAgBUCldaRxBGU1BfQhhDdghDBl0YWVAVWqWSSRRfXlEUAlBGA0tVE18GD0oZDBcMQVZFBQ8VUl8WQlxcRVJEXgxKGSZVE1ABWBJXX0JEBlxEBwcYalRCVlYAQfvMVx4="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dloXEhFcQ1xARAFGU1ZREFMNEwEPQkhZRlhZWwkTWw5YEEVaBxUFB0pCBEQFShhRBwEHFU8ADQ1BUxYE8YhdRR0WYaDFVAxXXEdKFGtVEFFbAl0BAAcW"
      }
    ],
    "prueba:p20:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:8ZdyEBD6whlWWhBGU1pUXxYCVBECQxj6lHZcRAtWSgAaEFVYRlQBE1kWEkMGAxhJCRBCWVhFARBWV1oAQFgT"
      },
      {
        "quien": "gismera",
        "texto": "dc1:f1cXERFcB1gTUAEUU0VF85tDVhcXoZkYR15BVkgTcABPEEFBAxUFCUpCAEQIBxhdCQwGUBkAChdHVxhFd1USRl9XWQxIGSBRWkURXQgUVVwWDVwWFwcYVloRUEQS8JlBV0JCXQRUSA=="
      }
    ],
    "prueba:p20:fallo": [
      {
        "quien": "gismera",
        "texto": "dc1:dkVWQwFKQ1VSFABRXhRUVUUCVKffBxhcUF0VWwdFWQVTQl8ORlsJRltZE0IFRlZYAgNMFXYXDQZbQldFV1USRl9XWQxEWgxXE0cRFEBbQ1EY"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8ZdwChdUBktSFQ=="
      }
    ],
    "prueba:p20:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:cFNFEQVdAhcTcQgUUVxfQkQMExcGQklNUFVUFwNdGBRYEFhdClpI"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:8ZdyEBD6whlSRRH3nxUQ8pc6ExAKB1ZdFVNURQRSGQ=="
      }
    ],
    "prueba:p23:inicio": [
      {
        "quien": "gismera",
        "texto": "dc1:ZlgXCglJEVxAW0RQVxREVVqgmgMRA15XRhFWWAgTVhRTQ0RGCUZGFfubDFQLCldKSEInRk2mxUNQW0YEQlhWWQkWWwJETQpXR1VEQltbXFVCAhMXBkJbV0dDUBk="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:f1kXBhdaEVBRXaeHElVeX1ULVkhDB1YYUF0VRwlJV00WQFFGBxUXE10WDVlECl1ApcsQVFQKF0NbWUUKRktTRRNPFw0LGRJMWlEKFEFREFxZQ18IBhRZSlQfFXMHXl1BQ14QWKWUFg9CGEFvBUg="
      }
    ],
    "prueba:p23:aSuManera": [
      {
        "quien": "chiqui",
        "texto": "dc1:YFMXCwUZCl1cGkR5VxRWUVoXUgYCQvqTRVBHQwPxg0FPEF1RAlwHRvqdD18KAU1XB6DZGw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:cFlZQ6aSBlcTWg1aVUFeUfTYEwYCEUxZGxFsVkZAWQNTXV9HRlGl1VZSBBYBFUz6x0w="
      }
    ],
    "prueba:p23:exito": [
      {
        "quien": "chiqui",
        "texto": "dc1:8Z1yDURXCldUQQpVEkRRQkIG8d9NQmxKUFJQFwLwlQBFEFVaBVAUFFlSDhYdRktQARcHFU0KCaCUWFIKXFZBFlZaFxMBVQwX"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVkXDQtKQ1VcFBBbX1UeEHgMQEQTEFdMUFZQGUZ2S0FaXxD33FsPBVcWEEMBRktYBAdCXVgGAREVVVkLElddRVxCRQIXFw=="
      }
    ],
    "prueba:p21:inicio": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlhWQxRYD1hRRgUUQlVCURYPUkQAA1RUUBFlWBRHWQ1TQx4UJ0AUA1RfDhYIBxhKBwChmFhJRAZZFlUEXPqBWFpRWEMIWENWSvfXGBJYURBVAkABEQMYVFQRUEQWVkoAGA=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:fVkXBhcZD1gTUAEUXlUQQEMGQRACQlxdFVJURAcdGCRFURBYBxUVB1pTQVURB1RIEwsHR1hFFRZQFloAUxleWUAWRwYWUKCKV10HW0EaEHVFQ18FQw1MSlQLFVsHE0kUUxBDWwpaRglB9dIWEQgYXQMWB1ZNDBIGFVJTRVpWRlNfGA=="
      }
    ],
    "prueba:p21:exito": [
      {
        "quien": "gismera",
        "texto": "dc1:YFdbBkRYQ1VSR0RaR1FGVRhDdQ0RD1lVWkIVVAldGARaEF5bC1cUAxhSBBYIBxhYAQcMVlAESg=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ahZSEBRcEVheWxcaEnBZVVUKQA0GFl0YVPKEWBUTUAAWVUNEA0cHAlcWBFoIBwMZCA0RWk0XBRAVRlkBV1RdRRNTRBMBSwJLE1wFR0ZVEF1TB1oFDQ1bUFAf"
      }
    ],
    "documento:d03": [
      {
        "quien": "chiqui",
        "texto": "dc1:YEMXDwFNEVgTUAEUWFtGVVhNEymgw0sYUVRHUgVbWU8WffOVFRUVA19DE1dK"
      },
      {
        "quien": "gismera",
        "texto": "dc1:fvWWEERTDE9WWkoUdPedWlcXVkQGDBhUVEIVXwlBWRIMEFxVFRUHFk1YFVdEElddBxFMFWAERAZbQlkLUVxBGA=="
      }
    ],
    "documento:d10": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlhWQwdYEFxBVURFR1EQXFoGRQVDF1ZZFV9aQwdB+8xXEENdCBUICUxXE18LSBhgRhcMFUoAp9JaRBYGXVcSRkFfRAJESBZcE1kNRlNWURBTDxMWBg5XUhs="
      },
      {
        "quien": "gismera",
        "texto": "dc1:YkNSQwlQEVhRVURRXhRCVVoMWUpDI1tN9phHUwdHXUFSVRBRFVpI"
      }
    ],
    "documento:d12": [
      {
        "quien": "gismera",
        "texto": "dc1:fUNSFQEZAlRaUwtHEkVFVRYERgURBllWFV1aFxdGXUFZREJbFRUXE1FTE1MKRlBYBQcQFV0AFwJFV0QAUVxAGBNvFwAFXQIZRloLFF5YVUZXQ1YKAAtVWRVdWkRGXfvbW1VCWxUVAgMYWg5FRAlMSwkRQlpaDQtN"
      },
      {
        "quien": "chiqui",
        "texto": "dc1:ahZZFgpaAhlWWERHR01fHhYyRqfKQlVZW1RHVkZXXUFGQlVHA1sSB0pFBBg="
      }
    ],
    "documento:d25": [
      {
        "quien": "chiqui",
        "texto": "dc1:YFNeEERaEUxQURcaEnVFQlMPWgtDB1ZMUENHVghXV0FXXVlTCUZGE1ZZQVdEE1ZWSkIBWldFEQ0VV/XUXRlTWhNaVgcLFw=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahZDEQFKQ0paWkRXQEFKHhY2XQVDBl0YUF1ZVhUfGKKfXBBZD0YLCRYWLF8WBxhbDwcMFVUERBJAUxYAQU3xlxNEWBcFFw=="
      }
    ],
    "documento:d29": [
      {
        "quien": "gismera",
        "texto": "dc1:8Z15DERcEFpBXQZbEkdFEFgMXgYRBwIYRlgVUhVHWUFVUUJABxUVAxhGCFMWAl0VRhIQUF8MARFaFkcQVxlcWRNaWEMIVQZPVvbfGhJgVV71zlJEDgtdXFoRUVJGQk0EFlxRFAVUFBJZFhJTRBZdSwILB0dYSw=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:Z1NZoMlYQ1RaUQBbElBVEFoMQEQJF11OUEIb"
      }
    ],
    "documento:d30": [
      {
        "quien": "chiqui",
        "texto": "dc1:8Z17AhcZB1ZAFBBVQFBVQxYSRgFDDlRZWFBGQwNaS0FXEF1dRkUTA0pCABYdCRhQBANCUVwRFqCURRYBVxnxn1/0jE1EfBBNUlYFFFMUVFlTGRMJBhZKV0YdFXAPQFUERFEe"
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahZZDBcZB1xZ99cUXlhRXVcRHUQvoZFdWV4VUghHXRNZEFFaElAVRlxTQVMKAFldBxAWUBdFIAZGRkOmm0oeFlZYUaDFXQJNVhhERUdREElZQ0cFDgBR+5xfGw=="
      }
    ],
    "pregunta:ibarguren:i-218": [
      {
        "quien": "gismera",
        "texto": "dc1:8Z16BkRVD1heVRZbXPaLHhYtXEQHC1tdFUBAXqWaVkFYWRBQA0YCAxhSooUKAl0XRjcMFVSmzQdcVVlFQ0xXFl1ZFxIRUAZLVhQAUVFdQhBSoIAKBwcYXUZFVFUHHQ=="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:fBZGFgEZDVYTRBFRVlEeEH4CSkQWDFkYUVhTUhRWVgJfUR4="
      }
    ],
    "pregunta:adela:a-lenceria": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlhWQxBYAVVSFBVBVxRDRVMNUkQCQlBNUFJaGUZ2VkFaURBVCEEPAU1XQQVUXxYZP0ITQFAACkNYV1gB8YoSWlIWWw8FTwYZQ1EA959VEEJTBFoXFxBZShXznkMHUVQAFkBfRkZBBwRUV6ONSg=="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ckb02QpNAlVcFB0UXFsQXFlDRwsSF11LGxF9Vh8TWw5FUUMUF0ADRktTQUQBBVdeAwxCVkwECgdaFkUAEkpTVFYWRwIWWENIRl2nnVwUQ19YTQ=="
      }
    ],
    "pregunta:lizaso:z-villa": [
      {
        "quien": "gismera",
        "texto": "dc1:d1lEQwFXQ1xfFAdbUVxVChYWXQtDD1lBWkMVRhNWGARYREJVBFRGHxhDD1lEDFdPAwxCVlYLRABUREIAQFgSR0ZTFwYXSQZLUlYFGhJxXBBGDEEQBhBXGFteFVsDQBgXX18QWAcVBQdKV08="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:dloXCQtPBlcTWQ1GU1ZREFcPExcWB1RXGxF5VkZUXQ9CVRBFE1BGC1FEABYFChhKEwcOWhkEBwJXVxYIW0tTWFdZFwYIGRFcX1sOGg=="
      }
    ],
    "pregunta:garmendia:g-asteria": [
      {
        "quien": "chiqui",
        "texto": "dc1:ZlhWQwlYDfqeVURQVxRGWUMHXEpDM037nBFXWAhaTA4YEHNVFVxGC10WDVlEBUpcCUw="
      },
      {
        "quien": "gismera",
        "texto": "dc1:dkUXFQFLDErwmQldXhoQdUVDXwtDE01dFVz2lhUTVQQWQEJRCVYTFlkY"
      }
    ]
  },
  "explicacion": [
    {
      "quien": "gismera",
      "prueba": "p02",
      "documentos": [
        "d01",
        "d02",
        "d03"
      ],
      "texto": "dc1:dloXEw1KDBlWR0RQVxRAUUagkl5DDlkYQVBPVkZQVw8WXFEUDkADClRXTRYIBxhaBwYHW1hFAAYVRFMJXVMeFlZaFxcFWw9cQVtEV11aEFxZEBMMCg5XSxVQR0UHXVsAUl9DGkZwFRJNQA4WBRdN+stCClRKEQVDUFoWVAQZSxZSWlAWDVwNGVVbFk7xhxBcV0NDEQYQTFkVUFtDA0AYBVMQXFVGVg8SWRhBcgESSvrHEUJRXEUIAhX1jAtbWlMWR1dFCQFNAhlAXQoURlFcVVERUgkCThhUVBFRUgoTClAWVFUUB1IJFUxZTRYXExhaEwMGUEsLC0NRUxZUCwgADBNVWA1ETwZQXUANQED3mUMWAvDVDBEYXkBUFVIKE1wEQlVTQA9DA0ZcUw0WIxRZV0YqDUFcCUQiQVr1xFxNW1JSFk5DElAMGV5bFl1AFFEQcw/wyQIRGG5UQ1JWRlZWQVpREAdWDEg="
    },
    {
      "quien": "chiqui",
      "prueba": "p03",
      "documentos": [
        "d19"
      ],
      "texto": "dc1:f1cXDQtNAhlWWkRHRxRTXFcVVkQNDRhWWlxXRQcTWUFYUVRdAw9GpJNYDhYLFRhfD6HLXEpFAAYVWFcBW1wSUlYWVhIRXA9VUhQHVUFV8osYQ2pECwNaVFQRUVJG8ZMNVxBDUR5BB6SDFgJZCQkYXQNCA1leCkQSQFMWIF76n1dAFlMGDvrQGUoUFUFXFFVDQqCSRAJCS1lZR1oXC1pdD0JCUUdGWwcCUVNBRQEWWRkXF6GcGQAXTRVzRQQSXEEWX1cXExZcBExdQAUUVlEQVUUXVkQGGkhdUVhQWRJWFg=="
    },
    {
      "quien": "gismera",
      "prueba": "p04",
      "documentos": [
        "d03",
        "d04"
      ],
      "texto": "dc1:chZhAhZeAhldW0RYXRRdUUKggEQQFxhbWkNUTaWAVlsWVlFYElQEB1YWFUQBD1ZNB0IbFUoADRAVUVkRU0oSUlYWUwoDUBdYXxQAURJBXhBQEVIXAA0YVkBUQ1hKE10CXlFUVRUVAwgYWgAWDgdKSwdCBlAZCQVDWFNFDF5VUxZeX1INEEsCShNQC0Zf951RGENiEQoHVhhZXhVfD0lXQVNeREalhkYFV1hBWggHTlxGBwxBSwBED1RFFgFbXEgWShZbAhcZB1ZAFB0UX1FUWVdDSkQAB0pK9oIVWwcTSBRTQkRVRkUJFBhQFFMWBxYZP0IGUFVFBxZUREIKEl9TWkdXVQIKGQ9YE1gIVURREEkWBl9EAgxRVFleFVMDE0sEWlxfGg=="
    },
    {
      "quien": "gismera",
      "prueba": "p05",
      "documentos": [
        "d03"
      ],
      "texto": "dc1:f1cXUVUBTxlWWERXR1VCRFlDVwFDBU1ZR1VcVkZXXQ0WXfOdAlwFCRQWBEUQB1pYRhQDVvrIBUNUFloEQRkCBAkCAk9EQEP6mlhEWF5RV/OFQ1JEDwMYCwUIFUEDWlYVUxBdXQhAEglLFgVTFxZN+s8RQlZWC0QGWRZXB0BQVVkTXvTZCVwHVh0UNFtAFFFYWRFSRBANVFcVQlRVA15XEhZU84cIUQNGVllBUxcSWVsHTA=="
    },
    {
      "quien": "chiqui",
      "prueba": "p06",
      "documentos": [
        "d05",
        "d03"
      ],
      "texto": "dc1:Y1NaAQFLF1ZdFAdbUEZRUldDVwFDA1RfQFhQWUZCTQQWVllGC1QEBxhVDlsLRlRYRgwNQVgXp85UFmAEQF5TGhNPFwYIGQ9YUEYBFF5YVUZXAVJEDwMYSlRIXEMHE1sUREZRFAJQRhNWFgBYDQpUVkYDEkdcEQUHWgwWAF4ZU1haWlsMREgWXBNQAUdTRFFCUwBap9BCXF0VXVQXVQMBTxZhRV0DW0YWWVEAVAVGXVdGU1sHDkUBEEFDQAoSXFwWUkdCBggZAExSRhBbElFeEAdaAlZNQmEYWVBGFwVSShVXQxBaCRUVB1T1zFcKRlxcRi4NUksKp9JaDBYAXhlfV0dXRAYIVQxKE1EWVRJQVRBkAkAHAgRK+5hQGw=="
    },
    {
      "quien": "gismera",
      "prueba": "p07",
      "documentos": [
        "d06",
        "d07"
      ],
      "texto": "dc1:dloXoc9aDFRDRgVQXUYQVFNDdA0NB1pKVPOOFxZSX6KFEFEUK1AUBfueQVULCBhMCEIDRUwLEAYVU1hFXlgSVUZTWRcFGQdcE1ANRldXU1n10F1EBwdUGGZQW1YSXEoIWRBUUUZjBwpQWQ9SC1wYXApCBlxXABYMFVhDC1FYEkVSWl6g1xkHXBNYBRRRVUNRGENqRAYOGFtaQ0dSCRNcBBZVQ1FGRgcIWUIORA0JGEoHDgcVSQoWQ1lXFgBBTVNQVkJWQwBcQ2tSRwdVVEbznVdPEwgCQlVRRlxUFwJWGA1XQxBXB0cSB0sWBVMIRllXDw4OWhdFNRZc9Z8LEl9bRF5XFwYXWENaRlEKQFMYEERZB1ISoM9ZGFteFVsJE0sAVFVdWxUb"
    },
    {
      "quien": "chiqui",
      "prueba": "p08",
      "documentos": [
        "d05",
        "d06",
        "d07"
      ],
      "texto": "dc1:f1dEQwBWEBlAURZdV0cQVFNDUAURFllLGRFZVhUTXAQWYFVZBFAUEldYQU9ECllKRgYHFXQAFgD2nhpFQVhe9Z5XWUMAXENVUhQJXUFZURBTEEcFBQdMWQ8RZ1YVUFkHRPOdVUoVCgcYUgRaRBVZVwcWDUdQCkpDcV9cAEBYXBZfWRcSEVxDXVpeAUZTWhBcWRATCQYPWkpQRVBEShNJFF9VXhQDRgUUUVSimwVGXUoSAwBUGQAKQ1BaFhNTVV5TE1JSD0R1DENcTQUa"
    },
    {
      "quien": "chiqui",
      "prueba": "p09",
      "documentos": [
        "d08",
        "d09",
        "d03"
      ],
      "texto": "dc1:f1cXDwhYFVwTRRFREkZVU18BWqfQQnpZRkVURRRaWwAWVUJVRlkHRlxTQVoFRgsJX0IGUBkEChdQRRYBVxleVxNEUgULSw5YHxQIVRL3il5fAFJEEhddGFteFUQDE14UWFRZ99UVFglKRxRTRABZVRIDAFQZAQEQUVMWVAsIABgTelZDAFwJ+oAUBVhVQVlVWENCEQZCXUtBUFdWRlddD0JCXxQCUApGUFkVUwhGXVVGVkJRXEUOFllfWUVLGUNDVhZbAkRNFk9cFAFaElhREFsCXQtDA0lNUF1ZVkZdVwJeVR4UPxUWA1z1zFdEFF1eDxEWR1gXRA9UFloAXFpXRPCbVkMQWAFVUhQUW0AURFFUD1JeQwFKXVARREIDE10PFlxRFAdbEg9fQwAWV1YBGRULBUBcRQEQVllYAVtdXRZSWlAMSg=="
    },
    {
      "quien": "gismera",
      "prueba": "p10",
      "documentos": [
        "d10",
        "d11"
      ],
      "texto": "dc1:dlr0zgVKQ29SRgNVElhcVUACEwkWB0pMWhFRUhVXXUEHCQEGSBU3E1FTDxYCD0pUBwADFVoKCkNGQxYLXVRQRFYWUwYXXQYZAg1WARJRQlEWIkYWBg5RVxViVEULWl0PQl8cFANZRgpRVBNTFgkYXQNCNlpVAAAMGRZHEFcZX0NBX/TQRFwPGQEUAFESR1VAQgpWCQEQXQIVQVpFRlZLDhZeUVAPUEYQUVgOFgVGVFhGAQtBWEtEL1QWVQRBXEBXE1VYDRBcEE1SVgUUQUFDEFUCQRACERQYTBFQW0YEGAVTEENRFkEPA1VUE1NEE1YZEgcOUF4XBQ5UFlUKXBlHWFIWRwIIWAFLUhQMXUhbEEFDBhMBAApZSlQRVFtGUFcTRFVfFANZRhVXVBNTRBdNXEYMDUYZBg0XVFRXSw=="
    },
    {
      "quien": "gismera",
      "prueba": "p11",
      "documentos": [
        "d12",
        "d03"
      ],
      "texto": "dc1:cloXEw1cQ11WWERVUUBRHBYmX6fOA0sYUVRf9NUTTQ8WXl9ZBEcDRkhXE1dEF01QAwxCXVwXAQdURFdFV1USU11VVhEDVlkZfBQvbWB9f2MaQ/HPBg4YS1DyhFgUE1wEFlxRFAVUFQf6jU0WARVbSw8WDRVcC0QHUEVZF1ZcXBgTbxcHAUoMS1dRClVWWxBDU0NfAQZCYVdeQkdeCR0YN1dCV1VGRgNGVFlBUg0JGFhGEgNF+sREBlsWWgQSCgIPHxZaChb6wldXWwhRHhRJEPXKX0QQBxhUWhFFQhVcGBJfXhBHB1cDFBhaDhYVE10ZAxADGw=="
    },
    {
      "quien": "chiqui",
      "prueba": "p12",
      "documentos": [
        "d17",
        "d12"
      ],
      "texto": "dc1:dloXEKeQE01aWQsUQVFcXFlDXQtDB0pZFVVQW0ZeWRFXEFRRRmEJCl1SDgxEA0pYRgcOFVcKEgZbWRYRQFZIWRNSUg9EVAJJUhQAURJ1Ynt3LXJIQw5ZGFZDUFMDXVsIV1wQUAMVpM15GEFlSkoYVQ8AEFBLCkhDYVlaAFZW8I0dFnYWFlwPUFwUClsSWl9DFg5SCgehixhAX1QXFlpLFVcKEEcDFRYUXUUEWBClixkHDBZQGQsLEFpCRARBGVFZXlkXFgpWQ11WFAhbQRReRVMVVkhDGxhbWl8VWwcTWxNTVFVaBVwHChQWDVdEBVFNB0w="
    },
    {
      "quien": "chiqui",
      "prueba": "p13",
      "documentos": [
        "d13",
        "d14",
        "d07"
      ],
      "texto": "dc1:fllZFwFLDBlFUURXU1BREFgMUAwGQlkYWVBGF1YAAlABEEVaBxUKE0IWAFpEFlFcRgYHFWkAp9JUWlcXUxUSU10WQg0FGQ9YV1EWVRJQX15SBhMXDA5XGF1QTBcTXVlBVVFDVVwVAwoYZQBYBRJXSw8NQlFcRTICWV5ZC1ZWHhZWWhcHARkPWBNXEVFcQFEQUgYTAAoQXVtWWPaECBNBQVNcEFcJRxQDVxYFU0Q0WUoFAwRH+sgFTRVmVxXxmBJTQEL0wkRYC/qeGERNElpfQxYLUgYPAxhbWl8VQggTXgBEX1waRnMHCkxXQUUFBF1LRgYHRl0ARBJA9Z9FV11bUFpVXgxIGRoZQkGnnRJQWVNTTQ=="
    },
    {
      "quien": "gismera",
      "prueba": "p14",
      "documentos": [
        "d13",
        "d16",
        "d14"
      ],
      "texto": "dc1:Y1dFBg5YEBlXUURTQEFAX0VPEwoMQnVXR0JQDUZWVEFVRVFQFFQCCRhSBBYICUsZEg0QR1wXCxAVR0MAEklTRvCXFwQRWBFdUlYFFFdaEFVaQ1IWAApRTlofFXNLdhUxG/OjGTUYL0tsGy4MRANUGQIHEvaKFg0XWhZSABJYVUNSFlINRF0GSkZHCxgSVUBRRBdSAAxCXVZBQ1AXClxLQUZZXlsVGUYFV1hBRhEDSk0HQgZQGQ0NBkdEWUVLGUdYE0BSDRBYDUxQW0oUc1gQUVsCXQEAB0oYRkRXXgtcS0FVX14UClRGIU1XE1INBxh6DxQLWQJFBQ1BU0VJEl1dRRNGVhIRXBdcQBQVQVcUUVJECkFEBgwYVFQRVvTcQ00NVx4="
    },
    {
      "quien": "gismera",
      "prueba": "p15",
      "documentos": [
        "d25",
        "d33",
        "d12"
      ],
      "texto": "dc1:dloXAgdNAhlSQRD3m1pEWVUCCUQNF11OUBFTXhReWRIaEENRD0ZGBUpDAlMXRlxcRiMXR1wJDQwVTxYQXFgSRFxCVkMUVhEZVlhEVl1GVFUaQ18FQ1IIDhkRUVJGX1lBR0VVFBdAAwJZFhRYRAleUAULDRVcC0ShntS2w1ZWQFfxjRlDIVVDS1ZCAUZBWxBUUw8TKwkNGFxQXRV/CUFRG1leRFFGWQoDTldNFgEIGFUHQgFZWBMBQ1FTFgldShJcXE9SEQtKTxlHWwBbQRRcX0VDXafZD11KWkIVWgNdVxIWVUNRXBUDChh5C1lEA0pYRg4DFUkXAQ1RVxYBVxleVxNFUhsQWE0Zf1VER1dMRFEWBkBEFgxZGEVUR0QJXVlNFlRFUaWEB0ZcU0FaBUZSVh8DThVARRcGUvWMCxJVU0UTVUUWB1wQGUBdA0FXFEZZQAIdRDpCVFkVAQUPRlddDRZRU0AHFQMVGFMNFgmlkV0PAQ0VXQAIQ11ZQgBeFw=="
    },
    {
      "quien": "chiqui",
      "prueba": "p16",
      "documentos": [
        "d26",
        "d27",
        "d28",
        "d29",
        "d10"
      ],
      "texto": "dc1:ZlhWQwlMBktHVURVElhRQxZRAF5SUhhWWhFWWAFWGBRYEERGA1tGF01TQUUFCl0ZB0IOVEpFVlEPAgZLEn1d9YJXFyAFTQJVWloFFGdTUVxSBh9EAhBVWVFeR1ZKE1YOFl1FRg/21UZdWEEHXVcIA0YjMH54KyVDWVcWDVtDXRZXU0QCFFgRXFBRFhRXWhBVWkNHFgYMGFxQEVlWRl1XAl5VHBQFWghGTVhBVA0KVFwSB0JFWBcFQ0BYFgRBUFdYR1kXEhFcQ1dcFAFMW0dEVRpDQwsRE01dFUJAFwdDVwVTQlFQCRUKAxhVAEQDB1pYRg4DRhkCCxdURRhFelZLFlZFFw8FGQBYQFEWVRJQVRBaAhMHAg5UXRVhWkUSUlQERRwQWAcVAgMYWgAWCglMWBShz1QZFg0NFVhZEVNLW1kdFnYxL3gteBNaCxRVQVFCUgJRBUMBV0tUQg8XAUZZE1JRUlVGRQMUS1kPVxdI"
    },
    {
      "quien": "gismera",
      "prueba": "p17",
      "documentos": [
        "d31",
        "d22",
        "d20",
        "d23"
      ],
      "texto": "dc1:dlr00BdcBExaFABdWFsQQUMGEwgGQlxdRkFQRRLwi0FTXBBAD1gEFF0WBVNEClkZVVJbDhkAFwYVQl8IUEtXFkBZWQIGWENcXRQBWBJbVlZfAFZEBwdUGEFUR1QDQVdBTxDznQoVAglKW6KbBUZdV0YHDhVJFw0OUERZSxJ0W1hHX/TQREkMS0JBARRTFFVDV0NbCxEDGF1GRVRVBxNdDxZcURQFVAwHGFIEFgcHTV0HDgdGFUUABhUGBF8BDBJXEwYFWVAOTxlBWwZVXFBfHhYvRgEEDRhdWRFdWAtRSgQWVV4UBFQSBxhPQUwFFllNDw4OVEpFAAYVWlcWEgkADAcHFw0LGQZLUhSnnV4UXlkWDVIACgcYXFBdFUQDQU4IVVlfDkZZCgNOVwNXRApZGQULDEFYRQAGWRZFAFVMXFJcGBcnC0sO+p5VRFFcFFVcFgtcEAYOAhhQQ1QXE10YCUPzmUcWUAJI"
    },
    {
      "quien": "chiqui",
      "prueba": "p18",
      "documentos": [
        "d32",
        "d30",
        "d22",
        "d29"
      ],
      "texto": "dc1:chZbAhcZUwsJB1EUQVteUUQMXUQPA0sYVlBRUghSS0FSVVwUC1oIEllVAEQDB0sZH0IRUFAWRA5cWEMRXUoSUlZFRxankBAZUlgDQVtRXhBUAlkFAQMYXFBBR14VUgJBXlFS98tURhVNVAhSC0ZZGQsLEFRLRRQMR0dDABJVXRZXU0QTAUsXWEFbChgSTRBcV0MBVVVCXUsVVFkXpYlWCFVfEFcTVBQSVxYRVxYDXBkFDQwVSQQWBlEWVQpcGVdaE15CBgdWTRl/UQtEXVhUXxYkUhYOB1ZcXFAPFwNfGABGX1RRFFQCCRhHFFNEClkZFQehhFYXBUNBU1umn1gSWlxFFwkRXBVcQBhEUV4UUVNEBlYADBAYXFBdFUQHXVkVWUJZW0ZMRgJdWkFeCxJdVUpCB1kZFBEGFUZXAvGKElcTWlYQRAlVAwIERE0SQF9d9dATAQ9CSEpcXFBFRkdKBFgeEGcDFQoKXUCihUQDVBkHDAtZVQpEB1AWWgQSVFdFWlpbAkRAQ0hGXQpXVxRR84cMQEQHB0tIQPKcREZAXQZD851VRkYDClRXD1ILRltWCEKhnFVL"
    },
    {
      "quien": "gismera",
      "prueba": "p19",
      "documentos": [
        "d05",
        "d06",
        "d07",
        "d15",
        "d09"
      ],
      "texto": "dc1:f1cXDgVXDBlXUUQFCwYHEEIWRQtDE01dFVRGQwdBGARYEGZVCl0JCFxZQVMKRkhLDw8DQ1wXBUNWWVhFR1dTFl71lhIRUA1YE1ABFFdHU0JfAVoWT0JcXVtFR1hGV10NFlhfQANZRgNUFlUWAAMYUxMOC1oZHEQGWxZ7BFZLW1ITU1tDVQ5DXVYUF1FCQFlVWwFBAUMBV1YVRFsXBVxbCVMeEGcJWQlGTVgOFgcTVUkKB0JZWBZEF0dTRV8SalNCRkRZCgpWQ3xQXAVdVlEcEFMPEwUHD1FWXEJBRQdXVxMWQUVRRlMPFFVXQVoFRltMAwwWVBkBAUNRX0QAUVpb9YBYFxpETwIZUhQ2VUFXUVZEoJ4FQwMYSFpDFVIKE1sOREJVW0gVIwoYVQBcARRXGRcXBxVcC0RSDAcERVZWQFvwm1ZDAVdDVVIUB11HUFFUGA=="
    },
    {
      "quien": "chiqui",
      "prueba": "p20",
      "documentos": [
        "d14",
        "d34"
      ],
      "texto": "dc1:f1cXERFcB1gTUAFYElBVQPXQQA0XDRhdRkVUVQcTSg5CURBNRlAKRllRFFdEA1ZNFAMAVBkVCxEVWldFU1pXR0ZfVkMSUAZTUg5EXFNW851XQ0IRBkJbXUdDVEUKUhgEWBBcVUZBCQtZGkFTCkZdVUYHGkFLAAkMFVJTRV5cRFddQlJPRFoMVxNRCBRcW0JEU0NXAQ9CSFRUX1oXDlJbCFcQUVYHXwlIGHEIRQkDSlhGAQdHS6bXQ1lXFgZdVEJDVkRDAkgZGlYTRxFW8ZkQQFkREwgCQlBRUFVHVkZbWRJCURBRChUQA1ZCAFgRBVcZH0IOWkpFAxZURFIMU0oSU1BeVhELV0NVUhQUQVdGRFEWAlEFCQ0WGGVQRfTHE10SQlFSVUZUFBRRVAAaRAVXV0YAA0dbBEQaFUJEAFFcElLwm1YQRF0GGV5RCltBGhBxFiZQDAILXF0VXVoXAlZMFEBZVUYJW0YDVhYEWkQFWVQPDA0VXQBED1pFFhVbV11FCRZbAkRUAldcFABREgUJAgFDVhYCQlRZFUJATgcd"
    },
    {
      "quien": "gismera",
      "prueba": "p21",
      "documentos": [
        "d12",
        "d11",
        "d10"
      ],
      "texto": "dc1:YkNSBwVbAhlGWgUUQlVcUVQRUkQSF10YQVRZUgFBWQdfUUIUBxUKBxhVAFoIAxhpCRAWVFUAF1kVWFlF8JJzRFhXWQKmgk8ZQkEBFFdHRPOXQ1YKQwxNXUZFR1ZGQ00ERERRFB8VAwgYWg5FRBZdSw+h0VFQBgsQFU8WA0dcEkNdFlECFlZDSVJGBRRDQVlVWENfBUMKWVr2nFQXClb7zFJfEFEIFQoJSxYSWQYUXUpGBgcVVQREEFD1hwpAWB4WQF9ZDERVAhlCQQEUQVtcXxYMSqfQQk1WFVVQQwNQTAhAVRBQAxUOCUxTDQxEKRhyPzArempJRAZZFkUA8YhdRBNSUkMIWENaUkcFGBJRXBBHFlZEEQdLSFpfUVJGV11BVUVRWhJaRgFNVxNSBUgYfAhCBlBKChYHUFgaRWtWWUVBX1hNRHUCGUFRF0RHUUNEV0NXAUMuV19HXvaGCRNUDVNX84dGVAgSXUVBUgFGVVwCCwNbVgYMBhVPFgtdGVpfSVkXBQVVF1gTUAFHUV1WQlcRXwVN"
    },
    {
      "quien": "gismera",
      "documentos": [
        "d30",
        "d12"
      ],
      "texto": "dc1:cENWFxZWQ1pSRwtHEkVFVRYGQQUNQk1WVBFGWApSGBX1mVNaD1YHXBhDDxYFFVFcCBYNFVoAFgwZFkMLUxlaV1FfQwIHUKCKXRQGW0BGUVRXTxMRDUJWV0FQR14JE1kNFkFFUUZbBwJRU0FAAUoYTAgDQl9WHAVDRl9YRVZMV/WCWRlDI1gRVFZaAF1TFF5FWABSRBAXSFcVQED0zxNdE1cQcWYtdCgnGFgIFhUTXRkKA0JGXKbVDEdXFgQSVVMWQkNSQxZWAVhRVURHV1NF85sCExIKFFkDFXRWXwdaXAQWVkVRRkYTRlVXD1lEFldLFxcHFVwJRAJWRFMAVlZAFkNZWQZEWENKRhQMW19WQlUWBl1EFw1cWUYRWVYVE1sARVFDGkZsRghXRQ5CFgdLGQ4HD1pKRQwGVl5ZRUJWQBZDRF4OAUsCGUVRHhRXWBBfUApQDQxCXF0VcGd8J315QVdcEFADRwMFUFlbFgADTlYKFAdHGQREAllRQwxXVxw="
    }
  ],
  "puntuacionMaxima": 2040,
  "interrogatorio": {
    "desbloqueadoPor": "p09"
  },
  "balance": {
    "trasPrueba": "p13",
    "propuestas": [
      {
        "quien": "gismera",
        "sospechoso": "echaide",
        "texto": "dc1:alkXDg1LAkvwmQUUU1gQUVIOWgoKEUxKVFVaRUgTdAAWU0VRCEEHRklDBBYUB1/61UIDFXQAFgD2nhYJUxlUX0FbVkOnkA8ZQFsIWx4UVVwWDvDNBwtbVxVfWhcKUhgVWVNRGEZMRgNUFgJZFhRdVkYGBxVVBBdDVldEEVNKElJWWhcCClAPVVwUF1VeURBAWRETFxZCXUtBUFNSElIWQXNDREEQWkYDVhYEWkQOV00DDkJRXAlEUhVXWkUEGVZTE1xCDw1WTxlQQQVaVlsQUUYCQQEAC/uLFVRZFxVcWhNTEFRRRncHFUxXE0QNBVkVRhtCUFdFVVoEBBYAQFgSU18WVAIOXBFWE1ABFFNFRVVaD1JEAANLWRs="
      },
      {
        "quien": "chiqui",
        "sospechoso": "ibarguren",
        "texto": "dc1:Y0NSEERADBleXRZVQPedURYCX0QOoZFcXFJaGUZ2VkEHCQEGRkYTRltDAEQQCRhcFRYDV1hFEgJW9ZsKElgSWlJFF1NWA1cMHxQIWFdT84MWAFwKQwdUGFRTR14BXBgJ9YpdUQJaRh8YUAhECaWLGaTJAVpLBB6ghlj03hJaXVgTUlgQRF4MTVJHRFBXFFNZWABGAQ0WWRhQXxVSChNeE1dDU1tdFQdGVFdBRQGliVYUA0JRXEUIAhVAXwleWBJaVhZFBgdcF/qAFAhVQRRdWUUOUhdDBVdMVEIVTkZbXRNTVPOHRlEDRl1aDVdKRnRYRgEDRlhFAAYVWldFQ0xXFkBXWwZEVQIZX0EeFFdHEENDGlJIQxsYXFxSUBcXRl1BWF8QXAcVBAdSVwVZRAJdGQoDQkZQABYRVBZTCxJNXVJcFlIPRFQGSh0="
      }
    ],
    "sinDescartar": [
      {
        "sospechoso": "elosegui",
        "texto": "dc1:dUNSQwFVQ1hXWQ1aW0dEQlcHXBZDBl0YWVAVQQ9fVAAWSRBRCBVXXwkEQVERB0pdBwADFVwJRA9ZV0AAQFYSUlYWRQYXXBFPUhQAURJAX1RXEBMIAhEYUFRTXEMHUFEOWFVDGEZZB0ZWWQJeAUZdV0YTF1AZCQVDBgYPRUFcElVWREWg1xkTVkEUAkFXRlELFgZdRFJbCg0VU1pFFPCLQVNDVRQFQAcUTFlBUgFGVFYVQhJZWAsLEBsWcwkSDRJSVhZdFghQDBlWRxBVUFUQVVhDVghDCldMUF0VTkZWSxVTEF1RFRUOBxhfBVlEAldKRhQHVlwWRAIVe1cBQFBWGA=="
      },
      {
        "sospechoso": "larrauri",
        "texto": "dc1:dUNSQwFVQ0hGUURZ8ZVDEFECXafQQltXWxFZVkZeTQRERFUUAlBGClkWElOn11dLB05CRVYXFRZQFkUAEkhHU1f1hEMXTENJUkYQURJQVRBaAhMKAhRRXUdQGRcfE10SFkZfVwdZRgJdWkFFBQhZTQkQC1oZAQsNUVMWEVtcXFNdFlZDFFgT+pIaRHdTUFEQBFITAAZCWV9aQkFYRkdXDFcQVVhGQRQDVhYFU0QuXVcCAxtUGQEBQ1lXRUUCDwgCAxoXGkRVDBlXUURYUxQDAA9DVREGQlRZFVxUUxRGXwBSURBQA1lGVAkMQVAFCkxYRhEDV1wXRAf2hVgBVxlCV0D1hEOnkA8ZVkcFFFxbU1hTTQ=="
      },
      {
        "sospechoso": "garmendia",
        "texto": "dc1:ZVNFAgpcAhlWWkRRXhRxRFqgkgoXC1xZFVVQRAJWGBBDVRBVBEcPpYsaQVMXEl0ZBwUNRk0KRA9aFkYEQfqBFlZYQwYWVkNaVloFWlZbEFVYQ0ARQwFNWUdFWhcfE0sUFlNRRwcVBwhcV0FTCkZZSRMQDUYZAQEQUVMWAF4ZW1hFX1IRClZNGWBBRFddVUJEVwdSRAcHVBgEBhVTAxNLBEZEWVELVxQDGFMSQqfHGFwIQgNWTQQXTxVVWQsSVlFeXBZRChZUAkoIFAhVElBVEFcEXBcXDRhcUBEEDlcBGA9ZEENRRlkHRlBXQUYBAlFdCUIMVF0MAU0="
      },
      {
        "sospechoso": "rosa",
        "texto": "dc1:d0NFDg360BlWWkRRXhRYX0IGX0QPAxhLUFxUWQcTXAQWUVdbFUEJRlxTQQddVwoVRgYHFU8MFwpBVxYEEkpHFltTRQ4FVwIVE01EUUEUXFEWBl0CBhBVXUdQFV0DVV1BUlUQWAcVBQdLV0FSCwhcXEYWC1BXAApDVBZGBEL6kxgTe14GCk0GGUBbBkZXFFVcFjNSBgYOVPuGXxVkE0ECQVBRXEAHFRUHWlMTFhQHSlhGFgNFWBdEAhVHQwzxkFwY"
      }
    ],
    "descartados": [
      {
        "sospechoso": "adela",
        "texto": "dc1:dUNSQwFVD1gTRRFdV1oQVF8MEwgCQk5XTxFUFwpSS0EGAgoHURUfRlpXC/XXRlkZFg0QFVUERA5UU0URQFgSRlJEVkMFWxFQQQ5ERUddVV4WAFoBERBZGEBfVBcWRl0TQlEQRAlHRgBNUxNXRAhXGQUNEEdcRQVDVFREDEBVUxgTbxc1BUsEWB8UBVxdU/ORWAdcFwZOGEtQEVNepYAYBVMQVVgKVEYWWUQAFhUTXRkKDgNYWBcFQ1QWRgRC+pMY"
      }
    ],
    "cierre": [
      {
        "quien": "chiqui",
        "texto": "dc1:flMXBhVMCk9cRRH3mxRUVRYO8M0HC1tXGRFyXhUdGChUUUJTE0cDCBhbBFgQpZVYRgcMFVoEAAIVUEQEQVweFkNTRQxEVwwZQ1UWVRJAUUBXEUABQwMY+5xdDxcWUkoAFkRRRAdHRgcYWgAWFwNATQdMQnNQFwmghhZDC1MZX0NWREMGREkCS1IUFUFXFEVeV0NAAaDTV0pUEUVCAlpdE1cQU1sBUBRGTVhBQhYDVhc="
      },
      {
        "quien": "gismera",
        "texto": "dc1:ahZECgoZF0wTWaedVl1TXxYNXEQLA1pK9pxUWglAGAxfQlFQCRUCCUsWF1MHA0sZFRdCVlwXEApTX1UEVlYSUlYWBlpVCU8ZQkEBFFdHEEBZERMADAxcXRVQRVYUVlsI9YMQUQpZB0ZOXxdXSkZ0VkYWF0xWRQoMFVBDABJMXBZWREUMFgNDX0ZRRFhTFEBFUxFHBU0="
      },
      {
        "quien": "chiqui",
        "texto": "dc1:f1kXFxFADBlVQQEUXlUQXVcNXEhDDFcYWVAVVAdRXRtXChBxBV0HD1xTQVMXBUpQBAuhhhVFFAJS9YVJEl9dREn1hEMIWENJRlEWQFMUVFUWE1IUoMMYQRVdWhcDXVsERELzh0oVFgNKWUFTCkYJAFdQQlFWFwmgmFcWAFwZXlcTVV4WAFgHFxN1CBRDQVUQVQZBFqDRGFRUEQYHXxNUDhZEVVqlmAcLV0VBRQ0IGF0DEQFUSxEFERkWT0VeVhJeUlT0zgVUDEoTUAVQXRRAX0RDXw0OElFXFVRbFwhGXRJCQl8UFkcPC11EQVMcFl1dDwcMQVxL"
      },
      {
        "quien": "gismera",
        "texto": "dc1:flNTCgsZAFhAW0RXU1BREEMNUkhDIVBRRERcDUZH+9saEFVYRl0JC1pEBBYVE10ZAxEBWlcBp85UFldFU1VVQ1pTWVhEQAwVE1EIFFpbXVJEBhMVFgcYTFBf9poHE1lBRlFA98cbRidUFgVTRApZGVRTVBVVCkQQVFVXCF1KElNdQkUGRFUCShNQC0cSV0VRWAdcRAcHUllYXkYXAlYYDF9CUUZGVEYKV0VBWBEDS00UDREb"
      }
    ]
  }
});
