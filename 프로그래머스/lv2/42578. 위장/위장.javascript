// 오늘 입은 건 내일 못입음
// 해시 : 빈도수 정렬 혹은 탐색 용도
// 이 문제는 빈도수 정렬
function solution(clothes) {
// 객체로 빈도수 정렬
// 1. 요소의 타입 확인
    // obj[type[1]]
    let answer = 1;
   const obj = {};
    for (type of clothes) {
        if (obj[type[1]]) {
            obj[type[1]] += 1;
        } else {
            obj[type[1]] = 1;
        }
    }
  for (key in obj) {
      answer *= obj[key] + 1; // 해당 타입 중 아무것도 안 입었을 때 경우의 수 1을 더한다
  }
   return answer - 1; // 아예 아무것도 안 입었을 경우의 수 1을 뺀다 
}

// headgear: 2
// eyewear: 1