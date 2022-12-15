// functions

function currentMode(modeName) {
    mode = modeName;
}

// params
const paintingArea = document.getElementById("painting-area");
const colourChoice = document.getElementById("colour-choice");
const clearButton = document.getElementById("clear-button");
const colorPicker = document.getElementById("color-pick");
const rainbow = document.getElementById("rainbow");
const eraser = document.getElementById("eraser");

let sizeArea = 10;
let color = "#5f6c7b";
let mode = "color";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// mode
colourChoice.onclick = () => currentMode("color");
eraser.onclick = () => currentMode("eraser");
rainbow.onclick = () => currentMode("rainbow");
clearButton.onclick = () => reloadArea();
// clearing painting Area
function clearArea() {
    paintingArea.innerHTML = '';
}

// setting colour for brush



// restart the Area
function reloadArea() {
    clearArea();
    setupArea(sizeArea);
}

// adding blocks to painting area [10x10]
function setupArea(sizeArea) {
    // puting in order [10x10]
    paintingArea.style.gridTemplateColumns = `repeat(${sizeArea}, 1fr)`
    paintingArea.style.gridTemplateRows = `repeat(${sizeArea}, 1fr)`

    for (let i = 0; i < sizeArea*sizeArea; i++) {
        let dot = document.createElement("div");
        dot.classList.add("point");
        dot.style.width = "50px";
        dot.style.height = "50px";
        
        dot.addEventListener("mouseover", changeColor);
        dot.addEventListener("mousedown", changeColor);

        paintingArea.appendChild(dot);
    }
}

function setColor(currentMode) {
    if (mode == "rainbow") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        color = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    if (mode == "eraser") color = "#fffffe";
    if (mode == "color") color = colorPicker.value;
}

function changeColor(e) {
    setColor(currentMode);
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = color; 
    }
    if (e.type === 'mousedown') e.target.style.backgroundColor = color; 
    
}

window.onload = () => {
    setupArea(sizeArea);
}