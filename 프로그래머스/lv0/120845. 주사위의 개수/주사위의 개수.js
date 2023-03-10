function solution(box, n) {
    // box = [가로, 세로, 높이]
    // 가로/n * 세로/n * 높이/n
    // 안 나누어 떨어지는건 내림
    let answer = Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
    return answer;
}