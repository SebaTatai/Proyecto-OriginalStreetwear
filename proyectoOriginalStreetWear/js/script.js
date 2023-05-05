//Validaciones SJ HTML

function validar(){
  var nombre, apellido, correo, password, text;
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  correo = document.getElementById("correo").value;
  password = document.getElementById("password").value;

  if (nombre.length == 0){
      text = "El nombre no debe estar vacío";   
      document.getElementById("valida_nombre").style.color = "red";
  }else{
      text = "";
      document.getElementById("valida_nombre").style.color = "black";
  }
  document.getElementById("valida_nombre").innerHTML = text;

  if (apellido.length == 0){
      text = "El apellido no debe estar vacío";   
      document.getElementById("valida_apellido").style.color = "red";
  }else{
      text = "";
      document.getElementById("valida_apellido").style.color = "black";
  }
  document.getElementById("valida_apellido").innerHTML = text;

  if (correo.length == 0){
      text = "El correo no debe estar vacío";   
      document.getElementById("valida_correo").style.color = "red";
  }else{
      text = "";
      document.getElementById("valida_correo").style.color = "black";
  }
  document.getElementById("valida_correo").innerHTML = text;

  if (password.length != 8){
      text = "La contraseña debe tener una longitud de 8 caracteres";
      document.getElementById("valida_password").style.color = "red";
  }else{
      text = "";
      document.getElementById("valida_password").style.color = "black";
  }
  document.getElementById("valida_password").innerHTML = text;
}






//Validacioens en JQuery

$(document).ready(function() {
  // Cuando se haga clic en el botón "Ingresar"
  $("button[type='button']").click(function() {
    // Obtener los valores de los campos de correo electrónico y contraseña
    var email = $("#form2Example1").val();
    var password = $("#form2Example2").val();

    // Validar que ambos campos no estén vacíos
    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }

    // Validar que el correo electrónico tenga formato válido
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }

    // Si todas las validaciones son exitosas, se envía el formulario
    alert("¡Inicio de sesión exitoso!");
    return true;
  });
});
