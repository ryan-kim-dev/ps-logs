function solution(sides) {
    let answer = [];
    
    for (let i = 1; i < sides[0] + sides[1]; i++) {
        let temp = [i, ...sides];
        let max = Math.max(...temp);
        let idx = temp.indexOf(max);
        temp.splice(idx, 1);
        
        let sum = temp[0] + temp[1];
        if (i <= max && max < sum) answer.push(i);
    }
    
    return answer.length;
}