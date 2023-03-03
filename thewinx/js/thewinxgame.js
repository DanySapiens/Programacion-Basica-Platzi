//AQUI VA TODO EL CODIGO EN JAVASCRIPT
//variables globales 
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let hadaJugador
let hadaAleatoria

function iniciarJuego(){ //funcion para iniciar el juego en cuanto cargue la pagina
    
    let seccionBatalla = document.getElementById('batalla') //oculta seccion de batalla personajes
    seccionBatalla.style.display = 'none'

    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque') //oculta seccion de ataques
    seccionSeleccionarAtaque.style.display = 'none'

    let seccionReiniciar = document.getElementById('Reiniciar') //oculta seccion de reinicio
    seccionReiniciar.style.display = 'none'

    let botonHadaJugador = document.getElementById("boton-hada") //llama al elemento de HTML con el Id  
    botonHadaJugador.addEventListener("click",seleccionarHadaJugador) //se ejecuta la funcion cuando se hace click sobre el boton
    
    //NOTA: cambiar esta parte a la funcion seleccionarHadaJugador
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

    let seccionBatalla = document.getElementById('batalla') 

    let spanHadaJugador = document.getElementById('hada-jugador') //guarda el nombre del hada en el html

    //imagenes de las hadas
    let imagenPyra = document.createElement('img')
    imagenPyra.src='imagenes/pyra.png'

    let imagenLuna = document.createElement('img')
    imagenLuna.src='imagenes/luna.png'

    let imagenFleur = document.createElement('img')
    imagenFleur.src='imagenes/fleur.png'

    let insertHadaJugador = document.getElementById('imagenHadaJugador')

    if(pyra.checked){
        modalBatalla()
        hadaJugador = 1
        spanHadaJugador.innerHTML ='Pyra'  //se establece la sintaxis del nombre en el HTML
        insertHadaJugador.appendChild(imagenPyra)
        // let botonHadaJugador = document.getElementById("boton-hada") //seleccionar el boton-hada del html por medio del valor del atributo id que se le haya asignado.
        // botonHadaJugador.disabled = true //deshabilita boton Seleccionar Hada
        seccionSeleccionarAtaque.style.display = 'flex' //visualiza la seccion de ataques
        seccionBatalla.style.display = 'flex'
        seleccionarHadaEnemigo() 
    }
    else if(luna.checked){
        modalBatalla()
        hadaJugador = 2
        spanHadaJugador.innerHTML ='Luna'  
        insertHadaJugador.appendChild(imagenLuna)
        // let botonHadaJugador = document.getElementById("boton-hada") //seleccionar el boton-hada del html por medio del valor del atributo id que se le haya asignado.
        // botonHadaJugador.disabled = true //deshabilita boton Seleccionar Hada
        seccionSeleccionarAtaque.style.display = 'flex'
        seccionBatalla.style.display = 'flex'
        seleccionarHadaEnemigo() 
    }
    else if(fleur.checked){
        modalBatalla()
        hadaJugador = 3
        spanHadaJugador.innerHTML ='Fleur'   
        insertHadaJugador.appendChild(imagenFleur)
        // let botonHadaJugador = document.getElementById("boton-hada") //seleccionar el boton-hada del html por medio del valor del atributo id que se le haya asignado.
        // botonHadaJugador.disabled = true //deshabilita boton Seleccionar Hada
        seccionSeleccionarAtaque.style.display = 'flex'
        seccionBatalla.style.display = 'flex'
        seleccionarHadaEnemigo()
    }
    else{
        alert("SELECCIONA UN HADA 🧚🏼‍♂️")
        seccionSeleccionarHada.style.display = 'flex'
    }
}

