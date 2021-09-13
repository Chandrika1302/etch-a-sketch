const gridContainer=document.querySelector('#container');
for(let i=0;i<25;i++){
    const gridItems=document.createElement('div');
    gridItems.classList.add('div-color');
    gridContainer.append(gridItems);
}
const gridColor=[...document.querySelectorAll('div.div-color')];
gridColor.forEach(item=>item.addEventListener("mouseenter",function(event){
    event.target.style.backgroundColor="red";
}))

