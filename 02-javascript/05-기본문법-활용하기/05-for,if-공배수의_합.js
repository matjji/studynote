const x = 3;
const y = 5;

let sum = 0
for(let i = 1; i <= 100; i++){
    if (i % x == 0 && i % y ==0){
        console.log(i)
        sum += i
    }
}

console.log("%d 와 %d의 공배수의 합은 %d이다.", x, y, sum)