document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typingText");
  const introButtons = document.getElementById("introButtons");
  const infoButtons = document.getElementById("infoButtons");
  const ghostSection = document.getElementById("ghostSection");
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

  // STEP 1
  typeText(
    "Hello! welcome to muzascript website",
    () => introButtons.classList.remove("hidden")
  );

  // STEP 2
  window.goAbout = () => {
    introButtons.classList.add("hidden");
    typeText(
      "Hii? Interested in learning more about MuzaScript?",
      () => infoButtons.classList.remove("hidden")
    );
  };

  // STEP 3
  window.goInformation = () => {
    infoButtons.classList.add("hidden");

    typeText(
`MuzaScript is a Roblox script development project from Indonesia.
It focuses on Roblox scripts and script showcases.
MuzaScript provides a Discord forum.`,
      () => ghostSection.classList.remove("hidden")
    );
  };

  // IMAGE
  window.showPic = (num) => {
    document.getElementById("pic1").classList.add("hidden");
    document.getElementById("pic2").classList.add("hidden");

    document.getElementById(
      num === 1 ? "pic1" : "pic2"
    ).classList.remove("hidden");
  };

  // FINAL SOCIAL
  window.showSocial = () => {
    intro.style.display = "none";

    document.getElementById("mainNav").classList.remove("hidden");
    document.querySelector(".hero").classList.remove("hidden");
    document.querySelector("footer").classList.remove("hidden");
  };
});
