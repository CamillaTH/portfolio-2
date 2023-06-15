# Rock Paper Scissors Game

![alt text](assets/images/readme/portfolio2responsiveimage.png)

## Features 

### Exsiting Features
 
Choose one of the 3 by clicking one of the 3 buttons. The computer will choose 1 randomly and then the program will display the winner. After eighter the user or the computer wins it will add up score to the winner. When either user or computer gets 10 in score the program till display who wins : "User wins" or "Computer Wins" with a blinking effect. When either wins a timeout of 5 sec is set until the game is reset. Buttons are also disabled, grayed out and hover effect removed during timeout.
 
__Header__

 a header with the two h tags with the name of the game and some pep text.

![alt text](assets/images/readme/headerReadme.png)

__Button area__

![alt text](assets/images/readme/readmeButtons.png)

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

* HTML
   No errors were found when code was injected into the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
* CSS
   No errors were found when code was injected into the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

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


### Bugs

No bugs where discovered.

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
* Link to png image that i used (converted it with tool above to .ico format) https://www.pngkit.com/view/u2w7w7o0i1t4r5r5_rock-paper-scissors-png-clipart-rock-paper-scissors/
* To make images transparent https://www.remove.bg/ tool was used