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
        section.style.transform = "translateY(20px)"; // Increased initial distance for a smoother effect
        section.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`; // Extended duration for smoother animations
    });

    // Apply the fade-in effect after loading
    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        });
    }, 200);
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
        updateElementVisibility(sun, true, 0.15, 'rgba(255, 215, 0, 0.3)', '50px 25px');
        updateElementVisibility(moon, false);
    } else {
        body.classList.remove('morning');
        body.classList.add('night');
        updateElementVisibility(sun, false);
        updateElementVisibility(moon, true, 0.15, 'rgba(173, 216, 230, 0.3)', '30px 15px');
    }
}

// Helper function to update element visibility and styling
function updateElementVisibility(element, isVisible, opacity = 0, boxShadowColor = '', boxShadowSize = '') {
    if (!element) return;
    element.style.display = isVisible ? 'block' : 'none';
    if (isVisible) {
        element.style.opacity = '0.3'; // Initial opacity
        element.style.boxShadow = `0 0 ${boxShadowSize} ${boxShadowColor}`;
        element.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => element.style.opacity = opacity, 2000);
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

// Initialize the elements and animations
addSunAndMoon();
updateAnimation();
