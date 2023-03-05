function solution(my_string) {
  let arr = [...my_string];
  let answer = 0;
  arr.map((el) => {
    if (!isNaN(Number(el))) {
      answer = answer + Number(el);
    }
  });
  return answer;
}