const fusion = (AAAAAAAAAAAA, BBBBBBBBBBBBBB) => {
    if (Array.isArray(AAAAAAAAAAAA) && Array.isArray(BBBBBBBBBBBBBB)) {
        return AAAAAAAAAAAA.concat(BBBBBBBBBBBBBB);
    }

    if (typeof AAAAAAAAAAAA === "string" && typeof BBBBBBBBBBBBBB === "string") {
        return AAAAAAAAAAAA + " " + BBBBBBBBBBBBBB;
    }

    if (typeof AAAAAAAAAAAA === "number" && typeof BBBBBBBBBBBBBB === "number") {
        return AAAAAAAAAAAA + BBBBBBBBBBBBBB;
    }

    if (AAAAAAAAAAAA === undefined) {
        return BBBBBBBBBBBBBB;
    }

    if (BBBBBBBBBBBBBB === undefined) {
        return AAAAAAAAAAAA;
    }

    if (typeof AAAAAAAAAAAA != typeof BBBBBBBBBBBBBB) {
        return BBBBBBBBBBBBBB;
    }

    if (AAAAAAAAAAAA instanceof RegExp && BBBBBBBBBBBBBB instanceof RegExp) {
        return BBBBBBBBBBBBBB;
    }

    if (AAAAAAAAAAAA instanceof Set && BBBBBBBBBBBBBB instanceof Set) {
        return BBBBBBBBBBBBBB;
    }

    let result = {};

    let keys = Object.keys(AAAAAAAAAAAA).concat(Object.keys(BBBBBBBBBBBBBB));
    keys.filter((key, i) => keys.indexOf(key) === i);

    keys.forEach((key) => {
        result[key] = fusion(AAAAAAAAAAAA[key], BBBBBBBBBBBBBB[key]);
    });

    return result;
};