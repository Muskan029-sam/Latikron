// Add typing effect to tagline (if used)
const typedText = document.querySelector(".typed-text");
const words = ["AI-driven robots", "Cobots", "Smart Interfaces", "DIY Kits"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (typedText) {
        const currentWord = words[wordIndex];
        const typed = isDeleting
            ? currentWord.substring(0, charIndex--)
            : currentWord.substring(0, charIndex++);

        typedText.textContent = typed;

        let delay = isDeleting ? 60 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500;
        }

        setTimeout(typeEffect, delay);
    }
}
typeEffect();

// Toggle mobile menu (if included)
const toggleBtn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".nav-menu");

if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}