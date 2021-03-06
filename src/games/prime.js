import getRandom from '../utils';
import startGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const generateGameData = () => {
  const question = getRandom(1, 100);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

  return [correctAnswer, question];
};

export default () => startGame(description, generateGameData);
