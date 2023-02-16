/* declare elements constants */
const playersChoiceDisplayText = document.getElementById("player-choice-text");
const computerChoiceDisplayText = document.getElementById("computer-choice-text");
const resultDisplayText = document.getElementById("result-text");


/* When player clicks 1 of the 3 buttons this function is called,
 it takes a random nummer from 0-2 to decide what the computer chooses */
function startGame(playersChoice) {

    let playersChoiceText = playersChoice === 0 ? "rock" : playersChoice === 1 ? "paper" : "scissors";
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        //rock, 
        displayPlayersChoice(playersChoiceText);
        displayComputersChoice("Rock");
        checkWinner(playersChoice, 0);
    } else if (computerChoice === 1) {
        // paper
        displayComputersChoice("paper")
        displayPlayersChoice(playersChoiceText);
        checkWinner(playersChoice, 1);
    } else {
        //scissors
        displayComputersChoice("scissors");
        displayPlayersChoice(playersChoiceText);
        checkWinner(playersChoice, 2);
    }

}

/* compare the yousers and computers choice to decide the winner */
function checkWinner(playersChoice, computerChoice) {

    //tie
    if (playersChoice === computerChoice) {
        displayResult("Tie");
        return;
    }
    //rock
    if (playersChoice === 0) {
        if (computerChoice === 1) {
            incrementComputersScore();
            displayResult("Computer");
            return;
        } else {
            incrementPlayersScore();
            displayResult("Player");
            return;
        }
    }
    //paper
    if (playersChoice === 1) {
        if (computerChoice === 2) {
            incrementComputersScore();
            displayResult("Computer");
            return;
        } else {
            incrementPlayersScore();
            displayResult("Player");
            return;
        }
    }
    //scissors
    if (playersChoice === 2) {
        if (computerChoice === 0) {
            incrementComputersScore();
            displayResult("Computer");
            return;
        } else {
            incrementPlayersScore();
            displayResult("Player");
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

    computerChoiceDisplayText.textContent = choice;
}

/*increment the players score by 1 */
function incrementPlayersScore() {

    let previousScore = parseInt(document.getElementById("player-points-text").innerText);
    document.getElementById("player-points-text").innerText = ++previousScore;
}

/*increment the computers score by 1 */
function incrementComputersScore() {
    let previousScore = parseInt(document.getElementById("computer-points-text").innerText);
    document.getElementById("computer-points-text").innerText = ++previousScore;
}

/* displays text of the result */
function displayResult(winner) {
    resultDisplayText.innerText = winner;
}