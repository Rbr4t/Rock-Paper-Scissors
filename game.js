let computer_score = 0;
let player_score = 0;
let gameRunning = true;

// Here we define computerPlay
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  let rand = Math.floor(Math.random() * 3);
  return options[rand];
}

// Here we define single_round
function single_round(player, computer) {
  player = player.toLowerCase();
  if (player === computer) {
    return "Tie!";
  }

  switch (player !== computer) {
    case player === "rock" && computer === "paper":
      ++computer_score;
      return `You lose! ${computer} beats ${player}`;
    case player === "rock" && computer === "scissors":
      ++player_score;
      return `You won! ${player} beats ${computer}`;
    case player === "paper" && computer === "rock":
      ++player_score;
      return `You won! ${player} beats ${computer}`;
    case player === "paper" && computer === "scissors":
      ++computer_score;
      return `You lose! ${computer} beats ${player}`;
    case player === "scissors" && computer === "rock":
      ++computer_score;
      return `You lose! ${computer} beats ${player}`;
    case player === "scissors" && computer === "paper":
      ++player_score;
      return `You won! ${player} beats ${computer}`;

    default:
      return "Something went wrong!";
  }
}
function updateScore(computer_score, player_score) {
  if (computer_score !== 5 || player_score !== 5){
    const scorePlayer = document.querySelector(".scorePlayer");
    const scoreComputer = document.querySelector(".scoreComputer");
    let scoreCpr = `Computer score: ${computer_score}`;
    let scorePly = `Player score: ${player_score}`;
    scorePlayer.textContent = scorePly;
    scoreComputer.textContent = scoreCpr;
  };
};

function clearOutput() {
    const container = document.querySelector(".results");
    container.textContent = "No rounds played yet";
};

// Here we define game()
function game(weapon, computer_score, player_score, text) {
  const container = document.querySelector(".results");

  if (player_score === 5) {
    container.textContent = "Player won!";
    gameRunning = false;
  } else if (computer_score === 5) {
    container.textContent = "Computer won!";
    gameRunning = false;
  } else {
    container.textContent = text;
  }
  
}

// Here we grab the DOM elements and set them as variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    computer_score = 0;
    player_score = 0;
    gameRunning = true;
    updateScore(computer_score, player_score);
    clearOutput();
});

rock.addEventListener("click", function () {
  //always add the desired function as a callback one!
  if (gameRunning) {
    let text = single_round("rock", computerPlay());
    game("rock", computer_score, player_score, text);
    updateScore(computer_score, player_score);
  };
});

// And this one
paper.addEventListener("click", function () {
  //like here?
  if (gameRunning) {
    let text = single_round("paper", computerPlay());
    game("paper", computer_score, player_score, text);
    updateScore(computer_score, player_score);
  };
});

// And this one
scissors.addEventListener("click", function () {
  if (gameRunning){
    let text = single_round("scissors", computerPlay());
    game("scissors", computer_score, player_score, text);
    updateScore(computer_score, player_score);
  };
});