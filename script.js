const container = document.getElementById('paint-container');
const range = document.getElementById('range');
const rangeLabel = document.getElementById('rangeText');
let drawing = false;
let color = '#e66565';

function createGrid(){
    rangeLabel.textContent = `${range.value} * ${range.value}`;
    container.innerHTML = "";

    for(let i = 0; i < range.value; i++){
        const rowTemp = document.createElement("div");
        rowTemp.classList.add("row-div");

        for(let j = 0; j < range.value; j++){
            const temp = document.createElement("div");
            temp.classList.add("paint-wall");
            rowTemp.appendChild(temp);
        }
        container.appendChild(rowTemp);
    }

    const walls = document.querySelectorAll(".paint-wall");
    walls.forEach(element => {
        element.addEventListener("mousedown", () => {
            drawing = true;
            paintWall(element);
        })
        element.addEventListener("mouseover", () =>{
            if(drawing){
                paintWall(element);
            }
        })
    })

    document.addEventListener("mouseup", () => {
        drawing = false;
    })

}

function paintWall(wall){
    const optionTool = document.querySelectorAll(".tool-choice.active");
    if(optionTool.dataset.info ==='pencil'){
        if(random === true){
            colorPicker.value = getRandomColor();
        }
    }
}

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

range.addEventListener("input", createGrid);
createGrid();