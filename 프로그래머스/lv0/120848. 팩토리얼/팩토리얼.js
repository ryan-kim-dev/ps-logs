function solution(n) {
    let result = 0;
    let value = 1;
    while (value <= n) {
        result += 1;
        value *= result;
    }
    return result - 1;
}