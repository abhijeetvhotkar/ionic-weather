import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map'
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {


  // @TODO Remove before committing
  // Your api key from openweathermap.com
  // apiKey = 'e7539901fd62cd5c1a8aa11a9b224af8';
  apiKey = '289a66256af34082b9f220043181907';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.apixu.com/v1/current.json?key=';
  }

  getWeather(city, state){
    return this.http.get(this.url+this.apiKey+'&q='+city)
      .map(res => res);
  }

}
