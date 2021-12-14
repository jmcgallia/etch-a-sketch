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
function drawGrid(gridSize) {


    for (let i = 0; i < (gridSize * gridSize); i++) {
        newBox = document.createElement('div');
        newBox.classList.add("testBox");
        newBox.style.flex = `0 0 ${100 / gridSize}%`;
        newBox.style.height = `${100 / gridSize}%`;
        boxList.push(newBox);
        drawingArea.appendChild(newBox);
    }
    // Add the onHover event for each box created
    addHoverEvents(boxList);
}

// Does everything to create the grid - includes erasing old grid, drawing grid, adding listeners, etc.
function createGrid(gridSize) {
    deleteGrid();
    drawGrid(gridSize);
}

// Delete the old box elements from our boxList and from the DOM so we can put the new ones
function deleteGrid() {
    console.log(boxList)
    boxList = [];
    console.log(boxList)
    drawingArea.innerHTML = '';
}

//////////////////////////////////////
// SELECT ELEMENTS & ADD LISTENERS //
////////////////////////////////////
//Drawing area
drawingArea = document.querySelector(".drawing-area");
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
// gridSize selection buttons
button1 = document.querySelector('.button-1');
button1.addEventListener("mousedown", () => createGrid(1));
button2 = document.querySelector('.button-2');
button2.addEventListener("mousedown", () => createGrid(2));
button4 = document.querySelector('.button-4');
button4.addEventListener("mousedown", () => createGrid(4));
button8 = document.querySelector('.button-8');
button8.addEventListener("mousedown", () => createGrid(8));
button16 = document.querySelector('.button-16');
button16.addEventListener("mousedown", () => createGrid(16));
button32 = document.querySelector('.button-32');
button32.addEventListener("mousedown", () => createGrid(32));
button64 = document.querySelector('.button-64');
button64.addEventListener("mousedown", () => createGrid(64));
button128 = document.querySelector('.button-128');
button128.addEventListener("mousedown", () => createGrid(128));

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

function onInputChange() {
    createGrid(this.valueAsNumber);
}






////////////
// Logic //
//////////

let chosenColor = RED;
let boxList = [];
gridSize = 8;
createGrid(gridSize);
