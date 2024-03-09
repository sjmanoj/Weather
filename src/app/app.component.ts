import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public weatherError: string = ''
  public temparature: string = ''
  public humidty: string = ''
  public pressure: string = ''
  public feelsLike: string = ''
  public cityPresent: boolean = false

  constructor(private weatherService: WeatherService){}

  getWeather(cityName: string){
    this.weatherService.getWeather(cityName).subscribe((res:any)=>{
      console.log(res);
      if (res && res.main){
        this.cityPresent = true
        let temp = (res.main.temp - 273.15).toFixed(2)
        let feelsLikeTemp = (res.main.feels_like - 273.15).toFixed(2)
        this.temparature = `${temp} ° Celsius`
        this.feelsLike = `${feelsLikeTemp} ° Celsius`
        this.humidty = `${res.main.humidity} g/kg`
        this.pressure = `${res.main.pressure} Pa`
      }  
    }, (err)=>{
      if(err){
        this.cityPresent = false
        this.weatherError = "Please Enter A Valid City Name"
      }
    })
    
  }
}
