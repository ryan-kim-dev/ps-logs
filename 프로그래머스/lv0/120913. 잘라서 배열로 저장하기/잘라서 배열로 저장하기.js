function solution(my_str, n) {
    let answer = [];
    let temp = [...my_str];
    while (temp.length) {
        answer.push(temp.splice(0, n).join(''));
    }
    
    return answer;
}