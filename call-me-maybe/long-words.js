let longWords = (arr) => arr.every((str) => str.length > 4);
let oneLongWord = (arr) => arr.some((str) => str.length > 9);
let noLongWords = (arr) => arr.every((str) => str.length < 7);