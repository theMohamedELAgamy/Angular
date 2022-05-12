import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSchoolsComponent } from './list-schools/list-schools.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { FormsModule } from '@angular/forms';
import { ShowSchoolComponent } from './show-school/show-school.component';
import { DeleteSchoolComponent } from './delete-school/delete-school.component';
import { AppRoutingModule } from '../app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';

const routes :Routes=[
  {path:"schools",component:ListSchoolsComponent},
  {path:"schools/add",component:AddSchoolComponent},
  {path:"schools/:id",component:ShowSchoolComponent}
]


@NgModule({
  declarations: [
    ListSchoolsComponent,
    AddSchoolComponent,
    ShowSchoolComponent,
    DeleteSchoolComponent
  ],
  imports: [
    CommonModule,FormsModule,AppRoutingModule,RouterModule.forChild(routes)
  ],
  exports:[    ListSchoolsComponent,
    AddSchoolComponent]
})
export class SchoolModule { }
