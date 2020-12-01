const fs = require('fs').promises;
const path = require('path');

const main = async () => {
  const data = await fs.readFile(path.join(__dirname, 'data/data.txt'), 'utf-8');
  const numbers = data.split('\n');
  for (let i = 0; i < numbers.length; i++) {
    const first = parseInt(numbers[i]);
    for (let j = 1; j < numbers.length; j++) {
      const second = parseInt(numbers[j]);
      for (let k = 0; k < numbers.length; k++) {
        const third = parseInt(numbers[k]);
        const sum = first + second + third;
        if (sum === 2020) {
          console.log(`${first} + ${second} + ${third} = ${sum}`);
          const answer = first * second * third;
          console.log(`ANSWER: ${first} * ${second} * ${third} = ${answer}`);
          return;
        }
      }
    }
  }
};

main();
