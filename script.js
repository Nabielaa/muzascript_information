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
    "Hii? do u know about muzascript?\nHere click this button",
    () => infoButtons.classList.remove("hidden")
  );
}

/* STEP 3 */
function goInformation() {
  infoButtons.classList.add("hidden");

  typeText(
`About MuzaScript

MuzaScript adalah project pengembangan script Roblox yang berasal dari indonesia dan berfokus pada pembuatan Roblox Script & Script Showcaser.

Tujuan muzascript menjadi bagian scripter Roblox adalah membuat player merasa lebih asik dan nyaman bermain menggunakan script dan mempermudah permainan bagi User Delta dan sebagainya.

MuzaScript menyediakan forum discord untuk berdiskusi dan menerima request script gratis dari user.

Namun muzascript hanyalah scripter pemula dan hanya sanggup memenuhi request jika map tersebut mudah ditembus :)

MuzaScript juga berteman dengan scripter terkenal ghosthub sejak 2022.

Muza:
"hahahhaa i miss you ghost, if you read this i just want you to know that i miss you and thank you..."

Hey do u wanna know muzascript social media?`,
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

    function showMainContent() {
  document.querySelector(".intro").style.display = "none";

  document.querySelector("nav").style.display = "block";
  document.querySelector("header").style.display = "block";
  document.querySelectorAll("section").forEach(s => s.style.display = "block");
  document.querySelector("footer").style.display = "block";
    }
