// Date and time
const currentTime = new Date()

const time = () => {
       const now = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Africa/Nairobi',
        
    }).format(currentTime)
    return now
}
 
const date = () => {
       const today = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(currentTime)
    return today
}

module.exports = {
    time,
    date
}
