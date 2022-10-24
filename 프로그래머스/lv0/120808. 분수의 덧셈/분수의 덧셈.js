function solution(denum1, num1, denum2, num2) {
    // const res = [];
    // num: 분모
    const num = num1 * num2;
    // denum: 분자
    const denum = denum1 * num2 + denum2 * num1;
    
 
    // 분자, 분모 둘 다 둘 중 작은수로 나눈 나머지가 0이어야 함.
    let minNumber = Math.max(num, denum);
    
    while (true) {
            if (denum % minNumber === 0 && num % minNumber === 0) {
        return [denum / minNumber, num / minNumber];
    }
    minNumber = minNumber - 1;
    }
} 