# Timed Coding Quiz 
This is an interactive quiz, web application.
It is timed, has 5 questions, and records high scores at the end.

## Description
We begin with a short explanation of the quiz, and a Start button that intiialises the quiz, and it's timer.
Once initialised we have a series of 5 questions, with 4 answers each.
Each answer has a rradio button that when pressed, will give a sound FX depending on whether teh answer is incorrect or correct.
If the correct answer is chosen, a 'correct' message will appear at the bottom of the page, and the player will be redirected (within
two seconds) to the next question.
If the answer is incorrect, an 'incorrect' message will show, and the correct answer will be revealed. The player will again be redirected
(within 2 seconds) to the next question.
Once all of the questions are finished, a form requesting the players name input is presented.
If no name is inputed an alert will request the name.
If a name input is inserted into the form, the player can 'submit' via the submit button.
This will then redirect the player to the high scores page.
This page will log up to 10 high scores, in order of highest to lowest.
The player can redirect bak to the quiz if they prefer using the navigation menu, or a button on the high scores page.
They can also clear the high scores, using a button on this page.

## Techonologies

-Git Hub
-Html
-Css
-Javascript

This application was an activity in allowing me to explore the application of javascript to an interactive website

## Visuals

![Quiz Website](./Assets/timedCodeQuizVisuals.gif)

## Installation

Website has been deployed and is available from this link:

[Quiz Website](https://alexandranel.github.io/TimedCodingQuiz/)

Full repository can be accessed here:

[Git Repository](https://github.com/AlexandraNel/TimedCodingQuiz/)

``````
To view repo contents please navigate to the above link there you will find
-assets folder
-license
-readme
-index.html

**Note** Css style sheets are contained within the assets folder. Navigate within the assets folder, there you will find the css stylesheet and the css reset. Please note the ccs reset is a templated asset, for the custom stylesheet please view styles.css
``````

## Usage

This webiste was constructed in an effort to improve javascript knowledge
Its usage is of a simple 5 question quiz, and leaderboard.

## Support

If you come into any issues with this web application please contact
info@alexandranel.com

## Roadmap

Moving forward the following improvments can be made

-localStorage needs to be refined so that when access the highscores from the index page, they exist there already.
-local.storage does not seem to persist beyond refresh reqires debug
-The questions can be extended out to incude more
-The questions could also be optimised to generate randomly between the index instead of sequentially
-The radio buttons can be styled in the css to look more interesting

## Authors and Acknowledgment

This website was made under the guidance and with assistance from 
-the team at MONAH UNI full Stack Dev Bootcamp
-Instructor Chee Ho Tai 
-TA Pranita Shrestha 
-Tutor Meg Meyers
-Debug and tutor Chat GPT

## License
MIT License







