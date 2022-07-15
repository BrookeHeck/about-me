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

// loops through question and prompts to play guessing game with user
function askQuestions() {
  for (let i = 0; i < 5; i++) {
    let answer = prompt(`Answer y/yes or n/no\n${questionPrompts[i]}`);
    alert(answerPrompts[i][1]);
    if (answerPrompts[i][0] === 2) {
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        correct++;
      }
    } else if (answerPrompts[i][0] === 1) {
      if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'no') {
        correct++;
      }
    }
  }
}
askQuestions();

alert(`Hold on ${username}, I have two more bonus questions for you!`);

//adding a sixth question to the game
function askQuestions6() {
  let isCorrect = false;
  let counter = 0;
  let userInput = 0;
  let ageGuess = 0;
  while (!isCorrect && counter < 3) {
    if(counter === 0) userInput = prompt('Guess my age');
    ageGuess = Number.isInteger(parseInt(userInput)) ? parseInt(userInput) : -1;
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
}
askQuestions6();
// adding a seventh question
function askQuestion7(){
  let countries = [' Canada', ' Germany', ' France', ' Switzerland', ' Luxemburg', ' Belgium'];

  let countryIsRight = false;
  let counter = 0;
  while (!countryIsRight && counter < 6) {
    let answer = prompt('Other than the US, guess a country that I\'ve visited');
    for(let country of countries) {
      if(answer.toLowerCase() === country.toLowerCase().trim()) {
        countryIsRight = true;
        correct++;
        break;
      }
    }
    if(!countryIsRight) alert('Incorrect');
    counter++;
  }


  let str = 'Any of these answers would have been correct.\n';
  alert(str + '\n' + countries);
}
askQuestion7();
// score summary at bottom of webpage
let scoreSummary = document.querySelector('#scoreSummary');
scoreSummary.innerHTML = (`You got ${correct} question${correct === 1 ? '' : 's'} correct out of 7.`);
alert(`Thank you for playing the guessing game ${username}! You got ${correct} question${correct === 1 ? '' : 's'} correct!`);

// display top ten
let topTenArr = [
  'Stillness is the Key', 'Meditations', 'The Alchemist', 'Team of Rivals',
  'The Plant Paradox', 'Letter\'s From a Stoic', '7 Habits of Highly Effective People',
  'Fahrenheit 451', 'Can\'t Hurt Me', 'Ego is the Enemy'];
let list = document.querySelector('#topten');
for (let fav of topTenArr) {
  let listItem = document.createElement('li');
  listItem.innerHTML = fav;
  listItem.setAttribute('class', 'topTenItem');
  list.appendChild(listItem);
}
