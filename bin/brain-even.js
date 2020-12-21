import readlineSync from 'readline-sync';
import {greeting} from '../src/cli.js';
import {userName} from '../src/cli.js';
import {getRandomNumber} from '../src/generalFunctions.js';

const isEven = (num) => {
    return (num % 2 == 0)? true: false;
} //проверка на четность

const getCorrectAnswer = (number) => {
    return isEven(number)? "yes": "no"; 
} //функция получения правильного ответа

greeting(); //приветствие

console.log('Answer "yes" if the number is even, otherwise answer "no".'); //условия

for (let i = 0; i < 3; i++) {
    const randomNumber = getRandomNumber(0, 101); //получение числа
    console.log('Question: ' + randomNumber); //задать вопрос пользователю
    const userAnswer = readlineSync.question('Your answer: '); // получить ответ пользователя
    const correctAnswer = getCorrectAnswer(randomNumber); //получить правильный ответ
    if (correctAnswer == userAnswer) {
        console.log("Correct!");
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}` );
        break;
    }
    if (i == 2) {
        console.log(`Congratulations, ${userName}`)
    }
}








