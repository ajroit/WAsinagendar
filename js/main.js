// main.js
function enviarPorWhatsApp() {
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    // Formar el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    // Abrir enlace en una nueva ventana
    window.open(enlaceWhatsApp);
}
