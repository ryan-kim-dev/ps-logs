function solution(n) {
    let a = 1;
    const divider = [];
    
    for (let i = 0; i <= n; i++) {
    let x = a + i;
        n % x === 0 ? divider.push(x) : null;
    }
    return divider.length;
}