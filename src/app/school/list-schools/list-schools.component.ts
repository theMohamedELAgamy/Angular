import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/school.service';
import { School } from 'src/app/_models/school';

@Component({
  selector: 'app-list-schools',
  templateUrl: './list-schools.component.html',
  styleUrls: ['./list-schools.component.css']
})
export class ListSchoolsComponent implements OnInit {
  public editSchool:School |null=new School(0,'','',0);
  public editedSchool :School |null =this.editSchool
  public editTool=false
  public schools:School[]=[]
  constructor(public schoolService:SchoolService,public router:Router) {

  }
  showAdd(){
    this.router.navigate(['schools/add'])
  }
  show(id:number){
    this.router.navigate(['schools/',id])
  }
  deleteSch(id:number){
   this.schoolService.deleteSchool(id)

  }
  editSch(id:number){
    this.editSchool=this.schoolService.getSchool(id)
    this.editTool=true;
  }
  save(){
      this.schoolService.saveSchool(this.editedSchool)
      console.log(this.editedSchool)
      this.editTool=false;
  
    }
  ngOnInit(): void {
    this.schools=this.schoolService.gatAllSchools()
  }

}
