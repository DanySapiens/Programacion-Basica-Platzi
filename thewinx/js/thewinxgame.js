//aqui va todo el codigo en JavaScript
function seleccionarHadaJugador(){
    alert("SELECCIONASTE TU HADA")
}

let botonHadaJugador = document.getElementById("boton-hada") //llama al elemento de HTML con el Id  

botonHadaJugador.addEventListener("click",seleccionarHadaJugador) //llama a un metodo mediante el evento de "click" (primer argumento) del boton, se manda ejecutar una funcion (segundo argumento) mediante el click


