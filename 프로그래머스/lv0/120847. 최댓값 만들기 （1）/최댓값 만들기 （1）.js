// 1. 가장 큰 수를 찾는다.
// 가장 큰 수가 나오면 
// 2. 두번째 큰 수를 찾는다.
// 1과 2의 수를 곱한 값을 리턴한다.

function solution(numbers) {
   numbers.sort((a, b) => b - a);

    return numbers[0] * numbers[1];
}