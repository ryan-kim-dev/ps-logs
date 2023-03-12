function solution(numbers, direction) {
    // 오른쪽이면 마지막요소가 맨앞으로, 맨 앞요소가 맨 뒤로
    // 왼쪽이면 첫 요소가 맨 뒤로, 마지막 요소가 맨 앞으로
    let start = numbers[0];
    let end = numbers.at(-1);
    
    if (direction === 'right') {
        numbers.pop();
        numbers.unshift(end);
        return numbers;
        
    }
    numbers.shift();
    numbers.push(start);
    return numbers;
    
}