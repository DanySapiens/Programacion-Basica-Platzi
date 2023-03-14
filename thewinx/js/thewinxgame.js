//AQUI VA TODO EL CODIGO EN JAVASCRIPT
//funcion iniciarJuego
const seccionBatalla = document.getElementById('batalla')
const seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const seccionReiniciar = document.getElementById('Reiniciar')
const botonHadaJugador = document.getElementById("boton-hada")   //llama al elemento de HTML con el Id  
//funcion seleccionarHadaJugador
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonFlores = document.getElementById('boton-flores')
const botonReiniciar = document.getElementById('boton-reiniciar')

const seccionSeleccionarHada = document.getElementById('seleccionar-hada')
const spanHadaJugador = document.getElementById('hada-jugador')
const insertHadaJugador = document.getElementById('imagenHadaJugador')
//funcion seleccionarHadaEnemigo
const spanHadaEnnemigo =document.getElementById('hada-enemigo')
const insertHadaEnemigo = document.getElementById("imagenHadaEnemigo")
//funcion combate
const spanVidasJugador = document.getElementById("vidas-jugador") 
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
//funcion crearMensaje
const seccionMensajes = document.getElementById('resultado') 
const ataquesDelJugador = document.getElementById('ataques-del-Jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-Enemigo')
//funcion detenerVs
const textoVsFinJuego = document.getElementById('texto-vs-animacion')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')


//variables globales
let hadas = []   // variable de arreglo
let ataqueJugador 
let ataqueEnemigo
let opcionDeHadas
let inputPyra
let inputLuna
let inputFleur
let vidasJugador = 3
let vidasEnemigo = 3
let hadaJugador
let hadaAleatoria

