function solution(n) {
    let temp = [...String(n)];
    let answer = 0;
    
    for (let i = 0; i < temp.length; i++) {
        answer += Number(temp[i]);
    }
    return answer;
}