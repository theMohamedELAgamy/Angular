import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,SharedModule,ReactiveFormsModule,CalendarModule,FormsModule,RatingModule
  ]
  ,exports:[ProductComponent]
})
export class ProductModule { }
