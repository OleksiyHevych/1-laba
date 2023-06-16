function factorial(n){
    var fact = 1;
while (n > 1) {
    fact *= n
    n -= 1
}
return fact
}
const n = 8;
var result = factorial(n)
console.log(result);
