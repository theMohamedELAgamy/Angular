import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public showPro:Product=new Product(0,'','',new Date(),0,0);
  public editPro:Product=new Product(0,'','',new Date(),0,0);
  public Pro:Product=new Product(0,'','',new Date(),0,0);


  editTool=false;
  products:Product[]=[
    new Product(1,'watch','gdn011', new Date("October 13, 2015"),100,5),
    new Product(2,'ball','gdn012', new Date("June 13, 2016 "),100,3.5),
    new Product(3,'Apple','gdn013', new Date("October 13, 2014 "),100,2),
    new Product(4,'orange','gdn014', new Date("July 13, 2017 "),100,1.75)
  ]
  Add(){
    this.products.push(new Product(this.Pro.id,this.Pro.ProductName,Math.random().toString().substr(2, 8),this.Pro.date,this.Pro.price,this.Pro.rating))
    this.Pro.id=0;
    this.Pro.ProductName='';
    this.Pro.code='';
    this.Pro.price=0;
    this.Pro.date=new Date();

  }
  show(stuId:number){
    for(let i=0;i<this.products.length;i++){
      if(stuId==this.products[i].id){
        this.showPro=this.products[i]
        break
      }
    }


  }
 
  deleteProduct(proId:number){
    for(let i=0;i<this.products.length;i++){
      if(proId==this.products[i].id){
        this.products.splice(i, 1);
        break
      }
      }

  }
  editProduct(stuId:number){
    this.editTool=true;
    for(let i=0;i<this.products.length;i++){
      if(stuId==this.products[i].id){
        this.editPro=this.products[i]
        break
      }
}
  
}
save(){
  for(let i=0;i<this.products.length;i++){
    if(this.editPro.id==this.products[i].id){
      this.products[i]=this.editPro
      break
    }

    }
    this.editTool=false;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
