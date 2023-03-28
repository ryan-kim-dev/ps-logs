function solution(balls, share) {
    function factorial(num) {
        if (num <= 1) return 1;
        return num * factorial(num - 1);
    }
    
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}