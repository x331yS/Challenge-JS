const flow = (arr) => (...str) => {
    let temp = arr[0](...str);
    arr = arr.slice(1);
    for (let each of arr) {
        temp = each.apply(this, [temp]);
    }
    return temp;
};