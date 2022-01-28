const grade = [
    ["철수",92,81,76],
    ["영희",72,95,84],
    ["민혁",80,86,98]
];

let sum = 0;

for (let i = 0; i<grade.length; i++){
    let personalSum = 0
    for (let j = 1; j<grade[i].length; j++){
        sum += grade[i][j]
        personalSum += grade[i][j]
    }
    const personalAvg = personalSum / (grade[i].length-1)
    console.log("%s학생의 총점은 %d이고 평균은 %d입니다.",grade[i][0], personalSum, personalAvg)
}
console.log("학생들의 총점은 %d이다.", sum)