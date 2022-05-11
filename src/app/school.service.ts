import { Injectable } from '@angular/core';
import { School } from './_models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private schools:School[]=[
    new School(1,'tarek bn zyad','Alexandria',1000),
    new School(2,'school2','cairo',2000),
    new School(3,'school3','Alexandria',4000),
    new School(4,'school4','aswan',9000),

  ]
  constructor() { }
  gatAllSchools(){
    return this.schools
  }

  addSchool(school:School){
    this.schools.push(school)
  }
  getSchool(id:number){
    for(let i=0;i<this.schools.length;i++){
      if(this.schools[i].id==id){
        return this.schools[i]
      }
    }
    return null

  }


}
