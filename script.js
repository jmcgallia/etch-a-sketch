// Puts an x by x grid of divs into the drawing-area div
function drawGrid() {
    number = Number(window.prompt("Please enter grid size."));

    drawingArea = document.querySelector(".drawing-area");

    for (let i = 0; i < (number * number); i++) {
        newBox = document.createElement('div');
        newBox.classList.add("testBox");
        newBox.style.flex = `0 0 ${100 / number}%`;
        newBox.style.height = `${100 / number}%`;

        boxList.push(newBox);
        drawingArea.appendChild(newBox);
    }

    
}

function addHoverEvents(boxList) {
    boxList.forEach((element) => element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "blue";
    }))
}

boxList = [];
drawGrid();
addHoverEvents(boxList);