window.addEventListener("load", iniciar);

function iniciar() {
    let icono = document.getElementById("sound-icon");

    icono.addEventListener("click", function () {
        if (icono.src.includes("volume.png")) {
            icono.src = "img/mute.png";
        } else {
            icono.src = "img/volume.png";
        }
    });

    let reloj = document.getElementById("clock-icon");
    let modelo = document.getElementById("modelofecha");
    let modeloTexto = document.getElementById("modelo-texto");

    reloj.addEventListener("click", function () {
        let fecha = new Date();
        let formatoFecha = fecha.toLocaleDateString();
        let formatoHora = fecha.toLocaleTimeString();
        modeloTexto.textContent = `Fecha: ${formatoFecha} - Hora: ${formatoHora}`;
        modelo.style.display = "flex";
    });

    // Funcionalidad para botón About Us (boton2)
    let boton2 = document.querySelector(".boton2");
    let modeloAbout = document.getElementById("modelo-about");
    let aboutTexto = document.getElementById("about-text");

    boton2.addEventListener("click", function () {
        aboutTexto.textContent = `¡Hola! Somos Fátima y Sergio, dos estudiantes apasionados por el desarrollo de aplicaciones web, actualmente cursando nuestro segundo y último año de este fascinante camino. Nuestro interés por la tecnología y los videojuegos nos llevó a crear este divertido proyecto: un trivial de preguntas que combina aprendizaje y entretenimiento.
        Este juego fue desarrollado utilizando JavaScript, HTML y CSS, aprovechando las herramientas que hemos aprendido durante el curso. Queríamos diseñar algo que no solo pusiera a prueba los conocimientos de los jugadores, sino que también reflejara nuestra creatividad y habilidades técnicas.
        Creemos que los juegos tienen el poder de conectar a las personas y de convertir el aprendizaje en una experiencia emocionante. Este trivial es nuestro pequeño aporte a ese mundillo, y esperamos que disfrutes tanto jugándolo como nosotros disfrutamos creándolo.
        ¡Gracias por acompañarnos en este viaje!`;
        modeloAbout.style.display = "flex";
    });

    // Cerrar modelos
    window.addEventListener("click", function (event) {
        if (event.target === modelo) {
            modelo.style.display = "none";
        }
        if (event.target === modeloAbout) {
            modeloAbout.style.display = "none";
        }
    });
    // Get the elements
    const iconoAudio = document.getElementById("sound-icon");
    const audio = document.getElementById("music");

    // Flag to track if the music has started
    let audioStarted = false;

    iconoAudio.addEventListener("click", function () {
        // si no ha empezado la música, empieza
        if (!audioStarted) {
            audio.play(); // play cuando el user hace click por primera vez
            audioStarted = true; // en true para que no suene automáticamente
        }

        //  mute/unmute
        if (audio.muted) {
            // Unmute y cambia el icon
            audio.muted = false;
            iconoAudio.src = "img/volume.png"; // 
            audio.muted = true;
            iconoAudio.src = "img/mute.png"; // Update to mute icon
        }
    });
}