function solution(n, m) {
    let answer = [];
    function gcd(n, m) {
        const remains = n % m;
        if(remains === 0) return m;
        return gcd(m, remains);
    }
    answer.push(gcd(n, m));
    answer.push(n * m / gcd(n, m));
    return answer;
}