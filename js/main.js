// main.js

// Variable para llevar el registro
var contadorDeUso = 0;

function enviarPorWhatsApp() {
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    // Formar el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    // Abrir enlace en una nueva ventana
    window.open(enlaceWhatsApp);

    // Incrementar el contador
    contadorDeUso++;

    // Actualizar el contador en el HTML
    console.log("La función ha sido ejecutada " + contadorDeUso + " veces.");
}
