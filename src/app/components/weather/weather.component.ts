import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  @Input() weathers: Weather[]
  constructor() {
    this.weathers = []
  }
}
