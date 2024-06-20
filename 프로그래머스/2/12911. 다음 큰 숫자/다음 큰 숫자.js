function count(n) {
    var dec = n.toString(2).split("");
    var count = dec.filter(element => element === "1").length;
    return count;
}

function solution(n) {
    var big = n;
    var cnt = count(n);
    do {
        big++;
    } while (cnt !== count(big))
    
    return big;
}