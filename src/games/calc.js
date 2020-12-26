import { getRandomNumber, calculate } from '../generalFunctions.js';

export const description = 'What is the result of the expression?';

export const gameCalc = () => {
  const randomNumberOne = getRandomNumber(0, 50);
  const randomNumberTwo = getRandomNumber(0, 50);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, 3);
  const operator = operators[index];
  const question = `${randomNumberOne} ${operator} ${randomNumberTwo}`;

  const correctAnswer = calculate(randomNumberOne, operator, randomNumberTwo);

  return [question, correctAnswer];
};
