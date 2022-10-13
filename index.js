// create array of 6 images, each holding one side of a die

var diceArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// generate two random numbers (one for each die)

var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

// use the random numbers to draw the appropriate image from the diceArray

var leftDiceRoll = diceArray[randomNumber1];
var rightDiceRoll = diceArray[randomNumber2];

// hold each image's DOM element in a variable, so we can make changes

var dice1 = document.getElementsByClassName("img1")[0];
var dice2 = document.getElementsByClassName("img2")[0];

// set each attribute to the appropriate image

dice1.setAttribute("src", leftDiceRoll);
dice2.setAttribute("src", rightDiceRoll);

// hold the title attribute in a variable

var titleElement = document.getElementsByClassName("title")[0];

// change the title to say Player One Wins/Player Two Wins based on the if/else logic

if (randomNumber1 === randomNumber2) {
  titleElement.textContent = "Draw... Refresh Again!";
}
else if (randomNumber1 > randomNumber2) {
  titleElement.textContent = "🚩 Player 1 Wins!";
}
else {
  titleElement.textContent = "Player 2 Wins! 🚩";
}
