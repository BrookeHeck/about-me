'use strict';

// guessing game prompts and alerts
let username = prompt('Please enter your name');
alert(`Hi ${username}, here is a guessing game about me!`);

let questionPrompts = [
  'I\'m a Seattle native.',
  'I\'ve ran a marathon.',
  'I have two siblings.',
  'I\'m a huge Green Bay Packers fan!!!!',
  'I have a pilot\'s license.',
];

let answerPrompts = [
  [1, 'No, born and raised in Wisconsin.'],
  [2, 'Barely, but yes. I ran one in Michigan earlier this spring.'],
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
alert(`Hold on ${username}, I have two more bonus questions for you!`);

//adding a sixth question to the game

function checkValid(userInput) {
  if (Number.isInteger(parseInt(userInput))) return parseInt(userInput);
  else return -1;
}

let isCorrect = false;
let counter = 0;
let userInput;
while (!isCorrect && counter < 4) {
  if(counter === 0) userInput = prompt('Guess my age');
  let ageGuess = checkValid(userInput);
  if (ageGuess === -1) userInput = prompt('Please enter an integer. Please try again');
  else if(ageGuess === 25) {
    alert('That\'s correct!');
    correct++;
    isCorrect = true;
  }
  else if (ageGuess < 25) userInput = prompt('That\'s to low. Guess again.');
  else if (ageGuess > 25) userInput = prompt('That\'s to high. Guess again');
  counter++;
}
if(!isCorrect) alert('Sorry, you ran out of guesses. Try the last question.');

// adding a seventh question
let countries = ['canada', 'germany', 'france', 'switzerland', 'luxemburg', 'belgium'];

let countryIsRight = false;
counter = 0;
while (!countryIsRight && counter < 6) {
  let answer = prompt('Other than the US, guess a country that I\'ve visited');
  for(let country of countries) {
    if(answer.toLowerCase() === country) {
      countryIsRight = true;
      correct++;
      break;
    }
  }
  if(!countryIsRight) alert('Incorrect');
  counter++;
}


let str = 'Any of these answers would have been correct.\n';
for(let country of countries) {
  str = str + country[0].toUpperCase() + country.slice(1, country.length) + ', ';
}
str = str.slice(0, str.length - 2);
alert(str);

let scoreSummary = document.querySelector('#scoreSummary');
scoreSummary.innerHTML = (`You got ${correct} questions correct out of 7.`);

// display top ten
let topTenArr = ['fav1', 'fav2', 'fav3', 'fav4', 'fav5', 'fav6', 'fav7', 'fav8', 'fav9', 'fav10'];
let list = document.querySelector('#topten');
for (let fav of topTenArr) {
  let listItem = document.createElement('li');
  listItem.innerHTML = fav;
  listItem.setAttribute('class', 'topTenItem');
  list.appendChild(listItem);
}
