function slice(array, s, e) {
    let slice = [];
    if (!s) {
        s = 0;
    }
    if (s < 0) {
        s = array.length + s
    }
    if (!e) {
        e = array.length
    }
    if (e < 0) {
        e = array.length + e
    }
    for (let i = s; i < e; i++) {
        slice.push(array[i])
    }
    if (typeof array === 'string') {
        return slice.join('')
    }
    return slice
}