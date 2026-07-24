const App = {

    currentRoom: 0,

    currentQuestion: 0,

    totalRooms: 11,

    rooms: [

        new Room(

            1,

            "🏨",

            "¡Bienvenida a Estancia Citlali!",

            "¡Qué alegría que estés aquí! 🌻 Antes de comenzar esta pequeña aventura queremos conocerte un poquito mejor. No hay respuestas correctas o incorrectas; simplemente queremos preparar un fin de semana pensado especialmente para ti. 💙"

        ),

        new Room(

            2,

            "🧳",

            "Tu equipaje ideal",

            "Queremos que durante tu estancia te sientas como en casa. Cuéntanos qué prefieres traer contigo y qué podemos tener listo para ti. 🧴"

        ),

        new Room(

            3,

            "🍳",

            "Un menú hecho para ti",

            "Dicen que el camino al corazón también pasa por el estómago. 😋 Queremos preparar comidas, antojitos y bebidas que realmente disfrutes."

        ),

        new Room(

            4,

            "🎬",

            "Nuestra noche de películas",

            "Toda gran visita merece una noche de cine inolvidable. Queremos preparar el ambiente perfecto para compartir una película, muchos snacks y pasar un rato increíble juntos. 🍿"

        ),


        new Room(

            5,

            "🎲",

            "Tiempo de diversión",

            "Cada persona disfruta pasar el tiempo de forma distinta. Queremos conocer qué actividades te hacen sentir feliz para preparar momentos que realmente disfrutes. 💙"

        ),

new Room(

    6,

    "🏛️",

    "Nuestra aventura por la ciudad",

    "Uno de los momentos más especiales del fin de semana será salir a recorrer la ciudad. Queremos descubrir qué tipo de lugares te emocionan más para hacer de ese día una experiencia inolvidable. 🌇"

        ),

        new Room(

    7,

    "🏡",

    "Momentos de tranquilidad",

    "No todos los mejores momentos son los más emocionantes. A veces, los recuerdos más bonitos nacen de la tranquilidad, las conversaciones y los pequeños detalles. Queremos conocer cómo sería un momento perfecto para ti. 🌙"

        ),
        
        new Room(

    8,

    "🎁",

    "Los pequeños detalles",

    "Dicen que los pequeños detalles son los que más se recuerdan. Queremos conocer esas pequeñas cosas que pueden hacer tu estancia todavía más especial. 💙"

        ),
        
        new Room(

    9,

    "💙",

    "Conociéndote un poquito más",

    "Antes de que llegue el gran fin de semana, queremos conocerte un poco más. No sobre tus gustos, sino sobre esas pequeñas cosas que te hacen ser tú. 🌸"

        ),
        


        new Room(

    10,

    "🧳",

    "Últimos preparativos",

    "¡Ya casi terminamos! Solo queremos asegurarnos de que no se nos escape ningún detalle para que tu estancia sea exactamente como la imaginas. ✨"

        ),
        
        new Room(

    11,

    "💙",

    "Hasta muy pronto",

    "Antes de terminar, hay alguien que quiere decirte unas últimas palabras..."

)

    ]

};

// =======================================
// Preguntas de la Habitación 1
// =======================================

App.rooms[0].addQuestion(

    new Question(

        "¿Cómo prefieres que te llamemos durante este fin de semana?",

        "text"

    )

);

App.rooms[0].questions[0].placeholder = "Escribe tu nombre...";

App.rooms[0].addQuestion(

    new Question(

        "¿Qué tan emocionada estás por venir a Estancia Citlali?",

        "range"

    )

);

App.rooms[0].addQuestion(

    new Question(

        "Si este fin de semana fuera una película, ¿qué género sería?",

        "radio",

        [

            "😂 Comedia",

            "🌍 Aventura",

            "💙 Una historia bonita",

            "🎭 Un poco de todo",

            "🤷 Todavía no lo sé"

        ]

    )

);

App.rooms[0].addQuestion(

    new Question(

        "¿Qué es lo que más esperas de este fin de semana?",

        "checkbox",

        [

            "🍽️ Comer muy rico",

            "🎬 Ver películas",

            "🏛️ Salir a conocer lugares",

            "😴 Descansar",

            "😂 Reír mucho",

            "💬 Platicar",

            "✨ Sorprenderme",

            "❤️ Pasar tiempo juntos"

        ]

    )

);

App.rooms[0].addQuestion(

    new Question(

        "Si pudieras describir cómo te gustaría sentirte al terminar este fin de semana, ¿qué palabra usarías?",

        "textarea"

    )

);

App.rooms[0].questions[4].placeholder = "Feliz, relajada, emocionada, apapachada...";

