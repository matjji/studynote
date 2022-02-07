/**## 문제2.

다음의 JSON은 어느 학급의 중간고사 성적을 나타낸다.

```js
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
```

### 2-1.

위 데이터에서 학생별 총점과 평균을 구하시오.

#### 출력결과

```
철수의 총점은 341점 이고 평균은 85.25점 입니다.
민영의 총점은 369점 이고 평균은 92.25점 입니다.
남철의 총점은 257점 이고 평균은 64.25점 입니다.
혜진의 총점은 322점 이고 평균은 80.5점 입니다.
```

### 2-2.

위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오.

#### 출력결과

```
모든 학생의 수학 총점은 325점 이고 평균은 81.25점 입니다.
``` */

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
console.group("2-1")
let avg = 0

for (let k in exam) {
    let studSum = 0
    for (let i = 0; i < exam[k].length; i++){
        studSum += exam[k][i]
    }
    avg = studSum / exam[k].length;
    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", k, studSum, avg)
}
console.groupEnd()

console.group("2-2")
let mathSum = 0
let count = 0
for (let t in exam) {
    mathSum += exam[t][2]
    count++
}
let mathAvg = mathSum / count;
console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", mathSum, mathAvg)
console.groupEnd()