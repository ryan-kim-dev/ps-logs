# 백준 인풋값 정제

## fs 모듈 사용 시 예제

### 0. input 값 가져오기

```js
import fs from 'fs';
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
```

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