// =======================================
// Habitación 2
// (La construiremos después)
// =======================================
App.rooms[1].addQuestion(

    new Question(

        "🚿 Respecto a tus artículos de higiene... ¿Qué prefieres?",

        "radio",

        [

            "Prefiero llevar todo conmigo.",

            "Me gusta usar lo que haya en la casa.",

            "Un poco de ambas."

        ]

    )

);

App.rooms[1].addQuestion(

    new Question(

        "🪥 ¿Qué artículos prefieres llevar tú?",

        "checkbox",

        [

            "Cepillo de dientes",

            "Pasta dental",

            "Shampoo",

            "Acondicionador",

            "Jabón",

            "Esponja",

            "Perfume",

            "Crema corporal",

            "Protector solar",

            "Otro"

        ]

    )

);

App.rooms[1].addQuestion(

    new Question(

        "🩴 Mientras estemos en casa, ¿qué prefieres usar para sentirte cómoda?",

        "radio",

        [

            "🩴 Pantuflas",

            "🧦 Calcetines",

            "👟 Tenis cómodos",

            "🦶 Descalza"

        ]

    )

);

App.rooms[1].addQuestion(

    new Question(

        "👕 Cuando estemos en casa... ¿Cómo te gusta vestir normalmente?",

        "radio",

        [

            "🩳 Muy cómoda",

            "👕 Casual",

            "🏃 Deportiva",

            "💤 Lo más cómodo posible"

        ]

    )

);

App.rooms[1].addQuestion(

    new Question(

        "🎒 ¿Qué tipo de equipaje llevarás?",

        "radio",

        [

            "🎒 Mochila",

            "🧳 Maleta pequeña",

            "🧳 Maleta mediana",

            "🤷 Todavía no lo sé"

        ]

    )

);

const articuloImportante = new Question(

    "🔌 ¿Hay algo que nunca olvidas llevar cuando sales de casa?",

    "textarea"

);

articuloImportante.placeholder =
"Audífonos, cargadores, medicamentos, libro favorito...";

App.rooms[1].addQuestion(articuloImportante);

App.rooms[1].addQuestion(

    new Question(

        "💙 ¿Qué te gustaría que tuviéramos preparado para que te sientas cómoda?",

        "checkbox",

        [

            "🥤 Mi bebida favorita",

            "🍪 Algún snack",

            "🛏️ Cobija extra",

            "🧸 Almohada adicional",

            "🌙 Dormir con poca luz",

            "🎵 Música de fondo",

            "🌡️ Que el cuarto esté fresco",

            "✨ Otro"

        ]

    )

);

const peticionEspecial = new Question(

    "✍️ Si marcaste 'Otro' o tienes alguna petición especial, cuéntanos.",

    "textarea"

);

peticionEspecial.placeholder =
"Escribe aquí cualquier detalle que te haría sentir más cómoda...";

App.rooms[1].addQuestion(peticionEspecial);

App.rooms[1].addQuestion(

    new Question(

        "🤍 Cuando llegues a la casa... ¿Cómo te gustaría sentirte al instalarte?",

        "radio",

        [

            "😌 Relajada",

            "🏡 Como en casa",

            "✨ Sorprendida",

            "😊 Muy bienvenida",

            "❤️ Consentida"

        ]

    )

);


// =======================================
// Habitación 3
// =======================================

const comidaFavorita = new Question(

    "🍽️ Si solo pudiéramos prepararte una comida durante todo el fin de semana... ¿Cuál escogerías?",

    "textarea"

);

comidaFavorita.placeholder =
"Cuéntanos cuál sería esa comida especial...";

App.rooms[2].addQuestion(comidaFavorita);

App.rooms[2].addQuestion(

    new Question(

        "🥤 Cuando tienes mucha sed... ¿Qué bebida eliges casi siempre?",

        "radio",

        [

            "💧 Agua",

            "🥤 Refresco",

            "🧃 Jugo",

            "🍵 Té",

            "☕ Café",

            "🥛 Leche",

            "✨ Otra"

        ]

    )

);

App.rooms[2].addQuestion(

    new Question(

        "🍿 Cuando estás viendo una película... ¿Qué no puede faltar?",

        "checkbox",

        [

            "🍿 Palomitas",

            "🍫 Chocolate",

            "🍬 Dulces",

            "🍪 Galletas",

            "🍟 Papitas",

            "🍓 Fruta",

            "🍰 Postre"

        ]

    )

);

App.rooms[2].addQuestion(

    new Question(

        "🍕 Si saliéramos a comer... ¿Qué se te antojaría más?",

        "checkbox",

        [

            "🍕 Pizza",

            "🍔 Hamburguesas",

            "🍣 Sushi",

            "🌮 Tacos",

            "🍝 Pasta",

            "🇲🇽 Comida mexicana",

            "🇯🇵 Comida japonesa",

            "🤷 Todavía no lo sé"

        ]

    )

);

