function solution(r1, r2) {
    var answer = 0;
    
    for (let i=1; i<=r2; i++) {
        let max = Math.floor(Math.sqrt(r2**2 - i**2)) + 1;
        let min = i>r1? 0: Math.ceil(Math.sqrt(r1**2 - i**2));
        answer += max - min;
    }
    
    return answer * 4;
}