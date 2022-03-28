const alarmSubmit = document.getElementById('alarmSubmit')

// Function that invokes the alaram ring when it is time
const ring = () => {
    var audio = new Audio('alarm_clock_old.mp3')
    console.log("Ringing ALarm")
    audio.play()
}

// Function for setting an alarm 
const setAlarm = (e) => {
    e.preventDefault()
    const alarm = document.getElementById('alarm')
    console.log(alarm.value)
    alarmDate = new Date(alarm.value)
    console.log(alarmDate)
    now = new Date()

    let timeToAlarm = alarmDate - now

    console.log('alarm will ring after', timeToAlarm)

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            ring()
        }, timeToAlarm)
    }

    else {
        window.alert("You have entered a wrong Date & Time !! ")
        return
    }
}


alarmSubmit.addEventListener('click', setAlarm)