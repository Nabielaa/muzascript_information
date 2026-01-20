const text = "Hello! welcome to muzascript website";
const typingText = document.getElementById("typingText");

let i = 0;
let speed = 40;

function typeText() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}

typeText();

function showAbout() {
  document.getElementById("about").style.display = "block";
}

function showSocial() {
  document.getElementById("social").style.display = "block";
}
