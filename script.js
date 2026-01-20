const typingText = document.getElementById("typingText");
const introButtons = document.getElementById("introButtons");
const infoButtons = document.getElementById("infoButtons");
const socialButtons = document.getElementById("socialButtons");
const intro = document.getElementById("intro");

let speed = 30;

function typeText(text, callback) {
  typingText.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    typingText.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

/* START */
typeText(
  "Hello! welcome to muzascript website",
  () => introButtons.classList.remove("hidden")
);

function goAbout() {
  introButtons.classList.add("hidden");
  typeText(
    "Do you want to know more about MuzaScript?",
    () => infoButtons.classList.remove("hidden")
  );
}

function goInformation() {
  infoButtons.classList.add("hidden");
  typeText(
`MuzaScript is a Roblox script project from Indonesia.
Focused on scripts & showcases.

Do you want to see our social media?`,
    () => socialButtons.classList.remove("hidden")
  );
}

function showSocial() {
  intro.style.display = "none";

  document.getElementById("mainNav").style.display = "block";
  document.querySelector(".hero").style.display = "block";
  document.querySelectorAll(".section").forEach(s => s.style.display = "block");
  document.querySelector("footer").style.display = "block";

  document.getElementById("social").scrollIntoView({ behavior: "smooth" });
}
