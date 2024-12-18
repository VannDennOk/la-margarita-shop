/* ///////// ARRAY DE PRODUCTOS ///////// */
const productosdb = [
    // RAMOS
    {
        id: "r01",
        nombre: "Gerbera plus",
        tipo: "ramos",
        precio: 60000,
        imagen: "../images/productos/ramos/ramos-01.jpg",
        alt: "ramo de flores gerberas",
        disponible: true,
        descuento: false
    },
    {
        id: "r02",
        nombre: "Primavera total",
        tipo: "ramos",
        precio: 50000,
        imagen: "../images/productos/ramos/ramos-02.jpg",
        alt: "ramo de flores variadas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "r03",
        nombre: "Premium | Rosas y más",
        tipo: "ramos",
        precio: 75000,
        imagen: "../images/productos/ramos/ramos-03.jpg",
        alt: "ramo de flores rosas",
        disponible: true,
        descuento: false,
        destacado: true
    },
    {
        id: "r04",
        nombre: "Primavera especial",
        tipo: "ramos",
        precio: 50000,
        imagen: "../images/productos/ramos/ramos-04.jpg",
        alt: "ramo de flores variadas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "r05",
        nombre: "Variedad de rosas",
        tipo: "ramos",
        precio: 60000,
        imagen: "../images/productos/ramos/ramos-05.jpg",
        alt: "ramo de flores rosas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "r06",
        nombre: "Gerbera veraniega",
        tipo: "ramos",
        precio: 50000,
        imagen: "../images/productos/ramos/ramos-06.jpg",
        alt: "ramo de flores gerberas",
        disponible: true,
        descuento: false,
        destacado: true
    },
    {
        id: "r07",
        nombre: "Gerbera Mimi",
        tipo: "ramos",
        precio: 40000,
        imagen: "../images/productos/ramos/ramos-07.jpg",
        alt: "ramo de flores gerberas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "r08",
        nombre: "Crisantemos y más",
        tipo: "ramos",
        precio: 40000,
        imagen: "../images/productos/ramos/ramos-08.jpg",
        alt: "ramo de flores crisantemos",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "r09",
        nombre: "Caléndula otoñal",
        tipo: "ramos",
        precio: 60000,
        imagen: "../images/productos/ramos/ramos-09.jpg",
        alt: "ramo de flores caléndulas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "r10",
        nombre: "Simplemente gerbera",
        tipo: "ramos",
        precio: 50000,
        imagen: "../images/productos/ramos/ramos-10.jpg",
        alt: "ramo de flores gerberas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "r11",
        nombre: "Siempre rosas rojas",
        tipo: "ramos",
        precio: 50000,
        disponible: true,
        imagen: "../images/productos/ramos/ramos-11.jpg",
        alt: "ramo de flores rosas rojas",
        descuento: false,
        destacado: true
    },
    {
        id: "r12",
        nombre: "Siempre fresias",
        tipo: "ramos",
        precio: 40000,
        imagen: "../images/productos/ramos/ramos-12.jpg",
        alt: "ramo de flores fresias",
        disponible: true,
        descuento: false,
        destacado: true
    },

    //BODAS
    {
        id: "b01",
        nombre: "Bodas | Rosas clásicas",
        tipo: "bodas",
        precio: 50000,
        imagen: "../images/productos/bodas/bodas-01.jpg",
        alt: "ramo de bodas rosas",
        disponible: true,
        descuento: false,
        destacado: true
    },

    {
        id: "b02",
        nombre: "Bodas | Rosas Diamante",
        tipo: "bodas",
        precio: 70000,
        imagen: "../images/productos/bodas/bodas-02.jpg",
        alt: "ramo de bodas rosas con diamantes",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b03",
        nombre: "Bodas | Rosas campestres",
        tipo: "bodas",
        precio: 50000,
        imagen: "../images/productos/bodas/bodas-03.jpg",
        alt: "ramo de bodas con margaritas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b04",
        nombre: "Bodas | Rosas bicolor",
        tipo: "bodas",
        precio: 60000,
        imagen: "../images/productos/bodas/bodas-04.jpg",
        alt: "ramo de bodas rosas de diferentes colores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b05",
        nombre: "Bodas | Popurrí campestre",
        tipo: "bodas",
        precio: 40000,
        imagen: "../images/productos/bodas/bodas-05.jpg",
        alt: "ramo de bodas flores silvestres",
        disponible: true,
        descuento: false,
        destacado: true
    },
    {
        id: "b06",
        nombre: "Bodas | Rosas de primavera",
        tipo: "bodas",
        precio: 60000,
        imagen: "../images/productos/bodas/bodas-06.jpg",
        alt: "ramo de bodas rosas de diferentes tonos",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b07",
        nombre: "Bodas | Rosas modernas",
        tipo: "bodas",
        precio: 50000,
        imagen: "../images/productos/bodas/bodas-07.jpg",
        alt: "ramo de bodas rosas con pelotitas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b08",
        nombre: "Bodas | Margaritas plus",
        tipo: "bodas",
        precio: 40000,
        imagen: "../images/productos/bodas/bodas-08.jpg",
        alt: "ramo de bodas con margaritas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b09",
        nombre: "Bodas | Variedad mini",
        tipo: "bodas",
        precio: 30000,
        imagen: "../images/productos/bodas/bodas-09.jpg",
        alt: "ramo de bodas flores variadas y chicas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b10",
        nombre: "Bodas | Variedad rosal",
        tipo: "bodas",
        precio: 50000,
        imagen: "../images/productos/bodas/bodas-10.jpg",
        alt: "ramo de bodas rosas variadas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b11",
        nombre: "Bodas | Rosas coloridas",
        tipo: "bodas",
        precio: 70000,
        imagen: "../images/productos/bodas/bodas-11.jpg",
        alt: "ramo de bodas rosas variadas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "b12",
        nombre: "Bodas | Variedad plus",
        tipo: "bodas",
        precio: 50000,
        imagen: "../images/productos/bodas/bodas-12.jpg",
        alt: "ramo de bodas con flores variadas",
        disponible: true,
        descuento: false,
        destacado: false
    },

    //DECORACION
    {
        id: "d01",
        nombre: "Jarrón pompom",
        tipo: "decoracion",
        precio: 75000,
        imagen: "../images/productos/decoracion/decoracion-01.jpg",
        alt: "jarrón cilindro transparente con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d02",
        nombre: "Jarrón primaveral",
        tipo: "decoracion",
        precio: 75000,
        imagen: "../images/productos/decoracion/decoracion-02.jpg",
        alt: "jarrón redondo transparente con flores",
        disponible: true,
        descuento: false,
        destacado: true
    },
    {
        id: "d03",
        nombre: "Jarrón rosas y fresias",
        tipo: "decoracion",
        precio: 85000,
        imagen: "../images/productos/decoracion/decoracion-03.jpg",
        alt: "jarrón alargado transparente con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d04",
        nombre: "Jarrón colorido",
        tipo: "decoracion",
        precio: 60000,
        imagen: "../images/productos/decoracion/decoracion-04.jpg",
        alt: "jarrón blanco moderno con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d05",
        nombre: "Jarrón rosado",
        tipo: "decoracion",
        precio: 80000,
        imagen: "../images/productos/decoracion/decoracion-05.jpg",
        alt: "jarrón cerámica rustica rosa con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d06",
        nombre: "Jarrón variedad",
        tipo: "decoracion",
        precio: 55000,
        imagen: "../images/productos/decoracion/decoracion-06.jpg",
        alt: "jarrón cerámica brillante rosa con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d07",
        nombre: "Jarrón rosas",
        tipo: "decoracion",
        precio: 90000,
        imagen: "../images/productos/decoracion/decoracion-07.jpg",
        alt: "jarrón cilindro transparente con rosas",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d08",
        nombre: "Jarrón tulipanes",
        tipo: "decoracion",
        precio: 95000,
        imagen: "../images/productos/decoracion/decoracion-08.jpg",
        alt: "jarrón cilindro transparente con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d09",
        nombre: "Jarrón elegante",
        tipo: "decoracion",
        precio: 75000,
        imagen: "../images/productos/decoracion/decoracion-09.jpg",
        alt: "jarrón cilindro blanco con canaletas con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d10",
        nombre: "Jarrón campestre",
        tipo: "decoracion",
        precio: 60000,
        imagen: "../images/productos/decoracion/decoracion-10.jpg",
        alt: "jarrón esfera transparente con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d11",
        nombre: "Jarrón petit",
        tipo: "decoracion",
        precio: 75000,
        imagen: "../images/productos/decoracion/decoracion-11.jpg",
        alt: "jarrón cuadrado transparente con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "d12",
        nombre: "Jarrón retro",
        tipo: "decoracion",
        precio: 75000,
        imagen: "../images/productos/decoracion/decoracion-12.jpg",
        alt: "jarrón cilindro opaco con flores",
        disponible: true,
        descuento: false,
        destacado: false
    },

    //TALLERES
    {
        id: "t01",
        nombre: "Taller inicial de ramos",
        tipo: "talleres",
        precio: 40000,
        imagen: "../images/productos/talleres/talleres-01.png",
        alt: "flayer taller inicial",
        disponible: true,
        descuento: false,
        destacado: true
    },
    {
        id: "t02",
        nombre: "Taller: ramos de novia",
        tipo: "talleres",
        precio: 50000,
        imagen: "../images/productos/talleres/talleres-02.png",
        alt: "flayer taller ramos de novia",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "t03",
        nombre: "Taller: arreglos florales para decoración",
        tipo: "talleres",
        precio: 60000,
        imagen: "../images/productos/talleres/talleres-03.png",
        alt: "flayer taller arreglos florales para decoracion",
        disponible: true,
        descuento: false,
        destacado: false
    },
    {
        id: "t04",
        nombre: "Taller: ramos estacionales",
        tipo: "talleres",
        precio: 40000,
        imagen: "../images/productos/talleres/talleres-04.png",
        alt: "flayer taller ramos estacionales",
        disponible: true,
        descuento: false,
        destacado: false
    }
]

