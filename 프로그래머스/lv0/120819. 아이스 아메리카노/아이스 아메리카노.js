function solution(money) {
    var answer = [];
    const cnt = Math.floor(money / 5500);
    answer.push(cnt);
    answer.push(money - (5500 * cnt));
    return answer;
}