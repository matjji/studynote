//피보나치 수열

function fibonacci(n) {
    if (n < 2){
        return n;
    } else {
        return fibonacci(n-2) + fibonacci(n-1)
    }
}
const f = fibonacci(10)
console.log(f)