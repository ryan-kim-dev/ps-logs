function solution(letter) {
    // 1. letter을 공백으로 split하여 배열에 저장
    // 2. 1의 배열을 순회하는 for문 안에서
    // for-in 문으로 morse 객체 순회하며 해당하는 경우의 key값을 answer에 +=
    
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    let answer = '';
    let temp = letter.split(' ');
    
    for (let i = 0; i < temp.length; i++) {
        for (code in morse) {
            if (code === temp[i]) answer += morse[code];
        }
    }
    
    
    return answer;
}