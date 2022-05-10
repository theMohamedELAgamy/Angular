import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { StarComponent } from './components/star/star.component';


@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[StarComponent]
})
export class SharedModule { }
