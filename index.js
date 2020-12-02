var readlineSync = require("readline-sync");
var chalk = require("chalk");

const username = readlineSync.question("What's your name? ");
console.log(chalk.magentaBright.bold("Hey!! " + username));
console.log(chalk.bgGrey.underline.bold("\nWelcome to How Well Do You Know ADITI Quiz ? \n"));

let score = 0;

function play(ques, ans)
{
  let guess = readlineSync.question(chalk.cyanBright(ques));

  if(guess.toLowerCase() === ans.toLowerCase() )
  {
    score++;
    console.log(chalk.green("Correct answer"));
  }
  else{
    console.log(chalk.red("Wrong answer"));
  }
  console.log("Current score: "+score+"\n--------------");
}

let questions = [{
  ques: "Do I play any instruments? ",
  ans: "No"
},{
  ques: "Where do I live? ",
  ans: "Bhilai"
},
{
  ques: "Am I irritable? ",
  ans: "No"
},{
  ques: "Which movie genre would I prefer? ",
  ans: "Horror"
},{
  ques: "Do I have any brothers or sisters? ",
  ans: "Yes"
},{
  ques: "Which chocolate does I love the most? ",
  ans: "Dairy Milk"
}]


for(let i=0; i<questions.length; i++)
{
  play(questions[i].ques, questions[i].ans);
}

console.log(chalk.inverse("Congratulations! You have completed the quiz.\n"))
console.log(chalk.bgMagentaBright("Final score: " + score +"/"+questions.length));