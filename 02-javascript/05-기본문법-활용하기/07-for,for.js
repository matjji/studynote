for (let i = 0; i < 3; i++){
    console.group("i에 대한 반복 수행 시작 >> i=%d", i)
    for(let j = 0; j<5; j ++){
        console.log("i=%d j=%d",i,j)
    }
    console.groupEnd()
}