function computerPlay(){
    let number = Math.floor(Math.random() * 3);
    let turn = "";

    if (number === 0){
        turn = "Rock";
    }else if (number === 1){
        turn = "Paper";
    }else{
        turn = "Scissors";
    }

    return turn;
}


function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let msg = "";
    
    if (player === "paper"){
        if (computer === "rock"){
            msg = "You Won!Paper beats Rock.";
        }else if (computer === "paper"){
            msg = "It's Draw!Paper can't beat Paper."
        }else{
            msg = "You Lose!Scissors beats Paper.";
        }
    }else if(player === "rock"){

        if (computer === "rock"){
            msg = "It's Draw! Rock can't beat Rock!";
            
        }else if (computer === "paper"){
            msg = "You Lose!Paper beats Rock."
        }else{
            msg = "You Won!Rock beats Scissors.";
        }

    }else if(player === "scissors"){

        if(computer === "rock"){
            msg = "You Lost! Rock beats Scissors!";
        }else if(computer === "paper"){
            msg = "You Won! Scissors beats Paper.";
        }else{
            msg = "It's Draw! Scissors can't beat Scissors!";
        }

    } else {
        msg = "Your input is wrong.(add rock/paper/scissors)";
    }
    return msg;
    
}

let user_prompt = prompt("Enter your turn: ", "Rock");
console.log(playRound(user_prompt, computerPlay()));

// function game(playgame){
//     for(let i = 0; i < 5; i++){
//         playgame;
//     }
// }

// console.log(game(playRound()));