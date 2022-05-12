import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCitiesComponent } from './city/list-cities/list-cities.component';
import { AboutComponent } from './core/about/about.component';
import { ConnectusComponent } from './core/connectus/connectus.component';
import { HomeComponent } from './core/home/home.component';
import { AddSchoolComponent } from './school/add-school/add-school.component';
import { ListSchoolsComponent } from './school/list-schools/list-schools.component';
import { ShowSchoolComponent } from './school/show-school/show-school.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"connectus",component:ConnectusComponent},
  {path:"cities",component:ListCitiesComponent},
  {path:"",component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
