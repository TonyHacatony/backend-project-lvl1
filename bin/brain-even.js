#!/usr/bin/env node

import { makeGame, getRandomIntInclusive as random } from '../src/game-maker.js';

const rules = `Answer 'yes' if the number is even, otherwise answer 'no'.`;

const createQuestionAndCorrectAnswer = () => {
    const number = random(0, 1000);
    return {
        question: `Question: ${number}`,
        correctAnswer: number % 2 === 0 ? 'yes' : 'no',
    };
};

const gameDescription = {
    rules, createQuestionAndCorrectAnswer,
};

makeGame(gameDescription);