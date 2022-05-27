const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(arr, x, y, z) {
  let ans = 0;
  if (x === y && y === z) {
    ans = x * 1000 + 10000;
  } else if (x === y || y === z || x === z) {
    if (x === y && x !== z) {
      ans = 1000 + x * 100;
    } else if (y === z && y !== x) {
      ans = 1000 + y * 100;
    } else {
      ans = 1000 + x * 100;
    }
  } else if (x !== y && y !== z && x !== z) {
    arr.sort();
    ans = arr[2] * 100;
  }
  console.log(ans);
}
solution(input, input[0], input[1], input[2]);
