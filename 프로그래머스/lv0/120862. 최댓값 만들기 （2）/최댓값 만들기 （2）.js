function solution(numbers) {
  // 이중 for문
  // i * j 가 기존 값보다 크면 재할당
    // 원소가 최소와 최대 2가지만 있는 경우를 고려해서 초기값 지정 필요
  let answer = numbers[0] * numbers[1];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (answer <= numbers[i] * numbers[j] && i !== j) {
        answer = numbers[i] * numbers[j];
      }
    }
  }

  return answer;
}