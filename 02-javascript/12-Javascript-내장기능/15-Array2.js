// 1) 배열 탐색하기
let arr1 = [1, 0, false];

//arr.indexOf(item, item)는 인덱스 from부터 시작해서 item(요소)을 찾는다.
//요소를 발견하면 해당 요소의 인덱스를 반환한다.
//arr1.lastIndexOf(item, item)는 위 메서드와 동일한 기능을 하는데. 검색을 끝에서부터 시작한다.
//두 번째 파라미터 (from)이 없으면 처음부터 탐색한다.
console.log(arr1.indexOf(0));
console.log(arr1.indexOf(false));
//발견하지 못했으면 -1을 반환한다.
console.log( arr1.indexOf(null))

//arr.includes(item, item)는 인덱스 from부터 시작해 item이 있는지 검색하는데,
// 해당하는 요소를 발견하면 true를 반환한다.
console.log(arr1.includes(1));
console.log(arr1.includes(100));

//위메서드들은 요소를 찾을 때 완전 항등 연산자 === 을 사용한다는 점에 유의해야 한다.
// false를 검색하면 정확히 false만을 검색하지, 0을 검색하진 않는다.
// 요소의 위치를 정확히 알고 싶은게 아니고 요소가 배열 내 존재하는지 여부만 확인하고 싶다면
// arr.includes를 사용하는 게 좋다.
//includes는 NaN도 제대로 처리한다는 점에서 indexOf/lastIndexOf와 약간의 차이가 있다.
const arr2 = [NaN];
console.log( arr2.indexOf(NaN)); //-1 (완전 항등 비교 === 는 NaN엔 동작하지 않으므로 0이 출력되지 않는다.)
console.log(arr2.includes(NaN)) // true (NaN의 여부를 확인한다.)

//배열 탐색
const arr3 = [5, 12, 8, 131, 44];

//주어진 판별함수를 만족하는 처번째 값을 반환한다. 못찾으면 undefined를 반환한다.
//찾고자 하는 항복이 아닌 검색 규칙을 구현한 콜백함수를 전달해야 한다.
const found = arr3.find(function(v){
    //파라미터로 전달되는 v는 배열의 모든 원소가 순차적으로 전달된다.
    console.log(v);

    //v를 우리가 원하는 조건에 충족하는지 검사하여 true/false를 리턴
    //true를 리턴하는 순간 배열의 탐색을 중단한다. (break와 동일한 기능)
    if (v % 2 ==0) {
        //true가 리턴되는 경우 v는 found에 저장된다.
        return true;
    } else {
        return false;
    }
});
console.log(found)

//배열 전체 검색
const arr4 = [5,12,8,44];
const results = arr4.filter(function(v,i,arr) {
    console.log("v=%d, i=%d, arr=%s", v,i,arr);

    if(v % 2 ==0) {
        //true가 리턴되는 경우 v 는 results 배열의 원소로 저장된다.
        //true를 리턴하더라도 배열의 모든 원소를 탐색하기 전까지 종료되지 않는다.
        return true
    } else {
        return false
    }
})
console.log(results)

//배열 정렬
const arr5 = [2,1,15];
//퀵정렬 알고리즘을 사용하여 배열 자체를 정렬한다.
//-> 배열의 모든 원소를 문자열로 취급하기 때문에 글자 정렬기준이 적용된다.
//arr5.sort()
//console.log(arr5);

//sort 함수도 정렬 조건을 콜백함수로 처리한다.
arr5.sort(function(a,b) {
    //정렬을 위해 비교되는 원소값들이 파리미터로 전달된다.
    console.log("a=%s, b=%s",a,b);

    //리턴값이 양수인 경우: a가 b보다 크다
    //리턴값이 음수인 경우: b가 a보다 크다
    if ( a > b){
        return 1
    } else {
        return -1
    }
});

console.log(arr5);

//역순배치
let arr6 = [1,2,3,4,5];
arr6.reverse()
console.log(arr6)


//반복문을 통한 정렬

const arr7 = [1,5,2,4,3]
let first = arr7[0]
for(let i = 0; i < arr7.length; i++) {
    for(let j = i+1; j< arr7.length; j++){
        // > 오름차순   /  < 내림차순
        if (arr7[i] > arr7[j]) {
            let tmp = arr7[i]
            arr7[i] = arr7[j]
            arr7[j] = tmp
        
        }
    }
}
console.log(arr7)