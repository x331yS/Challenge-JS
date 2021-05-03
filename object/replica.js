const replica = (...a) => {
    let res = {}
    a.forEach((asanss) => {
        Object.entries(asanss).forEach(([key, v]) => {
            if (isObject(v) && isObject(res[key])) {
                res[key] = replica(res[key], v)
            } else {
                res[key] = v
            }
        })
    })
    return res
}

const isObject = asanss => Object.prototype.toString.call(asanss) === '[object Object]';