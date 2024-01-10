# 백준 인풋값 정제

## fs 모듈 사용 시 예제

### 0. input 값 가져오기

```js
import fs from 'fs';
// filePath는 로컬에서 input.txt 파일 하나 만들어서 테스트해보기 위해 삼항 연산자 사용. 제출용은 '/dev/stdin'만 써도 상관없음
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
```

- 2~6 예시에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(Number)를 추가

### 1. 하나의 값을 입력받을 때

```js
// 1. 하나의 값을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim();
```

### 2. 공백으로 구분된 한 줄의 값들을 입력받을 때

```js
const input = fs.readFileSync(filePath).toString().trim().split(' ');
```

### 3. 여러 줄의 값들을 입력받을 때

```js
const input3 = fs.readFileSync(filePath).toString().trim().split('\n');
```

### 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때

```js
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);
```

### 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때

```js
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
```

### 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때

```js
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n + 1);
const [m, ...m_arr] = input.slice(n + 1);
```

## readline 모듈 사용 시

### 0. input 가져오기

```js
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  input.push(line);
}).on('close', function () {
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D 입력하면 호출(입력의 종료)
  console.log(input);
  process.exit();
});
```
