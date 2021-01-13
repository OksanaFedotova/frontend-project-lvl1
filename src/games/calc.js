import { getRandomNumber } from '../generalFunctions.js';

const calculate = (numberOne, sign, numberTwo) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    default:
  }
  return result;
};

export const description = 'What is the result of the expression?';

export const makeRound = () => {
  const randomNumberOne = getRandomNumber(0, 50);
  const randomNumberTwo = getRandomNumber(0, 50);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, 3);
  const operator = operators[index];
  const question = `${randomNumberOne} ${operator} ${randomNumberTwo}`;

  const correctAnswer = String(calculate(randomNumberOne, operator, randomNumberTwo));

  return [question, correctAnswer];
};
