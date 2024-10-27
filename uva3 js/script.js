document.querySelector('#formularioUsuario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var fechaNacimiento = document.querySelector('#fechaNacimiento').value;
    var ciudad = document.querySelector('#ciudad').value;

    var fechaNacimientoObj = new Date(fechaNacimiento);
    var hoy = new Date();

    var diasVividos = 0;

    var añoNacimiento = fechaNacimientoObj.getFullYear();
    var mesNacimiento = fechaNacimientoObj.getMonth();
    var diaNacimiento = fechaNacimientoObj.getDate();

    var añoHoy = hoy.getFullYear();
    var mesHoy = hoy.getMonth();
    var diaHoy = hoy.getDate();

    diasVividos += (añoHoy - añoNacimiento) * 365;

    for (var mes = 0; mes < mesHoy; mes++) {
        diasVividos += new Date(añoHoy, mes + 1, 0).getDate();
    }

    diasVividos -= new Date(añoNacimiento, mesNacimiento + 1, 0).getDate() - diaNacimiento;

    diasVividos += diaHoy;

    var mensajeBienvenidaHTML = '<p>¡Bienvenido, ' + nombre + ' ' + apellido + ' de ' + ciudad + '!</p>';
    var mensajeDiasVividosHTML = '<p>Has vivido aproximadamente ' + diasVividos + ' días.</p>';

    document.querySelector('#mensajeBienvenida').innerHTML = mensajeBienvenidaHTML + mensajeDiasVividosHTML;
});
