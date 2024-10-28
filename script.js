// Listas de variables de personaje
const edades = ["bebé", "infante", "niño", "adolescente", "adulto joven", "adulto de mediana edad", "anciano"];
const generos = ["Hombre", "Mujer", "No binario"];
const trabajos = ["Jardinero", "skater", "surfista", "gimnasta", "policía", "médico", "granjero", "artista", "escritor", "chef", "carpintero", "ingeniero", "científico", "profesor", "músico", "actor", "piloto", "bombero", "fotógrafo", "mecánico", "electricista", "enfermero", "detective", "soldador", "arqueólogo", "programador", "conductor", "chef pastelero", "terapeuta", "entrenador personal"];
const razas = ["Duende", "hada", "elfo", "humano", "mediano", "ogro", "esfinge", "sirena", "orco", "enano", "tritón", "vampiro", "licántropo", "tiefling", "ángel", "demonio", "kobold", "centauro", "gárgola", "espectro", "arpía", "kitsune", "gnomo", "fénix", "dragón", "naga", "necrófago", "medusa", "selkie", "djinn", "banshee", "goblin", "manticora", "basilisco", "sátiro", "quimera", "leshy", "boggart", "sylphide", "brownie", "minotauro", "fauno", "trol", "yōkai", "tengu", "oni", "valquiria", "wendigo", "gigante", "aarakocra"];
const clases = ["Caballero", "druida", "mago", "brujo", "bárbaro", "monje", "pícaro", "paladín", "bardo", "explorador", "hechicero", "clérigo", "arquero", "alquimista", "psiónico", "cazador de sombras", "chamán", "nigromante", "ilusionista", "elementalista", "succubus"];
const animales = [
    "abeja", "águila", "alce", "armadillo", "araña", "ardilla", "avestruz", "búfalo",
    "búho", "cabra","caballo", "calamar", "camaleón", "cangrejo", "canguro", "caracol", "cebra", "ciempiés",
    "cisne", "ciervo", "colibrí", "cocodrilo", "cuervo", "delfín", "dragón de komodo", "elefante",
    "erizo", "escorpión", "estrella de mar", "foca", "flamenco", "gacela", "gallina", 
    "gato", "gaviota", "gecko", "gorila", "guacamayo", "hipopótamo", "hiena", "hurón", "iguana", "jaguar", "jirafa", 
    "koala", "león", "lemur", "libélula", "lobo", "mapache", "mariposa", "medusa", "mochuelo", "morsa", "mono", "macaco japonés",
    "murciélago", "narval", "nutria", "ornitorrinco", "oso", "oveja", "panda", "panda rojo", "pato", "perezoso", 
    "pingüino", "pulpo", "puma", "rana", "rata","reno", "rinoceronte", "serpiente", "suricata", "tiburón", 
    "topo", "toro","tigre", "tiburón","tucán", "vaca", "zorro", "zariguella"
];

const objetos = [
    "aguja", "tetera", "globo", "muñeca", "maceta", "engranaje", "tijera", 
    "reloj", "botella", "cuchillo", "llave", "mascara", "pincel", "dado", "carta", "sombrero", "bola de estambre", "campana", "lampara"
];
const armas = ["Espada", "ballesta", "pistola", "bazooka", "guadaña", "machete", "puñal", "escudo", "martillo", "lanza", "hacha", "katana", "lanza arponera", "rifle", "ametralladora", "granada", "garrote", "daga", "flecha", "bastón", "cimitarra", "porra", "tridente", "ballesta de mano", "cuchillo", "revólver", "látigo", "clava", "honda", "arpón"];
const ambientes = ["Ciudad", "campo", "mar", "playa", "el espacio", "bosque", "desierto", "montaña", "selva", "cueva", "tundra", "volcán", "pantano", "isla", "jardín", "suburbio", "castillo", "ruinas", "templo", "puerto"];
const personalidades = ["Amable", "valiente", "asustadizo", "curioso", "testarudo", "sarcástico", "alegre", "melancólico", "tímido", "audaz", "perfeccionista", "impulsivo", "ingenioso", "cruel", "inteligente", "tonto", "engreído", "generoso", "frío", "reservado", "optimista", "pesimista", "terco", "orgulloso"];
const esteticas = [
    "2 Tone", "2000s Virtual Singer", "2010s Internet", "2014 Tumblr", 
    "2020s E-Kid", "80s Heartthrob", "90s Cool", "90’s rustic country Americana", 
    "Acidwave", "Afrofuturism", "Alternative", "Americana", 
    "Animecore", "Art Deco", "Art Hoe", "Art Nouveau", 
    "Atompunk", "Baddie", "Barbiecore", "Beatnik", 
    "Bohemian", "Circus","Cyberpunk", "Cybergoth", "Cottage", "Dark Academia", 
    "Disco", "Dieselpunk", "Dreamcore", "Dollcore", "Mod", "E-Girl", "Emo", "Fairy Kei", "Fairycore", 
    "Flapper", "Folk Punk", "Frutiger Aero", "Futurism", 
    "Goth", "Grunge", "Gyaru", "Harajuku Fashion", 
    "Hippie", "Hip-Hop", "Indie", "Kawaii", "Kidcore", 
    "Light Academia", "Lo-Fi", "Lolita", "Mallgoth", 
    "Metal", "Minimalism", "Mod", "Mori Kei", 
    "New Wave", "Normcore", "Nu-Goth", "Old Hollywood", 
    "Otaku", "Pastel Goth", "Punk","Retrofuturism", "Rustic", "Scene", 
    "Steampunk", "Surrealism", "Twee", "Vaporwave", 
    "Vintage", "Visual Kei", "Weirdcore", "Whimsicraft", "Whimsygoth", 
    "Witchcore", "Y2K", "#Carvedwood", "Biopunk","Seashore", "Medieval", "Victorian", "desierto", "#Nautical", "#Playground", "#beach",

];
const poses = [
    "Sentado de frente", "Sentado de lado", "Acostado boca arriba", "Acostado boca abajo", 
    "Hincado", "De pie con los brazos cruzados", "De pie con una mano en la cadera", 
    "De pie con las manos en los bolsillos", "Saltando", "Corriendo", 
    "Caminando relajadamente", "Apoyado en una pared", "Colgando de una barra", 
    "Tumbado de costado", "Estirando los brazos hacia arriba", "Con los brazos abiertos", 
    "De pie con una pierna doblada", "Agachado", "Sosteniendo un objeto en las manos", 
    "Posición de combate", "Bailando", "Haciendo una reverencia", "Aplaudiendo", 
    "Con las manos en la cabeza", "Hincado con una rodilla en el suelo", 
    "Mirando hacia atrás sobre el hombro", "Apoyado en una mesa", "Saltando hacia adelante", 
    "Haciendo una pose heroica", "Sentado con las piernas cruzadas"
];

