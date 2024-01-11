function solution(id_pw, db) {
    const [id, pw] = id_pw;
    // db에 있는 id인지 찾는다
    let matchedUser = db.filter((el) => el[0] === id);
    matchedUser = matchedUser[0];
    console.log(matchedUser);
    // fail: db에 없는 경우
    if (!matchedUser) return 'fail';
    // 나머진 성공이거나 틀린 비번이거나
    if (matchedUser[1] !== pw) return 'wrong pw';
    
    return 'login';
    
}