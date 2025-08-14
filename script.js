// Lista de banderas y países
const banderas = [
    { img: "https://flagcdn.com/w320/ar.png", pais: "Argentina" },
    { img: "https://flagcdn.com/w320/br.png", pais: "Brasil" },
    { img: "https://flagcdn.com/w320/fr.png", pais: "Francia" },
    { img: "https://flagcdn.com/w320/jp.png", pais: "Japón" },
    { img: "https://flagcdn.com/w320/us.png", pais: "Estados Unidos" },
    { img: "https://flagcdn.com/w320/it.png", pais: "Italia" }
];

let puntaje = 0;
let banderaActual;

// Elementos del HTML
const imgBandera = document.getElementById("bandera");
const opciones = document.getElementById("opciones");
const mensaje = document.getElementById("mensaje");
const puntajeDisplay = document.getElementById("puntaje");

// Función para mostrar nueva bandera
function nuevaBandera() {
    mensaje.textContent = "";
    opciones.innerHTML = "";

    banderaActual = banderas[Math.floor(Math.random() * banderas.length)];
    imgBandera.style.opacity = 0;

    setTimeout(() => {
        imgBandera.src = banderaActual.img;
        imgBandera.style.opacity = 1;
    }, 300);

    let opcionesRandom = [banderaActual.pais];
    while (opcionesRandom.length < 3) {
        let paisRandom = banderas[Math.floor(Math.random() * banderas.length)].pais;
        if (!opcionesRandom.includes(paisRandom)) {
            opcionesRandom.push(paisRandom);
        }
    }

    opcionesRandom.sort(() => Math.random() - 0.5);

    opcionesRandom.forEach(pais => {
        const boton = document.createElement("button");
        boton.textContent = pais;
        boton.onclick = () => verificarRespuesta(pais);
        opciones.appendChild(boton);
    });
}

// Función para verificar la respuesta
function verificarRespuesta(pais) {
    if (pais === banderaActual.pais) {
        puntaje++;
        mensaje.textContent = "✅ ¡Correcto!";
        mensaje.style.color = "green";
        if (puntaje === 10) {
            mensaje.textContent = "🎉 ¡Ganaste!";
            puntaje = 0;
        }
    } else {
        mensaje.textContent = "❌ Incorrecto. Perdiste.";
        mensaje.style.color = "red";
        puntaje = 0;
    }
    puntajeDisplay.textContent = `Puntaje: ${puntaje}`;
    setTimeout(nuevaBandera, 1000);
}

// Iniciar juego
nuevaBandera();