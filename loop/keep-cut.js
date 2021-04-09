const cutFirst = (str) => str.slice(2)
const cutLast = (str) => str.slice(0, -2)
const cutFirstLast = (str) => str.slice(2).slice(0, -2)
const keepFirst = (str) => str.slice(0, 2)
const keepLast = (str) => str.slice(-2)
function keepFirstLast(str) {
    if (str.length < 4) {
        return str
    }
    return str.slice(0, 2) + str.slice(-2)
}