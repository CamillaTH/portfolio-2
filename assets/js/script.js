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

function run() {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0) {
        //rock
    }
    else if(computerChoice === 1) {
        // paper
    }
    else {
        //scissors
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
