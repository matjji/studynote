var check_list = [true, false, false, true, false];
console.log("before --> " + check_list);

for (let i = 0; i<check_list.length; i++){
    check_list[i] = !check_list[i]
}

//내 풀이
/**
for (let i = 0; i <check_list.length; i++){
    if(check_list[i] === true) {
        check_list[i] = false
    } else{
        check_list[i] = true
    }
}
*/
console.log("after --> " + check_list); 