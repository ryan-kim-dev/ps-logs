function solution(numbers, k) {
    let idx = -2;
        
    for (let i = 0; i < k; i++) {
        idx += 2;
        if (!numbers[idx]) {
            idx = idx - numbers.length;
        }
        
    }
    
    return numbers[idx];
}