 let userScore = 0;
 let compScore = 0;
 let userChoice;
 function onBtnClick1 (id) {
    userChoice = id;
    changeText();
    document.querySelector("#user-score").textContent = userScore;
    document.querySelector("#comp-score").textContent = compScore;
 }

 function onBtnClick2 (id) {
  userChoice = id;
  changeText();
  document.querySelector("#user-score").textContent = userScore;
  document.querySelector("#comp-score").textContent = compScore;
}

function onBtnClick3 (id) {
  userChoice = id;
  changeText();
  document.querySelector("#user-score").textContent = userScore;
  document.querySelector("#comp-score").textContent = compScore;
}

function compChoice1(){
  let array = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  let compChoice = array[randIdx];
  return compChoice;
}

function drawgame(){
  return "The game is drawn.";
}

function showWinner(userWin){
  if(userWin){
    userScore++;
    document.querySelector("#user-score").textContent = userScore;
    return "User wins.";
  }else{
    compScore++;
    document.querySelector("#comp-score").textContent = compScore;
    return "Computer wins.";
  }
}

let userWin = 0;
function playGame(){
let choiceComp = compChoice1();
console.log("The computer's choice is",choiceComp);
    if(userChoice = "rock"){
        if(choiceComp == "scissors"){
             return "User wins.";
        }else if(choiceComp == "paper"){
            return "Computer wins.";
        }else{
            return "The match is drawn.";
        }
    }else if(userChoice = "paper"){
        if(choiceComp == "rock"){
            return "User wins.";
        }else if(choiceComp == "scissors"){
            return "Computer wins.";
        }else{
            return "The match is drawn.";
        }
    }else{
        if(choiceComp == "paper"){
            return "User wins.";
        }else if(choiceComp == "rock"){
            return "Computer wins.";
        }else{
            return "The match is drawn.";
        }
    }
}

function changeText(){
  let msg = document.querySelector("#msg");
let values=playGame();
msg.textContent = values;
if(values == "User wins."){
  userScore++;
}else if (values == "Computer wins.") {
  compScore++;
}else {
  return;
}
}
