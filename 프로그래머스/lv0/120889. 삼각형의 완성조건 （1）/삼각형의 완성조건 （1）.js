function solution(sides) {
    let max = 0;
    
    for (let i = 0; i < sides.length; i++) {
        if (sides[i] > max) max = sides[i];
    }
    sides.splice(sides.indexOf(max), 1);
    
    return sides[0] + sides[1] > max ? 1 : 2;
}