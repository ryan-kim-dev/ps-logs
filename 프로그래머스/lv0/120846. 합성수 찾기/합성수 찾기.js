function solution(n) {
    // 합성수는 약수의 개수가 3개 이상이므로 4부터 시작
    
    let answer = 0;
    
    function isComposite(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return true;
        }
      }
      return false;
    }
    
    for (let i = 3; i <= n; i++) {
        if (isComposite(i)) answer += 1;
    }
    
    return answer;
}