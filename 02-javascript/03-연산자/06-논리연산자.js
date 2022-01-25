// 1) and
// -> 전체가 참인 경우만 결과가 참.
console.group("1) and");
console.log(true || true)&&//true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.groupEnd();

// 2) and연산 여러 개 사용
console.group("2) and연산 여러 개 사용");
console.log(true && true && true);
console.log(true && true && false);
console.log(false && false && true);
console.log(false && false &&false );
console.groupEnd();
// 3) or
console.group("3) or");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.groupEnd();
// 4) or 연산 여러 개 사용
console.group("4) or연산 여러 개 사용");
console.log(true || true || true); //true
console.log(true || true || false); //true
console.log(false || false || true); //true
console.log(false || true|| true); //false
console.groupEnd();
// 5) 복합사용
console.group("5) 복합사용");
console.log(true&& true || true); // true
console.log(true && true || false) //true
console.log(false && false || true); //true
console.log(false && true ||true) //true

console.log(true|| true && true); //true
console.log(true || true && false) //true
console.log(false || false && true); //false
console.log(false || true && true) //true
console.groupEnd();
// 6) not
console.group("6) not");
let success = true;
let fail = !success;
console.log(fail) //false

let k = 1;
console.log(!k); //false

let l = 0;
console.log(!l) //true

let str1 = "Hello"; //내용이 있는 문장은 true
console.log(!str1) // false

let str2 =""
console.log(!str2) //true
console.groupEnd();