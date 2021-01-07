import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
