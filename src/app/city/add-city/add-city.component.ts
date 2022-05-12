import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/city.service';
import { City } from 'src/app/_models/city';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  newCity:City=new City(0,'',0,0)

  constructor(public cityService:CityService,public router:Router) { }
  add(){
    this.cityService.addCity(this.newCity)
    this.router.navigate(['/cities'])
  }


  ngOnInit(): void {
  }

}
