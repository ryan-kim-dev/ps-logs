function solution(bin1, bin2) {
    // 1. 십진법으로 변환하는 방법
    // - 이진법으로 된 수를 reverse 한다
    // - 인덱스 위치만큼 2를 제곱해서 요소(0 or 1)에 곱한다
    // - 요소마다 위의 연산으로 나온 값을 모두 더한다
    function toDecimal(binary) {
        let value = 0;
        if (Number(binary) === 0) return value;
        
        binary = binary
        .split('')
        .map((el) => +el)
        .reverse();

        
        binary.forEach((el, idx) => (value += el * 2 ** idx));

        return value;
        }
    
    // 2. 이진법으로 변환하는 방법
    // - 십진법의 수를 2로 나눈 나머지가 0이 될 때 까지 나눈다
    // - 이 과정에서 나머지를 순서대로 배열 또는 문자열에 담는다
    function toBinary(decimalVal) {
      if (decimalVal === 0) return '0';
        let value = '';
      while (decimalVal !== 0) {
        value += decimalVal % 2;
        decimalVal = Math.trunc(decimalVal / 2);
      }
      return value.split('').reverse().join('');
    }
    
    return toBinary(toDecimal(bin1) + toDecimal(bin2));
    
   // * 테케 5: bin1, bin2 가 둘다 0 일 경우 0 리턴
}