/**## 문제1.

앞 단원에서 수행한 연습문제 1,2번을 Class 기반의 객체지행으로 재구성하시오. 
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
*/

const score = {
    '철수': [92, 81, 77],
    '영희': [72, 95, 98],
    '민혁': [80, 86, 84]
}

class StudentClass {
    constructor(ko, en, math){
        this._ko = ko
        this._en = en
        this._math = math
    }
    sum() {
        let sum = this._ko + this._en + this._math
        return sum
    }
    avg() {
        let avg = (this._ko + this._en + this._math) / score['철수'].length
        return avg
    }
}

for (let i in score){
    const some = new StudentClass(score[i][0], score[i][1], score[i][2])
    console.log('%s의 총점은 %d점 이고 평균은 %d점 입니다.', i, some.sum(), some.avg())
}
