const fs = require('fs').promises;
const path = require('path');

const main = async () => {
  const data = await fs.readFile(path.join(__dirname, 'data/data.txt'), 'utf-8');
  const numbers = data.split('\n');
  for (let i = 0; i < numbers.length; i++) {
    const first = parseInt(numbers[i]);
    for (let j = 1; j < numbers.length; j++) {
      const second = parseInt(numbers[j]);
      const sum = first + second;
      if (sum === 2020) {
        console.log(`${first} + ${second} = ${sum}`);
        const answer = first * second;
        console.log(`ANSWER: ${first} * ${second} = ${answer}`);
        return;
      }
    }
  }
};

main();
