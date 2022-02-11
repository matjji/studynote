// require() 함수는 module.exports를 통해서 등록된 기능들을 리턴함
// 리턴을 받는 my객체는 module.exports에 확장된 기능들을 참조한다.
//파일 경로 명시할 때 확장자 생략 가능.
// 하지만 동일 경로라 하더라도 "./"는 생략 불가능
//"./"가 생략되는 경우 node의 내장 모듈로 인식함.
const my = require("./MyModule1");

//모듈형태로 참조된 함수 호출한다.
my();