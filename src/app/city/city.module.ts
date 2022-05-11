import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCityComponent } from './add-city/add-city.component';
import { ListCitiesComponent } from './list-cities/list-cities.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCityComponent,
    ListCitiesComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[  AddCityComponent,
    ListCitiesComponent]
})
export class CityModule { }
