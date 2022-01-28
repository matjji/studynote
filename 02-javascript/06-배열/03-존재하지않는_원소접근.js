let myArr = [100];
console.log(myArr);

let item1 = myArr[0]
console.log(item1);

let item2 = myArr[1];
console.log(item2);

if (item2 !== undefined){
    console.log("1번째 원소 존재함")
} else {
    console.log("1번째 원소 존재하지 않음")
}

//비구조 문법으로 값 복사하기
let [a,b] = myArr;
console.log(a);
console.log(b)