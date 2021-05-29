import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./SandboxAPI.js";

let url = 'weather'
class WeatherService {
    async getWeather() {
        let res = await sandboxApi.get(url)
        console.log(res.data)
        ProxyState.weather = new Weather(res.data)
        console.log(ProxyState.weather)
    }

}

export const weatherService = new WeatherService()