/* ///////// MUESTREO DE PRODUCTOS ///////// */
//Función sencilla para la creación del card, no va porque necesitamos filtrar
/* function crearCard() {
    let productosHTML = "";

    for (let indice = 0; indice < productosdb.length; indice++) {
        if (productosdb[indice].destacado) {
            productosHTML += // es lo mismo que decir productosHTML = productosHTML++ 
                ` 
        <li class="container__products-card">
            <div class="container__img_product">
                <img class="img_product" src=${productosdb[indice].imagen}>
            </div>
            <div class="container__product-cards-info">
                <div class="cards-info-title">
                <h4 class="txt-body txt-small txt-dark txt-strong">${productosdb[indice].nombre}</h4>
                <button class="btn__heart" type="button" aria-label="Botón me gusta">
                    <i class="bi bi-heart bi-dark bi-small bi-hover"></i>
                    <i class="bi bi-heart-fill bi-dark bi-small bi-hover"></i>
                </button>
            </div>
                <p class="txt-body txt-small txt-dark">Precio: $ ${productosdb[indice].precio}</p>
                <button class="btn-full btn-agregar-carrito btn-full-hover" aria-label="Agregar al carrito" data-action="btn_agregarCarrito">Agregar al carrito</button>
            </div>
        </li>
        `;
        }
    }

    const contenedorProductos = document.getElementById("contenedor-productos-destacados");
    contenedorProductos.innerHTML = productosHTML;
}
crearCard(); */


