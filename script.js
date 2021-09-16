const gridContainer = document.querySelector("#container");
const userValue = document.querySelector("#form");
const reset = document.querySelector("#reset-btn");

gridTemplateCreation(5);

reset.addEventListener("click", resetBtn);
userValue.addEventListener("submit", main);

function main(e) {
  e.preventDefault();
  const input1 = e.target.inputname1.value;
  gridTemplateCreation(input1);
}
function gridTemplateCreation(x) {
  gridContainer.style.gridTemplateColumns = `repeat(${x},1fr)`;
  gridContainer.innerHTML = "";
  for (let i = 0; i < x * x; i++) {
    const gridItem = document.createElement("div");
    gridItem.addEventListener("mouseenter", function (event) {
      event.target.classList.add("darken");
    });
    gridContainer.append(gridItem);
  }
}
function resetBtn() {
  gridTemplateCreation(5);
}
