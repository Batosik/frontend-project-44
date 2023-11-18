#!/usr/bin/env node
import greeting from '../greeting.js';
import { random, getRightAnswer } from '../games/calc-game.js';
import game from '../src/index.js';

const name = greeting();
console.log('What is the result of the expression?');

game(random, getRightAnswer, name);
