var data = new Array(6);

for (let i = 0; i <data.length; i++){
    data[i] = new Array(7)
}


let counter = 1

for (let i = 0; i < data.length; i++){
    for (let j = 0; j<data[i].length; j++){
        if(i ==0 && j < 6 || counter > 30){
            data[i][j] = 0;
        } else {
            data[i][j] = counter++
        }
    }
}


// \t 탭키
// \n 줄바꿈

for (let i = 0; i <data.length; i++){
    let str = ""
    for (let j = 0; j < data[i].length; j++){
        if (data[i][j] == 0){
            str += "\t";
        } else {
            str += data[i][j] + "\t";
        }
    }
    console.log(str);
}
