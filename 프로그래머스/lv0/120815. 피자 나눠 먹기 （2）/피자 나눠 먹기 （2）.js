// 나눠먹을 사람 수 n과 피자 한 판의 조각 수 6의 최소공배수 문제
// 최소공배수를 6으로 나눈 값이 정답 (한 판은 6조각)
// 두 수의 곱 = 최소공배수 * 최대공약수
// 최소공배수 =  (두 수의 곱 n * 6) / (유클리드 호제법으로 구한 n과 6의 최대공약수)
function solution(n) {
    // 사람 수 n과 피자 한판 조각수 6의 최대공약수를 유클리드 호제법으로 구한다 
    function gcd(x, y) {
      const rest = x % y;
      if (rest === 0) return y;
      return gcd(y, rest);
    }
    // 최대공약수
    let greatestCommon = gcd(n, 6);
    // 최소공배수
    let total = (n * 6) / greatestCommon; 
    // 몇 판 시켜야 되는지 = 최소공배수 / 6
    let answer = total / 6;
    return answer;
}