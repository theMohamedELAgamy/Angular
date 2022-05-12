import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/city.service';
import { City } from 'src/app/_models/city';
@Component({
  selector: 'app-show-city',
  templateUrl: './show-city.component.html',
  styleUrls: ['./show-city.component.css']
})
export class ShowCityComponent implements OnInit {
  public showCity:City |null=new City(0,'',0,0)
  public id=0
  constructor(public cityService:CityService,public ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.ac.snapshot.params['id']
    this.showCity=this.cityService.getSchool(this.id)
  }

}
