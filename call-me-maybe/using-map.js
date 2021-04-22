const citiesOnly = (arr) => arr.map(x => x['city'])
function upperCasingStates(arr) {
    return arr.map(function (string) {
        let arr = string.split(" ");
        return arr
            .map(function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            })
            .join(" ");
    });
}
function fahrenheitToCelsius(arr) {
    return arr.map(function (str) {
        return Math.floor(((str.split("°F")[0] - 32) * 5) / 9) + "°C";
    });
}
function trimTemp(arr) {
    return arr.map(function (obj) {
        obj["temperature"] = obj["temperature"].match(/\S/g).join("");
        return obj;
    });
}
const tempForecasts = (arr) => arr.map(x => Math.floor((Number(x['temperature'].slice(0,-2))-32)/1.8)+'°Celsius'+' in '+x['city']+', '+x['state'].match(/\S+/g).map(x => x[0].toUpperCase()+x.slice(1,x.length).toLowerCase()).join(' '))