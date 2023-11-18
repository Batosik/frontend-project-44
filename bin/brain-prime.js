#!/usr/bin/env node
import greeting from '../greeting.js';
import { random, getRightAnswer } from '../games/prime-game.js';
import game from '../src/index.js';

const name = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
game(random, getRightAnswer, name);
