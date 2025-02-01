// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos=[];   //array que permitirá almacenar los nombres de los amigos
let indiceActual=0;     //guarda el índice actual de la lista, para que no se repitan los nuevos que van ingresando

function agregarAmigo(){
    if (document.getElementById('amigo').value!=''){
        listaDeAmigos.push(document.getElementById('amigo').value); //agrego cada nuevo elemento a la lista
        let ulAmigos = document.getElementById('listaAmigos');
        if (indiceActual<listaDeAmigos.length) {                    //luego, verifico si ya se agregaron todos los elementos
            //alert(listaDeAmigos.length);
            let liAmigos = document.createElement('li');          //crea un elemento <li>
            liAmigos.textContent = listaDeAmigos[indiceActual];     //asigno el texto
            ulAmigos.appendChild(liAmigos);                         //agrego el elemento <li> al <ul>
            //console.log('Último elemento insertado:', listaDeAmigos[indiceActual]);//se muestra el último elemento insertado
            indiceActual++;                                         //incremento el índice para el próximo elemento
        } else {
            console.log('Todos los elementos ya han sido agregados.');
        }
        document.getElementById('amigo').value='';
        document.getElementById('amigo').focus();
    }else{
        alert('Por favor, inserte un nombre.')
    }
}


function sortearAmigo(){
    if (listaDeAmigos.length>0){
        let elementoAleatorio=Math.floor(Math.random()*listaDeAmigos.length);//genero el elemento aleatorio
        document.querySelector('#resultado').innerHTML=`El amigo secreto sorteado es: ${listaDeAmigos[elementoAleatorio]}`;//pongo el resultado en pantalla
        return;
    }else{
        alert('La lista de amigos está vacía. Ingrese elementos en el campo de texto.');
    }
}

//console.log(recorreListaAmigos());