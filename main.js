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

/* VERIFICACIÓN DE LOS INPUTS */
/* El método trim() elimina los espacios en blanco al principio y al final del valor del input, 
para evitar que se consideren como texto válido si el usuario solo ingresó espacios. */   

const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputMessage = document.getElementById('input-message');
const btnFormulario = document.getElementById('btn-formulario');

btnFormulario.addEventListener('click', function () { 

const inputValueName = inputName.value;   
const errorName = document.getElementById('errorName');     
if (inputValueName.trim() === ''){
    console.log("Error: el campo 'Nombre' está vacío y es obligatorio");
    errorName.innerText = "Por favor, ingresá un nombre.";
    errorName.classList.add("mostrar-mensaje-error");
    inputName.classList.add("input-error");
} else {
    console.log("Ok: el campo obligatorio 'Nombre' se ha completado");
}

const inputValueEmail = inputEmail.value;
const errorEmail = document.getElementById('errorEmail');    
if (inputValueEmail.trim() === ''){
    console.log("Error:  el campo 'E-mail' está vacío y es obligatorio");
    errorEmail.innerText = "Por favor, ingresá un e-mail válido.";
    errorEmail.classList.add("mostrar-mensaje-error");
    inputEmail.classList.add("input-error");
} else {
    console.log("Ok: el campo obligatorio 'E-mail' se ha completado");
}

const inputValueMessage = inputMessage.value;
const errorMessage = document.getElementById('errorMessage');    
if (inputValueMessage.trim() === ''){
    console.log("Error: el campo 'Mensaje' está vacío y es obligatorio");
    errorMessage.innerText = "Por favor, ingresá un mensaje.";
    errorMessage.classList.add("mostrar-mensaje-error");
    inputMessage.classList.add("input-error");
} else {
    console.log("Ok: el campo obligatorio 'Mensaje' se ha completado");
}


const errorPopup = document.getElementById('popup-form');
const btnContinuar = document.getElementById('btn-continuar');
if (inputValueName.trim() === '' && inputValueEmail.trim() === '' && inputValueMessage.trim() === '') {
    console.log("Error: hay campos obligatoriso sin completar");
    errorPopup.classList.add("mostrar-popup__form");
    btnContinuar.addEventListener('click', function () {
        errorPopup.classList.add("ocultar-popup__form");
    })
}

});