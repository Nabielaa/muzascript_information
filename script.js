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

function goToSocial() {
  document.getElementById("page1").classList.remove("show");
  document.getElementById("page2").classList.add("show");
}

function goBack() {
  document.getElementById("page2").classList.remove("show");
  document.getElementById("page1").classList.add("show");
}
