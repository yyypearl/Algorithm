function solution(targets) {
    var count = 0;
    let end = 0;
    
    targets.sort((a,b)=> a[1]-b[1]);
    console.log(targets);
    
    for(let [s, e] of targets) {
        if (end <= s) {
            count += 1;
            end = e;
        }
    }
    
    return count;
}