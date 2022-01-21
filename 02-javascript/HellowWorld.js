"use strict" // 엄격모드 적용 --> ES6 호환기능만 사용하도록 명시

//메시지 그룹핑
console.group("Mymessage1");
    console.log("안녕하세요");
    console.log("안녕하세요2");
    console.log("안녕하세요3");
console.group();

console.group("Mymessage2");
    console.log("안녕하세요4");
    console.group("Mymessage2-1")
        console.log("안녕하세요5");
        console.log("안녕하세요6");
    console.group();
console.group();