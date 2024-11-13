
const container = document.getElementById('falling-gif-container');

function createFallingImg() {
    const img = document.createElement('img');
    
    img.src = 'https://pngimg.com/uploads/snowflakes/snowflakes_PNG7528.png'; // Replace with your GIF URL
    img.className = 'falling-gif';

    
    const randomX = Math.random() * window.innerWidth;
    img.style.left = `${randomX}px`;

    
    const duration = Math.random() * 4 + 3; 
    img.style.animationDuration = `${duration}s`;

    container.appendChild(img);

    
    img.addEventListener('animationend', () => {
        img.remove();
    });
}
setInterval(createFallingImg, 1000); 



const countdownTimer = () => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime(); 

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.timer__days').innerText = String(days).padStart(2, '0');
    document.querySelector('.timer__hours').innerText = String(hours).padStart(2, '0');
    document.querySelector('.timer__minutes').innerText = String(minutes).padStart(2, '0');
    document.querySelector('.timer__seconds').innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.timer').innerHTML = "HAPPY NEW 2025 YEAR";
    }
};

const interval = setInterval(countdownTimer, 1000);
