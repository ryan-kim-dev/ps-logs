function solution(array) {
    // 이중 for문으로 문자열로 바꿔서 인덱스로 비교
    let temp = array.map((el) => String(el));
    const target = '7';
    let answer = 0;
    
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            if (temp[i][j] === target) answer += 1;
        }
    }
    
    return answer;
}