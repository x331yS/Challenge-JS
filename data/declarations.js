const escapeStr = '\` / \\ \" \''
const arr = [4, '2']
const obj = {
    str: "",
    num: 0,
    bool: false,
    undef: undefined
};
Object.freeze(obj)

const nested = {
    arr: [arr[0], undefined, arr[1]],
    obj: {
        str: "",
        num: 0,
        bool: false
    }
}

Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)
