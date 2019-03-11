// DOM VARIABLES
    let mainForm = document.forms['fname'];
    let gridHeight = mainForm['grid-height'];
    let gridWidth = mainForm['grid-width'];
    let canvasTable = document.getElementById('pixelCanvas');
    let canvasColor = document.getElementById('color-picker');
    let penColor = canvasColor.value;



canvasColor.addEventListener('change', function(){
    penColor = this.value;
});

let getInputValue = (inputField) => {
    let inputValue =  inputField.value;
    if (!inputValue) return undefined;

    return inputValue;
}

let createAnElement = (element) => {
    return document.createElement(element);   
}

let appendElement = (parent, child) => {
    return parent.appendChild(child);
}

let createGrid = () => {
    let numberOfRow = getInputValue(gridHeight);
    let numberOfColoumn = getInputValue(gridWidth);
    for (let x=0; x < numberOfRow; x++){
        let tr = createAnElement('tr');
        for(let x=0; x< numberOfColoumn; x++){
            let gridCell = createAnElement('td');
            appendElement(tr, gridCell);
        }
        appendElement(canvasTable, tr);
    }
}

let clearGrid = () => {
    while(canvasTable.firstChild){
        canvasTable.removeChild(canvasTable.firstChild);
    }
}

mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearGrid();
    createGrid();
});

canvasTable.addEventListener('click', function(event){
    if(event.target.style.backgroundColor === ''){
        event.target.style.backgroundColor = penColor;
    }else{event.target.style.backgroundColor = '';}
});