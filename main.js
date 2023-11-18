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
})

let state=''
buttons.forEach(button=>{
	button.addEventListener("click",(e)=>{
		state=e.target.className
		console.log(state)
	})
})
