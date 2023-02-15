/* declare elements constants */
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const yourPoints = document.getElementById("your-points-text");
const computerPoints = document.getElementById("computer-points-text");
const yourChoice = document.getElementById("your-choice-text");
const computerChoice = document.getElementById("computer-points-text");

/* add event listners 
rockBtn.addEventListener("click", displayPlayersChoice("rock"));
paperBtn.addEventListener("click", displayPlayersChoice("paper"));
scissorsBtn.addEventListener("click", displayPlayersChoice("scissors"));
*/

function startGame(playersChoice) {

    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 0) {
        //rock, 
        console.log("computer choose rock")
        checkWinner(playersChoice, "rock")
    }
    else if(computerChoice === 1) {
        // paper
        console.log("computer choose paper")
        checkWinner(playersChoice, "paper")
    }
    else {
        //scissors
        console.log("computer choose scissors")
        checkWinner(playersChoice, "scissors")
    }

}

function checkWinner(playersChoice, computerChoice) {
    
    if(playersChoice ===  computerChoice)
    {
        console.log("tie");
    }
    else if(playersChoice === "rock" && computerChoice === "paper") {
        console.log("computer wins")
    }
    else if(playersChoice === "paper" && computerChoice === "scissors") {
        console.log("player wins")
    }
    else if(playersChoice === "scissors" && computerChoice === "rock") {
        console.log("copmuter wins")
    }
    else if(computerChoice === "rock" && playersChoice === "paper") {
        console.log("computer wins")
    }
    else if(computerChoice === "paper" && playersChoice === "scissors") {
        console.log("player wins")
    }
    else if(computerChoice === "scissors" && playersChoice === "rock") {
        console.log("player wins")
    }
}


/* display what the player choosed */
function displayPlayersChoice(choice) {
    
    yourChoice.innerText = choice;
}

/* display what the computer choosed */
function displayPlayersChoice(choice) {
    
    computerChoice.innerText = choice;
}

function incrementPlayersScore() {

}

function incrementComputersScore() {

}