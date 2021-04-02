function isPositive(number){
    return number > 0
}
function abs(number) {
    if (!isPositive(number)&& number !== 0)  {
        return -number
    }
    return number
}
console.log(abs(3))