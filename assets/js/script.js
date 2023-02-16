/* declare elements constants */
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const playersPointsDisplayText = document.getElementById("your-points-text");
const computerPointsDisplayText = document.getElementById("computer-points-text");
const playersChoiceDisplayText = document.getElementById("player-choice-text");
const computerChoiceDisplayText = document.getElementById("computer-choice-text");

/* add event listners 
rockBtn.addEventListener("click", displayPlayersChoice("rock"));
paperBtn.addEventListener("click", displayPlayersChoice("paper"));
scissorsBtn.addEventListener("click", displayPlayersChoice("scissors"));
*/

/* When player clicks 1 of the 3 buttons this function is called,
 it takes a random nummer from 0-2 to decide what the computer chooses */
function startGame(playersChoice) {

    var playersChoiceText = playersChoice === 0 ? "rock" : playersChoice === 1 ? "paper" : "scissors";
    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 0) {
        //rock, 
        console.log("computer choose rock");
        displayPlayersChoice(playersChoiceText);
        displayComputersChoice("Rock");
        checkWinner(playersChoice, 0);
    }
    else if(computerChoice === 1) {
        // paper
        console.log("computer choose paper")
        displayComputersChoice("paper")
        displayPlayersChoice(playersChoiceText);
        checkWinner(playersChoice, 1);
    }
    else {
        //scissors
        console.log("computer choose scissors")
        displayComputersChoice("scissors");
        displayPlayersChoice(playersChoiceText);
        checkWinner(playersChoice, 2);
    }

}

/* compare the yousers and computers choice to decide the winner */
function checkWinner(playersChoice, computerChoice) {
    
    //tie
    if(playersChoice ===  computerChoice)
    {
        console.log("tie");
        return;
    }
    //rock
    if(playersChoice == 0) {
        if(computerChoice === 1) {
            console.log("computer wins")
            return;
        }
        else {
            console.log("player wins")
            return;
        }
    }
    //paper
    if(playersChoice === 1) {
        if(computerChoice === 2) {
            console.log("computer wins")
            return;
        }
        else {
            console.log("player wins")
            return;
        }
    }
    //scissors
    if(playersChoice == 2) {
        if(computerChoice == 0) {
            console.log("computer wins")
            return;
        }
        else {
            console.log("player wins")
            return;
        }
    }
}


/* display what the player choosed */
function displayPlayersChoice(choice) {
    
    playersChoiceDisplayText.innerText = choice;
}

/* display what the computer choosed */
function displayComputersChoice(choice) {
    
    computerChoiceDisplayText.textContent  = choice;
}

function incrementPlayersScore() {

}

function incrementComputersScore() {

}