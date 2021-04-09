function multiply (a,b) {
    if (b === 0 || a === 0) {
        return 0
    }
    const tmp = a;
    if (b < 0) {
        while (b !== 1) {
            a -= tmp
            b++
        }
    } else {
        while (b !== 1) {
            a += tmp
            b--
        }
    }
    return a
}
function divide(a, b) {
    if (b === 0) {
        return 0
    }
    let signe = ((a < 0) ^ (b < 0)) ? -1 : 1;
    a = Math.abs(a);
    b = Math.abs(b);

    let quotient = 0;
    while (a >= b) {
        a -= b;
        ++quotient;
    }
    return multiply(signe, quotient)
}

function modulo(a, b) {
    return a - (multiply(divide(a, b), b))
}
