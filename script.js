
var startGame = document.querySelector("#startGame"); //getting id for start button
var timerDisplay= document.querySelector("#timer"); //getting id for countdown timer
var secondsLeft= 76; //seconds left initialise the timer
var mainEl= document.querySelector("#main"); //getting id for the body for quiz


//event listener to start game/timer on button click
startGame.addEventListener("click", function(event) {
    event.preventDefault();
    setTime(); //start the timer on this event listener
    generateQuiz(); //start the quiz on this event listener
});

//TIMER FUNCTION BELOW
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerDisplay.textContent = "Timer:" + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);  // 1000 milliseconds for 1 second interval
}

// Function to create message if timer hits 0
function sendMessage() {
    mainEl.textContent = " "; //add text content to main body section
  var gameOver = document.createElement("h1"); //create the h1 element
  gameOver.textContent="Game Over! Resetting in 3, 2, 1..."; //make this new h1, text content, saying GAME OVER
  mainEl.appendChild(gameOver); //add this as a child of the mainEl id

  setTimeout(function(){
    window.location.href = "index.html";
  }, 3000)

}

//QUIZ FUNCTION BELOW

var myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript tag?",
        answers: {
            a: "Indside the head element",
            b: "Inside the body element",
            c: "Inside either the head or the body element",
            d: "Just before the /html tag"
        },
        correctAnswer: "c"
    },

    {
        question: "How do you call a function named myFunction in Javascript?",
        answers: {
            a: "myFunction()",
            b: "myFunction=",
            c: "Inside either the head or the body element",
            d: "Just before the /html tag"
        },
        correctAnswer: "c"
    },

        
    },
    "How do you call a function named myFunction in Javascript?",
    "What does ul stand for in html?",
    "How to write an IF statement in JavaScript?",

]
 function generateQuiz(){

 }




//need my questions and answers to be in an array or an object
//need if else statements for correct or incorrect answers


//need if else statement that takes all correct answers and stores them in an array
// 1 create array for this = var correctTally
// 2 use push method for this
//add the array together using length()
//stringify this and? add to local stroage and then get item
//win + loss isstore dinlocal storage?
//will need a for loop to display


// //An empty array for storing the number of correct answers
// var correctTally = [""];

// //An empty object for storing user input for high score
// var finalScore = {
//     name: nameInput.value.trim(),
//     score: correctTally
// }; 

// // This object will need to be stringified and submitted to local storage
//  localStorage.setItem("finalScore", JSON.stringify(finalScore))
 
//  //we will need this get item to be put into the ul itemaccording to score
//  var finalScoreString = localStorage.getItem("finalScore")
//  finalScore = JSON.parse(userInfoString);
//  //timer using setInterval
//  //start on init? or start on clikc event listener of start button
//  //create an event listening for click start button

