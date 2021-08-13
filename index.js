const rules = document.getElementById("rules");
const d1 = document.getElementById("d1");
const p1Select = document.getElementById("top");
const player1 = document.getElementById("player1");
const holdScore = document.getElementById("holdScore");
const score = document.getElementById("score");
const p2Select = document.getElementById("bottom");
const player2 = document.getElementById("player2");
const holdScore2 = document.getElementById("holdScore2");
const score2 = document.getElementById("score2");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const reset = document.getElementById("reset");

let activePlayer = 0;

const playerChange = (activePlayer) => {
    if (activePlayer === 1) {
    } else if (activePlayer === 2) {
    }
}

roll.addEventListener("click", () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    let diceImage = `./images/d${diceRoll}.png`
    d1.src = diceImage;
    if (activePlayer === 1) {
        if (diceRoll === 1) {
            score.innerHTML = 0
            activePlayer = 2;
            playerChange(activePlayer);
        } else if (holdScore.innerHTML < 21) {
            score.innerHTML = parseInt(score.innerHTML,10) + diceRoll;
        }
    } else if (activePlayer === 2) {
        if (diceRoll === 1) {
            score2.innerHTML = 0;
            activePlayer = 1;
            playerChange(activePlayer);
        } else if (holdScore2.innerHTML < 21) {
            score2.innerHTML = parseInt(score2.innerHTML,10) + diceRoll;
        }
    }
})

hold.addEventListener("click", () => {
    if (activePlayer === 1) {
        holdScore.innerHTML = parseInt(holdScore.innerHTML,10) + parseInt(score.innerHTML);
        score.innerHTML = 0;
        if (holdScore.innerHTML >= 21) {
            player1.innerHTML = "You Win!";
            player2.innerHTML = "You Lose!";
            activePlayer = 0;
        } else {
            activePlayer = 2;
            playerChange(activePlayer);
        }
    } else if (activePlayer === 2) {
        holdScore2.innerHTML = parseInt(holdScore2.innerHTML,10) + parseInt(score2.innerHTML);
        score2.innerHTML = 0;
        if (holdScore2.innerHTML >= 21) {
            player2.innerHTML = "You Win!";
            player1.innerHTML = "You Lose!";
            activePlayer = 0;
        } else {
            activePlayer = 1;
            playerChange(activePlayer);
        }
    }
})

reset.addEventListener("click", () => {
    activePlayer = 1;
    player1.innerHTML = "Player 1";
    player2.innerHTML = "Player 2";
    holdScore.innerHTML = 0;
    holdScore2.innerHTML = 0;
    score.innerHTML = 0;
    score2.innerHTML = 0;
})