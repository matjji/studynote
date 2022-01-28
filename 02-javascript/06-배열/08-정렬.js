const data = [3,5,1,4,2]

for (let i = 0; i<data.length; i++){
    for (let j = i+1; j< data.length; j++){
        // ">" : 오름차순
        // "<" : 내림차순
        if (data[i]>data[j]){
            const tmp = data[i]
            data[i] = data[j]
            data[j] = tmp
        }
    }
}

console.log(data)
