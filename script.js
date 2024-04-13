const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorBtn = document.getElementById("scissor-btn")
const resultCont = document.getElementById("results-container")

let userChoice=""
let userScore = 0
let computerScore = 0
let roundsPlayed=0

rockBtn.addEventListener("click", function(){
    userChoice="rock"
    playRound(userChoice, getComputersChoice())
   
})
paperBtn.addEventListener("click", function(){
    userChoice="paper"

    playRound(userChoice, getComputersChoice())
})
scissorBtn.addEventListener("click", function(){
    userChoice="scissor"
    playRound(userChoice, getComputersChoice())
})
function getComputersChoice(){
    let options = ["rock", "paper", "scissor"]
    let computersInput = Math.floor(Math.random()*3)
    let compChoice = options[computersInput]
    return compChoice
}

function playRound(userInput, computerInput=getComputersChoice()){
   
    if(userInput === computerInput){
        resultCont.textContent="Its a tie!"
    }
    else if(userInput === "rock"){
        if(computerInput === "paper"){
            computerScore++
            resultCont.textContent= "ouch! paper beats rock"
        }
        else if(computerInput === "scissor"){
            userScore++
            resultCont.textContent= "yay! rock beats scissor"
        }
    }
    else if(userInput === "paper"){
        if(computerInput === "rock"){
            userScore++
            resultCont.textContent= "yay! paper beats rock"
        }
        else if(computerInput==="scissor"){
            computerScore++
            resultCont.textContent= "ouch! scissor beats paper"
        }
    }
    else if(userInput === "scissor"){
        if(computerInput === "rock"){
            computerScore++
            resultCont.textContent= "ouch! rock beats scissors"
        }
        else if(computerInput === "paper"){
            userScore++
            resultCont.textContent= "yay! scissor beats paper"
        }

    }roundsPlayed++
    if(roundsPlayed===5){
        finalScore()
    }

}

function finalScore() {
    if (userScore > computerScore) {
        resultCont.textContent = "YOU WIN 🎉";
    } else if (userScore < computerScore) {
        resultCont.textContent = "Hard luck 😭";
    } else {
        resultCont.textContent = "It's a tie 🤭";
    }

    userScore = 0; 
    computerScore = 0;
    roundsPlayed = 0; 
}
