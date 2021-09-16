const gridContainer = document.querySelector("#container");
const userValue = document.querySelector("#form");
const reset = document.querySelector("#reset-btn");
userValue.addEventListener('submit',main);
function main(e){
    e.preventDefault();
    const input1=e.target.inputname1.value;
    gridTemplateCreation(input1);
    
}

reset.addEventListener('click',resetBtn);

function gridTemplateCreation(x){
    gridContainer.style.gridTemplateColumns=`repeat(${x},1fr)`;
    for (let i = 0; i < x*x; i++) {
        const gridItem = document.createElement("div");
        gridItem.addEventListener("mouseenter", function (event) {
          event.target.classList.add("darken");
        });
        gridContainer.append(gridItem);
      }
}
gridTemplateCreation(5);

function resetBtn(){
    gridContainer.innerHTML='';
    gridTemplateCreation(5);
}

