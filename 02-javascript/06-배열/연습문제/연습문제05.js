const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let money = price[0]* qty[0];
let money_list = []

for (let i = 1; i<price.length; i++){
    if (money < price[i]* qty[i]){
        money = price[i] * qty[i]
    }
}


/** 
for (let i = 0; i < price.length; i++){
    money_list[i] = price[i] * qty[i]
}
for (let j = 0; j< price.length; j++){
    var max_money = money_list[0]
    if (max_money < money_list[j]){
        max_money = money_list[j]
    }
}
*/
console.log("가장 높은 상품금액: %d원",money)