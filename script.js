function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    switch(randomChoice){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            break;
    }
}

function playRPS(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase(playerSelection);
    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection == "rock"){
        if(computerSelection == "rock") return "Tie: " + playerSelection + " vs. " + computerSelection;
        else if(computerSelection = "paper") return "You lose! Paper beats Rock";
        else if(computerSelection == "scissors") return "You win! Rock beats Scissors";
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "paper") return "Tie: " + computerSelection + " vs. " + playerSelection
        else if(computerSelection =="rock") return "You win! Paper beats Rock";
        else if(computerSelection == "scissors")return "You lose! Scissors beats Paper";
    }
    else{
        if(computerSelection == "scissors") return "Tie: Scissors/Scissors";
        else if(computerSelection == "rock") return "You lose! Rock beats Scissors";
        else if(computerSelection == "paper") return "You win! Scissors beats Paper";
    }

}

function game(){
    let input;
    for(let i =0; i<5; i++){
        input = prompt("Rock, Paper, or Scissors?");
        console.log(playRPS(input, getComputerChoice()));
    }
}