import { getRandom, getProgression } from '../extra';
import { startGame } from '..';

const rules = 'What number is missing in the progression?';

const findNumber = () => {
  const progressionLength = 10;
  const progressionStart = getRandom(1, 100);
  const progressionStep = getRandom(1, 6);
  const hiddenElement = getRandom(1, progressionLength);

  const progressionArray = getProgression(progressionLength, progressionStart, progressionStep);

  const correct = `${progressionArray.splice(hiddenElement, 1, '..')}`;
  const question = progressionArray.join(' ');

  return [correct, question];
};

export default () => startGame(rules, findNumber);
