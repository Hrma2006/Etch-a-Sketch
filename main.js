const grid = document.querySelector(".grid");
const size = document.querySelector("#size");
const buttons=document.querySelectorAll("button")
let pixels=document.querySelectorAll(".pixel")
let colorSelector=document.querySelector("#color-selector")
let selectedColor;

function clear(){
  grid.textContent = '';
}

//a function to make a given number of pixels
function makeGrid(size) {
	for (let num = 0; num < size ** 2; num++) {
		const div = document.createElement("div");
		div.setAttribute("class", "pixel");
		grid.appendChild(div);
	}
	grid.style.gridTemplateColumns=`repeat(${size}, ${size}fr`
}

// a function called on the load of the page to make it work
function initialize(){
	selectedColor=colorSelector.value;
	makeGrid(size.valueAsNumber);
	pixels=document.querySelectorAll(".pixel")
	paint()
}
//called the function
initialize()

//added an event listener to detect ant change to the size
size.addEventListener("input",()=> {
  clear();
  makeGrid(size.valueAsNumber);
	//called pixels again to update it
	pixels=document.querySelectorAll(".pixel")
	paint()
})


// a variable to know what to do when starting to draw
let state=''

//change the state according to the class of the pressed button
buttons.forEach(button=>{
	button.addEventListener("click",(e)=>{
		state=e.target.className
	})
})

// an event listener to change the selected color when you enter a new color
colorSelector.addEventListener("input",()=>{
	selectedColor=colorSelector.value
	console.log(selectedColor)
})


// a function to paint that takes the state and a color as an input
function paint(color,state){
	let isMouseDown=false
	pixels.forEach(pixel=>{
		pixel.addEventListener("mousedown",(e)=>{
			isMouseDown=true;
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