/* ///////// MUESTREO DE PRODUCTOS CON FILTRO///////// */
//function crearCardsPorFiltro() {
// Variables para almacenar los productos filtrados
let productosRamosHTML = ""; // Para productos categoría ramos
let productosDecoracionHTML = ""; // Para productos categoría decoración
let productosBodasHTML = ""; // Para productos categoría bodas
let productosTalleresHTML = ""; // Para productos categoría talleres
let productosDestacadosHTML = ""; // Para productos destacados (van al home)
let productosDisponiblesHTML = ""; // Para productos disponibles (van a todos los productos)

// Recorrer los productos y clasificarlos según su tipo, destacado o disponibilidad
for (let indice = 0; indice < productosdb.length; indice++) {
    const producto = productosdb[indice];
    const productoHTML = `
                <li class="container__products-card">
                    <div class="container__img_product">
                        <img class="img_product" src=${producto.imagen} alt="${producto.alt}">
                    </div>
                    <div class="container__product-cards-info">
                        <div class="cards-info-title">
                            <h4 class="txt-body txt-small txt-dark txt-strong">${producto.nombre}</h4>
                            <button class="btn__heart" type="button" aria-label="Botón me gusta">
                                <i class="bi bi-heart bi-dark bi-small bi-hover"></i>
                                <i class="bi bi-heart-fill bi-dark bi-small bi-hover"></i>
                            </button>
                        </div>
                        <p class="txt-body txt-small txt-dark">Precio: $ ${producto.precio.toLocaleString('es-ES')}</p>
                        <button class="btn-full btn-agregar-carrito btn-full-hover" aria-label="Agregar al carrito" data-action="btn_agregarCarrito" data-product-id="${indice}">Agregar al carrito</button>
                    </div>
                </li>
            `;

    // Clasificar según tipo
    if (producto.tipo === "ramos") {
        productosRamosHTML += productoHTML;
    } else if (producto.tipo === "bodas") {
        productosBodasHTML += productoHTML;
    } else if (producto.tipo === "decoracion") {
        productosDecoracionHTML += productoHTML;
    } else if (producto.tipo === "talleres") {
        productosTalleresHTML += productoHTML;
    }

    // Clasificar según destacado
    if (producto.destacado) {
        productosDestacadosHTML += productoHTML;
    }

    // Clasificar según disponibilidad
    if (producto.disponible) {
        productosDisponiblesHTML += productoHTML;
    }
}

