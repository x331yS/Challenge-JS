const pyramid = (char, depth) => {
    let result = ""
    let width = 1
    for (let i = 1; i <=depth; i++) {
        result += " ".repeat((char.length*depth)-i*char.length)
        if (i === depth) {
            result += char.repeat(width)
            break
        }
        result += char.repeat(width)+"\n"
        width += 2
    }

    return result
}

console.log(pyramid('$', 70))