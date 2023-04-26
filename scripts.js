let playingScreen  = document.querySelector('.main-canvas');
let playerChoice = 'X';

let pieceHolder = document.getElementById('piece-holder');
let pieceCopy = pieceHolder.cloneNode(true);

pieceHolder.remove();

//Selection screen
let choiceCanvas = document.createElement('div');
choiceCanvas.style = 'background-color: red; height: 50vh; width; 50px; border-radius: 13.33px; margin-right: 40px;';

let optionO = document.createElement('button');//Option buttons
let optionX = document.createElement('button');

optionO.style = 'font-size: 233px; font-weight: 700; height: 70%; width: 30vw; border-radius: 13px; margin: 4rem;';
optionX.style = 'font-size: 233px; font-weight: 700; height: 70%; width: 30vw; border-radius: 13px; margin: 4rem;';
optionO.innerHTML = 'O';
optionX.innerHTML = 'X';

choiceCanvas.appendChild(optionO);
choiceCanvas.appendChild(optionX);


function playerChoiceX(){
    playerChoice = 'X';
    cpuChoice = 'O';
    choiceCanvas.remove();
    playingScreen.appendChild(pieceCopy);//adds them to the canvas after choosing
}
function playerChoiceO(){
    playerChoice = 'O';
    cpuChoice = 'X';
    choiceCanvas.remove();
    playingScreen.appendChild(pieceCopy);//adds them to the canvas after choosing
}

optionX.onclick = playerChoiceX;
optionO.onclick = playerChoiceO;


playingScreen.appendChild(choiceCanvas);// Asks the player their choice

//Gameplay section
let pieceIds = ['piece#1', 'piece#2', 'piece#3', 'piece#4', 'piece#5', 'piece#6', 'piece#7', 'piece#8', 'piece#9'];

let filledSlots = [['-', '-', '-\n\n\n'], ['\n-', '-', '-\n'], ['\n-', '-', '-']];

let b = Math.floor(Math.random() * pieceIds.length);
let emptyCpuChoice = false;

function gridTraversal(){
    // Row traversal
    if (document.getElementById('piece#1').innerHTML === playerChoice && document.getElementById('piece#2').innerHTML === playerChoice && document.getElementById('piece#1').innerHTML === playerChoice)
    // Column traversal
}

// Slot fill function inclusive of CPU moves
function selectedTile(tile, pieceName){
    if (tile.querySelector('h1').innerHTML != '-'){return;}// Prevents overwriting
    // Adds player choice to the board
    tile.querySelector('h1').innerHTML = playerChoice;
    filledSlots[(pieceName[6]-1)] = playerChoice;
    
    // Randomly choose a tile for the CPU to place its letter
    while (!emptyCpuChoice){
        b = Math.floor(Math.random() * pieceIds.length);
        if (document.getElementById(pieceIds[b]).querySelector('h1').innerHTML === '-'){
            break;
        }
        else{
            b = Math.floor(Math.random() * pieceIds.length);
        }
    }

    document.getElementById(pieceIds[b]).querySelector('h1').innerHTML = cpuChoice;

    gridTraversal();
}