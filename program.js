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
    

    const message_round = document.querySelector('.message');
    const try_again = document.createElement('button')
    try_again.setAttribute("class","try_again");
    try_again.textContent = "Try Again";
    try_again.style.fontFamily = 'Permanent Marker, cursive';
    try_again.style.color = '#333D79FF';
    try_again.style.backgroundColor = '#FAEBEFFF';
    try_again.style.fontSize = '24px';
    
    
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

    if (player_count === 5 && computer_count === 5){
        msg = "Ohhh! It's draw! You almost won.";
        message_round.after(try_again);

        try_again.addEventListener('click', function() {
            location.reload();
        })

    }else if (player_count === 5) {
        msg = "Player won a game!";
        message_round.after(try_again);

        try_again.addEventListener('click', function() {
            location.reload();
        })

    }else if (computer_count === 5) {
        msg = "Computer won a game!";
        message_round.after(try_again);
        
        try_again.addEventListener('click', function() {
            location.reload();
        })
    }
    
    message_round.textContent = msg;
    
    
    
    
}



// Playing until 5 rounds expired

function game(role){    
    playRound(role, computerPlay());
    
    const player_wins = document.querySelector('.player_wins');
    player_wins.textContent = player_count;

    const computer_wins = document.querySelector('.computer_wins');
    computer_wins.textContent = computer_count;
        
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
                return;
            }else {
                game(role);
            }
        });
        
    });
}

pickRole(buttons);




