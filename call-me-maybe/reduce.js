const reduce = (arr, func, accumulator) => {
    typeof accumulator !== "undefined"
        ? arr.forEach((val, index, arr) => (accumulator = func(accumulator, val)))
        : (accumulator = reduce(arr.slice(1), func, arr[0]));
    return accumulator;
};
const reduceRight = (array, fn) => reduce(array.slice().reverse(), fn)

const fold = (array, fn, accumulator) => reduce(array, fn, accumulator)

const foldRight = (array, fn, accumulator) => fold(array.slice().reverse(), fn, accumulator)