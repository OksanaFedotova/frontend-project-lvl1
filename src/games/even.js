import { getRandomNumber } from '../generalFunctions.js';

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'; // условия

export const makeRound = () => {
  const isEven = (num) => ((num % 2 === 0));
  const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
  const question = getRandomNumber(0, 101);
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};
