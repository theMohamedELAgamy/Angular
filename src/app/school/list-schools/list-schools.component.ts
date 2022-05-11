import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/school.service';
import { School } from 'src/app/_models/school';

@Component({
  selector: 'app-list-schools',
  templateUrl: './list-schools.component.html',
  styleUrls: ['./list-schools.component.css']
})
export class ListSchoolsComponent implements OnInit {

  public schools:School[]=[]
  constructor(public schoolService:SchoolService) {

  }

  ngOnInit(): void {
    this.schools=this.schoolService.gatAllSchools()
  }

}