// Insertar productos en sus contenedores correspondientes (primero verifica que el contenedor exista en esa page)
if (document.getElementById("contenedor-productos-ramos")) {
    document.getElementById("contenedor-productos-ramos").innerHTML = productosRamosHTML;
}
if (document.getElementById("contenedor-productos-decoracion")) {
    document.getElementById("contenedor-productos-decoracion").innerHTML = productosDecoracionHTML;
}
if (document.getElementById("contenedor-productos-bodas")) {
    document.getElementById("contenedor-productos-bodas").innerHTML = productosBodasHTML;
}
if (document.getElementById("contenedor-productos-talleres")) {
    document.getElementById("contenedor-productos-talleres").innerHTML = productosTalleresHTML;
}
if (document.getElementById("contenedor-productos-destacados")) {
    document.getElementById("contenedor-productos-destacados").innerHTML = productosDestacadosHTML;
}
if (document.getElementById("contenedor-productos-disponibles")) {
    document.getElementById("contenedor-productos-disponibles").innerHTML = productosDisponiblesHTML;
}
//}

/* ///////// CARRITO ///////// */

//declarar variables
const btnsAgregarCarrito = document.querySelectorAll('[data-action="btn_agregarCarrito"]');
const listaCarrito = document.querySelector('#carrito ul');
const totalCarrito = document.querySelector('#total-carrito');
const mensajeCarrito = document.querySelector('#mensaje-carrito');
const verCarrito = document.querySelector('#carrito');
const btn_cerrarCarrito = document.querySelector('[data-action="btn_cerrarCarrito"]')
let totalPagar = 0;

