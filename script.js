/* declare variables at beginning */
const gridContainer = document.querySelector("#grid-squares-container");
const clearBtn = document.querySelector("#clear");
const randomBtn = document.querySelector("#random");
const blackBtn = document.querySelector("#black");
const eraseBtn = document.querySelector("#erase");
const colorBtns = document.querySelectorAll(".color-buttons");
const colorPickerBtn = document.querySelector("#pick-color")
const colorPicker = document.querySelector("#color-picker");
const gridSizeBtn = document.querySelector("#grid-size-picker");
const gridSizeMsg = document.querySelector("#size-picker-label");
let currentGridSize = gridSizeBtn.value;
let currentColor = "#000000";

/* creates grid based on number of squares on each side of the grid */
function createGrid(numSquares) {
    const totalNumSquares = numSquares * numSquares;
    for (let i = 0; i < totalNumSquares; i++) {
        const div = document.createElement("div");
        gridContainer.appendChild(div);
        div.classList.add("grid-box");
        div.style.height = `${100 / numSquares}%`;
        div.style.width = `${100 / numSquares}%`;
    }
    /* creates event listener for each box in the grid to change color */
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((box) => { 
        box.addEventListener("mouseenter", (e) => {
            box.style.backgroundColor = currentColor;
        })
    }) 
}
createGrid(16);

/* deletes current grid and creates a new one from current grid size */
function resetBoard() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(currentGridSize);
}

/* returns a random RGB color */
function getRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgba = `rgba(${r},${g},${b},100)`; 
    return rgba;
}

/* makes each box in the grid black when moused over */
blackBtn.addEventListener("click", () => {
    currentColor = "#000000";
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((box) => { 
        box.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = currentColor;
        })
    }) 
})

/* makes each box in the grid white when moused over */
eraseBtn.addEventListener("click", () => {
    currentColor = "#FFFFFF ";
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((box) => { 
        box.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = currentColor;
        })
    }) 
})

/* gets a random color and makes each box in the grid that color when moused over */
randomBtn.addEventListener("click", () => {
    currentColor = getRandomColor();
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((box) => { 
        box.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = currentColor;
        })
    }) 
})

/* gets a user-selected RGB color from a color picker and makes each box in the grid that color when moused over */
colorPickerBtn.addEventListener("input", () => {
    currentColor = colorPicker.value;
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((box) => { 
        box.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = currentColor;
        })
    }) 
});

/* resets board when user clicks clear button */
clearBtn.addEventListener("click", resetBoard);

/* updates message that tells user the size of the grid and resets the board with the user-inputted number of squares per side */
gridSizeBtn.addEventListener("input", () => {
    currentGridSize = gridSizeBtn.value;
    gridSizeMsg.innerHTML = `Squares per side: ${currentGridSize}<br/>`;
    resetBoard();
})

/* changes appearance of active color button and resets appearance of other color buttons */
colorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        colorBtns.forEach((btn) => {
            btn.style.border = '3px solid gray';
            btn.style.boxShadow = "none";
        })
        btn.style.border = '3px solid #53BDE3';
        btn.style.boxShadow = "0 0 10px #53BDE3"

    })
})

