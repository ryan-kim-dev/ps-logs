function solution(cipher, code) {
    // for 문 돌면서 i가 code 크기만큼 증가시키면서 answer에 +=
    // 인덱스값과 위치를 일치시키기 위해 for문의 i 첫번째 위치는 code - 1
    let answer = '';
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i];
    }
    return answer;
}