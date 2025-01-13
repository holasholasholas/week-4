function initMedium(){
    
let serialArray = [];
let firstCard, secondCard;
let lockBoard = false;
let assignId = 0;

for (let i=0; i < 16; i++){
    assignId += 1 ;    
    serialArray.push(assignId)
}
const serialArrayEasy = [...serialArray, ...serialArray];

shuffle(serialArrayEasy);

function shuffle(array) {
    for (let i = array.length -1; i >= 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function generateCards(){
    for(let i=0; i < 32; i++){
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-number", serialArrayEasy.pop()); 
    tilesContainerEasy.appendChild(element);
    element.addEventListener("click", flipCard);
}};

}