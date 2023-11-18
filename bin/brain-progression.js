#!/usr/bin/env node
import greeting from '../greeting.js';
import { random, getRightAnswer } from '../games/progression-game.js';
import game from '../src/index.js';

const name = greeting();
console.log('What number is missing in the progression?');
game(random, getRightAnswer, name);
