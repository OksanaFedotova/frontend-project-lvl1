import { getRandomNumber } from '../generalFunctions.js';

export const description = 'What number is missing in the progression?';

export const gameProgression = () => {
  const firstElement = getRandomNumber(0, 50);
  const length = getRandomNumber(5, 11);
  const difference = getRandomNumber(1, 6);
  const arr = new Array(length).fill(0);
  const question = arr.map((element, index) => {
    let num = element;
    num = firstElement + index * difference;
    return num;
  });
  const hiddenElIndex = getRandomNumber(0, length);
  const correctAnswer = question.splice(hiddenElIndex, 1, '..')[0];
  return [question, correctAnswer];
};
