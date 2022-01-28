let oddSum = 0 // 홀수의 합
let evenSum = 0 // 짝수의 합

for(let i = 1; i<=10; i++){
    if (i % 2 ==0) {
        console.log("%d는 짝수입니다.", i)
        evenSum += i
    } else{
        console.log("%d는 홀수입니다.", i)
        oddSum += i
    }
}

console.log("홀수의 합: %d", oddSum);
console.log("짝수의 합: %d", evenSum);