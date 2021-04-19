function addWeek(date) {
    let weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    let first = new Date('0001-01-01') // Put this date because timeout sinon
    let weekDayNum = date.getDay()
    let week = Math.ceil(((date - first + 1) / 86400000) / 7); // 86400000 seconds = 1 day
    if (week % 2 !== 0) {
        return weekDays[weekDayNum]
    } else {
        return 'second' + weekDays[weekDayNum]
    }
}

function timeTravel({ date, hour, minute, second }) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    return new Date(year, month, day, hour, minute, second)
}