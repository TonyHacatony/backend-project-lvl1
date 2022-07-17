#!/usr/bin/env node

import { makeGame, getRandomIntInclusive as random } from '../src/game-maker.js';

const rules = `Find the greatest common divisor of given numbers.`;

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === Number(userAnswer);

const createQuestion = () => `Question: ${random(1, 50)} ${random(1, 50)}`;

const gcd = (first, second) => {
    const remainder = first % second;
    if (remainder === 0) {
        return second;
    }
    return gcd(second, remainder);
};

const prepareCorrectAnswer = (question) => {
    const parsedQuestion = question.split(' ');
    const firstNumber = parsedQuestion[1];
    const secondNumber = parsedQuestion[2];
    return gcd(firstNumber, secondNumber);
};

const gameDescription = {
    rules, createQuestion, prepareCorrectAnswer, isCorrectAnswer,
};

makeGame(gameDescription);