const comidaNoGusta = new Question(

    "🍓 ¿Hay algún alimento que simplemente NO te guste?",

    "textarea"

);

comidaNoGusta.placeholder =
"Puede ser un ingrediente, una comida o una bebida...";

App.rooms[2].addQuestion(comidaNoGusta);

const postreFavorito = new Question(

    "🍰 ¿Cuál es tu postre favorito?",

    "textarea"

);

postreFavorito.placeholder =
"Pastel, helado, brownies, pay, etc.";

App.rooms[2].addQuestion(postreFavorito);

App.rooms[2].addQuestion(

    new Question(

        "🌶️ ¿Cómo prefieres la comida?",

        "radio",

        [

            "🙂 Nada picante",

            "🌶️ Poco picante",

            "🌶️🌶️ Picante normal",

            "🔥 Muy picante"

        ]

    )

);

App.rooms[2].addQuestion(

    new Question(

        "⚠️ ¿Hay algo que debamos evitar por completo durante las comidas?",

        "checkbox",

        [

            "🌶️ Mucho picante",

            "🦐 Mariscos",

            "🥛 Lácteos",

            "🍬 Mucha azúcar",

            "✅ Nada en especial",

            "✨ Otro"

        ]

    )

);

const sorpresa = new Question(

    "❤️ Si pudiéramos sorprenderte con una comida durante el fin de semana... ¿qué te haría sonreír?",

    "textarea"

);

sorpresa.placeholder =
"¡Cuéntanos esa comida o antojo que te haría muy feliz!";

App.rooms[2].addQuestion(sorpresa);





    // =======================================
// Habitación 4
// =======================================

App.rooms[3].addQuestion(

    new Question(

        "🎬 Cuando piensas en una noche de películas... ¿qué género se te antoja más?",

        "checkbox",

        [

            "😂 Comedia",

            "❤️ Romance",

            "😱 Terror",

            "🕵️ Misterio",

            "🌍 Aventura",

            "✨ Fantasía",

            "🎭 Drama",

            "🎞️ Animación"

        ]

    )

);

App.rooms[3].addQuestion(

    new Question(

        "🍿 ¿Qué no puede faltar durante una película?",

        "checkbox",

        [

            "🍿 Palomitas",

            "🥤 Refresco",

            "🍫 Chocolate",

            "🍬 Dulces",

            "🍪 Galletas",

            "🧸 Una cobija",

            "💡 Luces apagadas"

        ]

    )

);

App.rooms[3].addQuestion(

    new Question(

        "📺 ¿Qué prefieres ver durante una tarde tranquila?",

        "radio",

        [

            "🎬 Una película",

            "📺 Una serie",

            "🎞️ Cortometrajes",

            "🎮 Jugar videojuegos",

            "🤷 Depende del momento"

        ]

    )

);

const peliculaFavorita = new Question(

    "⭐ ¿Cuál es una película que podrías ver una y otra vez?",

    "textarea"

);

peliculaFavorita.placeholder =
"Cuéntanos cuál es y por qué te gusta tanto...";

App.rooms[3].addQuestion(peliculaFavorita);

App.rooms[3].addQuestion(

    new Question(

        "🎭 ¿Cómo prefieres que termine una película?",

        "radio",

        [

            "😊 Final feliz",

            "🥲 Emotivo",

            "🤯 Inesperado",

            "😌 Me da igual mientras sea buena"

        ]

    )

);

App.rooms[3].addQuestion(

    new Question(

        "🌙 Si hacemos maratón... ¿cuántas películas aguantarías?",

        "radio",

        [

            "🎬 Solo una",

            "🎬🎬 Dos",

            "🎬🎬🎬 Tres",

            "🍿 Las que sean necesarias"

        ]

    )

);

App.rooms[3].addQuestion(

    new Question(

        "🎧 ¿Prefieres las películas...", 

        "radio",

        [

            "🇪🇸 Dobladas al español",

            "🌍 En su idioma original con subtítulos",

            "🤷 Me da igual"

        ]

    )

);


const serie = new Question(

    "📺 ¿Hay alguna serie o película que te gustaría ver durante el fin de semana?",

    "textarea"

);

serie.placeholder =
"Si tienes alguna en mente, escríbela aquí...";

App.rooms[3].addQuestion(serie);

const momento = new Question(

    "✨ Imagina nuestra noche de películas perfecta. ¿Cómo sería?",

    "textarea"

);

momento.placeholder =
"Cuéntanos cómo te gustaría vivir ese momento...";

