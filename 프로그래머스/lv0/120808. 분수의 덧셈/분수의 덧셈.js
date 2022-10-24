function solution(denum1, num1, denum2, num2) {
    // num: 분모
    const num = num1 * num2;
    // denum: 분자
    const denum = denum1 * num2 + denum2 * num1;
    
    const gcd = (x, y) => {
        const rest = x % y;
        if (rest === 0) return y;
        return gcd(y, rest);
    }
    
    const divider = num > denum ? gcd(num, denum) : gcd(denum, num);
    return [denum / divider, num / divider];
} 