const slots = []
const cards = []
const container = document.getElementById("container");

// create slots
for (let x = 0; x < 10; x++) {
    const slot = document.createElement("div");
    // set class
    slot.classList.add("slot");
    // set id
    slot.id = "slot" + x.toString(); 
    // set left
    slot.style.left = (x * 50 + 10).toString() + "px";
    // append
    container.appendChild(slot)
}

// create cards
for (let x = 0; x < 10; x++) {
    const card = document.createElement("div");
    // set class
    card.classList.add("card");
    // set id
    card.id = "card" + x.toString(); 
    // set left
    card.style.left = (x * 50 + 15).toString() + "px";
    // set top
    card.style.top = "105px";
    // set text
    card.innerText = x.toString();
    // append
    container.appendChild(card)
}

function swapCards() {
    const card1 = document.getElementById("card2");   
    const card2 = document.getElementById("card5");   
    const slot1 = document.getElementById("slot2");   
    const slot2 = document.getElementById("slot5");   

    let card1Top = parseInt(card1.style.top);
    let card1Left = parseInt(card1.style.left);
    let card2Top = parseInt(card2.style.top);
    let card2Left = parseInt(card2.style.left);

    // Move both cards up
    let timerUp = setInterval(moveUp, 5);

    function moveUp() {
        if (card1Top === 50) {
            clearInterval(timerUp);
            // Move card1 right and card2 left
            let timerLeft = setInterval(moveLeft, 5);
        
            function moveLeft() {
                if (parseInt(card2.style.left) === parseInt(slot1.style.left) + 5) {
                    clearInterval(timerLeft);
                    // Move both cards down
                    let timerDown = setInterval(moveDown, 5);
                
                    function moveDown() {
                        if (card1Top === 105) {
                            clearInterval(timerDown);
                        } else {
                            card1Top++; 
                            card1.style.top = card1Top + "px"; 
                            card2Top++; 
                            card2.style.top = card2Top + "px";                                         }
                    }
                } else {
                    card1Left++; 
                    card1.style.left = card1Left + "px"; 
                    card2Left--; 
                    card2.style.left = card2Left + "px"; 
                }
            }
        } else {
            card1Top--; 
            card1.style.top = card1Top + "px"; 
            card2Top--; 
            card2.style.top = card2Top + "px"; 
        }
    }    
}


function moveCard() {
    const card = document.getElementById("card5");   
    const slot = document.getElementById("slot2");   

    let top = parseInt(card.style.top);
    let left = parseInt(card.style.left);

    // Move up
    let timerUp = setInterval(moveUp, 5);

    function moveUp() {
        if (parseInt(card.style.top) === 50) {
            clearInterval(timerUp);
            // Move left
            let timerLeft = setInterval(moveLeft, 5);
        
            function moveLeft() {
                if (parseInt(card.style.left) === parseInt(slot.style.left) + 5) {
                    clearInterval(timerLeft);
                    // Move down
                    let timerDown = setInterval(moveDown, 5);
                
                    function moveDown() {
                        if (parseInt(card.style.top) === 105) {
                            clearInterval(timerDown);
                        } else {
                            top++; 
                            card.style.top = top + "px"; 
                        }
                    }
                } else {
                    left--; 
                    card.style.left = left + "px"; 
                }
            }
        } else {
            top--; 
            card.style.top = top + "px"; 
        }
    }    
}