App.rooms[3].addQuestion(momento);
    


// =======================================
// Habitación 5
// =======================================

App.rooms[4].addQuestion(

    new Question(

        "🎲 Cuando pasas tiempo con alguien... ¿qué actividades disfrutas más?",

        "checkbox",

        [

            "🎮 Videojuegos",

            "🎲 Juegos de mesa",

            "🎨 Dibujar",

            "📚 Leer",

            "🎵 Escuchar música",

            "🚶 Caminar",

            "☕ Platicar durante horas",

            "😂 Reírnos de cualquier cosa",

            "📸 Tomar fotos",

            "🍦 Salir por un antojo"

        ]

    )

);

App.rooms[4].addQuestion(

    new Question(

        "🎧 Si pudiéramos poner música durante todo el día... ¿qué géneros escucharías?",

        "checkbox",

        [

            "🎵 Pop",

            "🎸 Rock",

            "🎤 Indie",

            "🎧 Lo-fi",

            "🎹 Instrumental",

            "🎼 Música clásica",

            "🎶 De todo un poco",

            "🎷 Jazz",

            "🎙️ Baladas",

            "✨ Otro"

        ]

    )

);

App.rooms[4].addQuestion(

    new Question(

        "🎲 Si tuvieras que escoger actividades para pasar una tarde divertida... ¿cuáles elegirías?",

        "checkbox",

        [

            "🎮 Videojuegos",

            "🧩 Rompecabezas",

            "♟️ Ajedrez",

            "🎲 Juegos de mesa",

            "🃏 Juegos de cartas",

            "🧠 Retos o acertijos",

            "🎨 Manualidades",

            "😂 Juegos para reír"

        ]

    )

);

App.rooms[4].addQuestion(

    new Question(

        "🏛️ Si salimos juntos... ¿qué lugares te gustaría visitar?",

        "checkbox",

        [

            "🏛️ Museos",

            "🌳 Parques",

            "☕ Cafeterías",

            "🍰 Postrerías",

            "🛍️ Centros comerciales",

            "📚 Librerías",

            "🎡 Ferias",

            "🌇 Miradores",

            "📸 Lugares para tomar fotos"

        ]

    )

);

App.rooms[4].addQuestion(

    new Question(

        "🍿 Además de ver películas... ¿qué otras actividades te gustaría hacer durante el fin de semana?",

        "checkbox",

        [

            "🍳 Cocinar",

            "🎵 Escuchar música",

            "💬 Platicar",

            "😂 Contar historias",

            "🚶 Salir a caminar",

            "📷 Tomar fotos",

            "🎲 Jugar algo",

            "😴 Descansar",

            "🛋️ Solo pasar tiempo juntos"

        ]

    )

);

const juegoFavorito = new Question(

    "🎮 ¿Hay algún videojuego, juego de mesa o actividad que te encantaría compartir con nosotros?",

    "textarea"

);

juegoFavorito.placeholder =
"Cuéntanos cuál es y por qué te gusta tanto.";

App.rooms[4].addQuestion(juegoFavorito);

const tardePerfecta = new Question(

    "💙 Imagina una tarde perfecta durante tu estancia... ¿cómo sería?",

    "textarea"

);

tardePerfecta.placeholder =
"Cuéntanos cómo te gustaría pasar ese momento.";

App.rooms[4].addQuestion(tardePerfecta);

const actividadEspecial = new Question(

    "✨ Si solo pudiéramos hacer una actividad juntos durante todo el fin de semana... ¿cuál escogerías?",

    "textarea"

);

actividadEspecial.placeholder =
"Puede ser cualquier actividad que te haga mucha ilusión.";

App.rooms[4].addQuestion(actividadEspecial);



// =======================================
// Habitación 6
// =======================================

App.rooms[5].addQuestion(

    new Question(

        "🏛️ ¿Qué tipo de lugares te gustaría visitar durante nuestra salida?",

        "checkbox",

        [

            "🏛️ Museos",

            "🎨 Exposiciones de arte",

            "🌳 Parques",

            "📚 Librerías",

            "☕ Cafeterías",

            "🍰 Postrerías",

            "🛍️ Tiendas",

            "🌆 Lugares con vistas bonitas",

            "📸 Lugares para tomar fotografías",

            "🎡 Lugares sorpresa"

        ]

    )

);

App.rooms[5].addQuestion(

    new Question(

        "🎨 Si visitamos un museo... ¿qué exposiciones llamarían más tu atención?",

        "checkbox",

        [

            "🖼️ Pintura",

            "🏺 Historia",

            "🦖 Dinosaurios",

            "🌌 Ciencia",

            "🌍 Culturas del mundo",

            "📷 Fotografía",

            "🎭 Arte moderno",

            "✨ Cualquiera interesante"

        ]

    )

);

