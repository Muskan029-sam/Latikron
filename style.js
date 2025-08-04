// script.js

// Typing effect
const typedText = document.querySelector(".typed-text");
const words = ["AI Enthusiast", "Student", "Robotics Explorer", "Web Developer"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  if (i < words.length) {
    currentWord = words[i];
    if (!isDeleting) {
      typedText.textContent = currentWord.substring(0, j + 1);
      j++;
      if (j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
    } else {
      typedText.textContent = currentWord.substring(0, j - 1);
      j--;
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }
    }
    setTimeout(type, isDeleting ? 70 : 100);
  }
}
type();

// Toggle nav menu
const toggleBtn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});