function solution(chicken) {
    // 재귀 문제
    // 사용한 쿠폰 개수 = 서비스로 받은 치킨 개수
    // 처음엔 총 치킨 개수로 재귀함수 호출
    // 그 이후로는 남은 쿠폰개수로 재귀 호출, 남은 쿠폰이 10개 미만이면 탈출.
    // 재귀 반복 호출 시 서비스로 받은 치킨 개수와 + 남는 쿠폰 개수로 호출해야 함
    // 왜? 서비스로 받은 치킨도 쿠폰이 1장씩 발급되니까
    let answer = 0;
    
    function getAllSvcCount(n) {
        // 탈출 조건: 남은 쿠폰 개수가 10 미만이면 더이상 서비스 치킨 못받음
        if (n < 10) return answer;
        
        const [svc, rest] = (n / 10).toFixed(1).split('.').map((el) => +el);
        
        // 서비스로 받은 치킨 개수 누적합
        answer += svc;
        // 남은 쿠폰 개수로 재귀 호출
        // 서비스 1마리마다 쿠폰 1장씩 주기 때문에 안 쓴 쿠폰 개수랑 더해서 재귀호출
        return getAllSvcCount(svc + rest);
    }
    
    return getAllSvcCount(chicken);
}