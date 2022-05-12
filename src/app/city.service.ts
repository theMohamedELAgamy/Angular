import { Injectable } from '@angular/core';
import { City } from './_models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities:City[]=[
    new City(1,'Alexandria',10000000,80),
    new City(2,'cairo',8000000,70),
    new City(3,'helwan',70000000,80),
    new City(4,'Aswan',400000,9000)


    
  ]

  constructor() { }
  listCities(){
    return this.cities
  }
  addCity(city:City){
    this.cities.push(city)
  }
  getSchool(id:number){
    for(let i=0;i<this.cities.length;i++){
      if(this.cities[i].id==id){
        return this.cities[i]
      }
    }
    
    return new City(0,'',0,0);
  }
  deleteCity(id:number){
    for(let i=0;i<this.cities.length;i++){
      if(this.cities[i].id==id){
        this.cities.splice(i, 1);
        break
      }
    }

  }
  saveSchool(school:City |null){
    for(let i=0;i<this.cities.length;i++){
      if(school ?.id==this.cities[i].id){
        this.cities[i]=school
        break
      }
  
      }
  }
}
