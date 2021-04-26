export { pimp }

function pimp() {
    let button = document.getElementsByClassName('button')[0]

    let toAddOrDelete = styles[button.classList.length - 1]

    if (button.classList[button.classList.length - 1] != 'unpimp') {
        button.classList.add(toAddOrDelete)
    }

    if (button.classList[button.classList.length - 1] === styles[styles.length - 1]) {
        button.classList.add('unpimp')
        return
    }

    if (button.classList[button.classList.length - 1] == 'unpimp') {
        button.classList.remove(button.classList[button.classList.length - 2])
    }

    if (button.classList.length === 2 && button.classList[1] == 'unpimp') {
        button.classList.remove('unpimp')
    }
}