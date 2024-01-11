function solution(keyinput, board) {
    const [xMax, yMax] = board.map((el) => (el - 1) / 2); // 최대로 움직일 수 있는 범위
    let xAxis = yAxis = 0;
    
    keyinput.forEach((el) => {
        if (el === 'left') {
            if (Math.abs(xAxis - 1) <= xMax) xAxis -= 1;
        }
        if (el === 'right') {
            if (xAxis + 1 <= xMax) xAxis += 1;
        }
        if (el === 'down') {
            if (Math.abs(yAxis - 1) <= yMax) yAxis -= 1;
        }
        if (el === 'up') {
            if (yAxis + 1 <= yMax) yAxis += 1;
        }
    })   
    
    return [xAxis, yAxis];
}