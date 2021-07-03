const gridContainer = document.querySelector("#grid-squares-container");
const clearBtn = document.querySelector("#clear")



function createGrid(numSquares) {
    let totalNumSquares = numSquares * numSquares;
    for (let i = 0; i < totalNumSquares; i++) {
        let div = document.createElement("div");
        gridContainer.appendChild(div);
        div.classList.add("grid-box");
        div.style.height = `${100 / numSquares}%`;
        div.style.width = `${100 / numSquares}%`;
    }
    let gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((box) => { 
        box.addEventListener("mouseover", (e) => {
            box.style.backgroundColor = "black";
        })
    }) 
}
createGrid(16);


function numSquaresPrompt() {
    let numSquares;
    while (isNaN(numSquares) || numSquares < 0 || numSquares > 100) {
    numSquares = window.prompt(`How many squares per side should the new grid have? \nEnter a number between 0 and 100`);
        }
    createGrid(numSquares);
}




function resetBoard() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}
clearBtn.addEventListener("click", resetBoard);

clearBtn.addEventListener("click", numSquaresPrompt);
