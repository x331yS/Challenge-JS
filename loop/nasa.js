function nasa(num) {
    let result = ""
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'NASA'
        } else if (i % 3 === 0) {
            result += 'NA'
        } else if (i % 5 === 0) {
            result += 'SA'
        } else {
            result += i + ' '
        }
    }
    return result.slice(0, result.length - 1)
}