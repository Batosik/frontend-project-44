#!/usr/bin/env node
import greeting from '../greeting.js';
import getRandomIntof100 from '../getRandomIntof100.js';
import game from '../src/index.js';

const random = () => `${getRandomIntof100()} ${getRandomIntof100()}`;

const getRightAnswer = (quest) => {
  const numers = quest.split(' ');
  const min = Math.min(numers[0], numers[1]);
  for (let i = min; i >= 1; i -= 1) {
    if (numers[0] % i === 0 && numers[1] % i === 0) {
      return i.toString();
    }
  }
  return '1';
};

const name = greeting();
console.log('Find the greatest common divisor of given numbers.');

game(random, getRightAnswer, name);
