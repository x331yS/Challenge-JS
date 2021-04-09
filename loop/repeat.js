function repeat(str, num) {
    let newstr = ""
    for (let i = 0; i < num; i++) {
        newstr += str
    }
    return newstr

}

console.log(repeat('abc', 8))
