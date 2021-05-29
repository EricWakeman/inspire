import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";



export class WeatherController {

    constructor() {
        ProxyState.on('weather', this.drawWeatherF)
        weatherService.getWeather()
    }
    drawWeatherF() {
        let weatherElem = document.getElementById('weatherDisplay')
        let weather = ProxyState.weather.temp
        let i = ProxyState.weather.icon
        let currentTemp = (weather - 273.15) * 9 / 5 + 32

        weatherElem.innerHTML = /*html*/ `
                    <div class="col-12">
                        <span>${currentTemp.toFixed(1)} °F </span >
                        <i>Boise </i >
                        <img src="http://openweathermap.org/img/wn/${i}@2x.png" alt="Current Skies" height="75" width="75">
                    </div>
    
        `
    }
    drawWeatherC() {
        let weatherElem = document.getElementById('weatherDisplay')
        let weather = ProxyState.weather.temp
        let i = ProxyState.weather.icon
        let currentTemp = weather - 273.15

        weatherElem.innerHTML = /*html*/ `
                    <div class="col-12">
                        <span>${currentTemp.toFixed(1)} °C </span >
                        <i>Boise </i >
                        <img src="http://openweathermap.org/img/wn/${i}@2x.png" alt="Current Skies" height="75" width="75">
                    </div>
    
        `
    }

    drawWeatherK() {
        let weatherElem = document.getElementById('weatherDisplay')
        let weather = ProxyState.weather.temp
        let i = ProxyState.weather.icon

        weatherElem.innerHTML = /*html*/ `
                    <div class="col-12">
                        <span>${weather.toFixed(1)} °K </span >
                        <i>Boise </i >
                        <img src="http://openweathermap.org/img/wn/${i}@2x.png" alt="Current Skies" height="75" width="75">
                    </div>
    
        `
    }

}