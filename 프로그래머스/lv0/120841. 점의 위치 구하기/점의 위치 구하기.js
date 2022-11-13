// 1: +, +
// 2: -, +
// 3: -, -
// 4: +, -

function solution(dot) {
    let answer = 0;
    
    if (dot[0] !== 0 && dot[1] !== 0) {
        if (dot[0] > 0) {
            return answer = dot[1] > 0 ? 1 : 4;
        }
        
        if (dot[0] < 0) {
            return answer = dot[1] > 0 ? 2 : 3;
        }
    }
}