import { gossips } from './gossip_grid.data.js'

export { grid }

function grid() {
    create()
    let btn = document.querySelector('button')
    let textArea = document.querySelector('textarea')
    let width = document.getElementById('width')
    let fontSize = document.getElementById('fontSize')
    let background = document.getElementById('background')

    btn.addEventListener('click', event => {
        let gossip = textArea.value
        textArea.value = ''
        newGossip(gossip, true)
        event.preventDefault()
    })

    width.addEventListener('input', event => {
        let gossips = document.getElementsByClassName('gossip')
        for (let i = 0; i < gossips.length; i++) {
            let gossip = gossips[i];
            gossip.style.width = `${width.value}px`
        }
    })

    background.addEventListener('input', event => {
        let gossips = document.getElementsByClassName('gossip')
        for (let i = 0; i < gossips.length; i++) {
            let gossip = gossips[i];
            gossip.style.background = `hsl(280, 50%, ${background.value}%)`
        }
    })

    fontSize.addEventListener('input', event => {
        let gossips = document.getElementsByClassName('gossip')
        for (let i = 0; i < gossips.length; i++) {
            let gossip = gossips[i];
            gossip.style.fontSize = `${fontSize.value}px`
        }
    })
}

function create(params) {
    let form = document.createElement('form')
    let textArea = document.createElement('textarea')
    let btn = document.createElement('button')

    form.className = 'gossip'
    textArea.placeholder = 'Got a gossip to share?'
    btn.textContent = 'Share gossip!'
    form.appendChild(textArea)
    form.appendChild(btn)
    document.body.appendChild(form)

    gossips.forEach(gossip => {
        newGossip(gossip, false)
    })

    let rangesDiv = document.createElement('div')
    rangesDiv.className = 'ranges'

    let ids = ['width', 'fontSize', 'background']
    let minAndMax = [[200, 800], [20, 40], [20, 75]]
    let defaultValues = [437, 25, 33]

    for (let i = 0; i < 3; i++) {
        let range = document.createElement('input')
        range.className = 'range'
        range.setAttribute('type', 'range')
        range.id = ids[i]
        range.min = minAndMax[i][0]
        range.max = minAndMax[i][1]
        range.value = defaultValues[i]
        rangesDiv.appendChild(range)
    }
    document.body.appendChild(rangesDiv)
}

function newGossip(gossip, toFront) {
    let newDiv = document.createElement('div')
    newDiv.className = 'gossip'
    newDiv.textContent = gossip
    if (toFront) {
        document.querySelector('.gossip').after(newDiv)
    } else {
        document.body.appendChild(newDiv)
    }
}