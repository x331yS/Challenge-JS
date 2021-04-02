function words(s) {
    return s.split(' ')
}
function sentence(array) {
    return array.join(' ')
}

function yell(s) {
    return s.toUpperCase()
}
function whisper(s) {
    return "*"+s.toLowerCase()+"*"
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1,s.length).toLowerCase()

}