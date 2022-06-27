const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// N개의 숫자를 가진 A 배열에서 M개의 숫자를 가진 B 배열의 요소가 있으면 1, 없으면 0 리턴
const N = Number(input[0]);
const M = Number(input[2]);
let A = input[1].split(' ').map(el => +el);
A = A.sort((a, b) => a - b);
let B = input[3].split(' ').map(el => +el);

function binerySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return 1;
    if (arr[mid] > target) {
      end = mid - 1;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    }
  }
  return 0; // 찾는 요소가 없으면 0 리턴.
}

const result = B.map(el => binerySearch(A, el));
console.log(result.join('\n'));
