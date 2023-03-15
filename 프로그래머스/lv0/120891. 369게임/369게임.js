function solution(order) {
    let temp = order.toString().split('');
    let answer = 0;
    
    for (let i = 0; i < temp.length; i++) {
        if ([3, 6, 9].includes(Number(temp[i]))) answer += 1;
    }
    
    return answer;

}