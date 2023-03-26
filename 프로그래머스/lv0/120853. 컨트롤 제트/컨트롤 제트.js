function solution(s) {
    let temp = s.split(' ').map((el) => Number(el));
    let answer = 0;
    
    for (let i = 0; i < temp.length; i++) {
        if (Number.isNaN(temp[i])) temp.splice(i - 1, 1);
    }
    temp.forEach((el) => {
        if (!Number.isNaN(el)) answer += el;
    })
    
    return answer;
}