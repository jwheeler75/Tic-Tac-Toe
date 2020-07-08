let playerTurn = true;
let moves = ["", "", "", "", "", "", "", "", ""];
let myCells = document.querySelectorAll(".square");
console.log(myCells);
const resetBtn = document.querySelector(".button-reset");
let reset = (event) => {
  myCells.forEach((cell) => {
    moves = ["", "", "", "", "", "", "", "", ""];
    cell.style.backgroundColor = "#ccc";
    event.target.removeEventListener("click", clickCell);
    cell.addEventListener("click", clickCell);
  });
};
resetBtn.addEventListener("click", reset);
let clickCell = (event) => {
  if (playerTurn) {
    event.target.style.backgroundColor = "red";
    moves[event.target.id] = "red";
  } else {
    event.target.style.backgroundColor = "blue";
    moves[event.target.id] = "blue";
  }
  event.target.attributes[2].value = "clicked";
  winLogic();
  playerTurn = !playerTurn;
  event.target.removeEventListener("click", clickCell);
  console.log(moves);
};

myCells.forEach((cell) => {
  cell.addEventListener("click", clickCell);
});
function removeEvents() {
  myCells.forEach((cell) => {
    cell.removeEventListener("click", clickCell);
  });
}
function winLogic() {
  if (moves[0] === moves[1] && moves[1] === moves[2] && moves[0] !== "") {
    console.log(`${playerTurn ? "red" : "blue"} is the winner on row 1!`);
    removeEvents();
  } else if (
    moves[3] === moves[4] &&
    moves[4] === moves[5] &&
    moves[3] !== ""
  ) {
    console.log(`${playerTurn ? "red" : "blue"} is the winner on row 2!`);
    removeEvents();
  } else if (
    moves[6] === moves[7] &&
    moves[7] === moves[8] &&
    moves[6] !== ""
  ) {
    console.log(`${playerTurn ? "red" : "blue"} is the winner on row 3!`);
    removeEvents();
  } else if (
    moves[0] === moves[3] &&
    moves[3] === moves[6] &&
    moves[0] !== ""
  ) {
    console.log(`${playerTurn ? "red" : "blue"} is the winner in column 1!`);
    removeEvents();
  } else if (
    moves[1] === moves[4] &&
    moves[4] === moves[7] &&
    moves[1] !== ""
  ) {
    console.log(`${playerTurn ? "red" : "blue"} is the winner in column 2!`);
    removeEvents();
  } else if (
    moves[2] === moves[5] &&
    moves[5] === moves[8] &&
    moves[2] !== ""
  ) {
    console.log(`${playerTurn ? "red" : "blue"} is the winner in column 3!`);
    removeEvents();
  } else if (
    moves[0] === moves[4] &&
    moves[4] === moves[8] &&
    moves[0] !== ""
  ) {
    console.log(`${playerTurn ? "red" : "blue"} is the winner on a diagonal`);
    removeEvents();
  } else if (
    moves[2] === moves[4] &&
    moves[4] === moves[6] &&
    moves[2] !== ""
  ) {
    console.log(`${playerTurn ? "red" : "blue"} is the winner on a diagonal`);
    removeEvents();
  } else {
    console.log("No winner");
  }
}
