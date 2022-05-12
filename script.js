let playerPickRock = document.getElementById("rock");
playerPickRock.addEventListener("click", rockHand);

let playerPickPaper = document.getElementById("paper");
playerPickPaper.addEventListener("click", paperHand);

let playerPickScissor = document.getElementById("scissor");
playerPickScissor.addEventListener("click", scissorHand);

let computerHandOption = ["cRock", "cPaper", "cScissor"]

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");


function rockHand() {
    document.getElementById("player-hand-image").src = "images/rock.png"

    computerHand = Math.floor(Math.random() * computerHandOption.length);
    console.log(computerHandOption[computerHand]);
    let computerPick = computerHandOption[computerHand];
    

    switch (computerPick) {
        case "cRock": 
            document.getElementById('computer-hand-image').src = "images/rock.png";
            break;
        
        case "cPaper" :
            document.getElementById('computer-hand-image').src = "images/paper.png";
           computerScore.innerHTML ++;
            break;
        case "cScissor" :
            document.getElementById('computer-hand-image').src = "images/scissor.png";   
            playerScore.innerText ++;
            break; 
    }

}

function paperHand() {
    document.getElementById("player-hand-image").src ="images/paper.png"

    computerHand = Math.floor(Math.random() * computerHandOption.length);
    console.log(computerHandOption[computerHand]);
    let computerPick = computerHandOption[computerHand];
    

    switch (computerPick) {
        case "cRock": 
            document.getElementById('computer-hand-image').src = "images/rock.png";
            playerScore.innerText ++;
            break;
        case "cPaper" :
            document.getElementById('computer-hand-image').src = "images/paper.png";
            break;
        case "cScissor" :
            document.getElementById('computer-hand-image').src = "images/scissor.png";
            computerScore.innerHTML ++;   
            break; 
    }
    
}

function scissorHand() {
    document.getElementById("player-hand-image").src = "images/scissor.png"

    computerHand = Math.floor(Math.random() * computerHandOption.length);
    console.log(computerHandOption[computerHand]);
    let computerPick = computerHandOption[computerHand];
    

    switch (computerPick) {
        case "cRock": 
            document.getElementById('computer-hand-image').src = "images/rock.png";
            computerScore.innerHTML ++;
            break;        
        case "cPaper" :
            document.getElementById('computer-hand-image').src = "images/paper.png";
            break;
            playerScore.innerText ++;
        case "cScissor" :
            document.getElementById('computer-hand-image').src = "images/scissor.png";   
            break; 
    }
}



