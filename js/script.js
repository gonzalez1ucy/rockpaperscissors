// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var computerChoice= "";
var winner = "";
var userChoice= "";
var randomnumber=0;
$("#shoot").click(function(){
  userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    randomnumber = Math.random();
    if (randomnumber <.33 ){
    computerChoice= "rock";
    } else if (randomnumber >.66){
    computerChoice ="paper";
    } else {
          computerChoice = "scissors";
   }
       $("#computerChoice").text(computerChoice);
  if (computerChoice ==="rock" && userChoice === "paper"){
  $("#result").text("userChoice Wins!");
} if (computerChoice ==="paper" && userChoice === "paper"){
  $("#result").text("Draw!");
} if (computerChoice ==="rock" && userChoice === "rock"){
  $("#result").text("Draw!");
} if (computerChoice ==="paper" && userChoice === "rock"){
  $("#result").text("computerChoice Wins!");
} if (computerChoice ==="scissors" && userChoice === "paper"){
  $("#result").text("computerChoice Wins!");
} if (computerChoice ==="scissors" && userChoice === "rock"){
  $("#result").text("userChoice Wins!");
} if (computerChoice ==="scissors" && userChoice === "scissors"){
  $("#result").text("Draw!");
} if (computerChoice ==="paper" && userChoice === "scissors"){
  $("#result").text("userChoice Wins!");
} if (computerChoice ==="rock" && userChoice === "paper"){
  $("#result").text("userChoice Wins!");
} if (computerChoice ==="rock" && userChoice === "scissors"){
  $("#result").text("computerChoice Wins!");
} 
});
 



// DOCUMENT READY FUNCTION BELOW

