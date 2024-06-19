function solution(food) {
    var answer = '';
    
    for(let i=1; i<food.length; i++){
        if(food[i]>1)
        answer+=String(i).repeat(Math.floor(food[i]/2));
    }
    
    answer = answer + "0" + answer.split("").reverse().join("");
    return answer;
}