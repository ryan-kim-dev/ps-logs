function solution(n) {
   // for (let i = 1; i <= 1000000; i++) {
   //     if (i * i === n) return 1; 
   // }
   //  return 2;
    const answer = Math.sqrt(n) === Math.round(Math.sqrt(n)) ?
          1 : 2;
    return answer;
        
}