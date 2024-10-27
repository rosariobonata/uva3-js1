document.querySelector('#formularioUsuario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var fechaNacimiento = document.querySelector('#fechaNacimiento').value;
    var ciudad = document.querySelector('#ciudad').value;

    var fechaNacimientoObj = new Date(fechaNacimiento);
    var hoy = new Date();

    // Calcular los días vividos
    var diasVividos = Math.floor((hoy - fechaNacimientoObj) / (1000 * 60 * 60 * 24));

    // Generar el mensaje
    var mensajeBienvenidaHTML = '<p>¡Bienvenido, ' + nombre + ' ' + apellido + ' de ' + ciudad + '!</p>';
    var mensajeDiasVividosHTML = '<p>Has vivido aproximadamente ' + diasVividos + ' días.</p>';

    document.querySelector('#mensajeBienvenida').innerHTML = mensajeBienvenidaHTML + mensajeDiasVividosHTML;
});
