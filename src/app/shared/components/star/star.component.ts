import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

@Input()  rate=5;
rating:number=0;
  constructor() {
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.rating =(this.rate)*(75/5)
  }
  
  
  ngOnInit(): void {
  }

}
