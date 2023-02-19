const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((num: string | number) => +num);

/*
  * input 배열의 모든 요소를 더해서 100을 뺀 값 = 나머지 2명의 난쟁이의 키의 합
  1. 이중 for문으로 i + j = sum 이 되는 i, j를 찾는다.
  2. input 배열에 i, j 를 push
  2. input 배열을 Set으로 중복을 제거
  4. sort a-b로 오름차순 정렬
  5. 하나씩 출력

 */

function solution(input: number[]) {
  let answer: number[] = [];

  /** sum: 나머지 난쟁이 2명의 키의 합 */
  const sum = input.reduce((acc, cur) => (acc += cur), 0) - 100;

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === sum) {
        answer = input.filter((el) => el !== input[i] && el !== input[j]);
        break;
      }
    }
  }

  answer.sort((a, b) => a - b).forEach((el) => console.log(el));
}
solution(input);
