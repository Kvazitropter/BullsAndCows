import readlineSync from 'readline-sync';
import getRandomNum from './getRandomNum.js';

export default () => {
  console.log('Let\'s play a game! Try to guess four-digit number in five tries');
  console.log('Write your answer, if there is a right digit in the right place I\'ll say "bull"');
  console.log('And if that digit in the wrong place I\'ll say "cow"');
  console.log('Good luck! I think about number...');
  const number = getRandomNum(1000, 9999);
  const numberStr = number.toString();
  for (let round = 1; round <= 5; round += 1) {
    const answer = readlineSync.question('Your guess: ');
    const digits = [...answer];
    if (answer === numberStr) {
      console.log('Bull\'s eye! Congrats!');
      return;
    }
    const reply = digits.reduce((acc, digit, i) => {
      if (numberStr.includes(digit)) {
        if (digit === numberStr[i]) {
          acc.push('bull');
        } else {
          acc.push('cow');
        }
      } else {
        acc.push('_');
      }
      return acc;
    }, []);
    console.log(reply.join(' '));
  }

  console.log(`Unfortunately, you didn't guess... It was ${number}`);
};
