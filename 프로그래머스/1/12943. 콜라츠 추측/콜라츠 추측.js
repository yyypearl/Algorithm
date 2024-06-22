function solution(num) {
    if (num === 1) return 0;
    var count = 0;
    while (num!=1){
        num = (num % 2 === 0? num / 2 : num * 3 + 1 );
        count ++;
        if (count >= 500) {
            return -1;
        }
    }
    return count;
}