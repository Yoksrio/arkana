/**
 * Textos de la interfaz (español). El contenido de los casos está en expedientes/.
 * Las plantillas usan {nombre} y se rellenan con DC.formato.plantilla().
 * También incluye los formatos de fecha y tiempo, que dependen del idioma.
 */
(function (DC) {
  "use strict";

  DC.textos = {
    app: {
      nombre: "Arkana",
      lema: "Expedientes para dos mentes",
      noPersistente: "Este navegador no permite guardar el progreso: se perderá al cerrar la página.",
      noEncontrado: "Ese expediente no existe o todavía no se puede abrir.",
      volver: "Volver",
      cerrar: "Cerrar",
      cancelar: "Cancelar",
      aceptar: "Aceptar",
      nuevo: "Nuevo",
      pantallaCompleta: "Pantalla completa",
      salirPantallaCompleta: "Salir de pantalla completa"
    },

    inicio: {
      nueva: "Nueva investigación",
      continuar: "Continuar investigación",
      continuarCaso: "Expediente {numero} · {titulo}",
      sinPartida: "No hay ninguna investigación en curso",
      archivo: "Archivo de casos",
      resueltos: "Casos resueltos",
      sinResueltos: "Aún no habéis cerrado ninguno",
      hemeroteca: "Hemeroteca",
      sinPrensa: "Todavía no habéis salido en los periódicos",
      estadisticas: "Estadísticas",
      ajustes: "Ajustes",
      resumen: {
        resueltos: "Casos resueltos",
        tiempo: "Tiempo investigando",
        puntos: "Puntuación",
        rango: "Rango"
      },
      lemaPortada: "Archivo de investigaciones",
      historia: "Historia y personajes",
      historiaDetalle: "Gismera, Chiqui, Yoksrio y la agencia",
      bloqueado: "Empezad con «Nueva investigación»"
    },

    presentacion: {
      titulo: "Historia y personajes",
      saltar: "Saltar la historia",
      salir: "Volver al inicio",
      anterior: "Anterior",
      siguiente: "Siguiente",
      capitulos: {
        agencia: "La agencia",
        hermanas: "Las hermanas",
        historia: "Nuestra historia",
        comenzar: "Comenzar"
      },
      elegir: "Elegir quién es quién",
      irArchivo: "Ir al archivo de casos",
      repetir: "Ver la historia otra vez",
      escenas: [
        {
          id: "agencia", capitulo: "agencia", imagen: "yoksrio-agencia.jpg",
          sobretitulo: "Detectives privados",
          titulo: "La Agencia Arkana",
          parrafos: [
            "Un despacho pequeño en la España de los años veinte, con una placa en la puerta. Lo fundó hace años un detective privado de pocas palabras, F. M., al que todos conocen por su alias: Yoksrio. Hoy lo llevan dos detectives que no se parecen a ninguna otra: sus hijas, Gismera y Chiqui.",
            "Allí llega lo que nadie más sabe resolver: desapariciones, herencias imposibles, mapas incompletos, códigos y señales en la noche. En Arkana no se busca solo lo que ha desaparecido: se investiga por qué desapareció, quién lo ocultó y qué historia hay detrás."
          ],
          generos: true
        },
        {
          id: "gismera", capitulo: "hermanas", imagen: "gismera.jpg",
          sobretitulo: "La mente",
          titulo: "Gismera",
          lema: "La mente que encuentra respuestas donde otros solo ven preguntas.",
          rasgos: [
            ["Especialidad", "Deducción, documentos, códigos y cronologías. Tiene memoria visual: no olvida un detalle."],
            ["Carácter", "Paciente, meticulosa y elegante, con un humor irónico. Cariñosa con su hermana, aunque no lo demuestre."],
            ["Le gustan", "Los libros antiguos, los mapas, el té, el orden y los acertijos difíciles."],
            ["Su punto débil", "Piensa demasiado y le cuesta improvisar."]
          ],
          cita: "«Las casualidades no existen. Solo hay pistas que todavía no hemos sabido interpretar».",
          autor: "Gismera"
        },
        {
          id: "chiqui", capitulo: "hermanas", imagen: "chiqui.jpg",
          sobretitulo: "El instinto",
          titulo: "Chiqui",
          lema: "El instinto que encuentra caminos donde otros solo ven obstáculos.",
          rasgos: [
            ["Especialidad", "Exploración e intuición: escondites, mecanismos, pasadizos, rastros y lugares nuevos."],
            ["Carácter", "Curiosa, intrépida, alegre y traviesa. Valiente, aunque a veces confunde valentía con meterse en líos."],
            ["Le gustan", "Las puertas secretas, los mapas del tesoro, las plumas, los dulces y dormir en sitios inesperados."],
            ["Su punto débil", "Actúa antes de pensar y le cuesta quedarse quieta."]
          ],
          cita: "«¿Y si miramos donde nadie ha mirado?».",
          autor: "Chiqui"
        },
        {
          id: "juntas", capitulo: "hermanas", imagen: "juntas-catalejo.jpg",
          sobretitulo: "Las dos",
          titulo: "Juntas",
          parrafos: [
            "Una piensa antes de actuar; la otra, al revés. Discuten a todas horas y su vínculo es inquebrantable: Gismera sabe cuándo Chiqui está preocupada aunque disimule, y Chiqui sabe cuándo su hermana necesita parar aunque diga que está perfectamente. Nunca compiten. El objetivo es resolver juntas."
          ],
          dialogo: [
            ["Chiqui", "¡Gis! ¡He encontrado una puerta secreta!"],
            ["Gismera", "¿Has comprobado si tiene algún mecanismo?"],
            ["Chiqui", "Sí. Estaba cerrada."],
            ["Gismera", "Chiqui…"],
            ["Chiqui", "¡Pero ahora ya está abierta!"]
          ]
        },
        {
          id: "origen", capitulo: "historia", imagen: "yoksrio-cachorras.jpg",
          sobretitulo: "Nuestra historia · I",
          titulo: "Dos mellizas",
          parrafos: [
            "Gismera y Chiqui son mellizas. Su madre murió cuando apenas empezaban a descubrir el mundo, y se quedaron solas. Eran muy distintas, pero no se separaban nunca.",
            "Entonces apareció F. M., a quien todos llamaban Yoksrio: un detective privado de pocas palabras, exigente pero justo, que les abrió la puerta de su casa. Desde aquel día fue su padre."
          ]
        },
        {
          id: "oficio", capitulo: "historia", imagen: "cachorras-mapa.jpg",
          sobretitulo: "Nuestra historia · II",
          titulo: "El oficio",
          parrafos: [
            "Yoksrio descubrió pronto su talento: Gismera recordaba detalles que nadie veía; Chiqui encontraba lo que parecía imposible de encontrar.",
            "Empezó enseñándoles trucos de observación y acabó transmitiéndoles todo su oficio: observar antes de concluir, distinguir una pista de una casualidad, no fiarse de las apariencias, descifrar códigos, seguir rastros y no dejar nunca un caso a medias. A Gismera le enseñó a pensar; a Chiqui, a frenar y mirar antes de tocar; a las dos, a trabajar juntas."
          ],
          cita: "«Un buen detective no es quien encuentra todas las respuestas, sino quien sabe hacer las preguntas correctas».",
          autor: "Yoksrio"
        },
        {
          id: "proyecto", capitulo: "historia", imagen: "yoksrio-hijas.jpg",
          sobretitulo: "Nuestra historia · III",
          titulo: "La última noche",
          parrafos: [
            "Una noche, tras cerrar un caso de objetos desaparecidos, llegó un telegrama para Yoksrio. Lo leyó dos veces sin decir nada, cogió el sombrero y la gabardina y salió corriendo a la lluvia. Antes de cerrar la puerta dejó un sobre encima de la mesa del despacho y les dijo, desde el umbral, lo que nunca se cansaba de repetirles:"
          ],
          cita: "«No os limitéis a buscar lo que ha desaparecido. Investigad por qué desapareció, quién lo ocultó y qué historia hay detrás. Por separado sois buenas investigadoras; juntas sois extraordinarias».",
          autor: "Yoksrio"
        },
        {
          id: "carta", capitulo: "historia", imagen: "sobre-mesa.jpg",
          sobretitulo: "Nuestra historia · IV",
          titulo: "Una carta en clave",
          parrafos: [
            "A la mañana siguiente, al despertar, bajaron al despacho. Yoksrio no había vuelto y su sillón seguía vacío. En la mesa esperaba el sobre: dentro, una carta escrita con su puño y letra, cifrada con una clave que solo él conocía. Por fuera no había despedida ni explicaciones. Solo una última anotación: «Cuando llegue el momento, lo entenderéis».",
            "Durante los primeros días, Gismera y Chiqui siguieron trabajando como siempre, hasta que, revisando unos antiguos documentos de la agencia, encontraron referencias mucho más viejas a un proyecto llamado ARKANA. Entonces comprendieron que aquel nombre no era casualidad. Yoksrio había bautizado la agencia en honor a algo mucho más grande, un proyecto que había comenzado mucho antes de que ellas llegaran y del que todavía quedaban demasiadas preguntas sin respuesta."
          ]
        },
        {
          id: "telegramas", capitulo: "historia", imagen: "yoksrio-ventana.jpg",
          sobretitulo: "Nuestra historia · V",
          titulo: "Telegramas",
          parrafos: [
            "Desde entonces, Yoksrio viaja de ciudad en ciudad siguiendo sus propias investigaciones. No ha vuelto a aceptar ningún caso: los expedientes de Arkana pertenecen a las dos hermanas. Sin embargo, cuando más lo necesitan, aparece un telegrama suyo con una pista breve y certera.",
            "A veces, una pequeña ayuda. Otras, una advertencia. Siempre con la sensación de que sabe mucho más de lo que cuenta.",
            "Quizá algún día descubran qué significaba realmente aquel proyecto y por qué Yoksrio decidió ponerle su nombre a la agencia."
          ],
          cierre: "Porque Arkana nunca fue un nombre elegido al azar."
        },
        {
          id: "comenzar", capitulo: "comenzar", imagen: "juntas-carino.jpg",
          sobretitulo: "Vuestro turno",
          titulo: "¿Empezamos?",
          parrafos: [
            "Cada uno de vosotros será una de ellas. Decidid quién es quién, abrid el archivo y elegid vuestro primer expediente.",
            "Solo necesitaréis vuestros cuadernos y vuestros lapiceros: todo lo demás está en el expediente."
          ],
          final: true
        }
      ]
    },

    clave: {
      cifrado: "Texto en la clave de Yoksrio",
      tabla: "La clave de Yoksrio",
      telegrama: "Telegrama de Yoksrio",
      verTabla: "Ver la clave",
      descifrar: "Descifrar con la tabla",
      leer: "Volver a leer su carta",
      telegramas: "Correspondencia con Yoksrio",
      telegramasAyuda: "Al cerrar cada caso le mandáis un telegrama y él contesta, siempre en su clave. Lo que descifréis queda aquí guardado: puede que algún día signifique algo.",
      sinTelegramas: "Todavía no habéis cerrado ningún caso.",
      recibidos: "Recibidos: {n} de {total}",
      trasCaso: "Al cerrar el expediente {numero} · {titulo}",
      pendiente: "Llegará cuando cerréis este expediente.",
      numero: "Telegrama nº {n} · Desde {desde} · {fecha}",
      enviadoCabecera: "Telegrama · De Agencia Arkana · A Yoksrio",
      enviadoGenerico: "EXPEDIENTE {numero} CERRADO STOP {titulo} STOP SEGUIMOS STOP TUS GORDIS",
      transcripcionAyuda: "Pulsad un símbolo y escribid su letra, con el teclado o con los botones. Cada casilla va por separado; al rellenar la última se comprueba sola.",
      casilla: "Símbolo {n}",
      letras: "Letra para el símbolo elegido",
      borrar: "Borrar la letra",
      comprobar: "Comprobar transcripción",
      transcripcionFaltan: "Faltan {n} símbolos por escribir.",
      transcripcionMal: "Hay {n} símbolos que no coinciden: están marcados.",
      transcripcionBien: "Transcripción correcta.",
      stop: "STOP",
      firma: "Y.",
      cifras: ["CERO", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"]
    },

    hermanas: {
      titulo: "Gismera y Chiqui",
      genericos: {
        fallo: [
          [{ quien: "gismera", texto: "No. Volvamos a los documentos: algo hemos leído deprisa." },
            { quien: "chiqui", texto: "O algo no hemos leído. ¿Qué hay debajo de esa foto?" }],
          [{ quien: "chiqui", texto: "Yo lo habría dicho igual… y me habría equivocado igual." },
            { quien: "gismera", texto: "Comparemos lo que sabe cada una antes de volver a probar." }],
          [{ quien: "gismera", texto: "Tenemos un dato de más o uno de menos. Repasemos la cronología." },
            { quien: "chiqui", texto: "Yo repaso los sitios. Alguien ha estado donde no debía." }]
        ],
        exito: [
          [{ quien: "chiqui", texto: "¡Lo sabía! Bueno, lo sabíamos." },
            { quien: "gismera", texto: "Apúntalo en el cuaderno antes de que se te olvide." }],
          [{ quien: "gismera", texto: "Encaja. Y si encaja esto, lo de antes también." },
            { quien: "chiqui", texto: "Pues sigamos tirando del hilo, que se mueve." }],
          [{ quien: "gismera", texto: "Bien. Ahora la pregunta es por qué." },
            { quien: "chiqui", texto: "La pregunta es quién. El porqué nos lo contará después." }]
        ],
        aSuManera: [
          [{ quien: "chiqui", texto: "Se acabó. Lo hago a mi manera." },
            { quien: "gismera", texto: "Chiqui, no… Bueno. Ya está abierto. No preguntaré cómo." }],
          [{ quien: "gismera", texto: "No llegamos. Déjame pensar una salida." },
            { quien: "chiqui", texto: "Ya la he encontrado: por detrás. Ven." }]
        ],
        pista: [
          [{ quien: "chiqui", texto: "Ya sabía yo que nos lo diría en clave. Pásame la tabla." },
            { quien: "gismera", texto: "Léelo dos veces. Siempre dice más de lo que parece." }],
          [{ quien: "gismera", texto: "Le habría gustado que lo sacáramos solas." },
            { quien: "chiqui", texto: "Le habría gustado más que lo sacáramos rápido." }]
        ]
      }
    },

    telegrafo: {
      enviando: "Gismera dicta y Chiqui pulsa la tecla: la consulta sale hacia Yoksrio…",
      respondiendo: "En una oficina de telégrafos lejana, alguien con sombrero teclea la respuesta…",
      sinRespuesta: "La línea queda en silencio. Yoksrio no contesta.",
      hermanas: "Gismera y Chiqui se miran: tendrán que arreglárselas solas.",
      cabecera: "TELEGRAMA · PARA AGENCIA ARKANA · PISTA {n}",
      cabeceraHermanas: "NOTA · ESCRITA EN EL DESPACHO · PISTA {n}",
      firmaHermanas: "— G. y C.",
      guardar: "Guardar en las pistas",
      cierreRepasando: "Gismera repasa el cuaderno y dicta las conclusiones. Chiqui teclea el informe para Yoksrio…",
      cierreEnviando: "El informe sale hacia Yoksrio. Las dos se quedan mirando la línea…",
      cierreRespondiendo: "Lejos de aquí, Yoksrio lee el informe de sus hijas y teclea la respuesta…",
      cierreLeer: "Ha llegado su respuesta, en su clave. Guardadla: en la Correspondencia podréis leerla con calma.",
      cierreGuardar: "Guardar en la correspondencia"
    },

    carta: {
      titulo: "La carta de Yoksrio",
      subtitulo: "Sobre la mesa del despacho hay una carta con su letra… escrita en su clave.",
      comoTitulo: "Cómo se descifra",
      instrucciones: "Pulsad un símbolo y escribid la letra que creéis que es, con el teclado o con estos botones. Cambia en toda la carta a la vez. Esc deja de elegir.",
      simbolo: "Símbolo cifrado",
      letras: "Letra para el símbolo elegido",
      borrar: "Quitar la letra",
      tabla: "Vuestra tabla",
      pregunta: "¿Cómo tenéis que firmar vuestros mensajes a Yoksrio?",
      escribir: "Escribid la firma",
      comprobar: "Comprobar",
      error: "No es eso. Seguid descifrando.",
      pistas: "Pistas",
      pedir: "Pedir ayuda a {nombre}",
      nombres: ["Gismera", "Chiqui", "Yoksrio"],
      yoksrio: "Yoksrio: «Dibujad un tres en raya, otro igual con huella, un aspa y otra con huella. Repartid el abecedario por orden en sus huecos, Ñ incluida; a la Z le basta un círculo. Cada letra es la forma de su hueco. Leed despacio. Y.»",
      resuelta: "Clave descubierta",
      resueltaTexto: "Ya sabéis leer sus telegramas. Cuando le pidáis ayuda en un caso, os contestará en esta clave.",
      seguir: "Abrir el archivo de casos"
    },

    detectivesComun: {
      huellaDe: "Huella de {nombre}"
    },

    equipo: {
      titulo: "¿Quién es quién?",
      subtitulo: "Gismera y Chiqui investigan juntas. Decidid cuál de vosotros es cada una.",
      etiqueta: "¿Quién es {nombre}?",
      ejemplo: "Tu nombre",
      faltan: "Escribid los dos nombres.",
      iguales: "Cada detective necesita una persona distinta.",
      seguir: "Ir al archivo de casos",
      cambiar: "Cambiar quién es quién",
      intercambiar: "Intercambiar quién es quién"
    },

    detectives: {
      gismera: { nombre: "Gismera", rol: "Investigadora analítica" },
      chiqui: { nombre: "Chiqui", rol: "Investigadora exploradora" }
    },

    archivo: {
      titulo: "Expedientes",
      inicio: "Inicio",
      volverInicio: "Volver al inicio",
      agencia: "Agencia",
      lema: "Todo empieza con un movimiento de bigotes y una pizca de curiosidad.",
      secciones: {
        titulo: "Secciones de la agencia",
        expedientes: "Expedientes",
        correspondencia: "Correspondencia",
        resueltos: "Casos resueltos",
        hemeroteca: "Hemeroteca",
        estadisticas: "Estadísticas"
      },
      tramos: {
        primero: { titulo: "El primer encargo", texto: "Aquí empieza todo." },
        libres: { titulo: "Tres encargos sobre la mesa", texto: "Elegid vosotros por cuál empezar: los tres esperan." },
        final: { titulo: "El expediente sellado", texto: "Nadie sabe qué hay dentro. Se abre cuando estén cerrados los cuatro de arriba." }
      },
      sellado: {
        titulo: "Expediente sellado",
        texto: "Lacrado y sin título. Cada caso que cerréis rompe uno de sus sellos.",
        rotos: "{n} de {total} sellos rotos"
      },
      categorias: {
        aventura: "Aventura",
        crimen: "Crimen",
        misterio: "Misterio",
        tesoro: "Búsqueda del tesoro",
        enigmas: "Enigmas"
      },
      estados: {
        noIniciado: "No iniciado",
        resuelto: "Resuelto",
        preparacion: "En preparación",
        bloqueado: "Bloqueado"
      },
      motivos: {
        preparacion: "Este expediente aún se está escribiendo. Llegará en una próxima entrega.",
        bloqueado: "Se abre al cerrar el expediente Nº {numeros}."
      },
      dificultad: "Dificultad",
      duracion: "Duración",
      pruebas: "Pruebas",
      sospechosos: "Sospechosos",
      abrir: "Investigar expediente",
      continuar: "Continuar investigación",
      numero: "Expediente nº {numero}"
    },

    expediente: {
      confidencial: "Confidencial",
      introduccion: "Introducción",
      historia: "Antecedentes",
      objetivo: "Objetivo",
      personajes: "Personajes",
      documentos: "Documentos iniciales",
      fotografias: "Fotografías",
      masFotos: "{n} fotografías más",
      cronologia: "Cronología",
      comenzar: "Comenzar investigación",
      continuar: "Continuar investigación",
      reiniciar: "Reiniciar expediente",
      resolucion: "Ver resolución",
      otraVez: "Volver a investigar este caso",
      marcas: "Vuestras marcas",
      marcaPuntos: "{puntos} puntos",
      sinMarca: "Sin marca todavía",
      marcasAyuda: "Cada dificultad se juega una sola vez por caso: su marca es la que queda. Para otra marca, jugadlo en la otra dificultad.",
      todoJugado: "Caso cerrado en las dos dificultades. Solo queda releerlo.",
      volver: "Volver al archivo",
      confirmarReinicio: "Se borrará la partida de este expediente (respuestas, pistas y tiempo). Los resultados ya conseguidos se conservan. ¿Reiniciar?",
      enCurso: "Investigación en curso · {modo} · {duracion}",
      resuelto: "Caso resuelto · {puntos} puntos",
      documentosLeidos: "Documentos leídos",
      hilos: "Hilos de la historia",
      preguntas: "Preguntas hechas"
    },

    nueva: {
      titulo: "Nueva investigación",
      subtitulo: "Preparad la aventura y decidid cómo queréis investigar este expediente.",
      aviso: "La dificultad no se puede cambiar a mitad de partida, y cada dificultad se juega una sola vez por caso.",
      modoCerrado: "Ya cerrado en esta dificultad: {tiempo} · {puntos} puntos.",
      material: "Tened a mano vuestros cuadernos y vuestros lapiceros. Todo lo que hace falta está en el expediente: nada que buscar fuera de él.",
      modo: "Dificultad de la investigación",
      empezar: "Abrir expediente y comenzar",
      ambiente: [
        "Gismera ya tiene preparada su libreta. Chiqui lleva diez minutos intentando abrir la puerta del despacho.",
        "Gismera ha ordenado los lápices por tamaño. Chiqui ya ha tirado uno al suelo para ver si rodaba.",
        "Chiqui ha encontrado una caja vacía y no piensa salir de ella hasta que empecéis.",
        "Gismera repasa el expediente por tercera vez. Chiqui se ha dormido encima de la otra mitad."
      ]
    },

    modos: {
      investigador: { nombre: "Aspirante", descripcion: "Para disfrutar la historia: cada pista resta puntos y los telegramas se pueden descifrar con un botón." },
      inspector: { nombre: "Inspector jefe", descripcion: "Las pistas restan el doble, no hay pista final, cada fallo resta, los telegramas se descifran a mano y solo hay tres acusaciones." }
    },

    duraciones: {
      corta: { nombre: "Partida corta" },
      completa: { nombre: "Partida completa" }
    },

    sala: {
      secciones: {
        resumen: "Resumen",
        personajes: "Personajes",
        interrogatorio: "Interrogatorio",
        documentos: "Documentación",
        lugares: "Lugares",
        hilos: "Lo que sabemos",
        telegramas: "Correspondencia",
        prueba: "Investigación",
        progreso: "Progreso"
      },
      indice: "Índice del cuaderno",
      bloqueada: "Se abre al comenzar la investigación",
      interrogatorioCerrado: "Se abrirá cuando la investigación llegue a los personajes",
      numero: "Expediente Nº {numero}",
      pruebas: "{n} pruebas",
      superadas: "{hechas} / {total} pruebas",
      tiempo: "Tiempo",
      puntos: "Puntos",
      archivo: "Volver al archivo",
      reiniciar: "Reiniciar el caso"
    },

    documentos: {
      vacio: "Todavía no hay documentos.",
      ampliar: "Ampliar",
      soloPara: "Solo para {nombre}",
      cortina: "Este documento es solo para {nombre}. Que {otro} no mire.",
      mostrar: "Soy {nombre}, mostrar",
      ocultar: "Ocultar",
      tipos: {
        carta: "Carta",
        telegrama: "Telegrama",
        diario: "Diario",
        informe: "Informe",
        recorte: "Recorte de prensa",
        mapa: "Mapa",
        fotografia: "Fotografía",
        transcripcion: "Transcripción",
        almanaque: "Almanaque",
        inscripcion: "Inscripción"
      },
      ubicaciones: "Lugares",
      cronologia: "Cronología",
      sinLugares: "Todavía no hay lugares.",
      sinCronologia: "Todavía no hay fechas en la cronología."
    },

    sospechosos: {
      vacio: "Aún no hay sospechosos. Seguid investigando.",
      delCaso: "Del caso",
      titulo: "Sospechosos",
      elegir: "Elegid a alguien de la lista.",
      edad: "{edad} años",
      biografia: "Quién es",
      coartada: "Coartada",
      motivo: "Motivo",
      declaraciones: "Declaraciones",
      contradicciones: "Contradicciones descubiertas",
      sinContradicciones: "Ninguna, de momento."
    },

    prueba: {
      opcional: "Opcional",
      instrucciones: "Lo que hay que averiguar",
      documentos: "Documentos de esta prueba",
      respuesta: "Vuestra respuesta",
      escribir: "Escribid aquí la respuesta",
      horaIncompleta: "Escribid la hora con cuatro cifras, de 00:00 a 23:59.",
      comprobar: "Comprobar",
      pulsar: "Pulsad en la ilustración.",
      pista: "Pedir pista {n}",
      coste: "−{p} %",
      gratis: "sin coste",
      sinPistas: "No quedan pistas en este modo.",
      pistasTitulo: "Pistas",
      acusaciones: "Acusaciones que os quedan: {n} de {total}. Si las agotáis, el caso se cerrará en falso.",
      quedan: "Os quedan {n} acusaciones.",
      ultima: "Os queda una sola acusación.",
      enFalso: "Caso cerrado en falso",
      sinYoksrio: "Yoksrio no contesta.",
      penalizacion: "Cada fallo resta un 5 %.",
      vale: "Ahora vale {puntos} puntos.",
      errores: [
        "No es eso. Volved a los documentos.",
        "Respuesta incorrecta. Algo se os escapa.",
        "No encaja. Comparad lo que sabéis cada uno."
      ],
      superada: "Prueba superada",
      tuParte: "Tu parte, {nombre}",
      parteHecha: "Resuelta",
      esperad: "Ahora le toca a {otro}. Cuando acabe, poned en común lo que sabéis.",
      escenaPaso: "{n} / {total}",
      escenaSeguir: "Seguir",
      escenaFin: "Y entonces…",
      ganados: "+{puntos} puntos",
      hiloNuevo: "Hilo nuevo · Lo que sabemos",
      interrogatorioAbierto: "Ya podéis interrogar a los personajes.",
      verBalance: "Las hermanas hacen balance",
      deliberacion: {
        ayuda: "Antes de acusar, cada una dice a quién señalaría sin ver lo que ha elegido la otra. Solo se acusa cuando las dos están de acuerdo.",
        pregunta: "{nombre} ({persona}), ¿quién crees que es el culpable?",
        nota: {
          gismera: "Piensa en las pruebas, en la cronología y en lo que ha declarado cada uno. {otro}, no mires.",
          chiqui: "Fíate de lo que has visto y de lo que no te cuadra. {otro}, no mires."
        },
        decidido: "Decidido",
        cortina: "Gismera ya ha decidido y no piensa decir a quién. Ahora le toca a Chiqui: que se acerque {persona}.",
        meToca: "Soy {persona}, me toca",
        acuerdo: "Gismera y Chiqui cruzan sus miradas. Por primera vez en toda la investigación, las dos están completamente de acuerdo: {sospechoso}. Es hora de señalar al culpable.",
        acuerdoChiqui: "¿Tú también, Gis? Lo sabía.",
        acuerdoGismera: "Las pruebas y tu olfato dicen lo mismo, Chiqui. Vamos.",
        acusar: "Señalar a {sospechoso}",
        pensarlo: "Mejor lo pensamos otra vez",
        desacuerdo: [
          [{ quien: "gismera", texto: "Yo me quedo con {suyoGismera}. Si repasas las pruebas en orden, todo apunta ahí." },
            { quien: "chiqui", texto: "Gis, yo no lo veo. Hay algo que no me cuadra en {suyoChiqui}, y ahí es donde miraría." },
            { quien: "gismera", texto: "Entonces no podemos acusar a nadie todavía. Vuelve a enseñarme lo que viste." }],
          [{ quien: "chiqui", texto: "¿{suyoGismera}? Gis, yo he dicho {suyoChiqui}, y no me lo he sacado de la manga." },
            { quien: "gismera", texto: "Ni yo. Pero una de las dos se ha saltado algo. Repasemos la cronología juntas." },
            { quien: "chiqui", texto: "Vale. Pero esta vez miramos también lo que no está escrito." }],
          [{ quien: "gismera", texto: "Yo señalaría a {suyoGismera}, Chiqui. Lo tengo apuntado: hora, sitio y motivo." },
            { quien: "chiqui", texto: "Y yo no me quito de la cabeza a {suyoChiqui}. No pienso señalar a nadie a medias." },
            { quien: "gismera", texto: "Bien dicho. Sin acuerdo no hay acusación." }]
        ],
        sinAcuerdo: "Todavía no hay acuerdo. Repasad las pruebas, contaos lo que habéis visto cada uno y volved a decidir juntas.",
        volver: "Volver a deliberar"
      },
      siguiente: "Siguiente prueba",
      terminada: "No hay prueba en curso: el caso está resuelto."
    },

    minijuegos: {
      tiempo: "Tiempo",
      empezar: "Empezar",
      comoJugar: "Cómo se juega",
      reglas: "Tenéis {s} segundos y {total} intentos; el reloj arranca al pulsar «Empezar». Si se agotan, las hermanas lo resolverán a su manera, sin puntos.",
      intentos: "Intento {n} de {total}.",
      agotado: "Se acabó el tiempo.",
      reintentar: "Otra vez",
      aSuManera: "La prueba queda superada, pero sin puntos.",
      seguir: "Seguir",
      parejas: {
        como: "Las cartas están boca abajo. Levantad dos: si son iguales se quedan descubiertas; si no, se vuelven a tapar. Encontrad todas las parejas antes de que acabe el tiempo.",
        encontradas: "Parejas: {n} de {total}", carta: "Carta boca abajo"
      },
      secuencia: {
        como: "Los círculos se iluminan uno tras otro: mirad el orden sin tocar nada. Cuando ponga «vuestro turno», pulsadlos en ese mismo orden. Cada ronda repite la anterior y añade un paso más; un error devuelve el mecanismo a la primera ronda.",
        mirar: "Ronda {n} de {total} · Mirad el orden, sin pulsar", repetir: "Ronda {n} de {total} · Vuestro turno: repetidlo", error: "No era ese. El mecanismo vuelve al principio."
      },
      telegrama: {
        como: "El telegrama llega en la clave de Yoksrio. Pulsad cada símbolo y escribid su letra, casilla a casilla, con la tabla a la vista. Al rellenar la última se transmite solo.",
        cabecera: "TELEGRAMA INTERCEPTADO · LA LÍNEA SE CORTA"
      },
      cerradura: {
        como: "Girad cada rueda hasta el valor que creáis y pulsad «Girar y abrir». La combinación sale de los documentos del caso.",
        rueda: "Rueda {n}", subir: "Girar hacia arriba", bajar: "Girar hacia abajo", abrir: "Girar y abrir", noAbre: "No abre. Algo no está en su sitio."
      },
      diferencias: {
        como: "Las dos ilustraciones casi iguales esconden varias diferencias. Pulsad sobre cada una, en cualquiera de las dos; las encontradas quedan rodeadas y una marca gris señala dónde habéis pulsado sin acertar.",
        encontradas: "Diferencias: {n} de {total}"
      }
    },

    interrogatorio: {
      titulo: "Interrogatorio",
      ayuda: "A cada persona solo se le pueden hacer {n} preguntas. Nadie contesta a todo: pensad qué necesitáis saber.",
      elegir: "Elegid a quién interrogar.",
      vacio: "Todavía no hay nadie a quien interrogar.",
      sinPreguntas: "No se os ocurre nada que preguntarle… de momento.",
      quedan: "Os quedan {n} preguntas para {nombre}.",
      ultima: "Os queda una pregunta para {nombre}.",
      agotadas: "{nombre} no va a contestar a nada más.",
      hechas: "Lo que ha contestado",
      posibles: "Lo que podríais preguntar",
      preguntar: "Preguntar"
    },

    hilos: {
      titulo: "Lo que sabemos",
      ayuda: "Cada prueba superada tira de un hilo. Aquí quedan, en orden, con la prueba y los documentos de los que salieron: volved cuando no recordéis algo.",
      vacio: "Todavía no habéis tirado de ningún hilo. Superad la primera prueba.",
      balanceTitulo: "El balance de las hermanas",
      principales: "Sospechosos principales",
      sinDescartar: "Sin descartar",
      descartados: "Descartados",
      balanceAyuda: "No es una acusación: cada una propone por dónde mirar, y nadie que siga en la lista está libre de sospecha. Las pruebas que quedan dirán si alguna de las dos tenía razón.",
      balanceCierre: "Cómo se pusieron de acuerdo",
      balanceSeguir: "Seguir investigando"
    },

    progreso: {
      titulo: "Progreso",
      superadas: "Pruebas superadas",
      pendientes: "Pruebas pendientes",
      pistas: "Pistas usadas",
      fallos: "Respuestas fallidas",
      puntos: "Puntuación",
      maxima: "de {maxima} posibles",
      tiempo: "Tiempo",
      modo: "Modo",
      duracion: "Duración",
      investigadores: "Investigadores",
      lista: "Pruebas superadas",
      ninguna: "Ninguna todavía.",
      enCurso: "En curso",
      reiniciar: "Reiniciar expediente"
    },

    resolucion: {
      sello: "Caso resuelto",
      titulo: "Resolución",
      resultados: "Resultados",
      epilogo: "Epílogo",
      elemento: "Guardad este detalle: {nombre}. Volverá a aparecer.",
      archivo: "Volver al archivo",
      noTerminado: "Este caso aún no está resuelto.",
      selloFalso: "Cerrado en falso",
      falsoTitulo: "Agotasteis las acusaciones",
      falsoTexto: "La Guardia Civil cerró el caso con el culpable equivocado, y la verdad tardó meses en salir a la luz. Esto es lo que de verdad ocurrió:",
      enFalso: "en falso",
      telegrama: "Correspondencia con Yoksrio",
      telegramaAyuda: "Vuestro informe y su respuesta quedan guardados en la Correspondencia de la agencia.",
      explicacion: "Cómo lo resolvimos",
      explicacionAyuda: "Gismera y Chiqui repasan el caso, hilo a hilo, antes de escribir a Yoksrio.",
      seguir: "Seguir",
      leerTodo: "Colgar todos los hilos",
      redactar: "Redactar el telegrama a Yoksrio",
      salir: "Cerrar el expediente y volver al archivo",
      verHilos: "Ver los hilos del caso",
      pruebaDe: "Prueba: {titulo}"
    },

    prensa: {
      titulo: "Hemeroteca",
      lema: "Yoksrio dice que no lee los periódicos. Recorta todos los que hablan de vosotras.",
      vacio: "Todavía no habéis salido en los periódicos. Cerrad vuestro primer caso.",
      trasCaso: "Tras el expediente {numero} · {titulo}",
      alDiaSiguiente: "A la mañana siguiente, en los quioscos",
      comoLlego: "Cómo nos llegó el caso",
      precio: "15 céntimos",
      fotoPendiente: "Foto de prensa en el laboratorio",
      sinSalir: "Aún no ha salido",
      ayuda: "Pinchad un recorte para leerlo entero.",
      otroPeriodico: "Elegir otro periódico"
    },

    resueltos: {
      titulo: "Casos resueltos",
      lema: "Chiqui guarda cada hilo. Gismera recuerda adónde llevaba.",
      vacio: "Todavía no habéis cerrado ningún caso.",
      hilos: "Los hilos del expediente {numero} · {titulo}",
      ayuda: "Así lo contaron ellas: cada paso cuelga del anterior, con la prueba y los documentos de los que salió.",
      resolucion: "Ver la resolución"
    },

    estadisticas: {
      titulo: "Estadísticas",
      lema: "Gismera lleva la cuenta de todo: cada caso, cada minuto y cada punto.",
      investigadoras: "Las investigadoras",
      telegrama: "Telegrama · de Yoksrio",
      telegramas: {
        aspirante: "TODO EMPIEZA POR UNA PREGUNTA STOP GISMERA HAZLA BIEN STOP CHIQUI NO LA HAGAS DOS VECES STOP Y.",
        agente: "BUEN TRABAJO DE CAMPO STOP CHIQUI MIRA ANTES DE TOCAR STOP GISMERA TOCA ALGUNA VEZ STOP Y.",
        investigador: "OS LEO EN LOS PERIÓDICOS STOP GISMERA DUERME ALGO STOP CHIQUI DÉJALA DORMIR STOP Y.",
        inspector: "YA NO NECESITÁIS MIS PISTAS STOP GISMERA LAS LEE IGUAL STOP CHIQUI LAS ADIVINA STOP Y.",
        comisario: "NADA QUE ENSEÑAROS STOP GISMERA CHIQUI STOP ORGULLOSO DE LAS DOS STOP NO LO REPITO STOP Y."
      },
      resueltos: "Casos resueltos",
      pendientes: "Casos pendientes",
      tiempo: "Tiempo total",
      puntos: "Puntuación acumulada",
      rango: "Rango",
      siguiente: "Siguiente rango: {rango} ({puntos} puntos)",
      maximo: "Habéis alcanzado el rango más alto.",
      marcas: "Marcas por expediente",
      marcasAyuda: "Tiempo y puntos de la primera vez que cerrasteis cada caso en cada dificultad.",
      historial: "Historial",
      sinHistorial: "Aún no habéis resuelto ningún caso.",
      columnas: ["Fecha", "Expediente", "Investigadores", "Modo", "Duración", "Tiempo", "Puntos"]
    },

    rangos: {
      aspirante: "Aspirante",
      agente: "Agente de campo",
      investigador: "Investigador",
      inspector: "Inspector",
      comisario: "Comisario jefe"
    },

    ajustes: {
      titulo: "Ajustes",
      lema: "Chiqui ya ha probado todos los interruptores. Dos veces.",
      experiencia: "Sonido y movimiento",
      sonido: "Sonidos",
      sonidoAyuda: "Efectos sintetizados: papel, sellos, máquina de escribir.",
      movimiento: "Reducir animaciones",
      movimientoAyuda: "También se respeta la preferencia del sistema.",
      sinEquipo: "Todavía no habéis decidido quién es quién. Empezad con «Nueva investigación».",
      borrarAyuda: "Borra partidas, historial, ajustes y el reparto de las detectives.",
      progreso: "Progreso",
      borrarCaso: "Borrar partida",
      borrarTodo: "Borrar todo el progreso",
      confirmarTodo: "Se borrarán todas las partidas, el historial y los ajustes. No se puede deshacer. ¿Seguro?",
      borrado: "Progreso borrado.",
      sinPartidas: "No hay partidas guardadas."
    },

    visor: {
      acercar: "Acercar",
      alejar: "Alejar",
      restablecer: "Tamaño original"
    },

    avisos: {
      descubrimiento: "Nuevo descubrimiento",
      colecciones: {
        documentos: "Documento",
        sospechosos: "Sospechoso",
        ubicaciones: "Lugar",
        cronologia: "Cronología",
        contradicciones: "Contradicción",
        interrogatorio: "Interrogatorio"
      }
    }
  };

  DC.formato = {
    /** Sustituye {clave} por valores[clave]. */
    plantilla(texto, valores) {
      return String(texto).replace(/\{(\w+)\}/g, (todo, clave) =>
        valores && valores[clave] !== undefined ? String(valores[clave]) : todo);
    },

    /** @returns {string} hh:mm:ss */
    tiempo(ms) {
      const total = Math.floor((ms || 0) / 1000);
      const dos = (n) => String(n).padStart(2, "0");
      return dos(Math.floor(total / 3600)) + ":" + dos(Math.floor(total / 60) % 60) + ":" + dos(total % 60);
    },

    /** @returns {string} Fecha corta en español. */
    fecha(iso) {
      return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
    },

    /** @returns {string} Número con separador de miles. */
    numero(n) {
      return Number(n || 0).toLocaleString("es-ES");
    }
  };
})(DetectiveCodex);
