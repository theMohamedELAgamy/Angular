import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCityComponent } from './add-city/add-city.component';
import { ListCitiesComponent } from './list-cities/list-cities.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShowCityComponent } from './show-city/show-city.component';

const routes :Routes=[
  {path:"cities",component:ListCitiesComponent},
  {path:"cities/add",component:AddCityComponent},
  {path:"cities/:id",component:ShowCityComponent}
]

@NgModule({
  declarations: [
    AddCityComponent,
    ListCitiesComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,AppRoutingModule,RouterModule.forChild(routes)
  ],
  exports:[  AddCityComponent,
    ListCitiesComponent]
})
export class CityModule { }
