const typingText = document.getElementById("typingText");
const introButtons = document.getElementById("introButtons");
const infoButtons = document.getElementById("infoButtons");
const socialButtons = document.getElementById("socialButtons");

let typingSpeed = 30;

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
  }, typingSpeed);
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
    "Hii? let me introduce myself, I am Muzascript \nHere click this button for more information about muzascript",
    () => infoButtons.classList.remove("hidden")
  );
}

/* STEP 3 */
function goInformation() {
  infoButtons.classList.add("hidden");

  typeText(
`About MuzaScript

Muzascript is a Roblox Scripter/Script Showcaser. Inspired by the famous scripter
Ghosthub/Ghostplayer. Muzascript is a scripter that attempts to learn the Lua-based
Roblox system language.`,
    () => socialButtons.classList.remove("hidden")
  );
}

/* STEP 4 */
function showSocial() {
  document.getElementById("intro").style.display = "none";

  document.querySelector("header").style.display = "block";
  document.querySelectorAll("section").forEach(s => s.style.display = "block");
  document.querySelector("footer").style.display = "block";

  document.getElementById("social").scrollIntoView({ behavior: "smooth" });
}
