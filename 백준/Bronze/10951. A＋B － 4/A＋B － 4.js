const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let newArr = arr[i];
    newArr = newArr
      .toString()
      .split(' ')
      .map((item) => +item);
    let [A, B] = newArr;
    console.log(A + B);
  }
}
solution(input);
