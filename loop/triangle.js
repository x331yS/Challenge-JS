const triangle = (char,depth) => {
    let result = ""
    for (let i=1; i <= depth;i++) {
        if (i === depth) {
            result += char.repeat(i)
            break
        }
        result += (char.repeat(i)+"\n")
    }
    return result
}

console.log(triangle('$', 7))