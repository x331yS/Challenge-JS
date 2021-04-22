const citiesOnly = (arr) => arr.map(x => x['city'])
const toUpper = string => string.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());

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

const fahrenheitToCelsius = (arr) => arr.map(str => Math.floor(((str.split("°F")[0] - 32) * 5) / 9) + "°C");

function trimTemp(arr) {
    return arr.map(function (obj) {
        obj["temperature"] = obj["temperature"].match(/\S/g).join("");
        return obj;
    });
}

const tempForecasts = (objArray) => objArray.map(obj => fahrenheitToCelsius(obj.temperature.replace(/ /g, '').split('°F')[0]) + '°Celsius in ' + obj.city + ', ' + toUpper(obj.state))
