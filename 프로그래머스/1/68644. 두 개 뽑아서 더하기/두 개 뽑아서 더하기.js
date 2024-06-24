function solution(numbers) {
    var result = [];
    for(let i=0; i<numbers.length; i++){
        for (j=i+1; j<numbers.length; j++){
            result.push(numbers[i]+numbers[j]);
        }
    }
    const answer = [...new Set(result)].sort((a,b) => a-b);
    return answer;
}