const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  // 공백을 구분 기호로 사용하여 입력 문자열을 분할하고 결과 배열을 input 변수에 할당하는 콜백함수
  input = line.split(' ');
}).on('close', function () {
    // Number(input[0])을 사용하여 숫자로 변환한 후 input 배열의 첫 번째 요소를 인쇄하는 콜백함수
    // input[0]이 주어진 n이다.
    const num = Number(input[0]);
    let star = '';

    for (let i = 0; i < num; i++) {
        star += '*';
        console.log(star);
    }
});
