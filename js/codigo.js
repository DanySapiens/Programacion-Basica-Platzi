//declaracion de funcion
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) //formula para calcular un numero aleatorio en un rango
}
function eleccion(jugada){  //definicion de funcion
    let resultado = ""
    if(jugada == 1){  
        resultado = "Piedra π"
    } else if(jugada == 2){
        resultado = "Papel π§»"
    } else if(jugada == 3){
        resultado = "Tijera β"
    } else{
        resultado = "MAL ELEGIDO π"
    }
    return resultado
}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
//let min = 1
//let max = 3
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3) //invoca la funcion
    jugador = prompt("Elige: (1) para piedra, (2) para papel, (3) para tijera") 
    //alert("Elegiste " + jugador)
    // if(jugador == 1){   //el == signfica comparacion, mientras que = es asignacion
    alert("TΓΊ eliges: " + eleccion(jugador)) //llamas a la funcion
    alert("PC Elige: " + eleccion(pc))

    if(pc==jugador){
        alert("EMPATE π")
    }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        alert("GANASTE!! πππΌ")
        triunfos = triunfos + 1
    }else{
        alert("PERDISTE π’π€£")
        perdidas = perdidas + 1
    } 
}
alert("Ganaste " + triunfos + " veces ππΌ. Perdiste " + perdidas + " veces π.")