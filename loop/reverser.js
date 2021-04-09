function reverse(data) {
    let isString;
    let res = [];

    if (typeof data === 'string') {
        isString = true
    }

    for (let i = data.length - 1; i >= 0; i--) {
        res.push(data[i])
    }

    if (isString) {
        return res.join('')
    }
    return res
}

console.log(reverse('ok ma gueule'))