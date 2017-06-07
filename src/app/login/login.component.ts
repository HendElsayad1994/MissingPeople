import { Component, OnInit } from '@angular/core';
import { ParentsService, Iparent } from "app/login/parents.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  parent:Iparent[]=[];
  aparent:Iparent ;
   msg:string="";


  constructor(private LS:ParentsService){}

 
loginsearch(n,p){
      //call service
      console.log(n,p);
   this.LS.getparent().subscribe(res=>{
    
     this.parent=res;
     console.log(parent);
     this.aparent=this.parent.find(o=>o.Email==n && o.Password==p);






    // console.log(this.parent);
     /*for(var i = 0; i < parent.length ; i++){
        if(parent[i].Email == n && parent[i].password == p) {
         this.aparent=parent[i];
console.log(this.aparent);
        }
        
      else {
        this.msg="Incorrect data";
      }

     }*/
     
     });


}

 
}
