function showInfo() {
  document.getElementById("info").style.display = "block";
}

function showSocial() {
  document.getElementById("social").style.display = "block";
}

function showPic(n) {
  document.getElementById("pic1").style.display = "none";
  document.getElementById("pic2").style.display = "none";

  if (n === 1) {
    document.getElementById("pic1").style.display = "block";
  } else {
    document.getElementById("pic2").style.display = "block";
  }
}
