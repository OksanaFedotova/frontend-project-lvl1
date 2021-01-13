import { getRandomNumber } from '../generalFunctions.js';

const getDivisors = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
};

const getGCD = (firstNumber, secondNumber) => {
  const firstNumberDivisors = getDivisors(firstNumber);
  const secondNumberDivisors = getDivisors(secondNumber);
  const commonDivisors = firstNumberDivisors.filter(
    (divisor) => secondNumberDivisors.includes(divisor),
  );
  const GCD = Math.max(...commonDivisors);
  return GCD;
};

export const description = 'Find the greatest common divisor of given numbers.';

export const makeRound = () => {
  const randomNumberOne = getRandomNumber(1, 101);
  const randomNumberTwo = getRandomNumber(1, 101);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = String(getGCD(randomNumberOne, randomNumberTwo));
  return [question, correctAnswer];
};
