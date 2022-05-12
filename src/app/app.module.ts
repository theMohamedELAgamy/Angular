import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PowerToXPipe } from './power-to-x.pipe';
import {AccordionModule} from 'primeng/accordion';   
import {MenuItem} from 'primeng/api'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductModule } from './product/product.module';
import { SchoolModule } from './school/school.module';
import { CityModule } from './city/city.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PowerToXPipe,
  
    
  ],
  exports:[PowerToXPipe],
  imports: [
    BrowserModule,
    CoreModule,DepartmentModule,StudentModule,SchoolModule,CityModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,AccordionModule,ProductModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
