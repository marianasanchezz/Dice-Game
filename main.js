var num1 = Math.ceil(Math.random() * 6);
var num2 = Math.ceil(Math.random() * 6);
var diceOne = document.getElementById("diceOne");
var diceTwo = document.getElementById("diceTwo");

if (num1 == 1) {
    diceOne.setAttribute("src", "img/diceOne.png");
} else if (num1 == 2) {
    diceOne.setAttribute("src", "img/diceTwo.png");
} else if (num1 == 3) {
    diceOne.setAttribute("src", "img/diceThree.png");
} else if (num1 == 4) {
    diceOne.setAttribute("src", "img/diceFour.png");
} else if (num1 == 5) {
    diceOne.setAttribute("src", "img/diceFive.png");
} else if (num1 == 6) {
    diceOne.setAttribute("src", "img/diceSix.png");
}

if (num2 == 1) {
    diceTwo.setAttribute("src", "img/diceOne.png");
} else if (num2 == 2) {
    diceTwo.setAttribute("src", "img/diceTwo.png");
} else if (num2 == 3) {
    diceTwo.setAttribute("src", "img/diceThree.png");
} else if (num2 == 4) {
    diceTwo.setAttribute("src", "img/diceFour.png");
} else if (num2 == 5) {
    diceTwo.setAttribute("src", "img/diceFive.png");
} else if (num2 == 6) {
    diceTwo.setAttribute("src", "img/diceSix.png");
}

if (num1 > num2) {
    document.querySelector("h1").textContent = "PLAYER 1 WINS!";
} else if (num2 > num1) {
    document.querySelector("h1").textContent = "PLAYER 2 WINS!";
} else {
    document.querySelector("h1").textContent = "DRAW!";
} 