//함수를 변수에 대입하기

function sayHello(msg) {
    console.log("sayHello(" + msg + ")");
}

sayHello("안녕하세요 자바스크립트");

const say = sayHello;

say("Hello Javascript")