function groupPrice(str) {
    var regExp = /(USD)\d*\.\d*|[$]\d*\.\d*/g

    var regOne = /\d*(?=\.)/
    var regTwo = /\d*$/
    let array = str.match(regExp)
    let result = []
    if (array !== null) {
        for (let arrayElement of array) {
            let newarr = []
            newarr.push(arrayElement)
            newarr.push(regOne.exec(arrayElement)[0])
            newarr.push(regTwo.exec(arrayElement)[0])
            result.push(newarr)
        }
    }
    return result
}