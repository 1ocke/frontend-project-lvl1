import readlineSync from 'readline-sync';

const displayGreetings = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  return userName;
};

export { displayGreetings, getUserName };
