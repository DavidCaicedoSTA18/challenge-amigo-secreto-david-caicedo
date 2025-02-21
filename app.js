// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//"JuanPablo","Laura","Ethan","Alexa","Santiago"
let amigos = [];
console.log(amigos.length);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){

    let nuevonombre = document.getElementById('amigo').value;
    if (nuevonombre === "") { 
        alert("Por favor, inserte un nombre válido");
    } else {
        amigos.push(nuevonombre);
        let amigoHTML = document.getElementById('resultado');
        amigoHTML.innerHTML = nuevonombre;
        console.log(amigos);
        console.log(typeof(amigos));
        return;
    }
}


asignarTextoElemento('h1','Amigo Secreto');
asignarTextoElemento('h2','Digite el nombre de sus amigos');