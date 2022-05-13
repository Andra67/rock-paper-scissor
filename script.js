let playerPickRock = document.getElementById("rock");
playerPickRock.addEventListener("click", rockHand);

let playerPickPaper = document.getElementById("paper");
playerPickPaper.addEventListener("click", paperHand);

let playerPickScissor = document.getElementById("scissor");
playerPickScissor.addEventListener("click", scissorHand);

let computerHandOption = ["cRock", "cPaper", "cScissor"]

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

let roundNumber = document.getElementById("round-counter");
let winnerAnnouncer = document.getElementById("announcer");

/*function roundCounter() {
    if (roundNumber.innerText = 5) {
        winnerAnnouncer.innerText = "The game is Done";
    }
}*/

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);

function resetGame(){
    computerScore.innerText = 0;
    playerScore.innerText = 0;
    roundNumber.innerText = 0;
}

function rockHand() {
    document.getElementById("player-hand-image").src = "images/rock.png"

    computerHand = Math.floor(Math.random() * computerHandOption.length);
    console.log(computerHandOption[computerHand]);
    let computerPick = computerHandOption[computerHand];
    

    switch (computerPick) {
        case "cRock": 
            document.getElementById('computer-hand-image').src = "images/rock.png";
            winnerAnnouncer.innerText = "It's a Draw!";
            break;
        
        case "cPaper" :
            document.getElementById('computer-hand-image').src = "images/paper.png";
           computerScore.innerText ++;
            winnerAnnouncer.innerText = "Computer Win!!!";
            break;
        case "cScissor" :
            document.getElementById('computer-hand-image').src = "images/scissor.png";   
            playerScore.innerText ++;
            winnerAnnouncer.innerText = "You Win!!!";
            break; 

    }


    roundNumber.innerText ++;
    if (roundNumber.innerText == 5) {
        if (computerScore.innerText > playerScore.innerText) {
        winnerAnnouncer.innerText = "The game is done, Computer win!";
    } else {
        winnerAnnouncer.innerText = "The game is done, You win!";
    }}
    //roundCounter()

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
            winnerAnnouncer.innerText = "You Win!!!";
            break;
        case "cPaper" :
            document.getElementById('computer-hand-image').src = "images/paper.png";
            break;
        case "cScissor" :
            document.getElementById('computer-hand-image').src = "images/scissor.png";
            computerScore.innerText ++;
            winnerAnnouncer.innerText = "Computer Win!!!";  
            break; 
    }
    roundNumber.innerText ++;
    if (roundNumber.innerText == 5) {
        if (computerScore.innerText > playerScore.innerText) {
        winnerAnnouncer.innerText = "The game is done, Computer win!";
    } else {
        winnerAnnouncer.innerText = "The game is done, You win!";
    }}
}

function scissorHand() {
    document.getElementById("player-hand-image").src = "images/scissor.png"

    computerHand = Math.floor(Math.random() * computerHandOption.length);
    console.log(computerHandOption[computerHand]);
    let computerPick = computerHandOption[computerHand];
    

    switch (computerPick) {
        case "cRock": 
            document.getElementById('computer-hand-image').src = "images/rock.png";
            computerScore.innerText ++;
            winnerAnnouncer.innerText = "Computer Win!!!";
            break;        
        case "cPaper" :
            document.getElementById('computer-hand-image').src = "images/paper.png";
            break;
            playerScore.innerText ++;
            winnerAnnouncer.innerText = "You Win!!!";
        case "cScissor" :
            document.getElementById('computer-hand-image').src = "images/scissor.png";   
            break; 
    }
    roundNumber.innerText ++;
    if (roundNumber.innerText == 5) {
        if (computerScore.innerText > playerScore.innerText){
        winnerAnnouncer.innerText = "The game is done, Computer win!";       
    } else {
        winnerAnnouncer.innerText = "The game is done, You win!";
    }}
}


