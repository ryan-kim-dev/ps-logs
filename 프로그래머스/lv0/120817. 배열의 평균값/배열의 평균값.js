function solution(numbers) {
    let answer = 0;
    numbers.map((el) => answer += el);
    return answer / numbers.length;
}