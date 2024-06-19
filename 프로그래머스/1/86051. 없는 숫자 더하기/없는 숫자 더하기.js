function solution(numbers) {
    var arr = [0,1,2,3,4,5,6,7,8,9];
    var sum =0;
    
    return arr.filter((element)=>(!numbers.includes(element))).reduce((arr, cur)=>arr+cur,0);
}