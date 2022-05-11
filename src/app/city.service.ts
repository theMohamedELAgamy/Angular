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
}
