const student = ['둘리', '도우너', '또치', '희동'];

let grade =[
    [78, 89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98],
];

let sum = 0;
let avg = 0;
let sumAvg = 0;

for (let i =0; i< grade.length; i++){
    let stuSum = 0
    for (let j = 0; j < grade[i].length; j++){
        stuSum += grade[i][j]
        sum += grade[i][j]
    }
    avg = stuSum/ grade[i].length
    sumAvg += avg
    avg = avg.toFixed(2)
    console.log("%s의 총점: %d점, 평균: %s점",student[i], stuSum, avg)
}
let totalAvg = sumAvg / grade.length;
totalAvg = totalAvg.toFixed(2);
console.log("반평균= %d점",totalAvg)