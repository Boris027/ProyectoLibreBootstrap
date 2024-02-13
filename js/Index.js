function validacion(){
    alert("hola que hase")
    let devolver=true;
    let nombre=document.getElementById('examplename').value;
    if(nombre=="" || /^\s+$/.test(nombre)){
        alert("so");
        document.getElementById('examplename').style.borderColor="red"
        devolver=false;
    }

    let apellidos=document.getElementById('apellidos').value;
    if(apellidos==""){
        document.getElementById('nombreingresar').style.display= "";
        document.getElementById('apellidos').style.borderColor="red"
        devolver=false;
    }

    return devolver;
}