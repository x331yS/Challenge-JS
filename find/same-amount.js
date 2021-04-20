function sameAmount(str, regexp1, regexp2) {
    let arr1 = [];
    let arr2 = [];
    arr1 = str.match(new RegExp(regexp1, 'g'));
    arr2 = str.match(new RegExp(regexp2, 'g'));
    if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
        return false
    }
    if (arr1.length === arr2.length) {
        return true
    }
    return false
}

const datax = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

console.log(!sameAmount(datax, /q /, /qqqqqqq/))