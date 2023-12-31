#!/usr/bin/env node
import greeting from '../greeting.js';
import { random, getRightAnswer } from '../games/gcd-game.js';
import game from '../src/index.js';

const name = greeting();
console.log('Find the greatest common divisor of given numbers.');

game(random, getRightAnswer, name);
