const data = [10,20,30,40,50];
const len = data.length
let sum = 0

for (let i = 0; i < len; i++){
    sum += data[i]
}
const avg = sum / len
console.log("총합은 %d",sum)
console.log("평균은 %d", avg)
