function solution(common) {
    let gap = 0;
    let answer = common[common.length - 1];
    
    // 등비수열일 경우
    if (common[2] / common[1] === common[1] / common[0]) {
        gap = common[1] / common[0];
        return answer * gap;
    }
    // 등차수열일 경우
    gap = common[1] - common[0];
    return answer + gap;
}