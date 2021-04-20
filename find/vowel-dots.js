const vowels = /[aoeuiAOEUI]/g;
const vowelDots = (str) => str.replace(vowels, '$&.')

console.log("HellaworldLol")
console.log(vowelDots("HellaworldLol"))