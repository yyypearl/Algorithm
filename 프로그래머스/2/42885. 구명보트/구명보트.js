function solution(people, limit) {
    var count = 0;
    people=people.sort((a,b)=> (a-b));
    let start = 0;
    let end=people.length-1;
    
    while (start<end){
        if (people[start]+people[end]<=limit){
            start++;
            count++;
        }
        end--;
    }
    
    return people.length-count;
}