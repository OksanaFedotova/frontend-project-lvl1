import { getRandomNumber } from '../generalFunctions.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const makeRound = () => {
  const question = getRandomNumber(0, 200);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
