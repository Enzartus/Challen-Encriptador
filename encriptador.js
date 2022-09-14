function encriptar() {
    var rectangulo = document.getElementById("rectangulo");
    var imagen = document.getElementById("mensaje-encriptar");
    var leyenda = document.getElementById("leyenda");
    var mensaje = document.getElementById("mensaje").value;
    var textarea = document.createElement("textarea");

    if (mensaje != "") {
        imagen.style.display = "none";
        leyenda.style.display = "none";

        textarea.disabled = "disabled";
        textarea.value = encriptarMensaje(mensaje);
        textarea.className = "mensaje-respuesta";
        rectangulo.appendChild(textarea);
    }
}

function encriptarMensaje(texto) {
    var a = "ai";
    var e = "enter";
    var i = "imes";
    var o = "ober";
    var u = "ufat";

    for (let index = 0; index < texto.length; index++) {
        if (texto.charAt(index) == 'a') {
            texto.charAt(index) = 'ai';
        }
    }
    return texto;
}

/*function buttonCopiar() {
    var button = document.createElement("button");
    button.type = "button";
    button.textContent = "Copiar";
    button.value = "Copiar";
    button.className = "desencriptar";

    var rectangulo = document.getElementById("rectangulo");
    rectangulo.appendChild(button);
}*/