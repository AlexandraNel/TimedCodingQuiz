
var highScore = JSON.parse(localStorage.getItem("scores")) || []; //getting any scores info from the localStorage

highScore.sort(function(a,b){ //this sort function will make my high scores go from highest to lowest
    return b.keepScore-a.keepScore //high scores function works on strings, so this establishes it as keepScore and makes it go from highest to lowest
})

for(i=0; i<highScore.length; i++){ //here we create the for loop to go through all of the high scores we have called in
    var liEl = document.createElement("li"); //creating list elements for each highScore data 
    liEl.textContent= highScore[i].userName + " - " + highScore[i].keepScore; //making the high scores data into text inside the list element

    document.querySelector("ol").appendChild(liEl); //adding my list elements to my ordered list
}

var clearButton = document.getElementById("clear"); //grabbing the clear button from the html ifd for use

clearButton.addEventListener("click", function() { //event listener for clearing the local storage on click
    localStorage.clear(); //clear the local storage info
    document.querySelector("ol").innerHTML=""; //clear the hishscores list
});