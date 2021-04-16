let sameAmount = (data,firstReg,secondReg) => {
    let first = new RegExp(firstReg, 'g')
    let second = new RegExp(secondReg, 'g')
    let f = data.match(first)
    let s = data.match(second)
    return f == undefined ? s == undefined ? true : false : s == undefined ? false : f.length == s.length
}