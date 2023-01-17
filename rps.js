let playAgain = 'y';
while (playAgain === 'y') {
    let aiMove = Math.floor(Math.random() * 3);
    let aiMoveString = '';
    if (aiMove === 0) {
        aiMoveString = 'rock';
    } else if (aiMove === 1) {
        aiMoveString = 'paper';
    } else {
        aiMoveString = 'scissors';
    }
    let playerMove = prompt("Rock, paper, or scissors? (r/p/s): ");
    console.log(`AI plays ${aiMoveString}.`);
    let result = '';
    if (playerMove === 'r') {
        if (aiMove === 0) {
            result = "It's a tie!";
        } else if (aiMove === 1) {
            result = "You lose!";
        } else {
            result = "You win!";
        }
    } else if (playerMove === 'p') {
        if (aiMove === 0) {
            result = "You win!";
        } else if (aiMove === 1) {
            result = "It's a tie!";
        } else {
            result = "You lose!";
        }
    } else if (playerMove === 's') {
        if (aiMove === 0) {
            result = "You lose!";
        } else if (aiMove === 1) {
            result = "You win!";
        } else {
            result = "It's a tie!";
        }
    } else {
        result = "Invalid move. Please enter r, p, or s.";
    }
    console.log(result);
    playAgain = prompt("Do you want to play again? (y/n): ");
}
