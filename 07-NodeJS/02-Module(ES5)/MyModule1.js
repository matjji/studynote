//사용자 정의 함수를 작성.
function helloWorld() {
    console.log("Hello World");
}

//작성된 함수를 모듈로 등록
module.exports = helloWorld;

//moduel.exports = function() {
//  console.log("Hello World")
// }