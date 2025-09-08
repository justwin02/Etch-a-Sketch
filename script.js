const container = document.querySelector('.paint-container');
const range = document.getElementById('range');
const rangeLabel = document.querySelector('.rangeText');
const tools = document.querySelectorAll('.tool-choice');
const rainbow = document.querySelector('.random');
const colorPicker = document.getElementById('background');
const reset = document.querySelector('.clean');
let drawing = false;
let eraser = false;
let random = false;
let color = '#e66565';

tools.forEach(button => {
    button.addEventListener("click", () => {
        tools.forEach(b => b.classList.remove("active"));
        button.classList.add("active")
    })
})

rainbow.addEventListener("click", () => {
    random = !random;
    rainbow.classList.toggle('active');
})

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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

    reset.addEventListener("click", () => {
        walls.forEach(element => {
            element.style.backgroundColor = "transparent";
        })
    })

    document.addEventListener("mouseup", () => {
        drawing = false;
    })

}

function paintWall(wall){
    const optionTool = document.querySelector(".tool-choice.active");
    if(optionTool.dataset.info ==='pencil'){
        if(random === true){
            colorPicker.value = getRandomColor();
        }
        wall.style.backgroundColor = colorPicker.value;
    }else{
        wall.style.backgroundColor = "transparent";
    }
}

range.addEventListener("input", createGrid);
createGrid();