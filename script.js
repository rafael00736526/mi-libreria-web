const libros = [
    { titulo: "Rayuela", autor: "Julio Cortázar", precio: 19000, stock: 10, portada: "imagenes/rayuela.jpg", anio: 1963, generos: ["Novela", "Literatura experimental","Ficcion filosofica"], sinopsis:
    "Horacio oliveira,un argentino en paris,busca darle sentido a su existencia mientras atraviesa relaciones, encuentros y refelexiones sobre la vida,el amor y la realidad", opinion: "Una obra reconocida por su estructura experimental,sus reflexiones filosoficas y su manera poco convencional de contar una historia"},
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 28000, stock: 8, portada: "imagenes/cien-años-de-soledad.jpg", anio: 1967, generos: ["Realismo mágico", "Novela", "Saga familiar"], sinopsis: 
    "La novela narra la historia de varias generaciones de la familia Buendía en el pueblo ficticio de Macondo, donde los acontecimientos cotidianos conviven con sucesos extraordinarios.", opinion: "Una obra fundamental de la literatura latinoamericana, admirada por su riqueza narrativa, sus personajes memorables y su particular mezcla de realidad y fantasía."}, 
    { titulo: "Ficciones", autor: "Jorge Luis Borges", precio: 10000, stock: 15, portada: "imagenes/ficciones.jpg", anio: 1944, generos: ["Cuentos", "Ficción fantástica", "Literatura filosófica"], sinopsis:
    "Una colección de relatos que explora universos imaginarios, bibliotecas infinitas, laberintos, sueños y misterios que desafían los límites de la realidad.", opinion: "Una de las obras más reconocidas de Borges, destacada por su imaginación, profundidad intelectual y su capacidad para convertir ideas filosóficas en relatos fascinantes." },
    { titulo: "La casa de los espíritus", autor: "Isabel Allende", precio: 36000, stock: 7, portada: "imagenes/la-casa-de-los-espiritus.jpg", anio: 1982, generos: ["Realismo mágico", "Novela", "Drama familiar"], sinopsis: 
    "A través de varias generaciones de la familia Trueba, la historia aborda el amor, los conflictos familiares, las diferencias sociales y los cambios políticos de un país latinoamericano.", opinion: "Una novela reconocida por sus personajes complejos, su narrativa emotiva y la manera en que combina la historia familiar con acontecimientos políticos y elementos sobrenaturales." },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel Cervantes", precio: 70000, stock: 12, portada: "imagenes/don-quijote.jpg", anio: 1605, generos: ["Novela", "Aventura", "Sátira", "Comedia"], sinopsis: 
    "Alonso Quijano, un hombre fascinado por los libros de caballería, decide convertirse en caballero andante bajo el nombre de Don Quijote. Junto a su escudero Sancho Panza, emprende aventuras en las que confunde frecuentemente la fantasía con la realidad.", opinion: "Considerada una de las obras más importantes de la literatura universal, destaca por su humor, sus personajes inolvidables y su reflexión sobre los ideales, la imaginación y la realidad." },
    { titulo: "La divina comedia", autor: "Dante Alighieri", precio: 37000, stock: 20, portada: "imagenes/divina-comedia.jpg", anio: 1321, generos: ["Poesía épica", "Literatura medieval", "Alegoría"], sinopsis: 
    "Un viaje alegórico a través del Infierno, el Purgatorio y el Paraíso, en el que Dante explora el destino del alma humana, el pecado, la redención y la relación entre el ser humano y lo divino.", opinion: "Una de las obras fundamentales de la literatura universal, reconocida por su profundidad filosófica, su riqueza simbólica y su extraordinaria representación del más allá." },
    { titulo: "El viejo y el mar", autor: "Ernest Hemingway", precio: 22000, stock: 8, portada: "imagenes/viejo-y-mar.jpg", anio: 1952, generos: ["Novela corta", "Aventura", "Drama", "Literatura existencial"], sinopsis: 
    "Santiago, un viejo pescador cubano que lleva mucho tiempo sin conseguir una captura, se adentra en el mar y emprende una agotadora lucha contra un enorme pez espada.", opinion: "Una obra breve pero profunda, admirada por su sencillez narrativa y por sus reflexiones sobre la perseverancia, la dignidad y la lucha del ser humano frente a la adversidad." },
    { titulo: "1984", autor: "George Orwell", precio: 25000, stock: 12, portada: "imagenes/1984.jpg", anio: 1949, generos: ["Distopía", "Ciencia ficción", "Novela política", "Ficción especulativa"], sinopsis: 
    "En una sociedad totalitaria vigilada constantemente por el Gran Hermano, Winston Smith comienza a cuestionar el régimen y busca recuperar su libertad individual en un mundo donde incluso el pensamiento está controlado.", opinion: "Una de las distopías más influyentes de la literatura, destacada por su crítica al autoritarismo, la manipulación de la información y la vigilancia masiva." },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", precio: 18000, stock: 10, portada: "imagenes/orgullo-y-prejuicio.jpg", anio: 1813, generos: ["Novela romántica", "Comedia", "Drama social", "Literatura clásica"], sinopsis: 
    "Elizabeth Bennet, una joven inteligente e independiente, conoce al reservado y orgulloso señor Darcy. A medida que sus caminos se cruzan, ambos deberán enfrentarse a sus prejuicios, diferencias sociales y sentimientos.", opinion: "Una novela clásica muy apreciada por su ingenioso humor, sus personajes memorables y su crítica a las convenciones sociales y matrimoniales de su época." },
    { titulo: "La metamorfosis", autor: "Franz Kafka", precio: 14000, stock: 15, portada: "imagenes/metamorfosis.jpg", anio: 1915, generos: ["Novela corta", "Ficción absurda", "Literatura existencial", "Fantasía"], sinopsis:
    "Gregor Samsa, un joven viajante de comercio, despierta una mañana transformado inexplicablemente en un enorme insecto. A partir de ese momento, su vida y la relación con su familia cambian radicalmente.", opinion: "Una obra emblemática de Kafka, reconocida por su atmósfera inquietante y sus reflexiones sobre la alienación, la identidad y el aislamiento humano." },
    { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", precio: 32000, stock: 7, portada: "imagenes/castigo-crimen.jpg", anio: 1866, generos: ["Novela psicológica","Drama", "Filosofía", "Literatura clásica"], sinopsis: 
    "Rodión Raskólnikov, un estudiante empobrecido, comete un asesinato convencido de que sus ideas justifican sus acciones. Sin embargo, la culpa, el miedo y los conflictos morales comienzan a consumirlo.", opinion: "Una de las grandes novelas psicológicas de la literatura universal, destacada por su profundidad filosófica y su exploración de la culpa, la moral y la naturaleza humana." },
    { titulo: "Viaje al centro de la Tierra", autor: "Julio Verne", precio: 21000, stock: 9, portada: "imagenes/viaje-al-centro.jpg", anio: 1864, generos: ["Ciencia ficción", "Aventura", "Exploración", "Literatura fantástica"], sinopsis: 
    "El profesor Otto Lidenbrock, su sobrino Axel y el guía Hans emprenden una expedición hacia el interior de la Tierra siguiendo las indicaciones de un antiguo manuscrito. Allí descubren un mundo subterráneo lleno de fenómenos extraordinarios.", opinion: "Una aventura clásica de Julio Verne, admirada por su imaginación científica, sus descubrimientos sorprendentes y su capacidad para despertar la curiosidad por lo desconocido." },
    { titulo: "Frankenstein", autor: "Mary Shelley", precio: 20000, stock: 11, portada: "imagenes/frankestein.jpg", anio: 1818, generos: ["Terror gótico", "Ciencia ficción", "Novela filosófica", "Drama"], sinopsis: 
    "Víctor Frankenstein, un joven científico obsesionado con descubrir los secretos de la vida, consigue crear una criatura artificial. Sin embargo, horrorizado por su propia creación, la abandona, desencadenando una tragedia que cambiará sus vidas para siempre.", opinion: "Una obra pionera de la ciencia ficción, reconocida por sus reflexiones sobre la ambición científica, la responsabilidad, la soledad y los límites de la humanidad." },
    { titulo: "Asesinato en el Orient Express", autor : "Agatha Christie", precio: 27000, stock: 6, portada: "imagenes/asesinato.jpg", anio: 1934, generos: ["Novela policial", "Misterio", "Suspenso", "Crimen"], sinopsis: 
    "Durante un viaje en el famoso tren Orient Express, el detective Hércules Poirot debe investigar el asesinato de un pasajero. Con el tren detenido por la nieve y varios sospechosos a bordo, deberá descubrir quién cometió el crimen.", opinion: "Uno de los misterios policiales más famosos de Agatha Christie, admirado por su ingeniosa resolución, sus sospechosos y su sorprendente desenlace." },
    { titulo: "It", autor: "Stephen King", precio: 45000, stock: 5, portada: "imagenes/it.jpg", anio: 1986, generos: ["Terror", "Suspenso", "Novela sobrenatural", "Drama psicológico"], sinopsis: 
    "En el pueblo de Derry, un grupo de amigos descubre la existencia de una entidad maligna capaz de adoptar diferentes formas, especialmente la de un aterrador payaso llamado Pennywise. Años después, deberán regresar para enfrentar aquello que los marcó durante su infancia.", opinion: "Una de las novelas más conocidas de Stephen King, destacada por su atmósfera perturbadora, sus personajes y la manera en que combina el terror sobrenatural con los miedos de la infancia." },
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: 16000, stock: 20, portada: "imagenes/principito.jpg", anio: 1943, generos: ["Fábula", "Literatura infantil", "Filosofía", "Novela corta"], sinopsis: 
    "Un piloto cuyo avión se avería en el desierto conoce a un pequeño príncipe proveniente de otro planeta. A través de sus relatos y encuentros, descubre reflexiones sobre la amistad, el amor, la soledad y el sentido de la vida.", opinion: "Una obra atemporal que, mediante una narración sencilla y simbólica, transmite profundas reflexiones sobre los vínculos humanos, la inocencia y aquello que realmente importa." },
    { titulo: "Ser o no ser", autor: "Capy Bara", precio: 100000, stock: 13, portada: "imagenes/ser-noser.jpg.jpg", anio: "Desconocido", generos: ["Filosofía existencial","Reflexión humanista","Comedia","Literatura introspectiva","Ficción filosófica"], sinopsis: 
    "En un mundo habitado por humanos, seguimos la historia de Capybara Mondes, un capybara humanoide que, como tantos otros, intenta encontrar su lugar en la sociedad y descubrir cuál es el verdadero sentido de su existencia. A través de encuentros inesperados, experiencias cotidianas y profundas reflexiones, Capybara comienza a cuestionarse algunos de los aspectos más fundamentales de la vida: la esencia de la humanidad, la identidad personal, la importancia de aceptarse a uno mismo y el valor de disfrutar cada momento. Sin embargo, su búsqueda no estará marcada únicamente por grandes cuestionamientos filosóficos. Entre situaciones absurdas, momentos humorísticos y encuentros peculiares, descubrirá que quizás el sentido de la vida no consiste en encontrar todas las respuestas, sino en aprender a vivirla.", opinion: "Una obra singular que combina profundas reflexiones existenciales con momentos de humor inesperado. Su mensaje sobre la aceptación personal, la importancia de vivir el presente y el valor de nuestra propia existencia invita a mirar la vida desde una perspectiva más consciente y optimista. Una lectura que consigue hacer pensar, sonreír y, quizás, replantearse algunas cuestiones fundamentales de la humanidad."}
];

