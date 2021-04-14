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
    
    console.log(msg);
    
}



// Playing until 5 rounds expired

function game(role){
    
    
    if (role) {
        playRound(role, computerPlay());
        console.log(`Player: ${player_count} Computer: ${computer_count}`);
    }else {
        console.log("Enter something");
    }  
    

    if ((player_count === 5) && (player_count > computer_count)){
        console.log("You won a game!")
    } 
    if ((computer_count === 5) && (computer_count > player_count)){
        console.log("Sorry, you lost. Computer won the game!")
    }
    if ((player_count === 5) && (computer_count === 5)) {
        console.log("It's draw! Close!");
    }
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
            
            game(role);
        });
    });
    
}
pickRole(buttons);
