const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = 0;

answer =
  input
    .map((el: number) => el * el)
    .reduce((acc: number, cur: number) => acc + cur, 0) % 10;
console.log(answer);