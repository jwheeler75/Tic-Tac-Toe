// function changeBackgroundColorToBlue() {
//   document.body.style.backgroundColor = "blue";
// }

// function changeBackgroundColorToRed() {
//   document.body.style.backgroundColor = "red";
// }

// create 9 div and use a flex-box square
let playerTurn = true;
let myCells = document.querySelectorAll(".square");
console.log(myCells);
const resetBtn = document.querySelector(".button-reset");
let reset = () => {
  myCells.forEach((cell) => {
    cell.style.backgroundColor = "#ccc";
    cell.addEventListener("click", clickCell);
  });
};
resetBtn.addEventListener("click", reset);
let clickCell = (event) => {
  console.log("clicked");
  if (playerTurn === true) {
    event.target.style.backgroundColor = "red";
  } else {
    event.target.style.backgroundColor = "blue";
  }
  event.target.attributes[2].value = "clicked";
  playerTurn = !playerTurn;
  event.target.removeEventListener("click", clickCell);
};

myCells.forEach((cell) => {
  cell.addEventListener("click", clickCell);
});
