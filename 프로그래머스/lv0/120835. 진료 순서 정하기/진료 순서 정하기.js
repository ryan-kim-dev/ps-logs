function solution(emergency) {
    // 인덱스값 + 1을 진료 순서로 사용하기 위해 내림차순으로 정렬해둔 배열을 선언한다
    let temp = [...emergency];
    let process = temp.sort((a, b) => b - a);
    // 인덱스값 + 1이 진료 순서이므로 정답 배열에 넣는다
    let answer = emergency.map((el) => process.indexOf(el) + 1);
    return answer;
}