function ceil(num) {
    if (num > 0) {
        return num + 1 - (num % 1);
    }
    return num - (num % 1);
}
function floor(num) {
    if (num >= 0) {
        return num - (num % 1);
    }
    return num - 1 - (num % 1);
}
function trunc(num) {
    return num - (num % 1);
}
function round(num) {
    let sign = 1;
    if (num < 0) {
        num *= -1;
        sign = -1;
    }
    if (num % 1 >= 0.5) {
        return sign * ceil(num);
    }
    return sign * floor(num);
}