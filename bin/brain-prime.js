#!/usr/bin/env node

import { makeGame, getRandomIntInclusive as random } from '../src/game-maker.js';

const rules = `Answer 'yes' if given number is prime. Otherwise answer 'no'`;

const createQuestionAndCorrectAnswer = () => {
    const number = random(0, 1000);
    return {
        question: `Question: ${number}`,
        correctAnswer: isPrime(number) ? 'yes' : 'no',
    };
};

const isPrime = (number) => {
    for (let i = 2; i * i <= number; i++)
        if (number % i === 0)
          return false; 
    return number > 1;
}

const gameDescription = {
    rules, createQuestionAndCorrectAnswer,
};

makeGame(gameDescription);