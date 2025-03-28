let userScore = 0;
let cpuScore = 0;

function playGame() {
  while (true) {
    let user = prompt("Choose Rock, Paper, or Scissors.\nEnter 'exit' to finish the Game.");

    if(user === null || user.toLowerCase() === "exit"){
      alert(`Game Over!\nFinal Score: You: ${userScore} - CPU: ${cpuScore}`);
      break;
    }

    user = user.toLowerCase();

    if (user !== "rock" && user !== "paper" && user !== "scissors") {
      alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
      continue;
    }

    let cpu = Math.floor(Math.random() * 3) ;

    function cpuChoose(cpu) {
      if (cpu === 0) {
        return "rock";
      } else if (cpu === 1) {
        return "paper";
      } else {
        return "scissors";
      }
    }
    let result;
    let cpuChoice = cpuChoose(cpu);

    if (user === "rock") {
      if (cpuChoice === "scissors") {
        userScore++;
        result = "You won this round!";
      } else if (cpuChoice === "paper") {
        cpuScore++;
        result = "CPU won this round.";
      } else {
        result = "It's a tie!";
      }
    } else if (user === "paper") {
      if (cpuChoice === "rock") {
        userScore++;
        result = "You won this round!";
      } else if (cpuChoice === "scissors") {
        cpuScore++;
        result = "CPU won this round.";
      } else {
        result = "It's a tie!";
      }
    } else if (user === "scissors") {
      if (cpuChoice === "paper") {
        userScore++;
        result = "You won this round!";
      } else if (cpuChoice === "rock") {
        cpuScore++;
        result = "CPU won this round.";
      } else {
        result = "It's a tie!";
      }
    }

    alert(`You chose: ${user}\nCPU chose: ${cpuChoice}\n${result}`);

    alert(`Current Score:\nYou: ${userScore} - CPU: ${cpuScore}`);

    // let continueGame = confirm("Do you want to continue?");
    // if (!continueGame) {
    //   alert(`Game Over!\nFinal Score: You: ${userScore} - CPU: ${cpuScore}`);
    //   break;
    // }
    
  }
}

playGame();