function seleccionarHadaEnemigo(){
    hadaAleatoria = aleatorio(1,3)
    let spanHadaEnnemigo =document.getElementById('hada-enemigo')
    //imagenes de las hadas
    let imagenPyraEnemi = document.createElement('img')
    imagenPyraEnemi.src = 'imagenes/pyra.png'

    let imagenLunaEnemi = document.createElement('img')
    imagenLunaEnemi.src= 'imagenes/luna.png' 

    let imagenFleurEnemi = document.createElement('img')
    imagenFleurEnemi.src='imagenes/fleur.png'

    let insertHadaEnemigo = document.getElementById("imagenHadaEnemigo")

    if(hadaJugador !=1 && hadaAleatoria == 1){ //se asigna nombre e imagen de hada para el personaje del enemigo
        spanHadaEnnemigo.innerHTML='Pyra'
        insertHadaEnemigo.appendChild(imagenPyraEnemi)
    }else if(hadaJugador != 2 && hadaAleatoria==2){
        spanHadaEnnemigo.innerHTML='Luna'
        insertHadaEnemigo.appendChild(imagenLunaEnemi)
    }else if(hadaJugador != 3 && hadaAleatoria==3){
        spanHadaEnnemigo.innerHTML='Fleur'
        insertHadaEnemigo.appendChild(imagenFleurEnemi)
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
        // document.getElementsByClassName('titulo-jugador').innerHTML = 'TÚ 💔:'
        document.querySelector('.titulo-jugador').innerHTML = 'TÚ 💀:' //modifica el texto original
        document.getElementById('vidas-jugador').style.color = 'black' //modifica el color original del texto
        crearMensajeFinal('👿LO SIENTO, EL ENEMIGO HA GANADO 👿') //resultado para mensaje final
    }else if(vidasEnemigo == 0){
        // document.getElementsByClassName('titulo-enemigo').innerHTML = 'ENEMIGO 💔:'
        document.querySelector('.titulo-enemigo').innerHTML = 'ENEMIGO 💀:'
        document.getElementById('vidas-enemigo').style.color = 'white'
        crearMensajeFinal('FELICIDADES HAS GANADO <br>🏆')
    }
}

function crearMensaje(resulCombate){ //crea parrafo correspondiente por cada ataque
    let seccionMensajes = document.getElementById('resultado') //selecciona el elemento del HTML que tenga el ID = mensajes
    let ataquesDelJugador = document.getElementById('ataques-del-Jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-Enemigo')
    // let nuevoAtaqueDelJugador = document.createElement('p') 
    // let nuevoAtaqueDelEnemigo = document.createElement('p')
    seccionMensajes.innerHTML= resulCombate //le damos el valor del resultado a la seccion en especifico
    ataquesDelJugador.innerHTML = ataqueJugador
    ataquesDelEnemigo.innerHTML = ataqueEnemigo
    // nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    // nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    // ataquesDelJugador.appendChild(nuevoAtaqueDelJugador) //inserta el parrafo dentro de la seccion mensajes
    // ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo) //inserta el parrafo dentro de la seccion mensajes
}

function crearMensajeFinal(resultadoFinal){ 
    // let seccionMensajes = document.getElementById('resultado') 
    // seccionMensajes.innerHTML = resultadoFinal

    //se desactivan botones de ataque al llegar las vidas = 0
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    //se cambia el style del boton para simular estar deshabilitado
    botonFuego.style.pointerEvents = 'none'
    botonFuego.style.background = 'linear-gradient(rgb(4, 4, 4), #5d1a45)'
    botonFuego.style.border = '3px solid #653d57'
    botonFuego.style.boxShadow ='1px 0px 20px 7px #53454f'

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.style.pointerEvents = 'none'
    botonAgua.style.background = 'linear-gradient(rgb(4, 4, 4), #5d1a45)'
    botonAgua.style.border = '3px solid #653d57'
    botonAgua.style.boxShadow ='1px 0px 20px 7px #53454f'

    let botonFlores = document.getElementById('boton-flores')
    botonFlores.disabled = true
    botonFlores.style.pointerEvents ='none'
    botonFlores.style.background = 'linear-gradient(rgb(4, 4, 4), #5d1a45)'
    botonFlores.style.border = '3px solid #653d57'
    botonFlores.style.boxShadow ='1px 0px 20px 7px #53454f'

    let seccionReiniciar = document.getElementById('Reiniciar') //visualiza seccion de reinicio
    seccionReiniciar.style.display = 'block'

    detenerVs() //detiene el parpadeo (animacion css) del texto 'VS'

    if(vidasJugador == 0){
        modalFinalEnemigo(resultadoFinal) //Despliega modal sweetAlert 'GANADOR:ENEMIGO'
    }else if(vidasEnemigo == 0){
        modalFinalJugador(resultadoFinal) //Despliega modal sweetAlert 'GANADOR:JUGADOR'
    }
}

function detenerVs(){ //funcion para eliminar la animacion del css en el texto 'VS' y cambiar style
    let textoVsFinJuego = document.getElementById('texto-vs-animacion')
    textoVsFinJuego.style.animation = false
    textoVsFinJuego.style.color = 'white'
    textoVsFinJuego.style.textShadow = '0px 0px 20px #ffffff'
}

function reiniciarJuego(){ //funcion para refrescar la pagina
    location.reload() 
}

function aleatorio(min, max){ //la funcion Math.random devuelve un numero flotante entre el 0 y 1
    return Math.floor(Math.random() * (max - min + 1) + min) //formula para calcular un numero entero aleatorio en un rango
}
window.addEventListener('load', iniciarJuego) //se activa cuando se carga toda la pagina
    