const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const modalLibro = document.getElementById("modal-libro");
const cerrarModal = document.getElementById("cerrar-modal");

const modalPortada = document.getElementById("modal-portada");
const modalTitulo = document.getElementById("modal-titulo");
const modalAutor = document.getElementById("modal-autor");
const modalAnio = document.getElementById("modal-anio");
const modalGeneros = document.getElementById("modal-generos");
const modalSinopsis = document.getElementById("modal-sinopsis");
const modalOpinion = document.getElementById("modal-opinion");
const ordenPrecio = document.getElementById("orden-precio");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contadorCarrito = document.getElementById("contador-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");

function abrirModal(libro) {

    modalPortada.src = libro.portada;
    modalPortada.alt = libro.titulo;

    modalTitulo.textContent = libro.titulo;
    modalAutor.textContent = `Autor: ${libro.autor}`;
    modalAnio.textContent = `Año de publicación: ${libro.anio}`;
    modalGeneros.textContent = `Géneros: ${libro.generos.join(", ")}`;

    modalSinopsis.textContent = `Sinopsis: ${libro.sinopsis}`;
    modalOpinion.textContent = `Opinión: ${libro.opinion}`;

    modalLibro.style.display = "flex";
}

cerrarModal.addEventListener("click", () => {
    modalLibro.style.display = "none";
});

