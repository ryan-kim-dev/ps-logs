function solution(spell, dic) {
    // 알파벳을 알파벳순 정렬 - 문자열을 오름차순 정렬
    const sortedSpell = spell.sort().join('');
    // 단어모음을 알파벳순 정렬하고 문자열과 일치 비교
    const answer = dic.map((el) => el.split('').sort().join('')).filter((el) => el === sortedSpell);
    
    return answer.length ? 1 : 2;
}