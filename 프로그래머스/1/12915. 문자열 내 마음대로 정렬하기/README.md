# [level 1] 문자열 내 마음대로 정렬하기 - 12915 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12915) 

<br/>

# 📝 정리하기
**- [⭐] 문자열 비교**<br/>
- 숫자를 비교 시에는 뺄셈 연산을 사용해여 비교할 수 있다. (```a-b```: 오름차순(양수), ```b-a```: 내림차순(음수))
  ```
  [원리]
  비교 함수 : 양수 값, 음수 값, 0
  
  ex) a-b
  양수: a가 b보다 큽니다. 이 경우, a는 b보다 뒤에 와야 합니다.
  음수: a가 b보다 작습니다. 이 경우, a는 b보다 앞에 와야 합니다.
  0: a와 b가 같습니다. 이 경우, a와 b의 순서는 그대로 유지됩니다.
  ```
  
- 하지만, 문자열을 비교할 때는 뺄셈이 아닌, ```localeCompare```와 같은 비교 함수를 사용해야 한다.
<br/>


**- [🚨] 삼항연산자 중괄호 사용**<br/>
**1) 중괄호 사용 시** <br/>
: 중괄호 내의 삼항 연산자 결과를 명시적으로 반환하지 않는다.<br/>
  따라서, 명시적으로 ```return``` 키워드로 반환해야 한다.
```
function solution(strings, n) {
    return strings.sort((a, b) => {
        a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
    });
}
```

**2) 중괄호 없을 시**  <br/>
: 중괄호를 사용하지 않으므로 삼항 연산자의 결과가 자동으로 반환된다<br/>
  화살표 함쉐서 중괄호를 생략하면 해당 표현식이 암시적으로 반환된다.
```
function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}
```
<br/>


### 성능 요약

메모리: 36 MB, 시간: 8.87 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 06월 22일 14:45:16

### 문제 설명

<p>문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.</p>

<h5>제한 조건</h5>

<ul>
<li>strings는 길이 1 이상, 50이하인 배열입니다.</li>
<li>strings의 원소는 소문자 알파벳으로 이루어져 있습니다.</li>
<li>strings의 원소는 길이 1 이상, 100이하인 문자열입니다.</li>
<li>모든 strings의 원소의 길이는 n보다 큽니다.</li>
<li>인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>strings</th>
<th>n</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>["sun", "bed", "car"]</td>
<td>1</td>
<td>["car", "bed", "sun"]</td>
</tr>
<tr>
<td>["abce", "abcd", "cdx"]</td>
<td>2</td>
<td>["abcd", "abce", "cdx"]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p><strong>입출력 예 1</strong><br>
"sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.</p>

<p><strong>입출력 예 2</strong><br>
"abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