// Listas de variables para los carteles
const temas = [
  "Obsesión por la tecnología", "Cuidado de mascotas", "Perro de la calle", 
  "Día del Niño", "8M Día de la Mujer", "cambio climático", "Igualdad de género", 
  "Día de la Tierra", "migración", "derechos humanos", "desempleo", 
  "acceso a la educación", "Salud mental", "Día del Orgullo LGBTQ+", 
  "Día de los Muertos", "justicia social", "Día Internacional de la Juventud", 
  "crisis del agua", "trabajo infantil", "Día del Maestro", "voluntariado", 
  "pobreza", "Día Internacional contra el Racismo", "protección del medio ambiente", 
  "Día del Libro", "derechos de los animales", "neurodivergencia" 
];


const colores = [
  "Rodchenko", "Paula Scher", "Isidro Ferrer", "Shigeo Fukuda", "Gronowski", 
  "Saúl Bass", "Moscosso", "Cassandre", "Schmidt (Bauhaus)", "Tim Gough", 
  "Roman Cieslewitz", "Viktor Gorka", "Jan Lenica", "Herbert Leupin", 
  "Joan Miró", "Robert Mereny", "Milton Glaser", "Seymour Chwast", 
  "Stefan Sagmeister", "Wim Crouwel", "El Lissitzky", "Tibor Kalman", 
  "Otl Aicher", "Massimo Vignelli", "Pierre Bernard", "Niklaus Troxler", 
  "Michal Batory", "Waldemar Świerzy", "Alain Le Quernec", 
  "Henryk Tomaszewski", "Uwe Loesch"
];

const estilos = [
  "Monet", "Van Gogh", "Stijl", "Klimt", "Dalí", "Cézanne", "Kandinsky", 
  "Renoir", "Gauguin", "Matisse", "Degas", "Toulouse-Lautrec", "Seurat", 
  "Warhol", "Pollock", "Rothko", "Magritte", "Hokusai", "Goya", "El Greco", 
  "Caravaggio", "Rembrandt", "Vermeer", "Turner", "Friedrich", "Hopper", 
  "Bacon", "Giacometti", "Picasso", "Miró", "Mondrian", "Schiele", "Chagall", 
  "Rivera", "Kahlo", "O'Keeffe", "Basquiat", "Haring", "Malevich", "Tàpies", 
  "Botero", "Brancusi", "Thiebaud", "Hockney"
];

const formatos = ["Horizontal", "Vertical", "Cuadrado"];

const tipografias = [
  "Sans-serif", "Serif", "Cursiva", "Monospaced", "Slab Serif", 
  "Script", "Blackletter", "Itálica", "Gótica", "Display", 
  "Moderna", "Manuscrita"
];

