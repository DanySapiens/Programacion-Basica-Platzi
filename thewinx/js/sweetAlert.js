
function modalFinalJugador(mensaje){
    Swal.fire({
        title: mensaje,
        text: 'Eale!',
        confirmButtonText: 'Volver a Jugar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        imageUrl: 'imagenes/alegre.gif',
        imageHeight: '80px', 
        imageWidth: '80px', })
}

function modalFinalEnemigo(mensaje){
    Swal.fire({
        title: mensaje,
        text: 'Unos pedillos...',
        confirmButtonText: 'Volver a Jugar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        imageUrl: 'imagenes/perrito.jpg',
        imageHeight: '80px', 
        imageWidth: '115px', })
}


function modalBatalla(mensaje){
    Swal.fire({
        title: mensaje,
        text: 'probando',
        confirmButtonText: 'Volver a Jugar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        imageUrl: 'imagenes/caritafeliz.gif',
        imageHeight: '80px', 
        imageWidth: '80px', })
}


