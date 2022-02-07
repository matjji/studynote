/**
 ## 문제1.

다음은 10명의 학생들에 대한 혈액형 데이터이다.

```
['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
```

아래와 같은 JSON을 정의하고, 각 혈액형별 학생수를 아래의 json의 각 key에 대한 value에 저장하시오. (혈액형별 학생 수를 for문을 활용하여 산출해야 합니다.)

```js
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
```

 */

const blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
let count_A = 0
let count_B = 0
let count_O = 0
let count_AB = 0

for (let i = 0; i <blood.length; i++){
    if (blood[i] == 'A') {
        count_A++
    } else if (blood[i] == 'B'){
        count_B++
    } else if (blood[i] == "O") {
        count_O++
    } else if (blood[i] == 'AB') {
        count_AB++
    }

}
const result = {"A": count_A, "B": count_B, "AB": count_AB, "O": count_O}
console.log(result)


/**
const blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0}

for (let b of blood) {
    result[b]++
}
console.log(result)
*/