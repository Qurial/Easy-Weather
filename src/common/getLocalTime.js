export const getLocalTime = (timezone, intDate) => {
    let timezoneDate = new Date(intDate * 1000)
    let dateTimezoneOffset = timezoneDate.getTimezoneOffset() * 60000
    return new Date(timezoneDate.getTime() + (dateTimezoneOffset * 2) + (timezone * 1000))
}
