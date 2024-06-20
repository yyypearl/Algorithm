# [level 2] 다음 큰 숫자 - 12911 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12911) 

<br>

## 📝 정리하기
**- [⭐] 이진수 변환 방법**
-> toString을 사용한다! (다른 8진수, 16진수 등도 가능)
```
let num = 100;
num.toString(2); // '1100100'
```
<br>

**- [⭐] 배열에서 특정 값의 개수 구하기**
1) for문 사용
   ```
   let count = 0;
   for(let i=0; i < arr.length; i++) {
           if(arr[i] === 'a')  {
                   count++;
          }
   }
   ```
2) filter 사용 -> 내가 쓴 방법
   ```
   let count = arr.filter(element => 'a' === element).length;
   ```
3) reduce 사용
   ```
   let count = arr.reduce((cnt, element) => cnt + ('a' === element), 0);
   ```

<br>

**- [🎁] 접근법**
- 이진수에서 1의 개수를 세고, 하나씩 늘려가며 1의 개수 같은 거 나올 때 return!
- 꼭 하나의 함수 내에서 풀려고 하지 않아도 된다. 이렇게 solution 함수 외의 별도의 함수를 만들어 푸는 것도 방법!

<br>

### 성능 요약

메모리: 33 MB, 시간: 0.09 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 70.0<br/>효율성: 30.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 06월 20일 12:12:33

### 문제 설명

<p>자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.</p>

<ul>
<li>조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.</li>
<li>조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.</li>
<li>조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.</li>
</ul>

<p>예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.</p>

<p>자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.</p>

<h5>제한 사항</h5>

<ul>
<li>n은 1,000,000 이하의 자연수 입니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>78</td>
<td>83</td>
</tr>
<tr>
<td>15</td>
<td>23</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예#1<br>
문제 예시와 같습니다.<br>
입출력 예#2<br>
15(1111)의 다음 큰 숫자는 23(10111)입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
