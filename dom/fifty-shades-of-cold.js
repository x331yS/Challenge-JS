export {generateClasses, generateColdShades, choseShade}
import {colors} from './data.js'

function generateClasses() {
    let style = document.createElement('style')
    colors.forEach(color => {
        style.textContent += (`.${color}{background: ${color};}\n`)
    });
    document.head.appendChild(style)
}

function generateColdShades() {
    colors.forEach(color => {
        if ((/(aqua|blue|turquoise|green|cyan|navy|purple)/).test(color)) {
            let div = document.createElement('div')
            div.classList.add(color)
            div.textContent = color
            document.body.appendChild(div)
        }
    });
}

const choseShade = (color) => {
    for (let i of document.querySelectorAll('div')) {
        i.className = color
    }
}

