function solution(quiz) {
    let answer = [];

    answer = quiz.map((expression) => {
        let [x, op, y, _, ans] = expression.split(' ').map((el) => isNaN(Number(el)) ? el : Number(el));
        
        if (op === '+') {
            return x + y === ans ? 'O' : 'X';
            
        } else {
            return x - y === ans ? 'O' : 'X';
        }
    });
    
    return answer;
}