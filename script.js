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

console.log(getComputerChoice())

console.log(getHumanChoice())

function getHumanChoice() {
    
}