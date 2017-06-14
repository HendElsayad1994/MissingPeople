import { Component, OnInit } from '@angular/core';
import { ParentsService } from "app/login/parents.service";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  parents: Array<any> =[];
  childs: Array<any> =[];
  selectedparent:any;
  parentId:any;
   msg:string="";
   img:string="assets/baby.png"


  constructor(private LS:ParentsService, private router:Router){}

 
loginsearch(n,p){
      
      //call service
     // console.log(n,p);
   this.LS.getparent().subscribe(res=>{
    
     this.parents=res;
    // console.log(this.parents);

    this.selectedparent=this.parents.find(o=>o.email==n && o.password==p);
    // console.log(this.selectedparent);

        if (this.selectedparent != undefined) {
          this.parentId=this.selectedparent.id;
          this.childs=this.selectedparent.childs;
         // console.log(this.childs);

         console.log(this.parentId);
         this.router.navigate(['/Login',this.parentId]);
         // this.msg="Done";
          
    }
    else {
      this.msg = "Incorrect data";
      
    }
      
     });


}

 
}