App.rooms[5].addQuestion(

    new Question(

        "📸 Durante una salida... ¿qué disfrutas hacer?",

        "checkbox",

        [

            "📷 Tomar muchas fotos",

            "🎥 Grabar videos",

            "🚶 Caminar sin prisa",

            "☕ Hacer una pausa para comer",

            "🛍️ Comprar algún recuerdo",

            "💬 Platicar mientras caminamos",

            "🌇 Admirar el lugar"

        ]

    )

);

App.rooms[5].addQuestion(

    new Question(

        "🧋 Si hacemos una pausa durante el paseo... ¿qué se te antojaría?",

        "checkbox",

        [

            "☕ Café",

            "🧋 Bubble Tea",

            "🍦 Helado",

            "🥤 Refresco",

            "🧃 Jugo",

            "🍰 Un postre",

            "🥐 Pan dulce",

            "🌮 Algo para comer"

        ]

    )

);

App.rooms[5].addQuestion(

    new Question(

        "🎁 ¿Qué tipo de recuerdos te gusta llevarte de un lugar?",

        "checkbox",

        [

            "📸 Fotografías",

            "🧸 Souvenirs",

            "📚 Libros",

            "🎨 Postales",

            "🖼️ Imanes",

            "🍬 Dulces",

            "✨ Solo los recuerdos"

        ]

    )

);

const lugarSoñado = new Question(

    "🌎 Si pudieras escoger cualquier lugar para visitar algún día... ¿cuál sería?",

    "textarea"

);

lugarSoñado.placeholder =
"Puede ser una ciudad, un museo, un país o cualquier lugar que te haga ilusión.";

App.rooms[5].addQuestion(lugarSoñado);

const paseoPerfecto = new Question(

    "💙 ¿Cómo sería para ti un paseo perfecto?",

    "textarea"

);

paseoPerfecto.placeholder =
"Cuéntanos cómo imaginas un día inolvidable.";

App.rooms[5].addQuestion(paseoPerfecto);

// =======================================
// Habitación 7
// =======================================

App.rooms[6].addQuestion(

    new Question(

        "🌙 Cuando quieres relajarte... ¿qué cosas disfrutas hacer?",

        "checkbox",

        [

            "📚 Leer",

            "🎵 Escuchar música",

            "☕ Tomar una bebida caliente",

            "🎬 Ver una película",

            "😴 Dormir una siesta",

            "💬 Platicar",

            "🌧️ Escuchar la lluvia",

            "🧸 Acurrucarme con una cobija",

            "📱 Ver redes sociales",

            "✨ Simplemente descansar"

        ]

    )

);

App.rooms[6].addQuestion(

    new Question(

        "🏡 ¿Qué detalles hacen que un lugar se sienta como hogar para ti?",

        "checkbox",

        [

            "🛋️ Un sillón cómodo",

            "🛏️ Una cama cómoda",

            "🧸 Muchas cobijas",

            "🌡️ Que esté fresco",

            "💡 Luz cálida",

            "🪴 Plantas",

            "🎵 Música tranquila",

            "🕯️ Un ambiente relajante",

            "☕ Algo rico para tomar"

        ]

    )

);

App.rooms[6].addQuestion(

    new Question(

        "🌦️ ¿Qué clima disfrutas más?",

        "checkbox",

        [

            "☀️ Soleado",

            "🌤️ Fresco",

            "🌥️ Nublado",

            "🌧️ Lluvioso",

            "❄️ Frío"

        ]

    )

);

App.rooms[6].addQuestion(

    new Question(

        "💬 Si pasáramos horas platicando... ¿de qué temas te gustaría hablar?",

        "checkbox",

        [

            "🎬 Películas",

            "🎵 Música",

            "🌎 Viajes",

            "📚 Libros",

            "😂 Anécdotas",

            "💭 Sueños",

            "🐶 Mascotas",

            "🍜 Comida",

            "🤍 De todo un poco"

        ]

    )

);

App.rooms[6].addQuestion(

    new Question(

        "🌃 Durante la noche... ¿qué ambiente prefieres?",

        "checkbox",

        [

            "💡 Luces tenues",

            "🕯️ Ambiente tranquilo",

            "🎵 Música suave",

            "🌙 Silencio",

            "💬 Platicar",

            "🎬 Ver una película",

            "🍫 Comer algún antojo"

        ]

    )

);

const momentoTranquilo = new Question(

    "🤍 Describe un momento que para ti signifique paz.",

    "textarea"

);

