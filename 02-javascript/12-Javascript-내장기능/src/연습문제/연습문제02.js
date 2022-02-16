/**## 문제2.

임의의 주민번호를 다음과 같이 `*`을 포함하여 변수에 저장하시오.

```
ssn = '020517-3******'
```

또한 현재 년도를 now_year라는 변수로 저장하시오.

이 값을 사용하여 생년월일, 나이, 성별을 출력하시오.

#### 출력결과

```
2002년 5월 17일에 태어난 20세 남자 입니다.
``` */

const now = new Date()
const now_year = now.getFullYear()

let ssn = '020517-3******'
const findSsn = ssn.substring(7,8)
const ssnYear = ssn.substring(0,2)
const ssnMonth = parseInt(ssn.substring(2,4))
const ssnDay = ssn.substring(4,6)
let ssnFullYear = 0
let hOrW = ""

if (findSsn == 3 || findSsn == 4){
    ssnFullYear = "20" + ssnYear
    findSsn == 3 ? hOrW = "남자" : hOrW = "여자"

} else {
    ssnFullYear = "19" + ssnYear
    findSsn == 1 ? hOrW = "남자" : hOrW = "여자"
}

console.log("%s년 %s월 %s일에 태어난 %d세 %s 입니다.", ssnFullYear, ssnMonth, ssnDay, now_year - parseInt(ssnFullYear), hOrW )