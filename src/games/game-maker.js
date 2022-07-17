import { askUser } from '../cli/cli.js';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = askUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askUserAnswer = () => 'Your answer: ';

const defaultIsCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

const msgOnCorrectAnswer = () => 'Correct!';

const updateGameInfoOnCorrectAnswer = (acc) => (acc !== undefined ? acc + 1 : 1);

const msgOnIncorrectAnswer = (correctAnswer, userAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

const updateGameInfoOnIncorrectAnswer = () => -1;

const isGameFinished = (result) => result >= 3 || result < 0;

const finalLog = (gameInfo) => {
  const { playerName, result } = gameInfo;
  if (result >= 3) {
    return `Congratulations, ${playerName}!`;
  }
  return `Let's try again, ${playerName}!`;
};

const game = (gameDescription) => {
  const {
    rules, createQuestionAndCorrectAnswer, isCorrectAnswer = defaultIsCorrectAnswer,
  } = gameDescription;

  const name = hello();
  console.log(rules);
  const gameInfo = { playerName: name, isGameFinished: false };

  while (!gameInfo.isGameFinished) {
    const { question, correctAnswer } = createQuestionAndCorrectAnswer();
    console.log(question);
    const userAnswer = askUser(askUserAnswer());
    if (isCorrectAnswer(correctAnswer, userAnswer)) {
      console.log(msgOnCorrectAnswer(correctAnswer));
      gameInfo.result = updateGameInfoOnCorrectAnswer(gameInfo.result);
    } else {
      console.log(msgOnIncorrectAnswer(correctAnswer, userAnswer));
      gameInfo.result = updateGameInfoOnIncorrectAnswer(gameInfo.result);
    }
    gameInfo.isGameFinished = isGameFinished(gameInfo.result);
  }
  console.log(finalLog(gameInfo));
};

export const getRandomIntInclusive = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export const makeGame = (gameDescription) => game(gameDescription);