modalLibro.addEventListener("click", (evento) => {
    if (evento.target === modalLibro) {
        modalLibro.style.display = "none";
    }
});

function actualizarContador() {
    const cantidad = carrito.reduce((total, libro) => total + libro.cantidad, 0);

    contadorCarrito.textContent = cantidad;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarLibros(lista) {
    catalogo.innerHTML = "";

    lista.forEach(libro => {
        const tarjeta = document.createElement("article");

        tarjeta.classList.add("libro");

        tarjeta.innerHTML = `
           ${libro.portada ? `<img src="${libro.portada}" alt="Portada de ${libro.titulo}">` : ""}
    <h3>${libro.titulo}</h3>
    <p><strong>Autor:</strong> ${libro.autor}</p>
    <p class="precio">$${libro.precio.toLocaleString("es-AR")}</p>
    <p><strong>Stock:</strong> ${libro.stock} unidades</p>
<button class="agregar-carrito">
    Agregar al carrito
</button>
`;
tarjeta.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("agregar-carrito")) {
        return;
    }

    abrirModal(libro);
});


const botonAgregar = tarjeta.querySelector(".agregar-carrito");

botonAgregar.addEventListener("click", () => {

    const libroExistente = carrito.find(item => item.titulo === libro.titulo);

    if (libroExistente) {

        if (libroExistente.cantidad < libro.stock) {
            libroExistente.cantidad++;
        } else {
            alert("No hay más ejemplares disponibles de este libro.");
        }

    } else {

        if (libro.stock > 0) {
            carrito.push({
                titulo: libro.titulo,
                precio: libro.precio,
                cantidad: 1,
                stock: libro.stock
            });
        } else {
            alert("Este libro no tiene ejemplares disponibles.");
        }

    }

    actualizarContador();
});
        catalogo.appendChild(tarjeta);
    });
}

