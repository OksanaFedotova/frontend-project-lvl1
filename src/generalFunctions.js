/* eslint-disable default-case */
// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min)) + min
); // функция генерация случайного числа
