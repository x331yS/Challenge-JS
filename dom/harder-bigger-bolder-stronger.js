export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const generateLetters = () => {
    let last = document.querySelector("body");
    let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    for (let ind = 0; ind < 120; ind++) {
        const newDiv = document.createElement("div");
        newDiv.textContent = alphabet[random(0, 25)];
        if (ind < 40) {
            newDiv.style.cssText =
                "font-size: " + (11 + ind) + "px; font-weight: " + 300 + ";";
        } else if (ind < 80) {
            newDiv.style.cssText =
                "font-size: " + (11 + ind) + "px; font-weight: " + 400 + ";";
        } else {
            newDiv.style.cssText =
                "font-size: " + (11 + ind) + "px; font-weight: " + 600 + ";";
        }
        last.append(newDiv);
    }
};