///////////////// VERIFICACIÓN DE LOS INPUTS ///////////////// 
/* El método trim() elimina los espacios en blanco al principio y al final del valor del input, 
para evitar que se consideren como texto válido si el usuario solo ingresó espacios. */

// Selección de elementos del DOM
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputMessage = document.getElementById('input-message');
const inputPhone = document.getElementById('input-phone');
const btnFormulario = document.querySelector('[data-action="btn_formulario"]');


// Validar la existencia del botón del formulario antes de agregar el evento
if (btnFormulario) {
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
        --> pero no contemplo si el formato es el adecuado y si el usuario ingresó el + al inicio 
    
        Entonces validamos si:
        (\+54|54)?: si se ingresó el prefijo internacional +54 o 54. (su ingreso es opcional)
        9?: si se ingresó un 9 (celulares en Argentina suelen incluirlo) (su ingreso opcional).
        [1-9]: nos asegura que el número no comience con 0.
        [0-9]{9}: obliga a que el resto sean 9 dígitos numéricos.
    
    */

    // Manejo del evento click en el botón enviar formuario
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
        if (!nombreValido || !emailValido || !phoneValido || !mensajeValido) {
            event.preventDefault(); // Evita el envío si algún campo está vacío o es inválido
        }
    });
}
