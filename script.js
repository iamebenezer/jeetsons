// script.js

// Number of stars
const numberOfStars = 300;

// Get the sky container
const sky = document.querySelector('.sky');

// Function to generate a random position
function getRandomPosition() {
    const x = window.innerWidth;
    const y = window.innerHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return { randomX, randomY };
}

// Create stars and append them to the sky
for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const { randomX, randomY } = getRandomPosition();
    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;
    sky.appendChild(star);
}
