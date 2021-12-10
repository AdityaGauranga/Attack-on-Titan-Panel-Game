var readlineSync = require('readline-sync');

var userIn = readlineSync.question("Welcome to the Attack on Titan Panel Game! For the answers, just type in the options as 'a' or 'b' without any punctuations. \nDo you wanna try this panel game? ");

// array of objects
var questions = [{
  question: "1. What's the name of the outermost wall? \n(a) Wall Rose \n(b) Wall Maria \n(c) Wall Titan \n(d) Wall Sina \n",
  answer: "b"
}, {
  question: "2. What's the titan called by everyone who eats Carla Jaegar? \n(a) Attack Titan \n(b) 7 meter Titan \n(c) Smiling Titan \n(b) Armored Titan \n",
  answer: "c"
}, { 
  question: "3. Which branch of the military protects the Royal family? \n(a) Military Police Brigade \n(b) Garrison Regiment \n(c) Royal Service Regiment \n(d) Scout Regiment \n",
  answer: "a"
}, {
  question: "4. Which expedition was sabotaged by the Female Titan and considered a failure? \n(a) 48th \n(b) 23rd \n(c) 57th \n(d) 55th \n",
  answer: "c"
}, {
  question: "5. What was the course taken on the 57th expedition? \n(a) Ehrmich to Utgard Castle \n(b) Krolva to Shiganshina \n(c) Stohess to Orvud \n(d) Karanes to Shiganshina \n",
  answer: "d"
}, {
  question: "6. Who is not ranked in the top ten of the Southern Division in the 104th Training Corps? \n(a) Eren \n(b) Armin \n(c) Annie \n(d) Reiner \n",
  answer: "b"
}, {
  question: "7. Which name was given to one of the captured Titans before it was killed? \n(a) John \n(b) Joe \n(c) Sonny \n(d) Jean \n",
  answer: "c"
 }, {
   question: "8. Who is in charge of protecting Eren when he tries to seal Wall Rose? \n(a) Mikasa Ackermann \n(b) Ian Dietrich \n(c) Rico Brzenska \n(d) Mitabi Jarnach \n",
   answer: "b"
 }, {
   question: "9. What was the name of the young girl Sasha saves in the forest village? \n(a) Kaya \n(b) Sara \n(c) Karla \n(d) Sayu \n",
   answer: "a"
 }, {
   question: "10. What does ODM in ODM Gear stand for? \n(a) Omni Directional Movement \n(b) Ocelot-Directional Mobility \n(c) Only-Directional Movement \n(d) Omni-Directional Mobility \n",
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



// play function
function play(question, answer){
  var userAns = readlineSync.question(question);

  if (userAns.toLowerCase() === answer){
    console.log("Right you are! (￣▽￣)ノ");
    score = score + 1;
    console.log("Current score: ", score);
    console.log("---------");
    console.log("");
  } else {
    console.log("Nah wrong ( ︶︿︶)");
    score = score - 1;
    console.log("Current score: ", score);
    console.log("---------");
    console.log("");
  }
  
}

console.log("Your Final Score! ", score, "  (・_・ヾ")