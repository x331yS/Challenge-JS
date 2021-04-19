function firstDayWeek(week, year) {
    let a = new Date(year + '-01-01')
    if (week !== 1) {
        a.setDate(a.getDate() + ((week-1) * 7) - a.getDay() +1)
    }
    return a.toISOString().slice(0,10).split('-').reverse().join('-')
}