document.addEventListener("DOMContentLoaded", () => {
    // Fecha en la que comenzaron a salir
    const startDate = new Date("2025-05-03");
    const today = new Date();
    const differenceInMs = today - startDate;
    const daysTogether = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    document.getElementById("daysTogether").textContent = daysTogether;

    // Crear corazones flotantes
    function createFloatingHeart() {
        const container = document.querySelector('.hearts-container');
        if (!container) return;

        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '🌸';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 4 + Math.random() * 3 + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }
    setInterval(createFloatingHeart, 500);

    // Frases de amor
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

    const loveButton = document.getElementById("loveButton");
    const loveMessage = document.getElementById("loveMessage");
    const foreverButton = document.getElementById("foreverButton");
    const foreverMessage = document.getElementById("foreverMessage");
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicToggle");

    function typeWriterEffect(text, element, delay = 50) {
        element.textContent = "";
        let i = 0;
        const interval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) clearInterval(interval);
        }, delay);
    }

    loveButton.addEventListener("click", () => {
        const message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        typeWriterEffect(message, loveMessage, 50);
    });

    foreverButton.addEventListener("click", () => {
        const finalMessage = "Claro que sí mi Charly ❤, te acompañaré toda mi vida 💕";
        typeWriterEffect(finalMessage, foreverMessage, 60);
    });

    window.addEventListener("load", () => {
        music.play().then(() => btn.textContent = "⏸️").catch(() => btn.textContent = "▶️");
    });

    btn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            btn.textContent = "⏸️";
        } else {
            music.pause();
            btn.textContent = "▶️";
        }
    });
});