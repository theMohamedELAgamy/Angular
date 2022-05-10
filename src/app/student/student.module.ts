import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { ArraySplicePipe } from './array-splice.pipe';


@NgModule({
  declarations: [
    StudentComponent,
    ArraySplicePipe  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[StudentComponent]
})
export class StudentModule { }
