const pronouns = ['i','you','he','she','it','we','they']

const pronoun = (pronomMaGueule) => {
    let res = {}
    let unarraydesplusbasiques = pronomMaGueule.toLowerCase().match(/\w+/ig)
    unarraydesplusbasiques.forEach((v,i)=> {
        if (pronouns.includes(v.toLowerCase())) {
            if (!(v in res)) {
                res[v] = {word:[],count:0}
            }
            if (unarraydesplusbasiques[i+1] !== undefined && !(pronouns.includes(unarraydesplusbasiques[i+1].toLowerCase()))) {
                res[v]['word'].push(unarraydesplusbasiques[i+1])
            }
            res[v]['count'] += 1
        }
    })
    return res
}