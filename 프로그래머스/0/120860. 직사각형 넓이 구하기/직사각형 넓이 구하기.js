function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]); // x 좌표를 기준으로 정렬
    let width = Math.abs(dots[0][0] - dots[3][0]); // 가로 길이 계산

    dots.sort((a, b) => a[1] - b[1]); // y 좌표를 기준으로 정렬
    let height = Math.abs(dots[0][1] - dots[3][1]); // 세로 길이 계산

    return width * height; // 넓이 반환
}
