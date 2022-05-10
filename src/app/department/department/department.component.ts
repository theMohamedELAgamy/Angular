import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public dept:Department=new Department(0,'','');
  public showDep:Department=new Department(0,'','');
  public editTool=false
  public editDep:Department=new Department(0,'','');


  deps:Department[]=[
    new Department(10,'it-iti','Alexandria'),
    new Department(11,'hr-hrr','cairo'),
    new Department(12,'pr-prr','helwan'),
    new Department(13,'mn-mnn','aswan')
  ]
  Add(){
    this.deps.push(new Department(this.dept.id,this.dept.depName,this.dept.location))
    this.dept.id=0;
    this.dept.depName='';
    this.dept.location='';
    

  }
  deleteStudent(depId:number){
    for(let i=0;i<this.deps.length;i++){
      if(depId==this.deps[i].id){
        this.deps.splice(i, 1);
        break
      }
      }

  }
  show(stuId:number){
    for(let i=0;i<this.deps.length;i++){
      if(stuId==this.deps[i].id){
        this.showDep=this.deps[i]
        break
      }
    }


  }
  editStudent(stuId:number){
    this.editTool=true;
    for(let i=0;i<this.deps.length;i++){
      if(stuId==this.deps[i].id){
        this.editDep=this.deps[i]
        break
      }
}
  
}
save(){
  for(let i=0;i<this.deps.length;i++){
    if(this.editDep.id==this.deps[i].id){
      this.deps[i]=this.editDep
      break
    }

    }
    this.editTool=false;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
