
export class Weather {

    constructor(data) {
        this.temp = data.main.temp
        this.icon = data.weather[0].icon
    }
}