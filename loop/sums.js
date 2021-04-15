function recursiveSums(n, currentSum, start, result, output) {
    if (n <= 1) {
        return []
    }
    if (currentSum === n) {
        output.push(result.slice())
    }
    for (let i = start; i < n; i++) {
        let tempSum = currentSum + i
        if (tempSum > n) return
        result.push(i);
        recursiveSums(n, tempSum, i, result, output)
        result.pop()
    }
}

function sums(n) {
    let output = []
    let result = []
    recursiveSums(n, 0, 1, result, output);
    return output
}

console.log(sums(1))