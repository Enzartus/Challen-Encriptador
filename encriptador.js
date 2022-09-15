function encriptar() {
    
    var imagen = document.getElementById("mensaje-encriptar");
    var leyenda = document.getElementById("leyenda");
    var mensaje = document.getElementById("mensaje").value;
    var textarea = document.getElementById("enc-des");

    if (mensaje != "") {

        imagen.style.display = "none";
        leyenda.style.display = "none";
        textarea.style.visibility = "visible";

        textarea.value = encriptarMensaje(mensaje);

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
    console.log(texto);
    /*texto = texto.replaceAll('a',a);*/

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