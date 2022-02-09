/**
## 문제2.

가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.

이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.

클래스는 JSON 형식으로 작성되어야 합니다.


#### 출력결과

가로가 10이고 세로가 5인 경우

```
둘레의 길이는 30이고 넓이는 50입니다.
``` */

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