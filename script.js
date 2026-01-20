const typingText = document.getElementById("typingText");
const introButtons = document.getElementById("introButtons");
const infoButtons = document.getElementById("infoButtons");
const socialButtons = document.getElementById("socialButtons");
const ghostMessage = document.getElementById("ghostMessage");
const intro = document.getElementById("intro");

let speed = 30;

function typeText(text, callback) {
  typingText.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    typingText.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

/* STEP 1 – INTRO */
typeText(
  "Hello! welcome to muzascript website",
  () => introButtons.classList.remove("hidden")
);

/* STEP 2 – ABOUT */
function goAbout() {
  introButtons.classList.add("hidden");

  typeText(
    "Hii? Interested in learning more about MuzaScript?\nClick the button below",
    () => infoButtons.classList.remove("hidden")
  );
}

/* STEP 3 – INFORMATION */
function goInformation() {
  infoButtons.classList.add("hidden");

  typeText(
`MuzaScript Information

MuzaScript is a Roblox script development project from Indonesia.
It focuses on Roblox scripts and script showcases.
MuzaScript provides a Discord forum and accepts free script requests.`,
    () => {
      ghostMessage.classList.remove("hidden");
    }
  );
}

/* STEP 4 – SHOW PICTURES */
function showPic(num) {
  document.getElementById("pic1").classList.add("hidden");
  document.getElementById("pic2").classList.add("hidden");

  if (num === 1) {
    document.getElementById("pic1").classList.remove("hidden");
  } else {
    document.getElementById("pic2").classList.remove("hidden");
  }
}

/* STEP 5 – SOCIAL */
function showSocial() {
  intro.style.display = "none";

  document.querySelector("nav").style.display = "block";
  document.querySelector("header").style.display = "block";
  document.querySelectorAll("section").forEach(s => s.style.display = "block");
  document.querySelector("footer").style.display = "block";

  document.getElementById("social").scrollIntoView({ behavior: "smooth" });
}

/* HELPER */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
