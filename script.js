const gridContainer = document.querySelector("#grid-squares-container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
    div.classList.add("grid-box");
}


const gridBoxes = document.querySelectorAll(".grid-box");
gridBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        console.log("enter");
        box.style.backgroundColor = "black";
    })
})