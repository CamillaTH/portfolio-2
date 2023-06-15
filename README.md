# Rock Paper Scissors Game

![alt text](assets/images/readme/portfolio2responsiveimage.png)

## Features 

### Exsiting Features
 
Choose one of the 3 by clicking one of the 3 buttons. The computer will choose 1 randomly and then the program will display the winner. After eighter the user or the computer wins it will add up score to the winner. When either user or computer gets 10 in score the program till display who wins : "User wins" or "Computer Wins" with a blinking effect. When either wins a timeout of 5 sec is set until the game is reset. Buttons are also disabled, grayed out and hover effect removed during timeout.
 
__Header__

 a header with the two h tags with the name of the game and some pep text.

![alt text](assets/images/readme/headerReadme.png)

__Button area__

![alt text](assets/images/readme/buttonsReadme.png)

 Three buttons with the three different choices rock, paper or scissors.
 Two images representing the player and the computer.
 a text that diplay the winner of each round.
 2 texts that display the points for the player and computer.

__Score area__
 
 The score area shows the user the progress of the game with the different sections.

- Total Winner: Until user or computer wins the value of total winner label is empty but when user or computer wins it will display the winner with an blikning effect added.

- Winner of round: Shows the user the winner of the current round.

- Your score: Shows the socre of the user.

- Computer's score: Shows the score of the computer.

![alt text](assets/images/readme/scoreSectionReadme.png)

__Image area__

Two images displaying 2 fists to enhance to show the user whats the game is about. Also showing what the user have choosed and what computer choosed for the current round.

![alt text](assets/images/readme/imageContentReadme.png)

__Footer__

A text with the creator and a link to the github repo.

![alt tex](assets/images/readme/footerSectionReadme.png)


### Unimplemented Features

Instead of using stataic images show and image of eighter a rock paper or a scissor based on what the user/computer choosed for the current round.


## Testing

### Lighthouse score 

![alt text](assets/images/readme/portfolio2lighthousescore.png)

### Validator Testing

* HTML:
   No errors were found when code was injected into the official (https://validator.w3.org/)
* CSS:
   No errors were found when code was injected into the official https://jigsaw.w3.org/css-validator
* JS validation: Javascript validation using https://jshint.com (alot of missing semicolons where detected and fixed)
* JS format: Fixed formating of Js code using https://beautifier.io
* Contrast: Test contrast using https://wave.webaim.org/ tool resulted in change of background color and change color of buttons.
![alt text](assets/images/readme/waveValidationReadme.png)

### Responsvie testing 
    
Responsiveness was tested to use of https://ui.dev/amiresponsive and https://responsivedesignchecker.com/ and using of the google dev tools responsive functions.

* Desktop:
![alt text](assets/images/readme/responsiveCheckDesktopReadme.png)
* Ipad pro:
![alt text](assets/images/readme/responsiveCheckIpadProReadme.png)
* Ipad mini:
![alt text](assets/images/readme/responsiveCheckIpadMiniReadme.png)
* Google pixel:
![alt text](assets/images/readme/responsiveCheckGooglePixelReadme.png)
* Iphone 6:
![alt text](assets/images/readme/responsiveCheckIphone6Readme.png)

### Manual testing

#### Rock button test 

* User click Rock button.
 
 Expected result:  "You choose:" label should display "Rock".
 
 Result: "Rock".

#### Paper button test 

* User click Paper button.

 Expected result:  "You choose:" label should display "Paper". 
 
 Result: "Paper".

#### Scissors button test 

* User click Paper button.
 
 Expected result:  "You choose:" label should display "scissors".

 Result: "scissors".

#### Winner logic test:

* User points is 10
 
 Expected result: Total Winner h2 should display "User Wins!" and buttons should be disabled and hidden for 5 sec. After 5 sec all values should be reset and buttons enabled and not hidden.
 
 Result: result as expected.


* Computer points is 10
 
 Expected result: Total Winner h2 should display "Computer Wins!" and buttons should be disabled and hidden for 5 sec. After 5 sec all values should be reset and buttons enabled and not hidden.
 
 Result: result as expected.

#### Round Winner logic

* User choose Rock and computer choose Rock.

Expected result: Neighter user score or computer score should be incremented by 1 and "Winner of round:" label should display "tie".

Result: result as expected.


* User choose Rock and computer choose Paper.

Expected result: Computer score should be incremented by 1 and "Winner of round:" label should display "Computer".

Result: result as expected.


* User choose Rock and computer choose scissors.

Expected result: User score should be incremented by 1 and "Winner of round:" label should display "Player".

Result: result as expected.


* User choose Paper and computer choose paper.

Expected result: Neighter user score or computer score should be incremented by 1 and "Winner of round:" label should display "tie".

Result: result as expected.


* User choose Paper and computer choose rock.

Expected result: User score should be incremented by 1 and "Winner of round:" label should display "Player".

Result: result as expected.


* User choose Paper and computer choose scissors.

Expected result: Computer score should be incremented by 1 and "Winner of round:" label should display "Computer".

Result: result as expected.


* User choose scissors and computer choose scissors.

Expected result: Neighter user score or computer score should be incremented by 1 and "Winner of round:" label should display "tie".

Result: result as expected.


* User choose scissors and computer choose paper.

Expected result: User score should be incremented by 1 and "Winner of round:" label should display "Player".

Result: result as expected.

* User choose scissors and computer choose rock.

Expected result: Computer score should be incremented by 1 and "Winner of round:" label should display "Computer".

Result: result as expected.

### Bugs

Bugs where discovered during development but fixed. Ex when trying to declare constant of "total-winner-result-text" span by using document.getElementById() built in function the constant was undefined since the span element did not have an id.

## Deployment

site is live at : https://camillath.github.io/portfolio-2/

### Deploy on github pages

Steps to deploy: 
 * On the github repository go to the settings tab
 * Navigate to the source section drop down and select the master branch
 * When master branch i selected, the page will be refreshed automatically with details that indicates a successful deploy

### clone repository locally (HTTPS)

* Navigate to the repository (https://github.com/CamillaTH/portfolio-2)
* Click on the button "code".
* Choose "HTTPS" and copy the URL.
* Choose a local directory where want to clone the repository.
* Open terminal at the location you want the repository and write "git clone https://github.com/CamillaTH/portfolio-2.git" and press enter.

![alt text](assets/images/readme/cloneRepoReadme.png)

### Run website locally

 To run the site locally from gitpod: 
 * Navigate to the gitpod terminal
 * In the terminal write: "python -m http.server 8000"
 * An popup appears in the bottom right corner "click open in browser"

## Credits

Inspiration taken from code insitutes rock papper scissors game made by code insitute.

* For blinking effect this guide was used
https://www.w3docs.com/snippets/css/how-to-create-a-blinking-effect-with-css3-animations.html
* For to convert an png image to favicon (.ico format) 
https://cloudconvert.com/ico-converter tool was used.
* Link to png image that i used (converted it with tool above to .ico format) https://www.pngkit.com/png/detail/207-2077319_rock-paper-scissors-png-clipart-rock-paper-scissors.png
* To make images transparent https://www.remove.bg/ tool was used
* Background image link https://play-lh.googleusercontent.com/-2iffwzxEWvwDYqt5JxZqXdxxl2XwWBNZa7S_0KxRC721C2PhzFYW-q6U3o9N6OiUUw
* Inspiration of js was taken from https://www.codewizardshq.com/javascript-tutorial-for-kids-rock-paper-scissors/ 