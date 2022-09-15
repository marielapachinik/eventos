
/* En éste desafio hice un programa de inscripcion en formato autogestión para que
directamente se inscriban los alumnos */



/* Funcion para convertir a entero.
si era un entero no influye. Si no lo era, lo intenta convertir */

function validarEntero(valor){
   valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
          //entonces (no es numero) devuelvo un string vacío
          return ""
    }else{
          //En caso contrario, devuelvo el valor
          return valor
    }
}




function validarEmail(valor) {
       if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
              return valor;
       } else {
        alert("La dirección de email es incorrecta!.");
        return false;
       }
     }



//Funcion principal para validar los datos ingresados

function valida_envia(){
    
    //valido el nombre. No debe quedar el campo vacio.
    
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus() // uso focus para hacer foco en el campo selecionado
           return 0;
    }

    //Valido el apellido. No debe quedar el campo vacio.
    
    if (document.fvalida.apellido.value.length==0 ){
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0;
       }

 
    //valido el DNI. Tiene que ser un número entero.
    
    dni = document.fvalida.dni.value
    dni = validarEntero(dni)
    document.fvalida.dni.value=dni
    if (dni==""){
           alert("Tiene que introducir un número de documento.")
           document.fvalida.dni.focus()
           return 0;
    }else{
           if (dni>99999999){
                  alert("El DNI ingresado no es valido.")
                  document.fvalida.dni.focus()
                  return 0;
              }
    }

    // Valido el email.
    
    email = document.fvalida.email.value
    email = validarEmail(email)
    document.fvalida.email.value=email
    if (email==""){
           alert("Debe introducir un correo electronico valido.")
           document.fvalida.email.focus()
           return 0;
    }else{
           if (email==false){
                  alert("El correo ingresado no es valido.")
                  document.fvalida.email.focus()
                  return 0;
              }
    }

    


    //valido el curso

    if (document.fvalida.curso.selectedIndex==0){
           alert("Debe seleccionar un curso.")
           document.fvalida.curso.focus()
           return 0;
    }


 
    // Envío del formulario
    
    alert("Formulario completado con éxito \n Pronto recibirá un correo para confirmar la inscripción");
    document.fvalida.submit();
}
