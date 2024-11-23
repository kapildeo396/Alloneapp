// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Add animations for sections with fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`; // Fixed transition syntax
    });

    // Set timeout to apply the fade-in effect after loading
    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        });
    }, 100);

    // Apply day or night animation based on current time
    updateAnimation();
});

// Function to update background animation based on the time of day
function updateAnimation() {
    const now = new Date();
    const hours = now.getHours();
    const body = document.body;
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');

    if (hours >= 6 && hours < 18) {
        body.classList.remove('night');
        body.classList.add('morning');
        sun.style.display = 'block';
        moon.style.display = 'none';
    } else {
        body.classList.remove('morning');
        body.classList.add('night');
        sun.style.display = 'none';
        moon.style.display = 'block';
    }
}

// Function to add sun animation for morning
function addSunAnimation() {
    const body = document.body;
    const sun = document.querySelector('.sun');

    if (body.classList.contains('morning') && !sun) {
        const sunElement = document.createElement('div');
        sunElement.className = 'sun';
        document.getElementById('animation-container').appendChild(sunElement);
    }

    const moon = document.querySelector('.moon');
    if (body.classList.contains('night') && !moon) {
        const moonElement = document.createElement('div');
        moonElement.className = 'moon';
        document.getElementById('animation-container').appendChild(moonElement);
    }
}
