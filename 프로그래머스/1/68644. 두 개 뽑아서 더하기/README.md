# [level 1] 두 개 뽑아서 더하기 - 68644 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/68644) 

<br/>

# 📝 정리하기
**- [🔔] 배열 중복 원소 제거 : Set 사용**<br/>
- Set이란?
  - value값 만을 저장하며 중복을 허용하지 않는 Collection으로, 동일한 값은 1개만 가질 수 있다.
  - value값으로 같은 객체가 들어올 경우에는 중복값으로 인지하지 않는다.
  - 대소문자를 구분하기 때문에, hi와 HI는 다른 값으로 인지한다.

```
  const answer = [...new Set(temp)]; // filter로 중복원소를 제거하기보다는 이렇게 Set을 사용해 간단히 중복값을 제거한다.
```
<br/>

**- [❗] 더 간단하게! : push 메서드 사용**<br/>
```
var result = [];
    var k=0;
    for(let i=0; i<numbers.length; i++){
        for (j=i+1; j<numbers.length; j++){
            result[k] = numbers[i]+numbers[j];
            k++; // 기존 코드에서처럼 늘어나는 인덱스 변수를 지정해 하나씩 늘릴 필요 없이,
        }
    }
```
```
var result = [];
    var k=0;
    for(let i=0; i<numbers.length; i++){
        for (j=i+1; j<numbers.length; j++){
            result.push(numbers[i]+numbers[j]); // 이렇게 push를 사용해 쉽게 해결한다.
        }
    }
```
<br/>

### 성능 요약

메모리: 33.6 MB, 시간: 0.64 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌1

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 06월 24일 23:37:03

### 문제 설명

<p>정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>numbers의 길이는 2 이상 100 이하입니다.

<ul>
<li>numbers의 모든 수는 0 이상 100 이하입니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>[2,1,3,4,1]</code></td>
<td><code>[2,3,4,5,6,7]</code></td>
</tr>
<tr>
<td><code>[5,0,2,7]</code></td>
<td><code>[2,5,7,9,12]</code></td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)</li>
<li>3 = 2 + 1 입니다.</li>
<li>4 = 1 + 3 입니다.</li>
<li>5 = 1 + 4 = 2 + 3 입니다.</li>
<li>6 = 2 + 4 입니다.</li>
<li>7 = 3 + 4 입니다.</li>
<li>따라서 <code>[2,3,4,5,6,7]</code> 을 return 해야 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>2 = 0 + 2 입니다.</li>
<li>5 = 5 + 0 입니다.</li>
<li>7 = 0 + 7 = 5 + 2 입니다.</li>
<li>9 = 2 + 7 입니다.</li>
<li>12 = 5 + 7 입니다.</li>
<li>따라서 <code>[2,5,7,9,12]</code> 를 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
