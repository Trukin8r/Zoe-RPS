const humanScore = 0
const computerScore = 0

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

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    switch(computerChoice) {
        case "rock":
            if(humanChoice === "paper") {
                humanScore++
                console.log("winner! paper beats rock")
            } else if(humanChoice === "rock") {
                console.log("tie! rock and rock tie")
            } else {
                computerScore++
                console.log("you lose! rock beats " + humanChoice)
            
                }    break;
        case "scissors":
            if(humanChoice === "rock") {
                humanScore++
                console.log("winner! rock beats scissors")
            } else if(humanChoice === "scissors") {
                console.log("tie! scissors and scissors tie")
            } else {
                computerScore++
                console.log("you lose! scissors beats " + humanChoice)
            
              }  break;
        case "paper":
             if(humanChoice === "scissors") {
                humanScore++
                console.log("winner! scissors beats paper")
            } else if(humanChoice === "paper") {
                console.log("tie! paper and paper tie")
            } else {
                computerScore++
                console.log("you lose! paper beats " + humanChoice)
            }break;
        }
    }

  function playGame() {
    let i = 1
    while(i < 6) {
        console.log("round: " + i)
        playRound()
        console.log("score: h: " + humanScore + " / c: " + computerScore)
        console.log(" ")
    i++
    }
  }
playRound()
//console.log(getComputerChoice())

//console.log(getHumanChoice())