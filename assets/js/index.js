

function sendToWhatsApp() {
    var name = document.getElementById("name").value;
    var attendees = document.getElementById("attendees").value;
    var attendees2 = document.getElementById("attendees2").value;
    if (name && attendees && attendees2) {
        var message = `Hola, mi nombre es ${name}, la cantidad de mayores que asistimos a la fiesta es: ${attendees} y de menores es: ${attendees2}.`;

        // Reemplaza '1234567890' con el número de teléfono al que deseas enviar el mensaje (sin el '+')
        var phoneNumber = '5493516426244';

        var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    } else {
        var alertContainer = document.getElementById("alert-container");
        alertContainer.innerHTML = `
                                              <div class="alert alert-warning" role="alert">
                                ¡Se deben completar todos los campos!
                                               
            </div>
        `;

        // Desaparecer la alerta después de 5 segundos
        setTimeout(function () {
            alertContainer.innerHTML = '';  // Limpiar el contenido de la alerta
        }, 5000);  // 5000 milisegundos = 5 segundos

    }

}