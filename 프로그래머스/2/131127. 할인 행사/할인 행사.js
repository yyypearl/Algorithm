function solution(want, number, discount) {
    var day = 0;
    for (let i=0; i<discount.length-9; i++){
        var numberArr = number.slice();
        for (let j=i; j<i+10; j++){
            if(want.includes(discount[j]) && numberArr[want.indexOf(discount[j])] !==0) {
               numberArr[want.indexOf(discount[j])]--;
            }
        }
        if(numberArr.every(item => item === 0)) {
            day++;
        }
    }
    return day;
}