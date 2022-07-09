console.log("TEST!")

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
let computer = computerPlay()
console.log(computer)
let player = "scissors"
console.log(player)
console.log(single_round(player, computer))