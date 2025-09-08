const container = document.getElementById('paint-container');
const range = document.getElementById('range');
const rangeLabel = document.getElementById('rangeText');
let drawing = false;

function paintWall(wall){
    const optionTool = document.querySelectorAll(".tool-choice.active");

}

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

range.addEventListener("input", createGrid);
createGrid();