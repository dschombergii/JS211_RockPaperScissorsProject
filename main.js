
'use strict';

const gameMode = () => {
  let gameMode = document.getElementById('1p-2p').value
  if (gameMode === '1-player') {
    document.getElementById('p2-input').classList.add('disappear')
    console.log('1-player')
  }
  else if (gameMode === '2-player') {
    document.getElementById('p2-input').classList.remove('disappear')
    console.log('2-player')
  }
}

const rockPaperScissors = (hand1, hand2) => {

  let mode = document.getElementById('1p-2p').value

  hand1 = document.getElementById('p1').value.toLowerCase().trim()

  if (mode === '1-player'){
    console.log("1 player")
    hand2 = (['rock', 'paper', 'scissors', 'flip'])[Math.floor(Math.random()*4)];
  } 
  else if (mode === '2-player') {
    hand2 = document.getElementById('p2').value.toLowerCase().trim()
  }

  document.getElementById("left-hand").classList.add("leftHandAnim")
  document.getElementById("right-hand").classList.add("rightHandAnim")
  document.getElementById("shoot-button").classList.add('disappear')
  document.getElementById("p1-input").classList.add('disappear')
  document.getElementById("p2-input").classList.add('disappear')


  setTimeout(function () {
    document.getElementById('left-hand').src = 'images/' + hand1 + '-left.png'
    document.getElementById('right-hand').src = 'images/' + hand2 + '-right.png'
  }, 3000)

  setTimeout(function () {

    if ((hand1 == 'rock' && hand2 == 'rock') || (hand1 == 'paper' && hand2 == 'paper') || (hand1 == 'scissors' && hand2 == 'scissors')) {
      document.getElementById('display-result').innerHTML = "<br>It's a tie!"
    } else if
      ((hand1 == 'flip' && hand2 == 'flip') || (hand1 == 'flip' && hand2 == 'flip') || (hand1 == 'flip' && hand2 == 'flip')) {
      document.getElementById('display-result').innerHTML = '<br>Drama...<br>Time to take a break!'
    } else if
      ((hand1 == 'rock' && hand2 == 'scissors') || (hand1 == 'paper' && hand2 == 'rock') || (hand1 == 'scissors' && hand2 == 'paper')) {
      document.getElementById('display-result').innerHTML = '<br>Player 1 Wins!'
    } else if ((hand2 == 'rock' && hand1 == 'scissors') || (hand2 == 'paper' && hand1 == 'rock') || (hand2 == 'scissors' && hand1 == 'paper')) {
      document.getElementById('display-result').innerHTML = '<br>Player 2 Wins!'
    } else if
      ((hand1 == 'flip' && hand2 == 'scissors') || (hand1 == 'flip' && hand2 == 'rock') || (hand1 == 'flip' && hand2 == 'paper')) {
      document.getElementById('display-result').innerHTML = '<br>Player 1 is Pissed!<br>Talk it out...'
    } else if ((hand2 == 'flip' && hand1 == 'scissors') || (hand2 == 'flip' && hand1 == 'rock') || (hand2 == 'flip' && hand1 == 'paper')) {
      document.getElementById('display-result').innerHTML = '<br>Player 2 is Pissed!<br>Talk it out...'
    } else {
      document.getElementById('display-result').innerHTML = 'Oh come on, enter "rock", "paper", or "scissors", ya goofy goober!'
      document.getElementById('left-hand').src = 'images/rock-left.png';
      document.getElementById('right-hand').src = 'images/rock-right.png';
    }
  }, 3500)

  setTimeout(function () {
    reset()
  }, 8000)
}



const reset = () => {
  document.getElementById("left-hand").src="images/rock-left.png"
  document.getElementById("right-hand").src="images/rock-right.png"
  document.getElementById("left-hand").classList.remove("leftHandAnim")
  document.getElementById("right-hand").classList.remove("rightHandAnim")
  document.getElementById("p1-input").classList.remove('disappear')
  document.getElementById("p2-input").classList.remove('disappear')
  document.getElementById("shoot-button").classList.remove('disappear')
  document.getElementById("display-result").innerHTML = ""
  document.getElementById("p1").value = ""
  document.getElementById("p2").value = ""
  gameMode()
}