const conceptos = [
  "frio", "simétrico", "desorden", "agresivo", "atrapante", "repelente", "tierno", 
  "oposición", "cálido", "degradación", "soledad", "amor", "distancia", "retroceso", 
  "cercanía", "melancolía", "armonía", "caos", "efímero", "sereno", "inquietante", 
  "equilibrio", "ruptura", "rebeldía", "minimalismo", "dinamismo", "estancamiento", 
  "libertad", "opresión", "misterio", "claridad", "ambigüedad", "fragmentación", 
  "rutina", "unión", "fragilidad", "robustez", "temporalidad", "eternidad", "crudeza", 
  "suavidad", "intensidad", "calma", "nostalgia", "modernidad", "tradición", 
  "repetición", "vulnerabilidad", "fuerza", "debilidad", "tensión", "relajación", 
  "variedad", "rigidez", "fluidez", "profundidad", "superficialidad", "dualidad", 
  "resiliencia", "infantil", "madurez", "transformación", "introspección", "euforia", 
  "desolación", "utopía", "distopía", "conflicto", "ruido", "ritmo", "esencia", 
  "mundano", "vulnerabilidad", "identidad", "metamorfosis", "desencanto", 
  "comunidad", "individualidad", "serenidad", "confrontación", "crecimiento", 
  "vejez", "decadencia", "deseo", "aterrador", "aislamiento", "desigualdad", 
  "conexión", "ambivalencia", "esperanza", "pérdida", "autenticidad", "evolución", 
  "contradicción", "progreso", "diversidad", "singularidad", "agitación", 
  "simplicidad", "complejidad", "contracultura", "cultura", "obsesión", 
  "lúdico", "crueldad", "sagrado"
];

// Listas de variables para los carteles
const Producto = [
    "Tecnología",
    "Moda",
    "Alimentos",
    "Salud",
    "Hogar",
    "Deportes",
    "Belleza",
    "Educación"
];





// Función para randomizar todas las características del personaje
function randomizeCharacter() {
    document.getElementById("edad").textContent = getRandomElement(edades);
    document.getElementById("genero").textContent = getRandomElement(generos);
    document.getElementById("trabajo").textContent = getRandomElement(trabajos);
    document.getElementById("raza").textContent = getRandomElement(razas);
    document.getElementById("clase").textContent = getRandomElement(clases);
    document.getElementById("animal").textContent = getRandomElement(animales);
    document.getElementById("arma").textContent = getRandomElement(armas);
    document.getElementById("ambiente").textContent = getRandomElement(ambientes);
    document.getElementById("personalidad").textContent = getRandomElement(personalidades);
    document.getElementById("esteticas").textContent = getRandomElement(esteticas);
    document.getElementById("poses").textContent = getRandomElement(poses);
    document.getElementById("objetos").textContent = getRandomElement(objetos);
}

// Función para obtener un elemento aleatorio de una lista
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Función para randomizar los conceptos
function getRandomConcepts(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).join(" ");
}

// Función para randomizar los carteles
function randomizePoster() {
    document.getElementById("tema").textContent = getRandomElement(temas);
    document.getElementById("color").textContent = getRandomElement(colores);
    document.getElementById("estilo").textContent = getRandomElement(estilos);
    document.getElementById("formato").textContent = getRandomElement(formatos);
    document.getElementById("tipografia").textContent = getRandomElement(tipografias);
    
    // Genera y muestra tres conceptos aleatorios
    const conceptosGenerados = getRandomConcepts(conceptos, 3);
    document.getElementById("conceptos").innerHTML = conceptosGenerados.split(" ").map(concept => 
        `<span class="concepto">${concept}</span>`).join(" ");
    
    // Añadir eventos de clic a las palabras generadas
    addConceptClickEvents();
}

// Función para añadir eventos de clic a las palabras de conceptos
function addConceptClickEvents() {
    const conceptoElements = document.querySelectorAll("#conceptos .concepto");
    conceptoElements.forEach(element => {
        element.addEventListener("click", () => {
            element.textContent = getRandomElement(conceptos);
        });
    });
}

// Evento para cambiar cada característica al hacer clic
document.querySelectorAll("span").forEach(element => {
    element.addEventListener("click", () => {
        const category = element.id;
        switch (category) {
            // Casos para las características del personaje
            case "edad":
                element.textContent = getRandomElement(edades);
                break;
            case "genero":
                element.textContent = getRandomElement(generos);
                break;
            case "trabajo":
                element.textContent = getRandomElement(trabajos);
                break;
            case "raza":
                element.textContent = getRandomElement(razas);
                break;
            case "clase":
                element.textContent = getRandomElement(clases);
                break;
            case "animal":
                element.textContent = getRandomElement(animales);
                break;
            case "arma":
                element.textContent = getRandomElement(armas);
                break;
            case "ambiente":
                element.textContent = getRandomElement(ambientes);
                break;
            case "personalidad":
                element.textContent = getRandomElement(personalidades);
                break;
            case "esteticas":
                element.textContent = getRandomElement(esteticas);
                break;
            case "poses":
                element.textContent = getRandomElement(poses);
                break;
            case "objetos":
                element.textContent = getRandomElement(objetos);
                break;
                
            case "tema":
                element.textContent = getRandomElement(temas);
                break;
            case "color":
                element.textContent = getRandomElement(colores);
                break;
            case "estilo":
                element.textContent = getRandomElement(estilos);
                break;
            case "formato":
                element.textContent = getRandomElement(formatos);
                break;
            case "tipografia":
                element.textContent = getRandomElement(tipografias);
                break;
            default:
                console.warn("Categoría no reconocida:", category);
        }
    });
});
