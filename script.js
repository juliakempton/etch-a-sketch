const gridContainer = document.querySelector("#grid-squares-container");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
    div.classList.add("grid-box");
}


