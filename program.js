let player_count = 0;
let computer_count = 0;
let role = "";
// Computer turn

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


// Round checking for winner

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    
    let msg = "";
    
    if (player === "paper"){

        if (computer === "rock"){
            msg = "You Won!Paper beats Rock.";
            player_count += 1;
            
        }else if (computer === "paper"){
            msg = "It's Draw!Paper can't beat Paper."
            player_count += 1;
            computer_count += 1;
        }else{
            msg = "You Lose!Scissors beats Paper.";
            computer_count += 1;
        }

    }else if(player === "rock"){

        if (computer === "rock"){
            msg = "It's Draw! Rock can't beat Rock!";
            player_count += 1;
            computer_count += 1;
            
        }else if (computer === "paper"){
            msg = "You Lose!Paper beats Rock."
            computer_count += 1;
            
        }else{
            msg = "You Won!Rock beats Scissors.";
            player_count += 1;
        }

    }else if(player === "scissors"){

        if(computer === "rock"){
            msg = "You Lost! Rock beats Scissors!";
            computer_count += 1;
        }else if(computer === "paper"){
            msg = "You Won! Scissors beats Paper.";
            player_count += 1;
        }else{
            msg = "It's Draw! Scissors can't beat Scissors!";
            player_count += 1;
            computer_count += 1;
        }

    } else {
        msg = "Your input is wrong.(add rock/paper/scissors)";
    }

    if (player_count === 5) {
        return "Player won a game!";
    }else if (computer_count === 5) {
        return "Computer won a game!";
    }
    
    console.log(msg);
    
}



// Playing until 5 rounds expired

function game(role){    
    
    playRound(role, computerPlay());
    console.log(`Player: ${player_count} Computer: ${computer_count}`);
        
}



const buttons = document.querySelectorAll('button');

function pickRole(buttons){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.className === "btn-1"){
                role = "rock";
            }else if (button.className === "btn-2"){
                role = "paper";
            }else if (button.className === "btn-3"){
                role = "scissors";
            }
            
            if (player_count === 5 || computer_count === 5){
                return "Game is over";
            }else {
                game(role);
            }
            
            
        });
        
    });

}

pickRole(buttons);


