import readlineSync from 'readline-sync/lib/readline-sync.js';

const game = (random, getRightAnswer, name) => {
  for (let i = 1; i < 4; i += 1) {
    const quest = random();
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== getRightAnswer(quest)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${getRightAnswer(quest)}.\nLet's try again, ${name}`);
      break;
    }
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default game;
