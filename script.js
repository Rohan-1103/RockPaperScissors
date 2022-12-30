var you;
var yourScore = 0;

var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        //<img id = "rock" src = "rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("Your-choice").src = you + ".png";

    //random choice by the opponent
    opponent = choices[Math.floor(Math.random() * 3)]; //0 - 0.9999 * 3 = 2.9999 and floor removes deci so randomness stays between 0 1 2 array elements
    document.getElementById("Opponent-choice").src = opponent + ".png";

    //check for win
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
    }
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }

        if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
        if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
    }
    document.getElementById("Your-score").innerText = yourScore;
    document.getElementById("Opponent-score").innerText = opponentScore;
}