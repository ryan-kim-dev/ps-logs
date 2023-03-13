function solution(age) {
    age = String(age);
    
    let data = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
    };
    
    let answer = '';
    
    for (let i = 0; i < age.length; i++) {
        for (key in data) {
            if (Number(age[i]) === data[key]) answer += key;
        }
    }
    
    return answer;
}