const myArr = new Array(5);
console.log(myArr)

const len = myArr.length;

for (let i = 0; i < len; i++){
    myArr[i] = i * 10;
}
console.log(myArr)