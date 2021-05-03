const filterKeys = (AAA,BBB) => {
    let CCC = {}
    for (let [DDDD, EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE] of Object.entries(AAA)) {
        if (BBB(DDDD)) {
            CCC[DDDD] = EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        }
    }
    return CCC
}

const mapKeys = (A,B) => {
    let res = {}
    for (let [k, v] of Object.entries(A)) {
        res[B(k)] = v
    }
    return res
}

const reduceKeys = (A, B, C) =>
    C === undefined
        ? Object.keys(A).reduce(B)
        : Object.keys(A).reduce(B, C);