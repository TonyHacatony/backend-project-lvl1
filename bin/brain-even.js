#!/usr/bin/env node

import { message } from '../src/cli.js';

const isCorrectAnswer = (userAnswer, number) => {
    return (number % 2 === 0 && userAnswer === 'yes') || (number % 2 !== 0 && userAnswer === 'no');
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const game = () => {
    console.log('Welcome to the Brain Games!');
    const name = message('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let correctAnsersInRow = 0;
    while (correctAnsersInRow < 3 && correctAnsersInRow >= 0) {
        const number = getRandomInt(0, 1000);
        console.log(`Question: ${number}`);
        const userAnswer = message('Your answer: ');
        if (isCorrectAnswer(userAnswer, number)) {
            console.log('Correct!');
            correctAnsersInRow += 1;
        } else {
            correctAnsersInRow = -1;
            const correctAnswer = number % 2 === 0 ? 'yes' : 'no'; 
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        }
    }
    if (correctAnsersInRow >= 3) {
        console.log(`Congratulations, ${name}!`);
    } else {
        console.log(`Let's try again, ${name}!`);
    }
};

game();