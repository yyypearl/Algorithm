function solution(n)
{
    var answer = 0;
    num = n+'';
    [...num].map((item)=>{answer+=parseInt(item)});

    return answer;
}