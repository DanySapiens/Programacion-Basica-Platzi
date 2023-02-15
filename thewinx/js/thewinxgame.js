//AQUI VA TODO EL CODIGO EN JAVASCRIPT

function iniciarJuego(){ //funcion para iniciar el juego
    let botonHadaJugador = document.getElementById("boton-hada") //llama al elemento de HTML con el Id  
    botonHadaJugador.addEventListener("click",seleccionarHadaJugador) //se ejecuta la funcion cuando se hace click sobre el boton
}

function seleccionarHadaJugador(){
    let spanHadaJugador = document.getElementById('hada-jugador')

    if(pyra.checked){
        alert("Seleccionaste a Pyra")
    }
    else if(luna.checked){
        alert("Seleccionaste a Luna")
    }
    else if(fleur.checked){
        alert("Seleccionaste a Fleur")
    }else{
        alert("SELECCIONA UN HADA 🧚🏼‍♂️")
    }

}
window.addEventListener('load', iniciarJuego)


