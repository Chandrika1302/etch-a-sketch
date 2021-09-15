const gridContainer = document.querySelector("#container");
const userValue = document.querySelector("#form");
const reset = document.querySelector("#reset-btn");
// userValue.addEventListener('submit',main);
// function main(e){
//     e.preventDefault();
//     const input1=e.target.inputname1;
//     console.log(input1.value);
    
// }
reset.addEventListener('click',resetBtn);

let gridCreation=function(){
    for (let i = 0; i < 25; i++) {
        const gridItem = document.createElement("div");
        gridItem.addEventListener("mouseenter", function (event) {
          event.target.classList.add("darken");
        });
        gridContainer.append(gridItem);
      }
}
gridCreation();

function resetBtn(){
    gridContainer.innerHTML='';
    gridCreation();
}

