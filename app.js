// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array que permitirá almacenar los nombres de los amigos
let listaDeAmigos=[];
let indiceActual=0;

function agregarAmigo(){
    if (document.getElementById('amigo').value!=''){
        listaDeAmigos.push(document.getElementById('amigo').value);//agrego cada nuevo elemento a la lista
        const ulAmigos = document.getElementById('listaAmigos');
        if (indiceActual < listaDeAmigos.length) {//luego, verifico si ya se agregaron todos los elementos
            const liAmigos = document.createElement('li'); //crea un elemento <li>
            liAmigos.textContent = listaDeAmigos[indiceActual]; //asigno el texto
            ulAmigos.appendChild(liAmigos); //agrego el <li> al <ul>
            console.log('Último elemento insertado:', listaDeAmigos[indiceActual]);//se muestra el último elemento insertado
            indiceActual++; //incremento el índice para el próximo elemento
        } else {
            console.log('Todos los elementos ya han sido agregados.');
        }
        document.getElementById('amigo').value='';
        document.getElementById('amigo').focus();
    }else{
        alert('Por favor, ingresar un nombre válido. Vuelva a intentarlo.')
    }
}


function sortearAmigo(){
    listaDeAmigos
}

//console.log(recorreListaAmigos());