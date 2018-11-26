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
  if (computerChoice==="rock" && userChoice==="paper")
  $("#result").text("userchoice Wins!")
});
 



// DOCUMENT READY FUNCTION BELOW

