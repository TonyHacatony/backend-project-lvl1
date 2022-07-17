import { askUser } from '../src/cli.js';

const defaultHello = () => {
    console.log('Welcome to the Brain Games!');
    const name = askUser('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

const defaultAskUserAnswer = () => 'Your answer: ';

const defaultIsCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

const defaultMsgOnCorrectAnswer = () => 'Correct!';

const defaultUpdateGameInfoOnCorrectAnswer = (acc) => acc !== undefined ? acc + 1 : 1;

const defaultMsgOnIncorrectAnswer = (correctAnswer, userAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

const defaultUpdateGameInfoOnIncorrectAnswer = () => -1;

const defaultIsGameFinished = (result) => result >= 3 || result < 0;

const defaultFinalLog = (gameInfo) => {
    const { playerName, result } = gameInfo;
    if (result >= 3) {
        return `Congratulations, ${playerName}!`;
    } else {
        return `Let's try again, ${playerName}!`;
    }
};

const game = (gameDescription) => {
    const {
        rules, createQuestion, prepareCorrectAnswer,
        hello = defaultHello,
        askUserAnswer = defaultAskUserAnswer,
        isCorrectAnswer = defaultIsCorrectAnswer,
        msgOnCorrectAnswer = defaultMsgOnCorrectAnswer,
        updateGameInfoOnCorrectAnswer = defaultUpdateGameInfoOnCorrectAnswer,
        msgOnIncorrectAnswer = defaultMsgOnIncorrectAnswer,
        updateGameInfoOnIncorrectAnswer = defaultUpdateGameInfoOnIncorrectAnswer,
        isGameFinished = defaultIsGameFinished,
        finalLog = defaultFinalLog,
    } = gameDescription;

    const name = hello();
    console.log(rules);
    const gameInfo = {
        playerName: name,
        isGameFinished: false,
    };

    while (!gameInfo.isGameFinished) {
        const question = createQuestion();
        console.log(question);
        console.log('start correct answer');
        const correctAnswer = prepareCorrectAnswer(question);
        console.log('finish correct answer');
        console.log('start user ask');
        const userAnswer = askUser(askUserAnswer());
        console.log('finish user ask');
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
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const makeGame = (gameDescription) => game(gameDescription);