// Fecha en la que comenzaron a salir (usando fecha local)
const startDate = new Date("2025-05-03T00:00:00");

// Obtener fecha actual local
const now = new Date();

// Obtener solo la parte de la fecha (ignorando la hora)
const localToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// Calcular la diferencia en milisegundos
const diffMs = localToday - startDate;

// Calcular los días completos
const daysTogether = Math.floor(diffMs / (1000 * 60 * 60 * 24));

// Mostrar en el HTML
document.getElementById("daysTogether").textContent = daysTogether

// 🩷 Crear corazones flotantes aleatoriamente
function createFloatingHeart() {
    const container = document.querySelector('.hearts-container');
    if (!container) return;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '🌸';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Crear corazones cada 500ms una vez que carga DOM
window.addEventListener('DOMContentLoaded', () => {
    setInterval(createFloatingHeart, 500);
});

// Lista de frases de amor
const loveMessages = [
    "Tu sonrisa ilumina mi día 🌞",
    "Me encanta cómo me haces sentir en paz 🕊️",
    "Amo cuando me decís 'te amo' con ternura 💕",
    "Sos mi persona favorita en este mundo 🌍",
    "Tus abrazos son mi lugar seguro 🤗",
    "Amo cómo te brillan los ojitos cuando estás feliz ✨",
    "Sos más dulce que cualquier postre 🍰",
    "Cada minuto contigo vale oro ⏳",
    "Tu voz me tranquiliza como una canción hermosa 🎵",
    "Amo todo de vos, incluso tus locuras más lindas 🤪",
];

// Referencias DOM botones y mensajes
const loveButton = document.getElementById("loveButton");
const loveMessage = document.getElementById("loveMessage");

function typeWriterEffect(text, element, delay = 50) {
    element.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, delay);
}

// Evento click en botón "Cosas que amo de vos"
loveButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    const message = loveMessages[randomIndex];
    typeWriterEffect(message, loveMessage, 50);
});

// Evento click en botón "¿Quieres ser mi compañera de vida?"
const foreverButton = document.getElementById("foreverButton");
const foreverMessage = document.getElementById("foreverMessage");

foreverButton.addEventListener("click", () => {
    const finalMessage = "Claro que si mi Charly ❤, te acompañare toda mi vida 💕";
    typeWriterEffect(finalMessage, foreverMessage, 60);
});

// Control de música
const music = document.getElementById('bgMusic');
const btn = document.getElementById('musicToggle');

// Intentar reproducir la música al cargar (muchos navegadores bloquean autoplay sin interacción)
window.addEventListener('load', () => {
    music.play().then(() => {
        btn.textContent = '⏸️';
    }).catch(() => {
        btn.textContent = '▶️';
    });
});

// Alternar reproducir/pausar música al hacer click en el botón
btn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        btn.textContent = '⏸️';
    } else {
        music.pause();
        btn.textContent = '▶️';
    }
});
