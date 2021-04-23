function map(array, fn) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i], i, array))
    }
    return newArray
}
const flatMap = (arr, func) => arr.reduce((acc,c,i,a) => acc.concat(func(c,i,a)),[])