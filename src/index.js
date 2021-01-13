import readlineSync from 'readline-sync';
import greet from './cli.js';

const playGame = (makeRound, description) => {
  const userName = greet();
  console.log(description);
  const roundsNumber = 3;
  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
