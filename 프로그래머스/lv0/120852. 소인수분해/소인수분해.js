function solution(n) {
  let answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      if (!answer.includes(i)) {
        answer.push(i);
      }
      n = n / i;
    }
  }

  return answer.sort((a, b) => a - b);
}
