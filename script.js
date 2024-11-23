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
        section.style.transform = "translateY(10px)";
        section.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`; // Further reduced transition delay and transform distance
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
        if (sun) {
            sun.style.display = 'block';
            sun.style.opacity = '0.3'; // Further reduced sun opacity
            sun.style.boxShadow = '0 0 50px 25px rgba(255, 215, 0, 0.3)'; // Reduced sun brightness
            sun.style.transition = 'opacity 1s ease-in-out'; // Smooth transition
            setTimeout(() => sun.style.opacity = '0.15', 2000); // Further reduce opacity
        }
        if (moon) moon.style.display = 'none';
    } else {
        body.classList.remove('morning');
        body.classList.add('night');
        if (sun) sun.style.display = 'none';
        if (moon) {
            moon.style.display = 'block';
            moon.style.opacity = '0.3'; // Further reduced moon opacity
            moon.style.transition = 'opacity 1s ease-in-out'; // Smooth transition
            setTimeout(() => moon.style.opacity = '0.15', 2000); // Further reduce opacity
        }
    }
}

// Function to add sun and moon elements
function addSunAndMoon() {
    const animationContainer = document.getElementById('animation-container');

    if (!document.querySelector('.sun')) {
        const sunElement = document.createElement('div');
        sunElement.className = 'sun';
        animationContainer.appendChild(sunElement);
    }

    if (!document.querySelector('.moon')) {
        const moonElement = document.createElement('div');
        moonElement.className = 'moon';
        animationContainer.appendChild(moonElement);
    }
}

addSunAndMoon();
