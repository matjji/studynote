/**## 문제3

위 2번 문제를 for문으로 다시 표현하시오. */
let k = 1
for(let x = 1; x<=10; x++){
    k *= 2
    console.log("이진수 %d개는 %d개의 정보를 표시가능", x, k);
}