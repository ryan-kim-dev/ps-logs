function solution(numbers) {
    let answer = [...numbers].join('');
    let values = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    values.forEach((el) => {
        answer = answer.replaceAll(el, String(values.indexOf(el)));
    })
    
    return Number(answer);
}