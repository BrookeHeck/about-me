'use strict';

// guessing game prompts and alerts
let username = prompt('Please enter your name');
alert(`Hi ${username}, here is a guessing game about me!`);

let questionPrompts = [
  'I\'m a Seattle native.',
  'I\'ve been to seven different countries.',
  'I have two siblings.',
  'I\'m a huge Green Bay Packers fan!!!!',
  'I have a pilot\'s license.',
];

let answerPrompts = [
  [1, 'No, born and raised in Wisconsin.'],
  [2, 'Yes! US, Canada, Germany, France, Switzerland, Luxemburg, and Belgium.'],
  [2, 'Yes, an older sister and younger brother'],
  [2, 'Of course, I\'m a fan of all Wisconsin sports teams.'],
  [1, 'No, a future goal of mine though.']
];

let correct = 0;

for (let i = 0; i < 5; i++) {
  let answer = prompt(`Answer y/yes or n/no\n${questionPrompts[i]}`);
  alert(answerPrompts[i][1]);
  if (answerPrompts[i][0] === 2) {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      console.log('correct!');
      correct++;
    } else console.log('sorry, incorrect');
  } else if (answerPrompts[i][0] === 1) {
    if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'no') {
      console.log('correct!');
      correct++;
    } else console.log('sorry, incorrect');
  }
}

alert(`Thank you for playing the guessing game ${username}! You got ${correct} questions correct!`);

//adding a sixth question to the game
function checkValid(answer) {
  if (Number.isInteger(parseInt(answer))) {
    return parseInt(answer);
  } else return -1;
}

alert(`Hold on ${username}, I have two more bonus questions for you!`);
let isCorrect = false;
let ageGuess = prompt('Guess my age');
for (let i = 0; i < 4; i++) {
  ageGuess = checkValid(ageGuess);
  if (ageGuess === -1) {
    ageGuess = prompt('Please enter an integer. Please try again');
  } else if(ageGuess === 25) {
    alert('That\'s correct!');
    correct++;
    isCorrect = true;
    break;
  } else if (ageGuess < 25) {
    ageGuess = prompt('That\'s to low. Guess again.');
  } else if (ageGuess > 25) {
    ageGuess = prompt('That\'s to high. Guess again');
  }
}

if(!isCorrect) {
  alert('Sorry, you ran out of guesses. Try the last question');
}

// adding a seventh question

let scoreSummary = document.querySelector('#scoreSummary');
scoreSummary.innerHTML = (`You got ${correct} questions correct out of 5.`);

// top ten scripts
let topTenArr = ['fav1', 'fav2', 'fav3', 'fav4', 'fav5', 'fav6', 'fav7', 'fav8', 'fav9', 'fav10'];
let list = document.querySelector('#topten');
for (let fav of topTenArr) {
  let listItem = document.createElement('li');
  listItem.innerHTML = fav;
  listItem.setAttribute('class', 'topTenItem');
  list.appendChild(listItem);
}