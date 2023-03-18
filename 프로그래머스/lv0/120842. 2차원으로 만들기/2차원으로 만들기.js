function solution(num_list, n) {
    let temp = [...num_list];
    let answer = [];
    
    while (temp.length) {
        answer.push(temp.splice(0, n));
    }
    
    return answer;
}