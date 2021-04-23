const filter = (arr, func) => {
    const res = [];
    arr.forEach((value, index, arr) => (func(value, index, arr) ? res.push(value) : 0));
    return res;
};
const reject = (arr, func) => {
    const res = [];
    arr.forEach((value, index, arr) => (func(value, index, arr) ? 0 : res.push(value)));
    return res;
};

const partition = (array, func) => [filter(array, func), reject(array, func)] 