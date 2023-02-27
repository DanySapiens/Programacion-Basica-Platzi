//AQUI VA TODO EL CODIGO EN JAVASCRIPT
//variables globales 
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let hadaJugador
let hadaAleatoria


function iniciarJuego(){ //funcion para iniciar el juego en cuanto cargue la pagina
    
    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque') //oculta seccion de ataques
    seccionSeleccionarAtaque.style.display = 'none'

    let seccionReiniciar = document.getElementById('Reiniciar') //oculta seccion de reinicio
    seccionReiniciar.style.display = 'none'

    let botonHadaJugador = document.getElementById("boton-hada") //llama al elemento de HTML con el Id  
    botonHadaJugador.addEventListener("click",seleccionarHadaJugador) //se ejecuta la funcion cuando se hace click sobre el boton
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonFlores = document.getElementById('boton-flores')
    botonFlores.addEventListener('click',ataqueFlores)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarHadaJugador(){
    
    let seccionSeleccionarHada = document.getElementById('seleccionar-hada') //oculta seccion de elegir hada
    seccionSeleccionarHada.style.display = 'none'

    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque') //visualiza la seccion de ataques

    let spanHadaJugador = document.getElementById('hada-jugador') //guarda el nombre del hada en el html

    if(pyra.checked){
        hadaJugador = 1

        spanHadaJugador.innerHTML ='Pyra'  //se establece la sintaxis del nombre en el HTML
        let botonHadaJugador = document.getElementById("boton-hada") //seleccionar el boton-hada del html por medio del valor del atributo id que se le haya asignado.
        botonHadaJugador.disabled = true //deshabilita boton Seleccionar Hada
        seccionSeleccionarAtaque.style.display = 'flex'
       
    } 
    else if(luna.checked){
        hadaJugador = 2

        spanHadaJugador.innerHTML ='Luna'  
        let botonHadaJugador = document.getElementById("boton-hada") //seleccionar el boton-hada del html por medio del valor del atributo id que se le haya asignado.
        botonHadaJugador.disabled = true //deshabilita boton Seleccionar Hada
        seccionSeleccionarAtaque.style.display = 'flex'
    }
    else if(fleur.checked){
        hadaJugador = 3

        spanHadaJugador.innerHTML ='Fleur'   
        let botonHadaJugador = document.getElementById("boton-hada") //seleccionar el boton-hada del html por medio del valor del atributo id que se le haya asignado.
        botonHadaJugador.disabled = true //deshabilita boton Seleccionar Hada
        seccionSeleccionarAtaque.style.display = 'flex'
       
    }else{
        alert("SELECCIONA UN HADA 🧚🏼‍♂️")
        seccionSeleccionarHada.style.display = 'flex'
    }
    
    seleccionarHadaEnemigo()

}

function seleccionarHadaEnemigo(){
    hadaAleatoria = aleatorio(1,3)
    let spanHadaEnnemigo =document.getElementById('hada-enemigo')

    if(hadaJugador !=1 && hadaAleatoria == 1){
        spanHadaEnnemigo.innerHTML='Pyra'
    
    }else if(hadaJugador != 2 && hadaAleatoria==2){
        spanHadaEnnemigo.innerHTML='Luna'

    }else if(hadaJugador != 3 && hadaAleatoria==3){
        spanHadaEnnemigo.innerHTML='Fleur'

    }else{
        seleccionarHadaEnemigo()
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
    let ataqueAleatorio = aleatorio(1,3)  //define variable

    if(ataqueAleatorio==1){
        ataqueEnemigo = 'FUEGO 🔥'
    }else if(ataqueAleatorio==2){
        ataqueEnemigo = 'AGUA 💧'
    }else{
        ataqueEnemigo = 'FLORES 🌼'
    }

    combate()
}

function combate(){

    let spanVidasJugador = document.getElementById("vidas-jugador") //selecciona el elemento del HTML que tenga el ID = vidas-jugador
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE 😈")

    }else if((ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'FLORES 🌼') || (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') || (ataqueJugador == 'FLORES 🌼' && ataqueEnemigo == 'AGUA 💧')){
        crearMensaje("GANASTE!! 🙌🏼")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }else{
        crearMensaje("PERDISTE 😢")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } 

    revisarVidas()

}

function revisarVidas(){
    if (vidasJugador == 0){
        crearMensajeFinal('👿LO SIENTO, EL ENEMIGO HA GANADO 👿')

    }else if(vidasEnemigo == 0){
        crearMensajeFinal('✨FELICIDADES HAS GANADO 🏆🎉')
    }

}

function crearMensaje(resulCombate){ //crea parrafo correspondiente por cada ataque
    let seccionMensajes = document.getElementById('resultado') //selecciona el elemento del HTML que tenga el ID = mensajes
    let ataquesDelJugador = document.getElementById('ataques-del-Jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-Enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensajes.innerHTML= resulCombate //le damos el valor del resultado a la seccion en especifico
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


    // let parrafo = document.createElement('p')
    // parrafo.innerHTML = 'Tu hada atacó con ' + ataqueJugador + ', el hada del enemigo atacó con ' + ataqueEnemigo + ' - ' + resulCombate  //el innerHTML remplaza el contenido del elemento "parrafo"

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador) //inserta el parrafo dentro de la seccion mensajes
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo) //inserta el parrafo dentro de la seccion mensajes
}

function crearMensajeFinal(resultadoFinal){ 

    let seccionMensajes = document.getElementById('resultado') 
    seccionMensajes.innerHTML = resultadoFinal
 
    //se desactivan botones de ataque al llegar las vidas = 0
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonFlores = document.getElementById('boton-flores')
    botonFlores.disabled = true

    let seccionReiniciar = document.getElementById('Reiniciar') //visualiza seccion de reinicio
    seccionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload() 
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) //formula para calcular un numero aleatorio en un rango
}

window.addEventListener('load', iniciarJuego)
    

