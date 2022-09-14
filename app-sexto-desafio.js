

/* Funcion para convertir a entero.
si era un entero no influye. Si no lo era, lo intenta convertir */

function validarEntero(valor){
   valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
          //entonces (no es numero) devuelvo el valor cadena vacia
          return ""
    }else{
          //En caso contrario (Si era un número) devuelvo el valor
          return valor
    }
}



//Funncion para validar los datos ingresados

function valida_envia(){
    
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus() // uso focus para hacer foco en el campo selecionado
           return 0;
    }

    //Valido el apellido
    if (document.fvalida.apellido.value.length==0 ){
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0;
       }

 
    //valido el DNI. tiene que ser entero.
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



    //validar el curso

    if (document.fvalida.curso.selectedIndex==0){
           alert("Debe seleccionar un curso.")
           document.fvalida.curso.focus()
           return 0;
    }
 
    // Envío del formulario
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}