momentoTranquilo.placeholder =
"No tiene que ser algo extraordinario; pueden ser los pequeños momentos.";

App.rooms[6].addQuestion(momentoTranquilo);

const felicidad = new Question(

    "✨ ¿Qué pequeño detalle suele hacerte sonreír sin importar el día?",

    "textarea"

);

felicidad.placeholder =
"Puede ser una persona, una comida, una canción o cualquier cosa.";

App.rooms[6].addQuestion(felicidad);


// =======================================
// Habitación 8
// =======================================

App.rooms[7].addQuestion(

    new Question(

        "🎁 ¿Qué pequeños detalles suelen hacerte sentir especial?",

        "checkbox",

        [

            "💌 Una carta escrita a mano",

            "🍫 Un dulce sorpresa",

            "🌸 Flores",

            "🧸 Un peluche",

            "📸 Una fotografía bonita",

            "🎵 Que recuerden una canción que me gusta",

            "☕ Que preparen mi bebida favorita",

            "🍰 Mi postre favorito",

            "💬 Una conversación bonita",

            "✨ Cualquier detalle con cariño"

        ]

    )

);

App.rooms[7].addQuestion(

    new Question(

        "🎨 ¿Qué colores te transmiten tranquilidad o felicidad?",

        "checkbox",

        [

            "💙 Azul",

            "💛 Amarillo",

            "💜 Morado",

            "🩷 Rosa",

            "❤️ Rojo",

            "🤍 Blanco",

            "🖤 Negro",

            "💚 Verde",

            "🧡 Naranja"

        ]

    )

);

App.rooms[7].addQuestion(

    new Question(

        "🕯️ ¿Qué tipo de ambiente te gusta más?",

        "checkbox",

        [

            "🌙 Tranquilo",

            "😂 Alegre",

            "🎵 Con música",

            "💡 Iluminado",

            "🕯️ Luz tenue",

            "🌧️ Lluvioso",

            "☀️ Muy iluminado por el sol",

            "🏡 Hogareño"

        ]

    )

);

App.rooms[7].addQuestion(

    new Question(

        "🍬 Si encontráramos un antojito durante el paseo... ¿qué elegirías?",

        "checkbox",

        [

            "🍦 Helado",

            "🍩 Dona",

            "🧋 Bubble Tea",

            "🍪 Galletas",

            "🍫 Chocolate",

            "🍓 Fresas con chocolate",

            "🧁 Cupcake",

            "🥐 Pan dulce",

            "🍰 Pastel"

        ]

    )

);

App.rooms[7].addQuestion(

    new Question(

        "📷 ¿Qué tipo de recuerdos te gusta conservar después de un buen día?",

        "checkbox",

        [

            "📸 Fotografías",

            "🎥 Videos",

            "🎟️ Boletos",

            "🧸 Souvenirs",

            "💌 Cartitas",

            "🌸 Flores secas",

            "✨ Los recuerdos en mi memoria"

        ]

    )

);

const detalleInolvidable = new Question(

    "💙 ¿Cuál ha sido uno de los detalles más bonitos que alguien ha tenido contigo?",

    "textarea"

);

detalleInolvidable.placeholder =
"No tiene que ser un regalo; puede ser un gesto, unas palabras o un momento.";

App.rooms[7].addQuestion(detalleInolvidable);

const sorpresaIdeal = new Question(

    "✨ Si pudiéramos sorprenderte con un pequeño detalle durante el fin de semana... ¿qué te haría muchísima ilusión?",

    "textarea"

);

sorpresaIdeal.placeholder =
"No te preocupes por si es sencillo o complicado, queremos conocer tu idea.";

App.rooms[7].addQuestion(sorpresaIdeal);


// =======================================
// Habitación 9
// =======================================

App.rooms[8].addQuestion(

    new Question(

        "✨ ¿Cuáles de estas cosas sientes que te representan?",

        "checkbox",

        [

            "😂 Me río muy fácilmente",

            "🤍 Soy tranquila",

            "🎨 Soy creativa",

            "📚 Me gusta aprender cosas nuevas",

            "🌙 Me gusta dormir mucho",

            "🐶 Amo a los animales",

            "🎵 La música forma parte de mi vida",

            "🌸 Disfruto los pequeños detalles",

            "💭 Suelo imaginar muchas cosas",

            "🌎 Me gusta conocer lugares nuevos"

        ]

    )

);

App.rooms[8].addQuestion(

    new Question(

        "🌈 ¿Qué cosas suelen mejorar tu día?",

        "checkbox",

        [

            "☀️ Un día bonito",

            "💬 Una buena conversación",

            "😂 Reírme mucho",

            "🍰 Comer algo rico",

            "🎵 Escuchar música",

            "🎁 Una sorpresa",

            "📸 Tomar fotos",

            "😴 Dormir bien",

            "🐱 Ver animalitos",

            "❤️ Pasar tiempo con personas importantes"

        ]

    )

);

