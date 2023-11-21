const grid = document.querySelector(".grid");
const size = document.querySelector("#size");
const buttons = document.querySelectorAll("button");
let pixels = document.querySelectorAll(".pixel");
let colorSelector = document.querySelector("#color-selector");
let selectedColor;
let sizeViewer = document.querySelector("p");
const colorButton = document.querySelector(".color");
const shadeButton = document.querySelector(".shade");
const rainbowButton = document.querySelector(".rainbow");
const eraseButton = document.querySelector(".erase");
const fillButton = document.querySelector(".fill");
const clearButton = document.querySelector(".clear");
function clear() {
	grid.textContent = "";
}

//a function to make a given number of pixels
function makeGrid(size) {
	for (let num = 0; num < size ** 2; num++) {
		const div = document.createElement("div");
		div.setAttribute("class", "pixel");
		grid.appendChild(div);
	}
	grid.style.gridTemplateColumns = `repeat(${size}, ${size}fr`;
}
function changeSizeViewer(size) {
	sizeViewer.innerText = size + " X " + size;
}
// a function called on the load of the page to make it work
function initialize() {
	selectedColor = colorSelector.value;
	changeSizeViewer(size.value);
	makeGrid(size.valueAsNumber);
	pixels = document.querySelectorAll(".pixel");
}
//called the function
initialize();

//added an event listener to detect ant change to the size
size.addEventListener("input", () => {
	clear();
	changeSizeViewer(size.value);
	makeGrid(size.valueAsNumber);
	//called pixels again to update it
	pixels = document.querySelectorAll(".pixel");
});

// a variable to know what to do when starting to draw
let state = "color";

colorButton.addEventListener("click", () => {
	state = "color";
	selectedColor = colorSelector.value;
});

rainbowButton.addEventListener("click", () => {
	state = "rainbow";
	selectedColor = generateColor();
});

fillButton.addEventListener("click", () => {
	state = "fill";
	selectedColor = colorSelector.value;
});
eraseButton.addEventListener('click',()=>{
	state='erase'
	selectedColor='#ffffff'
})
function fillPixels() {
	pixels.forEach((pixel) => {
		pixel.style.backgroundColor = `${selectedColor}`;
	});
}
function generateColor() {
	let letters = "ABCDEF1234567890";
	let color = ["#"];
	for (let i = 0; i <= 5; i++) {
		let rand = Math.floor(Math.random() * 16);
		color[i + 1] = letters[rand];
	}
	return color.join("");
}

function clearAll() {
	pixels.forEach((pixel) => {
		pixel.style.backgroundColor = "#ffffff";
	});
	state = "";
}
