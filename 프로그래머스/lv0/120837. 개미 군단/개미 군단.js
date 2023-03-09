function solution(hp) {
    // 장군: 5, 병정: 3, 일개미: 1
    // 1. 장군으로 나누고 내림하여 장군이 몇마린지 구해서 += answer
    // 2. 장군으로 나눈 나머지를 구한다
    // 예외처리 - 만약 장군으로 나눈 나머지가 0이면 return answer
    // 3. 장군으로 나눈 나머지를 병정으로 나누고 내림하여 병정이 몇마린지 구해서 += answer
    // 예외처리 - 만약 병적으로 나눈 나머지가 0이면 return answer
    // 4. 병정으로 나눈 나머지를 일개미로 나누고 내림하여 일개미가 몇마린지 구해서 += answer
    let answer = 0;
    // 1.
    answer = answer + Math.floor(hp / 5);
    // 2.
    let left = hp % 5;
    // 예외처리
    if (left === 0) return answer; 
    // 3.
    answer = answer + Math.floor(left / 3); 
    left = left % 3;
    // 예외처리
    if (left === 0) return answer; 
    // 4.
    answer = answer + left;
    
    
    
    return answer;
}