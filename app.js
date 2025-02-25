// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//"JuanPablo","Laura","Ethan","Alexa","Santiago"
let amigos = [];
//console.log(amigos.length);

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
        //let amigoHTML = document.getElementById('resultado');
        //amigoHTML.innerHTML = nuevonombre;
        indicealeatorio();
        //console.log(amigos);
        //console.log(typeof(amigos));
        limpiarCaja();
    }
    //return;
}

function indicealeatorio(){

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let listado = document.createElement('listado');
        listado.textContent = amigos[i];
        lista.appendChild(listado);
        lista.innerHTML +=  "<br>";
    }
}

function sortearAmigo() {

    let nombresorteado = amigos[Math.floor(Math.random()*amigos.length)];
    console.log(nombresorteado);
    if (amigos.includes(nombresorteado)){
        lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        amigos.push(nombresorteado);
        let amigoHTML = document.getElementById('resultado');
        amigoHTML.innerHTML = `El amigo secreto sorteado es ${nombresorteado}`;
        return;
    }
}

function limpiarCaja(){
    let lista = document.querySelector('#amigo');
    lista.value = '';
}

asignarTextoElemento('h1','Amigo Secreto');
asignarTextoElemento('h2','Digite el nombre de sus amigos');



//propuesta de la funcion indicealeatorio

    //let nombresorteado = amigos[Math.floor(Math.random()*amigos.length)];
    //if (amigos.includes(nombresorteado)){
    //    console.log(nombresorteado);
    //    return indicealeatorio();
    //}else{
    //    amigos.push(nombresorteado);
    //    return nombresorteado;        
    //    console.log(nombresorteado);
    //    console.log(typeof(nombresorteado));
    //}