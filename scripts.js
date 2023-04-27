let playingScreen  = document.querySelector('.main-canvas');// Storing the playing grid
let playerChoice = 'X';// Initializing the player's choice

let pieceHolder = document.getElementById('piece-holder');// Stores the container for each playing grid
let pieceCopy = pieceHolder.cloneNode(true);// Copying it to put it back onto the grid after user chooses their symbol
let slotsFilled = 0;// Variable to track how many slots are filled
pieceHolder.remove();// Removes from grid temporarily

//Selection screen
let choiceCanvas = document.createElement('div');// Creates grid to make decision and styling for it
choiceCanvas.style = 'background-color: rgb(110, 91, 91); height: 50vh; width; 50px; border-radius: 13.33px; margin-right: 40px; box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);';

let optionO = document.createElement('button');// Buttons for choosing
let optionX = document.createElement('button');
// Styling for the buttons and their text content
optionO.style = 'color: darkred; font-size: 313px; font-weight: 700; height: 70%; width: 30vw; border-radius: 13px; margin: 4rem; background-color: white; box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);';
optionX.style = 'color: darkblue; font-size: 313px; font-weight: 700; height: 70%; width: 30vw; border-radius: 13px; margin: 4rem; background-color: white; box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);';
// Setting button IDs for animations and styling
optionO.setAttribute("id", "choice-button0"); optionX.setAttribute("id", "choice-button1");
optionO.innerHTML = 'O';
optionX.innerHTML = 'X';
// Puts them onto decision div
choiceCanvas.appendChild(optionO);
choiceCanvas.appendChild(optionX);

// Functions for each choice a player can make
function playerChoiceX(){
    playerChoice = 'X';
    cpuChoice = 'O';
    choiceCanvas.remove();
    playingScreen.appendChild(pieceCopy);//adds them to the canvas after choosing
    for (let i = 1; i < 10; i++){
        document.getElementById('piece#'+i).querySelector('h1').innerHTML = '-';
    }
}
function playerChoiceO(){
    playerChoice = 'O';
    cpuChoice = 'X';
    choiceCanvas.remove();
    playingScreen.appendChild(pieceCopy);//adds them to the canvas after choosing
    for (let i = 1; i < 10; i++){
        document.getElementById('piece#'+i).querySelector('h1').innerHTML = '-';
    }
}

optionX.onclick = playerChoiceX;
optionO.onclick = playerChoiceO;

playingScreen.appendChild(choiceCanvas);// Asks the player their choice


//Gameplay section
let pieceIds = ['piece#1', 'piece#2', 'piece#3', 'piece#4', 'piece#5', 'piece#6', 'piece#7', 'piece#8', 'piece#9'];

let filledSlots = [['-', '-', '-\n\n\n'], ['\n-', '-', '-\n'], ['\n-', '-', '-']];

let b = Math.floor(Math.random() * pieceIds.length);
let emptyCpuChoice = false;
let gameOver = false;

function gridTraversal(choiceVal, winner, endCode){
    if (endCode === 1){return;}
    // Row traversal
    if ((document.getElementById('piece#1').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#2').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#3').querySelector('h1').innerHTML === choiceVal)){
        alert(winner + ' won!');
        gameOver = true;
        return 1;
    }
    if ((document.getElementById('piece#4').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#5').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#6').querySelector('h1').innerHTML === choiceVal)){
        alert(winner + ' won!');
        gameOver = true;
        return 1;
    }
    if ((document.getElementById('piece#7').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#8').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#9').querySelector('h1').innerHTML === choiceVal)){
        alert(winner + ' won!');
        gameOver = true;
        return 1;
    }
    // Column traversal
    if ((document.getElementById('piece#1').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#4').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#7').querySelector('h1').innerHTML === choiceVal)){
        alert(winner + ' won!');
        gameOver = true;
        return 1;
    }
    if ((document.getElementById('piece#2').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#5').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#8').querySelector('h1').innerHTML === choiceVal)){
        alert(winner + ' won!');
        gameOver = true;
        return 1;
    }
    if ((document.getElementById('piece#3').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#6').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#9').querySelector('h1').innerHTML === choiceVal)){
        alert(winner + ' won!');
        gameOver = true;
        return 1;
    }
    //Diagonals
    if ((document.getElementById('piece#1').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#5').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#9').querySelector('h1').innerHTML === choiceVal)){
        alert(winner + ' won!');
        gameOver = true;
        return 1;
    }
    if ((document.getElementById('piece#3').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#5').querySelector('h1').innerHTML === choiceVal) && (document.getElementById('piece#7').querySelector('h1').innerHTML === choiceVal)){
        alert(winner + ' won!');
        gameOver = true;
        return 1;
    }
    else if (gameOver == false && slotsFilled >= 9){alert('Draw!'); return;}
}

let c=0;
// Slot fill function inclusive of CPU moves
function selectedTile(tile, pieceName){
    if (tile.querySelector('h1').innerHTML != '-'){return;}// Prevents overwriting

    // Adds player choice to the board
    tile.querySelector('h1').innerHTML = playerChoice;
    slotsFilled += 1;
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
    slotsFilled += 1;

    // Grid traversal for both
    c = gridTraversal(playerChoice, 'You', 0);
    gridTraversal(cpuChoice, 'CPU',c);

    // Clear canvas to restart
    if (gameOver){
        pieceHolder = document.getElementById('piece-holder');
        pieceHolder.remove();
        playingScreen.appendChild(choiceCanvas);// Asks the player their choice

        // Reset variables and game
        gameOver = false;
        slotsFilled = 0;
    }
}