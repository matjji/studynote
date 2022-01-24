"use strict"
const num = 123;
const str = "hello";
const bool = true;
const obj = new Date();
const arr = [1,2,3];
const json = {"a": 123, "b": 234};

console.group("숫자값 출력하기")
console.log("숫자값 출력하기= %d", num); //정상
console.log("숫자값 출력하기= %d", str); // 숫자가 아니므로 NaN
console.log("숫자값 출력하기= %d", true); // 1 (0은 거짓,0 이외의 모든 수는 참. 1은 참)
console.log("숫자값 출력하기= %d", obj); // 객체에 대한 Hash값 출력
console.log("숫자값 출력하기= %d", arr); //숫자가 아니므로 NaN
console.log("숫자값 출력하기= %d", json); //숫자가 아니므로 NaN
console.groupEnd();

console.group("문자열 출력하기");
console.log("문자열 출력하기=%s", num); //정상
console.log("문자열 출력하기=%s", str); //정상
console.log("문자열 출력하기=%s", true); //정상
console.log("문자열 출력하기=%s", obj); //정상
console.log("문자열 출력하기=%s", arr); //정상
console.log("문자열 출력하기=%s", json); //정상
console.groupEnd();

console.group("객체 출력하기");
console.log("객체 출력하기=%o", num); //정상
console.log("객체 출력하기=%o", str); //정상 (따옴표가 적용됨)
console.log("객체 출력하기=%o", true); //정상
console.log("객체 출력하기=%o", obj); //정상
console.log("객체 출력하기=%o", arr); //정상
console.log("객체 출력하기=%o", json); //정상
console.groupEnd();

console.group("JSON 출력하기");
console.log("JSON 출력하기=%j", num); //정상
console.log("JSON 출력하기=%j", str); //정상 (따옴표가 적용됨)
console.log("JSON 출력하기=%j", true); //정상
console.log("JSON 출력하기=%j", obj); //정상
console.log("JSON 출력하기=%j", arr); //정상
console.log("JSON 출력하기=%j", json); //정상
console.groupEnd();

const student = "자바스크립트학생";
const age = 20;
console.group("복합사용");
console.log("%s님 나이는 %d세 입니다.", student, age);
console.groupEnd();