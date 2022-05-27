const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(A, B) {
  if (A > B) {
    console.log('>');
  } else if (A < B) {
    console.log('<');
  } else if (A === B) {
    console.log('==');
  }
}
solution(input[0], input[1]);