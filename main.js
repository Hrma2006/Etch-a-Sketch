const grid = document.querySelector(".grid");
const size = document.querySelector("#size");

function clear(){
  grid.textContent = '';
}

function draw(size) {
	for (let num = 0; num < size ** 2; num++) {
		const div = document.createElement("div");
		div.setAttribute("class", "pixel");
		grid.appendChild(div);
	}
  console.log(size)
	scale(size);
}
function scale(num) {
	const pixels = document.querySelectorAll(".pixel");
	let length = parseFloat((500 / num).toFixed(10))
	pixels.forEach((pixel) => {
		pixel.style.width = `${length}px`;
		pixel.style.height = `${length}px`;
	});
}
size.addEventListener("input",()=> {
  clear();
  draw(size.valueAsNumber);
})
