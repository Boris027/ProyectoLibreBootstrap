/****************************************/
/*     Js: Dawn of the seven            */
/*     Made by: Boris Gallego Ríos      */
/*     Versión 1.0                      */
/****************************************/

/*Chequea que se rellene correctamente el formulario */
function validacion(){
    let devolver=true;
    
    let nombre=document.getElementById('examplename').value;
    if(nombre==""){
        document.getElementById('examplename').style.borderColor="red"
        document.getElementById('nombreingresar').style.display="block";
        devolver=false;
    }

    let apellidos=document.getElementById('exampleapellido').value;
    if(apellidos==""){
        
        document.getElementById('exampleapellido').style.borderColor="red";
        document.getElementById('apellidosingresar').style.display="block";

        devolver=false;
    }

    let email=document.getElementById('exampleInputEmail1').value;
    if(email==""){
        
        document.getElementById('exampleInputEmail1').style.borderColor="red";
        document.getElementById('correoingresar').style.display="block";

        devolver=false;
    }else if(!validarCorreo(email)){
        document.getElementById('correoingresarcorrecto').style.display="block";
        devolver=false;

    }

    let mensaje=document.getElementById('mensajelargoform').value;
    if(mensaje==""){
        
        document.getElementById('mensajelargoform').style.borderColor="red";
        document.getElementById('mensajeingresar').style.display="block";

        devolver=false;
    }

    let checkbox=document.getElementById("exampleCheck1")
    if (!checkbox.checked) {
        document.getElementById('exampleCheck1').style.borderColor="red";
        document.getElementById('mensajecheckbox').style.display="block";
        devolver= false;
    }

    return devolver;
}

/*Elimina los  mensajes de error al escribir en las casilla */
function eliminarerror1(id1,id2){
    document.getElementById(id2).style.display= "none";
    document.getElementById(id1).style.borderColor="lightgray"
}

/*Elimina los 2 mensajes de error al escribir en la casilla del correo */
function eliminarerror2(id1,id2,id3){
    document.getElementById(id2).style.display= "none";
    document.getElementById(id3).style.display= "none";
    document.getElementById(id1).style.borderColor="lightgray"
}

/*Si se le da a que no aceptas las condiciones, se deschequea la casilla */
function deseleccionarCheckbox(){
    document.getElementById("exampleCheck1").checked = false;
}

/*esta funcion la busque por internet*/
function validarCorreo(email) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
    return regexCorreo.test(email);
}

