function solution(n, k) {
    let cnt = Math.floor(n / 10);
    let main = 12000 * n;
    let drink = 2000 * k;
    let total = main + drink;
    if (cnt !== 0 && k !== 0) {
       total -= 2000 * cnt;
    }
    return total;
}