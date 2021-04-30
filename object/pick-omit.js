const pick = (aDude,beaugosse) => {
    let resultAAAAAAAAAAAAAAAAAAAA = {}
    if (typeof beaugosse == 'string') {
        beaugosse = [beaugosse]
    }
    Object.keys(aDude).forEach((bg)=> beaugosse.forEach((k)=> bg == k ? resultAAAAAAAAAAAAAAAAAAAA[k]=aDude[k] : ""))
    return resultAAAAAAAAAAAAAAAAAAAA
}

const omit = (aDude,beaugossse) => {
    let resultAAAAAAAAAAAAAAAAAAAA = Object.assign({},aDude)
    if (typeof beaugossse == 'string') {
        beaugossse = [beaugossse]
    }
    beaugossse.forEach((bg)=>delete resultAAAAAAAAAAAAAAAAAAAA[bg])
    return resultAAAAAAAAAAAAAAAAAAAA
}