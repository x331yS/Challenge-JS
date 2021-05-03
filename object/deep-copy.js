const deepCopy = (pls) => {
    let altfquatre, f, key;
    if (
        typeof pls !== "object" ||
        pls === null ||
        pls instanceof RegExp
    ) {
        return pls;
    }
    altfquatre = Array.isArray(pls) ? [] : {};
    for (key in pls) {
        f = pls[key];
        altfquatre[key] = deepCopy(f);
    }
    return altfquatre;
};