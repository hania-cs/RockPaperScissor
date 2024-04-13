const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorBtn = document.getElementById("scissor-btn")

function getComputersChoice(){
    let options = ["rock", "paper", "scissor"]
    let computersInput = Math.floor(Math.random()*3)
    let compChoice = options[computersInput]
    return compChoice
}
let userScore = 0
let computerScore = 0
let computerInput = getComputersChoice()

function playRound(userInput, computerInput){
    if(userInput === computerInput){
        return "It's a tie!"
    }
    
    else if(userInput === "rock"){
        if(computerInput === "paper"){
            computerScore++
            return "You lose! Paper beats rock"
        }
        else if(computerInput === "scissor"){
            userScore++
            return "You win! rock beats scissor"
        }
    }
    else if(userInput === "paper"){
        if(computerInput === "rock"){
            userScore++
            return "You win! paper beats rock"
        }
        else if(computerInput==="scissor"){
            computerScore++
            return "You lose! scissor beats paper"
        }
    }
    else if(userInput === "scissor"){
        if(computerInput === "rock"){
            computerScore++
            return "You lose! rock beats scissors"
        }
        else if(computerInput === "paper"){
            userScore++
            return "You win! scissor beats paper"
        }
    }
    
}


function playGame(){
   
        let userInp = prompt("Enter your choice: Rock/Paper/Scissor: ").toLowerCase()
        console.log(playRound(userInp, computerInput))

    if(userScore > computerScore){
        return 'YOU WIN'
    }
    else{
        return "YOU LOSE"
    }
}
console.log(playGame())