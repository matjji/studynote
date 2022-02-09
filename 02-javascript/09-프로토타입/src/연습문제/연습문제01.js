/**## 문제1. 

국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.

이 때 Stuent 클래스는 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.

작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.

클래스는 JSON 형식으로 작성되어야 합니다.

| 이름 | 국어 | 영어 | 수학 |
|---|---|---|---|
| 철수 | 92 | 81 | 77 |
| 영희 | 72 | 95 | 98 |
| 민혁 | 80 | 86 | 84 |


#### 출력결과

```
철수의 총점은 249점 이고 평균은 83점 입니다.
영희의 총점은 251점 이고 평균은 83.66666666666667점 입니다.
민혁의 총점은 264점 이고 평균은 88점 입니다.
``` */

const score = {
    '철수': [92, 81, 77],
    '영희': [72, 95, 98],
    '민혁': [80, 86, 84]
}

function student(ko, en, math) {
    this._ko = ko
    this._en = en
    this._math = math
}

student.prototype = {
    sum: function() {
        let sum = this._ko + this._en + this._math
        return sum
    },
    avg: function() {
        let avg = (this._ko + this._en + this._math) / score['철수'].length
        return avg
    }
}

for (let i in score){
    const some = new student(score[i][0], score[i][1], score[i][2])
    console.log('%s의 총점은 %d점 이고 평균은 %d점 입니다.', i, some.sum(), some.avg())
}
