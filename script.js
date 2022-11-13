let win = 0;
let loss = 0;

if(win == 5){
    console.log("WIN");
}
else if(loss == 5){
    console.log("FALSE");
}

const r = document.getElementById('rock');
r.addEventListener("click", playRPS);

const p = document.getElementById("paper");
p.addEventListener("click", playRPS);

const s = document.getElementById("scissors");
s.addEventListener("click", playRPS);

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

function playRPS(e){
    // e = e.toLowerCase(e);
    console.log(e.target.id + " PLAYER");
    // console.log(getComputerChoice() + " PC");

    let computerSelection = getComputerChoice();
    console.log(computerSelection + " PC")

    if(e.target.id == "rock"){
        if(computerSelection == "rock"){
            document.getElementById('results').append("Tie: " + e.target.id + " vs. " + computerSelection)
            // return "Tie: " + e.target.id + " vs. " + computerSelection;
        }
        else if(computerSelection = "paper"){
            document.getElementById('results').append("You lose! Paper beats Rock");
            loss++;
            // return "You lose! Paper beats Rock";
        }
        else if(computerSelection == "scissors"){ 
            document.getElementById('results').append("You win! Rock beats Scissors");
            win++;
            // return "You win! Rock beats Scissors";
         }
    }
    else if(e.target.id == "paper"){
        if(computerSelection == "paper"){
            document.getElementById('results').append("Tie: " + e.target.id + " vs. " + computerSelection)
            // return "Tie: " + computerSelection + " vs. " + e.target.id
        } 
        else if(computerSelection =="rock") {
            document.getElementById('results').append("You win! Paper beats Rock")
            win++;
            // return "You win! Paper beats Rock";
        }
        else if(computerSelection == "scissors"){
            document.getElementById('results').append("You lose! Scissors beats Paper")
            loss++;
            // return "You lose! Scissors beats Paper";
        }
    }
    else{
        if(computerSelection == "scissors") {
            document.getElementById('results').append("Tie: " + e.target.id + " vs. " + computerSelection)
            // return "Tie: Scissors/Scissors";
        }
        else if(computerSelection == "rock") {
            document.getElementById('results').append("You lose! Rock beats Scissors")
            loss++;
            // return "You lose! Rock beats Scissors";
        }
        else if(computerSelection == "paper") {
            document.getElementById('results').append("You win! Scissors beats Paper")
            win++;
            // return "You win! Scissors beats Paper";
        }
    }

    console.log("WIN " + win)
    console.log("LOSE " + loss)


    if(win == 5){
        console.log("WIN " + win);
    }
    else if(loss == 5){
        console.log("LOSE " + loss);
    }

    return;

}  



// function playRPS(e){
//     window.addEventListener('click', function(e){
//         let b = document.querySelectorAll('button');
//         console.log(b);
//     })
// }


    // if(playerSelection == "rock"){
    //     if(computerSelection == "rock") return "Tie: " + playerSelection + " vs. " + computerSelection;
    //     else if(computerSelection = "paper") return "You lose! Paper beats Rock";
    //     else if(computerSelection == "scissors") return "You win! Rock beats Scissors";
    // }
    // else if(playerSelection == "paper"){
    //     if(computerSelection == "paper") return "Tie: " + computerSelection + " vs. " + e
    //     else if(computerSelection =="rock") return "You win! Paper beats Rock";
    //     else if(computerSelection == "scissors")return "You lose! Scissors beats Paper";
    // }
    // else{
    //     if(computerSelection == "scissors") return "Tie: Scissors/Scissors";
    //     else if(computerSelection == "rock") return "You lose! Rock beats Scissors";
    //     else if(computerSelection == "paper") return "You win! Scissors beats Paper";
    // }


// console.log(c);

// function game(){
//     let input;
//     for(let i =0; i<5; i++){
//         input = prompt("Rock, Paper, or Scissors?");
//         console.log(playRPS(input, getComputerChoice()));
//     }
// }