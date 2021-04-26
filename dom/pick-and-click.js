export { pick }

let hsl;


function pick() {
    createDivs()

    document.addEventListener('mousemove', event => {
        let x = event.clientX
        let y = event.clientY

        let width = document.body.clientWidth
        let height = document.body.clientHeight

        let hue = Math.round((x / width) * 360)
        let luminosity = Math.round((y / height) * 100)
        hsl = `hsl(${hue}, 50%, ${luminosity}%)`

        let hslElem = document.querySelector('.hsl')
        let hueElem = document.querySelector('.hue')
        let luminosityElem = document.querySelector('.luminosity')
        let axisX = document.getElementById('axisX')
        let axisY = document.getElementById('axisY')

        hslElem.textContent = hsl
        hueElem.textContent = `hue\n${hue}`
        luminosityElem.textContent = `${luminosity}\nluminosity`

        axisX.setAttribute('x1', x);
        axisX.setAttribute('x2', x);
        axisX.setAttribute('y1', 0);
        axisX.setAttribute('y2', width);

        axisY.setAttribute('x1', 0);
        axisY.setAttribute('x2', height);
        axisY.setAttribute('y1', y);
        axisY.setAttribute('y2', y);

        document.body.style.background = hsl
    })

    document.body.addEventListener('click', () => {
        document.execCommand("copy");
    })

    document.body.addEventListener('copy', (event) => {
        event.clipboardData.setData('text/plain', hsl);
        event.preventDefault();
    })
}

function createDivs() {
    let hslDiv = document.createElement('div')
    hslDiv.classList.add('text', 'hsl')
    document.body.appendChild(hslDiv)

    let hueDiv = document.createElement('div')
    hueDiv.classList.add('text', 'hue')
    document.body.appendChild(hueDiv)

    let luminosityDiv = document.createElement('div')
    luminosityDiv.classList.add('text', 'luminosity')
    document.body.appendChild(luminosityDiv)

    let SVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    let line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.id = 'axisX'
    line2.id = 'axisY'
    SVG.appendChild(line1)
    SVG.appendChild(line2)
    document.body.appendChild(SVG)
}