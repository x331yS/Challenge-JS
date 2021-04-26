export {build,repair,destroy}

const build = (num) => {
    let aDude = 1
    let bDude = 2
    let ID = setInterval(function(){
        let elem = document.createElement('div')
        elem.id = 'brick-'+aDude
        document.body.appendChild(elem)
        if (aDude==bDude) {
            document.getElementById(elem.id).setAttribute('data-foundation', "true");
            bDude += 3
        } else if (aDude == num) {
            clearInterval(ID)
        }
        aDude++
    },100)
}

const repair = (...arr) => {
    arr.map((x)=> document.getElementById(x).hasAttribute('data-foundation') ? document.getElementById(x).setAttribute('data-repaired', "in progress") : document.getElementById(x).setAttribute('data-repaired', "true"))
}

const destroy = () => {
    document.querySelectorAll('div')[document.querySelectorAll('div').length-1].remove()
}