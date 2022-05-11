import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSchoolsComponent } from './list-schools/list-schools.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListSchoolsComponent,
    AddSchoolComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[    ListSchoolsComponent,
    AddSchoolComponent]
})
export class SchoolModule { }
