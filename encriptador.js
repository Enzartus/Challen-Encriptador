function encriptar() {
    
    var imagen = document.getElementById("mensaje-encriptar");
    var leyenda = document.getElementById("leyenda");
    var mensaje = document.getElementById("mensaje").value;
    var textarea = document.getElementById("enc-des");
    var botonCopiar = document.getElementById("copiar");

    if (mensaje != "") {

        imagen.style.display = "none";
        leyenda.style.display = "none";
        textarea.style.visibility = "visible";
        botonCopiar.style.visibility = "visible";

        textarea.value = encriptarMensaje(mensaje);
        document.getElementById("mensaje").value = "";
    }

}

function encriptarMensaje(texto) {

    var a = 'ai';
    var e = 'enter';
    var i = 'imes';
    var o = 'ober';
    var u = 'ufat';
    var tem = [];

    tem.length = texto.length;

    for (let index = 0; index < tem.length; index++) {
        tem[index] = texto.charAt(index);
    }

    for (let l = 0; l < tem.length; l++) {

        if (tem[l] == 'a') {

            tem[l] = a;

        }else if (tem[l] == 'e') {

            tem[l] = e;

        }else if(tem[l] == 'i'){

            tem[l] = i;

        }else if(tem[l] == 'o'){

            tem[l] = o;

        }else if(tem[l] == 'u'){
            
            tem[l] = u;

        }
        
    }
    
    texto = tem.toString().replace(/,/g,"");
    
    return texto;

}

function desencriptar() {
    
    var imagen = document.getElementById("mensaje-encriptar");
    var leyenda = document.getElementById("leyenda");
    var mensaje = document.getElementById("mensaje").value;
    var textarea = document.getElementById("enc-des");
    var botonCopiar = document.getElementById("copiar");

    if (mensaje != "") {

        imagen.style.display = "none";
        leyenda.style.display = "none";
        textarea.style.visibility = "visible";
        botonCopiar.style.visibility = "visible";

        textarea.value = desencriptarMensaje(mensaje);
        document.getElementById("mensaje").value = "";
    }

}

function desencriptarMensaje(mensaje) {

    mensaje = mensaje.replaceAll('ai','a');
    mensaje = mensaje.replaceAll('enter','e');
    mensaje = mensaje.replaceAll('imes','i');
    mensaje = mensaje.replaceAll('ober','o');
    mensaje = mensaje.replaceAll('ufat','u');

    return mensaje;
    
}

function buttonCopiar() {

    var textarea = document.getElementById("enc-des");
    textarea.select();
    document.execCommand('copy');

}