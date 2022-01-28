let y = 0
while (true) {
    y++
    if (y % 2 ==0){
        continue
    }

    if (y > 10) {
        break
    }
    console.log("Hello World ::; %d", y);
}