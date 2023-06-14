/* declare elements constants */
const playersChoiceDisplayText = document.getElementById("player-choice-text");
const computerChoiceDisplayText = document.getElementById("computer-choice-text");
const resultDisplayText = document.getElementById("result-text"); 
const buttonWrapper = document.getElementById("btn-wrapper");

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
    let userScore = parseInt(document.getElementById("player-points-text").innerText);
    let computerScore = parseInt(document.getElementById("computer-points-text").innerText);
   
    /* Check if user or computer have won the game (first to 10) */
    if(userScore == 10)
    {
        /* Show user that the user is the winner */
        document.getElementById("total-winner-result-text").innerText = "User Wins!";
        /* disable buttons until game is restarted */
        enableDisableButtons(true);
        /* Add class that starts blinking animation  */       
        document.getElementById("total-winner-result-text").classList.add("blink");
        /* add clas that disables hover effect on buttons */
        buttonWrapper.classList.add("disable-hover");
        /* Set timeout of 5 sec until the game is restarted */
        setTimeout(restartGame, 5000);
    }
    else if(computerScore == 10)
    {
        /* Show user that the computer is the winner */
        document.getElementById("total-winner-result-text").innerText = "Computer Wins!";
        /* disable buttons until game is restarted */
        enableDisableButtons(true);
        /* Add class that starts blinking animation  */
        document.getElementById("total-winner-result-text").classList.add("blink");
        /* add clas that disables hover effect on buttons */
        buttonWrapper.classList.add("disable-hover");
        /* Set timeout of 5 sec until the game is restarted */
        setTimeout(restartGame, 5000);
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

function restartGame() {
    /* reset computers points */
    document.getElementById("computer-points-text").innerText = 0;
    /* reset players points */
    document.getElementById("player-points-text").innerText = 0;
    /* clear total winner value */
    document.getElementById("total-winner-result-text").innerText = ""
    /* clear round winner value */
    document.getElementById("result-text").innerText = ""
    /* clear round choice player */
    playersChoiceDisplayText.innerText = ""
    /* clear round choice computer */
    computerChoiceDisplayText.innerText = ""
    /* remove blink animation class */
    document.getElementById("total-winner-result-text").classList.remove("blink");
    /* remove disable hover class */
    buttonWrapper.classList.remove("disable-hover");
    /* enable buttons when game is restarted */
    enableDisableButtons(false);
}

/* enables or disables players choice buttons */
function enableDisableButtons(isDisabled) {
    document.getElementById('rock-btn').disabled = isDisabled;
    document.getElementById('paper-btn').disabled = isDisabled;
    document.getElementById('scissors-btn').disabled = isDisabled;
}