function solution(my_string) {
    // 대문자인지 소문자인지 비교하는 방법:
    // my_string[i] === my_string[i].toLowerCase() 가 true로 치환되는지 아닌지로 판별
    let answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toLowerCase()) {
            answer += my_string[i].toUpperCase();
        } else {
            answer += my_string[i].toLowerCase();
        }
    }
    return answer;
}