function solution(my_string) {
  // 문자열을 임의의 문자로 치환한다
  // 치환한 배열 요소를 문자열로 합치고 다시 임의의 문자를 기준으로 split
  // 숫자만 더한다
  let answer = 0;

  let temp = [...my_string]
    .map((el) => (isNaN(el) ? '*' : el))
    .join('')
    .split('*');

  for (let i = 0; i < temp.length; i++) {
    if (!isNaN(Number(temp[i]))) {
      answer += Number(temp[i]);
    }
  }

  return answer;
}