function solution(n) {
    var fibo = [];
    fibo[0]=0;
    fibo[1]=1;
    if (n === 0) return 0;
    else if (n === 1) return 1;
    for (let i=2; i<=n; i++){
        fibo[2] = fibo[0]+fibo[1];
        if(fibo[2] > 1234567)
        {
            fibo[2] = fibo[2]%1234567;
        }
        fibo[0] = fibo[1];
        fibo[1] = fibo[2];
    }
        
    return fibo[2];
}