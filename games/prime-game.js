import getRandomIntof100 from '../getRandomIntof100.js';

const getRightAnswer = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const random = getRandomIntof100;

export { getRightAnswer, random };
