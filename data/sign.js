function sign(num) {
    if (num > 0) {
        return 1

    }
    if (num === 0) {
        return 0

    }
    return -1
}

function sameSign(num1, num2) {
    return sign(num2) === sign(num1);
}