function solution(num, k) {
    let temp = num.toString().split('');
    let answer = -1;
    
    for (let i = 0; i < temp.length; i++) {
        if (Number(temp[i]) === k) return i + 1;
    }
    
    return answer;
}