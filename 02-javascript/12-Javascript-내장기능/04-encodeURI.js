/**
encodeURI(string)

주어진 문자열을 URL에 포함시키기에 적절한 형태로 변환 (=인코딩) 하는 처리
인코딩하지 않는 문자.
 A-Z a-z 0-9 ; m / ? : @ & = + $ - _ . ! ~ * ' ( ) #
 */

 const set1 = ';,/?:@&=+&#' //예약 문자
 const set2 = "-_.!~*'()"; //비예약 문자
 const set3 = 'ABC abc 123'; //알파벳 및 숫자, 공백
 const set4 = "자바스크립트"

 //특수문자(예약문자 및 비예약문자)를 변환하지 못하기 떄문에
const enc1 = encodeURI(set1);
const enc2 = encodeURI(set2);
const enc3 = encodeURI(set3);
const enc4 = encodeURI(set4);

console.group("encodeURI")
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd()

console.group("decodeURI")
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
console.groupEnd()