const filterEntries = (AAAA,BBBB) => {
    let result = {}
    for (let [k, D] of Object.entries(AAAA)) {
        if (BBBB([k,D])) {
            result[k] = D
        }
    }
    return result
}


const mapEntries = (AAAA,BBBB) => {
    let result = {}
    for (let [k, D] of Object.entries(AAAA)) {
        result[BBBB([k,D])[0]] = BBBB([k,D])[1]
    }
    return result
}

const reduceEntries = (AAAA,BBBB,CCC) => {
    let arr = Object.entries(AAAA)
    if (CCC == undefined) {
        CCC = ''
    }
    for (let i of arr) {
        CCC = BBBB(CCC,i)
    }
    return CCC
}

const lowCarbs = (AAAA) => {
    let result = {}
    for (let [k, D] of Object.entries(AAAA)) {
        if (D/100*nutritionDB[k]['carbs'] < 50) {
            result[k] = D
        }
    }
    return result
}

const totalCalories = (AAAA) => {
    let result = 0
    for (let [k, D] of Object.entries(AAAA)) {
        result += D/100*nutritionDB[k]['calories']
    }
    return Number(result.toFixed(1))
}

const cartTotal = (AAAA) => {
    let result = {}
    for (let [k, D] of Object.entries(AAAA)) {
        let tmp = {}
        for (let [kk, vv] of Object.entries(nutritionDB[k])) {
            tmp[kk] = Math.round((D/100*vv)*1000)/1000
        }
        result[k] = tmp
    }
    return result
}