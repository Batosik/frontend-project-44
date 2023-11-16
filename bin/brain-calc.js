#!/usr/bin/env node
import greeting from '../greeting.js';
import { getRandomIntof100 } from '../getRandomIntof100.js';
import game from '../src/index.js';

const random = () => {
  const arr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  return `${getRandomIntof100()} ${arr[randomIndex]} ${getRandomIntof100()}`;
};

const getRightAnswer = (quest) => {
  const resoult = new Function(`return ${quest}`);
  return resoult().toString();
};

const name = greeting();
console.log('What is the result of the expression?');

game(random, getRightAnswer, name);
