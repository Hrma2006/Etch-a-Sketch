const grid=document.querySelector(".grid")
const size=document.querySelector("#size")
console.log(size.valueAsNumber)
function initialize(size){
  for(let num=0;num<size;num++){
    const div = document.createElement('div'); 
    div.setAttribute("class","pixel")
    grid.appendChild(div)
  }
}



