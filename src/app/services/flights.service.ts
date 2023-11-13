import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor( private http:HttpClient) { 

  }
  getFlights(values:any):Observable<any> {
    const {placeFrom, placeTo, dateFrom, dateTo} = values
    return this.http.get("http://localhost:3000/flights/economic",{
      params: {
        placeFrom,
        placeTo,
        dateFrom,
        dateTo
      }
    })
  }
  generateClass(json:any):Flight {
    const {airline, placeFrom, placeTo, flightDuration, price} = json
    return new Flight(airline, placeFrom, placeTo, flightDuration, price)
  }
  
}
