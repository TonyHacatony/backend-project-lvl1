#!/usr/bin/env node

import { getRandomIntInclusive as random, makeGame } from '../src/game-maker.js';

const rules = 'What is the result of the expression?';

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
    default:
      return null;
  }
};

const calculate = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const createQuestionAndCorrectAnswer = () => {
  const firstNumber = random(0, 1000);
  const secondNumber = random(0, 1000);
  const sign = getRandonSign();
  return {
    question: `Question: ${firstNumber} ${sign} ${secondNumber}`,
    correctAnswer: calculate(firstNumber, secondNumber, sign),
  };
};

const gameDescription = {
  rules, createQuestionAndCorrectAnswer, isCorrectAnswer,
};

makeGame(gameDescription);
