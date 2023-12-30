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
	paint();
}
//called the function
initialize();

//changing the color according to the colorSelector
colorSelector.addEventListener("input",()=>{
	selectedColor=colorSelector.value
}
)

//added an event listener to detect ant change to the size
size.addEventListener("input", () => {
	clear();
	initialize();
});

// a variable to know what to do when starting to draw
let state = "color";

//a function to return all colors to default
function noButtonSelected() {
	buttons.forEach((button) => {
		button.style.backgroundColor = "aqua";
	});
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.className != "clear") {
			state = button.className;
			noButtonSelected();
			button.style.backgroundColor = "aliceblue";
		}
	});
});

colorButton.addEventListener("click", () => {
	selectedColor = colorSelector.value;
});
rainbowButton.addEventListener("click", () => {
	selectedColor = generateColor();
});

fillButton.addEventListener("click", () => {
	selectedColor = colorSelector.value;
});
eraseButton.addEventListener("click", () => {
	selectedColor = "#ffffff";
});
clearButton.addEventListener("click", () => {
	clearAll();
});
function paint() {
	let isMouseDown = false;
	pixels.forEach((pixel) => {
		pixel.addEventListener("mousedown", (e) => {
			isMouseDown = true;
			if (state == "fill") {
				fillPixels();
			} else if (state == "rainbow") {
				selectedColor = generateColor();
			}
			e.target.style.backgroundColor = `${selectedColor}`;
		});
	});
	pixels.forEach((pixel) => {
		pixel.addEventListener("mouseup", () => {
			isMouseDown = false;
		});
	});
	pixels.forEach((pixel) => {
		pixel.addEventListener("mouseover", (e) => {
			if (isMouseDown) {
				if (state == "color") {
					e.target.style.backgroundColor = `${selectedColor}`;
				} else if (state == "erase") {
					e.target.style.backgroundColor = `#ffffff`;
				} else if (state == "rainbow") {
					e.target.style.backgroundColor = generateColor();
				}
			}
		});
	});
}

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
}
