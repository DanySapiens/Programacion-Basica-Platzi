function modalFinalJugador(mensaje){ //ventana emergente Fin del juego Jugador Ganador
    Swal.fire({
        title: mensaje,
        text: 'Eale!',
        confirmButtonText: 'Volver a Jugar',
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
        cancelButtonColor: '#47b5ff',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        imageUrl: 'imagenes/alegre.gif',
        imageHeight: '80px', 
        imageWidth: '80px',}).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                    location.reload() 
                }
            })
}   

function modalFinalEnemigo(mensaje){ //ventana emergente Fin del juego Enemigo Ganador
    Swal.fire({
        title: mensaje,
        text: 'Unos pedillos...',
        confirmButtonText: 'Volver a Jugar',
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
        cancelButtonColor: '#47b5ff',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        imageUrl: 'imagenes/perrito.jpg',
        imageHeight: '80px', 
        imageWidth: '115px',}).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                    location.reload() 
                }
            })
}

function modalBatalla(){ //ventana emergente aviso de inicio de batalla
    Swal.fire({
        title: 'EL JUEGO FINALIZA CUANDO LAS VIDAS 💖 LLEGUEN A CERO',
        text: 'Suerte 🤞🏼',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        imageUrl: 'imagenes/ready.png',
        imageHeight: '90px', 
        imageWidth: '90px', 
    })
}