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

$(document).ready(function(){
  $(".errorcorreoelectronico").hide();
  $("#ingresar").click(function(){
      var correoelectronico="";
      correoelectronico = $("#correoelectronico").val();
      if (correoelectronico.length == 0){
          $(".errorcorreo").show();
      }else{
          $(".errorcorreo").hide();
      }
  });
});

$(document).ready(function(){
  $(".errorcontraseña").hide();
  $("#ingresar").click(function(){
      var contraseña="";
      contraseña = $("#contraseña").val();
      if (contraseña.length == 0){
          $(".errorcontraseña").show();
      }else{
          $(".errorcontraseña").hide();
      }
  });
});

// Realiza una solicitud a la API de Tawk.to
fetch('https://api.tawk.to/v1/analytics/visitors')
  .then(response => response.json()) // Analiza la respuesta JSON
  .then(data => {
    // Accede a los datos que necesitas y utilízalos en tu aplicación
    console.log(data); // Por ejemplo, muestra los datos en la consola
  })
  .catch(error => {
    // Maneja cualquier error de la solicitud
    console.error('Error:', error);
  });


  
  
  
  
  
  

  