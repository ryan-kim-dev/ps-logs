const solution = (array) => {
    // 중앙값 구하는 방법
    // 1. 데이터를 내림차순으로 정렬
    // 2. 데이터의 개수가 홀수라면 중앙값은 결과의 가운데 수
    // 3. 데이터의 개수가 짝수라면 중앙값은 가운데 두 수의 평균
    
    array.sort((a, b) => b - a);
    return Math.ceil(array[Math.floor(array.length / 2)]);
    
};