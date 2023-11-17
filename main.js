const grid = document.querySelector(".grid");
const size = document.querySelector("#size");

function initialize(size) {
	for (let num = 0; num < size ** 2; num++) {
		const div = document.createElement("div");
		div.setAttribute("class", "pixel");
		grid.appendChild(div);
	}
}

