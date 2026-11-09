/**
 * Fichas del archivo: los cinco expedientes del Tomo I, sin spoilers (D24).
 * Un expediente es jugable cuando su fichero de datos está registrado; si no, sale «En preparación».
 * `id` es la clave interna (no cambia); `numero` es el que se muestra.
 * `requiere`: expedientes que hay que resolver antes de abrirlo.
 * `motivo`: ilustración de la portada de respaldo (js/ilustraciones.js).
 */
DetectiveCodex.registrarCatalogo([
  {
    id: "005", numero: "001", titulo: "La ciudad perdida", genero: "Arqueología",
    categorias: ["aventura", "tesoro"], dificultad: 3, duracion: "60–90 min", pruebas: 14, sospechosos: 4, motivo: "desierto",
    sinopsis: "Una arqueóloga encuentra referencias a una ciudad sepultada bajo el desierto que ningún mapa recoge.",
    elementoConductor: { tipo: "objeto", nombre: "La estrella de ocho puntas en piedra" }
  },
  {
    id: "006", numero: "002", titulo: "El robo del museo", genero: "Investigación",
    categorias: ["crimen"], dificultad: 4, duracion: "60–90 min", pruebas: 15, sospechosos: 6, motivo: "museo",
    sinopsis: "Una joya desaparece durante una gala. El fotógrafo no dejó de disparar y nadie salió del edificio.",
    elementoConductor: { tipo: "objeto", nombre: "El Ojo del Horizonte" },
    requiere: ["005"]
  },
  {
    id: "008", numero: "003", titulo: "La habitación 309", genero: "Misterio psicológico",
    categorias: ["misterio"], dificultad: 4, duracion: "60–90 min", pruebas: 14, sospechosos: 5, motivo: "hotel",
    sinopsis: "Varios huéspedes aseguran haber dormido en la misma habitación de hotel sin recordar haber entrado.",
    elementoConductor: { tipo: "número", nombre: "El 309" },
    requiere: ["005"]
  },
  {
    id: "009", numero: "004", titulo: "El mapa de los siete sellos", genero: "Búsqueda del tesoro",
    categorias: ["tesoro", "enigmas"], dificultad: 3, duracion: "60–90 min", pruebas: 15, sospechosos: 3, motivo: "mapa",
    sinopsis: "Un mapa partido en siete fragmentos. Cada uno conduce a un lugar nuevo… y al siguiente fragmento.",
    elementoConductor: { tipo: "objeto", nombre: "El séptimo sello" },
    requiere: ["005"]
  },
  {
    id: "010", numero: "005", titulo: "El expediente cero", genero: "Conspiración",
    categorias: ["crimen", "misterio"], dificultad: 5, duracion: "75–100 min", pruebas: 22, sospechosos: 8, motivo: "expediente",
    sinopsis: "Una cita en Madrid a la que nadie acude, un piso con la puerta forzada y cuatro casos que eran uno solo. Y Yoksrio ha dejado de contestar.",
    elementoConductor: { tipo: "colección", nombre: "Los cuatro elementos" },
    requiere: ["005", "006", "008", "009"]
  }
]);
