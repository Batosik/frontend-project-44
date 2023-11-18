#!/usr/bin/env node
import greeting from '../greeting.js';
import { random, getRightAnswer } from '../games/even-game.js';
import game from '../src/index.js';

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

game(random, getRightAnswer, name);
