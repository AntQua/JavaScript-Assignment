// pure JS rock paper scissors game

// the whole game inside the main game function     

const options = ['rock', 'paper', 'scissors'];
// computer random selection code
const computerPlay = () => {
    const optionsIndex = Math.floor(Math.random() * options.length);
    const computerSelection = options[optionsIndex];
    return computerSelection;
}

// set variables
         
    let wins = 0;
    let losses = 0;
    let ties = 0;

const game = () => {
    for ( let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice of weapon!");
            playerSelection = playerSelection.toLowerCase();

        if (!playerSelection) {  // reset the game if nothing inputted by the user
            return;
            }
      
    function playRound(playerSelection, computerSelection) {
      
        if (
            playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "rock"
            ) {
                wins++;
                console.log("Computer chose: " + computerSelection)
                console.log("You chose: " + playerSelection)
                return (`${playerSelection} beats ${computerSelection}. You Win!`)
            }
        else if (
            playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "scissors" && computerSelection === "rock" ||
            playerSelection === "paper" && computerSelection === "scissors"
            ) {
                losses++;
                console.log("Computer chose: " + computerSelection)
                console.log("You chose: " + playerSelection)
                return (`${computerSelection} beats ${playerSelection}. You Lose!`)
            }
        else if (playerSelection === computerSelection) {
            ties++;
            return ("It's a draw! Try again.")
        }
      }

      console.log("Scoreboard:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
      
      
      const computerSelection = computerPlay();
      
      console.log(playRound(playerSelection, computerSelection));
    }
    let replay = window.alert("Would You Like To Play Again?"); 
    
    if(replay) {
        game();
    }
}
game();

 
