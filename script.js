/* declare variables at beginning */
const gridContainer = document.querySelector("#grid-squares-container");
const clearBtn = document.querySelector("#clear");
const randomBtn = document.querySelector("#random");
const rainbowBtn = document.querySelector("#rainbow")
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
        box.addEventListener("mouseenter", () => {
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
    currentColor = "#000000";
    colorBtns.forEach((btn) => {
      btn.style.border = '3px solid gray';
      btn.style.boxShadow = "none";
    })
    blackBtn.style.border = '3px solid #02296D';
    blackBtn.style.boxShadow = "0 0 5px #02296D";
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

/* changes the color of each grid box to the color that is passed into the function*/
function changeBoxColor(color) {
  const gridBoxes = document.querySelectorAll(".grid-box");
  gridBoxes.forEach((box) => { 
      box.addEventListener("mouseover", (event) => {
        currentColor = color;
        event.target.style.backgroundColor = currentColor;
      })
  }) 
}

/* makes each box in the grid black when moused over */
blackBtn.addEventListener("click", () => {
    changeBoxColor("#000000");
})

/* makes each box in the grid white when moused over */
eraseBtn.addEventListener("click", () => {
    changeBoxColor("#FFFFFF"); 
})

/* gets a random color and makes each box in the grid that color when moused over */
randomBtn.addEventListener("click", () => {
    changeBoxColor(getRandomColor());
})

/* makes each box in the grid a different random color when moused over */
rainbowBtn.addEventListener("click", () => {
  const gridBoxes = document.querySelectorAll(".grid-box");
  gridBoxes.forEach((box) => { 
      box.addEventListener("mouseover", (event) => {
          currentColor = getRandomColor();
          event.target.style.backgroundColor = currentColor;
      })
  }) 
})

/* gets a user-selected RGB color from a color picker and makes each box in the grid that color when moused over */

colorPickerBtn.addEventListener("click", () => {
  currentColor = colorPicker.value;
  changeBoxColor(colorPicker.value);
});
colorPickerBtn.addEventListener("input", () => {
  currentColor = colorPicker.value;
  changeBoxColor(colorPicker.value);
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
        btn.style.border = '3px solid #02296D';
        btn.style.boxShadow = "0 0 5px #02296D"

    })
})