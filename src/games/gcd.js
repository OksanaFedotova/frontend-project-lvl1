import { getRandomNumber, getDivisor } from '../generalFunctions.js';

export const description = 'Find the greatest common divisor of given numbers.';

export const gameGcd = () => {
  const randomNumberOne = getRandomNumber(0, 101);
  const randomNumberTwo = getRandomNumber(0, 101);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const firstNumberDivisors = getDivisor(randomNumberOne);
  const secondNumberDivisors = getDivisor(randomNumberTwo);
  const commonDivisors = firstNumberDivisors.filter(
    (divisor) => secondNumberDivisors.includes(divisor),
  );
  const correctAnswer = Math.max(...commonDivisors);

  return [question, correctAnswer];
};
