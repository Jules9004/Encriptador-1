let ingresarTexto = document.getElementById("ingTextAqui");
let salidaTexto = document.getElementById("msg");
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btnCopy = document.getElementById("btnCopy");
let btnReparar = document.querySelector("#reparar");
let label = document.querySelector("label");
let imagen = document.getElementById("imagen");

ingresarTexto.focus();
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function estadoNormal(){
    label.style.border = " 2px solid";
    label.style.color = "orange";
    ingresarTexto.style.color = "white";
    ingresarTexto.style.border = "2px solid";
    btnReparar.style.visibility = "hidden";
    proceder = true
}

function estadoError(){
    label.style.color = "red";
    label.style.border = " 2px solid ";
    ingresarTexto.style.color = "orange";
    ingresarTexto.style.border = "2px solid";
    btnReparar.style.visibility = "visible";
    proceder = false
}

btnReparar.addEventListener("click",reparar);

function reparar(){
    let repararTexto = removeAccents(ingresarTexto.value);
    repararTexto = repararTexto.toLowerCase();
    ingresarTexto.value = repararTexto;
    estadoNormal();
    ingresarTexto.focus();
}

btnDesencriptar.addEventListener("click",desencriptar);
btnEncriptar.addEventListener("click",encriptar);
ingresarTexto.addEventListener("keyup",corregir);

let proceder = true;

function corregir(){
    let requisitos = ingresarTexto.value;
    let cumplir = removeAccents(ingresarTexto.value);
    let cumplir2 = ingresarTexto.value.toLowerCase();

    if(requisitos != cumplir){
        estadoError();
    }
    if(requisitos != cumplir2){
        estadoError();
    }
    if(requisitos == cumplir2 && requisitos == cumplir){
        estadoNormal();
    }
}

function encriptar(){
    if(proceder){
        let texto = ingresarTexto.value
        texto = texto.replaceAll("e", "enter");
        texto = texto.replaceAll("i", "imes");
        texto = texto.replaceAll("a", "ai");
        texto = texto.replaceAll("o", "ober");
        texto = texto.replaceAll("u", "ufat");
        msg.value = texto;
        if(ingresarTexto.value != ""){
            ocultarImagen();
        }
        if(ingresarTexto.value == ""){
            mostrarImagen();
        }
    }
}

function desencriptar(){
    if(proceder){
        let texto = ingresarTexto.value
        texto = texto.replaceAll("enter", "e");
        texto = texto.replaceAll("imes", "i");
        texto = texto.replaceAll("is", "a");
        texto = texto.replaceAll("ober", "o");
        texto = texto.replaceAll("ufat", "u");
        msg.value = texto;
        if(ingresarTexto.value != ""){
            ocultarImagen();
        }
        if(ingresarTexto.value == ""){
            mostrarImagen();
        }
    }
}
function copy() {
        if(msg.value != ""){
            ingresarTexto.value= msg.value;
            navigator.clipboard.writeText(msg.value);
            estadoNormal();
            ingresarTexto.select();
        }
        ingresarTexto.focus();
    }
  
  document.querySelector("#copy").addEventListener("click", copy);
  
