const redBtn = document.querySelector(".red");

redBtn.addEventListener("click", changeBackgroundColorToRed);

const blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", changeBackgroundColorToBlue);

function changeBackgroundColorToBlue() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = "blue";
}

function changeBackgroundColorToRed() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = "red";
}
