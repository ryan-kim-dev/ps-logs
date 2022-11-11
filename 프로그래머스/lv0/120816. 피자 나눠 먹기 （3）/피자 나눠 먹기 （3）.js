function solution(slice, n) {
    let answer = 1;
    
    for (let i = 1; i < 101; i++) {
        if (((slice * i) / n) < 1) {
            answer++;
        }
    }
        return answer;
    
}