// Función para actualizar el total
function actualizarTotal() {
    totalCarrito.innerText = "$ " + totalPagar.toLocaleString('es-ES');
}

function mostrarCarrito() {
    verCarrito.classList.add('mostrar-carrito');
}

function cerrarCarrito() {
    verCarrito.classList.remove('mostrar-carrito');
}

//agregamos el listener al botón cerrar carrito
if (btn_cerrarCarrito) {
    btn_cerrarCarrito.addEventListener("click", cerrarCarrito);
}

// Función para agregar el producto al carrito PERO!!! seleccionando por el data-product-id de cada botón (agrgado dinámicamente en la creación de las cards de productos)
function agregarElementoCarrito(event) {
    const indice = event.target.dataset.productId;
    const producto = productosdb[indice];

    if (!producto) {
        console.error("Producto no encontrado");
        return;
    }

    mostrarCarrito();

    const elementoLi = document.createElement("li");
    elementoLi.classList.add("container__carrito-card-producto")
    elementoLi.innerHTML = `
		        <div class="carrito-producto-info">
                        <img class="img__carrito-producto" src=${producto.imagen} alt=${producto.alt}>
                        <p class="txt-body txt-dark txt-small">${producto.nombre}</p>
                    </div>
                    <p class="txt-body txt-dark txt-small carrito-producto-precio">$ ${producto.precio.toLocaleString('es-ES')}</p>
                    <button data-action="btn_eliminarProducto" class="btn_eliminarProducto" aria-label="btn_eliminarProducto"><i class="bi bi-dark bi-small bi-hover bi-trash"></i></button>
                `;

    // Agregamos el evento al botón eliminar
    const btnEliminarProducto = elementoLi.querySelector('[data-action="btn_eliminarProducto"]');
    btnEliminarProducto.addEventListener("click", () => eliminarElementoCarrito(elementoLi, producto.precio));

    listaCarrito.appendChild(elementoLi);
    totalPagar += producto.precio;
    actualizarTotal();
    mensajeCarrito.innerText = "";
}

// Función para eliminar un producto específico del carrito
function eliminarElementoCarrito(elemento, precio) {
    listaCarrito.removeChild(elemento);
    totalPagar -= precio;
    actualizarTotal();

    if (listaCarrito.children.length === 0) {
        mensajeCarrito.innerText = "No hay productos en el carrito";
    }
}

//agregamos el listener a los botones de agrgar carrito
btnsAgregarCarrito.forEach(btn => {
    btn.addEventListener("click", agregarElementoCarrito);
});

// Función para borrar/vaciar el carrito
function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalPagar = 0;
    actualizarTotal();
    mensajeCarrito.innerText = "No hay productos en el carrito"
}

//agregamos el listener al botón borrar/vaciar
document.getElementById('btn-borrar').addEventListener("click", borrarCarrito);


// Función para ir a pagar
function irAPagar() {
    if (listaCarrito.children.length === 0) {
        mensajeCarrito.innerText = "No has seleccionado ningún producto";
    } else {
        window.open("../pages/pagos.html", "_blank");
        //window.location.href = "./pages/pagos.html"
    }
}

//agregamos el listener al botón pagar
document.getElementById('btn-pagar').addEventListener("click", irAPagar);


/* ///////// MOSTRAR PRODUCTOS DISPONIBLES EN LA CONSOLA ///////// */
for (let indice = 0; indice < productosdb.length; indice++) {
    if (productosdb[indice].disponible === true) {
        console.log(productosdb[indice].nombre + " está en stock");
    } else {
        console.log(productosdb[indice].nombre + " no está en stock");
    }
}

//crearCardsPorFiltro();