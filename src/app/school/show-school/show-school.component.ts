import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/school.service';
import { School } from 'src/app/_models/school';

@Component({
  selector: 'app-show-school',
  templateUrl: './show-school.component.html',
  styleUrls: ['./show-school.component.css']
})
export class ShowSchoolComponent implements OnInit {
  public showSchool:School |null=new School(0,'','',0)
  constructor(public schoolService:SchoolService,public ac:ActivatedRoute) { }
  public id=0
  ngOnInit(): void {
   this.id= this.ac.snapshot.params['id']
   this.showSchool=this.schoolService.getSchool(this.id)
  }
 

}