buscador.addEventListener("input", actualizarCatalogo);
ordenPrecio.addEventListener("change", actualizarCatalogo);

function actualizarCatalogo() {
    const texto = buscador.value.toLowerCase();

    let resultado = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(texto) ||
        libro.autor.toLowerCase().includes(texto)
    );

    if (ordenPrecio.value === "menor") {
        resultado.sort((a, b) => a.precio - b.precio);
    } else if (ordenPrecio.value === "mayor") {
        resultado.sort((a, b) => b.precio - a.precio);
    }

    mostrarLibros(resultado);
}

ordenPrecio.addEventListener("change", () => {
    const texto = buscador.value.toLowerCase();

    let resultado = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(texto) ||
        libro.autor.toLowerCase().includes(texto)
    );

    if (ordenPrecio.value === "menor") {
        resultado.sort((a, b) => a.precio - b.precio);
    }

    if (ordenPrecio.value === "mayor") {
        resultado.sort((a, b) => b.precio - a.precio);
    }

    mostrarLibros(resultado);
});

mostrarLibros(libros);

function mostrarAutores() {
    const listaAutores = document.getElementById("lista-autores");

    listaAutores.innerHTML = "";

    const autores = [...new Set(libros.map(libro => libro.autor))];

    autores.forEach(autor => {
        const librosAutor = libros.filter(libro => libro.autor === autor);

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("autor");

        tarjeta.innerHTML = `
            <h3>${autor}</h3>
            <p><strong>Libros disponibles:</strong> ${librosAutor.length}</p>
            <ul>
                ${librosAutor.map(libro => `<li>${libro.titulo}</li>`).join("")}
            </ul>
        `;

        listaAutores.appendChild(tarjeta);
    });
}

mostrarAutores();

function mostrarCarrito() {
    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach((libro, index) => {
        const tarjeta = document.createElement("article");

        tarjeta.classList.add("libro");

        tarjeta.innerHTML = `
    <h3>${libro.titulo}</h3>

    <p>Precio: $${libro.precio.toLocaleString("es-AR")}</p>

    <p>Cantidad: ${libro.cantidad}</p>

    <button class="disminuir-cantidad">−</button>

    <button class="aumentar-cantidad">+</button>

    <button class="eliminar-libro">Eliminar</button>

    <p>Subtotal: $${(libro.precio * libro.cantidad).toLocaleString("es-AR")}</p>
`;

        // Aumentar cantidad
const botonAumentar = tarjeta.querySelector(".aumentar-cantidad");

botonAumentar.addEventListener("click", () => {

    if (libro.cantidad < libro.stock) {
        libro.cantidad++;
        actualizarContador();
    } else {
        alert("Alcanzaste el máximo de ejemplares disponibles.");
    }

});

// Disminuir cantidad
const botonDisminuir = tarjeta.querySelector(".disminuir-cantidad");

botonDisminuir.addEventListener("click", () => {
    if (libro.cantidad > 1) {
        libro.cantidad--;
        actualizarContador();
    }
});

// Eliminar libro
const botonEliminar = tarjeta.querySelector(".eliminar-libro");

botonEliminar.addEventListener("click", () => {
    carrito.splice(index, 1);
    actualizarContador();
});

        listaCarrito.appendChild(tarjeta);

        total += libro.precio * libro.cantidad;
    });

    totalCarrito.textContent = `Total: $${total.toLocaleString("es-AR")}`;
}

const enlacesMenu = document.querySelectorAll(".enlace-menu");
const secciones = document.querySelectorAll(".seccion");

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {

        const idSeccion = enlace.dataset.seccion;

        secciones.forEach(seccion => {
            seccion.classList.remove("activa");
        });

        enlacesMenu.forEach(enlace => {
            enlace.classList.remove("activo");
        });

        const seccionActiva = document.getElementById(idSeccion);

        seccionActiva.classList.add("activa");
        enlace.classList.add("activo");
    });
});

const botonMenu = document.getElementById("boton-menu");
const menuNavegacion = document.getElementById("menu-navegacion");

botonMenu.addEventListener("click", () => {
    menuNavegacion.classList.toggle("abierto");

    actualizarContador();
});

actualizarContador();