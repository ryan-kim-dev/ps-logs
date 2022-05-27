const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(arr) {
  let T = Number(arr[0]);
  for (let i = 1; i <= T; ++i) {
    let newArr = arr[i];
    newArr = newArr
      .toString()
      .split(' ')
      .map((item) => +item);
    let [A, B] = newArr;
    console.log('Case #' + i + ': ' + (A + B));
  }
}
solution(input);