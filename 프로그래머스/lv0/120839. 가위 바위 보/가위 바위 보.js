function solution(rsp) {
    // rsp.length === answer.length 다.
    // '2'면 '0'/ '0'이면 '5' / '5'이면 '2' 로 replace
    // replace 안하고 그냥 for문으로 answer에 조건에 따라 push 해도 될 듯
    let answer = '';
    
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            answer += '0';
        } else if (rsp[i] === '0') {
            answer += '5';
        } else if (rsp[i] === '5') {
            answer += '2';
        }  
    }
    
    return answer;
}