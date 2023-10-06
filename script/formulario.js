//Alvaro Dromant
//

const validarnombre = nombre => {
    if (nombre === "") {
    alert ("El nombre no puede estar vacio");
    return false;
    }
    return true;
}

const validarapellidos = apellidos => {
    if (apellidos === "") {
    alert ("El campo apellidos no puede estar vacio");
    return false;
    }
    return true;
}

const validarContraseña = password => {
    if(password.length < 8){
        alert("La contraseña debe tener al menos 8 caracteres")
        return false
    }

    return true
}

const validarcorreo = correo => {
    if (correo === "") {
    alert ("El correo no puede estar vacio");
    return false;
    }
    return true;
}

const validarFormulario = () => {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    return validarnombre(nombre) && validarapellidos(apellidos) && validarcorreo(correo) && validarContraseña(password);

}

document.getElementById("registrarse").onsubmit = () => {
    return validarFormulario();
}

const enviarformulario = () => {
    if(validarformulario()) {
        return true;
    } else {
        return false;
    }
}