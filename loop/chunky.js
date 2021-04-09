function chunk(arr, size) {
    let tableDude = [];
    for (let i = 0; i < arr.length; i += size) {
        tableDude.push(arr.slice(i, i + size));
    }
    return tableDude;
}