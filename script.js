const container = document.getElementById('container');

function createGrid(size){
    container.innerHTML = '';
    const squareSize = 600 / size;

    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.style.border = '1px solid black';
    }

}

createGrid(16);