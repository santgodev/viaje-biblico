export interface Book {
  id: string;
  name: string;
  testament: 'Old' | 'New';
  stage: string;
  theme: string;
  description: string;
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

export interface Character {
  id: string;
  name: string;
  role: string;
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
  mainCharacters?: Character[];
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
    mainCharacters: [
      { id: "adam", name: "Adán", role: "Primer Hombre", description: "Cabeza de la humanidad y primer habitante del Edén." },
      { id: "noah", name: "Noé", role: "Preservador", description: "Constructor del arca que salvó la vida del diluvio." },
      { id: "abraham", name: "Abraham", role: "Padre de la Fe", description: "Iniciador del pacto y ancestro del pueblo elegido." },
      { id: "moses", name: "Moisés", role: "Libertador", description: "Lideró el éxodo y recibió la Ley en el Sinaí." },
    ],
    books: [
      {
        id: "gen",
        name: "Génesis",
        testament: "Old",
        stage: "Pentateuco",
        theme: "Los Comienzos",
        description: "El lienzo donde se pintan los orígenes del cosmos, la caída de la humanidad y el nacimiento de una promesa que cambiaría el curso de la historia a través de una familia elegida.",
        fact: "Tablillas de arcilla descubiertas en Nuzi y Mari (Irak) confirman costumbres sociales y legales descritas solo en este libro, como el derecho de primogenitura.",
        author: "Moisés",
        period: "~1400 a.C."
      },
      {
        id: "exo",
        name: "Éxodo",
        testament: "Old",
        stage: "Pentateuco",
        theme: "Redención",
        description: "La épica epopeya de liberación donde un pueblo de esclavos atraviesa el mar para encontrarse con su Dios en un desierto ardiente, recibiendo una ley que los definiría como nación.",
        fact: "El Papiro de Ipuwer, un antiguo texto egipcio, describe desastres naturales y caos social que guardan un paralelismo asombroso con las diez plagas.",
        author: "Moisés",
        period: "~1400 a.C."
      },
      {
        id: "lev",
        name: "Levítico",
        testament: "Old",
        stage: "Pentateuco",
        theme: "Santidad",
        description: "Un manual de proximidad divina que detalla cómo un pueblo imperfecto puede habitar con un Dios perfecto a través de rituales, leyes de pureza y justicia social.",
        fact: "Las leyes de higiene y cuarentena aquí descritas eran milenios más avanzadas que la medicina de su tiempo, previniendo epidemias que asolaron a otros pueblos.",
        author: "Moisés",
        period: "~1400 a.C."
      },
      {
        id: "num",
        name: "Números",
        testament: "Old",
        stage: "Pentateuco",
        theme: "Peregrinaje",
        description: "La crónica de una generación que camina en círculos por el desierto, luchando entre la queja y el asombro mientras aprenden que la fidelidad es el único camino a la libertad.",
        fact: "El amuleto de Ketef Hinnom contiene la 'Bendición Sacerdotal' de Números 6, siendo el texto bíblico más antiguo jamás hallado (siglo VII a.C.).",
        author: "Moisés",
        period: "~1400 a.C."
      },
      {
        id: "deu",
        name: "Deuteronomio", testament: "Old", stage: "Pentateuco", theme: "Renovación",
        description: "El apasionado discurso final de Moisés antes de cruzar el Jordán; una llamada urgente a recordar, amar y elegir la vida en la nueva tierra que los espera.",
        fact: "Su estructura literaria sigue exactamente el formato de los tratados de soberanía del antiguo Cercano Oriente, estableciendo un pacto legal entre Dios y su pueblo.",
        author: "Moisés", period: "~1400 a.C."
      },
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
    mainCharacters: [
      { id: "joshua", name: "Josué", role: "Conquistador", description: "Sucesor de Moisés que guió a Israel a Canaán." },
      { id: "samuel", name: "Samuel", role: "Profeta y Juez", description: "Último juez que ungió a los primeros reyes." },
      { id: "david", name: "David", role: "Rey Pastor", description: "El hombre conforme al corazón de Dios y autor de salmos." },
      { id: "solomon", name: "Salomón", role: "Rey Sabio", description: "Constructor del primer Templo de Jerusalén." },
    ],
    books: [
      {
        id: "jos", name: "Josué", testament: "Old", stage: "Históricos", theme: "Conquista",
        description: "El relato militar y espiritual de la entrada a Canaán, donde la fe derriba murallas y el liderazgo de Josué guía a Israel a heredar la tierra de sus antepasados.",
        fact: "Excavaciones en Jericó han revelado murallas que parecen haber caído hacia afuera, creando rampas para los invasores, coincidiendo con el relato.",
        author: "Josué", period: "~1350 a.C."
      },
      {
        id: "jue", name: "Jueces", testament: "Old", stage: "Históricos", theme: "Ciclos",
        description: "Una era oscura de anarquía y rescates heroicos; un recordatorio cíclico de que cuando cada uno hace lo que le parece bien, el caos solo se detiene con un libertador.",
        fact: "Gedeón, uno de los jueces, tuvo 70 hijos, una cifra que destaca el caos y la poligamia de una era donde la estructura familiar era muy distinta.",
        author: "Samuel", period: "~1000 a.C."
      },
      {
        id: "rut", name: "Rut", testament: "Old", stage: "Históricos", theme: "Redención",
        description: "Una pequeña joya literaria sobre la lealtad de una extranjera en tiempos de hambre, cuya bondad la inserta en el linaje real del mayor rey de Israel.",
        fact: "El libro es único por su enfoque en la vida cotidiana y el estatus legal de las mujeres viudas en el antiguo Israel, preservando costumbres de espigueo.",
        author: "Samuel", period: "~1000 a.C."
      },
      {
        id: "1sam", name: "1 Samuel", testament: "Old", stage: "Históricos", theme: "Transición",
        description: "El surgimiento de la monarquía; el choque entre el último de los jueces y el primer rey elegido por el pueblo, en medio de la transición del teocracia al reino.",
        fact: "La inscripción de Tel Dan contiene la referencia extrabíblica más antigua a la 'Casa de David', confirmando la historicidad de la dinastía.",
        author: "Samuel/Natán/Gad", period: "~900 a.C."
      },
      {
        id: "2sam", name: "2 Samuel", testament: "Old", stage: "Históricos", theme: "Reinado de David",
        description: "La biografía íntima y política del rey David; desde su ascenso al trono y la unificación de las tribus hasta sus errores más profundos y su arrepentimiento.",
        fact: "Se mencionan los intrincados sistemas de suministro de agua de Jerusalén (Tsinnor), los cuales han sido descubiertos y mapeados por arqueólogos modernos.",
        author: "Natán/Gad", period: "~900 a.C."
      },
      {
        id: "1re", name: "1 Reyes", testament: "Old", stage: "Históricos", theme: "División",
        description: "La era dorada de Salomón y el trágico desgarro del reino en dos facciones, iniciando un largo camino de idolatría y advertencias proféticas.",
        fact: "Las 'Caballerizas de Salomón' en Meguido muestran la inmensa infraestructura militar descrita en este libro, confirmando su poder logístico.",
        author: "Jeremías", period: "~550 a.C."
      },
      {
        id: "2re", name: "2 Reyes", testament: "Old", stage: "Históricos", theme: "Cautiverio",
        description: "El declive final de las naciones hermanas hacia el exilio; una crónica de reyes, milagros de profetas como Eliseo y el eventual silencio en Babilonia.",
        fact: "El Prisma de Senaquerib describe el asedio a Jerusalén mencionando al rey Ezequías 'como un pájaro en una jaula', tal como narra el texto bíblico.",
        author: "Jeremías", period: "~550 a.C."
      },
      {
        id: "1cro", name: "1 Crónicas", testament: "Old", stage: "Históricos", theme: "Historia Pacto",
        description: "Una recapitulación sagrada del linaje de David, enfocada en la preparación espiritual y la organización del culto en el templo como centro de la identidad nacional.",
        fact: "Comienza con las genealogías más extensas de la antigüedad, trazando la historia humana desde Adán para dar continuidad a los exiliados retornados.",
        author: "Esdras", period: "~450 a.C."
      },
      {
        id: "2cro", name: "2 Crónicas", testament: "Old", stage: "Históricos", theme: "Templo",
        description: "La historia de los reyes de Judá a través del lente del Templo de Jerusalén: cuando el rey buscaba a Dios había prosperidad, cuando lo olvidaba, ruina.",
        fact: "Documenta la reforma del rey Josías, cuyo hallazgo del 'Libro de la Ley' durante una limpieza del templo cambió el destino espiritual de la nación.",
        author: "Esdras", period: "~450 a.C."
      },
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
    mainCharacters: [
      { id: "ezra", name: "Esdras", role: "Escriba", description: "Líder espiritual que restauró el estudio de la Ley." },
      { id: "nehemiah", name: "Nehemías", role: "Gobernador", description: "Lideró la reconstrucción de los muros de Jerusalén." },
      { id: "esther", name: "Ester", role: "Reina", description: "Salvó a su pueblo de una masacre en el Imperio Persa." },
    ],
    books: [
      {
        id: "esd", name: "Esdras", testament: "Old", stage: "Históricos", theme: "Restauración",
        description: "La crónica del retorno físico y espiritual de los exiliados a Jerusalén; la reconstrucción del Templo y el redescubrimiento de la identidad a través de la Palabra.",
        fact: "El Cilindro de Ciro, un artefacto persa, confirma la política de liberar a los pueblos exiliados para que regresaran y reconstruyeran sus santuarios, tal como narra Esdras.",
        author: "Esdras", period: "~450 a.C."
      },
      {
        id: "neh", name: "Nehemías", testament: "Old", stage: "Históricos", theme: "Reconstrucción",
        description: "Una lección magistral de liderazgo y oración en acción; Nehemías guía al pueblo a reconstruir las murallas de Jerusalén en tiempo récord bajo una presión constante.",
        fact: "Se mencionan detalles topográficos tan precisos de las puertas y muros que han permitido a los arqueólogos identificar tramos exactos de la muralla de la época persa.",
        author: "Nehemías", period: "~425 a.C."
      },
      {
        id: "est", name: "Ester", testament: "Old", stage: "Históricos", theme: "Providencia",
        description: "Un drama de intriga palaciega en el corazón del Imperio Persa, donde el silencio de Dios es el velo de Su providencia, salvando a Su pueblo a través de una reina valiente.",
        fact: "Es el único libro de la Biblia donde no se menciona explícitamente el nombre de 'Dios', enfatizando Su presencia invisible en los eventos humanos.",
        author: "Desconocido", period: "~465 a.C."
      },
    ],
  },
  // 4. POESÍA Y SABIDURÍA
  {
    id: "poetry",
    name: "Poesía y Sabiduría",
    description: "El corazón humano ante Dios",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
    themeColor: "purple",
    mainCharacters: [
      { id: "job", name: "Job", role: "Patriarca", description: "Símbolo de la paciencia y fidelidad en medio del sufrimiento extremo." },
      { id: "david_poet", name: "David", role: "Salmista", description: "Compositor de la mayoría de los Salmos y el 'dulce cantor de Israel'." },
      { id: "solomon_poet", name: "Salomón", role: "Sabio", description: "Autor de Proverbios, Eclesiastés y Cantares; el hombre más sabio." },
    ],
    books: [
      {
        id: "job", name: "Job", testament: "Old", stage: "Poesía", theme: "Soberanía y Sufrimiento",
        description: "Un debate cósmico sobre el misterio del dolor humano y la justicia divina; Job busca respuestas en el polvo solo para encontrarse con la majestuosidad de un Dios que trasciende la lógica.",
        fact: "Muchos estudiosos lo consideran el libro más antiguo de la Biblia, con descripciones de criaturas como el Behemot que desafían las clasificaciones zoológicas modernas.",
        author: "Desconocido", period: "Patriarcal"
      },
      {
        id: "sal", name: "Salmos", testament: "Old", stage: "Poesía", theme: "Adoración",
        description: "El latido emocional de Israel; un himnario que captura toda la gama del alma humana, desde el grito de agonía hasta el éxtasis de la alabanza.",
        fact: "El Salmo 119 es el capítulo más largo de toda la Biblia y es un acróstico alfabético perfecto, donde cada sección comienza con una letra del alfabeto hebreo.",
        author: "David y otros", period: "1000-400 a.C."
      },
      {
        id: "pro", name: "Proverbios", testament: "Old", stage: "Poesía", theme: "Sabiduría Práctica",
        description: "Una colección de destellos de inteligencia divina para la vida cotidiana; consejos que invitan a caminar por el sendero de la rectitud y el temor de Dios en los detalles comunes.",
        fact: "La personificación de la Sabiduría como una mujer que clama en las calles era una técnica literaria revolucionaria que influyó en toda la literatura sapiencial posterior.",
        author: "Salomón y otros", period: "~950 a.C."
      },
      {
        id: "ecl", name: "Eclesiastés", testament: "Old", stage: "Poesía", theme: "Búsqueda de Sentido",
        description: "La honesta y melancólica reflexión de un sabio que ha probado todo 'bajo el sol' y concluye que sin Dios, todo es una neblina pasajera.",
        fact: "La palabra hebrea 'Hevel' (vanidad) se repite 38 veces, evocando la imagen de un aliento o vapor que desaparece al intentar atraparlo.",
        author: "Salomón", period: "~935 a.C."
      },
      {
        id: "cnt", name: "Cantares", testament: "Old", stage: "Poesía", theme: "Amor y Pasión",
        description: "Un poema erótico y sagrado que celebra la belleza del amor romántico y la fidelidad matrimonial como un reflejo del afecto de Dios por Su pueblo.",
        fact: "Fue uno de los libros más debatidos para entrar en el canon bíblico debido a su lenguaje sensual, pero se aceptó por su profunda interpretación alegórica.",
        author: "Salomón", period: "~965 a.C."
      },
    ],
  },
  // 5. PROFETAS MAYORES
  {
    id: "major-prophets",
    name: "Profetas Mayores",
    description: "Grandes mensajes de juicio y esperanza",
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200",
    themeColor: "indigo",
    mainCharacters: [
      { id: "isaiah", name: "Isaías", role: "Profeta Mesiánico", description: "Vio la gloria de Dios y profetizó detalladamente sobre el Mesías." },
      { id: "jeremiah", name: "Jeremías", role: "Profeta Llorón", description: "Anunció el Nuevo Pacto mientras sufría por la caída de Jerusalén." },
      { id: "ezekiel", name: "Ezequiel", role: "Vidente", description: "Vio visiones de la gloria de Dios y el valle de los huesos secos." },
      { id: "daniel", name: "Daniel", role: "Estadista", description: "Fiel a Dios en Babilonia; recibió revelaciones apocalípticas." },
    ],
    books: [
      {
        id: "isa", name: "Isaías", testament: "Old", stage: "Profetas", theme: "Santidad y Salvación",
        description: "La 'quinta esencia' de la profecía; visiones de juicio sobre la injusticia seguidas de las más bellas promesas sobre un Siervo Sufriente que redimiría al mundo.",
        fact: "El descubrimiento de los Rollos del Mar Muerto incluyó un pergamino casi perfecto de Isaías de mil años antes de los manuscritos conocidos, confirmando su asombrosa exactitud.",
        author: "Isaías", period: "~740 a.C."
      },
      {
        id: "jer", name: "Jeremías", testament: "Old", stage: "Profetas", theme: "El Nuevo Pacto",
        description: "El lamento apasionado de un profeta que vio caer a Jerusalén, pero que anunció que Dios escribiría Su ley directamente en los corazones humanos.",
        fact: "Se han encontrado sellos de arcilla (bullae) con el nombre de Baruc, el escriba de Jeremías mencionado en el libro, autenticando su entorno histórico.",
        author: "Jeremías", period: "~627 a.C."
      },
      {
        id: "lam", name: "Lamentaciones", testament: "Old", stage: "Profetas", theme: "Dolor y Esperanza",
        description: "Un acróstico de lágrimas sobre las ruinas de Jerusalén, donde en medio de las cenizas se alza la confesión de que las misericordias de Dios son nuevas cada mañana.",
        fact: "Utiliza un ritmo poético especial llamado 'Qiná', una cadencia lúgubre que obligaba al lector a sentir el peso del duelo nacional por la caída del templo.",
        author: "Jeremías", period: "~586 a.C."
      },
      {
        id: "eze", name: "Ezequiel", testament: "Old", stage: "Profetas", theme: "Gloria y Restauración",
        description: "Visiones surrealistas y acciones simbólicas impactantes; Ezequiel anuncia que la gloria de Dios puede habitar incluso en el exilio y dar vida a esqueletos secos.",
        fact: "Describe con precisión arquitectónica el futuro templo, usando medidas que han fascinado a historiadores por su complejidad simbólica y geométrica.",
        author: "Ezequiel", period: "~593 a.C."
      },
      {
        id: "dan", name: "Daniel", testament: "Old", stage: "Profetas", theme: "Soberanía Cósmica",
        description: "Crónicas de lealtad en la corte de Babilonia y visiones apocalípticas que revelan que el Reino de Dios prevalecerá sobre todos los imperios de la tierra.",
        fact: "Fue escrito en dos idiomas: hebreo y arameo, reflejando su doble naturaleza como registro histórico y mensaje para las naciones gentiles.",
        author: "Daniel", period: "~605 a.C."
      },
    ],
  },
  // 6. PROFETAS MENORES
  {
    id: "minor-prophets",
    name: "Profetas Menores",
    description: "Mensajes breves pero poderosos",
    color: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-200",
    themeColor: "violet",
    mainCharacters: [
      { id: "hosea", name: "Oseas", role: "Profeta del Amor", description: "Su matrimonio simbolizó el amor de Dios por Su pueblo infiel." },
      { id: "jonah", name: "Jonás", role: "Misionero renuente", description: "Enviado a Nínive tras ser tragado por un gran pez." },
      { id: "amos", name: "Amós", role: "Pastor de Tecoa", description: "Clamó por justicia social y rectitud en Israel." },
    ],
    books: [
      {
        id: "ose", name: "Oseas", testament: "Old", stage: "Profetas", theme: "Amor Incondicional",
        description: "Una parábola viviente y dolorosa; Dios ordena a Oseas casarse con una mujer infiel para ilustrar Su propio amor implacable hacia un Israel espiritual adúltero.",
        fact: "El nombre 'Oseas' significa 'Salvación', la misma raíz que Josué y Jesús, apuntando al tema central de la redención divina a pesar del dolor.",
        author: "Oseas", period: "~750 a.C."
      },
      {
        id: "joe", name: "Joel", testament: "Old", stage: "Profetas", theme: "El Día del Señor",
        description: "Una plaga de langostas se convierte en la señal de un juicio cósmico inminente, pero también en la promesa del derramamiento final del Espíritu sobre toda carne.",
        fact: "Es uno de los pocos libros proféticos que no menciona pecados específicos de Israel, enfocándose más bien en la respuesta litúrgica de ayuno y arrepentimiento.",
        author: "Joel", period: "~835 a.C."
      },
      {
        id: "amo", name: "Amós", testament: "Old", stage: "Profetas", theme: "Justicia Social",
        description: "El rugido de un pastor contra la opulencia indiferente; Amós denuncia que la verdadera religión es inseparable de la justicia para los pobres y marginados.",
        fact: "Introduce el concepto del 'Día del Señor' como un día de oscuridad para aquellos que confían en rituales vacíos en lugar de en una vida íntegra.",
        author: "Amós", period: "~760 a.C."
      },
      {
        id: "abd", name: "Abdías", testament: "Old", stage: "Profetas", theme: "Juicio sobre Edom",
        description: "Una breve pero intensa condena contra la soberbia de Edom, castigada por su traición a sus hermanos en el momento de su mayor angustia.",
        fact: "Con solo 21 versículos, es el libro más corto del Antiguo Testamento, concentrando un mensaje de justicia poética absoluta.",
        author: "Abdías", period: "~840 a.C."
      },
      {
        id: "jon", name: "Jonás", testament: "Old", stage: "Profetas", theme: "Misericordia Universal",
        description: "La renuente odisea de un profeta que huye de la gracia de Dios, solo para descubrir que el amor divino no conoce fronteras, ni siquiera para los enemigos más crueles.",
        fact: "Fue el único profeta del Antiguo Testamento que fue enviado específicamente a una capital pagana (Nínive) y cuya predicción de juicio causó un arrepentimiento nacional.",
        author: "Jonás", period: "~760 a.C."
      },
      {
        id: "miq", name: "Miqueas", testament: "Old", stage: "Profetas", theme: "Reino de Justicia",
        description: "Una síntesis poderosa de la ley y los profetas; Miqueas señala que lo que Dios pide no es sacrificio, sino hacer justicia, amar la misericordia y caminar humildemente.",
        fact: "Contiene la famosa profecía que identifica a Belén Efrata como el lugar de nacimiento del futuro Mesías, siglos antes de que ocurriera.",
        author: "Miqueas", period: "~735 a.C."
      },
      {
        id: "nah", name: "Nahúm", testament: "Old", stage: "Profetas", theme: "Juicio sobre Asiria",
        description: "La contraparte de Jonás; Nahúm celebra la caída de la sangrienta Nínive como una reivindicación de que la maldad extrema no quedará impune para siempre.",
        fact: "Su poesía es considerada una de las más vívidas y dinámicas del Antiguo Testamento, describiendo la caída de una ciudad 'impenetrable' con asombroso realismo.",
        author: "Nahúm", period: "~660 a.C."
      },
      {
        id: "hab", name: "Habacuc", testament: "Old", stage: "Profetas", theme: "Fe en la Crisis",
        description: "Un diálogo íntimo y honesto entre un hombre que duda y un Dios que responde; Habacuc aprende a cantar alabanzas incluso mientras el mundo a su alrededor se derrumba.",
        fact: "La frase 'el justo por su fe vivirá' (Hb 2:4) se convirtió en la chispa teológica que encendió la Reforma Protestante siglos después.",
        author: "Habacuc", period: "~607 a.C."
      },
      {
        id: "sof", name: "Sofonías", testament: "Old", stage: "Profetas", theme: "Limpieza y Remanente",
        description: "Un anuncio de juicio universal que busca purificar a la humanidad, dejando un remanente humilde y pobre que confiará solo en el nombre del Señor.",
        fact: "Termina con una imagen inusual y hermosa: Dios mismo regocijándose sobre Su pueblo con cánticos de alegría.",
        author: "Sofonías", period: "~640 a.C."
      },
      {
        id: "hag", name: "Hageo", testament: "Old", stage: "Profetas", theme: "Prioridades Sagradas",
        description: "Cuatro breves mensajes dirigidos a los exiliados retornados, desafiándolos a dejar de cuidar sus propias casas mientras el Templo de Dios yace en ruinas.",
        fact: "Logró lo que pocos profetas pudieron: el pueblo escuchó su mensaje y comenzó la reconstrucción del templo en apenas 24 días.",
        author: "Hageo", period: "520 a.C."
      },
      {
        id: "zac", name: "Zacarías", testament: "Old", stage: "Profetas", theme: "Visiones Mesiánicas",
        description: "Un tapiz de visiones nocturnas y promesas mesiánicas que hablan de un Rey humilde entrando en un polino y de una fuente abierta para el pecado.",
        fact: "Después de Isaías, es el profeta que contiene más detalles sobre la vida, muerte y ministerio del futuro Mesías.",
        author: "Zacarías", period: "520 a.C."
      },
      {
        id: "mal", name: "Malaquías", testament: "Old", stage: "Profetas", theme: "Amor y Reprensión",
        description: "El último eco del Antiguo Testamento; una serie de disputas entre Dios y Su pueblo apático, cerrando con la promesa de un mensajero que prepararía el camino.",
        fact: "Escrito en un estilo de diálogo o debate socrático, anticipa 400 años de silencio profético hasta la aparición de Juan el Bautista.",
        author: "Malaquías", period: "~430 a.C."
      },
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
    mainCharacters: [
      { id: "jesus", name: "Jesús", role: "Hijo de Dios", description: "El Mesías prometido que vino a redimir al mundo." },
      { id: "john_baptist", name: "Juan el Bautista", role: "Precursor", description: "Preparó el camino del Señor predicando arrepentimiento." },
      { id: "peter", name: "Pedro", role: "Apóstol", description: "Líder natural de los discípulos y 'pescador de hombres'." },
      { id: "mary", name: "María", role: "Madre de Jesús", description: "La mujer elegida para concebir al Salvador por el Espíritu Santo." },
    ],
    books: [
      {
        id: "mat", name: "Mateo", testament: "New", stage: "Evangelios", theme: "Jesús: El Mesías Rey",
        description: "Escrito para demostrar que Jesús es el cumplimiento de todas las promesas del Antiguo Testamento; un puente perfecto entre la antigua ley y el nuevo reino.",
        fact: "Utiliza la frase 'Reino de los Cielos' en lugar de 'Reino de Dios' por respeto a su audiencia judía, evitando el uso directo del nombre sagrado.",
        author: "Mateo", period: "50-60 d.C."
      },
      {
        id: "mar", name: "Marcos", testament: "New", stage: "Evangelios", theme: "Jesús: El Siervo Sufriente",
        description: "El evangelio de la acción rápida; una crónica urgente y dinámica centrada en lo que Jesús hizo, destacando Su poder y Su entrega absoluta por la humanidad.",
        fact: "Es el evangelio más breve y probablemente el primero en ser escrito, sirviendo de base para los relatos de Mateo y Lucas.",
        author: "Marcos", period: "50-60 d.C."
      },
      {
        id: "luc", name: "Lucas", testament: "New", stage: "Evangelios", theme: "Jesús: El Salvador Universal",
        description: "Una biografía meticulosa y compasiva producida por un médico; Lucas destaca el interés de Jesús por los marginados, las mujeres y los extranjeros.",
        fact: "Lucas escribió más del Nuevo Testamento que cualquier otro autor (si sumamos su Evangelio y Hechos), superando incluso al apóstol Pablo.",
        author: "Lucas", period: "60 d.C."
      },
      {
        id: "jua", name: "Juan", testament: "New", stage: "Evangelios", theme: "Jesús: El Hijo de Dios",
        description: "Un relato teológico profundo que trasciende la simple biografía para revelar la identidad eterna de Jesús como el Verbo hecho carne y la Luz del mundo.",
        fact: "Usa siete declaraciones únicas de 'Yo Soy' (Pan, Luz, Puerta, etc.) que evocan directamente el nombre con el que Dios se reveló a Moisés en la zarza ardiente.",
        author: "Juan", period: "90 d.C."
      },
    ],
  },
  // 8. HISTORIA (Iglesia Primitiva)
  {
    id: "acts",
    name: "Historia: La Iglesia",
    description: "El nacimiento y expansión de la iglesia",
    color: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200",
    themeColor: "rose",
    mainCharacters: [
      { id: "paul", name: "Pablo", role: "Apóstol de Gentiles", description: "Convertido camino a Damasco; el mayor misionero de la iglesia." },
      { id: "stephen", name: "Esteban", role: "Primer Mártir", description: "Lleno de gracia y poder; murió perdonando a sus ejecutores." },
      { id: "philip", name: "Felipe", role: "Evangelista", description: "Llevó el mensaje a Samaria y al eunuco etíope." },
    ],
    books: [
      {
        id: "hec", name: "Hechos", testament: "New", stage: "Historia", theme: "La Expansión del Evangelio",
        description: "La explosiva historia de cómo un pequeño grupo de discípulos transformó el Imperio Romano, empoderados por el Espíritu Santo para llevar el mensaje hasta lo último de la tierra.",
        fact: "Es un documento histórico tan preciso que se han verificado nombres de gobernantes locales y rutas marítimas que solo fueron correctas en periodos muy breves de tiempo.",
        author: "Lucas", period: "60-62 d.C."
      },
    ],
  },
  // 9. CARTAS PAULINAS (Iglesias)
  {
    id: "pauline-church",
    name: "Cartas a Iglesias",
    description: "Doctrina y corrección para las congregaciones",
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
    themeColor: "green",
    mainCharacters: [
      { id: "paul_e", name: "Pablo", role: "Apóstol", description: "Autor de estas cartas, escribiendo para fortalecer y corregir a las iglesias." },
      { id: "phoebe", name: "Febe", role: "Diaconisa", description: "Mencionada en Romanos como portadora de la carta y servidora de la iglesia." },
      { id: "priscilla_aquila", name: "Priscila y Aquila", role: "Colaboradores", description: "Pareja que trabajó estrechamente con Pablo en Corinto y Éfeso." },
    ],
    books: [
      {
        id: "rom", name: "Romanos", testament: "New", stage: "Cartas", theme: "La Justicia de Dios",
        description: "La obra maestra teológica de Pablo; un argumento sistemático y vibrante sobre cómo la fe en Cristo nivela el campo de juego para toda la humanidad bajo la gracia.",
        fact: "Se considera la 'Carta Magna' del cristianismo y ha transformado la vida de figuras históricas como Agustín de Hipona, Lutero y Wesley.",
        author: "Pablo", period: "57 d.C."
      },
      {
        id: "1cor", name: "1 Corintios", testament: "New", stage: "Cartas", theme: "Sabiduría y Amor",
        description: "Una respuesta pastoral a una iglesia brillante pero caótica; Pablo aborda divisiones, ética y dones espirituales, culminando en el himno supremo al amor.",
        fact: "Contiene el registro más antiguo de las palabras de la institución de la Cena del Señor, escrito incluso antes que los Evangelios.",
        author: "Pablo", period: "55 d.C."
      },
      {
        id: "2cor", name: "2 Corintios", testament: "New", stage: "Cartas", theme: "Poder en la Debilidad",
        description: "La carta más personal y vulnerable de Pablo; una defensa apasionada de su ministerio que revela que la fuerza de Dios se perfecciona en nuestra fragilidad.",
        fact: "Define el concepto de que el cristiano es una 'nueva criatura' y un 'embajador de Cristo' en un mundo que necesita reconciliación.",
        author: "Pablo", period: "56 d.C."
      },
      {
        id: "gal", name: "Gálatas", testament: "New", stage: "Cartas", theme: "Libertad en Cristo",
        description: "Un grito de batalla contra el legalismo; Pablo defiende fervientemente que la justificación viene solo por la fe y que el Espíritu nos hace verdaderamente libres.",
        fact: "Debido a su tono urgente y directo, es la única carta donde Pablo omite el saludo inicial de acción de gracias por los destinatarios.",
        author: "Pablo", period: "49 d.C."
      },
      {
        id: "efe", name: "Efesios", testament: "New", stage: "Cartas", theme: "El Misterio de la Iglesia",
        description: "Una visión cósmica del plan de Dios para unir todas las cosas en Cristo; describe la identidad del creyente 'en los lugares celestiales' y la armadura para la batalla.",
        fact: "Es conocida como la 'Epístola de la Unidad', enfatizando que el muro de separación entre los pueblos ha sido derribado definitivamente.",
        author: "Pablo", period: "60 d.C."
      },
      {
        id: "fil", name: "Filipenses", testament: "New", stage: "Cartas", theme: "Gozo y Humildad",
        description: "Escrita desde una celda, esta carta desborda una alegría contagiosa; un llamado a tener la misma mente de Cristo, quien se despojó a sí mismo por amor.",
        fact: "Contiene el famoso 'Himno a Cristo' (Fil 2), uno de los fragmentos de adoración teológica más antiguos de la iglesia primitiva.",
        author: "Pablo", period: "61 d.C."
      },
      {
        id: "col", name: "Colosenses", testament: "New", stage: "Cartas", theme: "La Supremacía de Cristo",
        description: "Un antídoto contra las filosofías huecas; Pablo presenta a Jesús como el centro absoluto de la creación y la cabeza de todo poder y autoridad.",
        fact: "Fue escrita al mismo tiempo que Efesios y Filemón, enviada a una ciudad que Pablo nunca había visitado personalmente.",
        author: "Pablo", period: "60 d.C."
      },
      {
        id: "1tes", name: "1 Tesalonicenses", testament: "New", stage: "Cartas", theme: "Esperanza y Santidad",
        description: "Una carta cálida y alentadora para una iglesia joven que enfrenta persecución; Pablo les asegura sobre la venida del Señor y el consuelo para los que han muerto.",
        fact: "Es uno de los escritos cristianos más antiguos que existen, redactado apenas unos 20 años después de la resurrección de Jesús.",
        author: "Pablo", period: "51 d.C."
      },
      {
        id: "2tes", name: "2 Tesalonicenses", testament: "New", stage: "Cartas", theme: "Firmeza en la Espera",
        description: "Aclara confusiones sobre el 'Día del Señor' y exhorta a la comunidad a seguir trabajando con diligencia mientras aguardan el retorno triunfal de Cristo.",
        fact: "Advierte sobre el 'misterio de la iniquidad' y la importancia de no dejarse engañar por falsas alarmas apocalípticas.",
        author: "Pablo", period: "51 d.C."
      },
    ],
  },
  // 10. CARTAS PAULINAS (Pastorales y Personales)
  {
    id: "pauline-pastoral",
    name: "Cartas Pastorales",
    description: "Instrucciones a líderes y amigos",
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200",
    themeColor: "emerald",
    mainCharacters: [
      { id: "timothy", name: "Timoteo", role: "Hijo espiritual", description: "Joven líder a quien Pablo confió el cuidado de la iglesia en Éfeso." },
      { id: "titus", name: "Tito", role: "Compañero", description: "Líder a quien Pablo envió a la difícil misión en la isla de Creta." },
      { id: "philemon", name: "Filemón", role: "Dueño de casa", description: "Colosense a quien Pablo pidió recibir al esclavo Onésimo como hermano." },
    ],
    books: [
      {
        id: "1tim", name: "1 Timoteo", testament: "New", stage: "Cartas", theme: "Orden en la Iglesia",
        description: "Instrucciones prácticas y alentadoras de un mentor a su discípulo para liderar con integridad, proteger la sana doctrina y servir a la comunidad.",
        fact: "Contiene la famosa advertencia de que el amor al dinero (no el dinero en sí) es la raíz de todos los males.",
        author: "Pablo", period: "62 d.C."
      },
      {
        id: "2tim", name: "2 Timoteo", testament: "New", stage: "Cartas", theme: "El Relevo de la Antorcha",
        description: "El testamento emocional de Pablo desde una fría prisión romana; una llamada solemne a no avergonzarse del evangelio y a perseverar hasta el fin.",
        fact: "Es cronológicamente la última carta escrita por Pablo antes de su martirio bajo el emperador Nerón.",
        author: "Pablo", period: "67 d.C."
      },
      {
        id: "tit", name: "Tito", testament: "New", stage: "Cartas", theme: "Gracia y Buenas Obras",
        description: "Breves pero potentes directrices para organizar iglesias en la isla de Creta, enfatizando que la verdadera gracia siempre produce una vida transformada.",
        fact: "Describe la isla de Creta como un entorno cultural difícil, citando incluso a uno de sus propios profetas/poetas (Epiménides).",
        author: "Pablo", period: "63 d.C."
      },
      {
        id: "flm", name: "Filemón", testament: "New", stage: "Cartas", theme: "Reconciliación y Hermandad",
        description: "Una pequeña obra maestra de tacto y amor cristiano; Pablo intercede por un esclavo fugitivo, pidiendo a su amo que lo reciba no como siervo, sino como hermano.",
        fact: "Es un ejemplo radical de cómo el evangelio socavó la estructura de la esclavitud romana desde adentro, mediante la transformación de las relaciones humanas.",
        author: "Pablo", period: "60 d.C."
      },
    ],
  },
  // 11. CARTAS GENERALES
  {
    id: "general-epistles",
    name: "Cartas Generales",
    description: "Para la iglesia universal",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-200",
    themeColor: "teal",
    mainCharacters: [
      { id: "james_author", name: "Santiago", role: "Pilar de la Iglesia", description: "Hermano de Jesús y líder en Jerusalén; autor de la epístola práctica." },
      { id: "peter_author", name: "Pedro", role: "Apóstol", description: "Escribió para animar a los cristianos perseguidos por su fe." },
      { id: "john_author", name: "Juan", role: "El Anciano", description: "Enfatizó el amor y la verdad en sus cartas a la comunidad." },
    ],
    books: [
      {
        id: "heb", name: "Hebreos", testament: "New", stage: "Cartas", theme: "La Superioridad de Cristo",
        description: "Un majestuoso sermón que demuestra cómo Jesús es el cumplimiento final de todo el sistema de sacrificios, siendo nuestro Sumo Sacerdote supremo.",
        fact: "Su autoría sigue siendo uno de los mayores misterios literarios del Nuevo Testamento, aunque su profundidad teológica es indiscutible.",
        author: "Desconocido", period: "68 d.C."
      },
      {
        id: "san", name: "Santiago", testament: "New", stage: "Cartas", theme: "La Fe en Acción",
        description: "Proverbios del Nuevo Testamento; una carta directa que insiste en que la fe real debe manifestarse en el control de la lengua, el cuidado de los pobres y la integridad.",
        fact: "Es probablemente el libro más antiguo del Nuevo Testamento, escrito por Santiago, el hermano de Jesús, antes del concilio de Jerusalén.",
        author: "Santiago", period: "45 d.C."
      },
      {
        id: "1ped", name: "1 Pedro", testament: "New", stage: "Cartas", theme: "Esperanza en el Sufrimiento",
        description: "Consuelo para los 'extranjeros y peregrinos' que enfrentan fuego de prueba, recordándoles su herencia indestructible y el ejemplo de Cristo.",
        fact: "Usa un lenguaje poético rico para describir a los cristianos como 'piedras vivas' que forman un templo espiritual.",
        author: "Pedro", period: "64 d.C."
      },
      {
        id: "2ped", name: "2 Pedro", testament: "New", stage: "Cartas", theme: "Crecimiento y Vigilancia",
        description: "Las últimas palabras de Pedro; una advertencia contra los falsos maestros y un recordatorio de que la paciencia de Dios es para salvación.",
        fact: "Contiene una de las afirmaciones más claras sobre la inspiración divina de las Escrituras: 'los hombres hablaron de parte de Dios impulsados por el Espíritu Santo'.",
        author: "Pedro", period: "66 d.C."
      },
      {
        id: "1jua", name: "1 Juan", testament: "New", stage: "Cartas", theme: "Dios es Luz y Amor",
        description: "Una carta íntima que ofrece seguridad a los creyentes, basada en la realidad de la encarnación y en la prueba del amor mutuo.",
        fact: "Define la esencia de Dios con frases simples pero infinitas: 'Dios es Luz' y 'Dios es Amor'.",
        author: "Juan", period: "90 d.C."
      },
      {
        id: "2jua", name: "2 Juan", testament: "New", stage: "Cartas", theme: "Verdad y Hospitalidad",
        description: "Una breve advertencia contra el apoyo a aquellos que niegan a Cristo, instando a la comunidad a caminar en la verdad con discernimiento.",
        fact: "Es el libro más corto de la Biblia por número de versículos (trece), aunque por recuento de palabras es la Tercera de Juan.",
        author: "Juan", period: "90 d.C."
      },
      {
        id: "3jua", name: "3 Juan", testament: "New", stage: "Cartas", theme: "Fidelidad y Servicio",
        description: "Una nota personal sobre la hospitalidad hacia los misioneros, elogiando a Gayo por su caminar en la verdad y denunciando la ambición de Diótrefes.",
        fact: "Contiene la famosa oración de deseo de que 'seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma'.",
        author: "Juan", period: "90 d.C."
      },
      {
        id: "jud", name: "Judas", testament: "New", stage: "Cartas", theme: "Contender por la Fe",
        description: "Una poderosa y urgente exhortación a proteger el evangelio contra aquellos que intentan pervertir la gracia de Dios en libertinaje.",
        fact: "Cierra con una de las doxologías más solemnes y bellas de toda la Biblia (versículos 24 y 25).",
        author: "Judas", period: "65 d.C."
      },
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
    mainCharacters: [
      { id: "lamb", name: "El Cordero", role: "Rey Triunfante", description: "Jesucristo glorificado, el único digno de abrir los sellos." },
      { id: "john_seer", name: "Juan", role: "El Revelador", description: "Recibió las visiones en la isla de Patmos por el Espíritu." },
    ],
    books: [
      {
        id: "apo", name: "Apocalipsis", testament: "New", stage: "Profecía", theme: "El Triunfo Final",
        description: "La revelación final de Jesucristo; un tapiz visual de asombro y triunfo donde el mal es derrotado para siempre y Dios habita eternamente con Su humanidad recreada.",
        fact: "Es el único libro de la Biblia que promete una bendición especial específicamente para quienes lo leen y escuchan sus palabras.",
        author: "Juan", period: "95 d.C."
      },
    ],
  },
];
