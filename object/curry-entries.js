const mapAverage = (SSSSSS) => {
    return mapCurry(([k, v]) => {
        let newObj = { ...v };
        newObj["averageScore"] = (v.shootingScore + v.pilotingScore) / 2;
        return [k, newObj];
    })(SSSSSS);
};
const defaultCurry = (Z) => {
    return (S) => {
        let result = Object.assign({},Z)
        Object.keys(S).forEach((k)=>result[k]=S[k])
        return result
    }
}

const mapCurry = (A) => {
    return (SSSSSS) => Object.fromEntries(Object.entries(SSSSSS).map(A))
}

const reduceCurry = (A) => {
    return (SSSSSS,iv) => Object.entries(SSSSSS).reduce(A, iv)
}

const filterCurry = (A) => {
    return (SSSSSS) =>  Object.fromEntries(Object.entries(SSSSSS).filter(A))
}

const forceUsers = filterCurry(([k,v]) => v.isForceUser)

const reduceScore = (SSSSSS,iv) => reduceCurry((acc,[k,v]) => acc + v.shootingScore+ v.pilotingScore)(forceUsers(SSSSSS),iv)

const filterForce = (SSSSSS) => filterCurry(([k,v])=>v.shootingScore >= 80)(forceUsers(SSSSSS))

