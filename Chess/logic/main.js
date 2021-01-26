const players = ["white", "black"];
let turn = 0;
changeArrowPosition(turn);

function changeArrowPosition(turn) {
  document
    .querySelector(".arrow")
    .classList.add(["arrow-top", "arrow-bottom"][turn]);
}
