#!/usr/bin/env node
import greeting from '../greeting.js';
import { getRandomIntof100 as random } from '../getRandomIntof100.js';
import game from '../src/index.js';

const getRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

game(random, getRightAnswer, name);
