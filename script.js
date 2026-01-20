const text = "Hello! welcome to muzascript website";
const typingText = document.getElementById("typingText");
const info = document.getElementById("info");
const intro = document.getElementById("intro");
const social = document.getElementById("social");

let i = 0;

function typeText() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}

typeText();

function showInfo() {
  info.classList.remove("hidden");
}

function showPic(n) {
  document.getElementById("pic1").classList.add("hidden");
  document.getElementById("pic2").classList.add("hidden");

  document.getElementById(n === 1 ? "pic1" : "pic2")
    .classList.remove("hidden");
}

function showSocial() {
  intro.classList.add("hidden");
  social.classList.remove("hidden");
}
