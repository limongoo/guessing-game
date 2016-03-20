var yesCounter = 0;
var noCounter = 0;

// ask user aboyt tacos

askQuestion("Do you like tacos?", "yes", "result1");
askQuestion("Let's say you do like tacos, would you like carnitas as your meat of choice?", "yes", "result2");
askQuestion("Do you like avocado on your taco or not?", "yes", "result3");

console.log("Ask user if they like tacos or not.");
function askQuestion(question, answer, result) {
  var guess = prompt(question);
  if(guess.toLowerCase() == answer.toLowerCase()) {
    document.getElementById(result).innerHTML = "You answered yes.";
    yesCounter++;
  } else {
    document.getElementById(result).innerHTML = "You answered no.";
    noCounter++;
  }
}

// Report counter
document.getElementById('yes').innerHTML = yesCounter;
document.getElementById('no').innerHTML = noCounter;

// get user name
userName();
console.log ("Asking user for their name. Final Question")
function userName() {
  var guessName = prompt("Final question, what's your name?");
    if (guessName) {
      document.getElementById('name').innerHTML = "Cool, " +guessName+ " nice to meet you!";
    }
    else {
      document.getElementById('name').innerHTML = "Are you a robot?";
  }
}
