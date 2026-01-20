const typingText = document.getElementById("typingText");
const introButtons = document.getElementById("introButtons");
const infoButtons = document.getElementById("infoButtons");
const socialButtons = document.getElementById("socialButtons");

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

/* STEP 1 */
typeText(
  "Hello! welcome to muzascript website",
  () => introButtons.classList.remove("hidden")
);

/* STEP 2 */
function goAbout() {
  introButtons.classList.add("hidden");
  typeText(
    "Hii? Want to know more about muzascript?\n press the button below",
    () => infoButtons.classList.remove("hidden")
  );
}

/* STEP 3 */
function goInformation() {
  infoButtons.classList.add("hidden");
  typeText(
`About MuzaScript MuzaScript is a Roblox script development project from Indonesia. Focusing on Roblox Scripts and Script Showcase. 
MuzaScript provides a Discord forum. To see Muzascript's social media, you can press the button below.`,
    () => socialButtons.classList.remove("hidden")
  );
}

/* STEP 4 */
function goSocial() {
  introButtons.classList.add("hidden");
  socialButtons.classList.remove("hidden");
}

/* FINAL */
function showSocial() {
  intro.style.display = "none";

  document.querySelector("nav").style.display = "block";
  document.querySelector("header").style.display = "block";
  document.querySelectorAll("section").forEach(s => s.style.display = "block");
  document.querySelector("footer").style.display = "block";

  document.getElementById("social").scrollIntoView({ behavior: "smooth" });
}

/* scroll helper */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
