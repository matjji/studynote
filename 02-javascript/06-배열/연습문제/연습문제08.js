let arr = [5,3,2,8,9];
console.log("befor --> " + arr);

for (let i = 0; i < parseInt(arr.length/2); i++) {
    const tmp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = tmp;
}
console.log("after --> " + arr)