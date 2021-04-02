function dogYears(planet, seconds) {
    const calcul = 31557600
    const ageDoge = 7
    const digits = 2
    switch (planet) {
        case 'earth':
            return Number(((seconds / (calcul)) * ageDoge).toFixed(digits))
        case 'mercury':
            return Number(((seconds / (0.2408467 * calcul)) * ageDoge).toFixed(digits))
        case 'venus':
            return Number(((seconds / (0.61519726 * calcul)) * ageDoge).toFixed(digits))
        case 'mars':
            return Number(((seconds / (1.8808158 * calcul)) * ageDoge).toFixed(digits))
        case 'jupiter':
            return Number(((seconds / (11.862615 * calcul)) * ageDoge).toFixed(digits))
        case 'saturn':
            return Number(((seconds / (29.447498 * calcul)) * ageDoge).toFixed(digits))
        case 'uranus':
            return Number(((seconds / (84.016846 * calcul)) * ageDoge).toFixed(digits))
        case 'neptune':
            return Number(((seconds / (164.79132 * calcul)) * ageDoge).toFixed(digits))
    }
}