function solution(brown, yellow) {
    for (let i=1; i<=yellow; i++){
        var w, h;
        if(yellow % i ===0){
            w = (yellow / i > i? yellow / i: i);
            h = (yellow / i < i? yellow / i: i);
            if ((w+2)*(h+2)-yellow===brown) {
                return [w+2,h+2];
            }
        }
    }
}