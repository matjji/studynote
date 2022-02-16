/**
## 문제5. (로또번호 생성기 2)

`1~45`사이의 범위의 1씩 증가 하는 원소가 저장되어 있는 배열 `balls`을 생성하고 6개의 빈 칸을 갖는 배열 `lotto`를 생성하시오.

`lotto` 배열을 탐색하는 반복을 수행하면서 `balls` 배열에서 임의의 원소 하나를 추출하여 `lotto` 배열에 채워 넣으시오.

추출된 숫자는 `balls` 배열에서는 삭제되어야 합니다.
 */
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

let balls = [];
for (let i = 1; i < 46; i++) {
    balls.push(i)
}

let lotto = new Array(6)


for (let i = 0; i < lotto.length; i++) {
    const rnd = random(0, balls.length -1);

    lotto[i] = balls[rnd]

    let snum = balls.splice(rnd, 1);
    console.log(snum)
}
console.log(balls)
console.log(lotto)