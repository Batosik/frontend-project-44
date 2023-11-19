import getRandomIntof100 from '../getRandomIntof100.js';

const random = () => {
  const arr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arr.length);
  return `${getRandomIntof100()} ${arr[randomIndex]} ${getRandomIntof100()}`;
};

const getRightAnswer = (quest) => {
  const arr = quest.split(' ');
  const num1 = arr[0];
  const num2 = arr[2];
  const operator = arr[1];
  let resoult = 0;
  if (operator === '+') {
    resoult = Number(num1) + Number(num2);
  } else if (operator === '-') {
    resoult = Number(num1) - Number(num2);
  } else if (operator === '*') {
    resoult = Number(num1) * Number(num2);
  }
  return resoult.toString();
};

export { getRightAnswer, random };
