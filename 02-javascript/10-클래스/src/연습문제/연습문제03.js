/**문제 1 - 다음을 만족하는 Student 클래스를 작성하시오.

1) String형의 학과와 정수형의 학번을 프로퍼티로로 선언후 생성자를 통해 주입
2) getter, setter를 정의
3) sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현

*/
class StudentClass {
    constructor(department, id) {
        this._department = department
        if(!department) {
            console.log("학과를 입력하세요.")
            return;
        } else if (typeof(this._department) !== typeof("string")) {
            console.log("학과명은 문자입니다.")
            return;
        }
        this._id = id
        if(!id) {
            console.log("학번을 입력하세요.")
            return;
        } else if (typeof(this._id) !== typeof(1)) {
            console.log("학번은 숫자입니다.")
            return;
        }
    }

    set department(value) {
        this._department = value
    }

    get department() {
        return this._department
    }
    
    set id(value) {

        this._id = value
    }

    get id(){
        return this._id
    }

    sayHello() {
        typeof(this.id) === typeof(1) && typeof(this.department) === typeof("string") ? console.log("저는 %s학과 %d학번 입니다.", this.department, this.id) : console.log("입력을 확인하십시오.")
    }
}

const me = new StudentClass("나노융합공", 2015314013)

me.sayHello()
