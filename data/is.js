const is = {}
is.num = (typ) => typeof typ === 'number'
is.nan = (typ) => Number.isNaN(typ)
is.str = (arg) => typeof(arg) === 'string' ? typeof(arg) : ""
is.bool = (arg) => typeof(arg) === 'boolean' ? typeof(arg) : ""
is.undef = (arg) => typeof arg === 'undefined' ? true : ""
is.def = (arg) => typeof arg !== 'undefined' ? true : ""
is.arr = (typ) => arr.isArray()
is.obj = (arg) => typeof(arg) === 'object' ? toString.call(arg).slice(8, -1) === 'Array' ? "" : arg === null ? "" : typeof arg:  ""
is.fun = (typ) => typeof(typ) === 'function' ? typeof(typ) : ""
is.truthy = (arg) => (arg) ? true : ""
is.falsy  = (typ) =>  typ === false

console.log(is.undef(NaN))