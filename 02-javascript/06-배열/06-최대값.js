const data = [5,2,7,9,2];
const len = data.length
let max = data[0]
for (let i = 0; i<len; i++){
    if(max < data[i]){
        max = data[i]
    }
}

console.log("최대값: %d",max)