/////////////
// COLORS //
///////////
RED = "#D32F2F";
PURPLE = "#7B1FA2";
BLUE = "#1976D2";
GREEN = "#148F77";
BLACK = "black";
GRAY = "lightgray";

////////////////
// Functions //
//////////////
// Puts an x by x grid of divs into the drawing-area div
function drawGrid() {

    gridSize = Number(window.prompt("Please enter grid size."));
    drawingArea = document.querySelector(".drawing-area");

    for (let i = 0; i < (gridSize * gridSize); i++) {
        newBox = document.createElement('div');
        newBox.classList.add("testBox");
        newBox.style.flex = `0 0 ${100 / gridSize}%`;
        newBox.style.height = `${100 / gridSize}%`;
        boxList.push(newBox);
        drawingArea.appendChild(newBox);
    }
}

// Does everything to create the grid - includes drawing the grid, adding listeners, etc.
function createGrid(gridSize) {
    
}


//////////////////////////////////////
// SELECT ELEMENTS & ADD LISTENERS //
////////////////////////////////////
// Clear button
clearButton = document.querySelector(".clear-button button");
clearButton.addEventListener("mousedown", clearGrid);
// Color-selection buttons
redButton = document.querySelector(".red-button");
redButton.addEventListener("mousedown", () => changeColor(RED));
purpleButton = document.querySelector(".purple-button");
purpleButton.addEventListener("mousedown", () => changeColor(PURPLE));
blueButton = document.querySelector(".blue-button");
blueButton.addEventListener("mousedown", () => changeColor(BLUE));
greenButton = document.querySelector(".green-button");
greenButton.addEventListener("mousedown", () => changeColor(GREEN));
blackButton = document.querySelector(".black-button");
blackButton.addEventListener("mousedown", () => changeColor(BLACK));
grayButton = document.querySelector(".gray-button");
grayButton.addEventListener("mousedown", () => changeColor(GRAY));
// The range input for screen gridSize


/////////////////////////////////
// LISTENER FUNCTIONS DEFINED //
///////////////////////////////

// Adds the event listener for when a box is moused over (changes the color)
function addHoverEvents(boxList) {
    boxList.forEach((element) => element.addEventListener("mouseover", () => {
        element.style.backgroundColor = chosenColor;
    }))
}

function clearGrid() {
    boxList.forEach((element) => element.style.backgroundColor = GRAY)
}

function changeColor(color) {
    chosenColor = color;
}






////////////
// Logic //
//////////

let chosenColor = RED;

let boxList = [];
drawGrid();
addHoverEvents(boxList);