import readlineSync from 'readline-sync';

export const askUser = (message) => readlineSync.question(message);

export default askUser;
