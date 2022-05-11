import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/city.service';
import { City } from 'src/app/_models/city';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  newCity:City=new City(0,'',0,0)

  constructor(public cityService:CityService) { }
  add(){
    this.cityService.addCity(this.newCity)
  }

  ngOnInit(): void {
  }

}
