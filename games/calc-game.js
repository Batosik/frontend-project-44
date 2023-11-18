import getRandomIntof100 from '../getRandomIntof100.js';

const random = () => {
  const arr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  return `${getRandomIntof100()} ${arr[randomIndex]} ${getRandomIntof100()}`;
};

const getRightAnswer = (quest) => {
  const resoult = new Function(`return ${quest}`);
  return resoult().toString();
};

export { getRightAnswer, random };
