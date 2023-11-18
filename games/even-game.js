import getRandomIntof100 from '../getRandomIntof100.js';

const getRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const random = getRandomIntof100;

export { getRightAnswer, random };
