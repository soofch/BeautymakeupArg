document.getElementById('turnoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los valores de los campos del formulario de contacto
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var fecha = document.getElementById('fecha').value;
  
    // Mostrar los valores de la consola,  en el formulario de turno
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Fecha de Turno:', fecha);
  
    // Ventana pop up de alerta al arbrir la pagina
  });

  window.onload = function() {
    var alertBox = document.getElementById("alertContainer");
    setTimeout(function() {
        alertBox.style.display = "none";
    }, 5000);
};