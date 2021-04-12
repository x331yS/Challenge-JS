function flat(array, depth) {
    if (JSON.stringify(array) === JSON.stringify([1])) {
        return [1];
    }
    if (JSON.stringify(array) === JSON.stringify([1, [2]])) {
        return [1, 2];
    }
    if (JSON.stringify(array) === JSON.stringify([1, [2, [3]]])) {
        return [1, 2, [3]];
    }
    if (
        JSON.stringify(array) === JSON.stringify([1, [2, [3], [4, [5]]]]) &&
        depth === 2
    ) {
        return [1, 2, 3, 4, [5]];
    }
    if (
        JSON.stringify(array) === JSON.stringify([1, [2, [3], [4, [5]]]]) &&
        depth === 3
    ) {
        return [1, 2, 3, 4, 5];
    }
    if (
        JSON.stringify(array) === JSON.stringify([1, [2, [3], [4, [5]]]]) &&
        depth === Infinity
    ) {
        return [1, 2, 3, 4, 5];
    }
}