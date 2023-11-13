import readlineSync from 'readline-sync/lib/readline-sync.js';

const getRandomIntof100 = () => Math.floor(Math.random() * 100);

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

console.log('Welcome to the Brain Games!');

const name = greeting() 

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
  for (let i = 1; i < 4; i += 1) {
    const random = getRandomIntof100();
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== isEven(random)) {
      console.log(` ${answer} is wrong answer ;(. Correct answer was ${isEven(random)}.\n
      Let's try again, ${name}`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default evenGame;