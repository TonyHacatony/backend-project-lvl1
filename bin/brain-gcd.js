#!/usr/bin/env node

import { makeGame, getRandomIntInclusive as random } from '../src/game-maker.js';

const rules = `Find the greatest common divisor of given numbers.`;

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === Number(userAnswer);

const createQuestionAndCorrectAnswer = () => {
    const firstNumber = random(1, 50);
    const secondNumber = random(1, 50);
    return {
        question: `Question: ${firstNumber} ${secondNumber}`,
        correctAnswer: gcd(firstNumber, secondNumber),
    };
};

const gcd = (first, second) => {
    const remainder = first % second;
    if (remainder === 0) {
        return second;
    }
    return gcd(second, remainder);
};

const gameDescription = {
    rules, createQuestionAndCorrectAnswer, prepareCorrectAnswer, isCorrectAnswer,
};

makeGame(gameDescription);