/*TODO ESTO ES PROVISORIO HASTA QUE VEAMOS BIEN JAVA EN CLASE!!!*/

/*BOTONES DE ENLACES*/
// Mapeamos cada botón con su URL de destino
const buttonRutas = {
    "btn_irProductos": "pages/productos.html",
    "btn_irRamos": "pages/productos-ramos.html",
    "btn_irDecoracion": "pages/productos-decoración.html",
    "btn_irBodas": "pages/productos-bodas.html",
    "btn_irProductos2": "pages/productos.html",
    "btn_irTalleres": "pages/talleres.html",
    "btn_irNosotras": "pages/nosotras.html",
    "btn_irOpiniones": "pages/opiniones.html"
};

// Asignamos el evento de click a cada botón según el mapeo
Object.keys(buttonRutas).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener("click", function () {
            window.location.href = buttonRutas[buttonId];
        });
    }
});

/* BOTON PARA IR ARRIBA CON EFECTO */
const btnUp = document.getElementById("btn-up");
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




