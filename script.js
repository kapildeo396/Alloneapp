// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu) menu.classList.toggle('active');
}

// Add animations for sections with fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)"; // Smooth animation effect
        section.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });

    setTimeout(() => {
        sections.forEach((section) => {
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
        body.classList.add('morning');
        body.classList.remove('night');
        updateElementVisibility(sun, true, 0.15, 'rgba(255, 215, 0, 0.3)', '50px 25px');
        updateElementVisibility(moon, false);
    } else {
        body.classList.add('night');
        body.classList.remove('morning');
        updateElementVisibility(moon, true, 0.15, 'rgba(173, 216, 230, 0.3)', '30px 15px');
        updateElementVisibility(sun, false);
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
        setTimeout(() => (element.style.opacity = opacity), 2000);
    }
}

// Function to dynamically add Sun and Moon elements
function addSunAndMoon() {
    const animationContainer = document.getElementById('animation-container');
    if (!animationContainer) return;

    // Remove existing elements
    const sunElement = document.querySelector('.sun');
    const moonElement = document.querySelector('.moon');
    if (sunElement) sunElement.remove();
    if (moonElement) moonElement.remove();

    // Add Sun or Moon based on the time
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 18) {
        if (!document.querySelector('.sun')) {
            const sun = document.createElement('div');
            sun.className = 'sun';
            animationContainer.appendChild(sun);
        }
    } else {
        if (!document.querySelector('.moon')) {
            const moon = document.createElement('div');
            moon.className = 'moon';
            animationContainer.appendChild(moon);
        }
    }
}

// Call the function to add Sun and Moon
addSunAndMoon();

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const slideMenu = document.getElementById("slide-menu");
    const overlay = document.getElementById("menu-overlay");
  
    // Open menu
    menuToggle.addEventListener("click", () => {
      slideMenu.classList.add("active");
      overlay.classList.add("active");
    });
  
    // Close menu when clicking outside
    overlay.addEventListener("click", () => {
      slideMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });  