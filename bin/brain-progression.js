#!/usr/bin/env node

import { makeGame, getRandomIntInclusive as random } from '../src/game-maker.js';

const rules = `What number is missing in the progression?`;

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === Number(userAnswer);

const makeProgressionWithAnswer = () => {
    const startNumber = random(1, 50);
    const step = random(3, 20);
    const length = random(5, 10);
    const skippedIndex = random(0, length - 1);

    let progression = [startNumber];
    for (let i = 1; i < length; i += 1) {
        progression.push(progression[i - 1] + step);
    }

    let answer = progression[skippedIndex];
    progression[skippedIndex] = '..';
    return [progression, answer];
};

const createQuestionAndCorrectAnswer = () => {
    const [progression, answer] = makeProgressionWithAnswer();
    return {
        question: `Question: ${progression.join(' ')}`,
        correctAnswer: answer,
    };
};

const gameDescription = {
    rules, createQuestionAndCorrectAnswer, isCorrectAnswer,
};

makeGame(gameDescription);