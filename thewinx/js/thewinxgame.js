//AQUI VA TODO EL CODIGO EN JAVASCRIPT
//funciones globales 
let ataqueJugador 
let ataqueEnemigo





function iniciarJuego(){ //funcion para iniciar el juego en cuanto cargue la pagina
    let botonHadaJugador = document.getElementById("boton-hada") //llama al elemento de HTML con el Id  
    botonHadaJugador.addEventListener("click",seleccionarHadaJugador) //se ejecuta la funcion cuando se hace click sobre el boton

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonFlores = document.getElementById('boton-flores')
    botonFlores.addEventListener('click',ataqueFlores)
}

function seleccionarHadaJugador(){
    let spanHadaJugador = document.getElementById('hada-jugador') //guarda el nombre del hada en el html

    if(pyra.checked){
        spanHadaJugador.innerHTML ='Pyra'  //se establece la sintaxis del nombre en el HTML
    } 
    else if(luna.checked){
        spanHadaJugador.innerHTML ='Luna'  
    }
    else if(fleur.checked){
        spanHadaJugador.innerHTML ='Fleur'   
    }else{
        alert("SELECCIONA UN HADA 🧚🏼‍♂️")
    }

    seleccionarHadaEnemigo()

}

function seleccionarHadaEnemigo(){
    let hadaAleatoria = aleatorio(1,3)
    let spanHadaEnnemigo =document.getElementById('hada-enemigo')

    if(hadaAleatoria==1){
        spanHadaEnnemigo.innerHTML='Pyra'
    }else if(hadaAleatoria==2){
        spanHadaEnnemigo.innerHTML='Luna'
    }else{
        spanHadaEnnemigo.innerHTML='Fleur'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
}

function ataqueFlores(){
    ataqueJugador = 'FLORES 🌼'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio==1){
        ataqueEnemigo = 'FUEGO 🔥'
    }else if(ataqueAleatorio==2){
        ataqueEnemigo = 'AGUA 💧'
    }else{
        ataqueEnemigo = 'FLORES 🌼'
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) //formula para calcular un numero aleatorio en un rango
}
window.addEventListener('load', iniciarJuego)


