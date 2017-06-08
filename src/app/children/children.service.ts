import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
export interface IChildren {
  id?:number;
  Lname:string;
  Parent_Id:number;
  Fname:string;
  Email:string;
  Password:number;
  ImageUrl:string;
  Telephone:number;
  Address_Street:string;
  Address_City:string;
  Address_Country:string;
  UserRole:number;
  viewFlag:boolean;

}
export interface Ichildinfo{
  childId:number;
  location_Key:number;
  from:string;
  to:string;
  sat:boolean;
  sun:boolean;
  mon:boolean;
  tues:boolean;
  thurs:boolean;
  isWed:boolean;
  fri:boolean;
  name:string;

}


@Injectable()
export class ChildrenService {
  constructor(private _http:Http){ }

 getchildren(){
  return this._http.get('http://localhost:28529/api/Child');
}
  getchildrenDetails(id:number)
  {
    return this._http.get('http://localhost:28529/api/Child/'+id);
    
  }
}



