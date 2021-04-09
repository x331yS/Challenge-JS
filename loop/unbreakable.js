function split(str, separator) {
    let lenStr = str.length;
    let lenSepatator = separator.length;
    let words = [];
    let separatorCount = 0;
    let word = ''
    if (separator != '') {
        for (let i = 0; i < lenStr; i++) {
            word += String(str[i]);
            let lenWord = word.length;
            if (lenWord => lenSepatator) {
                if (word.slice(lenWord - lenSepatator, lenWord) == separator) {
                    separatorCount++
                    words.push(word.slice(0, lenWord - lenSepatator))
                    word = ''
                }
            }
            if (i == lenStr - 1 && word != '') {
                words.push(word)
            }
        }
    }

    if (separatorCount == words.length) {
        words.push('')
        return words
    }
    return words
}
const join = (arr,separator) => {
    let result = ""
    for (let i=0;i < arr.length;i++) {
        if (i == arr.length-1) {
            result += arr[i]
            break
        }
        result += arr[i]+separator
    }

    return result
}