function solution(n) {
    let answer = 0;
    let cnt = 0;
    
    while (cnt < n) {
        answer += 1;
        if (answer % 3 !== 0 && !answer.toString().includes('3')) cnt++;
    }
    
    return answer;
}