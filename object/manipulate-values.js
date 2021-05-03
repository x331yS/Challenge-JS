const filterValues = (AA,BB) => {
    let res = {}
    for (let [DD, EE] of Object.entries(AA)) {
        if (BB(EE)) {
            res[DD] = EE
        }
    }
    return res
}

const mapValues = (AA,BB) => {
    let res = {}
    for (let [DD, EE] of Object.entries(AA)) {
        res[DD] = BB(EE)
    }
    return res
}

const reduceValues = (AA, BB, CC) =>
    CC === undefined
        ? Object.values(AA).reduce((fn, n) => fn + n, 0)
        : Object.values(AA).reduce((fn, n) => fn + n, CC);