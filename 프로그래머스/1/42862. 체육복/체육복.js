function solution(n, lost, reserve) {
    let newReserve = reserve.sort((a,b)=>a-b).filter(reserveStudent => !lost.includes(reserveStudent));
    let newLost = lost.sort((a,b)=>a-b).filter(lostStudent => !reserve.includes(lostStudent));
    var answer = n-newLost.length;
    
    newLost.map((item) => {
        for(let i=0; i<newReserve.length; i++){
            if (newReserve[i]>0 && Math.abs(newReserve[i]-item)===1){
                answer++;
                newReserve[i]=-1;
                break;
            }
        }
    })
    return answer;
}
