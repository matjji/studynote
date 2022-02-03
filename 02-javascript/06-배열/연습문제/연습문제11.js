let item_list = [
    [500, 291],
    [320, 586],
    [100, 460],
    [120, 558],
    [92,18],
    [30, 72],
];

let sum = 0;
let price = 0;

for (let i = 0; i < item_list.length; i++){
        price += (item_list[i][0] *0.9) * item_list[i][1] 
}
console.log("아이템 총 판매가격: %dG",price);