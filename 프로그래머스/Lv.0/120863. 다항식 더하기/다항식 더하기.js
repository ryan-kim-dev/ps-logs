function solution(polynomial) {
    let xVal = 0;
    let temp = polynomial.split(' + ');
    let ints = temp.filter((el) => !isNaN(Number(el))).map((el) => +el);
    let int = 0;
    
    if (ints.length) int = ints.reduce((acc, cur) => acc + cur);
    
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].includes('x')) {
            if (temp[i].length === 1) {
                xVal += 1;
            } else {
                let val = temp[i].split('');
                val = parseInt(val.slice(0, val.length - 1).join(''));
                xVal += val;
            }
            
        }
    }
    
    // 5,6,7 반례: 입력값 1 기댓값 1
    // 8, 10, 12 반례: 'x', 'x + 1' 등의 형태
    if (temp.length === 1) return temp[0];
    
    if (int === 0) {
        if (xVal === 1) return 'x';
        if (xVal > 1) return `${xVal}x`;
    }
    
    if (int !== 0) {
        if (xVal > 1) return `${xVal}x + ${int}`;
        if (xVal === 1) return `x + ${int}`;
        return `${int}`;
    }
    

}