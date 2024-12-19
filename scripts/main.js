///////////////// BOTONES DE ENLACES /////////////////
// Mapeamos cada botón con su URL de destino
const buttonRutas = {
    "btn_irProductos": "/pages/productos.html",
    "btn_irRamos": "/pages/productos-ramos.html",
    "btn_irDecoracion": "/pages/productos-decoración.html",
    "btn_irBodas": "/pages/productos-bodas.html",
    "btn_irTalleres": "/pages/talleres.html",
    "btn_irNosotras": "/pages/nosotras.html",
    "btn_irOpiniones": "/pages/opiniones.html",
    "btn_enviarMail": "mailto:lamargarita.shop@gmail.com",
    "btn_irGoogleMaps": "https://maps.app.goo.gl/A2tasdKRbdA3P8t89",
    "btn_iniciarWA": "https://wa.me/5491168611033",
    "btn_irFacebook": "/pages/pagenotfound.html",
    "btn_irInstagram": "/pages/pagenotfound.html",
    "btn_irPinterest": "/pages/pagenotfound.html",
    "btn_irYoutube": "/pages/pagenotfound.html"
};

// Código para llamar a los botones por data-action y abrir algunas rutas en páginas distintas
document.querySelectorAll("[data-action]").forEach(button => {
    const action = button.getAttribute("data-action");
    if (buttonRutas[action]) {
        button.addEventListener("click", function () {
            const url = buttonRutas[action];
            // Abrir en nueva pestaña para acciones específicas
            if (action === "btn_irGoogleMaps"
                || action === "btn_iniciarWA"
                || action === "btn_irFacebook"
                || action === "btn_irInstagram"
                || action === "btn_irPinterest"
                || action === "btn_irYoutube"
            ) {
                window.open(url, "_blank");
            } else {
                window.location.href = url;
            }
        });
    }
});

///////////////// BOTON PARA IR ARRIBA CON EFECTO ///////////////// 
//const btnUp = document.getElementById("btn_irArriba");
const btnUp = document.querySelector('[data-action="btn_irArriba"]');
btnUp.addEventListener("click", scrollUp);

function scrollUp() {
    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - currentScroll / 0.5); // Ajuste para un desplazamiento más rápido, ojo que en css está aplicado scroll-behavior: smooth para el html
    }
}

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    btnUp.style.transform = scroll > 500 ? "scale(1)" : "scale(0)";
});

// Mostrar/ocultar menú hamburguesa
const nav = document.querySelector('#nav-list');
const abrirMenu = document.querySelector('[data-action="btn_abrirMenu"]');
const cerrarMenu = document.querySelector('[data-action="btn_cerrarMenu"]');
const navLinks = document.querySelectorAll('#nav-links a');

abrirMenu.addEventListener("click", () => {
    nav.classList.add("nav-visible");
});

cerrarMenu.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-visible");
    });
});
