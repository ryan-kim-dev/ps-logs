function solution(my_string) {
    // 모음만 담은 배열 생성
    // my_string에 filter로 돌면서 모음 배열과 일치하는 요소가 있으면 pop
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let answer = [...my_string]
        .filter((el) => !vowels.includes(el))
        .join('');
    
    return answer;

}