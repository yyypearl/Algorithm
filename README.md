# 💻 JavaScript Alghorithm Test
자바스크립트로 알고리즘 문제를 풀기 위한 레포입니다!

사용언어:
`Javascript`

<br>

## 문제 풀이 현황
  |ID|Profile|
  |:---:|:---:|
  |[yyypearl](https://github.com/yyypearl) | <img width=150 src="https://github.com/yyypearl.png"> |
  
<br>


## 목표
- **9/7~ 매일 꾸준하게 2문제 풀이**
- 기본 문제 풀이로 JS 문법을 익힌 후, 알고리즘 유형별 풀이를 공략.

<br>

## ⌨️ 백준에서 Nodejs입력받는 법.

```js
// 1. 하나의 값을 입력받을 때
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

// 3. 여러 줄의 값들을 입력받을 때
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n + 1);
const [m, ...m_arr] = input.slice(n + 1);

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(v => +v)를 추가

// input.shift()를 이용해 한줄씩 입력받는 상황으로 만들 수 있음!
```

<br>

## 코딩테스트에 필요한 지식들

### Javascript

-문제별 README에 작성중
