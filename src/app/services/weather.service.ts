import { Injectable } from '@angular/core';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() {
    
   }
  generateClass(json:any):Weather {
    const {dt} = json
    const description = json.weather[0].main
    const temp = json.main.temp
    const humidity = json.main.humidity
    return new Weather(dt, description, temp, humidity)
  }
}
