const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input = input[1];
input = input.split(' ').map((item) => +item);
function solution(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return console.log(min + ' ' + max);
}
solution(input);