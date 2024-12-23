const humanScore = (0)
const computerScore = (0)

function getComputerChoice() {
    let ff = Math.floor(Math.random() * 3);
    switch(ff) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
        default: 
            return "error pls click the button again"
    }
}

function getHumanChoice() {
   let hh = prompt("input rock, paper, or scissors")
   let nn = hh.toLowerCase()
   return nn
}

function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection)
    switch(computerChoice)
        {case "rock":
            if(humanChoice === "paper") {
                humanScore++
                console.log("winner!")
            } else if(humanChoice === "rock") {
                console.log("tie!")
            } else 
                computerScore++
                console.log("you lose!")
            }
                    }break;
        case "paper":
            if(humanChoice === "scissors") {
                humanScore++
                console.log("winner!")
            } else if(humanChoice === "paper") {
                console.log("tie!")
            } else 
                computerScore++
                console.log("you lose!")
            }
                    }break;
        case "paper":
             if(humanChoice === "rock") {
                humanScore++
                console.log("winner!")
            } else if(humanChoice === "paper") {
                console.log("tie!")
            } else 
                computerScore++
                console.log("you lose!")
            }break;
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);

  function playGame() {
    let i = 1
    while(i < 6) {
        playRound()
    i++
    }
  }

//console.log(getComputerChoice())

//console.log(getHumanChoice())