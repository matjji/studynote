const student = ['둘리', '도우너', '또치', '희동'];

let grade =[
    [78, 89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98],
];


for (let i =0; i< grade.length; i++){
    let stuSum = 0
    for (let j = 0; j < grade[i].length; j++){
        stuSum += grade[i][j]
    }
    avg = stuSum/ grade[i].length
    avg = avg.toFixed(2)
    console.log("%s의 총점: %d점, 평균: %s점",student[i], stuSum, avg)
}
