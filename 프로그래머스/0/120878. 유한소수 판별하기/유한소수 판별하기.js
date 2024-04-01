function solution(a, b) {
    let [numerator, denominator] = [a, b];
    // 1. 기약분수로 만든다 - 유클리드 호제법
    function gcd(x, y) {
        const rest = x % y;
        if (rest === 0) return y;
        return gcd(y, rest);
    }
    let divider = gcd(numerator, denominator);
    numerator = numerator / divider;
    denominator = denominator / divider;

    // 2. 분모를 소인수분해
    // 소인수가 2 또는 5 뿐이라면 유한소수, 아니면 무한소수
    
    function primeFactors(n) {
        let factors = [];
        
        let num = n;
        let target = 2;
        
        while (num !== 1) {
            if (num % target === 0) {
                num = num / target;
                if (!factors.includes(target)) factors.push(target);
            } else {
                target += 1;
            }
        }
        return factors;
    }
    
    let arr = primeFactors(denominator);
    arr = arr.filter((el) => el !== 2 && el !== 5);
    
    return arr.length ? 2 : 1;
}