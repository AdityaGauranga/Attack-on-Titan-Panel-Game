var readlineSync = require('readline-sync');

var userIn = readlineSync.question("Welcome to the Attack on Titan Panel Game! For the answers, just type in the options as 'a' or 'b' without any punctuations. \nDo you want to take this test of knowledge? ");


// array of objects
var questions = [{
  question: "What's the name of the outermost wall? \n(a) Wall Rose \n(b) Wall Maria \n(c) Wall Titan \n(d) Wall Sina \n",
  answer: "b"
}, {
  question: "What's the titan called by everyone who eats Carla Jaegar? \n(a) Attack Titan \n(b) 7 meter Titan \n(c) Smiling Titan \n(b) Armored Titan \n",
  answer: "c"
}, { 
  question: "Which branch of the military protects the Royal family? \n(a) Military Police Brigade \n(b) Garrison Regiment \n(c) Secret Regiment \n(d) Scout Regiment \n",
  answer: "a"
}, {
  question: "Which expedition was sabotaged by the Female Titan and considered a failure? \n(a) 48th \n(b) 23rd \n(c) 57th \n(d) 55th \n",
  answer: "c"
}, {
  question: "What was the course taken on the 57th expedition? \n(a) Ehrmich to Utgard Castle \n(b) Krolva to Shiganshina \n(c) Stohess to Orvud \n(d) Karanes to Shiganshina \n",
  answer: "d"
}];

var score = 0;

if (userIn.toLowerCase() === "yes" || userIn.toLowerCase() === "yeah" || userIn.toLowerCase() === "yea") {
  console.log("Great then! Let's go ahead.. ")
  console.log("")

// loop
  for (var i = 0; i < questions.length; i++){
    currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

if (userIn.toLowerCase() !== "yes" || userIn.toLowerCase() !== "yeah" || userIn.toLowerCase() !== "yea" ) {
 console.log("Oh that's too bad, see you next time then (⌣_⌣”)")
 console.log("")
}

// play function
function play(question, answer){
  var userAns = readlineSync.question(question);

  if (userAns.toLowerCase() === answer){
    console.log("Right you are! (￣▽￣)ノ");
    score = score + 1;
    console.log("Current score: ", score);
    console.log("---------");
  } else {
    console.log("Nah wrong ( ︶︿︶)");
    score = score - 1;
    console.log("Current score: ", score);
    console.log("---------");
  }
  
}

console.log("Your final score! (・_・ヾ", score)