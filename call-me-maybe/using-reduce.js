const adder = (arr, word) => arr.reduce(((a,b)=>a+b),word = word || 0)

const sumOrMul = (arr,word) => arr.reduce(((a,b) => b%2 === 0 ? a*b : a+b), word = word || 0)

const funcExec = (arr, word) => arr.reduce(((a,b)=>b(a)), word = word || 0)
