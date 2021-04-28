import { places } from './where-do-we-go.data.js'

export { explore }

function explore() {
    let sortedPlaces = sort(places)
    document.body.style.overflowX = 'hidden';

    createSections(sortedPlaces)
    createDirection()

    let sections = document.querySelectorAll('section');
    let direction = document.querySelector('.direction')

    const makeTag = (i) => {
        const tag = document.createElement('a');
        tag.className = 'location';
        tag.style.color = sortedPlaces[i].color;
        tag.textContent = `${sortedPlaces[i].name}\n${sortedPlaces[i].coordinates}`;
        tag.setAttribute('href', `https://google.com/maps/place/${sortedPlaces[i].coordinates}`);
        tag.setAttribute('target', '_blank');
        sections[i].append(tag);
    }

    let prev = scrollY;
    let prevIndex = Math.round(scrollY / window.innerHeight);
    makeTag(prevIndex);

    document.addEventListener('scroll', (e) => {
        const index = Math.round(scrollY / window.innerHeight);
        if (prevIndex != index) {
            sections[prevIndex].childNodes[0].remove();
            console.log(sections[index].childNodes, prevIndex, index)
            makeTag(index);
        }
        prevIndex = index;

        if (prev > scrollY) direction.textContent = 'N';
        else if (prev < scrollY) direction.textContent = 'S';
        prev = scrollY;
    });
}

function sort(arr) {
    let array = [...arr]
    array.sort((a, b) => {
        if (getNorth(a) > getNorth(b)) {
            return -1
        }
        if (getNorth(a) < getNorth(b)) {
            return 1
        }
        return 0
    })
    return array
}

function getNorth(obj) {
    let north = obj.coordinates.split(' ')[0].replace(/[°'."]/g, '')
    if (north.includes('N')) {
        north = Number(north.slice(0, 5))
    } else {
        north = Number(north.slice(0, 5)) * -1
    }
    return north
}

function createSections(sortedPlaces) {
    sortedPlaces.forEach((place) => {
        let section = document.createElement('section');
        section.style.background = `url(./images/${place.name.toLowerCase().split(',')[0].replace(/ /g, '-')}.jpg)`;
        section.style.backgroundRepeat = 'no-repeat';
        section.style.backgroundSize = 'cover';
        section.style.backgroundPosition = 'center';
        document.body.append(section);
    });
}

function createDirection() {
    let direction = document.createElement('div')
    direction.className = 'direction';
    direction.textContent = 'N';
    document.body.append(direction);
}