// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';



// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  // Write code here
  // Use the unit test to see what is expected

  hand1 = hand1.toLowerCase().trim()
  hand2 = hand2.toLowerCase().trim()


  if ((hand1 == 'rock' && hand2 == 'rock') || (hand1 == 'paper' && hand2 == 'paper') || (hand1 == 'scissors' && hand2 == 'scissors')) {
    return ("It's a tie!")
  } else if
    ((hand1 == 'flip' && hand2 == 'flip')) {
    return ('Drama... Time to take a break!')
  } else if
    ((hand1 == 'rock' && hand2 == 'scissors') || (hand1 == 'paper' && hand2 == 'rock') || (hand1 == 'scissors' && hand2 == 'paper')) {
    return ('Player 1 wins!')
  } else if ((hand2 == 'rock' && hand1 == 'scissors') || (hand2 == 'paper' && hand1 == 'rock') || (hand2 == 'scissors' && hand1 == 'paper')) {
    return ('Player 2 wins!')
  } else if
    ((hand1 == 'flip' && hand2 == 'scissors') || (hand1 == 'flip' && hand2 == 'rock') || (hand1 == 'flip' && hand2 == 'paper')) {
    return ('Player 1 is Pissed!')
  } else if ((hand2 == 'flip' && hand1 == 'scissors') || (hand2 == 'flip' && hand1 == 'rock') || (hand2 == 'flip' && hand1 == 'paper')) {
    return ('Player 2 is Pissed!')
  } else {
    return ('Oh come on now, enter "rock", "paper", or "scissors" you goofy goober!')
  }
}



// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares 
  //if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Player 2 wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Player 2 wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Player 1 wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Player 2 wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Player 2 wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Player 1 wins!");
    });
    it('should take "flip" as valid input and return "pissed" message', () => {
      assert.equal(rockPaperScissors('flip', ' paper '), "Player 1 is Pissed!");
      assert.equal(rockPaperScissors('Paper', 'flip'), "Player 2 is Pissed!");
      assert.equal(rockPaperScissors(' flip', 'flip '), "Drama... Time to take a break!");
    });
    it('should return instructional prompt if invalid inputs or mispellings exist', () => {
      assert.equal(rockPaperScissors('rokc', 'poop'), 'Oh come on now, enter "rock", "paper", or "scissors" you goofy goober!');
      assert.equal(rockPaperScissors('r oc k', 'c issors'), 'Oh come on now, enter "rock", "paper", or "scissors" you goofy goober!');
      assert.equal(rockPaperScissors('wassup', 'chicken'), 'Oh come on now, enter "rock", "paper", or "scissors" you goofy goober!');
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();
}
