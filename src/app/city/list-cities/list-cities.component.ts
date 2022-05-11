import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/city.service';
import { City } from 'src/app/_models/city';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.css']
})
export class ListCitiesComponent implements OnInit {
  cities:City[]=[]
  constructor(public cityService:CityService) { }

  ngOnInit(): void {
    this.cities=this.cityService.listCities()

  }

}
