function arrToSet(arr) {
    return new Set(arr)
}
function arrToStr(arr) {
    return arr.join('')
}
function setToArr(set) {
    return Array.from(set)
}
function setToStr(set) {
    return arrToStr(Array.from(set))
}
function strToArr(str) {
    return Array.from(str)
}
function strToSet(str) {
    return new Set(Array.from(str))
}
function mapToObj(map) {
    return Object.fromEntries(map.entries())
}
function objToMap(obj) {
    return new Map(Object.entries(obj))
}
function objToArr(obj) {
    return Object.values(obj)
}
function arrToObj(arr) {
    return Object.assign({}, arr)
}
function strToObj(str) {
    return Object.assign({}, strToArr(str))
}
// TEST NEW TECHNIQUE
// This is what is called a 'Conditional operator'
// let result = condition ? value1 : value2
//                  ^^        ^^      ^^
// let result =  1 == 2   ?  "YES" : "NO!"
// Using conditional operator for that shit of collections.js because it's difficult duuude
const superTypeOf = (arg) => toString.call(arg).slice(8, -1) === 'Null' ? 'null' : toString.call(arg).slice(8, -1) === 'Undefined' ? 'undefined' : toString.call(arg).slice(8, -1)
