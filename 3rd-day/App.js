const box = document.getElementById('time-div')
const timeDisplay = document.getElementById('clock')
const button = document.getElementById('formaButton');

let time;

let formatToggle = true;

function currentTime(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let getHours = date.getHours();
    const getMinutes = date.getMinutes()
    const getDay = daysOfWeek[date.getDay()];
    const getDate = date.getDate()
    const getMonth = months[date.getMonth()]

    if (formatToggle) {
        return `${getHours} : ${getMinutes}  ${getDay} ${getDate} ${getMonth}`
    } else {

        if (getHours === 0) {
            getHours = 12
        } else if (getHours > 12) {
            getHours -= 12
        }
        return `${getHours} : ${getMinutes}  ${getDay} ${getDate} ${getMonth}`
    }
}


function updateElement() {
    let date = new Date()
    timeDisplay.textContent = currentTime(date)
}

updateElement()

button.addEventListener('click', (e) => {
    formatToggle = !formatToggle;
    updateElement();
})

