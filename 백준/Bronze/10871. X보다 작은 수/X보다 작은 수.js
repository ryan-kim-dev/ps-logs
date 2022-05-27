const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(arr) {
  let newArr = arr.splice(0, 1);
  newArr = newArr
    .toString()
    .split(' ')
    .map((item) => +item);
  let [N, X] = newArr;
  arr = arr
    .toString()
    .split(' ')
    .map((item) => +item);
  let ans = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] < X) {
      ans.push(arr[i]);
    }
  }
  console.log(ans.join(' '));
}
solution(input);