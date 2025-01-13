document.getElementById("easyButton").onclick = easyTiles;
document.getElementById("mediumButton").onclick = mediumTiles;
document.getElementById("hardButton").onclick = hardTiles;


const tilesContainerEasy = document.querySelector(".easy-tiles")
const tilesContainerMedium = document.querySelector(".medium-tiles")
const tilesContainerHard = document.querySelector(".hard-tiles")

let serialEasyArray = [];
let serialMediumArray = [];
let serialHardArray = [];
let firstCard, secondCard;
let lockBoard = false;
let assignId = 0;

for (let i=0; i < 8; i++){
    assignId += 1 ;    
    serialEasyArray.push(assignId)
}

for (let i=0; i < 16; i++){
    assignId += 1 ;    
    serialMediumArray.push(assignId)
}

for (let i=0; i < 32; i++){
    assignId += 1 ;    
    serialHardArray.push(assignId)
}
const serialArrayEasy = [...serialEasyArray, ...serialEasyArray];
const serialArrayMedium = [...serialMediumArray, ...serialMediumArray];
const serialArrayHard = [...serialHardArray, ...serialHardArray];

shuffle(serialArrayEasy);
shuffle(serialArrayMedium);
shuffle(serialArrayHard);

function shuffle(array) {
    for (let i = array.length -1; i >= 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function generateCardsEasy(){
    for(let i=0; i < 16; i++){
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-number", serialArrayEasy.pop()); 
    tilesContainerEasy.appendChild(element);
    element.addEventListener("click", flipCard);
}};

function generateCardsMedium(){
    for(let i=0; i < 32; i++){
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-number", serialArrayMedium.pop()); 
    tilesContainerMedium.appendChild(element);
    element.addEventListener("click", flipCard);
}};

function generateCardsHard(){
    for(let i=0; i < 64; i++){
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-number", serialArrayHard.pop()); 
    tilesContainerHard.appendChild(element);
    
    element.addEventListener("click", flipCard);
}};


function flipCard(){
    
    if(lockBoard) return;
    if (this === firstCard) return;
    this.textContent = this.dataset.number;
    this.classList.add("flipped");
    
    if (!firstCard){
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.number === secondCard.dataset.number;

    isMatch ? disableCards() : unflipCards();

    function disableCards(){
        
        
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        
        resetBoard();
    };

    // resetBoard();

}

function unflipCards(){
    setTimeout(() => {
        firstCard.textContent = null;
        secondCard.textContent = null;
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);

}

function resetBoard(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}


function clearCache(){
    document.querySelector(".title").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
}
// function restart(){
//     resetBoard();
    
// }

// 
function easyTiles(){
    generateCardsEasy();
    clearCache();
    
}

function mediumTiles(){
    generateCardsMedium();
    clearCache();
    
}

function hardTiles(){
    generateCardsHard();
    clearCache();
    
}