App.rooms[8].addQuestion(

    new Question(

        "🌟 ¿Qué cualidades valoras más en una persona?",

        "checkbox",

        [

            "🤍 Honestidad",

            "😂 Sentido del humor",

            "💙 Empatía",

            "🫂 Lealtad",

            "✨ Amabilidad",

            "🎯 Responsabilidad",

            "🌸 Paciencia",

            "💬 Buena comunicación",

            "🎨 Creatividad"

        ]

    )

);

App.rooms[8].addQuestion(

    new Question(

        "💭 Si tuvieras un día completamente libre... ¿qué te gustaría hacer?",

        "checkbox",

        [

            "😴 Dormir",

            "🎬 Ver películas",

            "📚 Leer",

            "🚶 Salir a caminar",

            "🏛️ Visitar un lugar nuevo",

            "🍰 Ir por un postre",

            "🎮 Jugar videojuegos",

            "🎨 Dibujar",

            "🏡 Quedarme en casa"

        ]

    )

);

App.rooms[8].addQuestion(

    new Question(

        "🌸 ¿Qué palabras te gustaría que describieran este fin de semana?",

        "checkbox",

        [

            "✨ Inolvidable",

            "😂 Divertido",

            "😌 Relajante",

            "💙 Especial",

            "🌇 Bonito",

            "🤍 Tranquilo",

            "🎁 Lleno de sorpresas",

            "📸 Memorable"

        ]

    )

);

const orgullo = new Question(

    "🌟 ¿Hay algo de ti de lo que te sientas especialmente orgullosa?",

    "textarea"

);

orgullo.placeholder =
"Puede ser una habilidad, un logro o simplemente algo que te haga feliz de ti.";

App.rooms[8].addQuestion(orgullo);

const conocerte = new Question(

    "💌 ¿Hay algo sobre ti que te gustaría que conociéramos antes de ese fin de semana?",

    "textarea"

);

conocerte.placeholder =
"Cualquier cosa que quieras compartir será bienvenida.";

App.rooms[8].addQuestion(conocerte);


// =======================================
// Habitación 10
// =======================================

App.rooms[9].addQuestion(

    new Question(

        "🎒 Antes de venir... ¿qué cosas seguramente traerás contigo?",

        "checkbox",

        [

            "📱 Celular",

            "🔋 Cargador",

            "🎧 Audífonos",

            "📚 Libro",

            "💄 Maquillaje",

            "🧴 Productos de higiene",

            "📷 Cámara",

            "🧸 Peluche",

            "💊 Medicamentos",

            "🎒 Mochila"

        ]

    )

);

App.rooms[9].addQuestion(

    new Question(

        "🌤️ Durante el fin de semana... ¿qué te gustaría que definitivamente sucediera?",

        "checkbox",

        [

            "😂 Reír mucho",

            "📸 Tomar muchas fotos",

            "🍰 Comer muy rico",

            "🎬 Ver una buena película",

            "🏛️ Disfrutar el museo",

            "☕ Tener una buena conversación",

            "🎁 Llevarme una sorpresa",

            "🌇 Crear recuerdos bonitos",

            "😌 Sentirme relajada"

        ]

    )

);

App.rooms[9].addQuestion(

    new Question(

        "📷 Si pudiéramos guardar un solo recuerdo de ese fin de semana... ¿cuál te gustaría que fuera?",

        "checkbox",

        [

            "📸 Una fotografía",

            "🎥 Un video",

            "💌 Una carta",

            "🎁 Un pequeño regalo",

            "🌇 Un momento especial",

            "😂 Una anécdota divertida",

            "🍰 Una comida deliciosa",

            "💙 Una conversación inolvidable"

        ]

    )

);

App.rooms[9].addQuestion(

    new Question(

        "💙 ¿Qué palabras describen mejor cómo te gustaría sentirte al regresar a casa?",

        "checkbox",

        [

            "😊 Feliz",

            "😌 Tranquila",

            "💙 Querida",

            "🌸 Agradecida",

            "😂 Muy divertida",

            "✨ Sorprendida",

            "🤍 Relajada",

            "🥹 Con ganas de volver"

        ]

    )

);

const ultimoDetalle = new Question(

    "📝 ¿Hay algún detalle que todavía no te hayamos preguntado y que te gustaría contarnos?",

    "textarea"

);

ultimoDetalle.placeholder =
"Este es el espacio para decirnos cualquier cosa que creas importante.";

App.rooms[9].addQuestion(ultimoDetalle);

