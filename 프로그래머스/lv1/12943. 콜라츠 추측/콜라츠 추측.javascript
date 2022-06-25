function solution(num, answer = 0) {
   
    if (num === 1 && !answer) return 0;
    if (answer === 500) return -1;
    if (num % 2 === 0) {
        answer++;
        num = num / 2;
        return solution(num, answer);
    }
    if (num % 2 === 1 && num !== 1) {
        answer++;
        num = num * 3 + 1;
        return solution(num, answer);
    }
    
    return answer;
}