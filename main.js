const grid = document.querySelector(".grid");
const size = document.querySelector("#size");
const buttons=document.querySelectorAll("button")


function clear(){
  grid.textContent = '';
}

function makeGrid(size) {
	for (let num = 0; num < size ** 2; num++) {
		const div = document.createElement("div");
		div.setAttribute("class", "pixel");
		grid.appendChild(div);
	}
	grid.style.gridTemplateColumns=`repeat(${size}, ${size}fr`
}
let pixels=document.querySelectorAll(".pixel")
function initialize(){
	makeGrid(size.valueAsNumber);
	pixels=document.querySelectorAll(".pixel")
	paint()
}
initialize()
size.addEventListener("input",()=> {
  clear();
  makeGrid(size.valueAsNumber);
	pixels=document.querySelectorAll(".pixel")
	paint()
})

let state=''
buttons.forEach(button=>{
	button.addEventListener("click",(e)=>{
		state=e.target.className
	})
})
function paint(color,state){
	let isMouseDown=false
	pixels.forEach(pixel=>{
		pixel.addEventListener("mousedown",(e)=>{
			isMouseDown=true;
			e.target.style.backgroundColor="black"
			console.log("clicked")
		})
	})
	pixels.forEach(pixel=>{
		pixel.addEventListener("mouseup",()=>{
			isMouseDown=false
		})
	})
	pixels.forEach(pixel=>{
		pixel.addEventListener("mouseover",(e)=>{
			if(isMouseDown){
				e.target.style.backgroundColor="black";
			}
		})
	})
}
