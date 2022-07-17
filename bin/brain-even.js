#!/usr/bin/env node

import { makeGame, getRandomIntInclusive as random } from '../src/game-maker.js';

const rules = `Answer 'yes' if the number is even, otherwise answer 'no'.`;

const createQuestion = () => `Question: ${random(0, 1000)}`;

const prepareCorrectAnswer = (question) => {
    const number = question.split(' ')[1];
    return number % 2 === 0 ? 'yes' : 'no';
};

const gameDescription = {
    rules, createQuestion, prepareCorrectAnswer,
};

makeGame(gameDescription);