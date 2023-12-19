
var startGame = document.querySelector("#startGame"); //getting id for start button
var timerDisplay= document.querySelector("#timer"); //getting id for countdown timer
var secondsLeft= 76; //seconds left initialise the timer
var mainEl= document.querySelector("#main"); //getting id for the body for quiz
var quizContainer = document.querySelector("#quizContainer");


//event listener to start game/timer on button click
startGame.addEventListener("click", function(event) { //adds event listener to my startGame button
    event.preventDefault(); //prevents any default action ie. full page refresh
    setTime(); //start the timer on this event listener
    generateQuiz(); //start the quiz on this event listener
});

//TIMER FUNCTION BELOW
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerDisplay.textContent = "Timer: " + secondsLeft;

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

//creating an array
//placing each question, answer options, and correct answer within objects, within the array

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
        correctAnswer: "a"
    },

    {
      question: "What does <ul> stand for in html?",
      answers: {
          a: "unlimited",
          b: "unique line",
          c: "unordered list",
          d: "underlined"
      },
      correctAnswer: "c"
  },

  {
    question: "How to write an IF statement in JavaScript?",
    answers: {
        a: "if condition ()",
        b: "if (condition)",
        c: "if = condition",
        d: "if = (condition)"
    },
    correctAnswer: "b"
},

{
  question: "How do you select an element with the id 'demo?', in CSS",
  answers: {
      a: ".demo",
      b: "=demo",
      c: "demo",
      d: "#demo"
  },
  correctAnswer: "d"
}
]

var currentQuestionIndex= 0; //creating an index for each question in the array so we 
//can manage going through it one at a time

 function generateQuiz(){

  //clear the previous question/ area for new question
  quizContainer.innerHTML=""; 

  //generate the highscores input form when all questions are complete
  if(currentQuestionIndex <= myQuestions.length){
    var enterHighScore = document.createElement("form");
    return;
  }

  //question object is the specific indexed question within the myQuestionArray
  var questionObj= myQuestions[currentQuestionIndex];
  var questionElement= document.createElement("h1"); //generate an h1 for the question
  questionElement.textContent = questionObj.question; //grab the question string from the object
  
  var optionsList = document.createElement("ul"); //generate an h1 for the question
  
  for(var key in questionObj.answers){ //using a for-in loop as my questions exist within an object
    var listItem = document.createElement("li");//createing a list item for each answer option and its radio button

    var radioButton = document.createElement("input"); //creating the radio buttons to select the correct answer to a question
    radioButton.setAttribute("type", "radio"); //setting the type to radio- radio buttons can only have one selected
    radioButton.setAttribute("name", "question"); //setting the name of a group of these radio buttons to the question they are allocated to (ensuring only one can be chosen correctly in a question group)
    radioButton.setAttribute("value", "key"); //assigning a value to the radio button- being the key of the obj item /or answer option
    radioButton.setAttribute("id", "option-"+ key); //this creates a unique id for each radio button ie. "option-a" or "option-b" allowing me to target each uniquely

    var answerOption=document.createElement("label"); //this is the part of the ul that sits next to the radio button- the answer/option itself
    answerOption.setAttribute("for", "option-"+ key) //"for" explicitly links the answer option to the radio button using the id that we previously created
    answerOption.textContent=questionObj.answers[key]//setting the text to the array-object-object where I stored the asnwers 

  listItem.appendChild(radioButton); //add the radio buttons to the html id tag
  listItem.appendChild(answerOption); //add the answer options to the html id tag
  optionsList.appendChild(listItem); //add the <ul> list items to the html id tag 
  }





  
  quizContainer.appendChild(questionElement); //add the question to the html id tag 
  quizContainer.appendChild(optionsList);
  for(var i=0; i< myQuestions.length; i++) { //for loop to go through each question
    
  
}


 }




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

