#!/usr/bin/env node
import greeting from '../greeting.js';
import getRandomIntof100 from '../getRandomIntof100.js';
import game from '../src/index.js';

const getRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const name = greeting();
console.log('What is the result of the expression?');

game(getRandomIntof100, getRightAnswer, name);
