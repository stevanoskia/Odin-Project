let color = "black";
let click = false;
document.addEventListener('DOMContentLoaded', function() {
    createBoard(16)
    document.querySelector('body').addEventListener('click', function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click
            let draw = document.querySelector('#draw');
            if(click) {
                draw.innerHTML = "You can start drawing";
            }
            else {
                draw.innerHTML = "Click to start drawing";  
            }
        }
    })
    let btn_popup = document.querySelector('#popup')
    btn_popup.addEventListener('click', function() {
        let size = getUserInput();
        createBoard(size)
    })
})

function createBoard(size) {
    let board = document.querySelector('.sketch-board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size*size;
    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)
         board.insertAdjacentElement('beforeend', div)
    }
}

function getUserInput() {
    let input = prompt("Select the size of the board:")
    let message = document.querySelector('#message')
    if (input == "") {
        message.innerHTML = "Choose a number between 1 and 100";
    }
    else if (input <= 0 || input >= 100) {
        message.innerHTML = "Choose a number between 1 and 100";
    }
    else {
        return input;
    }
}

function colorDiv() {
if (click) {

    if(color == "random") {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = "black";
    }

} 
}

function setColor(colorChoice) {
     color = colorChoice;
}

function clearBoard() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = "white")
}
