function solution(array, n) {
    // array 순회하며 절댓값만 배열에 담는다
    let absValues = array.map((el) => Math.abs(el - n));
    // 절댓값만 담은 배열을 순회하면서 가장 작은 절댓값을 구한다
    let mostCloseAbsValue = Math.min(...absValues);
    // 원본 배열을 순회하며 가장 가까운 수가 여러개일 경우 더 작은 수를 정답으로 들어가도록 재할당한다
    let tempIdx = absValues.indexOf(mostCloseAbsValue);
    let answer = array[tempIdx];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < answer && Math.abs(array[i] - n) === mostCloseAbsValue) {
            answer = array[i];
        }
    }
    
    return answer;
}