function solution(my_string, n) {
    let answer = '';
    answer = [...my_string].map((el) => answer += el.repeat(n));
    return answer[answer.length - 1];
}