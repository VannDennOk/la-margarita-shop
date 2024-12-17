///////////////// BOTON PARA CERRAR PÁGINA/VENTANA (PAGE NOT FOUND) ///////////////// 
//document.querySelector('[data-action="btn_cerrarVentana"]').addEventListener('click', function() {
//    window.close();
//});

document.addEventListener("DOMContentLoaded", function () {
    const btnCerrarVentana = document.querySelector('[data-action="btn_cerrarVentana"]');
    if (btnCerrarVentana) {
        btnCerrarVentana.addEventListener("click", function () {
            window.close();
        });
    }
});