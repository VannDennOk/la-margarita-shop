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
const inputPhone = document.getElementById('input-phone');
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

// Validación específica para el teléfono (solo números de Argentina)
function validarPhone(input, error) {
    const phoneFormatoArg = /^(\+54|54)?9?[1-9][0-9]{9}$/; // Expresión regular para formato de teléfono de argentina
    const phoneFormato = input.value.trim(); 
    if (phoneFormato !== '' && !phoneFormatoArg.test(phoneFormato)) { // En este caso solo tira error si el campo ha sido completado, ya que no es obligatorio.
        console.log("Error: El formato del Teléfono no es válido");
        error.innerText = "El teléfono no cumple con el formato argentino. Ingrese los números sin espacios, guiones o paréntesis y sin el 0 delante del código de área. Ej.: +5491168611033. El código de país es opcional.";
        error.classList.add('mostrar-mensaje-error');
        input.classList.add('input-error');
        return false;
    } else {
        error.classList.remove('mostrar-mensaje-error'); // si el campo no se completa o tiene un formato válido, no sale error y se envía el formulario
        input.classList.remove('input-error');
        console.log("Ok: El campo teléfono se ha dejado vacío o se ha completado correctamente");
        return true;
    }
}

/*
    Sobre la validación del número
    podría plantear el inicio del if así:
    if (phoneFormato !== '' && isNaN(phoneFormato) || phoneFormato.length <= 8 || phoneFormato.length >= 12) {
    --> al usar isNaN verifico que lo ingresado sean solo números, y luego verifica que esté en un largo promedio de los núemros argentinos
    --> pero no contemplo si el formato es el adecuado y si el usuario ingresó algún otro caracter común como +, () o -  

    Entonces validamos si:
    (\+54|54)?: si se ingresó el prefijo internacional +54 o 54. (opcional)
    9?: si se ingresó un 9 (celulares en Argentina suelen incluirlo) (opcional).
    [1-9]: nos asegura que el número no comience con 0.
    [0-9]{9}: obliga a que el resto sean 9 dígitos numéricos.

*/

// Manejo del evento click
btnFormulario.addEventListener('click', function (event) {
    // Selección de los elementos de error
    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorPhone = document.getElementById('errorPhone');
    const errorMessage = document.getElementById('errorMessage');

    // Validaciones individuales
    const nombreValido = validarCampo(inputName, errorName, "Por favor, ingresá un nombre.");
    const emailValido = validarEmail(inputEmail, errorEmail);
    const phoneValido = validarPhone(inputPhone, errorPhone);
    const mensajeValido = validarCampo(inputMessage, errorMessage, "Por favor, ingresá un mensaje.");

    // Prevención del envío del formulario si hay errores
    if (!nombreValido || !emailValido  || !phoneValido || !mensajeValido) {
        event.preventDefault(); // Evita el envío si algún campo está vacío o es inválido
    }
});