const mensajeFinal = new Question(

    "💌 Si pudieras dejarnos un pequeño mensaje antes de comenzar esta aventura... ¿qué nos dirías?",

    "textarea"

);

mensajeFinal.placeholder =
"Nos encantará leer cualquier cosa que quieras compartir.";

App.rooms[9].addQuestion(mensajeFinal);



// =======================================
// Habitación 11
// =======================================

const despedida = new Question(

`💌 Hemos llegado al final...

Si estás leyendo esto significa que terminaste de responder todas las preguntas. Antes que nada, muchísimas gracias por haberte tomado el tiempo de hacerlo.

Aunque pueda parecer solamente un cuestionario, en realidad cada una de tus respuestas nos ayudará muchísimo a preparar este fin de semana. Gracias a ellas podremos conocerte un poquito mejor, entender qué disfrutas, qué te hace sentir cómoda y cuáles son esos pequeños detalles que pueden hacer una gran diferencia.

Toda la familia podrá apoyarse en este pequeño proyecto para que tu estancia sea mucho más especial.

Pero quiero aprovechar este último espacio para decirte algo ya no como parte de "Estancia Citlali", sino como Lalo.

La idea de todo este proyecto nació porque quería que este fin de semana no fuera simplemente una visita más. Quería preparar algo pensando en ti, conocerte un poquito más y hacer que te sintieras bienvenida desde antes de que llegaras.

Sé perfectamente que muchas veces los mejores momentos son los que salen de forma improvisada y no los que se planean durante semanas. Probablemente tengas razón si piensas eso jaja.

Pero aun así, quise intentarlo.

Porque para mí eres una persona muy importante.

Te quiero muchísimo.

Y aunque técnicamente eres mi prima, desde hace mucho tiempo te considero mi pequeña hermana. ❤️

Tal vez insistimos un poquito para convencerte de venir jajaja... pero créeme cuando te digo que toda la intención detrás de este proyecto fue hacerte sentir querida y que supieras que aquí hay personas que de verdad estaban emocionadas de recibirte.

No espero que todo salga perfecto.

No espero que cada actividad sea inolvidable.

Lo único que deseo es que durante este fin de semana sonrías mucho, descanses, te diviertas, comas muy rico, conozcas lugares bonitos y, sobre todo, que te sientas en casa.

Porque al final los recuerdos más bonitos casi nunca nacen de grandes planes, sino de las personas con las que compartimos esos momentos.

Gracias por aceptar vivir esta pequeña aventura con nosotros.

Nos vemos muy pronto.

Con muchísimo cariño...

— Lalo (tu primo que mas te quiere) 💙`,

"message"

);

App.rooms[10].addQuestion(despedida);

const ultimoMensaje = new Question(

"💌 Y ahora sí... antes de hacer oficialmente tu check-in en Estancia Citlali, ¿quieres dejarnos unas últimas palabras?",

"textarea"

);

ultimoMensaje.placeholder =
"Puede ser una expectativa, un mensaje para la familia, una broma, un 'ya quiero llegar' o cualquier cosa que quieras decirnos. ❤️";

App.rooms[10].addQuestion(ultimoMensaje);

// =======================================
// Inicio de la aplicación
// =======================================

function startApp() {

    console.log("Iniciando experiencia...");

    const card = document.querySelector(".glass-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        UI.showRoom(App.rooms[0]);

    }, 500);

}

function showRoom(id) {

    console.log("Mostrando habitación:", id);

}

function nextRoom() {

    console.log("Siguiente habitación");

}

function previousRoom() {

    console.log("Habitación anterior");

}

console.log("Estancia Citlali iniciada ❤️");

console.log(App);

console.log(App.rooms[0]);

document.addEventListener("DOMContentLoaded", () => {

    Stars.create();

    // ⭐ Para pruebas aparecerá cada 3 segundos
    setInterval(() => {

        Stars.shootingStar();

    }, 3000);

    const startButton = document.getElementById("startButton");

    if (startButton) {

        startButton.addEventListener("click", startApp);

    }
// ==========================================
// CORALINE
// ==========================================

const coralineKey = document.querySelector(".coraline-key");
const coralineMessage = document.getElementById("coralineMessage");

if (coralineKey && coralineMessage) {

    coralineKey.addEventListener("click", () => {

        coralineMessage.classList.add("show");

        setTimeout(() => {

            coralineMessage.classList.remove("show");

        }, 4000);

    });

    }
    

    // ==========================================
// HEARTSTOPPER
// ==========================================
const heartButton = document.getElementById("heartstopperButton");

if (heartButton) {

    heartButton.addEventListener("click", () => {

        Heartstopper.launch();

    });

}
});