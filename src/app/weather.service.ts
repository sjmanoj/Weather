import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public url = 'https://api.openweathermap.org/data/2.5/weather?q='
  public apiKey = '<Enter Your API Key Here>'

  constructor(private http: HttpClient) { }

  getWeather(cityName: string){
    return this.http.get(`${this.url}${cityName}&appid=${this.apiKey}`)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error)
  }

}
