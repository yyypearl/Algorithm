function solution(n) {
    var count = 0;
    for(let i=3; i<=n; i+=2){
        for(let j=3; j<=Math.sqrt(i); j+=2){
            if (i%j===0){
                count++; // 홀수 중 소수가 아닌 숫자
                break;
            }
        }  
    }
    return 1+Math.floor((n-1)/2)-count;
}