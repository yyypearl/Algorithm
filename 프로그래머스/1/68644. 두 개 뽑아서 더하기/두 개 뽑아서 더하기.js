function solution(numbers) {
    var result = [];
    var k=0;
    for(let i=0; i<numbers.length; i++){
        for (j=i+1; j<numbers.length; j++){
            result[k] = numbers[i]+numbers[j];
            k++;
        }
    }
    const answer = result.filter((element, index) => result.indexOf(element) === index).sort((a,b) => a-b);
    return answer;
}