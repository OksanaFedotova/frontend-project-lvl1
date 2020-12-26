/* eslint-disable default-case */
export const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}; // функция генерация случайного числа

export const calculate = (numberOne, sign, numberTwo) => {
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
  }
  return result;
};
