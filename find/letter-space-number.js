function letterSpaceNumber(str) {
    var r = /(\w\s\d)(?!(\w))/g
    if (str.match(r) == null) {
        return []
    }
    return str.match(r)
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
console.log(letterSpaceNumber("It's 20 past 3"))
console.log(letterSpaceNumber('example 1, example 2'))
console.log(letterSpaceNumber('Definitely 9.'))
