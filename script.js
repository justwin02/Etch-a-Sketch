const container = document.getElementById('paint-container');
const range = document.getElementById('range');
const rangeLabel = document.getElementById('rangeText');

function createGrid(size){
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
}

// range.addEventListener("input", createGrid)
createGrid();