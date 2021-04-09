function indexOf(array, value, index) {
    if (!index) {
        index = 0
    }
    for (let i = index; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}
function lastIndexOf(array,value,index){
    if (index === undefined) {
        index = array.length
    }
    for (let i = index; i >= 0; i--) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}
function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return true
        }
    }
    return false
}