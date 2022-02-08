/**## 문제4

문제1번을 재귀함수 기법으로 다시 구현해 보세요.

```js
// max는 최대 행 수, current는 현재 출력중인 행의 위치
function printStar(max, current=1) {
    ... 구현하세요 ...
}

printStar(5);
``` */

function printStar(max, current=1) {
    if (current > max){
        return;
    } else {
        let str = "" 
        for (let i =0; i < current; i++){
            str += "*"
        }
        console.log(str)
        printStar(max, current+1);
    }
}

printStar(5)