import { getRandomNumber } from '../generalFunctions.js';

export const gameRules = 'What number is missing in the progression?';

const makeProgression = (length, firstMember, difference) => {
  const arr = new Array(length).fill(0);
  const progression = arr.map((element, index) => {
    let num = element;
    num = firstMember + index * difference;
    return num;
  });
  return progression;
};

export const makeRound = () => {
  const firstElement = getRandomNumber(0, 50);
  const length = getRandomNumber(5, 11);
  const difference = getRandomNumber(1, 6);
  const progression = makeProgression(length, firstElement, difference);
  const hiddenElIndex = getRandomNumber(0, length);
  const correctAnswer = `${(progression.splice(hiddenElIndex, 1, '..')[0])}`;
  const question = progression.join(' ');
  return [question, correctAnswer];
};
