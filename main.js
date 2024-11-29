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

// VERIFICACIÓN DE LOS INPUTS
/* El método trim() elimina los espacios en blanco al principio y al final del valor del input, 
para evitar que se consideren como texto válido si el usuario solo ingresó espacios. */   

// Selección de elementos del DOM
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputMessage = document.getElementById('input-message');
const btnFormulario = document.getElementById('btn-formulario');

// Función para validar campos de entrada (que no queden vacíos) y mostrar error 
function validarCampo(input, error, mensajeError) {
    if (input.value.trim() === '') {
        console.log(`Error: ${mensajeError}`);
        error.innerText = mensajeError;
        error.classList.add('mostrar-mensaje-error');
        input.classList.add('input-error');
        return false;
    } else {
        error.classList.remove('mostrar-mensaje-error');
        input.classList.remove('input-error');
        console.log(`Ok: El campo obligatorio '${mensajeError.split(" ")[2]}' se ha completado`);
        return true;
    }
}

// Validación específica para el email
function validarEmail(input, error) {
    const emailFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para formato de email
    if (input.value.trim() === '') {
        console.log("Error: El campo 'E-mail' está vacío y es obligatorio");
        error.innerText = "Por favor, ingresá un e-mail.";
        error.classList.add('mostrar-mensaje-error');
        input.classList.add('input-error');
        return false;
    } else if (!emailFormato.test(input.value.trim())) {
        console.log("Error: El formato del e-mail no es válido");
        error.innerText = "El formato del e-mail no es válido.";
        error.classList.add('mostrar-mensaje-error');
        input.classList.add('input-error');
        return false;
    } else {
        error.classList.remove('mostrar-mensaje-error');
        input.classList.remove('input-error');
        console.log("Ok: El campo obligatorio 'E-mail' se ha completado");
        return true;
    }
}

// Manejo del evento click
btnFormulario.addEventListener('click', function (event) {
    // Selección de los elementos de error
    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorMessage = document.getElementById('errorMessage');
    
    // Validaciones individuales
    const nombreValido = validarCampo(inputName, errorName, "Por favor, ingresá un nombre.");
    const emailValido = validarEmail(inputEmail, errorEmail);
    const mensajeValido = validarCampo(inputMessage, errorMessage, "Por favor, ingresá un mensaje.");
    
    // Prevención del envío del formulario si hay errores
    if (!nombreValido || !emailValido || !mensajeValido) {
        event.preventDefault(); // Evita el envío si algún campo está vacío o es inválido
    }
});