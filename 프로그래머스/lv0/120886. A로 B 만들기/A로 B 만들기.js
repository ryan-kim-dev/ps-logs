function solution(before, after) {
    // 뒤집는게 아니라 before를 "조합"해서 after를 만들수 있는지를 확인
    // temp: before 를 before를 구성한 문자열 요소들의 배열로 만든다
    // 이중 for문: i: after 순회, j: before의 배열 순회
    // after의 i번째 요소와 비교를 위해 내부 for문에서 before 배열을 순회하며
    // 각 요소를 after의 각 인덱스별 요소와 일치하는지 확인
    // 일치하면 temp 배열에서 splice, compare에 추가, break하여 내부 for문 탈출
    // 반복문 종료 후 compare 배열을 join('') 해서 after와 비교해서 일치하면 1, 아니면 0 리턴
    
    let temp = [...before];
    let compare = '';
    
    for (let i = 0; i < after.length; i++) {
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] === after[i]) {
                compare += temp[j];
                temp.splice(temp.indexOf(temp[j]), 1);
                break;
            }
        }
    }
    
    return compare === after ? 1 : 0;
}