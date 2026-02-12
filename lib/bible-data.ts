export interface Book {
  id: string;
  name: string;
  testament: 'Old' | 'New';
  stage: string;
  theme: string;
  fact: string;
  author: string;
  period: string;
}

export interface TimelineEvent {
  id: string;
  name: string;
  year: string;
  description: string;
}

export interface Stage {
  id: string;
  name: string;
  description: string;
  color: string;
  themeColor: string;
  books: Book[];
  events?: TimelineEvent[];
  image?: string;
}

export const bibleData: Stage[] = [
  // 1. PENTATEUCO
  {
    id: "pentateuch",
    name: "Pentateuco",
    description: "Los cinco libros de la Ley (Torá)",
    image: "/pentateuco.jpeg",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200",
    themeColor: "orange",
    events: [
      { id: "creation", name: "La Creación", year: "Inicios", description: "Dios crea el universo y la humanidad." },
      { id: "abraham", name: "El Pacto", year: "~2100 a.C.", description: "Dios llama a Abraham." },
      { id: "exodus", name: "El Éxodo", year: "~1446 a.C.", description: "Liberación de Egipto." },
    ],
    books: [
      { id: "gen", name: "Génesis", testament: "Old", stage: "Pentateuco", theme: "Los Comienzos", fact: "Cubre desde la creación hasta José en Egipto", author: "Moisés", period: "~1400 a.C." },
      { id: "exo", name: "Éxodo", testament: "Old", stage: "Pentateuco", theme: "Redención", fact: "Narra la salida de Egipto", author: "Moisés", period: "~1400 a.C." },
      { id: "lev", name: "Levítico", testament: "Old", stage: "Pentateuco", theme: "Santidad", fact: "Leyes para los levitas y sacerdotes", author: "Moisés", period: "~1400 a.C." },
      { id: "num", name: "Números", testament: "Old", stage: "Pentateuco", theme: "Peregrinaje", fact: "Censo y 40 años en el desierto", author: "Moisés", period: "~1400 a.C." },
      { id: "deu", name: "Deuteronomio", testament: "Old", stage: "Pentateuco", theme: "Renovación", fact: "Repetición de la ley antes de entrar a Canaán", author: "Moisés", period: "~1400 a.C." },
    ],
  },
  // 2. HISTÓRICOS (Pre-Exilio)
  {
    id: "historical-1",
    name: "Históricos: Conquista y Reino",
    description: "La conquista, los jueces y la monarquía unida",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
    themeColor: "blue",
    events: [
      { id: "conquest", name: "Conquista", year: "~1400 a.C.", description: "Josué lidera la entrada a la tierra prometida." },
      { id: "kings", name: "Reyes", year: "~1050 a.C.", description: "Saúl, David y Salomón." },
    ],
    books: [
      { id: "jos", name: "Josué", testament: "Old", stage: "Históricos", theme: "Conquista", fact: "Caída de Jericó", author: "Josué", period: "~1350 a.C." },
      { id: "jue", name: "Jueces", testament: "Old", stage: "Históricos", theme: "Ciclos", fact: "Líderes militares rescatan a Israel", author: "Samuel", period: "~1000 a.C." },
      { id: "rut", name: "Rut", testament: "Old", stage: "Históricos", theme: "Redención", fact: "Bisabuela del rey David", author: "Samuel", period: "~1000 a.C." },
      { id: "1sam", name: "1 Samuel", testament: "Old", stage: "Históricos", theme: "Transición", fact: "De jueces a reyes", author: "Samuel/Natán/Gad", period: "~900 a.C." },
      { id: "2sam", name: "2 Samuel", testament: "Old", stage: "Históricos", theme: "Reinado de David", fact: "Establecimiento del pacto davídico", author: "Natán/Gad", period: "~900 a.C." },
      { id: "1re", name: "1 Reyes", testament: "Old", stage: "Históricos", theme: "División", fact: "Salomón y la división del reino", author: "Jeremías", period: "~550 a.C." },
      { id: "2re", name: "2 Reyes", testament: "Old", stage: "Históricos", theme: "Cautiverio", fact: "Caída de Israel y Judá", author: "Jeremías", period: "~550 a.C." },
      { id: "1cro", name: "1 Crónicas", testament: "Old", stage: "Históricos", theme: "Historia Pacto", fact: "Genealogías y reinado de David", author: "Esdras", period: "~450 a.C." },
      { id: "2cro", name: "2 Crónicas", testament: "Old", stage: "Históricos", theme: "Templo", fact: "Historia de los reyes de Judá", author: "Esdras", period: "~450 a.C." },
    ],
  },
  // 3. HISTÓRICOS (Post-Exilio)
  {
    id: "historical-2",
    name: "Históricos: Retorno",
    description: "El regreso del exilio y la reconstrucción",
    color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200",
    themeColor: "cyan",
    events: [
      { id: "return", name: "Decreto de Ciro", year: "538 a.C.", description: "Permiso para regresar a Jerusalén." },
      { id: "walls", name: "Muros", year: "445 a.C.", description: "Nehemías reconstruye los muros." },
    ],
    books: [
      { id: "esd", name: "Esdras", testament: "Old", stage: "Históricos", theme: "Restauración", fact: "Reconstrucción del templo", author: "Esdras", period: "~450 a.C." },
      { id: "neh", name: "Nehemías", testament: "Old", stage: "Históricos", theme: "Reconstrucción", fact: "Reconstrucción de los muros", author: "Nehemías", period: "~425 a.C." },
      { id: "est", name: "Ester", testament: "Old", stage: "Históricos", theme: "Providencia", fact: "Salvación de los judíos en Persia", author: "Desconocido", period: "~465 a.C." },
    ],
  },
  // 4. POESÍA Y SABIDURÍA
  {
    id: "poetry",
    name: "Poesía y Sabiduría",
    description: "El corazón humano ante Dios",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
    themeColor: "purple",
    books: [
      { id: "job", name: "Job", testament: "Old", stage: "Poesía", theme: "Sufrimiento", fact: "¿Por qué sufren los justos?", author: "Desconocido", period: "Patriarcal" },
      { id: "sal", name: "Salmos", testament: "Old", stage: "Poesía", theme: "Adoración", fact: "Himnario de Israel", author: "David y otros", period: "1000-400 a.C." },
      { id: "pro", name: "Proverbios", testament: "Old", stage: "Poesía", theme: "Sabiduría", fact: "Consejos prácticos para la vida", author: "Salomón y otros", period: "~950 a.C." },
      { id: "ecl", name: "Eclesiastés", testament: "Old", stage: "Poesía", theme: "Vanidad", fact: "El sentido de la vida sin Dios", author: "Salomón", period: "~935 a.C." },
      { id: "cnt", name: "Cantares", testament: "Old", stage: "Poesía", theme: "Amor", fact: "Poema sobre el amor matrimonial", author: "Salomón", period: "~965 a.C." },
    ],
  },
  // 5. PROFETAS MAYORES
  {
    id: "major-prophets",
    name: "Profetas Mayores",
    description: "Grandes mensajes de juicio y esperanza",
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200",
    themeColor: "indigo",
    books: [
      { id: "isa", name: "Isaías", testament: "Old", stage: "Profetas", theme: "Salvación", fact: "Profecías mesiánicas detalladas", author: "Isaías", period: "~740 a.C." },
      { id: "jer", name: "Jeremías", testament: "Old", stage: "Profetas", theme: "Juicio", fact: "El profeta llorón", author: "Jeremías", period: "~627 a.C." },
      { id: "lam", name: "Lamentaciones", testament: "Old", stage: "Profetas", theme: "Dolo", fact: "Lamento por Jerusalén", author: "Jeremías", period: "~586 a.C." },
      { id: "eze", name: "Ezequiel", testament: "Old", stage: "Profetas", theme: "Gloria", fact: "Visiones de la gloria de Dios", author: "Ezequiel", period: "~593 a.C." },
      { id: "dan", name: "Daniel", testament: "Old", stage: "Profetas", theme: "Soberanía", fact: "Historia y profecía apocalíptica", author: "Daniel", period: "~605 a.C." },
    ],
  },
  // 6. PROFETAS MENORES
  {
    id: "minor-prophets",
    name: "Profetas Menores",
    description: "Mensajes breves pero poderosos",
    color: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-200",
    themeColor: "violet",
    books: [
      { id: "ose", name: "Oseas", testament: "Old", stage: "Profetas", theme: "Amor Fiel", fact: "Matrimonio con una mujer infiel", author: "Oseas", period: "~750 a.C." },
      { id: "joe", name: "Joel", testament: "Old", stage: "Profetas", theme: "Día del Señor", fact: "Plaga de langostas", author: "Joel", period: "~835 a.C." },
      { id: "amo", name: "Amós", testament: "Old", stage: "Profetas", theme: "Justicia", fact: "Juicio a las naciones vecinas", author: "Amós", period: "~760 a.C." },
      { id: "abd", name: "Abdías", testament: "Old", stage: "Profetas", theme: "Edom", fact: "Libro más corto del AT", author: "Abdías", period: "~840 a.C." },
      { id: "jon", name: "Jonás", testament: "Old", stage: "Profetas", theme: "Misericordia", fact: "Tragado por un gran pez", author: "Jonás", period: "~760 a.C." },
      { id: "miq", name: "Miqueas", testament: "Old", stage: "Profetas", theme: "Reino", fact: "Profecía del nacimiento en Belén", author: "Miqueas", period: "~735 a.C." },
      { id: "nah", name: "Nahúm", testament: "Old", stage: "Profetas", theme: "Nínive", fact: "Juicio sobre Asiria", author: "Nahúm", period: "~660 a.C." },
      { id: "hab", name: "Habacuc", testament: "Old", stage: "Profetas", theme: "Fe", fact: "El justo por la fe vivirá", author: "Habacuc", period: "~607 a.C." },
      { id: "sof", name: "Sofonías", testament: "Old", stage: "Profetas", theme: "Día de Ira", fact: "Juicio universal", author: "Sofonías", period: "~640 a.C." },
      { id: "hag", name: "Hageo", testament: "Old", stage: "Profetas", theme: "Prioridades", fact: "Reconstrucción del templo", author: "Hageo", period: "520 a.C." },
      { id: "zac", name: "Zacarías", testament: "Old", stage: "Profetas", theme: "Mesías", fact: "Visiones apocalípticas", author: "Zacarías", period: "520 a.C." },
      { id: "mal", name: "Malaquías", testament: "Old", stage: "Profetas", theme: "Mensajero", fact: "Último profeta del AT", author: "Malaquías", period: "~430 a.C." },
    ],
  },
  // 7. EVANGELIOS
  {
    id: "gospels",
    name: "Evangelios",
    description: "La vida, muerte y resurrección de Jesús",
    color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200",
    themeColor: "red",
    events: [
      { id: "birth", name: "Nacimiento", year: "~4 a.C.", description: "Belén." },
      { id: "cross", name: "Crucifixión", year: "~33 d.C.", description: "Jerusalén." },
    ],
    books: [
      { id: "mat", name: "Mateo", testament: "New", stage: "Evangelios", theme: "Rey", fact: "Para judíos", author: "Mateo", period: "50-60 d.C." },
      { id: "mar", name: "Marcos", testament: "New", stage: "Evangelios", theme: "Siervo", fact: "Acción rápida", author: "Marcos", period: "50-60 d.C." },
      { id: "luc", name: "Lucas", testament: "New", stage: "Evangelios", theme: "Hombre", fact: "Detallado y cronológico", author: "Lucas", period: "60 d.C." },
      { id: "jua", name: "Juan", testament: "New", stage: "Evangelios", theme: "Dios", fact: "Teológico y espiritual", author: "Juan", period: "90 d.C." },
    ],
  },
  // 8. HISTORIA (Iglesia Primitiva)
  {
    id: "acts",
    name: "Historia: La Iglesia",
    description: "El nacimiento y expansión de la iglesia",
    color: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200",
    themeColor: "rose",
    books: [
      { id: "hec", name: "Hechos", testament: "New", stage: "Historia", theme: "Espíritu Santo", fact: "Expansión del evangelio", author: "Lucas", period: "60-62 d.C." },
    ],
  },
  // 9. CARTAS PAULINAS (Iglesias)
  {
    id: "pauline-church",
    name: "Cartas a Iglesias",
    description: "Doctrina y corrección para las congregaciones",
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
    themeColor: "green",
    books: [
      { id: "rom", name: "Romanos", testament: "New", stage: "Cartas", theme: "Justicia", fact: "Magna Carta del evangelio", author: "Pablo", period: "57 d.C." },
      { id: "1cor", name: "1 Corintios", testament: "New", stage: "Cartas", theme: "Conducta", fact: "Problemas en la iglesia", author: "Pablo", period: "55 d.C." },
      { id: "2cor", name: "2 Corintios", testament: "New", stage: "Cartas", theme: "Ministerio", fact: "Defensa del apostolado", author: "Pablo", period: "56 d.C." },
      { id: "gal", name: "Gálatas", testament: "New", stage: "Cartas", theme: "Libertad", fact: "Contra el legalismo", author: "Pablo", period: "49 d.C." },
      { id: "efe", name: "Efesios", testament: "New", stage: "Cartas", theme: "Unidad", fact: "Armadura de Dios", author: "Pablo", period: "60 d.C." },
      { id: "fil", name: "Filipenses", testament: "New", stage: "Cartas", theme: "Gozo", fact: "Carta de la alegría", author: "Pablo", period: "61 d.C." },
      { id: "col", name: "Colosenses", testament: "New", stage: "Cartas", theme: "Supremacía", fact: "Plenitud de Cristo", author: "Pablo", period: "60 d.C." },
      { id: "1tes", name: "1 Tesalonicenses", testament: "New", stage: "Cartas", theme: "Retorno", fact: "Segunda venida", author: "Pablo", period: "51 d.C." },
      { id: "2tes", name: "2 Tesalonicenses", testament: "New", stage: "Cartas", theme: "Anticristo", fact: "Eventos finales", author: "Pablo", period: "51 d.C." },
    ],
  },
  // 10. CARTAS PAULINAS (Pastorales y Personales)
  {
    id: "pauline-pastoral",
    name: "Cartas Pastorales",
    description: "Instrucciones a líderes y amigos",
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200",
    themeColor: "emerald",
    books: [
      { id: "1tim", name: "1 Timoteo", testament: "New", stage: "Cartas", theme: "Liderazgo", fact: "Instrucciones pastorales", author: "Pablo", period: "62 d.C." },
      { id: "2tim", name: "2 Timoteo", testament: "New", stage: "Cartas", theme: "Fidelidad", fact: "Última carta de Pablo", author: "Pablo", period: "67 d.C." },
      { id: "tit", name: "Tito", testament: "New", stage: "Cartas", theme: "Conducta", fact: "Orden en la iglesia", author: "Pablo", period: "63 d.C." },
      { id: "flm", name: "Filemón", testament: "New", stage: "Cartas", theme: "Perdón", fact: "Sobre un esclavo fugitivo", author: "Pablo", period: "60 d.C." },
    ],
  },
  // 11. CARTAS GENERALES
  {
    id: "general-epistles",
    name: "Cartas Generales",
    description: "Para la iglesia universal",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-200",
    themeColor: "teal",
    books: [
      { id: "heb", name: "Hebreos", testament: "New", stage: "Cartas", theme: "Superioridad", fact: "Cristo es mejor", author: "Desconocido", period: "68 d.C." },
      { id: "san", name: "Santiago", testament: "New", stage: "Cartas", theme: "Fe Viva", fact: "La fe sin obras es muerta", author: "Santiago", period: "45 d.C." },
      { id: "1ped", name: "1 Pedro", testament: "New", stage: "Cartas", theme: "Esperanza", fact: "Sufrimiento cristiano", author: "Pedro", period: "64 d.C." },
      { id: "2ped", name: "2 Pedro", testament: "New", stage: "Cartas", theme: "Conocimiento", fact: "Advertencia contra falsos maestros", author: "Pedro", period: "66 d.C." },
      { id: "1jua", name: "1 Juan", testament: "New", stage: "Cartas", theme: "Comunión", fact: "Dios es amor", author: "Juan", period: "90 d.C." },
      { id: "2jua", name: "2 Juan", testament: "New", stage: "Cartas", theme: "Verdad", fact: "Andar en la verdad", author: "Juan", period: "90 d.C." },
      { id: "3jua", name: "3 Juan", testament: "New", stage: "Cartas", theme: "Hospitalidad", fact: "Apoyo a misioneros", author: "Juan", period: "90 d.C." },
      { id: "jud", name: "Judas", testament: "New", stage: "Cartas", theme: "Apostasía", fact: "Contender por la fe", author: "Judas", period: "65 d.C." },
    ],
  },
  // 12. APOCALIPSIS
  {
    id: "apocalyptic",
    name: "Profecía Final",
    description: "El triunfo final de Cristo",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
    themeColor: "yellow",
    events: [
      { id: "return", name: "Segunda Venida", year: "Futuro", description: "Rey de Reyes." },
    ],
    books: [
      { id: "apo", name: "Apocalipsis", testament: "New", stage: "Profecía", theme: "Victoria", fact: "Revelación final", author: "Juan", period: "95 d.C." },
    ],
  },
];
