
var startGame = document.querySelector("#startGame"); //getting id for start button
var timerDisplay = document.querySelector("#timer"); //getting id for countdown timer
var secondsLeft = 50; //seconds left initialise the timer
var mainEl = document.querySelector("#main"); //getting id for the body for quiz
var quizContainer = document.querySelector("#quizContainer"); //container targeted for where the quiz goes
var correctSound = new Audio("Assets/sound-correctAnswer.wav"); //loading a sound for correct answers
var incorrectSound = new Audio("Assets/sound-incorrectAnswer.wav"); //loading a sound for incorrect answers


//event listener to start game/timer on button click
startGame.addEventListener("click", function (event) { //adds event listener to my startGame button
  event.preventDefault(); //prevents any default action ie. full page refresh
  setTime(); //start the timer on this event listener
  generateQuiz(); //start the quiz on this event listener
});

//TIMER FUNCTION BELOW

var timerInterval; //setting this globally so I can stop the timer once our quiz is over within the quiz function also

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () { //setting our global variable to the set interval function
    secondsLeft--;
    timerDisplay.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
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
  gameOver.textContent = "Game Over! Resetting in 3, 2, 1..."; //make this new h1, text content, saying GAME OVER
  mainEl.appendChild(gameOver); //add this as a child of the mainEl id

  setTimeout(function () {
    window.location.href = "index.html";
  }, 3000)

}

//QUIZ FUNCTION BELOW

//creating an array
//placing each question, answer options, and correct answer within objects, within the array

var myQuestions = [
  {
    question: "Q1. Inside which HTML element do we put the JavaScript tag?",
    answers: {
      a: "Inside the head element",
      b: "Inside the body element",
      c: "Inside either the head or the body element",
      d: "Just before the /html tag"
    },
    correctAnswer: "c"
  },

  {
    question: "Q2. How do you call a function named myFunction in Javascript?",
    answers: {
      a: "myFunction()",
      b: "myFunction=",
      c: "Inside either the head or the body element",
      d: "Just before the /html tag"
    },
    correctAnswer: "a"
  },

  {
    question: "Q3. What does <ul> stand for in html?",
    answers: {
      a: "unlimited",
      b: "unique line",
      c: "unordered list",
      d: "underlined"
    },
    correctAnswer: "c"
  },

  {
    question: "Q4. How to write an IF statement in JavaScript?",
    answers: {
      a: "if condition ()",
      b: "if (condition)",
      c: "if = condition",
      d: "if = (condition)"
    },
    correctAnswer: "b"
  },

  {
    question: "Q5. How do you select an element with the id 'demo?', in CSS",
    answers: {
      a: ".demo",
      b: "=demo",
      c: "demo",
      d: "#demo"
    },
    correctAnswer: "d"
  }
]

var currentQuestionIndex = 0; //creating an index for each question in the array so we can manage going through it one at a time
var keepScore = 0; //need a variable to tally the score of correct questions
var userName = ""; //variable to store user name input id= playername
var questionObj;

localStorage.clear();

