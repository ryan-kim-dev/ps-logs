function solution(my_string) {
    let temp = my_string.split(' ');
    let answer = 0;
    
    for (let i = 0; i < temp.length; i++) {
        if(Number.isNaN(Number(temp[i]))) {
           temp[i + 1] = `${temp[i]}${temp[i + 1]}`;
           temp.splice(i,1);
           }
    }

    temp.forEach((el) => answer += Number(el));
     
    return answer;
    
}