/**## 문제 5.

for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오.

```
0 1 2 3 
1 2 3 4 
2 3 4 5 
3 4 5 6 
```
 */
for (let i = 0; i<4; i++){
    let str ="";

    for (let j = 0; j<4; j++){
        str += i+j;
        if (j + 1 < 4){
            str += " ";
        }
    }
    console.log(str);
}
