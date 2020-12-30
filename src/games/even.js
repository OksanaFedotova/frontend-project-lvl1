import { getRandomNumber } from '../generalFunctions.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".'; // условия

export const gameEven = () => {
  const isEven = (num) => ((num % 2 === 0)); // проверка на четность
  const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no'); // функция получения правильного ответа
  const question = getRandomNumber(0, 101); // получение числа
  const correctAnswer = getCorrectAnswer(question); // получить правильный ответ
  return [question, correctAnswer];
};
