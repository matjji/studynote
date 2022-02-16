/**## 문제3.

아래의 문장에서 "수업시간"이라는 단어가 총 몇 번 등장하는지 카운트 하는 프로그램을 구현하시오.

```
str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
```

#### 출력결과

```
3
``` */
let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
let count = 0
const word = "수업시간"
let find = true


for(let i = 0; i< str.length; i++){
    console.log(str)
    let p = str.indexOf(word);
    find = p > -1

    if(find) {
        count++
        str = str.substring(p + word.length)
    } else {
        break
    }
}

console.log(count)