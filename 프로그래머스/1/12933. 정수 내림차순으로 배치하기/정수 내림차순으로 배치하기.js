function solution(n) {
    var answer = [];
    i=0;
    while(n>0){
         answer[i]=n%10;
        n/=10;
        n=Math.floor(n);
        i++;
    }
    answer.sort((a,b) => b-a);
    
    return Number(answer.join(''));
}