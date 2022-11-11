function solution(my_string) {
   let reversed = '';
    for (let i = my_string.length - 1; i >= 0; i--) {
        reversed += my_string[i];
}
    
    return reversed;
}