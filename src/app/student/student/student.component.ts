import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public stu:Student=new Student(0,'',0,0);
  public showStu:Student=new Student(0,'',0,0);
  editTool=false
  public editStu:Student=new Student(0,'',0,0);
  students:Student[]=[
    new Student(1,'mohamed',23,1),
    new Student(2,'ahmed',23,1),
    new Student(3,'ali',23,1),
    new Student(4,'yasser',23,1)
  ]
  Add(){
    this.students.push(new Student(this.stu.id,this.stu.name,this.stu.age,this.stu.depNo))
    this.stu.id=0;
    this.stu.name='';
    this.stu.age=0;
    this.stu.depNo=0;

  }
  deleteStudent(stuId:number){
    for(let i=0;i<this.students.length;i++){
      if(stuId==this.students[i].id){
        this.students.splice(i, 1);
        break
      }
      }

  }
  editStudent(stuId:number){
      this.editTool=true;
      for(let i=0;i<this.students.length;i++){
        if(stuId==this.students[i].id){
          this.editStu=this.students[i]
          break
        }
  }
    
  }
  save(){
    for(let i=0;i<this.students.length;i++){
      if(this.editStu.id==this.students[i].id){
        this.students[i]=this.editStu
        break
      }

      }
      this.editTool=false;

    }
  
  show(stuId:number){
    for(let i=0;i<this.students.length;i++){
      if(stuId==this.students[i].id){
        this.showStu=this.students[i]
        break
      }
    }


  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
