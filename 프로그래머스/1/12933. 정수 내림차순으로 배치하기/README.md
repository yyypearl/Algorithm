# [level 1] 정수 내림차순으로 배치하기 - 12933 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12933?language=javascript#) 

### 📝 정리하기
.join('') : 배열의 요소를 빈 문자열('')로 연결하여 문자열로 변환 <br/>
[⭐] join () 활용법, while문 실행 조건 (true여야 실행) <br/>

### 👀 기억하고 싶은 풀이
```
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr; //
}
```
[풀이] js에서 자동형변환을 사용하면 number+string => string, string*number => number이다. 예를 들면, 1+"" => "1", "1"*1 => 1 입니다. split은 string에 사용하는 메서드니 기호에 맞게 형변환을 한 것이라고 할 수 있다.

```
function solution(n) {
    // 문자풀이
    // return parseInt((n+"").split("").sort().reverse().join(""));

    // 숫자풀이
    var r = 0, e = 0, arr = [];

    do {
        e = n%10;

        // 정렬
        if (arr.length == 0) arr.push(e);
        else for (var i=0, len=arr.length; i<len; i++) {
            if (arr[i] <= e) { arr.splice(i,0,e); break; }
            if (i == len-1) arr.push(e);
        }
    } while (n = Math.floor(n/10), n>0);

    return parseInt(arr.join(""));
}
```
[풀이] 숫자 풀이로 하면 실행속도가 더 빠르다!

<br/>

### 성능 요약

메모리: 33.4 MB, 시간: 0.08 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 06월 19일 01:51:00

### 문제 설명

<p>함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.</p>

<h5>제한 조건</h5>

<ul>
<li><code>n</code>은 1이상 8000000000 이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>118372</td>
<td style="text-align: center">873211</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
