document.querySelector('#formularioUsuario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var fechaNacimiento = document.querySelector('#fechaNacimiento').value;
    var ciudad = document.querySelector('#ciudad').value;

    var fechaNacimientoObj = new Date(fechaNacimiento);
    var hoy = new Date();

    // Verificar que la fecha de nacimiento no sea futura
    if (fechaNacimientoObj > hoy) {
        alert("La fecha de nacimiento no puede ser en el futuro.");
        return;
    }

 
    var diasVividos = (hoy - fechaNacimientoObj) / (1000 * 60 * 60 * 24);


    var mensajeBienvenidaHTML = '<p>¡Bienvenido, ' + nombre + ' ' + apellido + ' de ' + ciudad + '!</p>';
    var mensajeDiasVividosHTML = '<p>Has vivido aproximadamente ' + diasVividos + ' días.</p>';

    document.querySelector('#mensajeBienvenida').innerHTML = mensajeBienvenidaHTML + mensajeDiasVividosHTML;
});
