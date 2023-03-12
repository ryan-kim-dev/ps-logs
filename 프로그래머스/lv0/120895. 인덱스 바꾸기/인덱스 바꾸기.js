function solution(my_string, num1, num2) {
    let answer = [...my_string];
    let a = my_string[num1];
    let b = my_string[num2];
    
    answer.splice(num1, 1, b);
    answer.splice(num2, 1, a);
        
    return answer.join('');
}