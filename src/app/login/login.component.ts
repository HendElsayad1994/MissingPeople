import { Component, OnInit } from '@angular/core';
import { ParentsService, Iparent } from "app/login/parents.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  parent:Iparent[]=[];

  constructor(private LS:ParentsService){}

 
 
loginsearch(n,p){
      //call service
      
   this.LS.getparent(n,p);
       //this.parent.push(res.json());
   

}
}
