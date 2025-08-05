// Typing animation
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Robotics Enthusiast", "Web Developer", "Future AI Engineer"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

// Toggle nav menu on small screens
const toggleBtn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu");
});