/**var grade = [
    ["HTML", 75],
    ["CSS",82],
    ["Javascript", 91]
    ];
*/
const grade = [75,82, 91]
var sum = 0;
var avg = 0;
for (let i = 0; i< grade.length; i++){
    sum += grade[i]
}
/**for (let i =0; i<grade.length; i++){
    for (let j =1; j<grade[i].length; j++){
        sum += grade[i][j]
    }
}
*/
avg = sum / grade.length
avg = avg.toFixed(2)
console.log("총점: " + sum + "점, 평균점수: " + avg +'점');