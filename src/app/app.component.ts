import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightsService } from './services/flights.service';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Flight } from './models/flight.model';
import { Weather } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, WeatherComponent, CardComponent, HttpClientModule],
  providers: [FlightsService, WeatherService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front_get_most_economic_flights';
  
  flights: Flight[]
  weathers: Weather[]

  placeFrom: string
  placeTo: string
  dateFrom: string
  dateTo: string
  submitted: boolean = false
  constructor ( private flightService: FlightsService, private weatherService: WeatherService ){
    this.placeFrom = ""
    this.placeTo = ""
    this.dateFrom = ""
    this.dateTo = ""
    this.flights = []
    this.weathers = []
  }
  
  ngOnInit(): void {}

  getFlights(values: any) {
    this.flightService.getFlights(values).subscribe(jsonData => {
      this.submitted = false
      console.log(jsonData)
      this.flights = jsonData.flightsInfo.map((flight: any) => this.flightService.generateClass(flight))
      this.weathers = jsonData.weatherNextDays.map((weather: any) => this.weatherService.generateClass(weather))
    })
  }

  onSubmit() {
    this.submitted = true
    let values = {
      "placeFrom": this.placeFrom,
      "placeTo": this.placeTo,
      "dateFrom": new DatePipe("en-ES").transform(this.dateFrom, "dd/MM/YYYY"),
      "dateTo": new DatePipe("en-ES").transform(this.dateTo, "dd/MM/YYYY")
    }
    console.log(values)
    this.getFlights(values)
  }

}
