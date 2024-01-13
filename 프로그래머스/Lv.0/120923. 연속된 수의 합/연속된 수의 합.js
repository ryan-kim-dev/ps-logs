function solution(num, total) {
    let sum = 0;
    let answer = [];

    for (let i = -num; i <= total; i++) {
        sum = 0;
        answer = [];

        for (let j = 0; j < num; j++) {
            answer.push(i + j);
            sum += i + j;
        }

        if (sum === total) {
            return answer;
        }
    }

    return [];
}
