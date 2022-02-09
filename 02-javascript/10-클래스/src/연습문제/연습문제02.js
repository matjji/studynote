/**## 문제1.

앞 단원에서 수행한 연습문제 1,2번을 Class 기반의 객체지행으로 재구성하시오. 

function Rectangle(w, h) {
    this._width = w
    this._height = h
}

Rectangle.prototype = {
    get w() {
        return this._width
    },
    set w(param) {
        this._width = param
    },
    get h() {
        return this._height
    },
    set h(param) {
        this._height = param
    },
    getAround: function() {
        return 2*this._width + 2*this._height
    },
    getArea: function() {
        return this._width*this._height
    }
}

const something = new Rectangle(10, 5);

console.log("둘레의 길이는 %d이고 넓이는 %d입니다.", something.getAround() ,something.getArea() )
*/
class RectangleClass {
    constructor() {
        this._width = null
        this._height = null
    }
    set width(value) {
        if(!value) {
            console.log("width를 입력하세요.")
            return
        }
        this._width = value
    }
    get width() {
        return this._width 
    }
    set height(value) {
        if(!value) {
            console.log("height를 입력하세요.")
            return
        }
        this._height = value
    }
    get height() {
        return this._height
    }

    getAround() {
        return 2 * this.width + 2 * this.height
    }

    getArea() {
        return this.width * this.height
    }
}

const rectangle = new RectangleClass();
rectangle.width = 10
rectangle.height = 5

!rectangle.width || !rectangle.height ? console.log("값이 비어있어 결과값이 없습니다."): console.log("둘레의 길이는 %d이고 넓이는 %d입니다.", rectangle.getAround() ,rectangle.getArea())