function solution(s) {
    // indexOf === lastIndexOf 가 true면 한 번만 등장한 문자
    let temp = [...s];
    let answer = [];
    
    temp.forEach((el) => {
        if (temp.indexOf(el) === temp.lastIndexOf(el)) {
            answer.push(el);
        }
    });
    
    return answer.sort().join('');
}