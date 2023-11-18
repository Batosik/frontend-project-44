import getRandomIntof100 from '../getRandomIntof100.js';

const random = () => {
  const diff = Math.floor(1 + Math.random() * 10);
  const firstElement = getRandomIntof100();
  const arr = [firstElement];
  for (let i = 0; i < 10; i += 1) {
    const nextElement = arr[i] + diff;
    arr.push(nextElement);
  }
  arr[Math.floor(2 + Math.random() * 9)] = '..';
  return arr.join(' ');
};

const getRightAnswer = (quest) => {
  const arr = quest.split(' ');
  const index = arr.indexOf('..');
  const missingNumber = (Number(arr[index - 1]) + Number(arr[index + 1])) / 2;
  return missingNumber.toString();
};

export { getRightAnswer, random };
