let computer_score = 0;
let player_score = 0;
let gameRunning = true;

// Here we define computer's weapon
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  let rand = Math.floor(Math.random() * 3);
  return options[rand];
}

// Here we define single_round
function single_round(player, computer) {
  player = player.toLowerCase();
  
  const playerWeapon = document.querySelector('#playerWeapon');
  const computerWeapon = document.querySelector('#computerWeapon');
  playerWeapon.textContent = `Player's weapon: ${player}`
  computerWeapon.textContent = `Computer's weapon: ${computer}`
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
      return `You lose! ${computer} beat ${player}`;
    case player === "scissors" && computer === "rock":
      ++computer_score;
      return `You lose! ${computer} beats ${player}`;
    case player === "scissors" && computer === "paper":
      ++player_score;
      return `You won! ${player} beat ${computer}`;

    default:
      return "Something went wrong!";
  };
};

//function which updates the info on screen
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


// Here we define game()
function game(weapon, computer_score, player_score, text) {
  const container = document.querySelector(".results");

  if (player_score === 5) {
    container.textContent = "Player won!";
    container.style.cssText = 'color: #23a612;font-weight: bold;'
    gameRunning = false;
  } else if (computer_score === 5) {
    container.textContent = "Computer won!";
    container.style.cssText = 'color: red;font-weight: bold;'
    gameRunning = false;
  } else {
   
    container.textContent = text;
   
    if (text.includes("lose")){
      
      container.style.cssText='color: red';
      
    } else if (text.includes("won")) {
      container.style.cssText='color: #23a612';
    } else {
      container.style.cssText='color: black;';
    };
  };
  
};

// Here we grab the DOM elements and set them as variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    location.reload(); //reload the page, because I couldn't get it working in other ways
});

rock.addEventListener("click", function () {
  //always add the desired function as a callback one!
  if (gameRunning) {
    let text = single_round("rock", computerPlay());
    game("rock", computer_score, player_score, text);
    updateScore(computer_score, player_score);
  };
});


paper.addEventListener("click", function () {
  if (gameRunning) {
    let text = single_round("paper", computerPlay());
    game("paper", computer_score, player_score, text);
    updateScore(computer_score, player_score);
  };
});


scissors.addEventListener("click", function () {
  if (gameRunning){
    let text = single_round("scissors", computerPlay());
    game("scissors", computer_score, player_score, text);
    updateScore(computer_score, player_score);
  };
});