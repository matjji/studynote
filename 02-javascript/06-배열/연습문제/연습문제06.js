const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let money_list = []
let free = 0

for (let i = 0; i< price.length; i++) {
    const sum = price[i] * qty[i];
    if (sum >= 80000){
        free++
    }
}
/** 
for (let i = 0; i < price.length; i++){
    money_list[i] = price[i] * qty[i]
}

for (let j = 0; j< price.length; j++){
    if (money_list[j] >= 80000){
        free++
    }
}
*/
console.log("무료배송 항목: %d건",free)