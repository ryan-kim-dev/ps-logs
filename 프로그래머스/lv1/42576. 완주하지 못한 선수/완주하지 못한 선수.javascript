function solution(participant, completion) {
   
    // 참가자와 완주자를 동일 인덱스로 비교하기 위해 sort.
    let sortedParticipants = [...participant].sort();
    let sortedCompletion = [...completion].sort();
    for (let i = 0; i < participant.length; i++) {
        if (sortedParticipants[i] === sortedCompletion[i]) continue;
        if (sortedParticipants[i] !== sortedCompletion[i]) {
            return sortedParticipants[i];
        }
    }
}