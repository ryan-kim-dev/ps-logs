function solution(i, j, k) {
    // 1. i부터 j 까지의 문자열인 숫자 요소의 배열로 만든다.
    let numbers = [i];
    while (i < j) {
        i += 1;
        numbers.push(i);
    }
    numbers = numbers.map((el) => String(el));
    
    // 2. i ~ j 까지의 숫자에서 k가 등장할 때 마다 answer를 증가시킨다
    let answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            if (numbers[i][j].includes(String(k))) answer += 1;
        }
    }
    
    
    // 3. 반복문 종료 후 정답 리턴
    return answer;
}