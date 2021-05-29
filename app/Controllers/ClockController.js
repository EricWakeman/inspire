

function drawClock() {
    let clockElem = document.getElementById('clock')
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let template = ''
    let greeting = ''
    if (h >= 20 || h <= 7) {
        greeting = `<span class="greeting"> Good Night</span>`
    }
    else if (h >= 8 && h <= 11) {
        greeting = `<span class="greeting"> Good Morning</span>`
    }
    else if (h >= 12 && h <= 17) {
        greeting = `<span class="greeting"> Good Afternoon</span>`
    }
    else {
        greeting = `<span class="greeting"> Good Evening</span>`
    }




    if (h > 12) {
        h -= 12
    }



    if (h >= 10 && m >= 10) {
        template = `
        <span class="clock">${h}:${m}</span>
        `
    }
    else if (h < 10 && m < 10) {
        template = `
        <span class="clock">0${h}:0${m}</span>
        `
    }
    else if (h < 10 && m >= 10) {
        template = `
        <span class="clock">0${h}:${m}</span>
        `
    }
    else {
        template = `
        <span class="clock">${h}:0${m}</span>
        `
    }


    template += greeting

    clockElem.innerHTML = template


}


export class ClockController {

    constructor() {
        drawClock()
        setInterval(drawClock, 60000)
    }
}