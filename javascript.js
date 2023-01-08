//Variable
let winner = null

//Computer Choice
function getComputerChoice() {
    let computerChoiceValue = Math.floor(Math.random()*3) + 1;
    if (computerChoiceValue == 1)
        return "rock"
    else if (computerChoiceValue == 2)
        return "paper"
    else if (computerChoiceValue == 3)
        return "scissors"
}

//Assigning player choice with case insentitvity
function setPlayerChoice(playerChoice) {
    playerChoice = playerChoice.toLowerCase()
    return playerChoice
}

//Single round of Rock Paper Scissors
function roundOfRPS(computerChoice, playerChoice) {
    if (playerChoice == "rock" && computerChoice == "scissors") {
        winner = "player"
        return `The player wins ${playerChoice} beats ${computerChoice}.`
    }
    if (playerChoice == "scissors" && computerChoice == "paper") {
        winner = "player"
        return `The player wins ${playerChoice} beats ${computerChoice}.`
    }
    if (playerChoice == "paper" && computerChoice == "rock") {
        winner = "player"
        return `The player wins ${playerChoice} beats ${computerChoice}.`
    }

    if (playerChoice == "rock" && computerChoice == "paper") {
        winner = "computer"
        return `The player loses ${computerChoice} beats ${playerChoice}.`
    }
    if (playerChoice == "scissors" && computerChoice == "rock") {
        winner = "computer"
        return `The player loses ${computerChoice} beats ${playerChoice}.`
    }
    if (playerChoice == "paper" && computerChoice == "scissors") {
        winner = "computer"
        return `The player loses ${computerChoice} beats ${playerChoice}.`
    }
        
    if (playerChoice == "rock" && computerChoice == "rock") {
        winner = "tie"
        return `It's a tie ${playerChoice} withstands ${computerChoice}.`
    }
    if (playerChoice == "scissors" && computerChoice == "scissors") {
        winner = "tie"
        return `It's a tie ${playerChoice} withstands ${computerChoice}.`
    }
    if (playerChoice == "paper" && computerChoice == "paper") {
        winner = "tie"
        return `It's a tie ${playerChoice} withstands ${computerChoice}.`
    }
}

//Multiple Rounds of Rock Paper Scissors and score keeping
function game(numnberOfRounds) {
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    for (let i = 1; i <= numnberOfRounds; i++) {
        let playerChoice = setPlayerChoice(prompt("Rock, Paper, Scissors?"))
        const computerChoice = getComputerChoice()
        console.log(roundOfRPS(computerChoice,playerChoice))
        if (winner == "player")
            playerWins += 1
        else if (winner == "computer")
            computerWins += 1
        else 
            ties += 1

        console.log(`Current Scores Player: ${playerWins} Computer: ${computerWins}`)
    }
    return `The player won ${playerWins} games. The computer won ${computerWins} games. There was ${ties} ties.`
}

//Output to console
console.log(game(5))