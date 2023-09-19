let userName = '';

userName ? console.log (`Hello, ${userName}`) : console.log ('Hello!');

const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

let userQuestion;

// Ask the user for their names 
line.question('Please enter your names: ', (name) => {
  userName = name;//store the user's name

// Ask the user for their question 
line.question('Please enter a yes or no question: ', (question) => {
  userQuestion = question;
  console.log(`Hello! My names are ${userName}. My question to the Magic Eight balls is:${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;
console.log(`Magic Eight Ball says: ${eightBall}.`);
switch (randomNumber) {
  case 0:
  console.log('=>It is certain');
  break;
  case 1:
  console.log('=>It is decidedly so');
  break;
  case 2:
  console.log('=>Reply hazy try again');
  break;
  case 3:
  console.log('=>Cannot predict now');
  break;
  case 4:
  console.log('=>Do not count on it');
  break;
  case 5:
  console.log('=>My sources say no');
  break;
  case 6:
  console.log('=>Outlook not so good');
  break;
  case 7:
  console.log('=>Signs point to yes');
  break;
  default: 
  console.log('=>Magic ball unavailable');
  break;
}
  
  // Close the readline interface
  line.close();
});
});

