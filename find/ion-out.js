function ionOut(str) {
    var r = /([a-z]*t(?=(ion)))/g;
    if (str.match(r) != null) {
        return str.match(r);
    }
    return [];
}