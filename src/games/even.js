import { getRandomNumber } from '../generalFunctions.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const makeRound = () => {
  const isEven = (num) => ((num % 2 === 0));
  const question = getRandomNumber(0, 101);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
