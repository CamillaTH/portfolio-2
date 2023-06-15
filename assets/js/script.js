/* declare elements constants */
const playersChoiceDisplayText = document.getElementById("player-choice-text");
const computerChoiceDisplayText = document.getElementById("computer-choice-text");
const roundResultDisplayText = document.getElementById("round-result-text");
const buttonWrapper = document.getElementById("btn-wrapper");
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissors = document.getElementById('scissors-btn');
const playerPointsTxt = document.getElementById("player-points-text");
const computerPointsTxt = document.getElementById("computer-points-text");
const totalWinnerResultTxt = document.getElementById("total-winner-result-text");

/* When player clicks 1 of the 3 buttons this function is called,
 it takes a random nummer from 0-2 to decide what the computer chooses */
function startGame(playersChoice) {

    let playersChoiceText = playersChoice === 0 ? "rock" : playersChoice === 1 ? "paper" : "scissors";
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        //rock
        displayPlayersChoice(playersChoiceText);
        displayComputersChoice("Rock");
        checkWinner(playersChoice, 0);
    } else if (computerChoice === 1) {
        // paper
        displayComputersChoice("paper");
        displayPlayersChoice(playersChoiceText);
        checkWinner(playersChoice, 1);
    } else {
        //scissors
        displayComputersChoice("scissors");
        displayPlayersChoice(playersChoiceText);
        checkWinner(playersChoice, 2);
    }
    let userScore = parseInt(playerPointsTxt.innerText);
    let computerScore = parseInt(computerPointsTxt.innerText);

    /* Check if user or computer have won the game (first to 10) */
    if (userScore == 10) {
        /* Show user that the user is the winner */
        totalWinnerResultTxt.innerText = "User Wins!";
        /* disable buttons until game is restarted */
        enableDisableButtons(true);
        /* Add class that starts blinking animation  */
        totalWinnerResultTxt.classList.add("blink");
        /* add clas that disables hover effect on buttons */
        buttonWrapper.classList.add("disable-hover");
        /* Set timeout of 5 sec until the game is restarted */
        setTimeout(restartGame, 5000);
    } else if (computerScore == 10) {
        /* Show user that the computer is the winner */
        totalWinnerResultTxt.innerText = "Computer Wins!";
        /* disable buttons until game is restarted */
        enableDisableButtons(true);
        /* Add class that starts blinking animation  */
        totalWinnerResultTxt.classList.add("blink");
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

    let previousScore = parseInt(playerPointsTxt.innerText);
    playerPointsTxt.innerText = ++previousScore;
}

/*increment the computers score by 1 */
function incrementComputersScore() {
    let previousScore = parseInt(computerPointsTxt.innerText);
    computerPointsTxt.innerText = ++previousScore;
}

/* displays text of the result */
function displayResult(winner) {
    roundResultDisplayText.innerText = winner;
}

function restartGame() {
    /* reset computers points */
    computerPointsTxt.innerText = 0;
    /* reset players points */
    playerPointsTxt.innerText = 0;
    /* clear total winner value */
    totalWinnerResultTxt.innerText = "";
    /* clear round winner value */
    roundResultDisplayText.innerText = "";
    /* clear round choice player */
    playersChoiceDisplayText.innerText = "";
    /* clear round choice computer */
    computerChoiceDisplayText.innerText = "";
    /* remove blink animation class */
    totalWinnerResultTxt.classList.remove("blink");
    /* remove disable hover class */
    buttonWrapper.classList.remove("disable-hover");
    /* enable buttons when game is restarted */
    enableDisableButtons(false);
}

/* enables or disables players choice buttons, add disabled style to btns */
function enableDisableButtons(isDisabled) {
    rockButton.disabled = isDisabled;
    paperButton.disabled = isDisabled;
    scissors.disabled = isDisabled;
    if (isDisabled) {
        rockButton.classList.add("button-disabled");
        paperButton.classList.add("button-disabled");
        scissors.classList.add("button-disabled");
    } else {
        rockButton.classList.remove("button-disabled");
        paperButton.classList.remove("button-disabled");
        scissors.classList.remove("button-disabled");
    }
}