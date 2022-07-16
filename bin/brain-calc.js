#!/usr/bin/env node

import { getRandomIntInclusive as random, makeGame } from '../src/game-maker.js';

const rules = `What is the result of the expression?`;

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === Number(userAnswer);

const getRandonSign = () => {
    const number = random(1, 3);
    switch (number) {
        case 1:
            return '+';
        case 2:
            return '-';
        case 3:
            return '*';
    }
};

const createQuestion = () => `Question: ${random(0, 1000)} ${getRandonSign()} ${random(0, 1000)}`;

const calculate = (firstNumber, secondNumber, sign) => {
    switch (sign) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
    }
};

const prepareCorrectAnswer = (question) => {
    const parsedQuestion = question.split(' ');
    const firstNumber = Number(parsedQuestion[1]);
    const sign = parsedQuestion[2];
    const secondNumber = Number(parsedQuestion[3]);
    return calculate(firstNumber, secondNumber, sign);
}

const gameDescription = {
    rules, createQuestion, prepareCorrectAnswer, isCorrectAnswer,
};

makeGame(gameDescription);