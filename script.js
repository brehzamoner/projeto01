let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '0px';
    document.body.appendChild(heart);

    const fallDuration = Math.random() * 3 + 2; // Tempo aleatório entre 2 e 5 segundos
    heart.animate([
        { transform: 'translateY(0)' },
        { transform: `translateY(${window.innerHeight}px)` }
    ], {
        duration: fallDuration * 1000,
        easing: 'linear',
        fill: 'forwards'
    });

    setTimeout(() => {
        heart.remove();
    }, fallDuration * 1000);
}

setInterval(createHeart, 500);

// Função para tocar a música
let audioStarted = false;
function playAudio() {
    if (!audioStarted) {
        const audio = document.getElementById('background-audio');
        audio.play();
        audioStarted = true; // Garante que a música só inicie uma vez
    }
}
