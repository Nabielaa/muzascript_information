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

function goSocial() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("socialPage").classList.add("active");
}

function goHome() {
  document.getElementById("socialPage").classList.remove("active");
  document.getElementById("home").classList.add("active");
}
