// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min)) + min
); // функция генерации случайного числа
