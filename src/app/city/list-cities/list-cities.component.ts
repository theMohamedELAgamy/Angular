import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/city.service';
import { Router } from '@angular/router';

import { City } from 'src/app/_models/city';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.css']
})
export class ListCitiesComponent implements OnInit {
  cities:City[]=[]
  public editedCity :City =new City(0,'',0,0);
  public editTool=false
  constructor(public cityService:CityService,public router:Router) { }

  ngOnInit(): void {
    this.cities=this.cityService.listCities()

  }
  showAdd(){
    this.router.navigate(['cities/add'])
  }
  show(id:number){
    this.router.navigate(['cities/',id])
  }
  delete(id:number){
    this.cityService.deleteCity(id)
 
   }
   editCit(id:number){
    this.editedCity=this.cityService.getSchool(id)
    this.editTool=true;
  }
  save(){
      this.cityService.saveSchool(this.editedCity)
      console.log(this.editedCity)
      this.editTool=false;
  
    }

}
