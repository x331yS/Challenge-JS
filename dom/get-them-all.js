export { getArchitects, getClassical, getActive, getBonannoPisano }

function getActive() {
    var arr = []
    arr.push(Array.from(document.getElementsByClassName('classical active')))
    arr.push(Array.from(document.querySelectorAll('.classical:not(.active)')))

    return arr
}

const getClassical = () => [Array.from(document.querySelectorAll('a.classical'))].concat([Array.from(document.querySelectorAll('a:not(.classical)'))])

const getArchitects = () => [Array.from(document.getElementsByTagName('a'))].concat([Array.from(document.getElementsByTagName('span'))])

function getBonannoPisano() {
    var arr = []
    arr.push(document.getElementById("BonannoPisano"))
    arr.push(Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)')))

    return arr
}