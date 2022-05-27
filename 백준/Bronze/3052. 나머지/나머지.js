const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i] % 42;
    newArr.push(num);
  }
  const count = new Set(newArr);
  console.log(count.size);
}
solution(input);