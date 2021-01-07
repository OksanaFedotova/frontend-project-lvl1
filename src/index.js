import readlineSync from 'readline-sync';
import { greet } from './cli.js';

const playGame = (getGameSpecific, conditions) => {
  const userName = greet();
  console.log(conditions);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getGameSpecific();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line eqeqeq
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
