// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    let amigos = document.querySelector("#amigo").value;

    
    if(amigos==''){
        alert("el campo esta vacio, debe ingresar un nombre")
    }
        else{
            listaDeAmigos.push(amigos);

console.log(listaDeAmigos);

mostrarHtml();

            limpiarImput();
        }
}

function limpiarImput(){
     document.querySelector("#amigo").value = ''
}

function mostrarHtml (){
    let mostrarListaHtml = document.querySelector("#listaAmigos");

     mostrarListaHtml.innerHTML = ""; 
    
    for(i = 0; i<listaDeAmigos.length; i++){

        let nuevoAmigo = document.createElement("li");

        nuevoAmigo.textContent = listaDeAmigos[i];

           mostrarListaHtml.appendChild(nuevoAmigo);
    }
}
function sortearAmigo() {
if(listaDeAmigos.length==0){
        alert("el campo esta vacio, debe ingresar un nombre")}

        else{ let numeroAletorio= Math.floor(Math.random()*listaDeAmigos.length)

        let ganador =listaDeAmigos[numeroAletorio]

        let mostrasGanador = document.querySelector("#resultado");
        mostrasGanador.innerHTML= `el ganador del sorteo es ${ganador}`
}
}
