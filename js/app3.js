const cardArray = [
    {
        id:"angels",
        image:"img/angels.jpg" 

    },
    {
        id:"armed" ,
        image: "img/armed.jpg"

    },
    {
        id:"bookworms"  ,
        image:"img/bookworms.jpg"

    },
    {
        id: "drowned"  ,
        image:"img/drowned.jpg" 

    },
    {
        id:"enchanted"  ,
        image:"img/enchanted.jpg" 

    },
    {
        id:"giddyap"  ,
        image:"img/giddyap.jpg" 

    }
]
const deckArray = [...cardArray, ...cardArray];
const cards = document.querySelectorAll(".memory-card");
const backCard = document.getElementsByClassName("back-face");
const container = document.getElementsByClassName("deck-container")

console.log(container);

container.appendChild(deckArray);
init();
function flipCard(){
    


    
    console.log(this);
}

cards.forEach(card => card.addEventListener("click", flipCard));




