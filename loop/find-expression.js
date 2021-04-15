function findExpression(max) {
    let variants = [{n: 1, ops: "1"}];
    while (variants.length > 0) {
        const newVartiants = [];
        variants.forEach((v) => {
            const mul2 = {
                n: v.n * 2,
                ops: v.ops + " *2",
            };
            const add4 = {
                n: v.n + 4,
                ops: v.ops + " +4",
            };
            if (add4.n <= max) {
                newVartiants.push(add4);
            }
            if (mul2.n <= max) {
                newVartiants.push(mul2);
            }
        });
        if (newVartiants[0] && newVartiants[0].n === max) {
            variants = [newVartiants[0]];
            break;
        }
        variants = newVartiants;
    }
    return variants[0] ? variants[0].ops : undefined;
}
console.log(findExpression(7))