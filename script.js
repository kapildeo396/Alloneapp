// Add some basic animations using JavaScript (e.g., fade-in for sections)

// Function to fade in elements as the page loads
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
    });

    // Set timeout to apply the fade-in effect after loading
    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        });
    }, 100);
});
