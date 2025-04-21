// Inicializar EmailJS con tu User ID
emailjs.init("topNg38j9LTlBzeSQ");

// Manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Enviar el formulario a través de EmailJS
    emailjs.sendForm('sfm', 'template_ji5zawe', this)
        .then(function() {
            alert("¡Correo enviado con éxito!");
            // Limpiar el formulario después del envío exitoso
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert("Hubo un error al enviar el correo: " + JSON.stringify(error));
        });
}); 