class Hada{ //DECLARACION DE UNA CLASE, la primera letra de la clase debe ir en MAYUSCULA
    constructor(nombre, foto, vida){
        this.nombre = nombre; //this.nombre (variable interna que guarda el nombre)
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let pyra = new Hada('Pyra', 'imagenes/pyra.png', 5); //crear (instancia) un objeto basado en la clase Hada 
let luna = new Hada('Luna', 'imagenes/luna.png', 5);
let fleur = new Hada('Fleur', 'imagenes/fleur.png', 5);

pyra.ataques.push( // inyecta los valores a la variable
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌼', id: 'boton-flores'},
)

luna.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌼', id: 'boton-flores'},
)

fleur.ataques.push(
    {nombre: '🌼', id: 'boton-flores'},
    {nombre: '🌼', id: 'boton-flores'},
    {nombre: '🌼', id: 'boton-flores'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)

hadas.push(pyra,luna,fleur);



function iniciarJuego(){ 
    seccionBatalla.style.display = 'none'; 
    seccionSeleccionarAtaque.style.display = 'none';
    seccionReiniciar.style.display = 'none';
    hadas.forEach((Hada) =>{ //por cada uno de los elementos (hadas) dentro del arreglo hadas, haz lo siguiente...
        opcionDeHadas = ` 
        <input type="radio" name="hada" id=${Hada.nombre}> 
        <label class="tarjeta-hada" for=${Hada.nombre}>
            <p>${Hada.nombre}</p>
            <img src=${Hada.foto} alt=${Hada.nombre}>
        </label> 
        `
    contenedorTarjetas.innerHTML += opcionDeHadas;

        inputPyra = document.getElementById('Pyra');
        inputLuna = document.getElementById('Luna');
        inputFleur = document.getElementById('Fleur');  

    })
    botonHadaJugador.addEventListener("click",seleccionarHadaJugador); //se ejecuta la funcion cuando se hace click sobre el boton
}

function seleccionarHadaJugador(){
    botonFuego.addEventListener('click',ataqueFuego);
    botonAgua.addEventListener('click',ataqueAgua);
    botonFlores.addEventListener('click',ataqueFlores);
    botonReiniciar.addEventListener('click',reiniciarJuego);
    seccionSeleccionarHada.style.display = 'none';//oculta seccion de elegir hada
    //imagenes de las hadas
    let imagenPyra = document.createElement('img');
    imagenPyra.src='imagenes/pyra.png';

    let imagenLuna = document.createElement('img');
    imagenLuna.src='imagenes/luna.png';

    let imagenFleur = document.createElement('img');
    imagenFleur.src='imagenes/fleur.png';

    if(inputPyra.checked){
        modalBatalla()
        hadaJugador = 1;
        spanHadaJugador.innerHTML = inputPyra.id;  //se establece una sola fuente de verdad
        insertHadaJugador.appendChild(imagenPyra);
        seccionSeleccionarAtaque.style.display = 'flex'; 
        seccionBatalla.style.display = 'flex';
        seleccionarHadaEnemigo() 
    }
    else if(inputLuna.checked){
        modalBatalla()
        hadaJugador = 2;
        spanHadaJugador.innerHTML = inputLuna.id; //se establece una sola fuente de verdad
        insertHadaJugador.appendChild(imagenLuna);
        seccionSeleccionarAtaque.style.display = 'flex';
        seccionBatalla.style.display = 'flex';
        seleccionarHadaEnemigo() 
    }
    else if(inputFleur.checked){
        modalBatalla()
        hadaJugador = 3;
        spanHadaJugador.innerHTML = inputFleur.id; //se establece una sola fuente de verdad
        insertHadaJugador.appendChild(imagenFleur);
        seccionSeleccionarAtaque.style.display = 'flex';
        seccionBatalla.style.display = 'flex';
        seleccionarHadaEnemigo()
    }
    else{
        alert("SELECCIONA UN HADA 🧚🏼‍♂️");
        seccionSeleccionarHada.style.display = 'flex';
    }
}

function seleccionarHadaEnemigo(){
    hadaAleatoria = aleatorio(0, hadas.length -1);
    //imagenes de las hadas
    let imagenPyraEnemi = document.createElement('img');
    imagenPyraEnemi.src = 'imagenes/pyra.png';

    let imagenLunaEnemi = document.createElement('img');
    imagenLunaEnemi.src= 'imagenes/luna.png';

    let imagenFleurEnemi = document.createElement('img');
    imagenFleurEnemi.src='imagenes/fleur.png';


    spanHadaEnnemigo.innerHTML = hadas[hadaAleatoria].nombre //se establece una sola fuente de verdad
    if((hadaJugador-1) != hadaAleatoria){
        insertHadaEnemigo.innerHTML= `<img src=${hadas[hadaAleatoria].foto} 
        alt=${hadas[hadaAleatoria].nombre}>`
    }else{
        seleccionarHadaEnemigo()
    }


    //se asigna nombre e imagen de hada para el personaje del enemigo
    // if(inputPyra.id !=1 && hadaAleatoria == 1){ 
    //     spanHadaEnnemigo.innerHTML='Pyra';
    //     insertHadaEnemigo.appendChild(imagenPyraEnemi);
    // }else if(hadaJugador != 2 && hadaAleatoria==2){
    //     spanHadaEnnemigo.innerHTML='Luna';
    //     insertHadaEnemigo.appendChild(imagenLunaEnemi);
    // }else if(hadaJugador != 3 && hadaAleatoria==3){
    //     spanHadaEnnemigo.innerHTML='Fleur';
    //     insertHadaEnemigo.appendChild(imagenFleurEnemi);
    // }else{
    //     seleccionarHadaEnemigo()
    // }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO 🔥';
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA 💧';
    ataqueAleatorioEnemigo()
}

function ataqueFlores(){
    ataqueJugador = 'FLORES 🌼';
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);  //define variable

    if(ataqueAleatorio==1){
        ataqueEnemigo = 'FUEGO 🔥';
    }else if(ataqueAleatorio==2){
        ataqueEnemigo = 'AGUA 💧';
    }else{
        ataqueEnemigo = 'FLORES 🌼';
    }
    combate()
}

function combate(){
    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE 😈");
    }else if((ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'FLORES 🌼') || (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') || (ataqueJugador == 'FLORES 🌼' && ataqueEnemigo == 'AGUA 💧')){
        crearMensaje("GANASTE!! 🙌🏼")
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }else{
        crearMensaje("PERDISTE 😢");;
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    } 
    revisarVidas()
}

function revisarVidas(){
    if (vidasJugador == 0){
        // document.getElementsByClassName('titulo-jugador').innerHTML = 'TÚ 💔:'
        document.querySelector('.titulo-jugador').innerHTML = 'TÚ 💀:'; //modifica el texto original
        document.getElementById('vidas-jugador').style.color = 'black'; //modifica el color original del texto
        crearMensajeFinal('👿LO SIENTO, EL ENEMIGO HA GANADO 👿'); //resultado para mensaje final
    }else if(vidasEnemigo == 0){
        // document.getElementsByClassName('titulo-enemigo').innerHTML = 'ENEMIGO 💔:'
        document.querySelector('.titulo-enemigo').innerHTML = 'ENEMIGO 💀:';
        document.getElementById('vidas-enemigo').style.color = 'white';
        crearMensajeFinal('FELICIDADES HAS GANADO <br>🏆');
    }
}

function crearMensaje(resulCombate){ //crea parrafo correspondiente por cada ataque
    seccionMensajes.innerHTML= resulCombate; //le damos el valor del resultado a la seccion en especifico
    ataquesDelJugador.innerHTML = ataqueJugador;
    ataquesDelEnemigo.innerHTML = ataqueEnemigo;
}

function crearMensajeFinal(resultadoFinal){ 
    botonFuego.disabled = true;
    //se cambia el style de los botones para simular estar deshabilitado
    botonFuego.style.pointerEvents = 'none';
    botonFuego.style.background = 'linear-gradient(rgb(4, 4, 4), #5d1a45)';
    botonFuego.style.border = '3px solid #653d57';
    botonFuego.style.boxShadow ='1px 0px 20px 7px #53454f';

    botonAgua.style.pointerEvents = 'none';
    botonAgua.style.background = 'linear-gradient(rgb(4, 4, 4), #5d1a45)';
    botonAgua.style.border = '3px solid #653d57';
    botonAgua.style.boxShadow ='1px 0px 20px 7px #53454f';

    botonFlores.disabled = true;
    botonFlores.style.pointerEvents ='none';
    botonFlores.style.background = 'linear-gradient(rgb(4, 4, 4), #5d1a45)';
    botonFlores.style.border = '3px solid #653d57';
    botonFlores.style.boxShadow ='1px 0px 20px 7px #53454f';
     
    seccionReiniciar.style.display = 'block';//visualiza seccion de reinicio

    detenerVs() //detiene el parpadeo (animacion css) del texto 'VS'

    if(vidasJugador == 0){
        modalFinalEnemigo(resultadoFinal); //Despliega modal sweetAlert 'GANADOR:ENEMIGO'
    }else if(vidasEnemigo == 0){
        modalFinalJugador(resultadoFinal); //Despliega modal sweetAlert 'GANADOR:JUGADOR'
    }
}

function detenerVs(){ //funcion para eliminar la animacion del css en el texto 'VS' y cambiar style
    textoVsFinJuego.style.animation = false;
    textoVsFinJuego.style.color = 'white';
    textoVsFinJuego.style.textShadow = '0px 0px 20px #ffffff';
}

function reiniciarJuego(){ //funcion para refrescar la pagina
    location.reload() 
}

function aleatorio(min, max){ //la funcion Math.random devuelve un numero flotante entre el 0 y 1
    return Math.floor(Math.random() * (max - min + 1) + min); //formula para calcular un numero entero aleatorio en un rango
}
window.addEventListener('load', iniciarJuego); //se activa cuando se carga toda la pagina
    

