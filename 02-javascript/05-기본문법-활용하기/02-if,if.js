const score = 99

if (score>=70) {
    console.log("Pass 입니다.")
    if (score >=90){
        console.log("A")
    } else if (score >=80) {
        console.log("B")
    } else{
        console.log("C")
    }
} else {
    console.log("Non-Pass 입니다.")
}