//aqui va todo el codigo en JavaScript
function iniciarJuego(){
    let botonHadaJugador = document.getElementById("boton-hada") //llama al elemento de HTML con el Id  
    botonHadaJugador.addEventListener("click",seleccionarHadaJugador) //se ejecuta la funcion cuando se hace click sobre el boton
}

function seleccionarHadaJugador(){
    alert("SELECCIONASTE TU HADA")
}
window.addEventListener('load', iniciarJuego)


