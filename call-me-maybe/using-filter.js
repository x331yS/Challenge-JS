const filterShortStateName = array => array.filter(word => word.length < 7);

const filterStartVowel = array => array.filter(word => (/^[aeiouAEIOU]/).test(word))

const filter5Vowels = array => array.filter(word => word.match(/[aeiouAEIOU]/g).length >= 5)

const filter1DistinctVowel = array => array.filter(word => {
    let arr = word.match(/[aeiouAEIOU]/g)
    return arr.every(v => v.toLowerCase() === arr[0].toLowerCase())
})

const multiFilter = (arrObj) =>
    arrObj.filter(
        (elem) =>
            elem["capital"].length > 7 &&
            !/[a|i|u|e|o]/gi.test(elem["name"][0]) &&
            /[a|i|u|e|o]/gi.test(elem["tag"]) &&
            elem["region"] !== "South"
    );