is.num = (typ) => typeof typ === 'number'
is.nan = (typ) => Number.isNaN(typ)
is.str = (typ) => typeof typ === 'str'
is.bool = (typ) => typeof typ === 'boolean'
is.undef = (typ) => typeof typ === 'undefined'
is.def = (typ) => typeof typ !== 'undefined'
is.arr = (typ) => arr.isArray()
is.obj = (arg) => typeof(arg) === 'object' ? toString.call(arg).slice(8, -1) === 'Array' ? "" : arg === null ? "" : typeof arg:  ""
is.fun = (typ) => typeof(typ) === 'function' ? typeof(typ) : ""
is.truthy = (typ) =>  typ === true
is.falsy  = (typ) =>  typ === false