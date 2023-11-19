const grid = document.querySelector(".grid");
const size = document.querySelector("#size");
const buttons=document.querySelectorAll("button")


function clear(){
  grid.textContent = '';
}

function draw(size) {
	for (let num = 0; num < size ** 2; num++) {
		const div = document.createElement("div");
		div.setAttribute("class", "pixel");
		grid.appendChild(div);
	}
	grid.style.gridTemplateColumns=`repeat(${size}, ${size}fr`
}

size.addEventListener("input",()=> {
  clear();
  draw(size.valueAsNumber);
	pixels=document.querySelectorAll(".pixel")
	paint()
})

let state=''
buttons.forEach(button=>{
	button.addEventListener("click",(e)=>{
		state=e.target.className
	})
})
let pixels=document.querySelectorAll(".pixel")
function paint(color){
	let isMouseDown=false
	pixels.forEach(pixel=>{
		pixel.addEventListener("mousedown",()=>{
			isMouseDown=true;
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
