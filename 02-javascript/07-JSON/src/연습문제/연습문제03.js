/**
## 문제3.

아래의 데이터는 2021년 01월 25일부터 02월 01일까지의 Covid19 일별 확진자 수를 표현한 자료구조다.

```javascript
covid19 = [
    {date: '0125': active: 426}, 
    {date: '0126': active: 343}, 
    {date: '0127': active: 547}, 
    {date: '0128': active: 490}, 
    {date: '0129': active: 460}, 
    {date: '0130': active: 443}, 
    {date: '0131': active: 338}, 
    {date: '0201': active: 299}
]
```

### 3-1.

1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.

#### 출력결과

```
누적 확진자 수: 3346
평균 확진자 수: 418.25
```


### 3-2

1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

#### 출력결과

```
확진자가 가장 많이 나타난 날: 0127
``` */

covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
]
console.group("3-1")
let sum = 0
let count = 0
for (let k in covid19) {
    sum += covid19[k].active
    count++
}
let avg = sum / covid19.length
console.log("누적 확진자 수: %d", sum)
console.log("평균 확진자 수: %d", avg)
console.groupEnd()

console.group("3-2")
let max = covid19[0].active
let maxDate = covid19[0].date
for (let i in covid19) {
    if (max < covid19[i].active){
        max = covid19[i].active
        maxDate = covid19[i].date
    }
}
console.log("확진자가 가장 많이 나타난 날: %d", maxDate)
console.groupEnd()