function is.num (type)
{
    typeof type === 'number'
}
function is.nan (type)
{
    type.isNaN()
}
function is.str (type)
{
    typeof type === 'str'
}

function is.bool (type)
{
    typeof foo === 'boolean'
}

function is.undef (type)
{
    typeof foo === 'undefined'
}

function is.def (type)
{
    typeof foo != 'undefined'
}

function is.arr (type)
{
    arr.isArray()
}
function is.thursty (type)
{
    type === true
}
function is.falsy (type)
{
    type === false
}