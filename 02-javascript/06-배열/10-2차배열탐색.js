const myArr =[
    [1,2,3],
    [4,5,6,7]
];

console.log(myArr.length)
console.log(myArr[0].length)
console.log(myArr[1].length)

for (let i = 0; i<myArr.length; i++){
    console.group(i +"번째 행")
    console.log(myArr[i]);
    for (let j = 0; j<myArr[i].length; j++){
        console.log(myArr[i][j])
    }
    console.groupEnd()
}