export { createCircle, moveCircle, setBox }

function createCircle() {
    document.addEventListener('click', event => {
        let circle = document.createElement('div')
        circle.className = 'circle'
        circle.style.background = 'white'
        let x = event.clientX - 25
        let y = event.clientY - 25
        circle.style.left = `${x}px`
        circle.style.top = `${y}px`
        if (isInFrame(x, y)) {
            circle.style.background = 'var(--purple)'
        }

        document.body.appendChild(circle)
    })
}


function moveCircle() {
    document.addEventListener('mousemove', event => {
        let circles = document.getElementsByClassName('circle')
        let circle = circles[circles.length - 1]

        let boxes = document.getElementsByClassName('box')
        let box = boxes[boxes.length - 1]

        let rect = box.getBoundingClientRect()

        let x = event.clientX - 25
        let y = event.clientY - 25
        let rectX1 = rect.x
        let rectX2 = rect.x + rect.width
        let rectY1 = rect.y
        let rectY2 = rect.y + rect.height

        console.log(rectX2, rect.right, rectY1, rect.bottom)

        if (isInFrame(x, y)) {
            circle.style.background = 'var(--purple)'
        }

        if (circle.style.background.startsWith('var(--purple)')) {
            if ((x > rectX1) && (x + 50 < rectX2)) {
                circle.style.left = `${x}px`
            } else {
                if (x < rectX1) {
                    circle.style.left = `${rectX1}px`
                }
                if (x + 50 > rectX2) {
                    circle.style.left = `${rectX2 - 50}px`
                }
            }

            if ((y > rectY1) && (y + 50 < rectY2)) {
                circle.style.top = `${y}px`
            } else {
                if (y < rectY1) {
                    circle.style.top = `${rectY1}px`
                }
                if (y + 50 > rectY2) {
                    circle.style.top = `${rectY2 - 50}px`
                }
            }


        } else {
            circle.style.left = `${x}px`
            circle.style.top = `${y}px`
        }
    })
}

function isInFrame(x, y) {
    let boxes = document.getElementsByClassName('box')
    let box = boxes[boxes.length - 1]

    let rect = box.getBoundingClientRect()
    let rectX1 = rect.x
    let rectX2 = rect.x + rect.width
    let rectY1 = rect.y
    let rectY2 = rect.y + rect.height
    return ((x > rectX1) &&
        (x + 50 < rectX2) &&
        (y > rectY1) &&
        (y + 50 < rectY2)
    )
}

function setBox() {
    let box = document.createElement('div')
    box.className = 'box'
    document.body.appendChild(box)
}