// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array que permitirá almacenar los nombres de los amigos
let listaDeAmigos=[];

function agregarAmigo(){
    listaDeAmigos.push(document.getElementById('amigo').value);
    document.getElementById('amigo').value='';
    document.getElementById('amigo').focus();
    //alert(nombreAmigo);
}

function asignarTextoElemento(elemento, id, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function sortearAmigo(){
    for (let i=0; i<= listaDeAmigos.length-1; i++){
        alert(listaDeAmigos[i]);    
        document.getElementById('resultado').value=listaDeAmigos[i];
        let li=document.createComment('li');
        li.appendChild(listaDeAmigos[i]);
        asignarTextoElemento('ul', 'resultado', listaDeAmigos[i]);
    }
    
}

//console.log(recorreListaAmigos());