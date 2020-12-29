import { getRandomNumber } from '../generalFunctions.js';

const getDivisor = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
};

export const description = 'Find the greatest common divisor of given numbers.';

export const gameGcd = () => {
  const randomNumberOne = getRandomNumber(1, 101);
  const randomNumberTwo = getRandomNumber(1, 101);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const firstNumberDivisors = getDivisor(randomNumberOne);
  const secondNumberDivisors = getDivisor(randomNumberTwo);
  const commonDivisors = firstNumberDivisors.filter(
    (divisor) => secondNumberDivisors.includes(divisor),
  );
  const correctAnswer = Math.max(...commonDivisors);

  return [question, correctAnswer];
};