//the function for the quiz itself
function generateQuiz() {
questionObj= myQuestions[currentQuestionIndex];   //question object is the specific indexed question within the myQuestionArray
  //clear the previous question/ area for new question
  quizContainer.innerHTML = "";

  //check if we are finished the quiz
  if (currentQuestionIndex >= myQuestions.length) {
    clearInterval(timerInterval); //stop and clear the timer if we are finished the quiz

    let playerForm = document.createElement("form"); //make the form container for the player to enter their details
    let playerInput = document.createElement("input"); //make the input for the player to enter their details
    let submitName = document.createElement("button"); //create a button to submit the name of the player

    playerInput.setAttribute("id", "playerName"); //attaching an id to the input from player
    playerInput.setAttribute("type", "text"); //setting the type of input to text
    playerInput.setAttribute("placeholder", "Type your name here"); //making the input container have instructions as placeholder text

    submitName.setAttribute("type", "submit"); //setting button type to submit
    submitName.textContent = "submit"; //creating the text content of teh button to the instructional 'submit'

    playerForm.appendChild(playerInput);
    playerForm.appendChild(submitName);
    quizContainer.appendChild(playerForm);

    playerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (playerInput.value.trim() === "") {
        alert("please enter your name"); //if they enter nothing put an alert up 
      } else {
        userName = playerInput.value.trim(); //store user name input in my userName variable
        userResults();// call my local storage function
        window.location.href = "scores.html"; //redirect to high scores
      }
    });
    
  } else { //if we're not finished the quiz, go throught the quiz
  var questionElement = document.createElement("h2"); //generate an h1 for the question
  questionElement.textContent = questionObj.question; //grab the question string from the object

  var optionsList = document.createElement("ul"); //generate an h1 for the question
  
  for (let key in questionObj.answers) { //using a for-in loop as my questions exist within an object
    let listItem = document.createElement("li");//createing a list item for each answer option and its radio button
    let radioButton = document.createElement("input"); //creating the radio buttons to select the correct answer to a question
    let answerOption = document.createElement("label"); //this is the part of the ul that sits next to the radio button- the answer/option itself
    
    radioButton.setAttribute("type", "radio"); //setting the type to radio- radio buttons can only have one selected
    radioButton.setAttribute("name", "question"); //setting the name of a group of these radio buttons to the question they are allocated to (ensuring only one can be chosen correctly in a question group)
    radioButton.setAttribute("value", key); //assigning a value to the radio button- being the key of the obj item /or answer option
    radioButton.setAttribute("id", "option-" + key); //this creates a unique id for each radio button ie. "option-a" or "option-b" allowing me to target each uniquely 
    radioButton.setAttribute("class", "radioClass"); //creating a class
    answerOption.setAttribute("for", "option-" + key); //"for" explicitly links the answer option to the radio button using the id that we previously created
    answerOption.textContent = questionObj.answers[key]//setting the text to the array's object's property where I stored the correct answer

    listItem.appendChild(radioButton); //add the radio buttons to the html id tag
    listItem.appendChild(answerOption); //add the answer options to the html id tag
    optionsList.appendChild(listItem); //add the <ul> list items to the html id tag 
 
   radioButton.addEventListener('change', chooseAnswer); //triggering an event function for teh radio button answer

    quizContainer.appendChild(questionElement); //add the question to the html id tag 
    quizContainer.appendChild(optionsList); //add the options for answers to the html id tag
  }
}}

//Keep Score 
function userResults(){
  var highScore = JSON.parse(localStorage.getItem("scores")) || []; //pull out existing score info from local storage unless theer are none, then its an array
  var newScore= {userName, keepScore}; //create new score object
  highScore.push(newScore); //put the new score info in the highscore with the others

  localStorage.setItem("scores", JSON.stringify(highScore));
}


function chooseAnswer(){
   questionObj= myQuestions[currentQuestionIndex];   //question object is the specific indexed question within the myQuestionArray again for this function
    let correctAnswer = questionObj.correctAnswer; //creating a correctAnswer variable to assign in our function
    let resultMessage = ""; //create a variable called results message- this string will eventually tell us if answer is correct or not
    let messageEl = null; //// creating a null element for correct/incorrect answer message to trigge rinside teh event listener

    var buttonSelections= document.querySelectorAll(".radioClass"); //calling the class of my radio buttons
        buttonSelections.forEach(function(btn){
      btn.disabled=true; //this function disables the other radio buttons once one is selected
    })
    

      if (this.value === correctAnswer) { //if the button that is pressed is the correct one
      keepScore++; //add it to my score variable
      correctSound.play(); //play this sound for correct answer
      resultMessage = "Correct!"; //this i the message that shows if the correct answer is chosen

    } else if (secondsLeft > 0) { //if it is an incorrect answer and there are more than 0 seconds left     
      secondsLeft--; //minus a second
      timerDisplay.textContent = "Timer: " + secondsLeft; //then immediately deduct it from our timer
      incorrectSound.play(); //and play the incorrectAnswer sound
      resultMessage = "Wrong Answer! Correct answer is: " + questionObj.answers[correctAnswer]; //this is the message that is 
      //shown if teh incorrect answer is chosen, we all add in what the correct answer would be
    }

    if (!messageEl){
      messageEl=document.createElement("cite"); //create cite block for message feedback on answering question
      quizContainer.appendChild(messageEl); //put the cite element underneath the question/answers list
    }

      messageEl.textContent = resultMessage; //connect the result message function to the message element to reveal it
          
      setTimeout(function () { //this function exists within the event listener 
        buttonSelections.forEach(function(btn){
        btn.disabled=false; //re-enables the radio buttons once we go to the next question
      })
      currentQuestionIndex++; //this function will go through the current question index (to next question)
      generateQuiz(); //running through the generate quiz function
    }, 1000); // after 2 seconds once teh event listener has been pressed
  };
