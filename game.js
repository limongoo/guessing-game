var yesCounter = 0;
var noCounter = 0;

console.log("Ask user if they like tacos or not.");
var tacoGuess = prompt("Do you like tacos?");
  if (tacoGuess == "y" || tacoGuess == "Y" || tacoGuess == "yes" || tacoGuess == "YES") {
    alert("Cool, I like tacos also");
    yesCounter += 1;
  }
  else if (tacoGuess == "n" || tacoGuess =="N" || tacoGuess == "no" || tacoGuess =="NO") {
    alert("That's too bad, tacos are good for you.");
    noCounter +=1;
  }
  else {
    alert("No answer");
  }

console.log ("Ask user if they want carnitas or not in their taco.");
var meatGuess = prompt ("Let's say you do like tacos, would you like carnitas as your meat of choice?");
  if (meatGuess === "y" || meatGuess == "Y" || meatGuess == "yes" || meatGuess == "YES") {
    alert("Cool, carnitas is the way to go!");
    yesCounter += 1;
  }
  else if (meatGuess === "n" || meatGuess == "N" || meatGuess == "no" || meatGuess == "NO"){
    alert("That's too bad, carnitas is good for your health!")
    noCounter +=1;
  }
  else {
    alert("No answer");
  }

console.log ("The final question for the user.");
var avocadoGuess = prompt("Do you like avocado on your taco or not?").toLowerCase();
  if (avocadoGuess === "y" || avocadoGuess === "yes") {
    alert("Cool, you're my kind of person, let's hang out and get some tacos with avocados!")
    yesCounter += 1;
  }
  else if (avocadoGuess === "n" || avocadoGuess === "no"){
    alert("That's ok, let's hang out and get some tacos and beer anyways!")
    noCounter +=1;
  }
  else {
    alert("No answer");
  }

console.log ("Asking user for their name. Final Question")
var guessName = prompt("Final question, what's your name?");
  if (guessName) {
    alert("Cool, nice to meet you!")
  }
  else{
    alert("Are you a robot?")
  }

console.log ("Asking the user an extra final question.");
var amount = parseInt(prompt("One extra final question I promise. How many tacos can you eat at one sitting?"));
  if (amount === NaN) {
    alert("That's not a number. Please enter a number.");
    amount = parseInt(prompt("Enter that amount of tacos you can eat at one sitting."));
    console.log(amount);
      if (amount <= 3){
      alert("Cool, I can eat that much also.");
    } else if (amount > 3) {
      alert("You are a champ, I can eat that much also. At least I think I can.");
    }
  }

  if (amount <= 3){
    alert("Cool, I can eat that much also.");
  } else if (amount > 3) {
    alert("You are a champ, I can eat that much also. At least I think I can.");
  }

var finalMessage = "<h4>Hello " +guessName+ ", your answers are <u>" +tacoGuess+ "</u> for tacos, <u>" +meatGuess+ "</u> for the carnitas, <u>" +avocadoGuess+ "</u> for the avocado and you can eat <u>" +amount+ "</u> tacos in one sitting. Awesome! <br> And finally, you said yes: " +yesCounter+ " times and no: " +noCounter+ " times.</h4>";
document.write( finalMessage+ " Thanks for playing this simple taco game, let's get some tacos! And here's a taco floating in space.");
