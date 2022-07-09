
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random()*3)
    return (options[rand]);
}


function single_round(player, computer) {
    player = player.toLowerCase();
    if (player === computer) {
        return "Tie"
    }
    
    switch (player != computer) {
        case (player==="rock" && computer==="paper"):
            return `You lose! ${computer} beats ${player}`;
        case (player==="rock" && computer==="scissors"):
            return `You won! ${player} beats ${computer}`;

        case (player==="paper" && computer==="rock"):
            return `You won! ${player} beats ${computer}`;
        case (player==="paper" && computer==="scissors"):
            return `You lose! ${computer} beats ${player}`;

        case (player==="scissors" && computer==="rock"):
            return `You lose! ${computer} beats ${player}`;
        case (player==="scissors" && computer==="paper"):
            return `You won! ${player} beats ${computer}`;

        break;
    };
    
}
function game() {
    let player_score = 0;
    let computer_score = 0;
    for (i=0; i<5; i++) {
        let player = prompt("Select your weapon: (rock, paper, scissors): ")
        let computer = computerPlay()
        console.log(`You chose ${player}`)
        console.log(`Computer chose ${computer}`)
        if ((single_round(player, computer).indexOf("You won!") > -1)) {
            player_score += 1;
        } else if ((single_round(player, computer).indexOf("You lost!") === -1)){
            computer_score += 1;
        };
        
        console.log(single_round(player, computer))

        console.log([player_score, computer_score])
    }
    if (player_score > computer_score) {
        console.log(`Player won with ${player_score}!`)
    } else if (player_score < computer_score) {
        console.log(`Computer won with ${computer_score}!`)
    } else {
        console.log("Tie!")
    }
}

game()