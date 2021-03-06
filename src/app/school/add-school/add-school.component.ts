import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/_models/school';
import { SchoolService } from 'src/app/school.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {
  newSchool:School=new School(0,'','',0)
  
  constructor(public schoolService:SchoolService,public router:Router) { }

  ngOnInit(): void {
  }
  add(){
    this.schoolService.addSchool(this.newSchool)
    this.router.navigate(['/schools'])
  }

}
